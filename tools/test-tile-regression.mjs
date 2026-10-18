import fs from 'node:fs';
import {spawn} from 'node:child_process';
const baseline=JSON.parse(fs.readFileSync('docs/MOBILE_UX_REGRESSION_VALIDATION.json','utf8'));
// These controls were intentionally replaced, not retained as a hidden free mode.
const replaced=['test-mobile-pad.mjs','test-touch-motion.mjs','test-build-layout.mjs'];
const scripts=[...baseline.results.map(x=>x.file).filter(x=>!replaced.includes(x)),'test-tile-board.mjs'];
const results=[];let next=0;
async function worker(){while(next<scripts.length){const file=scripts[next++],at=Date.now();
  const record=await new Promise(resolve=>{let output='',error='';const child=spawn(process.execPath,['--import','./tools/report-output.mjs','tools/'+file],{cwd:process.cwd(),env:{...process.env,HOGUK_REPORT_DIR:'docs/tile-board/regression'},windowsHide:true});child.stdout.on('data',b=>output+=b);child.stderr.on('data',b=>error+=b);child.on('exit',exitCode=>resolve({file,exitCode,passed:exitCode===0,count:(output.match(/✔/g)||[]).length,elapsedMs:Date.now()-at,output,error}));});
  results.push(record);console.log(`${record.passed?'PASS':'FAIL'} ${file} (${record.count})`);
}}
await Promise.all([worker(),worker(),worker()]);
const report={generatedAt:new Date().toISOString(),groups:results.length,tests:results.reduce((n,r)=>n+r.count,0),allPassed:results.every(r=>r.passed),replacedControls:replaced,scope:'New shared-tile ruleset. Historical movement and arbitrary-ground-building expectations are migrated explicitly, not silently bypassed.',results};
fs.writeFileSync('docs/TILE_BOARD_REGRESSION_VALIDATION.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({groups:report.groups,tests:report.tests,allPassed:report.allPassed,failed:results.filter(r=>!r.passed).map(r=>r.file)}));
process.exitCode=report.allPassed?0:1;
