import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as T from 'three';
import {STAGES,STAGE_BY_ID} from '../src/data/stages.js';
import {WINTER_STAGE,canBuildAt} from '../src/3d/scenario.js';
import {getMap,T_BLOCK,T_BUILD,T_WATER,T_PATH} from '../src/sim/map.js';
import {seasonFor} from '../src/3d/seasons.js';
import {sceneryPlan} from '../src/3d/scenery-plan.js';
import {roadSegments,roadSample} from '../src/3d/road-terrain.js';
import {buildBattlefield} from '../src/3d/environment.js';
import {WinterWorld} from '../src/3d/world.js';
import {createGame,applyCommand} from '../src/sim/sim.js';
import {TOWER_ORDER,TOWERS} from '../src/data/towers.js';

let passed=0;function test(name,fn){fn();passed++;console.log('  ✔ '+name);}
const stages=[...STAGES,WINTER_STAGE],seasons=['spring','summer','autumn','winter'];
const before=JSON.stringify(stages.map(s=>({stage:s,map:getMap(s.id)}))),plans=new Map();
for(const stage of stages)for(const season of seasons)plans.set(stage.id+season,sceneryPlan(stage,seasonFor(stage,season)));
const plan=(stage,season='summer')=>plans.get(stage.id+season);
const distance=(p,x,z)=>Math.hypot(p.x-x,p.z-z);

test('26지도·사계절의 배치는 반복과 순회 순서에 독립적이며 지도·경로·계절별 위치를 보존한다',()=>{
  for(const stage of [...stages].reverse())for(const season of [...seasons].reverse()){
    const original=plan(stage,season),next=sceneryPlan(stage,seasonFor(stage,season));assert.deepEqual(next,original);
    const positions=p=>p.items.map(({key,x,z,height,role})=>({key,x,z,height,role}));
    assert.deepEqual(positions(original),positions(plan(stage,'summer')));
  }assert.equal(JSON.stringify(stages.map(s=>({stage:s,map:getMap(s.id)}))),before);
});

test('모든 소품의 발 기준점은 막힌 칸에 있으며 건설 중심·실제 길·물과 다리의 여백을 지킨다',()=>{
  for(const stage of stages){const map=getMap(stage.id),segments=roadSegments(map);
    for(const season of seasons)for(const p of [...plan(stage,season).items,...plan(stage,season).supplies]){
      assert.equal(map.grid[Math.floor(p.z)*map.w+Math.floor(p.x)],T_BLOCK,stage.id+' '+p.key);
      assert.ok(roadSample(segments,p.x,p.z).distance-p.radius>=.579999,stage.id+' road '+p.key);
      for(let z=0;z<map.h;z++)for(let x=0;x<map.w;x++){
        const tile=map.grid[z*map.w+x];
        if(tile===T_BUILD)assert.ok(distance(p,x+.5,z+.5)-p.radius>=.299999,stage.id+' build center '+p.key);
        if(tile===T_WATER||tile===T_PATH&&stage.grid[z][x]==='W'){
          const gap=Math.hypot(Math.max(x-p.x,0,p.x-x-1),Math.max(z-p.z,0,p.z-z-1));assert.ok(gap-p.radius>=.039999,stage.id+' water/bridge '+p.key);
        }
      }
    }
  }
});

test('원래 막힌 장식 칸을 모두 표시하고 큰 수관과 낮은 수목·절벽과 돌을 섞는다',()=>{
  let crowns=0,understory=0,outcrops=0,stones=0;
  for(const stage of stages){const map=getMap(stage.id),p=plan(stage),covered=new Set(p.items.flatMap(q=>q.cells.map(c=>c.join(','))));
    for(const d of map.decor.filter(d=>d.ch!=='f'))assert.ok(covered.has(d.x+','+d.y),stage.id+' missing blocked marker');
    for(const q of p.items){assert.ok(Number.isFinite(q.x+q.z+q.height));assert.ok(q.height>0&&q.height<=2.4);}
    crowns+=p.metrics.crowns;understory+=p.metrics.understory;outcrops+=p.items.filter(q=>q.role==='outcrop').length;stones+=p.items.filter(q=>q.role==='stone').length;
  }assert.ok(crowns>0&&understory>crowns&&outcrops>0&&stones>outcrops);
});

test('길 가까운 나무·성문 주변 수목은 낮고 큰 수관은 서로 1.8칸 이상 떨어진다',()=>{
  for(const stage of stages){const p=plan(stage),segments=roadSegments(getMap(stage.id)),crowns=p.items.filter(q=>q.role==='crown');
    for(const q of p.items.filter(q=>q.role==='crown'||q.role==='understory')){
      const original=q.cells[0],x=original[0]+.5,z=original[1]+.5;
      if(roadSample(segments,x,z).distance<1.55)assert.ok(q.height<=1.4);
      if(Math.hypot(x-p.base.x,z-p.base.z)<2.5)assert.ok(q.height<=.7);
    }
    for(let i=0;i<crowns.length;i++)for(let j=i+1;j<crowns.length;j++){
      const a=crowns[i].cells[0],b=crowns[j].cells[0];assert.ok(Math.hypot(a[0]-b[0],a[1]-b[1])>1.8);
    }
  }
});

