// Development-only controls around the real application entry points. This
// module and its pages are excluded from the public shipping manifest.
import { WinterWorld } from './world.js';
import { GameUI } from '../ui/hud.js';
import { getMap,T_BUILD,T_PATH } from '../sim/map.js';
const touchReview=new URLSearchParams(location.search).has('touch');let currentUI;
const buildDom=GameUI.prototype.buildDom,bindInput=GameUI.prototype.bindInput;
GameUI.prototype.buildDom=function(){if(touchReview){this.touchInput=true;this.ui.touchInput=true;}return buildDom.call(this);};
GameUI.prototype.bindInput=function(){currentUI=this;return bindInput.call(this);};
const draw=WinterWorld.prototype.draw;let current;
const sync=WinterWorld.prototype.sync;
WinterWorld.prototype.sync=function(game,...args){
  Object.assign(this.renderer.domElement.dataset,{reviewCameraZoom:String(this.camera.zoom),reviewBattleTime:game.time.toFixed(3),reviewGold:game.players.map(p=>p.gold).join(','),reviewHeroes:JSON.stringify(game.heroes.map(h=>({x:h.x,y:h.y,tx:h.tx,ty:h.ty,skillCd:h.skillCd}))),reviewTowers:String(game.towers.length),reviewPadHeld:String(currentUI?.pad?.pointerId!=null),reviewPadMoving:String(!!currentUI?.padMoving)});
  const result=sync.call(this,game,...args),yi=[...this.units.values()].find(root=>root.userData.fixedImage?.kind==='yi')?.userData.fixedImage;
  if(yi)Object.assign(this.renderer.domElement.dataset,{reviewYiPhase:String(yi.motionPhase??0),reviewYiRow:String(yi.motion?.visual?.row??0),reviewYiSettling:String(yi.motion?.visual?.settling??false)});
  return result;
};
const panel=document.createElement('aside');panel.setAttribute('aria-label','개발용 그래픽 복구 검수');
panel.style.cssText='position:fixed;z-index:10000;top:56px;left:8px;background:#102333ed;color:#eee;padding:8px;border:1px solid #bfa875;border-radius:6px;font:12px sans-serif;max-width:calc(100vw - 32px)';
const lose=document.createElement('button'),restore=document.createElement('button'),status=document.createElement('output');lose.textContent='그래픽 중단';restore.textContent='그래픽 복구';panel.append(lose,restore,status);document.body.append(panel);
if(window.self!==window.top)panel.hidden=true;
lose.onclick=()=>{if(current&&!current.destroyed)current.renderer.forceContextLoss();};restore.onclick=()=>{if(current&&!current.destroyed)current.renderer.forceContextRestore();};
WinterWorld.prototype.draw=function(...args){current=this;status.textContent=` ${this.graphics?.status??'준비'} · 복구 ${this.graphics?.recoveries??0}회`;return draw.apply(this,args);};
function touchTap(kind){
  const ui=currentUI;if(!touchReview||!ui||ui.destroyed||ui.renderer.loading)return;
  const map=getMap(ui.s.stageId),hero=ui.s.view.heroes[ui.padHeroIndex()],wanted=kind==='path'?T_PATH:T_BUILD,rect=ui.cv.getBoundingClientRect();
  const cells=map.grid.flatMap((tile,i)=>tile===wanted?[{x:i%map.w,y:Math.floor(i/map.w)}]:[])
    .filter(p=>!ui.s.view.towers.some(t=>t.x===p.x&&t.y===p.y)&&ui.s.view.heroes.every(h=>Math.hypot(h.x-p.x-.5,h.y-p.y-.5)>1.5))
    .sort((a,b)=>Math.hypot(a.x-hero.x,a.y-hero.y)-Math.hypot(b.x-hero.x,b.y-hero.y));
  const cell=cells.find(p=>{const q=ui.renderer.screenPoint(p.x+.5,p.y+.5);return q.visible&&q.x>15&&q.x<rect.width-15&&q.y>15&&q.y<rect.height-15;});if(!cell)return;
  const p=ui.renderer.screenPoint(cell.x+.5,cell.y+.5),init={bubbles:true,pointerId:91,pointerType:'touch',button:0,buttons:1,clientX:rect.left+p.x,clientY:rect.top+p.y};
  ui.cv.dataset.reviewTouchTarget=JSON.stringify({x:cell.x+.5,y:cell.y+.5,kind});
  // Synthetic pointer IDs have no native capture registration. Keep camera
  // listeners active, but don't ask the browser to capture these test IDs.
  const capture=ui.cv.setPointerCapture,release=ui.cv.releasePointerCapture;
  ui.cv.setPointerCapture=id=>{if(id!==91&&id!==92)capture.call(ui.cv,id);};
  ui.cv.releasePointerCapture=id=>{if(id!==91&&id!==92)release.call(ui.cv,id);};
  try{
    ui.cv.dispatchEvent(new PointerEvent('pointerdown',init));
    if(kind==='cancel')ui.bottom.dispatchEvent(new PointerEvent('pointerdown',{...init,pointerId:92}));
    ui.cv.dispatchEvent(new PointerEvent('pointerup',{...init,buttons:0}));
    if(kind==='cancel')ui.bottom.dispatchEvent(new PointerEvent('pointerup',{...init,pointerId:92,buttons:0}));
  }finally{ui.cv.setPointerCapture=capture;ui.cv.releasePointerCapture=release;}
}
function padReview(kind){
  const ui=currentUI;if(!touchReview||!ui||ui.destroyed||!ui.pad)return;
  const surface=ui.pad.surface,r=surface.getBoundingClientRect(),init={bubbles:true,pointerId:93,pointerType:'touch',button:0,buttons:1,clientX:r.left+r.width/2+(kind==='up'?0:32),clientY:r.top+r.height/2+(kind==='up'?-32:0)};
  surface.dispatchEvent(new PointerEvent(kind==='release'?'pointerup':'pointerdown',{...init,buttons:kind==='release'?0:1}));
}
function pinchReview(){
  const ui=currentUI;if(!touchReview||!ui||ui.destroyed||ui.renderer.loading)return;
  const cv=ui.cv,r=cv.getBoundingClientRect(),capture=cv.setPointerCapture,release=cv.releasePointerCapture;
  cv.setPointerCapture=id=>{if(id!==94&&id!==95)capture.call(cv,id);};cv.releasePointerCapture=id=>{if(id!==94&&id!==95)release.call(cv,id);};
  const send=(type,id,x)=>cv.dispatchEvent(new PointerEvent(type,{bubbles:true,pointerType:'touch',pointerId:id,button:0,buttons:type==='pointerup'?0:1,clientX:r.left+r.width/2+x,clientY:r.top+r.height/2}));
  try{send('pointerdown',94,-35);send('pointerdown',95,35);send('pointermove',94,-65);send('pointermove',95,65);send('pointerup',94,-65);send('pointerup',95,65);}
  finally{cv.setPointerCapture=capture;cv.releasePointerCapture=release;}
}
window.addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==window.parent)return;if(e.data?.type==='review-touch-tap')touchTap(e.data.kind);if(e.data?.type==='review-pad')padReview(e.data.kind);if(e.data?.type==='review-pinch')pinchReview();});
if(touchReview)for(const [label,kind]of [['빈 땅 터치','grass'],['길 터치','path'],['두 손가락 취소','cancel']]){const b=document.createElement('button');b.textContent=label;b.onclick=()=>touchTap(kind);panel.append(b);}
if(document.body.dataset.freeReview==='true')import('./main.js');else import('../main.js');
