// Legal, paid progression. Never installs assumed permanent levels or free unlocks.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import { Session } from '../src/game/session.js';
import { loadProfile,saveProfile,playerSpec,applyBattle,stageUnlocked,diffUnlocked,upgradeHero,upgradeSkill,upgradeTower,skillUnlocked,exchangeCoins,unlockHeroJade,stageCleared } from '../src/meta/profile.js';
import { checkIn,claimQuest,claimBonus } from '../src/meta/quests.js';
import { STAGES,SOLO_HERO_DAMAGE } from '../src/data/stages.js';
import { heroMetaCost } from '../src/data/heroes.js';
import { skillMetaCost } from '../src/data/skills.js';
import { towerMetaCost } from '../src/data/quests.js';
import { createBot,botThink,botSkills } from '../src/sim/ai.js';
import { finalCampaignTactics } from './campaign-tactics.mjs';
import { getMap } from '../src/sim/map.js';
import { preparedStrategy,preparedSender,preparedRelocation } from './prepared-campaign-policy.mjs';

const memory=new Map();
globalThis.localStorage={getItem:k=>memory.get(k)??null,setItem:(k,v)=>memory.set(k,String(v))};
const flags=Object.fromEntries(process.argv.slice(2).map(a=>a.replace(/^--/,'').split('=')));
const kinds=(flags.modes??'solo').split(','),seeds=+(flags.seeds??2),maxAttempts=+(flags.attempts??12),runs=[];
const difficulties=(flags.difficulties??'normal').split(','),output=flags.output??'PROGRESSION_VALIDATION.json';
const policy=flags.policy??'legacy',seedStart=+(flags['seed-start']??1);
const exchange=flags.exchange??'none';assert.ok(['none','on-retry'].includes(exchange));
const roster=flags.roster??'fixed';assert.ok(['fixed','late-ahn'].includes(roster));
assert.ok(roster==='fixed'||difficulties.length===1,'late-ahn policy currently covers normal progression only');
assert.ok(['legacy','prepared'].includes(policy),'policy must be legacy/prepared');
assert.ok(Number.isInteger(seedStart)&&seedStart>0,'seed-start must be a positive integer');
assert.ok(kinds.every(kind=>kind==='solo'),'current earned progression supports solo one-hero mode; online coverage uses real network tests');
assert.ok(difficulties.every((diff,i)=>diff===['normal','hard','hell'][i]),'difficulties must progress from normal to hard to hell');
assert.match(output,/^[A-Z_]+\.json$/,'output must be a report basename');
assert.ok(Number.isInteger(seeds)&&seeds>0&&Number.isInteger(maxAttempts)&&maxAttempts>0,'seeds and attempts must be positive integers');
assert.ok(policy!=='prepared'||maxAttempts<=12,'prepared policy is capped at12 attempts per stage');
const startingHeroes=flags.hero?[flags.hero]:['yi'],skills=['singijeon','bongsu'];let heroes=[...startingHeroes];
function collect(p){
  for(const kind of ['daily','weekly']){p.quests[kind].list.forEach((_,i)=>claimQuest(p,kind,i));claimBonus(p,kind);}saveProfile();
}
function invest(p,usage){
  const receipts=[];
  // Spend real coins on efficient damage upgrades; keep a diversified defense.
  for(let guard=0;guard<200;guard++){
    const choices=[];
    for(const id of heroes)if(p.heroes[id].lv<10){const lv=p.heroes[id].lv,cost=heroMetaCost(lv),share=usage[`hero:${id}`]??(id==='yi'?.15:.08);choices.push({cost,score:.04/(1+.04*lv)*share/cost,fn:()=>upgradeHero(p,id)});}
    for(const id of skills)if(skillUnlocked(p,id)&&p.skills[id].lv<5){const lv=p.skills[id].lv,cost=skillMetaCost(lv),share=id==='bongsu'?.04:(usage[`skill:${id}`]??.07);choices.push({cost,score:(.10/(1+.1*lv)+.03/(1-.03*lv))*share/cost,fn:()=>upgradeSkill(p,id)});}
    for(const id of p.towersUnlocked)if(p.towers[id].lv<30){const lv=p.towers[id].lv,cost=towerMetaCost(lv),share=usage[`tower:${id}`]??(id==='sungnyemun'?.4:id==='hwaseong'?.2:.02);choices.push({cost,score:.02*share/(1+.02*lv)/cost,fn:()=>upgradeTower(p,id)});}
    choices.sort((a,b)=>b.score-a.score);
    const choice=choices.find(c=>c.cost<=p.coins);if(!choice)break;
    const before=p.coins,levels=JSON.stringify({heroes:p.heroes,skills:p.skills,towers:p.towers});assert.equal(choice.fn(),true);assert.equal(p.coins,before-choice.cost);
    const old=JSON.parse(levels),upgrades=[];
    for(const kind of ['heroes','skills','towers'])for(const id of Object.keys(p[kind]))if(old[kind][id].lv!==p[kind][id].lv)upgrades.push({kind,id,from:old[kind][id].lv,to:p[kind][id].lv});
    assert.equal(upgrades.length,1);receipts.push({cost:choice.cost,coinsBefore:before,coinsAfter:p.coins,...upgrades[0]});
  }
  return receipts;
}
for(const kind of kinds)for(let seed=seedStart;seed<seedStart+seeds;seed++){
  memory.clear();heroes=[...startingHeroes];let p=loadProfile();checkIn(p);saveProfile();const battles=[],usage={};let complete=0;
  campaign:for(const difficulty of difficulties)for(const stage of STAGES){
    let rosterReceipt=null;
    if(roster==='late-ahn'&&STAGES.indexOf(stage)>=19&&heroes[0]!=='ahn'){
      assert.ok(stageCleared(p,'s12'));const yiLevel=p.heroes.yi.lv;
      const before={coins:p.coins,jade:p.jade};assert.equal(unlockHeroJade(p,'ahn'),true);
      const afterUnlock={coins:p.coins,jade:p.jade};assert.equal(afterUnlock.jade,before.jade-120);
      assert.equal(exchangeCoins(p,'coins_5000'),true);const afterExchange={coins:p.coins,jade:p.jade};
      const training=[];while(p.heroes.ahn.lv<5){const from=p.heroes.ahn.lv,cost=heroMetaCost(from),coinsBefore=p.coins;assert.equal(upgradeHero(p,'ahn'),true);assert.equal(p.coins,coinsBefore-cost);training.push({from,to:p.heroes.ahn.lv,cost,coinsBefore,coinsAfter:p.coins});}
      assert.equal(p.heroes.yi.lv,yiLevel);heroes=['ahn'];rosterReceipt={hero:'ahn',before,unlockJade:120,afterUnlock,exchangePack:'coins_5000',afterExchange,training,afterTraining:{coins:p.coins,jade:p.jade},preservedYiLevel:yiLevel};
    }
    assert.ok(stageUnlocked(p,stage.id));assert.ok(heroes.every(id=>p.heroes[id].unlocked));assert.ok(skills.every(id=>skillUnlocked(p,id)));
    assert.ok(diffUnlocked(p,stage.id,difficulty),'Previous difficulty must have been legally cleared');
    let won=false;
    for(let attempt=1;attempt<=maxAttempts&&!won;attempt++){
      const walletBeforeClaims={coins:p.coins,jade:p.jade};collect(p);
      const walletBeforeExchange={coins:p.coins,jade:p.jade};let exchangeReceipt=null;
      if(exchange==='on-retry'&&attempt>1&&p.jade>=10){assert.equal(exchangeCoins(p,'coins_1000'),true);assert.equal(p.coins,walletBeforeExchange.coins+1000);assert.equal(p.jade,walletBeforeExchange.jade-10);exchangeReceipt={pack:'coins_1000',before:walletBeforeExchange,after:{coins:p.coins,jade:p.jade}};}
      const investments=invest(p,usage);
      const before={coins:p.coins,jade:p.jade,heroes:Object.fromEntries(heroes.map(id=>[id,p.heroes[id].lv])),skills:Object.fromEntries(skills.map(id=>[id,p.skills[id].lv])),towers:Object.fromEntries(p.towersUnlocked.map(id=>[id,p.towers[id].lv]))};
      const mk=(ids,noItems=false)=>playerSpec(p,ids,skills,'성장 검증',{noItems});
      const specs=kind==='solo'?[mk(heroes)]:[mk([heroes[0]]),mk([heroes[1]],true)];
      const prepared=policy==='prepared'?preparedStrategy(stage,kind,attempt):null;
      const counterexample=!prepared&&attempt>=93;
      const finalChoke=prepared?prepared.placement==='final-entry':counterexample&&attempt>=97&&stage.finale&&kind==='solo';
      const session=new Session({kind,stageId:stage.id,difficulty,seed:seed*7919+(counterexample?0:attempt-1),specs}),s=session.state;
      s.damageLedger={};
      const economyAware=!!prepared||attempt>44;
      const alternate=attempt-(economyAware?45:13),placement=prepared?.placement??(finalChoke?'final-entry':counterexample?(stage.finale?'rally':'gate'):attempt<=12?'default':(economyAware?['exit','gate','rally','spread']:['exit','rally','spread','middle'])[Math.floor(alternate/(economyAware?12:8))%4]);
      const upgradePolicy=prepared?.upgradePolicy??(economyAware?(counterexample?(kind==='solo'?'cannon':'focus'):(placement==='gate'&&kind==='local'||attempt>=69?'focus':'cannon')):'cheap');
      const plan=prepared?.plan??(counterexample?(stage.finale?'nam':['ice','fresh','nam','balanced'][(attempt-93)%4]):attempt<=6?(attempt%3===0?'bul':'balanced'):attempt<=12?['greedy','fresh','ice','nam','bul','balanced'][(attempt-7)%6]:(economyAware?['ice','fresh','nam','balanced']:['ice','nam','balanced','bul'])[alternate%4]);
      const branch=prepared?.branch??(counterexample?'A':attempt<=12?(attempt%2===0?'A':'alt'):economyAware?['A','B','alt'][Math.floor(alternate/4)%3]:(Math.floor(alternate/4)%2===0?'alt':'A'));
      const buildPlacement=prepared?.buildPlacement??(finalChoke?'final-entry':counterexample&&!stage.finale?'exit':'coverage');
      const send=prepared?preparedSender(session):c=>session.send(c);
      const bots=specs.map((_,i)=>createBot(s,i,{plan,branch,economyAware,upgradePolicy,staggerBongsu:economyAware,buildPlacement}));
      if(placement!=='default'&&!finalChoke){
        const map=getMap(stage.id);
        s.heroes.forEach((hero,h)=>{
          if(placement==='neighbor'){session.relocateHero(h,map.deploymentSlots[1].id);return;}
          const path=placement==='rally'?0:Math.min(kind==='local'?hero.owner:hero.slot,map.paths.length-1);
          const fraction=placement==='gate'?.95:placement==='exit'?.83:placement==='middle'?.6:placement==='spread'?(h%2?.78:.25):0;
          const target=map.samples.find(sm=>sm.path===path&&sm.d>(placement==='rally'?4:map.paths[path].total*fraction));
          send({t:'move',p:hero.owner,h,x:target.x+.8,y:target.y+.8});
        });bots.forEach(bot=>bot.posted=true);
      }
      const control={kind:session.kind,state:s,send};
      const finale=stage.finale?finalCampaignTactics(control,economyAware?{botOptions:{plan,branch,economyAware,upgradePolicy,buildPlacement,staggerBongsu:true},keepOpening:!!prepared||placement!=='default',entryChoke:finalChoke,tileBoard:!!prepared}:{}):null;
      // Initial UI drops are approved before the bot chooses its first build;
      // otherwise it can reserve the destination from an obsolete hero view.
      if(prepared&&session.deploymentPending)session.update(1/60);
      let openingSlots=null;
      while(!session.result&&s.tick<144000){if(prepared)preparedRelocation(session);if(finale)finale.think();else for(const bot of bots){botThink(s,bot,send);botSkills(s,bot,send);}session.update(1/60);if(!openingSlots&&s.tick>0)openingSlots=s.heroes.map(h=>h.deploymentSlotId);}
      assert.ok(session.result,`${stage.id}: 전투가 끝나지 않음`);
      const stats={};for(const pl of s.players)for(const [key,value]of Object.entries(pl.stats))if(typeof value==='number')stats[key]=(stats[key]??0)+value;
      const damage=Object.values(s.damageLedger).reduce((sum,n)=>sum+n,0)||1;
      for(const key of new Set([...Object.keys(usage),...Object.keys(s.damageLedger)])){const share=(s.damageLedger[key]??0)/damage;usage[key]=usage[key]===undefined?share:usage[key]*.5+share*.5;}
      const applied=applyBattle(p,{stageId:stage.id,difficulty,mode:kind==='solo'?'solo':'coop',result:session.result,stats});
      battles.push({heroIds:[...heroes],rosterReceipt:attempt===1?rosterReceipt:null,walletBeforeClaims,exchangeReceipt,investments,openingSlots,finalSlots:s.heroes.map(h=>h.deploymentSlotId),stage:stage.id,name:stage.name,difficulty,attempt,seed:s.seed,plan:finale&&!economyAware?'nam':plan,placement:finale&&!economyAware?'finale':placement,branch:finale&&!economyAware?'alt':branch,economyAware,upgradePolicy,buildPlacement,opening:prepared?'prepared':'immediate',finalOrders:finale?.orders??0,finalTransactions:finale?.transactions??[],win:session.result.win,lives:s.lives,wave:s.wave.n,time:Math.round(s.time),before,damageShare:{...usage},rewards:applied.rewards,walletAfterBattle:{coins:p.coins,jade:p.jade}});
      won=session.result.win;session.destroy();assert.ok(p.coins>=0&&p.jade>=0);
      const saved=JSON.parse(JSON.stringify(p));saveProfile();p=loadProfile();assert.deepEqual(p,saved,'성장 기록 저장 복원');
    }
    if(!won)break campaign;complete++;console.log(`${kind} seed ${seed} ${complete}/${STAGES.length*difficulties.length} ${difficulty} ${stage.name} · ${battles.at(-1).attempt}회 · 영웅 ${heroes.map(id=>p.heroes[id].lv).join('/')} · 유산 최고 ${Math.max(...Object.values(p.towers).map(t=>t.lv))}`);
  }
  runs.push({kind,seed,cleared:complete,battles:battles.length,retries:battles.filter(b=>!b.win).length,simulatedMinutes:Math.round(battles.reduce((n,b)=>n+b.time,0)/60),remainingCoins:p.coins,battleLog:battles,finalProfile:p});
}
const sourceHashes=Object.fromEntries(['src/data/stages.js','src/data/deployment.js','src/data/heroes.js','src/sim/sim.js','src/sim/combat.js','src/sim/abilities.js','src/game/session.js','src/game/battle-setup.js','src/meta/profile.js','src/sim/ai.js','tools/verify-progression.mjs','tools/prepared-campaign-policy.mjs','tools/campaign-tactics.mjs'].map(path=>[path,crypto.createHash('sha256').update(fs.readFileSync(path)).digest('hex')]));
const report={sourceHashes,generatedAt:new Date().toISOString(),soloHeroDamage:SOLO_HERO_DAMAGE,heroes:startingHeroes,roster,policy,exchange,seedStart,difficulties,expectedClears:STAGES.length*difficulties.length,allPassed:runs.every(run=>run.cleared===STAGES.length*difficulties.length),assumptions:'Same-day new profile, one attendance claim, earned battle/rank/quest rewards only; one solo hero per battle (' + startingHeroes.join('/') + (roster==='late-ahn'?' then legally purchased/trained Ahn from stage20 onward':'') + '); two unlocked skills; legal paid permanent upgrades. Purchases use smoothed useful HP-damage shares and real growth rates, with a fixed support-skill heuristic; this is not an optimal policy. '+(policy==='prepared'?'Prepared policy uses economy-aware costs and staggered Bongsu from attempt1, the real 30-second initial preparation, six documented tactics and a second branch/upgrade pass within12 attempts; current-enemy-only relocation checks each second obey the ordinary cooldown and slot rules.':'Legacy bounded alternate bot plans/branches and seeds; attempts93+ reuse the base seed for independently reproduced tactical counterexamples.')+' No purchased items, free levels, or fabricated unlocks. '+(exchange==='on-retry'?'On a retry, at most one real shop purchase spends10 earned jade for1000 coins, followed by ordinary paid upgrades. Trades and investments are recorded.':'Jade exchange is disabled.')+' Results are not a human difficulty or reasonable retry-count guarantee.',maxAttempts,runs};
fs.writeFileSync(new URL('../docs/'+output,import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(runs.map(({battleLog,finalProfile,...summary})=>summary),null,2));
assert.ok(report.allPassed,'At least one earned-profile campaign did not finish; see '+output);
