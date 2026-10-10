import * as T from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { STAGE_BY_ID } from '../data/stages.js';
import { newBattleGame } from './scenario.js';
import { seasonFor } from './seasons.js';
import { buildBattlefield,seasonalize } from './environment.js';
import { MAT,box,cone,cylinder,bakeStatic,towerModel } from './models.js';
import { combatantModel } from './combat-models.js';
import { onPaintedSurface,paintedSurfaceStatus } from './painted-surfaces.js';
import { FixedBattleArt } from './fixed-art.js';
import { WinterWorld } from './world.js';

const canvas=document.getElementById('season-canvas'),renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFShadowMap;
const room=new RoomEnvironment(),pmrem=new T.PMREMGenerator(renderer),environment=pmrem.fromScene(room,.04);room.dispose();pmrem.dispose();
const cards=[];let destroyed=false;
for(const [id,tag]of [['s6','봄 · 꽃잎과 성곽'],['s10','여름 · 녹음과 강'],['s12','가을 · 단풍과 황혼'],['s13','겨울 · 눈 덮인 반격']]){
  const stage=STAGE_BY_ID[id],theme=seasonFor(stage),card=document.createElement('article');card.dataset.stage=id;card.dataset.season=theme.id;
  card.innerHTML=`<div class="season-viewport"></div><div class="season-info"><div><small>${theme.english}</small><h2>${tag}</h2><p>${stage.name} · ${stage.paths.length}개 진입로 · ${stage.waves.length}파도</p></div><a href="../3d.html?mute=1&stage=${id}">이 전장으로 →</a></div>`;document.getElementById('season-review').append(card);
  const scene=new T.Scene();scene.background=new T.Color(theme.sky);scene.environment=environment.texture;scene.environmentIntensity=theme.snow?.23:.28;
  scene.add(new T.HemisphereLight(theme.hemi,theme.bounce,theme.snow?.48:.64));
  const sun=new T.DirectionalLight(theme.sun,theme.sunPower);sun.position.set(2,20,22);sun.target.position.set(12,0,7);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-23,right:23,top:20,bottom:-20,near:.5,far:70});sun.shadow.normalBias=.03;sun.shadow.bias=-.00012;scene.add(sun,sun.target);
  const fill=new T.DirectionalLight(theme.fill,theme.snow?.25:.3);fill.position.set(30,8,20);scene.add(fill);
  const camera=new T.OrthographicCamera(-20,20,12,-12,.1,150);camera.position.set(29,26,33);camera.lookAt(12,.1,7);camera.updateMatrixWorld(true);
  // Separate art owners retain each season's tint while sharing immutable atlas
  // images through the normal cache and using a single WebGL renderer.
  const world={camera,renderer,theme,combatKinds:[]},art=new FixedBattleArt(world);
  const item={scene,camera,theme,art,card,viewport:card.querySelector('.season-viewport'),ready:false};cards.push(item);
  art.promise.then(()=>{
    if(destroyed)return;
    const field=buildBattlefield(stage,theme,art.ready?art:null);scene.add(field.root,field.water);item.field=field;
    for(const [x,z,y]of field.lamps){
      const lamp=new T.Group();cylinder(lamp,MAT.woodDark,x,y/2,z,.025,y);box(lamp,MAT.window,x,y+.1,z,.12,.21,.12);cone(lamp,MAT.roof,x,y+.24,z,.17,.12);seasonalize(lamp,theme);bakeStatic(lamp);scene.add(lamp);
      const light=new T.PointLight('#ffb36b',theme.snow?8.5:3,4.2,2);light.position.set(x,y+.2,z);scene.add(light);
    }
    const game=newBattleGame({stageId:id});
    for(const t of game.towers){const root=art.ready?new T.Group():seasonalize(towerModel(t.type,2),theme);root.position.set(t.cx,.03,t.cy);art.attachTower(root,t.type,2,null);scene.add(root);}
    for(const h of game.heroes){const root=art.ready?new T.Group():combatantModel(h.heroId);root.position.set(h.x,.035,h.y);root.rotation.y=Math.PI/5;art.attachUnit(root,h,true,false);art.updateUnit(root,h,false,0,0);scene.add(root);}
    card.dataset.roadTriangles=String(field.roads.triangles);card.dataset.roadLayers=theme.snow?'2':'1';card.dataset.landmarkHeight='1.2';card.dataset.art=art.ready?'painted':'fallback';card.dataset.seasonTreeArt=art.seasonTrees?'ready':'fallback';item.ready=true;draw();
  });
}
function draw(){
  if(destroyed)return;
  const width=innerWidth,height=innerHeight;renderer.setSize(width,height,false);renderer.setScissorTest(false);renderer.setClearColor(0,0);renderer.clear();renderer.setScissorTest(true);
  for(const {scene,camera,theme,viewport,ready}of cards){
    const r=viewport.getBoundingClientRect();if(!ready||r.bottom<0||r.top>height)continue;
    const aspect=r.width/r.height,half=Math.max(7.2,16/aspect);camera.left=-half*aspect;camera.right=half*aspect;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();
    renderer.toneMappingExposure=theme.exposure;renderer.setViewport(r.left,height-r.bottom,r.width,r.height);renderer.setScissor(r.left,height-r.bottom,r.width,r.height);renderer.render(scene,camera);
  }
  Object.assign(document.body.dataset,{renderer:'webgl2',loading:String(cards.some(c=>!c.ready)),terrain:'continuous',paintedReady:String(paintedSurfaceStatus().ready)});
  document.getElementById('status').textContent=cards.every(c=>c.ready)?'고정 시점 그림 전장 · 유산 높이 1.2칸 · 사계절의 연속 도로':'사계절의 전장 그림을 준비하는 중…';
}
addEventListener('resize',draw);addEventListener('scroll',draw,{passive:true});const unsubscribe=onPaintedSurface(draw);
addEventListener('pagehide',event=>{if(event.persisted)return;destroyed=true;unsubscribe();for(const {scene,art}of cards){WinterWorld.prototype.disposeModel(scene);scene.traverse(o=>{if(o.isLight)o.dispose?.();});art.dispose();}environment.dispose();renderer.dispose();});
draw();
