import assert from 'node:assert/strict';
import * as T from 'three';
import {FixedBattleArt} from '../src/3d/fixed-art.js';
import {SEASON_TREE_ART} from '../src/3d/season-tree-data.js';
import {seasonalTreeKind,seasonalTreeIndex} from '../src/3d/seasonal-props.js';
import {seasonFor} from '../src/3d/seasons.js';
import {STAGES} from '../src/data/stages.js';
import {buildBattlefield} from '../src/3d/environment.js';
import {WinterWorld} from '../src/3d/world.js';

let passed=0;
async function test(name,fn){await fn();passed++;console.log('  ✔ '+name);}
const camera=new T.OrthographicCamera(-8,8,6,-6,.1,100);camera.position.set(17,26,26);camera.lookAt(0,0,0);camera.updateMatrixWorld();
const world=season=>({camera,theme:seasonFor(STAGES[0],season),renderer:{domElement:{dataset:{}}},combatKinds:[]});
const trees={isolated:SEASON_TREE_ART.frames.map(f=>({canvas:{width:f.width+24,height:f.height+24},frame:{...f,left:12,top:12}}))};
function owner(season){
  const art=Object.assign(Object.create(FixedBattleArt.prototype),{world:world(season),ready:true,seasonTrees:trees,textures:new Map(),materials:new Map(),geometries:new Map()});
  art.shadowTexture=new T.DataTexture(new Uint8Array([255,255,255,255]),1,1);art.shadowMaterial=new T.MeshBasicMaterial({map:art.shadowTexture});return art;
}
await test('계절 수목 6종과 상록수 혼합은 겨울 그림·계절별 두 변형을 구분한다',()=>{
  assert.equal(SEASON_TREE_ART.frames.length,6);
  for(const [season,kind,indices]of [['spring','blossom',[0,1]],['summer','broadleaf',[2,3]],['autumn','maple',[4,5]]]){
    const theme=world(season).theme;assert.equal(seasonalTreeKind(theme,0),kind);assert.equal(seasonalTreeKind(theme,1),'pine');
    assert.deepEqual([seasonalTreeIndex(theme,kind,0),seasonalTreeIndex(theme,kind,1)],indices);
    assert.equal(seasonalTreeIndex(theme,'pine',0),null);
    assert.equal(seasonalTreeIndex(world('winter').theme,kind,0),null);
  }
  assert.equal(seasonalTreeKind(world('winter').theme,0),'snowPine');
});
await test('실제 나무 메시 6종은 분리 그림·여백·요청 높이·줄기 기준점과 투영 그림자를 사용한다',()=>{
  for(const [season,kind]of [['spring','blossom'],['summer','broadleaf'],['autumn','maple']]){
    const art=owner(season);
    for(const variation of [0,1]){
      const root=art.prop(kind,2.4,variation),index=seasonalTreeIndex(art.world.theme,kind,variation),image=root.children[0],f=trees.isolated[index];
      assert.equal(root.userData.seasonTree.index,index);assert.equal(image.material.map.image,f.canvas);assert.equal(root.children.length,3);
      image.geometry.computeBoundingBox();const b=image.geometry.boundingBox;
      assert.ok(Math.abs(b.min.y)<1e-6);assert.ok(Math.abs(b.max.y-2.4)<1e-6);assert.ok(Math.abs(b.min.x+f.frame.anchor*2.4*f.frame.width/f.frame.height)<1e-6);
      assert.ok(image.quaternion.angleTo(camera.quaternion)<1e-6);
      const uv=image.geometry.attributes.uv;for(let i=0;i<uv.count;i++)assert.ok(uv.getX(i)>0&&uv.getX(i)<1&&uv.getY(i)>0&&uv.getY(i)<1);
      const shadow=root.children[2];assert.equal(shadow.geometry,image.geometry);assert.equal(shadow.material.map,image.material.map);
      WinterWorld.prototype.disposeModel(root);
    }art.dispose();
  }
});
await test('사계절 실제 풍경의 수목 선택은 지도·경로·건설 정보를 바꾸지 않는다',()=>{
  const before=JSON.stringify(STAGES);
  for(const season of ['spring','summer','autumn','winter']){
    const theme=world(season).theme,calls=[],art={prop(kind){calls.push(kind);return new T.Group();}},field=buildBattlefield(STAGES[0],theme,art),kind=seasonalTreeKind(theme,0);
    assert.ok(calls.includes(kind),season+' trees present');
    for(const other of ['blossom','broadleaf','maple','snowPine'].filter(k=>k!==kind))assert.ok(!calls.includes(other));
    WinterWorld.prototype.disposeModel(field.root);WinterWorld.prototype.disposeModel(field.water);
  }assert.equal(JSON.stringify(STAGES),before);
});
await test('서로 다른 계절 소유자는 원본 그림을 공유해도 색·GPU 자원·종료를 공유하지 않는다',()=>{
  const a=owner('spring'),b=owner('autumn'),ra=a.prop('blossom',2,0),rb=b.prop('maple',2,0),saved=ra.children[0].material.color.getHex();
  b.world.theme=world('summer').theme;b.material(trees.isolated[0].canvas);
  assert.equal(ra.children[0].material.color.getHex(),saved);assert.notEqual(a.texture(trees.isolated[0].canvas),b.texture(trees.isolated[0].canvas));
  let disposed=0;for(const t of a.textures.values())t.addEventListener('dispose',()=>disposed++);
  const count=a.textures.size;WinterWorld.prototype.disposeModel(ra);assert.equal(disposed,0);a.dispose();assert.equal(disposed,count);assert.ok(rb.children[0].material.map.image);
  WinterWorld.prototype.disposeModel(rb);b.dispose();
});

