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
    if (this.kind === 'guest') {
      this.view = emptyView({ stageId: opts.stageId, difficulty: opts.difficulty, mode: 'online' });
      this.snapAt = performance.now();
      this.snapGap = SNAP_MS;
      this.offs.push(
        this.net.on('snap', (m) => {
          const now = performance.now();
          this.snapGap = Math.min(200, Math.max(30, now - this.snapAt));
          this.snapAt = now;
          applySnapshot(this.view, m.s);
          if (m.s.ev) this.pending.push(...m.s.ev);
        }),
        this.net.on('end', (m) => {
          this.endInfo = m;
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
            if (m.c && typeof m.c === 'object') queueCommand(this.state, { ...m.c, p: 1 });
          }),
        );
      }
    }
  }

  send(cmd) {
    if (this.kind === 'guest') this.net.send({ t: 'cmd', c: cmd });
    else queueCommand(this.state, cmd);
  }

  // 한 프레임 진행 후, 이번 프레임에 발생한 이벤트 목록을 돌려준다
  update(realDt) {
    if (this.kind === 'guest') {
      lerpView(this.view, (performance.now() - this.snapAt) / this.snapGap);
      return this.pending.splice(0);
    }
    const s = this.state;
    if (!s.paused && !s.result) {
      this.acc += Math.min(realDt, 0.1) * s.speed;
      let n = 0;
      while (this.acc >= DT && n < 12) {
        step(s);
        this.acc -= DT;
        n++;
      }
    } else if (s.cmds.length) step(s); // 일시정지 중에도 명령(건설 등)은 처리
    const evs = s.events.splice(0);
    if (this.kind === 'host') {
      for (const e of evs) if (e.k !== 'sfx' || this.netEvents.length < 400) this.netEvents.push(e);
      const now = performance.now();
      if (now - this.lastSnap >= SNAP_MS) {
        this.lastSnap = now;
        this.net.send({ t: 'snap', s: this.encoder.encode(s, this.netEvents) });
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
    if (this.kind === 'host' && this.net) {
      this.net.send({ t: 'snap', s: this.encoder.encode(this.state, this.netEvents) });
      this.net.send({ t: 'end', result: this.state.result, stats: this.state.players.map((p) => p.stats) });
    }
  }

  destroy() {
    for (const off of this.offs) off();
    this.offs = [];
  }
}
