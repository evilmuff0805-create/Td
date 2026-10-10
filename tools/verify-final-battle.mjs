// Final-stage challenge: only legal player commands, with documented maximum upgrades.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { Session } from '../src/game/session.js';
import { defaultProfile, playerSpec } from '../src/meta/profile.js';
import { STAGES, START_TOWERS } from '../src/data/stages.js';
import { createBot, botThink, botSkills } from '../src/sim/ai.js';
import { TOWERS } from '../src/data/towers.js';
import { getMap } from '../src/sim/map.js';
import { HEROES } from '../src/data/heroes.js';

const results=[];
for(const kind of ['solo','local'])for(const finalAdapt of [false,true]) {
  const p=defaultProfile(),stageId='s25',ix=STAGES.findIndex(s=>s.id===stageId);
  p.towersUnlocked=[...new Set([...START_TOWERS,...STAGES.slice(0,ix).flatMap(s=>s.unlockTowers)])];
  for(const h of Object.values(p.heroes))h.lv=10;
  for(const sk of Object.values(p.skills))sk.lv=5;
  for(const t of Object.values(p.towers))t.lv=30;
  const mk=hs=>playerSpec(p,hs,['gunryang','bigyeok'],'최종 검증');
  const specs=kind==='solo'?[mk(['eulji','gang'])]:[mk(['eulji']),mk(['gang'])];
  const session=new Session({kind,stageId,difficulty:'hell',seed:7919,specs}),s=session.state;
  const bots=specs.map((_,p)=>createBot(s,p,{plan:'nam'}));let finalOrders=0,bossMaxHp=0,combos=0,posted=false;
  while(!session.result&&s.tick<144000) {
    for(const bot of bots) {
      if(finalAdapt&&s.wave.n>=24) {
        if(s.tick%24===0) {
          const pl=s.players[bot.p];
          const t=s.towers.filter(t=>t.owner===bot.p&&!t.branch&&t.type==='seokguram').sort((a,b)=>b.level-a.level)[0];
          const cost=t?Math.round((t.level<3?TOWERS[t.type].levels[t.level].cost:TOWERS[t.type].branches.A.cost)*.9):Infinity;
          if(t&&pl.gold>=cost){session.send({t:'upgrade',p:bot.p,id:t.id,branch:'A'});finalOrders++;}
          else if(t) {
            const weak=s.towers.filter(t=>t.owner===bot.p&&['sungnyemun','bosingak','namhansan'].includes(t.type)).sort((a,b)=>a.dmgDone-b.dmgDone)[0];
            if(weak){session.send({t:'sell',p:bot.p,id:weak.id});finalOrders++;}
          }
        }
      }else botThink(s,bot,c=>session.send(c));
      botSkills(s,bot,c=>session.send(c));
    }
    // Solo strategy holds the heroes at the opening bend before rallying.
    // This is a normal initial move order, replacing the measurement bot's default post.
    if(kind==='solo'&&!posted){
      const at=getMap(stageId).samples.find(sm=>sm.d>4);
      s.heroes.forEach((hero,h)=>{const offset=HEROES[hero.heroId].block?0:.8;session.send({t:'move',p:0,h,x:at.x+offset,y:at.y+offset});});posted=true;
    }
    for(const e of s.enemies)if(e.type==='hideyoshi')bossMaxHp=Math.max(bossMaxHp,e.maxHp);
    for(const e of session.update(1/60))if(e.k==='combo')combos++;
    assert.ok(s.players.every(pl=>Number.isFinite(pl.gold)&&pl.gold>=0));
  }
  assert.ok(session.result,`${kind}: unfinished final battle`);
  results.push({kind,finalAdapt,openingPosition:kind==='solo'?'opening bend':'assigned path',win:session.result.win,lives:s.lives,wave:s.wave.n,total:s.wave.total,time:Math.round(s.time),combos,finalOrders,bossMaxHp});
  console.log(JSON.stringify(results.at(-1)));session.destroy();
}
assert.ok(results.some(r=>r.finalAdapt&&r.win),'At least one legal final-stage hell clear must remain reproducible');
fs.writeFileSync(new URL('../docs/FINAL_BATTLE_VALIDATION.json',import.meta.url),JSON.stringify({
  generatedAt:new Date().toISOString(),
  assumptions:'s25 hell, seed 7919, Eulji + Gang, gunryang + bigyeok, nam bot. Solo holds Gang at the opening bend and ranged Eulji 0.8 tiles away; local uses assigned path posts. Permanent hero 10 / skill 5 / tower 30 assumed; purchase/grind not simulated. finalAdapt sells low-contribution arrow/bell/barracks towers and prioritizes seokguram A after wave 24. Commands use normal costs and authority. No state cheats. One strategy/seed is not all-stage hell balance validation.',results,
},null,2)+'\n');
