// 플레이어 기록: 재화, 해금, 영구 강화, 설정 (localStorage)
import { HERO_ORDER, HEROES, heroMetaCost, HERO_META_MAX } from '../data/heroes.js';
import { SKILL_ORDER, SKILLS, skillMetaCost, SKILL_META_MAX } from '../data/skills.js';
import { TOWER_ORDER } from '../data/towers.js';
import { STAGES, START_TOWERS, STAGE_BY_ID, DIFFICULTY, DIFF_ORDER } from '../data/stages.js';
import { RANKS, rankXpNeeded, towerMetaCost, TOWER_META_MAX, battleRewards } from '../data/quests.js';
import { ensureQuests, progressQuests } from './quests.js';
import { ITEMS, ITEM_ORDER, ITEM_BUNDLE } from '../data/items.js';
import { skinDef } from '../data/skins.js';

export const HERO_JADE_UNLOCK = 120; // 전장 조건 없이 옥으로 바로 해금

const KEY = 'hoguk.profile.v1';

export function defaultProfile() {
  return {
    v: 1,
    name: '수호자',
    coins: 300,
    jade: 20,
    rank: 0,
    rankXp: 0,
    heroes: Object.fromEntries(HERO_ORDER.map((id) => [id, { unlocked: !HEROES[id].unlock, lv: 0 }])),
    skills: Object.fromEntries(SKILL_ORDER.map((id) => [id, { lv: 0 }])),
    towers: Object.fromEntries(TOWER_ORDER.map((id) => [id, { lv: 0 }])),
    towersUnlocked: [...START_TOWERS],
    items: Object.fromEntries(ITEM_ORDER.map((id) => [id, 0])),
    skins: { owned: [], eq: {} },
    stages: {},
    loadout: {
      solo: { heroes: ['yi', 'sejong'], skills: ['singijeon', 'bongsu'] },
      coop: { hero: 'yi', skills: ['singijeon', 'bongsu'] },
      p2: { hero: 'sejong', skills: ['bongsu', 'singijeon'] },
    },
    quests: { daily: null, weekly: null },
    attendance: { last: '', count: 0 },
    stats: { games: 0, wins: 0, kills: 0, combos: 0, bossKills: 0 },
    // shakeLv: 화면 흔들림 0 끔 · 1 약하게 · 2 보통
    settings: { sfx: 0.7, bgm: 0.35, dmgNumbers: true, shakeLv: 1, hints: true },
    tutorialDone: false,
  };
}

let profile = null;

export function loadProfile() {
  const d = defaultProfile();
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem(KEY) || 'null');
  } catch {
    saved = null;
  }
  profile = saved ? merge(d, saved) : d;
  // 새로 생긴 유산: 이미 이긴 전장이 해금하는 유산은 바로 열어 준다
  for (const st of STAGES) {
    if (!Object.values(profile.stages[st.id] || {}).some((v) => v > 0)) continue;
    for (const t of st.unlockTowers) if (!profile.towersUnlocked.includes(t)) profile.towersUnlocked.push(t);
  }
  // 예전 켜기/끄기 설정: 끈 사람만 그대로 끔, 켠 사람은 새 기본값(약하게)
  if (profile.settings.shake !== undefined) {
    if (profile.settings.shake === false) profile.settings.shakeLv = 0;
    delete profile.settings.shake;
  }
  ensureQuests(profile, new Date());
  return profile;
}

function merge(def, src) {
  if (Array.isArray(def)) return Array.isArray(src) ? src : def;
  if (typeof def !== 'object' || def === null) return src === undefined ? def : src;
  const out = { ...def };
  for (const k of Object.keys(src || {})) {
    out[k] = k in def ? merge(def[k], src[k]) : src[k];
  }
  return out;
}

export function getProfile() {
  return profile || loadProfile();
}

export function saveProfile() {
  try {
    localStorage.setItem(KEY, JSON.stringify(profile));
  } catch {
    /* 저장소를 쓸 수 없는 환경: 이번 세션에서만 유지 */
  }
}

export function resetProfile() {
  profile = defaultProfile();
  ensureQuests(profile, new Date());
  saveProfile();
  return profile;
}

// ───── 재화 ─────
export function canPay(p, cost) {
  return (p.coins >= (cost.coins || 0)) && (p.jade >= (cost.jade || 0));
}
export function pay(p, cost) {
  if (!canPay(p, cost)) return false;
  p.coins -= cost.coins || 0;
  p.jade -= cost.jade || 0;
  saveProfile();
  return true;
}
export function give(p, reward) {
  p.coins += reward.coins || 0;
  p.jade += reward.jade || 0;
}

export function rankName(r) {
  return RANKS[Math.min(r, RANKS.length - 1)];
}

export function addRankXp(p, xp) {
  const ups = [];
  p.rankXp += xp;
  while (p.rank < RANKS.length - 1 && p.rankXp >= rankXpNeeded(p.rank)) {
    p.rankXp -= rankXpNeeded(p.rank);
    p.rank++;
    const reward = { coins: 200 + p.rank * 40, jade: 10 };
    give(p, reward);
    const newSkills = SKILL_ORDER.filter((id) => SKILLS[id].rank === p.rank);
    ups.push({ rank: p.rank, reward, skills: newSkills });
  }
  return ups;
}

