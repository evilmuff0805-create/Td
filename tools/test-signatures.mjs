import assert from 'node:assert/strict';
import * as T from 'three';
import { PaintedSignatures } from '../src/3d/signature-art.js';
import { SIGNATURE_ART } from '../src/3d/signature-data.js';
import { PaintedEffectArt } from '../src/3d/effect-art.js';
import { BattleEffects } from '../src/3d/effects.js';
import { WinterWorld } from '../src/3d/world.js';
import { Renderer3D } from '../src/3d/renderer.js';
import { paintBattleEvent } from '../src/3d/battle-events.js';
import { ABILITY_SAMPLES,createAbilitySample } from '../src/3d/ability-samples.js';
import { newBattleGame,WINTER_STAGE } from '../src/3d/scenario.js';
import { createGame,applyCommand,step,DT } from '../src/sim/sim.js';
import { SnapshotEncoder } from '../src/sim/snapshot.js';
import { combatantModel } from '../src/3d/combat-models.js';
import { abilityIllustration } from '../src/3d/skill-art.js';
import { HERO_ORDER } from '../src/data/heroes.js';
import { SKILL_ORDER } from '../src/data/skills.js';

let passed=0;
async function test(name,run){await run();passed++;console.log(`  ✔ ${name}`);}
function canvasDocument(){const draws=[];return {draws,createElement:()=>({width:0,height:0,getContext:()=>({drawImage:(...args)=>draws.push(args)})})};}
async function withCanvas(run){const previous=globalThis.document,mock=canvasDocument();globalThis.document=mock;try{return await run(mock);}finally{if(previous===undefined)delete globalThis.document;else globalThis.document=previous;}}
function imageFixture(){const mock=canvasDocument(),listeners=new Map(),image={width:1254,height:1254,addEventListener:(k,fn)=>listeners.set(k,fn),removeEventListener:()=>{},set src(value){this.url=value;}};mock.createElementNS=()=>image;return {document:mock,listeners,image};}
function readySignatures(){const art=new PaintedSignatures();art.image={width:1254,height:1254};art.ready=true;return art;}
function fixture(){const scene=new T.Scene(),fx=new BattleEffects(scene,null),common=new PaintedEffectArt();common.texture=new T.Texture({width:1536,height:768});common.ready=true;fx.art=common;fx.signatures=readySignatures();return {scene,fx};}
function worldFixture(game){const {scene,fx}=fixture(),world=Object.assign(Object.create(WinterWorld.prototype),{scene,fx,bullets:new Map(),scenery:new Map(),towers:new Map(),units:new Map(),camera:new T.Camera(),glowTex:null,art:null});
  for(const h of game.heroes){const root=combatantModel(h.heroId);root.position.set(h.x,.035,h.y);root.userData.entity=h;scene.add(root);world.units.set(`h${h.id}`,root);}return world;}
function cleanWorld(world){for(const map of [world.bullets,world.scenery,world.units]){for(const root of map.values()){world.scene.remove(root);world.disposeCharacter(root);}map.clear();}world.fx.destroy();}

await test('원본 이미지 공유·늦은 완료·종료에서도 효과 캔버스와 텍스처를 미리 만들지 않는다',async()=>{
  const previous=globalThis.document,mock=imageFixture();globalThis.document=mock.document;
  try{const a=new PaintedSignatures(),b=new PaintedSignatures(),pa=a.load(),pb=b.load();a.dispose();mock.listeners.get('load').call(mock.image);assert.deepEqual(await Promise.all([pa,pb]),[false,true]);assert.equal(a.image,null);assert.equal(b.textures.size,0);assert.equal(mock.document.draws.length,0);b.dispose();}finally{if(previous===undefined)delete globalThis.document;else globalThis.document=previous;}
});

