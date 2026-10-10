import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import { STAGE_ID, WINTER_STAGE, newWinterGame,newBattleGame,campaignSupport,canBuildAt } from '../src/3d/scenario.js';
import { getMap,T_PATH,T_BASE } from '../src/sim/map.js';
import { STAGES, parseWave } from '../src/data/stages.js';
import { applyCommand, step } from '../src/sim/sim.js';
import { spawnEnemy } from '../src/sim/combat.js';
import { MAT, character, animateCharacter, hanok, gate, towerModel, bakeStatic, pine, rock,roof } from '../src/3d/models.js';
import { MAX_TOWER_LEVEL,towerTier,towerVisual,towerDisplayStats } from '../src/3d/tower-visuals.js';
import { WinterWorld } from '../src/3d/world.js';
import { BattleEffects, fanGeometry } from '../src/3d/effects.js';
import { terrainPlan,buildBattlefield,surroundingsPlan,tileSurface,worldSurface } from '../src/3d/environment.js';
import { PAINTED_SURFACES,PAINTED_SIZE,albedoPlaceholder,tintAlbedo,paintSurface,paintedSurfaceStatus } from '../src/3d/painted-surfaces.js';
import { surface } from '../src/3d/surfaces.js';
import { seasonFor,SEASONS } from '../src/3d/seasons.js';
import { YI_FAN } from '../src/data/heroes.js';
import { createBot, botThink, botSkills } from '../src/sim/ai.js';
import { HEROES } from '../src/data/heroes.js';
import { ENEMIES } from '../src/data/enemies.js';
import { TOWER_ORDER,TOWERS,towerBase } from '../src/data/towers.js';
import { SKILLS } from '../src/data/skills.js';
import { metaCost } from '../src/data/quests.js';
import { combatantModel,cloneCombatantModel } from '../src/3d/combat-models.js';
import { CrowdRenderer } from '../src/3d/crowd.js';
import { faceGeometry } from '../src/3d/sculpture.js';
import { HERO_FORMS } from '../src/3d/hero-design.js';
import { attachHeroSilhouette } from '../src/3d/visibility.js';
import { abilityTarget,targetedCommand } from '../src/3d/targeting.js';
import { normalizeBattleSkills,equippedAbility,comboView,rallyTargets } from '../src/3d/battle-controls.js';
import { COMBOS,findCombo } from '../src/data/combos.js';