const savedDocument=globalThis.document,savedImage=globalThis.Image,savedLoad=T.ImageLoader.prototype.load,pending=[];
globalThis.document={createElement(){return {width:64,height:64,getContext(){return {drawImage(){},getImageData(x,y,w,h){return {data:new Uint8ClampedArray(w*h*4).fill(255)};}};}};}};
globalThis.Image=class{constructor(){this.width=this.height=this.naturalWidth=this.naturalHeight=64;}set src(value){queueMicrotask(()=>this.onload?.());}};
T.ImageLoader.prototype.load=function(url,onLoad,progress,onError){if(url.includes('season-trees'))pending.push({onLoad,onError});else queueMicrotask(()=>onLoad({width:64,height:64}));};
try{
  await test('새 수목 실패는 코어 대기를 해제하고 기존 계절 소품·영웅을 유지한다',async()=>{
    const {FixedBattleArt:Missing}=await import('../src/3d/fixed-art.js?season-test-missing'),w=world('spring'),art=new Missing(w);
    await new Promise(setImmediate);assert.equal(art.loading,true);assert.equal(art.ready,false);assert.equal(pending.length,1);
    const warn=console.warn,warnings=[];console.warn=(...args)=>warnings.push(args);
    try{pending.shift().onError(new Error('expected tree failure'));await art.promise;}finally{console.warn=warn;}
    assert.equal(warnings.length,1);assert.equal(art.ready,true);assert.equal(art.failed,false);assert.equal(art.loading,false);assert.equal(w.renderer.domElement.dataset.seasonTreeArtStatus,'fallback');
    const root=art.prop('blossom',2,0);assert.equal(root.children.length,3);assert.equal(root.userData.seasonTree,undefined);assert.ok(art.heroPoses.yi);
    WinterWorld.prototype.disposeModel(root);art.dispose();
  });
  await test('종료 뒤 늦은 수목 로딩은 GPU 자원과 전장 DOM을 되살리지 않는다',async()=>{
    const {FixedBattleArt:Late}=await import('../src/3d/fixed-art.js?season-test-late'),w=world('summer'),art=new Late(w);
    await new Promise(setImmediate);assert.equal(pending.length,1);art.dispose();const before=JSON.stringify(w.renderer.domElement.dataset);
    pending.shift().onLoad({width:1536,height:1024});await art.promise;
    assert.equal(art.destroyed,true);assert.equal(art.ready,false);assert.equal(art.textures.size,0);assert.equal(JSON.stringify(w.renderer.domElement.dataset),before);
  });
}finally{T.ImageLoader.prototype.load=savedLoad;if(savedDocument===undefined)delete globalThis.document;else globalThis.document=savedDocument;if(savedImage===undefined)delete globalThis.Image;else globalThis.Image=savedImage;}
assert.equal(pending.length,0);
console.log(`\n계절 수목 검사 ${passed}개 통과`);
