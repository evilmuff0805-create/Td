import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import * as T from 'three';
import {HERO_ORDER} from '../src/data/heroes.js';
import {HERO_POSE_ART} from '../src/3d/hero-pose-data.js';
import {SKIN_POSE_ART} from '../src/3d/skin-pose-data.js';
import {HERO_INBETWEEN_ART} from '../src/3d/inbetween-data.js';
import {inbetweenLookRoster,inbetweenLooksKey} from '../src/3d/inbetween-roster.js';
import {FixedBattleArt} from '../src/3d/fixed-art.js';
import {WinterWorld} from '../src/3d/world.js';
import {CrowdRenderer} from '../src/3d/crowd.js';
import {Renderer3D} from '../src/3d/renderer.js';
import {SEASONS} from '../src/3d/seasons.js';
import {updateSpriteMotion,previewMotion} from '../src/3d/sprite-motion.js';
import {Session} from '../src/game/session.js';
import {GameUI} from '../src/ui/hud.js';
import {SnapshotEncoder,emptyView,applySnapshot} from '../src/sim/snapshot.js';
import {DT} from '../src/sim/sim.js';
import {getMap} from '../src/sim/map.js';

const results=[];
async function test(name,fn){await fn();results.push({name,passed:true});console.log('  ✔ '+name);}
const mockAtlas=layout=>({poseAtlas:true,canvas:{width:layout.width,height:layout.height},frames:layout.frames,isolated:layout.frames.map(frame=>({canvas:{width:frame.width+24,height:frame.height+24},frame:{...frame,left:12,top:12}}))});
function context(loaded=true){
  const camera=new T.OrthographicCamera(-8,8,6,-6,.1,100);camera.position.set(17,26,26);camera.lookAt(0,0,0);camera.updateMatrixWorld();
  const world=Object.assign(Object.create(WinterWorld.prototype),{camera,theme:{id:'winter',...SEASONS.winter},renderer:{domElement:{dataset:{}}},scene:new T.Scene(),units:new Map(),unitTemplates:new Map(),towers:new Map(),bullets:new Map(),scenery:new Map(),fx:{reset(){}},placement:new T.Group(),marker:new T.Group(),corpses:[],pickables:[],enemyCues:new Map(),range:new T.Group(),batchCrowd:false,projectiles(){},combatScenery(){}});
  world.crowd=new CrowdRenderer(world.scene);
  const art=Object.assign(Object.create(FixedBattleArt.prototype),{world,ready:true,coreLoading:false,combatLoading:false,skinLoading:false,inbetweenLoading:false,heroLooksKey:'',inbetweenKey:'',skinGeneration:0,inbetweenGeneration:0,corePromise:Promise.resolve(),combatPromise:Promise.resolve(),skinPromise:Promise.resolve(),inbetweenPromise:Promise.resolve(),textures:new Map(),materials:new Map(),geometries:new Map(),heroPoses:Object.fromEntries(Object.entries(HERO_POSE_ART).map(([id,l])=>[id,mockAtlas(l)])),skinPoses:loaded?Object.fromEntries(Object.entries(SKIN_POSE_ART).map(([id,l])=>[id,mockAtlas(l)])):{},inbetweenPoses:loaded?Object.fromEntries(Object.entries(HERO_INBETWEEN_ART).map(([id,l])=>[id,mockAtlas(l)])): {}});
  art.yi=art.heroPoses.yi;art.shadowTexture=new T.DataTexture(new Uint8Array([255,255,255,255]),1,1);art.shadowMaterial=new T.MeshBasicMaterial({map:art.shadowTexture});world.art=art;art.updateLoading();art.refreshPromise();return {world,art};
}
function yawFor(camera,col){const r=new T.Vector3(1,0,0).applyQuaternion(camera.quaternion),u=new T.Vector3(0,1,0).applyQuaternion(camera.quaternion);r.y=u.y=0;r.normalize();u.normalize();const d=r.multiplyScalar(col<2?1:-1).addScaledVector(u,col===1||col===2?1:-1);return Math.atan2(d.x,d.z);}
const sample=(extra={})=>({kind:'yi',x:8,z:5,time:0,dt:DT,hp:100,attack:0,inbetweens:true,...extra});
const visual=({state,...out})=>out;

