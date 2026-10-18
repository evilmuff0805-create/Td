import assert from 'node:assert/strict';
import fs from 'node:fs';
import {lockBattlePageZoom} from '../src/ui/battle-viewport.js';
import {COIN_PACKS} from '../src/data/shop.js';
import {resetProfile,loadProfile,exchangeCoins,saveProfile} from '../src/meta/profile.js';
import {shopScreen} from '../src/ui/screens-shop.js';
import {audio} from '../src/audio/audio.js';

const results=[],test=async(name,fn)=>{await fn();results.push({name,passed:true});console.log('✔ '+name);};
const keys=['document','window','Node','localStorage','innerWidth','innerHeight','requestAnimationFrame','cancelAnimationFrame','setTimeout'];
const saved=Object.fromEntries(keys.map(k=>[k,globalThis[k]])),oldAudio=audio.play;
let doc,root;const writes=[],storage=new Map();
const context=new Proxy({createLinearGradient:()=>({addColorStop(){}}),createRadialGradient:()=>({addColorStop(){}})},{get:(target,key)=>target[key]??(()=>{})});
class Element {
  constructor(tag){this.tagName=tag;this.children=[];this.events=new Map();this.attrs={};this.style={};this.className='';}
  append(...nodes){for(const node of nodes){node.remove?.();node.parent=this;this.children.push(node);}}
  prepend(node){node.remove?.();node.parent=this;this.children.unshift(node);}
  remove(){if(this.parent){this.parent.children=this.parent.children.filter(n=>n!==this);this.parent=null;}}
  removeChild(node){node.remove();} get firstChild(){return this.children[0];}
  get isConnected(){for(let n=this;n;n=n.parent)if(n===doc.documentElement)return true;return false;}
  get textContent(){return this.text??this.children.map(n=>n.textContent).join('');}
  setAttribute(k,v){this.attrs[k]=String(v);if(k==='disabled')this.disabled=true;}
  getAttribute(k){return this.attrs[k]??null;} removeAttribute(k){delete this.attrs[k];}
  addEventListener(t,fn,options){const a=this.events.get(t)??[];a.push({fn,options});this.events.set(t,a);}
  removeEventListener(t,fn){const a=(this.events.get(t)??[]).filter(e=>e.fn!==fn);a.length?this.events.set(t,a):this.events.delete(t);}
  querySelector(s){return find(this,n=>s==='.btn-seal'?n.className.includes('btn-seal'):n.tagName===s);}
  getContext(){return context;} focus(){}
}
function find(el,predicate){for(const node of el.children){if(predicate(node))return node;const next=find(node,predicate);if(next)return next;}return null;}
function all(el,predicate){return el.children.flatMap(node=>[...(predicate(node)?[node]:[]),...all(node,predicate)]);}
function fire(el,type,event={}){return (el.events.get(type)??[]).map(({fn})=>fn({type,target:el,currentTarget:el,...event}));}
function click(text){const b=find(doc.body,n=>n.tagName==='button'&&n.textContent===text);assert.ok(b,text);return fire(b,'click')[0];}
function fixture(){
  root?.remove();root=new Element('main');doc.body.append(root);
  const p=resetProfile(),app={profile:p,go(name,params={}){while(root.firstChild)root.removeChild(root.firstChild);if(name==='shop')root.append(shopScreen(app,params));}};
  app.go('shop',{tab:'coins'});writes.length=0;
  return {p,app,button:(id='coins_1000')=>find(root,n=>n.getAttribute('aria-label')===`${COIN_PACKS.find(x=>x.id===id).coins.toLocaleString('ko-KR')}엽전 교환 · ${COIN_PACKS.find(x=>x.id===id).jade}옥`)};
}
doc=new Element('document');doc.documentElement=new Element('html');doc.body=new Element('body');doc.documentElement.append(doc.body);
const meta=new Element('meta');meta.setAttribute('content','width=device-width, initial-scale=1, viewport-fit=cover');doc.documentElement.append(meta);
doc.querySelector=s=>s==='meta[name="viewport"]'?meta:doc.body.querySelector(s);
doc.createElement=tag=>new Element(tag);doc.createTextNode=text=>Object.assign(new Element('#text'),{text});
globalThis.document=doc;globalThis.Node=Element;globalThis.window=new Element('window');window.matchMedia=()=>({matches:true});
globalThis.innerWidth=414;globalThis.innerHeight=896;globalThis.requestAnimationFrame=()=>1;globalThis.cancelAnimationFrame=()=>{};globalThis.setTimeout=()=>1;
globalThis.localStorage={getItem:k=>storage.get(k)??null,setItem(k,v){storage.set(k,v);writes.push(JSON.parse(v));}};audio.play=()=>{};
try {
  await test('battle viewport locks native zoom and restores the exact menu viewport once',()=>{
    const before=meta.getAttribute('content'),release=lockBattlePageZoom(doc);
    assert.equal(doc.documentElement.getAttribute('data-battle-zoom'),'locked');
    assert.ok(meta.getAttribute('content').includes('maximum-scale=1'));assert.ok(meta.getAttribute('content').includes('user-scalable=no'));
    for(const type of ['gesturestart','gesturechange','gestureend']){let cancelled=0;fire(doc,type,{cancelable:true,preventDefault(){cancelled++;}});assert.equal(cancelled,1);assert.equal(doc.events.get(type)[0].options.passive,false);}
    assert.equal(doc.events.has('touchstart'),false);assert.equal(doc.events.has('touchmove'),false);assert.equal(doc.events.has('touchend'),false);
    release();release();assert.equal(meta.getAttribute('content'),before);assert.equal(doc.documentElement.getAttribute('data-battle-zoom'),null);
    for(const type of ['gesturestart','gesturechange','gestureend'])assert.equal(doc.events.has(type),false);
  });
  await test('camera pointer events and noncancelable native gestures are untouched',()=>{
    const release=lockBattlePageZoom(doc);let pointer=0;const handler=()=>pointer++;doc.addEventListener('pointermove',handler);
    fire(doc,'pointermove');fire(doc,'gesturechange',{cancelable:false,preventDefault(){throw Error('noncancelable');}});assert.equal(pointer,1);
    release();fire(doc,'pointermove');assert.equal(pointer,2);doc.removeEventListener('pointermove',handler);
  });
  await test('overlapping battles in one document keep the lock until the last owner leaves in either order',()=>{
    for(const order of [[0,1],[1,0]]){
      const before=meta.getAttribute('content'),owners=[lockBattlePageZoom(doc),lockBattlePageZoom(doc)];
      owners[order[0]]();owners[order[0]]();assert.equal(doc.documentElement.getAttribute('data-battle-zoom'),'locked');assert.ok(meta.getAttribute('content').includes('maximum-scale=1'));assert.equal(doc.events.get('gesturestart').length,1);
      owners[order[1]]();assert.equal(meta.getAttribute('content'),before);assert.equal(doc.documentElement.getAttribute('data-battle-zoom'),null);assert.equal(doc.events.has('gesturestart'),false);
    }
  });
  await test('viewport cleanup does not overwrite a subsequent owner change',()=>{
    const before=meta.getAttribute('content'),release=lockBattlePageZoom(doc);meta.setAttribute('content','width=device-width, initial-scale=2');release();assert.equal(meta.getAttribute('content'),'width=device-width, initial-scale=2');meta.setAttribute('content',before);
  });
  await test('each fixed coin pack atomically saves both exact balances once and survives reload',()=>{
    for(const pack of COIN_PACKS){const p=resetProfile();p.jade=pack.jade;const before=structuredClone(p);writes.length=0;
      assert.equal(exchangeCoins(p,pack.id),true);assert.equal(p.jade,0);assert.equal(p.coins,before.coins+pack.coins);assert.equal(writes.length,1);assert.equal(writes[0].jade,0);assert.equal(writes[0].coins,p.coins);
      const restored=loadProfile();assert.equal(restored.coins,p.coins);assert.equal(restored.jade,0);
      p.jade=before.jade;p.coins=before.coins;assert.deepEqual(p,before);
    }
  });
  await test('one jade short, unknown packs and arbitrary quantities change and save nothing',()=>{
    for(const id of ['coins_1000','unknown','__proto__',null,10,{jade:1,coins:999999}]){const p=resetProfile();p.jade=9;const before=structuredClone(p);writes.length=0;assert.equal(exchangeCoins(p,id),false);assert.deepEqual(p,before);assert.equal(writes.length,0);}
  });
  await test('invalid balances and coin overflow cannot spend jade',()=>{
    for(const balances of [{jade:NaN},{jade:Infinity},{jade:10.5},{coins:-1},{coins:'300'},{coins:Number.MAX_SAFE_INTEGER}]){const p=resetProfile();Object.assign(p,balances);const before=structuredClone(p);writes.length=0;assert.equal(exchangeCoins(p,'coins_1000'),false);assert.deepEqual(p,before);assert.equal(writes.length,0);}
  });
  await test('successive deliberate exchanges require enough jade for each complete purchase',()=>{
    const p=resetProfile();p.jade=20;writes.length=0;assert.equal(exchangeCoins(p,'coins_1000'),true);assert.equal(exchangeCoins(p,'coins_1000'),true);assert.equal(exchangeCoins(p,'coins_1000'),false);assert.equal(p.coins,2300);assert.equal(p.jade,0);assert.equal(writes.length,2);assert.deepEqual(p.stats,{games:0,wins:0,kills:0,combos:0,bossKills:0});
  });
  await test('shop shows exact prices, affordable choices and no reward is granted on cancel',async()=>{
    const f=fixture();assert.equal(f.button().disabled,undefined);assert.equal(f.button('coins_5000').disabled,true);
    const pending=fire(f.button(),'click')[0];assert.equal(writes.length,0);assert.ok(find(doc.body,n=>n.textContent==='10옥을 사용해 1,000엽전을 받을까요?'));await click('취소');await pending;assert.equal(f.p.coins,300);assert.equal(f.p.jade,20);assert.equal(writes.length,0);
  });
  await test('one confirmed shop purchase refreshes wallets and rejects duplicate or stale clicks',async()=>{
    const f=fixture(),old=f.button(),pending=fire(old,'click')[0];await fire(old,'click')[0];assert.equal(all(doc.body,n=>n.getAttribute('role')==='dialog').length,1);
    await click('교환하기');await pending;assert.equal(f.p.coins,1300);assert.equal(f.p.jade,10);assert.equal(writes.length,1);assert.ok(root.textContent.includes('1,300'));
    await fire(old,'click')[0];assert.equal(f.p.coins,1300);assert.equal(writes.length,1);
  });
  await test('leaving the shop while confirmation is pending cannot spend later',async()=>{
    const f=fixture(),pending=fire(f.button(),'click')[0];f.app.go('hub');await click('교환하기');await pending;assert.equal(f.p.coins,300);assert.equal(f.p.jade,20);assert.equal(writes.length,0);
  });
  await test('confirmation rechecks current funds and a separate new purchase remains possible',async()=>{
    const f=fixture(),pending=fire(f.button(),'click')[0];f.p.jade=0;await click('교환하기');await pending;assert.equal(f.p.coins,300);assert.equal(writes.length,0);
    f.p.jade=10;saveProfile();f.app.go('shop',{tab:'coins'});writes.length=0;const next=fire(f.button(),'click')[0];await click('교환하기');await next;assert.equal(f.p.coins,1300);assert.equal(f.p.jade,0);assert.equal(writes.length,1);assert.equal(f.button().disabled,true);
  });
} finally {
  audio.play=oldAudio;for(const [k,v]of Object.entries(saved))v===undefined?delete globalThis[k]:globalThis[k]=v;
}
fs.writeFileSync('docs/MOBILE_UX_RUNTIME_VALIDATION.json',JSON.stringify({generatedAt:new Date().toISOString(),tests:results.length,allPassed:true,scope:'Actual battle viewport guard, fixed coin exchange and complete shop confirm handlers with synthetic DOM. Native phone pinch remains a physical-device check.',results},null,2)+'\n');
