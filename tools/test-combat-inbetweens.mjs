import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import * as T from 'three';
import {FixedBattleArt} from '../src/3d/fixed-art.js';
import {COMBAT_POSE_ART} from '../src/3d/combat-pose-data.js';
import {COMBAT_INBETWEEN_ART} from '../src/3d/combat-inbetween-data.js';
import {HERO_POSE_ART} from '../src/3d/hero-pose-data.js';
import {HERO_INBETWEEN_ART} from '../src/3d/inbetween-data.js';
import {WinterWorld} from '../src/3d/world.js';
import {CrowdRenderer} from '../src/3d/crowd.js';
import {SEASONS} from '../src/3d/seasons.js';
import {updateSpriteMotion} from '../src/3d/sprite-motion.js';
import {combatPoseRoster} from '../src/3d/combat-pose-roster.js';
import {newWinterGame} from '../src/3d/scenario.js';
import {Session} from '../src/game/session.js';
import {GameUI} from '../src/ui/hud.js';
import {SnapshotEncoder,emptyView,applySnapshot} from '../src/sim/snapshot.js';
import {applyCommand,step,DT} from '../src/sim/sim.js';
import {spawnEnemy,addSummon,actionCue} from '../src/sim/combat.js';
import {getMap,T_BUILD,nearestOnPath} from '../src/sim/map.js';
import {STAGES} from '../src/data/stages.js';

