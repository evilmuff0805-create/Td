import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as T from 'three';
import { STAGES } from '../src/data/stages.js';
import { WINTER_STAGE } from '../src/3d/scenario.js';
import { getMap,T_BUILD } from '../src/sim/map.js';
import { roadTerrain,roadSample,roadSegments,roadCellIsDry,roadLayer,ROAD_SUBDIVISIONS } from '../src/3d/road-terrain.js';
import { buildBattlefield,tileSurface,worldSurface,terrainPlan } from '../src/3d/environment.js';
import { seasonFor } from '../src/3d/seasons.js';
import { WinterWorld } from '../src/3d/world.js';

let passed=0;
function test(name,fn){fn();passed++;console.log('  ✔ '+name);}
const stages=[...STAGES,WINTER_STAGE],snapshot=JSON.stringify(stages.map(s=>({stage:s,grid:getMap(s.id).grid,paths:getMap(s.id).paths}))),fields=new Map();
for(const stage of stages)fields.set(stage.id,roadTerrain(stage));
function alphaAt(g,x,z){
  const p=g.attributes.position,c=g.attributes.color,indices=g.index.array;let alpha=0;
  for(let k=0;k<indices.length;k+=3){
    const [a,b,d]=[indices[k],indices[k+1],indices[k+2]],ax=p.getX(a),az=p.getZ(a),bx=p.getX(b),bz=p.getZ(b),dx=p.getX(d),dz=p.getZ(d);
    if(x<Math.min(ax,bx,dx)-1e-6||x>Math.max(ax,bx,dx)+1e-6||z<Math.min(az,bz,dz)-1e-6||z>Math.max(az,bz,dz)+1e-6)continue;
    const det=(bz-dz)*(ax-dx)+(dx-bx)*(az-dz),u=((bz-dz)*(x-dx)+(dx-bx)*(z-dz))/det,v=((dz-az)*(x-dx)+(ax-dx)*(z-dz))/det,w=1-u-v;
    if(Math.min(u,v,w)>=-1e-5)alpha=Math.max(alpha,u*c.getW(a)+v*c.getW(b)+w*c.getW(d));
  }
  return alpha;
}
test('26개 지도·경로 불변과 경로 순서·중복에 독립적인 최소 거리장',()=>{
  for(const stage of stages){const s=fields.get(stage.id).segments,reverse=[...s].reverse();
    for(let z=-1;z<=15;z+=.73)for(let x=-1;x<=25;x+=.83){
      assert.deepEqual(roadSample(s,x,z),roadSample(reverse,x,z));
      assert.deepEqual(roadSample(s,x,z),roadSample([...s,...s],x,z));
    }
  }
  assert.equal(JSON.stringify(stages.map(s=>({stage:s,grid:getMap(s.id).grid,paths:getMap(s.id).paths}))),snapshot);
});
test('26개 경로 중심·모서리·합류부와 맵 밖 입구의 실제 삼각형 보간 알파 유지',()=>{
  let outside=0;
  for(const stage of stages){const map=getMap(stage.id),f=fields.get(stage.id);
    for(const s of f.segments)for(let t=0;t<=s.length+.0001;t+=.25){
      const x=s.ax+s.dx*t,z=s.az+s.dz*t;if(!roadCellIsDry(stage,map,Math.floor(x),Math.floor(z)))continue;
      assert.ok(alphaAt(f.road,x,z)>.999,stage.id+' road gap at '+x+','+z);
      if(x<0||z<0||x>=map.w||z>=map.h)outside++;
    }
  }
  assert.ok(outside>0);
});
test('모든 건설 셀 중심의 도로·눈 보간 알파0과 건설 자리 주변 여백',()=>{
  for(const stage of stages){const map=getMap(stage.id),f=fields.get(stage.id);
    for(let z=0;z<map.h;z++)for(let x=0;x<map.w;x++)if(map.grid[z*map.w+x]===T_BUILD){
      for(const [dx,dz]of [[0,0],[.12,0],[-.12,0],[0,.12],[0,-.12]]){
        assert.ok(alphaAt(f.road,x+.5+dx,z+.5+dz)<1e-7,stage.id+' road on building center');
        assert.ok(alphaAt(f.snow,x+.5+dx,z+.5+dz)<1e-7,stage.id+' snow overlay on building center');
      }
    }
  }
});
test('물·원본W 위 다리 셀에 도로와 눈 삼각형이 없고 지면 셀 경계를 넘지 않음',()=>{
  let bridges=0;
  for(const stage of stages){const map=getMap(stage.id),f=fields.get(stage.id),p=f.road.attributes.position,idx=f.road.index.array;
    bridges+=terrainPlan(stage).bridges.length;
    assert.deepEqual(f.road.index.array,f.snow.index.array);
    for(let i=0;i<idx.length;i+=3){
      const xs=[p.getX(idx[i]),p.getX(idx[i+1]),p.getX(idx[i+2])],zs=[p.getZ(idx[i]),p.getZ(idx[i+1]),p.getZ(idx[i+2])];
      const x=Math.floor(xs.reduce((a,b)=>a+b)/3),z=Math.floor(zs.reduce((a,b)=>a+b)/3);
      assert.ok(roadCellIsDry(stage,map,x,z),stage.id+' road painted over water or bridge');
      assert.ok(Math.min(...xs)>=x-1e-6&&Math.max(...xs)<=x+1+1e-6);assert.ok(Math.min(...zs)>=z-1e-6&&Math.max(...zs)<=z+1+1e-6);
    }
  }
  assert.ok(bridges>0);
});
test('연속 메시의 정점·법선·RGBA·UV·삼각형은 유효하고 중복 면이 없음',()=>{
  for(const stage of stages){const f=fields.get(stage.id),g=f.road,p=g.attributes.position,c=g.attributes.color,uv=g.attributes.uv,keys=new Set(),triangles=new Set();
    assert.equal(c.itemSize,4);assert.equal(f.metrics.subdivisions,ROAD_SUBDIVISIONS);assert.ok(f.metrics.triangles<14000);
    for(const attribute of Object.values(g.attributes))assert.ok(attribute.array.every(Number.isFinite));
    for(let i=0;i<p.count;i++){
      const key=p.getX(i)+','+p.getZ(i);assert.ok(!keys.has(key));keys.add(key);assert.equal(p.getY(i),0);
      assert.ok(g.attributes.normal.getY(i)>.999);assert.ok(c.getW(i)>=0&&c.getW(i)<=1);assert.ok(f.snow.attributes.color.getW(i)<=c.getW(i)+1e-7);
      assert.ok(Math.abs(uv.getX(i)-p.getX(i)/3.4)<1e-6);assert.ok(Math.abs(uv.getY(i)-p.getZ(i)/3.4)<1e-6);
    }
    for(let i=0;i<g.index.count;i+=3){const k=Array.from(g.index.array.slice(i,i+3)).sort((a,b)=>a-b).join(',');assert.ok(!triangles.has(k));triangles.add(k);}
  }
});
test('지면의 월드 UV·저주파 색은 인접 타일과 독립 메시에서 동일',()=>{
  const one=tileSurface([[2,3]],.006),two=tileSurface([[3,3]],.006),data=new Map();
  for(const g of [one,two]){const p=g.attributes.position,c=g.attributes.color;
    for(let i=0;i<p.count;i++){const key=p.getX(i)+','+p.getZ(i),rgb=[c.getX(i),c.getY(i),c.getZ(i)];if(data.has(key))assert.deepEqual(rgb,data.get(key));data.set(key,rgb);}
  }
  const sample=new T.PlaneGeometry(1,1,2,2);sample.rotateX(-Math.PI/2);worldSurface(sample,2.5,3.5,3.2);
  for(let i=0;i<sample.attributes.position.count;i++){const p=sample.attributes.position,c=sample.attributes.color;assert.deepEqual([c.getX(i),c.getY(i),c.getZ(i)],data.get((p.getX(i)+2.5)+','+(p.getZ(i)+3.5)));}
  assert.ok(new Set([...data.values()].map(x=>x.join(','))).size>4);one.dispose();two.dispose();sample.dispose();
});
test('사계절 실제 풍경 병합 뒤 도로·눈의 정렬·그림자·공유 재질 분리 유지',()=>{
  for(const [stageId,season]of [['s6','spring'],['s10','summer'],['s12','autumn'],['s13','winter']]){
    const stage=stages.find(s=>s.id===stageId),theme=seasonFor(stage,season),field=buildBattlefield(stage,theme),layers=field.root.children.filter(m=>m.material?.userData.terrainLayer);
    assert.equal(layers.length,theme.snow?2:1);
    for(const layer of layers){const m=layer.material;assert.equal(layer.geometry.attributes.color.itemSize,4);assert.equal(layer.castShadow,false);assert.equal(layer.receiveShadow,true);assert.ok(layer.renderOrder<0);assert.equal(m.transparent,true);assert.equal(m.depthWrite,false);assert.equal(m.depthTest,true);assert.ok(m.userData.owned3d);assert.equal(m.map.wrapS,T.MirroredRepeatWrapping);}
    if(theme.snow)assert.ok(layers[0].renderOrder<layers[1].renderOrder);
    WinterWorld.prototype.disposeModel(field.root);WinterWorld.prototype.disposeModel(field.water);
  }
});
test('전장 전용 도로·눈 메시와 재질은 해제하고 공유 텍스처·원본 재질은 보존',()=>{
  const geometry=new T.PlaneGeometry(1,1),texture=new T.DataTexture(new Uint8Array([255,255,255,255]),1,1),source=new T.MeshStandardMaterial({map:texture,vertexColors:true});
  geometry.userData.owned3d=true;
  const road=roadLayer(geometry,source),group=new T.Group();group.add(road);let gc=0,mc=0,tc=0,sc=0;
  geometry.addEventListener('dispose',()=>gc++);road.material.addEventListener('dispose',()=>mc++);texture.addEventListener('dispose',()=>tc++);source.addEventListener('dispose',()=>sc++);
  WinterWorld.prototype.disposeModel(group);assert.deepEqual([gc,mc,tc,sc],[1,1,0,0]);assert.equal(source.transparent,false);assert.equal(source.depthWrite,true);
});
const report={date:'2026-10-11',passedTests:passed,campaignStages:STAGES.length,additionalWinterStage:true,geometry:stages.map(stage=>({stage:stage.id,...fields.get(stage.id).metrics})),buildingCenterAndMarginAlpha:0,waterAndBridgeTriangles:0,simulationMapAndPathsUnchanged:true,worldCoordinateContinuity:true,sceneryBatchPreservesSeparateTerrainLayers:true,privateResourcesDisposedAndSharedTexturesRetained:true};
if(process.argv.includes('--report'))fs.writeFileSync(new URL('../docs/TERRAIN_GEOMETRY_VALIDATION.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
for(const f of fields.values()){f.road.dispose();f.snow.dispose();}
console.log('\n지형 검사 '+passed+'개 통과');
