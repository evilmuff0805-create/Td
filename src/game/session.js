// 전투 세션: 솔로 / 로컬 2P / 온라인 호스트는 시뮬레이션을 직접 돌리고, 게스트는 스냅샷을 받아 그린다
import { createGame, step, queueCommand, DT } from '../sim/sim.js';
import { SnapshotEncoder, emptyView, applySnapshot, lerpView } from '../sim/snapshot.js';

const SNAP_MS = 66;

export class Session {
  constructor(opts) {
    this.kind = opts.kind; // solo | local | host | guest
    this.stageId = opts.stageId;
    this.difficulty = opts.difficulty;
    this.net = opts.net || null;
    this.coop = this.kind !== 'solo';
    this.me = this.kind === 'guest' ? 1 : 0;
    this.acc = 0;
    this.pending = [];
    this.offs = [];
    this.endInfo = null;
    this.networkSyncing=false;this.syncSerial=0;this.syncPacket=null;this.guestSyncId=null;this.terminalCached=false;this.lastEnd=-Infinity;
    if (this.kind === 'guest') {
      this.view = emptyView({ stageId: opts.stageId, difficulty: opts.difficulty, mode: 'online' });
      this.snapAt = performance.now();
      this.snapGap = SNAP_MS;
      this.offs.push(
        this.net.on('snap', (m) => {
          if(this.networkSyncing&&!m.s.res)return;
          const now = performance.now();
          this.snapGap = Math.min(200, Math.max(30, now - this.snapAt));
          this.snapAt = now;
          applySnapshot(this.view, m.s);
          if (m.s.ev) this.pending.push(...m.s.ev);
        }),
        this.net.on('end', (m) => {
          this.endInfo = m;
          if(this.view.result){this.networkSyncing=false;this.guestSyncId=null;}
        }),
        this.net.on('sync-state',m=>{
          if(!Number.isSafeInteger(m.id)||m.id<1||!m.s)return;
          this.networkSyncing=true;this.guestSyncId=m.id;this.pending.length=0;
          this.snapAt=performance.now();this.snapGap=SNAP_MS;applySnapshot(this.view,m.s);
        }),
      );
    } else {
      this.state = createGame({
        stageId: opts.stageId, difficulty: opts.difficulty, mode: this.kind === 'solo' ? 'solo' : this.kind === 'local' ? 'local' : 'online',
        seed: opts.seed, players: opts.specs,
      });
      this.view = this.state;
      if (this.kind === 'host') {
        this.encoder = new SnapshotEncoder();
        this.netEvents = [];
        this.lastSnap = 0;
        this.offs.push(
          this.net.on('cmd', (m) => {
            if (!this.networkWaiting&&m.c && typeof m.c === 'object') queueCommand(this.state, { ...m.c, p: 1 });
          }),
          this.net.on('sync',()=>this.beginSync()),
          this.net.on('sync-ready',m=>{if(m.id===this.syncPacket?.id&&!this.net.reconnecting&&!this.net.peerReconnecting){this.networkSyncing=false;this.syncPacket=null;}}),
          this.net.on('end-cached',()=>{this.terminalCached=true;if(this.state.result){this.networkSyncing=false;this.syncPacket=null;}}),
        );
      }
    }
    if(this.kind==='host'||this.kind==='guest'){
      const restore=()=>{this.networkSyncing=true;if(this.kind==='host')this.beginSync();else this.net.send({t:'sync'});};
      const waiting=()=>{this.networkSyncing=true;this.guestSyncId=null;};
      const gone=()=>{this.networkSyncing=false;this.syncPacket=null;this.guestSyncId=null;};
      this.offs.push(this.net.on('reconnecting',waiting),this.net.on('peer-reconnecting',waiting),this.net.on('reconnected',restore),this.net.on('peer-restored',restore),this.net.on('peer-left',gone),this.net.on('close',gone));
    }
  }

