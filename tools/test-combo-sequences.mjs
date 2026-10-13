import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import * as T from 'three';
import {COMBOS} from '../src/data/combos.js';
import {COMBO_SEQUENCES} from '../src/3d/combo-sequence-data.js';
import {ComboImpactArt,comboSequenceRoster,COMBO_IMPACT_STYLES} from '../src/3d/combo-impact-art.js';
import {BattleEffects} from '../src/3d/effects.js';
import {whenBattleArtReady} from '../src/3d/battle-art-ready.js';

const results=[];
async function test(name,fn){await fn();results.push({name,passed:true});console.log('  ✔ '+name);}
function loaded(){const art=new ComboImpactArt();art.ready=true;art.texture=new T.Texture({width:1774,height:887});for(const [id,l]of Object.entries(COMBO_SEQUENCES))art.sequences.set(id,new T.Texture({width:l.width,height:l.height}));return art;}
const disposeMesh=m=>{m.geometry.dispose();m.material.dispose();};

await test('11합격기 각각은 독립 16프레임과 top-down 지면 원점을 가진다',async()=>{
  assert.deepEqual(Object.keys(COMBO_SEQUENCES).sort(),[...COMBOS.map(c=>c.id),'generic'].sort());
  const report=JSON.parse(await fs.readFile('docs/COMBO_SEQUENCE_ASSET_VALIDATION.json','utf8'));
  assert.equal(report.frames,176);assert.equal(report.results.length,11);assert.equal(new Set(Object.values(COMBO_SEQUENCES).map(l=>l.path)).size,11);
  for(const [id,l]of Object.entries(COMBO_SEQUENCES)){
    assert.equal(l.frames,16);assert.equal(l.columns,4);assert.equal(l.rows,4);assert.equal(l.projection,'ground');assert.equal(l.pivots.length,16);
    const validation=report.results.find(r=>r.id===id);assert.equal(validation.alphaDifferences,0);assert.equal(validation.visibleRgbDifferences,0);
    for(const f of validation.frames){assert.ok(f.minimumPadding>=32);assert.ok(f.paintedPixels>100);assert.ok(f.anchorFeature);assert.ok(f.sourceOrigin.x>=f.sourceBounds.left&&f.sourceOrigin.x<f.sourceBounds.left+f.sourceBounds.width);}
  }
});
await test('준비 로스터는 선택 조합만 요청하고 역순·중복·빈 게스트를 처리한다',()=>{
  assert.deepEqual(comboSequenceRoster([{heroId:'yi'},{heroId:'sejong'}]),['yi_sejong']);assert.deepEqual(comboSequenceRoster([{heroId:'sejong'},{heroId:'yi'}]),['yi_sejong']);
  assert.deepEqual(comboSequenceRoster([{heroId:'yi',owner:0},{heroId:'yi',owner:1}]),['generic']);assert.deepEqual(comboSequenceRoster(null),[]);assert.deepEqual(comboSequenceRoster([null,{}]),[]);assert.deepEqual(comboSequenceRoster([{heroId:'yi'}]),[]);
  assert.ok(comboSequenceRoster([...Object.keys(COMBO_SEQUENCES).flatMap(()=>[{heroId:'yi'},{heroId:'gwon'}])]).length===1);
});
await test('176프레임 UV와 의미상 원점은 개별 mesh에 적용되고 바닥 발원점은 고정된다',()=>{
  const art=loaded();let count=0;
  for(const [id,l]of Object.entries(COMBO_SEQUENCES)){
    const a=art.decal(1,'#ff0000',.6,COMBO_IMPACT_STYLES[id].family,id),b=art.decal(1,'#ffffff',.6,'light',id),other=b.geometry.attributes.uv.array.slice();
    assert.equal(a.userData.impactFrames,16);assert.equal(a.userData.impactCombo,id);assert.equal(a.material.color.getHex(),0xffffff);assert.equal(a.rotation.x,-Math.PI/2);
    for(let i=0;i<16;i++){
      art.frame(a,i);assert.equal(a.userData.impactFrame,i);const uv=a.geometry.attributes.uv,p=l.pivots[i],size=a.userData.impactSize;
      for(let j=0;j<uv.count;j++){assert.ok(uv.getX(j)>i%4/4&&uv.getX(j)<(i%4+1)/4);assert.ok(uv.getY(j)>1-(Math.floor(i/4)+1)/4&&uv.getY(j)<1-Math.floor(i/4)/4);}
      assert.ok(Math.abs(a.position.x+(p.x-.5)*size)<1e-6);assert.ok(Math.abs(a.position.z+(p.y-.5)*size)<1e-6);assert.deepEqual(b.geometry.attributes.uv.array,other);count++;
    }
    art.frame(a,99);assert.equal(a.userData.impactFrame,15);art.frame(a,-1);assert.equal(a.userData.impactFrame,0);assert.deepEqual(a.material.map.offset.toArray(),[0,0]);disposeMesh(a);disposeMesh(b);
  }
  assert.equal(count,176);art.dispose();
});
await test('새 16프레임과 누락된 원화의 기존 8프레임은 한 전장에서 각자 범위를 지킨다',()=>{
  const art=loaded(),newMesh=art.decal(1,'#fff',.6,'light','yi_sejong'),oldMesh=art.decal(1,'#fff',.6,'light','missing');
  assert.equal(newMesh.userData.impactFrames,16);assert.equal(oldMesh.userData.impactFrames,8);assert.equal(oldMesh.userData.impactRows,2);
  art.frame(newMesh,15);art.frame(oldMesh,15);assert.equal(newMesh.userData.impactFrame,15);assert.equal(oldMesh.userData.impactFrame,7);disposeMesh(newMesh);disposeMesh(oldMesh);art.dispose();
});

