import assert from 'node:assert/strict';
import * as T from 'three';
import { HEROES } from '../src/data/heroes.js';
import { ENEMIES } from '../src/data/enemies.js';
import { SKINS,GOLD_LOOK } from '../src/data/skins.js';
import { character,geometry,animateCharacter } from '../src/3d/models.js';
import { combatantModel,cloneCombatantModel } from '../src/3d/combat-models.js';
import { characterMaterial,characterSurface,armorBevelGeometry } from '../src/3d/character-surfaces.js';
import { faceGeometry } from '../src/3d/sculpture.js';
import { combedHairGeometry } from '../src/3d/character-detail.js';
import { WinterWorld } from '../src/3d/world.js';

let passed=0;const test=(name,fn)=>{fn();passed++;console.log(`  ✔ ${name}`);};
const humans=[...new Set([...Object.keys(HEROES),...Object.keys(ENEMIES).filter(k=>k!=='ram'),'militia','guard','elite','monk'])];
const roles=['skin','hair','cloth','armor','leather'];

test('다섯 재질의 15개 작은 맵은 색 공간·밉맵을 구분하고 모든 색상에서 공유',()=>{
  const textures=new Set();
  for(const role of roles){
    const maps=characterSurface(role);assert.equal(maps,characterSurface(role));
    for(const [key,t]of Object.entries(maps)){
      textures.add(t);assert.equal(t.image.width,128);assert.equal(t.image.height,128);assert.equal(t.image.data.length,128*128*4);
      assert.equal(t.colorSpace,key==='map'?T.SRGBColorSpace:T.NoColorSpace);assert.equal(t.wrapS,T.RepeatWrapping);assert.equal(t.wrapT,T.RepeatWrapping);
      assert.equal(t.minFilter,T.LinearMipmapLinearFilter);assert.equal(t.generateMipmaps,true);assert.ok(!t.userData.owned3d);
      const values=new Set();for(let i=0;i<t.image.data.length;i+=4){values.add(t.image.data[i]);assert.equal(t.image.data[i+3],255);}assert.ok(values.size>3);
    }
    const a=characterMaterial(role,'#776655'),b=characterMaterial(role,'#334455');assert.equal(a,characterMaterial(role,'#776655'));
    for(const key of ['map','roughnessMap','bumpMap'])assert.equal(a[key],b[key]);assert.ok(!a.userData.owned3d);
  }
  assert.equal(textures.size,15);assert.throws(()=>characterSurface('missing'));
});

test('33개 인간형 얼굴의 모든 삼각형·법선이 유효하고 위아래 cap 중심이 축에 남음',()=>{
  assert.equal(humans.length,33);
  for(const kind of humans){
    const g=faceGeometry(kind),p=g.attributes.position,n=g.attributes.normal,idx=g.index;
    assert.equal(g,faceGeometry(kind));assert.ok(p.array.every(Number.isFinite));assert.ok(n.array.every(Number.isFinite));
    for(let i=p.count-2;i<p.count;i++){assert.equal(p.getX(i),0);assert.ok(Math.abs(p.getZ(i))<.04,'cap 중심이 앞면으로 돌출되면 안 됨');}
    const a=new T.Vector3(),b=new T.Vector3(),c=new T.Vector3();
    for(let i=0;i<idx.count;i+=3){
      for(let j=0;j<3;j++)assert.ok(idx.getX(i+j)<p.count);
      a.fromBufferAttribute(p,idx.getX(i));b.fromBufferAttribute(p,idx.getX(i+1));c.fromBufferAttribute(p,idx.getX(i+2));
      assert.ok(b.sub(a).cross(c.sub(a)).length()*.5>1e-8,`${kind}: 면적 0인 얼굴 삼각형`);
    }
    for(let i=0;i<n.count;i++)assert.ok(Math.abs(new T.Vector3().fromBufferAttribute(n,i).length()-1)<1e-5);
  }
});

test('실제 병합 모델 33종의 눈 렌즈 정점은 얼굴 표면에서 0.012 이내이며 눈알이 파묻히지 않음',()=>{
  const ray=new T.Raycaster();
  for(const kind of humans){
    const root=character(kind),head=root.userData.head;head.updateWorldMatrix(true,true);
    const skins=head.children.filter(o=>o.material?.userData.characterSurface==='skin'&&o.material.color.getHexString()!=='b77e65');
    const white=head.children.find(o=>o.material?.color.getHexString()==='ded7c3');assert.ok(white,kind);
    const p=white.geometry.attributes.position;
    for(let i=0;i<p.count;i++){
      const v=new T.Vector3().fromBufferAttribute(p,i),origin=head.localToWorld(v.clone().add(new T.Vector3(0,0,1)));
      ray.set(origin,new T.Vector3(0,0,-1).transformDirection(head.matrixWorld));
      const hits=ray.intersectObjects(skins,false);assert.ok(hits.length,`${kind}: 눈 뒤 얼굴 없음`);
      const gap=v.z-head.worldToLocal(hits[0].point.clone()).z;assert.ok(gap>=-.001&&gap<.012,`${kind}: 눈 간격 ${gap}`);
    }
  }
});