test('비어 있는 마을 중심에 건물을 놓지 않고 보급품을 한옥 발 기준 범위 밖에 둔다',()=>{
  for(const stage of stages){const p=plan(stage),houses=p.items.filter(q=>q.role==='house');
    for(const cargo of p.supplies){assert.ok(houses.every(h=>distance(cargo,h.x,h.z)>h.radius+.12));assert.ok(Math.hypot(cargo.x-p.base.x,cargo.z-p.base.z)>=1.65);}
  }
  const id='scenery-hole-test',grid=Array.from({length:14},()=>'.'.repeat(24));
  for(let z=2;z<=4;z++)for(let x=8;x<=10;x++)if(x!==9||z!==3)grid[z]=grid[z].slice(0,x)+'H'+grid[z].slice(x+1);
  const stage={...WINTER_STAGE,id,grid,paths:[[[-1,12],[22,12]]]};STAGE_BY_ID[id]=stage;
  try{const p=sceneryPlan(stage,seasonFor(stage)),house=p.items.find(q=>q.role==='house');assert.ok(house);assert.ok(Math.hypot(house.x-9.5,house.z-3.5)>house.radius+.3);assert.equal(getMap(id).grid[Math.floor(house.z)*24+Math.floor(house.x)],T_BLOCK);}finally{delete STAGE_BY_ID[id];}
});

test('등불은 9개 이하이며 물·다리를 피하고 길가 등불은 건설 중심과 이동 길을 비운다',()=>{
  let roadLamps=0;
  for(const stage of stages){const map=getMap(stage.id),p=plan(stage),segments=roadSegments(map);assert.ok(p.lamps.length<=9&&p.lamps.length>=2);
    for(const [x,z,h,entry]of p.lamps){
      assert.ok(Number.isFinite(x+z+h));assert.notEqual(map.grid[Math.floor(z)*map.w+Math.floor(x)],T_WATER);
      assert.notEqual(map.grid[Math.floor(z)*map.w+Math.floor(x)],T_PATH,stage.id+' lamp on path');
      assert.ok(roadSample(segments,x,z).distance>=.72,stage.id+' lamp overlaps road');
      for(let yy=0;yy<map.h;yy++)for(let xx=0;xx<map.w;xx++)if(map.grid[yy*map.w+xx]===T_BUILD)assert.ok(Math.hypot(x-xx-.5,z-yy-.5)>=.36);
      if(!entry)roadLamps++;
    }
  }assert.ok(roadLamps>0);
});

test('실제 사계절 풍경 조립은 새 위치·높이·그림을 사용하고 병합 자원을 해제한다',()=>{
  const geometry=new T.PlaneGeometry(.02,.02),material=new T.MeshBasicMaterial();material.userData.fixedArt=true;
  try{for(const [id,season]of [['s6','spring'],['s10','summer'],['s12','autumn'],['s13','winter']]){
    const stage=stages.find(s=>s.id===id),calls=[],art={prop(kind,height,variation){const root=new T.Group();root.add(new T.Mesh(geometry,material));calls.push({kind,height,variation,root});return root;}},field=buildBattlefield(stage,seasonFor(stage,season),art),expected=[...plan(stage,season).items,...plan(stage,season).supplies];
    assert.deepEqual(field.scenery,plan(stage,season));assert.deepEqual(field.lamps,field.scenery.lamps);
    for(const [i,p]of expected.entries()){const call=calls[i];assert.equal(call.kind,p.kind);assert.equal(call.height,p.height);assert.equal(call.variation,p.variation);assert.deepEqual(call.root.position.toArray(),[p.x,0,p.z]);}
    const owned=[];field.root.traverse(o=>{if(o.geometry?.userData.owned3d)owned.push(o.geometry);});const counts=new Map(owned.map(g=>[g,0]));for(const g of counts.keys())g.addEventListener('dispose',()=>counts.set(g,counts.get(g)+1));
    WinterWorld.prototype.disposeModel(field.root);WinterWorld.prototype.disposeModel(field.water);assert.ok([...counts.values()].every(n=>n===1));
  }}finally{geometry.dispose();material.dispose();}
});

test('새 풍경 뒤에도 26지도 건설 칸과 로컬 2P 실제 건설·양측 군자금 소유를 유지한다',()=>{
  for(const stage of stages){
    const game=createGame({stageId:stage.id,difficulty:'normal',mode:'coop',seed:7,courier:false,players:[{heroes:['yi'],skills:[],towers:TOWER_ORDER},{heroes:['sejong'],skills:[],towers:TOWER_ORDER}]}),map=getMap(stage.id);
    const p=sceneryPlan(stage,seasonFor(stage)),build=[];
    for(let z=0;z<map.h;z++)for(let x=0;x<map.w;x++)assert.equal(canBuildAt(game,x,z),map.grid[z*map.w+x]===T_BUILD);
    for(let z=0;z<map.h;z++)for(let x=0;x<map.w;x++)if(canBuildAt(game,x,z))build.push({x,z,d:Math.min(...p.items.map(q=>distance(q,x+.5,z+.5)))});
    build.sort((a,b)=>a.d-b.d);const q=build[0],gold=game.players.map(player=>player.gold);assert.ok(q);
    applyCommand(game,{t:'build',p:1,tower:'sungnyemun',x:q.x,y:q.z});assert.equal(game.towers.length,1);assert.equal(game.towers[0].owner,1);assert.equal(game.players[0].gold,gold[0]);assert.equal(game.players[1].gold,gold[1]-TOWERS.sungnyemun.levels[0].cost);
  }
});

const report={date:'2026-10-11',passedTests:passed,campaignStages:25,additionalWinterStage:true,seasonCombinations:104,mapAndPathsUnchanged:true,protectedBuildCenterMargin:.30,protectedRoadMargin:.58,waterAndBridgeFootprintsClear:true,maximumLamps:9,localCoopOwnerAndBudgetPreserved:true,stages:stages.map(stage=>({stage:stage.id,...plan(stage).metrics,lamps:plan(stage).lamps.length}))};
if(process.argv.includes('--report'))fs.writeFileSync(new URL('../docs/SCENERY_PLAN_VALIDATION.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log('\n소품 배치 검사 '+passed+'개 통과');
