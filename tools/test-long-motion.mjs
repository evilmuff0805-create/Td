import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import * as T from 'three';
import {HERO_POSE_ART} from '../src/3d/hero-pose-data.js';
import {SKIN_POSE_ART} from '../src/3d/skin-pose-data.js';
import {HERO_INBETWEEN_ART} from '../src/3d/inbetween-data.js';
import {HERO_LONG_MOTION_ART} from '../src/3d/long-motion-data.js';
import {FixedBattleArt} from '../src/3d/fixed-art.js';
import {updateSpriteMotion} from '../src/3d/sprite-motion.js';
import {SimulationSession as Session} from './session-fixtures.mjs';
import {GameUI} from '../src/ui/hud.js';
import {SnapshotEncoder,emptyView,applySnapshot} from '../src/sim/snapshot.js';
import {DT} from '../src/sim/sim.js';

const results=[];
async function test(name,fn){await fn();results.push({name,passed:true});console.log('  ✔ '+name);}
const atlas=l=>({poseAtlas:true,canvas:{width:l.width,height:l.height},frames:l.frames,isolated:l.frames.map(frame=>({canvas:{width:frame.width+24,height:frame.height+24},frame:{...frame,left:12,top:12}}))});
function fixture(){
  const camera=new T.OrthographicCamera(-8,8,6,-6,.1,100);camera.position.set(17,26,26);camera.lookAt(0,0,0);camera.updateMatrixWorld();
  const world={camera,theme:{id:'winter',snow:true},renderer:{domElement:{dataset:{}}}};
  const art=Object.assign(Object.create(FixedBattleArt.prototype),{world,ready:true,corePromise:Promise.resolve(),textures:new Map(),materials:new Map(),geometries:new Map(),heroPoses:Object.fromEntries(Object.entries(HERO_POSE_ART).map(([k,l])=>[k,atlas(l)])),skinPoses:Object.fromEntries(Object.entries(SKIN_POSE_ART).map(([k,l])=>[k,atlas(l)])),inbetweenPoses:Object.fromEntries(Object.entries(HERO_INBETWEEN_ART).map(([k,l])=>[k,atlas(l)])),longMotionPoses:Object.fromEntries(Object.entries(HERO_LONG_MOTION_ART).map(([k,l])=>[k,atlas(l)])),shadowTexture:new T.DataTexture(new Uint8Array([255,255,255,255]),1,1),shadowMaterial:new T.MeshBasicMaterial()});
  return {art,world};
}
function rootFor(art,hero){const r=new T.Group();art.attachUnit(r,hero,true,false);return r;}
function release(root){const d=root.userData.fixedImage;d.image.material.dispose();d.hint.material.dispose();d.contact.geometry.dispose();d.contact.material.dispose();}
function yaw(camera,col){const r=new T.Vector3(1,0,0).applyQuaternion(camera.quaternion),u=new T.Vector3(0,1,0).applyQuaternion(camera.quaternion);r.y=u.y=0;r.normalize();u.normalize();const d=r.multiplyScalar(col<2?1:-1).addScaledVector(u,col===1||col===2?1:-1);return Math.atan2(d.x,d.z);}
const sample=(extra={})=>({kind:'yi',x:8,z:5,time:0,dt:DT,hp:100,inbetweens:true,longMotion:true,...extra});
const visual=({state,...rest})=>rest;

