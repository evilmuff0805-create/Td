import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import * as T from 'three';
import {updateSpriteMotion} from '../src/3d/sprite-motion.js';
import {FixedBattleArt} from '../src/3d/fixed-art.js';
import {WinterWorld} from '../src/3d/world.js';
import {Renderer3D} from '../src/3d/renderer.js';
import {CrowdRenderer} from '../src/3d/crowd.js';
import {HERO_POSE_ART} from '../src/3d/hero-pose-data.js';
import {HERO_INBETWEEN_ART} from '../src/3d/inbetween-data.js';
import {COMBAT_POSE_ART} from '../src/3d/combat-pose-data.js';
import {COMBAT_INBETWEEN_ART} from '../src/3d/combat-inbetween-data.js';
import {SEASONS} from '../src/3d/seasons.js';
import {Session} from '../src/game/session.js';
import {GameUI} from '../src/ui/hud.js';
import {SnapshotEncoder,emptyView,applySnapshot} from '../src/sim/snapshot.js';
import {newWinterGame} from '../src/3d/scenario.js';
import {DT} from '../src/sim/sim.js';
import {spawnEnemy} from '../src/sim/combat.js';
import {paintBattleEvent} from '../src/3d/battle-events.js';

const results=[];
function test(name,run){run();results.push({name,passed:true});console.log('  ✔ '+name);}
const sample=(extra={})=>({kind:'yi',x:8,z:5,time:0,dt:DT,hp:100,inbetweens:true,facingX:1,facingY:-1,...extra});
function passing(kind='yi',fps=60,row=4){
  let a=updateSpriteMotion(null,sample({kind,dt:1/fps})),x=8,time=0;
  for(let i=0;i<fps*3;i++){
    x+=1.2/fps;time+=1/fps;a=updateSpriteMotion(a.state,sample({kind,x,time,dt:1/fps}));
    if(a.row===row&&a.blend>.6)return {a,x,time};
  }throw new Error('No passing pose: '+kind);
}
const mockAtlas=l=>({poseAtlas:true,canvas:{width:l.width,height:l.height},frames:l.frames,isolated:l.frames.map(f=>({canvas:{width:f.width+24,height:f.height+24},frame:{...f,left:12,top:12}}))});
function context(){
  const camera=new T.OrthographicCamera(-8,8,6,-6,.1,100);camera.position.set(17,26,26);camera.lookAt(0,0,0);camera.updateMatrixWorld();
  const world=Object.assign(Object.create(WinterWorld.prototype),{camera,theme:{id:'winter',...SEASONS.winter},renderer:{domElement:{dataset:{}}},scene:new T.Scene(),units:new Map(),unitTemplates:new Map(),towers:new Map(),bullets:new Map(),scenery:new Map(),corpses:[],pickables:[],enemyCues:new Map(),heroCues:new Map(),range:new T.Group(),placement:new T.Group(),marker:new T.Group(),batchCrowd:false,projectiles(){},combatScenery(){},fx:{reset(){}}});
  world.crowd=new CrowdRenderer(world.scene);
  const art=Object.assign(Object.create(FixedBattleArt.prototype),{world,ready:true,loading:false,textures:new Map(),materials:new Map(),geometries:new Map(),heroPoses:{yi:mockAtlas(HERO_POSE_ART.yi)},skinPoses:{},inbetweenPoses:{yi:mockAtlas(HERO_INBETWEEN_ART.yi)},combatPoses:{enemy:{teppo:mockAtlas(COMBAT_POSE_ART.enemy.teppo)},ally:{}},combatInbetweens:{enemy:{teppo:mockAtlas(COMBAT_INBETWEEN_ART.teppo)},ally:{}}});
  art.yi=art.heroPoses.yi;art.shadowTexture=new T.DataTexture(new Uint8Array([255,255,255,255]),1,1);art.shadowMaterial=new T.MeshBasicMaterial({map:art.shadowTexture});world.art=art;return {world,art};
}
function yaw(camera,x,y){
  const r=new T.Vector3(1,0,0).applyQuaternion(camera.quaternion).setY(0).normalize(),u=new T.Vector3(0,1,0).applyQuaternion(camera.quaternion).setY(0).normalize();
  const d=r.multiplyScalar(x).addScaledVector(u,y);return Math.atan2(d.x,d.z);
}
function appearance(root){
  const d=root.userData.fixedImage;root.updateMatrixWorld(true);
  return {pose:d.poseIndex,quaternion:d.image.getWorldQuaternion(new T.Quaternion()),position:d.image.getWorldPosition(new T.Vector3()),muzzle:root.userData.weapons[1].getWorldPosition(new T.Vector3()),shadow:d.shadow.matrixWorld.clone(),phase:d.motionPhase};
}
function sameAppearance(a,b){
  assert.equal(a.pose,b.pose);assert.ok(a.quaternion.angleTo(b.quaternion)<1e-7);assert.ok(a.position.distanceTo(b.position)<1e-8);assert.ok(a.muzzle.distanceTo(b.muzzle)<1e-8);
  for(let i=0;i<16;i++)assert.ok(Math.abs(a.shadow.elements[i]-b.shadow.elements[i])<1e-7);assert.equal(a.phase,b.phase);
}

