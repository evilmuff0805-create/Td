// Diagnostic comparisons of frozen, genuinely earned levels. Not fresh progression.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import { Session } from '../src/game/session.js';
import { defaultProfile, playerSpec } from '../src/meta/profile.js';
import { STAGE_BY_ID, COOP, DIFFICULTY } from '../src/data/stages.js';
import { createBot, botThink, botSkills } from '../src/sim/ai.js';
import { getMap } from '../src/sim/map.js';
import { finalCampaignTactics } from './campaign-tactics.mjs';

const flags=Object.fromEntries(process.argv.slice(2).map(a=>a.replace(/^--/,'').split('=')));
const source='DIFFICULTY_PROGRESSION_VALIDATION.json';
const sourceBytes=fs.readFileSync(new URL('../docs/'+source,import.meta.url));
const earned=JSON.parse(sourceBytes),results=[];
const seeds=(flags.seeds??'24691,24697').split(',').map(Number);
const multipliers=(flags.gold??'1,1.15,1.3').split(',').map(Number);
const difficulty=flags.difficulty??'hell',opening=flags.opening??'immediate';
const hpModes=(flags.hp??'legacy').split(',');
const candidateOpeningHp=DIFFICULTY[difficulty]?.openingHp??DIFFICULTY[difficulty]?.hp;
const stages=(flags.stages??'s21,s24,s25').split(',');
const kinds=(flags.modes??'solo,local').split(',');
const alternate=flags.tactics==='alternate';
const output=flags.output??'OPENING_BUDGET_EXPLORATION.json';
assert.ok(earned.allPassed);
assert.ok(seeds.every(n=>Number.isInteger(n)&&n>0));
assert.ok(multipliers.every(n=>Number.isFinite(n)&&n>=1&&n<=2));
assert.ok(['normal','hard','hell'].includes(difficulty));
assert.ok(['immediate','prepared'].includes(opening));
assert.ok(hpModes.every(m=>['legacy','ramp'].includes(m)));
assert.ok(stages.every(id=>['s17','s18','s21','s24','s25'].includes(id)));
assert.ok(kinds.every(k=>['solo','local'].includes(k)));
assert.match(output,/^[A-Z_]+\.json$/);

function tactics(stage,kind){
  const upgradePolicy=kind==='solo'?'cannon':'focus';
  if(alternate){
    if(stage==='s25')return {plan:'nam',placement:kind==='solo'?'rally':'final-entry',upgradePolicy:kind==='solo'?'focus':'cannon'};
    return {plan:stage==='s24'?'nam':'ice',placement:'exit',upgradePolicy,buildPlacement:'exit'};
  }
  if(stage==='s25')return {plan:'nam',placement:kind==='solo'?'final-entry':'rally',upgradePolicy};
  if(stage==='s18')return {plan:'ice',placement:'exit',upgradePolicy:'cannon'};
  return {plan:stage==='s24'?'ice':'fresh',placement:'gate',upgradePolicy,buildPlacement:stage==='s24'?'exit':undefined};
}

