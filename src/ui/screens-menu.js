// 타이틀 · 진영(허브) · 임무 · 설정
import { h, clear, toast, modal, fmt } from './dom.js';
import { setBackdrop } from './backdrop.js';
import { heroFull } from './icons.js';
import { renderMapBackground } from '../render/draw-map.js';
import { getMap } from '../sim/map.js';
import { STAGES, STAGE_BY_ID } from '../data/stages.js';
import { RANKS, RANK_TITLES, rankXpNeeded, ATTENDANCE } from '../data/quests.js';
import { HERO_ORDER } from '../data/heroes.js';
import { saveProfile, rankName, stageUnlocked, resetProfile, heroSkin } from '../meta/profile.js';
import {
  ensureQuests, questDef, questText, claimQuest, bonusState, claimBonus, claimableCount, canCheckIn, checkIn, msToReset, fmtDuration,
  canReroll, rerollQuest, REROLL_PRICE,
} from '../meta/quests.js';
import { audio } from '../audio/audio.js';

export function wallet(p) {
  return h('div', { class: 'wallet' },
    h('span', { class: 'chip', title: '엽전: 영웅·비기·유산 강화에 쓰는 재화' }, h('span', { class: 'coin' }, '●'), h('span', { class: 'num' }, fmt(p.coins)), ' 엽전'),
    h('span', { class: 'chip', title: '옥: 임무와 첫 승리로 얻는 귀한 재화' }, h('span', { class: 'jade' }, '◆'), h('span', { class: 'num' }, fmt(p.jade)), ' 옥'));
}

export function topbar(app, title, opts = {}) {
  return h('div', { class: 'topbar' },
    opts.back !== false ? h('button', { class: 'btn btn-small', onclick: () => app.go(opts.back || 'hub') }, '← 진영') : null,
    h('span', { class: 'title' }, title),
    h('span', { class: 'spacer' }),
    wallet(app.profile));
}

// ───────────── 타이틀 ─────────────
export function titleScreen(app) {
  setBackdrop('title');
  const start = () => {
    audio.init();
    audio.play('upgrade');
    app.go('hub');
  };
  const el = h('div', { class: 'screen', id: 'title' },
    h('div', { class: 'title-wrap' },
      h('div', { class: 'logo', role: 'heading', 'aria-level': '1' }, '호국영웅전', h('span', { class: 'logo-seal', 'aria-hidden': 'true' }, h('span', {}, '護'), h('span', {}, '國'))),
      h('div', { class: 'tagline' }, '임진년, 영웅들이 다시 일어선다'),
      h('div', { class: 'hero-line', 'aria-hidden': 'true' },
        HERO_ORDER.map((id, i) => h('div', { class: 'hl', style: { animationDelay: `${-i * 0.37}s` } }, heroFull(id, 100, heroSkin(app.profile, id))))),
      h('button', { class: 'btn btn-seal btn-big', onclick: start, autofocus: true }, '출정하기'),
      h('div', { class: 'title-hint' }, '유산을 세우고, 영웅을 이끌고, 동료와 호흡을 맞춰 도성을 지켜라'),
    ));
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') start();
  });
  return el;
}

