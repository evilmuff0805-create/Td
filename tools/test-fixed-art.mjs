import assert from 'node:assert/strict';
import * as T from 'three';
import { FixedBattleArt,frameBounds,isolateFrame } from '../src/3d/fixed-art.js';
import { LANDMARK_STAGE_ART } from '../src/3d/tower-art-data.js';
import { TOWER_ORDER } from '../src/data/towers.js';
import { WinterWorld } from '../src/3d/world.js';
import { CrowdRenderer } from '../src/3d/crowd.js';
import { newWinterGame,newBattleGame,canBuildAt } from '../src/3d/scenario.js';
import { applyCommand,step,DT } from '../src/sim/sim.js';
import { hurtHero,spawnEnemy } from '../src/sim/combat.js';
import { SEASONS } from '../src/3d/seasons.js';

let passed=0;
function test(name,run){run();passed++;console.log(`  ✔ ${name}`);}
function context(){
  const camera=new T.OrthographicCamera(-8,8,6,-6,.1,100);camera.position.set(17,26,26);camera.lookAt(0,0,0);camera.updateMatrixWorld();
  const world=Object.assign(Object.create(WinterWorld.prototype),{camera,theme:SEASONS.winter,renderer:{domElement:{dataset:{}}},scene:new T.Scene(),units:new Map(),unitTemplates:new Map(),towers:new Map(),bullets:new Map(),scenery:new Map(),fx:{reset(){}},placement:new T.Group(),marker:new T.Group(),corpses:[],pickables:[],enemyCues:new Map(),range:new T.Group(),batchCrowd:false,projectiles(){},combatScenery(){}});
  world.crowd=new CrowdRenderer(world.scene);
  const canvas={width:80,height:80},frames=Array.from({length:16},(_,i)=>({left:(i%4)*20,top:Math.floor(i/4)*20,width:16,height:18,anchor:.5}));
  const art=Object.assign(Object.create(FixedBattleArt.prototype),{world,ready:true,textures:new Map(),materials:new Map(),geometries:new Map(),yi:{canvas,frames}});
  art.shadowTexture=new T.DataTexture(new Uint8Array([255,255,255,255]),1,1);art.shadowMaterial=new T.MeshBasicMaterial({map:art.shadowTexture});world.art=art;
  art.unitArt=(entity,hero,ally)=>hero?FixedBattleArt.prototype.unitArt.call(art,entity,hero,ally):{canvas};
  return {world,art};
}
test('포즈 경계는 옆 칸을 포함하지 않고 흐린 알파와 빈 칸을 처리한다',()=>{
  const w=16,h=12,pixels=new Uint8Array(w*h*4);
  const alpha=(x,y,a)=>pixels[(y*w+x)*4+3]=a;
  for(let y=2;y<11;y++)for(let x=2;x<6;x++)alpha(x,y,255);
  for(let y=0;y<h;y++)for(let x=8;x<w;x++)alpha(x,y,255);
  alpha(0,0,30);
  assert.deepEqual(frameBounds(pixels,w,h,0,0,8,12),{left:2,top:2,width:4,height:9,anchor:.375});
  assert.deepEqual(frameBounds(new Uint8Array(pixels.length),w,h,0,0,8,12),{left:0,top:0,width:8,height:12,anchor:.5});
});
test('실제 heroDown → 재출전 후 이미지·체력바·선택 표시가 복구된다',()=>{
  const {world,art}=context(),game=newWinterGame(),hero=game.heroes[0];game.towers.length=0;
  applyCommand(game,{t:'nextWave',p:0});world.sync(game,game.time,DT,{kind:'hero',h:0});
  const root=world.units.get(`h${hero.id}`),image=root.userData.fixedImage.image;
  hurtHero(game,hero,hero.maxHp+1);assert.ok(game.events.some(e=>e.k==='heroDown'));world.sync(game,game.time,DT,null);
  while(game.time<1.6)step(game,DT);world.sync(game,game.time,DT,null);
  assert.equal(image.material.opacity,0);assert.equal(root.visible,false);assert.equal(root.userData.fixedImage.hint.visible,false);
  let ticks=0;while(hero.dead&&ticks++<1000)step(game,DT);
  assert.equal(hero.dead,false,'실제 시뮬레이션의 재출전 타이머');world.sync(game,game.time,DT,{kind:'hero',h:0});
  assert.equal(image.material.opacity,1);assert.equal(root.visible,true);assert.equal(root.userData.hp.visible,true);assert.equal(root.userData.fixedImage.hint.visible,true);assert.ok(hero.hp>0);
  world.reset();art.dispose();
});
test('고정 카메라에서 네 방향·걷기·사격은 발 위치와 월드 그림자를 유지한다',()=>{
  const {world,art}=context(),game=newWinterGame(),h=game.heroes[0],root=world.unit(h,true),d=root.userData.fixedImage;
  const facings=new Set();
  for(const yaw of [0,Math.PI/2,Math.PI,Math.PI*1.5]){
    root.rotation.y=yaw;art.updateUnit(root,h,true,0,1.2);facings.add(d.facing);assert.match(d.pose,/walk/);
    const q=root.quaternion.clone().multiply(d.image.quaternion);assert.ok(q.angleTo(world.camera.quaternion)<1e-6,'이미지 방향은 카메라에 고정');
    const ground=new T.Vector3(0,1,0).applyMatrix4(d.shadow.matrix).applyQuaternion(root.quaternion);assert.ok(Math.abs(ground.y-.042)<1e-6,'각 방향의 그림자는 지면에 붙음');
    const uv=d.image.geometry.attributes.uv;for(let i=0;i<uv.count;i++)assert.ok(uv.getX(i)>=0&&uv.getX(i)<=1&&uv.getY(i)>=0&&uv.getY(i)<=1);
    art.updateUnit(root,h,false,.2,1.4);assert.equal(d.pose,'attack');assert.equal(d.image.position.y,0);
  }
  assert.equal(facings.size,4);art.updateUnit(root,h,false,0,2);assert.equal(d.pose,'idle');
  h.stealth=true;h.revealed=false;art.updateUnit(root,h,false,0,2);assert.equal(d.image.material.opacity,.25);
  h.revealed=true;art.updateUnit(root,h,false,0,2);assert.equal(d.image.material.opacity,1);
  world.disposeCharacter(root);art.dispose();
});
test('투명 그림 여백·숨긴 3D는 무시하며 기존 군중의 선택용 메시와 상위 가림을 구분한다',()=>{
  const camera=new T.OrthographicCamera(-2,2,2,-2,.1,20);camera.position.set(0,.5,5);camera.lookAt(0,.5,0);camera.updateMatrixWorld();
  const root=new T.Group(),mesh=new T.Mesh(new T.BoxGeometry(1,1,1),new T.MeshBasicMaterial());mesh.position.y=.5;root.add(mesh);root.userData.entity={kind:'enemy',id:7};root.updateMatrixWorld(true);
  const world=Object.assign(Object.create(WinterWorld.prototype),{camera,renderer:{domElement:{getBoundingClientRect:()=>({left:0,top:0,width:100,height:100})}},raycaster:new T.Raycaster(),pointer:new T.Vector2(),plane:new T.Plane(new T.Vector3(0,1,0),0),pickables:[root]});
  mesh.visible=false;assert.equal(world.aim(50,50).entity,null);
  mesh.userData.crowdPick=true;assert.deepEqual(world.aim(50,50).entity,root.userData.entity);
  root.visible=false;assert.equal(world.aim(50,50).entity,null);root.visible=true;
  let alpha=0;mesh.visible=true;mesh.userData.fixedArt=true;mesh.material.map=new T.CanvasTexture({width:8,height:8,getContext:()=>({getImageData:()=>({data:[0,0,0,alpha]})})});
  assert.equal(world.aim(50,50).entity,null);alpha=255;assert.deepEqual(world.aim(50,50).entity,root.userData.entity);
  mesh.geometry.dispose();mesh.material.map.dispose();mesh.material.dispose();
});
test('스테이지 정리 후 공유 그림 자원은 남고 전장 종료 때 한 번 해제된다',()=>{
  const {world,art}=context(),root=world.unit(newWinterGame().heroes[0],true),d=root.userData.fixedImage;
  let sharedGeometry=0,sharedTexture=0,privateMaterial=0;
  d.image.geometry.addEventListener('dispose',()=>sharedGeometry++);d.image.material.map.addEventListener('dispose',()=>sharedTexture++);d.image.material.addEventListener('dispose',()=>privateMaterial++);
  world.disposeCharacter(root);assert.equal(privateMaterial,1);assert.equal(sharedGeometry,0);assert.equal(sharedTexture,0);
  art.dispose();assert.equal(sharedGeometry,1);assert.equal(sharedTexture,1);
});
test('회전 입력은 고정 시점의 카메라와 목표점을 바꾸지 않는다',()=>{
  const {world,art}=context();world.fixedCamera=true;world.controls={target:new T.Vector3(12,.1,7)};
  const position=world.camera.position.clone(),quaternion=world.camera.quaternion.clone();world.rotate(1);world.rotate(-1);
  assert.deepEqual(world.camera.position.toArray(),position.toArray());assert.deepEqual(world.camera.quaternion.toArray(),quaternion.toArray());art.dispose();
});
test('그림 대기 중 모델을 만들지 않으며 실패하면 기존 군중 모델로 복구한다',()=>{
  const {world,art}=context(),game=newWinterGame();game.towers.length=0;
  spawnEnemy(game,'teppo',0,1);art.ready=false;art.loading=true;world.range.visible=true;
  world.sync(game,0,DT,null);assert.equal(world.units.size,0);assert.equal(world.range.visible,false);
  art.loading=false;art.failed=true;world.allowBatchCrowd=true;
  world.sync(game,0,DT,null);assert.equal(world.units.size,game.heroes.length+1);assert.equal(world.batchCrowd,true);
  assert.equal(world.units.get(`e${game.enemies[0].id}`).userData.illustrationProxy,undefined);
  world.reset();art.ready=true;art.failed=false;art.unitArt=()=>null;world.batchCrowd=false;
  world.sync(game,0,DT,null);assert.equal(world.units.get(`e${game.enemies[0].id}`).userData.illustrationProxy,undefined);assert.ok(world.unitTemplates.has('teppo'),'일부 그림 누락도 기존 모델 묶기를 사용');
  world.reset();art.dispose();
});
test('가벼운 그림 병력도 선택·은신·사격 원점·사망 정리를 유지한다',()=>{
  const {world,art}=context(),game=newWinterGame();game.towers.length=0;
  const e=spawnEnemy(game,'teppo',0,1);e.stealth=true;e.revealed=false;e.x=12;e.y=7;
  world.sync(game,0,DT,null);const root=world.units.get(`e${e.id}`),d=root.userData.fixedImage;
  assert.equal(root.userData.illustrationProxy,true);assert.equal(root.userData.rig.children.length,0);assert.deepEqual(root.userData.entity,{kind:'enemy',id:e.id});assert.equal(d.image.material.opacity,.25);
  const event={k:'shot',enemy:e.id,x1:e.x,y1:e.y,x2:15,y2:8};world.cueEnemies([event],0);world.sync(game,.1,DT,null);root.updateMatrixWorld(true);
  let line;world.fx.line=(...args)=>line=args;world.firingLine(event);
  const muzzle=root.userData.weapons[1].getWorldPosition(new T.Vector3());assert.ok(Math.abs(line[0]-muzzle.x)<1e-8&&Math.abs(line[1]-muzzle.z)<1e-8&&Math.abs(line[7]-muzzle.y)<1e-8);assert.ok(muzzle.y>.2);
  e.revealed=true;world.sync(game,.2,DT,null);assert.equal(d.image.material.opacity,1);
  game.enemies.length=0;world.sync(game,.3,.05,null);assert.equal(world.units.has(`e${e.id}`),false);assert.equal(world.pickables.includes(root),false);
  world.sync(game,2,1.4,null);assert.equal(world.corpses.length,0);assert.equal(root.parent,null);world.reset();art.dispose();
});
test('실제 거북선·전령도 그림으로 이동·회전하며 만료 시 공유 그림을 보존한다',()=>{
  const {world,art}=context(),game=newWinterGame();game.towers=[];
  const canvas={width:80,height:80};art.unitArt=(entity,hero,ally)=>ally&&['turtle','courier'].includes(entity.kind)?{canvas}:null;
  game.heroes[0].ultCd=0;applyCommand(game,{t:'heroUlt',p:0,h:0});
  game.courier={sent:false,at:0,path:0};step(game);assert.deepEqual(new Set(game.movers.map(m=>m.kind)),new Set(['turtle','courier']));
  WinterWorld.prototype.combatScenery.call(world,game,game.time,DT);
  const roots=game.movers.map(m=>world.scenery.get(`m${m.id}`));let removed=0,shared=0;
  for(const [i,root]of roots.entries()){
    assert.equal(root.userData.illustrationProxy,true);assert.equal(root.userData.rig.children.length,0);
    const d=root.userData.fixedImage;assert.ok(Number.isFinite(d.image.position.y));assert.equal(root.position.x,game.movers[i].x);assert.equal(root.rotation.y,Math.atan2(game.movers[i].dx,game.movers[i].dy));
    const q=root.quaternion.clone().multiply(d.image.quaternion);assert.ok(q.angleTo(world.camera.quaternion)<1e-6);
    d.image.material.addEventListener('dispose',()=>removed++);d.image.material.map.addEventListener('dispose',()=>shared++);
  }
  for(let i=0;i<900&&game.movers.length;i++){step(game);WinterWorld.prototype.combatScenery.call(world,game,game.time,DT);}
  assert.equal(game.movers.length,0);assert.equal(world.scenery.size,0);assert.ok(roots.every(root=>root.parent===null));assert.equal(removed,2);assert.equal(shared,0);
  art.ready=false;game.heroes[0].ultCd=0;applyCommand(game,{t:'heroUlt',p:0,h:0});step(game);
  WinterWorld.prototype.combatScenery.call(world,game,game.time,DT);assert.ok([...world.scenery.values()].every(root=>!root.userData.illustrationProxy&&root.userData.vehicle==='turtle'));
  world.reset();art.dispose();assert.equal(shared,2);
});
test('불균일한 시트의 그림과 옅은 그림자를 분리하고 mipmap용 투명 여백을 확보한다',()=>{
  const source={width:1402,height:1122},pixels=new Uint8Array(12*8*4);pixels[(2*12+3)*4+3]=11;pixels[(5*12+7)*4+3]=255;
  const bounds=frameBounds(pixels,12,8,0,0,12,8,11);assert.equal(bounds.left,3);assert.equal(bounds.top,2);assert.equal(bounds.width,5);assert.equal(bounds.height,4);
  let draw;const frame={left:287,top:299,width:211,height:260,anchor:.53};
  const isolated=isolateFrame(source,frame,()=>({getContext:()=>({drawImage:(...args)=>draw=args})}));
  assert.deepEqual(draw,[source,287,299,211,260,12,12,211,260]);assert.equal(isolated.canvas.width,235);assert.equal(isolated.canvas.height,284);
  assert.deepEqual(isolated.frame,{...frame,left:12,top:12});assert.equal(isolated.sourceBounds,frame);
  for(const layout of Object.values(LANDMARK_STAGE_ART)){
    assert.equal(layout.x.at(-1),layout.width);assert.equal(layout.y.at(-1),layout.height);
    assert.ok(layout.x.every((v,i,a)=>i===0?v===0:v>a[i-1]));assert.ok(layout.y.every((v,i,a)=>i===0?v===0:v>a[i-1]));
  }
});

