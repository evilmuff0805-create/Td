import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import * as T from 'three';
import { PaintedSignatures } from '../src/3d/signature-art.js';
import { TACTIC_ART } from '../src/3d/tactic-data.js';
import { SIGNATURE_ART } from '../src/3d/signature-data.js';
import { PaintedEffectArt } from '../src/3d/effect-art.js';
import { BattleEffects } from '../src/3d/effects.js';
import { WinterWorld } from '../src/3d/world.js';
import { paintBattleEvent } from '../src/3d/battle-events.js';
import { ABILITY_SAMPLES,createAbilitySample } from '../src/3d/ability-samples.js';
import { createGame,applyCommand,step,DT } from '../src/sim/sim.js';
import { SnapshotEncoder } from '../src/sim/snapshot.js';
import { SKILL_ORDER,SKILLS } from '../src/data/skills.js';
import { COMBOS,findCombo } from '../src/data/combos.js';
import { WINTER_STAGE } from '../src/3d/scenario.js';

let passed=0;
async function test(name,run){await run();passed++;console.log(`  ✔ ${name}`);}
function ready(layout){const art=new PaintedSignatures(layout);art.image={width:layout.width,height:layout.height};art.ready=true;return art;}
async function withCanvas(run){
  const previous=globalThis.document,draws=[];
  globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>({drawImage:(...a)=>draws.push(a)})})};
  try{return await run(draws);}finally{if(previous===undefined)delete globalThis.document;else globalThis.document=previous;}
}
function fixture(){
  const scene=new T.Scene(),fx=new BattleEffects(scene,null);fx.signatures=ready(SIGNATURE_ART);fx.tactics=ready(TACTIC_ART);fx.art=new PaintedEffectArt();fx.art.texture=new T.Texture({width:1536,height:768});fx.art.ready=true;
  return Object.assign(Object.create(WinterWorld.prototype),{scene,fx,bullets:new Map(),scenery:new Map(),towers:new Map(),units:new Map(),camera:new T.Camera(),glowTex:null,art:null});
}
function clean(world){for(const map of [world.bullets,world.scenery]){for(const root of map.values()){world.scene.remove(root);world.disposeCharacter(root);}map.clear();}world.fx.destroy();}
function seen(world){const keys=new Set();world.scene.traverse(o=>{if(o.userData.paintedSignature)keys.add(o.userData.paintedSignature);});return keys;}
function coop(skill,pair=['yi','sejong']){const game=createGame({stageId:'s1',mode:'coop',courier:false,players:pair.map(hero=>({heroes:[hero],skills:[skill],towers:[]}))});game.players.forEach(p=>p.skills.forEach(s=>s.cd=0));return game;}

await test('새 20그림은 정확한 경계·12px 여백·전장별 텍스처를 사용하고 기존 영웅 자원과 분리한다',()=>withCanvas(draws=>{
  const a=ready(TACTIC_ART),b=ready(TACTIC_ART),heroes=ready(SIGNATURE_ART),textures=new Set();
  assert.equal(TACTIC_ART.frames.length,20);let disposals=0;
  for(const f of TACTIC_ART.frames){const mesh=a.decal(f.key);assert.ok(mesh);textures.add(mesh.material.map);mesh.material.map.addEventListener('dispose',()=>disposals++);assert.deepEqual(draws.at(-1).slice(1),[f.left,f.top,f.width,f.height,12,12,f.width,f.height]);assert.equal(mesh.material.blending,T.NormalBlending);assert.equal(mesh.material.depthWrite,false);assert.equal(a.texture(f.key),mesh.material.map);mesh.geometry.dispose();mesh.material.dispose();}
  assert.equal(textures.size,20);assert.equal(a.texture('yi-skill'),null);assert.equal(heroes.texture('skill-hanpa'),null);assert.notEqual(b.texture('skill-hanpa'),a.texture('skill-hanpa'));a.dispose();a.dispose();assert.equal(disposals,20);assert.ok(b.texture('skill-hanpa'));assert.equal(heroes.textures.size,0);b.dispose();heroes.dispose();
}));

await test('서로 다른 원본 로딩은 분리·공유하고 늦은 완료·실패가 종료한 전장을 되살리지 않는다',async()=>{
  const previous=globalThis.document,images=[];
  globalThis.document={createElementNS:()=>{const listeners=new Map(),image={listeners,addEventListener:(k,fn)=>listeners.set(k,fn),removeEventListener:()=>{},set src(url){this.url=url;}};images.push(image);return image;}};
  try{
    const spec={...TACTIC_ART,path:'assets/fixture-tactics.webp'},a=new PaintedSignatures(spec),b=new PaintedSignatures(spec),c=new PaintedSignatures({...spec,path:'assets/fixture-failed.webp'}),promises=[a.load(),b.load(),c.load()];assert.equal(images.length,2);a.dispose();images[0].listeners.get('load').call(images[0]);images[1].listeners.get('error').call(images[1],new Error('fixture missing'));assert.deepEqual(await Promise.all(promises),[false,true,false]);assert.equal(a.ready,false);assert.equal(a.image,null);assert.equal(b.textures.size,0);assert.equal(c.failed,true);b.dispose();c.dispose();
  }finally{if(previous===undefined)delete globalThis.document;else globalThis.document=previous;}
});

