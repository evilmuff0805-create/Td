// 영웅 · 비기 · 유산 도감과 영구 강화
import { h, toast, fmt } from './dom.js';
import { setBackdrop } from './backdrop.js';
import { topbar } from './screens-menu.js';
import { heroPortrait, heroFull } from './icons.js';
import { towerIcon } from '../render/draw-towers.js';
import { HEROES, HERO_ORDER, heroMetaCost, HERO_META_MAX } from '../data/heroes.js';
import { SKILLS, SKILL_ORDER, skillDesc, skillMetaCost, SKILL_META_MAX, skillCdMult } from '../data/skills.js';
import { TOWERS, TOWER_ORDER, CATEGORIES } from '../data/towers.js';
import { COMBOS } from '../data/combos.js';
import { STAGES } from '../data/stages.js';
import { RANKS, towerMetaCost, TOWER_META_MAX, TOWER_META_BONUS, TOWER_MILESTONES } from '../data/quests.js';
import { heroUnlockState, unlockHero, unlockHeroJade, HERO_JADE_UNLOCK, heroSkin, upgradeHero, skillUnlocked, upgradeSkill, upgradeTower } from '../meta/profile.js';
import { skinDef } from '../data/skins.js';
import { audio } from '../audio/audio.js';

// 긴 단계(30단계)용: 막대 + 이정표 눈금
function levelBar(n, max, marks = []) {
  return h('div', { class: 'lvbar', role: 'meter', 'aria-valuenow': n, 'aria-valuemax': max, 'aria-label': `${n}/${max}단계` },
    h('div', { class: 'track' }, h('i', { style: { width: `${(n / max) * 100}%` } }),
      marks.map((m) => h('span', { class: `mark${n >= m.lv ? ' on' : ''}`, style: { left: `${(m.lv / max) * 100}%` }, title: `${m.lv}단계: ${m.text}` }))),
    h('b', { class: 'num' }, `${n}`, h('span', { class: 'dim' }, ` / ${max}`)));
}

function pips(n, max) {
  return h('span', { class: 'num', 'aria-label': `${n}/${max}` }, h('span', { style: { color: 'var(--gold-hi)' } }, '◆'.repeat(n)), h('span', { style: { color: 'rgba(255,255,255,0.2)' } }, '◆'.repeat(max - n)));
}

