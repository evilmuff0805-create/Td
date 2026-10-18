import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as T from 'three';
import {FixedBattleArt} from '../src/3d/fixed-art.js';
import {VILLAGE_PROP_ART} from '../src/3d/village-prop-data.js';
import {STAGES,STAGE_BY_ID} from '../src/data/stages.js';
import {WINTER_STAGE} from '../src/3d/scenario.js';
import {getMap,T_BLOCK,T_BUILD,T_WATER,T_PATH} from '../src/sim/map.js';
import {seasonFor} from '../src/3d/seasons.js';
import {sceneryPlan} from '../src/3d/scenery-plan.js';
import {roadSegments,roadSample} from '../src/3d/road-terrain.js';
import {WinterWorld} from '../src/3d/world.js';
import {bakeStatic} from '../src/3d/models.js';
import {preloadArt,propArt} from '../src/render/art.js';

let passed=0;
async function test(name,fn){await fn();passed++;console.log('  ✔ '+name);}
const seasons=['spring','summer','autumn','winter'],stages=[...STAGES,WINTER_STAGE];
const before=JSON.stringify(stages.map(s=>({stage:s,map:getMap(s.id)})));
const plans=new Map(stages.flatMap(s=>seasons.map(season=>[s.id+season,sceneryPlan(s,seasonFor(s,season))])));
const plan=(s,season='summer')=>plans.get(s.id+season);
const atlas=layout=>({isolated:layout.frames.map(frame=>({canvas:{width:frame.width+24,height:frame.height+24},frame:{...frame,left:12,top:12}}))});
const village=Object.fromEntries(Object.entries(VILLAGE_PROP_ART).map(([s,layout])=>[s,atlas(layout)]));
function world(season='summer',cameraHeight=26){
  const camera=new T.OrthographicCamera(-8,8,6,-6,.1,150);camera.position.set(17,cameraHeight,26);camera.lookAt(0,0,0);camera.updateMatrixWorld();
  return {camera,theme:seasonFor(STAGES[0],season),renderer:{domElement:{dataset:{}}},combatKinds:[]};
}
function owner(season='summer',cameraHeight=26){
  const art=Object.assign(Object.create(FixedBattleArt.prototype),{world:world(season,cameraHeight),ready:true,villageProps:village,textures:new Map(),materials:new Map(),geometries:new Map()});
  art.shadowTexture=new T.DataTexture(new Uint8Array([255,255,255,255]),1,1);art.shadowMaterial=new T.MeshBasicMaterial({map:art.shadowTexture});art.shadowMaterial.userData.fixedArt=true;return art;
}
function corners(image){image.updateMatrix();return Array.from({length:image.geometry.attributes.position.count},(_,i)=>new T.Vector3().fromBufferAttribute(image.geometry.attributes.position,i).applyMatrix4(image.matrix));}
const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);

await test('25전장 K칸 248개를 누락·중복 없이 122개 경계 그림으로 묶고 사계절 위치를 보존한다',()=>{
  let original=0,rendered=0;
  for(const s of stages){
    const map=getMap(s.id),markers=map.decor.filter(d=>d.ch==='K').map(d=>d.x+','+d.y).sort();
    for(const season of seasons){
      const p=plan(s,season),walls=p.items.filter(q=>q.role==='wall'),covered=walls.flatMap(q=>q.cells.map(c=>c.join(','))).sort();
      assert.deepEqual(covered,markers,s.id);assert.equal(new Set(covered).size,covered.length);assert.equal(p.metrics.omittedBarrierCells,0);
      assert.deepEqual(walls,plan(s).items.filter(q=>q.role==='wall'));
      assert.deepEqual(sceneryPlan(s,seasonFor(s,season)),p);
    }
    if(s!==WINTER_STAGE){original+=markers.length;rendered+=plan(s).metrics.barriers;}
  }
  assert.equal(original,248);assert.equal(rendered,122);assert.equal(JSON.stringify(stages.map(s=>({stage:s,map:getMap(s.id)}))),before);
});

