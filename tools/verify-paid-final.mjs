// Reproduce final-stage tactics from a frozen, genuinely earned campaign profile.
// Writes a diagnostic report; never modifies a player's browser save.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { Session } from '../src/game/session.js';
import { defaultProfile, playerSpec } from '../src/meta/profile.js';
import { createBot, botThink, botSkills } from '../src/sim/ai.js';
import { TOWERS } from '../src/data/towers.js';
import { HEROES } from '../src/data/heroes.js';
import { metaCost } from '../src/data/quests.js';
import { getMap } from '../src/sim/map.js';
// Frozen from 2026-10-10T01:23:03.430Z progression report: solo seed2, s25 attempt1.
const sourceGeneratedAt='2026-10-10T01:23:03.430Z',seed=15838;
const fixed={coins:60,jade:935,heroes:{yi:6,sejong:1},skills:{singijeon:2,bongsu:5},towers:{sungnyemun:22,hwaseong:17,bosingak:10,cheomseong:25,haeinsa:3,seokguram:26,namhansan:4,gyeongbok:4,seokbinggo:4,bulguksa:4}};
const results=[];
function run({plan,branch,opening=false,finalAdapt=false}) {
  const p=defaultProfile();p.coins=fixed.coins;p.jade=fixed.jade;p.towersUnlocked=Object.keys(fixed.towers);
  for(const [id,lv] of Object.entries(fixed.heroes))p.heroes[id].lv=lv;
  for(const [id,lv] of Object.entries(fixed.skills))p.skills[id].lv=lv;
  for(const [id,lv] of Object.entries(fixed.towers))p.towers[id].lv=lv;
  const spec=playerSpec(p,Object.keys(fixed.heroes),Object.keys(fixed.skills),'paid checkpoint',{noItems:true});
  const profileBefore=JSON.stringify(p);
  const session=new Session({kind:'solo',stageId:'s25',difficulty:'normal',seed,specs:[spec]}),s=session.state;
  const bot=createBot(s,0,{plan,branch});let posted=false,combos=0,finalOrders=0,bossMaxHp=0,bossMinHp=Infinity,bossKilled=false,bossLeaked=false;
  const leaks=[],waveStarts=[],heroDeaths={};let lastWave=-1;
  while(!session.result&&s.tick<144000) {
    if(finalAdapt&&s.wave.n>=24) {
      if(s.tick%24===0) {
        const pl=s.players[0],t=s.towers.filter(t=>t.owner===0&&!t.branch&&t.type==='seokguram').sort((a,b)=>b.level-a.level)[0];
        const cost=t?metaCost(t.level<3?TOWERS[t.type].levels[t.level].cost:TOWERS[t.type].branches.A.cost,t.metaLv):Infinity;
        if(t&&pl.gold>=cost){session.send({t:'upgrade',p:0,id:t.id,branch:'A'});finalOrders++;}
        else if(t){const weak=s.towers.filter(t=>t.owner===0&&['sungnyemun','bosingak','namhansan'].includes(t.type)).sort((a,b)=>a.dmgDone-b.dmgDone)[0];if(weak){session.send({t:'sell',p:0,id:weak.id});finalOrders++;}}
      }
    } else botThink(s,bot,c=>session.send(c));
    botSkills(s,bot,c=>session.send(c));
    if(opening&&!posted){const at=getMap('s25').samples.find(sm=>sm.d>4);s.heroes.forEach((hero,h)=>{const offset=HEROES[hero.heroId].block?0:.8;session.send({t:'move',p:0,h,x:at.x+offset,y:at.y+offset});});posted=true;}
    for(const e of s.enemies)if(e.type==='hideyoshi'){bossMaxHp=Math.max(bossMaxHp,e.maxHp);bossMinHp=Math.min(bossMinHp,e.hp);}
    for(const e of session.update(1/60)){
      if(e.k==='leak'){leaks.push({wave:s.wave.n,time:+s.time.toFixed(1),type:e.type,lives:e.lives});if(e.type==='hideyoshi')bossLeaked=true;}
      if(e.k==='death'&&e.type==='hideyoshi')bossKilled=true;
      if(e.k==='heroDown')heroDeaths[e.heroId]=(heroDeaths[e.heroId]??0)+1;
      if(e.k==='combo')combos++;
    }
    if(s.wave.n!==lastWave){lastWave=s.wave.n;waveStarts.push({wave:lastWave,lives:s.lives,time:+s.time.toFixed(1),gold:s.players[0].gold});}
    assert.ok(s.players.every(pl=>Number.isFinite(pl.gold)&&pl.gold>=0));
  }
  assert.ok(session.result);assert.equal(JSON.stringify(p),profileBefore);
  const row={plan,branch,opening,finalAdapt,seed,win:session.result.win,lives:s.lives,wave:s.wave.n,time:+s.time.toFixed(1),combos,finalOrders,bossMaxHp,bossMinHp:Number.isFinite(bossMinHp)?bossMinHp:null,bossKilled,bossLeaked,heroDeaths,leaksByType:leaks.reduce((o,e)=>(o[e.type]=(o[e.type]??0)+e.lives,o),{}),leaksByWave:Object.fromEntries(Object.entries(s.waveStats).filter(([k,v])=>v.leaks).map(([k,v])=>[k,v.leaks])),firstLeaks:leaks.slice(0,4),waveStarts};
  results.push(row);console.log(JSON.stringify({...row,waveStarts:undefined}));session.destroy();
}
for(const branch of ['alt','A'])for(const plan of ['balanced','bul','fresh','greedy','ice'])run({plan,branch});
for(const branch of ['alt','A'])for(const finalAdapt of [false,true])run({plan:'nam',branch,opening:true,finalAdapt});
for(const finalAdapt of [false,true])run({plan:'nam',branch:'alt',opening:false,finalAdapt});
for(const finalAdapt of [false,true])run({plan:'balanced',branch:'alt',opening:true,finalAdapt});
const adapted=results.find(r=>r.plan==='nam'&&r.branch==='alt'&&r.opening&&r.finalAdapt);
const control=results.find(r=>r.plan==='nam'&&r.branch==='alt'&&r.opening&&!r.finalAdapt);
assert.ok(adapted.win&&adapted.bossKilled&&!adapted.bossLeaked,'Earned-profile final-stage tactics must kill the boss and win');
assert.equal(control.win,false,'The same-profile control must retain the measured tactical bottleneck');
fs.writeFileSync(new URL('../docs/PAID_FINAL_STRATEGY_VALIDATION.json',import.meta.url),JSON.stringify({generatedAt:new Date().toISOString(),sourceGeneratedAt,checkpointAttempt:1,fixed,seed,notes:'Frozen actual paid profile. All runs same seed, no item use, meta purchases, rewards, or unlock additions. Yi+Sejong and Singijeon+Bongsu retained. Only normal opening move commands and wave24 seokguram A reallocations distinguish the winning strategy.',results},null,2)+'\n');