for(const stageId of stages)for(const kind of kinds){
  const checkpoint=earned.runs.find(r=>r.kind===kind&&r.seed===1).battleLog.find(b=>b.stage===stageId&&b.difficulty===difficulty);
  assert.ok(checkpoint&&checkpoint.attempt===1);
  const fixed=checkpoint.before,stage=STAGE_BY_ID[stageId],map=getMap(stageId),tactic=tactics(stageId,kind);
  for(const seed of seeds)for(const hpMode of hpModes)for(const multiplier of multipliers){
    const originalOpeningHp=DIFFICULTY[difficulty].openingHp;
    DIFFICULTY[difficulty].openingHp=hpMode==='legacy'?DIFFICULTY[difficulty].hp:candidateOpeningHp;
    const p=defaultProfile();p.coins=fixed.coins;p.jade=fixed.jade;p.towersUnlocked=Object.keys(fixed.towers);
    for(const [id,lv]of Object.entries(fixed.heroes))p.heroes[id].lv=lv;
    for(const [id,lv]of Object.entries(fixed.skills))p.skills[id].lv=lv;
    for(const [id,lv]of Object.entries(fixed.towers))p.towers[id].lv=lv;
    const profileBefore=JSON.stringify(p),mk=ids=>playerSpec(p,ids,['singijeon','bongsu'],'earned checkpoint',{noItems:true});
    const specs=kind==='solo'?[mk(['yi','sejong'])]:[mk(['yi']),mk(['sejong'])];
    const session=new Session({kind,stageId,difficulty,seed,specs}),s=session.state;
    // Explicit experimental override at tick0 only; same profile/seed/tactic otherwise.
    const initialGold=Math.round(stage.startGold*multiplier*(kind==='solo'?1:COOP.startGoldShare));
    s.players.forEach(pl=>pl.gold=initialGold);
    const options={...tactic,branch:'A',economyAware:true,staggerBongsu:true};
    const bots=specs.map((_,i)=>createBot(s,i,options));
    if(tactic.placement!=='final-entry'){
      s.heroes.forEach((hero,h)=>{
        const path=tactic.placement==='rally'?0:Math.min(kind==='local'?hero.owner:hero.slot,map.paths.length-1);
        const at=map.samples.find(sm=>sm.path===path&&sm.d>(tactic.placement==='rally'?4:map.paths[path].total*(tactic.placement==='gate'?.95:.83)));
        session.send({t:'move',p:hero.owner,h,x:at.x+.8,y:at.y+.8});
      });bots.forEach(bot=>bot.posted=true);
    }
    const send=c=>{if(opening==='prepared'&&c.t==='nextWave'&&s.wave.n===0)return;session.send(c);};
    const control={kind:session.kind,state:s,send};
    const finale=stage.finale?finalCampaignTactics(control,{botOptions:options,keepOpening:true,entryChoke:tactic.placement==='final-entry'}):null;
    const waves=[],leaks=[],seenLeaks=new Set();let deaths=0,lastWave=-1;
    const wallet=()=>s.players.map(pl=>({gold:pl.gold,earned:pl.stats.goldEarned,outflow:initialGold+pl.stats.goldEarned-pl.gold,builds:pl.stats.builds,branches:pl.stats.branches}));
    const started=performance.now();
    while(!session.result&&s.tick<144000){
      if(finale)finale.think();else for(const bot of bots){botThink(s,bot,send);botSkills(s,bot,send);}
      const previousEnemies=s.enemies;
      const events=session.update(1/60);
      for(const e of previousEnemies)if(e.leaked&&!seenLeaks.has(e.id)){
        seenLeaks.add(e.id);leaks.push({wave:e.wave,atWave:s.wave.n,time:Math.round(s.time),type:e.type,path:e.path,lives:e.lives,hp:Math.round(e.hp),maxHp:Math.round(e.maxHp),wallet:wallet()});
      }
      for(const e of events)if(e.k==='heroDown')deaths++;
      if(s.wave.n!==lastWave){lastWave=s.wave.n;waves.push({wave:s.wave.n,lives:s.lives,time:Math.round(s.time),tactic:s.wave.tactic,wallet:wallet(),towers:s.towers.length,heroLevels:s.heroes.map(h=>h.lv)});}
      assert.ok(s.players.every(pl=>Number.isFinite(pl.gold)&&pl.gold>=0));
    }
    assert.ok(session.result);assert.equal(JSON.stringify(p),profileBefore);
    const row={stage:stageId,kind,difficulty,seed,multiplier,hpMode,openingHp:DIFFICULTY[difficulty].openingHp,initialGold,opening,tactic,checkpoint:fixed,win:session.result.win,lives:s.lives,wave:s.wave.n,time:Math.round(s.time),heroDeaths:deaths,firstLeak:leaks[0]??null,leaks,waves,finalWallet:wallet(),elapsedMs:Math.round(performance.now()-started)};
    results.push(row);console.log(JSON.stringify({stage:stageId,kind,difficulty,seed,multiplier,hpMode,opening,win:row.win,lives:row.lives,wave:row.wave,firstLeakWave:row.firstLeak?.wave??null,elapsedMs:row.elapsedMs}));session.destroy();
    if(originalOpeningHp===undefined)delete DIFFICULTY[difficulty].openingHp;else DIFFICULTY[difficulty].openingHp=originalOpeningHp;
  }
}
const summaries=hpModes.flatMap(hpMode=>multipliers.map(multiplier=>({hpMode,multiplier,battles:results.filter(r=>r.hpMode===hpMode&&r.multiplier===multiplier).length,wins:results.filter(r=>r.hpMode===hpMode&&r.multiplier===multiplier&&r.win).length,averageLives:results.filter(r=>r.hpMode===hpMode&&r.multiplier===multiplier).reduce((n,r)=>n+r.lives,0)/results.filter(r=>r.hpMode===hpMode&&r.multiplier===multiplier).length})));
const report={date:'2026-10-12',generatedAt:new Date().toISOString(),source,sourceSha256:crypto.createHash('sha256').update(sourceBytes).digest('hex'),scope:'Frozen actual first-attempt earned checkpoints, explicit initial-gold and/or opening-HP comparison. Every comparison uses economy-aware legal commands, identical skills/tactics/seed and fixed opening policy. No rewards, saves, free upgrades or fresh-progression claims. Shared RNG means changed actions can change later tactics.',seeds,multipliers,hpModes,opening,difficulty,tactics:alternate?'alternate':'reviewed',summaries,results};
fs.writeFileSync(new URL('../docs/'+output,import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(summaries));
