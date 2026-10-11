#!/usr/bin/env node
// Static game + two-player relay. No external runtime dependencies.
import http from 'node:http';
import crypto from 'node:crypto';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath,pathToFileURL } from 'node:url';
import { staticHandler } from './static.js';
import { RoomBroker } from './rooms.js';

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const GUID='258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
const MAX_PAYLOAD=2*1024*1024,MAX_BACKLOG=512*1024;

export function createRoomServer({root=ROOT,graceMs=30000,heartbeatMs=30000}={}){
  const server=http.createServer(staticHandler(root)),clients=new Set();
  function frame(c,op,payload){
    if(!c||c.socket.destroyed)return false;
    if(c.socket.writableLength>MAX_BACKLOG){c.socket.destroy();return false;}
    const len=payload.length;
    const head=Buffer.alloc(len<126?2:len<65536?4:10);head[0]=0x80|op;
    if(len<126)head[1]=len;else if(len<65536){head[1]=126;head.writeUInt16BE(len,2);}else{head[1]=127;head.writeBigUInt64BE(BigInt(len),2);}
    c.socket.write(Buffer.concat([head,payload]));return true;
  }
  const send=(c,obj)=>c?frame(c,1,Buffer.from(JSON.stringify(obj))):false;
  const broker=new RoomBroker(send,{graceMs});
  function message(c,payload){let msg;try{msg=JSON.parse(payload.toString('utf8'));}catch{return;}broker.message(c,msg);}
  function data(c,chunk){
    c.buf=Buffer.concat([c.buf,chunk]);
    while(c.buf.length>=2){
      const first=c.buf[0],second=c.buf[1],fin=!!(first&128),op=first&15;
      if((first&112)||!(second&128)||![0,1,8,9,10].includes(op)){c.socket.destroy();return;}
      let len=second&127,off=2;
      if(len===126){if(c.buf.length<4)return;len=c.buf.readUInt16BE(2);off=4;}
      else if(len===127){if(c.buf.length<10)return;const n=c.buf.readBigUInt64BE(2);if(n>BigInt(MAX_PAYLOAD)){c.socket.destroy();return;}len=Number(n);off=10;}
      if(len>MAX_PAYLOAD||(op>=8&&(!fin||len>125))){c.socket.destroy();return;}
      if(c.buf.length<off+4+len)return;
      const mask=c.buf.subarray(off,off+4);off+=4;
      const payload=Buffer.from(c.buf.subarray(off,off+len));for(let i=0;i<len;i++)payload[i]^=mask[i%4];
      c.buf=c.buf.subarray(off+len);
      if(op===8){frame(c,8,Buffer.alloc(0));c.socket.end();return;}
      if(op===9){frame(c,10,payload);continue;}
      if(op===10){c.alive=true;continue;}
      if((op===0&&!c.frag.length)||(op===1&&c.frag.length)){c.socket.destroy();return;}
      if(c.fragBytes+len>MAX_PAYLOAD){c.socket.destroy();return;}
      c.frag.push(payload);c.fragBytes+=len;
      if(fin){const full=Buffer.concat(c.frag,c.fragBytes);c.frag=[];c.fragBytes=0;message(c,full);}
    }
  }
  server.on('upgrade',(req,socket,head)=>{
    if((req.url||'').split('?')[0]!=='/ws'||req.headers.upgrade?.toLowerCase()!=='websocket'){socket.destroy();return;}
    if(req.headers.origin){try{if(new URL(req.headers.origin).host!==req.headers.host){socket.destroy();return;}}catch{socket.destroy();return;}}
    const key=req.headers['sec-websocket-key'];if(!key){socket.destroy();return;}
    const accept=crypto.createHash('sha1').update(key+GUID).digest('base64');
    socket.write('HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: '+accept+'\r\n\r\n');socket.setNoDelay(true);
    const c={socket,buf:Buffer.alloc(0),frag:[],fragBytes:0,room:null,role:null,alive:true};clients.add(c);
    socket.on('data',chunk=>data(c,chunk));socket.on('error',()=>socket.destroy());socket.on('close',()=>{clients.delete(c);broker.leave(c);});
    if(head.length)data(c,head);
  });
  const heartbeat=setInterval(()=>{for(const c of clients){if(!c.alive){c.socket.destroy();continue;}c.alive=false;frame(c,9,Buffer.alloc(0));}},heartbeatMs);heartbeat.unref();
  server.on('close',()=>{clearInterval(heartbeat);broker.destroy();});
  return{server,broker,clients,close(){for(const c of clients)c.socket.destroy();return new Promise(resolve=>server.close(resolve));}};
}

if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
  const PORT=+(process.env.PORT||8080),HOST=process.env.HOST||'127.0.0.1';
  const {server}=createRoomServer();server.listen(PORT,HOST,()=>{
    const port=server.address().port;console.log('\n  호국영웅전 서버 실행 중');console.log(`  이 컴퓨터:        http://localhost:${port}`);
    if(HOST==='0.0.0.0'||HOST==='::')for(const list of Object.values(os.networkInterfaces()))for(const a of list||[])if(a.family==='IPv4'&&!a.internal)console.log(`  같은 네트워크:    http://${a.address}:${port}`);
    console.log('');
  });
}
