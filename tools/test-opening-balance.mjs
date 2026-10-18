import assert from 'node:assert/strict';
import fs from 'node:fs';
import { STAGES, STAGE_BY_ID, DIFFICULTY, COOP, difficultyHp, startingGold, parseWave } from '../src/data/stages.js';
import { ENEMIES } from '../src/data/enemies.js';
import { TACTICS } from '../src/data/tactics.js';
import { createGame, applyCommand, step, FIRST_PREP, DT } from '../src/sim/sim.js';
import { spawnEnemy, killEnemy } from '../src/sim/combat.js';
import { SnapshotEncoder, emptyView, applySnapshot } from '../src/sim/snapshot.js';
import { defaultProfile, playerSpec, loadProfile, saveProfile } from '../src/meta/profile.js';
import { battleRules, difficultyText, stageAdvice } from '../src/ui/battle-rules.js';
import { preparedStrategy, preparedSender } from './prepared-campaign-policy.mjs';

const results=[];
function test(name,fn){fn();results.push({name,passed:true});console.log('✔ '+name);}
const oldHp={normal:1,hard:1.3,hell:1.6};
const specs=coop=>coop?[{heroes:['yi'],skills:[]},{heroes:['sejong'],skills:[]}]:[{heroes:['yi','sejong'],skills:[]}];
const game=(stageId='s24',difficulty='hell',coop=false)=>createGame({stageId,difficulty,mode:coop?'local':'solo',seed:61583,players:specs(coop)});
function previousHp(s,type,wave,tactic){
  const def=ENEMIES[type],st=STAGE_BY_ID[s.stageId];
  const multiplier=(def.fixedHp?1:def.tier===4?st.bossHp??st.hpBase:s.hpBase??st.hpBase)*(def.tier===4?1:1+st.hpGrowth*(wave-1))*oldHp[s.difficulty]*(s.coop?s.coopHp:1)*(TACTICS[tactic]?.hpMult||1);
  const midBoss=def.tier===4&&!def.fixedHp&&wave<st.waves.length?.35+.6*(wave/st.waves.length):1;
  return def.hp*multiplier*midBoss;
}
test('normal/hard rules and every stage/enemy/wave HP remain exactly equal to the previous formula',()=>{
  assert.deepEqual(DIFFICULTY.normal,{name:'보통',hp:1,speed:1,bounty:1,lives:20,reward:1});
  assert.deepEqual(DIFFICULTY.hard,{name:'어려움',hp:1.3,speed:1.05,bounty:.92,lives:15,reward:1.6});
  for(const st of STAGES)for(const diff of ['normal','hard'])for(const coop of [false,true]){
    const s=game(st.id,diff,coop);
    for(let wave=1;wave<=st.waves.length;wave++)for(const type of Object.keys(ENEMIES)){
      assert.equal(spawnEnemy(s,type,0,wave).maxHp,previousHp(s,type,wave));s.enemies.length=0;
    }
  }
});
test('hell ordinary HP rises monotonically from1.3 to1.6 at wave8 with no change from wave8 onward',()=>{
  let previous=0;
  for(let wave=1;wave<=20;wave++){
    const hp=difficultyHp('hell',wave,1);assert.ok(hp>=previous&&hp>=DIFFICULTY.hard.hp&&hp<=1.6);previous=hp;
    if(wave>=8)assert.equal(hp,1.6);
  }
  assert.equal(difficultyHp('hell',1,3),1.3);assert.equal(difficultyHp('hell',0,2),1.3);
  assert.ok(Math.abs(difficultyHp('hell',5,2)-(1.3+.3*4/7))<1e-12);
});
test('all hell bosses, including early mid-bosses and the fixed-HP final boss, retain their original HP',()=>{
  for(const st of STAGES)for(const coop of [false,true]){
    const s=game(st.id,'hell',coop);
    for(let wave=1;wave<=st.waves.length;wave++)for(const [type,def]of Object.entries(ENEMIES))if(def.tier===4){
      assert.equal(spawnEnemy(s,type,0,wave).maxHp,previousHp(s,type,wave));s.enemies.length=0;
    }
  }
});
test('hell wave8+ preserves the complete old HP formula for all ordinary enemies, coop and march tactic',()=>{
  for(const st of STAGES)for(const coop of [false,true])for(const tactic of [undefined,'march']){
    const s=game(st.id,'hell',coop);
    for(let wave=8;wave<=st.waves.length;wave++)for(const [type,def]of Object.entries(ENEMIES))if(def.tier!==4){
      assert.equal(spawnEnemy(s,type,0,wave,1,{tactic}).maxHp,previousHp(s,type,wave,tactic));s.enemies.length=0;
    }
  }
});
test('early hell changes only HP, retaining speed, armor, resistance, attack, seed consumption and bounty factors',()=>{
  for(const type of Object.keys(ENEMIES))for(const tactic of Object.keys(TACTICS)){
    const s=game(),original=DIFFICULTY.hell.openingHp;
    const current=spawnEnemy(s,type,0,3,1,{tactic});
    const legacy=game();DIFFICULTY.hell.openingHp=DIFFICULTY.hell.hp;
    let previous;try{previous=spawnEnemy(legacy,type,0,3,1,{tactic});}finally{DIFFICULTY.hell.openingHp=original;}
    const {hp,maxHp,...rest}=current,{hp:old,maxHp:oldMax,...oldRest}=previous;
    assert.deepEqual(rest,oldRest);assert.equal(s.rng,legacy.rng);
    if(ENEMIES[type].tier!==4)assert.ok(hp<old);else assert.equal(hp,old);
  }
});
test('a ram destroyed after the next wave starts gives its children the original wave HP',()=>{
  const s=game();s.wave.n=10;
  const ram=spawnEnemy(s,'ram',0,2,5);killEnemy(s,ram);
  const children=s.enemies.filter(e=>e.type==='ashigaru');assert.equal(children.length,4);
  for(const e of children){assert.equal(e.wave,2);assert.ok(e.hp<previousHp(s,e.type,2));assert.equal(e.bountyMult,.5);}
});
test('boss summons also use the boss original wave rather than the current wave',()=>{
  const s=game();s.wave.n=10;s.wave.timer=999;
  const boss=spawnEnemy(s,'konishi',0,2,3);boss.ab.summon=0;
  step(s);
  const children=s.enemies.filter(e=>e.type==='ashigaru');assert.equal(children.length,4);
  for(const e of children){assert.equal(e.wave,2);assert.ok(e.maxHp<previousHp(s,e.type,2));}
});
test('online snapshots transmit the host computed HP without applying the ramp a second time',()=>{
  const s=game('s24','hell',true);spawnEnemy(s,'armored',0,3);spawnEnemy(s,'hideyoshi',0,3);
  const view=emptyView({stageId:s.stageId,difficulty:s.difficulty,mode:'online'});
  applySnapshot(view,JSON.parse(JSON.stringify(new SnapshotEncoder().encode(s,[]))));
  assert.deepEqual(view.enemies.map(e=>[e.hp,e.maxHp]),s.enemies.map(e=>[e.hp|0,e.maxHp|0]));
  assert.deepEqual(view.players.map(p=>p.gold),s.players.map(p=>p.gold));
});
test('all25 stage wallets remain unchanged in solo/local/online, independently of difficulty',()=>{
  assert.deepEqual(COOP,{hpMult:1.1,goldShare:.6,startGoldShare:.65});
  for(const st of STAGES)for(const diff of Object.keys(DIFFICULTY))for(const mode of ['solo','local','online']){
    const coop=mode!=='solo',s=createGame({stageId:st.id,difficulty:diff,mode,players:specs(coop)});
    const expected=coop?Math.round(st.startGold*.65):st.startGold;
    assert.equal(startingGold(st.id,coop),expected);assert.ok(s.players.every(p=>p.gold===expected));
  }
});
test('local2P wallets and tower/hero ownership remain independent after legal commands',()=>{
  const s=game('s1','hell',true),before=s.players.map(p=>p.gold);
  // Find a valid tile through the same command handler the game uses.
  outer:for(let y=0;y<14;y++)for(let x=0;x<24;x++){
    applyCommand(s,{t:'build',p:0,tower:'sungnyemun',x,y});if(s.towers.length)break outer;
  }
  assert.equal(s.towers.length,1);assert.ok(s.players[0].gold<before[0]);assert.equal(s.players[1].gold,before[1]);
  const tower=s.towers[0];applyCommand(s,{t:'sell',p:1,id:tower.id});assert.equal(s.towers.length,1);
  const hero=s.heroes[0],target=[hero.tx,hero.ty];applyCommand(s,{t:'move',p:1,h:0,x:1,y:1});assert.deepEqual([hero.tx,hero.ty],target);
});

