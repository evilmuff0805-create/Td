import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { createGame, step, queueCommand } from '../src/sim/sim.js';
import { createBot, botThink, botSkills } from '../src/sim/ai.js';
import { SnapshotEncoder } from '../src/sim/snapshot.js';
import { TOWERS } from '../src/data/towers.js';

// Recorded before adding visual action cues. Ignore only the optional cue fields,
// so motion work must preserve every old snapshot field and combat event.
const fixture=new URL('./fixtures/motion-determinism.json',import.meta.url);
function run(mode,seed){
  const players=(mode==='solo'
    ?[{heroes:['yi','sejong'],skills:['singijeon','bongsu']}]
    :[{heroes:['eulji'],skills:['bigyeok','uibyeong']},{heroes:['gang'],skills:['hanpa','cheonja']}]
  ).map(p=>({...p,towers:Object.keys(TOWERS)}));
  const s=createGame({stageId:'s2',difficulty:'normal',mode,seed,players});
  const bots=players.map((_,p)=>createBot(s,p,{})),send=c=>queueCommand(s,c),enc=new SnapshotEncoder(),hash=createHash('sha256');
  while(!s.result&&s.tick<60*60*20){
    for(const bot of bots){botThink(s,bot,send);botSkills(s,bot,send);}
    step(s);
    hash.update(JSON.stringify(s.events));
    if(s.tick%60===0||s.result){
      const snap=enc.encode(s,[]);
      snap.h=snap.h.map(a=>a.slice(0,19));snap.e=snap.e.map(a=>a.slice(0,10));snap.su=snap.su.map(a=>a.slice(0,8));
      hash.update(JSON.stringify(snap));
    }
    s.events.length=0;
  }
  assert.ok(s.result,'battle must finish');
  return {mode,seed,tick:s.tick,lives:s.lives,result:s.result,stats:s.players.map(p=>p.stats),sha256:hash.digest('hex')};
}
const results=[run('solo',42),run('coop',7)];
if(process.argv.includes('--record')){
  fs.mkdirSync(new URL('./fixtures/',import.meta.url),{recursive:true});
  fs.writeFileSync(fixture,JSON.stringify({baselineCommit:'2a4da15d02bd82632de82ae854eaa0a10574f71c',results},null,2)+'\n');
  console.log('Recorded unchanged combat baseline.');
}else{
  assert.deepEqual(results,JSON.parse(fs.readFileSync(fixture)).results);
  console.log('✔ 2 complete seeded battles preserve damage, events, income, results and original snapshot fields.');
}
