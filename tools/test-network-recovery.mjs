import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import tcp from 'node:net';
import { RoomBroker } from '../server/rooms.js';
import { createRoomServer } from '../server/server.js';
import { Net } from '../src/net/net.js';
import { Session } from '../src/game/session.js';

const results=[];
async function test(name,fn){await fn();results.push({name,passed:true});console.log('✔ '+name);}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function until(fn,message='condition',ms=3000){const end=Date.now()+ms;while(!fn()){if(Date.now()>end)throw new Error('Timed out: '+message);await sleep(5);}}
function brokerFixture(terminalMs=100){
  let now=1000;const timers=new Set(),messages=[];
  const broker=new RoomBroker((client,msg)=>{if(client)messages.push({client,msg});return !!client;},{graceMs:100,terminalMs,now:()=>now,schedule:(fn,ms)=>{const timer={fn,at:now+ms};timers.add(timer);return timer;},cancel:t=>timers.delete(t)});
  const host={},guest={};broker.message(host,{type:'create'});const code=host.room;broker.message(guest,{type:'join',code});
  return {broker,host,guest,code,messages,room:broker.rooms.get(code),advance(ms){now+=ms;for(const timer of [...timers])if(timer.at<=now){timers.delete(timer);timer.fn();}}};
}
await test('unexpected disconnect reserves its slot; explicit leave releases immediately',()=>{
  const f=brokerFixture();f.broker.leave(f.guest);assert.equal(f.room.guest.client,null);assert.equal(f.messages.at(-1).msg.type,'peer-reconnecting');
  f.broker.message({},{type:'join',code:f.code});assert.equal(f.messages.at(-1).msg.type,'error');
  f.advance(99);assert.ok(f.room.guest);f.advance(1);assert.equal(f.room.guest,null);assert.equal(f.messages.at(-1).msg.type,'peer-left');
  const g={};f.broker.message(g,{type:'join',code:f.code});f.broker.leave(g,true);assert.equal(f.room.guest,null);f.broker.destroy();
});
await test('secret resume replaces a blackholed socket and its late close cannot evict replacement',()=>{
  const f=brokerFixture(),token=f.room.guest.token;let destroyed=false;f.guest.socket={destroy(){destroyed=true;}};
  const next={};f.broker.message(next,{type:'resume',code:f.code,role:'guest',token});assert.ok(destroyed);assert.equal(f.room.guest.client,next);
  f.broker.leave(f.guest);f.advance(1000);assert.equal(f.room.guest.client,next);f.broker.destroy();
});
await test('wrong, malformed and expired credentials cannot recover a room',()=>{
  for(const token of ['🙂','0'.repeat(64),{},null]){const f=brokerFixture();f.broker.message({},{type:'resume',code:f.code,role:'guest',token});assert.equal(f.messages.at(-1).msg.type,'error');assert.equal(f.room.guest.client,f.guest);f.broker.destroy();}
  const f=brokerFixture(),token=f.room.guest.token;f.broker.leave(f.guest);f.advance(100);f.broker.message({},{type:'resume',code:f.code,role:'guest',token});assert.equal(f.messages.at(-1).msg.type,'error');f.broker.destroy();
});
await test('started rooms reject fresh replacements and replay start before restoration to a resumed guest',()=>{
  const f=brokerFixture(),start={t:'start',stageId:'s1',difficulty:'normal',seed:3},token=f.room.guest.token;
  f.broker.message(f.host,{type:'relay',data:start});f.broker.leave(f.guest);const next={};f.messages.length=0;
  f.broker.message(next,{type:'resume',code:f.code,role:'guest',token});
  assert.deepEqual(f.messages.map(x=>x.msg.type==='relay'?x.msg.data.t:x.msg.type),['resumed','start','peer-restored']);
  f.broker.leave(next,true);f.broker.message({},{type:'join',code:f.code});assert.equal(f.messages.at(-1).msg.type,'error');f.broker.destroy();
});
await test('guest cannot forge host start, configuration, snapshots or terminal results',()=>{
  const f=brokerFixture();f.messages.length=0;
  for(const t of ['start','cfg','snap','sync-state','finish','end','host-background'])f.broker.message(f.guest,{type:'relay',data:{t,s:{res:{win:true},T:[]}}});
  assert.equal(f.messages.length,0);assert.equal(f.room.started,false);assert.equal(f.room.terminal,null);f.broker.destroy();
});
await test('atomic final result is acknowledged, replayed after host cleanup, and expires',()=>{
  const f=brokerFixture(),token=f.room.guest.token,s={res:{win:true},T:[]},stats=[{kills:7},{kills:9}];
  f.broker.leave(f.guest);f.messages.length=0;f.broker.message(f.host,{type:'relay',data:{t:'finish',s,stats}});
  assert.equal(f.messages.at(-1).msg.type,'end-cached');f.broker.leave(f.host,true);assert.ok(f.broker.rooms.has(f.code));
  const next={};f.messages.length=0;f.broker.message(next,{type:'resume',code:f.code,role:'guest',token});
  assert.deepEqual(f.messages.map(x=>x.msg.type==='relay'?x.msg.data.t:x.msg.type),['resumed','snap','end']);assert.deepEqual(f.messages.at(-1).msg.data.stats,stats);
  f.advance(100);assert.equal(f.broker.rooms.size,0);f.broker.destroy();
});
await test('terminal cache cancels older disconnect timers and retains guest credentials for its full lifetime',()=>{
  const f=brokerFixture(200),token=f.room.guest.token;f.broker.leave(f.guest);
  f.broker.message(f.host,{type:'relay',data:{t:'finish',s:{res:{win:true},T:[]},stats:[{},{}]}});f.broker.leave(f.host,true);f.advance(150);
  assert.ok(f.room.guest);const next={};f.broker.message(next,{type:'resume',code:f.code,role:'guest',token});assert.equal(f.room.guest.client,next);f.advance(50);assert.equal(f.broker.rooms.size,0);f.broker.destroy();
});