// ───────────── 영웅 ─────────────
export function heroesScreen(app, params = {}) {
  setBackdrop('lacquer');
  const p = app.profile;
  const sel = params.id || HERO_ORDER[0];
  const def = HEROES[sel];
  const ph = p.heroes[sel];
  const st = heroUnlockState(p, sel);
  const cost = heroMetaCost(ph.lv);
  const m = 1 + 0.04 * ph.lv;
  const combos = COMBOS.filter((c) => c.pair.includes(sel));
  const list = h('div', { class: 'grid-cards', style: { gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))' } }, HERO_ORDER.map((id) => {
    const u = heroUnlockState(p, id).unlocked;
    return h('button', { class: `card${u ? '' : ' locked'}`, 'aria-pressed': String(id === sel), onclick: () => app.go('heroes', { id }) },
      h('div', { class: 'pic' }, heroPortrait(id, 80, 0, heroSkin(p, id))), h('span', { class: 'nm' }, HEROES[id].name), h('span', { class: 'sub' }, u ? `강화 ${p.heroes[id].lv}/${HERO_META_MAX}` : '🔒'));
  }));
  const action = !st.unlocked
    ? h('div', { class: 'stack' },
      h('span', { class: 'dim' }, st.stageOk ? '해금 조건을 모두 갖췄습니다.' : `${st.stage}에서 승리하면 해금할 수 있습니다.`),
      h('div', { class: 'row' },
        h('button', {
          class: 'btn btn-seal', disabled: !st.stageOk || p.coins < st.cost.coins,
          onclick: () => { if (unlockHero(p, sel)) { audio.play('win'); toast(`${def.name} 합류!`); app.go('heroes', { id: sel }); } },
        }, `해금 · 엽전 ${fmt(st.cost.coins)}`),
        h('button', {
          class: 'btn', disabled: p.jade < HERO_JADE_UNLOCK,
          onclick: () => { if (unlockHeroJade(p, sel)) { audio.play('win'); toast(`${def.name} 합류!`); app.go('heroes', { id: sel }); } },
        }, '바로 해금 · ', h('span', { class: 'jade num' }, `◆${HERO_JADE_UNLOCK}`))))
    : h('div', { class: 'row' }, h('span', {}, '영구 강화 '), pips(ph.lv, HERO_META_MAX),
      ph.lv < HERO_META_MAX ? h('button', {
        class: 'btn btn-gold', disabled: p.coins < cost,
        onclick: () => { if (upgradeHero(p, sel)) { audio.play('upgrade'); app.go('heroes', { id: sel }); } },
      }, `강화 · 엽전 ${fmt(cost)}`) : h('span', { class: 'chip' }, '최고 단계'),
      h('span', { class: 'dim', style: { fontSize: '14px' } }, '단계당 체력·공격·기술 +4%'));
  const pic = heroFull(sel, 200, heroSkin(p, sel));
  pic.className = 'pic';
  const sk = skinDef(sel, heroSkin(p, sel));
  const detail = h('div', { class: 'panel detail' },
    pic,
    h('div', { class: 'stack' },
      h('div', { class: 'row' }, h('h2', {}, def.name), h('span', { class: 'chip' }, `${def.era} · ${def.title}`), h('span', { class: 'chip' }, def.role)),
      h('p', { class: 'quote' }, def.quote),
      h('dl', { class: 'kv' },
        h('dt', {}, '체력'), h('dd', { class: 'num' }, Math.round(def.hp * m)),
        h('dt', {}, '공격'), h('dd', { class: 'num' }, `${Math.round(def.dmg * m)} (${{ phys: '물리', holy: '신성', fire: '화기' }[def.dmgType]}) · ${def.cd}초`),
        h('dt', {}, '사거리'), h('dd', { class: 'num' }, `${def.range}칸 · 이동 ${def.speed}${def.block ? ` · 저지 ${def.block}명` : ''}`)),
      h('div', { class: 'skill-desc' },
        h('div', {}, h('b', {}, `상시 · ${def.passive.name}`), h('br'), def.passive.desc),
        h('div', {}, h('b', {}, `기술 · ${def.skill.name}`), ` (${def.skill.cd}초)`, h('br'), def.skill.desc),
        h('div', {}, h('b', {}, `궁극기 · ${def.ult.name}`), ` (${def.ult.cd}초)`, h('br'), def.ult.desc)),
      combos.length ? h('div', { class: 'dim', style: { fontSize: '15px' } }, '전용 합격기: ', combos.map((c) => `${c.name}(${HEROES[c.pair.find((x) => x !== sel)].name})`).join(', ')) : null,
      h('div', { class: 'row' }, h('span', {}, '의복 '), h('span', { class: 'chip' }, sk ? sk.name : '기본 복장'),
        h('button', { class: 'btn btn-small', onclick: () => app.go('shop', { tab: 'skins', hero: sel }) }, '의상실 ', h('span', { class: 'jade' }, '◆'))),
      action));
  return h('div', { class: 'screen' }, topbar(app, '영웅'), h('div', { class: 'content stack' }, list, detail));
}

