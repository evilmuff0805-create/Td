import assert from 'node:assert/strict';
import fs from 'node:fs';
import { GraphicsState } from '../src/3d/graphics-state.js';
import { Renderer3D } from '../src/3d/renderer.js';
import { WinterWorld } from '../src/3d/world.js';
class Canvas extends EventTarget{dataset={};}
let count=0;async function test(name,fn){await fn();count++;console.log('✔ '+name);}
const flush=()=>new Promise(setImmediate);
await test('loss prevents default and waits for actual environment reconstruction before resuming',async()=>{
  const canvas=new Canvas();let finish,restored=0;const state=new GraphicsState(canvas,()=>new Promise(resolve=>{finish=()=>{restored++;resolve();};}));
  const lost=new Event('webglcontextlost',{cancelable:true});canvas.dispatchEvent(lost);assert.equal(lost.defaultPrevented,true);assert.equal(state.waiting,true);
  canvas.dispatchEvent(new Event('webglcontextrestored'));assert.equal(canvas.dataset.graphicsStatus,'restoring');assert.equal(state.waiting,true);finish();await flush();assert.equal(restored,1);assert.equal(state.waiting,false);assert.equal(canvas.dataset.graphicsRecoveries,'1');state.destroy();
});
await test('failed recovery holds the waiting gate and a subsequent real restoration can retry',async()=>{
  const warn=console.warn;console.warn=()=>{};
  try{const canvas=new Canvas();let attempts=0;const state=new GraphicsState(canvas,()=>{if(++attempts===1)throw new Error('test');});canvas.dispatchEvent(new Event('webglcontextlost'));canvas.dispatchEvent(new Event('webglcontextrestored'));await flush();assert.equal(state.waiting,true);assert.equal(state.status,'failed');canvas.dispatchEvent(new Event('webglcontextrestored'));await flush();assert.equal(state.waiting,false);assert.equal(state.recoveries,1);state.destroy();}finally{console.warn=warn;}
});
await test('a second loss invalidates an unfinished restoration; destroyed battles cannot resume',async()=>{
  const canvas=new Canvas();let finish;const state=new GraphicsState(canvas,()=>new Promise(resolve=>{finish=resolve;}));canvas.dispatchEvent(new Event('webglcontextlost'));canvas.dispatchEvent(new Event('webglcontextrestored'));canvas.dispatchEvent(new Event('webglcontextlost'));finish();await flush();assert.equal(state.waiting,true);assert.equal(state.recoveries,0);state.destroy();canvas.dispatchEvent(new Event('webglcontextrestored'));assert.equal(state.status,'lost');
});
await test('renderer loading includes graphics recovery and a lost world performs no GPU work',()=>{
  const renderer=Object.assign(Object.create(Renderer3D.prototype),{world:{graphics:{waiting:true}}});assert.equal(renderer.loading,true);renderer.world.graphics.waiting=false;assert.equal(renderer.loading,false);
  WinterWorld.prototype.draw.call({graphics:{waiting:true}},0,.016);
});
fs.writeFileSync(new URL('../docs/GRAPHICS_RECOVERY_VALIDATION.json',import.meta.url),JSON.stringify({tests:count,passed:true,scope:'Recovery lifecycle and render gate. Actual driver restoration checked separately in browser.'},null,2)+'\n');
