import fs from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const exec=promisify(execFile),historical=JSON.parse(await fs.readFile('docs/BATTLE_FEEDBACK_REGRESSION_VALIDATION.json','utf8'));
const files=[...historical.results.map(r=>r.file),'test-combo-impacts.mjs'];
const results=new Array(files.length),preserved=new Map();
// Older reports describe earlier releases; a rerun is recorded separately.
for(const file of ['TACTIC_VALIDATION.json','TOWER_DOTS_RUNTIME_VALIDATION.json'])preserved.set(file,await fs.readFile('docs/'+file));
let next=0;
async function worker(){while(next<files.length){const i=next++,file=files[i],started=Date.now();let output='',error='',exitCode=0;try{const r=await exec(process.execPath,['tools/'+file],{maxBuffer:4*1024*1024});output=r.stdout;error=r.stderr;}catch(e){output=e.stdout??'';error=e.stderr??String(e);exitCode=e.code??1;}const count=(output.match(/✔/g)??[]).length;results[i]={file,count,passed:exitCode===0,exitCode,elapsedMs:Date.now()-started,output:output.trim(),error:error.trim()};console.log((exitCode===0?'PASS ':'FAIL ')+file+' '+count);}}
try{await Promise.all([worker(),worker(),worker()]);}finally{for(const [file,data]of preserved)await fs.writeFile('docs/'+file,data);}
const report={date:'2026-10-11',groups:results.length,tests:results.reduce((n,r)=>n+r.count,0),allPassed:results.every(r=>r.passed),results};
await fs.writeFile('docs/COMBO_IMPACT_REGRESSION_VALIDATION.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({groups:report.groups,tests:report.tests,allPassed:report.allPassed}));if(!report.allPassed)process.exitCode=1;
