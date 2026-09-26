// 출정 지도 · 출전 준비 · 협동(로컬/온라인 로비) · 전투 결과
import { h, clear, toast, modal, fmt, starStr } from './dom.js';
import { setBackdrop } from './backdrop.js';
import { topbar, rewardText, plainReward } from './screens-menu.js';
import { heroPortrait } from './icons.js';
import { towerIcon } from '../render/draw-towers.js';
import { renderMapBackground } from '../render/draw-map.js';
import { getMap } from '../sim/map.js';
import { STAGES, STAGE_BY_ID, DIFFICULTY, DIFF_ORDER, parseWave } from '../data/stages.js';
import { ENEMIES } from '../data/enemies.js';
import { HEROES, HERO_ORDER } from '../data/heroes.js';
import { SKILLS, SKILL_ORDER, skillDesc } from '../data/skills.js';
import { TOWERS } from '../data/towers.js';
import { findCombo } from '../data/combos.js';
import { RANKS } from '../data/quests.js';
import { stageUnlocked, diffUnlocked, heroUnlockState, skillUnlocked, playerSpec, saveProfile, rankName } from '../meta/profile.js';
import { questText } from '../meta/quests.js';
import { Net } from '../net/net.js';
import { audio } from '../audio/audio.js';

const SVGNS = 'http://www.w3.org/2000/svg';
const svg = (tag, attrs = {}, ...kids) => {
  const el = document.createElementNS(SVGNS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  for (const k of kids) if (k) el.append(k);
  return el;
};

// 한반도 윤곽 (위경도 → 좌표 근사)
const KOREA = [
  [31, 148], [60, 120], [95, 100], [130, 80], [165, 61], [195, 40], [217, 15], [240, 30], [260, 47], [245, 80], [225, 105], [190, 130], [160, 150],
  [144, 157], [150, 175], [140, 192], [155, 205], [175, 225], [195, 256], [205, 290], [212, 335], [209, 357], [201, 378], [185, 385], [178, 392],
  [160, 390], [150, 394], [130, 400], [107, 415], [104, 392], [110, 365], [115, 338], [108, 320], [100, 302], [111, 270], [100, 258], [78, 245],
  [64, 249], [67, 211], [80, 200], [71, 171], [50, 160],
];

function koreaMap(p, selected, onPick) {
  const pts = KOREA.map(([x, y]) => `${x},${y}`).join(' ');
  const root = svg('svg', { viewBox: '0 0 280 470', role: 'img', 'aria-label': '임진왜란 전장 지도' },
    svg('rect', { x: 0, y: 0, width: 280, height: 470, fill: '#16222a', rx: 8 }),
    svg('polygon', { points: pts, fill: '#e7dcc2', stroke: '#1b1a17', 'stroke-width': 2, 'stroke-linejoin': 'round' }),
    svg('ellipse', { cx: 107, cy: 452, rx: 16, ry: 8, fill: '#e7dcc2', stroke: '#1b1a17', 'stroke-width': 1.5 }),
  );
  // 백두대간 붓질
  const ridge = svg('path', { d: 'M165 61 C 170 110, 160 140, 150 175 S 170 230, 185 260 S 195 320, 190 350', fill: 'none', stroke: 'rgba(60,70,50,0.35)', 'stroke-width': 7, 'stroke-linecap': 'round' });
  root.append(ridge);
  // 전장 순서 선
  const order = STAGES.map((s) => s.region);
  root.append(svg('polyline', { points: order.map((r) => `${r.x},${r.y}`).join(' '), fill: 'none', stroke: '#b8322a', 'stroke-width': 1.6, 'stroke-dasharray': '4 4', opacity: 0.8 }));
  STAGES.forEach((st, i) => {
    const unlocked = stageUnlocked(p, st.id);
    const stars = Math.max(0, ...DIFF_ORDER.map((d) => (p.stages[st.id] || {})[d] || 0));
    const sel = st.id === selected;
    const g = svg('g', { class: 'stage-node', tabindex: unlocked ? 0 : -1, role: 'button', 'aria-label': `${st.name}${unlocked ? '' : ' (잠김)'}` },
      svg('circle', { cx: st.region.x, cy: st.region.y, r: sel ? 13 : 10, fill: unlocked ? (sel ? '#b8322a' : '#7a221c') : '#555', stroke: sel ? '#f0c75e' : '#efe4cc', 'stroke-width': sel ? 3 : 1.5 }),
      svg('text', { x: st.region.x, y: st.region.y + 4, 'text-anchor': 'middle', fill: '#fff', 'font-size': 11, 'font-family': 'Black Han Sans, sans-serif' }, document.createTextNode(unlocked ? String(i + 1) : '🔒')),
    );
    const label = svg('text', { x: st.region.x + (i === 3 ? -16 : 16), y: st.region.y + (i === 4 ? -12 : 4), 'text-anchor': i === 3 ? 'end' : 'start', fill: '#1b1a17', 'font-size': 11, 'font-family': 'Gowun Batang, serif', 'font-weight': 700 },
      document.createTextNode(`${st.name}${stars ? ' ' + '★'.repeat(stars) : ''}`));
    const bg = svg('text', { x: label.getAttribute('x'), y: label.getAttribute('y'), 'text-anchor': label.getAttribute('text-anchor'), stroke: '#e7dcc2', 'stroke-width': 3, 'font-size': 11, 'font-family': 'Gowun Batang, serif', 'font-weight': 700 }, document.createTextNode(label.textContent));
    root.append(bg, label, g);
    if (unlocked) {
      g.addEventListener('click', () => onPick(st.id));
      g.addEventListener('keydown', (e) => e.key === 'Enter' && onPick(st.id));
    }
  });
  root.append(svg('text', { x: 18, y: 28, fill: '#e7dcc2', 'font-size': 20, 'font-family': 'Nanum Brush Script, serif' }, document.createTextNode('임진년 전장도')));
  return h('div', { class: 'korea' }, root);
}

function diffSeg(p, stageId, value, onChange) {
  return h('div', { class: 'seg', role: 'group', 'aria-label': '난이도' }, DIFF_ORDER.map((d) => {
    const ok = diffUnlocked(p, stageId, d);
    return h('button', {
      'aria-pressed': String(d === value), disabled: !ok, title: ok ? DIFFICULTY[d].name : '이전 난이도를 먼저 깨야 합니다',
      onclick: () => onChange(d),
    }, DIFFICULTY[d].name);
  }));
}

function stageSummary(st) {
  const bosses = new Set();
  const kinds = new Set();
  for (const w of st.waves) for (const g of parseWave(w)) (ENEMIES[g.type].tier === 4 ? bosses : kinds).add(g.type);
  return { bosses: [...bosses].map((b) => ENEMIES[b].name), kinds: [...kinds] };
}

// ───────────── 출정 지도 ─────────────
export function campaignScreen(app, params = {}) {
  setBackdrop('lacquer');
  const p = app.profile;
  const stageId = params.stage || [...STAGES].reverse().find((s) => stageUnlocked(p, s.id)).id;
  const st = STAGE_BY_ID[stageId];
  let diff = params.diff && diffUnlocked(p, stageId, params.diff) ? params.diff : 'normal';
  const thumb = renderMapBackground(getMap(stageId), st, 1);
  thumb.className = 'stage-thumb';
  const sum = stageSummary(st);
  const rec = p.stages[stageId] || {};
  const info = h('div', { class: 'panel stage-info' },
    h('div', { class: 'row' }, h('h2', {}, st.name), h('span', { class: 'chip' }, st.date), h('span', { class: 'spacer' }),
      h('button', { class: 'btn btn-seal btn-big', onclick: () => app.go('loadout', { stageId, difficulty: diff }) }, '출전 준비')),
    thumb,
    h('p', {}, st.desc),
    h('div', { class: 'kv' },
      h('dt', {}, '파도'), h('dd', {}, `${st.waves.length}파 · 길 ${getMap(stageId).paths.length}갈래`),
      h('dt', {}, '적장'), h('dd', {}, sum.bosses.join(', ')),
      h('dt', {}, '출현'), h('dd', {}, sum.kinds.map((k) => ENEMIES[k].name).join(' · ')),
      h('dt', {}, '첫 승리'), h('dd', {}, st.unlockTowers.length ? `유산 해금: ${st.unlockTowers.map((t) => TOWERS[t].name).join(', ')} · 옥 30` : '옥 30'),
      h('dt', {}, '기록'), h('dd', {}, DIFF_ORDER.map((d) => h('span', { style: { marginRight: '10px' } }, `${DIFFICULTY[d].name} `, starStr(rec[d] || 0))))),
    h('div', { class: 'row' }, diffSeg(p, stageId, diff, (d) => app.go('campaign', { stage: stageId, diff: d })),
      h('span', { class: 'dim', style: { fontSize: '12px' } }, diff === 'normal' ? '' : `적 체력 ×${DIFFICULTY[diff].hp} · 민심 ${DIFFICULTY[diff].lives} · 보상 ×${DIFFICULTY[diff].reward}`)),
  );
  return h('div', { class: 'screen' }, topbar(app, '홀로 출정'),
    h('div', { class: 'content campaign' }, koreaMap(p, stageId, (id) => app.go('campaign', { stage: id })), info));
}

// ───────────── 영웅 · 비기 고르기 ─────────────
function heroPicker(app, selected, max, onChange, taken = []) {
  const p = app.profile;
  return h('div', { class: 'grid-cards' }, HERO_ORDER.map((id) => {
    const def = HEROES[id];
    const st = heroUnlockState(p, id);
    const idx = selected.indexOf(id);
    const isTaken = taken.includes(id);
    const card = h('button', {
      class: `card${st.unlocked ? '' : ' locked'}`, 'aria-pressed': String(idx >= 0), disabled: isTaken,
      title: st.unlocked ? `${def.name} — ${def.role}` : `잠김: ${st.stage ? st.stage + ' 승리 후 ' : ''}엽전 ${st.cost.coins}`,
      onclick: () => {
        if (!st.unlocked) return toast(`영웅 화면에서 해금할 수 있습니다 (${st.stage ? st.stage + ' 승리, ' : ''}엽전 ${st.cost.coins})`);
        const next = [...selected];
        if (idx >= 0) next.splice(idx, 1);
        else {
          if (next.length >= max) next.shift();
          next.push(id);
        }
        audio.play('ui');
        onChange(next);
      },
    },
    h('div', { class: 'pic' }, heroPortrait(id, 90, 0)),
    idx >= 0 && max > 1 ? h('span', { class: 'sel-no' }, idx + 1) : null,
    h('span', { class: 'nm' }, def.name, h('span', { class: 'dim', style: { fontSize: '12px' } }, ` ${def.title}`)),
    h('span', { class: 'sub' }, isTaken ? '동료가 선택함' : st.unlocked ? `${def.role} · 강화 ${p.heroes[id].lv}` : '🔒 잠김'));
    return card;
  }));
}

function skillPicker(app, selected, onChange) {
  const p = app.profile;
  return h('div', { class: 'grid-cards' }, SKILL_ORDER.map((id) => {
    const sd = SKILLS[id];
    const ok = skillUnlocked(p, id);
    const idx = selected.indexOf(id);
    return h('button', {
      class: `card${ok ? '' : ' locked'}`, 'aria-pressed': String(idx >= 0),
      title: ok ? skillDesc(id, p.skills[id].lv) : `${RANKS[sd.rank]} 달성 시 해금`,
      onclick: () => {
        if (!ok) return toast(`품계 ${RANKS[sd.rank]}에 오르면 해금됩니다`);
        const next = [...selected];
        if (idx >= 0) next.splice(idx, 1);
        else {
          if (next.length >= 2) next.shift();
          next.push(id);
        }
        audio.play('ui');
        onChange(next);
      },
    },
    idx >= 0 ? h('span', { class: 'sel-no' }, idx === 0 ? 'D' : 'F') : null,
    h('span', { class: 'nm' }, sd.name),
    h('span', { class: 'sub' }, ok ? `재사용 ${sd.cd}초 · 강화 ${p.skills[id].lv}` : `🔒 ${RANKS[sd.rank]}`),
    h('span', { class: 'sub', style: { color: '#e9d7b0' } }, ok ? skillDesc(id, p.skills[id].lv) : ''));
  }));
}

function comboPreview(a, b) {
  if (!a || !b) return h('div', { class: 'panel' }, h('span', { class: 'dim' }, '두 영웅을 고르면 합격기가 정해집니다.'));
  const c = findCombo(a, b);
  return h('div', { class: 'panel row', style: { alignItems: 'flex-start' } },
    heroPortrait(a, 56, 0), heroPortrait(b, 56, 1),
    h('div', { class: 'stack', style: { gap: '4px', flex: 1, minWidth: '200px' } },
      h('span', { class: 'dim', style: { fontSize: '12px' } }, c.id === 'generic' ? '합격기 (기본)' : '합격기 · 전용 조합'),
      h('span', { class: 'brush', style: { fontSize: '34px', color: 'var(--gold-hi)' } }, c.name),
      h('span', {}, c.desc)));
}

export function loadoutScreen(app, params) {
  setBackdrop('lacquer');
  const p = app.profile;
  const lo = p.loadout.solo;
  const valid = (list, fn) => list.filter(fn);
  lo.heroes = valid(lo.heroes, (id) => heroUnlockState(p, id).unlocked);
  lo.skills = valid(lo.skills, (id) => skillUnlocked(p, id));
  const st = STAGE_BY_ID[params.stageId];
  const rerender = () => app.go('loadout', params);
  const ready = lo.heroes.length === 2 && lo.skills.length === 2;
  return h('div', { class: 'screen' }, topbar(app, '출전 준비', { back: 'campaign' }),
    h('div', { class: 'content stack' },
      h('div', { class: 'panel row' }, h('span', { class: 'brush', style: { fontSize: '30px', color: 'var(--gold-hi)' } }, st.name),
        h('span', { class: 'chip' }, DIFFICULTY[params.difficulty].name), h('span', { class: 'dim' }, '홀로 출정에서는 두 영웅을 모두 지휘합니다.'),
        h('span', { class: 'spacer' }),
        h('button', {
          class: 'btn btn-seal btn-big', disabled: !ready, onclick: () => {
            saveProfile();
            app.startBattle({ kind: 'solo', stageId: params.stageId, difficulty: params.difficulty, specs: [playerSpec(p, lo.heroes, lo.skills)] });
          },
        }, ready ? '출전!' : '영웅 2명 · 비기 2개')),
      h('h3', {}, `영웅 선택 (${lo.heroes.length}/2)`),
      heroPicker(app, lo.heroes, 2, (next) => { lo.heroes = next; rerender(); }),
      comboPreview(lo.heroes[0], lo.heroes[1]),
      h('h3', {}, `비기 장착 (${lo.skills.length}/2)`),
      skillPicker(app, lo.skills, (next) => { lo.skills = next; rerender(); }),
    ));
}

// ───────────── 협동 ─────────────
export function coopScreen(app) {
  setBackdrop('lacquer');
  const netOk = Net.available();
  const codeInput = h('input', { type: 'text', id: 'room-code', maxlength: 4, placeholder: '방 코드', 'aria-label': '방 코드', style: { width: '110px', textTransform: 'uppercase', fontFamily: 'var(--f-bold)', letterSpacing: '0.2em' } });
  const status = h('p', { class: 'dim', role: 'status' }, netOk ? '서버에 연결해 방을 만들거나, 친구의 코드로 참가하세요.' : '');
  const go = async (fn) => {
    const net = new Net();
    status.textContent = '연결 중…';
    try {
      await fn(net);
      app.go('lobby', { net });
    } catch (e) {
      net.close();
      status.textContent = `연결하지 못했습니다: ${e.message}. node server/server.js 로 서버를 켠 주소로 접속했는지 확인하세요.`;
    }
  };
  return h('div', { class: 'screen' }, topbar(app, '협동 출정'),
    h('div', { class: 'content lobby' },
      h('div', { class: 'panel stack' },
        h('h3', {}, '한 화면 협동 (로컬 2인)'),
        h('p', {}, '한 대의 컴퓨터로 둘이 함께. 1P는 마우스와 왼손 키, 2P는 방향키와 오른쪽 키로 영웅을 직접 몰며 발밑에 유산을 세웁니다.'),
        h('div', { class: 'keys' },
          [['1P', '마우스 · Q W 기술 · D F 비기 · Space 합격기'], ['2P', '← ↑ → ↓ 이동 · Enter 건설/강화 · / . 기술 · ; \' 비기 · 우Shift 합격기']].flatMap(([k, d]) => [h('kbd', {}, k), h('span', {}, d)])),
        h('div', {}, h('button', { class: 'btn btn-seal', onclick: () => app.go('localSetup') }, '로컬 협동 준비'))),
      h('div', { class: 'panel stack' },
        h('h3', {}, '온라인 협동 (방 코드)'),
        h('p', {}, '호스트가 방을 만들고 코드를 알려 주면 친구가 참가합니다. 두 사람 모두 같은 서버 주소로 접속해야 합니다.'),
        netOk ? null : h('p', { style: { color: '#ffb3a6' } }, '지금은 서버 없이 실행 중이라 온라인 방을 만들 수 없습니다. 터미널에서 node server/server.js 를 실행하고 표시되는 주소로 접속하세요. 로컬 협동은 지금 바로 할 수 있습니다.'),
        h('div', { class: 'row' },
          h('button', { class: 'btn btn-blue', disabled: !netOk, onclick: () => go((n) => n.create()) }, '방 만들기'),
          codeInput,
          h('button', { class: 'btn', disabled: !netOk, onclick: () => go((n) => n.join(codeInput.value.trim())) }, '참가')),
        status),
    ));
}

function stageSelect(p, stageId, diff, onChange) {
  const sel = h('select', { id: 'stage-select', 'aria-label': '전장', style: { background: '#1c1511', border: '1px solid var(--line)', borderRadius: '6px', padding: '8px' } },
    STAGES.filter((s) => stageUnlocked(p, s.id)).map((s) => h('option', { value: s.id, selected: s.id === stageId }, `${s.name} (${s.waves.length}파)`)));
  sel.addEventListener('change', () => onChange(sel.value, 'normal'));
  return h('div', { class: 'row' }, sel, diffSeg(p, stageId, diff, (d) => onChange(stageId, d)));
}

export function localSetupScreen(app, params = {}) {
  setBackdrop('lacquer');
  const p = app.profile;
  const a = p.loadout.coop;
  const b = p.loadout.p2;
  if (!heroUnlockState(p, a.hero).unlocked) a.hero = 'yi';
  if (!heroUnlockState(p, b.hero).unlocked || b.hero === a.hero) b.hero = HERO_ORDER.find((id) => id !== a.hero && heroUnlockState(p, id).unlocked);
  a.skills = a.skills.filter((id) => skillUnlocked(p, id));
  b.skills = b.skills.filter((id) => skillUnlocked(p, id));
  const stageId = params.stageId || [...STAGES].reverse().find((s) => stageUnlocked(p, s.id)).id;
  const diff = params.difficulty || 'normal';
  const rerender = (extra = {}) => app.go('localSetup', { stageId, difficulty: diff, ...extra });
  const ready = a.hero && b.hero && a.hero !== b.hero && a.skills.length === 2 && b.skills.length === 2;
  const col = (who, lo, other, color) => h('div', { class: 'panel stack', style: { borderColor: color } },
    h('h3', { style: { color } }, who),
    heroPicker(app, [lo.hero], 1, (n) => { lo.hero = n[0] || lo.hero; rerender(); }, [other.hero]),
    h('h3', {}, '비기'),
    skillPicker(app, lo.skills, (n) => { lo.skills = n; rerender(); }));
  return h('div', { class: 'screen' }, topbar(app, '로컬 협동', { back: 'coop' }),
    h('div', { class: 'content stack' },
      h('div', { class: 'panel row' }, h('span', { class: 'dim' }, '전장'), stageSelect(p, stageId, diff, (s, d) => rerender({ stageId: s, difficulty: d })),
        h('span', { class: 'spacer' }),
        h('button', {
          class: 'btn btn-seal btn-big', disabled: !ready, onclick: () => {
            saveProfile();
            app.startBattle({
              kind: 'local', stageId, difficulty: diff,
              specs: [playerSpec(p, [a.hero], a.skills, '1P'), playerSpec(p, [b.hero], b.skills, '2P')],
            });
          },
        }, ready ? '함께 출전!' : '각자 영웅 1 · 비기 2')),
      comboPreview(a.hero, b.hero),
      h('div', { class: 'lobby' }, col('1P (마우스)', a, b, '#6fa8ff'), col('2P (방향키)', b, a, '#ff8a7a'))));
}

// ───────────── 온라인 로비 ─────────────
export function lobbyScreen(app, params) {
  setBackdrop('lacquer');
  const p = app.profile;
  const net = params.net;
  const host = net.role === 'host';
  const L = app.lobby || (app.lobby = {
    me: { name: p.name, hero: p.loadout.coop.hero, skills: [...p.loadout.coop.skills], ready: false, rank: p.rank },
    peer: null, stageId: STAGES[0].id, difficulty: 'normal',
  });
  if (!heroUnlockState(p, L.me.hero).unlocked) L.me.hero = 'yi';
  L.me.skills = L.me.skills.filter((id) => skillUnlocked(p, id));
  const sendMe = () => net.send({ t: 'pick', ...L.me, spec: playerSpec(p, [L.me.hero], L.me.skills, p.name) });
  const sendCfg = () => host && net.send({ t: 'cfg', stageId: L.stageId, difficulty: L.difficulty });
  const rerender = () => app.go('lobby', params);
  if (!L.bound) {
    L.bound = true;
    L.offs = [
      net.on('pick', (m) => { L.peer = m; rerender(); }),
      net.on('cfg', (m) => { L.stageId = m.stageId; L.difficulty = m.difficulty; rerender(); }),
      net.on('peer-joined', () => { toast('동료가 들어왔습니다'); audio.play('ping'); sendMe(); sendCfg(); rerender(); }),
      net.on('peer-left', () => { toast('동료가 나갔습니다'); L.peer = null; rerender(); }),
      net.on('close', () => { if (!L.started) { toast('서버와 연결이 끊겼습니다'); cleanup(); app.go('coop'); } }),
      net.on('start', (m) => { L.started = true; cleanup(false); app.startBattle({ kind: 'guest', stageId: m.stageId, difficulty: m.difficulty, net, names: m.names }); }),
    ];
    if (!host) sendMe();
  }
  const cleanup = (close = true) => {
    for (const off of L.offs || []) off();
    app.lobby = null;
    if (close) net.close();
  };
  const peerHero = L.peer && L.peer.hero;
  const clash = peerHero && peerHero === L.me.hero;
  const canStart = host && L.peer && L.peer.ready && L.me.skills.length === 2 && !clash;
  const peerBox = L.peer
    ? h('div', { class: 'stack' },
      h('div', { class: 'row' }, heroPortrait(L.peer.hero, 64, host ? 1 : 0), h('div', { class: 'stack', style: { gap: '2px' } },
        h('b', { class: 'num' }, `${L.peer.name} · ${rankName(L.peer.rank || 0)}`), h('span', {}, `${HEROES[L.peer.hero].name} · ${L.peer.skills.map((s) => SKILLS[s].name).join(', ')}`),
        h('span', { class: 'chip', style: { color: L.peer.ready ? '#7fe0b0' : '#b9aa8e' } }, L.peer.ready ? '준비 완료' : '준비 중'))))
    : h('p', { class: 'dim' }, host ? '동료를 기다리는 중… 아래 코드를 알려 주세요.' : '호스트 정보를 받는 중…');
  return h('div', { class: 'screen' },
    h('div', { class: 'topbar' },
      h('button', { class: 'btn btn-small', onclick: () => { cleanup(); app.go('coop'); } }, '← 나가기'),
      h('span', { class: 'title' }, '온라인 협동'), h('span', { class: 'spacer' }),
      h('span', { class: 'dim' }, '방 코드'), h('span', { class: 'code' }, net.code || '----'),
      h('button', {
        class: 'btn btn-small', onclick: () => navigator.clipboard?.writeText(net.code).then(() => toast('코드를 복사했습니다'), () => toast(`코드: ${net.code}`)),
      }, '복사')),
    h('div', { class: 'content stack' },
      h('div', { class: 'panel row' },
        h('span', { class: 'dim' }, '전장'),
        host ? stageSelect(p, L.stageId, L.difficulty, (s, d) => { L.stageId = s; L.difficulty = d; sendCfg(); rerender(); })
          : h('span', { class: 'chip' }, `${STAGE_BY_ID[L.stageId].name} · ${DIFFICULTY[L.difficulty].name}`),
        h('span', { class: 'spacer' }),
        host ? h('button', {
          class: 'btn btn-seal btn-big', disabled: !canStart, onclick: () => {
            const seed = (Math.random() * 1e9) | 0;
            const specs = [playerSpec(p, [L.me.hero], L.me.skills, p.name), L.peer.spec];
            p.loadout.coop = { hero: L.me.hero, skills: L.me.skills };
            saveProfile();
            L.started = true;
            net.send({ t: 'start', seed, stageId: L.stageId, difficulty: L.difficulty, names: [p.name, L.peer.name] });
            cleanup(false);
            app.startBattle({ kind: 'host', stageId: L.stageId, difficulty: L.difficulty, specs, seed, net, names: [p.name, L.peer.name] });
          },
        }, canStart ? '함께 출전!' : '동료 준비 대기')
          : h('button', {
            class: `btn btn-big ${L.me.ready ? 'btn-blue' : 'btn-seal'}`, disabled: clash || L.me.skills.length !== 2,
            onclick: () => { L.me.ready = !L.me.ready; p.loadout.coop = { hero: L.me.hero, skills: L.me.skills }; saveProfile(); sendMe(); rerender(); },
          }, L.me.ready ? '준비 취소' : '준비 완료')),
      clash ? h('p', { style: { color: '#ffb3a6' } }, '두 사람이 같은 영웅을 고를 수 없습니다. 다른 영웅을 고르세요.') : null,
      comboPreview(host ? L.me.hero : peerHero, host ? peerHero : L.me.hero),
      h('div', { class: 'lobby' },
        h('div', { class: 'panel stack', style: { borderColor: host ? '#6fa8ff' : '#ff8a7a' } },
          h('h3', {}, `나 (${host ? '호스트 · 청' : '참가자 · 홍'})`),
          heroPicker(app, [L.me.hero], 1, (n) => { L.me.hero = n[0] || L.me.hero; L.me.ready = false; sendMe(); rerender(); }, peerHero ? [peerHero] : []),
          h('h3', {}, '비기'),
          skillPicker(app, L.me.skills, (n) => { L.me.skills = n; L.me.ready = false; sendMe(); rerender(); })),
        h('div', { class: 'panel stack', style: { borderColor: host ? '#ff8a7a' : '#6fa8ff' } }, h('h3', {}, '동료'), peerBox,
          h('p', { class: 'dim', style: { fontSize: '13px' } }, '팁: 전투 중 G 키로 핑을 찍어 위치를 알리고, 합격기는 두 사람이 2.5초 안에 함께 Space를 눌러야 발동합니다.')))));
}

// ───────────── 결과 ─────────────
export function resultScreen(app, params) {
  setBackdrop('lacquer');
  const { battle, result, applied, stats } = params;
  const st = STAGE_BY_ID[battle.stageId];
  const win = result.win;
  const idx = STAGES.findIndex((s) => s.id === battle.stageId);
  const next = STAGES[idx + 1];
  const row = (label, v) => [h('span', { class: 'dim' }, label), h('span', { class: 'num' }, fmt(v || 0)), h('span', {})];
  const lines = [
    ['왜군 격퇴', stats.kills], ['정예 이상', stats.elites], ['적장 격퇴', stats.bossKills], ['영웅 처치', stats.heroKills],
    ['합격기', stats.combos], ['비기 사용', stats.skillsUsed], ['무손실 파도', stats.perfectWaves], ['전술 파훼', stats.tacticsBroken],
  ];
  const r = applied.rewards;
  const el = h('div', { class: 'screen' },
    h('div', { class: 'result panel' },
      h('div', { class: 'verdict', style: { color: win ? 'var(--gold-hi)' : '#ff8a7a' } }, win ? '대승' : '패전'),
      h('div', { class: 'brush', style: { fontSize: '30px' } }, `${st.name} · ${DIFFICULTY[battle.difficulty].name}`),
      win ? h('div', { class: 'stars-big' }, starStr(result.stars)) : h('p', { class: 'dim' }, `${result.wavesCleared}파도까지 버텼습니다. 유산과 영웅을 강화해 다시 도전하세요.`),
      h('div', { class: 'rewards' },
        h('span', { class: 'chip' }, h('span', { class: 'coin' }, '●'), ` 엽전 +${fmt(r.coins)}`),
        r.jade ? h('span', { class: 'chip' }, h('span', { class: 'jade' }, '◆'), ` 옥 +${r.jade}`) : null,
        h('span', { class: 'chip' }, `공적 +${r.xp}`)),
      applied.firstClear ? h('p', { style: { color: '#ffe68c' } }, '첫 승리 보너스!') : null,
      ...applied.rankUps.map((u) => h('p', { style: { color: '#ffe68c' } }, `품계 승진: ${rankName(u.rank)}! 보상 ${plainReward(u.reward)}${u.skills.length ? ` · 새 비기 해금: ${u.skills.map((s) => SKILLS[s].name).join(', ')}` : ''}`)),
      ...applied.newTowers.map((t) => h('p', { class: 'row', style: { justifyContent: 'center', color: '#ffe68c' } }, h('img', { src: towerIcon(t), alt: '', width: 40, height: 40 }), `새 유산 해금: ${TOWERS[t].name}`)),
      applied.questDone.length ? h('div', { class: 'stack', style: { width: '100%' } }, h('b', {}, '완료한 임무 (임무 화면에서 보상 받기)'),
        ...applied.questDone.map((q) => h('span', { class: 'dim' }, `✔ ${q.kind === 'daily' ? '일일' : '주간'} · ${questText(q.def)}`))) : null,
      h('div', { class: 'table' }, lines.flatMap(([l, v]) => row(l, v))),
      h('div', { class: 'row', style: { justifyContent: 'center' } },
        battle.kind === 'guest' || battle.kind === 'host' ? null : h('button', { class: 'btn', onclick: () => app.startBattle(battle) }, '다시 도전'),
        win && next && battle.kind === 'solo' ? h('button', { class: 'btn btn-seal', onclick: () => app.go('campaign', { stage: next.id }) }, `다음 전장: ${next.name}`) : null,
        h('button', { class: 'btn btn-blue', onclick: () => app.go(applied.questDone.length ? 'quests' : 'hub') }, applied.questDone.length ? '임무 보상 받기' : '진영으로'))));
  return el;
}

export { clear, modal, rewardText };
