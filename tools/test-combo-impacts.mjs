import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import * as T from 'three';
import { createGame,applyCommand,step,DT } from '../src/sim/sim.js';
import { spawnEnemy,comboCue } from '../src/sim/combat.js';
import { COMBOS } from '../src/data/combos.js';
import { SnapshotEncoder,emptyView,applySnapshot } from '../src/sim/snapshot.js';
import { Session } from '../src/game/session.js';
import { BattleEffects } from '../src/3d/effects.js';
import { ComboImpactArt,COMBO_IMPACT_STYLES } from '../src/3d/combo-impact-art.js';
import { COMBO_IMPACT_PIVOTS } from '../src/3d/combo-impact-data.js';
import { COMBO_ELEMENTS } from '../src/3d/combo-element-data.js';
import { PaintedEffectArt } from '../src/3d/effect-art.js';
import { PaintedSignatures } from '../src/3d/signature-art.js';
import { TACTIC_ART } from '../src/3d/tactic-data.js';
import { paintBattleEvent } from '../src/3d/battle-events.js';

const baselineCommit='d817e52c22c66b1495eaa2b344b4320765469b8f';
const cases=[...COMBOS,{id:'generic',pair:['yi','eulji']}],results=[];
async function test(name,run){await run();results.push({name,passed:true});console.log('  ✔ '+name);}
const config=pair=>({stageId:'s1',mode:'local',seed:17,courier:false,players:pair.map(id=>({heroes:[id],skills:[],towers:[]}))});
function populate(game,count=4,type='samurai'){
  game.wave.timer=999;game.heroes.forEach((h,i)=>{h.x=8+i*.6;h.y=5;h.tx=h.x;h.ty=h.y;h.post={x:h.x,y:h.y};h.cd=999;h.hp=h.maxHp/2;});
  for(let i=0;i<count;i++){const e=spawnEnemy(game,type,0,1,3+i*.35);e.hp=e.maxHp=6000;e.stunT=99;}
  game.resonance.gauge=100;game.events.length=0;return game;
}
function gameFor(pair,count=4,type){return populate(createGame(config(pair)),count,type);}
function fire(game){applyCommand(game,{t:'combo',p:0});applyCommand(game,{t:'combo',p:1});}
const cues=game=>game.events.filter(e=>e.k==='abilityCue'&&e.combo);
const points=actors=>actors.map(a=>({x:a.x,y:a.y}));
function readyImpact(){const art=new ComboImpactArt();art.ready=true;art.texture=new T.Texture({width:1774,height:887});return art;}
function fixture(){
  const scene=new T.Scene(),fx=new BattleEffects(scene,null);fx.comboArt=readyImpact();fx.art=new PaintedEffectArt();fx.art.ready=true;fx.art.texture=new T.Texture({width:1536,height:768});
  const tactics=new PaintedSignatures(TACTIC_ART);tactics.ready=true;tactics.image={width:TACTIC_ART.width,height:TACTIC_ART.height};fx.tactics=tactics;return {scene,fx};
}
async function withCanvas(fn){const previous=globalThis.document;globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>({drawImage(){}})})};try{return await fn();}finally{if(previous===undefined)delete globalThis.document;else globalThis.document=previous;}}

await test('11조합·역순 조합은 양측 호흡이 맞아야 정확히 한 번 발동한다',()=>{
  for(const c of cases)for(const pair of [c.pair,c.pair.slice().reverse()]){
    const game=gameFor(pair);applyCommand(game,{t:'combo',p:0});assert.equal(cues(game).length,0);assert.equal(game.resonance.gauge,100);
    applyCommand(game,{t:'combo',p:1});assert.equal(cues(game).length,1);assert.equal(cues(game)[0].combo,c.id);assert.equal(cues(game)[0].phase,'cast');assert.equal(game.resonance.gauge,0);
    applyCommand(game,{t:'combo',p:1});assert.equal(cues(game).length,1);assert.ok(game.players.every(p=>p.stats.combos===1));assert.ok(!cues(game)[0].sound);
  }
});

await test('즉시 피해·갑옷 해제는 처치 전 실제 대상 좌표를 복사한다',()=>{
  for(const c of cases.filter(c=>!['yi_sejong','gwak_gwon','dangun_sejong','gang_yi','ahn_yi'].includes(c.id))){
    const game=gameFor(c.pair),before=points(game.enemies);game.enemies.forEach(e=>e.hp=1);fire(game);const cue=cues(game)[0];assert.deepEqual(cue.points,before);
    game.enemies[0].x+=10;game.heroes[0].x+=10;assert.deepEqual(cue.points,before);assert.equal(cue.heroes[0].x,8);
  }
});