await test('기본 영웅 8명에 새 128자세만 덧붙이고 기존 기준 높이와 의상 정체성을 보존한다',()=>{
  assert.deepEqual(Object.keys(HERO_INBETWEEN_ART).sort(),HERO_ORDER.slice().sort());
  for(const [id,l]of Object.entries(HERO_INBETWEEN_ART)){assert.equal(l.heroId,id);assert.equal(l.skin,null);assert.equal(l.frames.length,16);assert.deepEqual(l.roles,['pass-a','pass-b','follow-through','recover']);assert.ok(l.frames.every(f=>f.referenceHeight===HERO_POSE_ART[id].frames[0].referenceHeight&&f.anchor>0&&f.anchor<1&&f.anchorY>0));}
});
await test('기본 영웅도 로딩 키에 포함하며 소유자·스냅샷 순서와 중복에 영향받지 않는다',()=>{
  const heroes=[{heroId:'yi'},{heroId:'yi',owner:1},{heroId:'sejong',skin:'invalid'},{heroId:'yi',skin:'yi_gold'},{heroId:'invalid'}];
  assert.deepEqual(inbetweenLookRoster(heroes),[{key:'sejong',heroId:'sejong',skin:null},{key:'yi',heroId:'yi',skin:null},{key:'yi_gold',heroId:'yi',skin:'yi_gold'}]);
  assert.equal(inbetweenLooksKey(heroes),inbetweenLooksKey(heroes.slice().reverse().map(h=>({...h}))));
  assert.notEqual(inbetweenLooksKey([{heroId:'yi'}]),inbetweenLooksKey([{heroId:'gwon'}]));
});
await test('실제 8영웅 루트의 256자세가 방향·배율·본체·가림·그림자를 함께 바꾼다',()=>{
  const {world,art}=context(),visited=new Set();
  for(const id of HERO_ORDER){
    const h={id:1,heroId:id,hp:100,owner:0},root=world.unit(h,true),d=root.userData.fixedImage;
    for(let col=0;col<4;col++)for(let row=0;row<8;row++){
      root.rotation.y=yawFor(world.camera,col);art.updateUnit(root,h,false,0,0,{...sample(),poseRow:row});
      const atlas=row>=4?art.inbetweenPoses[id]:art.heroPoses[id],f=atlas.isolated[(row%4)*4+col].frame;
      assert.equal(d.poseIndex,row*4+col);visited.add(id+':'+d.poseIndex);assert.equal(d.image.material.map.image,atlas.isolated[(row%4)*4+col].canvas);
      assert.equal(d.hint.material.map,d.image.material.map);assert.equal(d.shadow.material.map,d.image.material.map);assert.equal(d.shadow.geometry,d.image.geometry);assert.equal(d.hint.geometry,d.image.geometry);
      d.image.geometry.computeBoundingBox();const b=d.image.geometry.boundingBox,scale=d.height/f.referenceHeight;
      assert.ok(Math.abs((b.max.y-b.min.y)/f.height-scale)<1e-7);assert.ok(Math.abs(b.min.x+f.anchor*f.width*scale)<1e-6);assert.ok(Math.abs(b.min.y)<1e-7);
      assert.ok(root.quaternion.clone().multiply(d.image.quaternion).angleTo(world.camera.quaternion)<1e-6);
      const ground=new T.Vector3(0,1,0).applyMatrix4(d.shadow.matrix).applyQuaternion(root.quaternion);assert.ok(Math.abs(ground.y-.042)<1e-6);
    }world.disposeCharacter(root);
  }assert.equal(visited.size,256);art.dispose();
});
await test('새 보행 네 박자는 이동 거리로 연결되고 20·60·120fps에서 같은 위상을 가진다',()=>{
  const phases=[];
  for(const fps of [20,60,120]){let a=updateSpriteMotion(null,sample()),rows=[];
    for(let i=1;i<=fps;i++){a=updateSpriteMotion(a.state,sample({x:8+i/fps*1.28,time:i/fps,dt:1/fps}));if(a.blend<=.16){assert.equal(a.row,0);continue;}if(rows.at(-1)!==a.row)rows.push(a.row);}
    assert.deepEqual(new Set(rows),new Set([1,4,2,5]));for(let i=1;i<rows.length;i++)assert.equal(rows[i],[1,4,2,5][([1,4,2,5].indexOf(rows[i-1])+1)%4]);phases.push(a.phase);
  }assert.ok(phases.every(p=>Math.abs(p-phases[0])<1e-10));
});
await test('실제 공격 시각부터 발사→타격 후→복귀하고 같은 cue를 재생하지 않는다',()=>{
  let a=updateSpriteMotion(null,sample({actionSeq:1,actionAt:0,actionDuration:.25}));assert.equal(a.row,3);
  a=updateSpriteMotion(a.state,sample({time:.1,actionSeq:1,actionAt:0,actionDuration:.25}));assert.equal(a.row,6);
  a=updateSpriteMotion(a.state,sample({time:.2,actionSeq:1,actionAt:0,actionDuration:.25}));assert.equal(a.row,7);
  a=updateSpriteMotion(a.state,sample({time:.4,actionSeq:1,actionAt:0,actionDuration:.25}));assert.equal(a.row,0);
  a=updateSpriteMotion(a.state,sample({time:.5,actionSeq:2,actionAt:.5,actionDuration:.25}));assert.equal(a.row,3);
});
await test('정지 중 늦은 공격·피격·기절·위치 패킷도 표시 프레임을 바꾸지 않는다',()=>{
  let a=updateSpriteMotion(null,sample());a=updateSpriteMotion(a.state,sample({x:8.1,time:DT}));const before=visual(a);
  for(const time of [.1,.2,.5]){a=updateSpriteMotion(a.state,sample({x:12,time,dt:0,frozen:true,actionSeq:1,actionAt:.5,hp:90,stunned:true}));assert.deepEqual(visual(a),before);}
  assert.equal(a.state.seq,undefined);assert.equal(a.state.hp,100);
  a=updateSpriteMotion(a.state,sample({x:12,time:.5,actionSeq:1,actionAt:.5,hp:90}));assert.equal(a.row,3);assert.equal(a.phase,0);
});
await test('원화 없는 특수 의상·누락 시트는 타 의상 원화로 바뀌지 않는다',()=>{
  const {world,art}=context(),h={heroId:'yi',skin:'yi_gold',hp:100};
  const root=world.unit(h,true),d=root.userData.fixedImage;art.updateUnit(root,h,false,0,0,{...sample(),poseRow:4});assert.equal(d.art,art.skinPoses.yi_gold);assert.equal(d.inbetweens,null);assert.equal(Math.floor(d.poseIndex/4),0);
  assert.equal(art.unitInbetweens({heroId:'yi'},art.heroPoses.gwon),null);art.inbetweenPoses.yi=null;assert.equal(art.unitInbetweens({heroId:'yi'},art.heroPoses.yi),null);world.disposeCharacter(root);art.dispose();
});
await test('로컬 1P·2P 실제 입력과 같은 영웅의 두 동작 상태가 독립적이다',()=>{
  const session=new Session({kind:'local',stageId:'s1',difficulty:'normal',seed:8,specs:[{heroes:['yi']},{heroes:['yi']}]});
  const ui=Object.assign(Object.create(GameUI.prototype),{s:session,p2keys:new Set(),lastP2Move:0,p2moving:false}),[a,b]=session.view.heroes,ax=a.x,bx=b.x;
  session.send({t:'move',p:0,h:0,x:ax-1,y:a.y});ui.p2Key({code:'ArrowRight'});for(let i=1;i<=30;i++){ui.p2Tick(i*1000/60);session.update(DT);}assert.ok(a.x<ax&&b.x>bx);
  ui.p2keys.clear();ui.p2Tick(600);b.skillCd=0;ui.p2Key({code:'KeyA'});session.update(DT);assert.ok(b.skillCd>0);
  const packet=JSON.parse(JSON.stringify(new SnapshotEncoder().encode(session.state,[]))),view=emptyView({stageId:'s1',difficulty:'normal'});applySnapshot(view,packet);assert.equal(view.heroes[0].owner,0);assert.equal(view.heroes[1].owner,1);assert.equal(view.heroes[1].actionSeq,b.actionSeq);
  const {world,art}=context(),ha={heroId:'yi',owner:0,hp:100,actionSeq:1,actionAt:0,actionDuration:.25},hb={heroId:'yi',owner:1,hp:100},ra=world.unit(ha,true),rb=world.unit(hb,true);
  art.updateUnit(ra,ha,false,0,0,sample());art.updateUnit(rb,hb,false,0,0,sample());art.updateUnit(ra,ha,false,0,.12,sample({time:.12}));art.updateUnit(rb,hb,false,0,.12,sample({time:.12}));
  const da=ra.userData.fixedImage,db=rb.userData.fixedImage;assert.equal(da.pose,'follow-through');assert.equal(db.pose,'idle');assert.notEqual(da.motion,db.motion);assert.notEqual(da.image.material,db.image.material);assert.equal(db.hint.material.color.getHexString(),'efaa96');
  art.updateDeath(ra,.7);art.updateUnit(ra,ha,false,0,1,sample({time:1}));assert.equal(da.motionPhase,0);assert.equal(da.pose,'idle');assert.equal(da.image.material.opacity,1);world.disposeCharacter(ra);world.disposeCharacter(rb);art.dispose();session.destroy();
});