await test('효과 파일 또는 캔버스 실패는 거부된 promise·전투 중단 없이 공용 효과로 대체한다',async()=>{
  const previous=globalThis.document,mock=imageFixture();globalThis.document=mock.document;
  try{const {PaintedSignatures:Missing}=await import('../src/3d/signature-art.js?missing-test'),art=new Missing(),promise=art.load();mock.listeners.get('error').call(mock.image,new Error('missing'));assert.equal(await promise,false);assert.equal(art.failed,true);assert.equal(art.ready,false);art.dispose();}finally{if(previous===undefined)delete globalThis.document;else globalThis.document=previous;}
  await withCanvas(()=>{const {fx}=fixture();globalThis.document.createElement=()=>({getContext:()=>null});fx.heroCue({motif:'gwon-ult',x:3,y:4,r:.65});assert.equal(fx.signatures.ready,false);assert.equal(fx.signatures.failed,true);assert.ok(fx.active.length>0);fx.destroy();});
});

await test('16개 실제 경계 상자를 12px 투명 여백으로 분리하고 사용한 모티프 텍스처만 재사용한다',()=>withCanvas(mock=>{
  const art=readySignatures(),textures=new Set();let disposed=0;
  for(const frame of SIGNATURE_ART.frames){const mesh=art.plane(frame.key,1,1),again=art.decal(frame.key,1);textures.add(mesh.material.map);assert.equal(mesh.material.map,again.material.map);assert.deepEqual(mock.draws.at(-1).slice(1),[frame.left,frame.top,frame.width,frame.height,12,12,frame.width,frame.height]);assert.equal(mesh.material.map.image.width,frame.width+24);assert.equal(mesh.material.map.colorSpace,T.SRGBColorSpace);assert.equal(mesh.material.blending,T.NormalBlending);assert.equal(mesh.material.depthWrite,false);assert.equal(mesh.material.depthTest,true);mesh.material.map.addEventListener('dispose',()=>disposed++);for(const o of [mesh,again]){o.geometry.dispose();o.material.dispose();}}
  assert.equal(mock.draws.length,16);assert.equal(textures.size,16);assert.equal(disposed,0);art.dispose();art.dispose();assert.equal(disposed,16);assert.equal(art.textures.size,0);assert.equal(art.decal('yi-skill'),null);
}));

await test('밀집 64개 상한·만료·재시작은 개별 메시만 해제하고 전장 종료 때 공유 그림을 한 번 해제한다',()=>withCanvas(()=>{
  const {fx,scene}=fixture();fx.signature('gwon-ult',3,5);const first=fx.active[0].root,owned=[];first.traverse(o=>{if(o.geometry)owned.push(o.geometry);if(o.material)owned.push(o.material);});const counts=new Map();for(const o of owned)o.addEventListener('dispose',()=>counts.set(o,(counts.get(o)??0)+1));let textureDisposed=0;fx.signatures.textures.get('gwon-ult').addEventListener('dispose',()=>textureDisposed++);
  for(let i=0;i<90;i++)fx.signature('gwon-ult',i%12,i%7);assert.equal(fx.active.length,64);assert.ok(owned.every(o=>counts.get(o)===1));assert.equal(textureDisposed,0);fx.update(2);assert.equal(fx.active.length,0);fx.reset();assert.equal(textureDisposed,0);fx.destroy();fx.destroy();assert.equal(textureDisposed,1);assert.equal(scene.children.length,0);
}));

await test('영웅 효과의 크기·퇴장은 프레임 간격에 독립적이고 일시정지에서 고정된다',()=>withCanvas(()=>{
  const {fx:a}=fixture(),{fx:b}=fixture();a.signature('gwak-ult',3,5,.85);b.signature('gwak-ult',3,5,.85);a.update(.2);for(let i=0;i<4;i++)b.update(.05);const ma=a.active[0].root.children[0],mb=b.active[0].root.children[0];assert.ok(ma.scale.distanceTo(mb.scale)<1e-9);assert.ok(Math.abs(ma.material.opacity-mb.material.opacity)<1e-9);const before=[...ma.scale.toArray(),ma.material.opacity];a.update(0);assert.deepEqual([...ma.scale.toArray(),ma.material.opacity],before);a.destroy();b.destroy();
}));