const specs=[{name:'1P',heroes:['yi'],skills:['singijeon','bongsu'],towers:['sungnyemun']},{name:'2P',heroes:['sejong'],skills:['singijeon','bongsu'],towers:['sungnyemun']}];
class Wire {
  constructor(){this.handlers=new Map();this.connected=true;this.peer=true;this.sent=[];}
  on(t,fn){if(!this.handlers.has(t))this.handlers.set(t,new Set());const group=this.handlers.get(t);group.add(fn);return()=>group.delete(fn);}
  emit(t,m={}){for(const fn of [...(this.handlers.get(t)||[])])fn(m);}
  send(m){if(this.fail)return false;this.sent.push(m);queueMicrotask(()=>this.other?.emit(m.t,m));return true;}
}
function pair(){const a=new Wire(),b=new Wire();a.other=b;b.other=a;const host=new Session({kind:'host',stageId:'s1',difficulty:'normal',seed:7,specs,net:a}),guest=new Session({kind:'guest',stageId:'s1',difficulty:'normal',net:b});return {a,b,host,guest};}
await test('restored state freezes host until guest snapshot and art are both ready, without replaying input',async()=>{
  const p=pair();p.a.peerReconnecting=true;p.a.emit('peer-reconnecting');const tick=p.host.state.tick;
  assert.equal(p.host.send({t:'wave',p:0}),false);p.host.update(.1);assert.equal(p.host.state.tick,tick);
  p.a.peerReconnecting=false;p.a.emit('peer-restored');await sleep(0);assert.ok(p.guest.networkWaiting);assert.ok(Array.isArray(p.a.sent.at(-1).s.T));
  p.guest.update(.1,{waitingForRenderer:true});p.host.update(.1);assert.ok(p.host.networkWaiting);assert.equal(p.host.state.tick,tick);
  p.guest.update(0,{waitingForRenderer:false});await sleep(0);assert.equal(p.host.networkWaiting,false);assert.equal(p.guest.networkWaiting,false);
  p.host.update(.1);assert.ok(p.host.state.tick>tick);assert.equal(p.host.state.wave.n,0);p.host.destroy();p.guest.destroy();
});
await test('full restoration clears stale towers and paused state remains user-controlled',async()=>{
  const p=pair();p.host.state.paused=true;p.guest.view.towers=[{id:999}];p.host.beginSync();await sleep(0);
  assert.deepEqual(p.guest.view.towers,[]);p.guest.update(0);await sleep(0);p.host.update(.1);assert.equal(p.host.state.paused,true);assert.equal(p.host.state.tick,0);p.host.destroy();p.guest.destroy();
});
await test('overlapping sync requests reject an old ACK and complete on the next guest frame',async()=>{
  const p=pair();p.host.beginSync();await sleep(0);
  const first=p.guest.guestSyncId;p.guest.update(0);p.host.beginSync();
  const latest=p.host.syncPacket.id;assert.ok(latest>first);await sleep(0);
  assert.equal(p.host.networkWaiting,true);assert.equal(p.guest.guestSyncId,latest);
  p.guest.update(0);await sleep(0);
  assert.equal(p.host.networkWaiting,false);assert.equal(p.guest.networkWaiting,false);
  p.host.destroy();p.guest.destroy();
});
await test('host restored after permanent departure aborts without transfer or waiting for ACK',()=>{
  const p=pair(),assets=JSON.stringify({owners:p.host.state.heroes.map(h=>h.owner),gold:p.host.state.players.map(x=>x.gold)});p.a.peer=false;p.a.emit('reconnected');assert.ok(p.host.interrupted);const tick=p.host.state.tick;p.host.update(.1);assert.equal(p.host.state.tick,tick);assert.equal(JSON.stringify({owners:p.host.state.heroes.map(h=>h.owner),gold:p.host.state.players.map(x=>x.gold)}),assets);p.host.destroy();p.guest.destroy();
});
await test('permanent guest departure after simulated result but before server acceptance aborts',()=>{
  const p=pair();p.host.state.result={win:true,stars:3};p.a.emit('peer-left');assert.ok(p.host.interrupted);assert.equal(p.host.terminalConfirmed,false);p.host.destroy();p.guest.destroy();
});
await test('failed snapshot sends force next full tower state; result retries preserve full terminal data',()=>{
  const p=pair();p.a.fail=true;p.host.lastSnap=-1000;p.host.update(0);assert.equal(p.host.encoder.towerSig,null);
  p.host.state.result={win:true,stars:3,wavesCleared:12};p.host.announceEnd();assert.equal(p.host.terminalCached,false);
  p.a.fail=false;p.host.lastEnd=-1000;p.host.update(0);const finish=p.a.sent.at(-1);assert.equal(finish.t,'finish');assert.ok(Array.isArray(finish.s.T));assert.equal(finish.stats.length,2);
  p.a.emit('end-cached');assert.equal(p.host.terminalCached,true);const n=p.a.sent.length;p.host.update(0);assert.equal(p.a.sent.length,n);p.host.destroy();p.guest.destroy();
});

