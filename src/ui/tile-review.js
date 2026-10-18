// Development-only synthetic PointerEvent controls around the real product UI.
import {GameUI} from './hud.js';
import {WinterWorld} from '../3d/world.js';
import {defaultProfile,playerSpec} from '../meta/profile.js';
import {TOWER_ORDER} from '../data/towers.js';
import {getMap,slotOccupant,nearestOnPath} from '../sim/map.js';
import {spawnEnemy,hurtHero} from '../sim/combat.js';
import '../main.js';
let lastMetrics=0;let current;let seenProjectiles=new Set();const buildDom=GameUI.prototype.buildDom;
document.addEventListener('click',e=>{if(current)current.cv.dataset.reviewClick=JSON.stringify({x:e.clientX,y:e.clientY,detail:e.detail,slot:e.target.closest?.('.build-site')?.dataset.slotId,target:e.target.className});},true);
GameUI.prototype.buildDom=function(){current=this;this.touchInput=true;this.ui.touchInput=true;return buildDom.call(this);};
const draw=WinterWorld.prototype.draw;
WinterWorld.prototype.draw=function(...args){
  const value=draw.apply(this,args),ui=current;
  if(ui?.s){
    const v=ui.s.view;
    v.projectiles.forEach(p=>seenProjectiles.add(p.kind));
    Object.assign(this.renderer.domElement.dataset,{
      reviewHeroes:JSON.stringify(v.heroes.map(h=>({id:h.id,owner:h.owner,slot:h.deploymentSlotId,x:h.x,y:h.y,cd:h.relocateCd,dead:h.dead}))),
      reviewTowers:JSON.stringify(v.towers.map(t=>({type:t.type,slot:t.deploymentSlotId,x:t.x,y:t.y,owner:t.owner,level:t.level,branch:t.branch}))),
      reviewGold:v.players.map(p=>p.gold).join(','),reviewProjectileKinds:JSON.stringify([...new Set(v.projectiles.map(p=>p.kind))]),reviewSeenProjectiles:JSON.stringify([...seenProjectiles]),
      reviewCameraZoom:String(this.camera.zoom),reviewPending:String(!!ui.s.deploymentPending),
      reviewDrag:String(!!ui.heroDrag?.current?.active),reviewPreview:JSON.stringify(ui.ui.dragPreview)
    });
    if(performance.now()-lastMetrics>250){
      lastMetrics=performance.now();
      parent.postMessage({type:'tile-metrics',data:{...this.renderer.domElement.dataset,status:ui.slotState?.textContent,width:innerWidth,height:innerHeight,
        buttons:[...document.querySelectorAll('.hero-card,.sk,.wave-btn,.build-site')].filter(e=>!e.hidden).map(e=>({label:e.getAttribute('aria-label')??e.title,w:e.getBoundingClientRect().width,h:e.getBoundingClientRect().height})),
        dock:ui.commandHost?.getBoundingClientRect().toJSON(),battle:ui.cv.getBoundingClientRect().toJSON()}},location.origin);
    }
  }
  return value;
};
const result=document.createElement('output');result.id='tile-review-result';result.hidden=true;document.body.append(result);
function send(type,id,x,y,target=current.cv){target.dispatchEvent(new PointerEvent(type,{bubbles:true,cancelable:true,pointerId:id,pointerType:'touch',button:0,buttons:type==='pointerup'||type==='pointercancel'?0:1,clientX:x,clientY:y}));}
function state(){const v=current.s.view;return{heroes:v.heroes.map(h=>({slot:h.deploymentSlotId,x:h.x,y:h.y,dead:h.dead,cd:h.relocateCd})),gold:v.players.map(p=>p.gold),towers:v.towers.length,pending:!!current.s.deploymentPending,zoom:current.renderer.world.camera.zoom,pageScale:visualViewport?.scale??1};}
function cameraGesture(){
  const ui=current;if(!ui||ui.renderer.loading)return;
  const r=ui.cv.getBoundingClientRect(),x=r.left+r.width*.22,y=r.top+r.height*.28,before=state(),area=ui.area;
  // Synthetic pointers have no native capture ID. Only this development macro
  // supplies capture stubs; real production controls keep browser capture.
  const capture=area.setPointerCapture,release=area.releasePointerCapture;
  area.setPointerCapture=area.releasePointerCapture=()=>{};
  try{send('pointerdown',101,x,y);send('pointerdown',102,x+60,y);send('pointermove',101,x-20,y);send('pointermove',102,x+100,y);send('pointerup',101,x-20,y);send('pointerup',102,x+100,y);}
  finally{area.setPointerCapture=capture;area.releasePointerCapture=release;}
  result.textContent=JSON.stringify({kind:'camera-pinch',before,after:state()});parent.postMessage({type:'tile-result',data:JSON.parse(result.textContent)},location.origin);
}
function drag(kind){
  const ui=current;if(!ui||ui.renderer.loading)return;
  const h=ui.s.view.heroes[ui.myHeroIdx()[0]],map=getMap(ui.s.stageId),r=ui.cv.getBoundingClientRect();
  const slots=map.deploymentSlots.map(slot=>({...slot,screen:ui.renderer.screenPoint(slot.cx,slot.cy)})).filter(slot=>slot.screen.x>30&&slot.screen.x<r.width-30&&slot.screen.y>30&&slot.screen.y<r.height-30);
  const slot=kind==='occupied'?slots.find(s=>slotOccupant(ui.s.view,s.id)&&s.id!==h.deploymentSlotId):slots.find(s=>!slotOccupant(ui.s.view,s.id));if(!slot){result.textContent='No suitable visible slot';return;}
  const portrait=ui.heroEls.find(e=>e.i===ui.myHeroIdx()[0]).card,a=portrait.getBoundingClientRect(),x=r.left+slot.screen.x,y=r.top+slot.screen.y,before=state();
  send('pointerdown',97,a.left+a.width/2,a.top+a.height/2,portrait);send('pointermove',97,x,y);
  const preview={...state(),drag:!!ui.heroDrag?.current?.active,valid:ui.ui.dragPreview?.valid,ghost:!!ui.dragGhost};if(kind==='multitouch'){send('pointerdown',98,x+30,y);send('pointerup',98,x+30,y);}
  send(kind==='cancel'?'pointercancel':'pointerup',97,x,y);
  requestAnimationFrame(()=>requestAnimationFrame(()=>{result.textContent=JSON.stringify({kind,before,preview,after:state(),slot:slot.id});parent.postMessage({type:'tile-result',data:JSON.parse(result.textContent)},location.origin);}));
}
function start(hero='gang',stageId='s1'){
  const app=window.__app;if(!app?.current)return;
  const p=defaultProfile();p.towersUnlocked=[...TOWER_ORDER];for(const h of Object.values(p.heroes))h.unlocked=true;p.settings.hints=false;p.settings.bgm=0;p.settings.sfx=0;p.settings.renderer='3d';app.profile=p;
  seenProjectiles=new Set();app.startBattle({kind:'solo',stageId,difficulty:'normal',seed:41,specs:[playerSpec(p,[hero],['singijeon','bongsu'])]});
  current.s.state.wave.timer=3600; // Hold initial preparation only in this QA page.
}
window.addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==parent)return;const m=e.data;if(m?.type!=='tile-review')return;
  if(m.action==='start')start(m.hero,m.stageId);
  if(m.action==='drag')drag(m.kind);
  if(m.action==='camera')cameraGesture();
  if(m.action==='enemy'&&current?.s.state){const s=current.s.state,h=s.heroes[0],np=nearestOnPath(getMap(s.stageId),h.x,h.y),e=spawnEnemy(s,'ashigaru',np.path,1,np.d);e.hp=e.maxHp=100000;e.stunT=100;}
  if(m.action==='death'&&current?.s.state)hurtHero(current.s.state,current.s.state.heroes[0],1e7);
});
