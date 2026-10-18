// Room credentials live only in this tab. Interrupted commands are never replayed.
const MAX_BACKLOG=512*1024;
const SYNC_MESSAGES=new Set(['sync','sync-state','sync-ready','host-background','end','finish']);

export class Net {
  constructor({socketFactory=url=>new WebSocket(url),url,now=Date.now,connectTimeout=5000,retryDelays=[500,1000,2000],heartbeatMs=5000,staleMs=20000}={}){
    this.socketFactory=socketFactory;this.url=url;this.now=now;this.connectTimeout=connectTimeout;this.retryDelays=retryDelays;this.heartbeatMs=heartbeatMs;this.staleMs=staleMs;
    this.ws=null;this.role=null;this.code=null;this.token=null;this.handlers=new Map();this.peer=false;this.peerReconnecting=false;this.reconnecting=false;this.connected=false;this.closed=false;this.graceMs=30000;
  }
  static available(){return typeof WebSocket!=='undefined'&&/^https?:$/.test(location.protocol)&&!window.__HOGUK_STANDALONE__;}
  on(type,fn){if(!this.handlers.has(type))this.handlers.set(type,new Set());const handlers=this.handlers.get(type);handlers.add(fn);return()=>handlers.delete(fn);}
  emit(type,data){for(const fn of [...(this.handlers.get(type)||[])])fn(data);}
  _stopHeartbeat(){clearInterval(this.heartbeat);this.heartbeat=null;}
  _startHeartbeat(){
    this._stopHeartbeat();this.lastHeard=this.now();
    this.heartbeat=setInterval(()=>{if(this.closed||!this.connected)return;if(this.now()-this.lastHeard>=this.staleMs)this._breakSocket();else this.raw({type:'ping',at:this.now()});},this.heartbeatMs);this.heartbeat?.unref?.();
  }
  _detach(){this._stopHeartbeat();this.cancelOpen?.();const ws=this.ws;this.ws=null;this.connected=false;ws?.close();}
  _lost(){if(this.closed)return;this.emit('wire-close');if(this.reconnecting)return;if(this.token&&this.code)this._startReconnect();else this._fatal();}
  _breakSocket(){this._detach();this._lost();}
  _fatal(){if(this.closed)return;this._detach();this.reconnecting=false;this.peerReconnecting=false;this.peer=false;this.token=null;this.emit('close');}
  connect(){if(this.closed)return Promise.reject(new Error('종료된 연결입니다.'));return this._open();}
  _open(timeout=this.connectTimeout){
    return new Promise((resolve,reject)=>{
      const url=this.url??`${location.protocol==='https:'?'wss':'ws'}://${location.host}/ws`;
      let ws;try{ws=this.socketFactory(url);}catch(error){reject(error);return;}
      this.ws=ws;let opened=false,settled=false;
      const fail=error=>{if(!settled){settled=true;clearTimeout(timer);if(this.cancelOpen===cancel)this.cancelOpen=null;reject(error);}};
      const cancel=()=>fail(new Error('연결 취소'));
      const timer=setTimeout(()=>{if(this.ws!==ws)return;fail(new Error('연결 시간 초과'));ws.close();},Math.max(1,timeout));
      this.cancelOpen=cancel;
      ws.onopen=()=>{if(settled||this.closed||this.ws!==ws){ws.close();return;}clearTimeout(timer);if(this.cancelOpen===cancel)this.cancelOpen=null;opened=true;settled=true;this.connected=true;this._startHeartbeat();resolve();};
      ws.onerror=()=>{if(this.ws!==ws)return;clearTimeout(timer);fail(new Error('연결 실패'));ws.close();};
      ws.onclose=()=>{clearTimeout(timer);if(this.ws!==ws)return;this._stopHeartbeat();this.ws=null;this.connected=false;fail(new Error('연결 끊김'));if(opened||this.token)this._lost();else this.emit('wire-close');};
      ws.onmessage=event=>{
        if(this.closed||this.ws!==ws)return;
        this.lastHeard=this.now();let msg;try{msg=JSON.parse(event.data);}catch{return;}
        if(!msg||typeof msg!=='object')return;
        if(msg.type==='relay'){if(msg.data&&typeof msg.data.t==='string')this.emit(msg.data.t,msg.data);return;}
        if(['created','joined','resumed'].includes(msg.type)){
          this.code=msg.code;this.role=msg.role??this.role;this.token=typeof msg.token==='string'?msg.token:null;this.graceMs=Math.max(100,Math.min(30000,+msg.graceMs||30000));this.peer=msg.peer??this.role==='guest';this.peerReconnecting=!!msg.peerReconnecting;
        }
        if(msg.type==='peer-joined'||msg.type==='peer-restored'){this.peer=true;this.peerReconnecting=false;}
        if(msg.type==='peer-reconnecting'){this.peer=false;this.peerReconnecting=true;}
        if(msg.type==='peer-left'){this.peer=false;this.peerReconnecting=false;}
        this.emit(msg.type,msg);
      };
    });
  }
  _waitMessage(type,send,timeout=this.connectTimeout){
    return new Promise((resolve,reject)=>{
      const finish=(error,msg)=>{clearTimeout(timer);offs.forEach(off=>off());if(this.cancelHandshake===cancel)this.cancelHandshake=null;error?reject(error):resolve(msg);};
      const cancel=()=>finish(new Error('연결 취소'));
      const offs=[this.on(type,msg=>finish(null,msg)),this.on('error',msg=>{const error=new Error(msg.msg);error.permanent=true;finish(error);}),this.on('wire-close',()=>finish(new Error('연결 끊김')))];
      const timer=setTimeout(()=>finish(new Error('응답 시간 초과')),Math.max(1,timeout));this.cancelHandshake=cancel;
      if(!send())finish(new Error('전송 실패'));
    });
  }
  async create(){this.role='host';await this.connect();const reply=await this._waitMessage('created',()=>this.raw({type:'create'}));return reply.code;}
  async join(code){this.role='guest';await this.connect();await this._waitMessage('joined',()=>this.raw({type:'join',code:String(code).toUpperCase()}));}
  _delay(ms){return new Promise(resolve=>{const done=()=>{clearTimeout(timer);if(this.cancelDelay===done)this.cancelDelay=null;resolve();};const timer=setTimeout(done,ms);this.cancelDelay=done;});}
  _startReconnect(){
    if(this.reconnecting||this.closed)return;
    this.reconnecting=true;this.retryDeadline=this.now()+this.graceMs;this.emit('reconnecting',{remainingMs:this.graceMs});
    this.reconnectPromise=this._resumeLoop().catch(()=>{if(!this.closed)this._fatal();});
  }
  async _resumeLoop(){
    let attempt=0;
    while(!this.closed&&this.reconnecting&&this.now()<this.retryDeadline){
      await this._delay(Math.min(this.retryDelays[Math.min(attempt++,this.retryDelays.length-1)],this.retryDeadline-this.now()));
      if(this.closed||this.now()>=this.retryDeadline)break;
      try{
        await this._open(Math.min(this.connectTimeout,this.retryDeadline-this.now()));
        const msg=await this._waitMessage('resumed',()=>this.raw({type:'resume',code:this.code,role:this.role,token:this.token}),this.retryDeadline-this.now());
        if(this.closed)return false;this.reconnecting=false;
        if(this.role==='host'&&this.battleStart&&!msg.terminal)this.send(this.battleStart);
        this.emit('reconnected',msg);return true;
      }catch(error){this._detach();if(this.closed)return false;if(error.permanent)break;}
    }
    if(!this.closed)this._fatal();return false;
  }
  raw(obj){if(!this.ws||this.ws.readyState!==1)return false;try{this.ws.send(JSON.stringify(obj));return true;}catch{this._breakSocket();return false;}}
  send(data){
    if(this.closed||!this.connected||this.reconnecting||(this.peerReconnecting&&!SYNC_MESSAGES.has(data.t)))return false;
    if(this.ws.bufferedAmount>MAX_BACKLOG){this._breakSocket();return false;}
    const sent=this.raw({type:'relay',data});if(sent&&data.t==='start')this.battleStart=data;return sent;
  }
  close(){
    if(this.closed)return;
    this.raw({type:'leave'});this.closed=true;this.token=null;this.reconnecting=this.peerReconnecting=this.peer=false;
    this.cancelDelay?.();this.cancelHandshake?.();this._detach();this.handlers.clear();
  }
}