// ───────────── 진영 (허브) ─────────────
export function hubScreen(app) {
  setBackdrop('lacquer');
  const p = app.profile;
  ensureQuests(p, new Date());
  const r = p.rank;
  const need = rankXpNeeded(r);
  const lastStage = [...STAGES].reverse().find((s) => stageUnlocked(p, s.id)) || STAGES[0];
  const thumb = renderMapBackground(getMap(lastStage.id), lastStage, 1);
  thumb.setAttribute('aria-hidden', 'true');
  const thumb2 = renderMapBackground(getMap('s4'), STAGE_BY_ID.s4, 1);
  thumb2.setAttribute('aria-hidden', 'true');
  const claimable = claimableCount(p);
  const tile = (t, s, go, dot) => h('button', { class: 'side-tile', onclick: () => app.go(go) }, dot ? h('span', { class: 'badge-dot', 'aria-label': '받을 보상 있음' }) : null, h('span', { class: 't' }, t), h('span', { class: 's' }, s));
  const el = h('div', { class: 'screen' },
    h('div', { class: 'topbar' },
      h('span', { class: 'title' }, '진영'),
      h('span', { class: 'dim' }, `${p.name} 장수`),
      h('span', { class: 'spacer' }),
      wallet(p)),
    h('div', { class: 'content hub' },
      h('div', { class: 'hub-main' },
        h('button', { class: 'big-tile', onclick: () => app.go('campaign') }, thumb,
          h('div', {}, h('div', { class: 't' }, '홀로 출정'), h('div', { class: 's' }, `두 영웅을 이끌고 전장으로 · 최근 전장 ${lastStage.name}`)),
          h('span', { class: 'btn btn-seal' }, '출정')),
        h('button', { class: 'big-tile', onclick: () => app.go('coop') }, thumb2,
          h('div', {}, h('div', { class: 't' }, '협동 출정'), h('div', { class: 's' }, '한 화면 2인 · 온라인 방 코드 — 합격기로 호흡을 맞춰라')),
          h('span', { class: 'btn btn-blue' }, '2인')),
      ),
      h('div', { class: 'hub-side' },
        h('div', { class: 'panel rank-card' },
          h('div', { class: 'rank-seal' }, h('span', {}, RANKS[r]), h('small', { style: { fontSize: '13px', fontFamily: 'var(--f-body)' } }, RANK_TITLES[r])),
          h('div', {}, h('b', { class: 'num', style: { fontSize: '19px' } }, `${rankName(r)} ${RANK_TITLES[r]}`), h('span', { class: 'dim', style: { fontSize: '14px' } }, ` · 품계 ${r + 1}/${RANKS.length}`)),
          h('div', {}, h('div', { class: 'bar' }, h('i', { style: { width: `${Math.min(100, (p.rankXp / need) * 100)}%` } })),
            h('span', { class: 'dim', style: { fontSize: '14px' } }, `다음 품계까지 ${fmt(need - p.rankXp)} 공적 · ${p.stats.games}전 ${p.stats.wins}승 · 처치 ${fmt(p.stats.kills)}`))),
        tile('영웅', '여섯 위인 · 해금과 강화', 'heroes'),
        tile('비기', '조선의 비밀 병기 · 장착과 강화', 'skills'),
        tile('유산', '문화유산 도감 · 복원(영구 강화)', 'relics'),
        tile('임무', '일일 · 주간 임무, 출석부', 'quests', claimable > 0),
        h('button', { class: 'side-tile jade-tile', onclick: () => app.go('shop') },
          h('span', { class: 't' }, h('span', { class: 'jade' }, '◆ '), '옥 상점'), h('span', { class: 's' }, '보급품 · 영웅 의복')),
        tile('설정', '소리 · 이름 · 도움말', 'settings'),
      )),
  );
  if (canCheckIn(p)) setTimeout(() => attendanceModal(app), 350);
  return el;
}

export async function attendanceModal(app) {
  const p = app.profile;
  if (!canCheckIn(p)) return;
  const idx = p.attendance.count % ATTENDANCE.length;
  const grid = h('div', { class: 'attend' }, ATTENDANCE.map((r, i) =>
    h('div', { class: `day${i < idx ? ' got' : ''}${i === idx ? ' today' : ''}` },
      h('b', {}, `${i + 1}일`), rewardText(r), i < idx ? h('span', { class: 'seal' }, '印') : null)));
  const ok = await modal('출석부', h('div', { class: 'stack' }, h('p', { class: 'dim' }, '날마다 진영에 들르면 보급품을 받습니다. 7일마다 다시 시작합니다.'), grid),
    [{ label: '보급 받기', value: true, cls: 'btn-seal' }]);
  if (ok !== null) {
    const res = checkIn(p);
    if (res) {
      saveProfile();
      audio.play('coin');
      toast(`출석 ${res.idx + 1}일차: ${plainReward(res.reward)}`);
      app.refresh();
    }
  }
}

export function rewardText(r) {
  return h('span', {}, r.coins ? h('span', { class: 'coin num' }, `●${r.coins} `) : null, r.jade ? h('span', { class: 'jade num' }, `◆${r.jade}`) : null);
}
export function plainReward(r) {
  return [r.coins ? `엽전 ${r.coins}` : '', r.jade ? `옥 ${r.jade}` : ''].filter(Boolean).join(', ');
}