// ───────────── 비기 ─────────────
export function skillsScreen(app) {
  setBackdrop('lacquer');
  const p = app.profile;
  return h('div', { class: 'screen' }, topbar(app, '비기'),
    h('div', { class: 'content stack' },
      h('p', { class: 'dim' }, '비기는 조선의 비밀 병기와 계책입니다. 전투마다 두 가지를 장착하고, 품계가 오르면 새 비기가 해금됩니다. 강화 단계당 효과 +10%, 재사용 -3%.'),
      h('div', { class: 'grid-cards', style: { gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' } }, SKILL_ORDER.map((id) => {
        const sd = SKILLS[id];
        const ok = skillUnlocked(p, id);
        const lv = p.skills[id].lv;
        const cost = skillMetaCost(lv);
        return h('div', { class: `card${ok ? '' : ' locked'}` },
          h('div', { class: 'row' }, h('span', { class: 'brush', style: { fontSize: '36px', color: 'var(--gold-hi)' } }, sd.name.slice(0, 1)), h('div', { class: 'stack', style: { gap: 0 } },
            h('span', { class: 'nm' }, sd.name), h('span', { class: 'sub' }, ok ? `재사용 ${Math.round(sd.cd * skillCdMult(lv))}초` : `🔒 ${RANKS[sd.rank]} 달성 시`))),
          h('span', { style: { fontSize: '15px', lineHeight: 1.5 } }, skillDesc(id, lv)),
          ok ? h('div', { class: 'row' }, pips(lv, SKILL_META_MAX), lv < SKILL_META_MAX
            ? h('button', { class: 'btn btn-small btn-gold', disabled: p.coins < cost, onclick: () => { if (upgradeSkill(p, id)) { audio.play('upgrade'); app.go('skills'); } } }, `강화 ${fmt(cost)}`)
            : h('span', { class: 'chip' }, '최고')) : null);
      }))));
}

