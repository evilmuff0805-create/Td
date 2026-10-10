import * as T from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { HEROES } from '../data/heroes.js';
import { ENEMIES } from '../data/enemies.js';
import { MAT,animateCharacter } from './models.js';
import { combatantModel } from './combat-models.js';
import { onPaintedSurface } from './painted-surfaces.js';
const renderer=new T.WebGLRenderer({canvas:document.getElementById('roster-canvas'),antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;
const room=new RoomEnvironment(),pmrem=new T.PMREMGenerator(renderer),env=pmrem.fromScene(room,.04);room.dispose();pmrem.dispose();
const scene=new T.Scene();scene.environment=env.texture;scene.environmentIntensity=.2;scene.add(new T.HemisphereLight('#d8e6ed','#6a675a',1.5));const sun=new T.DirectionalLight('#ffe6c0',2.3);sun.position.set(-3,6,5);scene.add(sun);const fill=new T.DirectionalLight('#92bdd7',.8);fill.position.set(5,2,-3);scene.add(fill);
const ground=new T.Mesh(new T.CylinderGeometry(.83,.88,.07,36),MAT.stoneDark);ground.position.y=-.04;scene.add(ground);
const camera=new T.OrthographicCamera(-1.3,1.3,1.3,-1.3,.1,30);camera.position.set(3,2.2,5);camera.lookAt(0,.85,0);
const allies={militia:'의병',guard:'수어청 군사',elite:'수어청 정예',monk:'의승군',wall:'행주 목책',turtle:'거북선',courier:'보급 수레'};
const entries=[...Object.entries(HEROES).map(([id,def])=>({id,def,group:'hero'})),...Object.entries(ENEMIES).map(([id,def])=>({id,def,group:def.tier===4?'boss':'enemy'})),...Object.entries(allies).map(([id,name])=>({id,def:{name,title:'아군 · 소환 병기'},group:'ally'}))],cards=[];
for(const {id,def,group} of entries) {
  const card=document.createElement('article');card.dataset.group=group;card.innerHTML=`<div class="viewport"></div><div class="info"><b>${def.name}</b><p>${def.title??def.role??'왜군 병력'}</p></div>`;document.getElementById('roster-review').append(card);
  const root=combatantModel(id);root.rotation.y=.18;animateCharacter(root,.2,false,0,0);cards.push({card,root,viewport:card.querySelector('.viewport')});
}
function draw(){const width=innerWidth,height=innerHeight;renderer.setSize(width,height,false);renderer.setScissorTest(false);renderer.setClearColor(0,0);renderer.clear();renderer.setScissorTest(true);
  for(const {card,root,viewport} of cards){card.hidden=document.getElementById('roster-filter').value!=='all'&&document.getElementById('roster-filter').value!==card.dataset.group;if(card.hidden)continue;const r=viewport.getBoundingClientRect();if(r.bottom<0||r.top>height)continue;
    const half=1.35;camera.left=-half*r.width/r.height;camera.right=half*r.width/r.height;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();renderer.setViewport(r.left,height-r.bottom,r.width,r.height);renderer.setScissor(r.left,height-r.bottom,r.width,r.height);scene.add(root);renderer.render(scene,camera);scene.remove(root);
  }document.body.dataset.renderer='webgl2';}
document.getElementById('roster-filter').onchange=draw;addEventListener('resize',draw);addEventListener('scroll',draw,{passive:true});onPaintedSurface(draw);draw();
