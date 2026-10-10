import assert from 'node:assert/strict';
import * as T from 'three';
import { PaintedEffectArt,EFFECT_CELLS } from '../src/3d/effect-art.js';
import { BattleEffects } from '../src/3d/effects.js';
import { WinterWorld } from '../src/3d/world.js';
import { Renderer3D } from '../src/3d/renderer.js';
import { paintBattleEvent } from '../src/3d/battle-events.js';
import { newBattleGame } from '../src/3d/scenario.js';
import { applyCommand,step,DT } from '../src/sim/sim.js';

let passed=0;
async function test(name,run){await run();passed++;console.log(`  ✔ ${name}`);}
function artReady(){const art=new PaintedEffectArt();art.texture=new T.Texture({width:1536,height:768});art.ready=true;return art;}
function fixture(){const scene=new T.Scene(),fx=new BattleEffects(scene,null);fx.art=artReady();return {scene,fx};}
function imageFixture(){
  const listeners=new Map(),image={width:1536,height:768,addEventListener:(k,fn)=>listeners.set(k,fn),removeEventListener:()=>{},set src(value){this.url=value;}};
  return {image,listeners,document:{createElementNS:()=>image}};
}

await test('같은 이미지 로딩을 공유해도 종료된 전장의 GPU 텍스처를 만들지 않는다',async()=>{
  const original=globalThis.document,mock=imageFixture();globalThis.document=mock.document;
  try {
    const a=new PaintedEffectArt(),b=new PaintedEffectArt(),pa=a.load(),pb=b.load();a.dispose();
    mock.listeners.get('load').call(mock.image);assert.deepEqual(await Promise.all([pa,pb]),[false,true]);assert.equal(a.texture,null);assert.equal(b.ready,true);
    let disposed=0;b.texture.addEventListener('dispose',()=>disposed++);b.dispose();b.dispose();assert.equal(disposed,1);
  } finally {if(original===undefined)delete globalThis.document;else globalThis.document=original;}
});

await test('효과 그림 실패는 거부된 promise 없이 기존 효과로 대체된다',async()=>{
  const original=globalThis.document,mock=imageFixture();globalThis.document=mock.document;
  try {
    const {PaintedEffectArt:MissingArt}=await import('../src/3d/effect-art.js?missing-atlas-test'),art=new MissingArt(),promise=art.load();
    mock.listeners.get('error').call(mock.image,new Error('fixture missing'));assert.equal(await promise,false);assert.equal(art.failed,true);assert.equal(art.ready,false);
    const fx=new BattleEffects(new T.Scene(),null);fx.art=art;fx.spell('flood',0,0,3);assert.ok(fx.active.length>0);assert.ok(fx.active[0].root.children.some(o=>o.geometry?.type==='RingGeometry'));fx.destroy();
  } finally {if(original===undefined)delete globalThis.document;else globalThis.document=original;}
});

await test('여덟 효과의 UV는 지정된 칸만 사용하고 효과 만료는 공유 그림을 해제하지 않는다',()=>{
  const art=artReady();let textureDisposed=0;art.texture.addEventListener('dispose',()=>textureDisposed++);
  for(const [kind,cell]of Object.entries(EFFECT_CELLS)){
    const mesh=art.decal(kind,2),uv=mesh.geometry.attributes.uv,col=cell%4,row=Math.floor(cell/4);
    for(let i=0;i<uv.count;i++){assert.ok(uv.getX(i)>col/4&&uv.getX(i)<(col+1)/4);assert.ok(uv.getY(i)>1-(row+1)/2&&uv.getY(i)<1-row/2);}
    assert.equal(mesh.material.blending,T.NormalBlending);assert.equal(mesh.material.depthWrite,false);mesh.geometry.dispose();mesh.material.dispose();assert.equal(textureDisposed,0);
  }
  art.dispose();assert.equal(textureDisposed,1);
});