test('실제 건설·강화·A/B 특화 50조합은 각 그림과 작은 크기·선택·발사 원점을 유지한다',()=>{
  const {world,art}=context();
  art.towerFrames={canvas:{width:500,height:200},frames:Array.from({length:10},(_,i)=>({left:i%5*100+10,top:Math.floor(i/5)*100+10,width:80,height:90,anchor:.5}))};
  art.landmarks=Object.fromEntries(['a','b'].map(sheet=>[sheet,{isolated:Array.from({length:20},()=>({canvas:{width:104,height:120},frame:{left:12,top:12,width:80,height:96,anchor:.5}}))}]));
  const expected={bosingak:['a',0],cheomseong:['a',5],haeinsa:['a',10],seokguram:['a',15],gyeongbok:['b',0],namhansan:['b',5],seokbinggo:['b',10],bulguksa:['b',15]};
  const combinations=new Set();let replacementShadows=0,sharedDisposals=0;const observed=new Set();
  for(const type of TOWER_ORDER)for(const branch of ['A','B']){
    const game=newBattleGame({stageId:'s25',support:false});game.towers.length=0;game.heroes.length=0;game.players[0].gold=10000;
    let tile;for(let y=0;y<14&&!tile;y++)for(let x=0;x<24&&!tile;x++)if(canBuildAt(game,x,y))tile={x,y};
    applyCommand(game,{t:'build',p:0,tower:type,...tile});const tower=game.towers[0];assert.equal(tower.type,type);
    for(let level=1;level<=4;level++){
      if(level>1)applyCommand(game,{t:'upgrade',p:0,id:tower.id,...(level===4?{branch}:{})});
      world.sync(game,game.time,DT,{kind:'tower',id:tower.id});
      const root=world.towers.get(tower.id).root,d=root.userData.fixedImage,column=level===4?(branch==='A'?3:4):level-1;
      assert.equal(d.dedicated,true);assert.equal(d.height,1.2);assert.equal(root.userData.labelHeight,1.4);assert.equal(world.pickables.filter(r=>r===root).length,1);
      assert.deepEqual(root.userData.entity,{kind:'tower',id:tower.id});assert.equal(root.scale.x,1);assert.equal(root.scale.y,1);assert.equal(root.scale.z,1);
      d.image.geometry.computeBoundingBox();assert.ok(Math.abs(d.image.geometry.boundingBox.max.y-1.2)<1e-6);assert.ok(Math.abs(d.image.geometry.boundingBox.min.y)<1e-6);
      assert.ok(Math.abs(art.towerMuzzle(root).distanceTo(root.position)-.66)<1e-8);
      if(expected[type]){const [sheet,row]=expected[type];assert.equal(d.frameIndex,row+column);assert.equal(d.image.material.map.image,art.landmarks[sheet].isolated[row+column].canvas);}
      else assert.equal(d.frameIndex,(type==='hwaseong'?5:0)+column);
      const uv=d.image.geometry.attributes.uv;for(let i=0;i<uv.count;i++){assert.ok(uv.getX(i)>=0&&uv.getX(i)<=1&&uv.getY(i)>=0&&uv.getY(i)<=1);if(expected[type])assert.ok(uv.getX(i)>0&&uv.getX(i)<1&&uv.getY(i)>0&&uv.getY(i)<1,'새 그림은 네 면에 투명 여백이 있다');}
      if(!observed.has(d.image.material.map)){observed.add(d.image.material.map);d.image.material.map.addEventListener('dispose',()=>sharedDisposals++);}
      root.children.find(o=>o.geometry?.userData.owned3d&&o.geometry.type==='PlaneGeometry').geometry.addEventListener('dispose',()=>replacementShadows++);
      combinations.add(`${type}:${column}`);
    }
    world.reset();
  }
  assert.equal(combinations.size,50);assert.equal(replacementShadows,80);assert.equal(sharedDisposals,0,'강화·전장 정리는 다른 건물의 공유 그림을 해제하지 않는다');
  art.dispose();assert.equal(sharedDisposals,41,'40개 분리 그림과 기존 시트는 종료 시 한 번씩 해제');
});

console.log(`\n고정 시점 그림 전장 ${passed}개 검증 통과`);
