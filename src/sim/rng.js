// 상태에 저장되는 시드 난수 (mulberry32). s.rng 에 내부 상태를 보관한다.
export function rand(s) {
  let t = (s.rng = (s.rng + 0x6d2b79f5) >>> 0);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

export function randRange(s, a, b) {
  return a + (b - a) * rand(s);
}

export function randInt(s, n) {
  return Math.floor(rand(s) * n);
}

// 문자열 → 32비트 시드
export function hashSeed(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// 독립 시드 난수 생성기 (렌더링 장식용)
export function makeRng(seed) {
  const st = { rng: seed >>> 0 };
  return () => rand(st);
}
