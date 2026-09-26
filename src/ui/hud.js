// 전투 화면: 캔버스 + 상·하단 지휘판 + 팝업 + 입력 (P1 마우스/키보드, 로컬 P2 오른쪽 키보드)
import { h, clear, toast, modal, fmt } from './dom.js';
import { Renderer } from '../render/renderer.js';
import { towerIcon } from '../render/draw-towers.js';
import { TS } from '../render/paint.js';
import { heroPortrait, enemyIcon, drawResonance } from './icons.js';
import { TOWERS, TOWER_ORDER, towerBase, SELL_RATE, CATEGORIES } from '../data/towers.js';
import { HEROES } from '../data/heroes.js';
import { SKILLS } from '../data/skills.js';
import { ENEMIES, TIERS } from '../data/enemies.js';
import { TACTICS } from '../data/tactics.js';
import { STAGE_BY_ID, DIFFICULTY, parseWave } from '../data/stages.js';
import { findCombo, COMBO_WINDOW, RESONANCE_MAX } from '../data/combos.js';
import { EARLY_BONUS_PER_SEC } from '../sim/sim.js';
import { getMap, tileAt, T_BUILD } from '../sim/map.js';
import { autoAim } from '../sim/abilities.js';
import { audio } from '../audio/audio.js';

const W = 960;
const H = 560;
const SKILL_AIM = { yi: 4.2, sejong: 1.8, eulji: 1.5, gang: 0.8, gwon: 1.6, gwak: 1 };
const ULT_AIM = { yi: 0.8, eulji: 3, gwon: 0.7 };
const ULT_TARGETLESS = { sejong: true, gang: true, gwak: true };
const TARGET_LABEL = { first: '선두', last: '후미', strong: '강적', close: '근접' };
const HERO_GLYPH = { yi: '忠', sejong: '訓', eulji: '薩', gang: '星', gwon: '幸', gwak: '紅' };
const SKILL_GLYPH = { singijeon: '神', bongsu: '烽', uibyeong: '義', bigyeok: '震', gunryang: '糧', cheonja: '砲', donguibogam: '醫', hanpa: '寒' };

export class GameUI {
  constructor({ root, session, profile, names, onEnd, onQuit, onRestart }) {
    this.root = root;
    this.s = session;
    this.profile = profile;
    this.names = names || [];
    this.onEnd = onEnd;
    this.onQuit = onQuit;
    this.onRestart = onRestart;
    this.me = session.me;
    this.local = session.kind === 'local';
    this.solo = session.kind === 'solo';
    this.stage = STAGE_BY_ID[session.stageId];
    this.map = getMap(session.stageId);
    this.ui = { clock: 0, hover: null, hoverOk: false, placing: null, selTower: null, selHeroes: [], aim: null, p2cursor: null, moveMark: null };
    this.selHero = this.myHeroIdx()[0] ?? 0;
    this.targeting = null;
    this.pop = null;
    this.p2menu = null;
    this.p2keys = new Set();
    this.lastP2Move = 0;
    this.cache = {};
    this.ended = false;
    this.destroyed = false;
    this.waveCardOpen = true;
    this.hintsSeen = new Set(profile.hintsSeen || []);
    this.hintTimer = 0;
    this.buildDom();
    this.renderer = new Renderer(this.cv);
    this.renderer.setup(session.stageId);
    this.renderer.fx.showDamage = profile.settings.dmgNumbers;
    this.bindInput();
    this.resize();
    this.last = performance.now();
    this.raf = requestAnimationFrame((t) => this.frame(t));
    audio.startBgm('battle');
  }

  // 내가 조종하는 영웅 인덱스들
  myHeroIdx(p = this.me) {
    const v = this.s.view;
    const out = [];
    v.heroes.forEach((hh, i) => {
      if (hh.owner === p || (v.players[hh.owner] && v.players[hh.owner].left)) out.push(i);
    });
    if (!out.length && this.s.kind !== 'guest') {
      // 생성 직후
      this.s.state.heroes.forEach((hh, i) => hh.owner === p && out.push(i));
    }
    return out;
  }

  // ───────────────────────── DOM 구성 ─────────────────────────
  buildDom() {
    const v = this.s.view;
    this.el = h('div', { id: 'game' });
    // 상단
    this.elLives = h('span', { class: 'num' });
    this.elWave = h('span', { class: 'num' });
    this.elGold = [h('span', { class: 'num coin' }), h('span', { class: 'num coin' })];
    this.elGoldLbl = [0, 1].map((p) => h('span', { class: 'lbl' }, this.goldLabel(p)));
    const goldBoxes = [0, 1].map((p) =>
      h('div', { class: `hud-stat p${p}`, title: '군자금 (유산 건설·강화에 쓰는 전투 자금)', hidden: !this.s.coop && p === 1 }, this.elGoldLbl[p], this.elGold[p]),
    );
    this.speedSeg = h('div', { class: 'seg', role: 'group', 'aria-label': '배속' },
      [1, 2, 3].map((n) => h('button', { 'aria-pressed': n === 1 ? 'true' : 'false', onclick: () => this.setSpeed(n), disabled: this.s.kind === 'guest' }, `×${n}`)));
    this.btnPause = h('button', { class: 'btn btn-small', onclick: () => this.togglePause(), hidden: this.s.kind === 'guest' }, '일시정지');
    const top = h('div', { class: 'hud-top' },
      h('div', { class: 'hud-stat' }, h('span', { class: 'brush', style: { fontSize: '22px', color: 'var(--gold-hi)' } }, this.stage.name),
        h('span', { class: 'lbl' }, DIFFICULTY[this.s.difficulty].name)),
      h('div', { class: 'hud-stat', title: '민심 (0이 되면 패배)' }, h('span', { class: 'heart' }, '♥'), h('span', { class: 'lbl' }, '민심'), this.elLives),
      h('div', { class: 'hud-stat' }, h('span', { class: 'lbl' }, '파도'), this.elWave),
      goldBoxes,
      h('div', { class: 'spacer' }),
      this.speedSeg,
      this.btnPause,
      h('button', { class: 'btn btn-small', onclick: () => this.openMenu() }, '메뉴'),
    );
    // 가운데
    this.cv = h('canvas', { id: 'cv', 'aria-label': '전장' });
    this.overlay = h('div', { class: 'overlay' });
    this.area = h('div', { class: 'stage-area' }, this.cv, this.overlay);
    // 하단
    this.bottom = h('div', { class: 'hud-bottom' });
    this.el.append(top, this.area, this.bottom);
    clear(this.root).append(this.el);
    this.buildBottom();
  }

  goldLabel(p) {
    if (!this.s.coop) return '군자금';
    if (this.local) return `${p + 1}P 군자금`;
    return p === this.me ? `나 · ${this.playerName(p)}` : `동료 · ${this.playerName(p)}`;
  }

  playerName(p) {
    const v = this.s.view;
    return (v.players[p] && v.players[p].name) || this.names[p] || `${p + 1}P`;
  }

