// Development-only controls around the real application entry points. This
// module and its pages are excluded from the public shipping manifest.
import { WinterWorld } from './world.js';
const draw=WinterWorld.prototype.draw;let current;
const sync=WinterWorld.prototype.sync;
WinterWorld.prototype.sync=function(game,...args){
  Object.assign(this.renderer.domElement.dataset,{reviewBattleTime:game.time.toFixed(3),reviewGold:game.players.map(p=>p.gold).join(','),reviewHeroes:JSON.stringify(game.heroes.map(h=>({x:h.x,y:h.y,tx:h.tx,ty:h.ty,skillCd:h.skillCd}))),reviewTowers:String(game.towers.length)});
  return sync.call(this,game,...args);
};
const panel=document.createElement('aside');panel.setAttribute('aria-label','개발용 그래픽 복구 검수');
panel.style.cssText='position:fixed;z-index:10000;top:56px;left:8px;background:#102333ed;color:#eee;padding:8px;border:1px solid #bfa875;border-radius:6px;font:12px sans-serif;max-width:calc(100vw - 32px)';
const lose=document.createElement('button'),restore=document.createElement('button'),status=document.createElement('output');lose.textContent='그래픽 중단';restore.textContent='그래픽 복구';panel.append(lose,restore,status);document.body.append(panel);
if(window.self!==window.top)panel.hidden=true;
lose.onclick=()=>{if(current&&!current.destroyed)current.renderer.forceContextLoss();};restore.onclick=()=>{if(current&&!current.destroyed)current.renderer.forceContextRestore();};
WinterWorld.prototype.draw=function(...args){current=this;status.textContent=` ${this.graphics?.status??'준비'} · 복구 ${this.graphics?.recoveries??0}회`;return draw.apply(this,args);};
if(document.body.dataset.freeReview==='true')import('./main.js');else import('../main.js');
