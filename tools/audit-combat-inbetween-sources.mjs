// Strict, read-only audit of every selected source before mechanical packing.
import fs from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {inspectPoseAtlas} from './sprite-pose-inspector.mjs';
const selected=JSON.parse(execFileSync(process.execPath,['tools/prepare-combat-inbetween-specs.mjs','--sources-only'],{encoding:'utf8'})),sources=new Map(),failures=[];
for(const spec of Object.values(selected))for(const row of spec.parts)for(const c of row){sources.set(c.source,{rows:c.rows,columns:c.columns});if(c.normalizationSource)sources.set(c.normalizationSource,{rows:c.normalizationRows,columns:c.normalizationColumns});}
let checked=0;
for(const [file,layout]of sources){const source='assets/3d/fixed/combat-inbetweens/source/'+file;try{await fs.access(source);await inspectPoseAtlas(process.cwd(),{id:file,source,delivery:source,...layout});checked++;}catch(e){failures.push({source,error:e.message});}}
console.log(JSON.stringify({checked,selectedSources:sources.size,failures},null,2));if(failures.length)process.exitCode=1;
