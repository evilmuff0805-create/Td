// 메인 렌더러: 뷰 상태(호스트는 시뮬레이션 상태, 게스트는 스냅샷)를 캔버스에 그린다
import { TS, PAL, rgba, glow } from './paint.js';
import { renderMapBackground, drawBase, drawSpawns, SEASONS } from './draw-map.js';
import { drawTower } from './draw-towers.js';
import { drawEnemy, drawHero, drawSummon, drawTurtle } from './draw-units.js';
import { FX, drawProjectile } from './fx.js';
import { getMap, nearestOnPath, T_BUILD } from '../sim/map.js';
import { STAGE_BY_ID } from '../data/stages.js';
import { TOWERS, towerBase, SYNERGY_RANGE } from '../data/towers.js';

export class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.fx = new FX();
    this.bg = null;
    this.stageId = null;
    this.weather = [];
    this.dpr = 1;
    this.W = 0;
    this.H = 0;
  }

  setup(stageId) {
    const map = getMap(stageId);
    this.map = map;
    this.stage = STAGE_BY_ID[stageId];
    this.W = map.w * TS;
    this.H = map.h * TS;
    this.dpr = Math.min(2, window.devicePixelRatio || 1);
    this.canvas.width = this.W * this.dpr;
    this.canvas.height = this.H * this.dpr;
    this.bg = renderMapBackground(map, this.stage, this.dpr);
    this.stageId = stageId;
    this.fx = new FX();
    this.weather = [];
    this.hitState = new Map();
    this.projPrev = new Map();
    this.towerFire = new Map();
    this.frames = 0;
    this.light = this.makeLight();
    this.cloud = this.makeCloud();
    this.clouds = [0, 1, 2].map((i) => ({ x: (i * this.W) / 3 + Math.random() * 120, y: 60 + i * (this.H / 3) + Math.random() * 60, s: 0.9 + Math.random() * 0.6 }));
  }

  // 빛: 왼쪽 위에서 따스한 햇살, 가장자리는 어둡게 (한 번만 그려 둔다)
  makeLight() {
    const cv = document.createElement('canvas');
    cv.width = this.W;
    cv.height = this.H;
    const c = cv.getContext('2d');
    const warm = c.createLinearGradient(0, 0, this.W, this.H);
    warm.addColorStop(0, 'rgba(255,236,190,0.13)');
    warm.addColorStop(0.45, 'rgba(255,236,190,0)');
    warm.addColorStop(1, 'rgba(20,30,70,0.1)');
    c.fillStyle = warm;
    c.fillRect(0, 0, this.W, this.H);
    const vg = c.createRadialGradient(this.W / 2, this.H / 2, this.H * 0.42, this.W / 2, this.H / 2, this.W * 0.62);
    vg.addColorStop(0, 'rgba(10,6,4,0)');
    vg.addColorStop(1, 'rgba(10,6,4,0.34)');
    c.fillStyle = vg;
    c.fillRect(0, 0, this.W, this.H);
    return cv;
  }

  // 느리게 흘러가는 구름 그림자
  makeCloud() {
    const cv = document.createElement('canvas');
    cv.width = 320;
    cv.height = 160;
    const c = cv.getContext('2d');
    for (const [x, y, r] of [[110, 90, 70], [180, 70, 80], [240, 95, 60], [150, 110, 60]]) {
      const g = c.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(20,24,40,0.11)');
      g.addColorStop(1, 'rgba(20,24,40,0)');
      c.fillStyle = g;
      c.beginPath();
      c.arc(x, y, r, 0, Math.PI * 2);
      c.fill();
    }
    return cv;
  }

  events(list) {
    for (const e of list) this.fx.handle(e);
  }

  // 체력이 줄어든 순간을 잡아 번쩍임·찌그러짐·피해 숫자를 만든다 (호스트·게스트 모두 같은 방식)
  trackHits(v, dt) {
    const seen = new Set();
    let heavyHits = 0;
    for (const e of v.enemies) {
      seen.add(e.id);
      let h = this.hitState.get(e.id);
      if (!h) {
        this.hitState.set(e.id, { hp: e.hp, flash: 0, sq: 0, acc: 0, accT: 0, cool: 0, x: e.x, y: e.y });
        continue;
      }
      const d = h.hp - e.hp;
      h.hp = e.hp;
      h.x = e.x;
      h.y = e.y;
      h.cool -= dt;
      if (d > 0.01) {
        h.acc += d;
        const heavy = d >= Math.max(5, e.maxHp * 0.02);
        if (heavy && h.cool <= 0) {
          const rel = d / e.maxHp;
          h.flash = 1;
          h.sq = Math.min(1, 0.55 + rel * 3);
          h.cool = 0.08;
          const sc = e.tier === 4 ? 1.75 : e.tier === 3 ? 1.28 : 1.05;
          this.fx.hitSpark(e.x * TS, e.y * TS + 8 - 15 * sc, rel);
          heavyHits++;
        }
      }
      if (h.acc > 0) {
        h.accT += dt;
        if (h.accT > 0.32) {
          if (h.acc >= 1) this.fx.dmg(e.x * TS, e.y * TS - 26, Math.round(h.acc));
          h.acc = 0;
          h.accT = 0;
        }
      }
      h.flash = Math.max(0, h.flash - dt * 9);
      h.sq = Math.max(0, h.sq - dt * 7);
    }
    for (const [id, h] of this.hitState) {
      if (seen.has(id)) continue;
      if (h.acc >= 1) this.fx.dmg(h.x * TS, h.y * TS - 26, Math.round(h.acc));
      this.hitState.delete(id);
    }
    if (heavyHits && this.fx.onSound) this.fx.onSound('hit');
  }

  // 유도 투사체가 사라진 자리 = 맞은 자리
  trackProjectiles(v) {
    const now = new Map();
    for (const p of v.projectiles) {
      if (p.kind !== 'arrow' && p.kind !== 'bolt' && p.kind !== 'orb' && p.kind !== 'ice') continue;
      now.set(p.id, { kind: p.kind, x: p.x, y: p.y, a: p.a || 0, crit: p.crit, hue: p.hue });
    }
    for (const [id, p] of this.projPrev) if (!now.has(id)) this.fx.impact(p.kind, p.x * TS, p.y * TS, p.a, p.crit, p.hue);
    this.projPrev = now;
  }

  // 유산이 쏘는 순간: 반동 + 포구 연기
  trackTowerFire(v, dt) {
    for (const t of v.towers) {
      let st = this.towerFire.get(t.id);
      if (!st) {
        st = { on: false, recoil: 0 };
        this.towerFire.set(t.id, st);
      }
      if (st.fresh === undefined) {
        // 첫 화면에 이미 있던 유산은 그대로, 새로 지은 유산은 위에서 쿵 내려앉는다
        st.fresh = this.frames > 1;
        st.drop = st.fresh ? 1 : 0;
      }
      if (st.drop > 0) {
        st.drop = Math.max(0, st.drop - dt * 5);
        if (st.drop === 0) st.recoil = 1.3;
      }
      const on = t.flash > 0;
      if (on && !st.on) {
        st.recoil = 1;
        const kind = TOWERS[t.type].kind;
        if (kind === 'cannon') this.fx.muzzle((t.x + 0.5) * TS, (t.y + 0.5) * TS - 10, t.angle ?? -1, t.branch === 'A');
      }
      st.on = on;
      st.recoil = Math.max(0, st.recoil - dt * 7);
    }
  }

  render(v, ui, dt) {
    const ctx = this.ctx;
    const map = this.map;
    const time = ui.clock;
    this.frames++;
    this.fx.update(dt);
    this.trackHits(v, dt);
    this.trackProjectiles(v);
    this.trackTowerFire(v, dt);
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const cam = this.fx.camera(this.W, this.H);
    if (cam.zoom !== 1) {
      ctx.translate(cam.zx, cam.zy);
      ctx.scale(cam.zoom, cam.zoom);
      ctx.translate(-cam.zx, -cam.zy);
    }
    ctx.translate(cam.dx, cam.dy);
    ctx.drawImage(this.bg, 0, 0, this.W, this.H);
    this.drawWater(ctx, time);

    // 건설 가능 격자 (배치 중)
    if (ui.placing || ui.showGrid) this.drawGrid(ctx, v, ui);
    drawSpawns(ctx, map, time, v.wave.phase === 'prep' && v.wave.n < v.wave.total);

    // 장판
    for (const z of v.zones) this.drawZone(ctx, z, time);
    this.fx.drawUnder(ctx);

    // 오라 범위 (해인사·경복궁)
    for (const t of v.towers) {
      const def = TOWERS[t.type];
      if (def.kind !== 'sutra' && def.kind !== 'palace') continue;
      const st = towerBase(t.type, t.level, t.branch);
      const r = st.range * TS * (t.rangeMult || 1);
      ctx.fillStyle = def.kind === 'sutra' ? 'rgba(255,215,122,0.07)' : 'rgba(217,72,59,0.05)';
      ctx.beginPath();
      ctx.arc((t.x + 0.5) * TS, (t.y + 0.5) * TS, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = def.kind === 'sutra' ? 'rgba(255,215,122,0.25)' : 'rgba(217,72,59,0.22)';
      ctx.setLineDash([3, 6]);
      ctx.lineDashOffset = -time * 8;
      ctx.stroke();
      ctx.setLineDash([]);
    }
    // 유산 공명 선
    this.drawSynergy(ctx, v, time);

    // 선택/미리보기 사거리
    if (ui.selTower) {
      const t = v.towers.find((x) => x.id === ui.selTower);
      if (t) this.rangeCircle(ctx, t.type, t.level, t.branch, t.x, t.y, t.rangeMult || 1, true);
    }
    const at = ui.buildAt || ui.hover;
    if (ui.placing && at) {
      this.rangeCircle(ctx, ui.placing, 1, null, at.x, at.y, 1, ui.buildAt ? true : ui.hoverOk);
    }
    const p2 = ui.p2intent;
    if (p2) {
      const t2 = p2.towerId !== null && p2.towerId !== undefined ? v.towers.find((x) => x.id === p2.towerId) : null;
      if (p2.type) this.rangeCircle(ctx, p2.type, 1, null, p2.x, p2.y, 1, true, PAL.p1);
      else if (t2) this.rangeCircle(ctx, t2.type, t2.level, t2.branch, t2.x, t2.y, t2.rangeMult || 1, true, PAL.p1);
    }

    // 깊이 정렬
    const list = [];
    for (const t of v.towers) list.push({ y: t.y + 0.9, k: 0, o: t });
    for (const e of v.enemies) list.push({ y: e.y, k: 1, o: e });
    for (const h of v.heroes) if (!h.dead) list.push({ y: h.y + 0.05, k: 2, o: h });
    for (const m of v.summons) list.push({ y: m.y, k: 3, o: m });
    list.sort((a, b) => a.y - b.y);
    drawBase(ctx, map, this.stage, time);
    for (const it of list) {
      if (it.k === 0) {
        const tf = this.towerFire.get(it.o.id);
        if (tf && tf.drop > 0) {
          ctx.save();
          ctx.globalAlpha = 1 - tf.drop * 0.6;
          ctx.translate(0, -46 * tf.drop * tf.drop);
          drawTower(ctx, it.o, time, { owner: v.coop ? it.o.owner : -1, noShadow: true });
          ctx.restore();
        } else drawTower(ctx, it.o, time, { owner: v.coop ? it.o.owner : -1, recoil: tf ? tf.recoil : 0 });
      } else if (it.k === 1) drawEnemy(ctx, it.o, time, 1, this.hitState.get(it.o.id));
      else if (it.k === 2) drawHero(ctx, it.o, time, { selected: ui.selHeroes && ui.selHeroes.includes(v.heroes.indexOf(it.o)) });
      else drawSummon(ctx, it.o, time);
    }
    for (const m of v.movers) if (m.kind === 'turtle') drawTurtle(ctx, m, time);

    // 석굴암 광선
    for (const t of v.towers) {
      if (!t.beam || !t.beam.length) continue;
      const sx = (t.x + 0.5) * TS;
      const sy = (t.y + 0.5) * TS + 2;
      t.beam.forEach((id, i) => {
        const e = v.enemies.find((q) => q.id === id);
        if (!e) return;
        const ex = e.x * TS;
        const ey = e.y * TS - 6;
        const pow = t.beamPow || 0;
        ctx.strokeStyle = rgba('#ffe08a', 0.35 + pow * 0.4);
        ctx.lineWidth = (i ? 2 : 4) + pow * (i ? 1 : 4);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.stroke();
        ctx.strokeStyle = 'rgba(255,255,255,0.85)';
        ctx.lineWidth = i ? 0.8 : 1.4;
        ctx.stroke();
        glow(ctx, ex, ey, 8 + pow * 8, '#ffe08a', 0.7);
      });
    }

    for (const p of v.projectiles) drawProjectile(ctx, p, time);
    this.fx.draw(ctx, time);

    // 쓰러진 영웅
    for (const h of v.heroes) {
      if (!h.dead) continue;
      const x = h.x * TS;
      const y = h.y * TS;
      ctx.fillStyle = 'rgba(40,30,30,0.7)';
      ctx.strokeStyle = '#2b1a12';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(x, y - 6, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.font = '700 14px "Black Han Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(Math.ceil(h.respawn), x, y - 1);
    }

    // 로컬 2P 커서
    if (ui.p2cursor && !p2) {
      const c = ui.p2cursor;
      ctx.strokeStyle = PAL.p1;
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 3]);
      ctx.strokeRect(c.x * TS + 2, c.y * TS + 2, TS - 4, TS - 4);
      ctx.setLineDash([]);
    }
    // 각자 고른 자리 (누가 어디에 짓는지 서로 보이게)
    if (ui.buildAt) this.intentMark(ctx, ui.buildAt.x, ui.buildAt.y, ui.meColor || PAL.p0, time);
    else if (ui.selTower) {
      const t = v.towers.find((x) => x.id === ui.selTower);
      if (t) this.intentMark(ctx, t.x, t.y, ui.meColor || PAL.p0, time);
    }
    if (p2) {
      if (p2.type) {
        ctx.globalAlpha = 0.6;
        drawTower(ctx, { type: p2.type, level: 1, branch: null, x: p2.x, y: p2.y, angle: -1 }, time, { noPips: true });
        ctx.globalAlpha = 1;
        this.previewSynergy(ctx, v, p2.type, p2.x, p2.y);
      }
      this.intentMark(ctx, p2.x, p2.y, PAL.p1, time);
    }
    // 배치 유령
    if (ui.placing && at) {
      ctx.globalAlpha = 0.6;
      drawTower(ctx, { type: ui.placing, level: 1, branch: null, x: at.x, y: at.y, angle: -1 }, time, { noPips: true });
      ctx.globalAlpha = 1;
      this.previewSynergy(ctx, v, ui.placing, at.x, at.y);
    } else if (ui.hover && !ui.placing) {
      ctx.strokeStyle = ui.hoverOk ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(ui.hover.x * TS + 1, ui.hover.y * TS + 1, TS - 2, TS - 2);
    }
    // 기술 조준
    if (ui.aim) {
      const a = ui.aim;
      ctx.fillStyle = 'rgba(127,224,176,0.15)';
      ctx.strokeStyle = 'rgba(127,224,176,0.95)';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 4]);
      ctx.lineDashOffset = -time * 20;
      ctx.beginPath();
      ctx.arc(a.x * TS, a.y * TS, Math.max(0.4, a.r) * TS, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.setLineDash([]);
    }
    // 이동 목표 표시
    if (ui.moveMark && ui.moveMark.t > 0) {
      const m = ui.moveMark;
      ctx.strokeStyle = rgba(m.p === 1 ? PAL.p1 : PAL.p0, m.t);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(m.x * TS, m.y * TS, 10 * (1.5 - m.t * 0.5), 4 * (1.5 - m.t * 0.5), 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    // 야습
    const night = v.wave.tactic === 'night' && v.wave.phase !== 'prep';
    if (night || this.stage.night) this.drawNight(ctx, v, night ? 0.45 : 0.3);
    if (this.fx.clockT > 0) {
      ctx.fillStyle = `rgba(90,150,220,${Math.min(0.18, this.fx.clockT * 0.05)})`;
      ctx.fillRect(0, 0, this.W, this.H);
    }
    this.drawWeather(ctx, dt, time);
    // 구름 그림자 + 빛
    for (const c of this.clouds) {
      c.x += 9 * dt;
      if (c.x > this.W + 60) {
        c.x = -380;
        c.y = 40 + Math.random() * (this.H - 120);
      }
      ctx.drawImage(this.cloud, c.x, c.y - 80 * c.s, 320 * c.s, 160 * c.s);
    }
    ctx.drawImage(this.light, 0, 0, this.W, this.H);
    if (this.fx.flash > 0) {
      ctx.fillStyle = rgba(this.fx.flashColor.startsWith('#') ? this.fx.flashColor : '#ffffff', Math.min(0.45, this.fx.flash));
      ctx.fillRect(0, 0, this.W, this.H);
    }
  }

  drawWater(ctx, time) {
    const map = this.map;
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 1;
    for (let y = 0; y < map.h; y++) {
      for (let x = 0; x < map.w; x++) {
        if (map.grid[y * map.w + x] !== 3) continue;
        const ph = time * 1.2 + x * 0.7 + y * 1.3;
        const yy = y * TS + 20 + Math.sin(ph) * 6;
        ctx.beginPath();
        ctx.moveTo(x * TS + 4, yy);
        ctx.quadraticCurveTo(x * TS + 20, yy - 4 * Math.cos(ph), x * TS + 36, yy);
        ctx.stroke();
      }
    }
  }

  drawGrid(ctx, v, ui) {
    const map = this.map;
    const taken = new Set(v.towers.map((t) => t.y * 100 + t.x));
    for (let y = 0; y < map.h; y++) {
      for (let x = 0; x < map.w; x++) {
        if (map.grid[y * map.w + x] !== T_BUILD || taken.has(y * 100 + x)) continue;
        ctx.strokeStyle = 'rgba(255,255,240,0.22)';
        ctx.lineWidth = 1;
        ctx.strokeRect(x * TS + 3, y * TS + 3, TS - 6, TS - 6);
      }
    }
    if (ui.hover) {
      ctx.fillStyle = ui.hoverOk ? 'rgba(120,255,150,0.25)' : 'rgba(255,90,70,0.25)';
      ctx.fillRect(ui.hover.x * TS, ui.hover.y * TS, TS, TS);
    }
  }

  rangeCircle(ctx, type, level, branch, x, y, mult, ok, color) {
    const st = towerBase(type, level, branch);
    if (!st.range) return;
    const r = st.range * TS * mult;
    const cx = (x + 0.5) * TS;
    const cy = (y + 0.5) * TS;
    ctx.fillStyle = color ? rgba(color, 0.1) : ok ? 'rgba(255,255,255,0.1)' : 'rgba(255,80,60,0.1)';
    ctx.strokeStyle = color ? rgba(color, 0.85) : ok ? 'rgba(255,255,255,0.7)' : 'rgba(255,80,60,0.7)';
    ctx.lineWidth = 1.5;
    if (color) ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.setLineDash([]);
    if (TOWERS[type].kind === 'barracks') this.rallyMark(ctx, x, y, st.range * Math.max(1, mult), color);
  }

  // 남한산성: 병사가 설 길목에 깃발 (사거리 밖이면 붉은 X)
  rallyMark(ctx, x, y, range, color) {
    const np = nearestOnPath(this.map, x + 0.5, y + 0.5);
    if (!np) return;
    const px = np.x * TS;
    const py = np.y * TS;
    const ok = np.dist <= range;
    ctx.save();
    ctx.strokeStyle = ok ? rgba(color || '#ffffff', 0.7) : 'rgba(255,80,60,0.8)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo((x + 0.5) * TS, (y + 0.5) * TS);
    ctx.lineTo(px, py);
    ctx.stroke();
    ctx.setLineDash([]);
    if (!ok) {
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(px - 6, py - 6);
      ctx.lineTo(px + 6, py + 6);
      ctx.moveTo(px + 6, py - 6);
      ctx.lineTo(px - 6, py + 6);
      ctx.stroke();
    } else {
      ctx.fillStyle = 'rgba(0,0,0,0.25)';
      ctx.beginPath();
      ctx.ellipse(px, py + 2, 7, 2.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#2b1a12';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(px, py + 2);
      ctx.lineTo(px, py - 18);
      ctx.stroke();
      ctx.fillStyle = color || PAL.dancheongB;
      ctx.beginPath();
      ctx.moveTo(px, py - 18);
      ctx.lineTo(px + 10, py - 15);
      ctx.lineTo(px, py - 11);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
    ctx.restore();
  }

  // 플레이어가 지금 손대는 칸: 그 사람 색의 모서리 (1P 청 · 2P 홍). 글씨 꼬리표는 영웅을 가려서 달지 않는다
  intentMark(ctx, x, y, color, time) {
    const px = x * TS;
    const py = y * TS;
    const pulse = 0.5 + 0.5 * Math.sin(time * 6);
    const o = 1 + pulse * 2;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    const L = 10;
    for (const [cx, cy, sx, sy] of [[px - o, py - o, 1, 1], [px + TS + o, py - o, -1, 1], [px - o, py + TS + o, 1, -1], [px + TS + o, py + TS + o, -1, -1]]) {
      ctx.beginPath();
      ctx.moveTo(cx + sx * L, cy);
      ctx.lineTo(cx, cy);
      ctx.lineTo(cx, cy + sy * L);
      ctx.stroke();
    }
    ctx.fillStyle = rgba(color, 0.12 + pulse * 0.08);
    ctx.fillRect(px, py, TS, TS);
    ctx.restore();
  }

  // 창에 가려진 영웅을 창 위에 다시 그린다 (xray 캔버스, 월드 좌표 변환은 호출 쪽에서)
  // 주인은 빛깔과 발밑 고리 색으로만 알린다: '2P' 같은 글씨는 고리 버튼을 가렸다
  drawHeroOnTop(ctx, h, time, alpha = 1) {
    const x = h.x * TS;
    const y = h.y * TS + 9;
    const col = h.owner === 1 ? PAL.p1 : PAL.p0;
    ctx.save();
    ctx.globalAlpha = alpha;
    const g = ctx.createRadialGradient(x, y - 18, 4, x, y - 18, 34);
    g.addColorStop(0, rgba(col, 0.55));
    g.addColorStop(1, rgba(col, 0));
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y - 18, 34, 0, Math.PI * 2);
    ctx.fill();
    drawHero(ctx, h, time, { noBar: true });
    ctx.restore();
  }

  drawSynergy(ctx, v, time) {
    const byId = new Map(v.towers.map((t) => [t.id, t]));
    ctx.lineWidth = 1.5;
    ctx.setLineDash([2, 4]);
    ctx.lineDashOffset = -time * 10;
    for (const t of v.towers) {
      if (!t.synIds) continue;
      for (const id of t.synIds) {
        if (id < t.id) continue;
        const o = byId.get(id);
        if (!o) continue;
        const col = { palace: '#ff8a7a', temple: '#ffd24a', fortress: '#7fc0ff' }[TOWERS[t.type].cat];
        ctx.strokeStyle = rgba(col, 0.55);
        ctx.beginPath();
        ctx.moveTo((t.x + 0.5) * TS, (t.y + 0.5) * TS + 8);
        ctx.lineTo((o.x + 0.5) * TS, (o.y + 0.5) * TS + 8);
        ctx.stroke();
      }
    }
    ctx.setLineDash([]);
  }

  previewSynergy(ctx, v, type, x, y) {
    const cat = TOWERS[type].cat;
    const seen = new Set();
    for (const o of v.towers) {
      if (o.type === type || TOWERS[o.type].cat !== cat || seen.has(o.type)) continue;
      if (Math.max(Math.abs(o.x - x), Math.abs(o.y - y)) > SYNERGY_RANGE) continue;
      seen.add(o.type);
      ctx.strokeStyle = 'rgba(255,230,140,0.95)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo((x + 0.5) * TS, (y + 0.5) * TS);
      ctx.lineTo((o.x + 0.5) * TS, (o.y + 0.5) * TS);
      ctx.stroke();
    }
    if (seen.size) {
      ctx.font = '700 15px "Black Han Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(0,0,0,0.7)';
      const txt = `유산 공명 +${seen.size * 12}%`;
      ctx.strokeText(txt, (x + 0.5) * TS, y * TS - 34);
      ctx.fillStyle = '#ffe68c';
      ctx.fillText(txt, (x + 0.5) * TS, y * TS - 34);
    }
  }

  drawZone(ctx, z, time) {
    const x = z.x * TS;
    const y = z.y * TS;
    const r = z.r * TS;
    const k = Math.min(1, z.t / 0.5);
    if (z.kind === 'fire') {
      ctx.fillStyle = `rgba(255,110,40,${0.22 * k})`;
      ctx.beginPath();
      ctx.ellipse(x, y, r, r * 0.8, 0, 0, Math.PI * 2);
      ctx.fill();
      for (let i = 0; i < 10; i++) {
        const a = i * 0.63 + time;
        const rr = r * (0.2 + ((i * 37) % 10) / 12);
        const fx = x + Math.cos(a * 0.7 + i) * rr;
        const fy = y + Math.sin(a * 0.9 + i) * rr * 0.7;
        glow(ctx, fx, fy - 4 - Math.abs(Math.sin(time * 6 + i)) * 5, 7, '#ff8a3c', 0.7 * k);
      }
    } else if (z.kind === 'ice') {
      ctx.fillStyle = `rgba(200,235,255,${0.35 * k})`;
      ctx.strokeStyle = `rgba(255,255,255,${0.7 * k})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(x, y, r, r * 0.8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = `rgba(255,255,255,${0.5 * k})`;
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3 + time * 0.2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(a) * r * 0.8, y + Math.sin(a) * r * 0.64);
        ctx.stroke();
      }
    }
  }

  drawNight(ctx, v, a = 0.45) {
    // 어둠 + 유산·영웅 주변 불빛
    ctx.save();
    ctx.fillStyle = `rgba(12,16,40,${a})`;
    ctx.fillRect(0, 0, this.W, this.H);
    ctx.globalCompositeOperation = 'lighter';
    for (const t of v.towers) glow(ctx, (t.x + 0.5) * TS, (t.y + 0.5) * TS - 8, 34, '#ffb35c', 0.18);
    for (const h of v.heroes) if (!h.dead) glow(ctx, h.x * TS, h.y * TS, 40, '#ffd08a', 0.18);
    ctx.restore();
  }

  drawWeather(ctx, dt, time) {
    const season = this.stage.season;
    const pal = SEASONS[season];
    const want = season === 'winter' ? 90 : season === 'spring' || season === 'autumn' ? 30 : season === 'summer' ? 14 : 0;
    while (this.weather.length < want) {
      this.weather.push({ x: Math.random() * this.W, y: Math.random() * this.H, s: 0.5 + Math.random(), p: Math.random() * 6 });
    }
    for (const w of this.weather) {
      if (season === 'winter') {
        w.y += 30 * w.s * dt;
        w.x += Math.sin(time + w.p) * 10 * dt;
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.beginPath();
        ctx.arc(w.x, w.y, 1.2 * w.s, 0, Math.PI * 2);
        ctx.fill();
      } else if (season === 'summer') {
        w.x += Math.sin(time * 0.7 + w.p) * 12 * dt;
        w.y += Math.cos(time * 0.9 + w.p) * 12 * dt;
        glow(ctx, w.x, w.y, 4, '#fff6a0', 0.3 + 0.3 * Math.sin(time * 3 + w.p));
      } else {
        w.y += 18 * w.s * dt;
        w.x += (14 + Math.sin(time + w.p) * 14) * dt;
        ctx.save();
        ctx.translate(w.x, w.y);
        ctx.rotate(time * w.s + w.p);
        ctx.fillStyle = season === 'spring' ? 'rgba(248,190,210,0.85)' : pal.flower[Math.floor(w.p) % pal.flower.length];
        ctx.beginPath();
        ctx.ellipse(0, 0, 2.6 * w.s, 1.4 * w.s, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      if (w.y > this.H + 5) {
        w.y = -5;
        w.x = Math.random() * this.W;
      }
      if (w.x > this.W + 5) w.x = -5;
    }
  }
}
