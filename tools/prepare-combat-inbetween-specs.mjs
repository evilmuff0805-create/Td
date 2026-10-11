// Explicit art selection and mechanical scale/root measurement only.
import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {inspectPoseAtlas} from './sprite-pose-inspector.mjs';
import {COMBAT_POSE_ART} from '../src/3d/combat-pose-data.js';
const root=fileURLToPath(new URL('../',import.meta.url)),folder='assets/3d/fixed/combat-inbetweens/source/';
const selected={},cache=new Map();
const cell=(id,version,index,rows=4,columns=4)=>({source:id+'-inbetweens-v'+version+'.png',index,rows,columns});
const row=(id,version,r,rows=4,columns=4)=>Array.from({length:4},(_,c)=>cell(id,version,r*4+c,rows,columns));
const four=(id,version)=>row(id,version,0,2,2);
const single=(id,version)=>cell(id,version,0,1,1);
for(const [side,actors]of Object.entries(COMBAT_POSE_ART))for(const id of Object.keys(actors))selected[id]={side,parts:Array.from({length:4},(_,r)=>row(id,1,r))};
function set(id,r,cells){selected[id].parts[r]=cells;}
function replace(id,r,c,source){selected[id].parts[r][c]=source;}
for(const id of ['ashigaru','teppo','scout']){set(id,1,row(id,2,0,2));set(id,3,row(id,2,1,2));}
replace('teppo',1,3,single('teppo',3));replace('scout',1,3,single('scout',4));
set('samurai',0,row('samurai',3,0,2));set('samurai',1,row('samurai',2,1));set('samurai',2,row('samurai',2,2));set('samurai',3,row('samurai',3,1,2));
set('ninja',1,row('ninja',2,0,2));replace('ninja',1,3,single('ninja',3));
for(const c of [0,3])replace('drum',1,c,cell('drum',2,c,2));
for(const c of [1,2])replace('drum',2,c,cell('drum',2,4+c,2));
replace('onmyoji',1,1,single('onmyoji',3));replace('onmyoji',1,3,cell('onmyoji',2,3,2));replace('onmyoji',2,3,cell('onmyoji',2,7,2));
for(const id of ['cavalry','militia']){
  for(const r of [0,3])set(id,r,Array.from({length:4},(_,index)=>({source:id+'-row-'+r+'-from-v1.png',rows:1,columns:4,index,normalizationSource:id+'-row-0-from-v1.png',normalizationRows:1,normalizationColumns:4})));
  set(id,2,row(id,3,1,4,2)); // last four of 4x2; first four are neutral size references
}
set('cavalry',1,Array.from({length:4},(_,index)=>({source:'cavalry-row-1-from-v1.png',rows:1,columns:4,index,normalizationSource:'cavalry-row-0-from-v1.png',normalizationRows:1,normalizationColumns:4})));
for(const c of [0,3])replace('cavalry',1,c,cell('cavalry',4,c,2,2));
set('militia',1,four('militia',4));
set('armored',1,four('armored',3));set('armored',3,row('armored',2,1,2));
set('militia',3,row('militia',2,1,2));
set('guard',1,row('guard',2,0,2));for(const c of [0,3])replace('guard',1,c,cell('guard',3,c,2,2));set('guard',3,row('guard',2,1,2));
replace('elite',2,3,{...single('elite',2),matchOriginalFrame:15});
set('monk',0,row('monk',2,0,2));set('monk',1,four('monk',3));
set('courier',1,four('courier',3));for(const c of [1,2])replace('turtle',1,c,cell('turtle',2,c,2,2));
for(const id of ['konishi','wakizaka','ukita','ishida','kuroda','todo','shimazu'])set(id,1,four(id,2));
for(const c of [1,2])replace('kato',1,c,cell('kato',2,c,2,2));
replace('wakizaka',2,2,{...single('wakizaka',3),matchOriginalFrame:14});
set('so',0,row('so',2,0,2));set('so',1,row('so',2,1,2));
for(const id of ['kurushima','hideyoshi'])for(const c of [1,2])replace(id,1,c,cell(id,2,c,2,2));
replace('hideyoshi',0,3,single('hideyoshi',3));
// Final individual corrections retain all other accepted cells.
replace('armored',1,1,single('armored',4));replace('armored',1,3,single('armored',5));
replace('militia',1,0,single('militia',5));replace('militia',1,1,single('militia',6));replace('militia',1,3,single('militia',7));
replace('guard',1,3,single('guard',4));
replace('ukita',1,0,single('ukita',3));replace('ukita',1,3,single('ukita',4));replace('ukita',1,2,single('ukita',5));
replace('wakizaka',1,2,single('wakizaka',4));replace('wakizaka',2,2,{...single('wakizaka',5),matchOriginalFrame:14});
for(const [c,v]of [[0,4],[1,5],[2,6]])replace('monk',1,c,single('monk',v));
for(const [c,v]of [[0,4],[3,5]])replace('courier',1,c,single('courier',v));
for(const [c,v]of [[0,5],[3,6]])replace('cavalry',1,c,single('cavalry',v));
set('hideyoshi',0,Array.from({length:4},(_,index)=>({source:'hideyoshi-row-0-from-v1.png',rows:1,columns:4,index})));replace('hideyoshi',0,3,single('hideyoshi',3));
set('hideyoshi',1,four('hideyoshi',2));set('hideyoshi',2,four('hideyoshi',4));set('hideyoshi',3,four('hideyoshi',5));
replace('kuroda',1,1,single('kuroda',3));replace('kuroda',1,2,single('kuroda',4));
for(let c=0;c<4;c++)replace('shimazu',1,c,single('shimazu',c+3));
replace('so',1,0,single('so',3));replace('so',1,3,single('so',4));
replace('hideyoshi',0,3,single('hideyoshi',6));
replace('hideyoshi',2,1,{...single('hideyoshi',7),matchOriginalFrame:13});replace('hideyoshi',2,2,{...single('hideyoshi',8),matchOriginalFrame:14});
replace('armored',1,3,single('armored',6));replace('militia',1,3,single('militia',8));replace('guard',1,3,single('guard',5));
replace('ukita',1,0,single('ukita',6));replace('ukita',1,3,single('ukita',7));replace('ukita',1,2,single('ukita',9));
replace('wakizaka',1,2,single('wakizaka',6));replace('monk',1,1,single('monk',7));replace('courier',1,0,single('courier',6));
replace('hideyoshi',0,3,single('hideyoshi',10));
replace('ukita',1,1,single('ukita',10));
replace('ukita',2,1,{...single('ukita',11),matchOriginalFrame:13});replace('ukita',2,2,{...single('ukita',12),matchOriginalFrame:14});
if(process.argv.includes('--sources-only')){console.log(JSON.stringify(selected));process.exit(0);}
async function inspect(source,rows,columns){if(!cache.has(source))cache.set(source,inspectPoseAtlas(root,{id:source,source:folder+source,delivery:folder+source,rows,columns}));return cache.get(source);}
const specs={};
for(const [id,spec]of Object.entries(selected)){
  const approved=COMBAT_POSE_ART[spec.side][id],referenceHeight=approved.frames[0].referenceHeight,parts=[];
  for(const cells of spec.parts){
    const resolved=[];
    for(const c of cells){
      const a=await inspect(c.source,c.rows,c.columns),f=a.layout.frames[c.index];
      const n=c.normalizationSource?await inspect(c.normalizationSource,c.normalizationRows,c.normalizationColumns):a;
      const heights=n.layout.frames.slice(0,4).map(x=>x.height).sort((a,b)=>a-b),mid=(heights.length-1)/2,sourceHeight=(heights[Math.floor(mid)]+heights[Math.ceil(mid)])/2;
      const scale=c.matchOriginalFrame!==undefined?approved.frames[c.matchOriginalFrame].height/f.height:referenceHeight/sourceHeight;
      resolved.push({source:c.source,rows:c.rows,columns:c.columns,index:c.index,scale:+scale.toFixed(6),anchor:f.anchor});
    }
    const base=resolved[0],overrides={};for(let c=1;c<4;c++){const {anchor,...value}=resolved[c];overrides[c]=value;}
    const {anchor,index,...common}=base;parts.push({...common,indices:resolved.map(x=>x.index),anchors:resolved.map(x=>x.anchor),overrides});
  }
  specs[id]={side:spec.side,parts};
}
await fs.writeFile(new URL('./combat-inbetween-specs.json',import.meta.url),JSON.stringify(specs,null,2)+'\n');
console.log('Selected 448 supplementary cells from '+cache.size+' strict-validated source sheets; generated explicit uniform scales and root anchors.');
