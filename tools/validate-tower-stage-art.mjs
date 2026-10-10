// Asset QA only: inspect encoded alpha; never alter generated artwork.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { LANDMARK_STAGE_ART } from '../src/3d/tower-art-data.js';
import { frameBounds } from '../src/3d/fixed-art.js';
const require=createRequire(import.meta.url);
let sharp;try{sharp=require('sharp');}catch{sharp=require(process.env.HOGUK_SHARP_PATH??'C:/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');}
const root=path.resolve(import.meta.dirname,'..'),report={date:'2026-10-10',alphaThreshold:11,padding:12,sheets:{}};
for(const [sheet,layout] of Object.entries(LANDMARK_STAGE_ART)){
  const file=path.join(root,layout.path),metadata=await sharp(file).metadata(),{data,info}=await sharp(file).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  assert.equal(info.width,layout.width);assert.equal(info.height,layout.height);assert.equal(metadata.hasAlpha,true);
  for(const x of layout.x.slice(1,-1))for(let y=0;y<info.height;y++)assert.ok(data[(y*info.width+x)*4+3]<11,`${sheet}: x=${x}, y=${y} must be transparent`);
  for(const y of layout.y.slice(1,-1))for(let x=0;x<info.width;x++)assert.ok(data[(y*info.width+x)*4+3]<11,`${sheet}: y=${y}, x=${x} must be transparent`);
  const frames=[];
  for(let row=0;row<4;row++)for(let col=0;col<5;col++){
    const x=layout.x[col],y=layout.y[row],frame=frameBounds(data,info.width,info.height,x,y,layout.x[col+1]-x,layout.y[row+1]-y,11);
    assert.ok(frame.width>120&&frame.height>120,`${sheet}: empty or incomplete stage ${row}:${col}`);
    assert.ok(frame.anchor>=.4&&frame.anchor<=.6,`${sheet}: unstable foundation anchor ${row}:${col}`);
    frames.push({type:layout.types[row],stage:col<3?col+1:4,branch:col<3?null:col===3?'A':'B',...frame});
  }
  report.sheets[sheet]={path:layout.path,bytes:(await fs.stat(file)).size,width:info.width,height:info.height,alpha:true,x:layout.x,y:layout.y,frames};
  console.log(`${sheet}: ${frames.length} frames, ${info.width}×${info.height}, transparent cuts and foot anchors passed`);
}
await fs.writeFile(path.join(root,'docs/TOWER_STAGE_ASSET_VALIDATION.json'),JSON.stringify(report,null,2)+'\n');