  get networkWaiting(){return(this.kind==='host'||this.kind==='guest')&&!!(this.net.reconnecting||this.net.peerReconnecting||this.networkSyncing);}
  get networkMessage(){return this.net?.reconnecting?'연결이 끊겨 다시 접속하고 있습니다…':this.net?.peerReconnecting?'동료가 재접속 중입니다. 전투를 잠시 멈춥니다.':'전장 상태와 그림을 다시 맞추고 있습니다…';}
  beginSync(){
    this.networkSyncing=true;
    if(this.net.reconnecting||this.net.peerReconnecting)return;
    if(this.state.result){this.announceEnd();return;}
    if(!this.net.peer){
      if(!this.state.players[1]?.left)queueCommand(this.state,{t:'leave',p:1});
      this.networkSyncing=false;this.syncPacket=null;return;
    }
    this.encoder.towerSig=null;
    this.syncPacket={t:'sync-state',id:++this.syncSerial,s:this.encoder.encode(this.state,[])};
    this.netEvents=[];this.lastSync=performance.now();this.net.send(this.syncPacket);
    if(this.state.result)this.net.send({t:'end',result:this.state.result,stats:this.state.players.map(p=>p.stats)});
  }

  send(cmd) {
    if(this.networkWaiting)return false;
    if (this.kind === 'guest') return this.net.send({ t: 'cmd', c: cmd });
    queueCommand(this.state, cmd);return true;
  }

  // 한 프레임 진행 후, 이번 프레임에 발생한 이벤트 목록을 돌려준다
  update(realDt, { waitingForRenderer = false } = {}) {
    if (this.kind === 'guest') {
      if(this.guestSyncId!==null&&!waitingForRenderer&&!this.net.reconnecting&&!this.net.peerReconnecting&&this.net.send({t:'sync-ready',id:this.guestSyncId})!==false){this.guestSyncId=null;this.networkSyncing=false;}
      lerpView(this.view, (performance.now() - this.snapAt) / this.snapGap);
      return this.pending.splice(0);
    }
    const s = this.state;
    const waiting=waitingForRenderer||this.networkWaiting;
    if (!waiting && !s.paused && !s.result) {
      this.acc += Math.min(realDt, 0.1) * s.speed;
      let n = 0;
      while (this.acc >= DT && n < 12) {
        step(s);
        this.acc -= DT;
        n++;
      }
    } else if (!waiting && s.cmds.length) step(s); // 일시정지 중에도 명령(건설 등)은 처리
    const evs = s.events.splice(0);
    if (this.kind === 'host') {
      for (const e of evs) if (e.k !== 'sfx' || this.netEvents.length < 400) this.netEvents.push(e);
      const now = performance.now();
      if(s.result&&!this.terminalCached){if(now-this.lastEnd>=500)this.announceEnd();}
      else if(this.networkSyncing){if(this.syncPacket&&!this.net.reconnecting&&!this.net.peerReconnecting&&now-this.lastSync>=500){this.lastSync=now;this.net.send(this.syncPacket);}}
      else if (!waiting&&now - this.lastSnap >= SNAP_MS) {
        this.lastSnap = now;
        if(this.net.send({ t: 'snap', s: this.encoder.encode(s, this.netEvents) })===false)this.encoder.towerSig=null;
        this.netEvents = [];
      }
    }
    return evs;
  }

  get result() {
    return this.view.result;
  }

  setSpeed(v) {
    if (this.state) this.state.speed = v;
  }

  setPaused(v) {
    if (this.state) this.state.paused = v;
  }

  stats(p) {
    if (this.state) return this.state.players[p].stats;
    return this.endInfo ? this.endInfo.stats[p] : {};
  }

  // 호스트: 게스트에게 최종 결과 전달
  announceEnd() {
    if (this.kind === 'host' && this.net&&!this.terminalCached) {
      this.lastEnd=performance.now();
      this.encoder.towerSig=null;
      this.net.send({ t: 'finish', s: this.encoder.encode(this.state, this.netEvents),stats:this.state.players.map(p=>p.stats) });
      this.netEvents = [];
    }
  }

  destroy() {
    for (const off of this.offs) off();
    this.offs = [];
  }
}
