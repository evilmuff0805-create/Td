// The same test runs against an isolated shipping package or an explicit public
// URL. Two sessions on one computer do not constitute a two-device/LTE test.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';
import { createRoomServer } from '../server/server.js';
import { Net } from '../src/net/net.js';
import { Session } from '../src/game/session.js';
const supplied=process.argv.find(x=>x.startsWith('--url='))?.slice(6);let service,base;
if(supplied){base=new URL(supplied);assert.ok(['https:','http:'].includes(base.protocol));assert.equal(base.username,'');assert.equal(base.password,'');}
else{service=createRoomServer({root:fileURLToPath(new URL('../dist/web/',import.meta.url)),publicOnly:true});await new Promise((resolve,reject)=>{service.server.once('error',reject);service.server.listen(0,'127.0.0.1',resolve);});base=new URL(`http://127.0.0.1:${service.server.address().port}`);}
const results=[],test=async(name,fn)=>{await fn();results.push({name,passed:true});console.log('✔ '+name);};
async function until(fn,label){const stop=Date.now()+10000;while(!fn()){if(Date.now()>stop)throw new Error('Timed out: '+label);await sleep(20);}}
const url=new URL('/ws',base);url.protocol=base.protocol==='https:'?'wss:':'ws:';
const a=new Net({url:url.href,connectTimeout:10000,retryDelays:[100,300,500]}),b=new Net({url:url.href,connectTimeout:10000,retryDelays:[100,300,500]});let host,guest;
try{
  await test('shipping entry, health, compression and server/source isolation over HTTP',async()=>{
    const health=await fetch(new URL('/_health',base));assert.equal(health.status,200);assert.deepEqual(await health.json(),{ok:true});
    const entry=await fetch(new URL('/',base));assert.equal(entry.status,200);assert.ok((await entry.text()).includes('assets/3d/app.js'));
    const script=await fetch(new URL('/assets/3d/app.js',base),{headers:{'accept-encoding':'gzip'}});assert.equal(script.status,200);assert.equal(script.headers.get('content-encoding'),'gzip');assert.ok((await script.text()).length>100000);
    for(const path of ['/server/server.js','/server/rooms.js','/src/main.js','/package.json','/release-manifest.json','/.git/config','/3d.html','/assets/3d/game.js','/dev/3d-performance-review.html']){const denied=await fetch(new URL(path,base));assert.ok([403,404].includes(denied.status),path+' must be private');}
  });
  await test('two actual WebSocket clients join a dedicated room and exchange a guest command',async()=>{
    const code=await a.create();await b.join(code);await until(()=>a.peer,'peer joined');
    a.send({t:'start',stageId:'s1',difficulty:'normal',seed:7});
    const specs=[{name:'공개 접속 검수 1P',heroes:['yi'],skills:['singijeon','bongsu'],towers:['sungnyemun']},{name:'공개 접속 검수 2P',heroes:['sejong'],skills:['singijeon','bongsu'],towers:['sungnyemun']}];
    host=new Session({kind:'host',stageId:'s1',difficulty:'normal',seed:7,specs,net:a});guest=new Session({kind:'guest',stageId:'s1',difficulty:'normal',net:b});
    host.beginSync();await until(()=>{guest.update(0);host.update(0);return guest.view.heroes.length===2&&!host.networkWaiting&&!guest.networkWaiting;},'initial hydration');
    guest.send({t:'move',p:1,h:1,x:12.5,y:7.5});await until(()=>host.state.cmds.some(c=>c.t==='move'),'guest command');
    host.update(.1);assert.equal(host.state.heroes[1].tx,12.5);assert.equal(host.state.heroes[1].ty,7.5);assert.equal(host.state.players[1].left,false);
  });
  await test('transport reconnect restores a paused battle without replaying old commands',async()=>{
    host.state.paused=true;let restored=0;b.on('reconnected',()=>restored++);b._breakSocket();
    await until(()=>restored===1,'socket resume');
    await until(()=>{guest.update(0);host.update(0);return !host.networkWaiting&&!guest.networkWaiting;},'rehydration ACK');
    assert.equal(host.state.paused,true);assert.equal(guest.view.heroes.length,2);assert.equal(host.state.players[1].left,false);assert.equal(host.state.cmds.length,0);
  });
  await test('sustained directional commands use host coordinates over the real connection',async()=>{
    host.state.paused=false;const h=host.state.heroes[1];let x=h.x;for(let i=0;i<12;i++){assert.equal(guest.send({t:'move',p:0,h:1,dx:1,dy:0,direct:true,x:-999,y:-999}),true);await until(()=>host.state.cmds.some(c=>c.direct),'direction command');host.update(.1);assert.ok(h.x>=x);x=h.x;}guest.send({t:'move',p:0,h:1,stop:true,x:-999,y:-999});await until(()=>host.state.cmds.some(c=>c.stop),'stop command');host.update(.1);assert.equal(h.tx,h.x);assert.equal(h.ty,h.y);
  });
  await test('host background waits for foreground snapshot and guest ACK',async()=>{
    host.setBackground(true);await until(()=>guest.hostBackground,'background notice');const tick=host.state.tick;assert.equal(guest.send({t:'nextWave',p:1}),false);host.update(.1);assert.equal(host.state.tick,tick);host.setBackground(false);await until(()=>{guest.update(0);host.update(0);return !host.networkWaiting&&!guest.networkWaiting;},'foreground hydration');assert.equal(host.state.paused,false);
  });
  await test('permanent guest departure stops the started room without takeover or rewards',async()=>{
    const assets=JSON.stringify({heroes:host.state.heroes.map(h=>h.owner),gold:host.state.players.map(p=>p.gold)}),tick=host.state.tick;b.close();await until(()=>host.interrupted,'permanent leave');host.update(.1);assert.equal(host.state.tick,tick);assert.equal(host.terminalConfirmed,false);assert.equal(JSON.stringify({heroes:host.state.heroes.map(h=>h.owner),gold:host.state.players.map(p=>p.gold)}),assets);
  });
  fs.writeFileSync(new URL(supplied?'../docs/PUBLIC_NETWORK_VALIDATION.json':'../docs/PUBLIC_PACKAGE_VALIDATION.json',import.meta.url),JSON.stringify({generatedAt:new Date().toISOString(),origin:base.origin,transport:base.protocol==='https:'?'HTTPS/WSS':'HTTP/WS',scope:supplied?'Two Node clients from this PC through the public service. Not two physical devices or LTE.':'Two actual loopback sockets against the isolated public shipping root. Not public WAN or physical devices.',tests:results.length,allPassed:true,results},null,2)+'\n');
}finally{host?.destroy();guest?.destroy();a.close();b.close();await service?.close();}
