// 전투 세션: 솔로 / 온라인 호스트는 시뮬레이션을 직접 돌리고, 게스트는 스냅샷을 받아 그린다
import { createGame, step, queueCommand, applyCommand, DT } from '../sim/sim.js';
import { SnapshotEncoder, emptyView, applySnapshot, lerpView } from '../sim/snapshot.js';
import { validateBattleSetup } from './battle-setup.js';
import {compatibleBattle} from '../data/deployment.js';

const SNAP_MS = 66;

export class Session {
  constructor(opts) {
    validateBattleSetup(opts);
    if(opts.kind!=='solo'&&(typeof opts.net?.on!=='function'||typeof opts.net?.send!=='function'))throw new Error('온라인 전투에는 방 연결이 필요합니다.');
    this.kind = opts.kind; // solo | host | guest
    this.stageId = opts.stageId;
    this.difficulty = opts.difficulty;
    this.net = opts.net || null;
    this.coop = this.kind !== 'solo';
    this.me = this.kind === 'guest' ? 1 : 0;
    this.acc = 0;
    this.pending = [];
    this.offs = [];
    this.endInfo = null;
    this.dropSeq=0;this.deploymentPending=null;this.lastDeploymentResult=null;
    this.localBackground=false;this.hostBackground=false;this.abortInfo=null;
    this.networkSyncing=false;this.syncSerial=0;this.syncPacket=null;this.guestSyncId=null;this.terminalCached=false;this.lastEnd=-Infinity;
    if (this.kind === 'guest') {
      this.view = emptyView({ stageId: opts.stageId, difficulty: opts.difficulty, mode: 'online' });
      this.snapAt = performance.now();
      this.snapGap = SNAP_MS;
      this.offs.push(
        this.net.on('snap', (m) => {
          if(!compatibleBattle(m.s)){this.abort('rules-version');return;}
          if(this.networkSyncing&&!m.s.res)return;
          const now = performance.now();
          this.snapGap = Math.min(200, Math.max(30, now - this.snapAt));
          this.snapAt = now;
          applySnapshot(this.view, m.s);
          this.reconcileDeployment();
          if (m.s.ev) this.pending.push(...m.s.ev);
        }),
        this.net.on('end', (m) => {
          this.endInfo = m;
          if(m.result)this.view.result=m.result;
          if(this.view.result){this.networkSyncing=false;this.guestSyncId=null;}
        }),
        this.net.on('host-background',m=>{this.hostBackground=m.active===true;}),
        this.net.on('sync-state',m=>{
          if(!Number.isSafeInteger(m.id)||m.id<1||!m.s)return;
          if(!compatibleBattle(m.s)){this.abort('rules-version');return;}
          this.networkSyncing=true;this.guestSyncId=m.id;this.pending.length=0;
          if(typeof m.background==='boolean')this.hostBackground=m.background;
          this.snapAt=performance.now();this.snapGap=SNAP_MS;applySnapshot(this.view,m.s);
          this.reconcileDeployment(true);
        }),
      );
    } else {
      this.state = createGame({
        stageId: opts.stageId, difficulty: opts.difficulty, mode: this.kind === 'solo' ? 'solo' : 'online',
        seed: opts.seed, players: opts.specs,battleKey:opts.battleKey??globalThis.crypto?.randomUUID?.()??`${opts.stageId}:${Date.now()}:${opts.seed}`,
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
      const waiting=()=>{this.networkSyncing=true;this.guestSyncId=null;this.releaseDirectInput();};
      const gone=()=>{this.networkSyncing=false;this.syncPacket=null;this.guestSyncId=null;this.abort('peer-left');};
      this.offs.push(this.net.on('reconnecting',waiting),this.net.on('peer-reconnecting',waiting),this.net.on('reconnected',restore),this.net.on('peer-restored',restore),this.net.on('peer-left',gone),this.net.on('close',gone));
    }
  }

  get terminalConfirmed(){return this.kind==='solo'?!!this.view.result:this.kind==='host'?this.terminalCached:!!this.endInfo?.result;}
  get interrupted(){return this.terminalConfirmed?null:this.abortInfo||this.state?.aborted||null;}
  abort(reason){if(this.terminalConfirmed)return false;this.abortInfo={reason};this.pending.length=0;return true;}
  get snapshotStale(){return this.kind==='guest'&&!this.view.result&&!this.view.paused&&this.view.heroes.length>0&&performance.now()-this.snapAt>1800;}
  get networkWaiting(){return !!this.interrupted||this.localBackground||(this.kind==='host'||this.kind==='guest')&&!!(this.net.reconnecting||this.net.peerReconnecting||this.networkSyncing||this.hostBackground||this.snapshotStale);}
  get networkMessage(){return this.localBackground||this.hostBackground?'방장이 전장을 잠시 비웠습니다. 복귀와 동기화를 기다립니다.':this.net?.reconnecting?'연결이 끊겨 다시 접속하고 있습니다…':this.net?.peerReconnecting?'동료가 재접속 중입니다. 전투를 잠시 멈춥니다.':this.snapshotStale?'방장의 전장 진행을 기다리고 있습니다…':'전장 상태와 그림을 다시 맞추고 있습니다…';}
  setBackground(hidden){
    if(this.localBackground===hidden)return;this.localBackground=hidden;
    if(this.kind==='host'){
      if(hidden)this.releaseDirectInput();
      this.net.send({t:'host-background',active:hidden});
      if(!hidden)this.beginSync();
    }
  }
  releaseDirectInput(){
    if(!this.state)return;
    this.state.cmds=this.state.cmds.filter(c=>!(c.t==='move'&&(c.direct||c.stop)));
    for(const hero of this.state.heroes)if(hero.directMove){delete hero.directMove;hero.tx=hero.x;hero.ty=hero.y;hero.post={x:hero.x,y:hero.y};hero.moving=false;}
  }
  beginSync(){
    this.releaseDirectInput();this.networkSyncing=true;
    if(this.net.reconnecting||this.net.peerReconnecting)return;
    if(this.state.result){this.announceEnd();return;}
    if(!this.net.peer){
      this.abort('peer-left');
      this.networkSyncing=false;this.syncPacket=null;return;
    }
    // Settle already-received orders in arrival order before publishing a full
    // sync. A dropped request cannot be reported "unsent" and execute later.
    for(const command of this.state.cmds.splice(0))applyCommand(this.state,command);
    this.encoder.towerSig=null;
    this.syncPacket={t:'sync-state',id:++this.syncSerial,background:this.localBackground,s:this.encoder.encode(this.state,[])};
    this.netEvents=[];this.lastSync=performance.now();this.net.send(this.syncPacket);
    if(this.state.result)this.net.send({t:'end',result:this.state.result,stats:this.state.players.map(p=>p.stats)});
  }

  send(cmd) {
    if(this.networkWaiting)return false;
    if (this.kind === 'guest') return this.net.send({ t: 'cmd', c: cmd });
    queueCommand(this.state, cmd);return true;
  }

  relocateHero(h,slotId){
    if(this.deploymentPending||this.networkWaiting||this.view.paused||this.view.result)return false;
    this.dropSeq=Math.max(this.dropSeq||0,this.view.players[this.me]?.deploymentSeq||0)+1;
    const command={t:'relocate',p:this.me,h,slotId,battleKey:this.view.battleKey,requestId:this.dropSeq};
    this.deploymentPending=command;
    if(this.send(command)===false){this.deploymentPending=null;return false;}
    return true;
  }
  reconcileDeployment(full=false){
    const pl=this.view.players[this.me];if(!pl)return;
    this.dropSeq=Math.max(this.dropSeq||0,pl.deploymentSeq||0);
    const request=this.deploymentPending;if(!request)return;
    const result=pl.deploymentResult;
    if(result?.requestId===request.requestId){this.lastDeploymentResult=result;this.deploymentPending=null;}
    else if(full||pl.deploymentSeq>request.requestId){
      this.lastDeploymentResult={...request,ok:false,reason:'unsent'};this.deploymentPending=null;
    }
  }

  // 한 프레임 진행 후, 이번 프레임에 발생한 이벤트 목록을 돌려준다
  update(realDt, { waitingForRenderer = false } = {}) {
    if(this.interrupted)return [];
    if (this.kind === 'guest') {
      if(this.guestSyncId!==null&&!this.localBackground&&!this.hostBackground&&!waitingForRenderer&&!this.net.reconnecting&&!this.net.peerReconnecting&&this.net.send({t:'sync-ready',id:this.guestSyncId})!==false){this.guestSyncId=null;this.networkSyncing=false;}
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
    this.reconcileDeployment();
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
    if (this.state&&!this.networkWaiting) this.state.speed = v;
  }

  setPaused(v) {
    if (this.state&&!this.networkWaiting) this.state.paused = v;
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
