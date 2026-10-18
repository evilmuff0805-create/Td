import {battleVersion} from '../src/data/deployment.js';
import {getMap,slotOccupant} from '../src/sim/map.js';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {Session} from '../src/game/session.js';
import {networkPick,validateBattleSetup} from '../src/game/battle-setup.js';
import {defaultProfile,loadProfile,saveProfile,playerSpec} from '../src/meta/profile.js';
import {HERO_ORDER} from '../src/data/heroes.js';
import {applyCommand,step} from '../src/sim/sim.js';
import {hurtHero} from '../src/sim/combat.js';
import {comboStatus} from '../src/sim/abilities.js';
import {SnapshotEncoder,applySnapshot,emptyView} from '../src/sim/snapshot.js';
import {GameUI} from '../src/ui/hud.js';
import {audio} from '../src/audio/audio.js';
import {RoomBroker} from '../server/rooms.js';
import {onlineFixture,FixtureWire} from './session-fixtures.mjs';

const results=[],test=(name,fn)=>{fn();results.push({name,passed:true});console.log('✔ '+name);};
const setup={kind:'solo',stageId:'s1',difficulty:'normal',seed:8,specs:[{heroes:['yi']}]};
const storage=globalThis.localStorage,memory=new Map();globalThis.localStorage={getItem:k=>memory.get(k)??null,setItem:(k,v)=>memory.set(k,String(v))};
try{
test('entry accepts exactly one hero per player and rejects local or malformed rosters',()=>{
  validateBattleSetup(setup);validateBattleSetup({...setup,kind:'host',specs:[{heroes:['yi']},{heroes:['sejong']}]});
  for(const bad of [{kind:'local'}, {stageId:'__proto__'}, {difficulty:'constructor'}, {specs:[]}, {specs:[{heroes:[]}]}, {specs:[{heroes:['yi','sejong']}]}, {specs:[{heroes:['__proto__']}]}, {kind:'host',specs:[{heroes:['yi']},{heroes:['yi']}]}])assert.throws(()=>new Session({...setup,...bad}));
});
test('received picks are checked before display, agree with spec and sanitize only valid data',()=>{
  const spec=playerSpec(defaultProfile(),['yi'],['singijeon','bongsu']),pick={...battleVersion(),hero:'yi',skills:spec.skills,name:'동료',ready:true,spec};
  assert.ok(networkPick(pick));
  for(const change of [{hero:'constructor'}, {hero:'sejong'}, {skills:['singijeon','bad']},{skills:['bongsu','singijeon']},{spec:{...spec,heroes:[]}},{spec:{...spec,heroes:['yi','sejong']}},{spec:{...spec,towers:['__proto__']}}])assert.equal(networkPick({...pick,...change}),null);
  const safe=networkPick({...pick,rank:Infinity,spec:{...spec,heroLv:{yi:99},towerLv:{sungnyemun:NaN},items:{insam:99},skins:{yi:'sejong_blue'}}});
  assert.equal(safe.spec.heroLv.yi,10);assert.equal(safe.rank,0);assert.equal(safe.spec.skins.yi,null);assert.equal(safe.spec.items.insam,2);
});
test('old two-hero saves normalize selection while currency, purchases and history survive',()=>{
  memory.clear();const p=loadProfile();p.coins=4321;p.jade=67;p.heroes.yi.lv=4;p.towers.sungnyemun.lv=12;p.skins={owned:['yi_white'],eq:{yi:'yi_white'}};p.stats.games=31;p.stats.combos=19;p.loadout.solo.heroes=['sejong','yi'];p.items.insam=5;saveProfile();const before=JSON.parse(JSON.stringify(p)),loaded=loadProfile();
  before.loadout.solo.heroes=['sejong'];assert.deepEqual(loaded,before);assert.ok(loaded.loadout.p2);
  for(const ids of [[],['bad','gwon','yi'],['__proto__','constructor',{},'sejong'],null,'yi']){const old={...before,loadout:{...before.loadout,solo:{...before.loadout.solo,heroes:ids}}};memory.set('hoguk.profile.v1',JSON.stringify(old));const next=loadProfile();assert.equal(next.loadout.solo.heroes.length,1);assert.ok(['yi','sejong'].includes(next.loadout.solo.heroes[0]));assert.equal(next.coins,4321);assert.equal(next.stats.games,31);}
});
test('all eight solo heroes cast, die, respawn and round-trip as a single hero',()=>{
  for(const id of HERO_ORDER){const s=new Session({...setup,specs:[{heroes:[id]}]});const h=s.state.heroes[0];h.skillCd=h.ultCd=0;s.send({t:'heroSkill',p:0,h:0,x:h.x+1,y:h.y});s.send({t:'heroUlt',p:0,h:0,x:h.x+1,y:h.y});s.update(.1);assert.equal(s.view.heroes.length,1);assert.equal(comboStatus(s.state).ok,false);h.buffs.invulnT=h.buffs.gwakT=0;hurtHero(s.state,h,h.maxHp*100);assert.ok(h.dead);h.respawn=.001;s.update(.1);assert.equal(h.dead,false);const view=emptyView({stageId:'s1',difficulty:'normal'});applySnapshot(view,JSON.parse(JSON.stringify(new SnapshotEncoder().encode(s.state,[]))));assert.equal(view.heroes.length,1);assert.equal(view.heroes[0].heroId,id);s.destroy();}
});
test('guest positions snap to approved slots and arbitrary legacy movement is rejected',()=>{
  for(const speed of [1,2,3]){const p=onlineFixture();p.host.beginSync();p.guest.update(0);const h=p.host.state.heroes[1],slot=getMap('s1').deploymentSlots.find(a=>!slotOccupant(p.host.state,a.id));p.host.state.speed=speed;
    const at={x:h.x,y:h.y};for(const direct of [false,true])p.guest.send({t:'move',p:0,h:1,x:-999,y:-999,dx:1,dy:0,direct});p.host.update(.1);assert.deepEqual({x:h.x,y:h.y},at);
    assert.equal(p.guest.relocateHero(1,slot.id),true);p.host.update(.1);p.host.beginSync();p.guest.update(0);assert.equal(h.deploymentSlotId,slot.id);assert.equal(p.guest.view.heroes[1].x,slot.cx);assert.equal(p.guest.view.heroes[1].y,slot.cy);p.destroy();
  }
});
test('host refuses foreign hero drops and nonfinite or old-coordinate movement',()=>{
  const p=onlineFixture(),h=p.host.state.heroes[0],at={x:h.x,y:h.y};
  p.guest.send({t:'relocate',p:0,h:0,slotId:getMap('s1').deploymentSlots[3].id,requestId:1,battleKey:p.host.state.battleKey});
  for(const dx of [NaN,Infinity,2,0,'1'])p.guest.send({t:'move',p:0,h:0,dx,dy:0,direct:true});p.host.update(.1);assert.deepEqual({x:h.x,y:h.y},at);assert.ok(!h.directMove);p.destroy();
});
test('host background freezes time and input; lost foreground notification heals through full sync',()=>{
  const p=onlineFixture([{heroes:['gwon']},{heroes:['sejong']}]);p.host.send({t:'move',p:0,h:0,dx:1,dy:0,direct:true});p.host.update(.1);p.host.setBackground(true);assert.ok(p.guest.hostBackground);const tick=p.host.state.tick,h=p.host.state.heroes[0],at={x:h.x,y:h.y};assert.ok(!h.directMove);assert.deepEqual(h.post,at);assert.equal(p.guest.send({t:'wave',p:1}),false);p.host.update(.1);assert.equal(p.host.state.tick,tick);
  p.a.fail=true;p.host.setBackground(false);assert.ok(p.guest.hostBackground);p.a.fail=false;p.host.beginSync();assert.equal(p.guest.hostBackground,false);p.guest.update(0,{waitingForRenderer:true});assert.ok(p.host.networkWaiting);p.guest.update(0);assert.equal(p.host.networkWaiting,false);p.host.update(.1);assert.deepEqual({x:h.x,y:h.y},at);p.destroy();
});
test('guest background delays art-ready ACK; manual pause survives recovery',()=>{
  const p=onlineFixture();p.host.setPaused(true);p.guest.setBackground(true);p.host.beginSync();p.guest.update(0);assert.ok(p.host.networkWaiting);p.guest.setBackground(false);p.guest.update(0);assert.equal(p.host.networkWaiting,false);assert.equal(p.host.state.paused,true);p.destroy();
});
test('stalled snapshots gate guest commands until full hydration succeeds',()=>{
  const p=onlineFixture();p.a.send({t:'snap',s:new SnapshotEncoder().encode(p.host.state,[])});p.guest.snapAt=performance.now()-2000;assert.ok(p.guest.snapshotStale);assert.equal(p.guest.send({t:'move',h:1,dx:1,dy:0,direct:true}),false);p.host.beginSync();p.guest.update(0);assert.equal(p.guest.networkWaiting,false);p.destroy();
});
test('permanent departure aborts without transferring heroes, structures or wallets',()=>{
  const p=onlineFixture();p.host.send({t:'build',p:0,tower:'sungnyemun',...getMap('s1').deploymentSlots[2]});p.guest.send({t:'build',p:1,tower:'sungnyemun',...getMap('s1').deploymentSlots[3]});p.host.update(.1);const before=JSON.stringify({heroes:p.host.state.heroes.map(h=>h.owner),towers:p.host.state.towers.map(t=>t.owner),gold:p.host.state.players.map(x=>x.gold)}),tick=p.host.state.tick;
  p.a.emit('peer-left');assert.ok(p.host.interrupted);assert.equal(p.host.send({t:'move',p:0,h:1,x:1,y:1}),false);p.host.update(.1);assert.equal(p.host.state.tick,tick);assert.equal(JSON.stringify({heroes:p.host.state.heroes.map(h=>h.owner),towers:p.host.state.towers.map(t=>t.owner),gold:p.host.state.players.map(x=>x.gold)}),before);p.destroy();
});
test('a direct sim leave aborts instead of making the other hero controllable',()=>{
  const p=onlineFixture(),s=p.host.state,h=s.heroes[1];applyCommand(s,{t:'leave',p:1});assert.ok(s.aborted);assert.equal(h.owner,1);assert.equal(GameUI.prototype.myHeroIdx.call({s:p.host,me:0}).length,1);assert.deepEqual(GameUI.prototype.myHeroIdx.call({s:p.host,me:1}),[]);const tick=s.tick;step(s);assert.equal(s.tick,tick);p.destroy();
});
function brokerPair(){const messages=[],broker=new RoomBroker((client,msg)=>{messages.push({client,msg});return true;}),host={},guest={};broker.message(host,{type:'create'});const code=host.room;broker.message(guest,{type:'join',code});broker.message(host,{type:'relay',data:{t:'start',stageId:'s1',difficulty:'normal'}});return{broker,host,guest,code,messages,finish(){broker.message(host,{type:'relay',data:{t:'finish',s:{res:{win:true},T:[]},stats:[{},{}]}});}};}
test('broker departure before finish rejects late victory; committed finish before departure remains',()=>{
  const a=brokerPair();a.broker.leave(a.guest,true);a.finish();assert.equal(a.broker.rooms.has(a.code),false);assert.ok(!a.messages.some(x=>x.msg.type==='end-cached'));a.broker.destroy();
  const b=brokerPair();b.finish();b.broker.leave(b.guest,true);assert.ok(b.messages.some(x=>x.msg.type==='end-cached'));assert.ok(b.broker.rooms.get(b.code).terminal);b.broker.destroy();
});
test('unconfirmed simulated result aborts; confirmed server results survive later peer-left',()=>{
  const a=onlineFixture();a.host.state.result={win:true};a.a.emit('peer-left');assert.ok(a.host.interrupted);assert.equal(a.host.terminalConfirmed,false);a.destroy();
  const b=onlineFixture();b.host.state.result={win:true};b.a.emit('end-cached');b.a.emit('peer-left');b.b.emit('end',{result:{win:true},stats:[{},{}]});b.b.emit('peer-left');assert.equal(b.host.interrupted,null);assert.equal(b.guest.interrupted,null);assert.ok(b.host.terminalConfirmed&&b.guest.terminalConfirmed);b.destroy();
});
test('HUD interrupts an already-ended animation exactly once and never applies a result',()=>{
  const p=onlineFixture();p.host.state.result={win:true};let aborted=0,rewards=0;const ui=Object.assign(Object.create(GameUI.prototype),{s:p.host,ended:true,pad:{cancel(){}},onInterrupted:()=>aborted++,onEnd:()=>rewards++});p.a.emit('peer-left');ui.frame(1);ui.frame(2);assert.equal(aborted,1);assert.equal(rewards,0);p.destroy();
});
test('finish waits for server acceptance, awards once, and cancels if departure wins the race',()=>{
  const old={setTimeout,clearTimeout,play:audio.play},timers=new Map();let seq=0;globalThis.setTimeout=fn=>{timers.set(++seq,fn);return seq;};globalThis.clearTimeout=id=>timers.delete(id);audio.play=()=>{};
  try{for(const confirm of [false,true]){const p=onlineFixture();p.host.state.result={win:true};let rewards=0,aborted=0;const ui=Object.assign(Object.create(GameUI.prototype),{s:p.host,me:0,onEnd:()=>rewards++,onInterrupted:()=>aborted++});ui.finish();if(confirm)p.a.emit('end-cached');else p.a.emit('peer-left');const callback=timers.get(ui.finishTimer);timers.delete(ui.finishTimer);callback();assert.equal(rewards,confirm?1:0);assert.equal(aborted,confirm?0:1);if(!confirm){ui.frame(1);assert.equal(aborted,1);}p.destroy();timers.clear();}}
  finally{globalThis.setTimeout=old.setTimeout;globalThis.clearTimeout=old.clearTimeout;audio.play=old.play;}
});
}finally{storage===undefined?delete globalThis.localStorage:globalThis.localStorage=storage;}
fs.writeFileSync('docs/ONLINE_TRANSITION_RUNTIME_VALIDATION.json',JSON.stringify({generatedAt:new Date().toISOString(),tests:results.length,allPassed:true,scope:'Real product Session solo/host/guest, broker ordering, synthetic HUD settlement callbacks and profile persistence. Loopback and public transport are validated separately; not physical-phone QA.',results},null,2)+'\n');
