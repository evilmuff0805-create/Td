import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import * as T from 'three';
import { HERO_POSE_ART } from '../src/3d/hero-pose-data.js';
import { HERO_INBETWEEN_ART } from '../src/3d/inbetween-data.js';
import { SKIN_POSE_ART } from '../src/3d/skin-pose-data.js';
import { COMBAT_POSE_ART } from '../src/3d/combat-pose-data.js';
import { COMBAT_INBETWEEN_ART } from '../src/3d/combat-inbetween-data.js';
import { heroPoseRoster,heroPoseKey } from '../src/3d/hero-pose-roster.js';
import { WinterWorld } from '../src/3d/world.js';
import { CrowdRenderer } from '../src/3d/crowd.js';
import { whenBattleArtReady } from '../src/3d/battle-art-ready.js';
import { SEASONS } from '../src/3d/seasons.js';
import { Session } from '../src/game/session.js';
import { GameUI } from '../src/ui/hud.js';
import { Renderer3D } from '../src/3d/renderer.js';
import { SnapshotEncoder } from '../src/sim/snapshot.js';
import { newBattleGame } from '../src/3d/scenario.js';
import { getMap } from '../src/sim/map.js';

const results=[],pending=[],requests=[],warnings=[];
const savedDocument=globalThis.document,savedImage=globalThis.Image,savedLoad=T.ImageLoader.prototype.load,savedWarn=console.warn;
const layouts=[...Object.values(HERO_POSE_ART),...Object.values(HERO_INBETWEEN_ART),...Object.values(SKIN_POSE_ART),...Object.values(COMBAT_POSE_ART.enemy),...Object.values(COMBAT_POSE_ART.ally),...Object.values(COMBAT_INBETWEEN_ART)];
const baseIds=new Map(Object.entries(HERO_POSE_ART).map(([id,layout])=>[layout.path,id]));
const layoutFor=url=>layouts.find(layout=>url.endsWith('/'+layout.path));
const kindFor=url=>baseIds.has(layoutFor(url)?.path)?'base':url.includes('/skins/')?'skin':url.includes('/combat-inbetweens/')?'combat':url.includes('/inbetweens/')?'extra':url.includes('/combat/')?'combat':'core';
globalThis.document={createElement(){return {width:0,height:0,getContext(){return {drawImage(){},putImageData(){},getImageData(x,y,w,h){return {data:new Uint8ClampedArray(w*h*4).fill(255)};}};}};}};
globalThis.Image=class{constructor(){this.width=this.height=this.naturalWidth=this.naturalHeight=64;}set src(value){queueMicrotask(()=>this.onload?.());}};
T.ImageLoader.prototype.load=function(url,onLoad,progress,onError){const item={url,onLoad,onError,kind:kindFor(url),layout:layoutFor(url)};pending.push(item);requests.push(item);};
console.warn=(...args)=>warnings.push(args);
function finish(item,fail=false){const i=pending.indexOf(item);assert.ok(i>=0,'Request is pending');pending.splice(i,1);if(fail)item.onError(new Error('Expected unavailable art'));else item.onLoad({width:item.layout?.width??64,height:item.layout?.height??64});}
function finishKind(kind){for(const item of pending.filter(item=>item.kind===kind))finish(item);}
function finishBase(id,fail=false){const item=pending.find(item=>baseIds.get(item.layout?.path)===id);assert.ok(item,'Pending base '+id);finish(item,fail);}
async function settle(art){while(pending.length)finish(pending[0]);await art.promise;await new Promise(setImmediate);}
let serial=0;
async function context(heroLooks,combatKinds={enemy:[],ally:[]},Constructor){
  const FixedBattleArt=Constructor??(await import('../src/3d/fixed-art.js?hero-loading='+serial++)).FixedBattleArt;
  const camera=new T.OrthographicCamera(-8,8,6,-6,.1,100);camera.position.set(17,26,26);camera.lookAt(0,0,0);camera.updateMatrixWorld();
  const world=Object.assign(Object.create(WinterWorld.prototype),{heroLooks,combatKinds,stage:null,camera,theme:{id:'winter',...SEASONS.winter},renderer:{domElement:{dataset:{}}},scene:new T.Scene(),units:new Map(),unitTemplates:new Map(),towers:new Map(),bullets:new Map(),scenery:new Map(),fx:{reset(){}},placement:new T.Group(),marker:new T.Group(),corpses:[],pickables:[],enemyCues:new Map(),heroCues:new Map(),range:new T.Group(),batchCrowd:false,projectiles(){},combatScenery(){}});
  world.crowd=new CrowdRenderer(world.scene);const art=new FixedBattleArt(world);world.art=art;return {world,art,FixedBattleArt};
}
async function test(name,fn){assert.equal(pending.length,0,'Previous test has no pending loads');await fn();assert.equal(pending.length,0);results.push({name,passed:true});console.log('  ✔ '+name);}
let memory;
try{
  await test('기본 로스터는 유효한 영웅만 정렬·중복 제거하며 미지정 8명과 빈 목록을 구분한다',()=>{
    assert.equal(heroPoseRoster().length,8);assert.deepEqual(heroPoseRoster([]),[]);assert.deepEqual(heroPoseRoster(null),[]);
    const heroes=[{heroId:'yi',skin:'yi_white'},{heroId:'sejong'},{heroId:'yi',skin:'yi_gold'},null,{heroId:'toString'},{heroId:'invalid'}];
    assert.deepEqual(heroPoseRoster(heroes),['sejong','yi']);assert.equal(heroPoseKey(heroes),heroPoseKey(heroes.slice().reverse()));
  });
  await test('실제 전장 생성자는 선택한 두 기본 시트만 요청하고 의상 두 개도 기본은 한 장이다',async()=>{
    const start=requests.length,{art,world}=await context([{heroId:'yi'},{heroId:'sejong'}]);
    assert.deepEqual(requests.slice(start).filter(x=>x.kind==='base').map(x=>baseIds.get(x.layout.path)).sort(),['sejong','yi']);await settle(art);
    assert.equal(world.renderer.domElement.dataset.heroPoseCount,'2');assert.equal(world.renderer.domElement.dataset.heroPoseExpected,'2');assert.equal(world.renderer.domElement.dataset.heroPoseKinds,'sejong,yi');const two=Number(world.renderer.domElement.dataset.heroPoseCanvasBytes);art.dispose();
    const full=await context();await settle(full.art);const all=Number(full.world.renderer.domElement.dataset.heroPoseCanvasBytes);assert.equal(full.world.renderer.domElement.dataset.heroPoseCount,'8');assert.ok(two<all*.4);memory={allEightCanvasBytes:all,yiSejongCanvasBytes:two,savedCanvasBytes:all-two,reductionPercent:Math.round((1-two/all)*10000)/100};full.art.dispose();
    const same=await context([{heroId:'yi',skin:'yi_white'},{heroId:'yi',skin:'yi_gold'}]);assert.equal(pending.filter(x=>x.kind==='base').length,1);await settle(same.art);assert.deepEqual(Object.keys(same.art.heroPoses),['yi']);assert.equal(same.world.renderer.domElement.dataset.skinPoseCount,'2');same.art.dispose();
    const empty=await context([]);assert.equal(pending.filter(x=>x.kind==='base').length,0);await settle(empty.art);assert.equal(empty.world.renderer.domElement.dataset.heroPoseCount,'0');assert.equal(empty.art.yi,null);empty.art.dispose();
  });
  await test('기본·코어·병력·의상·중간 시트의 서로 다른 완료 순서에서 마지막 현재 요청까지 기다린다',async()=>{
    const orders=[['base','core','combat','skin','extra'],['core','combat','skin','extra','base'],['skin','extra','base','combat','core'],['extra','base','core','skin','combat'],['combat','skin','core','base','extra']];
    for(const order of orders){const {art}=await context([{heroId:'yi',skin:'yi_gold'}],{enemy:['teppo'],ally:[]}),all=art.promise;let ready=0;const battle={};const waiting=whenBattleArtReady({art},battle,()=>battle,()=>ready++);
      for(let i=0;i<order.length;i++){finishKind(order[i]);await new Promise(setImmediate);if(i<order.length-1){assert.equal(art.loading,true,order+' waits after '+order[i]);assert.equal(ready,0);}}
      await all;assert.equal(art.loading,false);assert.equal(await waiting,true);assert.equal(ready,1);art.dispose();
    }
  });
  await test('같은 로스터 반복은 Promise를 유지하고 교체 중 공통 기본 요청을 중복하지 않는다',async()=>{
    const {art}=await context([{heroId:'yi'},{heroId:'sejong'}]),old=art.promise;
    for(let i=0;i<20;i++)assert.equal(art.prepareHeroLooks([{heroId:'sejong',owner:1},{heroId:'yi',owner:0}]),old);
    const next=art.prepareHeroLooks([{heroId:'yi'},{heroId:'gwon'}]);assert.notEqual(next,old);assert.equal(pending.filter(x=>baseIds.get(x.layout?.path)==='yi').length,1);assert.equal(pending.filter(x=>baseIds.get(x.layout?.path)==='gwon').length,1);
    await settle(art);await old;assert.deepEqual(Object.keys(art.heroPoses),['gwon','yi']);assert.equal(art.prepareHeroLooks([{heroId:'gwon'},{heroId:'yi'}]),next);art.dispose();
  });
  await test('전장 영웅 교체는 활성·사망 루트를 먼저 제거하고 빠진 기본·그림자·geometry를 한 번 해제한다',async()=>{
    const {world,art}=await context([{heroId:'yi'},{heroId:'sejong'}]);await settle(art);const common=art.heroPoses.sejong;
    const root=world.unit({id:1,heroId:'yi',hp:100,owner:0},true),dead=world.unit({id:2,heroId:'yi',hp:0,dead:true,owner:1},true);world.units.set('h1',root);world.corpses.push({root:dead,t:0});
    const d=root.userData.fixedImage,order=[],counts={texture:0,shadow:0,geometry:0};d.image.material.addEventListener('dispose',()=>order.push('private'));d.image.material.map.addEventListener('dispose',()=>{counts.texture++;assert.equal(root.parent,null);assert.equal(dead.parent,null);order.push('atlas');});d.shadow.material.addEventListener('dispose',()=>counts.shadow++);d.image.geometry.addEventListener('dispose',()=>counts.geometry++);
    world.prepareHeroLooks([{heroId:'sejong'}]);await art.promise;assert.deepEqual(counts,{texture:1,shadow:1,geometry:1});assert.ok(order.indexOf('private')<order.indexOf('atlas'));assert.equal(world.units.size,0);assert.equal(world.corpses.length,0);assert.equal(world.pickables.length,0);assert.equal(art.heroPoses.sejong,common);assert.equal(art.heroPoses.yi,undefined);assert.equal(art.yi,null);art.dispose();art.dispose();assert.deepEqual(counts,{texture:1,shadow:1,geometry:1});
  });
  await test('부분 완료 뒤 로스터가 바뀌어도 이미 준비된 공통 시트를 재요청하지 않고 제외 결과는 보유하지 않는다',async()=>{
    const start=requests.length,{art}=await context([{heroId:'yi'},{heroId:'sejong'}]),old=art.promise;
    finishBase('yi');await new Promise(setImmediate);assert.equal(art.loading,true);assert.equal(art.heroPoseRequests.has('yi'),true);
    const next=art.prepareHeroLooks([{heroId:'yi'},{heroId:'gwon'}]);assert.equal(requests.slice(start).filter(x=>baseIds.get(x.layout?.path)==='yi').length,1);assert.equal(art.heroPoseRequests.has('sejong'),false);
    await settle(art);await Promise.all([old,next]);assert.deepEqual(Object.keys(art.heroPoses),['gwon','yi']);assert.equal(art.heroPoseRequests.size,0);art.dispose();
  });
  await test('늦은 이전 기본 응답은 새 로스터·준비 상태·도착 콜백을 덮어쓰지 않는다',async()=>{
    const {art,world}=await context([{heroId:'yi'}]),old=art.promise;const battle={};let oldReady=0;const barrier=whenBattleArtReady(world,battle,()=>battle,()=>oldReady++);
    const latest=art.prepareHeroLooks([{heroId:'gwon'}]);finishKind('core');finishBase('gwon');for(const p of pending.filter(p=>p.kind==='extra'&&p.url.includes('/gwon-')))finish(p);await latest;
    assert.equal(art.loading,false);assert.equal(world.renderer.domElement.dataset.heroPoseKinds,'gwon');const before={...world.renderer.domElement.dataset};await settle(art);await old;assert.equal(await barrier,false);assert.equal(oldReady,0);assert.deepEqual(world.renderer.domElement.dataset,before);assert.deepEqual(Object.keys(art.heroPoses),['gwon']);art.dispose();
  });
  await test('기본 원화 한 장 실패는 다른 영웅과 코어를 살리고 정적 그림으로 대체하며 반복 요청하지 않는다',async()=>{
    const {world,art}=await context([{heroId:'yi'},{heroId:'sejong'}]);finishBase('yi',true);await settle(art);const all=art.promise,count=requests.length;
    assert.equal(art.failed,false);assert.equal(art.ready,true);assert.equal(art.heroPoses.yi,null);assert.ok(art.heroPoses.sejong);assert.ok(art.unitArt({heroId:'yi'},true));assert.equal(art.unitInbetweens({heroId:'yi'},art.unitArt({heroId:'yi'},true)),null);assert.equal(world.renderer.domElement.dataset.heroPoseStatus,'partial');assert.equal(art.prepareHeroLooks([{heroId:'yi'},{heroId:'sejong'}]),all);assert.equal(requests.length,count);art.dispose();
  });
  await test('의상 실패는 선택 기본 원화로, 기본·의상 모두 실패는 정적 그림으로 대체하고 중간 옷을 섞지 않는다',async()=>{
    for(const failBase of [false,true]){const {art}=await context([{heroId:'yi',skin:'yi_gold'}]);for(const p of pending.filter(p=>p.kind==='skin'))finish(p,true);if(failBase)finishBase('yi',true);await settle(art);const shown=art.unitArt({heroId:'yi',skin:'yi_gold'},true);assert.ok(shown);if(!failBase)assert.equal(shown,art.heroPoses.yi);else assert.equal(shown.poseAtlas,undefined);assert.equal(art.unitInbetweens({heroId:'yi',skin:'yi_gold'},shown),null);art.dispose();}
  });
  await test('별도 전장의 기본 캔버스·텍스처는 공유하지 않고 한쪽 종료가 다른 쪽을 손상시키지 않는다',async()=>{
    const a=await context([{heroId:'yi'}]);await settle(a.art);const start=requests.length,b=await context([{heroId:'yi'}],undefined,a.FixedBattleArt);assert.equal(requests.slice(start).filter(x=>x.kind==='base').length,1);await settle(b.art);assert.notEqual(a.art.heroPoses.yi.canvas,b.art.heroPoses.yi.canvas);const ra=a.world.unit({id:1,heroId:'yi',hp:100},true),rb=b.world.unit({id:1,heroId:'yi',hp:100},true);assert.notEqual(ra.userData.fixedImage.image.material.map,rb.userData.fixedImage.image.material.map);let otherDisposed=0;rb.userData.fixedImage.image.material.map.addEventListener('dispose',()=>otherDisposed++);a.world.disposeCharacter(ra);a.art.dispose();assert.equal(otherDisposed,0);assert.ok(b.art.heroPoses.yi);b.world.disposeCharacter(rb);b.art.dispose();assert.equal(otherDisposed,1);
  });
  await test('종료한 소유자는 모든 map·원화 참조를 비우고 늦은 완료·재호출이 DOM과 캐시를 되살리지 않는다',async()=>{
    const {world,art}=await context([{heroId:'yi',skin:'yi_gold'}]),all=art.promise;art.dispose();const before={...world.renderer.domElement.dataset};await settle(art);await all;assert.deepEqual(world.renderer.domElement.dataset,before);assert.equal(art.textures.size,0);assert.equal(art.materials.size,0);assert.equal(art.geometries.size,0);assert.equal(art.heroPoseRequests.size,0);assert.deepEqual(art.heroPoses,{});assert.deepEqual(art.skinPoses,{});assert.deepEqual(art.inbetweenPoses,{});assert.equal(art.yi,null);assert.equal(art.ready,false);assert.equal(art.loading,false);const count=requests.length;art.prepareHeroLooks([{heroId:'sejong'}]);assert.equal(requests.length,count);
  });
  await test('실제 로컬 2인 HUD는 기본 시트가 마지막일 때 시계를 막고 준비 뒤 정상 진행한다',async()=>{
    const session=new Session({kind:'local',stageId:'s1',difficulty:'normal',seed:1,specs:[{heroes:['yi']},{heroes:['sejong']}]}),{world,art}=await context(session.view.heroes);
    const renderer={world,prepareView:Renderer3D.prototype.prepareView,get loading(){return art.loading;},events(){},render(){}};
    const ui=Object.assign(Object.create(GameUI.prototype),{s:session,renderer,map:getMap(session.stageId),me:0,ui:{clock:0},bottom:{},last:0,solo:false,local:true,selHero:0,hintTimer:100,handleEvents(){},drawXray(){},updateHud(){},p2Tick(){}}),raf=globalThis.requestAnimationFrame;globalThis.requestAnimationFrame=()=>1;
    try{finishKind('core');finishKind('extra');await new Promise(setImmediate);ui.frame(100);assert.equal(session.state.time,0);assert.equal(ui.bottom.inert,true);const all=art.promise;ui.frame(200);assert.equal(art.promise,all);finishBase('yi');await new Promise(setImmediate);ui.frame(300);assert.equal(session.state.time,0);finishBase('sejong');await all;ui.frame(400);assert.ok(session.state.time>0);assert.equal(ui.bottom.inert,false);}finally{globalThis.requestAnimationFrame=raf;session.destroy();art.dispose();}
  });
  await test('빈 게스트는 기본 원화를 요청하지 않고 첫 스냅샷의 두 명만 준비하며 수신·Promise를 유지한다',async()=>{
    const handlers=new Map(),net={on(k,fn){handlers.set(k,fn);return()=>handlers.delete(k);},send(){}},guest=new Session({kind:'guest',stageId:'s1',difficulty:'normal',net}),{world,art}=await context(guest.view.heroes);await settle(art);assert.deepEqual(art.heroPoses,{});const renderer={world,prepareView:Renderer3D.prototype.prepareView},state=newBattleGame({heroIds:['yi','gwon'],support:false});const encode=()=>new SnapshotEncoder().encode(state,[{k:'toast',text:'동기화'}]);
    handlers.get('snap')({s:encode()});renderer.prepareView(guest.view);const all=art.promise;assert.equal(pending.filter(p=>p.kind==='base').length,2);assert.equal(guest.update(.1,{waitingForRenderer:true})[0].text,'동기화');state.time=3;handlers.get('snap')({s:encode()});renderer.prepareView(guest.view);assert.equal(art.promise,all);assert.equal(guest.view.time,3);await settle(art);assert.deepEqual(Object.keys(art.heroPoses),['gwon','yi']);guest.destroy();art.dispose();
  });
}finally{T.ImageLoader.prototype.load=savedLoad;console.warn=savedWarn;if(savedDocument===undefined)delete globalThis.document;else globalThis.document=savedDocument;if(savedImage===undefined)delete globalThis.Image;else globalThis.Image=savedImage;}
await fs.writeFile(new URL('../docs/HERO_LOADING_RUNTIME_VALIDATION.json',import.meta.url),JSON.stringify({date:'2026-10-11',tests:results.length,allPassed:true,results,memoryEstimate:{...memory,unit:'bytes',basis:'RGBA canvas storage for full base sheets and isolated frames only; excludes decoder, browser overhead, fallback/menu caches and GPU.'}},null,2)+'\n');
console.log('\n선택 영웅 원화 로딩 '+results.length+'개 검증 통과');