await test('비기 8개의 표시 신호는 2P 소유·해결된 소환/포탄/회복 좌표를 사용하고 재시전 거부·JSON 전달을 보존한다',()=>{
  for(const id of SKILL_ORDER){
    const game=coop(id),before=game.players.map(p=>p.gold);if(id==='donguibogam'){game.heroes[0].dead=true;game.heroes[0].respawn=8;}game.events.length=0;
    applyCommand(game,{t:'skill',p:1,slot:0,x:5.5,y:4.5});const cue=game.events.find(e=>e.k==='abilityCue');assert.equal(cue.motif,'skill-'+id);assert.equal(cue.p,1);assert.ok(cue.points.every(p=>Number.isFinite(p.x)&&Number.isFinite(p.y)));
    if(id==='uibyeong')assert.deepEqual(cue.points,game.summons.map(m=>({x:m.x,y:m.y})));
    if(id==='cheonja')assert.deepEqual(cue.points,[{x:game.projectiles[0].x,y:game.projectiles[0].y}]);
    if(['bongsu','gunryang'].includes(id))assert.deepEqual(cue.points,[{x:game.heroes[1].x,y:game.heroes[1].y}]);
    if(id==='gunryang'){assert.equal(game.players[1].gold-before[1],120);assert.equal(game.players[0].gold-before[0],60);}
    if(id==='donguibogam'){assert.ok(game.heroes.every(h=>!h.dead&&h.hp===h.maxHp));assert.deepEqual(cue.points,game.heroes.map(h=>({x:h.x,y:h.y})));}
    const snap=JSON.parse(JSON.stringify(new SnapshotEncoder().encode(game,game.events)));assert.deepEqual(snap.ev.find(e=>e.k==='abilityCue'),cue);
    game.events.length=0;applyCommand(game,{t:'skill',p:1,slot:0,x:5.5,y:4.5});assert.ok(!game.events.some(e=>e.k==='abilityCue'));assert.equal(game.players[1].stats.skillsUsed,1);assert.equal(game.players[0].stats.skillsUsed,0);
  }
});

await test('실제 명령 36개에서 영웅 16·비기 8·합격기 11·참격 각각의 전용 그림이 나타난다',()=>withCanvas(()=>{
  assert.equal(ABILITY_SAMPLES.length,36);const allSeen=new Set();
  for(const sample of ABILITY_SAMPLES){
    const game=createAbilitySample(sample,WINTER_STAGE.id),world=fixture(),observed=new Set();
    const paint=()=>{world.projectiles(game);world.combatScenery(game,game.time,DT);for(const e of game.events)paintBattleEvent(world,e,game);game.events.length=0;for(const key of seen(world)){observed.add(key);allSeen.add(key);}};
    paint();for(let i=0;i<90;i++){step(game);paint();world.fx.update(DT);}
    const key=sample.kind==='skill'?'skill-'+sample.id:sample.kind==='combo'?'combo-'+sample.comboId:sample.kind==='attack'?'attack-slash':sample.id+'-'+(sample.kind==='heroSkill'?'skill':'ult');assert.ok(observed.has(key),sample.key+' missing '+key);clean(world);
  }
  assert.deepEqual([...allSeen].sort(),[...TACTIC_ART.frames,...SIGNATURE_ART.frames].map(f=>f.key).sort());
}));

await test('양측 합격기 호흡과 역순 영웅 조합은 기존 10전용·일반 판정을 유지한다',()=>withCanvas(()=>{
  for(const c of [...COMBOS,{id:'generic',pair:['yi','eulji']}]){
    const pair=c.pair.slice().reverse(),game=coop('bongsu',pair);game.resonance.gauge=100;game.heroes[1].x=game.heroes[0].x+.5;game.heroes[1].y=game.heroes[0].y;game.events.length=0;
    applyCommand(game,{t:'combo',p:0});assert.equal(game.resonance.gauge,100);assert.ok(!game.events.some(e=>e.k==='combo'));assert.ok(game.events.some(e=>e.k==='comboWait'));
    applyCommand(game,{t:'combo',p:1});const event=game.events.find(e=>e.k==='combo');assert.equal(event.id,c.id);assert.equal(findCombo(...pair).id,c.id);assert.equal(game.resonance.gauge,0);assert.ok(game.players.every(p=>p.stats.combos===1));const world=fixture();paintBattleEvent(world,event,game);assert.ok(seen(world).has('combo-'+c.id));clean(world);
  }
}));