await test('속이 빈 비정형 경계는 빈 건설 칸을 가로질러 합치거나 안전하지 않은 중심에 놓지 않는다',()=>{
  const id='village-boundary-hole',grid=Array.from({length:14},()=>'.'.repeat(24));
  for(let z=2;z<=6;z++)for(let x=8;x<=10;x++)if(x!==9||z!==3)grid[z]=grid[z].slice(0,x)+'K'+grid[z].slice(x+1);
  const s={...WINTER_STAGE,id,grid,deploymentSlots:undefined,paths:[[[-1,12],[22,12]]]};STAGE_BY_ID[id]=s;
  try{
    const p=sceneryPlan(s,seasonFor(s)),map=getMap(id),walls=p.items.filter(q=>q.role==='wall');
    assert.equal(walls.flatMap(q=>q.cells).length,14);assert.equal(p.metrics.omittedBarrierCells,0);
    assert.equal(map.grid[3*24+9],T_BUILD);
    for(const q of walls){
      assert.equal(map.grid[Math.floor(q.z)*24+Math.floor(q.x)],T_BLOCK);
      assert.ok(Math.hypot(q.x-9.5,q.z-3.5)>=q.radius+.30);
      const xs=q.cells.map(c=>c[0]);assert.equal(Math.max(...xs)-Math.min(...xs)+1,q.cells.length);assert.equal(new Set(q.cells.map(c=>c[1])).size,1);
    }
  }finally{delete STAGE_BY_ID[id];}
});

await test('26지도·사계절 새 그림의 실제 네 모서리까지 길·건설 중심·물·다리 여백 안에 든다',()=>{
  for(const season of seasons){const art=owner(season);
    try{for(const s of stages){const map=getMap(s.id),segments=roadSegments(map);
      for(const p of [...plan(s,season).items,...plan(s,season).supplies].filter(q=>['wall','yard','cargo'].includes(q.role))){
        const root=art.prop(p.kind,p.height,p.variation,p.radius),points=corners(root.children[0]);assert.equal(root.userData.villageProp.ready,true);
        for(const q of points){
          assert.ok(Math.hypot(q.x,q.z)<=p.radius+1e-7);const x=p.x+q.x,z=p.z+q.z;
          assert.ok(roadSample(segments,x,z).distance>=.58-1e-7,s.id+' road '+p.key);
          for(let zz=0;zz<map.h;zz++)for(let xx=0;xx<map.w;xx++){
            const tile=map.grid[zz*map.w+xx];
            if(tile===T_BUILD)assert.ok(Math.hypot(x-xx-.5,z-zz-.5)>=.30-1e-7,s.id+' build '+p.key);
            if(tile===T_WATER||tile===T_PATH&&s.grid[zz][xx]==='W')assert.ok(Math.hypot(Math.max(xx-x,0,x-xx-1),Math.max(zz-z,0,z-zz-1))>=.04-1e-7,s.id+' water '+p.key);
          }
        }
        WinterWorld.prototype.disposeModel(root);
      }
    }}finally{art.dispose();}
  }
});

await test('작은 마당 목책은 집·짐·기존 소품·다른 목책과 입구 등불의 여백을 지킨다',()=>{
  let yards=0,cargo=0;
  for(const s of stages){const p=plan(s);
    for(const q of p.items.filter(q=>q.role==='yard')){
      assert.equal(q.kind,'villageFence');assert.equal(q.cells.length,0);
      for(const other of [...p.items,...p.supplies].filter(other=>other!==q))assert.ok(distance(q,other)>=q.radius+other.radius+.07-1e-7,s.id+' '+other.key);
      for(const [x,z]of p.lamps)assert.ok(Math.hypot(q.x-x,q.z-z)>=q.radius+.15-1e-7);
      assert.ok(distance(q,p.base)>=1.65);
    }
    if(s!==WINTER_STAGE){yards+=p.metrics.yardFences;cargo+=p.supplies.length;}
  }assert.equal(yards,13);assert.equal(cargo,7);
});

await test('12개 실제 메시와 세 카메라 높이에서 분리 UV·중심 접지·크기 제한·그림자 배율이 일치한다',()=>{
  for(const cameraHeight of [12,26,60])for(const season of ['summer','winter']){const art=owner(season,cameraHeight);
    try{for(const [kind,offset]of [['villageFence',0],['fieldWall',2],['villageCargo',4]])for(const variation of [0,1]){
      const root=art.prop(kind,.6,variation,.16),[image,contact,shadow]=root.children,data=root.userData.villageProp,frame=village[data.season].isolated[offset+variation];
      assert.equal(data.index,offset+variation);assert.equal(image.material.map.image,frame.canvas);assert.ok(data.height<=.6);
      image.geometry.computeBoundingBox();assert.ok(Math.abs(image.geometry.boundingBox.min.y)<1e-7);assert.ok(Math.abs(image.geometry.boundingBox.min.x+image.geometry.boundingBox.max.x)<1e-7);
      for(const q of corners(image))assert.ok(Math.hypot(q.x,q.z)<=.16+1e-7);
      const uv=image.geometry.attributes.uv;for(let i=0;i<uv.count;i++)assert.ok(uv.getX(i)>0&&uv.getX(i)<1&&uv.getY(i)>0&&uv.getY(i)<1);
      contact.geometry.computeBoundingBox();assert.ok(Math.abs(contact.geometry.boundingBox.max.x-contact.geometry.boundingBox.min.x-data.height*.55)<1e-7);
      const projection=new T.Matrix4().set(1,.5,0,0,0,0,0,.042,0,-.75,1,0,0,0,0,1),expected=projection.multiply(image.matrix);
      assert.deepEqual(shadow.matrix.elements,expected.elements);assert.equal(shadow.geometry,image.geometry);assert.equal(shadow.material.map,image.material.map);
      WinterWorld.prototype.disposeModel(root);
    }}finally{art.dispose();}
  }
});

