import * as T from 'three';
import {FixedBattleArt} from './fixed-art.js';
import {SEASONS} from './seasons.js';
import {motionSample,MOTION_SAMPLES,MOTION_SAMPLE_DURATION} from './motion-samples.js';

const $=id=>document.getElementById(id),renderer=new T.WebGLRenderer({canvas:$('motion-canvas'),antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;
const camera=new T.OrthographicCamera(-1,1,1,-1,.1,100);camera.position.set(17,26,26);camera.lookAt(0,1.05,0);camera.updateMatrixWorld();
const groundRight=new T.Vector3(1,0,0).applyQuaternion(camera.quaternion).setY(0).normalize(),groundUp=new T.Vector3(0,1,0).applyQuaternion(camera.quaternion).setY(0).normalize();
const world={camera,renderer,theme:{id:'winter',...SEASONS.winter},heroLooks:[{heroId:'yi'},{heroId:'sejong'}],combatKinds:{enemy:['ashigaru','cavalry'],ally:['guard','turtle']}},art=new FixedBattleArt(world),scene=new T.Scene();
const ground=new T.Mesh(new T.CircleGeometry(.63,48),new T.MeshBasicMaterial({color:'#20394c',transparent:true,opacity:.5,depthWrite:false}));ground.rotation.x=-Math.PI/2;ground.position.y=.005;scene.add(ground);
const roster=[['yi','이순신','남색 망토 · 활과 화살통','hero'],['sejong','세종대왕','붉은 곤룡포 · 책','hero'],['guard','수비병','남색 갑주 · 창','ally'],['ashigaru','아시가루','삿갓 · 가벼운 갑주','enemy'],['cavalry','기병','기수와 갈색 말','enemy'],['turtle','거북선','철갑 지붕 · 용머리','ally']];
const poses=['준비','첫 디딤','둘째 디딤','타격','첫 중간','둘째 중간','공격 후','복귀'],facings=['오른쪽 앞','오른쪽 뒤','왼쪽 뒤','왼쪽 앞'];
const cards=roster.map(([kind,name,description,side],i)=>{
  const card=document.createElement('article');card.dataset.kind=kind;const viewport=document.createElement('div');viewport.className='viewport';const info=document.createElement('div');info.className='info';const title=document.createElement('b');title.textContent=name;const details=document.createElement('small');details.textContent=' · '+description;const output=document.createElement('output');output.textContent='원화 준비 중';info.append(title,details,output);card.append(viewport,info);$('actors').append(card);
  const entity={id:i+1,hp:100,maxHp:100,...(side==='hero'?{heroId:kind,owner:i}:side==='ally'?{kind}:{type:kind})},root=new T.Group();root.userData.phase=0;
  return {kind,side,entity,root,card,viewport,output};
});
let scenario='stop',elapsed=0,playing=false,last=0,request=0,width=0,height=0,frames=0;
for(const [id,sample]of Object.entries(MOTION_SAMPLES))$('scenario').add(new Option(sample.name,id));
function updateActors(dt){
  if(!art.ready||art.loading)return;
  for(const {kind,side,entity,root,card,output}of cards){
    const sample=motionSample(scenario,elapsed,dt,kind),direction=groundRight.clone().multiplyScalar(Math.cos(sample.angle)).addScaledVector(groundUp,Math.sin(sample.angle));
    art.attachUnit(root,entity,side==='hero',side==='ally');root.rotation.y=Math.atan2(direction.x,direction.z);Object.assign(entity,{actionSeq:sample.actionSeq,actionAt:sample.actionAt,actionDuration:sample.actionDuration,stunT:sample.stunned?1:0});
    art.updateUnit(root,entity,dt>0,sample.attack,sample.time,sample);const d=root.userData.fixedImage;
    Object.assign(card.dataset,{pose:String(d.poseIndex),poseName:d.pose,facing:String(d.facing),settling:String(d.motion?.visual?.settling??false),phase:String(d.motionPhase??0),sign:String(d.motion?.visual?.sign??1)});
    output.textContent=`${poses[Math.floor(d.poseIndex/4)]} · ${facings[d.facing]}${d.motion?.visual?.settling?' · 발 정리':''}`;
  }
}
function draw(now=0){
  const dt=playing&&last?Math.min(.05,(now-last)/1000):0;last=now;
  if(dt){elapsed+=dt;if(elapsed>=MOTION_SAMPLE_DURATION){elapsed%=MOTION_SAMPLE_DURATION;for(const {root}of cards)if(root.userData.fixedImage)root.userData.fixedImage.motion=null;}}
  updateActors(dt);
  if(width!==innerWidth||height!==innerHeight){width=innerWidth;height=innerHeight;renderer.setSize(width,height,false);}
  renderer.setScissorTest(false);renderer.setClearColor(0,0);renderer.clear();renderer.setScissorTest(true);let visible=0;
  for(const {root,viewport}of cards){
    const r=viewport.getBoundingClientRect();if(r.width<=0||r.height<=0||r.bottom<0||r.top>height)continue;
    const half=Math.max(1.45,1.5*r.height/r.width);camera.left=-half*r.width/r.height;camera.right=half*r.width/r.height;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();
    renderer.setViewport(r.left,height-r.bottom,r.width,r.height);renderer.setScissor(r.left,height-r.bottom,r.width,r.height);scene.add(root);renderer.render(scene,camera);scene.remove(root);visible++;
  }
  const sample=motionSample(scenario,elapsed,0,'yi');$('time').textContent=`${elapsed.toFixed(2)} / ${MOTION_SAMPLE_DURATION.toFixed(2)}초`;
  $('status').textContent=art.loading?'원화를 준비하고 있습니다…':art.ready?sample.label:'원화를 불러오지 못했습니다. 새로고침해 주세요.';
  Object.assign(document.body.dataset,{scenario,elapsed:elapsed.toFixed(4),playing:String(playing),phase:sample.label,loading:String(art.loading),frames:String(++frames),visible:String(visible),actorCount:String(cards.length),textures:String(renderer.info.memory.textures),geometries:String(renderer.info.memory.geometries)});
  if(playing)request=requestAnimationFrame(draw);
}
function seek(time){
  cancelAnimationFrame(request);
  elapsed=0;last=0;for(const {root}of cards)if(root.userData.fixedImage)root.userData.fixedImage.motion=null;
  updateActors(0);
  while(elapsed<time-1e-8){const dt=Math.min(1/60,time-elapsed);elapsed+=dt;updateActors(dt);}
  draw();
}
function landmarks(){
  $('stops').replaceChildren();for(const [name,time]of MOTION_SAMPLES[scenario].stops){const button=document.createElement('button');button.textContent=name;button.onclick=()=>{playing=false;cancelAnimationFrame(request);$('play').textContent='동작 재생';$('play').setAttribute('aria-pressed','false');seek(time);};$('stops').append(button);}
}
$('scenario').onchange=()=>{scenario=$('scenario').value;landmarks();seek(0);};
$('season').onchange=()=>{world.theme={id:$('season').value,...SEASONS[$('season').value]};if(!playing)draw();};
$('restart').onclick=()=>seek(0);
$('play').onclick=()=>{playing=!playing;$('play').textContent=playing?'동작 멈춤':'동작 재생';$('play').setAttribute('aria-pressed',String(playing));last=0;if(playing)request=requestAnimationFrame(draw);else{cancelAnimationFrame(request);draw();}};
addEventListener('resize',()=>{if(!playing)draw();});addEventListener('scroll',()=>{if(!playing)draw();},{passive:true});
addEventListener('pagehide',event=>{if(event.persisted)return;cancelAnimationFrame(request);for(const {root}of cards){const owned=new Set();root.traverse(o=>{if(o.material?.userData.owned3d)owned.add(o.material);if(o.geometry?.userData.owned3d)owned.add(o.geometry);});for(const item of owned)item.dispose();}art.dispose();ground.geometry.dispose();ground.material.dispose();renderer.dispose();});
landmarks();art.promise.then(()=>seek(elapsed));draw();