await test('학 그림 전체 UV를 보존하고 모티프의 모든 꼭짓점이 실제 학익진 부채꼴 안에 놓인다',()=>withCanvas(()=>{
  const {fx}=fixture(),range=4.2,angle=.72;fx.volley(3,5,.9,range,angle);const root=fx.active[0].root,crane=root.children.find(o=>o.userData.paintedSignature==='yi-skill');assert.ok(crane);const uv=crane.geometry.attributes.uv,vertices=crane.geometry.attributes.position;
  assert.equal(Math.min(...Array.from({length:uv.count},(_,i)=>uv.getX(i))),0);assert.equal(Math.max(...Array.from({length:uv.count},(_,i)=>uv.getX(i))),1);assert.equal(Math.min(...Array.from({length:uv.count},(_,i)=>uv.getY(i))),0);assert.equal(Math.max(...Array.from({length:uv.count},(_,i)=>uv.getY(i))),1);
  crane.updateMatrix();for(let i=0;i<vertices.count;i++){const p=new T.Vector3().fromBufferAttribute(vertices,i).applyMatrix4(crane.matrix);assert.ok(Math.hypot(p.x,p.z)<=range);assert.ok(Math.abs(Math.atan2(p.z,p.x))<=angle);}
  assert.ok(Math.abs(crane.geometry.parameters.width/crane.geometry.parameters.height-fx.signatures.aspect('yi-skill'))<1e-9);fx.destroy();
}));

await test('화염 그림의 늦은 적용은 실제 장판을 한 번 교체하며 한파·장판 수명은 유지한다',()=>withCanvas(()=>{
  const game=createAbilitySample(ABILITY_SAMPLES.find(s=>s.key==='eulji-heroSkill'),WINTER_STAGE.id),world=worldFixture(game);world.fx.signatures.ready=false;world.combatScenery(game,game.time,0);const first=world.scenery.get(`z${game.zones[0].id}`);assert.equal(first.userData.artKey,'common');let disposed=0;first.userData.disc.geometry.addEventListener('dispose',()=>disposed++);world.fx.signatures.ready=true;world.combatScenery(game,game.time,0);const next=world.scenery.get(`z${game.zones[0].id}`);assert.notEqual(next,first);assert.equal(next.userData.artKey,'signature');assert.equal(next.userData.disc.userData.paintedSignature,'eulji-skill');assert.equal(disposed,1);world.combatScenery(game,game.time,0);assert.equal(world.scenery.get(`z${game.zones[0].id}`),next);cleanWorld(world);
}));

await test('새 신호는 실제 의병·목책 좌표와 각 시전자 소유권을 사용하며 잘못된 명령은 만들지 않는다',()=>{
  for(const heroId of ['gwak','gwon','sejong']){
    const game=createGame({stageId:'s1',mode:'coop',courier:false,players:[{heroes:[heroId],skills:[]},{heroes:[heroId],skills:[]}]});game.heroes.forEach(h=>{h.skillCd=0;h.ultCd=0;});const hero=game.heroes[1];game.events.length=0;
    applyCommand(game,{t:'heroUlt',p:0,h:1,x:100,y:100});assert.ok(!game.events.some(e=>e.k==='abilityCue'));assert.equal(hero.ultCd,0);
    applyCommand(game,{t:'heroUlt',p:1,h:1,x:100,y:100});let cue=game.events.find(e=>e.k==='abilityCue');assert.ok(cue);assert.equal(cue.caster,hero.id);assert.equal(cue.p,1);
    if(heroId==='gwon'){const wall=game.summons.find(s=>s.kind==='wall');assert.equal(cue.x,wall.x);assert.equal(cue.y,wall.y);}else{assert.equal(cue.x,hero.x);assert.equal(cue.y,hero.y);}
    if(heroId==='gwak'){game.events.length=0;applyCommand(game,{t:'heroSkill',p:1,h:1,x:100,y:100});cue=game.events.find(e=>e.k==='abilityCue');assert.deepEqual(cue.points,game.summons.map(m=>({x:m.x,y:m.y})));assert.equal(cue.points.length,3);}
  }
});

await test('새 신호는 JSON 스냅샷에 좌표·시전자·소유자를 보존하고 캠페인과 비교 화면에서 동일하게 그린다',()=>{
  const game=createAbilitySample(ABILITY_SAMPLES.find(s=>s.key==='gwak-heroSkill'),WINTER_STAGE.id),cue=game.events.find(e=>e.k==='abilityCue');const snap=JSON.parse(JSON.stringify(new SnapshotEncoder().encode(game,game.events)));assert.deepEqual(snap.ev.find(e=>e.k==='abilityCue'),cue);assert.ok(JSON.stringify(cue).length<350);
  const calls=[],world={fx:{heroCue:e=>calls.push(e)}};paintBattleEvent(world,cue,game);Renderer3D.prototype.effect.call({world},cue,game);assert.deepEqual(calls,[cue,cue]);
});