// ───────────── 임무 ─────────────
export function questsScreen(app, params = {}) {
  setBackdrop('lacquer');
  const p = app.profile;
  ensureQuests(p, new Date());
  const tab = params.tab || 'daily';
  const tabs = [['daily', '일일 임무'], ['weekly', '주간 임무'], ['attend', '출석부']];
  const body = h('div', { class: 'panel stack' });
  const tabBar = h('div', { class: 'tabs', role: 'tablist' }, tabs.map(([k, label]) => {
    const dot = k === 'attend' ? canCheckIn(p) : p.quests[k].list.some((q) => !q.claimed && q.prog >= questDef(k, q.id).n) || bonusState(p, k).ready;
    return h('button', { role: 'tab', 'aria-selected': String(k === tab), onclick: () => app.go('quests', { tab: k }) }, label, dot ? h('span', { class: 'badge-dot' }) : null);
  }));
  if (tab === 'attend') {
    const idx = p.attendance.count % ATTENDANCE.length;
    const today = !canCheckIn(p);
    body.append(
      h('p', { class: 'dim' }, `누적 출석 ${p.attendance.count}일 · 7일마다 순환`),
      h('div', { class: 'attend' }, ATTENDANCE.map((r, i) => {
        const inCycle = today ? ((p.attendance.count - 1) % 7) + 1 : idx;
        const got = i < inCycle;
        return h('div', { class: `day${got ? ' got' : ''}${i === idx && !today ? ' today' : ''}` }, h('b', {}, `${i + 1}일`), rewardText(r), got ? h('span', { class: 'seal' }, '印') : null);
      })),
      h('div', {}, h('button', { class: 'btn btn-seal', disabled: today, onclick: () => attendanceModal(app).then(() => app.go('quests', { tab: 'attend' })) }, today ? '오늘 보급 완료' : '오늘 보급 받기')),
    );
  } else {
    const q = p.quests[tab];
    body.append(h('p', { class: 'dim' }, `${tab === 'daily' ? '매일 자정' : '매주 월요일'} 새 임무 · 초기화까지 ${fmtDuration(msToReset(tab))}`));
    q.list.forEach((item, i) => {
      const def = questDef(tab, item.id);
      if (!def) return;
      const done = item.prog >= def.n;
      body.append(h('div', { class: `quest${done ? ' done' : ''}${item.claimed ? ' claimed' : ''}` },
        h('div', { class: 'stack', style: { gap: '4px' } },
          h('span', { class: 'qt' }, questText(def)),
          h('div', { class: 'bar' }, h('i', { style: { width: `${(item.prog / def.n) * 100}%` } })),
          h('span', { class: 'dim num', style: { fontSize: '14px' } }, `${fmt(item.prog)} / ${fmt(def.n)}`)),
        h('div', { class: 'stack', style: { gap: '4px', justifyItems: 'end' } },
          h('span', { class: 'reward' }, rewardText(def.reward)),
          canReroll(p, tab, i) ? h('button', {
            class: 'btn btn-small', title: '다른 임무로 바꿉니다', disabled: p.jade < REROLL_PRICE[tab],
            onclick: () => {
              if (rerollQuest(p, tab, i)) {
                saveProfile();
                audio.play('ui');
                toast('새 임무가 내려왔습니다');
                app.go('quests', { tab });
              }
            },
          }, '교체 ', h('span', { class: 'jade num' }, `◆${REROLL_PRICE[tab]}`)) : null,
          h('button', {
            class: `btn btn-small ${done && !item.claimed ? 'btn-seal' : ''}`, disabled: !done || item.claimed,
            onclick: () => {
              const r = claimQuest(p, tab, i);
              if (r) {
                saveProfile();
                audio.play('coin');
                toast(`보상: ${plainReward(r)}`);
                app.go('quests', { tab });
              }
            },
          }, item.claimed ? '받음' : done ? '받기' : '진행 중'))));
    });
    const b = bonusState(p, tab);
    body.append(h('div', { class: `quest${b.ready ? ' done' : ''}${b.claimed ? ' claimed' : ''}`, style: { borderStyle: 'dashed' } },
      h('span', { class: 'qt' }, `${tab === 'daily' ? '일일' : '주간'} 임무 모두 완료 보너스`),
      h('div', { class: 'row' }, rewardText(b.reward),
        h('button', {
          class: `btn btn-small ${b.ready ? 'btn-gold' : ''}`, disabled: !b.ready,
          onclick: () => {
            const r = claimBonus(p, tab);
            if (r) {
              saveProfile();
              audio.play('win');
              toast(`보너스: ${plainReward(r)}`);
              app.go('quests', { tab });
            }
          },
        }, b.claimed ? '받음' : '받기'))));
  }
  return h('div', { class: 'screen' }, topbar(app, '임무'), h('div', { class: 'content' }, tabBar, body));
}