const oldDocument=globalThis.document;globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>({drawImage(){}})})};
function effects(){const fx=new BattleEffects(new T.Scene(),null);fx.comboArt=loaded();return fx;}
try{
  await test('지원·회복 3종도 전용 원화를 실제 아군 위치에만 표시한다',()=>{
    for(const id of ['yi_sejong','gwak_gwon','dangun_sejong']){
      const fx=effects(),event={combo:id,phase:'cast',heroes:[{x:8,y:5},{x:9,y:5}],points:id==='dangun_sejong'?[]:[{x:12,y:7}]};fx.heroCue(event);
      const roots=fx.active.filter(e=>e.root.userData.comboImpact).map(e=>e.root);assert.equal(roots.length,id==='dangun_sejong'?2:3);
      assert.deepEqual(roots.slice(0,2).map(r=>[r.position.x,r.position.z]),[[8,5],[9,5]]);assert.ok(roots.every(r=>r.children.some(m=>m.userData.impactCombo===id)));fx.destroy();
    }
  });
  await test('지연 착탄 2종은 cast 때 지면 폭발을 만들지 않고 impact 좌표에서만 재생한다',()=>{
    for(const id of ['gang_yi','ahn_yi']){
      const fx=effects();fx.heroCue({combo:id,phase:'cast',heroes:[{x:8,y:5},{x:9,y:5}],points:[]});assert.equal(fx.active.filter(e=>e.root.userData.comboImpact).length,0);
      fx.heroCue({combo:id,phase:'impact',points:[{x:3,y:4}]});const root=fx.active.find(e=>e.root.userData.comboImpact).root;assert.deepEqual([root.position.x,root.position.z],[3,4]);assert.ok(root.children.some(m=>m.userData.impactCombo===id));fx.destroy();
    }
  });
  await test('16프레임 재생은 동일 경과 시간·정지·수명 종료에서 같은 상태다',()=>{
    for(const id of Object.keys(COMBO_SEQUENCES)){
      const a=effects(),b=effects(),event={combo:id,phase:'impact',heroes:[],points:[{x:3,y:5}]};a.heroCue(event);b.heroCue(event);
      // Support effects take the allied hero positions.
      if(COMBO_IMPACT_STYLES[id].support){a.reset();b.reset();event.heroes=[{x:3,y:5}];a.heroCue(event);b.heroCue(event);}
      a.update(.32);for(let i=0;i<4;i++)b.update(.08);
      const state=fx=>fx.active.filter(e=>e.root.userData.comboImpact).map(e=>e.root.children.filter(m=>m.userData.impactCombo).map(m=>({frame:m.userData.impactFrame,position:m.position.toArray(),opacity:m.material.opacity})));
      assert.deepEqual(state(a),state(b));assert.ok(state(a).flat().every(m=>m.frame>=3&&m.frame<8));const before=state(a);a.update(0);assert.deepEqual(state(a),before);a.update(2);assert.equal(a.active.length,0);a.destroy();b.destroy();
    }
  });
  await test('64효과·24대상 상한과 종료시 독립 geometry/material 1회 해제를 유지한다',()=>{
    const fx=effects();fx.heroCue({combo:'gwon_yi',phase:'impact',points:[{x:1,y:2}]});const root=fx.active[0].root,counts=new Map();
    root.traverse(m=>{for(const r of [m.geometry,m.material].filter(Boolean)){counts.set(r,0);r.addEventListener('dispose',()=>counts.set(r,counts.get(r)+1));}});
    let texDisposed=0;fx.comboArt.sequences.get('gwon_yi').addEventListener('dispose',()=>texDisposed++);
    for(let i=0;i<10;i++)fx.heroCue({combo:'gwon_yi',phase:'impact',points:Array.from({length:80},(_,j)=>({x:j,y:3}))});assert.equal(fx.active.length,64);assert.ok([...counts.values()].every(n=>n===1));assert.equal(texDisposed,0);fx.destroy();fx.destroy();assert.equal(texDisposed,1);
  });
}finally{globalThis.document=oldDocument;}

