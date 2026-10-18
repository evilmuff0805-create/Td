import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createGame,applyCommand,step} from '../src/sim/sim.js';
import {damage,spawnEnemy} from '../src/sim/combat.js';
import {HERO_ORDER} from '../src/data/heroes.js';
import {SOLO_HERO_DAMAGE} from '../src/data/stages.js';
import {createBot,botThink,botSkills} from '../src/sim/ai.js';
import {preparedSender} from './prepared-campaign-policy.mjs';
import {Session} from '../src/game/session.js';
import {getMap,posAt} from '../src/sim/map.js';
import {defaultProfile,playerSpec} from '../src/meta/profile.js';
const results=[],test=(name,fn)=>{fn();results.push({name,passed:true});console.log('✔ '+name);};
const game=(id='yi',mode='solo',difficulty='normal',pair=false)=>createGame({stageId:'s1',difficulty,mode,seed:8,players:pair?[{heroes:[id]},{heroes:[id==='yi'?'sejong':'yi']}]:[{heroes:[id]}]});
test('damage support applies once to each hero source only in normal solo one-player one-hero',()=>{
  for(const id of HERO_ORDER)for(const difficulty of ['normal','hard','hell'])for(const pair of [false,true])for(const mode of ['solo','online']){
    const s=game(id,mode,difficulty,pair),e=spawnEnemy(s,'ashigaru',0,1);e.hp=1e9;e.armor=e.resist=e.shred=e.rshred=0;e.shield=0;const factor=mode==='solo'&&difficulty==='normal'&&!pair?SOLO_HERO_DAMAGE:1;
    for(const type of ['phys','fire','holy','true'])assert.equal(damage(s,e,100,type,{kind:'hero',p:0,ref:s.heroes[0]}),100*factor);
    for(const kind of ['tower','skill','summon'])assert.equal(damage(s,e,100,'true',{kind,p:0}),100);
  }
  const s=createGame({stageId:'s1',difficulty:'normal',mode:'solo',seed:8,players:[{heroes:['yi','sejong']}]});const e=spawnEnemy(s,'ashigaru',0,1);e.hp=1e6;assert.equal(damage(s,e,100,'true',{kind:'hero',p:0,ref:s.heroes[0]}),100);
});
test('Yi actual turtle damage receives exactly one multiplier, without changing its speed or lifetime',()=>{
  const solo=game(),legacy=createGame({stageId:'s1',difficulty:'normal',mode:'solo',seed:8,players:[{heroes:['yi','sejong']}]});
  const prepare=s=>{const h=s.heroes[0];h.ultCd=0;applyCommand(s,{t:'heroUlt',p:0,h:0,x:h.x,y:h.y});const turtle=s.movers.find(m=>m.kind==='turtle');assert.ok(turtle);return turtle;};
  const a=prepare(solo),b=prepare(legacy);for(const key of ['dmg','speed','duration','life'])assert.equal(a[key],b[key]);
  const hit=(s,m)=>{m.d-=2;Object.assign(m,posAt(getMap(s.stageId).paths[m.path],m.d));const e=spawnEnemy(s,'ashigaru',m.path,1);e.hp=1e6;e.armor=0;e.resist=0;e.d=m.d;e.x=m.x;e.y=m.y;s.projectiles=[];s.heroes.forEach(h=>h.cd=999);let before=e.hp;for(let i=0;i<3&&e.hp===before;i++)step(s);return before-e.hp;};
  const da=hit(solo,a),db=hit(legacy,b);assert.ok(db>0);assert.ok(Math.abs(da-db*SOLO_HERO_DAMAGE)<1e-8,JSON.stringify({da,db}));
});
test('Gwak summons and Dangun healing keep HP, damage, duration and control effects',()=>{
  for(const id of ['gwak','dangun']){const a=game(id),b=createGame({stageId:'s1',difficulty:'normal',mode:'solo',seed:8,players:[{heroes:[id,'yi']}]});for(const s of [a,b]){const h=s.heroes[0];h.hp=h.maxHp/2;h.skillCd=h.ultCd=0;applyCommand(s,{t:'heroSkill',p:0,h:0,x:h.x,y:h.y});applyCommand(s,{t:'heroUlt',p:0,h:0,x:h.x,y:h.y});}const ha=a.heroes[0],hb=b.heroes[0];for(const key of ['hp','maxHp','dmg','skillMult','skillCd','ultCd'])assert.equal(ha[key],hb[key],id+' '+key);assert.deepEqual(ha.buffs,hb.buffs);assert.deepEqual(a.summons.map(m=>({hp:m.hp,maxHp:m.maxHp,dmg:m.dmg,life:m.life,rate:m.rate})),b.summons.map(m=>({hp:m.hp,maxHp:m.maxHp,dmg:m.dmg,life:m.life,rate:m.rate})));}
});
test('summon-focused hero runs representative first and multi-path battles without invalid state',()=>{
  const samples=[];for(const stageId of ['s1','s17']){const p=defaultProfile(),spec=playerSpec(p,['gwak'],['singijeon','bongsu']);const session=new Session({kind:'solo',stageId,difficulty:'normal',seed:7919,specs:[spec]}),s=session.state,bot=createBot(s,0,{plan:'nam',economyAware:true,staggerBongsu:true}),send=preparedSender(session);let summons=0;while(!s.result&&s.tick<144000){botThink(s,bot,send);botSkills(s,bot,send);session.update(1/60);summons=Math.max(summons,s.summons.length);assert.ok(s.heroes.every(h=>Number.isFinite(h.hp)&&Number.isFinite(h.x)&&Number.isFinite(h.y)));}assert.ok(s.result);samples.push({stageId,win:s.result.win,wave:s.wave.n,maxSummons:summons});session.destroy();}results.push({name:'representative samples (zero permanent upgrades, isolated fixture; not earned Gwak campaign)',samples,passed:true});
});
fs.writeFileSync('docs/SOLO_SUPPORT_RUNTIME_VALIDATION.json',JSON.stringify({generatedAt:new Date().toISOString(),tests:4,allPassed:true,factor:SOLO_HERO_DAMAGE,scope:'Scoped damage and real ability/summon behavior; representative Gwak battles are diagnostics, not an all-hero progression certificate.',results},null,2)+'\n');