  buildBottom() {
    const v = this.s.view;
    clear(this.bottom);
    this.heroEls = [];
    this.skillEls = [];
    const groups = this.s.coop ? [0, 1] : [0];
    const makeGroup = (p) => {
      const g = h('div', { class: `pgroup p${p}` });
      const heroes = v.heroes.map((hh, i) => ({ hh, i })).filter(({ hh }) => hh.owner === p);
      const mine = p === this.me || (this.local && p === 1);
      heroes.forEach(({ hh, i }, k) => {
        const def = HEROES[hh.heroId];
        const canvas = heroPortrait(hh.heroId, 46, p);
        const hp = h('i', { style: { width: '100%' } });
        const lv = h('span', { class: 'num dim', style: { fontSize: '11px' } });
        const card = h('button', { class: 'hero-card', 'aria-pressed': 'false', title: `${def.name} — 클릭해 선택`, onclick: () => this.selectHero(i) },
          canvas, h('span', { class: 'nm' }, def.name, ' ', lv), h('div', { class: 'bar green hpbar' }, hp));
        const keys = this.keyLabels(p, k);
        const sk = this.skillButton(`${HERO_GLYPH[hh.heroId]}`, def.skill.name, keys.skill, () => this.useHeroSkill(i, 'skill'), !mine);
        const ul = this.skillButton(`${HERO_GLYPH[hh.heroId]}`, def.ult.name, keys.ult, () => this.useHeroSkill(i, 'ult'), !mine, true);
        this.heroEls.push({ i, card, hp, lv, canvas, sk, ul });
        g.append(card, h('div', { class: 'skills' }, sk.el, ul.el));
      });
      const pl = v.players[p];
      if (pl) {
        const box = h('div', { class: 'skills' });
        pl.skills.forEach((slot, si) => {
          const sd = SKILLS[slot.id];
          const b = this.skillButton(SKILL_GLYPH[slot.id], sd.name, this.keyLabels(p, 0).equip[si], () => this.useEquip(p, si), !mine);
          this.skillEls.push({ p, si, ...b });
          box.append(b.el);
        });
        g.append(box);
      }
      return g;
    };
    // 중앙: 합격기 + 파도 버튼
    this.resCv = h('canvas', { width: 148, height: 148 });
    this.comboBtn = h('button', { class: 'combo', title: '합격기 (공명 게이지가 가득 차고 두 영웅이 5칸 이내일 때)', onclick: () => this.pressCombo(this.local ? 0 : this.me) },
      this.resCv, h('span', { class: 'lbl' }, this.s.coop && !this.local ? '합격기 Space' : this.local ? 'Space / 우Shift' : '합격기 Space'));
    this.waveBtn = h('button', { class: 'btn btn-seal wave-btn', onclick: () => this.callWave() }, h('span', {}, '출정!'), h('small', {}, 'N 키'));
    const center = h('div', { class: 'center-cmd' }, this.comboBtn, this.waveBtn);
    this.bottom.append(makeGroup(0), center);
    if (groups.includes(1)) this.bottom.append(makeGroup(1));
  }

  keyLabels(p, heroSlot) {
    if (this.local && p === 1) return { skill: '/', ult: '.', equip: [';', "'"] };
    if (this.solo) return { skill: heroSlot ? 'E' : 'Q', ult: heroSlot ? 'R' : 'W', equip: ['D', 'F'] };
    if (p !== this.me) return { skill: '', ult: '', equip: ['', ''] };
    return { skill: 'Q', ult: 'W', equip: ['D', 'F'] };
  }

  skillButton(glyph, name, key, onclick, disabled, ult = false) {
    const cd = h('span', { class: 'cd' });
    const el = h('button', { class: `sk${ult ? ' ult' : ''}`, title: name, 'aria-label': name, onclick, disabled },
      h('span', { class: 'ic' }, glyph), key ? h('span', { class: 'key' }, key) : null, cd);
    return { el, cd };
  }

  // ───────────────────────── 루프 ─────────────────────────
  frame(t) {
    if (this.destroyed) return;
    const dt = Math.min(0.1, (t - this.last) / 1000);
    this.last = t;
    this.ui.clock += dt;
    if (this.local) this.p2Tick(t);
    const evs = this.s.update(dt);
    this.handleEvents(evs);
    this.renderer.events(evs);
    if (this.ui.moveMark) this.ui.moveMark.t -= dt;
    const v = this.s.view;
    this.ui.selHeroes = this.solo ? [this.selHero] : this.myHeroIdx();
    if (this.local) {
      const h2 = v.heroes.find((x) => x.owner === 1);
      this.ui.p2cursor = h2 && !h2.dead ? this.p2Tile(h2) : null;
    }
    this.renderer.render(v, this.ui, dt);
    this.updateHud(dt);
    this.hintTimer -= dt;
    if (this.hintTimer <= 0) {
      this.hintTimer = 0.5;
      this.checkHints();
    }
    if (v.result && !this.ended) this.finish();
    this.raf = requestAnimationFrame((tt) => this.frame(tt));
  }

  finish() {
    this.ended = true;
    this.s.announceEnd();
    audio.play(this.s.view.result.win ? 'win' : 'lose');
    const wait = () => {
      if (this.s.kind === 'guest' && !this.s.endInfo && performance.now() - start < 4000) {
        setTimeout(wait, 200);
        return;
      }
      this.onEnd({ result: this.s.view.result, stats: this.s.stats(this.me), stats2: this.local ? this.s.stats(1) : null });
    };
    const start = performance.now();
    setTimeout(wait, 2200);
  }