const service=createRoomServer({graceMs:1200,heartbeatMs:10000});
await new Promise((resolve,reject)=>{service.server.once('error',reject);service.server.listen(0,'127.0.0.1',resolve);});
const url=`ws://127.0.0.1:${service.server.address().port}/ws`,nets=[];
const make=(opts={})=>{const net=new Net({url,connectTimeout:250,retryDelays:[10,20,30],heartbeatMs:30,staleMs:400,...opts});nets.push(net);return net;};
async function onlinePair(){const host=make(),code=await host.create(),guest=make();await guest.join(code);await until(()=>host.peer);return{host,guest,code};}
try{
  await test('real WebSocket guest and host recover in either order with hydration ACK',async()=>{
    for(const order of ['guest','host','both']){
      const p=await onlinePair();p.host.send({t:'start',stageId:'s1',difficulty:'normal',seed:7});
      const host=new Session({kind:'host',stageId:'s1',difficulty:'normal',seed:7,specs,net:p.host}),guest=new Session({kind:'guest',stageId:'s1',difficulty:'normal',net:p.guest});
      const room=service.broker.rooms.get(p.code);for(const role of order==='both'?['host','guest']:[order])room[role].client.socket.destroy();
      await until(()=>host.networkWaiting,'temporary disconnect gate');const tick=host.state.tick;
      await until(()=>guest.guestSyncId!==null,'restored full snapshot');guest.update(.1,{waitingForRenderer:true});host.update(.1);assert.equal(host.state.tick,tick);assert.ok(host.networkWaiting);
      // A restore notification and the guest's explicit sync may produce two
      // snapshots. Keep pumping the real RAF boundary so a later id is ACKed;
      // accepting an older ACK merely to satisfy this test would be unsafe.
      await until(()=>{guest.update(0);host.update(0);return !host.networkWaiting&&!guest.networkWaiting;},'latest snapshot ACK ('+order+')');
      assert.equal(host.state.players[1].left,false);assert.equal(guest.view.heroes.length,2);assert.deepEqual(guest.view.towers,[]);
      host.destroy();guest.destroy();p.host.close();p.guest.close();
    }
  });
  await test('accepted battle start is replayed after loss before lobby receipt',async()=>{
    const p=await onlinePair(),room=service.broker.rooms.get(p.code);const original=room.guest.client.socket.write.bind(room.guest.client.socket);
    // Drop only the server's start frame, as a transport fault between send and receipt.
    let dropped=false;room.guest.client.socket.write=(chunk,...args)=>{if(!dropped&&chunk.includes(Buffer.from('"t":"start"'))){dropped=true;queueMicrotask(()=>room.guest.client.socket.destroy());return true;}return original(chunk,...args);};
    let starts=0;p.guest.on('start',()=>starts++);p.host.send({t:'start',stageId:'s1',seed:7});await until(()=>starts===1,'start replay');assert.equal(dropped,true);p.host.close();p.guest.close();
  });
  await test('real atomic terminal cache restores result and stats after host closes',async()=>{
    const p=await onlinePair();let result,stats;p.guest.on('snap',m=>result=m.s.res);p.guest.on('end',m=>stats=m.stats);
    const room=service.broker.rooms.get(p.code);room.guest.client.socket.destroy();await until(()=>p.host.peerReconnecting);
    const session=new Session({kind:'host',stageId:'s1',difficulty:'normal',seed:7,specs,net:p.host});session.state.result={win:true,stars:3,wavesCleared:12};session.announceEnd();
    await until(()=>session.terminalCached,'terminal ACK');p.host.close();
    await until(()=>result&&stats,'terminal replay');assert.equal(result.win,true);assert.equal(stats.length,2);session.destroy();p.guest.close();
  });
  await test('permanent expiry emits once and never renews the reconnect deadline',async()=>{
    let clock=100;const p=await onlinePair();p.guest.now=()=>clock;p.guest.retryDelays=[10];p.guest.graceMs=100;let closed=0;p.guest.on('close',()=>closed++);
    p.guest.socketFactory=()=>{throw new Error('offline');};service.broker.rooms.get(p.code).guest.client.socket.destroy();await until(()=>p.guest.reconnecting);const deadline=p.guest.retryDeadline;clock+=101;
    await until(()=>closed===1);assert.equal(p.guest.retryDeadline,deadline);assert.equal(p.guest.token,null);await sleep(30);assert.equal(closed,1);p.host.close();p.guest.close();
  });
  await test('backpressure drops unsafe queued commands and close cancels reconnect work',async()=>{
    const p=await onlinePair();const ws=p.guest.ws;Object.defineProperty(ws,'bufferedAmount',{value:600*1024});assert.equal(p.guest.send({t:'cmd',c:{t:'build'}}),false);assert.equal(p.guest.reconnecting,true);
    p.guest.close();await p.guest.reconnectPromise;assert.equal(p.guest.closed,true);assert.equal(p.guest.ws,null);p.host.close();
  });
  await test('closing during a pending connect rejects promptly and releases the reconnect promise',async()=>{
    const net=make({socketFactory:()=>({readyState:0,close(){}}),connectTimeout:1000});
    let cancelled=false;const pending=net.connect().catch(()=>cancelled=true);net.close();await pending;assert.equal(cancelled,true);assert.equal(net.cancelOpen,null);
  });
  await test('app heartbeat detects silent transport loss even when TCP is still open',async()=>{
    const p=await onlinePair();p.guest.staleMs=60;let restored=0;p.guest.on('reconnected',()=>restored++);
    const old=p.guest.ws;old.onmessage=()=>{};await until(()=>restored===1,'stale heartbeat recovery');assert.notEqual(p.guest.ws,old);p.host.close();p.guest.close();
  });
  function masked(op,len,fin=true){const header=Buffer.alloc(len<126?6:14);header[0]=(fin?128:0)|op;header[1]=128|(len<126?len:127);if(len>=126)header.writeBigUInt64BE(BigInt(len),2);return Buffer.concat([header,Buffer.alloc(len)]);}
  async function rawCase(frames){
    const socket=tcp.createConnection(service.server.address().port,'127.0.0.1');let headers=false,closed=false;socket.on('error',()=>{});socket.on('close',()=>closed=true);
    socket.on('data',buf=>{if(!headers&&buf.includes(Buffer.from('101 Switching'))){headers=true;for(const frame of frames)socket.write(frame);}});
    await new Promise(r=>socket.once('connect',r));socket.write(`GET /ws HTTP/1.1\r\nHost: 127.0.0.1:${service.server.address().port}\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\r\nSec-WebSocket-Version: 13\r\n\r\n`);
    try{await until(()=>closed,'protocol close');assert.ok(headers);}finally{socket.destroy();}
  }
  await test('WebSocket parser rejects unmasked and orphan continuation messages',async()=>{await rawCase([Buffer.from([129,0])]);await rawCase([masked(0,0)]);});
  await test('WebSocket parser caps aggregate fragmented payload and rejects oversized controls',async()=>{await rawCase([masked(1,1100000,false),masked(0,1100000)]);await rawCase([masked(9,126)]);});
}finally{for(const net of nets)net.close();await service.close();}
const report={date:'2026-10-11',scope:'Pure room/session cases and actual loopback WebSocket transport faults; not an external-network two-device test.',tests:results.length,allPassed:true,results};
await fs.writeFile(new URL('../docs/NETWORK_RECOVERY_VALIDATION.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
