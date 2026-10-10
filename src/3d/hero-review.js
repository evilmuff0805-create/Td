import * as T from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { HEROES } from '../data/heroes.js';
import { MAT,animateCharacter } from './models.js';
import { combatantModel } from './combat-models.js';
import { onPaintedSurface } from './painted-surfaces.js';
import { SKINS } from '../data/skins.js';

const byId=id=>document.getElementById(id),renderer=new T.WebGLRenderer({canvas:byId('hero-canvas'),antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.08;
const room=new RoomEnvironment(),pmrem=new T.PMREMGenerator(renderer),env=pmrem.fromScene(room,.04);room.dispose();pmrem.dispose();
const scene=new T.Scene();scene.environment=env.texture;scene.environmentIntensity=.32;const hemi=new T.HemisphereLight('#d8e6ed','#6a675a',1.35);scene.add(hemi);
const sun=new T.DirectionalLight('#ffe6c0',2.2);sun.position.set(-3,6,5);scene.add(sun);
const fill=new T.DirectionalLight('#92bdd7',.8);fill.position.set(5,2,-3);scene.add(fill);
const ground=new T.Mesh(new T.CylinderGeometry(.83,.88,.07,36),MAT.stoneDark);ground.position.y=-.04;scene.add(ground);
const camera=new T.OrthographicCamera(-1,1,1,-1,.1,30),cards=[];
const descriptions={yi:'날렵한 갑옷 · 조선 투구 · 안정된 활 자세',sejong:'둥근 얼굴 · 익선관 · 펼친 책',eulji:'긴 얼굴 · 날개 장식 투구 · 지휘 지팡이',gang:'노장 얼굴 · 낮은 투구 · 검과 방패',gwon:'넓은 체형 · 목재 방패 · 무거운 수비 자세',gwak:'가벼운 체형 · 상투와 홍건 · 빠른 걸음',ahn:'가르마 머리 · 긴 외투 · 한 손 권총',dangun:'긴 백발 · 옥 관식 · 천부인 지팡이'};
for(const [kind,def]of Object.entries(HEROES)) {
  const card=document.createElement('article');card.dataset.hero=kind;card.innerHTML=`<div class="viewport"></div><div class="info"><b>${def.name}</b><p>${descriptions[kind]}</p></div>`;byId('hero-review').append(card);
  const root=combatantModel(kind);cards.push({kind,root,viewport:card.querySelector('.viewport')});
}
function changeOutfit() {
  const mode=byId('outfit').value;
  for(const card of cards) {
    const geometries=new Set(),materials=new Set();card.root.traverse(o=>{if(o.geometry?.userData.owned3d)geometries.add(o.geometry);if(o.material?.userData.owned3d)materials.add(o.material);});
    if(card.root.userData.cape)geometries.add(card.root.userData.cape.geometry);
    for(const geo of geometries)geo.dispose();for(const mat of materials)mat.dispose();
    const skin=mode==='base'?null:SKINS[card.kind].find(s=>!!s.gold===(mode==='gold'));
    card.root=combatantModel(card.kind,skin?.id);card.viewport.closest('article').dataset.skin=skin?.id??'base';
  }
  refresh();
}
function changeLight() {
  const light=byId('lighting').value;
  sun.color.set(light==='warm'?'#ffc78e':light==='cool'?'#b8d4fa':'#ffe6c0');
  fill.color.set(light==='warm'?'#bfc8cc':light==='cool'?'#819ec9':'#92bdd7');
  hemi.color.set(light==='warm'?'#eddfca':light==='cool'?'#bacfe5':'#d8e6ed');refresh();
}
let playing=false,elapsed=.3,last=0,frame=0,request=0;
function draw(now=0) {
  if(playing&&last)elapsed+=Math.min(.05,(now-last)/1000);last=now;
  const width=innerWidth,height=innerHeight,face=byId('focus').value==='face',motion=byId('motion').value,angle=byId('angle').value;
  const cycle=elapsed%1.3,attack=motion==='attack'?(playing?Math.max(0,.25-cycle):.25*(1-Number(byId('scrub').value)/100)):0;
  byId('scrub-label').hidden=motion!=='attack';byId('scrub').disabled=playing;byId('progress').value=`${playing?Math.min(100,Math.round(cycle/.25*100)):byId('scrub').value}%`;
  renderer.setSize(width,height,false);renderer.setScissorTest(false);renderer.setClearColor(0,0);renderer.clear();renderer.setScissorTest(true);ground.visible=!face;
  let visible=0,triangles=0;
  for(const {root,viewport}of cards) {
    const r=viewport.getBoundingClientRect();if(r.bottom<0||r.top>height)continue;
    root.rotation.y=angle==='turn'?elapsed*.45:angle==='front'?0:angle==='back'?Math.PI:.36;
    animateCharacter(root,elapsed,motion==='walk',attack,1/60);
    const focus=face?root.userData.head.getWorldPosition(new T.Vector3()).add(new T.Vector3(0,.02,.035)):new T.Vector3(0,1.36,0),half=face?.48:1.52;
    camera.position.copy(focus).add(new T.Vector3(0,face?.1:.85,5));camera.lookAt(focus);
    camera.left=-half*r.width/r.height;camera.right=half*r.width/r.height;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();
    renderer.setViewport(r.left,height-r.bottom,r.width,r.height);renderer.setScissor(r.left,height-r.bottom,r.width,r.height);
    scene.add(root);renderer.render(scene,camera);triangles+=renderer.info.render.triangles;scene.remove(root);visible++;
  }
  document.body.dataset.frames=++frame;document.body.dataset.motion=motion;document.body.dataset.playing=String(playing);document.body.dataset.heroCount=cards.length;document.body.dataset.renderer='webgl2';document.body.dataset.outfit=byId('outfit').value;document.body.dataset.lighting=byId('lighting').value;
  byId('status').value=`표시 중 ${visible}명 · ${triangles.toLocaleString('ko-KR')} 삼각형 · ${playing?'재생 중':'정지 화면'}`;
  document.body.dataset.textures=renderer.info.memory.textures;document.body.dataset.geometries=renderer.info.memory.geometries;document.body.dataset.programs=renderer.info.programs.length;
  if(playing)request=requestAnimationFrame(draw);
}
function refresh(){if(!playing)draw();}
for(const id of ['focus','angle','motion'])byId(id).addEventListener('change',refresh);
byId('outfit').addEventListener('change',changeOutfit);byId('lighting').addEventListener('change',changeLight);
byId('scrub').addEventListener('input',refresh);
byId('play').onclick=()=>{playing=!playing;byId('play').textContent=playing?'동작 멈춤':'동작 재생';byId('play').setAttribute('aria-pressed',String(playing));last=0;if(playing)request=requestAnimationFrame(draw);else{cancelAnimationFrame(request);draw();}};
addEventListener('resize',refresh);addEventListener('scroll',refresh,{passive:true});onPaintedSurface(refresh);draw();