await test('사망 후 새로 생긴 적은 이미 발동한 합격기 대상에 섞이지 않는다',()=>{
  const game=gameFor(['yi','gwon'],1,'ram'),before=points(game.enemies);game.enemies[0].hp=1;fire(game);
  assert.ok(game.enemies.length>1);assert.deepEqual(cues(game)[0].points,before);
});

await test('지원·의병·회복은 적이나 아직 0,0인 거북선 대신 실제 아군 좌표를 쓴다',()=>{
  for(const c of cases.filter(c=>COMBO_IMPACT_STYLES[c.id].support)){
    const game=gameFor(c.pair);game.towers.push({cx:12.5,cy:8.5});fire(game);const cue=cues(game)[0];assert.deepEqual(cue.heroes,points(game.heroes));
    if(c.id==='yi_sejong'){assert.deepEqual(cue.points,[{x:12.5,y:8.5}]);assert.ok(game.movers.every(m=>m.x===0&&m.y===0));}
    if(c.id==='gwak_gwon'){assert.deepEqual(cue.points,points(game.summons));assert.ok(cue.points.length>0);}
    if(c.id==='dangun_sejong'){assert.deepEqual(cue.points,[]);assert.ok(game.heroes.every(h=>h.hp===h.maxHp));}
    assert.ok(cue.points.every(p=>Number.isFinite(p.x)&&Number.isFinite(p.y)));
  }
});

await test('시전 때 적이 없으면 공격 착탄은 없고 지원받는 영웅은 계속 표시한다',()=>withCanvas(()=>{
  for(const c of cases){const game=gameFor(c.pair,0);fire(game);const {fx}=fixture();for(const e of cues(game))fx.heroCue(e);const impacts=fx.active.filter(e=>e.root.userData.comboImpact);assert.equal(impacts.length,COMBO_IMPACT_STYLES[c.id].support?2+(c.id==='gwak_gwon'?game.summons.length:0):0);fx.destroy();}
}));

await test('유성의 고정 좌표와 추적 포탄의 최종 좌표는 기존 궤적 그대로 착탄 시점에 기록한다',()=>{
  for(const c of cases.filter(c=>['gang_yi','ahn_yi'].includes(c.id))){
    const game=gameFor(c.pair,1);fire(game);assert.deepEqual(cues(game)[0].points,[]);const projectile=game.projectiles[0],original={x:projectile.tx,y:projectile.ty};assert.equal(cues(game).filter(e=>e.phase==='impact').length,0);
    game.events.length=0;game.enemies[0].x+=2;game.enemies[0].y+=1;const target=points(game.enemies)[0];
    for(let i=0;i<26;i++)step(game);const cue=cues(game).find(e=>e.phase==='impact');assert.ok(cue);assert.deepEqual(cue.points,[c.id==='gang_yi'?original:target]);
    const boom=game.events.find(e=>e.k==='boom'&&['meteor','bigshell'].includes(e.kind));assert.deepEqual(cue.points,[{x:boom.x,y:boom.y}]);
  }
});

await test('낙하 전 표적이 사라져도 기존 광역 폭발과 그 위치의 연출을 유지한다',()=>{
  for(const c of cases.filter(c=>['gang_yi','ahn_yi'].includes(c.id))){const game=gameFor(c.pair,1);fire(game);const p=game.projectiles[0],landing={x:p.tx,y:p.ty};game.enemies[0].hp=0;game.enemies.length=0;game.events.length=0;for(let i=0;i<26;i++)step(game);assert.deepEqual(cues(game).find(e=>e.phase==='impact').points,[landing]);assert.ok(game.events.some(e=>e.k==='boom'));}
});

await test('표시 24곳 상한은 피해 80명 전원과 첫·마지막 대상 좌표를 보존한다',()=>{
  const game=gameFor(['eulji','gang'],80),before=game.enemies.map(e=>e.hp),all=points(game.enemies);fire(game);const cue=cues(game)[0];assert.equal(cue.points.length,24);assert.deepEqual(cue.points[0],all[0]);assert.deepEqual(cue.points.at(-1),all.at(-1));assert.ok(game.enemies.every((e,i)=>e.hp<before[i]));
  const copy=structuredClone(cue);game.enemies.forEach(e=>e.x=-99);assert.deepEqual(cue,copy);
  const empty={events:[]};comboCue(empty,'generic',[]);assert.deepEqual(empty.events[0].points,[]);
});

