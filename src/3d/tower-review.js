import * as T from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { MAT,towerModel } from './models.js';
import { FixedBattleArt } from './fixed-art.js';
import { WinterWorld } from './world.js';
import { towerVisual } from './tower-visuals.js';
import { TOWER_ORDER,TOWERS } from '../data/towers.js';
import { seasonalize } from './environment.js';
import { SEASONS } from './seasons.js';
import { onPaintedSurface } from './painted-surfaces.js';

const canvas=document.getElementById('review-canvas'),renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFShadowMap;
const room=new RoomEnvironment(),pmrem=new T.PMREMGenerator(renderer),environment=pmrem.fromScene(room,.04);room.dispose();pmrem.dispose();
const scene=new T.Scene();scene.environment=environment.texture;scene.environmentIntensity=.25;
scene.add(new T.HemisphereLight('#d8e2eb','#626658',1.5));const sun=new T.DirectionalLight('#ffe6be',2.3);sun.position.set(-3,8,5);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-3;sun.shadow.camera.right=3;sun.shadow.camera.top=6;sun.shadow.camera.bottom=-3;sun.shadow.normalBias=.03;scene.add(sun);
const fill=new T.DirectionalLight('#9eb8ce',.6);fill.position.set(5,4,-2);scene.add(fill);
const ground=new T.Mesh(new T.CylinderGeometry(1.4,1.5,.14,48),MAT.stoneDark);ground.position.y=-.08;ground.receiveShadow=true;scene.add(ground);
const camera=new T.OrthographicCamera(-2,2,2,-2,.1,100);camera.position.set(17,26.5,26);camera.lookAt(0,.5,0);camera.updateMatrixWorld();
const modelCamera=new T.OrthographicCamera(-2.5,2.5,2.5,-2.5,.1,50);modelCamera.position.set(5,4.3,6);modelCamera.lookAt(0,1.65,0);modelCamera.updateMatrixWorld();
const cards=[],container=document.getElementById('tower-review'),filter=document.getElementById('tower-filter'),display=document.getElementById('display-filter'),season=document.getElementById('season-filter'),status=document.getElementById('art-status');let destroyed=false;
const world={renderer,camera,theme:{id:'summer',...SEASONS.summer}},art=new FixedBattleArt(world);
for(const type of TOWER_ORDER)filter.add(new Option(TOWERS[type].name,type));filter.add(new Option('전체 유산 10종','all'));filter.value='bosingak';
for(const [id,theme] of Object.entries(SEASONS))season.add(new Option(theme.name,id));season.value='summer';
for(const type of TOWER_ORDER)for(const [level,branch] of [[1,null],[2,null],[3,null],[4,'A'],[4,'B']]) {
  const visual=towerVisual(type,level,branch,true),card=document.createElement('article');card.dataset.level=level;card.dataset.type=type;card.dataset.branch=branch??'';
  card.innerHTML=`<div class="card-title"><h2>${TOWERS[type].name}</h2><span class="stage">${level}단계${branch?' '+branch:''} · ${visual.isMax?'최대 · 강화 3회':visual.status}</span></div><span class="tier" aria-hidden="true">${'◆'.repeat(level)}${'◇'.repeat(4-level)}</span><div class="model-viewport"></div><div class="card-info"><b>${visual.name}</b><p>${visual.appearance}</p></div>`;container.append(card);
  cards.push({card,type,level,branch,viewport:card.querySelector('.model-viewport'),painted:null,model:null});
}
function rootFor(item,mode) {
  if(mode==='painted'){
    if(!art.ready)return null;
    if(!item.painted){item.painted=new T.Group();art.attachTower(item.painted,item.type,item.level,item.branch);item.card.dataset.art=item.painted.userData.fixedImage?.dedicated?'stage':'base';}
    const image=item.painted.userData.fixedImage?.image;
    if(image)art.material(image.material.map.image);
    return item.painted;
  }
  if(!item.model){item.model=seasonalize(towerModel(item.type,item.level,item.branch),world.theme);if(item.model.userData.gun)item.model.userData.gun.rotation.y=.22;}
  return item.model;
}
function draw() {
  if(destroyed)return;
  const width=innerWidth,height=innerHeight,mode=display.value;renderer.setSize(width,height,false);renderer.setScissorTest(false);renderer.setClearColor(0,0);renderer.clear();renderer.setScissorTest(true);
  ground.visible=mode==='model';const activeCamera=mode==='model'?modelCamera:camera;
  for(const item of cards) {
    const {card,viewport}=item;card.hidden=filter.value!=='all'&&filter.value!==card.dataset.type;if(card.hidden)continue;
    const r=viewport.getBoundingClientRect();if(r.bottom<0||r.top>height)continue;
    const root=rootFor(item,mode);if(!root)continue;
    const half=mode==='model'?3.05:Math.max(1.05,1.08*r.height/r.width);activeCamera.left=-half*r.width/r.height;activeCamera.right=half*r.width/r.height;activeCamera.top=half;activeCamera.bottom=-half;activeCamera.updateProjectionMatrix();
    renderer.setViewport(r.left,height-r.bottom,r.width,r.height);renderer.setScissor(r.left,height-r.bottom,r.width,r.height);scene.add(root);renderer.render(scene,activeCamera);scene.remove(root);
  }
  document.body.dataset.renderer='webgl2';document.body.dataset.display=mode;
}
filter.onchange=draw;display.onchange=draw;season.onchange=()=>{
  world.theme={id:season.value,...SEASONS[season.value]};
  for(const item of cards)if(item.model){WinterWorld.prototype.disposeModel(item.model);item.model=null;}
  draw();
};
art.promise.then(()=>{
  const state=art.ready?canvas.dataset.landmarkArtStatus:'fallback';document.body.dataset.artStatus=state;
  status.textContent=state==='ready'?'전장과 같은 단계별 그림 50종 · 건물 높이 모두 1.2칸':art.ready?'일부 단계 그림을 불러오지 못해 기본 그림을 표시합니다.':'그림을 불러오지 못했습니다. 모델 대체 보기를 사용할 수 있습니다.';
  draw();
});
addEventListener('resize',draw);addEventListener('scroll',draw,{passive:true});const stopSurface=onPaintedSurface(draw);draw();
addEventListener('pagehide',()=>{
  destroyed=true;
  stopSurface?.();for(const item of cards)for(const root of [item.painted,item.model])if(root)WinterWorld.prototype.disposeModel(root);
  ground.geometry.dispose();art.dispose();environment.dispose();renderer.dispose();
},{once:true});