await test('기본 8·의상 16에 추가 384자세가 같은 의상·기준 높이를 유지한다',()=>{
  assert.equal(Object.keys(HERO_LONG_MOTION_ART).length,24);
  assert.deepEqual(Object.keys(HERO_LONG_MOTION_ART).sort(),Object.keys(HERO_INBETWEEN_ART).sort());
  for(const [id,l]of Object.entries(HERO_LONG_MOTION_ART)){
    const base=l.skin?SKIN_POSE_ART[l.skin]:HERO_POSE_ART[l.heroId];
    assert.equal(id,l.skin??l.heroId);assert.equal(l.frames.length,16);assert.deepEqual(l.roles,['compress-a','compress-b','early-follow','settle']);
    for(const f of l.frames){assert.equal(f.referenceHeight,base.frames[0].referenceHeight);assert.ok(f.anchor>0&&f.anchor<1);assert.ok(f.left>=24&&f.top>=24&&f.left+f.width<=l.width-24&&f.top+f.height<=l.height-24);}
  }
});
await test('24외형의 모든 384 새 자세는 본체·가림·그림자와 발 기준을 함께 바꾼다',()=>{
  const {art,world}=fixture(),seen=new Set();
  for(const [id,l]of Object.entries(HERO_LONG_MOTION_ART)){
    const h={heroId:l.heroId,skin:l.skin,hp:100},root=rootFor(art,h),d=root.userData.fixedImage;
    for(let col=0;col<4;col++)for(let row=8;row<12;row++){
      root.rotation.y=yaw(world.camera,col);art.updateUnit(root,h,false,0,0,{...sample(),poseRow:row});
      const iso=art.longMotionPoses[id].isolated[(row-8)*4+col],f=iso.frame;seen.add(id+':'+d.poseIndex);
      assert.equal(d.poseIndex,row*4+col);assert.equal(d.image.material.map.image,iso.canvas);assert.equal(d.longMotion,art.longMotionPoses[id]);
      assert.equal(d.image.geometry,d.hint.geometry);assert.equal(d.image.geometry,d.shadow.geometry);assert.equal(d.image.material.map,d.hint.material.map);assert.equal(d.image.material.map,d.shadow.material.map);
      d.image.geometry.computeBoundingBox();const b=d.image.geometry.boundingBox,scale=d.height/f.referenceHeight;
      assert.ok(Math.abs(b.min.y)<1e-7);assert.ok(Math.abs(b.min.x+f.anchor*f.width*scale)<1e-6);assert.ok(Math.abs(b.max.y-f.height*scale)<1e-6);
    }
    release(root);
  }
  assert.equal(seen.size,384);art.dispose();
});
await test('여섯 보행 자세는 같은 거리 주기를 20·60·120fps에서 유지한다',()=>{
  const phases=[];
  for(const fps of [20,60,120]){
    let a=updateSpriteMotion(null,sample()),seen=new Set();
    for(let i=1;i<=fps;i++){a=updateSpriteMotion(a.state,sample({x:8+3*i/fps,time:i/fps,dt:1/fps}));seen.add(a.row);}
    assert.deepEqual([...seen].filter(x=>x!==0).sort((a,b)=>a-b),[1,2,4,5,8,9]);phases.push(a.phase);
  }
  assert.ok(phases.every(p=>Math.abs(p-phases[0])<1e-10));
});
await test('공격은 실제 cue에 즉시 시작해 다섯 자세를 거친 뒤 재시작 없이 종료한다',()=>{
  let a;const cue={actionSeq:1,actionAt:0,actionDuration:.25};
  for(const [time,row]of [[0,3],[.06,10],[.12,6],[.2,7],[.3,11],[.4,0]]){a=updateSpriteMotion(a?.state,sample({...cue,time}));assert.equal(a.row,row);}
  a=updateSpriteMotion(a.state,sample({...cue,time:.5}));assert.equal(a.row,0);
  a=updateSpriteMotion(a.state,sample({time:.5,actionSeq:2,actionAt:.5,actionDuration:.25}));assert.equal(a.row,3);
});
await test('정지 압축 자세는 각 지지발로 착지하고 재이동·새 공격은 복귀를 끊는다',()=>{
  for(const [phase,row,landing]of [[.25,8,1],[.75,9,2]]){
    let a=updateSpriteMotion(null,sample());a.state.phase=phase;a.state.blend=1;
    a=updateSpriteMotion(a.state,sample({x:8.00002,time:DT}));assert.equal(a.row,row);
    a=updateSpriteMotion(a.state,sample({x:8.00002,time:2*DT}));assert.equal(a.row,row);assert.equal(a.settling,true);
    a=updateSpriteMotion(a.state,sample({x:8.00002,time:.08,dt:.05}));assert.equal(a.row,landing);
    a=updateSpriteMotion(a.state,sample({x:8.03,time:.09}));assert.equal(a.settling,false);
    a=updateSpriteMotion(a.state,sample({x:8.03,time:.1,actionSeq:1,actionAt:.1}));assert.equal(a.row,3);
  }
});
await test('정지 중 늦은 cue·기절·위치는 프레임을 고정하고 재개 때 새 공격을 보인다',()=>{
  let a=updateSpriteMotion(null,sample({actionSeq:1,actionAt:0}));a=updateSpriteMotion(a.state,sample({time:.06,actionSeq:1,actionAt:0}));assert.equal(a.row,10);const before=visual(a);
  a=updateSpriteMotion(a.state,sample({x:12,time:1,dt:0,frozen:true,actionSeq:2,actionAt:1,stunned:true,hp:80}));assert.deepEqual(visual(a),before);
  a=updateSpriteMotion(a.state,sample({x:12,time:1,actionSeq:2,actionAt:1,hp:80}));assert.equal(a.row,3);assert.equal(a.phase,0);
  a=updateSpriteMotion(a.state,sample({x:12,time:1.1,actionSeq:2,actionAt:1,stunned:true}));assert.equal(a.row,0);
});
await test('다른 의상·다른 영웅·병력에는 긴 동작을 섞지 않고 8/4행 대체를 유지한다',()=>{
  const {art}=fixture(),h={heroId:'yi',skin:'yi_gold',hp:100};
  assert.equal(art.unitLongMotion(h,art.skinPoses.gwon_gold),null);assert.equal(art.unitLongMotion(h,art.heroPoses.yi,'enemy'),null);
  art.longMotionPoses.yi_gold=null;let root=rootFor(art,h);art.updateUnit(root,h,false,0,0,{...sample(),poseRow:10});assert.equal(root.userData.fixedImage.pose,'idle');release(root);
  art.longMotionPoses.yi_gold=atlas(HERO_LONG_MOTION_ART.yi_gold);art.inbetweenPoses.yi_gold=null;root=rootFor(art,h);art.updateUnit(root,h,false,0,0,{...sample(),poseRow:10});assert.equal(root.userData.fixedImage.longMotion,null);assert.equal(root.userData.fixedImage.pose,'idle');release(root);
  art.skinPoses.yi_gold=null;root=rootFor(art,h);art.updateUnit(root,h,false,0,0,{...sample(),poseRow:10});assert.equal(root.userData.fixedImage.art,art.heroPoses.yi);assert.equal(root.userData.fixedImage.longMotion,art.longMotionPoses.yi);release(root);art.dispose();
  for(const extra of [{longMotion:false},{inbetweens:false}]){let a=updateSpriteMotion(null,sample({...extra,actionSeq:1,actionAt:0}));a=updateSpriteMotion(a.state,sample({...extra,time:.06,actionSeq:1,actionAt:0}));assert.ok(a.row<8);}
});
await test('같은 영웅의 두 의상·공격·색상·UV·그림자 재질은 서로 독립적이다',()=>{
  const {art}=fixture(),a={heroId:'yi',skin:'yi_white',owner:0,hp:100,actionSeq:1,actionAt:0},b={heroId:'yi',skin:'yi_gold',owner:1,hp:100};
  const ra=rootFor(art,a),rb=rootFor(art,b);art.updateUnit(ra,a,false,0,0,sample());art.updateUnit(rb,b,false,0,0,sample());
  art.updateUnit(ra,a,false,0,.06,sample({time:.06}));art.updateUnit(rb,b,true,0,.06,sample({time:.06,x:8.2}));
  const da=ra.userData.fixedImage,db=rb.userData.fixedImage;assert.equal(da.pose,'early-follow');assert.notEqual(db.pose,'early-follow');assert.notEqual(da.motion,db.motion);assert.notEqual(da.image.material,db.image.material);assert.equal(da.longMotion,art.longMotionPoses.yi_white);assert.equal(db.longMotion,art.longMotionPoses.yi_gold);
  const otherMap=db.image.material.map;da.image.material.opacity=.2;assert.equal(db.image.material.opacity,1);assert.equal(db.hint.material.color.getHexString(),'efaa96');release(ra);assert.equal(db.image.material.map,otherMap);release(rb);art.dispose();
});
await test('두 소유자 시뮬레이션 명령·스냅샷과 긴 공격은 소유자별로 유지한다',()=>{
  const s=new Session({kind:'local',stageId:'s1',difficulty:'normal',seed:8,specs:[{heroes:['yi'],skins:{yi:'yi_white'}},{heroes:['yi'],skins:{yi:'yi_gold'}}]}),[a,b]=s.view.heroes;
  const ui=Object.assign(Object.create(GameUI.prototype),{s,}),ax=a.x,bx=b.x;
  s.send({t:'move',p:0,h:0,x:ax-1,y:a.y});s.send({t:'move',p:1,h:1,x:bx+1,y:b.y});for(let i=1;i<=30;i++){s.update(DT);}assert.ok(a.x<ax&&b.x>bx);
  b.skillCd=0;s.send({t:'heroSkill',p:1,h:1,x:b.x-4,y:b.y});s.update(DT);assert.ok(b.skillCd>0);assert.equal(a.actionSeq,undefined);
  const view=emptyView({stageId:'s1',difficulty:'normal'});applySnapshot(view,JSON.parse(JSON.stringify(new SnapshotEncoder().encode(s.state,[]))));assert.equal(view.heroes[0].skin,'yi_white');assert.equal(view.heroes[1].skin,'yi_gold');assert.equal(view.heroes[1].actionSeq,b.actionSeq);
  const motion=updateSpriteMotion(null,sample({kind:b.heroId,time:s.view.time,actionSeq:b.actionSeq,actionAt:b.actionAt,actionDuration:b.actionDuration}));assert.ok([3,10].includes(motion.row));s.destroy();
});