await test('JSON 게스트 전달은 착탄 좌표를 보존하고 새 스냅샷 없이 재생하지 않는다',()=>withCanvas(()=>{
  const game=gameFor(['yi','gwon']);fire(game);const encoder=new SnapshotEncoder(),snap=JSON.parse(JSON.stringify(encoder.encode(game,game.events))),view=emptyView({stageId:'s1'});applySnapshot(view,snap);
  assert.deepEqual(snap.ev.filter(e=>e.combo),cues(game));const {fx}=fixture(),handlers=new Map(),session=new Session({kind:'guest',stageId:'s1',difficulty:'normal',net:{on:(name,fn)=>{handlers.set(name,fn);return ()=>{};},send(){}}});
  handlers.get('snap')({s:snap});session.update(0).forEach(e=>paintBattleEvent({fx},e,session.view));const count=fx.active.length;assert.deepEqual(session.update(0),[]);assert.equal(fx.active.length,count);assert.ok(count>0);fx.destroy();
}));

await test('11개 착탄은 전용 문양·물/불/빛/회복 그림을 쓰고 이동한 적을 다시 읽지 않는다',()=>withCanvas(()=>{
  for(const c of cases){const {fx}=fixture(),event={combo:c.id,phase:'impact',heroes:[],points:[{x:3,y:5}]};fx.heroCue(event);const root=fx.active[0].root;assert.equal(root.position.x,3);assert.equal(root.position.z,5);assert.equal(root.userData.family,COMBO_IMPACT_STYLES[c.id].family);assert.ok(root.children.some(o=>o.userData.paintedSignature==='combo-'+c.id));assert.equal(root.children[0].userData.paintedEffect,COMBO_IMPACT_STYLES[c.id].family);fx.destroy();}
  const {fx}=fixture();fx.combo({id:'gwon_yi',x:3,y:4},{});assert.equal(fx.active.length,1,'Cast emblem must not scan live actors');fx.destroy();
}));

await test('8프레임 UV와 피벗 보정은 효과마다 독립적이며 공유 텍스처를 움직이지 않는다',()=>{
  const art=readyImpact(),a=art.decal(1,'#ffffff'),b=art.decal(1,'#ffffff'),initial=b.geometry.attributes.uv.array.slice();
  for(let i=0;i<8;i++){art.frame(a,i);assert.equal(a.userData.impactFrame,i);const uv=a.geometry.attributes.uv;for(let j=0;j<uv.count;j++){assert.ok(uv.getX(j)>i%4/4&&uv.getX(j)<(i%4+1)/4);assert.ok(uv.getY(j)>1-(Math.floor(i/4)+1)/2&&uv.getY(j)<1-Math.floor(i/4)/2);}assert.ok(Math.abs(a.position.x+(COMBO_IMPACT_PIVOTS[i].x-.5)*2.8)<1e-6);assert.ok(Math.abs(a.position.z+(COMBO_IMPACT_PIVOTS[i].y-.5)*2.8)<1e-6);assert.deepEqual(b.geometry.attributes.uv.array,initial);}
  assert.deepEqual(art.texture.offset.toArray(),[0,0]);assert.equal(a.material.map,b.material.map);for(const mesh of [a,b]){mesh.geometry.dispose();mesh.material.dispose();}art.dispose();
});

await test('일시정지·작은 시간 간격·연속 재생은 같은 프레임과 잔광을 유지한다',()=>withCanvas(()=>{
  const {fx:a}=fixture(),{fx:b}=fixture(),event={combo:'eulji_gang',phase:'impact',points:[{x:3,y:5}]};a.heroCue(event);b.heroCue(event);a.update(.36);for(let i=0;i<6;i++)b.update(.06);
  const state=fx=>fx.active.map(e=>({position:e.root.position.toArray(),children:e.root.children.map(o=>({p:o.position.toArray(),s:o.scale.toArray(),opacity:o.material.opacity,frame:o.userData.impactFrame}))}));
  assert.deepEqual(state(a),state(b));const before=state(a);a.update(0);assert.deepEqual(state(a),before);assert.equal(a.active[0].root.userData.frame,2);a.update(2);assert.equal(a.active.length,0);a.destroy();b.destroy();
  const {fx}=fixture();fx.heroCue(event);for(let i=0;i<15;i++)fx.update(DT);assert.equal(fx.active[0].root.userData.frame,2,'Exact eighth-frame boundary');fx.destroy();
}));

