import assert from 'node:assert/strict';
import fs from 'node:fs';
import {modal} from '../src/ui/dom.js';
import {GameUI} from '../src/ui/hud.js';
import {audio} from '../src/audio/audio.js';
import {onlineFixture} from './session-fixtures.mjs';
const saved={document:globalThis.document,Node:globalThis.Node,setTimeout,clearTimeout,play:audio.play};
const results=[],test=async(name,fn)=>{await fn();results.push({name,passed:true});console.log('✔ '+name);};
class Element{
  constructor(tag){this.tagName=tag;this.children=[];this.events=new Map();this.style={};this.className='';}
  append(...items){for(const child of items){child.parent=this;this.children.push(child);}}
  setAttribute(){} addEventListener(t,fn){this.events.set(t,fn);} removeEventListener(t,fn){if(this.events.get(t)===fn)this.events.delete(t);}
  remove(){if(this.parent)this.parent.children=this.parent.children.filter(e=>e!==this);}
  focus(){} get textContent(){return this.text??this.children.map(e=>e.textContent).join('');}
  querySelector(selector){return find(this,e=>selector==='.btn-seal'?e.className.includes('btn-seal'):e.tagName===selector);}
}
function find(root,predicate){for(const e of root.children){if(predicate(e))return e;const child=find(e,predicate);if(child)return child;}}
const document=new Element('document');document.body=new Element('body');document.createElement=tag=>new Element(tag);document.createTextNode=text=>Object.assign(new Element('#text'),{text});
globalThis.document=document;globalThis.Node=Element;audio.play=()=>{};let seq=0;const timers=new Map();globalThis.setTimeout=fn=>{timers.set(++seq,fn);return seq;};globalThis.clearTimeout=id=>timers.delete(id);
const click=text=>{const button=find(document.body,e=>e.tagName==='button'&&e.textContent===text);assert.ok(button,text);button.events.get('click')();};
try{
await test('aborting a modal removes its overlay and keyboard listener and ignores a late button',async()=>{const control=new AbortController(),promise=modal('검수','내용',undefined,{signal:control.signal}),button=find(document.body,e=>e.tagName==='button');assert.equal(document.body.children.length,1);control.abort();assert.equal(await promise,null);assert.equal(document.body.children.length,0);assert.equal(document.events.has('keydown'),false);button.events.get('click')();assert.equal(await promise,null);});
await test('confirmed battle end closes a pending quit confirmation and grants the result once',async()=>{
  const p=onlineFixture();let quits=0,rewards=0;const ui=Object.assign(Object.create(GameUI.prototype),{s:p.guest,me:1,controlsHelp:()=>new Element('div'),onQuit:()=>quits++,onEnd:()=>rewards++});const menu=ui.openMenu();click('전장 이탈');await Promise.resolve();assert.ok(find(document.body,e=>e.textContent==='지금 나가면 이번 전투의 보상을 받지 못합니다.'));p.b.emit('end',{result:{win:true},stats:[{},{}]});ui.finish();ui.finish();await menu;assert.equal(document.body.children.length,0);assert.equal(document.events.has('keydown'),false);assert.equal(quits,0);assert.equal(timers.size,1);timers.get(ui.finishTimer)();assert.equal(rewards,1);p.destroy();timers.clear();
});
await test('permanent departure closes an open guest menu and handles interruption once',async()=>{
  const p=onlineFixture();let quits=0,aborts=0;const ui=Object.assign(Object.create(GameUI.prototype),{s:p.guest,controlsHelp:()=>new Element('div'),onQuit:()=>quits++,onInterrupted:()=>aborts++});const menu=ui.openMenu();p.b.emit('peer-left');ui.frame(1);ui.frame(2);await menu;assert.equal(document.body.children.length,0);assert.equal(quits,0);assert.equal(aborts,1);p.destroy();
});
}finally{for(const k of ['document','Node'])saved[k]===undefined?delete globalThis[k]:globalThis[k]=saved[k];globalThis.setTimeout=saved.setTimeout;globalThis.clearTimeout=saved.clearTimeout;audio.play=saved.play;}
fs.writeFileSync('docs/BATTLE_MENU_LIFETIME_VALIDATION.json',JSON.stringify({generatedAt:new Date().toISOString(),tests:results.length,allPassed:true,scope:'Actual modal and asynchronous GameUI menu/finish code with real guest Session; synthetic DOM and controlled timers.',results},null,2)+'\n');
