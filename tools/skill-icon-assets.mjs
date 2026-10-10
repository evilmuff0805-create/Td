#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {sharp} from './sprite-pose-inspector.mjs';

const results=[];
for(const id of ['hero-abilities-atlas-v1','skills-atlas-v1']){
  const source=new URL('../assets/3d/art/'+id+'.png',import.meta.url),delivery=new URL('../assets/3d/art/'+id+'.webp',import.meta.url);
  if(process.argv.includes('--prepare'))await sharp(await fs.readFile(source)).webp({quality:92,alphaQuality:100,effort:6}).toFile(fileURLToPath(delivery));
  const original=await sharp(await fs.readFile(source)).ensureAlpha().raw().toBuffer({resolveWithObject:true}),compressed=await sharp(await fs.readFile(delivery)).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  assert.equal(original.info.width,compressed.info.width);assert.equal(original.info.height,compressed.info.height);
  let alphaDifferences=0;for(let p=3;p<original.data.length;p+=4)if(original.data[p]!==compressed.data[p])alphaDifferences++;
  assert.equal(alphaDifferences,0);const originalBytes=(await fs.stat(source)).size,bytes=(await fs.stat(delivery)).size;assert.ok(bytes<originalBytes/4);
  results.push({id,width:original.info.width,height:original.info.height,originalBytes,bytes,alphaDifferences});
}
const report={date:'2026-10-11',processing:'WebP quality 92, alphaQuality 100; original designs and PNGs preserved',sheets:results,originalBytes:results.reduce((n,s)=>n+s.originalBytes,0),bytes:results.reduce((n,s)=>n+s.bytes,0)};
if(process.argv.includes('--record'))await fs.writeFile(new URL('../docs/SKILL_ICON_ASSET_VALIDATION.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
