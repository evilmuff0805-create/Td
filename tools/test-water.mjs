import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as T from 'three';
import {STAGES} from '../src/data/stages.js';
import {WINTER_STAGE} from '../src/3d/scenario.js';
import {getMap,T_BUILD,T_PATH} from '../src/sim/map.js';
import {terrainPlan,surroundingsPlan,buildBattlefield} from '../src/3d/environment.js';
import {shoreField,shoreDistance,shoreSample,shoreGeometry,waterGeometry,farWaterGeometry,waterColor,waterMaterial,shoreLayer,SHORE_SUBDIVISIONS} from '../src/3d/water-terrain.js';
import {seasonFor} from '../src/3d/seasons.js';
import {WinterWorld} from '../src/3d/world.js';
import {paintedSurfaceStatus} from '../src/3d/painted-surfaces.js';
let passed=0;function test(name,fn){fn();passed++;console.log('  ✔ '+name);}
const stages=[...STAGES,WINTER_STAGE],snapshot=JSON.stringify(stages.map(s=>({stage:s,grid:getMap(s.id).grid,paths:getMap(s.id).paths}))),fields=new Map();
for(const stage of stages){const plan=terrainPlan(stage),field=shoreField(plan,surroundingsPlan(plan));fields.set(stage.id,{plan,field,shore:shoreGeometry(field),water:waterGeometry(field),far:farWaterGeometry(field)});}
function alphaSampler(g){
  const p=g.attributes.position,c=g.attributes.color,index=g.index.array,cells=new Map(),n=SHORE_SUBDIVISIONS;
  for(let i=0;i<index.length;i+=3){const ids=[index[i],index[i+1],index[i+2]],cx=ids.reduce((s,v)=>s+p.getX(v),0)/3,cz=ids.reduce((s,v)=>s+p.getZ(v),0)/3,key=Math.floor(cx*n)+','+Math.floor(cz*n);if(!cells.has(key))cells.set(key,[]);cells.get(key).push(ids);}
  return(x,z)=>{let alpha=0;const ix=Math.floor(x*n),iz=Math.floor(z*n);
    for(const dx of [-1,0])for(const dz of [-1,0])for(const[a,b,d]of cells.get((ix+dx)+','+(iz+dz))??[]){
      const ax=p.getX(a),az=p.getZ(a),bx=p.getX(b),bz=p.getZ(b),qx=p.getX(d),qz=p.getZ(d),det=(bz-qz)*(ax-qx)+(qx-bx)*(az-qz);
      const u=((bz-qz)*(x-qx)+(qx-bx)*(z-qz))/det,v=((qz-az)*(x-qx)+(ax-qx)*(z-qz))/det,w=1-u-v;
      if(Math.min(u,v,w)>=-1e-6)alpha=Math.max(alpha,u*c.getW(a)+v*c.getW(b)+w*c.getW(d));
    }return alpha;
  };
}
test('26지도와 실제 물·다리 셀을 보존하고 수면 삼각형은 wet coverage 밖으로 나오지 않는다',()=>{
  let bridges=0,waterMaps=0;
  for(const stage of stages){const {plan,field,water}=fields.get(stage.id),p=water.attributes.position,idx=water.index.array;
    bridges+=plan.bridges.length;waterMaps+=plan.water.length>0;
    for(const[x,z]of plan.water)for(let j=0;j<2;j++)for(let i=0;i<2;i++)assert.ok(field.wet.has((x*2+i)+','+(z*2+j)));
    for(const[x,z]of plan.land)for(let j=0;j<2;j++)for(let i=0;i<2;i++)assert.ok(field.land.has((x*2+i)+','+(z*2+j)));
    assert.equal(idx.length/3,field.boardWet.size*8);
    for(let i=0;i<idx.length;i+=3){const ids=[idx[i],idx[i+1],idx[i+2]],x=ids.reduce((s,v)=>s+p.getX(v),0)/3,z=ids.reduce((s,v)=>s+p.getZ(v),0)/3;assert.ok(field.wet.has(Math.floor(x*2)+','+Math.floor(z*2)));}
  }assert.ok(bridges>0&&waterMaps>10);assert.equal(JSON.stringify(stages.map(s=>({stage:s,grid:getMap(s.id).grid,paths:getMap(s.id).paths}))),snapshot);
});
test('모서리·섬·합류 경계의 거리·보간은 선분 순서와 중복에 독립적이다',()=>{
  const field=shoreField({land:[[1,1],[2,1],[1,2]],water:[[0,0],[1,0],[2,0],[3,0],[0,1],[3,1],[0,2],[2,2],[3,2],[0,3],[1,3],[2,3],[3,3]]});
  assert.ok(field.segments.length>10);
  for(let z=0;z<4;z+=.17)for(let x=0;x<4;x+=.19){
    assert.equal(shoreDistance(field,x,z),shoreDistance({...field,segments:[...field.segments].reverse()},x,z));
    assert.equal(shoreDistance(field,x,z),shoreDistance({...field,segments:[...field.segments,...field.segments]},x,z));
  }
  const g=shoreGeometry(field),at=alphaSampler(g);
  for(const[x,z]of [[1,1.5],[1.5,1],[2,2],[2.5,2]])assert.ok(at(x,z)>.999);
  g.dispose();
});
test('모든 건설 중심±.12와 육지 경로 셀 중심에는 실제 물가 보간 알파가 없다',()=>{
  let checked=0;
  for(const stage of stages){const {plan,shore}=fields.get(stage.id),at=alphaSampler(shore),map=plan.map;
    for(let z=0;z<map.h;z++)for(let x=0;x<map.w;x++)if(map.grid[z*map.w+x]===T_BUILD||(map.grid[z*map.w+x]===T_PATH&&stage.grid[z][x]!=='W')){
      for(const[dx,dz]of [[0,0],[.12,0],[-.12,0],[0,.12],[0,-.12]])assert.ok(at(x+.5+dx,z+.5+dz)<1e-7,stage.id+' bank in build/path center');checked++;
    }
  }assert.ok(checked>1000);
});
test('육지 띠는 지면 위·다리 아래이고 모든 물가 삼각형은 최고 수면 위에서 투명하게 끝난다',()=>{
  const field=shoreField({land:[[0,0]],water:[[1,0]]}),g=shoreGeometry(field),p=g.attributes.position,c=g.attributes.color;
  for(let i=0;i<p.count;i++){assert.ok(p.getY(i)<.018);assert.ok(p.getY(i)>-.075+.009);const s=shoreSample(field,p.getX(i),p.getZ(i));if(!s.wet)assert.ok(p.getY(i)>=.009);}
  for(const x of [1.375,1.5]){const s=shoreSample(field,x,.5);assert.equal(s.alpha,0);assert.ok(s.height>-.075+.009);}
  for(const waterY of [-.075-.009,-.075+.009]){
    let last=1;
    for(let x=1;x<1.4;x+=.005){const s=shoreSample(field,x,.5);assert.ok(s.alpha<=last+1e-10);last=s.alpha;assert.ok(s.height>waterY);}
  }
  assert.ok([...c.array].every(Number.isFinite));g.dispose();
});
test('물·물가 정점의 UV·색·법선은 연속이고 중복 정점·면·비정상 값이 없다',()=>{
  for(const {shore,water}of fields.values())for(const [g,scale]of [[shore,2.7],[water,7.5]]){
    const p=g.attributes.position,uv=g.attributes.uv,keys=new Set(),faces=new Set();for(const a of Object.values(g.attributes))assert.ok(a.array.every(Number.isFinite));
    for(let i=0;i<p.count;i++){const key=p.getX(i)+','+p.getZ(i);assert.ok(!keys.has(key));keys.add(key);assert.ok(Math.abs(uv.getX(i)-p.getX(i)/scale)<1e-6);assert.ok(Math.abs(uv.getY(i)-p.getZ(i)/scale)<1e-6);}
    for(let i=0;i<g.index.count;i+=3){const key=Array.from(g.index.array.slice(i,i+3)).sort((a,b)=>a-b).join(',');assert.ok(!faces.has(key));faces.add(key);}
  }
  const field=fields.get('s10').field,a=waterGeometry(field),b=waterGeometry({...field,boardWet:new Set([...field.boardWet].reverse())}),lookup=new Map();
  const add=(g,check)=>{const p=g.attributes.position,c=g.attributes.color;for(let i=0;i<p.count;i++){const k=p.getX(i)+','+p.getZ(i),v=[c.getX(i),c.getY(i),c.getZ(i)];if(check)assert.deepEqual(v,lookup.get(k));else lookup.set(k,v);}};
  add(a,false);add(b,true);a.dispose();b.dispose();
});
test('실제 사계절 정적 병합 뒤 물가의 정렬·그림자·RGBA와 원래 수면 높이를 유지한다',()=>{
  for(const[id,season]of [['s6','spring'],['s10','summer'],['s12','autumn'],['s13','winter']]){
    const stage=stages.find(s=>s.id===id),field=buildBattlefield(stage,seasonFor(stage,season)),banks=field.root.children.filter(m=>m.material?.userData.shoreLayer);
    assert.equal(banks.length,1);const bank=banks[0];assert.equal(bank.geometry.attributes.color.itemSize,4);assert.equal(bank.castShadow,false);assert.equal(bank.receiveShadow,true);assert.equal(bank.material.depthWrite,false);
    const roads=field.root.children.filter(m=>m.material?.userData.terrainLayer);for(const road of roads)assert.ok(bank.renderOrder<road.renderOrder);
    for(let i=0;i<bank.geometry.attributes.position.count;i++)assert.ok(bank.geometry.attributes.position.getY(i)>-.066);
    assert.ok(field.water.geometry.attributes.position.array.every(Number.isFinite));assert.equal(field.water.material.vertexColors,true);assert.equal(field.water.castShadow,false);
    assert.equal(field.water.material.transparent,false);
    for(const far of field.water.children){assert.equal(far.material.transparent,true);assert.equal(far.material.depthWrite,false);assert.equal(far.geometry.attributes.color.itemSize,4);assert.ok(far.renderOrder<bank.renderOrder);}
    for(let i=0;i<field.water.geometry.attributes.position.count;i++)assert.ok(Math.abs(field.water.geometry.attributes.position.getY(i)+.075)<1e-7);
    WinterWorld.prototype.disposeModel(field.root);WinterWorld.prototype.disposeModel(field.water);
  }
});
test('물가·수면의 전용 재질과 지오메트리는 해제하고 공유 원본 텍스처와 다른 계절은 보존한다',()=>{
  const a=waterMaterial(seasonFor(STAGES[0],'summer')),b=waterMaterial(seasonFor(STAGES[0],'summer')),other=waterMaterial(seasonFor(STAGES[0],'winter'));
  assert.notEqual(a,b);assert.equal(a.map,b.map);assert.notEqual(a.map,other.map);const saved=b.color.getHex();a.color.set('#ffffff');assert.equal(b.color.getHex(),saved);
  const geo=new T.PlaneGeometry(1,1);geo.userData.owned3d=true;const bank=shoreLayer(geo,b),waterGeo=new T.PlaneGeometry(1,1);waterGeo.userData.owned3d=true;
  const root=new T.Group();root.add(bank,new T.Mesh(waterGeo,a));let gs=0,ms=0,ts=0;
  for(const g of [geo,waterGeo])g.addEventListener('dispose',()=>gs++);
  for(const m of [bank.material,a])m.addEventListener('dispose',()=>ms++);a.map.addEventListener('dispose',()=>ts++);
  WinterWorld.prototype.disposeModel(root);assert.deepEqual([gs,ms,ts],[2,2,0]);assert.ok(b.map.image);b.dispose();other.dispose();
});
test('물 없는 지도와 빈 coverage도 유효한 빈 메시로 종료한다',()=>{
  const f=shoreField({land:[],water:[]});for(const g of [waterGeometry(f),shoreGeometry(f)]){assert.equal(g.index.count,0);assert.ok(Number.isFinite(g.boundingSphere.radius));g.dispose();}
  const dry=[...fields.values()].filter(f=>f.plan.water.length===0);assert.ok(dry.length>0);for(const {water,shore}of dry){assert.equal(water.index.count,0);assert.equal(shore.index.count,0);}
});
test('외곽 수면은 보드 밖에만 있고 중복 면 없이 바닥 영역까지 이어지며 보드 경계 색·UV와 일치한다',()=>{
  let farMaps=0;
  for(const {plan,field,water,far}of fields.values()){
    const p=far.attributes.position,c=far.attributes.color,uv=far.attributes.uv,idx=far.index.array,board=new Map();let area=0;
    assert.ok(idx.length/3<40000,'Far-water detail stays bounded.');for(const a of Object.values(far.attributes))assert.ok(a.array.every(Number.isFinite));
    for(let i=0;i<water.attributes.position.count;i++){const q=water.attributes.position,col=water.attributes.color;board.set(q.getX(i)+','+q.getZ(i),[col.getX(i),col.getY(i),col.getZ(i)]);}
    for(let i=0;i<p.count;i++){const x=p.getX(i),z=p.getZ(i);assert.ok(Math.abs(uv.getX(i)-x/7.5)<1e-6);assert.ok(Math.abs(uv.getY(i)-z/7.5)<1e-6);
      const saved=board.get(x+','+z);if(saved){assert.deepEqual([c.getX(i),c.getY(i),c.getZ(i)],saved);assert.equal(c.getW(i),1);}
    }
    for(let i=0;i<idx.length;i+=3){const[a,b,d]=[idx[i],idx[i+1],idx[i+2]],x=(p.getX(a)+p.getX(b)+p.getX(d))/3,z=(p.getZ(a)+p.getZ(b)+p.getZ(d))/3;
      assert.ok(x<0||z<0||x>=plan.map.w||z>=plan.map.h);assert.ok(field.farWet.has(Math.floor(x*2)+','+Math.floor(z*2)));
      area+=Math.abs((p.getX(b)-p.getX(a))*(p.getZ(d)-p.getZ(a))-(p.getZ(b)-p.getZ(a))*(p.getX(d)-p.getX(a)))/2;
    }
    assert.equal(area,field.farWet.size/4);if(field.farWet.size){farMaps++;assert.ok([...field.farWet].some(k=>{const[x,z]=k.split(',').map(Number);return x===-106||x===153||z===-96||z===123;}));}
  }assert.ok(farMaps>10);
});
test('외곽 큰 면·페이드 스트립의 기존 정점과 변 중간점 RGBA 보간이 원래 세밀한 면과 일치한다',()=>{
  let coarse=0,fading=0,comparisons=0;
  for(const {field,far}of fields.values()){
    const p=far.attributes.position,c=far.attributes.color,idx=far.index.array,reference=new Map();
    const color=(x,z)=>{const key=x+','+z;if(!reference.has(key))reference.set(key,waterColor(field,x,z,true));return reference.get(key);};
    const original=(x,z)=>{const qx=Math.floor(x*4)/4,qz=Math.floor(z*4)/4,tx=(x-qx)*4,tz=(z-qz)*4,a=color(qx,qz),b=color(qx,qz+.25),d=color(qx+.25,qz),e=color(qx+.25,qz+.25);
      return a.map((v,k)=>tz>=tx?v*(1-tz)+b[k]*(tz-tx)+e[k]*tx:v*(1-tx)+e[k]*tz+d[k]*(tx-tz));};
    for(let i=0;i<idx.length;i+=3){const ids=[idx[i],idx[i+1],idx[i+2]],xs=ids.map(v=>p.getX(v)),zs=ids.map(v=>p.getZ(v));
      const left=Math.min(...xs),right=Math.max(...xs),top=Math.min(...zs),bottom=Math.max(...zs),dx=right-left,dz=bottom-top;
      if(dx<=.25&&dz<=.25)continue;coarse++;if(ids.some(v=>c.getW(v)>0&&c.getW(v)<1))fading++;
      if(dx>.25&&dz>.25)for(const v of ids){assert.equal(c.getW(v),1);assert.deepEqual([c.getX(v),c.getY(v),c.getZ(v)],[Math.fround(.805),Math.fround(.865),Math.fround(.905)]);}
      const [a,b,d]=ids,ax=p.getX(a),az=p.getZ(a),bx=p.getX(b),bz=p.getZ(b),qx=p.getX(d),qz=p.getZ(d),det=(bz-qz)*(ax-qx)+(qx-bx)*(az-qz);
      for(let z=top;z<=bottom;z+=.125)for(let x=left;x<=right;x+=.125){const u=((bz-qz)*(x-qx)+(qx-bx)*(z-qz))/det,v=((qz-az)*(x-qx)+(ax-qx)*(z-qz))/det,w=1-u-v;if(Math.min(u,v,w)<-1e-6)continue;
        const expected=original(x,z),actual=[c.getX(a)*u+c.getX(b)*v+c.getX(d)*w,c.getY(a)*u+c.getY(b)*v+c.getY(d)*w,c.getZ(a)*u+c.getZ(b)*v+c.getZ(d)*w,c.getW(a)*u+c.getW(b)*v+c.getW(d)*w];
        for(let k=0;k<4;k++)assert.ok(Math.abs(actual[k]-expected[k])<2e-6);comparisons++;
      }
    }
  }assert.ok(coarse>0&&fading>0&&comparisons>10000);
});
{
  const savedDocument=globalThis.document,savedLoad=T.ImageLoader.prototype.load,savedWarn=console.warn,warnings=[],before=paintedSurfaceStatus();
  globalThis.document={createElementNS(){},documentElement:{dataset:{}}};
  T.ImageLoader.prototype.load=function(url,done,progress,fail){queueMicrotask(()=>fail(new Error('expected missing water asset')));};console.warn=(...args)=>warnings.push(args);
  try{
    const source=waterMaterial({...seasonFor(STAGES[0],'summer'),id:'missing-water-test'}),texture=source.map,pixels=texture.image.data;
    await new Promise(setImmediate);
    assert.equal(texture.image.data,pixels);assert.equal(texture.image.width,512);assert.equal(texture.image.height,512);assert.equal(texture.userData.paintedLoaded,undefined);
    assert.equal(paintedSurfaceStatus().failed,before.failed+1);assert.equal(paintedSurfaceStatus().pending,before.pending);assert.equal(warnings.length,1);source.dispose();
    passed++;console.log('  ✔ 물 그림 로딩 실패는 512 대체 수면을 유지하고 미처리 Promise와 대기 상태를 남기지 않는다');
  }finally{T.ImageLoader.prototype.load=savedLoad;console.warn=savedWarn;if(savedDocument===undefined)delete globalThis.document;else globalThis.document=savedDocument;}
}
const report={date:'2026-10-11',passedTests:passed,campaignStages:25,additionalWinterStage:true,waterOutsideOriginalBoardWetCoverageTriangles:0,farWaterOnlyOutsideBoard:true,farWaterCoarseAndFadeStripInterpolationMatchesOriginal:true,farWaterInterpolationTolerance:2e-6,farWaterTriangleBudgetPerMap:40000,buildingAndDryPathCellCenterAndMarginAlpha:0,simulationMapAndPathsUnchanged:true,waterlineRange:[-.084,-.066],shoreMaxHeight:.013,worldCoordinateContinuity:true,privateResourcesDisposedAndSharedTexturesRetained:true,geometry:stages.map(s=>({stage:s.id,segments:fields.get(s.id).field.segments.length,shoreTriangles:fields.get(s.id).shore.index.count/3,waterTriangles:fields.get(s.id).water.index.count/3,farWaterTriangles:fields.get(s.id).far.index.count/3}))};
if(process.argv.includes('--report'))fs.writeFileSync(new URL('../docs/WATER_GEOMETRY_VALIDATION.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
for(const f of fields.values()){f.water.dispose();f.shore.dispose();f.far.dispose();}
console.log('\n물가 검사 '+passed+'개 통과');