let passed=0;
function test(name,fn){fn();passed++;console.log(`  ✔ ${name}`);}
test('전용 albedo는 첫 GPU 업로드 전부터 512 고정이며 작은 요철 맵·대체표현 유지',()=>{
  for(const [kind,path]of Object.entries(PAINTED_SURFACES)) {
    const file=fs.readFileSync(new URL('../'+path,import.meta.url));assert.equal(file.toString('ascii',0,4),'RIFF');assert.equal(file.toString('ascii',8,12),'WEBP');assert.ok(file.length<130000);
    const source=new Uint8Array([210,180,150,255,100,120,140,128,80,90,100,255,10,20,30,0]),fallback=albedoPlaceholder(source,2,kind);
    assert.equal(fallback.width,PAINTED_SIZE);assert.equal(fallback.height,PAINTED_SIZE);assert.equal(fallback.data.length,512*512*4);
    assert.deepEqual([...fallback.data.slice(0,4)],[210,180,150,255]);assert.deepEqual([...fallback.data.slice(-4)],[10,20,30,0]);assert.equal(source.length,16);
  }
  for(const kind of ['stone','wood']) {const maps=surface(kind);assert.equal(maps.map.image.width,512);assert.equal(maps.bumpMap.image.width,128);assert.equal(maps.roughnessMap.image.width,128);assert.notEqual(maps.map,maps.bumpMap);}
  const data=new Uint8Array([200,200,200,255]),fallback=albedoPlaceholder(data,1,'snow');assert.equal(fallback.width,1);assert.equal(fallback.data,data);
  const tex=new THREE.DataTexture(data,1,1);assert.equal(paintSurface(tex,'stone'),tex);assert.deepEqual(paintedSurfaceStatus(),{ready:0,failed:0,pending:0});
});
test('계절 albedo 색상 곱은 선형 공간에서 계산하고 알파·공유 원본 보존',()=>{
  const source=new Uint8Array([200,180,160,77,255,128,0,255]),copy=new Uint8Array(source),tint=new THREE.Color(.25,.5,.75);
  const decode=x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4,encode=x=>x<=.0031308?x*12.92:1.055*x**(1/2.4)-.055;
  assert.equal(tintAlbedo(copy,tint),copy);
  for(let i=0;i<source.length;i+=4)for(let c=0;c<3;c++)assert.ok(Math.abs(copy[i+c]-Math.round(encode(decode(source[i+c]/255)*[.25,.5,.75][c])*255))<=1);
  assert.equal(copy[3],77);assert.equal(copy[7],255);assert.equal(source[0],200);assert.equal(copy[0],106);
});
test('길 모서리·지면의 월드 UV가 이어지고 주변 지형은 25개 전장의 셀을 침범하지 않음',()=>{
  const corner=new THREE.CircleGeometry(.55,24);corner.rotateX(-Math.PI/2);worldSurface(corner,3.5,6.5);
  const p=corner.attributes.position,uv=corner.attributes.uv;for(let i=0;i<p.count;i++){assert.ok(Math.abs(uv.getX(i)-(p.getX(i)+3.5)/2)<1e-6);assert.ok(Math.abs(uv.getY(i)-(p.getZ(i)+6.5)/2)<1e-6);}corner.dispose();
  for(const stage of STAGES) {
    const plan=terrainPlan(stage),outside=surroundingsPlan(plan),water=new Set(plan.water.map(p=>p.join(',')));
    for(const [kind,tiles]of Object.entries(outside))for(const [x,z]of tiles) {
      assert.ok(x<0||z<0||x>=plan.map.w||z>=plan.map.h);
      const edge=[Math.max(0,Math.min(plan.map.w-1,Math.floor(x))),Math.max(0,Math.min(plan.map.h-1,Math.floor(z)))].join(',');assert.equal(kind==='water',water.has(edge));
    }
    const land=tileSurface(plan.land,.006),skirt=tileSurface(outside.land,0,true);
    for(let i=0;i<land.attributes.position.count;i++)assert.ok(Math.abs(land.attributes.position.getY(i)-.006)<1e-8);
    for(let i=0;i<skirt.attributes.position.count;i++){const h=skirt.attributes.position.getY(i);assert.ok(h<0&&h>-.075,'외곽 지면은 전투면 아래·물 위를 유지');}
    assert.ok(land.attributes.color.array.every(Number.isFinite));land.dispose();skirt.dispose();
  }
});
test('둥근 화강암의 원통 UV는 모든 seed에서 꼭대기·이음새 늘어짐 없이 연속',()=>{
  for(let seed=0;seed<7;seed+=.37) {
    const root=rock(1,seed),body=root.children.find(o=>o.material===MAT.stone||o.material===MAT.stoneDark),g=body.geometry,{position:p,uv,color}=g.attributes;
    assert.ok(p.count>1200);const byPosition=new Map();
    for(let i=0;i<p.count;i++) {
      const key=[p.getX(i),p.getY(i),p.getZ(i)].join(','),shade=color.getX(i);if(byPosition.has(key))assert.equal(byPosition.get(key),shade);byPosition.set(key,shade);
      assert.ok(g.attributes.normal.getY(i)<=1&&Number.isFinite(uv.getX(i)));
    }
    for(let i=0;i<uv.count;i+=3)assert.ok(Math.max(uv.getX(i),uv.getX(i+1),uv.getX(i+2))-Math.min(uv.getX(i),uv.getX(i+1),uv.getX(i+2))<.5,`seed ${seed} UV 접힘`);
    for(const child of root.children)child.geometry.dispose();
  }
});
test('밀집 병력 인스턴스는 용량 확장·관절 동작·시체·선택과 자원 소유를 보존',()=>{
  const scene=new THREE.Scene(),crowd=new CrowdRenderer(scene),template=combatantModel('samurai');
  template.traverse(o=>{if(o.geometry?.userData.owned3d)o.geometry.userData.templateShared=true;});
  const roots=Array.from({length:33},(_,i)=>{
    const root=cloneCombatantModel(template);root.position.set(i+.5,0,i%3);root.userData.phase=i;
    assert.notEqual(root.userData.rig,template.userData.rig);assert.notEqual(root.userData.cape.geometry,template.userData.cape.geometry);
    assert.equal(root.userData.cape.material.side,THREE.DoubleSide);
    assert.equal(root.userData.costumeMaterials[1].side,THREE.FrontSide,'망토가 갑옷 재질을 바꾸면 안 됨');
    animateCharacter(root,i*.1,true,.2,1/60);scene.add(root);crowd.register(root,'samurai');return root;
  });
  crowd.update(roots);const bucket=[...crowd.buckets.values()][0],matrix=new THREE.Matrix4();
  assert.equal(bucket.mesh.count,33);assert.equal(bucket.capacity,64);
  for(let i=0;i<roots.length;i++){
    const part=crowd.bindings.get(roots[i])[0].part;bucket.mesh.getMatrixAt(i,matrix);
    assert.ok(matrix.elements.every((v,j)=>Math.abs(v-part.matrixWorld.elements[j])<1e-5),`확장 중 ${i}번 관절 행렬 유실`);
  }
  const ray=new THREE.Raycaster(new THREE.Vector3(.5,1.0,5),new THREE.Vector3(0,0,-1));
  assert.ok(ray.intersectObject(roots[0],true).length,'인스턴스 원본으로 선택 가능해야 함');
  roots[0].rotation.z=Math.PI/2;roots[0].scale.multiplyScalar(.7);crowd.update(roots);bucket.mesh.getMatrixAt(0,matrix);
  assert.ok(matrix.elements.every(Number.isFinite));
  crowd.update(roots.slice(1));assert.equal(bucket.mesh.count,32);
  const disposed=new Map();for(const b of crowd.buckets.values())b.geometry.addEventListener('dispose',()=>disposed.set(b.geometry,(disposed.get(b.geometry)||0)+1));
  const context=Object.assign(Object.create(WinterWorld.prototype),{});context.disposeCharacter(roots[0]);assert.equal(disposed.size,0);
  const total=crowd.buckets.size;crowd.reset();assert.equal(disposed.size,total);assert.ok([...disposed.values()].every(n=>n===1));assert.equal(scene.children.filter(o=>o.isInstancedMesh).length,0);
});
test('별도 겨울 전장: 캠페인 25곳과 저장 구조 유지',()=>{
  assert.equal(STAGES.length,25);assert.ok(!STAGES.some(s=>s.id===STAGE_ID));
  for(const row of WINTER_STAGE.grid)assert.equal(row.length,24);
  assert.equal(getMap(STAGE_ID).paths.length,1);
  assert.deepEqual([...new Set(WINTER_STAGE.waves.flatMap(parseWave).map(g=>g.type))].sort(),['ashigaru','samurai']);
});
test('새 팔꿈치·손목·무릎과 무기 연결이 병력 복제와 실제 동작에서도 유지',()=>{
  for(const kind of [...Object.keys(HEROES),...Object.keys(ENEMIES),'militia','guard','elite','monk']) {
    const original=combatantModel(kind),copy=cloneCombatantModel(original),d=copy.userData,restKnees=original.userData.knees?.map(k=>k.quaternion.toArray());
    if(d.vehicle) {assert.equal(d.vehicle,kind);animateCharacter(copy,.37,true,0,1/60);assert.ok(d.rig.position.toArray().every(Number.isFinite));continue;}
    for(let i=0;i<2;i++) {
      assert.notEqual(d.knees[i],original.userData.knees[i]);assert.equal(d.knees[i].parent,d.legs[i]);
      assert.notEqual(d.elbows[i],original.userData.elbows[i]);assert.equal(d.elbows[i].parent,d.arms[i]);
      assert.equal(d.wrists[i].parent,d.elbows[i]);assert.equal(d.weapons[i].parent,d.wrists[i]);
    }
    animateCharacter(copy,.13,true,.03,1/60);copy.updateMatrixWorld(true);
    const before=d.weapons[1].matrixWorld.clone();animateCharacter(copy,.37,true,.20,1/60);copy.updateMatrixWorld(true);
    assert.notDeepEqual(d.weapons[1].matrixWorld.elements,before.elements,`${kind} 무기가 손목을 따라 움직이지 않음`);
    assert.ok(d.knees.some(k=>k.rotation.x>.1));
    copy.traverse(o=>assert.ok(o.matrixWorld.elements.every(Number.isFinite),`${kind} 관절 변환`));
    assert.deepEqual(original.userData.knees.map(k=>k.quaternion.toArray()),restKnees,'복제본 동작이 원본의 준비 자세를 바꾸면 안 됨');
  }
});
test('영웅 8명의 얼굴 윤곽·체형이 독립적이며 원본 조형은 재사용·불변',()=>{
  const faces=new Set(),bodies=new Set();
  for(const kind of Object.keys(HEROES)) {
    const geo=faceGeometry(kind),before=geo.attributes.position.array.slice(),root=combatantModel(kind);
    assert.equal(faceGeometry(kind),geo);faces.add(Array.from(before).join(','));bodies.add(root.userData.rig.scale.toArray().join(','));
    assert.deepEqual(root.userData.rig.scale.toArray(),HERO_FORMS[kind].body);
    animateCharacter(root,.8,true,.2,1/60);assert.deepEqual(geo.attributes.position.array,before);
    assert.ok(root.userData.head.userData.faceForm.length>0);
    assert.ok(new THREE.Box3().setFromObject(root).max.y<3,'영웅 크기가 전투 구도를 벗어나지 않아야 함');
  }
  assert.equal(faces.size,8);assert.equal(bodies.size,8);
});
test('궁수의 실제 손·활 중심·시위·화살 방향이 이동·방출·복제에서도 일치',()=>{
  for(const kind of ['yi','gwak']) {
    const template=combatantModel(kind),root=cloneCombatantModel(template),d=root.userData;
    const rest=template.userData.bowStrings.map(s=>[...s.position.toArray(),...s.quaternion.toArray(),...s.scale.toArray()]);
    for(let j=0;j<32;j++) {
      root.position.set(3,.035,7);root.rotation.y=j*.37;
      animateCharacter(root,j*.071,j%2===0,(j%9)/8*.25,1/60);root.updateMatrixWorld(true);
      const bow=d.weapons[0],arrow=d.weapons[1],grip=bow.getWorldPosition(new THREE.Vector3()),nock=arrow.getWorldPosition(new THREE.Vector3());
      assert.ok(grip.distanceTo(d.wrists[0].getWorldPosition(new THREE.Vector3()))<1e-9,'왼손이 활 중앙을 잡아야 함');
      assert.ok(nock.distanceTo(d.wrists[1].getWorldPosition(new THREE.Vector3()))<1e-9,'오른손이 화살 nock를 잡아야 함');
      assert.ok(new THREE.Vector3(0,0,1).transformDirection(arrow.matrixWorld).dot(grip.clone().sub(nock).normalize())>.9999,'화살은 활 중심을 향해야 함');
      assert.ok(bow.worldToLocal(nock.clone()).z<=-.15,'방출 nock가 활 끝의 시위 평면을 넘어가면 안 됨');
      for(let i=0;i<2;i++) {
        const string=d.bowStrings[i],tip=bow.localToWorld(new THREE.Vector3(...bow.userData.bowTips[i]));
        assert.ok(string.localToWorld(new THREE.Vector3(0,-.5,0)).distanceTo(tip)<1e-8);
        assert.ok(string.localToWorld(new THREE.Vector3(0,.5,0)).distanceTo(nock)<1e-8);
        assert.notEqual(string,template.userData.bowStrings[i]);assert.equal(string.geometry,template.userData.bowStrings[i].geometry);
      }
      assert.equal(arrow.visible,(j%9)/8<.72);
    }
    assert.deepEqual(template.userData.bowStrings.map(s=>[...s.position.toArray(),...s.quaternion.toArray(),...s.scale.toArray()]),rest);
    const released=cloneCombatantModel(root);assert.equal(released.userData.weapons[1].visible,root.userData.weapons[1].visible);
  }
});
test('사계절의 평평한 전투면에서 영웅의 발바닥이 걷기 중 땅을 뚫지 않음',()=>{
  for(const kind of Object.keys(HEROES)) {
    const root=combatantModel(kind),copy=cloneCombatantModel(root),d=copy.userData;let grounded=0,lifted=0;
    assert.equal(d.ankles.length,2);
    for(let i=0;i<2;i++){assert.notEqual(d.ankles[i],root.userData.ankles[i]);assert.equal(d.ankles[i].parent,d.knees[i]);}
    for(let j=0;j<40;j++) {
      animateCharacter(copy,j*.047,true,0,1/60);copy.updateMatrixWorld(true);
      const heights=d.ankles.map(foot=>new THREE.Box3().setFromObject(foot).min.y);
      assert.ok(Math.min(...heights)>=0&&Math.max(...heights)<.09,`${kind} 발바닥 높이 ${heights}`);
      grounded+=heights.some(h=>h<.006);lifted+=heights.some(h=>h>.045);
      for(let i=0;i<2;i++)assert.ok(Math.abs(d.legs[i].rotation.x+d.knees[i].rotation.x+d.ankles[i].rotation.x)<1e-8,'발목이 신발을 수평으로 유지');
    }
    assert.equal(grounded,40);assert.ok(lifted>20);
  }
});
test('영웅 준비·이동·공격 자세는 이전 상태·호출 횟수와 무관하고 무기가 관절을 따름',()=>{
  for(const kind of Object.keys(HEROES)) {
    const root=combatantModel(kind),d=root.userData,copy=cloneCombatantModel(root);
    const capture=()=>[d.torso,d.head,...d.arms,...d.elbows,...d.wrists,...d.legs,...d.knees,...d.ankles,...(d.bowStrings??[])].map(o=>[...o.position.toArray(),...o.quaternion.toArray(),...o.scale.toArray()]);
    animateCharacter(root,.42,false,.25,1/60);const first=capture();
    animateCharacter(root,1.9,true,.01,1/30);animateCharacter(root,.42,false,.25,0);assert.deepEqual(capture(),first);
    animateCharacter(root,.42,false,0,0);animateCharacter(copy,.42,false,0,1/120);
    assert.deepEqual(d.torso.quaternion.toArray(),copy.userData.torso.quaternion.toArray());
    for(const socket of d.weapons)assert.ok(socket.matrixWorld.elements.every(Number.isFinite));
  }
});
test('방출 순간 장전 화살과 가림 실루엣은 함께 숨고 투사체는 숨긴 socket의 실제 포구에서 출발',()=>{
  for(const kind of ['yi','gwak']) {
    const scene=new THREE.Scene(),root=combatantModel(kind);scene.add(root);root.position.set(8,.035,7);root.rotation.y=.73;
    attachHeroSilhouette(root);animateCharacter(root,.42,false,.25,1/60);root.updateMatrixWorld(true);
    const d=root.userData,socket=d.weapons[1],muzzle=socket.localToWorld(socket.userData.muzzle.clone());assert.equal(socket.visible,false);
    const arrowHints=d.silhouetteMeshes.filter(h=>h.parent.parent===socket);assert.ok(arrowHints.length>0);
    for(const hint of arrowHints) {
      hint.visible=true;let effective=true;for(let o=hint;o;o=o.parent)effective=effective&&o.visible;
      assert.equal(effective,false,'화살 실루엣이 숨긴 장전 화살을 노출하면 안 됨');assert.equal(hint.geometry,hint.parent.geometry);
    }
    for(const string of d.bowStrings) {
      const hint=d.silhouetteMeshes.find(h=>h.parent===string);assert.ok(hint);
      assert.deepEqual(hint.matrixWorld.elements,string.matrixWorld.elements,'시위의 가림 표시도 실제 연결을 따라야 함');
    }
    const world={scene,bullets:new Map(),towers:new Map(),units:new Map([['h1',root]]),glowTex:null};
    WinterWorld.prototype.projectiles.call(world,{projectiles:[{id:1,kind:'arrow',mode:'homing',x:8,y:7,target:5,src:{kind:'hero',id:1}}],enemies:[{id:5,x:12,y:6}]});
    assert.ok(world.bullets.get(1).position.distanceTo(muzzle)<1e-8);
    animateCharacter(root,.43,false,0,0);assert.equal(socket.visible,true,'장전 준비 자세에서 화살이 복원되어야 함');
  }
});
test('처마의 상면·하면·두꺼운 단면이 양쪽 시점에서 밖을 향함',()=>{
  for(const [w,d]of [[1.25,1.12],[3.95,3.1]]) {
    const group=new THREE.Group();roof(group,w,d,0);
    const shell=group.children.find(o=>o.material===MAT.roof).geometry,p=shell.attributes.position,n=shell.attributes.normal;
    let up=0,down=0,rim=0;
    for(let i=0;i<p.count;i+=3) {
      const a=new THREE.Vector3().fromBufferAttribute(p,i),b=new THREE.Vector3().fromBufferAttribute(p,i+1),c=new THREE.Vector3().fromBufferAttribute(p,i+2),normal=new THREE.Vector3().fromBufferAttribute(n,i);
      if(a.clone().sub(b).cross(c.clone().sub(b)).lengthSq()<1e-14)continue;
      if(normal.y>.12)up++;else if(normal.y<-.12)down++;
      else {assert.ok(normal.x*(a.x+b.x+c.x)+normal.z*(a.z+b.z+c.z)>0,'처마 단면이 안쪽을 향함');rim++;}
    }
    assert.ok(up>100&&down>100&&rim>20);
  }
});
test('25개 실제 지도의 사계절·강·바다·다중 경로와 유효한 3D 지형',()=>{
  const seen=new Set();let waterMaps=0,multi=0;
  for(const stage of STAGES) {
    const theme=seasonFor(stage),plan=terrainPlan(stage);seen.add(theme.id);waterMaps+=plan.water.length>0;multi+=plan.map.paths.length>1;
    assert.equal(plan.land.length+plan.water.length,plan.map.w*plan.map.h);assert.equal(plan.map.paths.length,stage.paths.length);
    const field=buildBattlefield(stage,theme);
    assert.equal(field.root.userData.stageId,stage.id);assert.equal(field.root.userData.season,theme.id);
    field.root.traverse(o=>{if(!o.isMesh)return;for(const [key,a] of Object.entries(o.geometry.attributes))for(const n of a.array)assert.ok(Number.isFinite(n),`${stage.id}: ${key}`);if(!theme.snow)assert.ok(o.material!==MAT.snow&&o.material!==MAT.roofSnow&&o.material!==MAT.ice,'따뜻한 계절에 눈이 남음');o.geometry.dispose();});
    assert.ok(field.lamps.length<=9);field.water.geometry.dispose();field.water.material.dispose();
  }
  assert.deepEqual([...seen].sort(),Object.keys(SEASONS).sort());assert.ok(waterMaps>10&&multi>10);
});
test('실제 전투 명령: 이동·건설·강화·철거와 군자금',()=>{
  const s=newWinterGame();assert.equal(s.heroes.length,1);assert.equal(s.towers.length,2);assert.equal(s.players[0].gold,230);
  for(const [x,y] of [[-1,0],[6,9],[2,2],[8,7],[24,3]])assert.equal(canBuildAt(s,x,y),false);
  assert.equal(canBuildAt(s,10,7),true);
  applyCommand(s,{t:'build',p:0,tower:'sungnyemun',x:10,y:7});const tower=s.towers.at(-1);
  assert.equal(s.players[0].gold,160);assert.equal(canBuildAt(s,10,7),false);
  applyCommand(s,{t:'upgrade',p:0,id:tower.id});assert.equal(tower.level,2);assert.equal(s.players[0].gold,100);
  applyCommand(s,{t:'sell',p:0,id:tower.id});assert.equal(s.towers.length,2);assert.equal(s.players[0].gold,191);
  applyCommand(s,{t:'move',p:0,h:0,x:12,y:7});for(let i=0;i<240;i++)step(s);
  assert.ok(Math.hypot(s.heroes[0].x-12,s.heroes[0].y-7)<.25);
});
test('관절 모델·한옥·성문·유산의 모든 정점과 변환이 유효',()=>{
  const models=[character('yi'),character('ashigaru'),character('samurai'),hanok(),gate(),towerModel('sungnyemun',3),towerModel('hwaseong',2),...Array.from({length:8},(_,i)=>rock(1+i*.3,i*.79)),pine(3.4,1.7)];
  for(const root of models){root.updateMatrixWorld(true);root.traverse(o=>{
    for(const n of o.matrixWorld.elements)assert.ok(Number.isFinite(n));
    if(o.isMesh)for(const [key,attribute] of Object.entries(o.geometry.attributes))for(const n of attribute.array)assert.ok(Number.isFinite(n),`NaN 3D ${key}`);
  });}
  const hero=models[0],before=hero.userData.legs[0].rotation.x;animateCharacter(hero,1,true,.3,1/60);
  assert.notEqual(hero.userData.legs[0].rotation.x,before);assert.notEqual(hero.userData.arms[1].rotation.x,0);
  const scene=new THREE.Group();scene.add(hanok(),gate());bakeStatic(scene);assert.ok(scene.children.length<25);
});
test('3D 카메라 투영과 클릭 지면 좌표의 왕복',()=>{
  const camera=new THREE.OrthographicCamera(-20,20,12,-12,.1,150);camera.position.set(29,26,33);camera.lookAt(12,0,7);camera.updateMatrixWorld();
  for(const [x,z] of [[8.5,7.5],[16.5,4.5],[6.5,9.5]]){
    const screen=new THREE.Vector3(x,0,z).project(camera),ray=new THREE.Raycaster();ray.setFromCamera(new THREE.Vector2(screen.x,screen.y),camera);
    const actual=ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0,1,0),0),new THREE.Vector3());
    assert.ok(Math.abs(actual.x-x)<1e-8&&Math.abs(actual.z-z)<1e-8);
  }
});
test('두 유산의 1·2·최대 단계가 다른 구조이며 모든 정점이 유효',()=>{
  for(const type of ['sungnyemun','hwaseong']) {
    const heights=[],vertices=[],goldVertices=[],gunLengths=[];
    for(let level=1;level<=MAX_TOWER_LEVEL;level++) {
      const root=towerModel(type,level),bounds=new THREE.Box3().setFromObject(root),visual=towerVisual(type,level);
      heights.push(bounds.max.y);let count=0,gold=0;
      assert.deepEqual(root.scale.toArray(),[1,1,1],'강화 차이를 전체 확대만으로 표현하면 안 됨');
      assert.ok(root.userData.labelHeight>bounds.max.y);assert.ok(visual.name&&visual.appearance);
      assert.equal(visual.upgradeCount,level-1);assert.equal(visual.isMax,level===MAX_TOWER_LEVEL);
      assert.equal(visual.next===null,visual.isMax);assert.equal(visual.cost===null,visual.isMax);
      root.traverse(o=>{if(!o.isMesh)return;count+=o.geometry.attributes.position.count;if(o.material===MAT.gold)gold+=o.geometry.attributes.position.count;
        for(const [key,attribute] of Object.entries(o.geometry.attributes))for(const n of attribute.array)assert.ok(Number.isFinite(n),`${type} ${level}단계 ${key}`);
      });
      vertices.push(count);goldVertices.push(gold);
      if(type==='hwaseong') {
        const gun=root.userData.gun;assert.ok(gun?.children.some(c=>c.material===MAT.black),'실제 포신이 회전·반동 그룹에 속해야 함');
        assert.equal(gun.userData.restZ,gun.position.z);
        gunLengths.push(new THREE.Box3().setFromObject(gun).getSize(new THREE.Vector3()).z);
        gun.rotation.y=Math.PI/2;root.updateMatrixWorld(true);
        assert.ok(Math.abs(gun.localToWorld(new THREE.Vector3(0,.1,1)).x-1)<1e-8);
      }
    }
    assert.ok(heights[1]>heights[0]+.25,`${type}: 2단계 실루엣 차이 부족`);
    assert.ok(heights[2]>heights[1]+1,`${type}: 최대 단계 중층 구조 부족`);
    assert.equal(new Set(vertices).size,3);assert.ok(goldVertices[2]>goldVertices[1]*2);
    if(gunLengths.length)assert.ok(gunLengths[2]>gunLengths[1]&&gunLengths[1]>gunLengths[0]);
  }
});
test('실제 강화 비용·최대 단계와 시각 표시의 일치',()=>{
  for(const type of ['sungnyemun','hwaseong']) {
    const s=newWinterGame(),tower=s.towers.find(t=>t.type===type);
    if(type==='hwaseong')applyCommand(s,{t:'sell',p:0,id:s.towers.find(t=>t.type==='sungnyemun').id});
    while(!towerVisual(type,tower.level).isMax) {
      const before=s.players[0].gold,visual=towerVisual(type,tower.level),oldLevel=tower.level;
      applyCommand(s,{t:'upgrade',p:0,id:tower.id});assert.equal(tower.level,oldLevel+1);assert.equal(s.players[0].gold,before-visual.cost);
      const model=towerModel(type,tower.level);assert.equal(model.userData.visual.upgradeCount,tower.level-1);
    }
    const gold=s.players[0].gold;applyCommand(s,{t:'upgrade',p:0,id:tower.id});
    assert.equal(tower.level,MAX_TOWER_LEVEL);assert.equal(s.players[0].gold,gold);assert.equal(tower.branch,null);
  }
});
test('높아진 최대 유산에서 발사하고 실제 표적 좌표에 착탄',()=>{
  const scene=new THREE.Scene(),tower=towerModel('hwaseong',3);tower.position.set(8.5,.03,7.5);tower.userData.gun.rotation.y=.7;scene.add(tower);
  const world={scene,bullets:new Map(),towers:new Map([[1,{root:tower}]]),glowTex:null},muzzle=tower.userData.gun.localToWorld(tower.userData.gun.userData.muzzle.clone());
  const p={id:10,kind:'shell',mode:'lob',x:8.5,y:7.1,sx:8.5,sy:7.1,k:0,src:{kind:'tower',ref:{id:1}}},game={projectiles:[p],enemies:[]};
  WinterWorld.prototype.projectiles.call(world,game);const shell=world.bullets.get(10);
  assert.ok(shell.position.distanceTo(muzzle)<1e-8,'최대 화포의 실제 포구에서 출발해야 함');
  p.x=12;p.y=6;p.k=1;WinterWorld.prototype.projectiles.call(world,game);assert.ok(shell.position.distanceTo(new THREE.Vector3(12,.35,6))<1e-8);
  const archer=towerModel('sungnyemun',3);world.towers.set(2,{root:archer});game.enemies=[{id:5,x:12,y:6}];
  const arrow={id:11,kind:'arrow',mode:'homing',x:8.5,y:7.05,target:5,src:{kind:'tower',ref:{id:2}}};game.projectiles.push(arrow);
  WinterWorld.prototype.projectiles.call(world,game);assert.equal(world.bullets.get(11).position.y,archer.userData.arrowHeight+.03);
  arrow.x=12;arrow.y=6;WinterWorld.prototype.projectiles.call(world,game);assert.equal(world.bullets.get(11).position.y,.8);
});
test('영웅의 활·지팡이에서 출발한 투사체가 원래 표적에 착탄',()=>{
  for(const [kind,pKind]of [['yi','arrow'],['sejong','orb']]) {
    const scene=new THREE.Scene(),root=combatantModel(kind);root.position.set(8,.035,7);root.rotation.y=.8;scene.add(root);animateCharacter(root,.25,false,.15,1/60);
    const socket=root.userData.weapons[1],muzzle=socket.localToWorld(socket.userData.muzzle.clone()),target={id:5,x:12,y:6};
    const world={scene,bullets:new Map(),towers:new Map(),units:new Map([['h1',root]]),glowTex:null};
    const projectile={id:1,kind:pKind,mode:'homing',x:8,y:7,target:5,src:{kind:'hero',id:1}},game={projectiles:[projectile],enemies:[target]};
    WinterWorld.prototype.projectiles.call(world,game);assert.ok(world.bullets.get(1).position.distanceTo(muzzle)<1e-8,`${kind} 손의 무기에서 출발하지 않음`);
    projectile.x=target.x;projectile.y=target.y;WinterWorld.prototype.projectiles.call(world,game);
    assert.ok(world.bullets.get(1).position.distanceTo(new THREE.Vector3(target.x,.8,target.y))<1e-8);
  }
});
test('홍의 질풍의 실제 연쇄 화살은 맞은 적에서 이어지고 영웅의 손으로 돌아가지 않음',()=>{
  const s=newBattleGame({stageId:'s1',heroIds:['gwak'],support:false}),h=s.heroes[0];s.towers=[];h.ultCd=0;h.cd=0;
  const enemies=[1,2].map(dx=>{const e=spawnEnemy(s,'samurai',0,1);e.x=h.x+dx;e.y=h.y;e.hp=e.maxHp=10000;e.stunT=100;return e;});
  applyCommand(s,{t:'heroUlt',p:0,h:0,x:h.x,y:h.y});
  let chain;
  for(let i=0;i<30&&!chain;i++){step(s);chain=s.projectiles.find(p=>p.chained);}
  assert.ok(chain,'실제 영웅 공격에서 연쇄 화살이 생겨야 함');assert.equal(chain.src.ref,h);assert.ok(enemies.some(e=>Math.hypot(chain.x-e.x,chain.y-e.y)<.7));
  const scene=new THREE.Scene(),root=combatantModel('gwak');root.position.set(h.x,.035,h.y);scene.add(root);
  const world={scene,bullets:new Map(),towers:new Map(),units:new Map([[`h${h.id}`,root]]),glowTex:null};
  WinterWorld.prototype.projectiles.call(world,{projectiles:[chain],enemies});const arrow=world.bullets.get(chain.id);
  assert.equal(arrow.userData.arrow,undefined);assert.ok(arrow.position.distanceTo(new THREE.Vector3(chain.x,.9,chain.y))<1e-8);
});
test('안중근의 실제 사격·일곱 발·저격과 단군 번개는 무기에서, 연쇄 번개는 적에서 출발',()=>{
  for(const kind of ['ahn','dangun']) {
    const s=newBattleGame({stageId:'s1',heroIds:[kind],support:false}),h=s.heroes[0];s.towers=[];h.cd=0;h.skillCd=0;h.ultCd=0;
    for(const dx of [1,2]){const e=spawnEnemy(s,'samurai',0,1);e.x=h.x+dx;e.y=h.y;e.hp=e.maxHp=10000;e.stunT=100;}
    step(s);
    if(kind==='ahn'){applyCommand(s,{t:'heroSkill',p:0,h:0,x:s.enemies[0].x,y:s.enemies[0].y});applyCommand(s,{t:'heroUlt',p:0,h:0,x:s.enemies[0].x,y:s.enemies[0].y});}
    const events=s.events.filter(e=>['shot','snipe','bolt'].includes(e.k));
    assert.equal(events.length,kind==='ahn'?9:2);assert.ok(events.some(e=>e.caster===h.id));
    const scene=new THREE.Scene(),root=combatantModel(kind);root.position.set(h.x,.035,h.y);root.rotation.y=.8;scene.add(root);animateCharacter(root,.25,false,.15,1/60);
    const fx=new BattleEffects(scene,null),world={fx,units:new Map([[`h${h.id}`,root]])},socket=root.userData.weapons[1],muzzle=socket.localToWorld(socket.userData.muzzle.clone());
    for(const e of events) {
      WinterWorld.prototype.firingLine.call(world,e);const points=fx.active.at(-1).root.geometry.attributes.position;
      const start=new THREE.Vector3().fromBufferAttribute(points,0),end=new THREE.Vector3().fromBufferAttribute(points,points.count-1);
      assert.ok(start.distanceTo(e.caster===h.id?muzzle:new THREE.Vector3(e.x1,.8,e.y1))<1e-5);
      assert.ok(end.distanceTo(new THREE.Vector3(e.x2,.8,e.y2))<1e-5);
    }
    fx.destroy();
  }
});
test('학익진이 실제 적에게 피해를 주고 재사용 시간을 적용',()=>{
  const s=newWinterGame(),h=s.heroes[0];h.skillCd=0;
  const e=spawnEnemy(s,'samurai',0,1);e.x=h.x+1;e.y=h.y;
  const before=e.hp;applyCommand(s,{t:'heroSkill',p:0,h:0,x:e.x,y:e.y});assert.ok(e.hp<before);assert.ok(h.skillCd>0);
});
test('학익진의 표시·연출과 실제 피해 부채꼴이 일치',()=>{
  const s=newWinterGame(),h=s.heroes[0];h.skillCd=0;const angle=.91;
  const put=(r,a)=>{const e=spawnEnemy(s,'samurai',0,1);e.x=h.x+Math.cos(a)*r;e.y=h.y+Math.sin(a)*r;return e;};
  const inside=put(YI_FAN.range-.05,angle+YI_FAN.halfAngle-.01),outsideAngle=put(2,angle+YI_FAN.halfAngle+.01),outsideRange=put(YI_FAN.range+.05,angle);
  const hp=[inside,outsideAngle,outsideRange].map(e=>e.hp);
  applyCommand(s,{t:'heroSkill',p:0,h:0,x:h.x+Math.cos(angle),y:h.y+Math.sin(angle)});
  assert.ok(inside.hp<hp[0]);assert.equal(outsideAngle.hp,hp[1]);assert.equal(outsideRange.hp,hp[2]);
  const event=s.events.find(e=>e.k==='cone');assert.ok(event);assert.equal(event.r,YI_FAN.range);assert.equal(event.w,YI_FAN.halfAngle);
  const scene=new THREE.Scene(),fx=new BattleEffects(scene,null);fx.preview('heroSkill',h,new THREE.Vector3(h.x+Math.cos(angle),0,h.y+Math.sin(angle)));
  scene.updateMatrixWorld(true);const geo=fanGeometry(),p=geo.attributes.position;
  for(let i=1;i<p.count;i++){
    const world=fx.fan.localToWorld(new THREE.Vector3().fromBufferAttribute(p,i)),dx=world.x-h.x,dz=world.z-h.y;
    assert.ok(Math.abs(Math.hypot(dx,dz)-YI_FAN.range)<1e-5);assert.ok(Math.abs(Math.atan2(dz,dx)-angle)<=YI_FAN.halfAngle+1e-6);
  }
  geo.dispose();fx.reset();
});
test('밀집 착탄 효과 상한과 재시작 GPU 자원 정리',()=>{
  const scene=new THREE.Scene(),fx=new BattleEffects(scene,null);let released=0;
  for(let i=0;i<80;i++){
    fx.impact(i%24,i%14,.55);fx.active.at(-1).root.traverse(o=>{o.geometry?.addEventListener('dispose',()=>released++);});
  }
  assert.equal(fx.active.length,64);assert.ok(released>0);fx.volley(4,4,0);fx.barrage(6,6);fx.update(.2);
  for(const e of fx.active)e.root.traverse(o=>{if(o.geometry)for(const n of o.geometry.attributes.position.array)assert.ok(Number.isFinite(n));});
  fx.reset();assert.equal(fx.active.length,0);assert.deepEqual(scene.children,fx.previewRoots);assert.ok(fx.previewRoots.every(root=>!root.visible));assert.ok(released>80);
});
test('6개 파도 끝까지 실제 엔진으로 진행하고 승패 반환',()=>{
  const s=newWinterGame(),bot=createBot(s,0,{});let seenSamurai=false;
  for(let i=0;i<60*700&&!s.result;i++){
    botThink(s,bot,c=>applyCommand(s,c));botSkills(s,bot,c=>applyCommand(s,c));
    if(s.wave.phase==='prep')applyCommand(s,{t:'nextWave',p:0});
    step(s);seenSamurai ||= s.enemies.some(e=>e.type==='samurai');s.events.length=0;
  }
  assert.ok(seenSamurai);assert.ok(s.result,'전투가 종료되지 않음');assert.equal(s.result.win,true,'기본 방어 전략으로 승리 불가');assert.equal(s.wave.n,6);assert.ok(s.players[0].stats.kills>50);
  console.log(`    6파 승리 · 성문 ${s.lives}/20 · 처치 ${s.players[0].stats.kills}`);
});
test('25개 전장 초기 배치·실제 예산·권장 강화와 지원 끄기',()=>{
  assert.deepEqual(campaignSupport('s13'),{hero:5,skill:2,tower:13});
  assert.deepEqual(campaignSupport('s25'),{hero:10,skill:5,tower:30});
  for(const stage of STAGES) {
    const s=newBattleGame({stageId:stage.id}),levels=campaignSupport(stage.id);
    assert.equal(s.heroes.length,2);assert.equal(s.towers.length,2);assert.equal(s.wave.total,stage.waves.length);
    assert.equal(s.players[0].gold+s.towers.reduce((n,t)=>n+t.spent[0],0),stage.startGold);
    assert.ok(s.players[0].gold>=0);assert.deepEqual(s.players[0].towers,TOWER_ORDER);
    for(const t of s.towers){assert.equal(t.metaLv,levels.tower);assert.equal(t.spent[0],metaCost(TOWERS[t.type].levels[0].cost,levels.tower));assert.ok(s.heroes.every(h=>Math.hypot(t.cx-h.x,t.cy-h.y)>=1.2),'초기 유산이 영웅을 가림');}
    for(const h of s.heroes)assert.equal(h.metaLv,levels.hero);
  }
  const raw=newBattleGame({stageId:'s25',support:false,heroIds:['ahn','dangun'],skillId:'hanpa'});
  assert.deepEqual(raw.heroes.map(h=>h.heroId),['ahn','dangun']);assert.equal(raw.players[0].skills[0].id,'hanpa');
  assert.ok(raw.heroes.every(h=>h.metaLv===0));assert.ok(raw.towers.every(t=>t.metaLv===0));assert.equal(raw.players[0].skills[0].lv,0);
});
test('유산 10종의 기본·보강·완성·A·B 50개 외형과 실제 특화 비용',()=>{
  for(const type of TOWER_ORDER) {
    const counts=[];
    for(const [level,branch] of [[1,null],[2,null],[3,null],[4,'A'],[4,'B']]) {
      const root=towerModel(type,level,branch),visual=towerVisual(type,level,branch,true),bounds=new THREE.Box3().setFromObject(root);let vertices=0;
      assert.equal(visual.isMax,level===4);assert.equal(visual.upgradeCount,level-1);assert.ok(bounds.max.y>1&&bounds.max.y<6);assert.ok(root.userData.labelHeight>bounds.max.y);
      root.traverse(o=>{if(o.isMesh){vertices+=o.geometry.attributes.position.count;for(const attribute of Object.values(o.geometry.attributes))for(const n of attribute.array)assert.ok(Number.isFinite(n),`${type} ${level}${branch??''}`);}});counts.push(vertices);
      WinterWorld.prototype.disposeModel.call({},root);
    }
    assert.equal(new Set(counts).size,5,`${type} 단계·특화 외형 중복`);
    for(const branch of ['A','B']) {
      const s=newBattleGame({stageId:'s25'});s.players[0].gold=5000;
      let t=s.towers.find(t=>t.type===type);
      if(!t){let found=false;for(let y=0;y<14&&!found;y++)for(let x=0;x<24&&!found;x++)if(canBuildAt(s,x,y)){applyCommand(s,{t:'build',p:0,tower:type,x,y});found=true;}t=s.towers.at(-1);}
      for(let i=0;i<2;i++){const old=s.players[0].gold,price=metaCost(TOWERS[type].levels[t.level].cost,t.metaLv);applyCommand(s,{t:'upgrade',p:0,id:t.id});assert.equal(s.players[0].gold,old-price);}
      const old=s.players[0].gold;applyCommand(s,{t:'upgrade',p:0,id:t.id,branch});assert.equal(t.level,3);assert.equal(towerTier(t),4);assert.equal(t.branch,branch);assert.equal(s.players[0].gold,old-metaCost(TOWERS[type].branches[branch].cost,t.metaLv));
      const after=s.players[0].gold;applyCommand(s,{t:'upgrade',p:0,id:t.id,branch:branch==='A'?'B':'A'});assert.equal(s.players[0].gold,after);assert.equal(t.branch,branch);
    }
  }
});
test('전체 영웅·일반 병력·적장·소환 병기의 모델과 관절이 유효',()=>{
  const kinds=[...Object.keys(HEROES),...Object.keys(ENEMIES),'militia','guard','elite','monk','wall','turtle','courier'];
  for(const kind of kinds) {
    const root=combatantModel(kind);assert.equal(!!root.userData.hero,!!HEROES[kind]);animateCharacter(root,1.2,true,.4,1/60);root.updateMatrixWorld(true);
    root.traverse(o=>{for(const n of o.matrixWorld.elements)assert.ok(Number.isFinite(n),kind);if(o.isMesh)for(const attribute of Object.values(o.geometry.attributes))for(const n of attribute.array)assert.ok(Number.isFinite(n),kind);});
    assert.ok(root.userData.labelHeight>1);WinterWorld.prototype.disposeCharacter.call({disposeModel:WinterWorld.prototype.disposeModel},root);
  }
});
test('영웅기 실제 5칸 제한·궁극기 목책·비기 반경과 조준 표시 일치',()=>{
  const s=newBattleGame({heroIds:['sejong','gwon']}),h=s.heroes[0],far=new THREE.Vector3(h.x+20,0,h.y+10);
  const target=abilityTarget(s,'heroSkill',h,far,'singijeon');assert.ok(Math.abs(Math.hypot(target.x-h.x,target.y-h.y)-5)<1e-8);assert.equal(target.radius,1.8);
  h.skillCd=0;applyCommand(s,{t:'heroSkill',p:0,h:0,x:far.x,y:far.z});const p=s.projectiles.find(p=>p.kind==='hangul');assert.equal(p.x,target.x);assert.equal(p.y,target.y);
  for(const [id,def] of Object.entries(SKILLS))if(def.target==='point')assert.equal(abilityTarget(s,'skill',h,far,id).radius,def.radius);
  const gwon=s.heroes[1],wall=abilityTarget(s,'heroUlt',gwon,far,'singijeon');gwon.ultCd=0;applyCommand(s,{t:'heroUlt',p:0,h:1,x:far.x,y:far.z});assert.ok(Math.hypot(s.summons[0].x-wall.x,s.summons[0].y-wall.y)<1e-8);
});
test('실제 표시 동기화: 특화 모델 교체·소환 군사·목책·거북선·영역 정리',()=>{
  const world=Object.assign(Object.create(WinterWorld.prototype),{scene:new THREE.Scene(),camera:new THREE.OrthographicCamera(),theme:seasonFor(STAGES[0]),units:new Map(),towers:new Map(),bullets:new Map(),scenery:new Map(),corpses:[],pickables:[],glowTex:null,range:new THREE.Group(),placement:new THREE.Group(),marker:new THREE.Group()});
  world.fx=new BattleEffects(world.scene,null);
  world.crowd=new CrowdRenderer(world.scene);world.unitTemplates=new Map();
  const s=newBattleGame({heroIds:['gwon','gwak']}),tower=s.towers[0];s.players[0].gold=3000;
  applyCommand(s,{t:'upgrade',p:0,id:tower.id});applyCommand(s,{t:'upgrade',p:0,id:tower.id});world.sync(s,0,1/60,{kind:'tower',id:tower.id});const previous=world.towers.get(tower.id).root;
  assert.ok(world.range.scale.toArray().every(Number.isFinite),'첫 틱 전 사거리 링');
  applyCommand(s,{t:'upgrade',p:0,id:tower.id,branch:'B'});world.sync(s,.1,1/60,{kind:'tower',id:tower.id});
  assert.notEqual(world.towers.get(tower.id).root,previous);assert.equal(world.towers.get(tower.id).root.userData.visual.level,4);
  for(const h of s.heroes){h.skillCd=0;h.ultCd=0;}
  applyCommand(s,{t:'heroUlt',p:0,h:0,x:s.heroes[0].x,y:s.heroes[0].y});applyCommand(s,{t:'heroSkill',p:0,h:1,x:s.heroes[1].x,y:s.heroes[1].y});
  s.movers.push({id:999,kind:'turtle',x:3,y:4,dx:1,dy:0});s.zones.push({id:998,kind:'ice',x:4,y:5,r:2,t:5});
  world.sync(s,.2,1/60,{kind:'hero',h:1});assert.equal([...world.units.values()].filter(r=>r.userData.entity.kind==='ally').length,4);assert.equal(world.scenery.size,2);
  world.reset();assert.equal(world.units.size,0);assert.equal(world.scenery.size,0);assert.equal(world.towers.size,0);assert.equal(world.bullets.size,0);
});
test('첫 틱 전 유산 수치·야간·공격 강화 표시와 계산된 배율 보존',()=>{
  const s=newBattleGame({stageId:'s25'}),tower=s.towers[0],base=towerBase(tower.type,tower.level,tower.branch);
  let stats=towerDisplayStats(tower,s);assert.ok(Number.isFinite(stats.dmg)&&Number.isFinite(stats.range));
  assert.equal(stats.dmg,base.dmg*1.6);assert.equal(stats.range,base.range*1.06);
  s.wave.tactic='night';s.wave.phase='battle';s.buffs.dmgT=5;s.buffs.dmg=.3;
  stats=towerDisplayStats(tower,s);assert.ok(Math.abs(stats.dmg-base.dmg*1.3*1.6)<1e-8);assert.ok(Math.abs(stats.range-base.range*.85*1.06)<1e-8);
  tower.dmgMult=0;tower.rangeMult=1.23;stats=towerDisplayStats(tower,s);assert.equal(stats.dmg,0);assert.equal(stats.range,base.range*1.23);
});
test('비기 두 슬롯의 호환·독립 재사용·사망 중 실제 동의보감 부활',()=>{
  assert.deepEqual(normalizeBattleSkills(),['singijeon','hanpa']);assert.deepEqual(normalizeBattleSkills({skillId:'hanpa'}),['hanpa']);
  assert.deepEqual(normalizeBattleSkills({skillIds:['invalid','hanpa','hanpa','bigyeok','bongsu'],skillId:'singijeon'}),['hanpa','bigyeok']);
  assert.deepEqual(normalizeBattleSkills({skillIds:[]}),['singijeon']);assert.deepEqual(normalizeBattleSkills({skillIds:['toString']}),['singijeon']);
  const single=newBattleGame({skillId:'hanpa'});assert.equal(single.players[0].skills.length,1);assert.equal(equippedAbility(single,1),null);
  assert.equal(newBattleGame({stageId:STAGE_ID,heroIds:['yi'],skillIds:['singijeon','hanpa']}).players[0].skills.length,2);
  const s=newBattleGame({skillIds:['singijeon','hanpa']}),[f,g]=s.players[0].skills;f.cd=g.cd=0;
  applyCommand(s,{t:'skill',p:0,slot:1,x:6,y:5});assert.equal(f.cd,0);assert.equal(g.cd,g.max);assert.equal(s.zones[0].kind,'ice');assert.equal(s.zones[0].r,2);
  applyCommand(s,{t:'skill',p:0,slot:0,x:9,y:7});assert.equal(f.cd,f.max);assert.equal(g.cd,g.max);assert.equal(s.projectiles.filter(p=>p.kind==='rocket').length,12);
  const revive=newBattleGame({skillIds:['bongsu','donguibogam']});for(const h of revive.heroes){h.dead=true;h.hp=0;h.respawn=10;}
  revive.players[0].skills[1].cd=0;applyCommand(revive,{t:'skill',p:0,slot:1,x:0,y:0});assert.ok(revive.heroes.every(h=>!h.dead&&h.hp===h.maxHp));assert.ok(revive.players[0].skills[1].cd>0);
});
test('UI의 원래 클릭 좌표가 엔진에서 한 번만 보정되고 의병 배치와 일치',()=>{
  const s=newBattleGame({heroIds:['gwon','gwak'],skillIds:['bigyeok','uibyeong']}),[gwon,gwak]=s.heroes,point=new THREE.Vector3(16,0,8);
  gwon.x=14;gwon.y=3.9;gwon.ultCd=0;
  const aim=abilityTarget(s,'heroUlt',gwon,point),command=targetedCommand('heroUlt',0,point);
  applyCommand(s,{p:0,...command});assert.equal(command.x,16);assert.equal(command.y,8);
  assert.ok(Math.hypot(s.summons[0].x-aim.x,s.summons[0].y-aim.y)<1e-8);
  for(const [kind,h,slot,n] of [['heroSkill',1,0,3],['skill',1,1,4]]) {
    gwak.skillCd=0;s.players[0].skills[1].cd=0;const p=new THREE.Vector3(23,0,11),preview=abilityTarget(s,kind,gwak,p,s.players[0].skills[slot].id),before=s.summons.length;
    applyCommand(s,{p:0,...targetedCommand(kind,h,p,slot)});const actual=s.summons.slice(before);assert.equal(actual.length,n);
    actual.forEach((unit,i)=>assert.ok(Math.hypot(unit.x-preview.spawns[i].x,unit.y-preview.spawns[i].y)<1e-8));
  }
  const scene=new THREE.Scene(),fx=new BattleEffects(scene,null),dash=abilityTarget(s,'heroSkill',{...gwon,heroId:'gang'},point);
  fx.preview('heroSkill',gwon,point,dash);assert.equal(fx.reach.scale.x,4);assert.equal(fx.corridorRoot.scale.z,1.6);
  fx.preview('skill',gwak,point,abilityTarget(s,'skill',gwak,point,'uibyeong'));assert.equal(fx.spawns.children.filter(o=>o.visible).length,4);assert.equal(fx.target.visible,false);fx.reset();
});
test('25개 지도에서 실제 이동으로 집결하고 합격기 거리 조건을 충족',()=>{
  for(const stage of STAGES) {
    const s=newBattleGame({stageId:stage.id}),map=getMap(stage.id),points=rallyTargets(s),before=s.heroes.map(h=>({x:h.x,y:h.y}));assert.ok(points);
    assert.equal(points[0].path,points[1].path);
    points.forEach((p,h)=>{assert.ok(p.x>=.8&&p.x<map.w-.8&&p.y>=.8&&p.y<map.h-.8);assert.ok([T_PATH,T_BASE].includes(map.grid[Math.floor(p.y)*map.w+Math.floor(p.x)]));applyCommand(s,{t:'move',p:0,h,x:p.x,y:p.y});});
    assert.deepEqual(s.heroes.map(h=>({x:h.x,y:h.y})),before,'집결 명령이 순간이동시킴');assert.equal(s.resonance.gauge,0);
    for(let i=0;i<60*15&&Math.hypot(s.heroes[0].x-s.heroes[1].x,s.heroes[0].y-s.heroes[1].y)>1;i++)step(s);
    assert.ok(comboView(s).distance<1.01,stage.id);s.resonance.gauge=100;assert.equal(comboView(s).ok,true);
  }
  const solo=newWinterGame();assert.equal(rallyTargets(solo),null);assert.equal(comboView(solo).hasPair,false);
});
test('영웅 28조합의 전용 10종·일반 합격기를 실제 명령과 효과로 검증',()=>{
  const ids=Object.keys(HEROES),seen=new Set();let pairs=0;
  for(let i=0;i<ids.length;i++)for(let j=i+1;j<ids.length;j++) {
    const s=newBattleGame({heroIds:[ids[i],ids[j]],support:false}),def=findCombo(ids[i],ids[j]);
    s.heroes.forEach((h,k)=>{h.x=10+k;h.y=7;h.hp=h.maxHp/2;});s.resonance.gauge=100;s.events.length=0;
    const e=spawnEnemy(s,'samurai',0,1);e.x=10;e.y=7;e.hp=e.maxHp=3000;const oldGold=s.players[0].gold;
    applyCommand(s,{t:'combo',p:0});const event=s.events.find(e=>e.k==='combo');assert.ok(event);assert.equal(event.id,def.id);assert.equal(event.name,def.name);assert.equal(event.a,ids[i]);assert.equal(event.b,ids[j]);assert.equal(s.players[0].stats.combos,1);assert.ok(s.resonance.gauge<100);
    if(def.id==='yi_sejong'){assert.equal(s.buffs.dmg,.6);assert.equal(s.movers.length,getMap(s.stageId).paths.length);}
    else if(def.id==='gwak_gwon'){assert.equal(s.summons.length,6*getMap(s.stageId).paths.length);assert.ok(s.heroes.every(h=>h.buffs.invulnT===8));}
    else if(def.id==='eulji_sejong'){assert.equal(s.buffs.armorZeroT,10);assert.equal(s.players[0].gold,oldGold+150);}
    else if(def.id==='gang_yi')assert.equal(s.projectiles[0].kind,'meteor');
    else if(def.id==='ahn_yi')assert.equal(s.projectiles[0].kind,'bigshell');
    else if(def.id==='dangun_sejong'){assert.ok(s.heroes.every(h=>h.hp===h.maxHp&&h.buffs.invulnT===8));assert.equal(s.players[0].gold,oldGold+200);}
    else assert.ok(e.hp<3000,`${def.id} 실제 피해 없음`);
    const scene=new THREE.Scene(),fx=new BattleEffects(scene,null);fx.combo(event,s);fx.update(.3);assert.ok(fx.active.length>0);
    fx.active.forEach(effect=>effect.root.traverse(o=>{if(o.geometry)for(const n of o.geometry.attributes.position.array)assert.ok(Number.isFinite(n));}));fx.reset();assert.deepEqual(scene.children,fx.previewRoots);
    seen.add(event.id);pairs++;
  }
  assert.equal(pairs,28);assert.equal(seen.size,COMBOS.length+1);
});
test('합격기 미충전·사망·거리 초과는 게이지와 성공 이벤트를 보존',()=>{
  for(const reason of ['charge','dead','far']) {
    const s=newBattleGame();s.resonance.gauge=reason==='charge'?99:100;s.heroes[0].x=4;s.heroes[0].y=4;s.heroes[1].x=reason==='far'?12:5;s.heroes[1].y=4;
    if(reason==='dead')s.heroes[1].dead=true;const before=s.resonance.gauge;s.events.length=0;
    assert.equal(comboView(s).ok,false);applyCommand(s,{t:'combo',p:0});assert.equal(s.players[0].stats.combos,0);assert.equal(s.resonance.gauge,before);assert.ok(!s.events.some(e=>e.k==='combo'));
  }
});
test('비격진천뢰 지면 예고가 실제 반경·지연 시간을 따르고 착탄 후 정리',()=>{
  const s=newBattleGame({skillIds:['hanpa','bigyeok']}),world=Object.assign(Object.create(WinterWorld.prototype),{scene:new THREE.Scene(),scenery:new Map()});
  s.players[0].skills[1].cd=0;applyCommand(s,{t:'skill',p:0,slot:1,x:7,y:8});const p=s.projectiles[0];assert.equal(p.dur,2);assert.equal(p.hit.r,1.4);
  world.combatScenery(s,0,0);const warning=world.scenery.get(`p${p.id}`);assert.ok(warning);assert.equal(warning.position.x,7);assert.equal(warning.position.z,8);assert.equal(warning.children[0].geometry.parameters.outerRadius,1.4);
  let disposed=0;warning.traverse(o=>o.geometry?.addEventListener('dispose',()=>disposed++));for(let i=0;i<60;i++)step(s);
  world.combatScenery(s,1,1/60);assert.ok(warning.userData.progress.scale.x>.4&&warning.userData.progress.scale.x<.6);
  for(let i=0;i<62;i++)step(s);world.combatScenery(s,2.1,1/60);assert.equal(world.scenery.size,0);assert.ok(disposed>0);
  const shellGame=newBattleGame({skillIds:['cheonja']}),enemy=spawnEnemy(shellGame,'samurai',0,1);enemy.x=7;enemy.y=8;enemy.hp=enemy.maxHp=3000;shellGame.players[0].skills[0].cd=0;
  const splash=spawnEnemy(shellGame,'samurai',0,1);splash.x=7.7;splash.y=8;splash.hp=splash.maxHp=3000;
  applyCommand(shellGame,{t:'skill',p:0,slot:0,x:7,y:8});const shell=shellGame.projectiles[0];assert.equal(shell.hit.r,.5);assert.equal(shell.hit.single,enemy.id);
  world.combatScenery(shellGame,0,0);assert.equal(world.scenery.get(`p${shell.id}`).children[0].geometry.parameters.outerRadius,.8);
  for(let i=0;i<30;i++)step(shellGame);assert.ok(splash.hp<3000,'천자총통의 0.8칸 실제 폭발 피해');world.combatScenery(shellGame,.5,0);assert.equal(world.scenery.size,0);
});
test('25개 전장의 실제 파도·적장·소환·승패를 끝까지 시뮬레이션',()=>{
  let wins=0,losses=0,bosses=new Set(),summons=new Set();
  for(const stage of STAGES) {
    const s=newBattleGame({stageId:stage.id}),bot=createBot(s,0,{});
    for(let i=0;i<90000&&!s.result;i++) {
      botThink(s,bot,c=>applyCommand(s,c));botSkills(s,bot,c=>applyCommand(s,c));step(s);
      for(const e of s.enemies)if(e.tier===4)bosses.add(e.type);for(const e of s.summons)summons.add(e.kind);s.events.length=0;
    }
    assert.ok(s.result,`${stage.id} 전투 미종료`);assert.ok(Number.isFinite(s.time)&&s.lives>=0);s.result.win?wins++:losses++;
    if(['s1','s13'].includes(stage.id))assert.equal(s.result.win,true,`${stage.id} 기본 방어 회귀`);
  }
  assert.equal(wins+losses,25);assert.ok(bosses.size>=8);assert.ok(summons.size>0);
  console.log(`    25전 종료 · 기본 봇 ${wins}승 ${losses}패 · 적장 ${bosses.size}종 (전략별 승패는 다름)`);
});
test('서로 다른 기술 연출은 프레임 수에 독립적이며 만료된 GPU 자원을 한 번씩 해제',()=>{
  for(const kind of ['ring','shock','slash','smite','heal','hangul','flood']){
    const scene=new THREE.Scene(),fx=new BattleEffects(scene,null);fx.spell(kind,3,5,1.7,.8);
    const resources=new Set(),disposed=new Map();
    fx.active[0].root.traverse(o=>{if(o.geometry)resources.add(o.geometry);if(o.material)resources.add(o.material);});
    for(const resource of resources)resource.addEventListener('dispose',()=>disposed.set(resource,(disposed.get(resource)??0)+1));
    fx.update(.2);fx.active[0].root.updateMatrixWorld(true);
    fx.active[0].root.traverse(o=>assert.ok(o.matrixWorld.elements.every(Number.isFinite)));
    fx.update(2);assert.equal(fx.active.length,0);assert.deepEqual(scene.children,fx.previewRoots);
    for(const resource of resources)assert.equal(disposed.get(resource),1);fx.destroy();
  }
  for(const kind of ['heal','hangul','smite']){
    const a=new BattleEffects(new THREE.Scene(),null),b=new BattleEffects(new THREE.Scene(),null);
    a.spell(kind,0,0);b.spell(kind,0,0);a.update(.4);for(let i=0;i<4;i++)b.update(.1);
    a.active[0].root.children.forEach((part,i)=>assert.ok(part.position.distanceTo(b.active[0].root.children[i].position)<1e-9));a.destroy();b.destroy();
  }
});
console.log(`\n3D 점검 ${passed}개 통과`);
