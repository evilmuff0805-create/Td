// 메인 렌더러: 뷰 상태(호스트는 시뮬레이션 상태, 게스트는 스냅샷)를 캔버스에 그린다
import { TS, PAL, rgba, glow } from './paint.js';
import { renderMapBackground, drawBase, drawSpawns, SEASONS } from './draw-map.js';
import { drawTower } from './draw-towers.js';
import { drawEnemy, drawHero, drawSummon, drawTurtle } from './draw-units.js';
import { FX, drawProjectile } from './fx.js';
import { getMap, T_BUILD } from '../sim/map.js';
import { STAGE_BY_ID } from '../data/stages.js';
import { TOWERS, towerBase, SYNERGY_RANGE } from '../data/towers.js';
import { HEROES } from '../data/heroes.js';

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
  }

  events(list) {
    for (const e of list) this.fx.handle(e);
  }

  render(v, ui, dt) {
    const ctx = this.ctx;
    const map = this.map;
    const time = ui.clock;
    this.fx.update(dt);
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const sh = this.fx.shake;
    if (sh > 0) ctx.translate((Math.random() - 0.5) * sh, (Math.random() - 0.5) * sh);
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
    if (ui.placing && ui.hover) {
      this.rangeCircle(ctx, ui.placing, 1, null, ui.hover.x, ui.hover.y, 1, ui.hoverOk);
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
      if (it.k === 0) drawTower(ctx, it.o, time, { owner: v.coop ? it.o.owner : -1 });
      else if (it.k === 1) drawEnemy(ctx, it.o, time);
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
      ctx.fillStyle = 'rgba(40,30,30,0.6)';
      ctx.beginPath();
      ctx.arc(x, y - 6, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = '700 10px "Black Han Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(Math.ceil(h.respawn), x, y - 2);
      ctx.font = '600 9px "Gowun Batang", serif';
      ctx.fillText(HEROES[h.heroId].name, x, y - 18);
    }

    // 로컬 2P 커서
    if (ui.p2cursor) {
      const c = ui.p2cursor;
      ctx.strokeStyle = PAL.p1;
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 3]);
      ctx.strokeRect(c.x * TS + 2, c.y * TS + 2, TS - 4, TS - 4);
      ctx.setLineDash([]);
    }
    // 배치 유령
    if (ui.placing && ui.hover) {
      ctx.globalAlpha = 0.6;
      drawTower(ctx, { type: ui.placing, level: 1, branch: null, x: ui.hover.x, y: ui.hover.y, angle: -1 }, time, { noPips: true });
      ctx.globalAlpha = 1;
      this.previewSynergy(ctx, v, ui.placing, ui.hover.x, ui.hover.y);
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
    if (night) this.drawNight(ctx, v);
    if (this.fx.clockT > 0) {
      ctx.fillStyle = `rgba(90,150,220,${Math.min(0.18, this.fx.clockT * 0.05)})`;
      ctx.fillRect(0, 0, this.W, this.H);
    }
    this.drawWeather(ctx, dt, time);
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

  rangeCircle(ctx, type, level, branch, x, y, mult, ok) {
    const st = towerBase(type, level, branch);
    if (!st.range) return;
    const r = st.range * TS * mult;
    const cx = (x + 0.5) * TS;
    const cy = (y + 0.5) * TS;
    ctx.fillStyle = ok ? 'rgba(255,255,255,0.1)' : 'rgba(255,80,60,0.1)';
    ctx.strokeStyle = ok ? 'rgba(255,255,255,0.7)' : 'rgba(255,80,60,0.7)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
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
      ctx.font = '700 12px "Black Han Sans", sans-serif';
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

  drawNight(ctx, v) {
    // 어둠 + 유산·영웅 주변 불빛
    ctx.save();
    ctx.fillStyle = 'rgba(12,16,40,0.45)';
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