await test('다중 착탄 상한·재시작·종료에서도 개별 자원과 공유 텍스처의 소유를 유지한다',()=>{
  const {scene,fx}=fixture(),resources=new Set(),disposed=new Map();let textureDisposed=0;fx.art.texture.addEventListener('dispose',()=>textureDisposed++);
  fx.spell('hangul',3,5,1.8);fx.active[0].root.traverse(o=>{if(o.geometry)resources.add(o.geometry);if(o.material)resources.add(o.material);});
  for(const resource of resources)resource.addEventListener('dispose',()=>disposed.set(resource,(disposed.get(resource)??0)+1));
  for(let i=0;i<90;i++)fx.impact(i%10,i%7,.8,'#dfb778','shell');assert.equal(fx.active.length,64);
  for(const resource of resources)assert.equal(disposed.get(resource),1);assert.equal(textureDisposed,0);
  fx.reset();assert.equal(fx.active.length,0);assert.deepEqual(scene.children,fx.previewRoots);assert.equal(fx.art.ready,true);assert.equal(textureDisposed,0);
  fx.destroy();fx.destroy();assert.equal(textureDisposed,1);assert.equal(scene.children.length,0);
});

await test('그림 효과도 일시정지와 프레임 간격에 독립적이며 학익진의 실제 부채꼴을 유지한다',()=>{
  for(const kind of ['flood','heal','slash','hangul']){
    const {fx:a}=fixture(),{fx:b}=fixture();a.spell(kind,3,5,1.8,.8);b.spell(kind,3,5,1.8,.8);a.update(.2);for(let i=0;i<4;i++)b.update(.05);
    assert.equal(a.active[0].root.children[0].material.depthTest,kind!=='slash');if(kind==='slash')assert.equal(a.active[0].root.renderOrder,4);
    const before=a.active[0].root.children.map(o=>[...o.position.toArray(),...o.scale.toArray(),o.material?.opacity??0]);a.update(0);
    assert.deepEqual(a.active[0].root.children.map(o=>[...o.position.toArray(),...o.scale.toArray(),o.material?.opacity??0]),before);
    a.active[0].root.children.forEach((o,i)=>{assert.ok(o.position.distanceTo(b.active[0].root.children[i].position)<1e-9);assert.ok(o.scale.distanceTo(b.active[0].root.children[i].scale)<1e-9);});a.destroy();b.destroy();
  }
  const {fx}=fixture();fx.volley(3,5,.9,4.2,.72);const field=fx.active[0].root.children[0],positions=field.geometry.attributes.position;
  assert.equal(field.userData.paintedEffect,'volley');for(let i=1;i<positions.count;i++){const x=positions.getX(i),z=positions.getZ(i);assert.ok(Math.hypot(x,z)<=4.200001);assert.ok(Math.abs(Math.atan2(z,x))<=.720001);}
  fx.destroy();
});

await test('실제 불·한파 장판은 폭발 상한과 무관하게 유지되며 만료·늦은 그림 적용 때 정리된다',()=>{
  const {scene,fx}=fixture(),world=Object.assign(Object.create(WinterWorld.prototype),{scene,fx,scenery:new Map(),towers:new Map()}),game=newBattleGame({heroIds:['eulji','yi'],skillIds:['hanpa'],support:false});
  game.towers=[];game.heroes[0].skillCd=0;game.players[0].skills[0].cd=0;
  applyCommand(game,{t:'heroSkill',p:0,h:0,x:game.heroes[0].x,y:game.heroes[0].y});applyCommand(game,{t:'skill',p:0,slot:0,x:game.heroes[0].x,y:game.heroes[0].y});assert.equal(game.zones.length,2);
  fx.art.ready=false;world.combatScenery(game,game.time,0);const fallback=[...world.scenery.values()];assert.ok(fallback.every(o=>!o.userData.paintedZone));
  let replaced=0;fallback.forEach(root=>root.traverse(o=>o.geometry?.addEventListener('dispose',()=>replaced++)));
  fx.art.ready=true;world.combatScenery(game,game.time,0);assert.ok(replaced>0);const zones=[...world.scenery.values()];assert.ok(zones.every(o=>o.userData.paintedZone));
  let removed=0;zones.forEach(root=>root.traverse(o=>o.geometry?.addEventListener('dispose',()=>removed++)));
  for(let i=0;i<90;i++)fx.impact(3,5);fx.update(2);assert.equal(fx.active.length,0);assert.equal(world.scenery.size,2);assert.ok(zones.every(o=>o.parent===scene));
  for(let i=0;i<Math.ceil(6.1/DT);i++)step(game);world.combatScenery(game,game.time,DT);assert.equal(world.scenery.size,0);assert.ok(removed>0);assert.equal(fx.art.ready,true);fx.destroy();
});

