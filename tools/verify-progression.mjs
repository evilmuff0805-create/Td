// Legal, paid progression. Never installs assumed permanent levels or free unlocks.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { Session } from '../src/game/session.js';
import { loadProfile,saveProfile,playerSpec,applyBattle,stageUnlocked,upgradeHero,upgradeSkill,upgradeTower,skillUnlocked } from '../src/meta/profile.js';
import { checkIn,claimQuest,claimBonus } from '../src/meta/quests.js';
import { STAGES } from '../src/data/stages.js';
import { heroMetaCost } from '../src/data/heroes.js';
import { skillMetaCost } from '../src/data/skills.js';
import { towerMetaCost } from '../src/data/quests.js';
import { createBot,botThink,botSkills } from '../src/sim/ai.js';
import { finalCampaignTactics } from './campaign-tactics.mjs';

const memory=new Map();
globalThis.localStorage={getItem:k=>memory.get(k)??null,setItem:(k,v)=>memory.set(k,String(v))};
const flags=Object.fromEntries(process.argv.slice(2).map(a=>a.replace(/^--/,'').split('=')));
const kinds=(flags.modes??'solo,local').split(','),seeds=+(flags.seeds??2),maxAttempts=+(flags.attempts??12),runs=[];
assert.ok(kinds.every(kind=>['solo','local'].includes(kind)),'modes must be solo/local');
assert.ok(Number.isInteger(seeds)&&seeds>0&&Number.isInteger(maxAttempts)&&maxAttempts>0,'seeds and attempts must be positive integers');
const heroes=['yi','sejong'],skills=['singijeon','bongsu'];
function collect(p){
  for(const kind of ['daily','weekly']){p.quests[kind].list.forEach((_,i)=>claimQuest(p,kind,i));claimBonus(p,kind);}saveProfile();
}
function invest(p,usage){
  // Spend real coins on efficient damage upgrades; keep a diversified defense.
  for(let guard=0;guard<200;guard++){
    const choices=[];
    for(const id of heroes)if(p.heroes[id].lv<10){const lv=p.heroes[id].lv,cost=heroMetaCost(lv),share=usage[`hero:${id}`]??(id==='yi'?.15:.08);choices.push({cost,score:.04/(1+.04*lv)*share/cost,fn:()=>upgradeHero(p,id)});}
    for(const id of skills)if(skillUnlocked(p,id)&&p.skills[id].lv<5){const lv=p.skills[id].lv,cost=skillMetaCost(lv),share=id==='bongsu'?.04:(usage[`skill:${id}`]??.07);choices.push({cost,score:(.10/(1+.1*lv)+.03/(1-.03*lv))*share/cost,fn:()=>upgradeSkill(p,id)});}
    for(const id of p.towersUnlocked)if(p.towers[id].lv<30){const lv=p.towers[id].lv,cost=towerMetaCost(lv),share=usage[`tower:${id}`]??(id==='sungnyemun'?.4:id==='hwaseong'?.2:.02);choices.push({cost,score:.02*share/(1+.02*lv)/cost,fn:()=>upgradeTower(p,id)});}
    choices.sort((a,b)=>b.score-a.score);
    const choice=choices.find(c=>c.cost<=p.coins);if(!choice)break;
    const before=p.coins;assert.equal(choice.fn(),true);assert.equal(p.coins,before-choice.cost);
  }
}
for(const kind of kinds)for(let seed=1;seed<=seeds;seed++){
  memory.clear();let p=loadProfile();checkIn(p);saveProfile();const battles=[],usage={};let complete=0;
  for(const stage of STAGES){
    assert.ok(stageUnlocked(p,stage.id));assert.ok(heroes.every(id=>p.heroes[id].unlocked));assert.ok(skills.every(id=>skillUnlocked(p,id)));
    let won=false;
    for(let attempt=1;attempt<=maxAttempts&&!won;attempt++){
      collect(p);invest(p,usage);
      const before={coins:p.coins,jade:p.jade,heroes:Object.fromEntries(heroes.map(id=>[id,p.heroes[id].lv])),skills:Object.fromEntries(skills.map(id=>[id,p.skills[id].lv])),towers:Object.fromEntries(p.towersUnlocked.map(id=>[id,p.towers[id].lv]))};
      const mk=(ids,noItems=false)=>playerSpec(p,ids,skills,'성장 검증',{noItems});
      const specs=kind==='solo'?[mk(heroes)]:[mk([heroes[0]]),mk([heroes[1]],true)];
      const session=new Session({kind,stageId:stage.id,difficulty:'normal',seed:seed*7919+attempt-1,specs}),s=session.state;
      s.damageLedger={};
      const plan=attempt<=6?(attempt%3===0?'bul':'balanced'):['greedy','fresh','ice','nam','bul','balanced'][(attempt-7)%6],branch=attempt%2===0?'A':'alt';
      const bots=specs.map((_,i)=>createBot(s,i,{plan,branch}));
      const finale=stage.finale?finalCampaignTactics(session):null;
      while(!session.result&&s.tick<144000){if(finale)finale.think();else for(const bot of bots){botThink(s,bot,c=>session.send(c));botSkills(s,bot,c=>session.send(c));}session.update(1/60);}
      assert.ok(session.result,`${stage.id}: 전투가 끝나지 않음`);
      const stats={};for(const pl of s.players)for(const [key,value]of Object.entries(pl.stats))if(typeof value==='number')stats[key]=(stats[key]??0)+value;
      const damage=Object.values(s.damageLedger).reduce((sum,n)=>sum+n,0)||1;
      for(const key of new Set([...Object.keys(usage),...Object.keys(s.damageLedger)])){const share=(s.damageLedger[key]??0)/damage;usage[key]=usage[key]===undefined?share:usage[key]*.5+share*.5;}
      const applied=applyBattle(p,{stageId:stage.id,difficulty:'normal',mode:kind==='solo'?'solo':'coop',result:session.result,stats});
      battles.push({stage:stage.id,name:stage.name,attempt,seed:s.seed,plan:finale?'nam + final reallocation':plan,branch:finale?'alt':branch,finalOrders:finale?.orders??0,win:session.result.win,lives:s.lives,wave:s.wave.n,time:Math.round(s.time),before,damageShare:{...usage},rewards:applied.rewards});
      won=session.result.win;session.destroy();assert.ok(p.coins>=0&&p.jade>=0);
      const saved=JSON.parse(JSON.stringify(p));saveProfile();p=loadProfile();assert.deepEqual(p,saved,'성장 기록 저장 복원');
    }
    if(!won)break;complete++;console.log(`${kind} seed ${seed} ${complete}/25 ${stage.name} · ${battles.at(-1).attempt}회 · 영웅 ${heroes.map(id=>p.heroes[id].lv).join('/')} · 유산 최고 ${Math.max(...Object.values(p.towers).map(t=>t.lv))}`);
  }
  runs.push({kind,seed,cleared:complete,battles:battles.length,retries:battles.filter(b=>!b.win).length,simulatedMinutes:Math.round(battles.reduce((n,b)=>n+b.time,0)/60),remainingCoins:p.coins,battleLog:battles});
}
const report={generatedAt:new Date().toISOString(),assumptions:'Same-day new profile, one attendance claim, earned battle/rank/quest rewards only; Yi + Sejong; two unlocked skills; legal paid permanent upgrades. Purchases use smoothed useful HP-damage shares and real growth rates, with a fixed support-skill heuristic; this is not an optimal policy. Bounded alternate bot plans/branches and seeds; no purchased items, free levels, jade conversion, or fabricated unlocks. Results are not a human difficulty guarantee.',maxAttempts,runs};
fs.writeFileSync(new URL('../docs/PROGRESSION_VALIDATION.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(runs.map(({battleLog,...summary})=>summary),null,2));
assert.ok(runs.every(run=>run.cleared===STAGES.length),'At least one earned-profile campaign did not finish; see PROGRESSION_VALIDATION.json');
