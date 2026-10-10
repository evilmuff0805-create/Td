import { WinterWorld } from './world.js';
import { WINTER_STAGE } from './scenario.js';
import { paintBattleEvent } from './battle-events.js';
import { step,DT } from '../sim/sim.js';
import { ABILITY_SAMPLES,createAbilitySample } from './ability-samples.js';
import { abilityIllustration,paintAbility } from './skill-art.js';

const canvas=document.getElementById('effects'),status=document.getElementById('status'),select=document.getElementById('ability');
for(const sample of ABILITY_SAMPLES){const option=document.createElement('option');option.value=sample.key;option.textContent=sample.name;select.append(option);}
const world=new WinterWorld(canvas,WINTER_STAGE,'winter');
let game,sample=ABILITY_SAMPLES.find(s=>s.key==='eulji-heroUlt'),elapsed=0,accumulator=0,last=performance.now(),frames=0;
const deferred=[],observed=[];
function play(key=sample.key) {
  sample=ABILITY_SAMPLES.find(s=>s.key===key)??sample;world.reset();deferred.length=0;observed.length=0;
  game=createAbilitySample(sample,WINTER_STAGE.id);select.value=sample.key;
  status.textContent=`${sample.name} · 재생 중`;
  document.getElementById('ability-name').textContent=sample.name;document.getElementById('ability-description').textContent=sample.description??'';
  paintAbility(document.getElementById('ability-icon'),abilityIllustration(sample.id,sample.kind==='attack'?'heroSkill':sample.kind,true));
  events();world.sync(game,game.time,0,null);deferred.forEach(e=>world.firingLine(e));deferred.length=0;
  elapsed=0;accumulator=0;world.home();world.camera.zoom=1.55;world.camera.updateProjectionMatrix();
}
function events(){for(const e of game.events){if(e.k!=='sfx')observed.push(e.k);paintBattleEvent(world,e,game,{deferShot:shot=>deferred.push(shot)});}game.events.length=0;}
select.onchange=()=>play(select.value);
document.getElementById('replay').onclick=()=>play();
document.getElementById('season').onchange=event=>{world.loadStage(WINTER_STAGE,event.target.value);play();};
document.getElementById('hold').onchange=()=>play();
window.addEventListener('resize',()=>world.resize());
window.addEventListener('pagehide',()=>world.destroy(),{once:true});
Promise.all([world.art.promise,world.fx.art.promise,world.fx.signatures.promise,world.fx.tactics.promise]).then(()=>{
  if(world.destroyed)return;select.disabled=false;document.getElementById('replay').disabled=false;play();
});
function frame(now) {
  const dt=Math.min(.05,(now-last)/1000);last=now;
  if(game){
    const hold=document.getElementById('hold').checked&&elapsed>=sample.holdAt;
    if(!hold){accumulator+=dt;while(accumulator>=DT){step(game);events();elapsed+=DT;accumulator-=DT;}world.fx.update(dt);}
    world.sync(game,game.time,hold?0:dt,null);for(const root of world.units.values())root.visible=document.getElementById('troops').checked;deferred.forEach(e=>world.firingLine(e));deferred.length=0;world.draw(game.time,hold?0:dt);
    if(frames++%12===0){status.textContent=`${world.theme.name} · ${world.fx.signatures.ready&&world.fx.tactics.ready?'영웅·비기·합격기 전용 효과 적용':'공용 효과 대체'} · ${hold?'장면 고정':'재생 중'}`;canvas.dataset.sample=sample.key;canvas.dataset.sampleTime=elapsed.toFixed(2);canvas.dataset.sampleEvents=[...new Set(observed)].join(',');canvas.dataset.effectCount=world.fx.active.length;canvas.dataset.signatureTextures=world.fx.signatures.textures.size;canvas.dataset.tacticTextures=world.fx.tactics.textures.size;canvas.dataset.drawCalls=world.renderer.info.render.calls;canvas.dataset.geometries=world.renderer.info.memory.geometries;canvas.dataset.textures=world.renderer.info.memory.textures;}
  }else world.draw(0,0);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
