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
import { getMap, tileAt, nearestOnPath, T_BUILD } from '../sim/map.js';
import { autoAim } from '../sim/abilities.js';
import { audio } from '../audio/audio.js';
import { Ring, spread } from './ring.js';
import { ITEMS, ITEM_ORDER, ITEM_CD } from '../data/items.js';
import { spendItem } from '../meta/profile.js';
import { metaCost, TOWER_META_BONUS } from '../data/quests.js';

const W = 960;
const H = 560;
const SKILL_AIM = { yi: 4.2, sejong: 1.8, eulji: 1.5, gang: 0.8, gwon: 1.6, gwak: 1, ahn: 2.2, dangun: 1.4 };
const ULT_AIM = { yi: 0.8, eulji: 3, gwon: 0.7 };
const ULT_TARGETLESS = { sejong: true, gang: true, gwak: true, ahn: true, dangun: true };
const TARGET_LABEL = { first: '선두', last: '후미', strong: '강적', close: '근접' };

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
    this.ui = { clock: 0, hover: null, hoverOk: false, placing: null, selTower: null, selHeroes: [], aim: null, p2cursor: null, moveMark: null, buildAt: null, p2intent: null };
    // 누가 어디를 만지는지: 협동에서는 내 색과 꼬리표를 칸 위에 띄운다
    const myColor = (this.local ? 0 : this.me) === 1 ? '#d9483b' : '#3d7fd6';
    this.ui.meColor = myColor;
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
    this.renderer.fx.shakeLevel = profile.settings.shakeLv ?? 1;
    this.renderer.fx.coopTags = this.s.coop;
    this.renderer.fx.onSound = (n) => audio.play(n);
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
      h('div', { class: 'hud-stat' }, h('span', { class: 'brush', style: { fontSize: '25px', color: 'var(--gold-hi)' } }, this.stage.name),
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
    this.xray = h('canvas', { class: 'xray', 'aria-hidden': 'true' });
    this.xctx = this.xray.getContext('2d');
    this.area = h('div', { class: 'stage-area' }, this.cv, this.overlay, this.xray);
    const tip = h('div', { class: 'rotate-tip' }, '화면을 가로로 돌리면 전장이 더 크게 보입니다');
    // 하단
    this.bottom = h('div', { class: 'hud-bottom' });
    this.el.append(top, this.area, this.bottom);
    top.after(tip);
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
    this.itemEls = [];
    const groups = this.s.coop ? [0, 1] : [0];
    const makeGroup = (p) => {
      const g = h('div', { class: `pgroup p${p}` });
      const heroes = v.heroes.map((hh, i) => ({ hh, i })).filter(({ hh }) => hh.owner === p);
      const mine = p === this.me || (this.local && p === 1);
      heroes.forEach(({ hh, i }, k) => {
        const def = HEROES[hh.heroId];
        const canvas = heroPortrait(hh.heroId, 46, p, hh.skin);
        const hp = h('i', { style: { width: '100%' } });
        const lv = h('span', { class: 'num dim', style: { fontSize: '13px' } });
        const card = h('button', { class: 'hero-card', 'aria-pressed': 'false', title: `${def.name} — 클릭해 선택`, onclick: () => this.selectHero(i) },
          canvas, h('span', { class: 'nm' }, def.name, ' ', lv), h('div', { class: 'bar green hpbar' }, hp));
        const keys = this.keyLabels(p, k);
        const sk = this.skillButton(def.skill.short, `${def.name} 기술 · ${def.skill.name}`, keys.skill, () => this.useHeroSkill(i, 'skill'), !mine);
        const ul = this.skillButton(def.ult.short, `${def.name} 궁극기 · ${def.ult.name}`, keys.ult, () => this.useHeroSkill(i, 'ult'), !mine, true);
        this.heroEls.push({ i, card, hp, lv, canvas, sk, ul });
        g.append(card, h('div', { class: 'skills' }, sk.el, ul.el));
      });
      const pl = v.players[p];
      if (pl) {
        const box = h('div', { class: 'skills' });
        pl.skills.forEach((slot, si) => {
          const sd = SKILLS[slot.id];
          const b = this.skillButton(sd.short, `비기 · ${sd.name}`, this.keyLabels(p, 0).equip[si], () => this.useEquip(p, si), !mine);
          this.skillEls.push({ p, si, ...b });
          box.append(b.el);
        });
        g.append(box);
      }
      // 보급품 (옥 상점에서 산 소모품) — 마우스를 쓰는 사람만
      const ids = pl && pl.items && this.itemUser(p) ? ITEM_ORDER.filter((id) => id in pl.items) : [];
      if (ids.length) {
        const box = h('div', { class: 'skills items', 'aria-label': '보급품' });
        for (const id of ids) {
          const it = ITEMS[id];
          const key = this.local ? '' : 'ZXCV'[ITEM_ORDER.indexOf(id)];
          const b = this.skillButton(it.short, `보급품 · ${it.name} — ${it.desc}`, key, () => this.useItem(p, id), false);
          b.el.classList.add('item');
          b.cnt = h('span', { class: 'cnt num' });
          b.el.append(b.cnt);
          this.itemEls.push({ p, id, ...b });
          box.append(b.el);
        }
        g.append(box);
      }
      return g;
    };
    // 중앙: 합격기 + 파도 버튼
    this.resCv = h('canvas', { width: 148, height: 148 });
    this.comboBtn = h('button', { class: 'combo', title: '합격기 (공명 게이지가 가득 차고 두 영웅이 5칸 이내일 때)', onclick: () => this.pressCombo(this.local ? 0 : this.me) },
      this.resCv, this.local ? h('span', { class: 'lbl' }, '1P 클릭 · 2P Space') : h('span', { class: 'lbl' }, '합격기', h('span', { class: 'k' }, ' Space')));
    this.waveBtn = h('button', { class: 'btn btn-seal wave-btn', onclick: () => this.callWave() }, h('span', {}, '출정!'), h('small', {}, this.local ? '클릭 · 2P W' : 'N 키'));
    const center = h('div', { class: 'center-cmd' }, this.comboBtn, this.waveBtn);
    this.bottom.append(makeGroup(0), center);
    if (groups.includes(1)) this.bottom.append(makeGroup(1));
  }

  itemUser(p) {
    return this.local || this.solo ? p === 0 : p === this.me;
  }

  useItem(p, id, at) {
    const pl = this.s.view.players[p];
    const it = ITEMS[id];
    if (!pl || !pl.items || !(pl.items[id] > 0)) {
      audio.play('deny');
      return toast(`${it.name}: 이번 전투에서 더 쓸 수 없습니다`);
    }
    if (pl.itemCd > 0) {
      audio.play('deny');
      return toast(`보급품 재사용 대기 ${Math.ceil(pl.itemCd)}초`);
    }
    const fire = (x, y) => {
      this.s.send({ t: 'item', p, id, x, y });
      spendItem(this.profile, id);
    };
    if (it.target !== 'point') return fire(0, 0);
    if (at) fire(at.x, at.y);
    else this.startTargeting({ r: it.radius, run: fire });
  }

  keyLabels(p, heroSlot) {
    if (this.local) return p === 1 ? { skill: 'A', ult: 'S', equip: ['D', 'F'] } : { skill: '', ult: '', equip: ['', ''] };
    if (this.solo) return { skill: heroSlot ? 'E' : 'Q', ult: heroSlot ? 'R' : 'W', equip: ['D', 'F'] };
    if (p !== this.me) return { skill: '', ult: '', equip: ['', ''] };
    return { skill: 'Q', ult: 'W', equip: ['D', 'F'] };
  }

  // 버튼 글씨: 누구나 읽을 수 있는 한글 짧은 이름 (두 줄까지)
  skillButton(label, name, key, onclick, disabled, ult = false) {
    const cd = h('span', { class: 'cd' });
    const long = Math.max(...label.split('\n').map((l) => l.length)) >= 3;
    const el = h('button', { class: `sk${ult ? ' ult' : ''}`, title: name, 'aria-label': name, onclick, disabled },
      h('span', { class: `ic${long ? ' l3' : ''}` }, label), key ? h('span', { class: 'key' }, key) : null, cd);
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
    this.drawXray(v);
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
    Object.assign(this.xray.style, { left: `${left}px`, top: `${top}px`, width: `${W * k}px`, height: `${H * k}px` });
    this.xdpr = Math.min(2, window.devicePixelRatio || 1);
    this.xray.width = Math.round(W * k * this.xdpr);
    this.xray.height = Math.round(H * k * this.xdpr);
    this.xrayDirty = true;
    if (this.pop) this.pop.kind === 'build' ? this.openBuildMenu(this.pop.x, this.pop.y) : this.openTowerPanel(this.pop.id);
    if (this.p2menu) this.renderP2Menu();
  }

  // ───── 창에 가려진 영웅 비추기 ─────
  occluders() {
    const out = [];
    // 고리마다 주인을 적어 둔다: 내 고리는 가운데가 내 영웅 자리라 비춰 줄 필요가 없다
    const own = (rs, owner) => rs.map((r) => ({ ...r, owner }));
    if (this.pop) out.push(...own(this.pop.ring.rects(), this.local ? 0 : this.me));
    if (this.p2menu) out.push(...own(this.p2menu.ring.rects(), 1));
    const base = this.overlay.getBoundingClientRect();
    for (const el of [this.waveCardEl, this.hintEl, this.bossEl]) {
      if (!el || !el.isConnected) continue;
      const r = el.getBoundingClientRect();
      if (r.width && r.height) out.push({ x: r.left - base.left, y: r.top - base.top, w: r.width, h: r.height });
    }
    return out;
  }

  drawXray(v) {
    const c = this.xctx;
    const occ = this.occluders();
    if (!occ.length && !this.xrayDirty) return;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.clearRect(0, 0, this.xray.width, this.xray.height);
    this.xrayDirty = false;
    if (!occ.length) return;
    const k = this.scale;
    c.setTransform(this.xdpr * k, 0, 0, this.xdpr * k, 0, 0);
    for (const hh of v.heroes) {
      if (hh.dead) continue;
      const sx = hh.x * TS * k;
      const sy = (hh.y * TS + 9) * k;
      const bx = { x: sx - 16 * k, y: sy - 50 * k, w: 32 * k, h: 52 * k };
      const hits = occ.filter((r) => r.owner !== hh.owner && bx.x < r.x + r.w && bx.x + bx.w > r.x && bx.y < r.y + r.h && bx.y + bx.h > r.y);
      if (!hits.length) continue;
      this.xrayDirty = true;
      // 남의 고리 버튼 위에서는 반투명으로(버튼도 보이게), 설명·카드 위에서는 또렷하게
      const ghost = hits.every((r) => r.btn);
      this.renderer.drawHeroOnTop(c, hh, this.ui.clock, ghost ? 0.5 : 1);
    }
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
    // 로컬 협동: 키보드는 모두 2P 것 (1P는 마우스만)
    if (this.local) {
      if (this.p2Key(e)) e.preventDefault();
      else if (code === 'Escape') {
        if (this.targeting) this.cancelTargeting();
        else if (this.pop) this.closePop();
        else this.openMenu();
      }
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
    if (this.pop && this.pop.kind === 'build' && /^[0-9]$/.test(e.key)) {
      const list = this.buildList(this.me);
      const type = list[(+e.key + 9) % 10];
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
      case 'KeyZ':
      case 'KeyX':
      case 'KeyC':
      case 'KeyV': {
        const id = ITEM_ORDER['ZXCV'.indexOf(code[3])];
        const pl = this.s.view.players[this.me];
        if (id && pl && pl.items && id in pl.items) this.useItem(this.me, id, mouse);
        break;
      }
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

  // 2P: 방향키 이동 + 왼손 A S D F · E Q · W · Space
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
      else if (c === 'KeyE' || c === 'Space' || c === 'Enter') {
        const o = m.options[m.idx];
        if (o && !o.disabled) o.run();
        else audio.play('deny');
        this.closeP2Menu();
        return true;
      } else if (c === 'KeyQ' || c === 'Backspace') {
        this.closeP2Menu();
        return true;
      } else return true;
      audio.play('tick');
      this.renderP2Menu();
      return true;
    }
    if (arrows.includes(c)) {
      this.p2keys.add(c);
      return true;
    }
    if (c === 'KeyW') {
      this.callWave();
      return true;
    }
    if (!hero) return false;
    const aim = (r = 1.6) => {
      const a = this.s.state ? autoAim(this.s.state, hero, 6, r) : null;
      return a || { x: hero.x + hero.facing * 1.5, y: hero.y };
    };
    switch (c) {
      case 'KeyE':
        this.openP2Menu();
        return true;
      case 'KeyA': {
        if (hero.dead || hero.skillCd > 0) return this.p2Deny(hero, 'skill');
        const a = aim(SKILL_AIM[hero.heroId]);
        this.s.send({ t: 'heroSkill', p: 1, h: hi, x: a.x, y: a.y });
        return true;
      }
      case 'KeyS': {
        if (hero.dead || hero.ultCd > 0) return this.p2Deny(hero, 'ult');
        const a = hero.heroId === 'yi' || hero.heroId === 'gang' ? aim(2.5) : aim(ULT_AIM[hero.heroId] || 2);
        this.s.send({ t: 'heroUlt', p: 1, h: hi, x: a.x, y: a.y });
        return true;
      }
      case 'KeyD':
      case 'KeyF': {
        const si = c === 'KeyD' ? 0 : 1;
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
      case 'Space':
        this.pressCombo(1);
        return true;
      case 'KeyQ':
        return true;
    }
    return false;
  }

  p2Deny(hero, kind) {
    audio.play('deny');
    if (!hero.dead) toast(`2P ${kind === 'skill' ? HEROES[hero.heroId].skill.name : HEROES[hero.heroId].ult.name} 재사용 대기 ${Math.ceil(kind === 'skill' ? hero.skillCd : hero.ultCd)}초`, 1200);
    return true;
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
    const tower = v.towers.find((t) => t.x === tile.x && t.y === tile.y);
    if (!tower && !this.canBuildAt(tile.x, tile.y)) return;
    this.closeP2Menu();
    this.p2menu = { tile, towerId: tower ? tower.id : null, idx: 0, options: [], ring: new Ring({ owner: 1, kbd: true, help: '←→ 고르기 · E 확정 · Q 취소' }) };
    this.overlay.append(this.p2menu.ring.el);
    this.renderP2Menu();
    audio.play('ui');
  }

  p2Options() {
    const v = this.s.view;
    const m = this.p2menu;
    const pl = v.players[1];
    const tower = m.towerId !== null ? v.towers.find((t) => t.id === m.towerId) : null;
    const options = [];
    if (tower) {
      const def = TOWERS[tower.type];
      if (!tower.branch && tower.level < def.levels.length) {
        const cost = this.price(tower.type, def.levels[tower.level].cost);
        options.push({ label: `${def.name} 강화`, cost, icon: towerIcon(tower.type, tower.level + 1), disabled: pl.gold < cost, desc: this.upgradeDiff(tower), run: () => this.s.send({ t: 'upgrade', p: 1, id: tower.id }) });
      } else if (!tower.branch) {
        for (const b of ['A', 'B']) {
          const br = def.branches[b];
          const bc = this.price(tower.type, br.cost);
          options.push({ label: `특화 · ${br.name}`, cost: bc, icon: towerIcon(tower.type, 3, b), disabled: pl.gold < bc, desc: br.desc, run: () => this.s.send({ t: 'upgrade', p: 1, id: tower.id, branch: b }) });
        }
      }
      if (tower.owner === 1) {
        const refund = Math.floor((tower.spent[0] + tower.spent[1]) * SELL_RATE);
        options.push({ label: `${def.name} 철거`, cost: `+${refund}`, glyph: '철거', cls: 'sell', desc: `투자한 군자금의 ${Math.round(SELL_RATE * 100)}%를 돌려받습니다.`, run: () => this.s.send({ t: 'sell', p: 1, id: tower.id }) });
      }
    } else {
      for (const type of this.buildList(1)) {
        const def = TOWERS[type];
        const cost = this.price(type, def.levels[0].cost);
        options.push({ type, label: `${def.name} · ${def.title}`, cost, icon: towerIcon(type), disabled: pl.gold < cost, desc: def.desc, cat: def.cat, run: () => this.s.send({ t: 'build', p: 1, x: m.tile.x, y: m.tile.y, tower: type }) });
      }
    }
    return options;
  }

  renderP2Menu() {
    const m = this.p2menu;
    if (!m) return;
    m.options = this.p2Options();
    if (!m.options.length) return this.closeP2Menu();
    m.idx = Math.min(m.idx, m.options.length - 1);
    const k = this.scale;
    m.ring.layout((m.tile.x + 0.5) * TS * k, (m.tile.y + 0.5) * TS * k, this.overlay.clientWidth, this.overlay.clientHeight, k, m.options.length);
    const angles = spread(m.options.length);
    m.ring.hoverKey = m.idx;
    m.ring.render(m.options.map((o, i) => ({
      key: i, angle: angles[i], icon: o.icon, glyph: o.glyph, cost: o.cost, cls: `${o.cls || ''}${o.disabled ? ' poor' : ''}`, active: i === m.idx, label: o.label,
      tip: () => this.tipBody(o.label, o.cost, o.desc, o.cat, o.disabled),
    })), null);
    const o = m.options[m.idx];
    this.ui.p2intent = { x: m.tile.x, y: m.tile.y, type: o && o.type ? o.type : null, towerId: m.towerId };
    m.sig = this.p2Sig();
  }

  p2Sig() {
    const v = this.s.view;
    const m = this.p2menu;
    const t = m.towerId !== null ? v.towers.find((x) => x.id === m.towerId) : null;
    return `${v.players[1] ? v.players[1].gold : 0}|${t ? `${t.level}${t.branch}` : v.towers.some((x) => x.x === m.tile.x && x.y === m.tile.y)}`;
  }

  closeP2Menu() {
    if (this.p2menu) this.p2menu.ring.remove();
    this.p2menu = null;
    this.ui.p2intent = null;
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
    const allowed = this.s.state ? this.s.state.players[p].towers : this.profile.towersUnlocked;
    return TOWER_ORDER.filter((t) => allowed.includes(t));
  }

  build(x, y, type) {
    this.s.send({ t: 'build', p: this.me, x, y, tower: type });
    this.closePop();
  }

  // ───────────────────────── 원형 명령 고리 ─────────────────────────
  tipBody(title, cost, desc, cat, poor) {
    return h('div', {},
      h('div', { class: 'tt' }, cat ? h('i', { class: 'dot', style: { background: CATEGORIES[cat].color } }) : null, h('b', {}, title),
        cost !== undefined && cost !== null ? h('span', { class: `num ${poor ? 'poor' : 'coin'}` }, typeof cost === 'number' ? `${cost}냥` : `${cost}냥`) : null),
      desc ? h('div', { class: 'td' }, desc) : null);
  }

  openRing(tx, ty, n = 0) {
    const ring = new Ring({ owner: this.local ? 0 : this.me });
    const k = this.scale;
    ring.layout((tx + 0.5) * TS * k, (ty + 0.5) * TS * k, this.overlay.clientWidth, this.overlay.clientHeight, k, n);
    this.overlay.append(ring.el);
    return ring;
  }

  closePop() {
    if (this.pop) this.pop.ring.remove();
    this.pop = null;
    this.ui.placing = null;
    this.ui.selTower = null;
    this.ui.buildAt = null;
  }

  openBuildMenu(x, y) {
    this.closePop();
    const ring = this.openRing(x, y, this.buildList(this.me).length);
    this.pop = { kind: 'build', ring, x, y, sig: '' };
    ring.onleave = () => {
      this.ui.placing = null;
    };
    this.ui.buildAt = { x, y };
    this.renderBuildRing();
    audio.play('ui');
  }

  renderBuildRing() {
    const pop = this.pop;
    const pl = this.s.view.players[this.me];
    const list = this.buildList(this.me);
    const angles = spread(list.length);
    const keys = !this.local && !('ontouchstart' in window);
    pop.sig = list.map((t) => (pl.gold >= this.price(t, TOWERS[t].levels[0].cost) ? 1 : 0)).join('');
    pop.ring.render(list.map((type, i) => {
      const def = TOWERS[type];
      const cost = this.price(type, def.levels[0].cost);
      const poor = pl.gold < cost;
      return {
        key: type, angle: angles[i], icon: towerIcon(type), cost, cls: poor ? 'poor' : '', label: `${def.name} (${cost}냥)`, num: keys && i < 10 ? String((i + 1) % 10) : null,
        tip: () => this.tipBody(`${def.name} · ${def.title}`, cost, def.desc, def.cat, poor),
        onhover: () => {
          this.ui.placing = type;
        },
        run: () => (poor ? this.denyGold(cost) : this.build(pop.x, pop.y, type)),
      };
    }), h('div', {}, h('div', { class: 'tt' }, h('b', {}, '유산 건설')),
      h('div', { class: 'td' }, '같은 계열의 다른 유산이 2칸 안에 있으면 공명(1종당 +12%)합니다.')));
  }

  // 유산 복원 20단계부터 건설·강화 10% 할인 (내 기록 기준 — 시뮬레이션도 같은 값을 쓴다)
  price(type, base) {
    const t = this.profile.towers && this.profile.towers[type];
    return metaCost(base, t ? t.lv : 0);
  }

  denyGold(cost) {
    audio.play('deny');
    const pl = this.s.view.players[this.me];
    toast(`군자금이 ${cost - pl.gold}냥 모자랍니다`, 1200);
  }

  openTowerPanel(id) {
    this.closePop();
    const t = this.s.view.towers.find((x) => x.id === id);
    if (!t) return;
    const ring = this.openRing(t.x, t.y);
    this.pop = { kind: 'tower', ring, id, sig: '', armSell: false };
    this.ui.selTower = id;
    this.refreshTowerPanel(true);
    audio.play('ui');
  }

  // 남한산성 병사가 설 길목이 사거리 안에 있는가
  rallyOk(t, st) {
    const np = nearestOnPath(this.map, t.x + 0.5, t.y + 0.5);
    return !!np && np.dist <= st.range * Math.max(1, t.rangeMult || 1);
  }

  upgradeDiff(t) {
    const def = TOWERS[t.type];
    const next = def.levels[t.level];
    const cur = def.levels[t.level - 1];
    const diff = [];
    if (next.soldiers && next.soldiers !== cur.soldiers) diff.push(`병사 ${cur.soldiers}→${next.soldiers}명`);
    if (next.hp) diff.push(`병사 체력 ${cur.hp}→${next.hp}`);
    if (next.dmg) diff.push(`피해 ${cur.dmg}→${next.dmg}`);
    if (next.pct) diff.push(`체력 비례 ${Math.round(cur.pct * 100)}→${Math.round(next.pct * 100)}%`);
    if (next.freezeEvery && next.freezeEvery !== cur.freezeEvery) diff.push(`${cur.freezeEvery}→${next.freezeEvery}번째마다 얼림`);
    if (next.dps) diff.push(`초당 ${cur.dps}→${next.dps}`);
    if (next.range) diff.push(`사거리 ${cur.range}→${next.range}`);
    if (next.buffDmg) diff.push(`강화 +${Math.round(cur.buffDmg * 100)}→${Math.round(next.buffDmg * 100)}%`);
    if (next.income) diff.push(`수입 ${cur.income}→${next.income}`);
    return diff.join(' · ');
  }

  refreshTowerPanel(force) {
    const pop = this.pop;
    const v = this.s.view;
    const t = v.towers.find((x) => x.id === pop.id);
    if (!t) return this.closePop();
    const pl = v.players[this.me];
    const sig = `${t.level}${t.branch}${t.mode}${t.kills}${pl.gold}${t.syn}${t.disabledT > 0}${pop.armSell}`;
    if (!force && sig === pop.sig) return;
    pop.sig = sig;
    const def = TOWERS[t.type];
    const st = towerBase(t.type, t.level, t.branch);
    const spent = t.spent[0] + t.spent[1];
    const refund = Math.floor(spent * SELL_RATE);
    const mine = t.owner === this.me || (this.local && t.owner === 0);
    const ownerName = this.s.coop ? this.playerName(t.owner) : '';
    const items = [];
    if (!t.branch && t.level < def.levels.length) {
      const cost = this.price(t.type, def.levels[t.level].cost);
      const poor = pl.gold < cost;
      items.push({
        key: 'up', angle: -90, icon: towerIcon(t.type, t.level + 1), cost, cls: `up${poor ? ' poor' : ''}`, label: `강화 (${cost}냥)`, num: this.local ? null : 'U',
        tip: () => this.tipBody(`${t.level + 1}단계로 강화`, cost, this.upgradeDiff(t), null, poor),
        run: () => (poor ? this.denyGold(cost) : this.s.send({ t: 'upgrade', p: this.me, id: t.id })),
      });
    } else if (!t.branch) {
      for (const [b, ang] of [['A', -128], ['B', -52]]) {
        const br = def.branches[b];
        const bc = this.price(t.type, br.cost);
        const poor = pl.gold < bc;
        items.push({
          key: b, angle: ang, icon: towerIcon(t.type, 3, b), cost: bc, cls: `br${b}${poor ? ' poor' : ''}`, label: `특화 ${br.name}`,
          tip: () => this.tipBody(`특화 · ${br.name}`, bc, `${br.desc} (되돌릴 수 없음)`, null, poor),
          run: () => (poor ? this.denyGold(bc) : this.s.send({ t: 'upgrade', p: this.me, id: t.id, branch: b })),
        });
      }
    }
    if (def.kind !== 'palace' && def.kind !== 'sutra' && def.kind !== 'barracks') {
      const modes = Object.keys(TARGET_LABEL);
      const nextMode = modes[(modes.indexOf(t.mode) + 1) % modes.length];
      items.push({
        key: 'tg', angle: 0, glyph: TARGET_LABEL[t.mode], cls: 'tg', label: `조준 ${TARGET_LABEL[t.mode]}`, cost: null,
        tip: () => this.tipBody(`조준 우선순위 · ${TARGET_LABEL[t.mode]}`, null, `누르면 ${TARGET_LABEL[nextMode]}(으)로 바꿉니다. 선두 → 후미 → 강적 → 근접`),
        run: () => this.s.send({ t: 'target', p: this.me, id: t.id, mode: nextMode }),
      });
    }
    items.push({
      key: 'sell', angle: 90, glyph: pop.armSell ? '확인' : '철거', cost: `+${refund}`, cls: `sell${pop.armSell ? ' armed' : ''}`, disabled: !mine, label: `철거 +${refund}냥`,
      tip: () => this.tipBody(pop.armSell ? '한 번 더 누르면 철거' : '철거', `+${refund}`, mine ? `투자 ${spent}냥 중 ${refund}냥을 돌려받습니다.` : '동료의 유산은 철거할 수 없습니다.'),
      run: () => {
        if (!pop.armSell) {
          pop.armSell = true;
          audio.play('ui');
          return this.refreshTowerPanel(true);
        }
        this.s.send({ t: 'sell', p: this.me, id: t.id });
        this.closePop();
      },
    });
    const stats = [];
    if (st.soldiers) stats.push(`병사 ${st.soldiers}명 · 체력 ${Math.round(st.hp * (1 + TOWER_META_BONUS * (t.metaLv || 0)))}`);
    if (st.pct) stats.push(`최대 체력 ${Math.round(st.pct * 100)}%(최대 ${st.pctCap})`);
    if (st.freezeEvery) stats.push(`${st.freezeEvery}번째마다 ${st.freeze}초 얼림`);
    if (st.dmg) stats.push(`피해 ${Math.round(st.dmg * (t.dmgMult || 1))}`);
    if (st.dps) stats.push(`초당 ${Math.round(st.dps * (t.dmgMult || 1))}`);
    if (st.cd) stats.push(`속도 ${(st.cd / (t.asMult || 1)).toFixed(2)}s`);
    if (st.range) stats.push(`사거리 ${(st.range * (t.rangeMult || 1)).toFixed(1)}`);
    if (st.buffDmg) stats.push(`강화 +${Math.round(st.buffDmg * 100)}%`);
    if (st.income) stats.push(`수입 ${st.income}`);
    stats.push(`처치 ${t.kills || 0}`);
    const info = h('div', {},
      h('div', { class: 'tt' }, h('i', { class: 'dot', style: { background: CATEGORIES[def.cat].color } }), h('b', {}, def.name),
        h('span', { class: 'dim' }, `${t.branch ? def.branches[t.branch].name : `${t.level}단계`}${ownerName ? ` · ${ownerName}` : ''}`)),
      h('div', { class: 'td num' }, stats.join(' · ')),
      t.syn ? h('div', { class: 'td', style: { color: '#ffe68c' } }, `유산 공명 +${t.syn * 12}%`) : null,
      t.disabledT > 0 ? h('div', { class: 'td', style: { color: '#ff8a7a' } }, `봉쇄됨 ${Math.ceil(t.disabledT)}초`) : null,
      def.kind === 'barracks' && !this.rallyOk(t, st) ? h('div', { class: 'td', style: { color: '#ff8a7a' } }, '길이 멀어 병사를 세울 수 없습니다. 길 가까이 지으세요.') : null,
      t.branch ? h('div', { class: 'td' }, def.branches[t.branch].desc) : null);
    pop.ring.render(items, info);
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
    if (this.cache.livesN !== undefined && v.lives < this.cache.livesN) this.pulse(this.elLives, 'hurt');
    this.cache.livesN = v.lives;
    this.set('lives', this.elLives, `${v.lives}/${v.maxLives}`);
    this.set('wave', this.elWave, `${Math.max(1, v.wave.n)}/${v.wave.total}`);
    v.players.forEach((p, i) => {
      if (!this.elGold[i]) return;
      const key = `gn${i}`;
      if (this.cache[key] !== undefined && p.gold > this.cache[key]) this.pulse(this.elGold[i], 'bump');
      this.cache[key] = p.gold;
      this.set(`g${i}`, this.elGold[i], fmt(p.gold));
    });
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
    for (const e of this.itemEls) {
      const pl = v.players[e.p];
      if (!pl || !pl.items) continue;
      const n = pl.items[e.id] || 0;
      this.cdStyle(e, pl.itemCd || 0, ITEM_CD, n <= 0);
      this.set(`it${e.p}${e.id}`, e.cnt, `×${n}`);
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
      sub = `${Math.max(0, Math.ceil(w.timer))}초 뒤 자동 · ${this.local ? '2P W' : 'N 키'}`;
    } else if (w.phase === 'prep') {
      label = `다음 파도`;
      sub = `${Math.max(0, Math.ceil(w.timer))}초 뒤 자동 · +${Math.floor(w.timer * EARLY_BONUS_PER_SEC)}냥`;
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
      const sig = this.buildList(this.me).map((t) => (pl.gold >= this.price(t, TOWERS[t].levels[0].cost) ? 1 : 0)).join('');
      if (this.pop.sig !== sig) this.renderBuildRing();
      if (v.towers.some((t) => t.x === this.pop.x && t.y === this.pop.y)) this.closePop();
    }
    if (this.p2menu && this.p2menu.sig !== this.p2Sig()) this.renderP2Menu();
  }

  // 수치가 바뀔 때 칸을 톡 튀게 (군자금 증가 · 민심 감소)
  pulse(el, cls) {
    const box = el.closest('.hud-stat');
    if (!box || box.classList.contains(cls)) return;
    box.classList.add(cls);
    setTimeout(() => box.classList.remove(cls), cls === 'hurt' ? 420 : 300);
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
      h('h3', { style: { fontSize: '17px' } }, `다음: 제 ${n} 파도`, h('span', { class: 'dim', style: { fontSize: '14px' } }, ` / ${w.total}`)),
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
      this.bossEl = h('div', { class: `bossbar${def.fixedHp ? ' final' : ''}`, 'data-id': boss.id },
        h('div', { class: 'nm' }, `${def.title} ${def.name}`,
          h('span', { class: 'armor' }, `갑옷 ${Math.round(def.armor * 100)}% · 저항 ${Math.round(def.resist * 100)}%`)),
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
          this.announce(def.name, `${def.title} 출현 — ${def.line || def.desc}`, def.fixedHp ? '#ffd24a' : '#ff9a8a');
          break;
        }
        case 'toast':
          if (e.p === -1 || e.p === this.me || this.local || this.solo) toast(e.text);
          break;
        case 'comboWait':
          if (this.local) toast(`${e.p === 0 ? '1P' : '2P'}가 합격기를 눌렀습니다! ${COMBO_WINDOW}초 안에 ${e.p === 0 ? '2P는 Space' : '1P는 태극 버튼 클릭'}`, 2400);
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
    const skin = (id) => (this.s.view.heroes.find((x) => x.heroId === id) || {}).skin || null;
    const el = h('div', { class: 'combo-cine' },
      heroPortrait(e.a, 130, 0, skin(e.a)),
      h('div', { class: 'nm' }, h('div', { class: 'sub' }, '합 격 기'), h('div', { class: 'big' }, e.name), h('div', { class: 'sub', style: { letterSpacing: '0.05em', color: '#f0e2c4' } }, combo.desc)),
      heroPortrait(e.b, 130, 1, skin(e.b)));
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
    let rows;
    if (this.local) {
      rows = [
        ['1P 클릭', '빈 터: 유산 건설 · 유산: 정보/강화 · 기술 버튼 → 지점 클릭으로 시전'],
        ['1P 우클릭', '영웅 이동 (길 클릭도 가능)'],
        ['1P 태극 버튼', '합격기 (2P Space와 2.5초 안에 함께)'],
        ['1P 보급 버튼', '보급품 (옥 상점에서 산 소모품)'],
        ['2P ← ↑ → ↓', '2P 영웅 이동'],
        ['2P A · S', '기술 · 궁극기 (적이 몰린 곳 자동 조준)'],
        ['2P D · F', '비기 1 · 2'],
        ['2P E', '영웅 발밑에 건설/강화 (←→ 고르고 E 확정, Q 취소)'],
        ['2P Space', '합격기'],
        ['2P W', '다음 파도 부르기'],
      ];
    } else {
      rows = [
        ['클릭', '빈 터: 유산 건설 · 유산: 정보/강화 · 영웅: 선택'],
        ['우클릭 / 길 클릭', '선택한 영웅 이동 (터치: 길게 누르기)'],
        [this.solo ? 'Q W / E R' : 'Q W', this.solo ? '1번 영웅 / 2번 영웅의 기술·궁극기 (마우스 위치에 시전)' : '영웅 기술 · 궁극기'],
        ['D F', '비기 1 · 2'],
        ['Z X C V', '보급품 (옥 상점에서 산 산삼·궤짝·화차·부적)'],
        ['Space', '합격기 (공명 가득 + 두 영웅 5칸 이내)'],
        ['N', '다음 파도 조기 호출 (보너스 군자금)'],
      ];
      if (this.solo) rows.push(['Tab / 1 2', '영웅 선택 전환']);
      if (this.s.coop) rows.push(['G', '핑 — 동료에게 위치 알리기']);
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
      return show('wave', `파도는 <b>누르지 않아도 저절로</b> 옵니다(첫 파도 30초, 그다음은 18초 쉬고). 준비가 끝났으면 <b>출정!</b>(${this.local ? '클릭 또는 2P의 W' : 'N 키'})으로 바로 부르세요. 둘째 파도부터는 일찍 부를수록 보너스 군자금!`, { right: '12px', bottom: '12px' });
    if (v.wave.n >= 2)
      if (show('hero', this.local
        ? '1P는 <b>우클릭</b>으로 영웅을 옮기고, 아래 기술 버튼을 누른 뒤 지점을 클릭해 시전합니다. 2P는 <b>방향키</b>로 움직이고 <b>A·S</b>로 기술을 씁니다.'
        : `영웅을 클릭해 고르고 <b>우클릭</b>(또는 길 클릭)으로 옮기세요. ${this.solo ? '<b>Q/W</b>는 1번, <b>E/R</b>은 2번 영웅의 기술입니다.' : '<b>Q/W</b>로 기술을 씁니다.'} 마우스를 올린 곳에 시전됩니다.`, { left: '12px', bottom: '12px' })) return;
    if (v.wave.n >= 3) if (show('equip', this.local ? '비기: 1P는 아래 버튼 클릭 후 지점 클릭, 2P는 <b>D·F</b>. 2P는 <b>E</b>로 발밑에 유산을 세울 수 있습니다.' : '<b>D/F</b>는 장착한 비기입니다. 적이 몰린 곳에 쓰세요. 비기는 진영의 <b>비기</b> 메뉴에서 바꾸고 강화합니다.', { left: '12px', bottom: '12px' })) return;
    if (v.wave.nextTactic) if (show('tactic', '<b>왜군 전술 카드</b>가 공개됐습니다! 대비책을 세워 한 명도 놓치지 않으면 <b>전술 파훼</b> 보너스를 받습니다.', { left: '270px', top: '12px' })) return;
    if (v.resonance.gauge >= RESONANCE_MAX)
      if (show('combo', `<b>공명 게이지</b>가 찼습니다. 두 영웅을 <b>5칸 안</b>에 모으고 ${this.local ? '1P는 <b>태극 버튼</b>, 2P는 <b>Space</b>를 2.5초 안에 함께' : this.s.coop ? '두 사람이 <b>2.5초 안에 함께</b> <b>Space</b>를' : '<b>Space</b>를'} 누르면 <b>합격기</b>가 발동합니다!`, { left: '40%', bottom: '12px' })) return;
    if (v.towers.some((t) => t.level >= 3 && !t.branch))
      if (show('branch', '3단계 유산은 <b>두 갈래 특화</b> 중 하나를 고를 수 있습니다. 유산을 클릭해 보세요.', { right: '12px', top: '12px' })) return;
    if (v.towers.some((t) => t.syn > 0))
      show('synergy', '<b>유산 공명</b>! 같은 계열(궁궐·사찰·성곽과학)의 <b>다른</b> 유산이 2칸 안에 있으면 1종당 공격력 +12%. 점선이 공명을 뜻합니다.', { right: '12px', top: '12px' });
  }
}
