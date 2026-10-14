import assert from 'node:assert/strict';
import fs from 'node:fs';
import {GameUI} from '../src/ui/hud.js';
import {Session} from '../src/game/session.js';
import {getMap,T_BUILD,T_PATH,T_WATER} from '../src/sim/map.js';
import {updateSpriteMotion} from '../src/3d/sprite-motion.js';
import {audio} from '../src/audio/audio.js';

const results=[];
const test=(name,fn)=>{fn();results.push({name,passed:true});console.log('✔ '+name);};
const sample=(extra={})=>({kind:'yi',x:8,z:5,time:0,dt:1/60,hp:100,inbetweens:true,longMotion:true,...extra});
test('normal Yi gait is below ten pose changes per second and keeps real distance',()=>{
  let a=updateSpriteMotion(null,sample()),changes=0,last=a.row;
  for(let i=1;i<=240;i++){
    a=updateSpriteMotion(a.state,sample({x:8+2.2*i/120,time:i/120,dt:1/120}));
    if(a.row!==last){changes++;last=a.row;}
  }
  assert.ok(changes>=15&&changes<=20,changes+' pose changes in two seconds');
  assert.ok(Math.abs(a.phase-(4.4/1.5)%1)<1e-10);
});
test('20/60/120/144Hz show the same distance phase with all six hero poses',()=>{
  const phases=[];
  for(const fps of [20,60,120,144]){
    let a=updateSpriteMotion(null,sample()),seen=new Set();
    for(let i=1;i<=fps*2;i++){a=updateSpriteMotion(a.state,sample({x:8+2.2*i/fps,time:i/fps,dt:1/fps}));seen.add(a.row);}
    assert.ok([1,8,4,2,9,5].every(row=>seen.has(row)));phases.push(a.phase);
  }
  assert.ok(phases.every(p=>Math.abs(p-phases[0])<1e-10));
});
test('60Hz repeated coordinates at 120/144Hz never enter stop recovery while walking',()=>{
  for(const fps of [120,144])for(const kind of ['yi','ashigaru','militia']){
    let a=updateSpriteMotion(null,sample({kind,holdMovement:true,walkIntent:true}));
    for(let i=1;i<=fps*2;i++){
      const tick=Math.floor(i*60/fps);
      a=updateSpriteMotion(a.state,sample({kind,x:8+tick*.025,time:tick/60,dt:1/fps,holdMovement:true,walkIntent:true}));
      if(i>fps/4){assert.equal(a.settling,false,kind+' at '+fps);assert.notEqual(a.row,0);}
    }
  }
});
test('snapshot holds expire in real time even if the server clock stalls or speed is 3x',()=>{
  for(const speed of [1,3]){
    let a=updateSpriteMotion(null,sample({time:1,holdMovement:true}));
    a=updateSpriteMotion(a.state,sample({x:8.1,time:1,holdMovement:true,dt:speed/60,frameDt:1/60}));
    const phase=a.phase;
    for(let i=1;i<=5;i++){a=updateSpriteMotion(a.state,sample({x:8.1,time:1,holdMovement:true,dt:speed/60,frameDt:1/60}));assert.equal(a.settling,false);assert.equal(a.phase,phase);}
    for(let i=0;i<18;i++)a=updateSpriteMotion(a.state,sample({x:8.1,time:1,holdMovement:true,dt:speed/60,frameDt:1/60}));
    assert.equal(a.row,0);assert.equal(a.phase,phase);
  }
});
test('actual arrival, attack, stun, pause and teleport override the short movement hold',()=>{
  for(const mode of ['arrival','attack','stun','pause','teleport']){
    let a=updateSpriteMotion(null,sample({holdMovement:true,walkIntent:true}));
    a=updateSpriteMotion(a.state,sample({x:8.1,time:1/60,holdMovement:true,walkIntent:true}));
    const phase=a.phase,row=a.row;
    const extra=mode==='arrival'?{walkIntent:false}:mode==='attack'?{actionSeq:1,actionAt:2/60}:mode==='stun'?{stunned:true}:mode==='pause'?{dt:0,frozen:true}:{x:15};
    a=updateSpriteMotion(a.state,sample({x:8.1,time:2/60,holdMovement:true,walkIntent:true,...extra}));
    if(mode==='attack')assert.equal(a.row,3);
    if(mode==='stun'||mode==='teleport')assert.equal(a.row,0);
    if(mode==='pause'){assert.equal(a.row,row);assert.equal(a.phase,phase);}
    if(mode==='arrival')assert.equal(a.state.moving,false);
    if(mode==='teleport')assert.equal(a.phase,0);
  }
});

