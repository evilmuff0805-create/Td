import assert from 'node:assert/strict';
import fs from 'node:fs';
import {STAGES} from '../src/data/stages.js';
import {HERO_ORDER,HEROES} from '../src/data/heroes.js';
import {TOWERS} from '../src/data/towers.js';
import {getMap,slotOccupant,deploymentSlot,T_BUILD,nearestOnPath} from '../src/sim/map.js';
import {createGame,applyCommand,step} from '../src/sim/sim.js';
import {spawnEnemy,hurtHero,addSummon} from '../src/sim/combat.js';
import {castEquipSkill,castHeroSkill} from '../src/sim/abilities.js';
import {SnapshotEncoder,emptyView,applySnapshot} from '../src/sim/snapshot.js';
import {HeroDrag} from '../src/ui/hero-drag.js';
import {GameUI} from '../src/ui/hud.js';
import {Renderer3D} from '../src/3d/renderer.js';
import {RoomBroker} from '../server/rooms.js';
import {battleVersion} from '../src/data/deployment.js';
import {onlineFixture} from './session-fixtures.mjs';
const results=[],test=(name,fn)=>{fn();results.push({name,passed:true});console.log('✔ '+name);};
const mk=(ids=['yi'],stageId='s1')=>createGame({stageId,mode:ids.length===1?'solo':'online',seed:41,players:ids.map(id=>({heroes:[id],skills:['donguibogam','bongsu'],towers:Object.keys(TOWERS)}))});
const free=s=>getMap(s.stageId).deploymentSlots.filter(slot=>!slotOccupant(s,slot.id));
const move=(s,h,slotId,requestId=1,p=s.heroes[h].owner)=>applyCommand(s,{t:'relocate',p,h,slotId,requestId,battleKey:s.battleKey});

