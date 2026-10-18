import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
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
  const busts = await import('../src/render/hero-busts.js');
  await test('8명 전용 경로는 서로 다르며 메뉴 모듈을 읽는 것만으로 이미지를 요청하지 않는다',async()=>{
    assert.deepEqual(Object.keys(HERO_BUST_ART),HERO_ORDER); assert.equal(new Set(Object.values(HERO_BUST_ART).map(s=>s.path)).size,8);
    assert.equal(requests.length,0);
    for(const id of ['missing','toString','__proto__'])assert.equal(await busts.loadHeroBust(id),null);
    assert.equal(requests.length,0);
  });
  await test('같은 영웅의 동시 요청은 1회이고 그림이 준비될 때까지 캐시가 빈 상태를 유지한다',async()=>{
    const first=busts.loadHeroBust('yi'); assert.equal(first,busts.loadHeroBust('yi')); assert.equal(bustRequests().length,1); assert.equal(busts.heroBustArt('yi'),null);
    let complete=false; first.then(()=>complete=true); await drain(); assert.equal(complete,false);
    release('yi'); const art=await first; assert.equal(art,busts.heroBustArt('yi')); assert.equal(art.look,'yi'); assert.equal(art.img.decoding,'async'); assert.equal(busts.loadHeroBust('yi'),first);
  });
  const art = await import('../src/render/art.js');
  await test('기존 전장/메뉴 준비 함수는 새 흉상을 디코딩하지 않는다',async()=>{
    const n=bustRequests().length; await art.preloadArt(); assert.equal(bustRequests().length,n);
    for(const id of HERO_ORDER)assert.equal(art.heroArt(id).source,'approved-menu-poses');
  });
  const {heroBust,heroFull,heroPortrait} = await import('../src/ui/icons.js');
  await test('준비된 원화는 640 정사각 전체를 표시하고 작은 HUD·전신은 기존 그림을 계속 쓴다',()=>{
    const cv=heroBust('yi',304),source=busts.heroBustArt('yi');
    assert.equal(cv.width,608); assert.equal(cv.dataset.heroImage,'bust'); assert.equal(cv.dataset.bustState,'ready'); assert.equal(cv.getAttribute('role'),'img');
    assert.deepEqual(cv.ctx.calls[0],[source.img,0,0,640,640,0,0,304,304]);
    for(const fn of [heroFull,heroPortrait])assert.equal(fn('yi',46).dataset.artSource,'approved-menu-poses');
  });
  await test('늦게 준비되는 원화는 해당 캔버스만 바꾸고 같은 영웅 카드 두 개는 요청을 공유한다',async()=>{
    const a=heroBust('sejong',160),b=heroBust('sejong',304); body.append(a,b); const base=art.heroArt('sejong');
    assert.equal(a.dataset.bustState,'fallback'); assert.equal(a.ctx.calls[0][0],base.img); assert.equal(a.ctx.calls[0][4],Math.ceil(base.img.height*.72));
    assert.equal(bustRequests().filter(u=>u.includes('/sejong-')).length,1);
    release('sejong'); await drain(); for(const cv of [a,b]){assert.equal(cv.dataset.bustState,'ready');assert.equal(cv.ctx.calls.length,2);assert.equal(cv.ctx.calls.at(-1)[0],busts.heroBustArt('sejong').img);}
  });
  await test('화면을 떠난 뒤 로딩이 끝나도 제거된 캔버스를 다시 칠하거나 화면에 삽입하지 않는다',async()=>{
    const cv=heroBust('gang',304); body.append(cv); cv.remove(); const n=body.children.length;
    release('gang'); await drain(); assert.equal(cv.ctx.calls.length,1); assert.equal(cv.isConnected,false); assert.equal(body.children.length,n);
    const revisit=heroBust('gang',304); assert.equal(revisit.dataset.bustState,'ready'); assert.equal(bustRequests().filter(u=>u.includes('/gang-')).length,1);
  });
  await test('16개 유효 의상은 자신의 상반신 대체 그림에서 전용 원화로 바뀌며 기본 흉상을 요청하지 않는다',async()=>{
    const n=bustRequests().length;
    for(const id of HERO_ORDER)for(const skin of SKINS[id]){
      const cv=heroBust(id,200,skin.id),look=art.heroArt(id,skin.id);
      body.append(cv);
      assert.equal(cv.dataset.skin,skin.id);assert.equal(cv.dataset.bustState,'fallback');assert.equal(cv.ctx.calls[0][0],look.img);assert.equal(cv.ctx.calls[0][4],Math.ceil(look.img.height*.72));assert.equal(busts.heroBustArt(id,skin.id),null);
      release(skin.id);await drain();
      assert.equal(cv.dataset.bustState,'ready');assert.equal(cv.dataset.artSource,'hero-skin-bust-v1');assert.equal(cv.ctx.calls.at(-1)[0],busts.heroBustArt(id,skin.id).img);
    }
    assert.equal(bustRequests().length,n+16);
  });
  await test('다른 영웅·잘못된 의상 ID는 기본 외형으로 안전하게 돌아간다',()=>{
    for(const skin of ['gwon_gold','missing']){const cv=heroBust('yi',160,skin);assert.equal(cv.dataset.skin,'');assert.equal(cv.ctx.calls[0][0],busts.heroBustArt('yi').img);}
    assert.equal(busts.heroBustArt('toString'),null);
  });
  await test('누락·잘못된 크기의 원화는 null로 끝나고 실패한 요청도 반복하지 않는다',async()=>{
    held=false;
    for(const mode of ['missing','dimensions']){
      failure=mode;const isolated=await import('../src/render/hero-busts.js?'+mode),n=bustRequests().length;
      const first=isolated.loadHeroBust('yi');assert.equal(await first,null);assert.equal(isolated.heroBustArt('yi'),null);assert.equal(isolated.loadHeroBust('yi'),first);assert.equal(bustRequests().length,n+1);
    }
    failure=null;
  });
  const {heroesScreen}=await import('../src/ui/screens-codex.js');
  const profile=defaultProfile(), app={profile,go(name,params){this.last={name,params};},startBattle(battle){this.battle=battle;}};
  await test('실제 영웅 도감 8카드와 상세가 흉상을 쓰고 전신 전환은 영웅·프로필을 보존한다',async()=>{
    const before=JSON.stringify(profile),screen=heroesScreen(app,{id:'yi'});body.append(screen);
    assert.equal(all(screen,e=>e.dataset.heroImage==='bust').length,9);
    const toggle=all(screen,e=>e.tagName==='button'&&e.textContent==='전신')[0]; toggle.events.click(); assert.deepEqual(app.last,{name:'heroes',params:{id:'yi',art:'full'}});
    screen.remove();const full=heroesScreen(app,app.last.params);body.append(full);
    const poses=all(full,e=>e.dataset.heroImage==='full');assert.equal(poses.length,1);assert.equal(poses[0].dataset.hero,'yi');assert.equal(poses[0].ctx.calls[0][0],art.heroArt('yi').img);
    await drain();assert.equal(JSON.stringify(profile),before);
    for(const id of HERO_ORDER)assert.ok(busts.heroBustArt(id));
  });
  const {loadoutScreen}=await import('../src/ui/screens-play.js');
  await test('솔로 선택창은 8흉상과 1영웅 출전 사양을 유지한다',()=>{
    const before=JSON.stringify(profile),screen=loadoutScreen(app,{stageId:'s1',difficulty:'normal'});body.append(screen);
    assert.equal(all(screen,e=>e.dataset.heroImage==='bust').length,8);
    const cards=all(screen,e=>e.tagName==='button'&&e.className?.startsWith('card')&&all(e,c=>c.dataset.heroImage==='bust').length===1);
    assert.equal(cards.filter(c=>c.attributes.disabled==='').length,0);
    const start=all(screen,e=>e.tagName==='button'&&e.textContent==='출전!')[0];assert.ok(start);start.events.click();
    assert.equal(app.battle.kind,'solo');assert.equal(app.battle.stageId,'s1');assert.deepEqual(app.battle.specs,[playerSpec(profile,['yi'],profile.loadout.solo.skills)]);
    assert.equal(JSON.stringify(profile),before);
  });
  await test('도감 장착 의상은 전용 원화를 쓰고 그림 전환은 소유·재화·전투 사양을 바꾸지 않는다',()=>{
    profile.skins.owned.push('yi_white');profile.skins.eq.yi='yi_white';const before=JSON.stringify(profile),screen=heroesScreen(app,{id:'yi'});
    const equipped=all(screen,e=>e.dataset.heroImage==='bust'&&e.dataset.hero==='yi');assert.equal(equipped.length,2);
    for(const cv of equipped){assert.equal(cv.dataset.skin,'yi_white');assert.equal(cv.ctx.calls[0][0],busts.heroBustArt('yi','yi_white').img);}
    all(screen,e=>e.tagName==='button'&&e.textContent==='전신')[0].events.click();assert.equal(JSON.stringify(profile),before);
  });
} finally {
  for(const [key,value]of Object.entries(saved))if(value===undefined)delete globalThis[key];else globalThis[key]=value;
}
await fs.writeFile(new URL('../docs/HERO_BUST_RUNTIME_VALIDATION.json',import.meta.url),JSON.stringify({date:'2026-10-11',tests:results.length,results,scope:'Menu-only lazy base/costume images, cache and failure handling, canvas lifetime, unchanged full/HUD poses, equipped-costume busts/fallback, actual codex and single-hero solo setup DOM/specs'},null,2)+'\n');
console.log(`\n영웅 흉상 검사 ${results.length}개 통과`);