await test('실제 loadStage는 동일 그림 소유자로 봄→겨울→여름의 배치와 atlas를 다시 조립한다',()=>{
  const art=owner('spring'),w=Object.assign(Object.create(WinterWorld.prototype),art.world,{
    stage:STAGES[5],scene:new T.Scene(),units:new Map(),towers:new Map(),bullets:new Map(),scenery:new Map(),corpses:[],pickables:[],fires:[],placement:new T.Group(),range:new T.Group(),marker:new T.Group(),
    fx:{reset(){}},crowd:{reset(){}},applySeasonLight(){},home(){},lamp(){},prepareHeroLooks(){},weather(){this.snow=new T.Group();this.scene.add(this.snow);this.weatherTex=new T.Texture();}
  });
  art.world=w;w.art=art;let prepareCount=0;art.prepareCombatArt=()=>{prepareCount++;};
  w.environment();w.weather();let sharedDisposals=0;const textures=new Set();
  try{for(const season of ['winter','summer','spring','winter','summer']){
    for(const tex of art.textures.values())if(!textures.has(tex)){textures.add(tex);tex.addEventListener('dispose',()=>sharedDisposals++);}
    const previous=w.static;w.loadStage(STAGES[5],season);assert.equal(w.art,art);assert.equal(previous.parent,null);assert.equal(sharedDisposals,0);
    assert.equal(w.renderer.domElement.dataset.villagePropSeason,season==='winter'?'winter':'temperate');assert.equal(w.artEnvironmentReady,true);
    const expected=plan(STAGES[5],season);assert.deepEqual(w.field.scenery,expected);
    const selected=new Set(village[season==='winter'?'winter':'temperate'].isolated.map(f=>f.canvas)),other=new Set(village[season==='winter'?'temperate':'winter'].isolated.map(f=>f.canvas));let count=0;
    w.static.traverse(o=>{const source=o.material?.map?.image;if(selected.has(source))count++;assert.ok(!other.has(source));});assert.ok(count>0);
  }assert.equal(prepareCount,5);}finally{
    for(const root of [w.static,w.water,w.lampGroup,w.snow])WinterWorld.prototype.disposeModel(root);w.weatherTex.dispose();art.dispose();
  }
});

await test('서로 다른 계절 소유자와 병합 전장 정리는 색·GPU 수명을 공유하지 않는다',()=>{
  const a=owner('summer'),b=owner('winter'),ra=a.prop('villageFence',.6,0,.4),rb=b.prop('villageFence',.6,0,.4),color=rb.children[0].material.color.getHex();
  try{
    assert.notEqual(a.texture(village.temperate.isolated[0].canvas),b.texture(village.temperate.isolated[0].canvas));
    a.world.theme=world('winter').theme;a.prop('villageFence',.6,0,.4);assert.equal(rb.children[0].material.color.getHex(),color);
    const texture=ra.children[0].material.map;let textureDisposals=0;texture.addEventListener('dispose',()=>textureDisposals++);
    // Dispose the temporary unmerged contact plane as the normal field builder does.
    ra.children[1].geometry.dispose();bakeStatic(ra);const owned=ra.children.map(m=>m.geometry);let mergedDisposals=0;owned.forEach(g=>g.addEventListener('dispose',()=>mergedDisposals++));
    WinterWorld.prototype.disposeModel(ra);assert.equal(mergedDisposals,owned.length);assert.equal(textureDisposals,0);a.dispose();assert.equal(textureDisposals,1);
    assert.ok(rb.children[0].material.map.image);
  }finally{WinterWorld.prototype.disposeModel(rb);b.dispose();}
});

