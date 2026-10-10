import * as T from 'three';
import { HEROES,HERO_ORDER } from '../data/heroes.js';
import { FixedBattleArt } from './fixed-art.js';
import { SEASONS } from './seasons.js';

const byId=id=>document.getElementById(id),renderer=new T.WebGLRenderer({canvas:byId('pose-canvas'),antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;
const camera=new T.OrthographicCamera(-1,1,1,-1,.1,50);camera.position.set(5,9,8);camera.lookAt(0,1,0);camera.updateMatrixWorld();
const world={camera,renderer,theme:{id:'winter',...SEASONS.winter}},art=new FixedBattleArt(world),scene=new T.Scene(),cards=[];
const ground=new T.Mesh(new T.CircleGeometry(.6,48),new T.MeshBasicMaterial({color:'#20394c',transparent:true,opacity:.5,depthWrite:false}));ground.rotation.x=-Math.PI/2;ground.position.y=.005;scene.add(ground);
const descriptions={yi:'남색 망토 · 긴 붉은 술 · 활과 화살통',sejong:'곤룡포 · 익선관 · 푸른 책',eulji:'녹색 갑주 · 청록 망토 · 깃부채',gang:'노장 · 보랏빛 망토 · 검과 방패',gwon:'중갑 · 붉은 깃 · 창과 방패',gwak:'검은 갓 · 붉은 도포 · 활',ahn:'검은 외투 · 한 손 권총',dangun:'백발 · 상아빛과 옥색 도포 · 천부인'};
for(const kind of HERO_ORDER){
  const card=document.createElement('article');card.dataset.hero=kind;card.innerHTML=`<div class="viewport"></div><div class="info"><b>${HEROES[kind].name}</b><p>${descriptions[kind]}</p></div>`;byId('pose-review').append(card);
  const root=new T.Group();root.userData.phase=0;
  cards.push({kind,root,card,viewport:card.querySelector('.viewport'),entity:{heroId:kind,owner:0,dead:false}});
}
const horizontalRight=new T.Vector3(1,0,0).applyQuaternion(camera.quaternion);horizontalRight.y=0;horizontalRight.normalize();
const horizontalUp=new T.Vector3(0,1,0).applyQuaternion(camera.quaternion);horizontalUp.y=0;horizontalUp.normalize();
function facingYaw(col){const direction=horizontalRight.clone().multiplyScalar(col<2?1:-1).addScaledVector(horizontalUp,col===1||col===2?1:-1);return Math.atan2(direction.x,direction.z);}
let playing=false,elapsed=0,last=0,request=0,width=0,height=0,frames=0;
function draw(now=0){
  if(playing&&last)elapsed+=Math.min(.05,(now-last)/1000);last=now;
  if(width!==innerWidth||height!==innerHeight){width=innerWidth;height=innerHeight;renderer.setSize(width,height,false);}
  const motion=byId('motion').value,season=byId('season').value,dir=byId('direction').value,stride=byId('stride').value,comparison=byId('comparison').value;
  byId('pose-review').dataset.comparison=comparison;
  world.theme={id:season,...SEASONS[season]};
  const col=dir==='cycle'?Math.floor(elapsed/1.5)%4:Number(dir),time=motion==='walk'&&stride!=='auto'?(stride==='a'?0:1/5.5):elapsed;
  renderer.setScissorTest(false);renderer.setClearColor(0,0);renderer.clear();renderer.setScissorTest(true);
  let visible=0;
  for(const {kind,root,card,viewport,entity}of cards){
    card.hidden=comparison==='yi'?kind!=='yi':comparison==='yi-gwon'&&kind!=='yi'&&kind!=='gwon';
    if(card.hidden)continue;
    if(art.ready){
      art.attachUnit(root,entity,true,false);root.rotation.y=facingYaw(col);art.updateUnit(root,entity,motion==='walk',motion==='attack'?.2:0,time);
      const d=root.userData.fixedImage;card.dataset.pose=String(d.poseIndex);card.dataset.facing=String(d.facing);card.dataset.directional=String(d.directional);
    }
    const r=viewport.getBoundingClientRect();if(r.width<=0||r.height<=0||r.bottom<0||r.top>height)continue;
    const half=Math.max(1.3,1.32*r.height/r.width);camera.left=-half*r.width/r.height;camera.right=half*r.width/r.height;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();
    renderer.setViewport(r.left,height-r.bottom,r.width,r.height);renderer.setScissor(r.left,height-r.bottom,r.width,r.height);
    scene.add(root);renderer.render(scene,camera);scene.remove(root);visible++;
  }
  Object.assign(document.body.dataset,{frames:String(++frames),motion,playing:String(playing),heroCount:String(cards.length),comparison,facing:String(col),season,poseStatus:renderer.domElement.dataset.heroPoseStatus??'loading',textures:String(renderer.info.memory.textures),geometries:String(renderer.info.memory.geometries)});
  byId('stride').disabled=motion!=='walk';
  byId('status').value=art.ready?`${visible}명 표시 중 · ${renderer.domElement.dataset.heroPoseCount}명 방향별 그림 준비 · ${playing?'동작 재생 중':'정지 화면'}`:art.failed?'그림을 불러오지 못했습니다. 전장에서 대체 모델로 플레이할 수 있습니다.':'그림을 불러오는 중…';
  if(playing)request=requestAnimationFrame(draw);
}
function refresh(){if(!playing)draw();}
for(const id of ['direction','motion','stride','season','comparison'])byId(id).addEventListener('change',()=>{elapsed=0;last=0;refresh();});
byId('play').onclick=()=>{playing=!playing;byId('play').textContent=playing?'동작 멈춤':'동작 재생';byId('play').setAttribute('aria-pressed',String(playing));last=0;if(playing)request=requestAnimationFrame(draw);else{cancelAnimationFrame(request);draw();}};
addEventListener('resize',refresh);addEventListener('scroll',refresh,{passive:true});
addEventListener('pagehide',event=>{if(event.persisted)return;cancelAnimationFrame(request);for(const {root}of cards)root.traverse(o=>{if(o.material?.userData.owned3d)o.material.dispose();});art.dispose();ground.geometry.dispose();ground.material.dispose();renderer.dispose();});
art.promise.then(refresh);draw();