test('영웅·병력의 중간 걸음 A·B는 다음 디딤을 거쳐 준비 자세로 끝나며 위치·거리 위상을 바꾸지 않는다',()=>{
  const kinds=[...Object.keys(HERO_POSE_ART),...Object.values(COMBAT_POSE_ART).flatMap(Object.keys)].filter(k=>!['ram','turtle'].includes(k));
  for(const kind of kinds)for(const [pass,landing]of [[4,2],[5,1]]){
    let {a,x,time}=passing(kind,60,pass),phase=a.phase,rows=[];
    for(let i=0;i<12;i++){time+=DT;a=updateSpriteMotion(a.state,sample({kind,x,time}));rows.push(a.row);assert.equal(a.phase,phase);assert.equal(a.state.x,x);}
    assert.equal(rows[0],pass);assert.ok(rows.includes(landing),kind);assert.equal(rows.at(-1),0);assert.equal(a.settling,false);assert.equal(a.lift,0);assert.equal(a.lean,0);
    assert.ok(rows.every(r=>[pass,landing,0].includes(r)));
  }
});
test('20·60·120fps와 오래 멈춘 게스트 서버 시각에서도 발 정리는 120ms 뒤 첫 프레임까지 끝난다',()=>{
  for(const fps of [20,60,120]){
    let {a,x,time}=passing('yi',fps),elapsed=0;a=updateSpriteMotion(a.state,sample({x,time,dt:1/fps}));assert.equal(a.settling,true);
    while(a.settling&&elapsed<1){elapsed+=1/fps;a=updateSpriteMotion(a.state,sample({x,time,dt:1/fps}));}
    assert.ok(elapsed>=.12-1e-9&&elapsed<=.12+1/fps+1e-9);assert.equal(a.row,0);
  }
});
test('발 정리 도중 공격은 즉시 실제 타격 자세를 표시하고 이동 재개도 지연되지 않는다',()=>{
  for(const mode of ['attack','walk']){
    let {a,x,time}=passing();time+=DT;a=updateSpriteMotion(a.state,sample({x,time}));assert.equal(a.settling,true);
    time+=DT;const extra=mode==='attack'?{actionSeq:1,actionAt:time,actionDuration:.25}:{x:x+.04};
    a=updateSpriteMotion(a.state,sample({x,time,...extra}));assert.equal(a.settling,false);if(mode==='attack')assert.equal(a.row,3);else assert.ok([1,4,2,5].includes(a.row));
  }
});
test('60Hz 전투와 120Hz 화면의 반복 위치에서도 병력·거북선·충차가 준비 자세로 깜빡이지 않는다',()=>{
  for(const kind of ['yi','ashigaru','courier','cavalry','turtle','ram']){
    let a=updateSpriteMotion(null,sample({kind,dt:1/120}));
    for(let frame=1;frame<=180;frame++){
      a=updateSpriteMotion(a.state,sample({kind,x:8+Math.floor(frame/2)*.02,time:Math.floor(frame/2)/60,dt:1/120}));
      if(frame>12)assert.ok([1,4,2,5].includes(a.row),kind+' frame '+frame+' row '+a.row);
    }
  }
});
test('발 정리 도중 일시정지와 늦은 위치·공격 패킷은 자세를 유지하고 재개 때만 적용한다',()=>{
  let {a,x,time}=passing();time+=DT;a=updateSpriteMotion(a.state,sample({x,time}));const before={...a};delete before.state;
  for(let i=0;i<6;i++){a=updateSpriteMotion(a.state,sample({x:x+4,time:time+.1,dt:0,frozen:true,actionSeq:1,actionAt:time+.1,facingX:-1}));const visual={...a};delete visual.state;assert.deepEqual(visual,before);}
  a=updateSpriteMotion(a.state,sample({x:x+4,time:time+.1,actionSeq:1,actionAt:time+.1,facingX:-1}));assert.equal(a.row,3);assert.equal(a.settling,false);assert.equal(a.phase,0);assert.equal(a.facing,3);
});
test('기절·텔레포트·되감기는 발 정리 상태를 취소하며 기절은 거리 위상을 보존한다',()=>{
  for(const mode of ['stun','jump','rewind']){
    let {a,x,time}=passing();time+=DT;a=updateSpriteMotion(a.state,sample({x,time}));const phase=a.phase;
    a=updateSpriteMotion(a.state,sample({x,time:time+DT,...(mode==='stun'?{stunned:true}:mode==='jump'?{x:x+5}:{time:0})}));
    assert.equal(a.settling,false);assert.equal(a.row,0);assert.equal(a.phase,mode==='stun'?phase:0);
  }
});
test('8도 방향 경계에서는 그림을 유지하고 실제 회전은 네 방향 모두 전환한다',()=>{
  for(const [x,y]of [[.02,-1],[1,.02],[-.02,1],[-1,-.02]]){
    let a=updateSpriteMotion(null,sample({facingX:x,facingY:y})),first=a.facing;
    for(let i=1;i<=40;i++){
      const small=Math.sin(i)*.06;a=updateSpriteMotion(a.state,sample({time:i*DT,facingX:Math.abs(x)<.1?small:x,facingY:Math.abs(y)<.1?small:y}));assert.equal(a.facing,first);
    }
    a=updateSpriteMotion(a.state,sample({time:1,facingX:-x,facingY:-y}));assert.notEqual(a.facing,first);assert.equal(a.sign,a.facing<2?1:-1);
  }
});
test('새 공격의 정확한 조준은 경계를 즉시 넘고 같은 조준 신호는 반복해서 방향을 흔들지 않는다',()=>{
  const aim={};let a=updateSpriteMotion(null,sample({facingX:.02,facingY:-1}));assert.equal(a.facing,0);
  a=updateSpriteMotion(a.state,sample({time:DT,facingX:-.02,facingY:-1,actionSeq:1,actionAt:DT,aimKey:aim}));assert.equal(a.facing,3);
  for(let i=2;i<=12;i++){a=updateSpriteMotion(a.state,sample({time:i*DT,facingX:.02,facingY:-1,actionSeq:1,actionAt:DT,aimKey:aim}));assert.equal(a.facing,3);}
  a=updateSpriteMotion(a.state,sample({time:.3,facingX:.02,facingY:-1,actionSeq:2,actionAt:.3,aimKey:{}}));assert.equal(a.facing,0);
});
test('실제 월드의 pause 중 늦은 적 조준도 원화·기울기·반동·그림자·총구를 함께 고정한다',()=>{
  const {world,art}=context(),game=newWinterGame();game.heroes=[];game.towers=[];const e=spawnEnemy(game,'teppo',0,1);e.actionSeq=1;e.actionAt=0;e.actionDuration=.25;
  world.sync(game,0,DT,null);game.time=.1;world.sync(game,.1,DT,null);const root=world.units.get('e'+e.id),before=appearance(root);
  game.paused=true;e.actionSeq=2;e.actionAt=.2;game.time=.2;world.cueEnemies([{k:'shot',enemy:e.id,x1:e.x,y1:e.y,x2:e.x-4,y2:e.y-4}],game.time);world.sync(game,.2,0,null);sameAppearance(before,appearance(root));
  game.paused=false;world.sync(game,.2,DT,null);assert.equal(root.userData.fixedImage.pose,'attack');assert.notEqual(root.userData.fixedImage.facing,Math.floor(before.pose%4));world.reset();art.dispose();
});
test('실제 고정 카메라의 기울기와 관계없이 방향 경계 폭을 유지한다',()=>{
  for(const height of [12,26,60]){
    const {world,art}=context();world.camera.position.set(17,height,26);world.camera.lookAt(0,0,0);world.camera.updateMatrixWorld();const h={id:1,heroId:'yi',hp:100,maxHp:100},root=world.unit(h,true);
    root.rotation.y=yaw(world.camera,.02,-1);art.updateUnit(root,h,false,0,0,sample());const first=root.userData.fixedImage.facing;
    for(let i=1;i<=20;i++){root.rotation.y=yaw(world.camera,Math.sin(i)*.06,-1);art.updateUnit(root,h,false,0,i*DT,sample({time:i*DT}));assert.equal(root.userData.fixedImage.facing,first);}
    root.rotation.y=yaw(world.camera,-.2,-1);art.updateUnit(root,h,false,0,.4,sample({time:.4}));assert.equal(root.userData.fixedImage.facing,3);world.disposeCharacter(root);art.dispose();
  }
});
test('정지한 원화 검사기의 수동 방향도 타격 그림·기울기·반동·총구 부호를 함께 바꾼다',()=>{
  const {world,art}=context(),e={id:1,type:'teppo',hp:100,actionSeq:1,actionAt:0,actionDuration:.25},root=world.unit(e),right=new T.Vector3(1,0,0).applyQuaternion(world.camera.quaternion);
  root.rotation.y=yaw(world.camera,1,-1);art.updateUnit(root,e,false,.25,0,{...sample(),poseRow:3});const before=appearance(root);
  root.rotation.y=yaw(world.camera,-1,-1);art.updateUnit(root,e,false,.25,0,{...sample({dt:0,frozen:true}),poseRow:3});const after=appearance(root),d=root.userData.fixedImage;
  assert.equal(before.pose,12);assert.equal(after.pose,15);assert.ok(Math.abs(before.position.dot(right)+after.position.dot(right))<1e-8);assert.ok(Math.abs(before.muzzle.dot(right)+after.muzzle.dot(right))<1e-8);assert.equal(d.motion.visual.facing,0,'수동 검토 방향은 실제 pause 상태를 덮어쓰지 않는다');world.disposeCharacter(root);art.dispose();
});
test('겹쳐 선 동일 이순신 로컬 2인의 실제 기술과 스냅샷은 각 시전자만 즉시 조준한다',()=>{
  const session=new Session({kind:'local',stageId:'s1',difficulty:'normal',seed:8,specs:[{heroes:['yi']},{heroes:['yi']}]}),[a,b]=session.view.heroes;
  b.x=a.x;b.y=a.y;a.skillCd=b.skillCd=0;const ui=Object.assign(Object.create(GameUI.prototype),{s:session,p2keys:new Set(),lastP2Move:0,p2moving:false});
  session.send({t:'heroSkill',p:0,h:0,x:a.x+4,y:a.y});const first=session.update(DT).filter(e=>e.k==='cone');assert.equal(first.length,1);assert.equal(first[0].caster,a.id);
  b.skillCd=0;b.facing=-1;ui.p2Key({code:'KeyA'});const events=session.update(DT).filter(e=>e.k==='cone');assert.equal(events.length,1);assert.equal(events[0].caster,b.id);assert.notEqual(events[0].a,first[0].a);
  const packet=JSON.parse(JSON.stringify(new SnapshotEncoder().encode(session.state,events))),view=emptyView({stageId:'s1',difficulty:'normal'});applySnapshot(view,packet);assert.equal(packet.ev[0].caster,b.id);
  const {world,art}=context();world.cueHeroes(packet.ev,view);assert.equal(world.heroCues.has(a.id),false);assert.equal(world.heroCues.has(b.id),true);world.sync(view,view.time,DT,null);
  const rb=world.units.get('h'+b.id),d=rb.userData.fixedImage;assert.ok(Math.abs(rb.rotation.y-(Math.PI/2-events[0].a))<1e-9);assert.equal(d.pose,'attack');
  const before=rb.quaternion.clone();world.fx.volley=()=>{};paintBattleEvent(world,events[0],view);assert.ok(rb.quaternion.angleTo(before)<1e-9);world.reset();assert.equal(world.heroCues.size,0);art.dispose();session.destroy();
});
test('이전 cone 패킷은 시전자가 한 명일 때만 보완하고 적 사격을 영웅 조준으로 혼동하지 않는다',()=>{
  const {world,art}=context(),a={id:1,heroId:'yi',x:4,y:4},b={...a,id:2},cone={k:'cone',x:4,y:4,a:.8};
  world.cueHeroes([cone],{heroes:[a,b],time:0});assert.equal(world.heroCues.size,0);world.cueHeroes([cone],{heroes:[b],time:0});assert.ok(world.heroCues.has(b.id));world.heroCues.clear();
  world.cueHeroes([{k:'shot',enemy:9,x1:4,y1:4,x2:8,y2:8}],{heroes:[a,b],time:0});assert.equal(world.heroCues.size,0);art.dispose();
});
test('정식 렌더러는 조준 수집→본체 배치→효과 순서를 지켜 발사 프레임의 그림이 틀어지지 않는다',()=>{
  const order=[],world={prepareHeroLooks(){},art:{loading:false},cueEnemies(){order.push('enemyAim');},cueHeroes(){order.push('heroAim');},sync(){order.push('sync');},fx:{preview(){},update(){}},buildPreview(){},draw(){order.push('draw');},renderer:{info:{memory:{},render:{}}}};
  const renderer=Object.assign(Object.create(Renderer3D.prototype),{world,canvas:{dataset:{},clientWidth:800,clientHeight:600},loadingLayer:{},pending:[{k:'cone'}],effect(){order.push('effect');},p2:{},p2Preview:{},labels:{update(){}},buildLayer:{},damage(){},statusMarkers(){},frames:0,fpsAt:performance.now()});
  renderer.render({heroes:[],enemies:[],summons:[],towers:[],time:1,speed:1,paused:false},{clock:1,selHeroes:[]},DT);
  assert.deepEqual(order,['enemyAim','heroAim','sync','effect','draw']);assert.equal(renderer.pending.length,0);
});

await fs.writeFile(new URL('../docs/MOTION_TRANSITION_RUNTIME_VALIDATION.json',import.meta.url),JSON.stringify({date:'2026-10-11',passed:results.length,scope:'display transitions, paused world transforms, aimed first frame, same-hero local co-op and legacy event fallback; no combat rule changes',tests:results},null,2)+'\n');
console.log(`\n캐릭터 전환 ${results.length}개 검증 통과`);
