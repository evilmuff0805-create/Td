import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import * as T from 'three';
import { FixedBattleArt } from '../src/3d/fixed-art.js';
import { COMBAT_POSE_ART } from '../src/3d/combat-pose-data.js';
import { combatPoseRoster } from '../src/3d/combat-pose-roster.js';
import { WinterWorld } from '../src/3d/world.js';
import { CrowdRenderer } from '../src/3d/crowd.js';
import { SEASONS } from '../src/3d/seasons.js';
import { newWinterGame,newBattleGame } from '../src/3d/scenario.js';
import { ENEMIES } from '../src/data/enemies.js';
import { ART } from '../src/data/art.js';
import { STAGES,parseWave } from '../src/data/stages.js';
import { TACTICS } from '../src/data/tactics.js';
import { spawnEnemy } from '../src/sim/combat.js';
import { applyCommand,step,DT } from '../src/sim/sim.js';
import { whenBattleArtReady } from '../src/3d/battle-art-ready.js';
import { equippedAbility } from '../src/3d/battle-controls.js';

let passed=0;async function test(name,run){await run();passed++;console.log(`  ✔ ${name}`);}
function context(){
  const camera=new T.OrthographicCamera(-8,8,6,-6,.1,100);camera.position.set(17,26,26);camera.lookAt(0,0,0);camera.updateMatrixWorld();
  const world=Object.assign(Object.create(WinterWorld.prototype),{camera,theme:{id:'winter',...SEASONS.winter},renderer:{domElement:{dataset:{}}},scene:new T.Scene(),units:new Map(),unitTemplates:new Map(),towers:new Map(),bullets:new Map(),scenery:new Map(),fx:{reset(){}},placement:new T.Group(),marker:new T.Group(),corpses:[],pickables:[],enemyCues:new Map(),range:new T.Group(),batchCrowd:false,projectiles(){},combatScenery(){}});
  world.crowd=new CrowdRenderer(world.scene);
  const art=Object.assign(Object.create(FixedBattleArt.prototype),{world,ready:true,coreLoading:false,corePromise:Promise.resolve(),combatGeneration:0,combatPoses:{enemy:{},ally:{}},textures:new Map(),materials:new Map(),geometries:new Map()});world.art=art;
  for(const side of ['enemy','ally'])for(const [id,layout]of Object.entries(COMBAT_POSE_ART[side]))art.combatPoses[side][id]={poseAtlas:true,canvas:{width:layout.width,height:layout.height},frames:layout.frames,isolated:layout.frames.map(frame=>({canvas:{width:frame.width+24,height:frame.height+24},frame:{...frame,left:12,top:12}}))};
  art.shadowTexture=new T.DataTexture(new Uint8Array([255,255,255,255]),1,1);art.shadowMaterial=new T.MeshBasicMaterial({map:art.shadowTexture});
  return {world,art};
}
const flatRight=new T.Vector3(1,0,0),flatUp=new T.Vector3(0,1,0);
function yawFor(camera,col){const r=flatRight.clone().applyQuaternion(camera.quaternion),u=flatUp.clone().applyQuaternion(camera.quaternion);r.y=u.y=0;r.normalize();u.normalize();const d=r.multiplyScalar(col<2?1:-1).addScaledVector(u,col===1||col===2?1:-1);return Math.atan2(d.x,d.z);}