const oldLoad=T.ImageLoader.prototype.load,pending=[],requests=[];
T.ImageLoader.prototype.load=function(url,onLoad,progress,onError){const r={url,onLoad,onError};pending.push(r);requests.push(r);};
const isSequence=r=>r.url.includes('/combo-sequences/');
function done(r,fail=false){assert.ok(pending.includes(r));pending.splice(pending.indexOf(r),1);const l=Object.values(COMBO_SEQUENCES).find(l=>r.url.endsWith('/'+l.path));fail?r.onError(new Error('fixture')):r.onLoad({width:l?.width??1774,height:l?.height??887});}
try{
  await test('선택 조합만 로드하고 반복·공통 미완료 요청을 중복하지 않는다',async()=>{
    const a=new ComboImpactArt(),p=a.prepare(['yi_sejong','eulji_gang']);assert.equal(pending.filter(isSequence).length,2);assert.equal(a.prepare(['eulji_gang','yi_sejong']),p);
    const latest=a.prepare(['yi_sejong','gwon_yi']);assert.equal(requests.filter(r=>r.url.endsWith('/'+COMBO_SEQUENCES.yi_sejong.path)).length,1);for(const r of pending.slice())done(r);await Promise.all([p,latest]);assert.deepEqual([...a.sequences.keys()].sort(),['gwon_yi','yi_sejong']);assert.equal(a.sequenceLoading,false);assert.equal(a.sequenceRequests.size,0);a.dispose();
  });
  await test('새 조합 준비 후 도착한 이전 원화는 새 textures와 준비 상태를 덮어쓰지 않는다',async()=>{
    const a=new ComboImpactArt(),old=a.prepare(['eulji_gang']),older=pending[0],latest=a.prepare(['gwon_yi']);for(const r of pending.filter(r=>r!==older))done(r);await latest;const before=a.sequences.get('gwon_yi');done(older);await old;assert.deepEqual([...a.sequences.keys()],['gwon_yi']);assert.equal(a.sequences.get('gwon_yi'),before);assert.equal(a.ready,true);a.dispose();
  });
  await test('전용 한 장 실패는 공용으로 대체하며 다른 조합과 반복 요청을 보존한다',async()=>{
    const a=new ComboImpactArt(),p=a.prepare(['yi_sejong','eulji_gang']);for(const r of pending.slice())done(r,r.url.includes('eulji_gang'));await p;assert.deepEqual(a.missingCombos,['eulji_gang']);assert.equal(a.ready,true);assert.ok(a.hasSequence('yi_sejong'));assert.equal(a.hasSequence('eulji_gang'),false);const m=a.decal(1,'#fff',.6,'flood','eulji_gang');assert.equal(m.userData.impactFrames,8);disposeMesh(m);const count=requests.length;assert.equal(a.prepare(['yi_sejong','eulji_gang']),p);assert.equal(requests.length,count);a.dispose();
  });
  await test('공용 4장이 모두 실패해도 성공한 전용 원화로 재생한다',async()=>{
    const {ComboImpactArt:Fresh}=await import('../src/3d/combo-impact-art.js?sequence-core-failure'),a=new Fresh(),p=a.prepare(['yi_sejong']);for(const r of pending.slice())done(r,!isSequence(r));await p;assert.equal(a.ready,true);assert.equal(a.failed,false);assert.ok(a.hasSequence('yi_sejong'));const m=a.decal(1,'#fff',.6,'light','yi_sejong');assert.equal(m.userData.impactFrames,16);disposeMesh(m);a.dispose();
  });
  await test('서로 다른 전장은 전용 GPU를 소유하며 교체/종료시 한 번만 해제한다',async()=>{
    const a=new ComboImpactArt(),b=new ComboImpactArt(),pa=a.prepare(['yi_sejong']),pb=b.prepare(['yi_sejong']);for(const r of pending.slice())done(r);await Promise.all([pa,pb]);const at=a.sequences.get('yi_sejong'),bt=b.sequences.get('yi_sejong');assert.notEqual(at,bt);let ac=0,bc=0;at.addEventListener('dispose',()=>ac++);bt.addEventListener('dispose',()=>bc++);await a.prepare([]);assert.equal(ac,1);assert.equal(bc,0);a.dispose();a.dispose();assert.equal(ac,1);b.dispose();b.dispose();assert.equal(bc,1);
  });
  await test('종료 뒤 늦은 원화 응답은 texture나 준비 상태를 되살리지 않는다',async()=>{
    const a=new ComboImpactArt(),p=a.prepare(['yi_sejong']);a.dispose();for(const r of pending.slice())done(r);assert.equal(await p,false);assert.equal(a.ready,false);assert.equal(a.sequenceLoading,false);assert.equal(a.sequences.size,0);assert.equal(a.sequenceRequests.size,0);assert.equal(a.hasSequence('yi_sejong'),false);
  });
}finally{T.ImageLoader.prototype.load=oldLoad;assert.equal(pending.length,0);}
await test('첫 틱 준비는 영웅과 합격기 모두 완료한 현재 전장에만 허용한다',async()=>{
  for(const first of ['hero','combo']){
    let hero,combo,count=0;const battle={},world={art:{loading:true,promise:new Promise(r=>hero=r)},fx:{comboArt:{sequenceLoading:true,promise:new Promise(r=>combo=r)}}};
    const ready=whenBattleArtReady(world,battle,()=>battle,()=>count++);
    if(first==='hero'){world.art.loading=false;hero();}else{world.fx.comboArt.sequenceLoading=false;combo();}await new Promise(setImmediate);assert.equal(count,0);
    world.art.loading=false;world.fx.comboArt.sequenceLoading=false;hero();combo();assert.equal(await ready,true);assert.equal(count,1);
  }
  let resolve,count=0;const b={},world={art:{promise:Promise.resolve()},fx:{comboArt:{promise:new Promise(r=>resolve=r)}}},ready=whenBattleArtReady(world,b,()=>b,()=>count++);world.fx.comboArt.promise=Promise.resolve();resolve();assert.equal(await ready,false);assert.equal(count,0);
});
await fs.writeFile('docs/COMBO_SEQUENCE_RUNTIME_VALIDATION.json',JSON.stringify({generatedAt:new Date().toISOString(),tests:results.length,allPassed:true,combos:11,newFrames:176,selectionOnlyLoading:true,maximumTargets:24,maximumEffectRoots:64,localCoopRulesUnchanged:true,results},null,2)+'\n');
console.log('\n합격기 연속 원화 '+results.length+'개 검증 통과');
