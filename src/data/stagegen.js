// 스테이지 도우미: 지도 장식 격자와 웨이브 스크립트를 시드로 만들어 낸다.
// 길은 경로 좌표로 그려지므로(지도 빌더가 길 위 장식을 지운다) 여기서는 지형과 장식만 정한다.
import { makeRng } from '../sim/rng.js';

const W = 24;
const H = 14;

// o: { seed, sea: {side, depth}, river: {axis, at, w}, land: [[x0,y0,x1,y1]...] (나머지는 물),
//      mountains: {side, depth}, wall: {side, w}, houses: [[x,y]...], trees, rocks, flowers, jang: [[x,y]] }
export function genGrid(o) {
  const rnd = makeRng(o.seed || 1);
  const g = Array.from({ length: H }, () => Array(W).fill('.'));
  const inside = (x, y) => x >= 0 && y >= 0 && x < W && y < H;
  const set = (x, y, ch) => inside(x, y) && (g[y][x] = ch);
  const get = (x, y) => (inside(x, y) ? g[y][x] : 'X');
  // 섬 지형: 지정한 땅 말고는 모두 물
  if (o.land) {
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) set(x, y, 'W');
    for (const [x0, y0, x1, y1] of o.land) for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) set(x, y, '.');
  }
  // 바다: 한쪽 가장자리를 물결치듯 채운다
  if (o.sea) {
    const { side, depth } = o.sea;
    const along = side === 'left' || side === 'right' ? H : W;
    let d = depth;
    for (let i = 0; i < along; i++) {
      d = Math.max(1, Math.min(depth + 2, d + (rnd() < 0.5 ? -1 : 1) * (rnd() < 0.55 ? 1 : 0)));
      for (let k = 0; k < d; k++) {
        if (side === 'left') set(k, i, 'W');
        else if (side === 'right') set(W - 1 - k, i, 'W');
        else if (side === 'top') set(i, k, 'W');
        else set(i, H - 1 - k, 'W');
      }
    }
  }
  // 강: 가로 또는 세로 띠
  if (o.river) {
    const { axis, at, w = 2 } = o.river;
    let c = at;
    const len = axis === 'v' ? H : W;
    for (let i = 0; i < len; i++) {
      if (i % 3 === 0 && rnd() < 0.5) c += rnd() < 0.5 ? -1 : 1;
      c = Math.max(at - 1, Math.min(at + 1, c));
      for (let k = 0; k < w; k++) (axis === 'v' ? set(c + k, i, 'W') : set(i, c + k, 'W'));
    }
  }
  // 산줄기
  if (o.mountains) {
    const { side, depth = 1, from = 0, to = side === 'left' || side === 'right' ? H - 1 : W - 1 } = o.mountains;
    for (let i = from; i <= to; i++) {
      const d = depth + (rnd() < 0.35 ? 1 : 0);
      for (let k = 0; k < d; k++) {
        if (side === 'top') set(i, k, 'M');
        else if (side === 'bottom') set(i, H - 1 - k, 'M');
        else if (side === 'left') set(k, i, 'M');
        else set(W - 1 - k, i, 'M');
      }
    }
  }
  // 성벽(궁궐 담장)
  if (o.wall) {
    const { side, w = 3 } = o.wall;
    for (let y = 0; y < H; y++) for (let k = 0; k < w; k++) (side === 'right' ? set(W - 1 - k, y, 'K') : side === 'left' ? set(k, y, 'K') : null);
    if (side === 'top' || side === 'bottom') for (let x = 0; x < W; x++) for (let k = 0; k < w; k++) set(x, side === 'top' ? k : H - 1 - k, 'K');
  }
  for (const [x, y] of o.houses || []) set(x, y, 'H');
  for (const [x, y] of o.jang || []) set(x, y, 'J');
  // 가장자리 나무
  const border = o.trees ?? 0.45;
  for (let x = 0; x < W; x++) {
    for (const y of [0, H - 1]) if (get(x, y) === '.' && rnd() < border) set(x, y, 'T');
  }
  for (let y = 0; y < H; y++) {
    for (const x of [0, W - 1]) if (get(x, y) === '.' && rnd() < border * 0.6) set(x, y, 'T');
  }
  const scatter = (n, ch) => {
    for (let i = 0; i < n; i++) {
      const x = Math.floor(rnd() * W);
      const y = Math.floor(rnd() * H);
      if (get(x, y) === '.') set(x, y, ch);
    }
  };
  scatter(o.inner ?? 4, 'T');
  scatter(o.rocks ?? 5, 'R');
  scatter(o.flowers ?? 9, 'f');
  return g.map((r) => r.join(''));
}

