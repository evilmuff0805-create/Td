import assert from 'node:assert/strict';
import fs from 'node:fs';
import { commandRingLayout } from '../src/ui/ring-layout.js';
import { Ring,spread } from '../src/ui/ring.js';

const results=[];
const test=(name,fn)=>{fn();results.push({name,passed:true});console.log('✔ '+name);};
const overlap=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
function validate(at,width,height){
  const cells=at.points.map(p=>({x:p.x-at.cellW/2,y:p.y-at.cellH/2,w:at.cellW,h:at.cellH}));
  for(let i=0;i<cells.length;i++)for(const other of cells.slice(i+1))assert.ok(!overlap(cells[i],other),'Includes enlarged icon and price chip');
  const b=at.bounds;assert.ok(at.cx+b.left>=5.99&&at.cx+b.right<=width-5.99);assert.ok(at.cy+b.top>=5.99&&at.cy+b.bottom<=height-5.99);
  return cells;
}
test('1–10 building choices include hover expansion, shortcut and price without overlap',()=>{
  for(let n=1;n<=10;n++)for(const scale of [.5,1,2])for(const x of [0,640,1280])for(const y of [0,300,600]){
    const at=commandRingLayout({x,y,width:1280,height:600,scale,angles:spread(n)});validate(at,1280,600);assert.equal(at.grid,false);assert.ok(at.button>=46);
  }
});
test('414px portrait keeps ten circular choices visible at corners and center',()=>{
  for(const above of [false,true])for(const [x,y]of [[0,0],[207,300],[414,650]]){
    const at=commandRingLayout({x,y,width:414,height:650,angles:spread(10),above});validate(at,414,650);assert.equal(at.grid,false);
  }
});
test('narrow landscape changes to a complete nonoverlapping row layout',()=>{
  for(const [width,height]of [[896,206],[640,180],[360,240]])for(const above of [false,true]){
    const at=commandRingLayout({x:width/2,y:height/2,width,height,angles:spread(10),above});validate(at,width,height);assert.equal(at.grid,true);assert.equal(at.points.length,10);assert.ok(at.button>=46);
  }
});
test('specialization, target and sell buttons respect their actual asymmetric angles',()=>{
  for(const angles of [[-90,0,90],[-128,-52,0,90],[-128,-52,90]]){
    const at=commandRingLayout({x:0,y:0,width:414,height:550,angles});validate(at,414,550);assert.equal(at.grid,false);
  }
});
test('duplicate future angles and very small screens use scrolling instead of overlapping',()=>{
  for(const angles of [[0,0,0],spread(10)]){
    const at=commandRingLayout({x:10,y:10,width:280,height:200,angles});validate(at,280,200);assert.equal(at.grid,true);
  }
  const tiny=commandRingLayout({x:0,y:0,width:280,height:200,angles:spread(10)});assert.equal(tiny.scroll,true);
});
class Element{
  constructor(tag){this.tagName=tag;this.children=[];this.style={setProperty(k,v){this[k]=v;}};this.events=new Map();this._scrollTop=0;}
  append(...nodes){for(let node of nodes){if(typeof node==='string')node=Object.assign(new Element('#text'),{textContent:node});node.parent=this;this.children.push(node);}}
  get firstChild(){return this.children[0];}
  removeChild(node){this.children.splice(this.children.indexOf(node),1);node.parent=null;}
  get connected(){return this.tagName==='body'||!!this.parent?.connected;}
  set scrollTop(n){if(this.connected)this._scrollTop=n;}
  get scrollTop(){return this._scrollTop;}
  setAttribute(k,v){this[k]=v;}
  addEventListener(k,fn){this.events.set(k,fn);}
  focus(){document.activeElement=this;this.events.get('focus')?.();}
  get offsetWidth(){return this.className==='rtip'?260:46;}
  get offsetHeight(){return this.className==='rtip'?70:46;}
}
const previous={document:globalThis.document,Node:globalThis.Node};globalThis.Node=Element;globalThis.document={body:new Element('body'),createElement:tag=>new Element(tag),createTextNode:text=>Object.assign(new Element('#text'),{textContent:text}),activeElement:null};
const items=active=>spread(10).map((angle,i)=>({key:i,angle,glyph:String(i),label:'건물 '+i,cost:70,active:i===active}));
try{
  test('real Ring renders all ten commands using the computed grid positions and occupied area',()=>{
    const ring=new Ring({});document.body.append(ring.el);ring.layout(10,10,280,200,1,10);ring.render(items(-1),'건설');assert.equal(ring.buttons.length,10);assert.equal(ring.placement.grid,true);for(let i=0;i<10;i++){assert.equal(ring.buttons[i].style.left,ring.placement.points[i].x+'px');assert.equal(ring.buttons[i].style.top,ring.placement.points[i].y+'px');}assert.equal(ring.rects()[0].h,ring.placement.panelHeight);
  });
  test('gold changes preserve manual grid scrolling and the focused command',()=>{
    const ring=new Ring({});document.body.append(ring.el);ring.layout(10,10,280,200,1,10);ring.render(items(-1),'건설');ring.ringEl.scrollTop=100;ring.buttons[7].focus();ring.render(items(-1).map(it=>({...it,cost:80})),'건설');assert.equal(ring.ringEl.scrollTop,100);assert.equal(document.activeElement,ring.buttons[7]);assert.equal(ring.hoverKey,7);
  });
  test('P2 active choice scrolls into view after attachment, including the flat renderer',()=>{
    const ring=new Ring({kbd:true});document.body.append(ring.el);ring.layout(10,10,280,200,1,10);ring.render(items(9),'건설');assert.ok(ring.ringEl.scrollTop>0);assert.equal(ring.hoverKey,9);
  });
}finally{for(const [key,value]of Object.entries(previous)){if(value===undefined)delete globalThis[key];else globalThis[key]=value;}}
fs.writeFileSync('docs/BUILD_LAYOUT_RUNTIME_VALIDATION.json',JSON.stringify({date:'2026-10-11',allPassed:true,tests:results.length,results,maximumChoices:10,minimumButtonPixels:46,includesEnlargedIconAndPrice:true},null,2)+'\n');