await test('22종 왜군과 6종 아군에 중복·누락 없이 각 16포즈가 연결된다',()=>{
  assert.deepEqual(Object.keys(COMBAT_POSE_ART.enemy).sort(),Object.keys(ENEMIES).sort());assert.deepEqual(Object.keys(COMBAT_POSE_ART.ally).sort(),Object.keys(ART.allies).sort());
  for(const side of Object.values(COMBAT_POSE_ART))for(const layout of Object.values(side)){assert.equal(layout.frames.length,16);assert.ok(layout.frames.every(f=>f.referenceHeight>0&&f.anchorY===1));}
});
await test('25전장의 일반 파도·전술·사망 분열·적장 소환 병력은 모두 미리 준비된다',()=>{
  const seen=new Set();
  for(const [index,stage]of STAGES.entries()){
    const roster=combatPoseRoster(stage),available=new Set(roster.enemy);assert.equal(available.size,roster.enemy.length);assert.equal(roster.ally.length,6);
    for(const wave of stage.waves)for(const group of parseWave(wave))assert.ok(available.has(group.type),stage.id+':'+group.type);
    for(const tactic of Object.values(TACTICS))if(tactic.minStage<=index+1)for(const group of tactic.add??[])assert.ok(available.has(group.type));
    for(const id of available){seen.add(id);assert.ok(COMBAT_POSE_ART.enemy[id]);const def=ENEMIES[id];for(const extra of [def.spawnOnDeath,def.boss?.summon,...(def.boss?.phaseSummon??[])])if(extra)assert.ok(available.has(extra.type));}
  }
  assert.deepEqual([...seen].sort(),Object.keys(ENEMIES).sort());assert.ok(combatPoseRoster(STAGES[0]).enemy.length<22,'첫 전장에서 모든 적장을 읽지 않음');
});
await test('실제 병력 루트 28종은 네 방향과 네 동작 448포즈·접지 그림자를 전환한다',()=>{
  const {world,art}=context(),visited=new Set();let id=1;
  for(const side of ['enemy','ally'])for(const kind of Object.keys(COMBAT_POSE_ART[side])){
    const ally=side==='ally',entity={id:id++,kind,type:kind,hp:100,maxHp:100},root=world.unit(entity,false,ally),d=root.userData.fixedImage;root.userData.phase=0;
    assert.equal(root.userData.illustrationProxy,true);assert.equal(root.userData.rig.children.length,0);assert.equal(d.art,art.combatPoses[side][kind]);assert.equal(d.directional,true);
    for(let col=0;col<4;col++)for(const [row,moving,attack,time]of [[0,false,0,0],[1,true,0,0],[2,true,0,1/5.5],[3,false,.2,0]]){
      root.rotation.y=yawFor(world.camera,col);art.updateUnit(root,entity,moving,attack,time);assert.equal(d.poseIndex,row*4+col);visited.add(`${kind}:${d.poseIndex}`);
      assert.equal(d.image.material.map.image,d.art.isolated[d.poseIndex].canvas);assert.equal(d.shadow.material.map,d.image.material.map);assert.equal(d.shadow.geometry,d.image.geometry);assert.equal(d.image.scale.x,1,'실제 뒷모습이며 좌우 반전으로 대체하지 않음');
      assert.ok(root.quaternion.clone().multiply(d.image.quaternion).angleTo(world.camera.quaternion)<1e-6);
      const ground=new T.Vector3(0,1,0).applyMatrix4(d.shadow.matrix).applyQuaternion(root.quaternion);assert.ok(Math.abs(ground.y-.042)<1e-6);
      const frame=d.art.isolated[d.poseIndex].frame,scale=d.height/frame.referenceHeight;d.image.geometry.computeBoundingBox();const box=d.image.geometry.boundingBox;
      assert.ok(Math.abs((box.max.y-box.min.y)/frame.height-scale)<1e-7);assert.ok(Math.abs(box.min.y)<1e-7);
      // PlaneGeometry stores positions in Float32; the widest ram rounds by 1.06e-7 world units.
      assert.ok(Math.abs(box.min.x+frame.anchor*frame.width*scale)<1e-6);
      const uv=d.image.geometry.attributes.uv;for(let i=0;i<uv.count;i++)assert.ok(uv.getX(i)>0&&uv.getX(i)<1&&uv.getY(i)>0&&uv.getY(i)<1);
    }
    world.disposeCharacter(root);
  }
  assert.equal(visited.size,448);art.dispose();
});
await test('실제 적군의 사격 예고·은신·기절·사망 정리가 포즈와 함께 유지된다',()=>{
  const {world,art}=context(),game=newWinterGame();game.heroes=[];game.towers=[];const enemy=spawnEnemy(game,'teppo',0,1);enemy.x=12;enemy.y=7;enemy.stealth=true;enemy.revealed=false;
  world.sync(game,0,DT,null);const root=world.units.get(`e${enemy.id}`),d=root.userData.fixedImage;assert.equal(d.pose,'idle','생성 위치를 이동 거리로 세지 않음');assert.equal(d.image.material.opacity,.25);
  const walking=new Set();for(let i=1;i<=30;i++){enemy.x+=.02;game.time=i*DT;world.sync(game,game.time,DT,null);walking.add(d.pose);}assert.ok(walking.has('walk-left')&&walking.has('walk-right')&&walking.has('idle'),'실제 거리에 맞춘 두 걸음과 접지');
  const event={k:'shot',enemy:enemy.id,x1:12,y1:7,x2:15,y2:8};world.cueEnemies([event],0);game.time=.1;world.sync(game,.1,DT,null);assert.equal(d.pose,'attack');root.updateMatrixWorld(true);
  let line;world.fx.line=(...args)=>line=args;world.firingLine(event);const muzzle=root.userData.weapons[1].getWorldPosition(new T.Vector3());assert.ok(Math.abs(line[0]-muzzle.x)<1e-8&&Math.abs(line[1]-muzzle.z)<1e-8&&Math.abs(line[7]-muzzle.y)<1e-8);
  enemy.revealed=true;enemy.stunT=3;game.time=1;world.sync(game,1,DT,null);const clock=root.userData.enemyPoseTime;assert.equal(d.pose,'idle');assert.equal(d.image.material.opacity,1);game.time=1.2;world.sync(game,1.2,DT,null);assert.equal(root.userData.enemyPoseTime,clock);
  let disposed=0;d.image.material.addEventListener('dispose',()=>disposed++);game.enemies=[];world.sync(game,1.3,.05,null);assert.equal(world.pickables.includes(root),false);world.sync(game,3,1.4,null);assert.equal(disposed,1);assert.equal(root.parent,null);world.reset();art.dispose();
});
await test('실제 거북선과 전령은 이동 포즈를 사용하고 만료 때 개인 재질만 해제한다',()=>{
  const {world,art}=context(),game=newWinterGame();game.towers=[];game.heroes[0].ultCd=0;applyCommand(game,{t:'heroUlt',p:0,h:0});game.courier={sent:false,at:0,path:0};step(game);
  assert.deepEqual(new Set(game.movers.map(m=>m.kind)),new Set(['turtle','courier']));WinterWorld.prototype.combatScenery.call(world,game,game.time,DT);let privateDisposals=0,sharedDisposals=0;
  for(const mover of game.movers){const root=world.scenery.get(`m${mover.id}`),d=root.userData.fixedImage;assert.equal(d.art,art.combatPoses.ally[mover.kind]);assert.equal(d.pose,'idle');assert.equal(root.position.x,mover.x);d.image.material.addEventListener('dispose',()=>privateDisposals++);d.image.material.map.addEventListener('dispose',()=>sharedDisposals++);}
  for(let i=0;i<4;i++){step(game);WinterWorld.prototype.combatScenery.call(world,game,game.time,DT);}for(const mover of game.movers)assert.ok(world.scenery.get(`m${mover.id}`).userData.fixedImage.motionPhase>0,'실제 이동 뒤에 보행을 시작');
  for(let i=0;i<900&&game.movers.length;i++){step(game);WinterWorld.prototype.combatScenery.call(world,game,game.time,DT);}assert.equal(game.movers.length,0);assert.equal(privateDisposals,2);assert.equal(sharedDisposals,0);world.reset();art.dispose();assert.equal(sharedDisposals,2);
});
await test('한 병종의 방향 그림이 빠져도 다른 병종과 대체 그림은 독립적으로 동작한다',()=>{
  const {world,art}=context();art.combatPoses.enemy.teppo=null;
  const original=art.unitArt;art.unitArt=function(entity,hero,ally){return original.call(this,entity,hero,ally)??{canvas:{width:80,height:80}};};
  const missing=world.unit({id:1,type:'teppo'},false),ready=world.unit({id:2,type:'ashigaru'},false);
  assert.equal(missing.userData.fixedImage.directional,false);assert.equal(ready.userData.fixedImage.directional,true);assert.equal(art.ready,true);world.disposeCharacter(missing);world.disposeCharacter(ready);art.dispose();
});