const oldDocument=globalThis.document,oldLoad=T.ImageLoader.prototype.load,pending=[];let readbacks=0;
globalThis.document={createElement:()=>({width:0,height:0,getContext(){return {drawImage(){},getImageData(){readbacks++;throw new Error('No alpha readback is needed for explicit frame layouts');}};}})};
T.ImageLoader.prototype.load=function(url,onLoad,progress,onError){pending.push({url,onLoad,onError});};
function finish(id,fail=false){const at=pending.findIndex(p=>p.url.includes('/'+id+'-inbetweens-'));assert.ok(at>=0,'Pending supplement '+id);const [p]=pending.splice(at,1),l=HERO_INBETWEEN_ART[id];if(fail)p.onError(new Error('expected missing supplement'));else p.onLoad({width:l.width,height:l.height});}
try{
  await test('기본 영웅 중복·반복 스냅샷은 선택한 시트와 준비 Promise를 재요청하지 않는다',async()=>{
    const {art}=context(false),heroes=[{heroId:'yi'},{heroId:'yi',owner:1},{heroId:'sejong'}],all=art.prepareHeroLooks(heroes);assert.equal(pending.length,2);
    for(let i=0;i<20;i++)assert.equal(art.prepareHeroLooks(heroes.slice().reverse().map(h=>({...h}))),all);finish('yi');assert.equal(art.loading,true);finish('sejong');await all;assert.equal(art.loading,false);assert.equal(art.prepareHeroLooks(heroes),all);art.dispose();
  });
  await test('코어와 중간 시트는 어느 순서로 끝나도 마지막 원화까지 전투를 기다린다',async()=>{
    for(const first of ['core','pose']){const {art}=context(false);let core;art.coreLoading=true;art.corePromise=new Promise(r=>core=r).then(()=>{art.coreLoading=false;art.updateLoading();});const all=art.prepareHeroLooks([{heroId:'yi'}]);
      if(first==='core')core();else finish('yi');await Promise.resolve();await Promise.resolve();assert.equal(art.loading,true);if(first==='core')finish('yi');else core();await all;assert.equal(art.loading,false);art.dispose();}
  });
  await test('기본 영웅 교체는 활성·사망 루트부터 제거하고 이전 시트 GPU 자원을 해제한다',async()=>{
    const {world,art}=context(false);await (async()=>{world.prepareHeroLooks([{heroId:'yi'}]);const p=art.promise;finish('yi');await p;})();
    const h={id:1,heroId:'yi',owner:0},root=world.unit(h,true);art.updateUnit(root,h,false,0,0,{...sample(),poseRow:4});world.units.set('h1',root);
    const dead=world.unit({...h,id:2},true);world.pickables=world.pickables.filter(p=>p!==dead);world.corpses.push({root:dead,t:0});const d=root.userData.fixedImage,order=[];d.image.material.addEventListener('dispose',()=>order.push('private'));d.image.material.map.addEventListener('dispose',()=>order.push('atlas'));
    world.prepareHeroLooks([{heroId:'gwon'}]);const all=art.promise;assert.deepEqual(order,['private','atlas']);assert.equal(world.units.size,0);assert.equal(world.corpses.length,0);assert.equal(root.parent,null);assert.equal(world.pickables.length,0);finish('gwon');await all;assert.equal(art.inbetweenPoses.yi,undefined);assert.ok(art.inbetweenPoses.gwon);art.dispose();
  });
  await test('늦은 이전 완료와 전장 종료 뒤 완료는 현재 그림·DOM을 되살리지 않는다',async()=>{
    const {world,art}=context(false),old=art.prepareHeroLooks([{heroId:'yi'}]),latest=art.prepareHeroLooks([{heroId:'gwon'}]);finish('gwon');await latest;const current=art.inbetweenPoses.gwon;finish('yi');await old;assert.equal(art.inbetweenPoses.gwon,current);assert.equal(art.inbetweenPoses.yi,undefined);assert.equal(world.renderer.domElement.dataset.heroInbetweenKinds,'gwon');
    const all=art.prepareHeroLooks([{heroId:'sejong'}]);art.dispose();const before={...world.renderer.domElement.dataset};finish('sejong');await all;assert.deepEqual(world.renderer.domElement.dataset,before);assert.equal(art.inbetweenPoses.sejong,undefined);
  });
  await test('일부 중간 시트 실패는 원본 동작으로 대체하고 반복 수신 때 재요청하지 않는다',async()=>{
    const {world,art}=context(false),heroes=[{heroId:'yi'},{heroId:'sejong'}],warn=console.warn,warnings=[];console.warn=(...a)=>warnings.push(a);
    try{const all=art.prepareHeroLooks(heroes);finish('yi',true);finish('sejong');await all;assert.equal(art.prepareHeroLooks(heroes),all);}finally{console.warn=warn;}
    assert.equal(warnings.length,1);assert.equal(art.loading,false);assert.equal(art.inbetweenPoses.yi,null);assert.ok(art.inbetweenPoses.sejong);assert.equal(world.renderer.domElement.dataset.heroInbetweenStatus,'partial');assert.equal(art.unitArt(heroes[0],true,false),art.heroPoses.yi);art.dispose();
  });
  await test('실제 로컬 협동 HUD는 두 중간 시트를 첫 프레임부터 기다린 뒤 시계를 재개한다',async()=>{
    const {world,art}=context(false),session=new Session({kind:'local',stageId:'s1',difficulty:'normal',seed:1,specs:[{heroes:['yi']},{heroes:['sejong']}]});
    const renderer={world,prepareView:Renderer3D.prototype.prepareView,get loading(){return art.loading;},events(){},render(){}};
    const ui=Object.assign(Object.create(GameUI.prototype),{s:session,renderer,map:getMap(session.stageId),me:0,ui:{clock:0},bottom:{},last:0,solo:false,local:true,selHero:0,hintTimer:100,p2keys:new Set(),lastP2Move:0,p2moving:false,handleEvents(){},drawXray(){},updateHud(){}}),raf=globalThis.requestAnimationFrame;globalThis.requestAnimationFrame=()=>1;
    try{ui.frame(100);assert.equal(session.state.time,0);assert.equal(ui.bottom.inert,true);assert.equal(pending.length,2);const all=art.promise;ui.frame(200);assert.equal(art.promise,all);finish('yi');await Promise.resolve();ui.frame(300);assert.equal(session.state.time,0);finish('sejong');await all;ui.frame(400);assert.ok(session.state.time>0);assert.equal(ui.bottom.inert,false);}finally{globalThis.requestAnimationFrame=raf;session.destroy();art.dispose();}
  });
  await test('게스트는 중간 원화 대기 중에도 후속 스냅샷과 이벤트를 계속 받는다',async()=>{
    const handlers=new Map(),net={on(k,fn){handlers.set(k,fn);return()=>handlers.delete(k);},send(){}},guest=new Session({kind:'guest',stageId:'s1',difficulty:'normal',net}),host=new Session({kind:'local',stageId:'s1',difficulty:'normal',seed:1,specs:[{heroes:['yi']},{heroes:['sejong']}]}),{world,art}=context(false),renderer={world,prepareView:Renderer3D.prototype.prepareView};
    const encode=()=>new SnapshotEncoder().encode(host.state,[{k:'toast',text:'동기화'}]);handlers.get('snap')({s:encode()});renderer.prepareView(guest.view);const all=art.promise;assert.equal(pending.length,2);assert.equal(guest.update(.1,{waitingForRenderer:true})[0].text,'동기화');host.state.time=3;handlers.get('snap')({s:encode()});renderer.prepareView(guest.view);assert.equal(guest.view.time,3);assert.equal(art.promise,all);finish('yi');finish('sejong');await all;assert.equal(art.loading,false);guest.destroy();host.destroy();art.dispose();
  });
}finally{T.ImageLoader.prototype.load=oldLoad;if(oldDocument===undefined)delete globalThis.document;else globalThis.document=oldDocument;}
assert.equal(pending.length,0);assert.equal(readbacks,0);
await fs.writeFile(new URL('../docs/INBETWEEN_RUNTIME_VALIDATION.json',import.meta.url),JSON.stringify({date:'2026-10-11',passed:results.length,baseHeroes:8,newPoses:128,totalBasePoses:256,scope:'display-only supplement; unsupported costumes and troops retain approved poses',alphaReadbacks:readbacks,tests:results},null,2)+'\n');
console.log('\n중간 원화 동작 '+results.length+'개 검증 통과');