await test('번개·살수 합격기·치유 합격기의 착탄을 화염 그림으로 바꾸지 않는다',()=>{
  const {fx}=fixture();fx.thunder(3,5);assert.equal(fx.active.at(-1).root.children[0].userData.paintedEffect,'light');fx.reset();
  const game={heroes:[{x:3,y:5},{x:4,y:5}],enemies:[{x:5,y:5}]};fx.combo({x:3,y:5,id:'eulji_gang'},game);assert.equal(fx.active.at(-1).root.children[0].userData.paintedEffect,'flood');fx.reset();
  fx.combo({x:3,y:5,id:'dangun_sejong'},game);assert.equal(fx.active.at(-1).root.children[0].userData.paintedEffect,'heal');fx.destroy();
});

await test('정식 게임과 미리보기의 실제 기술 이벤트가 같은 효과·발사 순서·시전자에 연결된다',()=>{
  const game=newBattleGame({heroIds:['sejong','yi'],support:false}),hero=game.heroes[0];hero.skillCd=0;applyCommand(game,{t:'heroSkill',p:0,h:0,x:hero.x,y:hero.y});
  const recorded=[],world={effect:(...args)=>recorded.push(['impact',...args]),firingLine:e=>recorded.push(['shot',e]),faceHero:(...args)=>recorded.push(['face',...args]),fx:{spell:(...args)=>recorded.push(['spell',...args]),combo:()=>recorded.push(['combo']),volley:()=>recorded.push(['volley']),thunder:()=>recorded.push(['thunder']),line:()=>{}}};
  const event=game.events.find(e=>e.k==='hangul');assert.ok(event);paintBattleEvent(world,event,game);const direct=structuredClone(recorded);recorded.length=0;Renderer3D.prototype.effect.call({world},event,game);assert.deepEqual(recorded,direct);
  const deferred=[],shot={k:'shot',caster:hero.id,x1:hero.x,y1:hero.y,x2:10,y2:7};recorded.length=0;paintBattleEvent(world,shot,game,{deferShot:e=>deferred.push(e)});assert.equal(recorded.length,0);assert.deepEqual(deferred,[shot]);deferred.forEach(e=>world.firingLine(e));assert.equal(recorded.length,1);
  const yi=game.heroes[1];paintBattleEvent(world,{k:'cone',x:yi.x,y:yi.y,a:.8,r:4.2,w:.72},game);assert.deepEqual(recorded.at(-1),['face',.8,game.time,yi.id]);
  paintBattleEvent(world,{k:'combo',id:'yi_sejong',x:yi.x,y:yi.y},game);assert.equal(recorded.filter(e=>e[0]==='combo').length,1);
  paintBattleEvent(world,{k:'boom',kind:'ice',x:3,y:5,r:.9},game);assert.equal(recorded.at(-1).at(-1),'ice');assert.equal(paintBattleEvent(world,{k:'announce'},game),false);
  paintBattleEvent(world,{k:'slash',x:3,y:5,f:-1},game);assert.deepEqual(recorded.at(-1),['spell','slash',3,5,.72,Math.PI]);
});

console.log(`\n스킬 그림·이벤트·수명주기 ${passed}개 검증 통과`);
