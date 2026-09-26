// 지도·경로 처리 (정적 데이터: 네트워크로 보내지 않고 stageId 로 양쪽에서 재구성한다)
import { MAP_W, MAP_H, STAGE_BY_ID } from '../data/stages.js';

export const T_BUILD = 0;
export const T_PATH = 1;
export const T_BLOCK = 2;
export const T_WATER = 3;
export const T_BASE = 4;

const mapCache = new Map();

export function getMap(stageId) {
  if (!mapCache.has(stageId)) mapCache.set(stageId, buildMap(STAGE_BY_ID[stageId]));
  return mapCache.get(stageId);
}

export function buildMap(stage) {
  const w = MAP_W;
  const h = MAP_H;
  const grid = new Array(w * h).fill(T_BUILD);
  const decor = [];
  for (let y = 0; y < h; y++) {
    const row = stage.grid[y];
    if (!row || row.length !== w) throw new Error(`${stage.id} 지도 ${y}행 길이 오류 (${row && row.length})`);
    for (let x = 0; x < w; x++) {
      const ch = row[x];
      if (ch === '.') continue;
      if (ch === 'f') {
        decor.push({ x, y, ch });
        continue;
      }
      grid[y * w + x] = ch === 'W' ? T_WATER : T_BLOCK;
      if (ch !== 'W') decor.push({ x, y, ch });
    }
  }
  const paths = stage.paths.map(buildPath);
  const pathTiles = new Set();
  for (const pts of stage.paths) {
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, ay] = pts[i];
      const [bx, by] = pts[i + 1];
      if (ax !== bx && ay !== by) throw new Error(`${stage.id} 경로는 축 정렬이어야 합니다`);
      const n = Math.max(Math.abs(bx - ax), Math.abs(by - ay));
      for (let k = 0; k <= n; k++) {
        const x = ax + Math.sign(bx - ax) * k;
        const y = ay + Math.sign(by - ay) * k;
        if (x < 0 || y < 0 || x >= w || y >= h) continue;
        grid[y * w + x] = T_PATH;
        pathTiles.add(y * w + x);
      }
    }
  }
  // 경로 위 장식 제거
  const cleanDecor = decor.filter((d) => !pathTiles.has(d.y * w + d.x));
  const last = stage.paths[0][stage.paths[0].length - 1];
  const base = { x: last[0], y: last[1] };
  grid[base.y * w + base.x] = T_BASE;

  // 경로 샘플 (0.25칸 간격)
  const samples = [];
  paths.forEach((p, pi) => {
    for (let d = 0; d <= p.total; d += 0.25) {
      const q = posAt(p, d);
      samples.push({ x: q.x, y: q.y, d, path: pi });
    }
  });

  return { id: stage.id, w, h, grid, decor: cleanDecor, paths, base, samples };
}

function buildPath(pts) {
  const p = pts.map(([x, y]) => ({ x: x + 0.5, y: y + 0.5 }));
  const cum = [0];
  for (let i = 1; i < p.length; i++) {
    cum.push(cum[i - 1] + Math.hypot(p[i].x - p[i - 1].x, p[i].y - p[i - 1].y));
  }
  return { pts: p, cum, total: cum[cum.length - 1] };
}

export function posAt(path, d) {
  const { pts, cum } = path;
  if (d <= 0) {
    const dx = pts[1].x - pts[0].x;
    const dy = pts[1].y - pts[0].y;
    const l = Math.hypot(dx, dy) || 1;
    return { x: pts[0].x + (dx / l) * d, y: pts[0].y + (dy / l) * d, dx: dx / l, dy: dy / l };
  }
  let i = 1;
  while (i < cum.length - 1 && cum[i] < d) i++;
  const a = pts[i - 1];
  const b = pts[i];
  const segLen = cum[i] - cum[i - 1] || 1;
  const t = Math.min(1, (d - cum[i - 1]) / segLen);
  const dx = (b.x - a.x) / segLen;
  const dy = (b.y - a.y) / segLen;
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, dx, dy };
}

export function tileAt(map, x, y) {
  if (x < 0 || y < 0 || x >= map.w || y >= map.h) return T_BLOCK;
  return map.grid[y * map.w + x];
}

// 가장 가까운 경로 지점
export function nearestOnPath(map, x, y, pathIdx = -1) {
  let best = null;
  let bd = Infinity;
  for (const s of map.samples) {
    if (pathIdx >= 0 && s.path !== pathIdx) continue;
    if (s.x < 0 || s.y < 0 || s.x > map.w || s.y > map.h) continue;
    const dd = (s.x - x) ** 2 + (s.y - y) ** 2;
    if (dd < bd) {
      bd = dd;
      best = s;
    }
  }
  return best ? { ...best, dist: Math.sqrt(bd) } : null;
}
