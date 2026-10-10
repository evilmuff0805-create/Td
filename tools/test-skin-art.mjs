import assert from 'node:assert/strict';
import * as T from 'three';
import { SKINS } from '../src/data/skins.js';
import { HERO_POSE_ART } from '../src/3d/hero-pose-data.js';
import { SKIN_POSE_ART } from '../src/3d/skin-pose-data.js';
import { heroLookRoster,heroLooksKey } from '../src/3d/hero-look-roster.js';
import { FixedBattleArt } from '../src/3d/fixed-art.js';
import { WinterWorld } from '../src/3d/world.js';
import { Renderer3D } from '../src/3d/renderer.js';
import { CrowdRenderer } from '../src/3d/crowd.js';
import { SEASONS } from '../src/3d/seasons.js';
import { newBattleGame,STAGE_ID } from '../src/3d/scenario.js';
import { SnapshotEncoder,emptyView,applySnapshot } from '../src/sim/snapshot.js';
import { defaultProfile,playerSpec } from '../src/meta/profile.js';
import { Session } from '../src/game/session.js';
import { GameUI } from '../src/ui/hud.js';
let passed=0;
async function test(name,fn){await fn();passed++;console.log('  ✔ '+name);}
function mockAtlas(layout){return {poseAtlas:true,canvas:{width:layout.width,height:layout.height},frames:layout.frames,isolated:layout.frames.map(frame=>({canvas:{width:frame.width+24,height:frame.height+24},frame:{...frame,left:12,top:12}}))};}
function context(){
  const camera=new T.OrthographicCamera(-8,8,6,-6,.1,100);camera.position.set(17,26,26);camera.lookAt(0,0,0);camera.updateMatrixWorld();
  const world=Object.assign(Object.create(WinterWorld.prototype),{camera,theme:{id:'winter',...SEASONS.winter},renderer:{domElement:{dataset:{}}},scene:new T.Scene(),units:new Map(),unitTemplates:new Map(),towers:new Map(),bullets:new Map(),scenery:new Map(),fx:{reset(){}},placement:new T.Group(),marker:new T.Group(),corpses:[],pickables:[],enemyCues:new Map(),range:new T.Group(),batchCrowd:false,projectiles(){},combatScenery(){}});
  world.crowd=new CrowdRenderer(world.scene);
  const art=Object.assign(Object.create(FixedBattleArt.prototype),{world,ready:true,coreLoading:false,combatLoading:false,skinLoading:false,heroLooksKey:'',skinGeneration:0,corePromise:Promise.resolve(),combatPromise:Promise.resolve(),skinPromise:Promise.resolve(),textures:new Map(),materials:new Map(),geometries:new Map(),heroPoses:Object.fromEntries(Object.entries(HERO_POSE_ART).map(([id,layout])=>[id,mockAtlas(layout)])),skinPoses:Object.fromEntries(Object.entries(SKIN_POSE_ART).map(([id,layout])=>[id,mockAtlas(layout)]))});
  art.combatGeneration=0;art.yi=art.heroPoses.yi;art.shadowTexture=new T.DataTexture(new Uint8Array([255,255,255,255]),1,1);art.shadowMaterial=new T.MeshBasicMaterial({map:art.shadowTexture});world.art=art;art.updateLoading();art.refreshPromise();return {world,art};
}
const right=new T.Vector3(1,0,0),up=new T.Vector3(0,1,0);
function yawFor(camera,col){const r=right.clone().applyQuaternion(camera.quaternion),u=up.clone().applyQuaternion(camera.quaternion);r.y=u.y=0;r.normalize();u.normalize();const d=r.multiplyScalar(col<2?1:-1).addScaledVector(u,col===1||col===2?1:-1);return Math.atan2(d.x,d.z);}

