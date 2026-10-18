import crypto from 'node:crypto';

const CHARS='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
export class RoomBroker {
  constructor(send,{graceMs=30000,terminalMs=graceMs+30000,now=Date.now,schedule=setTimeout,cancel=clearTimeout}={}){
    this.rooms=new Map();this.send=send;this.graceMs=graceMs;this.terminalMs=terminalMs;this.now=now;this.schedule=schedule;this.cancel=cancel;
  }
  newCode(){let code;do{code=Array.from({length:4},()=>CHARS[crypto.randomInt(CHARS.length)]).join('');}while(this.rooms.has(code));return code;}
  slot(client){return{client,token:crypto.randomBytes(32).toString('hex'),until:0,timer:null};}
  attach(room,role,client){const slot=room[role];this.cancel(slot.timer);slot.timer=null;slot.until=0;slot.client=client;client.room=room.code;client.role=role;}
  other(room,role){return room[role==='host'?'guest':'host'];}
  error(client,msg){this.send(client,{type:'error',msg});}
  credentials(room,role,type){const peer=this.other(room,role);return{type,code:room.code,role,token:room[role].token,graceMs:this.graceMs,peer:!!peer?.client,peerReconnecting:!!peer&&!peer.client&&!room.terminal,remainingMs:peer?.until?Math.max(0,peer.until-this.now()):0,terminal:!!room.terminal};}
  drop(room){if(this.rooms.get(room.code)!==room)return;this.rooms.delete(room.code);this.cancel(room.terminalTimer);for(const slot of [room.host,room.guest])if(slot){this.cancel(slot.timer);if(slot.client){slot.client.room=null;slot.client.role=null;}}}
  finalTo(room,client){if(room.terminal&&client){this.send(client,{type:'relay',data:room.terminal.snap});this.send(client,{type:'relay',data:room.terminal.end});}}
  leave(client,intentional=false){
    const room=this.rooms.get(client.room),role=client.role,slot=room?.[role];
    client.room=null;client.role=null;
    if(!room||slot?.client!==client)return;
    slot.client=null;
    if(room.terminal){
      if(role==='guest'&&intentional){room.guest=null;this.cancel(slot.timer);if(!room.host.client)this.drop(room);}
      return;
    }
    if(intentional){this.expire(room,role,slot);return;}
    slot.until=this.now()+this.graceMs;
    slot.timer=this.schedule(()=>this.expire(room,role,slot),this.graceMs);slot.timer?.unref?.();
    this.send(this.other(room,role)?.client,{type:'peer-reconnecting',remainingMs:this.graceMs,role});
  }
  expire(room,role,slot){
    if(this.rooms.get(room.code)!==room||room[role]!==slot||slot.client)return;
    this.cancel(slot.timer);slot.timer=null;
    const peer=this.other(room,role)?.client;
    this.send(peer,{type:'peer-left'});
    // A permanent departure closes a started battle before any later finish.
    if(room.started){this.drop(room);return;}
    if(role==='host')this.drop(room);else{room.guest=null;if(!room.host.client)this.drop(room);}
  }
  message(client,msg){
    if(!msg||typeof msg!=='object')return;
    if(msg.type==='ping'){this.send(client,{type:'pong',at:msg.at});return;}
    if(msg.type==='leave'){this.leave(client,true);return;}
    if(msg.type==='create'){
      this.leave(client,true);const room={code:this.newCode(),host:this.slot(client),guest:null,started:false,lastSnap:null,terminal:null};this.rooms.set(room.code,room);this.attach(room,'host',client);this.send(client,this.credentials(room,'host','created'));return;
    }
    if(msg.type==='join'){
      const room=this.rooms.get(String(msg.code||'').toUpperCase());
      if(!room)return this.error(client,'방을 찾을 수 없습니다. 코드를 확인하세요.');
      if(room.started)return this.error(client,'이미 출전한 방입니다. 새 방에서 함께 준비하세요.');
      if(room.guest)return this.error(client,'방이 가득 찼거나 동료가 재접속 중입니다.');
      this.leave(client,true);room.guest=this.slot(client);this.attach(room,'guest',client);this.send(client,this.credentials(room,'guest','joined'));this.send(room.host.client,{type:'peer-joined'});return;
    }
    if(msg.type==='resume'){
      const room=this.rooms.get(String(msg.code||'').toUpperCase()),role=msg.role;
      const slot=role==='host'||role==='guest'?room?.[role]:null,token=typeof msg.token==='string'?msg.token:'';
      if(!slot||!/^[0-9a-f]{64}$/.test(token)||!crypto.timingSafeEqual(Buffer.from(token),Buffer.from(slot.token))||(!slot.client&&!room.terminal&&slot.until<=this.now()))return this.error(client,'재접속 시간이 끝났거나 전장이 종료됐습니다.');
      // A blackholed TCP connection can outlive its tab's stale-connection
      // detector. The secret credential replaces it; its late close is inert.
      if(slot.client===client){this.send(client,this.credentials(room,role,'resumed'));return;}
      if(slot.client){const old=slot.client;old.room=null;old.role=null;slot.client=null;old.socket?.destroy();}
      this.leave(client,true);this.attach(room,role,client);this.send(client,this.credentials(room,role,'resumed'));
      if(role==='guest'&&room.start&&!room.terminal)this.send(client,{type:'relay',data:room.start});
      this.send(this.other(room,role)?.client,{type:'peer-restored',role});this.finalTo(room,client);return;
    }
    if(msg.type!=='relay')return;
    const room=this.rooms.get(client.room),role=client.role;
    if(!room||room[role]?.client!==client||!msg.data||typeof msg.data!=='object')return;
    const type=msg.data.t;
    if(role==='guest'&&['start','cfg','snap','end','finish','sync-state','host-background'].includes(type))return;
    if(room.terminal){if(type==='sync')this.finalTo(room,client);if(role==='host'&&type==='finish')this.send(client,{type:'end-cached'});return;}
    if(role==='host'){
      if(type==='start'){if(room.started)return;room.started=true;room.start=msg.data;}
      if(type==='finish'&&msg.data.s?.res&&Array.isArray(msg.data.s.T)){
        room.terminal={snap:{t:'snap',s:msg.data.s},end:{t:'end',result:msg.data.s.res,stats:msg.data.stats}};
        for(const slot of [room.host,room.guest])if(slot){this.cancel(slot.timer);slot.timer=null;}
        room.terminalTimer=this.schedule(()=>{this.send(room.guest?.client,{type:'peer-left'});this.drop(room);},this.terminalMs);room.terminalTimer?.unref?.();
        this.send(client,{type:'end-cached'});this.finalTo(room,room.guest?.client);return;
      }
      if(msg.data.t==='snap'&&msg.data.s?.res&&Array.isArray(msg.data.s.T))room.lastSnap=msg.data;
      if(msg.data.t==='end'&&room.lastSnap){
        room.terminal={snap:room.lastSnap,end:msg.data};
        for(const slot of [room.host,room.guest])if(slot){this.cancel(slot.timer);slot.timer=null;}
        // Final game data survives host UI cleanup, never a host simulation.
        room.terminalTimer=this.schedule(()=>{this.send(room.guest?.client,{type:'peer-left'});this.drop(room);},this.terminalMs);room.terminalTimer?.unref?.();
      }
    }
    this.send(this.other(room,role)?.client,{type:'relay',data:msg.data});
  }
  destroy(){for(const room of [...this.rooms.values()])this.drop(room);}
}