const savedDocument=globalThis.document,savedImage=globalThis.Image,savedLoad=T.ImageLoader.prototype.load,pending=[];
globalThis.document={createElement(){return {width:64,height:64,getContext(){return {drawImage(){},getImageData(x,y,w,h){return {data:new Uint8ClampedArray(w*h*4).fill(255)};}};}};}};
globalThis.Image=class{constructor(){this.width=this.height=this.naturalWidth=this.naturalHeight=64;}set src(value){queueMicrotask(()=>this.onload?.());}};
T.ImageLoader.prototype.load=function(url,onLoad,progress,onError){if(url.includes('village-props'))pending.push({url,onLoad,onError});else queueMicrotask(()=>onLoad({width:64,height:64}));};
try{
  await test('두 계절 로딩을 모두 기다리고 한 시트 실패 시 다른 계절과 기존 영웅을 유지한다',async()=>{
    const {FixedBattleArt:Optional}=await import('../src/3d/fixed-art.js?village-optional'),w=world('winter'),art=new Optional(w);
    await new Promise(setImmediate);assert.equal(pending.length,2);assert.equal(art.ready,false);assert.equal(art.loading,true);
    const winter=pending.splice(pending.findIndex(p=>p.url.includes('winter-v1')),1)[0];winter.onLoad({width:1536,height:1024});await new Promise(setImmediate);assert.equal(art.ready,false);
    const warn=console.warn,warnings=[];console.warn=(...args)=>warnings.push(args);
    try{pending.shift().onError(new Error('expected temperate sheet failure'));await art.promise;}finally{console.warn=warn;}
    try{
      assert.equal(warnings.length,1);assert.equal(art.ready,true);assert.equal(art.failed,false);assert.equal(art.loading,false);assert.equal(w.renderer.domElement.dataset.villagePropArtStatus,'partial');assert.ok(art.heroPoses.yi);
      const root=art.prop('fieldWall',.6,1,.2);assert.equal(root.userData.villageProp.ready,true);WinterWorld.prototype.disposeModel(root);
      w.theme=world('summer').theme;for(const kind of ['villageFence','fieldWall','villageCargo']){
        const fallback=art.prop(kind,.6,0,.16);assert.equal(fallback.children.length,3);assert.equal(fallback.userData.villageProp.ready,false);for(const q of corners(fallback.children[0]))assert.ok(Math.hypot(q.x,q.z)<=.16+1e-7);WinterWorld.prototype.disposeModel(fallback);
      }
    }finally{art.dispose();}
  });
  await test('대체 목책·돌담·짐은 명시적 기존 그림을 사용하며 치우친 기준점도 여백을 지킨다',async()=>{
    await preloadArt();const art=owner('summer');art.villageProps={};
    try{for(const [kind,fallback]of [['villageFence','wall'],['fieldWall','wall'],['villageCargo','supplies']]){
      const source=propArt(fallback);assert.ok(source);const anchor=source.ax;source.ax=.2;
      try{const root=art.prop(kind,.6,1,.12);assert.equal(root.children[0].material.map.image,source.img);assert.equal(root.userData.villageProp.ready,false);for(const q of corners(root.children[0]))assert.ok(Math.hypot(q.x,q.z)<=.12+1e-7);WinterWorld.prototype.disposeModel(root);}finally{source.ax=anchor;}
    }}finally{art.dispose();}
  });
  await test('종료 후 늦은 두 시트 완료는 전장 DOM·메시·GPU 자원을 되살리지 않는다',async()=>{
    const {FixedBattleArt:Late}=await import('../src/3d/fixed-art.js?village-late'),w=world(),art=new Late(w);
    await new Promise(setImmediate);assert.equal(pending.length,2);art.dispose();const before=JSON.stringify(w.renderer.domElement.dataset);
    pending.splice(0).forEach(p=>p.onLoad({width:1536,height:1024}));await art.promise;
    assert.equal(art.destroyed,true);assert.equal(art.ready,false);assert.equal(art.textures.size,0);assert.equal(art.materials.size,0);assert.equal(art.geometries.size,0);assert.equal(JSON.stringify(w.renderer.domElement.dataset),before);
  });
}finally{T.ImageLoader.prototype.load=savedLoad;if(savedDocument===undefined)delete globalThis.document;else globalThis.document=savedDocument;if(savedImage===undefined)delete globalThis.Image;else globalThis.Image=savedImage;}
assert.equal(pending.length,0);
const report={date:'2026-10-11',passedTests:passed,stages:26,seasonCombinations:104,campaignBarrierCells:248,campaignBoundaryImages:122,campaignYardFences:13,campaignCargo:7,omittedBarrierCells:0,allActualBillboardCornersProtected:true,cameraHeights:[12,26,60],irregularBoundaryHolesPreserved:true,optionalAtlasFailureAndLateDisposal:true,stageReusesOwnerAndRebuildsSeason:true,perOwnerGpuLifetimePreserved:true,mapAndPathsUnchanged:true,localCoopCoverage:'tools/test-scenery.mjs actual build ownership and both gold budgets across 26 maps; full Session checks remain in regression',stageMetrics:stages.map(s=>({id:s.id,...plan(s).metrics}))};
if(process.argv.includes('--report'))fs.writeFileSync(new URL('../docs/VILLAGE_PROP_RUNTIME_VALIDATION.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(`\n마을 소품 검사 ${passed}개 통과`);
