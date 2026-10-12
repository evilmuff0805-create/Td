import fs from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const flags=Object.fromEntries(process.argv.slice(2).map(a=>a.replace(/^--/,'').split('=')));
const output=flags.output??'ROADMAP_REGRESSION_VALIDATION.json';
if(!/^[A-Z_]+\.json$/.test(output))throw new Error('output must be a report basename');
const exec=promisify(execFile),historical=JSON.parse(await fs.readFile('docs/BATTLE_FEEDBACK_REGRESSION_VALIDATION.json','utf8'));
const files=[...historical.results.map(r=>r.file),'test-combo-impacts.mjs','test-hero-loading.mjs','test-build-layout.mjs','test-device-readiness.mjs','test-network-recovery.mjs','test-web-release.mjs','test-opening-balance.mjs'];
const preserved=await fs.readFile('docs/TACTIC_VALIDATION.json'),results=new Array(files.length);let next=0;
async function worker(){while(next<files.length){const i=next++,file=files[i],started=Date.now();let output='',error='',exitCode=0;try{const r=await exec(process.execPath,['tools/'+file],{maxBuffer:4*1024*1024});output=r.stdout;error=r.stderr;}catch(e){output=e.stdout??'';error=e.stderr??String(e);exitCode=e.code??1;}const count=(output.match(/✔/g)??[]).length;results[i]={file,count,passed:exitCode===0,exitCode,elapsedMs:Date.now()-started,output:output.trim(),error:error.trim()};console.log((exitCode===0?'PASS ':'FAIL ')+file+' '+count);}}
try{await Promise.all([worker(),worker(),worker()]);}finally{await fs.writeFile('docs/TACTIC_VALIDATION.json',preserved);}
const report={generatedAt:new Date().toISOString(),groups:results.length,tests:results.reduce((n,r)=>n+r.count,0),allPassed:results.every(r=>r.passed),results};
await fs.writeFile('docs/'+output,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({groups:report.groups,tests:report.tests,allPassed:report.allPassed}));if(!report.allPassed)process.exitCode=1;
