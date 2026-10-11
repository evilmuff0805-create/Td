// Diagnostic replay of actual earned checkpoints, not a fresh progression run.
// Reconstructs only the levels recorded before each battle; no save or rewards.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import { Session } from '../src/game/session.js';
import { defaultProfile,playerSpec } from '../src/meta/profile.js';
import { createBot,botThink,botSkills } from '../src/sim/ai.js';
import { getMap } from '../src/sim/map.js';
import { finalCampaignTactics } from './campaign-tactics.mjs';

const source='DIFFICULTY_PROGRESSION_VALIDATION.json';
const bytes=fs.readFileSync(new URL('../docs/'+source,import.meta.url));
const earned=JSON.parse(bytes),results=[];
assert.equal(earned.allPassed,true);
const cases=[
  {kind:'solo',stage:'s21',plan:'fresh',placement:'gate',upgradePolicy:'cannon'},
  {kind:'local',stage:'s21',plan:'fresh',placement:'gate',upgradePolicy:'focus'},
  {kind:'solo',stage:'s24',plan:'ice',placement:'gate',upgradePolicy:'cannon',buildPlacement:'exit'},
  {kind:'solo',stage:'s25',plan:'nam',placement:'final-entry',upgradePolicy:'cannon'},
  {kind:'local',stage:'s25',plan:'nam',placement:'rally',upgradePolicy:'focus'},
];
for(const tactics of cases){
  const run=earned.runs.find(r=>r.kind===tactics.kind&&r.seed===1);
  const checkpoint=run.battleLog.find(b=>b.stage===tactics.stage&&b.difficulty==='hell');
  assert.equal(checkpoint.attempt,1);assert.equal(checkpoint.win,false);
  for(const seed of [7919,7920,7921]){
    const p=defaultProfile(),fixed=checkpoint.before;
    p.coins=fixed.coins;p.jade=fixed.jade;p.towersUnlocked=Object.keys(fixed.towers);
    for(const [id,lv]of Object.entries(fixed.heroes))p.heroes[id].lv=lv;
    for(const [id,lv]of Object.entries(fixed.skills))p.skills[id].lv=lv;
    for(const [id,lv]of Object.entries(fixed.towers))p.towers[id].lv=lv;
    const profileBefore=JSON.stringify(p),mk=ids=>playerSpec(p,ids,['singijeon','bongsu'],'earned checkpoint',{noItems:true});
    const specs=tactics.kind==='solo'?[mk(['yi','sejong'])]:[mk(['yi']),mk(['sejong'])];
    const session=new Session({kind:tactics.kind,stageId:tactics.stage,difficulty:'hell',seed,specs}),s=session.state;
    const options={plan:tactics.plan,branch:'A',economyAware:true,staggerBongsu:true,upgradePolicy:tactics.upgradePolicy,buildPlacement:tactics.buildPlacement};
    const bots=specs.map((_,i)=>createBot(s,i,options));
    if(tactics.placement!=='final-entry'){
      const map=getMap(tactics.stage);
      s.heroes.forEach((hero,h)=>{
        const path=tactics.placement==='rally'?0:Math.min(tactics.kind==='local'?hero.owner:hero.slot,map.paths.length-1);
        const target=map.samples.find(sm=>sm.path===path&&sm.d>(tactics.placement==='rally'?4:map.paths[path].total*.95));
        session.send({t:'move',p:hero.owner,h,x:target.x+.8,y:target.y+.8});
      });bots.forEach(bot=>bot.posted=true);
    }
    const finale=tactics.stage==='s25'?finalCampaignTactics(session,{botOptions:options,keepOpening:true,entryChoke:tactics.placement==='final-entry'}):null;
    let deaths=0,leakedLives=0;
    while(!session.result&&s.tick<144000){
      if(finale)finale.think();else for(const bot of bots){botThink(s,bot,c=>session.send(c));botSkills(s,bot,c=>session.send(c));}
      for(const event of session.update(1/60)){if(event.k==='heroDown')deaths++;if(event.k==='leak')leakedLives+=event.lives;}
      assert.ok(s.players.every(pl=>Number.isFinite(pl.gold)&&pl.gold>=0));
    }
    assert.ok(session.result);assert.equal(JSON.stringify(p),profileBefore);
    const row={...tactics,branch:'A',seed,checkpointAttempt:1,fixed,win:session.result.win,lives:s.lives,wave:s.wave.n,time:Math.round(s.time),branches:s.towers.filter(t=>t.branch).length,finalOrders:finale?.orders??0,heroDeaths:deaths,leakedLives};
    if(seed===7919)assert.equal(row.win,true,`${tactics.kind} ${tactics.stage}: reviewed base-seed tactic`);
    results.push(row);console.log(JSON.stringify({...row,fixed:undefined}));session.destroy();
  }
}
fs.writeFileSync(new URL('../docs/EARNED_TACTICS_VALIDATION.json',import.meta.url),JSON.stringify({generatedAt:new Date().toISOString(),source,sourceSha256:crypto.createHash('sha256').update(bytes).digest('hex'),sourceGeneratedAt:earned.generatedAt,scope:'Frozen first failed hell-stage checkpoints from the genuine earned-profile report. Reconstructed for diagnostic replay only; no purchases, item use, rewards, unlock claims, combat-stat changes or browser saves. Five tactics at three seeds; variation includes losses and does not certify human balance.',baseSeedChecks:5,baseSeedChecksPassed:true,results},null,2)+'\n');
