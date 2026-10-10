import assert from 'node:assert/strict';
import * as T from 'three';
import { updateSpriteMotion,previewMotion } from '../src/3d/sprite-motion.js';
import { FixedBattleArt } from '../src/3d/fixed-art.js';
import { HERO_POSE_ART } from '../src/3d/hero-pose-data.js';
import { createGame,applyCommand,step,DT } from '../src/sim/sim.js';
import { actionCue,spawnEnemy,addSummon } from '../src/sim/combat.js';
import { SnapshotEncoder,emptyView,applySnapshot,lerpView } from '../src/sim/snapshot.js';
import { Session } from '../src/game/session.js';
import { GameUI } from '../src/ui/hud.js';

let passed=0;const test=(name,run)=>{run();passed++;console.log('  ✔ '+name);};
const sample=(extra={})=>({kind:'yi',x:8,z:5,time:0,dt:DT,hp:100,attack:0,...extra});
const game=()=>createGame({stageId:'s1',difficulty:'normal',mode:'local',seed:8,
  players:[{heroes:['yi'],skills:['singijeon','bongsu']},{heroes:['sejong'],skills:['singijeon','bongsu']}]});

test('생성 위치와 정지 시간은 보행 거리로 세지 않는다',()=>{
  let a=updateSpriteMotion(null,sample({x:22,z:10}));assert.equal(a.row,0);
  for(let i=0;i<120;i++)a=updateSpriteMotion(a.state,sample({x:22,z:10,time:i*DT}));
  assert.equal(a.row,0);assert.equal(a.phase,0);assert.equal(a.lift,0);
});
test('동일 거리는 20·60·120fps와 이동 속도에 관계없이 동일한 발걸음 위상이다',()=>{
  const phases=[];
  for(const [fps,seconds]of [[20,1],[60,1],[120,1],[60,2]]){
    let a=updateSpriteMotion(null,sample());
    for(let i=1;i<=fps*seconds;i++)a=updateSpriteMotion(a.state,sample({x:8+i/(fps*seconds)*1.5,time:i/fps,dt:1/fps}));
    phases.push(a.phase);
  }
  assert.ok(phases.every(p=>Math.abs(p-phases[0])<1e-10));
});
test('두 걸음 사이 접지와 출발·정지의 작은 기울기가 이어진다',()=>{
  let a=updateSpriteMotion(null,sample()),rows=new Set();
  for(let i=1;i<=60;i++){a=updateSpriteMotion(a.state,sample({x:8+i*.02,time:i*DT}));rows.add(a.row);assert.ok(a.lift<=.009);assert.ok(Math.abs(a.lean)<.03);}
  assert.deepEqual([...rows].sort(),[0,1,2]);
  const before=a.blend;for(let i=61;i<=90;i++)a=updateSpriteMotion(a.state,sample({x:9.2,time:i*DT}));
  assert.equal(a.row,0);assert.ok(a.blend<before*.001);
});
test('정지·기절 중 들어온 위치를 누적하지 않고 재개한다',()=>{
  let a=updateSpriteMotion(null,sample());a=updateSpriteMotion(a.state,sample({x:8.1,time:DT}));const phase=a.phase;
  a=updateSpriteMotion(a.state,sample({x:8.2,time:DT,dt:0,frozen:true}));assert.equal(a.phase,phase);
  a=updateSpriteMotion(a.state,sample({x:8.3,time:2*DT,stunned:true}));assert.equal(a.phase,phase);assert.equal(a.row,0);
  a=updateSpriteMotion(a.state,sample({x:8.3,time:3*DT}));assert.equal(a.phase,phase);
  a=updateSpriteMotion(a.state,sample({x:8.32,time:4*DT}));assert.ok(a.phase>phase&&a.phase-phase<.05);
});
test('공격은 실제 발사 순간에 시작하고 같은 스냅샷 타이머로 재시작하지 않는다',()=>{
  let a=updateSpriteMotion(null,sample({actionSeq:1,actionAt:0,actionDuration:.25,attack:.2}));assert.equal(a.row,3);
  for(let i=1;i<=24;i++)a=updateSpriteMotion(a.state,sample({time:i*DT,actionSeq:1,actionAt:0,actionDuration:.25,attack:.2}));
  assert.equal(a.row,0);assert.equal(a.attacking,false);
  a=updateSpriteMotion(a.state,sample({time:.4,actionSeq:2,actionAt:.4,actionDuration:.25,attack:.2}));assert.equal(a.row,3);
});
test('게스트의 고정된 서버 시각 사이에도 보행과 공격 복귀가 진행한다',()=>{
  let a=updateSpriteMotion(null,sample({time:1,actionSeq:3,actionAt:.83,actionDuration:.25}));
  for(let i=1;i<=5;i++)a=updateSpriteMotion(a.state,sample({x:8+i*.02,time:1,actionSeq:3,actionAt:.83,actionDuration:.25}));
  assert.ok(a.phase>0);assert.equal(a.row===3,false);assert.ok(a.state.clock>1);
  const clock=a.state.clock;a=updateSpriteMotion(a.state,sample({x:8.1,time:1,dt:0,frozen:true,actionSeq:3,actionAt:.83}));assert.equal(a.state.clock,clock);
  a=updateSpriteMotion(a.state,sample({x:8.1,time:1.5,dt:0,frozen:true,actionSeq:3,actionAt:.83}));assert.equal(a.state.clock,clock,'늦은 pause 패킷도 표시 동작을 진행하지 않음');
});
test('체력 감소만 피격 반응을 만들고 치유·생성은 반응하지 않는다',()=>{
  let a=updateSpriteMotion(null,sample());a=updateSpriteMotion(a.state,sample({time:DT,hp:90}));
  a=updateSpriteMotion(a.state,sample({time:.1,hp:90}));assert.ok(a.hit>.8);
  a=updateSpriteMotion(a.state,sample({time:.4,hp:100}));assert.equal(a.hit,0);
});
test('거북선·공성차는 사람처럼 위아래로 뛰거나 기울지 않는다',()=>{
  for(const kind of ['turtle','ram']){
    let a=updateSpriteMotion(null,sample({kind}));for(let i=1;i<=30;i++){a=updateSpriteMotion(a.state,sample({kind,x:8+i*.03,time:i*DT}));assert.equal(a.lift,0);assert.equal(a.lean,0);}
    assert.ok(a.phase>0);
  }
});
test('텔레포트와 시간 되감기는 이전 보행을 초기화한다',()=>{
  let a=updateSpriteMotion(null,sample());a=updateSpriteMotion(a.state,sample({x:8.1,time:.1}));assert.ok(a.phase>0);
  a=updateSpriteMotion(a.state,sample({x:20,time:.2}));assert.equal(a.row,0);assert.equal(a.phase,0);
  a=updateSpriteMotion(a.state,sample({x:20.1,time:.3}));assert.ok(a.phase>0);
  a=updateSpriteMotion(a.state,sample({x:8,time:0}));assert.equal(a.phase,0);
});
test('시뮬레이션은 허용된 공격에만 번호·시각을 기록한다',()=>{
  const s=game(),a=s.heroes[0],b=s.heroes[1];a.skillCd=b.skillCd=0;
  applyCommand(s,{t:'heroSkill',p:1,h:0,x:5,y:5});assert.equal(a.actionSeq,undefined);
  applyCommand(s,{t:'heroSkill',p:0,h:0,x:5,y:5});assert.equal(a.actionSeq,1);assert.equal(a.actionAt,s.time);
  applyCommand(s,{t:'heroSkill',p:0,h:0,x:5,y:5});assert.equal(a.actionSeq,1);
  applyCommand(s,{t:'heroSkill',p:1,h:1,x:5,y:5});assert.equal(b.actionSeq,1);assert.equal(a.actionSeq,1);
});
test('신규 동작 정보 왕복과 이전 버전의 영웅·적군·소환수 스냅샷을 모두 읽는다',()=>{
  const s=game();spawnEnemy(s,'ashigaru',0,1);addSummon(s,{kind:'militia',x:4,y:4,hp:100,maxHp:100,owner:0});
  for(const o of [...s.heroes,...s.enemies,...s.summons])actionCue(s,o,.25);
  const packet=JSON.parse(JSON.stringify(new SnapshotEncoder().encode(s,[]))),v=emptyView({stageId:'s1',difficulty:'normal'});
  applySnapshot(v,packet);
  for(const o of [...v.heroes,...v.enemies,...v.summons]){assert.equal(o.actionSeq,1);assert.equal(o.actionAt,0);assert.equal(o.actionDuration,.25);}
  const old={...packet,h:packet.h.map(a=>a.slice(0,19)),e:packet.e.map(a=>a.slice(0,10)),su:packet.su.map(a=>a.slice(0,8))};
  applySnapshot(v,old);for(const o of [...v.heroes,...v.enemies,...v.summons])assert.equal(o.actionSeq,undefined);
});
test('스냅샷의 작은 이동은 보간하고 큰 재출전 보정은 한 번에 적용한다',()=>{
  const s=game();addSummon(s,{kind:'militia',x:4,y:4,hp:100,maxHp:100,owner:0});
  const enc=new SnapshotEncoder(),v=emptyView({stageId:'s1',difficulty:'normal'});applySnapshot(v,enc.encode(s,[]));
  const hx=s.heroes[0].x;s.heroes[0].x+=.1;s.summons[0].x+=.1;applySnapshot(v,enc.encode(s,[]));lerpView(v,.5);
  assert.ok(Math.abs(v.heroes[0].x-(hx+.05))<.011);assert.ok(Math.abs(v.summons[0].x-4.05)<.001);
  s.heroes[0].x+=5;s.summons[0].x+=5;applySnapshot(v,enc.encode(s,[]));lerpView(v,.2);
  assert.ok(Math.abs(v.heroes[0].x-s.heroes[0].x)<.011);assert.equal(v.summons[0].x,9.1);
  s.heroes[0].dead=true;applySnapshot(v,enc.encode(s,[]));s.heroes[0].dead=false;s.heroes[0].x+=.8;applySnapshot(v,enc.encode(s,[]));lerpView(v,.2);
  assert.ok(Math.abs(v.heroes[0].x-s.heroes[0].x)<.011,'가까운 재출전도 중간 위치를 거치지 않음');
});
test('로컬 1P 이동과 실제 2P 방향키·기술 입력은 각자의 영웅만 조작한다',()=>{
  const s=new Session({kind:'local',stageId:'s1',difficulty:'normal',seed:8,specs:[{heroes:['yi']},{heroes:['sejong']}]});
  const ui=Object.assign(Object.create(GameUI.prototype),{s,p2keys:new Set(),lastP2Move:0,p2moving:false});
  const [a,b]=s.view.heroes,ax=a.x,bx=b.x,az=a.y;
  s.send({t:'move',p:0,h:0,x:ax-1,y:az});ui.p2Key({code:'ArrowRight'});
  for(let i=1;i<=30;i++){ui.p2Tick(i*1000/60);s.update(DT);}
  assert.ok(a.x<ax&&b.x>bx);ui.p2keys.clear();ui.p2Tick(600);s.update(DT);
  b.skillCd=0;const p1Skill=a.skillCd;ui.p2Key({code:'KeyA'});s.update(DT);assert.ok(b.skillCd>0);assert.ok(a.skillCd<=p1Skill&&a.skillCd>p1Skill-.02);
  let ma=updateSpriteMotion(null,sample({x:a.x,z:a.y,time:s.view.time})),mb=updateSpriteMotion(null,sample({x:b.x,z:b.y,time:s.view.time}));
  ma=updateSpriteMotion(ma.state,sample({x:a.x+.1,z:a.y,time:s.view.time+DT}));mb=updateSpriteMotion(mb.state,sample({x:b.x,z:b.y,time:s.view.time+DT}));
  assert.ok(ma.phase>0);assert.equal(mb.phase,0);assert.notEqual(ma.state,mb.state);s.destroy();
});
test('동작 변환은 본체·가림 표시·그림자에 같이 적용하고 원본 지오메트리를 건드리지 않는다',()=>{
  const camera=new T.OrthographicCamera(-8,8,6,-6,.1,100);camera.position.set(17,26,26);camera.lookAt(0,0,0);camera.updateMatrixWorld();
  const world={camera,theme:{id:'winter',snow:true},renderer:{domElement:{dataset:{}}}},layout=HERO_POSE_ART.yi;
  const atlas={poseAtlas:true,canvas:{width:layout.width,height:layout.height},frames:layout.frames,isolated:layout.frames.map(frame=>({canvas:{width:frame.width+24,height:frame.height+24},frame:{...frame,left:12,top:12}}))};
  const art=Object.assign(Object.create(FixedBattleArt.prototype),{world,ready:true,yi:atlas,textures:new Map(),materials:new Map(),geometries:new Map(),shadowMaterial:new T.MeshBasicMaterial(),shadowTexture:new T.DataTexture(new Uint8Array([255,255,255,255]),1,1)});
  const root=new T.Group(),entity={heroId:'yi',hp:100,owner:1,actionSeq:1,actionAt:0,actionDuration:.25};root.userData.entity={id:2};root.rotation.y=1.4;
  art.attachUnit(root,entity,true,false);const d=root.userData.fixedImage;
  art.updateUnit(root,entity,false,.2,0,sample());const geometry=d.image.geometry,before=Array.from(geometry.attributes.position.array);
  art.updateUnit(root,entity,false,.2,.08,sample({time:.08}));
  assert.ok(d.image.quaternion.angleTo(d.hint.quaternion)<1e-9);assert.deepEqual(d.image.position.toArray(),d.hint.position.toArray());assert.equal(d.shadow.geometry,d.image.geometry);
  const projection=new T.Matrix4().set(1,.5,0,0,0,0,0,.042,0,-.75,1,0,0,0,0,1),rotation=new T.Matrix4().makeRotationFromQuaternion(root.quaternion);
  const point=new T.Vector3(.1,1,0),expected=point.clone().applyMatrix4(d.image.matrix).applyMatrix4(rotation).applyMatrix4(projection),actual=point.clone().applyMatrix4(d.shadow.matrix).applyMatrix4(rotation);
  assert.ok(expected.distanceTo(actual)<1e-7);assert.deepEqual(Array.from(geometry.attributes.position.array),before);
  art.updateDeath(root,.7);assert.equal(d.hint.visible,false);assert.ok(d.image.material.opacity<.5);assert.equal(d.shadow.visible,false);assert.equal(root.scale.x,1);
  art.updateUnit(root,entity,false,0,1,sample({time:1}));assert.equal(d.image.material.opacity,1);assert.equal(d.shadow.visible,true);assert.equal(d.hint.visible,true);assert.equal(d.motionPhase,0);
  for(const o of [d.image,d.hint])o.material.dispose();d.contact.geometry.dispose();art.dispose();
});
test('포즈 비교 재생은 실제 전장 동작을 사용하며 공격은 복귀 후 새로 발사한다',()=>{
  let a=updateSpriteMotion(null,previewMotion('attack',0,DT,'yi'));assert.equal(a.row,3);
  for(let i=1;i<=40;i++)a=updateSpriteMotion(a.state,previewMotion('attack',i*DT,DT,'yi'));assert.equal(a.row,0);
  a=updateSpriteMotion(a.state,previewMotion('attack',.9,DT,'yi'));assert.equal(a.row,3);
  a=updateSpriteMotion(a.state,previewMotion('walk',0,DT,'yi'));assert.equal(a.phase,0);assert.equal(a.row,0);
});
console.log(`\n캐릭터 동작 ${passed}개 검증 통과`);