// 웨이브 생성: level(0~24)이 오를수록 정예·중장이 일찍, 많이 나온다.
// weights: 종류별 가중치(테마), boss: {파도번호: '적장' 또는 ['적장', 경로]}, paths: 길 수
const POOL = [
  // 코드, 등급, 등장 최소 level, 비용(아시가루 = 1), 간격
  ['ash', 1, 0, 1, 0.7], ['sco', 1, 0, 0.75, 0.45], ['tep', 1, 0, 1.25, 0.9],
  ['sam', 2, 1, 5, 1.6], ['cav', 2, 2, 4.4, 1.1], ['nin', 2, 3, 4.6, 1.2], ['onm', 2, 4, 5.2, 2.2], ['drm', 2, 4, 5.4, 3],
  ['arm', 3, 6, 13, 2.6], ['ram', 3, 7, 17, 3.6],
];

export function genWaves({ seed, n, level, weights = {}, boss = {}, paths = 1, budget = 1 }) {
  const rnd = makeRng(seed);
  const out = [];
  for (let w = 1; w <= n; w++) {
    const t = w / n;
    const total = (12 + level * 1.6) * (0.45 + t * 1.35) * budget;
    const allowed = POOL.filter(([, tier, minLv]) => minLv <= level && (tier === 1 || w >= (tier === 2 ? 3 : Math.ceil(n * 0.35))));
    const groups = [];
    let left = total;
    let delay = 0;
    const nGroups = w < 3 ? 2 : 2 + Math.floor(rnd() * 2) + (t > 0.6 ? 1 : 0);
    for (let gi = 0; gi < nGroups && left > 0.5; gi++) {
      // 가중치 추첨 (테마 가중치 × 후반일수록 상위 등급 선호)
      const scored = allowed.map((p) => [p, (weights[p[0]] ?? 1) * (p[1] === 1 ? 1.4 - t * 0.6 : p[1] === 2 ? 0.6 + t : 0.3 + t * 1.2)]);
      const sum = scored.reduce((a, [, v]) => a + v, 0);
      let r = rnd() * sum;
      let pick = scored[0][0];
      for (const [p, v] of scored) {
        r -= v;
        if (r <= 0) {
          pick = p;
          break;
        }
      }
      const [code, tier, , cost, gap] = pick;
      const share = gi === nGroups - 1 ? left : left * (0.3 + rnd() * 0.35);
      const cnt = Math.max(1, Math.round(share / cost));
      left -= cnt * cost;
      const g = Math.round(gap * (1.1 - t * 0.35) * 10) / 10;
      const path = paths > 1 ? (rnd() < 0.75 ? 'a' : String(Math.floor(rnd() * paths))) : null;
      groups.push(`${code}${cnt > 1 ? `*${cnt}@${g}` : ''}${delay ? `+${delay}` : ''}${path !== null ? `>${path}` : ''}`);
      delay += Math.round(2 + rnd() * 4 + (tier >= 2 ? 2 : 0));
    }
    const b = boss[w];
    if (b) {
      const [name, bp] = Array.isArray(b) ? b : [b, 0];
      groups.unshift(`${name}${paths > 1 ? `>${bp}` : ''}`);
      // 적장 뒤로 호위가 따라오게 나머지를 조금 늦춘다
      for (let i = 1; i < groups.length; i++) groups[i] = groups[i].includes('+') ? groups[i].replace(/\+(\d+)/, (_, d) => `+${+d + 4}`) : groups[i].replace(/(>[0-9a])?$/, (m) => `+4${m || ''}`);
    }
    out.push(groups.join(', '));
  }
  return out;
}
