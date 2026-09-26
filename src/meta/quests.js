// 일일·주간 임무와 출석부
import { QUEST_POOL, DAILY_COUNT, WEEKLY_COUNT, DAILY_ALL_BONUS, WEEKLY_ALL_BONUS, ATTENDANCE } from '../data/quests.js';
import { makeRng, hashSeed } from '../sim/rng.js';

const pad = (n) => String(n).padStart(2, '0');

export function dayKey(d) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// 주간 기준: 그 주 월요일
export function weekKey(d) {
  const m = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const dow = (m.getDay() + 6) % 7;
  m.setDate(m.getDate() - dow);
  return dayKey(m);
}

export function msToReset(kind, now = new Date()) {
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  if (kind === 'weekly') {
    const dow = (now.getDay() + 6) % 7;
    next.setDate(now.getDate() + (7 - dow));
  }
  return next - now;
}

export function fmtDuration(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  if (h >= 24) return `${Math.floor(h / 24)}일 ${h % 24}시간`;
  return `${h}시간 ${m}분`;
}

function pick(pool, n, seedStr) {
  const rnd = makeRng(hashSeed(seedStr));
  const arr = [...pool];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, n).map((q) => ({ id: q.id, prog: 0, claimed: false }));
}

export function ensureQuests(p, now) {
  const dk = dayKey(now);
  const wk = weekKey(now);
  if (!p.quests.daily || p.quests.daily.key !== dk) {
    p.quests.daily = { key: dk, list: pick(QUEST_POOL.daily, DAILY_COUNT, 'd' + dk), bonus: false };
  }
  if (!p.quests.weekly || p.quests.weekly.key !== wk) {
    p.quests.weekly = { key: wk, list: pick(QUEST_POOL.weekly, WEEKLY_COUNT, 'w' + wk), bonus: false };
  }
}

export function questDef(kind, id) {
  return QUEST_POOL[kind].find((q) => q.id === id);
}

export function questText(def) {
  return def.text.replace('{n}', def.n.toLocaleString('ko-KR'));
}

// 전투 통계를 반영하고 새로 완료된 임무 목록을 돌려준다
export function progressQuests(p, deltas) {
  const done = [];
  for (const kind of ['daily', 'weekly']) {
    for (const q of p.quests[kind].list) {
      const def = questDef(kind, q.id);
      if (!def) continue;
      const before = q.prog;
      q.prog = Math.min(def.n, q.prog + (deltas[def.stat] || 0));
      if (before < def.n && q.prog >= def.n) done.push({ kind, def });
    }
  }
  return done;
}

// 옥으로 임무 교체 (완료·수령 전 임무만)
export const REROLL_PRICE = { daily: 10, weekly: 30 };
export function canReroll(p, kind, i) {
  const q = p.quests[kind].list[i];
  const def = q && questDef(kind, q.id);
  return !!def && !q.claimed && q.prog < def.n;
}
export function rerollQuest(p, kind, i) {
  if (!canReroll(p, kind, i) || p.jade < REROLL_PRICE[kind]) return false;
  const list = p.quests[kind].list;
  const used = new Set(list.map((x) => x.id));
  const pool = QUEST_POOL[kind].filter((d) => !used.has(d.id));
  if (!pool.length) return false;
  p.jade -= REROLL_PRICE[kind];
  const d = pool[Math.floor(Math.random() * pool.length)];
  list[i] = { id: d.id, prog: 0, claimed: false };
  return true;
}

export function claimQuest(p, kind, i) {
  const q = p.quests[kind].list[i];
  const def = questDef(kind, q.id);
  if (!def || q.claimed || q.prog < def.n) return null;
  q.claimed = true;
  p.coins += def.reward.coins || 0;
  p.jade += def.reward.jade || 0;
  return def.reward;
}

export function bonusState(p, kind) {
  const all = p.quests[kind].list.every((q) => q.claimed);
  return { ready: all && !p.quests[kind].bonus, claimed: p.quests[kind].bonus, reward: kind === 'daily' ? DAILY_ALL_BONUS : WEEKLY_ALL_BONUS };
}

export function claimBonus(p, kind) {
  const st = bonusState(p, kind);
  if (!st.ready) return null;
  p.quests[kind].bonus = true;
  p.coins += st.reward.coins || 0;
  p.jade += st.reward.jade || 0;
  return st.reward;
}

export function claimableCount(p) {
  let n = 0;
  for (const kind of ['daily', 'weekly']) {
    p.quests[kind].list.forEach((q) => {
      const def = questDef(kind, q.id);
      if (def && !q.claimed && q.prog >= def.n) n++;
    });
    if (bonusState(p, kind).ready) n++;
  }
  if (canCheckIn(p)) n++;
  return n;
}

// ───── 출석부 (7일 순환) ─────
export function canCheckIn(p, now = new Date()) {
  return p.attendance.last !== dayKey(now);
}

export function checkIn(p, now = new Date()) {
  if (!canCheckIn(p, now)) return null;
  const idx = p.attendance.count % ATTENDANCE.length;
  const reward = ATTENDANCE[idx];
  p.attendance.count++;
  p.attendance.last = dayKey(now);
  p.coins += reward.coins || 0;
  p.jade += reward.jade || 0;
  return { idx, reward };
}
