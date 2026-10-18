// Fixed earned s17 entry state: same profile, seed and six tactics for each factor.
import fs from 'node:fs';
import {Session} from '../src/game/session.js';
import {playerSpec} from '../src/meta/profile.js';
import {createBot,botThink,botSkills} from '../src/sim/ai.js';
import {preparedStrategy,preparedSender} from './prepared-campaign-policy.mjs';
import {STAGE_BY_ID,SOLO_HERO_DAMAGE} from '../src/data/stages.js';
import {getMap} from '../src/sim/map.js';
const prior=JSON.parse(fs.readFileSync('docs/SOLO_ONE_HERO_PROGRESSION.json','utf8')).runs[0],entry=prior.battleLog.find(b=>b.stage==='s17'),p=structuredClone(prior.finalProfile);
for(const [id,lv]of Object.entries(entry.before.heroes))p.heroes[id].lv=lv;
for(const [id,lv]of Object.entries(entry.before.skills))p.skills[id].lv=lv;
for(const [id,lv]of Object.entries(entry.before.towers))p.towers[id].lv=lv;
const stage=STAGE_BY_ID.s17,runs=[];
for(let attempt=1;attempt<=12;attempt++){
  const session=new Session({kind:'solo',stageId:stage.id,difficulty:'normal',seed:7919,specs:[playerSpec(p,['yi'],['singijeon','bongsu'])]}),s=session.state,plan=preparedStrategy(stage,'solo',attempt),send=preparedSender(session),bot=createBot(s,0,{...plan});s.damageLedger={};
  if(plan.placement!=='default'){const map=getMap(stage.id),fraction=plan.placement==='gate'?.95:plan.placement==='exit'?.83:plan.placement==='middle'?.6:plan.placement==='spread'?.25:0,target=map.samples.find(sm=>sm.path===0&&sm.d>(plan.placement==='rally'?4:map.paths[0].total*fraction));send({t:'move',p:0,h:0,x:target.x+.8,y:target.y+.8});bot.posted=true;}
  let deaths=0,deadSeconds=0,wasDead=false;const leaks=[];
  while(!s.result&&s.tick<144000){botThink(s,bot,send);botSkills(s,bot,send);const ev=session.update(1/60),h=s.heroes[0];if(h.dead){deadSeconds+=1/60;if(!wasDead)deaths++;}wasDead=h.dead;for(const e of ev)if(e.k==='leak')leaks.push({wave:s.wave.n,type:e.type,x:e.x,y:e.y});}
  runs.push({attempt,plan,win:!!s.result?.win,wave:s.wave.n,lives:s.lives,rawUsefulDamage:s.damageLedger,deaths,deadSeconds:Math.round(deadSeconds),leaks});session.destroy();
}
const report={generatedAt:new Date().toISOString(),factor:SOLO_HERO_DAMAGE,seed:7919,entry:entry.before,hero:'yi',stage:'s17',scope:'Fixed earned entry profile and seed; no rewards or investment between tactics, damage only; not a full progression pass.',wins:runs.filter(r=>r.win).length,runs};fs.writeFileSync('docs/SOLO_SUPPORT_PROBE_'+String(SOLO_HERO_DAMAGE).replace('.','_')+'.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({factor:SOLO_HERO_DAMAGE,wins:report.wins,runs:runs.map(({rawUsefulDamage,leaks,...r})=>({...r,leaks:leaks.length}))}));
