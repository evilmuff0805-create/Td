import * as T from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { ENEMIES } from '../data/enemies.js';
import { ENEMY_FORMS } from './enemy-design.js';
import { MAT,animateCharacter } from './models.js';
import { combatantModel } from './combat-models.js';
import { onPaintedSurface } from './painted-surfaces.js';

const byId=id=>document.getElementById(id),renderer=new T.WebGLRenderer({canvas:byId('enemy-canvas'),antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.08;
const room=new RoomEnvironment(),pmrem=new T.PMREMGenerator(renderer),env=pmrem.fromScene(room,.04);room.dispose();pmrem.dispose();
const scene=new T.Scene();scene.environment=env.texture;scene.environmentIntensity=.32;scene.add(new T.HemisphereLight('#d8e6ed','#6a675a',1.35));
const sun=new T.DirectionalLight('#ffe6c0',2.2);sun.position.set(-3,6,5);scene.add(sun);
const fill=new T.DirectionalLight('#92bdd7',.8);fill.position.set(5,2,-3);scene.add(fill);
const ground=new T.Mesh(new T.CylinderGeometry(.83,.88,.07,36),MAT.stoneDark);ground.position.y=-.04;scene.add(ground);
const silhouette=new T.MeshBasicMaterial({color:'#d8d4c6',side:T.DoubleSide}),camera=new T.OrthographicCamera(-1,1,1,-1,.1,30),cards=[];
for(const [kind,def]of Object.entries(ENEMIES)) {
  const card=document.createElement('article');card.dataset.enemy=kind;card.dataset.group=def.tier===4?'boss':'enemy';
  card.innerHTML=`<div class="viewport"></div><div class="info"><b>${def.name}</b><p>${ENEMY_FORMS[kind].detail}</p></div>`;byId('enemy-review').append(card);
  cards.push({kind,card,root:combatantModel(kind),viewport:card.querySelector('.viewport')});
}
let playing=false,elapsed=.3,last=0,frame=0,request=0;
function draw(now=0) {
  if(playing&&last)elapsed+=Math.min(.05,(now-last)/1000);last=now;
  const width=innerWidth,height=innerHeight,face=byId('focus').value==='face',motion=byId('motion').value,angle=byId('angle').value,group=byId('group').value;
  const cycle=elapsed%1.3,attack=motion==='attack'?(playing?Math.max(0,.25-cycle):.25*(1-Number(byId('scrub').value)/100)):0;
  byId('scrub-label').hidden=motion!=='attack';byId('scrub').disabled=playing;byId('progress').value=`${playing?Math.min(100,Math.round(cycle/.25*100)):byId('scrub').value}%`;
  renderer.setSize(width,height,false);renderer.setScissorTest(false);renderer.setClearColor(0,0);renderer.clear();renderer.setScissorTest(true);
  scene.overrideMaterial=byId('appearance').value==='silhouette'?silhouette:null;ground.visible=!face&&!scene.overrideMaterial;
  let visible=0,triangles=0,drawCalls=0;
  for(const {card,root,viewport}of cards) {
    card.hidden=group!=='all'&&card.dataset.group!==group;if(card.hidden)continue;
    const r=viewport.getBoundingClientRect();if(r.bottom<0||r.top>height)continue;
    root.rotation.y=angle==='turn'?elapsed*.45:angle==='front'?0:angle==='back'?Math.PI:.36;
    animateCharacter(root,elapsed,motion==='walk',attack,1/60);
    const isFace=face&&root.userData.head,half=isFace?.53:card.dataset.group==='boss'?1.95:1.55;
    const focus=isFace?root.userData.head.getWorldPosition(new T.Vector3()).add(new T.Vector3(0,.03,.04)):new T.Vector3(0,card.dataset.group==='boss'?1.72:1.27,0);
    camera.position.copy(focus).add(new T.Vector3(0,isFace?.1:.75,5));camera.lookAt(focus);
    camera.left=-half*r.width/r.height;camera.right=half*r.width/r.height;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();
    renderer.setViewport(r.left,height-r.bottom,r.width,r.height);renderer.setScissor(r.left,height-r.bottom,r.width,r.height);
    scene.add(root);renderer.render(scene,camera);triangles+=renderer.info.render.triangles;drawCalls+=renderer.info.render.calls;scene.remove(root);visible++;
  }
  Object.assign(document.body.dataset,{frames:++frame,motion,playing:String(playing),modelCount:cards.length,visibleCount:visible,renderer:'webgl2',appearance:byId('appearance').value});
  byId('status').value=`표시 중 ${visible}종 · ${triangles.toLocaleString('ko-KR')} 삼각형 · ${drawCalls}회 그리기 · ${playing?'재생 중':'정지 화면'}`;
  if(playing)request=requestAnimationFrame(draw);
}
function refresh(){if(!playing)draw();}
for(const id of ['group','focus','angle','appearance','motion'])byId(id).addEventListener('change',refresh);
byId('scrub').addEventListener('input',refresh);
byId('play').onclick=()=>{playing=!playing;byId('play').textContent=playing?'동작 멈춤':'동작 재생';byId('play').setAttribute('aria-pressed',String(playing));last=0;if(playing)request=requestAnimationFrame(draw);else{cancelAnimationFrame(request);draw();}};
addEventListener('resize',refresh);addEventListener('scroll',refresh,{passive:true});onPaintedSurface(refresh);draw();