await test('폭탄·대포탄은 실제 투사체 id·궤적을 따르며 그림 미준비 시 기존 모델로 대체한다',()=>withCanvas(()=>{
  for(const id of ['bigyeok','cheonja']){
    const game=createAbilitySample(ABILITY_SAMPLES.find(s=>s.key===id+'-skill'),WINTER_STAGE.id),world=fixture(),projectile=game.projectiles[0];world.projectiles(game);const root=world.bullets.get(projectile.id);assert.ok(root.userData.paintedProjectile);assert.equal(root.userData.paintedProjectile.userData.paintedSignature,'skill-'+id);assert.equal(world.bullets.size,1);
    step(game);world.projectiles(game);assert.equal(world.bullets.get(projectile.id),root);assert.ok(root.position.y>0);clean(world);
    const fallback=fixture();fallback.fx.tactics.ready=false;fallback.projectiles(game);assert.equal(fallback.bullets.size,1);assert.ok(!fallback.bullets.get(projectile.id).userData.paintedProjectile);clean(fallback);
  }
}));

await test('한파 장판은 실제 반경·수명·정지를 보존하고 늦은 그림 준비 때 한 번만 교체한다',()=>withCanvas(()=>{
  const game=createAbilitySample(ABILITY_SAMPLES.find(s=>s.key==='hanpa-skill'),WINTER_STAGE.id),world=fixture(),zone=game.zones[0];assert.equal(zone.r,SKILLS.hanpa.radius);world.fx.tactics.ready=false;world.combatScenery(game,game.time,0);const first=world.scenery.get('z'+zone.id);assert.equal(first.userData.artKey,'common');let count=0;first.userData.disc.geometry.addEventListener('dispose',()=>count++);world.fx.tactics.ready=true;world.combatScenery(game,game.time,0);const next=world.scenery.get('z'+zone.id);assert.notEqual(next,first);assert.equal(count,1);assert.equal(next.userData.disc.userData.paintedSignature,'skill-hanpa');assert.equal(next.userData.disc.geometry.parameters.width,zone.r*2);const before=[next.userData.disc.material.opacity,next.userData.disc.rotation.z,zone.t];world.combatScenery(game,game.time,0);assert.equal(world.scenery.get('z'+zone.id),next);assert.deepEqual([next.userData.disc.material.opacity,next.userData.disc.rotation.z,zone.t],before);for(let i=0;i<Math.ceil((SKILLS.hanpa.dur+.1)/DT);i++)step(game);world.combatScenery(game,game.time,DT);assert.ok(!world.scenery.has('z'+zone.id));clean(world);
}));

await test('밀집 비기 효과는 64개로 제한하고 만료·재시작·종료에서 그림 자원을 한 번만 정리한다',()=>withCanvas(()=>{
  const world=fixture(),fx=world.fx;fx.signature('skill-uibyeong',3,5);const first=fx.active[0].root,image=first.children[0],counts={geometry:0,material:0,texture:0};image.geometry.addEventListener('dispose',()=>counts.geometry++);image.material.addEventListener('dispose',()=>counts.material++);image.material.map.addEventListener('dispose',()=>counts.texture++);
  for(let i=0;i<90;i++)fx.signature('skill-uibyeong',i%12,i%7);assert.equal(fx.active.length,64);assert.deepEqual(counts,{geometry:1,material:1,texture:0});const remaining=fx.active[0].root.children[0],before=[remaining.scale.x,remaining.material.opacity];fx.update(0);assert.deepEqual([remaining.scale.x,remaining.material.opacity],before);fx.update(2);assert.equal(fx.active.length,0);fx.reset();assert.equal(counts.texture,0);fx.destroy();fx.destroy();assert.equal(counts.texture,1);assert.equal(world.scene.children.length,0);
}));

await fs.writeFile(new URL('../docs/TACTIC_VALIDATION.json',import.meta.url),JSON.stringify({date:'2026-10-11',passedTests:passed,motifs:20,actualCommandSamples:36,equipmentSkills:8,specificCombos:10,genericCombo:true,localCoopHandshakeAndOwnerPreserved:true,lateLoadingAndFallbackChecked:true,ownedResourcesDisposedOnce:true},null,2)+'\n');
console.log(`\n비기·합격기 그림·실제 명령·자원 수명 ${passed}개 검증 통과`);