const oldDoc=globalThis.document,oldLoad=T.ImageLoader.prototype.load,oldWarn=console.warn,pending=[],requests=[];
globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>({drawImage(){}})})};console.warn=()=>{};
T.ImageLoader.prototype.load=function(url,onLoad,progress,onError){const r={url,onLoad,onError};pending.push(r);requests.push(r);};
const done=(r,fail=false)=>{pending.splice(pending.indexOf(r),1);const l=Object.values(HERO_LONG_MOTION_ART).find(l=>r.url.endsWith('/'+l.path));fail?r.onError(new Error('fixture')):r.onLoad({width:l.width,height:l.height});};
try{
  await test('긴 원화는 선택 두 의상만 로드하고 같은 요청·공통 미완료 요청을 재사용한다',async()=>{
    const {art}=fixture();art.longMotionPoses={};const start=requests.length;
    const p=art.prepareLongMotion([{heroId:'yi',skin:'yi_white'},{heroId:'yi',skin:'yi_gold'}]);assert.equal(pending.length,2);assert.equal(art.prepareLongMotion([{heroId:'yi',skin:'yi_gold'},{heroId:'yi',skin:'yi_white'}]),p);
    const next=art.prepareLongMotion([{heroId:'yi',skin:'yi_gold'},{heroId:'gwon'}]);assert.equal(requests.slice(start).filter(r=>r.url.includes('yi_gold-long')).length,1);
    for(const r of pending.slice())done(r);await Promise.all([p,next]);assert.deepEqual(Object.keys(art.longMotionPoses).sort(),['gwon','yi_gold']);assert.equal(art.loading,false);assert.equal(art.longMotionRequests.size,0);art.dispose();
  });
  await test('늦은 이전 긴 원화는 새 로스터와 DOM 준비 상태를 덮어쓰지 않는다',async()=>{
    const {art,world}=fixture();art.longMotionPoses={};const old=art.prepareLongMotion([{heroId:'yi'}]),older=pending[0],latest=art.prepareLongMotion([{heroId:'gwon'}]);done(pending.find(r=>r!==older));await latest;
    const before={...world.renderer.domElement.dataset};done(older);await old;assert.deepEqual(world.renderer.domElement.dataset,before);assert.deepEqual(Object.keys(art.longMotionPoses),['gwon']);art.dispose();
  });
  await test('긴 시트 한 장 실패는 같은 의상의 기존 동작으로 대체하며 반복하지 않는다',async()=>{
    const {art,world}=fixture();art.longMotionPoses={};const p=art.prepareLongMotion([{heroId:'yi',skin:'yi_gold'},{heroId:'gwon'}]);for(const r of pending.slice())done(r,r.url.includes('yi_gold'));
    await p;assert.equal(world.renderer.domElement.dataset.heroLongMotionStatus,'partial');assert.equal(art.longMotionPoses.yi_gold,null);assert.ok(art.longMotionPoses.gwon);const count=requests.length;assert.equal(art.prepareLongMotion([{heroId:'yi',skin:'yi_gold'},{heroId:'gwon'}]),p);assert.equal(requests.length,count);art.dispose();
  });
  await test('종료와 늦은 긴 로딩은 캔버스·GPU·준비 상태를 되살리지 않는다',async()=>{
    const {art,world}=fixture();art.longMotionPoses={};const p=art.prepareLongMotion([{heroId:'yi'}]);art.dispose();const before={...world.renderer.domElement.dataset};for(const r of pending.slice())done(r);await p;assert.deepEqual(art.longMotionPoses,{});assert.deepEqual(world.renderer.domElement.dataset,before);assert.equal(art.loading,false);assert.equal(art.longMotionRequests.size,0);assert.equal(art.textures.size,0);
  });
}finally{globalThis.document=oldDoc;T.ImageLoader.prototype.load=oldLoad;console.warn=oldWarn;}
await fs.writeFile('docs/LONG_MOTION_RUNTIME_VALIDATION.json',JSON.stringify({generatedAt:new Date().toISOString(),tests:results.length,allPassed:true,looks:24,newPoses:384,walkPhases:6,attackPhases:5,ownerArtIsolationPreserved:true,displayOnly:true,results},null,2)+'\n');
console.log('\n긴 영웅 동작 '+results.length+'개 검증 통과');
