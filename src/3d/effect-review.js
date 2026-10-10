import { WinterWorld } from './world.js';
import { newBattleGame,WINTER_STAGE } from './scenario.js';
import { paintBattleEvent } from './battle-events.js';
import { applyCommand,step,DT } from '../sim/sim.js';
import { spawnEnemy } from '../sim/combat.js';
import { getMap,nearestOnPath } from '../sim/map.js';

const canvas=document.getElementById('effects'),status=document.getElementById('status'),buttons=[...document.querySelectorAll('[data-effect]')];
const world=new WinterWorld(canvas,WINTER_STAGE,'winter');
let game,kind='flood',elapsed=0,accumulator=0,last=performance.now(),frames=0;
const deferred=[],observed=[];
function play(next=kind) {
  kind=next;world.reset();deferred.length=0;observed.length=0;
  const hero=kind==='fire'||kind==='flood'?'eulji':kind==='hangul'?'sejong':kind==='slash'?'gang':'yi';
  game=newBattleGame({stageId:WINTER_STAGE.id,heroIds:[hero,hero==='yi'?'sejong':'yi'],skillIds:['hanpa','donguibogam'],support:false});
  for(const [i,h]of game.heroes.entries()) {
    h.x=10.3+i*.95;h.y=7.2+i*(kind==='slash'?1.6:.15);h.tx=h.x;h.ty=h.y;h.post={x:h.x,y:h.y};h.skillCd=0;h.ultCd=0;h.cd=99;h.hp=h.maxHp*.5;
  }
  for(const tower of game.towers)tower.cd=99;
  for(let i=0;i<4;i++){
    const e=spawnEnemy(game,'samurai',0,1);e.x=12+(i%2)*.65;e.y=6+(i>>1)*.6;e.hp=e.maxHp=5000;e.stunT=30;
    if(kind==='slash'&&i===0){e.x=game.heroes[0].x+.65;e.y=game.heroes[0].y;game.heroes[0].cd=0;}
    const path=nearestOnPath(getMap(game.stageId),e.x,e.y);e.d=path.d;e.path=path.path;
  }
  game.players[0].skills.forEach(s=>s.cd=0);game.events.length=0;
  if(kind==='combo'){game.resonance.gauge=100;applyCommand(game,{t:'combo',p:0});}
  else if(kind==='ice'||kind==='heal')applyCommand(game,{t:'skill',p:0,slot:kind==='ice'?0:1,x:12.4,y:6.4});
  else if(kind!=='slash')applyCommand(game,{t:kind==='flood'?'heroUlt':'heroSkill',p:0,h:0,x:12.4,y:6.4});
  events();world.sync(game,game.time,0,null);deferred.forEach(e=>world.firingLine(e));deferred.length=0;
  elapsed=0;accumulator=0;world.home();world.camera.zoom=1.55;world.camera.updateProjectionMatrix();
  for(const button of buttons)button.setAttribute('aria-pressed',String(button.dataset.effect===kind));
}
function events(){for(const e of game.events){if(e.k!=='sfx')observed.push(e.k);paintBattleEvent(world,e,game,{deferShot:shot=>deferred.push(shot)});}game.events.length=0;}
for(const button of buttons)button.onclick=()=>play(button.dataset.effect);
document.getElementById('replay').onclick=()=>play();
document.getElementById('season').onchange=event=>{world.loadStage(WINTER_STAGE,event.target.value);play();};
document.getElementById('hold').onchange=()=>play();
window.addEventListener('resize',()=>world.resize());
window.addEventListener('pagehide',()=>world.destroy(),{once:true});
Promise.all([world.art.promise,world.fx.art.promise]).then(()=>{
  if(world.destroyed)return;buttons.forEach(button=>button.disabled=false);document.getElementById('replay').disabled=false;play();
});
function frame(now) {
  const dt=Math.min(.05,(now-last)/1000);last=now;
  if(game){
    const hold=document.getElementById('hold').checked&&elapsed>=(kind==='slash'?.12:.35);
    if(!hold){accumulator+=dt;while(accumulator>=DT){step(game);events();elapsed+=DT;accumulator-=DT;}world.fx.update(dt);}
    world.sync(game,game.time,hold?0:dt,null);for(const root of world.units.values())root.visible=document.getElementById('troops').checked;deferred.forEach(e=>world.firingLine(e));deferred.length=0;world.draw(game.time,hold?0:dt);
    if(frames++%12===0){status.textContent=`${buttons.find(b=>b.dataset.effect===kind).textContent} · ${world.theme.name} · ${world.fx.art.ready?'그림 효과 적용':'기존 효과 대체'} · ${hold?'장면 고정':'재생 중'}`;canvas.dataset.sample=kind;canvas.dataset.sampleTime=elapsed.toFixed(2);canvas.dataset.sampleEvents=[...new Set(observed)].join(',');canvas.dataset.effectCount=world.fx.active.length;canvas.dataset.drawCalls=world.renderer.info.render.calls;canvas.dataset.geometries=world.renderer.info.memory.geometries;canvas.dataset.textures=world.renderer.info.memory.textures;}
  }else world.draw(0,0);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
