import assert from 'node:assert/strict';
import * as T from 'three';
import { ENEMIES } from '../src/data/enemies.js';
import { STAGES } from '../src/data/stages.js';
import { ENEMY_FORMS } from '../src/3d/enemy-design.js';
import { combatantModel,cloneCombatantModel } from '../src/3d/combat-models.js';
import { animateCharacter } from '../src/3d/models.js';
import { faceGeometry } from '../src/3d/sculpture.js';
import { CrowdRenderer } from '../src/3d/crowd.js';
import { WinterWorld } from '../src/3d/world.js';
import { Renderer3D } from '../src/3d/renderer.js';
import { BattleEffects } from '../src/3d/effects.js';
import { seasonFor } from '../src/3d/seasons.js';
import { createGame,step,DT } from '../src/sim/sim.js';
import { spawnEnemy } from '../src/sim/combat.js';
import { SnapshotEncoder,emptyView,applySnapshot } from '../src/sim/snapshot.js';

let passed=0;
const test=(name,fn)=>{fn();passed++;console.log(`  ✔ ${name}`);};
const quietGame=(heroes=[])=>createGame({stageId:'s1',mode:'solo',seed:31,courier:false,players:[{heroes,skills:[],towers:[]}]});
const transfer=(s,events)=>{
  const packet=JSON.parse(JSON.stringify(new SnapshotEncoder().encode(s,events))),view=emptyView(s);
  applySnapshot(view,packet);assert.deepEqual(packet.ev,events);return {view,events:packet.ev};
};
const testWorld=()=>{
  const world=Object.assign(Object.create(WinterWorld.prototype),{scene:new T.Scene(),camera:new T.OrthographicCamera(),theme:seasonFor(STAGES[0]),units:new Map(),towers:new Map(),bullets:new Map(),scenery:new Map(),corpses:[],pickables:[],glowTex:null,range:new T.Group(),placement:new T.Group(),marker:new T.Group(),enemyCues:new Map(),unitTemplates:new Map()});
  world.fx=new BattleEffects(world.scene,null);world.crowd=new CrowdRenderer(world.scene);return world;
};
test('22종 실제 적에 미술 설정이 있고 12개 적장 실루엣·21개 얼굴은 서로 다름',()=>{
  assert.deepEqual(Object.keys(ENEMY_FORMS).sort(),Object.keys(ENEMIES).sort());
  const bossForms=new Set(),faces=new Set(),warnings=[],warn=console.warn;
  console.warn=(...args)=>warnings.push(args.join(' '));
  try {
    for(const [kind,def]of Object.entries(ENEMIES)) {
      const root=combatantModel(kind),f=ENEMY_FORMS[kind];
      if(def.tier===4)bossForms.add(f.helmet);
      if(kind!=='ram') {
        faces.add(Array.from(faceGeometry(kind).attributes.position.array).join(','));
        assert.deepEqual(root.userData.rig.scale.toArray(),f.body);
      }
      for(let j=0;j<8;j++) {
        animateCharacter(root,j*.13,j%2===0,j/7*.25,1/60);root.updateMatrixWorld(true);
        root.traverse(o=>{assert.ok(o.matrixWorld.elements.every(Number.isFinite),`${kind} 변환`);if(o.isMesh)for(const attr of Object.values(o.geometry.attributes))assert.ok(attr.array.every(Number.isFinite),`${kind} 정점`);});
      }
      assert.ok(root.userData.labelHeight>1.3&&root.userData.labelHeight<3.8,`${kind} 전장 크기`);
    }
  } finally {console.warn=warn;}
  assert.deepEqual(warnings,[]);assert.equal(bossForms.size,12);assert.equal(faces.size,21);
});
test('창·장도·화승총의 보조 손은 실제 무기 소켓을 붙잡고 복제·회전에서도 유지',()=>{
  for(const kind of ['ashigaru','teppo','cavalry','kato','kuroda','todo']) {
    const template=combatantModel(kind),root=cloneCombatantModel(template),d=root.userData,rest=template.userData.wrists[0].quaternion.toArray();
    assert.notEqual(d.weapons[1],template.userData.weapons[1]);
    for(let j=0;j<48;j++) {
      root.position.set(3,.035,6);root.rotation.y=j*.21;animateCharacter(root,j*.043,j%2===0,(j%9)/8*.25,1/60);root.updateMatrixWorld(true);
      const support=d.weapons[1].localToWorld(new T.Vector3(...d.weapons[1].userData.support)),hand=d.wrists[0].getWorldPosition(new T.Vector3());
      assert.ok(support.distanceTo(hand)<1e-8,`${kind} ${j} 보조 손 연결`);
      assert.deepEqual(d.weapons[1].position.toArray(),[0,0,0]);
    }
    assert.deepEqual(template.userData.wrists[0].quaternion.toArray(),rest);
  }
});
test('지상 병력과 적장 20종의 발바닥은 지면 위에서 디디고 발목이 수평을 유지',()=>{
  for(const kind of Object.keys(ENEMIES).filter(k=>!['ram','cavalry'].includes(k))) {
    const root=combatantModel(kind);root.position.y=.035;let lifted=0;
    for(let j=0;j<64;j++) {
      root.rotation.y=j*.17;animateCharacter(root,j*.041,true,(j%7)/6*.25,1/60);root.updateMatrixWorld(true);
      const heights=root.userData.ankles.map(foot=>{
        const y=new T.Box3().setFromObject(foot).min.y-root.position.y;
        assert.ok(y>=0&&y<.11,`${kind} ${j} 발바닥 ${y}`);
        assert.ok(new T.Vector3(0,1,0).transformDirection(foot.matrixWorld).y>.999999);lifted=Math.max(lifted,y);return y;
      });
      assert.ok(Math.min(...heights)<.007,`${kind} 두 발 모두 공중`);
    }
    assert.ok(lifted>.045);
  }
});
test('말의 네 무릎·발굽은 대각선 속보로 접지하고 고삐는 실제 손과 연결',()=>{
  const template=combatantModel('cavalry'),root=cloneCombatantModel(template),d=root.userData;let lifted=0;
  for(let i=0;i<4;i++){assert.equal(d.horseKnees[i].parent,d.horseLegs[i]);assert.equal(d.horseHooves[i].parent,d.horseKnees[i]);assert.notEqual(d.horseHooves[i],template.userData.horseHooves[i]);}
  for(let j=0;j<64;j++) {
    root.position.set(2,.035,5);root.rotation.y=j*.21;animateCharacter(root,j*.047,true,(j%7)/6*.25,1/60);root.updateMatrixWorld(true);
    const heights=d.horseHooves.map(foot=>{const y=new T.Box3().setFromObject(foot).min.y-root.position.y;assert.ok(y>=0&&y<.08);lifted=Math.max(lifted,y);assert.ok(new T.Vector3(0,1,0).transformDirection(foot.matrixWorld).y>.999999);return y;});
    assert.ok(Math.abs(heights[0]-heights[3])<1e-8&&Math.abs(heights[1]-heights[2])<1e-8);assert.ok(Math.min(...heights)<.008);
    for(let i=0;i<2;i++) {
      const rein=d.horseReins[i],ends=[-.5,.5].map(y=>rein.localToWorld(new T.Vector3(0,y,0))),hand=d.wrists[0].getWorldPosition(new T.Vector3());
      const bit=root.localToWorld(new T.Vector3((i?1:-1)*.11,1.10,.65));
      assert.ok(ends.some(p=>p.distanceTo(hand)<1e-8)&&ends.some(p=>p.distanceTo(bit)<1e-8));
    }
  }
  assert.ok(lifted>.06);
});
test('충차의 통나무는 지붕과 분리된 관절이며 타격·바퀴·복제 자세가 독립',()=>{
  const template=combatantModel('ram'),root=cloneCombatantModel(template),d=root.userData,geometry=d.ramBeam.children[0].geometry,vertices=geometry.attributes.position.array.slice();
  assert.equal(d.ramBeam.parent,d.rig);assert.notEqual(d.ramBeam,template.userData.ramBeam);
  animateCharacter(root,.2,false,0,0);const rest=d.ramBeam.position.z;
  animateCharacter(root,.5,true,.15,1/60);assert.ok(d.ramBeam.position.z>rest+.1);assert.ok(d.wheels.every(w=>w.rotation.x===2.5));
  animateCharacter(root,.5,false,0,0);assert.equal(d.ramBeam.position.z,rest);assert.equal(template.userData.ramBeam.position.z,0);assert.deepEqual(geometry.attributes.position.array,vertices);
});
test('저지된 적의 실제 근접 타격은 반복되고 동작 타이머가 중간에 0으로 복원',()=>{
  const s=quietGame(['yi']),h=s.heroes[0],e=spawnEnemy(s,'samurai',0,1,1),strikes=[];
  h.hp=h.maxHp=100000;h.cd=100;e.x=h.x;e.y=h.y+.2;e.blockedBy=h.id;e.atkCd=0;h.engaged=[e.id];
  let reset=false;
  for(let j=0;j<140;j++) {
    s.events.length=0;step(s);for(const event of s.events)if(event.k==='enemyStrike'){assert.equal(event.enemy,e.id);strikes.push({time:s.time,event:{...event}});}
    if(j>16&&j<55&&e.swing===0)reset=true;
  }
  assert.ok(reset);assert.equal(strikes.length,3);
  for(let i=1;i<strikes.length;i++)assert.ok(strikes[i].time-strikes[i-1].time>=.99&&strikes[i].time-strikes[i-1].time<1.03);
  const {events}=transfer(s,strikes.map(x=>x.event));assert.ok(events.every(x=>x.enemy===e.id));assert.ok(h.hp<100000);
});
test('실제 조총 사격은 출처 ID·피해·재사용 간격을 보존하고 게스트에게 전달',()=>{
  const s=quietGame(['yi']),h=s.heroes[0],e=spawnEnemy(s,'teppo',0,1,1);h.cd=100;h.hp=h.maxHp=100000;
  e.x=h.x+.2;e.y=h.y+.2;e.blockedBy=h.id;e.atkCd=100;e.abT=0;h.engaged=[e.id];
  const shots=[];
  for(let j=0;j<142;j++){s.events.length=0;step(s);for(const event of s.events)if(event.k==='shot')shots.push({time:s.time,event:{...event}});}
  assert.equal(shots.length,2);assert.ok(shots[1].time-shots[0].time>=2.19);assert.ok(h.hp<100000);
  const {events,view}=transfer(s,shots.map(x=>x.event));assert.ok(view.enemies.some(x=>x.id===e.id));assert.ok(events.every(x=>x.enemy===e.id&&Number.isFinite(x.x2)&&Number.isFinite(x.y2)));
});
test('음양사 동작은 실제 성공한 치유 때만 발생하고 기존 6% 치유·중복 제한 보존',()=>{
  const s=quietGame(),healer=spawnEnemy(s,'onmyoji',0,1,1),patient=spawnEnemy(s,'ashigaru',0,1,1);healer.abT=0;patient.hp=patient.maxHp*.5;const before=patient.hp;
  s.events.length=0;step(s);const events=s.events.filter(e=>e.k==='enemyHeal');assert.equal(events.length,1);assert.equal(events[0].enemy,healer.id);assert.ok(Math.abs(patient.hp-before-patient.maxHp*.06)<1e-8);
  transfer(s,events);healer.abT=0;s.events.length=0;step(s);assert.equal(s.events.filter(e=>e.k==='enemyHeal').length,0,'2.5초 중복 제한');
  patient.hp=patient.maxHp;healer.abT=0;s.events.length=0;step(s);assert.equal(s.events.filter(e=>e.k==='enemyHeal').length,0,'회복 대상 없는 의식 금지');
});
test('같은 tick의 총격·근접 타격이 다른 대상을 향해도 실제 사격 방향을 보존',()=>{
  const s=quietGame(['yi','sejong']),[blocker,nearer]=s.heroes,e=spawnEnemy(s,'teppo',0,1,1);
  Object.assign(blocker,{x:5,y:5.5,cd:100});Object.assign(nearer,{x:5.1,y:5,cd:100});
  Object.assign(e,{x:5,y:5,blockedBy:blocker.id,atkCd:0,abT:0});blocker.engaged=[e.id];
  s.events.length=0;step(s);const events=s.events.filter(x=>x.enemy===e.id&&['shot','enemyStrike'].includes(x.k));
  assert.deepEqual(events.map(x=>x.k),['shot','enemyStrike']);const shot=events[0],strike=events[1],angle=Math.atan2(shot.x2-shot.x1,shot.y2-shot.y1);
  assert.ok(Math.abs(angle-Math.PI/2)<1e-8);assert.equal(Math.atan2(strike.x2-strike.x1,strike.y2-strike.y1),0);
  for(const order of [events,events.slice().reverse()])for(const guest of [false,true]) {
    const packet=transfer(s,order),world=testWorld(),view=guest?packet.view:s;
    world.cueEnemies(guest?packet.events:order,view.time);world.sync(view,view.time,DT,null);
    assert.ok(Math.abs(world.units.get(`e${e.id}`).rotation.y-angle)<1e-8);
    world.cueEnemies([strike],view.time+DT);assert.equal(world.enemyCues.get(e.id).angle,angle,'사격 반동 중 뒤따른 근접 동작');
    world.cueEnemies([strike],view.time+.3);assert.equal(world.enemyCues.get(e.id).angle,0,'사격이 끝난 후 근접 동작');world.reset();
  }
});
test('실제 전장 피격 변환 뒤에도 기병의 고삐 두 끝이 손과 재갈을 연결',()=>{
  const s=quietGame(),e=spawnEnemy(s,'cavalry',0,1,1),world=testWorld();
  for(let j=0;j<12;j++) {
    s.time=1+j*.01;e.hitT=1;e.x=5+j*.02;e.y=6+j*.01;world.sync(s,s.time,DT,null);
    const root=world.units.get(`e${e.id}`),d=root.userData;root.updateMatrixWorld(true);
    assert.ok(d.rig.rotation.z>0);
    for(let i=0;i<2;i++) {
      const ends=[-.5,.5].map(y=>d.horseReins[i].localToWorld(new T.Vector3(0,y,0))),hand=d.wrists[0].getWorldPosition(new T.Vector3()),bit=root.localToWorld(new T.Vector3((i?1:-1)*.11,1.10,.65));
      assert.ok(ends.some(p=>p.distanceTo(hand)<1e-8)&&ends.some(p=>p.distanceTo(bit)<1e-8));
    }
    assert.ok(world.crowd.bindings.get(root).every(({part})=>!part.visible));
  }
  world.reset();
});
test('빙결된 북병은 북 타격을 멈추고 해제 후 재개하며 기존 가속 오라는 유지',()=>{
  const s=quietGame(),drum=spawnEnemy(s,'drum',0,1,1),ally=spawnEnemy(s,'ashigaru',0,1,1),world=testWorld();
  drum.stunT=2;drum.iceT=2;step(s);assert.equal(ally.haste,ENEMIES.drum.haste.mult);
  s.time=1;world.sync(s,1,DT,null);const root=world.units.get(`e${drum.id}`),pose=()=>root.userData.wrists.map(w=>[...w.position.toArray(),...w.quaternion.toArray()]),before=pose();
  s.time=1.1;world.sync(s,1.1,DT,null);assert.deepEqual(pose(),before);
  drum.stunT=.01;drum.iceT=.01;const distance=drum.d;step(s);assert.ok(drum.stunT<0&&drum.d>distance,'시뮬레이션에서 자연 만료');
  world.sync(s,s.time,DT,null);assert.notDeepEqual(pose(),before);assert.equal(root.userData.hips.position.y,.65,'음수 타이머에서도 보행 재개');world.reset();
});
test('첫 스폰 프레임과 게스트의 사격도 신호→자세→실제 포구 효과 순서이며 인스턴스 중복 없음',()=>{
  for(const guest of [false,true]) {
    const host=quietGame(['yi']),h=host.heroes[0],e=spawnEnemy(host,'teppo',0,1,1);h.cd=100;e.x=h.x+.2;e.y=h.y+.2;e.blockedBy=h.id;e.atkCd=100;e.abT=0;
    host.events.length=0;step(host);const shot=host.events.find(x=>x.k==='shot');assert.ok(shot);
    const packet=transfer(host,[shot]),s=guest?packet.view:host,events=guest?packet.events:[shot];
    const world=testWorld();
    const lines=[];world.fx.line=(...args)=>lines.push(args);world.draw=()=>{};world.renderer={info:{render:{calls:0,triangles:0},memory:{geometries:0,textures:0}}};
    const renderer=new Renderer3D({dataset:{}},{});Object.assign(renderer,{world,labels:{update(){}},loadingLayer:{hidden:true,textContent:''},buildLayer:{hidden:true},sites:[],p2:new T.Group(),p2Preview:new T.Group()});renderer.damage=()=>{};renderer.statusMarkers=()=>{};
    renderer.events(events);renderer.render(s,{clock:0},DT);assert.equal(lines.length,1);const root=world.units.get(`e${e.id}`),socket=root.userData.weapons[1],muzzle=socket.localToWorld(socket.userData.muzzle.clone());
    assert.ok(Math.abs(root.rotation.y-Math.atan2(shot.x2-shot.x1,shot.y2-shot.y1))<1e-8);assert.ok(new T.Vector3(lines[0][0],lines[0][7],lines[0][1]).distanceTo(muzzle)<1e-8);
    assert.ok(world.crowd.bindings.get(root).every(({part})=>part.visible===false),'원본 메시 중복 그리기');
    const active=socket.matrixWorld.clone();s.time+=.5;s.enemies.find(x=>x.id===e.id).swing=0;renderer.render(s,{clock:0},DT);assert.equal(world.enemyCues.size,0);assert.notDeepEqual(socket.matrixWorld.elements,active.elements);
    world.cueEnemies([{k:'enemyHeal',enemy:e.id,x:e.x,y:e.y}],s.time);renderer.effect({k:'enemyHeal',enemy:e.id,x:e.x,y:e.y,r:2},s);assert.ok(world.fx.active.length>0);
    world.reset();assert.equal(world.enemyCues.size,0);assert.equal(world.crowd.buckets.size,0);
  }
});
console.log(`\n적군 점검 ${passed}개 통과`);