await test('상점의 특수 의상 16종이 각 16포즈와 독립 원본·메타데이터를 가진다',()=>{
  assert.deepEqual(Object.keys(SKIN_POSE_ART).sort(),Object.values(SKINS).flat().map(s=>s.id).sort());
  for(const layout of Object.values(SKIN_POSE_ART)){assert.equal(layout.frames.length,16);assert.ok(layout.frames.every(f=>f.referenceHeight>0&&f.anchorY===1));assert.match(layout.path,/fixed\/skins\//);}
});
await test('유효한 장착 의상만 값으로 정렬·중복 제거하고 같은 영웅의 두 의상은 구분한다',()=>{
  const heroes=[{heroId:'yi',skin:'yi_white'},{heroId:'yi',skin:'yi_gold'},{heroId:'yi',skin:'yi_white'},{heroId:'sejong',skin:null},{heroId:'gwon',skin:'yi_gold'},{heroId:'invalid',skin:'invalid'}];
  assert.deepEqual(heroLookRoster(heroes),[{heroId:'yi',skin:'yi_gold'},{heroId:'yi',skin:'yi_white'}]);
  assert.equal(heroLooksKey(heroes),heroLooksKey(heroes.slice().reverse().map(h=>({...h}))));
  assert.equal(heroLooksKey([{heroId:'yi',skin:'invalid'}]),'');
});
await test('실제 영웅 루트의 256개 의상 포즈는 방향·발 기준·본체·그림자·가림을 함께 바꾼다',()=>{
  const {world,art}=context(),visited=new Set();
  for(const [heroId,skins]of Object.entries(SKINS))for(const skin of skins){
    const h=newBattleGame({heroIds:[heroId],skins:{[heroId]:skin.id},support:false}).heroes[0],root=world.unit(h,true),d=root.userData.fixedImage;root.userData.phase=0;
    assert.equal(d.art,art.skinPoses[skin.id]);assert.equal(d.directional,true);assert.equal(d.height,1.85);
    for(let col=0;col<4;col++)for(const [row,moving,attack,time]of [[0,false,0,0],[1,true,0,0],[2,true,0,1/5.5],[3,false,.2,0]]){
      root.rotation.y=yawFor(world.camera,col);art.updateUnit(root,h,moving,attack,time);assert.equal(d.poseIndex,row*4+col);visited.add(skin.id+':'+d.poseIndex);
      assert.equal(d.image.material.map.image,d.art.isolated[d.poseIndex].canvas);assert.equal(d.hint.material.map,d.image.material.map);assert.equal(d.shadow.material.map,d.image.material.map);assert.equal(d.shadow.geometry,d.image.geometry);assert.equal(d.hint.geometry,d.image.geometry);assert.equal(d.image.scale.x,1);
      assert.ok(root.quaternion.clone().multiply(d.image.quaternion).angleTo(world.camera.quaternion)<1e-6);
      const ground=new T.Vector3(0,1,0).applyMatrix4(d.shadow.matrix).applyQuaternion(root.quaternion);assert.ok(Math.abs(ground.y-.042)<1e-6);
      const f=d.art.isolated[d.poseIndex].frame,g=d.image.geometry;g.computeBoundingBox();const b=g.boundingBox,scale=d.height/f.referenceHeight;
      assert.ok(Math.abs((b.max.y-b.min.y)/f.height-scale)<1e-7);assert.ok(Math.abs(b.min.y)<1e-7);assert.ok(Math.abs(b.min.x+f.anchor*f.width*scale)<1e-6);
      const uv=g.attributes.uv;for(let i=0;i<uv.count;i++)assert.ok(uv.getX(i)>0&&uv.getX(i)<1&&uv.getY(i)>0&&uv.getY(i)<1);
    }
    world.disposeCharacter(root);
  }
  assert.equal(visited.size,256);art.dispose();
});
await test('정식 프로필·협동 스냅샷과 자유전투는 의상을 보존하고 능력치·재화를 바꾸지 않는다',()=>{
  for(const [heroId,skins]of Object.entries(SKINS))for(const skin of skins){
    const p=defaultProfile();p.skins.owned.push(skin.id);p.skins.eq[heroId]=skin.id;const before=JSON.stringify(p);
    const spec=playerSpec(p,[heroId],['singijeon'],'의상 검증'),session=new Session({kind:'solo',stageId:'s1',difficulty:'normal',seed:12,specs:[spec]});
    const h=session.state.heroes[0],base=newBattleGame({heroIds:[heroId],support:false}).heroes[0];assert.equal(h.skin,skin.id);
    for(const stat of ['maxHp','atk','range','speed','lv'])assert.equal(h[stat],base[stat],stat);
    const view=emptyView({stageId:'s1',difficulty:'normal'});applySnapshot(view,JSON.parse(JSON.stringify(new SnapshotEncoder().encode(session.state,[]))));
    assert.equal(view.heroes[0].skin,skin.id);assert.equal(JSON.stringify(p),before);session.destroy();
  }
  assert.equal(newBattleGame({stageId:STAGE_ID,heroIds:['yi'],skillIds:['singijeon'],skins:{yi:'yi_white'}}).heroes[0].skin,'yi_white');
  assert.equal(newBattleGame({heroIds:['yi'],skins:{yi:'gwon_hill'}}).heroes[0].skin,null);
});
await test('같은 영웅의 서로 다른 두 의상은 공유 기본 원화나 상대 개인 재질을 바꾸지 않는다',()=>{
  const {world,art}=context(),a=world.unit({id:1,heroId:'yi',skin:'yi_white',owner:0},true),b=world.unit({id:2,heroId:'yi',skin:'yi_gold',owner:1},true);
  const da=a.userData.fixedImage,db=b.userData.fixedImage;assert.notEqual(da.art,db.art);assert.notEqual(da.image.material,db.image.material);
  art.updateUnit(a,{owner:0},false,.2,0);art.updateUnit(b,{owner:1},false,0,0);assert.equal(da.pose,'attack');assert.equal(db.pose,'idle');assert.equal(da.hint.material.color.getHexString(),'7cb4e6');assert.equal(db.hint.material.color.getHexString(),'efaa96');
  let shared=0;db.image.material.map.addEventListener('dispose',()=>shared++);world.disposeCharacter(a);assert.equal(shared,0);world.disposeCharacter(b);art.dispose();assert.equal(shared,1);
});
await test('누락되거나 잘못된 의상은 구형 정적 그림 대신 해당 영웅의 기본 16포즈를 사용한다',()=>{
  const {world,art}=context();art.skinPoses.yi_gold=null;
  for(const skin of ['yi_gold','invalid',null])assert.equal(art.unitArt({heroId:'yi',skin},true,false),art.heroPoses.yi);
  assert.equal(art.unitArt({heroId:'sejong',skin:'yi_gold'},true,false),art.heroPoses.sejong);
  art.dispose();
});

const oldDocument=globalThis.document,oldLoad=T.ImageLoader.prototype.load,pending=[];let readbacks=0;
globalThis.document={createElement:()=>({width:0,height:0,getContext(){return {drawImage(){},getImageData:()=>{readbacks++;return {data:new Uint8Array(this.width*this.height*4)};}};}})};
T.ImageLoader.prototype.load=function(url,onLoad,progress,onError){pending.push({url,onLoad,onError});};
function finish(id,fail=false){const index=pending.findIndex(p=>p.url.includes('/'+id+'-directions-'));assert.ok(index>=0,'Pending '+id);const [p]=pending.splice(index,1);if(fail)p.onError(new Error('expected missing costume'));else p.onLoad({width:64,height:64});}
try{
  await test('의상·코어·병력의 완료 순서 여섯 가지 모두 마지막 그림까지 전투를 기다린다',async()=>{
    for(const order of [[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]]){
      const {art}=context();art.skinPoses={};art.combatPoses={enemy:{},ally:{}};let core;art.coreLoading=true;art.corePromise=new Promise(resolve=>core=resolve).then(()=>{art.coreLoading=false;art.updateLoading();});
      art.prepareCombatArt(null,{enemy:['ashigaru'],ally:[]});art.prepareHeroLooks([{heroId:'yi',skin:'yi_gold'}]);const all=art.promise;
      const complete=[core,()=>finish('ashigaru'),()=>finish('yi_gold')];
      for(const [i,next]of order.entries()){complete[next]();await Promise.resolve();await Promise.resolve();if(i<2)assert.equal(art.loading,true);}
      await all;assert.equal(art.loading,false);art.dispose();
    }
  });
  await test('반복 스냅샷과 같은 의상 중복은 요청·준비 Promise를 다시 만들지 않는다',async()=>{
    const {art}=context();art.skinPoses={};const heroes=[{heroId:'yi',skin:'yi_white'},{heroId:'yi',skin:'yi_white'}],all=art.prepareHeroLooks(heroes);
    assert.equal(pending.length,1);for(let i=0;i<20;i++)assert.equal(art.prepareHeroLooks(heroes.map(h=>({...h}))),all);
    finish('yi_white');await all;assert.equal(art.prepareHeroLooks(heroes),all);assert.equal(pending.length,0);art.dispose();
  });
  await test('의상 변경은 활성·사망 영웅 루트를 먼저 정리하고 전용 GPU 자원만 해제한다',async()=>{
    const {world,art}=context(),h={id:1,heroId:'yi',skin:'yi_gold',owner:0},root=world.unit(h,true),baseRoot=world.unit({id:2,heroId:'yi',owner:0},true);
    world.units.set('h1',root);world.corpses.push({root:baseRoot,t:0});art.heroLooksKey='yi_gold';const d=root.userData.fixedImage,base=baseRoot.userData.fixedImage,order=[];let baseShared=0;
    d.image.material.addEventListener('dispose',()=>order.push('private'));d.image.material.map.addEventListener('dispose',()=>order.push('atlas'));base.image.material.map.addEventListener('dispose',()=>baseShared++);
    world.prepareHeroLooks([]);await art.promise;assert.deepEqual(order,['private','atlas']);assert.equal(baseShared,0);assert.equal(world.units.size,0);assert.equal(world.corpses.length,0);assert.equal(world.pickables.includes(root),false);assert.equal(root.parent,null);assert.equal(art.skinPoses.yi_gold,undefined);art.dispose();assert.equal(baseShared,1);
  });
  await test('새 의상 완료 뒤 늦게 온 이전 요청은 현재 의상과 상태를 덮어쓰지 않는다',async()=>{
    const {world,art}=context();art.skinPoses={};const old=art.prepareHeroLooks([{heroId:'yi',skin:'yi_white'}]),latest=art.prepareHeroLooks([{heroId:'yi',skin:'yi_gold'}]);
    finish('yi_gold');await latest;const current=art.skinPoses.yi_gold;finish('yi_white');await old;assert.equal(art.skinPoses.yi_gold,current);assert.equal(art.skinPoses.yi_white,undefined);assert.equal(world.renderer.domElement.dataset.skinPoseKinds,'yi_gold');assert.equal(art.loading,false);art.dispose();
  });
  await test('의상 실패는 기본 방향 그림으로 복귀하며 반복 수신 때 계속 재요청하지 않는다',async()=>{
    const {world,art}=context();art.skinPoses={};const heroes=[{heroId:'yi',skin:'yi_gold'}],warnings=[],warn=console.warn;console.warn=(...args)=>warnings.push(args);
    try{const all=art.prepareHeroLooks(heroes);finish('yi_gold',true);await all;assert.equal(art.prepareHeroLooks(heroes),all);}finally{console.warn=warn;}
    assert.equal(warnings.length,1);assert.equal(art.loading,false);assert.equal(art.skinPoses.yi_gold,null);assert.equal(art.unitArt(heroes[0],true,false),art.heroPoses.yi);assert.equal(world.renderer.domElement.dataset.skinPoseStatus,'partial');assert.equal(pending.length,0);art.dispose();
  });
  await test('월드 종료 뒤 의상 완료는 종료된 DOM·지도·캐시를 되살리지 않는다',async()=>{
    const {world,art}=context();art.skinPoses={};const all=art.prepareHeroLooks([{heroId:'yi',skin:'yi_gold'}]);art.dispose();const before={...world.renderer.domElement.dataset};finish('yi_gold');await all;assert.deepEqual(world.renderer.domElement.dataset,before);assert.deepEqual(art.skinPoses,{});
  });
  await test('실제 HUD는 첫 의상 감지 프레임부터 시계를 막고 완료 뒤에만 진행한다',async()=>{
    const {world,art}=context();art.skinPoses={};const profile=defaultProfile();profile.skins.owned.push('yi_gold');profile.skins.eq.yi='yi_gold';
    const session=new Session({kind:'solo',stageId:'s1',difficulty:'normal',seed:1,specs:[playerSpec(profile,['yi'],['singijeon'],'검증')]});
    const renderer={world,prepareView:Renderer3D.prototype.prepareView,get loading(){return art.loading;},events(){},render(){}};
    const ui=Object.assign(Object.create(GameUI.prototype),{s:session,renderer,ui:{clock:0},bottom:{},last:0,solo:true,local:false,selHero:0,hintTimer:100,handleEvents(){},drawXray(){},updateHud(){}});
    const raf=globalThis.requestAnimationFrame;globalThis.requestAnimationFrame=()=>1;
    try{ui.frame(100);assert.equal(session.state.time,0);assert.equal(ui.bottom.inert,true);assert.equal(pending.length,1);const all=art.promise;ui.frame(200);assert.equal(art.promise,all);finish('yi_gold');await all;ui.frame(300);assert.ok(session.state.time>0);assert.equal(ui.bottom.inert,false);}finally{globalThis.requestAnimationFrame=raf;session.destroy();art.dispose();}
  });
  await test('늦은 게스트 의상은 수신·보간을 유지하며 다음 스냅샷에서 같은 그림을 재사용한다',async()=>{
    const handlers=new Map(),net={on(k,fn){handlers.set(k,fn);return()=>handlers.delete(k);},send(){}},guest=new Session({kind:'guest',stageId:'s1',difficulty:'normal',net}),{world,art}=context();art.skinPoses={};
    const renderer={world,prepareView:Renderer3D.prototype.prepareView};renderer.prepareView(guest.view);assert.equal(pending.length,0);
    const state=newBattleGame({heroIds:['yi','gwon'],skins:{yi:'yi_white',gwon:'gwon_hill'},support:false}),encode=()=>new SnapshotEncoder().encode(state,[{k:'toast',text:'동기화'}]);
    handlers.get('snap')({s:encode()});renderer.prepareView(guest.view);const all=art.promise;assert.equal(pending.length,2);assert.equal(guest.update(.1,{waitingForRenderer:true})[0].text,'동기화');
    state.time=3;handlers.get('snap')({s:encode()});renderer.prepareView(guest.view);assert.equal(art.promise,all);assert.equal(guest.view.time,3);finish('yi_white');finish('gwon_hill');await all;assert.equal(art.loading,false);assert.equal(world.renderer.domElement.dataset.skinPoseCount,'2');guest.destroy();art.dispose();
  });
}finally{T.ImageLoader.prototype.load=oldLoad;if(oldDocument===undefined)delete globalThis.document;else globalThis.document=oldDocument;}
assert.equal(pending.length,0);assert.equal(readbacks,0);
console.log('\n특수 의상 방향 그림 '+passed+'개 검증 통과');
