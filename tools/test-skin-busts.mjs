import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { SKIN_BUST_ART } from '../src/data/skin-bust-data.js';
import { HERO_BUST_ART } from '../src/data/hero-bust-data.js';
import { MENU_HERO_ART } from '../src/data/hero-menu-data.js';
import { HERO_ORDER } from '../src/data/heroes.js';
import { SKINS } from '../src/data/skins.js';
import { defaultProfile, playerSpec } from '../src/meta/profile.js';

const saved = Object.fromEntries(['document','Image','Node','window','innerWidth','innerHeight','requestAnimationFrame','cancelAnimationFrame'].map(k => [k, globalThis[k]]));
const results = [];
async function test(name, run) { await run(); results.push({ name, passed: true }); console.log('  ✔ ' + name); }
const drain = () => new Promise(resolve => setImmediate(resolve));
class Element {
  constructor(tag = 'canvas') {
    this.tagName = tag; this.children = []; this.dataset = {}; this.style = {}; this.attributes = {}; this.events = {}; this.isConnected = false; this.width = this.height = 1;
    this.ctx = new Proxy({ calls: [], drawImage(...args) { this.calls.push(args); }, getImageData(x,y,w,h) { const data = new Uint8ClampedArray(w*h*4); for(let i=0;i<data.length;i+=4)data.set([40,60,80,255],i); return { data, width:w, height:h }; }, createLinearGradient() { return { addColorStop() {} }; }, createRadialGradient() { return { addColorStop() {} }; }, measureText() { return { width:10 }; } }, { get: (t,k) => k in t ? t[k] : () => {} });
  }
  setAttribute(k,v) { this.attributes[k] = String(v); }
  getAttribute(k) { return this.attributes[k]; }
  addEventListener(k,v) { this.events[k] = v; }
  getContext() { return this.ctx; }
  connect(value) { this.isConnected = value; for(const c of this.children)c.connect(value); }
  append(...items) { for(const item of items) { item.remove(); this.children.push(item); item.parentNode = this; item.connect(this.isConnected); } }
  prepend(item) { this.append(item); this.children.unshift(this.children.pop()); }
  remove() { if(this.parentNode)this.parentNode.children.splice(this.parentNode.children.indexOf(this),1); this.parentNode = null; this.connect(false); }
  get textContent() { return this.text ?? this.children.map(c=>c.textContent).join(''); }
  set textContent(v) { this.text = v; }
}
const all = (node, predicate) => [...(predicate(node) ? [node] : []), ...node.children.flatMap(c => all(c,predicate))];
let held = true, failure = null;
const requests = [], queue = [];
const body = new Element('body'); body.connect(true);
globalThis.Node = Element;
globalThis.document = { body, createElement: tag => new Element(tag), createTextNode(text) { const el = new Element('#text'); el.textContent = text; return el; } };
globalThis.window = { devicePixelRatio:1, matchMedia:()=>({matches:true}), addEventListener(){}, removeEventListener(){} };
globalThis.innerWidth = 1280; globalThis.innerHeight = 720;
globalThis.requestAnimationFrame = () => 1; globalThis.cancelAnimationFrame = () => {};
globalThis.Image = class {
  set src(url) {
    this.url = url; requests.push(url);
    const bust = url.includes('/portraits/'), menu = url.includes('hero-menu-poses');
    this.width = this.naturalWidth = bust ? 640 : menu ? MENU_HERO_ART.width : 128;
    this.height = this.naturalHeight = bust ? 640 : menu ? MENU_HERO_ART.height : 128;
    const mode = failure;
    const done = () => { if(bust && mode === 'missing')this.onerror(); else { if(bust && mode === 'dimensions')this.naturalWidth = this.width = 100; this.onload(); } };
    if(bust && held)queue.push({url,done}); else queueMicrotask(done);
  }
};
const bustRequests = () => requests.filter(u=>u.includes('/portraits/'));
const release = id => { const i=queue.findIndex(q=>q.url.includes('/'+id+'-bust')); assert.ok(i>=0,id+' pending'); queue.splice(i,1)[0].done(); };
try {
  const busts=await import('../src/render/hero-busts.js');
  const looks=Object.entries(SKINS).flatMap(([hero,skins])=>skins.map(s=>({hero,skin:s.id,name:s.name})));
  await test('16의상은 기존 소유 ID와 일치하고 기본8명과 모두 다른 배포 경로를 가진다',()=>{
    assert.deepEqual(Object.keys(SKIN_BUST_ART),looks.map(l=>l.skin));
    const paths=[...Object.values(HERO_BUST_ART),...Object.values(SKIN_BUST_ART)];
    assert.equal(new Set(paths.map(p=>p.path)).size,24);
    for(const p of paths){assert.equal(p.width,640);assert.equal(p.height,640);}
    assert.equal(requests.length,0);
  });
  const art=await import('../src/render/art.js');
  await test('기존 전장 준비는 24개 큰 일러스트를 요청하지 않으며 의상 원래 그림은 준비한다',async()=>{
    await art.preloadArt();assert.equal(bustRequests().length,0);
    for(const l of looks){assert.equal(art.heroArt(l.hero,l.skin).look,l.skin);assert.equal(art.heroArt(l.hero,l.skin).source,'approved-menu-poses');}
  });
  await test('동일 영웅 기본·백의·금빛은 별도 요청이며 동일 의상 두 카드는 완료를 공유한다',async()=>{
    const white=busts.loadHeroBust('yi','yi_white'),gold=busts.loadHeroBust('yi','yi_gold'),base=busts.loadHeroBust('yi');
    assert.equal(white,busts.loadHeroBust('yi','yi_white'));assert.notEqual(white,gold);assert.notEqual(gold,base);assert.equal(bustRequests().length,3);
    release('yi_gold');await gold;assert.equal(busts.heroBustArt('yi','yi_gold').look,'yi_gold');assert.equal(busts.heroBustArt('yi','yi_white'),null);assert.equal(busts.heroBustArt('yi'),null);
    release('yi_white');release('yi');await Promise.all([white,base]);
    assert.notEqual(busts.heroBustArt('yi').img,busts.heroBustArt('yi','yi_white').img);
  });
  await test('외국 영웅의 의상·잘못된 ID는 다른 의상을 빌리지 않고 자기 기본 외형으로 돌아간다',async()=>{
    const n=bustRequests().length;
    for(const skin of ['gwon_gold','missing','__proto__'])assert.equal(busts.loadHeroBust('yi',skin),busts.loadHeroBust('yi'));
    for(const hero of ['missing','toString','__proto__'])assert.equal(await busts.loadHeroBust(hero,'yi_gold'),null);
    assert.equal(bustRequests().length,n);
    const foreign=busts.loadHeroBust('gwon','yi_gold');release('gwon');assert.equal((await foreign).look,'gwon');
  });
  const {heroBust,heroFull,heroPortrait}=await import('../src/ui/icons.js');
  await test('의상을 바꾸고 이전 캔버스를 제거하면 늦은 이전 응답이 새 의상을 덮지 않는다',async()=>{
    const iron=heroBust('eulji',224,'eulji_iron');body.append(iron);
    assert.equal(iron.ctx.calls[0][0],art.heroArt('eulji','eulji_iron').img);iron.remove();
    const gold=heroBust('eulji',224,'eulji_gold');body.append(gold);
    assert.equal(gold.ctx.calls[0][0],art.heroArt('eulji','eulji_gold').img);
    release('eulji_gold');await drain();const painted=gold.ctx.calls.length;
    release('eulji_iron');await drain();assert.equal(iron.ctx.calls.length,1);assert.equal(gold.ctx.calls.length,painted);
    assert.equal(gold.dataset.skin,'eulji_gold');assert.equal(gold.ctx.calls.at(-1)[0],busts.heroBustArt('eulji','eulji_gold').img);
  });
  await test('한 의상의 누락·잘못된 크기는 그 의상에만 실패로 남고 기본·다른 의상은 정상이다',async()=>{
    held=false;
    for(const mode of ['missing','dimensions']){
      failure=mode;const isolated=await import('../src/render/hero-busts.js?skin-'+mode);
      const failed=isolated.loadHeroBust('yi','yi_white');assert.equal(await failed,null);const n=bustRequests().length;
      assert.equal(isolated.loadHeroBust('yi','yi_white'),failed);assert.equal(bustRequests().length,n);
      failure=null;await Promise.all([isolated.loadHeroBust('yi'),isolated.loadHeroBust('yi','yi_gold')]);
      assert.equal(isolated.heroBustArt('yi').look,'yi');assert.equal(isolated.heroBustArt('yi','yi_gold').look,'yi_gold');assert.equal(isolated.heroBustArt('yi','yi_white'),null);
    }
  });
  await test('16개 원화는 각각 완전한 정사각을 표시하고 HUD 얼굴과 전신은 승인 포즈를 유지한다',async()=>{
    await Promise.all(looks.map(l=>busts.loadHeroBust(l.hero,l.skin)));
    for(const l of looks){
      const cv=heroBust(l.hero,224,l.skin),image=busts.heroBustArt(l.hero,l.skin);
      assert.equal(cv.dataset.bustState,'ready');assert.equal(cv.dataset.artSource,'hero-skin-bust-v1');assert.equal(image.look,l.skin);assert.ok(cv.getAttribute('aria-label').includes(l.name));
      assert.deepEqual(cv.ctx.calls[0],[image.img,0,0,640,640,0,0,224,224]);
      assert.equal(heroPortrait(l.hero,46,0,l.skin).dataset.artSource,'approved-menu-poses');assert.equal(heroFull(l.hero,224,l.skin).ctx.calls[0][0],art.heroArt(l.hero,l.skin).img);
    }
  });
  const {shopScreen}=await import('../src/ui/screens-shop.js');
  const profile=defaultProfile(),app={profile,go(name,params){this.last={name,params};},startBattle(battle){this.battle=battle;}};
  await test('실제 의상실의 잠긴16의상 미리보기·전신 전환·영웅 전환은 소유·군자금·출전 사양을 바꾸지 않는다',async()=>{
    const before=JSON.stringify(profile),spec=playerSpec(profile,['yi','sejong'],profile.loadout.coop.skills);
    for(const id of HERO_ORDER){
      const screen=shopScreen(app,{tab:'skins',hero:id});body.append(screen);await drain();
      const canvases=all(screen,e=>e.dataset.heroImage==='bust');assert.equal(canvases.length,3);
      for(const c of canvases)assert.equal(c.dataset.bustState,'ready');
      const buys=all(screen,e=>e.tagName==='button'&&e.textContent.startsWith('구입'));assert.equal(buys.length,2);assert.ok(buys.every(b=>b.getAttribute('disabled')===''));
      all(screen,e=>e.tagName==='button'&&e.textContent==='전신')[0].events.click();assert.deepEqual(app.last,{name:'shop',params:{tab:'skins',hero:id,art:'full'}});
      screen.remove();const full=shopScreen(app,app.last.params);body.append(full);assert.equal(all(full,e=>e.dataset.heroImage==='full').length,3);
      all(full,e=>e.tagName==='button'&&e.textContent==='세종대왕')[0].events.click();assert.equal(app.last.params.art,'full');assert.equal(app.last.params.hero,'sejong');full.remove();
    }
    assert.equal(JSON.stringify(profile),before);assert.deepEqual(playerSpec(profile,['yi','sejong'],profile.loadout.coop.skills),spec);
  });
  await test('기존 구매·장착 버튼은 원래150옥 가격·소유·장착만 바꾸며 그림 모드를 보존한다',()=>{
    const p=defaultProfile();p.jade=200;p.skins.owned.push('yi_white');const heroes=JSON.stringify(p.heroes),coins=p.coins;
    const a={profile:p,go(name,params){this.last={name,params};}};
    let screen=shopScreen(a,{tab:'skins',hero:'yi',art:'full'});body.append(screen);
    all(screen,e=>e.tagName==='button'&&e.textContent==='입기')[0].events.click();assert.equal(p.skins.eq.yi,'yi_white');assert.equal(p.jade,200);assert.equal(a.last.params.art,'full');screen.remove();
    screen=shopScreen(a,a.last.params);body.append(screen);
    all(screen,e=>e.tagName==='button'&&e.textContent.includes('◆150'))[0].events.click();
    assert.equal(p.jade,50);assert.ok(p.skins.owned.includes('yi_gold'));assert.equal(p.skins.eq.yi,'yi_gold');assert.equal(a.last.params.art,'full');assert.equal(p.coins,coins);assert.equal(JSON.stringify(p.heroes),heroes);screen.remove();
  });
  const {heroesScreen}=await import('../src/ui/screens-codex.js');
  const {localSetupScreen}=await import('../src/ui/screens-play.js');
  await test('실제 도감과 로컬2인 선택은 장착 백의·청룡포를 표시하며 원래 두 출전 사양과 중복 선택 금지를 유지한다',()=>{
    profile.skins.owned.push('yi_white','sejong_blue');profile.skins.eq.yi='yi_white';profile.skins.eq.sejong='sejong_blue';
    const before=JSON.stringify(profile);
    for(const [hero,skin]of [['yi','yi_white'],['sejong','sejong_blue']]){
      const codex=heroesScreen(app,{id:hero});body.append(codex);
      const equipped=all(codex,e=>e.dataset.heroImage==='bust'&&e.dataset.hero===hero);assert.equal(equipped.length,2);
      for(const cv of equipped){assert.equal(cv.dataset.skin,skin);assert.equal(cv.dataset.artSource,'hero-skin-bust-v1');}codex.remove();
    }
    const screen=localSetupScreen(app,{stageId:'s1'});body.append(screen);const canvases=all(screen,e=>e.dataset.heroImage==='bust');assert.equal(canvases.length,16);
    assert.equal(canvases.filter(c=>c.dataset.skin==='yi_white').length,2);assert.equal(canvases.filter(c=>c.dataset.skin==='sejong_blue').length,2);
    const cards=all(screen,e=>e.tagName==='button'&&e.className?.startsWith('card')&&all(e,c=>c.dataset.heroImage==='bust').length===1);assert.equal(cards.filter(c=>c.getAttribute('disabled')==='').length,2);
    all(screen,e=>e.tagName==='button'&&e.textContent==='함께 출전!')[0].events.click();
    assert.equal(app.battle.kind,'local');assert.deepEqual(app.battle.specs,[playerSpec(profile,['yi'],profile.loadout.coop.skills,'1P'),playerSpec(profile,['sejong'],profile.loadout.p2.skills,'2P',{noItems:true})]);assert.equal(JSON.stringify(profile),before);
  });
} finally {
  for(const [key,value]of Object.entries(saved))if(value===undefined)delete globalThis[key];else globalThis[key]=value;
}
await fs.writeFile(new URL('../docs/SKIN_BUST_RUNTIME_VALIDATION.json',import.meta.url),JSON.stringify({date:'2026-10-11',tests:results.length,results,scope:'Costume-specific cache and errors, late costume replacement lifetime, unchanged HUD/full art, actual locked shop preview/purchase/equip, codex and two-player setup/specs'},null,2)+'\n');
console.log('\n의상 흉상 검사 '+results.length+'개 통과');
