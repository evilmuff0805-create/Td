import * as T from 'three';
import { WinterWorld } from './world.js';
import { WINTER_STAGE } from './scenario.js';
import { paintBattleEvent } from './battle-events.js';
import { step,DT } from '../sim/sim.js';
import { ABILITY_SAMPLES,createAbilitySample } from './ability-samples.js';
import { abilityIllustration,paintAbility } from './skill-art.js';

const canvas=document.getElementById('effects'),status=document.getElementById('status'),select=document.getElementById('ability');
for(const sample of ABILITY_SAMPLES){const option=document.createElement('option');option.value=sample.key;option.textContent=sample.name;select.append(option);}
const world=new WinterWorld(canvas,WINTER_STAGE,'winter');
// Review-only crosshairs mark authoritative impact coordinates independently
// of the animated texture and its authored per-frame pivot.
const originPositions=new Float32Array(64*4*3),originGeometry=new T.BufferGeometry();
originGeometry.setAttribute('position',new T.BufferAttribute(originPositions,3));originGeometry.setDrawRange(0,0);
const originMaterial=new T.LineBasicMaterial({color:'#ff82db',transparent:true,opacity:1,depthTest:false,depthWrite:false,toneMapped:false});
const originMarkers=new T.LineSegments(originGeometry,originMaterial);originMarkers.frustumCulled=false;originMarkers.renderOrder=100;world.scene.add(originMarkers);
function markOrigins(){
  const roots=document.getElementById('origins').checked?world.fx.active.filter(e=>e.root.userData.comboImpact).slice(0,64).map(e=>e.root):[];
  for(const [i,root]of roots.entries()){
    const {x,z}=root.position;originPositions.set([x-.16,.15,z,x+.16,.15,z,x,.15,z-.16,x,.15,z+.16],i*12);
  }
  originGeometry.attributes.position.needsUpdate=true;originGeometry.setDrawRange(0,roots.length*4);canvas.dataset.comboOriginMarkers=String(roots.length);
}
let game,sample=ABILITY_SAMPLES.find(s=>s.key==='eulji-heroUlt'),elapsed=0,accumulator=0,last=performance.now(),frames=0,generation=0;
const deferred=[],observed=[];
async function play(key=sample.key) {
  const ticket=++generation;
  sample=ABILITY_SAMPLES.find(s=>s.key===key)??sample;world.reset();game=null;deferred.length=0;observed.length=0;
  canvas.dataset.holding='false';
  const preparedGame=createAbilitySample(sample,WINTER_STAGE.id);select.value=sample.key;
  world.prepareHeroLooks(preparedGame.heroes);status.textContent=`${sample.name} · 전용 원화 준비 중`;
  await Promise.all([world.art.promise,world.fx.comboArt.promise]);
  if(world.destroyed||ticket!==generation)return;
  game=preparedGame;
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
document.getElementById('moment').onchange=()=>play();
window.addEventListener('resize',()=>world.resize());
window.addEventListener('pagehide',()=>{world.scene.remove(originMarkers);originGeometry.dispose();originMaterial.dispose();world.destroy();},{once:true});
Promise.all([world.art.promise,world.fx.art.promise,world.fx.signatures.promise,world.fx.tactics.promise,world.fx.comboArt.promise]).then(()=>{
  if(world.destroyed)return;select.disabled=false;document.getElementById('replay').disabled=false;play();
});
function frame(now) {
  const dt=Math.min(.05,(now-last)/1000);last=now;
  if(game){
    const moment=document.getElementById('moment').value,holdAt=moment==='auto'?sample.holdAt:Number(moment);
    const hold=document.getElementById('hold').checked&&elapsed+1e-9>=holdAt;
    if(!hold){accumulator+=dt;while(accumulator>=DT&&(!document.getElementById('hold').checked||elapsed+1e-9<holdAt)){step(game);events();elapsed+=DT;accumulator-=DT;world.fx.update(DT);}}
    world.sync(game,game.time,hold?0:dt,null);for(const root of world.units.values())root.visible=document.getElementById('troops').checked;deferred.forEach(e=>world.firingLine(e));deferred.length=0;markOrigins();world.draw(game.time,hold?0:dt);
    if(frames++%12===0){status.textContent=`${world.theme.name} · ${world.fx.signatures.ready&&world.fx.tactics.ready?'영웅·비기·합격기 전용 효과 적용':'공용 효과 대체'} · ${hold?'장면 고정':'재생 중'}`;canvas.dataset.holding=String(hold);canvas.dataset.sample=sample.key;canvas.dataset.sampleTime=elapsed.toFixed(2);canvas.dataset.sampleEvents=[...new Set(observed)].join(',');canvas.dataset.effectCount=world.fx.active.length;canvas.dataset.signatureTextures=world.fx.signatures.textures.size;canvas.dataset.tacticTextures=world.fx.tactics.textures.size;canvas.dataset.drawCalls=world.renderer.info.render.calls;canvas.dataset.geometries=world.renderer.info.memory.geometries;canvas.dataset.textures=world.renderer.info.memory.textures;canvas.dataset.impactArt=world.fx.comboArt.ready?'ready':world.fx.comboArt.failed?'fallback':'loading';canvas.dataset.comboImpacts=world.fx.active.filter(e=>e.root.userData.comboImpact).length;canvas.dataset.comboSequenceStatus=world.fx.comboArt.sequenceLoading?'loading':world.fx.comboArt.missingCombos.length?'fallback':'ready';canvas.dataset.comboSequences=[...world.fx.comboArt.sequences.keys()].join(',');canvas.dataset.visibleComboSequences=[...new Set(world.fx.active.flatMap(e=>e.root.children.map(c=>c.userData.impactCombo).filter(Boolean)))].join(',');canvas.dataset.impactFrames=world.fx.active.filter(e=>e.root.userData.frame!==undefined).map(e=>e.root.userData.frame).join(',');canvas.dataset.elementFamilies=[...world.fx.comboArt.elements.keys()].sort().join(',');canvas.dataset.visibleElementFamilies=[...new Set(world.fx.active.flatMap(e=>e.root.children.map(c=>c.userData.impactFamily).filter(Boolean)))].sort().join(',');}
  }else {originGeometry.setDrawRange(0,0);world.draw(0,0);}
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