test('빗은 머리의 실제 병합 표면이 이마 위부터 정수리까지 얼굴을 덮어 피부가 비치지 않음',()=>{
  const cap=combedHairGeometry(),p=cap.attributes.position,uv=cap.attributes.uv,n=cap.attributes.normal,columns=new Map(),rows=new Map();
  for(let i=0;i<p.count-2;i++){
    const u=uv.getX(i),v=uv.getY(i);if(!columns.has(u))columns.set(u,[]);columns.get(u).push(i);
    if(!rows.has(v))rows.set(v,[]);rows.get(v).push(i);
  }
  for(const list of columns.values())for(let j=1;j<list.length;j++)assert.ok(p.getY(list[j])>p.getY(list[j-1]),'가르마 아래 ring이 접힘');
  for(const list of rows.values())assert.ok(new T.Vector3().fromBufferAttribute(n,list[0]).distanceTo(new T.Vector3().fromBufferAttribute(n,list.at(-1)))<1e-6,'모발 뒤쪽 UV 이음의 법선 분리');
  const head=character('ahn').userData.head;head.updateWorldMatrix(true,true);
  const skin=head.children.filter(o=>o.material?.userData.characterSurface==='skin'&&o.material.color.getHexString()!=='b77e65');
  const hair=head.children.filter(o=>o.material?.userData.characterSurface==='hair');const ray=new T.Raycaster();
  for(const y of [.11,.15,.19,.225])for(const x of (y>.2?[-.025,0,.025]:[-.1,-.05,0,.05,.1])){
    ray.set(head.localToWorld(new T.Vector3(x,y,1)),new T.Vector3(0,0,-1).transformDirection(head.matrixWorld));
    const face=ray.intersectObjects(skin,false)[0],cover=ray.intersectObjects(hair,false)[0];assert.ok(face&&cover);
    assert.ok(cover.distance<face.distance-.0005,`머리가 이마 안에 들어감: ${x},${y}`);
  }
});

test('실제 캐릭터의 피부·머리·직물·가죽은 전용 맵을 쓰고 갑주 모서리는 원본 상자를 훼손하지 않음',()=>{
  const source=geometry('bevel'),snapshot=source.attributes.position.array.slice(),painted=armorBevelGeometry(source);
  assert.notEqual(painted,source);assert.equal(painted,armorBevelGeometry(source));assert.equal(source.attributes.color,undefined);
  const colors=painted.attributes.color.array;assert.ok(Math.max(...colors)-Math.min(...colors)>.15);
  for(const kind of humans){
    const model=character(kind),found=new Set();model.traverse(o=>{const role=o.material?.userData.characterSurface;if(!role)return;found.add(role);assert.equal(o.material.map,characterSurface(role).map);});
    for(const role of ['skin','hair','cloth','leather'])assert.ok(found.has(role),`${kind}: ${role}`);
  }
  assert.deepEqual(source.attributes.position.array,snapshot);
});

test('16종 의복은 피부·머리 맵을 유지하며 복제 자세가 공유 얼굴·재질을 변형하지 않음',()=>{
  let count=0;
  for(const [kind,skins]of Object.entries(SKINS))for(const skin of skins){
    const source=faceGeometry(kind).attributes.position.array.slice(),model=combatantModel(kind,skin.id),copy=cloneCombatantModel(model);
    let colored=0;model.traverse(o=>{
      if(!o.material?.userData.owned3d)return;
      if(o!==model.userData.cape){assert.equal(o.material.color.getHexString(),new T.Color((skin.gold?GOLD_LOOK:skin).body).getHexString());colored++;}
      assert.equal(o.material.map,characterSurface(o.material.userData.characterSurface).map);
    });assert.ok(colored>0);
    const before=model.userData.head.quaternion.clone();animateCharacter(copy,.8,true,.15,1/60);copy.updateMatrixWorld(true);
    assert.ok(model.userData.head.quaternion.equals(before));assert.deepEqual(faceGeometry(kind).attributes.position.array,source);
    copy.traverse(o=>assert.ok(o.matrixWorld.elements.every(Number.isFinite)));count++;
  }
  assert.equal(count,16);
});

test('실제 전장 해제 경로는 의복별 재질만 해제하고 공유 맵·기본 캐릭터 재질을 보존',()=>{
  let mapsDisposed=0,sharedDisposed=0,ownedDisposed=0;
  const onMap=()=>mapsDisposed++,onShared=()=>sharedDisposed++,onOwned=()=>ownedDisposed++;
  const textures=new Set(roles.flatMap(role=>Object.values(characterSurface(role))));for(const t of textures)t.addEventListener('dispose',onMap);
  const baseline=character('yi'),shared=new Set();baseline.traverse(o=>{if(o.material?.userData.characterSurface)shared.add(o.material);});for(const m of shared)m.addEventListener('dispose',onShared);
  const world=Object.create(WinterWorld.prototype),models=[];let ownedCount=0;
  for(const skin of SKINS.yi){const root=combatantModel('yi',skin.id),owned=new Set();root.traverse(o=>{if(o.material?.userData.owned3d)owned.add(o.material);});ownedCount+=owned.size;for(const m of owned)m.addEventListener('dispose',onOwned);models.push(root);}
  for(const root of models)world.disposeCharacter(root);
  assert.equal(ownedDisposed,ownedCount);assert.equal(mapsDisposed,0);assert.equal(sharedDisposed,0);
  for(const t of textures)t.removeEventListener('dispose',onMap);for(const m of shared)m.removeEventListener('dispose',onShared);
});

console.log(`\n캐릭터 표면 점검 ${passed}개 통과`);