await test('초기 진입과 재출정의 늦은 완료는 새 전장의 카메라·로딩 표시를 바꾸지 않는다',async()=>{
  let finishOld,finishNew,current={id:1},calls=0;const oldBattle=current,world={art:{loading:true,promise:new Promise(resolve=>finishOld=resolve)}};
  const old=whenBattleArtReady(world,oldBattle,()=>current,()=>calls++);current={id:2};world.art.promise=new Promise(resolve=>finishNew=resolve);
  const latest=whenBattleArtReady(world,current,()=>current,()=>calls++);finishOld();assert.equal(await old,false);assert.equal(calls,0);world.art.loading=false;finishNew();assert.equal(await latest,true);assert.equal(calls,1);
  let finishLate;world.art.promise=new Promise(resolve=>finishLate=resolve);const late=whenBattleArtReady(world,current,()=>current,()=>calls++);world.art.promise=Promise.resolve();finishLate();assert.equal(await late,false);assert.equal(calls,1);
  world.art.promise=Promise.resolve();world.destroyed=true;assert.equal(await whenBattleArtReady(world,current,()=>current,()=>calls++),false);assert.equal(calls,1);
});
await test('실제 자유 전장 입력 함수는 로딩 중 궁극기 재사용 시간을 소비하지 않는다',()=>{
  const source=fs.readFileSync(new URL('../src/3d/main.js',import.meta.url),'utf8'),game=newBattleGame({heroIds:['sejong'],support:false}),world={art:{loading:true}};
  const scope={game,world,activeHero:0,equippedAbility,applyCommand,events(){},updateHUD(){},announceSkill(){},lastCommand:''};game.heroes[0].ultCd=0;
  const dispatch=vm.runInNewContext('('+source.match(/function dispatch\(command\) \{[\s\S]*?\n\}/)[0]+')',scope);
  assert.equal(dispatch({t:'heroUlt',h:0}),false);assert.equal(game.heroes[0].ultCd,0);world.art.loading=false;assert.equal(dispatch({t:'heroUlt',h:0}),true);assert.ok(game.heroes[0].ultCd>0);
  let skills=0,cancelled=0;const keyboard=source.match(/document.addEventListener\('keydown',e=>\{([\s\S]*?)\n  \}\);/)[1],keydown=vm.runInNewContext('(e=>{'+keyboard+'})',{world,modalOpen:()=>false,chooseSkill:()=>skills++,selection:()=>cancelled++});
  const event=key=>({key,repeat:false,preventDefault(){}});world.art.loading=true;keydown(event('r'));assert.equal(skills,0);keydown(event('Escape'));assert.equal(cancelled,1);world.art.loading=false;keydown(event('r'));assert.equal(skills,1);
});

