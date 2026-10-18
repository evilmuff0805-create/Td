import assert from 'node:assert/strict';
import fs from 'node:fs';
import {GameUI} from '../src/ui/hud.js';
import {createVirtualPad,padVector,padWorldDirection} from '../src/ui/virtual-pad.js';
import {Session} from '../src/game/session.js';
import {onlineFixture} from './session-fixtures.mjs';
import {applyCommand,step} from '../src/sim/sim.js';
import {SnapshotEncoder} from '../src/sim/snapshot.js';
import {getMap,T_BUILD} from '../src/sim/map.js';
import {hurtHero,spawnEnemy} from '../src/sim/combat.js';
import {HEROES} from '../src/data/heroes.js';
import {audio} from '../src/audio/audio.js';

const results=[],test=async(name,fn)=>{await fn();results.push({name,passed:true});console.log('✔ '+name);};
const saved=Object.fromEntries(['window','document','Node','requestAnimationFrame','cancelAnimationFrame'].map(k=>[k,globalThis[k]]));
const oldAudio={init:audio.init,play:audio.play,stopBgm:audio.stopBgm};
let doc,win,captures=new Map();
class Element {
  constructor(tag='div'){this.tagName=tag.toUpperCase();this.handlers=new Map();this.style={};this.dataset={};this.children=[];this.attrs={};this.className='';this.classList={toggle:(n,on)=>{const parts=new Set(this.className.split(' ').filter(Boolean));on?parts.add(n):parts.delete(n);this.className=[...parts].join(' ');},add:n=>this.classList.toggle(n,true)};}
  addEventListener(t,fn,opts){const a=this.handlers.get(t)||[];a.push({fn,capture:opts===true||opts?.capture});this.handlers.set(t,a);}
  removeEventListener(t,fn){const a=(this.handlers.get(t)||[]).filter(x=>x.fn!==fn);a.length?this.handlers.set(t,a):this.handlers.delete(t);}
  append(...children){for(const child of children){child.parent=this;this.children.push(child);}}
  setAttribute(k,v){this.attrs[k]=String(v);}
  closest(s){for(let e=this;e;e=e.parent)if(s.startsWith('.')&&e.className?.split(' ').includes(s.slice(1)))return e;return null;}
  getBoundingClientRect(){return this.tagName==='CANVAS'?{left:0,top:0,width:960,height:560}:{left:10,top:10,width:116,height:116};}
  setPointerCapture(id){captures.set(id,this);}
  hasPointerCapture(id){return captures.get(id)===this;}
  releasePointerCapture(id){captures.delete(id);}
}
function dispatch(target,type,options={}){
  if(type!=='pointerdown'&&captures.has(options.pointerId))target=captures.get(options.pointerId);
  const e={type,target,button:0,pointerType:'touch',clientX:68,clientY:68,bubbles:true,preventDefault(){},stopPropagation(){this.stopped=true;},...options};
  const path=[];for(let el=target;el;el=el.parent)path.push(el);if(!path.includes(doc))path.push(doc);
  for(const capture of [true,false])for(const el of capture?[...path].reverse():path){for(const h of [...(el.handlers.get(type)||[])])if(!!h.capture===capture)h.fn(e);if(e.stopped)return;}
}
function environment(){doc=new Element();doc.hidden=false;doc.querySelector=()=>null;doc.createElement=tag=>new Element(tag);doc.createTextNode=text=>Object.assign(new Element('#text'),{textContent:text});win=new Element();globalThis.document=doc;globalThis.window=win;globalThis.Node=Element;globalThis.requestAnimationFrame=()=>1;globalThis.cancelAnimationFrame=()=>{};captures=new Map();}
Object.assign(audio,{init(){},play(){},stopBgm(){}});
function fixture({online=false,flat=false,hero='yi',session}={}){
  environment();
  const pair=online?onlineFixture([{heroes:[hero]},{heroes:['sejong']}]):null;
  const s=session||pair?.host||new Session({kind:'solo',stageId:'s1',difficulty:'normal',seed:8,specs:[{heroes:[hero]}]});
  const cv=new Element('canvas'),menus=[],sent=[],real=s.send.bind(s),map=getMap('s1');s.send=c=>{sent.push(c);return real(c);};
  const point=map.grid.flatMap((t,i)=>t===T_BUILD?[{x:i%map.w+.5,y:Math.floor(i/map.w)+.5}]:[]).find(p=>s.view.heroes.every(h=>Math.hypot(h.x-p.x,h.y-p.y)>2));
  const ui=Object.assign(Object.create(GameUI.prototype),{s,me:s.me,solo:s.kind==='solo',is3d:!flat,map,cv,ui:{},selHero:0,touchInput:true,renderer:{pick:()=>({...point}),screenPoint:(x,y)=>({x:x*.8-y*.6,y:x*.3+y*.9}),destroy(){}},closePop(){this.pop=null;},openBuildMenu(x,y){menus.push([x,y]);this.pop={kind:'build',x,y};}});
  ui.pad=createVirtualPad({canStart:()=>ui.canUsePad(),onStart:()=>ui.beginPad(),onChange:()=>ui.padTick(performance.now()),onEnd:()=>ui.endPad()});
  ui.bindInput();
  const down=(dx=32,dy=0)=>dispatch(ui.pad.surface,'pointerdown',{pointerId:1,clientX:68+dx,clientY:68+dy});
  const up=()=>dispatch(ui.pad.surface,'pointerup',{pointerId:1});
  const tap=()=>{dispatch(cv,'pointerdown',{pointerId:2,clientX:10,clientY:10});dispatch(cv,'pointerup',{pointerId:2,clientX:10,clientY:10});};
  const advance=(seconds=1,fps=60)=>{const base=performance.now();for(let n=1;n<=seconds*fps;n++){ui.padTick(base+n*1000/fps);s.update(1/fps);}};
  return{ui,s,pair,cv,menus,sent,point,down,up,tap,advance,done(){ui.destroy();pair?.guest.destroy();}};
}