  destroy() {
    this.destroyed = true;
    cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.onResize);
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('keyup', this.onKeyUp);
    this.s.destroy();
    audio.stopBgm();
  }

  resize() {
    const r = this.area.getBoundingClientRect();
    const k = Math.max(0.2, Math.min(r.width / W, r.height / H));
    this.scale = k;
    this.cv.style.width = `${W * k}px`;
    this.cv.style.height = `${H * k}px`;
    const left = (r.width - W * k) / 2;
    const top = (r.height - H * k) / 2;
    Object.assign(this.overlay.style, { left: `${left}px`, top: `${top}px`, width: `${W * k}px`, height: `${H * k}px` });
  }

  // ───────────────────────── 입력 ─────────────────────────
  bindInput() {
    this.onResize = () => this.resize();
    window.addEventListener('resize', this.onResize);
    const pos = (e) => {
      const r = this.cv.getBoundingClientRect();
      return { x: ((e.clientX - r.left) / r.width) * (W / TS), y: ((e.clientY - r.top) / r.height) * (H / TS) };
    };
    this.cv.addEventListener('pointermove', (e) => {
      const p = pos(e);
      this.mouse = p;
      const tx = Math.floor(p.x);
      const ty = Math.floor(p.y);
      this.ui.hover = { x: tx, y: ty };
      this.ui.hoverOk = this.canBuildAt(tx, ty);
      if (this.targeting) this.ui.aim = { x: p.x, y: p.y, r: this.targeting.r };
    });
    this.cv.addEventListener('pointerleave', () => {
      this.ui.hover = null;
      this.mouse = null;
      if (!this.targeting) this.ui.aim = null;
    });
    let pressTimer = null;
    let longPressed = false;
    this.cv.addEventListener('pointerdown', (e) => {
      audio.init();
      if (e.button === 2) return;
      longPressed = false;
      if (e.pointerType === 'touch') {
        const p = pos(e);
        pressTimer = setTimeout(() => {
          longPressed = true;
          this.moveHeroTo(p.x, p.y);
        }, 480);
      }
    });
    this.cv.addEventListener('pointerup', (e) => {
      clearTimeout(pressTimer);
      if (e.button === 2 || longPressed) return;
      this.leftClick(pos(e));
    });
    this.cv.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      const p = pos(e);
      if (this.targeting) return this.cancelTargeting();
      this.closePop();
      this.moveHeroTo(p.x, p.y);
    });
    this.onKeyDown = (e) => this.keyDown(e);
    this.onKeyUp = (e) => this.p2keys.delete(e.code);
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
  }

  canBuildAt(x, y) {
    if (tileAt(this.map, x, y) !== T_BUILD) return false;
    return !this.s.view.towers.some((t) => t.x === x && t.y === y);
  }

  leftClick(p) {
    const v = this.s.view;
    if (this.targeting) {
      this.fireTargeting(p.x, p.y);
      return;
    }
    // 영웅 선택
    const mine = this.myHeroIdx();
    for (const i of mine) {
      const hh = v.heroes[i];
      if (!hh.dead && (hh.x - p.x) ** 2 + (hh.y - p.y + 0.35) ** 2 < 0.45) {
        this.selectHero(i);
        return;
      }
    }
    const tx = Math.floor(p.x);
    const ty = Math.floor(p.y);
    const tower = v.towers.find((t) => t.x === tx && t.y === ty);
    if (tower) {
      this.openTowerPanel(tower.id);
      return;
    }
    if (this.canBuildAt(tx, ty)) {
      this.openBuildMenu(tx, ty);
      return;
    }
    this.closePop();
    // 길이나 빈 곳 클릭: 선택한 영웅 이동
    this.moveHeroTo(p.x, p.y);
  }

  selectHero(i) {
    const v = this.s.view;
    if (!this.myHeroIdx().includes(i)) return;
    this.selHero = i;
    audio.play('ui');
    if (v.heroes[i] && v.heroes[i].dead) toast(`${HEROES[v.heroes[i].heroId].name}은(는) ${Math.ceil(v.heroes[i].respawn)}초 뒤 돌아옵니다`);
  }

  moveHeroTo(x, y, heroIdx) {
    const v = this.s.view;
    const mine = this.myHeroIdx();
    const i = heroIdx ?? (this.solo ? this.selHero : mine[0]);
    if (i === undefined || !v.heroes[i] || v.heroes[i].dead) return;
    this.s.send({ t: 'move', p: this.local ? v.heroes[i].owner : this.me, h: i, x, y });
    this.ui.moveMark = { x, y, t: 1, p: v.heroes[i].owner };
  }

  keyDown(e) {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    if (document.querySelector('.modal-back')) return;
    audio.init();
    const code = e.code;
    // 로컬 2P (오른쪽 키보드)
    if (this.local && this.p2Key(e)) {
      e.preventDefault();
      return;
    }
    const k = e.key.toLowerCase();
    const mouse = this.mouse;
    const heroes = this.myHeroIdx(this.local ? 0 : this.me);
    const cast = (i, kind) => {
      if (i === undefined) return;
      this.useHeroSkill(i, kind, mouse);
    };
    if (code === 'Escape') {
      if (this.targeting) this.cancelTargeting();
      else if (this.pop) this.closePop();
      else this.openMenu();
      return;
    }
    if (this.pop && this.pop.kind === 'build' && /^[1-7]$/.test(e.key)) {
      const list = this.buildList(this.me);
      const type = list[+e.key - 1];
      if (type) this.build(this.pop.x, this.pop.y, type);
      return;
    }
    switch (code) {
      case 'KeyQ': cast(this.solo ? 0 : heroes[0], 'skill'); break;
      case 'KeyW': cast(this.solo ? 0 : heroes[0], 'ult'); break;
      case 'KeyE': if (this.solo) cast(1, 'skill'); break;
      case 'KeyR': if (this.solo) cast(1, 'ult'); break;
      case 'KeyD': this.useEquip(this.local ? 0 : this.me, 0, mouse); break;
      case 'KeyF': this.useEquip(this.local ? 0 : this.me, 1, mouse); break;
      case 'Space': e.preventDefault(); this.pressCombo(this.local ? 0 : this.me); break;
      case 'KeyN': this.callWave(); break;
      case 'KeyG': if (mouse && this.s.coop) this.s.send({ t: 'ping', p: this.local ? 0 : this.me, x: mouse.x, y: mouse.y }); break;
      case 'Tab':
        if (this.solo) {
          e.preventDefault();
          this.selectHero(this.selHero === 0 ? 1 : 0);
        }
        break;
      case 'Digit1': if (this.solo && !this.pop) this.selectHero(0); break;
      case 'Digit2': if (this.solo && !this.pop) this.selectHero(1); break;
      case 'KeyU':
        if (this.pop && this.pop.kind === 'tower') {
          const t = this.s.view.towers.find((x) => x.id === this.pop.id);
          if (t && t.level < 3) this.s.send({ t: 'upgrade', p: this.me, id: t.id });
        }
        break;
      default: {
        if (k === ' ') e.preventDefault();
      }
    }
  }

  // ───── 로컬 2P ─────
  p2Tile(hh) {
    const x = Math.floor(hh.x);
    const y = Math.floor(hh.y);
    if (this.canBuildAt(x, y) || this.s.view.towers.some((t) => t.x === x && t.y === y)) return { x, y };
    let best = null;
    let bd = 9;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const nx = x + dx;
        const ny = y + dy;
        if (!this.canBuildAt(nx, ny) && !this.s.view.towers.some((t) => t.x === nx && t.y === ny)) continue;
        const d = (nx + 0.5 - hh.x) ** 2 + (ny + 0.5 - hh.y) ** 2;
        if (d < bd) {
          bd = d;
          best = { x: nx, y: ny };
        }
      }
    }
    return best || { x, y };
  }

  p2Key(e) {
    const c = e.code;
    const arrows = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    const v = this.s.view;
    const hi = v.heroes.findIndex((x) => x.owner === 1);
    const hero = v.heroes[hi];
    if (this.p2menu) {
      const m = this.p2menu;
      if (c === 'ArrowLeft' || c === 'ArrowUp') m.idx = (m.idx + m.options.length - 1) % m.options.length;
      else if (c === 'ArrowRight' || c === 'ArrowDown') m.idx = (m.idx + 1) % m.options.length;
      else if (c === 'Enter' || c === 'NumpadEnter') {
        const o = m.options[m.idx];
        if (o && !o.disabled) o.run();
        this.closeP2Menu();
        return true;
      } else if (c === 'Backspace' || c === 'Delete' || c === 'NumpadDecimal') this.closeP2Menu();
      else return false;
      this.renderP2Menu();
      return true;
    }
    if (arrows.includes(c)) {
      this.p2keys.add(c);
      return true;
    }
    if (!hero) return false;
    const aim = (r = 1.6) => {
      const a = this.s.state ? autoAim(this.s.state, hero, 6, r) : null;
      return a || { x: hero.x + hero.facing * 1.5, y: hero.y };
    };
    switch (c) {
      case 'Enter':
      case 'NumpadEnter':
        this.openP2Menu();
        return true;
      case 'Slash':
      case 'Numpad1': {
        const a = aim(SKILL_AIM[hero.heroId]);
        this.s.send({ t: 'heroSkill', p: 1, h: hi, x: a.x, y: a.y });
        return true;
      }
      case 'Period':
      case 'Numpad2': {
        const a = hero.heroId === 'yi' || hero.heroId === 'gang' ? aim(2.5) : aim(ULT_AIM[hero.heroId] || 2);
        this.s.send({ t: 'heroUlt', p: 1, h: hi, x: a.x, y: a.y });
        return true;
      }
      case 'Semicolon':
      case 'Numpad4':
      case 'Quote':
      case 'Numpad5': {
        const si = c === 'Semicolon' || c === 'Numpad4' ? 0 : 1;
        const slot = v.players[1].skills[si];
        if (!slot) return true;
        if (slot.cd > 0) {
          audio.play('deny');
          return true;
        }
        const a = aim(SKILLS[slot.id].radius || 1.6);
        this.s.send({ t: 'skill', p: 1, slot: si, x: a.x, y: a.y });
        return true;
      }
      case 'ShiftRight':
      case 'Numpad0':
        this.pressCombo(1);
        return true;
    }
    return false;
  }

  p2Tick(t) {
    const v = this.s.view;
    const hi = v.heroes.findIndex((x) => x.owner === 1);
    const hero = v.heroes[hi];
    if (!hero || hero.dead || this.p2menu) return;
    let dx = 0;
    let dy = 0;
    if (this.p2keys.has('ArrowUp')) dy -= 1;
    if (this.p2keys.has('ArrowDown')) dy += 1;
    if (this.p2keys.has('ArrowLeft')) dx -= 1;
    if (this.p2keys.has('ArrowRight')) dx += 1;
    if (!dx && !dy) {
      if (this.p2moving) {
        this.p2moving = false;
        this.s.send({ t: 'move', p: 1, h: hi, x: hero.x, y: hero.y });
      }
      return;
    }
    if (t - this.lastP2Move < 60) return;
    this.lastP2Move = t;
    this.p2moving = true;
    const l = Math.hypot(dx, dy);
    this.s.send({ t: 'move', p: 1, h: hi, x: hero.x + (dx / l) * 0.7, y: hero.y + (dy / l) * 0.7 });
  }

  openP2Menu() {
    const v = this.s.view;
    const hero = v.heroes.find((x) => x.owner === 1);
    if (!hero || hero.dead) return;
    const tile = this.p2Tile(hero);
    const pl = v.players[1];
    const tower = v.towers.find((t) => t.x === tile.x && t.y === tile.y);
    const options = [];
    if (tower) {
      const def = TOWERS[tower.type];
      if (!tower.branch && tower.level < def.levels.length) {
        const cost = def.levels[tower.level].cost;
        options.push({ label: `강화 ${cost}냥`, icon: towerIcon(tower.type, tower.level + 1), disabled: pl.gold < cost, run: () => this.s.send({ t: 'upgrade', p: 1, id: tower.id }) });
      } else if (!tower.branch) {
        for (const b of ['A', 'B']) {
          const br = def.branches[b];
          options.push({ label: `${br.name} ${br.cost}냥`, icon: towerIcon(tower.type, 3, b), disabled: pl.gold < br.cost, run: () => this.s.send({ t: 'upgrade', p: 1, id: tower.id, branch: b }) });
        }
      }
      if (tower.owner === 1) options.push({ label: '철거', icon: null, run: () => this.s.send({ t: 'sell', p: 1, id: tower.id }) });
    } else if (this.canBuildAt(tile.x, tile.y)) {
      for (const type of this.buildList(1)) {
        const cost = TOWERS[type].levels[0].cost;
        options.push({ label: `${TOWERS[type].name} ${cost}`, icon: towerIcon(type), disabled: pl.gold < cost, run: () => this.s.send({ t: 'build', p: 1, x: tile.x, y: tile.y, tower: type }) });
      }
    }
    if (!options.length) return;
    this.p2menu = { tile, options, idx: 0 };
    this.renderP2Menu();
  }

  renderP2Menu() {
    if (this.p2menuEl) this.p2menuEl.remove();
    const m = this.p2menu;
    if (!m) return;
    const el = h('div', { class: 'panel pop', style: { width: '250px' } },
      h('h3', {}, '2P 명령', h('span', { class: 'dim', style: { fontSize: '12px' } }, '←→ 선택 · Enter 확정 · Backspace 취소')),
      h('div', { class: 'build-grid' }, m.options.map((o, i) =>
        h('div', { class: 'bcard', style: { outline: i === m.idx ? '2px solid #ff8a7a' : 'none', opacity: o.disabled ? 0.5 : 1 } },
          o.icon ? h('img', { src: o.icon, alt: '' }) : h('span', { class: 'brush', style: { fontSize: '30px' } }, '撤'),
          h('span', {}, o.label)))),
    );
    this.place(el, m.tile.x, m.tile.y);
    this.overlay.append(el);
    this.p2menuEl = el;
  }

  closeP2Menu() {
    this.p2menu = null;
    if (this.p2menuEl) this.p2menuEl.remove();
    this.p2menuEl = null;
  }

  // ───────────────────────── 명령 ─────────────────────────
  setSpeed(n) {
    this.s.setSpeed(n);
    [...this.speedSeg.children].forEach((b, i) => b.setAttribute('aria-pressed', String(i + 1 === n)));
  }

  togglePause() {
    const v = this.s.view;
    this.s.setPaused(!v.paused);
  }

  callWave() {
    const v = this.s.view;
    if (v.wave.phase !== 'prep' || v.wave.n >= v.wave.total) return;
    this.s.send({ t: 'nextWave', p: this.me });
  }

  pressCombo(p) {
    this.s.send({ t: 'combo', p });
  }

  useHeroSkill(i, kind, at) {
    const v = this.s.view;
    const hh = v.heroes[i];
    if (!hh) return;
    const owner = hh.owner;
    if (!(owner === this.me || (this.local && owner === 0) || (v.players[owner] && v.players[owner].left))) return;
    if (hh.dead) return toast('쓰러진 영웅은 기술을 쓸 수 없습니다');
    const cd = kind === 'skill' ? hh.skillCd : hh.ultCd;
    if (cd > 0) {
      audio.play('deny');
      return toast(`${kind === 'skill' ? HEROES[hh.heroId].skill.name : HEROES[hh.heroId].ult.name} 재사용 대기 ${Math.ceil(cd)}초`);
    }
    const t = kind === 'skill' ? 'heroSkill' : 'heroUlt';
    const p = this.local ? owner : this.me;
    if (kind === 'ult' && ULT_TARGETLESS[hh.heroId]) {
      this.s.send({ t, p, h: i, x: hh.x, y: hh.y });
      return;
    }
    const r = kind === 'skill' ? SKILL_AIM[hh.heroId] : ULT_AIM[hh.heroId] || 1;
    if (at) this.s.send({ t, p, h: i, x: at.x, y: at.y });
    else this.startTargeting({ r, run: (x, y) => this.s.send({ t, p, h: i, x, y }) });
  }

  useEquip(p, si, at) {
    const v = this.s.view;
    const pl = v.players[p];
    if (!pl || !pl.skills[si]) return;
    const slot = pl.skills[si];
    const sd = SKILLS[slot.id];
    if (slot.cd > 0) {
      audio.play('deny');
      return toast(`${sd.name} 재사용 대기 ${Math.ceil(slot.cd)}초`);
    }
    if (sd.target === 'none') {
      this.s.send({ t: 'skill', p, slot: si, x: 0, y: 0 });
      return;
    }
    if (at) this.s.send({ t: 'skill', p, slot: si, x: at.x, y: at.y });
    else this.startTargeting({ r: sd.radius || 0.8, run: (x, y) => this.s.send({ t: 'skill', p, slot: si, x, y }) });
  }

  startTargeting(tg) {
    this.closePop();
    this.targeting = tg;
    this.ui.aim = this.mouse ? { x: this.mouse.x, y: this.mouse.y, r: tg.r } : null;
    this.cv.style.cursor = 'crosshair';
    toast('대상 지점을 클릭하세요 (우클릭 취소)', 1400);
  }

  fireTargeting(x, y) {
    const tg = this.targeting;
    this.cancelTargeting();
    tg.run(x, y);
  }

  cancelTargeting() {
    this.targeting = null;
    this.ui.aim = null;
    this.cv.style.cursor = '';
  }

  buildList(p) {
    const pl = this.s.view.players[p];
    const allowed = this.s.state ? this.s.state.players[p].towers : this.profile.towersUnlocked;
    return TOWER_ORDER.filter((t) => allowed.includes(t));
  }

  build(x, y, type) {
    this.s.send({ t: 'build', p: this.me, x, y, tower: type });
    this.closePop();
  }

  // ───────────────────────── 팝업 ─────────────────────────
  place(el, tx, ty) {
    const k = this.scale;
    const px = (tx + 0.5) * TS * k;
    const py = (ty + 0.5) * TS * k;
    const w = Math.min(290, this.overlay.clientWidth - 16);
    let left = px + 26 * k;
    if (left + w > this.overlay.clientWidth - 8) left = px - w - 26 * k;
    left = Math.max(8, left);
    el.style.left = `${left}px`;
    el.style.top = '8px';
    requestAnimationFrame(() => {
      const hgt = el.offsetHeight;
      let top = py - hgt / 2;
      top = Math.max(8, Math.min(this.overlay.clientHeight - hgt - 8, top));
      el.style.top = `${top}px`;
    });
  }

  closePop() {
    if (this.pop) this.pop.el.remove();
    this.pop = null;
    this.ui.placing = null;
    this.ui.selTower = null;
  }

  openBuildMenu(x, y) {
    this.closePop();
    const pl = this.s.view.players[this.me];
    const tip = h('div', { class: 'tip' }, '유산을 고르세요. 같은 계열의 다른 유산이 2칸 안에 있으면 공명(+12%)합니다.');
    const list = this.buildList(this.me);
    const cards = list.map((type, i) => {
      const def = TOWERS[type];
      const cost = def.levels[0].cost;
      const b = h('button', {
        class: 'bcard', disabled: pl.gold < cost, title: `${def.name} (${i + 1})`,
        onmouseenter: () => {
          this.ui.placing = type;
          this.ui.hover = { x, y };
          this.ui.hoverOk = true;
          clear(tip).append(h('b', { style: { color: CATEGORIES[def.cat].color } }, `${def.name} · ${def.title}`), ` [${CATEGORIES[def.cat].name}] `, def.desc);
        },
        onclick: () => this.build(x, y, type),
      }, h('img', { src: towerIcon(type), alt: '' }), h('span', {}, def.name), h('span', { class: 'c num' }, cost));
      return b;
    });
    const el = h('div', { class: 'panel pop', role: 'dialog', 'aria-label': '유산 건설' },
      h('button', { class: 'x', onclick: () => this.closePop(), 'aria-label': '닫기' }, '✕'),
      h('h3', {}, '유산 건설', h('span', { class: 'dim', style: { fontSize: '12px' } }, `숫자키 1~${list.length}`)),
      h('div', { class: 'build-grid' }, cards), tip);
    this.overlay.append(el);
    this.place(el, x, y);
    this.pop = { kind: 'build', el, x, y };
    this.ui.placing = list[0];
    this.ui.hover = { x, y };
    this.ui.hoverOk = true;
    audio.play('ui');
  }

  openTowerPanel(id) {
    this.closePop();
    const el = h('div', { class: 'panel pop', role: 'dialog', 'aria-label': '유산 정보' });
    this.overlay.append(el);
    this.pop = { kind: 'tower', el, id, sig: '' };
    this.ui.selTower = id;
    this.refreshTowerPanel(true);
    audio.play('ui');
  }

  refreshTowerPanel(force) {
    const pop = this.pop;
    const v = this.s.view;
    const t = v.towers.find((x) => x.id === pop.id);
    if (!t) return this.closePop();
    const pl = v.players[this.me];
    const sig = `${t.level}${t.branch}${t.mode}${t.kills}${pl.gold}${t.syn}${t.disabledT > 0}`;
    if (!force && sig === pop.sig) return;
    pop.sig = sig;
    const def = TOWERS[t.type];
    const st = towerBase(t.type, t.level, t.branch);
    const el = clear(pop.el);
    const spent = t.spent[0] + t.spent[1];
    const mine = t.owner === this.me || (this.local && t.owner === 0);
    const ownerName = this.s.coop ? this.playerName(t.owner) : '';
    const stat = (label, val) => h('div', {}, label, h('b', {}, val));
    const statsRow = [];
    if (st.dmg) statsRow.push(stat('피해', Math.round(st.dmg * (t.dmgMult || 1))));
    if (st.dps) statsRow.push(stat('초당', Math.round(st.dps * (t.dmgMult || 1))));
    if (st.cd) statsRow.push(stat('속도', `${(st.cd / (t.asMult || 1)).toFixed(2)}s`));
    if (st.range) statsRow.push(stat('사거리', (st.range * (t.rangeMult || 1)).toFixed(1)));
    if (st.buffDmg) statsRow.push(stat('강화', `+${Math.round(st.buffDmg * 100)}%`));
    if (st.income) statsRow.push(stat('수입', `${st.income}`));
    statsRow.push(stat('처치', t.kills || 0));
    el.append(...[
      h('button', { class: 'x', onclick: () => this.closePop(), 'aria-label': '닫기' }, '✕'),
      h('h3', {}, def.name, h('span', { class: 'dim', style: { fontSize: '12px' } }, `${t.branch ? def.branches[t.branch].name : `${t.level}단계`} · ${CATEGORIES[def.cat].name}${ownerName ? ` · ${ownerName}` : ''}`)),
      h('div', { class: 'stats' }, statsRow.slice(0, 8)),
      t.syn ? h('div', { class: 'tip', style: { minHeight: 0, color: '#ffe68c' } }, `유산 공명 +${t.syn * 12}% (같은 계열 ${t.syn}종 인접)`) : null,
      t.disabledT > 0 ? h('div', { class: 'tip', style: { minHeight: 0, color: '#ff8a7a' } }, `봉쇄됨 ${Math.ceil(t.disabledT)}초`) : null,
    ].filter(Boolean));
    if (def.kind !== 'palace' && def.kind !== 'sutra') {
      el.append(h('div', { class: 'target-modes', role: 'group', 'aria-label': '조준 우선순위' },
        Object.entries(TARGET_LABEL).map(([m, label]) => h('button', {
          'aria-pressed': String(t.mode === m), onclick: () => {
            this.s.send({ t: 'target', p: this.me, id: t.id, mode: m });
          },
        }, label))));
    }
    if (!t.branch && t.level < def.levels.length) {
      const next = def.levels[t.level];
      const cur = def.levels[t.level - 1];
      const diff = [];
      if (next.dmg) diff.push(`피해 ${cur.dmg}→${next.dmg}`);
      if (next.dps) diff.push(`초당 ${cur.dps}→${next.dps}`);
      if (next.range) diff.push(`사거리 ${cur.range}→${next.range}`);
      if (next.buffDmg) diff.push(`강화 +${Math.round(cur.buffDmg * 100)}→${Math.round(next.buffDmg * 100)}%`);
      el.append(h('button', {
        class: 'btn btn-gold', style: { width: '100%' }, disabled: pl.gold < next.cost, onclick: () => this.s.send({ t: 'upgrade', p: this.me, id: t.id }),
      }, `강화 (U) · ${next.cost}냥`), h('div', { class: 'tip', style: { minHeight: 0 } }, diff.join(' · ')));
    } else if (!t.branch) {
      el.append(h('div', { class: 'dim', style: { fontSize: '12px', margin: '4px 0' } }, '특화를 하나 고르세요 (되돌릴 수 없음)'),
        h('div', { class: 'branches' }, ['A', 'B'].map((b) => {
          const br = def.branches[b];
          return h('button', { class: `branch ${b}`, disabled: pl.gold < br.cost, onclick: () => this.s.send({ t: 'upgrade', p: this.me, id: t.id, branch: b }) },
            h('img', { src: towerIcon(t.type, 3, b, 52), alt: '', style: { width: '40px', height: '40px', justifySelf: 'center' } }),
            h('b', {}, br.name), h('span', { class: 'num coin' }, `${br.cost}냥`), h('span', {}, br.desc));
        })));
    } else {
      el.append(h('div', { class: 'tip', style: { minHeight: 0 } }, def.branches[t.branch].desc));
    }
    el.append(h('div', { class: 'row', style: { marginTop: '8px', justifyContent: 'space-between' } },
      h('span', { class: 'dim', style: { fontSize: '12px' } }, `투자 ${spent}냥`),
      h('button', { class: 'btn btn-small', disabled: !mine, onclick: () => { this.s.send({ t: 'sell', p: this.me, id: t.id }); this.closePop(); } },
        `철거 +${Math.floor(spent * SELL_RATE)}냥`)));
    this.place(el, t.x, t.y);
  }

  // ───────────────────────── HUD 갱신 ─────────────────────────
  set(key, el, val) {
    if (this.cache[key] === val) return;
    this.cache[key] = val;
    el.textContent = val;
  }

  updateHud(dt) {
    const v = this.s.view;
    const sig = `${v.heroes.length}:${v.players.length}:${v.heroes.map((x) => x.owner).join('')}`;
    if (sig !== this.cache.bottomSig) {
      this.cache.bottomSig = sig;
      this.buildBottom();
      v.players.forEach((_, i) => this.elGoldLbl[i] && (this.elGoldLbl[i].textContent = this.goldLabel(i)));
    }
    this.set('lives', this.elLives, `${v.lives}/${v.maxLives}`);
    this.set('wave', this.elWave, `${Math.max(1, v.wave.n)}/${v.wave.total}`);
    v.players.forEach((p, i) => this.elGold[i] && this.set(`g${i}`, this.elGold[i], fmt(p.gold)));
    if (this.cache.paused !== v.paused) {
      this.cache.paused = v.paused;
      this.btnPause.textContent = v.paused ? '계속' : '일시정지';
      this.showPausedBanner(v.paused);
    }
    // 영웅 카드
    for (const e of this.heroEls) {
      const hh = v.heroes[e.i];
      if (!hh) continue;
      e.hp.style.width = `${Math.max(0, (hh.hp / hh.maxHp) * 100)}%`;
      this.set(`lv${e.i}`, e.lv, hh.dead ? `부활 ${Math.ceil(hh.respawn)}` : `Lv${hh.lv}`);
      e.card.setAttribute('aria-pressed', String(this.ui.selHeroes.includes(e.i)));
      e.canvas.style.opacity = hh.dead ? 0.35 : 1;
      this.cdStyle(e.sk, hh.skillCd, HEROES[hh.heroId].skill.cd, hh.dead);
      this.cdStyle(e.ul, hh.ultCd, HEROES[hh.heroId].ult.cd, hh.dead);
    }
    for (const e of this.skillEls) {
      const slot = v.players[e.p] && v.players[e.p].skills[e.si];
      if (slot) this.cdStyle(e, slot.cd, slot.max, false);
    }
    // 공명
    const press = v.resonance.press[this.local ? 0 : this.me];
    const waiting = this.s.coop && v.time - press < COMBO_WINDOW ? 1 - (v.time - press) / COMBO_WINDOW : 0;
    drawResonance(this.resCv, v.resonance.gauge, this.ui.clock, { waiting });
    this.comboBtn.classList.toggle('ready', v.resonance.gauge >= RESONANCE_MAX);
    // 파도 버튼
    const w = v.wave;
    let label;
    let sub;
    let dis = false;
    if (w.n === 0) {
      label = '출정!';
      sub = 'N 키 · 첫 파도';
    } else if (w.phase === 'prep') {
      label = `다음 파도`;
      sub = `+${Math.floor(w.timer * EARLY_BONUS_PER_SEC)}냥 · ${Math.ceil(w.timer)}초`;
    } else if (w.phase === 'final') {
      label = '최후의 파도';
      sub = `남은 적 ${v.enemies.length}`;
      dis = true;
    } else {
      label = '진격 중';
      sub = `적 ${v.enemies.length}`;
      dis = true;
    }
    this.set('wl', this.waveBtn.children[0], label);
    this.set('ws', this.waveBtn.children[1], sub);
    if (this.cache.wdis !== dis) {
      this.cache.wdis = dis;
      this.waveBtn.disabled = dis;
    }
    this.updateWaveCard();
    this.updateBossBar();
    if (this.pop && this.pop.kind === 'tower') this.refreshTowerPanel(false);
    if (this.pop && this.pop.kind === 'build') {
      const pl = v.players[this.me];
      this.pop.el.querySelectorAll('.bcard').forEach((b, i) => {
        const type = this.buildList(this.me)[i];
        b.disabled = pl.gold < TOWERS[type].levels[0].cost;
      });
    }
  }

  cdStyle(o, cd, max, dead) {
    const pct = dead ? 100 : cd > 0 ? Math.min(100, (cd / max) * 100) : 0;
    const txt = dead ? '' : cd > 0 ? String(Math.ceil(cd)) : '';
    if (o._pct !== Math.round(pct)) {
      o._pct = Math.round(pct);
      o.cd.style.setProperty('--cd', `${pct}%`);
      o.el.classList.toggle('ready', pct === 0);
    }
    if (o._txt !== txt) {
      o._txt = txt;
      o.cd.textContent = txt;
    }
  }

  showPausedBanner(on) {
    if (on) {
      this.pauseEl = h('div', { class: 'announce', style: { animation: 'none', top: '40%' } }, h('div', { class: 'big' }, '일시정지'), h('div', { class: 'sub' }, '건설과 강화는 멈춘 상태에서도 할 수 있습니다'));
      this.overlay.append(this.pauseEl);
    } else if (this.pauseEl) {
      this.pauseEl.remove();
      this.pauseEl = null;
    }
  }

  updateWaveCard() {
    const v = this.s.view;
    const w = v.wave;
    const show = w.phase === 'prep' && w.n < w.total;
    const key = `${show}${w.n}/${w.total}${w.nextTactic}${this.waveCardOpen}`;
    if (this.cache.wc === key) return;
    this.cache.wc = key;
    if (this.waveCardEl) this.waveCardEl.remove();
    this.waveCardEl = null;
    if (!show) return;
    const n = w.n + 1;
    const groups = parseWave(this.stage.waves[n - 1]);
    const counts = new Map();
    for (const g of groups) counts.set(g.type, (counts.get(g.type) || 0) + g.n);
    const tac = w.nextTactic ? TACTICS[w.nextTactic] : null;
    if (tac && tac.add) for (const a of tac.add) counts.set(a.type, (counts.get(a.type) || 0) + a.n);
    const el = h('div', { class: 'panel wave-card' },
      h('button', { class: 'collapse', onclick: () => { this.waveCardOpen = !this.waveCardOpen; this.cache.wc = null; }, 'aria-label': '접기' }, this.waveCardOpen ? '−' : '+'),
      h('h3', { style: { fontSize: '15px' } }, `다음: 제 ${n} 파도`, h('span', { class: 'dim', style: { fontSize: '12px' } }, ` / ${w.total}`)),
    );
    if (this.waveCardOpen) {
      el.append(h('div', { class: 'enemies' }, [...counts.entries()].map(([type, c]) => {
        const def = ENEMIES[type];
        return h('span', { class: 'en', title: `${def.name} (${TIERS[def.tier].name}) — ${def.desc}`, style: { borderLeft: `3px solid ${TIERS[def.tier].color}` } },
          h('img', { src: enemyIcon(type), alt: '', width: 22, height: 22 }), `${def.name} ×${c}`);
      })));
      if (tac) {
        el.append(h('div', { class: 'tactic' }, h('b', {}, `왜군 전술 · ${tac.name}`), h('span', {}, tac.desc), h('span', { class: 'dim' }, `대비: ${tac.counter}`),
          h('span', { style: { color: '#ffe68c' } }, `한 명도 놓치지 않으면 파훼 보너스 +${tac.bonus}냥`)));
      }
    }
    this.overlay.append(el);
    this.waveCardEl = el;
  }

  updateBossBar() {
    const v = this.s.view;
    const boss = v.enemies.find((e) => e.tier === 4);
    if (!boss) {
      if (this.bossEl) {
        this.bossEl.remove();
        this.bossEl = null;
      }
      return;
    }
    if (!this.bossEl || this.bossEl.dataset.id !== String(boss.id)) {
      if (this.bossEl) this.bossEl.remove();
      const def = ENEMIES[boss.type];
      this.bossFill = h('i', {});
      this.bossShield = h('i', { class: 'shield', style: { position: 'absolute', left: 0, top: 0, height: '4px' } });
      this.bossEl = h('div', { class: 'bossbar', 'data-id': boss.id },
        h('div', { class: 'nm' }, `${def.title} ${def.name}`),
        h('div', { class: 'bar', style: { position: 'relative' } }, this.bossFill, this.bossShield));
      this.overlay.append(this.bossEl);
    }
    this.bossFill.style.width = `${(boss.hp / boss.maxHp) * 100}%`;
    this.bossShield.style.width = `${Math.min(100, (boss.shield / boss.maxHp) * 100)}%`;
  }

  // ───────────────────────── 이벤트 ─────────────────────────
  handleEvents(evs) {
    const v = this.s.view;
    for (const e of evs) {
      switch (e.k) {
        case 'sfx':
          audio.play(e.n);
          break;
        case 'boom':
          if (e.kind !== 'hangul' && e.kind !== 'star') audio.play('boom');
          break;
        case 'wave': {
          const tac = e.tactic ? TACTICS[e.tactic] : null;
          this.announce(`제 ${e.n} 파도`, e.boss ? '적장이 나타난다!' : tac ? `왜군 전술 · ${tac.name}` : this.stage.name);
          if (e.boss) audio.startBgm('boss');
          break;
        }
        case 'announce':
          this.announce(e.text, e.sub, e.color);
          break;
        case 'boss': {
          const def = ENEMIES[e.type];
          this.announce(def.name, `${def.title} 출현 — ${def.desc}`, '#ff9a8a');
          break;
        }
        case 'toast':
          if (e.p === -1 || e.p === this.me || this.local || this.solo) toast(e.text);
          break;
        case 'comboWait':
          if (this.local) toast(`${e.p === 0 ? '1P' : '2P'}가 합격기를 눌렀습니다! ${COMBO_WINDOW}초 안에 ${e.p === 0 ? '2P는 우Shift' : '1P는 Space'}`);
          else if (e.p === this.me) toast('동료의 호흡을 기다리는 중…');
          else toast(`${this.playerName(e.p)}이(가) 합격기를 눌렀습니다! Space로 호흡을 맞추세요`, 2400);
          break;
        case 'resonanceFull':
          toast('공명 게이지 가득! 두 영웅을 5칸 안에 모으고 합격기를 발동하세요', 2600);
          break;
        case 'combo':
          this.comboCine(e);
          break;
        case 'heroDown':
          toast(`${HEROES[e.heroId].name} 쓰러짐 — 잠시 뒤 도성에서 부활`);
          break;
        case 'leak':
          break;
        case 'end':
          break;
      }
    }
    if (evs.some((e) => e.k === 'wave') && v.wave.n > 1) audio.startBgm(v.enemies.some((x) => x.tier === 4) ? 'boss' : 'battle');
  }

  announce(text, sub, color) {
    const el = h('div', { class: 'announce' }, h('div', { class: 'big', style: color ? { color } : null }, text), sub ? h('div', { class: 'sub' }, sub) : null);
    this.overlay.querySelectorAll('.announce:not([style*="none"])').forEach((x) => x.remove());
    this.overlay.append(el);
    setTimeout(() => el.remove(), 2300);
  }

  comboCine(e) {
    const combo = findCombo(e.a, e.b);
    const el = h('div', { class: 'combo-cine' },
      heroPortrait(e.a, 130, 0),
      h('div', { class: 'nm' }, h('div', { class: 'sub' }, '합 격 기'), h('div', { class: 'big' }, e.name), h('div', { class: 'sub', style: { letterSpacing: '0.05em', color: '#f0e2c4' } }, combo.desc)),
      heroPortrait(e.b, 130, 1));
    this.overlay.append(el);
    setTimeout(() => el.remove(), 2000);
  }

  // ───────────────────────── 메뉴 ─────────────────────────
  async openMenu() {
    const wasPaused = this.s.view.paused;
    if (this.s.kind !== 'guest') this.s.setPaused(true);
    const body = h('div', { class: 'stack' },
      h('p', { class: 'dim' }, this.s.kind === 'guest' ? '온라인 전투는 호스트만 일시정지할 수 있습니다.' : '전투가 멈췄습니다.'),
      this.controlsHelp());
    const v = await modal('군막', body, [
      { label: '전장 이탈', value: 'quit' },
      ...(this.s.kind === 'guest' || this.s.kind === 'host' ? [] : [{ label: '다시 시작', value: 'restart' }]),
      { label: '계속', value: 'resume', cls: 'btn-seal' },
    ]);
    if (v === 'quit') {
      const ok = await modal('전장 이탈', '지금 나가면 이번 전투의 보상을 받지 못합니다.', [{ label: '머무르기', value: false }, { label: '나가기', value: true, cls: 'btn-seal' }]);
      if (ok) return this.onQuit();
    } else if (v === 'restart') return this.onRestart();
    if (this.s.kind !== 'guest') this.s.setPaused(wasPaused && v !== 'resume' ? wasPaused : false);
  }

  controlsHelp() {
    const rows = [
      ['클릭', '빈 터: 유산 건설 · 유산: 정보/강화 · 영웅: 선택'],
      ['우클릭 / 길 클릭', '선택한 영웅 이동 (터치: 길게 누르기)'],
      [this.solo ? 'Q W / E R' : 'Q W', this.solo ? '1번 영웅 / 2번 영웅의 기술·궁극기 (마우스 위치에 시전)' : '영웅 기술 · 궁극기'],
      ['D F', '비기 1 · 2'],
      ['Space', '합격기 (공명 가득 + 두 영웅 5칸 이내)'],
      ['N', '다음 파도 조기 호출 (보너스 군자금)'],
    ];
    if (this.solo) rows.push(['Tab / 1 2', '영웅 선택 전환']);
    if (this.s.coop) rows.push(['G', '핑 — 동료에게 위치 알리기']);
    if (this.local) {
      rows.push(['2P ← ↑ → ↓', '2P 영웅 이동'], ['2P Enter', '영웅 발밑에 건설/강화 (←→ 선택, Enter 확정)'], ['2P / .', '2P 영웅 기술 · 궁극기 (자동 조준)'], ["2P ; '", '2P 비기 1 · 2'], ['2P 우Shift', '2P 합격기']);
    }
    return h('div', { class: 'keys' }, rows.flatMap(([k, d]) => [h('kbd', {}, k), h('span', {}, d)]));
  }

  // ───────────────────────── 튜토리얼 힌트 ─────────────────────────
  checkHints() {
    if (!this.profile.settings.hints || this.hintEl) return;
    const v = this.s.view;
    const show = (id, text, anchor) => {
      if (this.hintsSeen.has(id)) return false;
      this.hintsSeen.add(id);
      this.profile.hintsSeen = [...this.hintsSeen];
      const el = h('div', { class: 'hint', role: 'note' }, h('div', { html: text }),
        h('button', { class: 'btn btn-small ok', onclick: () => { el.remove(); this.hintEl = null; } }, '알겠소'));
      Object.assign(el.style, anchor);
      this.overlay.append(el);
      this.hintEl = el;
      setTimeout(() => {
        if (this.hintEl === el) {
          el.remove();
          this.hintEl = null;
        }
      }, 12000);
      return true;
    };
    if (v.wave.n === 0 && v.towers.length === 0)
      return show('build', '<b>빈 터(풀밭)</b>를 클릭해 유산을 세우세요. 적이 지나갈 <b>길 가까이</b>가 좋습니다. 처음엔 값싼 <b>숭례문</b>을 추천합니다.', { left: '38%', top: '40%' });
    if (v.wave.n === 0 && v.towers.length > 0)
      return show('wave', '준비되면 아래 <b>출정!</b> 버튼(N 키)으로 첫 파도를 부르세요. 다음 파도부터는 일찍 부를수록 보너스 군자금!', { right: '12px', bottom: '12px' });
    if (v.wave.n >= 2)
      if (show('hero', `영웅을 클릭해 고르고 <b>우클릭</b>(또는 길 클릭)으로 옮기세요. ${this.solo ? '<b>Q/W</b>는 1번, <b>E/R</b>은 2번 영웅의 기술입니다.' : '<b>Q/W</b>로 기술을 씁니다.'} 마우스를 올린 곳에 시전됩니다.`, { left: '12px', bottom: '12px' })) return;
    if (v.wave.n >= 3) if (show('equip', '<b>D/F</b>는 장착한 비기입니다. 적이 몰린 곳에 쓰세요. 비기는 진영의 <b>비기</b> 메뉴에서 바꾸고 강화합니다.', { left: '12px', bottom: '12px' })) return;
    if (v.wave.nextTactic) if (show('tactic', '<b>왜군 전술 카드</b>가 공개됐습니다! 대비책을 세워 한 명도 놓치지 않으면 <b>전술 파훼</b> 보너스를 받습니다.', { left: '270px', top: '12px' })) return;
    if (v.resonance.gauge >= RESONANCE_MAX)
      if (show('combo', `<b>공명 게이지</b>가 찼습니다. 두 영웅을 <b>5칸 안</b>에 모으고 ${this.s.coop ? '두 사람이 <b>2.5초 안에 함께</b>' : ''} <b>Space</b>를 누르면 <b>합격기</b>가 발동합니다!`, { left: '40%', bottom: '12px' })) return;
    if (v.towers.some((t) => t.level >= 3 && !t.branch))
      if (show('branch', '3단계 유산은 <b>두 갈래 특화</b> 중 하나를 고를 수 있습니다. 유산을 클릭해 보세요.', { right: '12px', top: '12px' })) return;
    if (v.towers.some((t) => t.syn > 0))
      show('synergy', '<b>유산 공명</b>! 같은 계열(궁궐·사찰·성곽과학)의 <b>다른</b> 유산이 2칸 안에 있으면 1종당 공격력 +12%. 점선이 공명을 뜻합니다.', { right: '12px', top: '12px' });
  }
}
