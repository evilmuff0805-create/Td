import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { MENU_HERO_ART } from '../src/data/hero-menu-data.js';
import { HERO_POSE_ART } from '../src/3d/hero-pose-data.js';
import { SKIN_POSE_ART } from '../src/3d/skin-pose-data.js';
import { heroMenuFrame,portraitBounds } from '../src/data/hero-menu.js';
import { HERO_ORDER } from '../src/data/heroes.js';
import { SKINS } from '../src/data/skins.js';
import { ART } from '../src/data/art.js';
import { defaultProfile,ownsSkin,playerSpec } from '../src/meta/profile.js';

const results=[];
async function test(name,fn){await fn();results.push({name,passed:true});console.log('  ✔ '+name);}
const previousDocument=globalThis.document,previousImage=globalThis.Image;
class Canvas{
  constructor(){this.width=1;this.height=1;this.dataset={};this.style={};const self=this;
    this.ctx=new Proxy({calls:[],drawImage(...args){this.calls.push(args);},getImageData(x,y,w,h){const data=new Uint8ClampedArray(w*h*4);for(let i=0;i<data.length;i+=4)data.set([40,60,80,255],i);return {data,width:w,height:h};},createRadialGradient(){return {addColorStop(){}};},createLinearGradient(){return {addColorStop(){}};},measureText(){return {width:10};},canvas:self},{get:(target,key)=>key in target?target[key]:()=>{}});
  }
  getContext(){return this.ctx;}
}
let held=true,mode='ready';const requests=[],pending=[];
globalThis.document={createElement:()=>new Canvas()};
globalThis.Image=class{
  set src(url){this.url=url;requests.push(url);const menu=url.includes('hero-menu-poses');this.width=this.naturalWidth=menu?MENU_HERO_ART.width:128;this.height=this.naturalHeight=menu?MENU_HERO_ART.height:128;
    const done=()=>{if(menu&&mode==='missing')this.onerror();else{if(menu&&mode==='wrong-dimensions')this.width=this.naturalWidth=100;this.onload();}};
    if(held)pending.push({menu,done});else queueMicrotask(done);
  }
};
const drain=async()=>{await new Promise(resolve=>setImmediate(resolve));};
try{
  await test('기본 8명·의상 16종은 승인된 원래 포즈의 크기·발 중심과 유효한 얼굴 영역을 유지한다',()=>{
    assert.equal(MENU_HERO_ART.frames.length,24);assert.equal(new Set(MENU_HERO_ART.frames.map(f=>f.key)).size,24);
    for(const frame of MENU_HERO_ART.frames){
      const spec=frame.skinId?SKIN_POSE_ART[frame.skinId]:HERO_POSE_ART[frame.heroId],original=spec.frames[0];
      assert.equal(frame.width,original.width);assert.equal(frame.height,original.height);assert.equal(frame.anchor,original.anchor);
      const crop=portraitBounds(frame.width,frame.height,frame.face);assert.ok(crop.left>=0&&crop.top>=0);assert.ok(crop.left+crop.width<=frame.width&&crop.top+crop.height<=frame.height);assert.equal(crop.width,crop.height);
      assert.equal(heroMenuFrame(frame.heroId,frame.skinId),frame);
    }
    assert.equal(heroMenuFrame('yi','gwon_gold'),heroMenuFrame('yi'));assert.equal(heroMenuFrame('sejong','missing'),heroMenuFrame('sejong'));assert.equal(heroMenuFrame('missing'),null);
  });
  const art=await import('../src/render/art.js');
  await test('UI 그림을 한 번만 요청하며 늦게 준비돼도 첫 화면의 준비 Promise는 끝까지 기다린다',async()=>{
    const all=art.preloadArt();assert.equal(art.preloadArt(),all);let complete=false;all.then(()=>complete=true);
    assert.equal(requests.filter(url=>url.includes('hero-menu-poses')).length,1);
    for(const item of pending.filter(p=>!p.menu))item.done();pending.splice(0,pending.length,...pending.filter(p=>p.menu));await drain();assert.equal(complete,false);
    pending.shift().done();await drain();for(const item of pending.splice(0))item.done();await all;
    assert.equal(complete,true);assert.equal(art.artStatus().heroes,8);held=false;
  });
  await test('런타임 24개 그림은 시트의 정확한 범위·얼굴·발 중심을 쓰고 잘못된 영웅 의상을 거부한다',()=>{
    for(const frame of MENU_HERO_ART.frames){
      const look=art.heroArt(frame.heroId,frame.skinId);assert.equal(look.source,'approved-menu-poses');assert.equal(look.look,frame.key);assert.equal(look.ax,frame.anchor);assert.deepEqual(look.face,frame.face);
      const [image,...args]=look.img.ctx.calls[0];assert.ok(image.url.endsWith(MENU_HERO_ART.path));assert.deepEqual(args,[frame.left,frame.top,frame.width,frame.height,0,0,frame.width,frame.height]);
      assert.equal(art.heroArt(frame.heroId,frame.skinId),look);
    }
    assert.equal(art.heroArt('yi','gwon_gold'),art.heroArt('yi'));assert.equal(art.heroArt('missing'),null);
  });
  const {heroPortrait,heroFull}=await import('../src/ui/icons.js');
  await test('선택창·의상실·HUD의 실제 캔버스는 24개 같은 그림과 정사각 얼굴·발 중심을 사용한다',()=>{
    for(const frame of MENU_HERO_ART.frames){
      const look=art.heroArt(frame.heroId,frame.skinId),portrait=heroPortrait(frame.heroId,46,1,frame.skinId),full=heroFull(frame.heroId,200,frame.skinId),crop=portraitBounds(frame.width,frame.height,frame.face);
      assert.deepEqual(portrait.ctx.calls[0],[look.img,crop.left,crop.top,crop.width,crop.height,0,0,46,46]);
      assert.equal(portrait.dataset.artSource,'approved-menu-poses');assert.equal(full.dataset.skin,frame.skinId??'');assert.equal(full.dataset.hero,frame.heroId);
      const [img,x,y,w,h]=full.ctx.calls[0];assert.equal(img,look.img);assert.equal(y+h,200);assert.ok(Math.abs(x+w*frame.anchor-100)<1e-8);
    }
  });
  const {drawHero}=await import('../src/render/draw-units.js');
  await test('평면 모드의 실제 영웅 그리기는 이동·공격·반전 중에도 같은 기본/의상 그림을 사용한다',()=>{
    for(const frame of MENU_HERO_ART.frames){
      const look=art.heroArt(frame.heroId,frame.skinId),hero={heroId:frame.heroId,skin:frame.skinId,id:2,owner:1,x:3,y:4,moving:true,anim:.2,hp:100,maxHp:100,facing:-1,buffs:{}},before=JSON.stringify(hero),cv=new Canvas();
      drawHero(cv.ctx,hero,.8,{noBar:true});assert.ok(cv.ctx.calls.some(args=>args[0]===look.canvas));assert.equal(JSON.stringify(hero),before);
    }
  });
  const {atlasStyle}=await import('../src/3d/interface.js');
  await test('자유 전장 초상화는 장착 의상을 따르고 실제 얼굴 범위만 CSS로 표시한다',()=>{
    for(const frame of MENU_HERO_ART.frames){
      const element={style:{},dataset:{}};atlasStyle(element,'heroes',frame.heroId,frame.skinId);
      const crop=portraitBounds(frame.width,frame.height,frame.face);assert.ok(element.style.backgroundImage.includes(MENU_HERO_ART.path));assert.equal(element.dataset.skin,frame.skinId??'');
      assert.equal(element.style.backgroundSize,`${MENU_HERO_ART.width/crop.width*100}% ${MENU_HERO_ART.height/crop.height*100}%`);
      assert.equal(element.style.backgroundPosition,`${(frame.left+crop.left)/(MENU_HERO_ART.width-crop.width)*100}% ${(frame.top+crop.top)/(MENU_HERO_ART.height-crop.height)*100}%`);
    }
    const unknown={style:{},dataset:{}};atlasStyle(unknown,'heroes','missing');assert.equal(unknown.style.backgroundImage,'none');
  });
  await test('새 시트 누락·잘못된 크기에도 기존 8명과 기존 의상 대체 그림이 남는다',async()=>{
    for(const failure of ['missing','wrong-dimensions']){
      mode=failure;const fallback=await import('../src/render/art.js?'+failure);await fallback.preloadArt();
      for(const id of HERO_ORDER){
        const base=fallback.heroArt(id);assert.ok(base);assert.notEqual(base.source,'approved-menu-poses');assert.deepEqual(fallback.portraitArt(id).face,ART.faces[id]);
        for(const skin of SKINS[id]){const look=fallback.heroArt(id,skin.id);assert.ok(look);assert.equal(look.source,'fallback-recolour');assert.equal(fallback.heroArt(id,skin.id),look);}
      }
      assert.equal(fallback.heroArt('yi','gwon_gold'),fallback.heroArt('yi'));
    }mode='ready';
  });
  await test('잠긴 의상 미리보기와 양측 초상화는 프로필·의상 소유·출전 사양을 바꾸지 않는다',()=>{
    const profile=defaultProfile(),before=JSON.stringify(profile),spec=playerSpec(profile,['yi','sejong'],['singijeon','bongsu']);
    for(const frame of MENU_HERO_ART.frames){heroFull(frame.heroId,170,frame.skinId);heroPortrait(frame.heroId,46,0,frame.skinId);heroPortrait(frame.heroId,46,1,frame.skinId);if(frame.skinId)assert.equal(ownsSkin(profile,frame.skinId),false);}
    assert.equal(JSON.stringify(profile),before);assert.deepEqual(playerSpec(profile,['yi','sejong'],['singijeon','bongsu']),spec);
  });
}finally{
  if(previousDocument===undefined)delete globalThis.document;else globalThis.document=previousDocument;
  if(previousImage===undefined)delete globalThis.Image;else globalThis.Image=previousImage;
}
await fs.writeFile(new URL('../docs/HERO_MENU_VALIDATION.json',import.meta.url),JSON.stringify({date:'2026-10-11',tests:results.length,results,scope:'Approved static menu/HUD/flat-mode poses, loaded identities, actual canvas draw calls, CSS crop bounds, failure fallback and unchanged profile/spec; pixel identity is verified separately by hero-menu-assets.mjs'},null,2)+'\n');
console.log(`\n메뉴 그림 검사 ${results.length}개 통과`);