// Exercise the real async loader with small canvas/image substitutes, not WebGL.
const originalDocument=globalThis.document,originalLoad=T.ImageLoader.prototype.load,pending=[];
let pixelReadbacks=0;
globalThis.document={createElement:()=>({width:0,height:0,getContext(){return {drawImage(){},getImageData:()=>{pixelReadbacks++;return {data:new Uint8Array(this.width*this.height*4)};}};}})};
T.ImageLoader.prototype.load=function(url,onLoad,progress,onError){pending.push({url,onLoad,onError});};
const finish=(id,fail=false)=>{const index=pending.findIndex(p=>p.url.includes('/'+id+'-directions-'));assert.ok(index>=0,'Pending '+id);const [p]=pending.splice(index,1);if(fail)p.onError(new Error('expected missing image'));else p.onLoad({width:64,height:64});const extra=pending.findIndex(p=>p.url.includes('/'+id+'-inbetweens-'));if(extra>=0)pending.splice(extra,1)[0].onLoad({width:64,height:64});};
try{
  await test('코어 그림과 병력 그림 중 어느 쪽이 먼저 끝나도 둘 다 완료될 때까지 기다린다',async()=>{
    for(const combatFirst of [true,false]){
      const {art}=context();art.combatPoses={enemy:{},ally:{}};let finishCore;art.coreLoading=true;art.corePromise=new Promise(resolve=>finishCore=resolve).then(()=>{art.coreLoading=false;art.updateLoading();});
      const all=art.prepareCombatArt(null,{enemy:['ashigaru'],ally:[]});assert.equal(art.loading,true);
      if(combatFirst){finish('ashigaru');await art.combatPromise;assert.equal(art.loading,true);finishCore();}else{finishCore();await art.corePromise;assert.equal(art.loading,true);finish('ashigaru');}
      await all;assert.equal(art.loading,false);art.dispose();
    }
  });
  await test('전장 변경은 공유 병종을 유지하고 빠진 병종의 GPU 자원을 정확히 해제한다',async()=>{
    const {world,art}=context();art.combatPoses={enemy:{},ally:{}};const first=art.prepareCombatArt(null,{enemy:['ashigaru','teppo'],ally:[]});assert.equal(art.loading,true);assert.equal(pending.length,4);finish('ashigaru');finish('teppo');await first;assert.equal(art.loading,false);
    const entity={id:1,type:'ashigaru'},root=world.unit(entity,false),d=root.userData.fixedImage;art.updateUnit(root,entity,false,0,0);const canvas=d.image.material.map.image;let texture=0,geometry=0,privateMaterial=0;d.image.material.map.addEventListener('dispose',()=>texture++);d.image.geometry.addEventListener('dispose',()=>geometry++);d.image.material.addEventListener('dispose',()=>privateMaterial++);
    const retained=art.combatPoses.enemy.teppo;world.disposeCharacter(root);assert.equal(privateMaterial,1);assert.equal(texture,0);
    await art.prepareCombatArt(null,{enemy:['teppo'],ally:[]});assert.equal(pending.length,0);assert.equal(art.combatPoses.enemy.teppo,retained);assert.equal(texture,1);assert.equal(geometry,1);assert.equal(art.textures.has(canvas),false);assert.equal(world.renderer.domElement.dataset.combatPoseCount,'1');art.dispose();assert.equal(texture,1);
  });
  await test('늦게 도착한 이전 전장 요청은 새 전장의 준비 상태와 그림을 덮어쓰지 않는다',async()=>{
    const {world,art}=context();art.combatPoses={enemy:{},ally:{}};const old=art.prepareCombatArt(null,{enemy:['ashigaru'],ally:[]}),current=art.prepareCombatArt(null,{enemy:['teppo'],ally:[]});finish('teppo');await current;const currentArt=art.combatPoses.enemy.teppo;assert.equal(art.loading,false);finish('ashigaru');await old;assert.equal(art.combatPoses.enemy.teppo,currentArt);assert.equal(art.combatPoses.enemy.ashigaru,undefined);assert.equal(world.renderer.domElement.dataset.combatPoseKinds,'teppo');art.dispose();
  });
  await test('선택 병종 로드 실패는 완료 상태로 풀리고 실패 병종만 기존 그림으로 돌아간다',async()=>{
    const {world,art}=context();art.combatPoses={enemy:{},ally:{}};const warnings=[],oldWarn=console.warn;console.warn=(...args)=>warnings.push(args);
    try{const promise=art.prepareCombatArt(null,{enemy:['ashigaru','teppo'],ally:[]});finish('ashigaru');finish('teppo',true);await promise;}finally{console.warn=oldWarn;}
    assert.equal(warnings.length,1);assert.equal(art.loading,false);assert.equal(art.ready,true);assert.ok(art.combatPoses.enemy.ashigaru);assert.equal(art.combatPoses.enemy.teppo,null);assert.equal(world.renderer.domElement.dataset.combatPoseStatus,'partial');art.dispose();
  });
  await test('전장 종료 뒤 도착한 그림은 DOM이나 종료된 전장에 다시 붙지 않는다',async()=>{
    const {world,art}=context();art.combatPoses={enemy:{},ally:{}};const promise=art.prepareCombatArt(null,{enemy:['ashigaru'],ally:[]});art.dispose();const before={...world.renderer.domElement.dataset};finish('ashigaru');await promise;assert.deepEqual(world.renderer.domElement.dataset,before);assert.deepEqual(art.combatPoses,{enemy:{},ally:{}});
  });
}finally{T.ImageLoader.prototype.load=originalLoad;if(originalDocument===undefined)delete globalThis.document;else globalThis.document=originalDocument;}
assert.equal(pending.length,0);
assert.equal(pixelReadbacks,0,'검증된 포즈 좌표가 있으면 원본 전체 픽셀을 다시 읽지 않음');
console.log(`\n병력 방향 그림 ${passed}개 검증 통과`);
