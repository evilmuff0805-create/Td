import * as T from 'three';
import {FixedBattleArt} from './fixed-art.js';
import {SEASONS} from './seasons.js';
import {WinterWorld} from './world.js';

const $=id=>document.getElementById(id),renderer=new T.WebGLRenderer({canvas:$('village-canvas'),antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;
const camera=new T.OrthographicCamera(-1,1,1,-1,.1,100);camera.position.set(17,26,26);camera.lookAt(0,.42,0);camera.updateMatrixWorld();
const world={camera,renderer,theme:{id:'summer',...SEASONS.summer},combatKinds:[]},art=new FixedBattleArt(world),scene=new T.Scene();
const ground=new T.Mesh(new T.CircleGeometry(.85,48),new T.MeshBasicMaterial({color:'#20394c',transparent:true,opacity:.45,depthWrite:false}));ground.rotation.x=-Math.PI/2;ground.position.y=.005;scene.add(ground);
const roster=[['villageFence',0,'나무 목책','세 기둥 · 밧줄 이음'],['villageFence',1,'보강 목책','사선 버팀대 · 낮은 가로대'],['fieldWall',0,'낮은 돌담','이끼 낀 박석 · 계단형 상단'],['fieldWall',1,'모서리 돌담','둥근 모서리 · 낮은 끝단'],['villageCargo',0,'마을 옹기','장독과 작은 바구니'],['villageCargo',1,'보급짐','나무 궤짝 · 묶은 천']];
const cards=roster.map(([kind,variation,name,description])=>{
  const card=document.createElement('article'),viewport=document.createElement('div'),info=document.createElement('div'),title=document.createElement('b'),output=document.createElement('output');
  card.dataset.kind=kind;viewport.className='viewport';info.className='info';title.textContent=name;output.textContent=description;info.append(title,output);card.append(viewport,info);$('props').append(card);
  return {kind,variation,card,viewport,description,output,root:null};
});
let destroyed=false;
function rebuild(){
  if(destroyed||!art.ready)return;
  for(const c of cards){
    if(c.root)WinterWorld.prototype.disposeModel(c.root);
    // Same runtime prop renderer; enlarged here without a battlefield footprint.
    c.root=art.prop(c.kind,.9,c.variation);const data=c.root.userData.villageProp;
    Object.assign(c.card.dataset,{frame:String(data?.index),atlasSeason:data?.season??'',ready:String(data?.ready??false),height:String(data?.height??0)});
    c.output.textContent=c.description+(world.theme.snow?' · 눈 덮인 외형':'');
  }draw();
}
function draw(){
  if(destroyed)return;const width=innerWidth,height=innerHeight;renderer.setSize(width,height,false);renderer.setScissorTest(false);renderer.setClearColor(0,0);renderer.clear();renderer.setScissorTest(true);
  let visible=0;for(const c of cards){
    const r=c.viewport.getBoundingClientRect();if(!c.root||r.bottom<0||r.top>height)continue;
    const half=Math.max(.79,.95*r.height/r.width);camera.left=-half*r.width/r.height;camera.right=half*r.width/r.height;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();
    renderer.setViewport(r.left,height-r.bottom,r.width,r.height);renderer.setScissor(r.left,height-r.bottom,r.width,r.height);scene.add(c.root);renderer.render(scene,camera);scene.remove(c.root);visible++;
  }
  Object.assign(document.body.dataset,{season:world.theme.id,loading:String(art.loading),propCount:String(cards.length),visible:String(visible),textures:String(renderer.info.memory.textures),geometries:String(renderer.info.memory.geometries)});
  $('status').textContent=art.loading?'소품 그림을 준비하고 있습니다…':art.ready?'목책 2종 · 돌담 2종 · 옹기와 보급짐 · 겨울 대응 외형':'그림을 불러오지 못했습니다. 새로고침해 주세요.';
}
$('season').onchange=()=>{world.theme={id:$('season').value,...SEASONS[$('season').value]};rebuild();};
addEventListener('resize',draw);addEventListener('scroll',draw,{passive:true});
addEventListener('pagehide',event=>{if(event.persisted)return;destroyed=true;for(const c of cards)if(c.root)WinterWorld.prototype.disposeModel(c.root);art.dispose();ground.geometry.dispose();ground.material.dispose();renderer.dispose();});
art.promise.then(rebuild);draw();
