import * as T from 'three';
import { HEROES,HERO_ORDER } from '../data/heroes.js';
import { SKINS } from '../data/skins.js';
import { FixedBattleArt } from './fixed-art.js';
import { SEASONS } from './seasons.js';
import { previewMotion } from './sprite-motion.js';

const byId=id=>document.getElementById(id);
for(const id of HERO_ORDER)byId('hero').add(new Option(HEROES[id].name,id));
function selection(){
  const ids=byId('hero').value==='all'?HERO_ORDER:[byId('hero').value],wardrobe=byId('wardrobe').value,looks=[];
  for(const heroId of ids)for(const [i,skin]of [null,...SKINS[heroId]].entries()){
    if(wardrobe!=='all'&&i!==({base:0,alternate:1,gold:2}[wardrobe]))continue;
    looks.push({heroId,skin:skin?.id??null,name:skin?.name??'기본 의상',desc:skin?.desc??HEROES[heroId].title});
  }
  return looks;
}
const renderer=new T.WebGLRenderer({canvas:byId('pose-canvas'),antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;
const camera=new T.OrthographicCamera(-1,1,1,-1,.1,100);camera.position.set(17,26,26);camera.lookAt(0,.75,0);camera.updateMatrixWorld();
const world={camera,renderer,theme:{id:'winter',...SEASONS.winter},heroLooks:selection()},art=new FixedBattleArt(world),scene=new T.Scene();
const ground=new T.Mesh(new T.CircleGeometry(.6,48),new T.MeshBasicMaterial({color:'#20394c',transparent:true,opacity:.5,depthWrite:false}));ground.rotation.x=-Math.PI/2;ground.position.y=.005;scene.add(ground);
const horizontalRight=new T.Vector3(1,0,0).applyQuaternion(camera.quaternion);horizontalRight.y=0;horizontalRight.normalize();
const horizontalUp=new T.Vector3(0,1,0).applyQuaternion(camera.quaternion);horizontalUp.y=0;horizontalUp.normalize();
function facingYaw(col){const d=horizontalRight.clone().multiplyScalar(col<2?1:-1).addScaledVector(horizontalUp,col===1||col===2?1:-1);return Math.atan2(d.x,d.z);}
let cards=[],playing=false,elapsed=0,last=0,request=0,width=0,height=0,frames=0,generation=0;
function clearCards(){
  for(const {root}of cards){const owned=new Set();root.traverse(o=>{if(o.material?.userData.owned3d)owned.add(o.material);if(o.geometry?.userData.owned3d)owned.add(o.geometry);});for(const item of owned)item.dispose();scene.remove(root);}
  cards=[];byId('pose-review').replaceChildren();
}
function populate(){
  for(const look of selection()){
    const card=document.createElement('article');card.dataset.hero=look.heroId;card.dataset.skin=look.skin??'base';
    const viewport=document.createElement('div');viewport.className='viewport';const info=document.createElement('div');info.className='info';
    const title=document.createElement('b');title.textContent=HEROES[look.heroId].name+' · '+look.name;
    const desc=document.createElement('p');desc.textContent=look.desc;info.append(title,desc);card.append(viewport,info);byId('pose-review').append(card);
    const root=new T.Group();root.userData.phase=0;cards.push({root,card,viewport,entity:{heroId:look.heroId,skin:look.skin,owner:0,dead:false}});
  }
  byId('pose-review').dataset.count=String(cards.length);
}
function draw(now=0){
  const frameDt=playing&&last?Math.min(.05,(now-last)/1000):0;elapsed+=frameDt;last=now;
  if(width!==innerWidth||height!==innerHeight){width=innerWidth;height=innerHeight;renderer.setSize(width,height,false);}
  const motion=byId('motion').value,season=byId('season').value,dir=byId('direction').value,stride=byId('stride').value;
  world.theme={id:season,...SEASONS[season]};
  const col=dir==='cycle'?Math.floor(elapsed/1.5)%4:Number(dir),time=motion==='walk'&&stride!=='auto'?(stride==='a'?0:1/5.5):elapsed;
  renderer.setScissorTest(false);renderer.setClearColor(0,0);renderer.clear();renderer.setScissorTest(true);
  let visible=0;
  for(const {root,card,viewport,entity}of cards){
    if(art.ready&&!art.loading){
      art.attachUnit(root,entity,true,false);root.rotation.y=facingYaw(col);const playback=(playing||elapsed>0)&&(motion!=='walk'||stride==='auto')?previewMotion(motion,elapsed,frameDt,entity.heroId??entity.kind??entity.type):null;
      art.updateUnit(root,entity,motion==='walk',playback?.attack??(motion==='attack'?.2:0),time,playback);
      const d=root.userData.fixedImage;card.dataset.pose=String(d?.poseIndex??'static');card.dataset.gait=String(d?.motionPhase??0);card.dataset.facing=String(d?.facing??'static');card.dataset.directional=String(!!d?.directional);
    }
    const r=viewport.getBoundingClientRect();if(r.width<=0||r.height<=0||r.bottom<0||r.top>height)continue;
    const half=Math.max(1.2,1.35*r.height/r.width);camera.left=-half*r.width/r.height;camera.right=half*r.width/r.height;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();
    renderer.setViewport(r.left,height-r.bottom,r.width,r.height);renderer.setScissor(r.left,height-r.bottom,r.width,r.height);scene.add(root);renderer.render(scene,camera);scene.remove(root);visible++;
  }
  Object.assign(document.body.dataset,{frames:String(++frames),motion,playing:String(playing),hero:byId('hero').value,wardrobe:byId('wardrobe').value,actorCount:String(cards.length),facing:String(col),season,poseStatus:renderer.domElement.dataset.skinPoseStatus??'loading',loading:String(art.loading),textures:String(renderer.info.memory.textures),geometries:String(renderer.info.memory.geometries)});
  byId('stride').disabled=motion!=='walk';
  byId('status').value=art.loading?'의상 그림을 불러오는 중…':art.ready?visible+'개 의상 표시 · 특수 의상 '+renderer.domElement.dataset.skinPoseCount+'종 준비 · '+(playing?'동작 재생 중':'정지 화면'):'그림을 불러오지 못했습니다. 전장에서는 대체 그림으로 플레이할 수 있습니다.';
  if(playing)request=requestAnimationFrame(draw);
}
function refresh(){if(!playing)draw();}
for(const id of ['hero','wardrobe'])byId(id).addEventListener('change',()=>{const ticket=++generation;clearCards();populate();elapsed=last=0;art.prepareHeroLooks(selection()).then(()=>{if(ticket===generation)refresh();});refresh();});
for(const id of ['direction','motion','stride','season'])byId(id).addEventListener('change',()=>{elapsed=last=0;refresh();});
byId('play').onclick=()=>{playing=!playing;byId('play').textContent=playing?'동작 멈춤':'동작 재생';byId('play').setAttribute('aria-pressed',String(playing));last=0;if(playing)request=requestAnimationFrame(draw);else{cancelAnimationFrame(request);draw();}};
addEventListener('resize',refresh);addEventListener('scroll',refresh,{passive:true});
addEventListener('pagehide',event=>{if(event.persisted)return;generation++;cancelAnimationFrame(request);clearCards();art.dispose();ground.geometry.dispose();ground.material.dispose();renderer.dispose();});
populate();art.promise.then(refresh);draw();