// ───────────── 설정 ─────────────
export function settingsScreen(app) {
  setBackdrop('lacquer');
  const p = app.profile;
  const s = p.settings;
  const slider = (id, label, key) => {
    const input = h('input', {
      type: 'range', id, min: 0, max: 1, step: 0.05, value: s[key],
      oninput: (e) => {
        s[key] = +e.target.value;
        audio.setVolumes(s.sfx, s.bgm);
        saveProfile();
      },
      onchange: () => audio.play('ui'),
    });
    return h('label', { class: 'toggle', for: id }, h('span', {}, label), input);
  };
  const check = (id, label, key) => h('label', { class: 'toggle', for: id }, h('span', {}, label),
    h('input', { type: 'checkbox', id, checked: s[key], onchange: (e) => { s[key] = e.target.checked; saveProfile(); } }));
  // 여러 칸 중 하나 고르기 (화면 흔들림 세기)
  const choice = (label, key, opts) => {
    const seg = h('div', { class: 'seg', role: 'group', 'aria-label': label });
    const paint = () => [...seg.children].forEach((b, i) => b.setAttribute('aria-pressed', String(opts[i][0] === s[key])));
    for (const [v, t] of opts) {
      seg.appendChild(h('button', { type: 'button', onclick: () => { s[key] = v; saveProfile(); paint(); audio.play('ui'); } }, t));
    }
    paint();
    return h('div', { class: 'toggle' }, h('span', {}, label), seg);
  };
  const name = h('input', { type: 'text', id: 'name', value: p.name, maxlength: 10, 'aria-label': '장수 이름' });
  const el = h('div', { class: 'screen' }, topbar(app, '설정'),
    h('div', { class: 'content', style: { maxWidth: '620px' } },
      h('div', { class: 'panel stack' },
        h('div', { class: 'toggle' }, h('span', {}, '장수 이름 (협동 시 표시)'),
          h('div', { class: 'row' }, name, h('button', {
            class: 'btn btn-small', onclick: () => {
              p.name = name.value.trim().slice(0, 10) || '수호자';
              saveProfile();
              toast('이름을 바꿨습니다');
            },
          }, '저장'))),
        slider('sfx', '효과음', 'sfx'),
        slider('bgm', '배경음 (국악풍)', 'bgm'),
        check('dmg', '피해 숫자 표시', 'dmgNumbers'),
        choice('화면 흔들림 (합격기 · 적장 처치 때만)', 'shakeLv', [[0, '끔'], [1, '약하게'], [2, '보통']]),
        check('hints', '전투 도움말 보기', 'hints'),
        h('div', { class: 'toggle' }, h('span', {}, '도움말 다시 보기'), h('button', { class: 'btn btn-small', onclick: () => { p.hintsSeen = []; saveProfile(); toast('다음 전투에서 도움말이 다시 나옵니다'); } }, '초기화')),
        h('div', { class: 'toggle' }, h('span', { class: 'dim' }, '모든 기록 지우기 (되돌릴 수 없음)'),
          h('button', {
            class: 'btn btn-small', onclick: async () => {
              const ok = await modal('기록 초기화', '엽전, 옥, 해금, 별, 임무 진행이 모두 사라집니다.', [{ label: '취소', value: false }, { label: '모두 지우기', value: true, cls: 'btn-seal' }]);
              if (ok) {
                app.profile = resetProfile();
                toast('새로 시작합니다');
                app.go('title');
              }
            },
          }, '초기화'))),
      h('div', { class: 'panel stack', style: { marginTop: '14px' } },
        h('h3', {}, '조작 · 혼자 / 온라인'),
        h('div', { class: 'keys' },
          [['클릭', '빈 터에 유산 건설 · 유산 선택 · 영웅 선택'], ['우클릭', '영웅 이동 (터치: 길게 누르기)'], ['Q W / E R', '영웅 기술 · 궁극기'], ['D F', '비기'],
            ['Space', '합격기'], ['N', '다음 파도'], ['G', '협동 핑'], ['Esc', '군막(메뉴)']].flatMap(([k, d]) => [h('kbd', {}, k), h('span', {}, d)])),
        h('h3', { style: { marginTop: '10px' } }, '조작 · 로컬 협동'),
        h('div', { class: 'keys' },
          [['1P', '마우스만: 클릭 건설·강화, 우클릭 이동, 버튼으로 기술·비기·합격기'], ['2P ← ↑ → ↓', '영웅 이동'], ['2P A S', '기술 · 궁극기'], ['2P D F', '비기 1 · 2'],
            ['2P E / Q', '발밑에 건설·강화 / 취소'], ['2P Space', '합격기'], ['2P W', '다음 파도']].flatMap(([k, d]) => [h('kbd', {}, k), h('span', {}, d)]))),
    ));
  return el;
}

export { clear };