test('25 maps have 20 unique legal shared slots and distinct combo-ready hero starts',()=>{
  for(const st of STAGES){const s=mk(['gang','gwon'],st.id),map=getMap(st.id);assert.equal(map.deploymentSlots.length,20);assert.equal(new Set(map.deploymentSlots.map(p=>`${p.x},${p.y}`)).size,20);for(const p of map.deploymentSlots)assert.equal(map.grid[p.y*map.w+p.x],T_BUILD);assert.notEqual(s.heroes[0].deploymentSlotId,s.heroes[1].deploymentSlotId);assert.ok(Math.hypot(s.heroes[0].x-s.heroes[1].x,s.heroes[0].y-s.heroes[1].y)<=5);}
});
test('hero/building occupancy enforces N-H for solo and coop, including dead heroes',()=>{
  for(const ids of [['yi'],['gang','gwon']]){const s=mk(ids),pl=s.players[0];pl.gold=1e6;hurtHero(s,s.heroes[0],1e7);for(const slot of getMap(s.stageId).deploymentSlots)applyCommand(s,{t:'build',p:0,x:slot.x,y:slot.y,tower:'sungnyemun'});assert.equal(s.towers.length,20-ids.length);assert.equal(free(s).length,0);assert.equal(new Set([...s.heroes,...s.towers].map(x=>x.deploymentSlotId)).size,20);}
});
test('arbitrary coordinates, fractional positions, path and old move commands cannot bypass slots',()=>{
  const s=mk(),map=getMap(s.stageId),h=s.heroes[0],before=JSON.stringify(h),gold=s.players[0].gold;
  for(const command of [{t:'move',h:0,x:1,y:1},{t:'move',h:0,direct:true,dx:1,dy:0},{t:'build',x:5,y:4,tower:'sungnyemun'},{t:'build',x:1.5,y:1,tower:'sungnyemun'},{t:'build',x:NaN,y:1,tower:'sungnyemun'}])applyCommand(s,{p:0,...command});
  const ordinary=map.grid.findIndex((t,i)=>t===T_BUILD&&!map.deploymentSlots.some(p=>p.x===i%map.w&&p.y===Math.floor(i/map.w)));applyCommand(s,{t:'build',p:0,x:ordinary%map.w,y:Math.floor(ordinary/map.w),tower:'sungnyemun'});
  assert.equal(JSON.stringify(h),before);assert.equal(s.towers.length,0);assert.equal(s.players[0].gold,gold);
});
test('successful relocation atomically frees the origin and preserves all combat timers and health',()=>{
  const s=mk(),h=s.heroes[0],at=free(s)[0],origin=deploymentSlot(getMap(s.stageId),h.deploymentSlotId);h.hp=123;h.cd=.7;h.skillCd=6;h.hurtT=4;h.buffs.dmgT=3;s.wave.phase='spawn';
  move(s,0,at.id);assert.equal(h.deploymentSlotId,at.id);assert.equal(h.x,at.cx);assert.equal(h.y,at.cy);assert.equal(h.relocateCd,3);assert.equal(h.hp,123);assert.equal(h.cd,.7);assert.equal(h.skillCd,6);assert.equal(h.hurtT,4);assert.equal(h.buffs.dmgT,3);assert.equal(slotOccupant(s,origin.id),null);
  applyCommand(s,{t:'build',p:0,x:origin.x,y:origin.y,tower:'sungnyemun'});assert.equal(s.towers[0].deploymentSlotId,origin.id);
});
test('occupied, same-slot, foreign hero, wrong battle, stale and duplicate requests do not move twice',()=>{
  const s=mk(['yi','gwon']),h=s.heroes[0],first=free(s)[0];move(s,0,first.id,1);const original=JSON.stringify(h);move(s,0,free(s)[0].id,1);assert.equal(JSON.stringify(h),original);
  move(s,0,h.deploymentSlotId,2);assert.equal(s.players[0].deploymentResult.reason,'same');move(s,0,s.heroes[1].deploymentSlotId,3);assert.equal(s.players[0].deploymentResult.reason,'occupied');move(s,1,free(s)[0].id,4,0);assert.equal(s.players[0].deploymentResult.reason,'owner');
  move(s,0,free(s)[0].id,5);const last=h.deploymentSlotId;move(s,0,first.id,1);assert.equal(h.deploymentSlotId,last);
  applyCommand(s,{t:'relocate',p:0,h:0,slotId:first.id,requestId:6,battleKey:'old-battle'});assert.equal(s.players[0].deploymentSeq,5);
});
test('every prep phase permits relocation while combat, pause and death respect their own rules',()=>{
  const s=mk(),h=s.heroes[0];s.wave.phase='spawn';move(s,0,free(s)[0].id,1);move(s,0,free(s)[0].id,2);assert.equal(s.players[0].deploymentResult.reason,'cooldown');s.wave.phase='prep';s.wave.n=3;move(s,0,free(s)[0].id,3);assert.equal(h.relocateCd,0);s.paused=true;move(s,0,free(s)[0].id,4);assert.equal(s.players[0].deploymentResult.reason,'paused');s.paused=false;hurtHero(s,h,1e7);move(s,0,free(s)[0].id,5);assert.equal(s.players[0].deploymentResult.reason,'dead');
});
test('all eight heroes remain anchored, cast and naturally revive on their reserved slot',()=>{
  for(const id of HERO_ORDER){const s=mk([id]),h=s.heroes[0],at=deploymentSlot(getMap(s.stageId),h.deploymentSlotId);h.skillCd=h.ultCd=0;applyCommand(s,{t:'heroSkill',p:0,h:0,x:h.x+3,y:h.y});applyCommand(s,{t:'heroUlt',p:0,h:0,x:h.x+3,y:h.y});for(let i=0;i<70;i++)step(s);assert.equal(h.x,at.cx);assert.equal(h.y,at.cy);h.buffs.invulnT=h.buffs.gwakT=0;hurtHero(s,h,1e7);h.respawn=.001;step(s);assert.equal(h.dead,false);assert.equal(h.x,at.cx);assert.equal(h.y,at.cy);}
});
test('Donguibogam revives on the same reserved tile without releasing capacity',()=>{
  const s=mk(['gang']),h=s.heroes[0],id=h.deploymentSlotId;hurtHero(s,h,1e7);castEquipSkill(s,s.players[0],s.players[0].skills[0],h.x,h.y);assert.equal(h.dead,false);assert.equal(h.deploymentSlotId,id);assert.equal(slotOccupant(s,id),h);assert.equal(h.hp,h.maxHp);
});
test('new blade and spear attacks fly before impact; slow and star passive occur at impact',()=>{
  for(const id of ['gang','gwon']){const s=mk([id]),h=s.heroes[0],np=nearestOnPath(getMap(s.stageId),h.x,h.y),e=spawnEnemy(s,'ashigaru',np.path,1,np.d);e.hp=e.maxHp=10000;e.stunT=5;h.atkCount=3;step(s);assert.equal(e.hp,10000);assert.ok(s.projectiles.some(p=>p.kind===HEROES[id].attack));assert.ok(!s.projectiles.some(p=>p.kind==='star'));for(let i=0;i<40;i++)step(s);assert.ok(e.hp<10000);if(id==='gwon')assert.ok(e.slowT>0);else assert.ok(s.events.some(e=>e.k==='boom'&&e.kind==='star')||s.projectiles.some(p=>p.kind==='star'));}
});
test('a launched weapon wave survives its caster relocating and dying before impact',()=>{
  for(const id of ['gang','gwon']){const s=mk([id]),h=s.heroes[0],np=nearestOnPath(getMap(s.stageId),h.x,h.y),e=spawnEnemy(s,'ashigaru',np.path,1,np.d);e.hp=e.maxHp=10000;e.stunT=5;step(s);const shot=s.projectiles[0];assert.ok(shot);move(s,0,free(s).at(-1).id);hurtHero(s,h,1e7);for(let i=0;i<60;i++)step(s);assert.equal(h.dead,true);assert.ok(e.hp<10000);assert.ok(!s.projectiles.some(p=>p.id===shot.id));}
});
test('a dead homing target cannot transfer a fourth-shot star or damage to a different enemy',()=>{
  const s=mk(['gang']),h=s.heroes[0],np=nearestOnPath(getMap(s.stageId),h.x,h.y),e=spawnEnemy(s,'ashigaru',np.path,1,np.d);e.hp=e.maxHp=10000;e.stunT=5;h.atkCount=3;step(s);assert.equal(s.projectiles[0].starStrike,true);e.hp=0;hurtHero(s,h,1e7);const other=spawnEnemy(s,'ashigaru',np.path,1,np.d+.1);other.hp=other.maxHp=10000;other.stunT=5;for(let i=0;i<60;i++)step(s);assert.equal(other.hp,10000);assert.equal(s.projectiles.length,0);assert.ok(!s.events.some(e=>e.k==='boom'&&e.kind==='star'));
});
test('heroes no longer block roads, while summoned soldiers still block and fight',()=>{
  const s=mk(['gwon']),h=s.heroes[0],np=nearestOnPath(getMap(s.stageId),h.x,h.y),e=spawnEnemy(s,'ashigaru',np.path,1,np.d);step(s);assert.equal(e.blockedBy,0);const m=addSummon(s,{x:e.x,y:e.y,hp:1000,maxHp:1000});step(s);assert.equal(e.blockedBy,m.id);
});
test('Gang charge wave crosses targets once without moving the hero or damaging at cast',()=>{
  const s=mk(['gang']),h=s.heroes[0],np=nearestOnPath(getMap(s.stageId),h.x,h.y),e=spawnEnemy(s,'ashigaru',np.path,1,np.d);e.hp=e.maxHp=10000;e.stunT=5;const x=h.x,y=h.y;castHeroSkill(s,h,e.x,e.y);assert.equal(e.hp,10000);assert.equal(h.x,x);assert.equal(h.y,y);for(let i=0;i<45;i++)step(s);assert.equal(h.x,x);assert.equal(h.y,y);assert.ok(e.hp<10000);
});
test('a linear blade wave pierces two enemies and never damages either twice',()=>{
  const s=mk(['gang']),h=s.heroes[0],np=nearestOnPath(getMap(s.stageId),h.x,h.y);h.cd=999;
  const enemies=[0,.2].map(d=>{const e=spawnEnemy(s,'ashigaru',np.path,1,np.d+d);e.hp=e.maxHp=10000;e.stunT=5;return e;});
  castHeroSkill(s,h,enemies[0].x,enemies[0].y);const wave=s.projectiles[0];for(let i=0;i<50;i++)step(s);assert.deepEqual(new Set(wave.hitIds),new Set(enemies.map(e=>e.id)));assert.equal(wave.hitIds.length,2);const hp=enemies.map(e=>e.hp);assert.ok(hp.every(n=>n<10000));for(let i=0;i<30;i++)step(s);assert.deepEqual(enemies.map(e=>e.hp),hp);
});
test('snapshot carries slots, reservations, results, cooldowns and all three new projectile kinds',()=>{
  const s=mk(['gang','gwon']);s.wave.phase='spawn';move(s,0,free(s)[0].id);s.projectiles=['blade','spearWave','bladeWave'].map((kind,i)=>({id:100+i,kind,mode:i===2?'linear':'homing',x:1,y:2}));hurtHero(s,s.heroes[1],1e7);
  const snap=JSON.parse(JSON.stringify(new SnapshotEncoder().encode(s,[]))),v=emptyView({stageId:s.stageId});applySnapshot(v,snap);assert.deepEqual(v.heroes.map(h=>h.deploymentSlotId),s.heroes.map(h=>h.deploymentSlotId));assert.equal(v.heroes[1].dead,true);assert.equal(v.heroes[0].relocateCd,3);assert.equal(v.players[0].deploymentResult.requestId,1);assert.deepEqual(v.projectiles.map(p=>p.kind),['blade','spearWave','bladeWave']);assert.equal(v.projectiles[2].mode,'linear');assert.throws(()=>applySnapshot(v,{...snap,mapVersion:'old'}));
});
test('two clients racing for a shared tile get one approval with independent wallets',()=>{
  const p=onlineFixture();p.host.beginSync();p.guest.update(0);const at=free(p.host.state)[0],gold=p.host.state.players.map(p=>p.gold);assert.equal(p.host.relocateHero(0,at.id),true);assert.equal(p.guest.relocateHero(1,at.id),true);p.host.update(.1);assert.equal(p.host.state.heroes[0].deploymentSlotId,at.id);assert.notEqual(p.host.state.heroes[1].deploymentSlotId,at.id);p.host.beginSync();p.guest.update(0);assert.equal(p.host.deploymentPending,null);assert.equal(p.guest.deploymentPending,null);assert.equal(p.guest.lastDeploymentResult.reason,'occupied');assert.deepEqual(p.host.state.players.map(p=>p.gold),gold);p.destroy();
});
test('hero drop and building construction race atomically and rejected construction costs nothing',()=>{
  for(const heroFirst of [true,false]){const s=mk(['yi','sejong']),at=free(s)[0],gold=s.players[1].gold,build=()=>applyCommand(s,{t:'build',p:1,x:at.x,y:at.y,tower:'sungnyemun'});if(heroFirst){move(s,0,at.id);build();assert.equal(s.players[1].gold,gold);assert.equal(s.towers.length,0);}else{build();move(s,0,at.id);assert.equal(s.towers.length,1);assert.equal(s.players[0].deploymentResult.reason,'occupied');}}
});
test('post-send background/reconnect follows host approval and keeps request numbering',()=>{
  const p=onlineFixture();p.host.beginSync();p.guest.update(0);const at=free(p.host.state)[0];p.guest.relocateHero(1,at.id);p.guest.setBackground(true);p.host.update(.1);p.host.beginSync();assert.equal(p.guest.deploymentPending,null);assert.equal(p.guest.view.heroes[1].deploymentSlotId,at.id);p.guest.setBackground(false);p.guest.update(0);p.guest.relocateHero(1,free(p.host.state)[0].id);assert.equal(p.guest.deploymentPending.requestId,2);p.destroy();
});
test('full sync settles queued drops before the guest resolves approval, with no simulation tick',()=>{
  const p=onlineFixture();p.host.beginSync();p.guest.update(0);const at=free(p.host.state)[0],tick=p.host.state.tick;
  p.guest.relocateHero(1,at.id);assert.equal(p.host.state.cmds.length,1);p.host.beginSync();
  assert.equal(p.host.state.tick,tick);assert.equal(p.host.state.cmds.length,0);assert.equal(p.guest.deploymentPending,null);assert.equal(p.guest.lastDeploymentResult.ok,true);assert.equal(p.guest.view.heroes[1].deploymentSlotId,at.id);
  p.guest.update(0);p.host.update(.1);assert.equal(p.host.state.heroes[1].deploymentSlotId,at.id);assert.equal(p.host.state.players[1].deploymentSeq,1);p.destroy();
});
test('drag controller commits only a threshold-crossing valid drop, never changes state on cancellation',()=>{
  const drops=[],previews=[],drag=new HeroDrag({onDrop:(h,id)=>drops.push([h,id]),onPreview:d=>previews.push(d.slot.id)}),event=(x,y,id=7)=>({pointerId:id,clientX:x,clientY:y});
  drag.begin(0,event(10,10));drag.move(event(12,12),{id:'a'},true);assert.equal(drag.end(event(12,12)).active,false);assert.equal(drops.length,0);
  drag.begin(0,event(10,10));drag.move(event(40,40),{id:'a'},true);drag.cancel();assert.equal(drops.length,0);
  drag.begin(0,event(10,10));drag.move(event(40,40),{id:'a'},false);drag.end(event(40,40));assert.equal(drops.length,0);
  drag.begin(0,event(10,10));drag.move(event(40,40),{id:'b'},true);assert.equal(drag.end(event(40,40,8)),null);drag.end(event(40,40));assert.deepEqual(drops,[[0,'b']]);assert.ok(previews.length>=3);
});
test('room admission rejects missing/old rules and admits exactly matching clients',()=>{
  const messages=[],broker=new RoomBroker((c,m)=>messages.push(m),{version:battleVersion()}),host={};broker.message(host,{type:'create'});assert.equal(messages.at(-1).type,'error');broker.message(host,{type:'create',...battleVersion()});assert.ok(host.room);const guest={};broker.message(guest,{type:'join',code:host.room,...battleVersion(),mapVersion:'old'});assert.equal(guest.room,undefined);broker.message(guest,{type:'join',code:host.room,...battleVersion()});assert.equal(guest.room,host.room);broker.destroy();
});
test('overlapping expanded tile targets resolve to the nearest centre and keyboard keeps its focused tile',()=>{
  const a={id:'a',cx:10,cy:10},b={id:'b',cx:11,cy:10},r={canvas:{getBoundingClientRect:()=>({left:100,top:80})},sites:[a,b],screenPoint:x=>({x:x===10?40:60,y:50,visible:true})};
  assert.equal(Renderer3D.prototype.buildSiteAt.call(r,{detail:1,clientX:141,clientY:130},b),a);
  assert.equal(Renderer3D.prototype.buildSiteAt.call(r,{detail:1,clientX:159,clientY:130},a),b);
  assert.equal(Renderer3D.prototype.buildSiteAt.call(r,{detail:0},b),b);
});
test('pointer capture cannot drop onto a tile behind a HUD overlay',()=>{
  const previous=globalThis.document,slot={id:'a',cx:1,cy:1};
  const cv={getBoundingClientRect:()=>({left:0,top:0,right:200,bottom:200})};
  const ui={cv,is3d:true,map:{deploymentSlots:[slot]},renderer:{screenPoint:()=>({x:100,y:100,visible:true})}};
  try{globalThis.document={elementFromPoint:()=>({closest:()=>null})};assert.equal(GameUI.prototype.slotAtPointer.call(ui,{clientX:100,clientY:100}),null);globalThis.document.elementFromPoint=()=>cv;assert.equal(GameUI.prototype.slotAtPointer.call(ui,{clientX:100,clientY:100}),slot);}finally{if(previous===undefined)delete globalThis.document;else globalThis.document=previous;}
});
fs.writeFileSync('docs/TILE_BOARD_RUNTIME_VALIDATION.json',JSON.stringify({generatedAt:new Date().toISOString(),tests:results.length,allPassed:true,scope:'Actual tile simulation, Session host/guest, snapshot and drag-controller cases. Browser and physical-device checks are separate.',results},null,2)+'\n');