await test('12줄기 천부인 대기 중 검은 구체를 만들지 않고 같은 표적의 예고를 합쳐도 실제 12회 착탄을 보존한다',()=>withCanvas(()=>{
  const game=createAbilitySample(ABILITY_SAMPLES.find(s=>s.key==='dangun-heroUlt'),WINTER_STAGE.id),world=worldFixture(game);world.projectiles(game);world.combatScenery(game,game.time,0);assert.equal(game.projectiles.filter(p=>p.kind==='thunder').length,12);assert.equal(world.bullets.size,0);assert.equal([...world.scenery.keys()].filter(k=>k.startsWith('p')).length,4);
  const first=[...world.scenery.values()];world.combatScenery(game,game.time,0);assert.deepEqual([...world.scenery.values()],first);let impacts=0;for(let i=0;i<120;i++){step(game);impacts+=game.events.filter(e=>e.k==='boom'&&e.kind==='thunder').length;game.events.length=0;world.projectiles(game);world.combatScenery(game,game.time,DT);assert.equal(world.bullets.size,0);}assert.equal(impacts,12);assert.equal([...world.scenery.keys()].filter(k=>k.startsWith('p')).length,0);cleanWorld(world);
}));

await test('모든 영웅 기술 16개가 실제 명령·투사체·장판·이동체에서 각 전용 모티프를 표시한다',()=>withCanvas(()=>{
  const seen=new Set();for(const sample of ABILITY_SAMPLES.filter(s=>['heroSkill','heroUlt'].includes(s.kind))){
    const game=createAbilitySample(sample,WINTER_STAGE.id),world=worldFixture(game),observed=new Set();
    const paint=()=>{world.projectiles(game);world.combatScenery(game,game.time,DT);for(const e of game.events)paintBattleEvent(world,e,game);game.events.length=0;world.scene.traverse(o=>{if(o.userData.paintedSignature){observed.add(o.userData.paintedSignature);seen.add(o.userData.paintedSignature);}});};
    paint();for(let i=0;i<90;i++){step(game);paint();world.fx.update(DT);}
    const expected=sample.id+'-'+(sample.kind==='heroSkill'?'skill':'ult');assert.ok(observed.has(expected),sample.key+' must show '+expected);cleanWorld(world);
  }assert.deepEqual([...seen].sort(),SIGNATURE_ART.frames.map(f=>f.key).sort());
}));

await test('8비기·참격·합격기 실제 비교 명령과 기존 25칸 아이콘을 유지한다',()=>withCanvas(()=>{
  assert.equal(ABILITY_SAMPLES.length,36);assert.equal(new Set(ABILITY_SAMPLES.map(s=>s.key)).size,36);
  for(const sample of ABILITY_SAMPLES.filter(s=>!['heroSkill','heroUlt'].includes(s.kind))){const game=createAbilitySample(sample,WINTER_STAGE.id),world=worldFixture(game);const events=[];for(let i=0;i<Math.ceil((sample.holdAt+.1)/DT);i++){for(const e of game.events){events.push(e.k);paintBattleEvent(world,e,game);}game.events.length=0;step(game);world.projectiles(game);world.combatScenery(game,game.time,DT);world.fx.update(DT);}if(sample.kind==='skill')assert.equal(game.players[0].stats.skillsUsed,1);else assert.ok(events.includes(sample.kind==='combo'?'combo':'slash'));assert.ok(!sample.description.includes('{'));cleanWorld(world);}
  for(const hero of HERO_ORDER)for(const kind of ['heroSkill','heroUlt'])assert.ok(abilityIllustration(hero,kind,true)?.src.endsWith('.webp'));
  for(const skill of SKILL_ORDER)assert.ok(abilityIllustration(skill,'skill',true)?.src.endsWith('.webp'));assert.ok(abilityIllustration('taegeuk','combo',true));
}));

console.log(`\n영웅 전용 효과·실제 명령·자원 수명 ${passed}개 검증 통과`);
