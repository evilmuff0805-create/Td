import * as T from 'three';
import { ENEMIES } from '../data/enemies.js';
import { FixedBattleArt } from './fixed-art.js';
import { COMBAT_POSE_ART } from './combat-pose-data.js';
import { SEASONS } from './seasons.js';
import { previewMotion } from './sprite-motion.js';

const byId=id=>document.getElementById(id),renderer=new T.WebGLRenderer({canvas:byId('pose-canvas'),antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;
const camera=new T.OrthographicCamera(-1,1,1,-1,.1,100);camera.position.set(17,26,26);camera.lookAt(0,.75,0);camera.updateMatrixWorld();
const allEnemies=Object.keys(ENEMIES),groups={troops:allEnemies.filter(id=>!ENEMIES[id].boss),'boss-a':allEnemies.filter(id=>ENEMIES[id].boss).slice(0,6),'boss-b':allEnemies.filter(id=>ENEMIES[id].boss).slice(6),allies:['militia','guard','elite','monk','courier','turtle']};
const allyNames={militia:'의병',guard:'수비병',elite:'정예 수비병',monk:'승병',courier:'전령',turtle:'거북선'};
const descriptions={militia:'흰 두건과 저고리 · 긴 창',guard:'남색 갑주 · 붉은 띠 · 창',elite:'붉은 갑주 · 술 장식 · 장병기와 방패',monk:'회색 장삼 · 목염주 · 목봉',courier:'푸른 저고리 · 붉은 전령 깃발 · 갈색 말',turtle:'목재 선체 · 철갑 지붕 · 용머리'};
function roster(group){return group==='allies'?{enemy:[],ally:groups[group]}:{enemy:groups[group],ally:[]};}
const world={camera,renderer,theme:{id:'winter',...SEASONS.winter},combatKinds:roster('troops')},art=new FixedBattleArt(world),scene=new T.Scene();
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
  const group=byId('group').value,ally=group==='allies';byId('actor').replaceChildren(new Option('이 병력 전체','all'));
  for(const kind of groups[group]){
    const name=ally?allyNames[kind]:ENEMIES[kind].name,card=document.createElement('article');card.dataset.kind=kind;
    const viewport=document.createElement('div');viewport.className='viewport';const info=document.createElement('div');info.className='info';const title=document.createElement('b');title.textContent=name;const desc=document.createElement('p');desc.textContent=ally?descriptions[kind]:ENEMIES[kind].title;info.append(title,desc);card.append(viewport,info);byId('pose-review').append(card);
    const root=new T.Group();root.userData.phase=0;
    cards.push({kind,root,card,viewport,ally,entity:ally?{kind}:{type:kind}});byId('actor').add(new Option(name,kind));
  }
}
function draw(now=0){
  const frameDt=playing&&last?Math.min(.05,(now-last)/1000):0;elapsed+=frameDt;last=now;
  if(width!==innerWidth||height!==innerHeight){width=innerWidth;height=innerHeight;renderer.setSize(width,height,false);}
  const motion=byId('motion').value,season=byId('season').value,dir=byId('direction').value,stride=byId('stride').value,focus=byId('actor').value,group=byId('group').value;
  byId('pose-review').dataset.focus=focus==='all'?'group':'single';world.theme={id:season,...SEASONS[season]};
  const col=dir==='cycle'?Math.floor(elapsed/1.5)%4:Number(dir),time=motion==='walk'&&stride!=='auto'?(stride==='a'?0:1/5.5):elapsed;
  // Apply visibility before measuring any cards, so the first frame has the new grid.
  for(const {kind,card}of cards)card.hidden=focus!=='all'&&kind!==focus;
  renderer.setScissorTest(false);renderer.setClearColor(0,0);renderer.clear();renderer.setScissorTest(true);
  let visible=0;
  for(const {root,card,viewport,entity,ally}of cards){
    if(card.hidden)continue;
    if(art.ready&&!art.loading){
      art.attachUnit(root,entity,false,ally);root.rotation.y=facingYaw(col);const playback=(playing||elapsed>0)&&(motion!=='walk'||stride==='auto')?previewMotion(motion,elapsed,frameDt,entity.heroId??entity.kind??entity.type):null;
      art.updateUnit(root,entity,motion==='walk',playback?.attack??(motion==='attack'?.2:0),time,playback);
      const d=root.userData.fixedImage;card.dataset.pose=String(d?.poseIndex??'static');card.dataset.gait=String(d?.motionPhase??0);card.dataset.facing=String(d?.facing??'static');card.dataset.directional=String(!!d?.directional);
    }
    const r=viewport.getBoundingClientRect();if(r.width<=0||r.height<=0||r.bottom<0||r.top>height)continue;
    const half=Math.max(1.2,1.35*r.height/r.width);camera.left=-half*r.width/r.height;camera.right=half*r.width/r.height;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();
    renderer.setViewport(r.left,height-r.bottom,r.width,r.height);renderer.setScissor(r.left,height-r.bottom,r.width,r.height);scene.add(root);renderer.render(scene,camera);scene.remove(root);visible++;
  }
  Object.assign(document.body.dataset,{frames:String(++frames),motion,playing:String(playing),totalActors:String(Object.keys(COMBAT_POSE_ART.enemy).length+Object.keys(COMBAT_POSE_ART.ally).length),actorCount:String(cards.length),group,focus,facing:String(col),season,poseStatus:renderer.domElement.dataset.combatPoseStatus??'loading',loading:String(art.loading),textures:String(renderer.info.memory.textures),geometries:String(renderer.info.memory.geometries)});
  byId('stride').disabled=motion!=='walk';
  byId('status').value=art.loading?'병력 그림을 불러오는 중…':art.ready?`${visible}종 표시 중 · 이 병력 ${renderer.domElement.dataset.combatPoseCount}/${cards.length}종 준비 · ${playing?'동작 재생 중':'정지 화면'}`:'그림을 불러오지 못했습니다. 전장에서 대체 모델로 플레이할 수 있습니다.';
  if(playing)request=requestAnimationFrame(draw);
}
function refresh(){if(!playing)draw();}
byId('group').addEventListener('change',()=>{const ticket=++generation;clearCards();populate();elapsed=last=0;art.prepareCombatArt(null,roster(byId('group').value)).then(()=>{if(ticket===generation)refresh();});refresh();});
for(const id of ['actor','direction','motion','stride','season'])byId(id).addEventListener('change',()=>{elapsed=last=0;refresh();});
byId('play').onclick=()=>{playing=!playing;byId('play').textContent=playing?'동작 멈춤':'동작 재생';byId('play').setAttribute('aria-pressed',String(playing));last=0;if(playing)request=requestAnimationFrame(draw);else{cancelAnimationFrame(request);draw();}};
addEventListener('resize',refresh);addEventListener('scroll',refresh,{passive:true});
addEventListener('pagehide',event=>{if(event.persisted)return;generation++;cancelAnimationFrame(request);clearCards();art.dispose();ground.geometry.dispose();ground.material.dispose();renderer.dispose();});
populate();art.promise.then(refresh);draw();
