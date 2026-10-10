#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { HERO_POSE_ART } from '../src/3d/hero-pose-data.js';
import { COMBAT_POSE_ART } from '../src/3d/combat-pose-data.js';
import { SKIN_POSE_ART } from '../src/3d/skin-pose-data.js';
import { PAINTED_SURFACES } from '../src/3d/painted-surfaces.js';

const html = fs.readFileSync(new URL('../dist/hoguk.html', import.meta.url), 'utf8');
const sheets = [...Object.values(HERO_POSE_ART), ...Object.values(COMBAT_POSE_ART).flatMap(Object.values), ...Object.values(SKIN_POSE_ART)];
const count = needle => { let n=0,at=0; while((at=html.indexOf(needle,at))!==-1){n++;at+=needle.length;} return n; };
assert.equal(new Set(sheets.map(s=>s.path)).size,sheets.length);
for(const sheet of sheets){
  const encoded=fs.readFileSync(new URL('../'+sheet.path,import.meta.url)).toString('base64');
  assert.equal(count('data:image/webp;base64,'+encoded),1,sheet.path+' must be embedded exactly once');
  assert.ok(!html.includes(sheet.path),sheet.path+' must not remain as an external request');
}
const rejected = ['assets/3d/fixed/units/kurushima-directions-v1.webp','assets/3d/fixed/units/shimazu-directions-v1.webp',...['yi_white','yi_gold','sejong_blue','sejong_gold'].map(id=>'assets/3d/fixed/skins/'+id+'-directions-v1.webp')];
for(const rel of rejected){
  const encoded=fs.readFileSync(new URL('../'+rel,import.meta.url)).toString('base64');
  assert.equal(count('data:image/webp;base64,'+encoded),0,rel+' rejected art must stay out of the build');
}
const terrain=['ground','snow-ground','road'].map(kind=>PAINTED_SURFACES[kind]);
for(const rel of terrain){
  const encoded=fs.readFileSync(new URL('../'+rel,import.meta.url)).toString('base64');
  assert.equal(count('data:image/webp;base64,'+encoded),1,rel+' terrain must be embedded exactly once');
  assert.ok(!html.includes(rel),rel+' terrain must not remain as an external request');
}
console.log(JSON.stringify({standaloneBytes:Buffer.byteLength(html),embeddedDirectionalSheets:sheets.length,embeddedTerrainSurfaces:terrain.length,eachEmbeddedExactlyOnce:true,rejectedVersionsEmbedded:0},null,2));
