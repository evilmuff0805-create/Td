// Full original campaign through Session, with only previously unlocked towers.
// Assumed permanent upgrades follow tools/balance.mjs's documented progression.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { Session } from '../src/game/session.js';
import { defaultProfile, playerSpec } from '../src/meta/profile.js';
import { STAGES, START_TOWERS, DIFF_ORDER } from '../src/data/stages.js';
import { createBot, botThink, botSkills } from '../src/sim/ai.js';
import { expectedMeta } from './balance.mjs';

const results=[];
for(let i=0;i<STAGES.length;i++) {
  const stage=STAGES[i],meta=expectedMeta(stage.id),p=defaultProfile();
  p.towersUnlocked=[...new Set([...START_TOWERS,...STAGES.slice(0,i).flatMap(st=>st.unlockTowers)])];
  for(const hero of Object.values(p.heroes))hero.lv=meta.hero;
  for(const skill of Object.values(p.skills))skill.lv=meta.skill;
  for(const tower of Object.values(p.towers))tower.lv=meta.tower;
  for(const difficulty of DIFF_ORDER)for(const kind of ['solo','local']) {
    const mk=heroes=>playerSpec(p,heroes,['singijeon','bongsu'],'검증');
    const specs=kind==='solo'?[mk(['yi','sejong'])]:[mk(['yi']),mk(['sejong'])];
    const session=new Session({kind,stageId:stage.id,difficulty,seed:7919,specs}),s=session.state;
    const bots=specs.map((_,idx)=>createBot(s,idx));let combos=0,bosses=0;
    while(!session.result&&s.tick<144000) {
      for(const bot of bots){botThink(s,bot,c=>session.send(c));botSkills(s,bot,c=>session.send(c));}
      for(const e of session.update(1/60)){if(e.k==='combo')combos++;if(e.k==='boss')bosses++;}
      for(const list of [s.heroes,s.enemies,s.summons,s.movers])for(const e of list)assert.ok(Number.isFinite(e.x)&&Number.isFinite(e.y),`${stage.id} ${difficulty} ${kind}: nonfinite entity`);
    }
    assert.ok(session.result,`${stage.id} ${difficulty} ${kind}: did not finish`);
    assert.ok(s.players.every(pl=>Number.isFinite(pl.gold)&&pl.gold>=0));
    results.push({stage:stage.id,name:stage.name,difficulty,kind,meta,unlockedTowers:p.towersUnlocked.length,win:session.result.win,lives:s.lives,wave:s.wave.n,total:s.wave.total,combos,bosses,time:Math.round(s.time)});
    session.destroy();
  }
  console.log(`${i+1}/25 ${stage.name}: ${results.slice(-6).filter(r=>r.win).length}/6 승리 · 6개 전투 정상 종료`);
}
const summary={completed:results.length,wins:results.filter(r=>r.win).length,byMode:{},byDifficulty:{}};
for(const kind of ['solo','local'])summary.byMode[kind]={played:results.filter(r=>r.kind===kind).length,won:results.filter(r=>r.kind===kind&&r.win).length};
for(const difficulty of DIFF_ORDER)summary.byDifficulty[difficulty]={played:results.filter(r=>r.difficulty===difficulty).length,won:results.filter(r=>r.difficulty===difficulty&&r.win).length};
const report={generatedAt:new Date().toISOString(),assumptions:'Original Session. Yi + Sejong; singijeon + bongsu; one balanced bot strategy, seed 7919. Only prior stage tower unlocks. expectedMeta permanent levels. Bot losses are not a claim of impossibility or human difficulty.',summary,results};
fs.writeFileSync(new URL('../docs/RELEASE_VALIDATION.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(summary));