const results=[];
async function test(name,fn){await fn();results.push({name,passed:true});console.log('  ✔ '+name);}
const mockAtlas=l=>({poseAtlas:true,canvas:{width:l.width,height:l.height},frames:l.frames,isolated:l.frames.map(f=>({canvas:{width:f.width+24,height:f.height+24},frame:{...f,left:12,top:12}}))});
function context(loaded=true){
  const camera=new T.OrthographicCamera(-8,8,6,-6,.1,100);camera.position.set(17,26,26);camera.lookAt(0,0,0);camera.updateMatrixWorld();
  const world=Object.assign(Object.create(WinterWorld.prototype),{camera,theme:{id:'winter',...SEASONS.winter},renderer:{domElement:{dataset:{}}},scene:new T.Scene(),units:new Map(),unitTemplates:new Map(),towers:new Map(),bullets:new Map(),scenery:new Map(),fx:{reset(){}},placement:new T.Group(),marker:new T.Group(),corpses:[],pickables:[],enemyCues:new Map(),range:new T.Group(),batchCrowd:false,projectiles(){},combatScenery(){}});
  world.crowd=new CrowdRenderer(world.scene);
  const art=Object.assign(Object.create(FixedBattleArt.prototype),{world,ready:true,coreLoading:false,combatLoading:false,skinLoading:false,inbetweenLoading:false,heroLooksKey:'',inbetweenKey:'',combatGeneration:0,skinGeneration:0,inbetweenGeneration:0,corePromise:Promise.resolve(),combatPromise:Promise.resolve(),skinPromise:Promise.resolve(),inbetweenPromise:Promise.resolve(),textures:new Map(),materials:new Map(),geometries:new Map(),combatPoses:{enemy:{},ally:{}},combatInbetweens:{enemy:{},ally:{}},heroPoses:{yi:mockAtlas(HERO_POSE_ART.yi)},skinPoses:{},inbetweenPoses:{yi:mockAtlas(HERO_INBETWEEN_ART.yi)}});
  if(loaded)for(const side of ['enemy','ally'])for(const [id,l]of Object.entries(COMBAT_POSE_ART[side])){art.combatPoses[side][id]=mockAtlas(l);art.combatInbetweens[side][id]=mockAtlas(COMBAT_INBETWEEN_ART[id]);}
  art.yi=art.heroPoses.yi;art.shadowTexture=new T.DataTexture(new Uint8Array([255,255,255,255]),1,1);art.shadowMaterial=new T.MeshBasicMaterial({map:art.shadowTexture});world.art=art;art.updateLoading();art.refreshPromise();return {world,art};
}
const sample=(kind,extra={})=>({kind,x:8,z:5,time:0,dt:DT,hp:100,attack:0,inbetweens:true,...extra});
function yawFor(camera,col){const r=new T.Vector3(1,0,0).applyQuaternion(camera.quaternion),u=new T.Vector3(0,1,0).applyQuaternion(camera.quaternion);r.y=u.y=0;r.normalize();u.normalize();const d=r.multiplyScalar(col<2?1:-1).addScaledVector(u,col===1||col===2?1:-1);return Math.atan2(d.x,d.z);}
const actorIds=Object.values(COMBAT_POSE_ART).flatMap(x=>Object.keys(x));
await test('적군 22종·아군 6종의 새 448자세가 원본 448자세와 기준 높이를 보존한다',()=>{
  assert.equal(actorIds.length,28);assert.deepEqual(Object.keys(COMBAT_INBETWEEN_ART).sort(),actorIds.sort());
  for(const [id,l]of Object.entries(COMBAT_INBETWEEN_ART)){assert.equal(l.kind,id);assert.equal(l.frames.length,16);assert.deepEqual(l.roles,['pass-a','pass-b','follow-through','recover']);const approved=COMBAT_POSE_ART[l.side][id];assert.ok(approved);assert.ok(l.frames.every(f=>f.referenceHeight===approved.frames[0].referenceHeight&&f.anchor>0&&f.anchor<1&&f.anchorY>0));}
});
await test('실제 병력 28종의 896자세가 방향·본체·접지 그림자·무기 전체 배율을 함께 전환한다',()=>{
  const {world,art}=context(),visited=new Set();let id=1;
  for(const side of ['enemy','ally'])for(const kind of Object.keys(COMBAT_POSE_ART[side])){
    const e={id:id++,kind,type:kind,hp:100,maxHp:100},root=world.unit(e,false,side==='ally'),d=root.userData.fixedImage;
    for(let col=0;col<4;col++)for(let row=0;row<8;row++){
      root.rotation.y=yawFor(world.camera,col);art.updateUnit(root,e,false,0,0,{...sample(kind),poseRow:row});const atlas=row>=4?art.combatInbetweens[side][kind]:art.combatPoses[side][kind],f=atlas.isolated[row%4*4+col].frame;
      assert.equal(d.poseIndex,row*4+col);visited.add(kind+':'+d.poseIndex);assert.equal(d.image.material.map.image,atlas.isolated[row%4*4+col].canvas);assert.equal(d.shadow.material.map,d.image.material.map);assert.equal(d.shadow.geometry,d.image.geometry);assert.equal(d.image.scale.x,1);
      d.image.geometry.computeBoundingBox();const b=d.image.geometry.boundingBox,scale=d.height/f.referenceHeight;assert.ok(Math.abs((b.max.y-b.min.y)/f.height-scale)<1e-6);assert.ok(Math.abs(b.min.x+f.anchor*f.width*scale)<1e-6);assert.ok(Math.abs(b.min.y+f.height*scale*(1-f.anchorY))<1e-6);
      assert.ok(root.quaternion.clone().multiply(d.image.quaternion).angleTo(world.camera.quaternion)<1e-6);const ground=new T.Vector3(0,1,0).applyMatrix4(d.shadow.matrix).applyQuaternion(root.quaternion);assert.ok(Math.abs(ground.y-.042)<1e-6);
    }world.disposeCharacter(root);
  }assert.equal(visited.size,896);art.dispose();
});
await test('보병·말·충차·거북선의 네 박자 이동은 20·60·120fps에서 같은 거리 위상을 가진다',()=>{
  for(const kind of actorIds){const phases=[];for(const fps of [20,60,120]){let a=updateSpriteMotion(null,sample(kind)),rows=[];for(let i=1;i<=fps;i++){a=updateSpriteMotion(a.state,sample(kind,{x:8+i/fps*1.8,time:i/fps,dt:1/fps}));if(a.blend>.16&&rows.at(-1)!==a.row)rows.push(a.row);if(['ram','turtle'].includes(kind))assert.equal(a.lift,0);}assert.deepEqual(new Set(rows),new Set([1,4,2,5]),kind);phases.push(a.phase);}assert.ok(phases.every(p=>Math.abs(p-phases[0])<1e-10));}
});
await test('보병·적장의 실제 루트는 타격→공격 후→복귀하고 같은 cue를 다시 발사하지 않는다',()=>{
  const {world,art}=context();for(const side of ['enemy','ally'])for(const kind of Object.keys(COMBAT_POSE_ART[side])){if(['courier','turtle'].includes(kind))continue;const e={kind,type:kind,hp:100,actionSeq:1,actionAt:0,actionDuration:.25},root=world.unit(e,false,side==='ally'),d=root.userData.fixedImage;for(const [time,row]of [[0,3],[.1,6],[.2,7],[.4,0]]){art.updateUnit(root,e,false,0,time,sample(kind,{time}));assert.equal(Math.floor(d.poseIndex/4),row,kind);}e.actionSeq=2;e.actionAt=.5;art.updateUnit(root,e,false,0,.5,sample(kind,{time:.5}));assert.equal(d.pose,'attack');world.disposeCharacter(root);}art.dispose();
});
await test('진군 중에는 새 공격을 만들지 않고 성문 도착 시 즉시 누출되며 기존 길막 교전만 공격한다',()=>{
  const clean=()=>{const game=newWinterGame();game.heroes=[];game.towers=[];game.wave.timer=999;return game;};
  const game=clean(),{world,art}=context(),e=spawnEnemy(game,'ashigaru',0,1,0);world.sync(game,0,DT,null);
  for(let i=0;i<60;i++){step(game);world.sync(game,game.time,DT,null);const row=Math.floor(world.units.get('e'+e.id).userData.fixedImage.poseIndex/4);assert.ok([0,1,2,4,5].includes(row));assert.equal(e.actionSeq,undefined);}
  const lives=game.lives;e.d=getMap(game.stageId).paths[0].total-.001;step(game);world.sync(game,game.time,DT,null);assert.equal(e.leaked,true);assert.equal(game.lives,lives-e.lives);assert.equal(e.actionSeq,undefined);assert.equal(game.events.some(x=>x.k==='enemyStrike'),false);world.reset();
  const fight=clean(),foe=spawnEnemy(fight,'ashigaru',0,1,1),guard=addSummon(fight,{kind:'guard',x:foe.x,y:foe.y,hp:100000,maxHp:100000,dmg:0,cd:999,life:999}),poses=new Set();world.sync(fight,0,DT,null);
  for(let i=0;i<90;i++){step(fight);world.sync(fight,fight.time,DT,null);const d=world.units.get('e'+foe.id).userData.fixedImage;poses.add(d.pose);}
  assert.equal(foe.blockedBy,guard.id);assert.ok(foe.actionSeq>0);assert.ok(fight.events.some(x=>x.k==='enemyStrike'&&x.enemy===foe.id));for(const pose of ['attack','follow-through','recover'])assert.ok(poses.has(pose));world.reset();art.dispose();
});
await test('실제 적 사격의 중간 자세·은신·정지·기절·사망과 총구 소켓이 유지된다',()=>{
  const {world,art}=context(),game=newWinterGame();game.heroes=[];game.towers=[];const e=spawnEnemy(game,'teppo',0,1);e.x=12;e.y=7;e.stealth=true;e.revealed=false;world.sync(game,0,DT,null);const root=world.units.get('e'+e.id),d=root.userData.fixedImage;assert.equal(d.image.material.opacity,.25);
  const event={k:'shot',enemy:e.id,x1:12,y1:7,x2:15,y2:8};actionCue(game,e,.25);world.cueEnemies([event],0);world.sync(game,0,DT,null);assert.equal(d.pose,'attack');game.time=.1;world.sync(game,.1,DT,null);assert.equal(d.pose,'follow-through');game.paused=true;const frozen=d.poseIndex;game.time=.2;world.sync(game,.2,0,null);assert.equal(d.poseIndex,frozen);game.paused=false;world.sync(game,.2,DT,null);assert.equal(d.pose,'recover');
  root.updateMatrixWorld(true);let line;world.fx.line=(...a)=>line=a;world.firingLine(event);const muzzle=root.userData.weapons[1].getWorldPosition(new T.Vector3());assert.ok(Math.abs(line[0]-muzzle.x)<1e-8&&Math.abs(line[7]-muzzle.y)<1e-8);
  e.stunT=2;e.revealed=true;game.time=.5;world.sync(game,.5,DT,null);assert.equal(d.pose,'idle');assert.equal(d.image.material.opacity,1);game.enemies=[];world.sync(game,.6,DT,null);assert.equal(world.pickables.includes(root),false);assert.equal(d.motion,null);world.sync(game,2,1.4,null);assert.equal(root.parent,null);world.reset();art.dispose();
});
await test('1P·2P 소환 병사의 actionSeq·소유자와 독립 중간 동작이 스냅샷에도 보존된다',()=>{
  const session=new Session({kind:'local',stageId:'s1',difficulty:'normal',seed:8,specs:[{heroes:['yi']},{heroes:['sejong']}]}),s=session.state,a=addSummon(s,{kind:'militia',owner:0,x:10,y:5,actionSeq:1,actionAt:0,actionDuration:.25}),b=addSummon(s,{kind:'guard',owner:1,x:12,y:5});
  const packet=JSON.parse(JSON.stringify(new SnapshotEncoder().encode(s,[]))),view=emptyView({stageId:'s1',difficulty:'normal'});applySnapshot(view,packet);assert.equal(view.summons[0].owner,0);assert.equal(view.summons[1].owner,1);assert.equal(view.summons[0].actionSeq,1);
  const {world,art}=context();s.heroes=[];s.towers=[];world.sync(s,0,DT,null);s.time=.1;world.sync(s,.1,DT,null);const da=world.units.get('s'+a.id).userData.fixedImage,db=world.units.get('s'+b.id).userData.fixedImage;assert.equal(da.pose,'follow-through');assert.equal(db.pose,'idle');assert.notEqual(da.motion,db.motion);assert.notEqual(da.image.material,db.image.material);assert.equal(da.inbetweens,art.combatInbetweens.ally.militia);assert.equal(db.inbetweens,art.combatInbetweens.ally.guard);world.reset();art.dispose();session.destroy();
});
await test('실제 전령과 거북선은 네 이동 자세를 사용하며 예약 공격 원화를 재생하지 않는다',()=>{
  const {world,art}=context(),game=newWinterGame();game.towers=[];game.heroes[0].ultCd=0;applyCommand(game,{t:'heroUlt',p:0,h:0});game.courier={sent:false,at:0,path:0};step(game);assert.deepEqual(new Set(game.movers.map(m=>m.kind)),new Set(['courier','turtle']));const rows={courier:new Set(),turtle:new Set()};
  for(let i=0;i<90;i++){WinterWorld.prototype.combatScenery.call(world,game,game.time,DT);for(const m of game.movers){const d=world.scenery.get('m'+m.id).userData.fixedImage,row=Math.floor(d.poseIndex/4);rows[m.kind].add(row);assert.ok([0,1,2,4,5].includes(row));}step(game);}for(const set of Object.values(rows))for(const row of [1,4,2,5])assert.ok(set.has(row));world.reset();art.dispose();
});
await test('중간 원화가 없거나 병종·진영이 다르면 원본 동작만 사용하고 다른 그림을 섞지 않는다',()=>{
  const {world,art}=context(),e={id:1,type:'teppo',hp:100};art.combatInbetweens.enemy.teppo=null;const root=world.unit(e,false),d=root.userData.fixedImage;for(const row of [4,5,6,7]){art.updateUnit(root,e,false,0,0,{...sample('teppo'),poseRow:row});assert.equal(d.pose,'idle');assert.equal(d.art,art.combatPoses.enemy.teppo);assert.equal(d.inbetweens,null);}assert.equal(art.unitInbetweens(e,art.combatPoses.enemy.ashigaru,'enemy'),null);assert.equal(art.unitInbetweens({kind:'teppo'},art.combatPoses.enemy.teppo,'ally'),null);world.disposeCharacter(root);art.dispose();
});
await test('원본 병력 그림만 실패해도 성공한 중간 원화를 정적 대체 그림에 붙이지 않는다',()=>{
  const {art}=context();art.combatPoses.enemy.teppo=null;assert.equal(art.unitInbetweens({type:'teppo'},{canvas:{width:80,height:80}},'enemy'),null);assert.equal(art.unitInbetweens({type:'teppo'},art.combatPoses.enemy.ashigaru,'enemy'),null);assert.ok(art.combatInbetweens.enemy.teppo);art.dispose();
});
await test('로컬 2인 실제 이동 입력과 두 병영의 재화·병사 소유권을 유지한다',()=>{
  const session=new Session({kind:'local',stageId:'s1',difficulty:'normal',seed:8,specs:[{heroes:['yi'],towers:['namhansan']},{heroes:['sejong'],towers:['namhansan']}]}),s=session.state,map=getMap('s1'),sites=[];
  for(let y=0;y<map.h;y++)for(let x=0;x<map.w;x++)if(map.grid[y*map.w+x]===T_BUILD&&nearestOnPath(map,x+.5,y+.5)?.dist<2.2)sites.push({x,y});assert.ok(sites.length>=2);const gold=s.players.map(p=>p.gold);
  for(let p=0;p<2;p++)session.send({t:'build',p,tower:'namhansan',...sites[p]});const [a,b]=s.heroes,ax=a.x,bx=b.x,ui=Object.assign(Object.create(GameUI.prototype),{s:session,p2keys:new Set(),lastP2Move:0,p2moving:false});session.send({t:'move',p:0,h:0,x:ax-1,y:a.y});ui.p2Key({code:'ArrowRight'});for(let i=1;i<=30;i++){ui.p2Tick(i*1000/60);session.update(DT);}assert.ok(a.x<ax&&b.x>bx);assert.equal(s.towers.length,2);assert.deepEqual(s.towers.map(t=>t.owner),[0,1]);assert.ok(s.summons.some(m=>m.owner===0)&&s.summons.some(m=>m.owner===1));assert.deepEqual(s.players.map(p=>p.gold),gold.map(g=>g-90));session.destroy();
});
await test('영웅과 양쪽 병력의 새 원화는 서로의 atlas나 개인 재질을 덮어쓰지 않는다',()=>{
  const {world,art}=context(),h={id:1,heroId:'yi',hp:100},e={id:2,type:'ashigaru',hp:100},a={id:3,kind:'guard',hp:100},roots=[world.unit(h,true),world.unit(e,false),world.unit(a,false,true)];for(const [i,entity]of [h,e,a].entries())art.updateUnit(roots[i],entity,false,0,0,{...sample('test'),poseRow:4});const looks=roots.map(r=>r.userData.fixedImage);assert.equal(looks[0].inbetweens,art.inbetweenPoses.yi);assert.equal(looks[1].inbetweens,art.combatInbetweens.enemy.ashigaru);assert.equal(looks[2].inbetweens,art.combatInbetweens.ally.guard);assert.equal(new Set(looks.map(d=>d.image.material)).size,3);for(const root of roots)world.disposeCharacter(root);art.dispose();
});