await test('층을 묶은 효과는 64뿌리 상한·24대상 상한·종료 시 개별 자원 1회 해제를 지킨다',()=>withCanvas(()=>{
  const {scene,fx}=fixture();fx.heroCue({combo:'gwon_yi',phase:'impact',points:[{x:1,y:2}]});const first=fx.active[0].root,resources=new Map();first.traverse(o=>{for(const r of [o.geometry,o.material].filter(Boolean)){resources.set(r,0);r.addEventListener('dispose',()=>resources.set(r,resources.get(r)+1));}});
  let textures=0;fx.comboArt.texture.addEventListener('dispose',()=>textures++);for(let i=0;i<10;i++)fx.heroCue({combo:'gwon_yi',phase:'impact',points:Array.from({length:80},(_,i)=>({x:i,y:3}))});assert.equal(fx.active.length,64);assert.ok([...resources.values()].every(n=>n===1));assert.equal(textures,0);fx.reset();assert.equal(fx.active.length,0);assert.deepEqual(scene.children,fx.previewRoots);fx.destroy();fx.destroy();assert.equal(textures,1);assert.equal(scene.children.length,0);
}));

await test('지원 대상이 많아도 두 영웅을 먼저 표시하고 누락된 그림은 기본 효과로 대체한다',()=>{
  const scene=new T.Scene(),fx=new BattleEffects(scene,null),event={combo:'yi_sejong',phase:'cast',heroes:[{x:100,y:200},{x:101,y:201}],points:Array.from({length:80},(_,i)=>({x:i,y:3}))};fx.heroCue(event);const roots=fx.active.filter(e=>e.root.userData.comboImpact);assert.equal(roots.length,24);assert.deepEqual(roots.slice(0,2).map(e=>[e.root.position.x,e.root.position.z]),[[100,200],[101,201]]);assert.ok(roots.every(e=>e.root.children[0].geometry.type==='RingGeometry'));fx.destroy();
});

await test('늦게 끝난 로딩·실패·여러 전장은 공유 픽셀과 전장별 GPU 소유를 지킨다',async()=>{
  const previous=globalThis.document,images=[];globalThis.document={createElementNS:()=>{const listeners=new Map(),image={width:1774,height:887,addEventListener:(k,fn)=>listeners.set(k,fn),removeEventListener(){},set src(url){this.url=url;},listeners};images.push(image);return image;}};
  try{const a=new ComboImpactArt(),b=new ComboImpactArt(),pa=a.load(),pb=b.load();assert.equal(images.length,4);a.dispose();for(const image of images)image.listeners.get('load').call(image);assert.deepEqual(await Promise.all([pa,pb]),[false,true]);assert.equal(a.texture,null);assert.equal(a.elements.size,0);let disposed=0;for(const texture of [b.texture,...b.elements.values()])texture.addEventListener('dispose',()=>disposed++);b.dispose();b.dispose();assert.equal(disposed,4);
    const {ComboImpactArt:Missing}=await import('../src/3d/combo-impact-art.js?failure'),missing=new Missing(),start=images.length,pending=missing.load();for(const image of images.slice(start))image.listeners.get('error').call(image,new Error('fixture'));assert.equal(await pending,false);assert.equal(missing.failed,true);missing.dispose();
  }finally{if(previous===undefined)delete globalThis.document;else globalThis.document=previous;}
});

await test('물·불·회복 각각 8프레임은 원본 색과 전용 피벗을 쓰며 동시 효과 UV를 공유하지 않는다',()=>{
  const art=readyImpact();for(const family of Object.keys(COMBO_ELEMENTS))art.elements.set(family,new T.Texture({width:1774,height:887}));
  const meshes=Object.keys(COMBO_ELEMENTS).map(family=>art.decal(1,'#ff0000',.5,family)),initial=meshes.map(m=>m.geometry.attributes.uv.array.slice());
  for(const [n,mesh]of meshes.entries()){
    const family=Object.keys(COMBO_ELEMENTS)[n];assert.equal(mesh.userData.impactFamily,family);assert.equal(mesh.material.color.getHex(),0xffffff);
    for(let i=0;i<8;i++){art.frame(mesh,i);const pivot=COMBO_ELEMENTS[family].pivots[i];assert.ok(Math.abs(mesh.position.x-(.5-pivot.x)*2.8)<1e-6);assert.ok(Math.abs(mesh.position.z-(.5-pivot.y)*2.8)<1e-6);}
    for(let j=n+1;j<meshes.length;j++)assert.deepEqual(meshes[j].geometry.attributes.uv.array,initial[j]);assert.deepEqual(mesh.material.map.offset.toArray(),[0,0]);
  }
  assert.equal(new Set(meshes.map(m=>m.material.map)).size,3);for(const m of meshes){m.geometry.dispose();m.material.dispose();}art.dispose();
});