// ───────────── 유산 도감 · 복원 ─────────────
export function relicsScreen(app, params = {}) {
  setBackdrop('lacquer');
  const p = app.profile;
  const sel = params.id || TOWER_ORDER[0];
  const def = TOWERS[sel];
  const unlocked = p.towersUnlocked.includes(sel);
  const lv = p.towers[sel].lv;
  const cost = towerMetaCost(lv);
  const from = STAGES.find((s) => s.unlockTowers.includes(sel));
  const list = h('div', { class: 'grid-cards', style: { gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))' } }, TOWER_ORDER.map((id) => {
    const u = p.towersUnlocked.includes(id);
    return h('button', { class: `card${u ? '' : ' locked'}`, 'aria-pressed': String(id === sel), onclick: () => app.go('relics', { id }) },
      h('div', { class: 'pic' }, h('img', { src: towerIcon(id, 3, null, 96), alt: '' })),
      h('span', { class: 'nm' }, TOWERS[id].name), h('span', { class: 'sub', style: { color: CATEGORIES[TOWERS[id].cat].color } }, `${CATEGORIES[TOWERS[id].cat].name}${u ? ` · 복원 ${p.towers[id].lv}` : ''}`));
  }));
  const cols = ['단계', '비용', '피해', '속도', '사거리', '특수'];
  const special = (s) => [
    s.splash ? `범위 ${s.splash}` : '', s.slow ? `둔화 ${Math.round(s.slow * 100)}%` : '', s.shred ? `갑옷 -${Math.round(s.shred * 100)}%` : '',
    s.buffDmg ? `공격 +${Math.round(s.buffDmg * 100)}%` : '', s.income ? `수입 ${s.income}` : '', s.ramp ? `최대 ×${s.ramp}` : '',
    s.multishot ? `${s.multishot}발` : '', s.rockets ? `${s.rockets}발` : '', s.crit ? `치명 ${Math.round(s.crit * 100)}%` : '', s.stunEvery ? `${s.stunEvery}타 기절` : '',
    s.meteorEvery ? `${s.meteorEvery}타 유성` : '', s.vuln ? `취약 +${Math.round(s.vuln * 100)}%` : '', s.chain ? `연쇄 ${s.chain}` : '', s.killGold ? `처치 +${s.killGold}냥` : '',
  ].filter(Boolean).join(' · ');
  const rows = [...def.levels.map((s, i) => [`${i + 1}단계`, s]), ...['A', 'B'].map((b) => [def.branches[b].name, def.branches[b]])];
  const table = h('div', { style: { overflowX: 'auto' } }, h('table', { style: { width: '100%', borderCollapse: 'collapse', fontSize: '15px' } },
    h('thead', {}, h('tr', {}, cols.map((c) => h('th', { style: { textAlign: 'left', padding: '4px 6px', color: 'var(--text-dim)', borderBottom: '1px solid var(--line)' } }, c)))),
    h('tbody', {}, rows.map(([name, s]) => h('tr', {},
      [name, s.cost, s.dmg ?? (s.dps ? `${s.dps}/초` : '—'), s.cd ? `${s.cd}초` : '지속', s.range, special(s)].map((v) => h('td', { class: 'num', style: { padding: '4px 6px', borderBottom: '1px solid rgba(240,199,94,0.1)', fontFamily: 'var(--f-body)' } }, v)))))));
  const detail = h('div', { class: 'panel detail' },
    h('div', { class: 'pic', style: { display: 'grid', placeItems: 'center' } }, h('img', { src: towerIcon(sel, 3, null, 190), alt: def.name, style: { width: '100%' } })),
    h('div', { class: 'stack' },
      h('div', { class: 'row' }, h('h2', {}, def.name), h('span', { class: 'chip', style: { color: CATEGORIES[def.cat].color } }, `${CATEGORIES[def.cat].name} · ${def.title}`)),
      h('p', {}, def.desc),
      h('p', { class: 'dim', style: { fontSize: '15px' } }, `유산 공명: 같은 계열(${CATEGORIES[def.cat].name}: ${TOWER_ORDER.filter((t) => TOWERS[t].cat === def.cat).map((t) => TOWERS[t].name).join(', ')})의 다른 유산이 2칸 안에 있으면 1종당 +12%.`),
      table,
      unlocked
        ? h('div', { class: 'stack restore' },
          h('div', { class: 'row' }, h('b', {}, '복원'), levelBar(lv, TOWER_META_MAX, TOWER_MILESTONES),
            h('span', { class: 'dim', style: { fontSize: '14px' } }, `단계당 효과 +${Math.round(TOWER_META_BONUS * 100)}% · 지금 +${Math.round(TOWER_META_BONUS * 100 * lv)}%`)),
          h('div', { class: 'row' }, TOWER_MILESTONES.map((m) => h('span', { class: `chip milestone${lv >= m.lv ? ' on' : ''}` }, `${m.lv}단계 · ${m.text}`))),
          lv < TOWER_META_MAX
            ? h('div', { class: 'row' },
              h('button', { class: 'btn btn-gold', disabled: p.coins < cost, onclick: () => { if (upgradeTower(p, sel)) { audio.play('upgrade'); app.go('relics', { id: sel }); } } }, `복원 · 엽전 ${fmt(cost)}`),
              (() => {
                // 5단계 한꺼번에 (살 수 있는 만큼)
                let n = 0;
                let sum = 0;
                while (n < 5 && lv + n < TOWER_META_MAX && sum + towerMetaCost(lv + n) <= p.coins) sum += towerMetaCost(lv + n++);
                return h('button', {
                  class: 'btn', disabled: n < 2,
                  onclick: () => {
                    for (let k = 0; k < n; k++) upgradeTower(p, sel);
                    audio.play('upgrade');
                    app.go('relics', { id: sel });
                  },
                }, `${Math.max(n, 2)}단계 한꺼번에 · 엽전 ${fmt(n >= 2 ? sum : towerMetaCost(lv) + towerMetaCost(lv + 1))}`);
              })())
            : h('span', { class: 'chip on' }, '완전 복원'))
        : h('p', { style: { color: '#ffb3a6' } }, `🔒 ${from ? from.name : ''} 첫 승리 시 해금`)));
  return h('div', { class: 'screen' }, topbar(app, '유산'), h('div', { class: 'content stack' }, list, detail));
}