const oldDocument=globalThis.document,oldLoad=T.ImageLoader.prototype.load,pending=[];let readbacks=0;
globalThis.document={createElement:()=>({width:0,height:0,getContext(){return {drawImage(){},getImageData(){readbacks++;throw new Error('Explicit frame layouts require no readback');}};}})};
T.ImageLoader.prototype.load=function(url,onLoad,progress,onError){pending.push({url,onLoad,onError});};
function finish(id,extra=false,fail=false){const at=pending.findIndex(p=>p.url.includes('/'+id+(extra?'-inbetweens-':'-directions-')));assert.ok(at>=0,'Pending '+id+' '+extra);const [p]=pending.splice(at,1),l=extra?COMBAT_INBETWEEN_ART[id]:COMBAT_POSE_ART.enemy[id]??COMBAT_POSE_ART.ally[id];if(fail)p.onError(new Error('expected missing art'));else p.onLoad({width:l.width,height:l.height});}
const flush=async()=>{for(let i=0;i<8;i++)await Promise.resolve();};
const permutations=values=>values.length?values.flatMap((v,i)=>permutations(values.filter((_,j)=>j!==i)).map(rest=>[v,...rest])):[[]];
try{
  await test('코어·병력 원본·중간 원화 완료 순서 6가지 모두 마지막 원화까지 기다린다',async()=>{
    for(const order of permutations([0,1,2])){const {art}=context(false);let core;art.coreLoading=true;art.corePromise=new Promise(r=>core=r).then(()=>{art.coreLoading=false;art.updateLoading();});const all=art.prepareCombatArt(null,{enemy:['ashigaru'],ally:[]}),complete=[core,()=>finish('ashigaru'),()=>finish('ashigaru',true)];for(const [i,next]of order.entries()){complete[next]();await flush();assert.equal(art.loading,i<2);}await all;art.dispose();}
  });
  await test('실제 로컬 협동 HUD는 병력 원본이 준비되어도 마지막 중간 그림 전에는 시계를 소비하지 않는다',async()=>{
    const {art,world}=context(false),session=new Session({kind:'local',stageId:'s1',difficulty:'normal',seed:1,specs:[{heroes:['yi']},{heroes:['sejong']}]}),renderer={world,prepareView(){},get loading(){return art.loading;},events(){},render(){}},ui=Object.assign(Object.create(GameUI.prototype),{s:session,renderer,map:getMap('s1'),me:0,ui:{clock:0},bottom:{},last:0,solo:false,local:true,selHero:0,hintTimer:100,p2keys:new Set(),lastP2Move:0,p2moving:false,handleEvents(){},drawXray(){},updateHud(){}}),raf=globalThis.requestAnimationFrame;globalThis.requestAnimationFrame=()=>1;
    try{const all=art.prepareCombatArt(null,{enemy:['ashigaru'],ally:[]});ui.frame(100);assert.equal(safeTime(session),0);assert.equal(ui.bottom.inert,true);finish('ashigaru');await flush();ui.frame(200);assert.equal(safeTime(session),0);finish('ashigaru',true);await all;ui.frame(300);assert.ok(safeTime(session)>0);assert.equal(ui.bottom.inert,false);}finally{globalThis.requestAnimationFrame=raf;session.destroy();art.dispose();}
    function safeTime(s){return s.state.time;}
  });
  await test('선택 전장의 병종만 원본·중간 시트를 요청하고 로스터 중복은 한 번만 준비한다',async()=>{
    const {art,world}=context(false),roster=combatPoseRoster(STAGES[0]),all=art.prepareCombatArt(STAGES[0]);assert.equal(pending.length,(roster.enemy.length+roster.ally.length)*2);assert.ok(roster.enemy.length<22);for(const id of [...roster.enemy,...roster.ally]){finish(id);finish(id,true);}await all;assert.equal(world.renderer.domElement.dataset.combatInbetweenCount,String(roster.enemy.length+6));const again=art.prepareCombatArt(null,{enemy:[roster.enemy[0],roster.enemy[0]],ally:[]});await again;assert.equal(pending.length,0);assert.equal(world.renderer.domElement.dataset.combatInbetweenExpected,'1');art.dispose();
  });
  await test('원본·중간 시트 개별 실패는 서로 막지 않고 같은 로스터에서 실패를 재요청하지 않는다',async()=>{
    const {art,world}=context(false),warn=console.warn,warnings=[];console.warn=(...a)=>warnings.push(a);try{const all=art.prepareCombatArt(null,{enemy:['ashigaru','teppo'],ally:[]});finish('ashigaru');finish('ashigaru',true,true);finish('teppo',false,true);finish('teppo',true);await all;assert.equal(art.loading,false);assert.equal(art.combatInbetweens.enemy.ashigaru,null);assert.equal(art.combatPoses.enemy.teppo,null);assert.ok(art.combatInbetweens.enemy.teppo);assert.equal(world.renderer.domElement.dataset.combatInbetweenStatus,'partial');assert.equal(world.renderer.domElement.dataset.combatPoseStatus,'partial');await art.prepareCombatArt(null,{enemy:['teppo','ashigaru'],ally:[]});assert.equal(pending.length,0);assert.equal(warnings.length,2);}finally{console.warn=warn;art.dispose();}
  });
  await test('늦은 이전 원본·중간 시트는 현재 전장의 그림·DOM·로딩을 덮어쓰지 않는다',async()=>{
    const {art,world}=context(false),old=art.prepareCombatArt(null,{enemy:['ashigaru'],ally:[]}),latest=art.prepareCombatArt(null,{enemy:['teppo'],ally:[]});finish('teppo',true);finish('teppo');await latest;const before={...world.renderer.domElement.dataset},current=art.combatInbetweens.enemy.teppo;finish('ashigaru');finish('ashigaru',true);await old;assert.deepEqual(world.renderer.domElement.dataset,before);assert.equal(art.combatInbetweens.enemy.teppo,current);assert.equal(art.combatInbetweens.enemy.ashigaru,undefined);art.dispose();
  });
  await test('전장 변경은 루트·시체·이동 병기 정리 후 빠진 원본과 중간 GPU 자원만 해제한다',async()=>{
    const {world,art}=context(),e={id:1,type:'ashigaru',hp:100},root=world.unit(e,false),corpse=world.unit({...e,id:2},false),mover=world.unit({id:3,kind:'courier',hp:100},false,true),order=[];world.units.set('e1',root);world.corpses.push({root:corpse,t:0});world.scenery.set('m3',mover);world.pickables=world.pickables.filter(r=>r!==corpse);art.updateUnit(root,e,false,0,0,{...sample('ashigaru'),poseRow:4});art.updateUnit(corpse,e,false,0,0,{...sample('ashigaru'),poseRow:0});let removed=0,retained=0;for(const d of [root.userData.fixedImage,corpse.userData.fixedImage,mover.userData.fixedImage])d.image.material.addEventListener('dispose',()=>order.push('private'));root.userData.fixedImage.image.material.map.addEventListener('dispose',()=>{order.push('atlas');removed++;});corpse.userData.fixedImage.image.material.map.addEventListener('dispose',()=>removed++);const guardCanvas=art.combatInbetweens.ally.guard.isolated[0].canvas;art.texture(guardCanvas).addEventListener('dispose',()=>retained++);
    world.reset();assert.deepEqual(order,['private','private','private']);await art.prepareCombatArt(null,{enemy:[],ally:['guard']});assert.equal(removed,2);assert.equal(retained,0);assert.equal(root.parent,null);assert.equal(corpse.parent,null);assert.equal(mover.parent,null);assert.equal(order.at(-1),'atlas');art.dispose();assert.equal(retained,1);
  });
  await test('같은 병종을 띄운 두 전장은 원본·중간 atlas와 GPU 소유권을 공유하지 않는다',async()=>{
    const a=context(false),b=context(false),pa=a.art.prepareCombatArt(null,{enemy:['ashigaru'],ally:[]}),pb=b.art.prepareCombatArt(null,{enemy:['ashigaru'],ally:[]});assert.equal(pending.length,4);for(let i=0;i<2;i++){finish('ashigaru');finish('ashigaru',true);}await Promise.all([pa,pb]);assert.notEqual(a.art.combatPoses.enemy.ashigaru,b.art.combatPoses.enemy.ashigaru);assert.notEqual(a.art.combatInbetweens.enemy.ashigaru,b.art.combatInbetweens.enemy.ashigaru);const e={id:1,type:'ashigaru',hp:100},ra=a.world.unit(e,false),rb=b.world.unit(e,false);for(const [ctx,r]of [[a,ra],[b,rb]])ctx.art.updateUnit(r,e,false,0,0,{...sample('ashigaru'),poseRow:4});let disposed=0;rb.userData.fixedImage.image.material.map.addEventListener('dispose',()=>disposed++);a.world.disposeCharacter(ra);a.art.dispose();assert.equal(disposed,0);b.world.disposeCharacter(rb);b.art.dispose();assert.equal(disposed,1);
  });
  await test('종료 뒤 도착한 원본·중간 원화는 종료된 전장·DOM을 되살리지 않는다',async()=>{
    const {art,world}=context(false),all=art.prepareCombatArt(null,{enemy:['ashigaru'],ally:[]});art.dispose();const before={...world.renderer.domElement.dataset};finish('ashigaru');finish('ashigaru',true);await all;assert.deepEqual(world.renderer.domElement.dataset,before);assert.deepEqual(art.combatInbetweens,{enemy:{},ally:{}});assert.equal(art.textures.size,0);
  });
}finally{T.ImageLoader.prototype.load=oldLoad;if(oldDocument===undefined)delete globalThis.document;else globalThis.document=oldDocument;}
assert.equal(pending.length,0);assert.equal(readbacks,0);
await fs.writeFile(new URL('../docs/COMBAT_INBETWEEN_RUNTIME_VALIDATION.json',import.meta.url),JSON.stringify({date:'2026-10-11',passed:results.length,enemyActors:22,allyActors:6,newPoses:448,totalCombatPoses:896,reservedActionArt:['courier','turtle'],localCoopPreserved:true,alphaReadbacks:readbacks,tests:results},null,2)+'\n');
console.log('\n병력 중간 원화 '+results.length+'개 검증 통과');
