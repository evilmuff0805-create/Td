import * as T from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { STAGE_BY_ID } from '../data/stages.js';
import { newBattleGame } from './scenario.js';
import { seasonFor } from './seasons.js';
import { buildBattlefield,seasonalize } from './environment.js';
import { MAT,towerModel,box,cone,cylinder,bakeStatic } from './models.js';
import { combatantModel } from './combat-models.js';
import { onPaintedSurface } from './painted-surfaces.js';

const renderer=new T.WebGLRenderer({canvas:document.getElementById('season-canvas'),antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFShadowMap;
const room=new RoomEnvironment(),pmrem=new T.PMREMGenerator(renderer),environment=pmrem.fromScene(room,.04);room.dispose();pmrem.dispose();
const cards=[];
for(const [id,tag] of [['s6','봄 · 꽃잎과 성곽'],['s10','여름 · 녹음과 강'],['s12','가을 · 단풍과 황혼'],['s13','겨울 · 눈 덮인 반격']]) {
  const stage=STAGE_BY_ID[id],theme=seasonFor(stage),card=document.createElement('article');
  card.innerHTML=`<div class="season-viewport"></div><div class="season-info"><div><small>${theme.english}</small><h2>${tag}</h2><p>${stage.name} · ${stage.paths.length}개 진입로 · ${stage.waves.length}파도</p></div><a href="../3d.html?stage=${id}">이 전장으로 →</a></div>`;document.getElementById('season-review').append(card);
  const scene=new T.Scene();scene.background=new T.Color(theme.sky);scene.environment=environment.texture;scene.environmentIntensity=.14;
  scene.add(new T.HemisphereLight(theme.hemi,theme.bounce,theme.snow?.9:1.2));
  const sun=new T.DirectionalLight(theme.sun,theme.sunPower);sun.position.set(-7,23,-8);sun.target.position.set(12,0,7);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-23,right:23,top:20,bottom:-20,near:.5,far:70});sun.shadow.normalBias=.03;scene.add(sun,sun.target);
  const fill=new T.DirectionalLight(theme.fill,theme.snow?.35:.5);fill.position.set(30,8,20);scene.add(fill);
  const field=buildBattlefield(stage,theme);scene.add(field.root,field.water);
  for(const [x,z,y] of field.lamps) {
    const lamp=new T.Group();cylinder(lamp,MAT.woodDark,x,y/2,z,.025,y);box(lamp,MAT.window,x,y+.1,z,.12,.21,.12);cone(lamp,MAT.roof,x,y+.24,z,.17,.12);bakeStatic(lamp);scene.add(lamp);
    const light=new T.PointLight('#ffb36b',theme.snow?8.5:3,4.2,2);light.position.set(x,y+.2,z);scene.add(light);
  }
  const game=newBattleGame({stageId:id});
  for(const t of game.towers){const root=seasonalize(towerModel(t.type,2),theme);root.position.set(t.cx,.03,t.cy);scene.add(root);}
  for(const h of game.heroes){const root=combatantModel(h.heroId);root.position.set(h.x,.035,h.y);root.rotation.y=Math.PI/5;scene.add(root);}
  const camera=new T.OrthographicCamera(-20,20,12,-12,.1,150);camera.position.set(29,26,33);camera.lookAt(12,.1,7);
  cards.push({scene,camera,theme,viewport:card.querySelector('.season-viewport')});
}
function draw() {
  const width=innerWidth,height=innerHeight;renderer.setSize(width,height,false);renderer.setScissorTest(false);renderer.setClearColor(0,0);renderer.clear();renderer.setScissorTest(true);
  for(const {scene,camera,theme,viewport} of cards) {
    const r=viewport.getBoundingClientRect();if(r.bottom<0||r.top>height)continue;
    const half=10.7;camera.left=-half*r.width/r.height;camera.right=half*r.width/r.height;camera.top=half;camera.bottom=-half;camera.zoom=1;camera.updateProjectionMatrix();
    renderer.toneMappingExposure=theme.exposure;renderer.setViewport(r.left,height-r.bottom,r.width,r.height);renderer.setScissor(r.left,height-r.bottom,r.width,r.height);renderer.render(scene,camera);
  }
  document.body.dataset.renderer='webgl2';
}
addEventListener('resize',draw);addEventListener('scroll',draw,{passive:true});onPaintedSurface(draw);draw();