class Target{
  constructor(){this.handlers=new Map();this.style={};this.dataset={};}
  addEventListener(k,fn){this.handlers.set(k,fn);}
  removeEventListener(k,fn){if(this.handlers.get(k)===fn)this.handlers.delete(k);}
  fire(k,e={}){this.handlers.get(k)?.({...e,type:k});}
  getBoundingClientRect(){return{left:0,top:0,width:960,height:560};}
}
const saved=Object.fromEntries(['window','document','requestAnimationFrame','cancelAnimationFrame'].map(k=>[k,globalThis[k]]));
const oldInit=audio.init,oldPlay=audio.play,oldBgm=audio.stopBgm;
const doc=new Target(),win=new Target();globalThis.document=doc;globalThis.window=win;
globalThis.requestAnimationFrame=()=>1;globalThis.cancelAnimationFrame=()=>{};
audio.init=()=>{};audio.play=()=>{};audio.stopBgm=()=>{};
const button=()=>({attrs:{},setAttribute(k,v){this.attrs[k]=v;}});
function fixture({flat=false,local=false}={}){
  const s=new Session({kind:local?'local':'solo',stageId:'s1',difficulty:'normal',seed:8,specs:local?[{heroes:['yi']},{heroes:['sejong']}]:[{heroes:['yi','sejong']}]});
  s.state.paused=true;
  const cv=new Target(),sent=[],buildMenus=[],selected=[],casts=[],panels=[];
  const originalSend=s.send.bind(s);s.send=cmd=>{sent.push(cmd);return originalSend(cmd);};
  const map=getMap('s1'),cells=map.grid.flatMap((tile,i)=>tile===T_BUILD?[{x:i%map.w,y:Math.floor(i/map.w)}]:[]).filter(p=>s.view.heroes.every(h=>Math.hypot(h.x-p.x,h.y-p.y)>2));
  const point={x:cells[0].x+.5,y:cells[0].y+.5};
  const ui=Object.assign(Object.create(GameUI.prototype),{s,me:0,solo:!local,local,is3d:!flat,map,cv,ui:{},selHero:0,p2keys:new Set(),lastP2Move:0,p2moving:false,touchInput:true,touchMode:'move',touchMoveBtn:button(),touchBuildBtn:button(),touchHint:{},renderer:{pick:()=>({...point}),destroy(){}},
    closePop(){this.pop=null;},openBuildMenu(x,y){buildMenus.push([x,y]);this.pop={kind:'build',x,y};},openTowerPanel(id){panels.push(id);},selectHero(i){selected.push(i);this.selHero=i;},fireTargeting(x,y){casts.push([x,y]);this.targeting=null;}});
  ui.bindInput();
  const event=(id=1,type='touch')=>({pointerId:id,pointerType:type,button:0,clientX:flat?point.x*32:10,clientY:flat?point.y*32:10});
  const tap=(type='touch')=>{const e=event(1,type);cv.fire('pointerdown',e);cv.fire('pointerup',e);};
  return{ui,s,cv,sent,buildMenus,selected,casts,panels,point,cells,event,tap,done:()=>ui.destroy()};
}
try{
  test('touching buildable grass moves in both 3D and flat fallback without a build menu',()=>{
    for(const flat of [false,true]){const f=fixture({flat});f.tap();assert.equal(f.sent[0].t,'move');assert.equal(f.buildMenus.length,0);f.s.update(0);assert.equal(f.s.view.towers.length,0);f.done();}
  });
  test('explicit construction builds once from its owner wallet and returns to movement',()=>{
    const f=fixture();f.ui.gridBtn=button();f.ui.setTouchMode('build');assert.equal(f.ui.gridBtn.attrs['aria-pressed'],'true');f.tap();assert.equal(f.sent.length,0);assert.equal(f.buildMenus.length,1);
    const [x,y]=f.buildMenus[0],gold=f.s.state.players[0].gold;f.ui.build(x,y,'sungnyemun');f.s.update(0);
    assert.equal(f.s.view.towers.length,1);assert.equal(f.s.state.players[0].gold,gold-70);assert.equal(f.ui.touchMode,'move');assert.equal(f.ui.ui.showGrid,false);assert.equal(f.ui.gridBtn.attrs['aria-pressed'],'false');
    f.point.x=f.cells[1].x+.5;f.point.y=f.cells[1].y+.5;f.tap();assert.equal(f.sent.at(-1).t,'move');assert.equal(f.buildMenus.length,1);f.done();
  });
  test('a touch in construction mode on a path or blocked tile does not order movement',()=>{
    const f=fixture();f.ui.setTouchMode('build');const i=f.ui.map.grid.findIndex(t=>t===T_PATH);f.point.x=i%f.ui.map.w+.5;f.point.y=Math.floor(i/f.ui.map.w)+.5;f.tap();assert.equal(f.sent.length,0);assert.equal(f.buildMenus.length,0);f.done();
  });
  test('hero and existing tower selection retain priority in touch movement mode',()=>{
    const f=fixture(),h=f.s.view.heroes[1];f.point.entity={kind:'hero',id:h.id};f.tap();assert.deepEqual(f.selected,[1]);
    f.point.entity={kind:'tower',id:91};f.tap();assert.deepEqual(f.panels,[91]);assert.equal(f.sent.length,0);f.done();
  });
  test('skill targeting wins over tap or held-touch movement and construction',()=>{
    for(const mode of ['move','build']){const f=fixture();f.ui.setTouchMode(mode);f.ui.targeting={kind:'heroSkill'};f.cv.fire('pointerdown',f.event());assert.equal(f.casts.length,0);f.cv.fire('pointerup',f.event());assert.equal(f.casts.length,1);assert.equal(f.sent.length,0);assert.equal(f.buildMenus.length,0);f.done();}
  });
  test('DOM construction markers obey movement and targeting instead of bypassing them',()=>{
    const f=fixture(),cell=f.cells[0];f.ui.buildSiteClick(cell.x,cell.y,{pointerType:'touch'});assert.equal(f.sent.at(-1).t,'move');
    f.ui.setTouchMode('build');f.ui.targeting={};f.ui.buildSiteClick(cell.x,cell.y,{pointerType:'touch'});assert.equal(f.buildMenus.length,0);
    f.ui.targeting=null;f.ui.buildSiteClick(cell.x,cell.y,{pointerType:'touch'});assert.equal(f.buildMenus.length,1);f.done();
  });
  test('mixed canvas/DOM multi-touch cancels both the released tap and trailing marker click',()=>{
    const f=fixture();f.ui.setTouchMode('build');doc.fire('pointerdown',f.event(1));f.cv.fire('pointerdown',f.event(1));doc.fire('pointerdown',f.event(2));doc.fire('pointerup',f.event(2));doc.fire('pointerup',f.event(1));f.cv.fire('pointerup',f.event(1));f.ui.buildSiteClick(f.cells[0].x,f.cells[0].y,{pointerType:'touch'});
    assert.equal(f.sent.length,0);assert.equal(f.buildMenus.length,0);f.done();
  });
  test('dragging over a DOM marker cannot trigger construction on release',()=>{
    const f=fixture();f.ui.setTouchMode('build');doc.fire('pointerdown',f.event());doc.fire('pointermove',{...f.event(),clientX:f.event().clientX+20});doc.fire('pointerup',f.event());f.ui.buildSiteClick(f.cells[0].x,f.cells[0].y,{pointerType:'touch'});assert.equal(f.buildMenus.length,0);f.done();
  });
  test('construction choices also reject a trailing multi-touch click before spending gold',()=>{
    const f=fixture();f.ui.setTouchMode('build');f.tap();const gold=f.s.state.players[0].gold;
    doc.fire('pointerdown',f.event(1));doc.fire('pointerdown',f.event(2));doc.fire('pointerup',f.event(2));doc.fire('pointerup',f.event(1));
    f.ui.build(f.cells[0].x,f.cells[0].y,'sungnyemun');f.s.update(0);
    assert.equal(f.sent.length,0);assert.equal(f.s.view.towers.length,0);assert.equal(f.s.state.players[0].gold,gold);
    f.ui.suppressTouchUntil=0;f.ui.build(f.cells[0].x,f.cells[0].y,'sungnyemun');f.s.update(0);assert.equal(f.s.view.towers.length,1);f.done();
  });
  test('switching touch mode cancels an already held canvas press',()=>{
    const f=fixture();f.cv.fire('pointerdown',f.event());f.ui.setTouchMode('build');f.cv.fire('pointerup',f.event());assert.equal(f.buildMenus.length,0);assert.equal(f.sent.length,0);f.done();
  });
  test('PC left grass click still constructs and right click still moves',()=>{
    const f=fixture();f.tap('mouse');assert.equal(f.buildMenus.length,1);const e={...f.event(1,'mouse'),button:2};f.cv.fire('pointerdown',e);f.cv.fire('pointerup',e);assert.equal(f.sent.at(-1).t,'move');f.done();
  });
  test('local P2 keyboard still moves only P2 after P1 touch-mode changes',()=>{
    const f=fixture({local:true});f.ui.setTouchMode('build');f.ui.setTouchMode('move');f.s.state.paused=false;const before=f.s.view.heroes.map(h=>h.x);f.ui.p2Key({code:'ArrowRight'});
    for(let i=1;i<=30;i++){f.ui.p2Tick(i*1000/60);f.s.update(1/60);}
    assert.equal(f.s.view.heroes[0].x,before[0]);assert.ok(f.s.view.heroes[1].x>before[1]);f.done();
  });
  test('destroy removes every document-wide touch capture handler',()=>{
    const f=fixture();f.done();for(const type of ['pointerdown','pointermove','pointerup','pointercancel'])assert.equal(doc.handlers.has(type),false);
  });
}finally{
  audio.init=oldInit;audio.play=oldPlay;audio.stopBgm=oldBgm;
  for(const [key,value]of Object.entries(saved)){if(value===undefined)delete globalThis[key];else globalThis[key]=value;}
}
fs.writeFileSync('docs/TOUCH_MOTION_RUNTIME_VALIDATION.json',JSON.stringify({generatedAt:new Date().toISOString(),tests:results.length,allPassed:true,scope:'Distance gait cadence, real-time repeated-position holds and actual HUD pointer routing with real solo/local sessions. Synthetic touch events, not physical-phone validation.',localCoopPreserved:true,results},null,2)+'\n');