try{
await test('dead zone, finite coordinates and thumb travel are bounded',()=>{assert.deepEqual(padVector(2,2,34).x,0);const a=padVector(100,100,34);assert.ok(Math.abs(Math.hypot(a.x,a.y)-1)<1e-12);assert.ok(Math.abs(Math.hypot(a.thumbX,a.thumbY)-34)<1e-12);assert.equal(padVector(NaN,0,34).x,0);assert.equal(padVector(4,5,0).y,0);});
await test('isometric screen directions round-trip and diagonals keep unit speed',()=>{const a={x:.8,y:.3},b={x:-.6,y:.9};for(const [x,y]of [[1,0],[0,-1],[-1,0],[0,1],[1,1]]){const d=padWorldDirection({x,y},a,b),px=d.x*a.x+d.y*b.x,py=d.x*a.y+d.y*b.y;assert.ok(Math.abs(px*y-py*x)<1e-12);assert.ok(px*x+py*y>0);assert.ok(Math.abs(Math.hypot(d.x,d.y)-1)<1e-12);}assert.equal(padWorldDirection({x:1,y:0},a,a),null);});
await test('actual pad holds move at hero speed in flat and isometric views across frame rates',()=>{for(const flat of [false,true])for(const fps of [20,60,120]){const f=fixture({flat}),h=f.s.view.heroes[0],before={x:h.x,y:h.y};f.down();f.advance(1,fps);const distance=Math.hypot(h.x-before.x,h.y-before.y);assert.ok(Math.abs(distance-HEROES.yi.speed)<.12,distance);assert.ok(f.sent.filter(c=>c.direct).length<=19);f.up();f.s.update(1/60);assert.equal(h.tx,h.x);assert.equal(h.ty,h.y);assert.ok(!h.directMove);const last={x:h.x,y:h.y};f.advance(.25,fps);assert.deepEqual({x:h.x,y:h.y},last);f.done();}});
await test('a centered held thumb does not move and returning to the dead zone stops once',()=>{const f=fixture();f.down(0,0);assert.equal(f.sent.length,0);dispatch(f.ui.pad.surface,'pointermove',{pointerId:1,clientX:100,clientY:68});f.advance(.2);dispatch(f.ui.pad.surface,'pointermove',{pointerId:1,clientX:68,clientY:68});f.ui.padTick(performance.now()+500);assert.equal(f.sent.filter(c=>c.stop).length,1);f.up();assert.equal(f.sent.filter(c=>c.stop).length,1);f.done();});
await test('pad plus another finger opens a ground build and spends only its owner wallet',()=>{const f=fixture({online:true});f.down();f.tap();assert.equal(f.menus.length,1);assert.equal(f.ui.pad.pointerId,1);const gold=f.s.state.players.map(p=>p.gold);f.ui.build(...f.menus[0],'sungnyemun');f.s.update(1/60);assert.equal(f.s.view.towers.length,1);assert.deepEqual(f.s.state.players.map(p=>p.gold),[gold[0]-70,gold[1]]);assert.ok(!f.ui.suppressTouchUntil);f.up();f.done();});
await test('pad plus another finger can target a real hero skill without building',()=>{const f=fixture();f.down();f.s.view.heroes[0].skillCd=0;f.ui.targeting={kind:'heroSkill',run:(x,y)=>f.s.send({t:'heroSkill',p:0,h:0,x,y})};f.tap();f.s.update(1/60);assert.ok(f.s.view.heroes[0].skillCd>0);assert.equal(f.menus.length,0);assert.equal(f.ui.pad.pointerId,1);assert.ok(f.sent.some(c=>c.direct));f.up();f.done();});
await test('two world fingers cancel building while the independent pad keeps moving',()=>{const f=fixture();f.down();dispatch(f.cv,'pointerdown',{pointerId:2});dispatch(f.cv,'pointerdown',{pointerId:3});dispatch(f.cv,'pointerup',{pointerId:2});dispatch(f.cv,'pointerup',{pointerId:3});assert.equal(f.menus.length,0);assert.equal(f.ui.pad.pointerId,1);f.advance(.2);assert.ok(f.sent.filter(c=>c.direct).length>1);f.up();f.done();});
await test('pad cancellation does not suppress a concurrently held valid ground tap',()=>{const f=fixture();f.down();dispatch(f.cv,'pointerdown',{pointerId:2});dispatch(f.ui.pad.surface,'pointercancel',{pointerId:1});dispatch(f.cv,'pointerup',{pointerId:2});assert.equal(f.menus.length,1);assert.ok(!f.ui.suppressTouchUntil);assert.equal(f.ui.pad.pointerId,null);f.done();});
await test('blur, hide, resize, pause and loading cancel movement without leaving a held thumb',()=>{for(const reason of ['blur','hide','resize','pause','loading']){const f=fixture();f.down();f.advance(.1);if(reason==='hide'){doc.hidden=true;dispatch(doc,'visibilitychange');}else if(reason==='pause')f.ui.togglePause();else if(reason==='loading'){f.ui.renderer.loading=true;f.ui.pad.setDisabled(!f.ui.canUsePad());}else{f.ui.resize=()=>{};dispatch(win,reason);}assert.equal(f.ui.pad.pointerId,null,reason);if(reason==='loading'){f.ui.renderer.loading=false;f.ui.flushPadStop();}f.s.update(1/60);assert.ok(f.sent.some(c=>c.stop),reason);f.done();}});
await test('reconnecting preserves one pending stop and flushes it before any resumed pad movement',()=>{const f=fixture();f.down();f.advance(.1);Object.defineProperty(f.s,'networkWaiting',{value:true,configurable:true});f.ui.pad.setDisabled(!f.ui.canUsePad());assert.equal(f.ui.pendingPadStop,0);assert.equal(f.sent.filter(c=>c.stop).length,0);Object.defineProperty(f.s,'networkWaiting',{value:false});f.ui.flushPadStop();assert.equal(f.sent.filter(c=>c.stop).length,1);assert.equal(f.ui.pendingPadStop,null);f.done();});
await test('solo has one hero and cannot select an absent or foreign hero',()=>{const f=fixture();f.down();f.advance(.1);f.ui.selectHero(1);assert.equal(f.s.view.heroes.length,1);assert.equal(f.ui.selHero,0);assert.equal(f.ui.pad.pointerId,1);f.up();assert.ok(f.sent.some(c=>c.stop&&c.h===0));f.done();});
await test('host pad and online guest move their own hero with independent ownership',()=>{const f=fixture({online:true}),start=f.s.view.heroes.map(h=>({x:h.x,y:h.y}));f.down();const base=performance.now();for(let n=1;n<=60;n++){f.ui.padTick(base+n*1000/60);f.pair.guest.send({t:'move',p:1,h:1,dx:1,dy:0,direct:true});f.s.update(1/60);}assert.ok(f.s.view.heroes.every((h,i)=>Math.hypot(h.x-start[i].x,h.y-start[i].y)>1));assert.ok(f.sent.filter(c=>c.direct).every(c=>c.p===0&&c.h===0));f.ui.selectHero(1);assert.equal(f.ui.selHero,0);assert.equal(GameUI.prototype.p2Key,undefined);f.up();f.done();});
await test('direct melee movement releases an engaged enemy and follows the short pad goal',()=>{const f=fixture({hero:'gwon'}),s=f.s.state,h=s.heroes[0];const e=spawnEnemy(s,'ashigaru',0,1,0);e.x=h.x;e.y=h.y;e.blockedBy=h.id;h.engaged=[e.id];applyCommand(s,{t:'move',p:0,h:0,dx:1,dy:0,direct:true});const x=h.x;assert.ok(!e.blockedBy);assert.equal(h.engaged.length,0);for(let n=0;n<8;n++){e.x=h.x;e.y=h.y;step(s);}assert.ok(h.x>x+.1);assert.equal(h.engaged.length,0);assert.ok(h.directMove);f.done();});
await test('arrival, an ordinary move, stop, death and respawn end the direct state',()=>{for(const reason of ['arrival','ordinary','stop','death','respawn']){const f=fixture({hero:'gwon'}),s=f.s.state,h=s.heroes[0];applyCommand(s,{t:'move',p:0,h:0,dx:1,dy:0,direct:true});if(reason==='ordinary')applyCommand(s,{t:'move',p:0,h:0,x:h.x,y:h.y});else if(reason==='stop')applyCommand(s,{t:'move',p:0,h:0,x:-99,y:-99,stop:true});else if(reason==='death')hurtHero(s,h,h.maxHp*2);else if(reason==='respawn'){h.dead=true;h.respawn=.001;step(s);}else for(let n=0;n<90;n++)step(s);assert.ok(!h.directMove,reason);f.done();}});
await test('guest stop ignores stale coordinates and the host rejects forged ownership',async()=>{class Wire{constructor(){this.handlers=new Map();this.connected=true;this.peer=true;}on(t,fn){this.handlers.set(t,fn);return()=>this.handlers.delete(t);}send(m){this.other.handlers.get(m.t)?.(m);return true;}}const a=new Wire(),b=new Wire();a.other=b;b.other=a;const host=new Session({kind:'host',stageId:'s1',difficulty:'normal',seed:8,specs:[{heroes:['yi']},{heroes:['sejong']}],net:a}),guest=new Session({kind:'guest',stageId:'s1',difficulty:'normal',net:b});a.send({t:'snap',s:new SnapshotEncoder().encode(host.state,[])});const h=host.state.heroes[1],stale={x:h.x-1,y:h.y-1};guest.send({t:'move',p:0,h:1,dx:1,dy:0,direct:true});host.update(.1);assert.ok(h.directMove);const current={x:h.x,y:h.y};guest.send({t:'move',p:0,h:1,...stale,stop:true});host.state.paused=true;host.update(0);assert.equal(h.tx,current.x);assert.equal(h.ty,current.y);assert.ok(!h.directMove);const own=host.state.heroes[0];guest.send({t:'move',p:0,h:0,dx:1,dy:0,direct:true});guest.send({t:'move',p:0,h:0,x:0,y:0,stop:true});host.update(0);assert.equal(own.tx,own.x);assert.ok(!own.directMove);host.destroy();guest.destroy();});
await test('destroy removes pad document listeners and capture as well as HUD input listeners',()=>{const f=fixture();f.down();f.done();assert.equal(captures.size,0);for(const name of ['pointerdown','pointermove','pointerup','pointercancel','visibilitychange','keydown','keyup'])assert.equal(doc.handlers.has(name),false,name);});
}finally{Object.assign(audio,oldAudio);for(const [k,v]of Object.entries(saved))v===undefined?delete globalThis[k]:globalThis[k]=v;}
fs.writeFileSync('docs/MOBILE_PAD_RUNTIME_VALIDATION.json',JSON.stringify({generatedAt:new Date().toISOString(),tests:results.length,allPassed:true,scope:'Actual virtual-pad and HUD pointer handlers with real solo/host/guest sessions; synthetic DOM pointer events, not physical-device touch or latency measurements.',localCoopRemoved:true,results},null,2)+'\n');