class Element {
  constructor(tag){this.tagName=tag;this.children=[];this.attributes=new Map();this.style={};this.className='';this.value='';}
  append(...nodes){this.children.push(...nodes);}
  setAttribute(k,v){this.attributes.set(k,String(v));}
  getAttribute(k){return this.attributes.get(k);}
  addEventListener(){}
  get textContent(){return this.value+this.children.map(c=>c.textContent).join('');}
}
globalThis.Node=Element;
globalThis.document={createElement:tag=>new Element(tag),createTextNode:text=>Object.assign(new Element('#text'),{value:text})};
test('prebattle budget text matches actual wallets for every stage in solo and coop',()=>{
  for(const st of STAGES)for(const coop of [false,true]){
    const node=battleRules(st.id,'hell',coop,defaultProfile().towersUnlocked),s=game(st.id,'hell',coop);
    assert.equal(+node.getAttribute('data-starting-gold'),s.players[0].gold);
    assert.ok(node.textContent.includes(`${coop?'각자 ':''}시작 군자금 ${s.players[0].gold.toLocaleString('ko-KR')}냥`));
    assert.ok(node.textContent.includes('적장 ×1.6'));assert.ok(node.textContent.includes('8파부터 최대'));
    assert.equal(node.textContent.includes('협동: 적 체력 추가 ×1.1'),coop);
    const details=node.children.find(n=>n.tagName==='details');assert.equal(details.getAttribute('open'),undefined);
  }
});
test('difficulty hints use the real multipliers, lives and rewards',()=>{
  assert.equal(difficultyText('normal'),'적 체력 ×1 · 1영웅 솔로: 영웅 피해 ×1.5 · 민심 20 · 보상 ×1');
  assert.equal(difficultyText('hard'),'적 체력 ×1.3 · 민심 15 · 보상 ×1.6');
  assert.equal(difficultyText('hell'),'일반 병력 체력 ×1.3→1.6 (8파부터 최대) · 적장 ×1.6 · 민심 10 · 보상 ×2.4');
  assert.equal(difficultyText('hell',true),'일반 병력 체력 ×1.3→1.6 (8파부터 최대) · 적장 ×1.6 · 협동: 적 체력 추가 ×1.1 · 민심 10 · 보상 ×2.4');
});
test('stage hints reflect scheduled threats and the players unlocked defenses',()=>{
  for(const st of STAGES){
    const advice=stageAdvice(st.id,['hwaseong','cheomseong']);
    assert.ok(!advice.join().includes('석굴암'));assert.ok(!advice.join().includes('해인사'));
    const first=st.waves.findIndex(w=>parseWave(w).some(g=>ENEMIES[g.type].stealth))+1;
    if(first)assert.ok(advice.some(t=>t.startsWith(`${first}파의 은신`)));
  }
  assert.ok(stageAdvice('s25',Object.keys(defaultProfile().towers)).some(t=>t.includes('최종 적장')));
  assert.ok(stageAdvice('s25',[]).every(t=>!t.includes('첨성대의 탐지')));
});
test('existing profile levels, unlocks, coins, skins and settings survive save/load unchanged',()=>{
  const memory=new Map();globalThis.localStorage={getItem:k=>memory.get(k)??null,setItem:(k,v)=>memory.set(k,String(v))};
  const p=loadProfile();p.heroes.yi.lv=7;p.towers.sungnyemun.lv=20;p.coins=2134;p.settings.bgm=0;
  const before=JSON.parse(JSON.stringify(p));saveProfile();assert.deepEqual(loadProfile(),before);
  assert.equal(playerSpec(p,['yi'],[],'existing').towerLv.sungnyemun,20);
});
test('prepared progression uses economy-aware costs from attempt1 and documents bounded alternative tactics',()=>{
  for(const kind of ['solo','local'])for(const st of STAGES)for(let attempt=1;attempt<=12;attempt++){
    const policy=preparedStrategy(st,kind,attempt);assert.equal(policy.economyAware,true);assert.equal(policy.staggerBongsu,true);
    assert.ok(['A','alt'].includes(policy.branch));assert.ok(['cannon','focus'].includes(policy.upgradePolicy));
  }
  assert.equal(preparedStrategy(STAGE_BY_ID.s21,'solo',1).placement,'gate');
  assert.equal(preparedStrategy(STAGE_BY_ID.s25,'solo',1).placement,'final-entry');
});
test('prepared bots spend the real initial preparation and cannot claim an early-wave reward',()=>{
  const s=game('s1','normal'),commands=[],send=preparedSender({state:s,send:c=>commands.push(c)});
  send({t:'nextWave',p:0});send({t:'move',p:0,h:0,x:1,y:1});assert.equal(commands.length,1);
  for(let i=0;i<Math.floor(FIRST_PREP/DT)-1;i++)step(s);
  assert.equal(s.wave.n,0);step(s);step(s);assert.equal(s.wave.n,1);assert.equal(s.players[0].stats.earlyCalls,0);
  send({t:'nextWave',p:0});assert.equal(commands.at(-1).t,'nextWave');
});
fs.writeFileSync(new URL('../docs/OPENING_BALANCE_RUNTIME_VALIDATION.json',import.meta.url),JSON.stringify({generatedAt:new Date().toISOString(),tests:results.length,passed:true,results},null,2)+'\n');