await test('회복 연꽃은 실제 회복 영웅 발밑 두 곳에만 재생하며 적에게 표시하지 않는다',()=>withCanvas(()=>{
  const game=gameFor(['dangun','sejong']),enemyPoints=points(game.enemies);fire(game);const {fx}=fixture();fx.comboArt.elements.set('heal',new T.Texture({width:1774,height:887}));fx.heroCue(cues(game)[0]);
  const roots=fx.active.filter(e=>e.root.userData.comboImpact);assert.equal(roots.length,2);assert.deepEqual(roots.map(e=>({x:e.root.position.x,y:e.root.position.z})),points(game.heroes));assert.ok(roots.every(e=>e.root.children.some(c=>c.userData.impactFamily==='heal')));assert.ok(roots.every(e=>!enemyPoints.some(p=>p.x===e.root.position.x&&p.y===e.root.position.z)));fx.destroy();
}));

await test('물 원화만 실패해도 물은 공용으로 대체하고 불·회복·빛과 전장 종료를 보존한다',async()=>{
  const previous=globalThis.document,images=[];globalThis.document={createElementNS:()=>{const listeners=new Map(),image={width:1774,height:887,addEventListener:(k,fn)=>listeners.set(k,fn),removeEventListener(){},set src(url){this.url=url;},listeners};images.push(image);return image;}};
  try{const {ComboImpactArt:Partial}=await import('../src/3d/combo-impact-art.js?partial'),art=new Partial(),pending=art.load();for(const image of images)image.listeners.get(image.url.includes('combo-flood')?'error':'load').call(image,new Error('fixture'));assert.equal(await pending,true);assert.deepEqual(art.missingFamilies,['flood']);const water=art.decal(1,'#a4deee',.5,'flood'),fire=art.decal(1,'#ff0000',.5,'fire');assert.equal(water.material.map,art.texture);assert.equal(water.userData.impactFamily,'light');assert.equal(fire.userData.impactFamily,'fire');for(const m of [water,fire]){m.geometry.dispose();m.material.dispose();}art.dispose();assert.equal(art.decal(1,'#fff',.5,'fire'),null);
  }finally{if(previous===undefined)delete globalThis.document;else globalThis.document=previous;}
});

await test('변경 전 코드와 11조합 전체의 피해·재화·소환·투사체·난수·이벤트가 3초간 완전히 같다',async()=>{
  const root=fileURLToPath(new URL('../',import.meta.url)),old=rel=>execFileSync('git',['show',baselineCommit+':'+rel],{cwd:root,encoding:'utf8'});
  const bundle=await build({stdin:{contents:old('src/sim/sim.js'),resolveDir:root+'src/sim',sourcefile:'baseline-sim.js'},plugins:[{name:'baseline-abilities',setup(b){b.onLoad({filter:/[/\\]abilities\.js$/},()=>({contents:old('src/sim/abilities.js'),resolveDir:root+'src/sim',loader:'js'}));}}],bundle:true,platform:'node',format:'esm',write:false});
  const baseline=await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));
  const combat=game=>JSON.stringify(game,(key,value)=>key==='visualCombo'?undefined:key==='events'?value.filter(e=>e.k!=='abilityCue'):value);
  for(const c of cases){const a=gameFor(c.pair,30),b=populate(baseline.createGame(config(c.pair)),30);fire(a);baseline.applyCommand(b,{t:'combo',p:0});baseline.applyCommand(b,{t:'combo',p:1});assert.equal(combat(a),combat(b),c.id+' initial');for(let i=0;i<180;i++){step(a);baseline.step(b);assert.equal(combat(a),combat(b),c.id+' tick '+i);a.events.length=0;b.events.length=0;}}
});

await fs.writeFile('docs/COMBO_IMPACT_RUNTIME_VALIDATION.json',JSON.stringify({date:'2026-10-11',passedTests:results.length,results,combos:11,reversePairs:11,localCoopPreserved:true,maximumTargetsPerCue:24,maximumEffectRoots:64,animationFrames:8,baselineCommit,allComboCombatComparisonTicks:180,jsonGuestEventsOnce:true,sharedTextureOffsetUnchanged:true,lateLoadingAndFallback:true},null,2)+'\n');
console.log('\n합격기 착탄·동작·협동·자원 '+results.length+'개 검증 통과');