// ───── 해금 조건 ─────
export function stageCleared(p, id, diff = 'normal') {
  return ((p.stages[id] || {})[diff] || 0) > 0;
}
export function stageUnlocked(p, id) {
  const i = STAGES.findIndex((s) => s.id === id);
  return i <= 0 || stageCleared(p, STAGES[i - 1].id);
}
export function diffUnlocked(p, id, diff) {
  if (!stageUnlocked(p, id)) return false;
  const i = DIFF_ORDER.indexOf(diff);
  return i <= 0 || stageCleared(p, id, DIFF_ORDER[i - 1]);
}
export function skillUnlocked(p, id) {
  return p.rank >= SKILLS[id].rank;
}
export function heroUnlockState(p, id) {
  const u = HEROES[id].unlock;
  if (!u || p.heroes[id].unlocked) return { unlocked: true };
  const stageOk = !u.stage || stageCleared(p, u.stage);
  return { unlocked: false, stageOk, cost: { coins: u.coins }, stage: u.stage && STAGE_BY_ID[u.stage].name };
}
export function unlockHero(p, id) {
  const st = heroUnlockState(p, id);
  if (st.unlocked || !st.stageOk || !pay(p, st.cost)) return false;
  p.heroes[id].unlocked = true;
  saveProfile();
  return true;
}
export function unlockHeroJade(p, id) {
  const st = heroUnlockState(p, id);
  if (st.unlocked || !pay(p, { jade: HERO_JADE_UNLOCK })) return false;
  p.heroes[id].unlocked = true;
  saveProfile();
  return true;
}

// ───── 옥 상점: 보급품 · 의복 ─────
export function itemPrice(id, n = 1) {
  const unit = ITEMS[id].price;
  return n >= ITEM_BUNDLE ? unit * (n - 1) : unit * n;
}
export function buyItem(p, id, n = 1) {
  if (!ITEMS[id] || !pay(p, { jade: itemPrice(id, n) })) return false;
  p.items[id] = (p.items[id] || 0) + n;
  saveProfile();
  return true;
}
export function spendItem(p, id) {
  if (!(p.items[id] > 0)) return false;
  p.items[id]--;
  saveProfile();
  return true;
}
export function ownsSkin(p, skinId) {
  return p.skins.owned.includes(skinId);
}
export function buySkin(p, heroId, skinId) {
  const sk = skinDef(heroId, skinId);
  if (!sk || ownsSkin(p, skinId) || !pay(p, { jade: sk.price })) return false;
  p.skins.owned.push(skinId);
  p.skins.eq[heroId] = skinId;
  saveProfile();
  return true;
}
export function equipSkin(p, heroId, skinId) {
  if (skinId && !ownsSkin(p, skinId)) return false;
  p.skins.eq[heroId] = skinId || null;
  saveProfile();
  return true;
}
export function heroSkin(p, heroId) {
  const id = p.skins.eq[heroId];
  return id && ownsSkin(p, id) ? id : null;
}

// ───── 영구 강화 ─────
export function upgradeHero(p, id) {
  const h = p.heroes[id];
  if (!h.unlocked || h.lv >= HERO_META_MAX) return false;
  if (!pay(p, { coins: heroMetaCost(h.lv) })) return false;
  h.lv++;
  saveProfile();
  return true;
}
export function upgradeSkill(p, id) {
  const s = p.skills[id];
  if (!skillUnlocked(p, id) || s.lv >= SKILL_META_MAX) return false;
  if (!pay(p, { coins: skillMetaCost(s.lv) })) return false;
  s.lv++;
  saveProfile();
  return true;
}
export function upgradeTower(p, id) {
  const t = p.towers[id];
  if (!p.towersUnlocked.includes(id) || t.lv >= TOWER_META_MAX) return false;
  if (!pay(p, { coins: towerMetaCost(t.lv) })) return false;
  t.lv++;
  saveProfile();
  return true;
}

// 시뮬레이션에 넘길 플레이어 정보
export function playerSpec(p, heroes, skills, name, opts = {}) {
  return {
    name: name || p.name,
    heroes,
    skills,
    items: opts.noItems ? {} : { ...p.items },
    skins: Object.fromEntries(heroes.map((id) => [id, heroSkin(p, id)])),
    towers: [...p.towersUnlocked],
    heroLv: Object.fromEntries(heroes.map((h) => [h, p.heroes[h].lv])),
    skillLv: Object.fromEntries(skills.map((s) => [s, p.skills[s].lv])),
    towerLv: Object.fromEntries(TOWER_ORDER.map((t) => [t, p.towers[t].lv])),
  };
}

// ───── 전투 결과 반영 ─────
export function applyBattle(p, { stageId, difficulty, mode, result, stats }) {
  const win = result.win;
  const prevStars = (p.stages[stageId] || {})[difficulty] || 0;
  const firstClear = win && prevStars === 0;
  const rewards = battleRewards({ win, stars: result.stars, wavesCleared: result.wavesCleared, firstClear, diffReward: DIFFICULTY[difficulty].reward });
  give(p, rewards);
  const rankUps = addRankXp(p, rewards.xp);
  if (win) {
    p.stages[stageId] = p.stages[stageId] || {};
    p.stages[stageId][difficulty] = Math.max(prevStars, result.stars);
  }
  const newTowers = [];
  if (win) {
    for (const t of STAGE_BY_ID[stageId].unlockTowers) {
      if (!p.towersUnlocked.includes(t)) {
        p.towersUnlocked.push(t);
        newTowers.push(t);
      }
    }
  }
  const coop = mode !== 'solo';
  const deltas = {
    ...stats,
    wins: win ? 1 : 0,
    coopGames: coop ? 1 : 0,
    coopWins: coop && win ? 1 : 0,
    stars: win ? result.stars : 0,
    hardWins: win && difficulty !== 'normal' ? 1 : 0,
  };
  ensureQuests(p, new Date());
  const questDone = progressQuests(p, deltas);
  p.stats.games++;
  if (win) p.stats.wins++;
  p.stats.kills += stats.kills || 0;
  p.stats.combos += stats.combos || 0;
  p.stats.bossKills += stats.bossKills || 0;
  saveProfile();
  return { rewards, rankUps, newTowers, questDone, firstClear };
}
