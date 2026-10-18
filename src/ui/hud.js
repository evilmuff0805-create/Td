// 전투 화면: 1인 1영웅 · 마우스/모바일 패드 · 방 코드 협동
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
import { autoAim, comboStatus } from '../sim/abilities.js';
import { abilityIllustration, paintAbility } from '../3d/skill-art.js';
import { rallyTargets } from '../3d/battle-controls.js';
import { audio } from '../audio/audio.js';
import { Ring, spread } from './ring.js';
import { ITEMS, ITEM_ORDER, ITEM_CD } from '../data/items.js';
import { spendItem } from '../meta/profile.js';
import { metaCost, TOWER_META_BONUS } from '../data/quests.js';
import { createVirtualPad, padWorldDirection } from './virtual-pad.js';

const W = 960;
const H = 560;
const SKILL_AIM = { yi: 4.2, sejong: 1.8, eulji: 1.5, gang: 0.8, gwon: 1.6, gwak: 1, ahn: 2.2, dangun: 1.4 };
const ULT_AIM = { yi: 0.8, eulji: 3, gwon: 0.7 };
const ULT_TARGETLESS = { sejong: true, gang: true, gwak: true, ahn: true, dangun: true };
const TARGET_LABEL = { first: '선두', last: '후미', strong: '강적', close: '근접' };

export class GameUI {
  constructor({ root, session, profile, names, onEnd, onQuit, onRestart, onInterrupted, rendererClass = Renderer }) {
    this.root = root;
    this.s = session;
    this.profile = profile;
    this.is3d = rendererClass.is3d === true;
    this.names = names || [];
    this.onEnd = onEnd;
    this.onQuit = onQuit;
    this.onRestart = onRestart;
    this.onInterrupted=onInterrupted;
    this.me = session.me;
    this.solo = session.kind === 'solo';
    this.stage = STAGE_BY_ID[session.stageId];
    this.map = getMap(session.stageId);
    this.ui = { clock: 0, hover: null, hoverOk: false, placing: null, selTower: null, selHeroes: [], aim: null, moveMark: null, buildAt: null };
    this.touchInput=(navigator.maxTouchPoints||0)>0||!!window.matchMedia?.('(pointer: coarse)').matches;
    this.ui.touchInput=this.touchInput;
    // 누가 어디를 만지는지: 협동에서는 내 색과 꼬리표를 칸 위에 띄운다
    const myColor = this.me === 1 ? '#d9483b' : '#3d7fd6';
    this.ui.meColor = myColor;
    this.selHero = this.myHeroIdx()[0] ?? 0;
    this.targeting = null;
    this.pop = null;
    this.cache = {};
    this.ended = false;
    this.destroyed = false;
    this.waveCardOpen = true;
    this.hintsSeen = new Set(profile.hintsSeen || []);
    this.hintTimer = 0;
    this.buildDom();
    try {
      this.renderer = new rendererClass(this.cv, { overlay: this.overlay, onTowerSelect: id => { if (!this.targeting) this.openTowerPanel(id); }, onBuild: (x,y,e) => this.buildSiteClick(x,y,e) });
      this.renderer.setup(session.stageId, { mood: profile.settings.mood, quality: profile.settings.quality, heroLooks:session.view.heroes });
    } catch (error) {
      if (!this.is3d) throw error;
      this.renderer?.destroy?.();
      this.is3d = false;
      this.buildDom(); // A WebGL canvas cannot be reused for a 2D context.
      this.renderer = new Renderer(this.cv);
      this.renderer.setup(session.stageId, { mood: profile.settings.mood });
      toast('이 기기에서는 평면 전장으로 실행합니다. 설정에서 화면 모드를 바꿀 수 있습니다.', 4000);
      console.warn('3D 전장 초기화 실패:', error.message);
    }
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
      if (hh.owner === p && !v.players[p]?.left) out.push(i);
    });
    return out;
  }

  // ───────────────────────── DOM 구성 ─────────────────────────
  buildDom() {
    this.el = h('div', { id: 'game', class: `${this.is3d ? 'game-3d' : ''}${this.touchInput ? ' touch-ui' : ''}` });
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
    this.networkBanner=h('div',{class:'battle-network',role:'status',hidden:true});this.area.append(this.networkBanner);
    const tip = h('div', { class: 'rotate-tip' }, '화면을 가로로 돌리면 전장이 더 크게 보입니다');
    // 하단
    this.bottom = h('div', { class: 'hud-bottom' });
    this.pad?.destroy();
    this.pad=createVirtualPad({canStart:()=>this.canUsePad(),onStart:()=>this.beginPad(),onChange:()=>this.padTick(performance.now()),onEnd:()=>this.endPad()});
    this.touchControls=this.pad.el;this.touchControls.hidden=!this.touchInput;
    this.cv.dataset.touchMode='pad';
    this.el.append(top, this.area, this.bottom);
    top.after(tip);
    clear(this.root).append(this.el);
    this.buildBottom();
    if (this.is3d) {
      const cam = h('div', { class: 'battle-camera', 'aria-label': '전장 시점' },
        h('span', { class: 'battle-season' }, '고정 시점 · 사계절 전장'),
        this.gridBtn=h('button', { 'aria-pressed': 'false', onclick: e => { this.ui.showGrid=!this.ui.showGrid; e.currentTarget.setAttribute('aria-pressed',String(this.ui.showGrid)); } }, '건설 터'),
        h('button', { onclick: () => this.renderer.world.home() }, '기본 시점'),
        h('button', { hidden:!this.s.coop, onclick: () => this.rallyHeroes(), title: '내 영웅을 같은 길목에 모읍니다. 협동 동료의 영웅은 동료가 이동합니다.' }, '영웅 집결'));
      this.overlay.append(cam);
      this.xray.hidden = true;
    }
  }

  goldLabel(p) {
    if (!this.s.coop) return '군자금';
    return p === this.me ? `나 · ${this.playerName(p)}` : `동료 · ${this.playerName(p)}`;
  }

  playerName(p) {
    const v = this.s.view;
    return (v.players[p] && v.players[p].name) || this.names[p] || `${p + 1}P`;
  }

  buildBottom() {
    const v = this.s.view;
    clear(this.bottom);
    this.bottom.append(this.touchControls);
    this.heroEls = [];
    this.skillEls = [];
    this.itemEls = [];
    const groups = this.s.coop ? [0, 1] : [0];
    const makeGroup = (p) => {
      const g = h('div', { class: `pgroup p${p} ${p===this.me?'touch-owned':'touch-companion'}` });
      const heroes = v.heroes.map((hh, i) => ({ hh, i })).filter(({ hh }) => hh.owner === p);
      const mine = p === this.me;
      heroes.forEach(({ hh, i }, k) => {
        const def = HEROES[hh.heroId];
        const canvas = heroPortrait(hh.heroId, 46, p, hh.skin);
        const hp = h('i', { style: { width: '100%' } });
        const lv = h('span', { class: 'num dim', style: { fontSize: '13px' } });
        const card = h('button', { class: 'hero-card', 'aria-pressed': 'false', title: `${def.name} — 클릭해 선택`, disabled:!mine, onclick: () => this.selectHero(i) },
          canvas, h('span', { class: 'nm' }, def.name, ' ', lv), h('div', { class: 'bar green hpbar' }, hp));
        const keys = this.keyLabels(p, k);
        const sk = this.skillButton(def.skill.short, `${def.name} 기술 · ${def.skill.name}`, keys.skill, () => this.useHeroSkill(i, 'skill'), !mine);
        const ul = this.skillButton(def.ult.short, `${def.name} 궁극기 · ${def.ult.name}`, keys.ult, () => this.useHeroSkill(i, 'ult'), !mine, true);
        this.paintSkill(sk, hh.heroId, 'heroSkill');
        this.paintSkill(ul, hh.heroId, 'heroUlt');
        const actions=h('div', { class: `skills hero-skills${!this.solo||i===this.selHero?' mobile-selected':''}` }, sk.el, ul.el);
        this.heroEls.push({ i, card, hp, lv, canvas, sk, ul, actions });
        g.append(card, actions);
      });
      const pl = v.players[p];
      if (pl) {
        const box = h('div', { class: 'skills equipped-skills' });
        pl.skills.forEach((slot, si) => {
          const sd = SKILLS[slot.id];
          const b = this.skillButton(sd.short, `비기 · ${sd.name}`, this.keyLabels(p, 0).equip[si], () => this.useEquip(p, si), !mine);
          this.paintSkill(b, slot.id, 'skill');
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
          const key = 'ZXCV'[ITEM_ORDER.indexOf(id)];
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
    this.comboBtn = h('button', { class: 'combo', title: '합격기 (공명 게이지가 가득 차고 두 영웅이 5칸 이내일 때)', onclick: () => this.pressCombo(this.me) },
      this.resCv, h('span', { class: 'lbl' }, '합격기', h('span', { class: 'k' }, ' Space')));
    this.waveBtn = h('button', { class: 'btn btn-seal wave-btn', onclick: () => this.callWave() }, h('span', {}, '출정!'), h('small', {}, 'N 키'));
    this.comboNote = h('small', { class: 'combo-note', 'aria-live': 'off' });
    const center = h('div', { class: 'center-cmd' }, h('div', { class: 'combo-state', hidden:!this.s.coop }, this.comboBtn, this.comboNote), this.waveBtn);
    this.bottom.append(makeGroup(0), center);
    if (groups.includes(1)) this.bottom.append(makeGroup(1));
  }

  itemUser(p) {
    return p === this.me;
  }

  paintSkill(button, id, kind) {
    if (!this.is3d) return;
    const art = abilityIllustration(id, kind, true);
    if (!art) return;
    const layer = h('span', { class: 'skill-art', 'aria-hidden': 'true' });
    paintAbility(layer, art); button.el.prepend(layer); button.el.classList.add('illustrated');
  }

  rallyHeroes() {
    const v = this.s.view, targets = rallyTargets(v);
    if (!targets) return toast('두 영웅이 살아 있을 때 집결할 수 있습니다');
    for (const i of this.myHeroIdx()) {
      if (!targets[i]) continue;
      const p = this.me;
      this.s.send({ t: 'move', p, h: i, x: targets[i].x, y: targets[i].y });
    }
    this.closePop();
    this.ui.moveMark = { x: targets[0].x, y: targets[0].y, t: 1, p: this.me };
    toast('내 영웅이 집결합니다. 동료도 집결하면 합격기를 쓸 수 있습니다.');
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
    else this.startTargeting({ kind: 'item', r: it.radius, run: fire });
  }

  keyLabels(p, heroSlot) {
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
    if(this.s.interrupted){this.interruptBattle();return;}
    const dt = Math.min(0.1, (t - this.last) / 1000);
    this.last = t;
    if(!this.s.networkWaiting)this.ui.clock += dt;
    this.renderer.prepareView?.(this.s.view);
    const waitingForRenderer = this.renderer.loading === true;
    this.ui.assetWaitRemote = this.s.kind === 'guest';
    const waitingForNetwork=this.s.networkWaiting;
    this.bottom.inert = waitingForRenderer||waitingForNetwork;
    if(this.networkBanner){this.networkBanner.hidden=!waitingForNetwork;this.networkBanner.textContent=waitingForNetwork?this.s.networkMessage:'';}
    if(this.overlay)this.overlay.inert=waitingForNetwork;
    if(waitingForNetwork)this.cancelPress?.();
    this.pad?.setDisabled(!this.canUsePad());
    this.flushPadStop();
    this.padTick(t);
    const evs = this.s.update(dt, { waitingForRenderer });
    this.handleEvents(evs);
    this.renderer.events(evs);
    if (this.ui.moveMark) this.ui.moveMark.t -= dt;
    const v = this.s.view;
    this.ui.selHeroes = this.solo ? [this.selHero] : this.myHeroIdx();
    this.renderer.render(v, this.ui, waitingForNetwork?0:dt);
    if (this.is3d) this.repositionRings();
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

  interruptBattle() {
    this.pad?.cancel();this.menuAbort?.abort();clearTimeout(this.finishTimer);
    if(this.interruptionHandled)return;this.interruptionHandled=true;this.ended=true;
    this.onInterrupted?.(this.s.interrupted);
  }

  finish() {
    if(this.ended)return;
    this.ended = true;this.menuAbort?.abort();
    this.s.announceEnd();
    audio.play(this.s.view.result.win ? 'win' : 'lose');
    const wait = () => {
      if (this.destroyed) return;
      if(this.s.interrupted){this.interruptBattle();return;}
      const terminalPending=this.s.kind==='host'?!this.s.terminalCached:this.s.kind==='guest'?!this.s.endInfo:false;
      if (terminalPending&&(this.s.networkWaiting||(this.s.net?.connected&&performance.now()-start<35000))) {
        this.finishTimer = setTimeout(wait, 200);
        return;
      }
      if(terminalPending){this.s.abort('result-unconfirmed');this.interruptBattle();return;}
      this.onEnd({ result: this.s.view.result, stats: this.s.stats(this.me) });
    };
    const start = performance.now();
    this.finishTimer = setTimeout(wait, 2200);
  }

  destroy() {
    if (this.destroyed) return;
    this.destroyed = true;this.menuAbort?.abort();
    clearTimeout(this.finishTimer);
    this.cancelPress?.();
    cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('blur', this.onInputBlur);
    this.cv.removeEventListener('webglcontextlost',this.onInputGraphics);
    document.removeEventListener('visibilitychange', this.onInputVisibility);
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('pointerdown',this.onTouchDown,true);
    document.removeEventListener('pointermove',this.onTouchMove,true);
    document.removeEventListener('pointerup',this.onTouchUp,true);
    document.removeEventListener('pointercancel',this.onTouchUp,true);
    this.pad?.destroy();
    this.s.destroy();
    this.renderer?.destroy?.();
    audio.stopBgm();
  }

  resize() {
    const r = this.area.getBoundingClientRect();
    if (this.is3d) {
      this.scale = Math.max(.65, Math.min(1.25, r.width / 960));
      Object.assign(this.cv.style, { width: '100%', height: '100%' });
      Object.assign(this.overlay.style, { left: '0px', top: '0px', width: '100%', height: '100%' });
      this.renderer.resize();
      this.repositionRings();
      return;
    }
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
  }

  // ───── 창에 가려진 영웅 비추기 ─────
  occluders() {
    const out = [];
    // 고리마다 주인을 적어 둔다: 내 고리는 가운데가 내 영웅 자리라 비춰 줄 필요가 없다
    const own = (rs, owner) => rs.map((r) => ({ ...r, owner }));
    if (this.pop) out.push(...own(this.pop.ring.rects(), this.me));
    const base = this.overlay.getBoundingClientRect();
    for (const el of [this.waveCardEl, this.hintEl, this.bossEl]) {
      if (!el || !el.isConnected) continue;
      const r = el.getBoundingClientRect();
      if (r.width && r.height) out.push({ x: r.left - base.left, y: r.top - base.top, w: r.width, h: r.height });
    }
    return out;
  }

  drawXray(v) {
    if (this.is3d) return;
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
    this.onResize = () => { this.pad?.cancel(); this.resize(); };
    window.addEventListener('resize', this.onResize);
    const pos = (e) => {
      if (this.is3d) return this.renderer.pick(e.clientX, e.clientY);
      const r = this.cv.getBoundingClientRect();
      return { x: ((e.clientX - r.left) / r.width) * (W / TS), y: ((e.clientY - r.top) / r.height) * (H / TS) };
    };
    this.cv.addEventListener('pointermove', (e) => {
      if(this.isPadTouch(e))return;
      if(this.renderer?.loading||this.s.networkWaiting)return;
      if (down && Math.hypot(e.clientX-down.x, e.clientY-down.y)>6) dragged=true;
      const p = pos(e);
      if (!p) return;
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
    let down = null, dragged = false, multiTouch = false;
    const pointers = new Map();
    this.cancelPress = () => { down=null; pointers.clear(); multiTouch=false; };
    const suppress=()=>{this.suppressTouchUntil=performance.now()+350;down=null;};
    this.onTouchDown=e=>{
      if(e.pointerType!=='touch')return;
      if(this.isPadTouch(e))return;
      pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
      if(pointers.size>1){multiTouch=true;dragged=true;suppress();}
    };
    this.onTouchMove=e=>{
      if(this.isPadTouch(e))return;
      const start=pointers.get(e.pointerId);
      if(start&&Math.hypot(e.clientX-start.x,e.clientY-start.y)>6){start.dragged=true;dragged=true;suppress();}
    };
    this.onTouchUp=e=>{
      if(this.isPadTouch(e))return;
      const start=pointers.get(e.pointerId);
      if(multiTouch||start?.dragged||e.type==='pointercancel')suppress();
      pointers.delete(e.pointerId);if(!pointers.size)multiTouch=false;
    };
    // Also count world fingers on construction markers.
    document.addEventListener('pointerdown',this.onTouchDown,true);
    document.addEventListener('pointermove',this.onTouchMove,true);
    document.addEventListener('pointerup',this.onTouchUp,true);
    document.addEventListener('pointercancel',this.onTouchUp,true);
    // Losing focus may swallow keyup/pointerup. Release held input.
    this.onInputBlur=()=>{this.cancelPress();this.pad?.cancel();};
    this.onInputGraphics=()=>{this.onInputBlur();this.closePop();this.cancelTargeting();};
    this.onInputVisibility=()=>{if(document.hidden)this.onInputBlur();this.s.setBackground?.(!!document.hidden);};
    window.addEventListener('blur',this.onInputBlur);
    this.cv.addEventListener('webglcontextlost',this.onInputGraphics);
    document.addEventListener('visibilitychange',this.onInputVisibility);
    this.s.setBackground?.(!!document.hidden);
    this.cv.addEventListener('pointerdown', (e) => {
      if(this.isPadTouch(e))return;
      if(this.renderer?.loading||this.s.networkWaiting)return;
      audio.init();
      if(e.pointerType==='touch'&&!pointers.has(e.pointerId))this.onTouchDown(e);
      if(pointers.size>1){multiTouch=true;dragged=true;down=null;return;}
      down = { x:e.clientX, y:e.clientY }; dragged=false;
    });
    this.cv.addEventListener('pointerup', (e) => {
      if(this.isPadTouch(e))return;
      if(this.renderer?.loading||this.s.networkWaiting){this.cancelPress();return;}
      if(e.pointerType==='touch')this.onTouchUp(e);
      if(multiTouch||e.pointerType==='touch'&&performance.now()<(this.suppressTouchUntil||0)){down=null;return;}
      const wasDown=!!down; down=null;
      if (!wasDown || (this.is3d && dragged)) return;
      if (this.is3d && e.button === 2) {
        const p=pos(e); if (!p) return;
        if(this.targeting) this.cancelTargeting();
        else {this.closePop();this.moveHeroTo(p.x,p.y);}
        return;
      }
      if (e.button === 2) return;
      const p=pos(e);
      if(e.pointerType==='touch')this.enableTouchInput();
      if(p) this.leftClick(p,{touch:e.pointerType==='touch'});
    });
    this.cv.addEventListener('pointercancel', this.cancelPress);
    this.cv.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      if(this.renderer?.loading||this.s.networkWaiting)return;
      if (this.is3d) return;
      const p = pos(e);
      if (this.targeting) return this.cancelTargeting();
      this.closePop();
      this.moveHeroTo(p.x, p.y);
    });
    this.onKeyDown = (e) => this.keyDown(e);
    document.addEventListener('keydown', this.onKeyDown);
  }

  canBuildAt(x, y) {
    if (tileAt(this.map, x, y) !== T_BUILD) return false;
    return !this.s.view.towers.some((t) => t.x === x && t.y === y);
  }

  enableTouchInput() {
    if(this.touchInput)return;
    this.touchInput=true;this.ui.touchInput=true;
    this.el?.classList.add('touch-ui');
    if(this.touchControls){this.touchControls.hidden=false;this.resize();}
  }

  isPadTouch(e) {
    return !!e.target?.closest?.('.battle-touch-controls') || this.pad?.pointerId!=null&&e.pointerId===this.pad.pointerId;
  }

  padHeroIndex() { return this.solo?this.selHero:this.myHeroIdx()[0]; }

  canUsePad() {
    const v=this.s.view, i=this.padHeroIndex();
    return !!this.touchInput&&!this.destroyed&&!this.ended&&!this.renderer?.loading&&!this.s.networkWaiting&&!v.paused&&!v.result&&!document.hidden&&!document.querySelector?.('.modal-back')&&i!==undefined&&this.myHeroIdx().includes(i)&&!!v.heroes[i]&&!v.heroes[i].dead;
  }

  beginPad() {
    this.enableTouchInput();this.closePop();this.flushPadStop();
    this.padHero=this.padHeroIndex();this.lastPadMove=-Infinity;
    audio.init();
  }

  padTick(t) {
    if(this.pad?.pointerId==null)return;
    if(!this.canUsePad()||this.padHero!==this.padHeroIndex()){this.pad.cancel();return;}
    const value=this.pad.value;
    if(!value.x&&!value.y){this.endPad();return;}
    if(t-(this.lastPadMove??-Infinity)<60)return;
    const hero=this.s.view.heroes[this.padHero];let direction;
    if(this.is3d){
      const origin=this.renderer.screenPoint(hero.x,hero.y),x=this.renderer.screenPoint(hero.x+1,hero.y),y=this.renderer.screenPoint(hero.x,hero.y+1);
      direction=padWorldDirection(value,{x:x.x-origin.x,y:x.y-origin.y},{x:y.x-origin.x,y:y.y-origin.y});
    }else direction=padWorldDirection(value);
    if(!direction){this.pad.cancel();return;}
    if(this.s.send({t:'move',p:this.me,h:this.padHero,dx:direction.x,dy:direction.y,direct:true})!==false){this.padMoving=true;this.lastPadMove=t;}
  }

  endPad() {
    if(this.padMoving){this.pendingPadStop=this.padHero;this.padMoving=false;}
    this.flushPadStop();
  }

  flushPadStop() {
    const i=this.pendingPadStop;
    if(i==null||this.renderer?.loading||this.s.networkWaiting)return;
    const hero=this.s.view.heroes[i];
    if(!hero||hero.dead||this.s.view.result||!this.myHeroIdx().includes(i)){this.pendingPadStop=null;return;}
    // The host stops at its authoritative position, never at an old guest frame.
    if(this.s.send({t:'move',p:this.me,h:i,x:hero.x,y:hero.y,stop:true})!==false)this.pendingPadStop=null;
  }

  buildSiteClick(x,y,event) {
    if(this.renderer?.loading||this.s.networkWaiting||this.targeting||performance.now()<(this.suppressTouchUntil||0))return;
    const touch=event?.pointerType==='touch'||this.touchInput&&event?.pointerType!=='mouse';
    if(touch)this.enableTouchInput();
    if(this.canBuildAt(x,y)){this.cancelPress?.();this.openBuildMenu(x,y);}
  }

  leftClick(p,{touch=false}={}) {
    if(this.renderer?.loading||this.s.networkWaiting)return;
    const v = this.s.view;
    if (this.targeting) {
      this.fireTargeting(p.x, p.y);
      return;
    }
    // 영웅 선택
    const mine = this.myHeroIdx();
    if (this.is3d && p.entity?.kind === 'hero') {
      const i=v.heroes.findIndex(hh=>hh.id===p.entity.id);
      if (mine.includes(i)) this.selectHero(i);
      return;
    }
    if (this.is3d && p.entity?.kind === 'tower') return this.openTowerPanel(p.entity.id);
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
    if(!touch)this.moveHeroTo(p.x, p.y);
  }

  selectHero(i) {
    const v = this.s.view;
    if (!this.myHeroIdx().includes(i)) return;
    this.pad?.cancel();
    this.selHero = i;
    audio.play('ui');
    if (v.heroes[i] && v.heroes[i].dead) toast(`${HEROES[v.heroes[i].heroId].name}은(는) ${Math.ceil(v.heroes[i].respawn)}초 뒤 돌아옵니다`);
  }

  moveHeroTo(x, y, heroIdx) {
    if(this.renderer?.loading||this.s.networkWaiting)return;
    this.pad?.cancel();this.pendingPadStop=null;
    const v = this.s.view;
    const mine = this.myHeroIdx();
    const i = heroIdx ?? (this.solo ? this.selHero : mine[0]);
    if (i === undefined || !v.heroes[i] || v.heroes[i].dead) return;
    this.s.send({ t: 'move', p: this.me, h: i, x, y });
    this.ui.moveMark = { x, y, t: 1, p: v.heroes[i].owner };
  }

  keyDown(e) {
    if ((this.renderer?.loading||this.s.networkWaiting) && e.code !== 'Escape') return;
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    if (document.querySelector('.modal-back')) return;
    audio.init();
    const code = e.code;
    const k = e.key.toLowerCase();
    const mouse = this.mouse;
    const heroes = this.myHeroIdx(this.me);
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
      case 'KeyD': this.useEquip(this.me, 0, mouse); break;
      case 'KeyF': this.useEquip(this.me, 1, mouse); break;
      case 'Space': e.preventDefault(); this.pressCombo(this.me); break;
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
      case 'KeyG': if (mouse && this.s.coop) this.s.send({ t: 'ping', p: this.me, x: mouse.x, y: mouse.y }); break;
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

  setSpeed(n) {
    this.s.setSpeed(n);
    [...this.speedSeg.children].forEach((b, i) => b.setAttribute('aria-pressed', String(i + 1 === n)));
  }

  togglePause() {
    const v = this.s.view;
    this.pad?.cancel();
    this.s.setPaused(!v.paused);
  }

  callWave() {
    if (this.renderer?.loading) return;
    const v = this.s.view;
    if (v.wave.phase !== 'prep' || v.wave.n >= v.wave.total) return;
    this.s.send({ t: 'nextWave', p: this.me });
  }

  pressCombo(p) {
    if(!this.s.coop)return;
    this.s.send({ t: 'combo', p });
  }

  useHeroSkill(i, kind, at) {
    const v = this.s.view;
    const hh = v.heroes[i];
    if (!hh) return;
    const owner = hh.owner;
    if (!(owner === this.me)) return;
    if (hh.dead) return toast('쓰러진 영웅은 기술을 쓸 수 없습니다');
    const cd = kind === 'skill' ? hh.skillCd : hh.ultCd;
    if (cd > 0) {
      audio.play('deny');
      return toast(`${kind === 'skill' ? HEROES[hh.heroId].skill.name : HEROES[hh.heroId].ult.name} 재사용 대기 ${Math.ceil(cd)}초`);
    }
    const t = kind === 'skill' ? 'heroSkill' : 'heroUlt';
    const p = this.me;
    if (kind === 'ult' && ULT_TARGETLESS[hh.heroId]) {
      this.s.send({ t, p, h: i, x: hh.x, y: hh.y });
      return;
    }
    const r = kind === 'skill' ? SKILL_AIM[hh.heroId] : ULT_AIM[hh.heroId] || 1;
    if (at) this.s.send({ t, p, h: i, x: at.x, y: at.y });
    else this.startTargeting({ kind: t, h: i, r, run: (x, y) => this.s.send({ t, p, h: i, x, y }) });
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
    else this.startTargeting({ kind: 'skill', skillId: slot.id, r: sd.radius || 0.8, run: (x, y) => this.s.send({ t: 'skill', p, slot: si, x, y }) });
  }

  startTargeting(tg) {
    this.closePop();
    this.targeting = tg;
    this.ui.targeting = tg;
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
    this.ui.targeting = null;
    this.ui.aim = null;
    this.cv.style.cursor = '';
  }

  buildList(p) {
    const allowed = this.s.state ? this.s.state.players[p].towers : this.profile.towersUnlocked;
    return TOWER_ORDER.filter((t) => allowed.includes(t));
  }

  build(x, y, type) {
    if(this.renderer?.loading||this.s.networkWaiting||performance.now()<(this.suppressTouchUntil||0))return;
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
    const ring = new Ring({ owner: this.me });
    const k = this.scale;
    this.positionRing(ring, tx, ty, n);
    this.overlay.append(ring.el);
    return ring;
  }

  positionRing(ring, x, y, n = 0) {
    const p = this.is3d ? this.renderer.screenPoint(x+.5,y+.5,.35) : {x:(x+.5)*TS*this.scale,y:(y+.5)*TS*this.scale};
    ring.layout(p.x,p.y,this.overlay.clientWidth,this.overlay.clientHeight,this.scale,n);
    const el=ring.el.querySelector('.ring');
    if(el){el.style.left=`${ring.cx}px`;el.style.top=`${ring.cy}px`;ring.placeTip();}
  }

  repositionRings() {
    if(this.pop){const t=this.pop.kind==='tower'?this.s.view.towers.find(t=>t.id===this.pop.id):this.pop;if(t)this.positionRing(this.pop.ring,t.x,t.y,this.pop.ring.items.length);}
  }

  closePop() {
    if (this.pop) this.pop.ring.remove();
    this.pop = null;
    this.ui.placing = null;
    this.ui.selTower = null;
    this.ui.buildAt = null;
  }

  openBuildMenu(x, y) {
    if(this.renderer?.loading||this.s.networkWaiting)return;
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
    const keys = !this.touchInput;
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
    if(this.renderer?.loading||this.s.networkWaiting)return;
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
    const mine = t.owner === this.me;
    const ownerName = this.s.coop ? this.playerName(t.owner) : '';
    const items = [];
    if (!t.branch && t.level < def.levels.length) {
      const cost = this.price(t.type, def.levels[t.level].cost);
      const poor = pl.gold < cost;
      items.push({
        key: 'up', angle: -90, icon: towerIcon(t.type, t.level + 1), cost, cls: `up${poor ? ' poor' : ''}`, label: `강화 (${cost}냥)`, num: 'U',
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
        h('span', { class: 'dim' }, `${t.branch ? `4단계 · 최대 · ${t.branch} ${def.branches[t.branch].name}` : `${t.level}단계`}${ownerName ? ` · ${ownerName}` : ''}`)),
      h('div', { class: 'td num' }, stats.join(' · ')),
      t.syn ? h('div', { class: 'td', style: { color: '#ffe68c' } }, `유산 공명 +${t.syn * 12}%`) : null,
      t.disabledT > 0 ? h('div', { class: 'td', style: { color: '#ff8a7a' } }, `봉쇄됨 ${Math.ceil(t.disabledT)}초`) : null,
      def.kind === 'barracks' && !this.rallyOk(t, st) ? h('div', { class: 'td', style: { color: '#ff8a7a' } }, '길이 멀어 병사를 세울 수 없습니다. 길 가까이 지으세요.') : null,
      t.branch ? h('div', { class: 'td' }, def.branches[t.branch].desc) : null);
    pop.ring.render(items, info);
  }

  // ───────────────────────── HUD 갱신 ─────────────────────────
  set(key, el, val) {
    if (this.cache[key] === val && el.textContent === String(val)) return;
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
      e.actions?.classList.toggle('mobile-selected',!this.solo||e.i===this.selHero);
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
    const press = v.resonance.press[this.me];
    const waiting = this.s.coop && v.time - press < COMBO_WINDOW ? 1 - (v.time - press) / COMBO_WINDOW : 0;
    drawResonance(this.resCv, v.resonance.gauge, this.ui.clock, { waiting });
    const combo = comboStatus(v);
    this.comboBtn.classList.toggle('ready', combo.ok);
    this.comboBtn.title = combo.ok ? `${findCombo(v.heroes[0].heroId,v.heroes[1].heroId).name} · 합격기 시전 가능` : combo.why;
    this.comboBtn.disabled = !combo.ok || !!v.result;
    this.set('comboNote', this.comboNote, combo.ok ? (this.s.coop ? '두 사람 함께 시전' : '합격기 준비 완료') : v.resonance.gauge < RESONANCE_MAX ? `공명 ${Math.floor(v.resonance.gauge)}%` : combo.why);
    // 파도 버튼
    const w = v.wave;
    let label;
    let sub;
    let dis = false;
    if (w.n === 0) {
      label = '출정!';
      sub = `${Math.max(0, Math.ceil(w.timer))}초 뒤 자동 · ${'N 키'}`;
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
      this.pauseEl = h('div', { class: this.is3d ? 'pause-notice' : 'announce', style: this.is3d ? {} : { animation: 'none', top: '40%' } }, h('div', { class: 'big' }, '일시정지'), h('div', { class: 'sub' }, '건설과 강화는 멈춘 상태에서도 할 수 있습니다'));
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
        case 'abilityCue':
          if (e.sound) audio.playActivation(e.sound);
          break;
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
          if (e.p === -1 || e.p === this.me || this.solo) toast(e.text);
          break;
        case 'comboWait':
          if (e.p === this.me) toast('동료의 호흡을 기다리는 중…');
          else toast(`${this.playerName(e.p)}이(가) 합격기를 눌렀습니다! Space로 호흡을 맞추세요`, 2400);
          break;
        case 'resonanceFull':
          if(this.s.coop)toast('공명 게이지 가득! 두 영웅을 5칸 안에 모으고 합격기를 발동하세요', 2600);
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
    if(this.destroyed||this.ended||this.s.view.result)return;
    this.menuAbort?.abort();this.menuAbort=new AbortController();const signal=this.menuAbort.signal;
    this.pad?.cancel();
    const wasPaused = this.s.view.paused;
    if (this.s.kind !== 'guest') this.s.setPaused(true);
    const body = h('div', { class: 'stack' },
      h('p', { class: 'dim' }, this.s.kind === 'guest' ? '온라인 전투는 호스트만 일시정지할 수 있습니다.' : '전투가 멈췄습니다.'),
      this.controlsHelp());
    const v = await modal('군막', body, [
      { label: '전장 이탈', value: 'quit' },
      ...(this.s.kind === 'guest' || this.s.kind === 'host' ? [] : [{ label: '다시 시작', value: 'restart' }]),
      { label: '계속', value: 'resume', cls: 'btn-seal' },
    ],{signal});
    if(signal.aborted||this.destroyed||this.ended||this.s.view.result)return;
    if (v === 'quit') {
      const ok = await modal('전장 이탈', '지금 나가면 이번 전투의 보상을 받지 못합니다.', [{ label: '머무르기', value: false }, { label: '나가기', value: true, cls: 'btn-seal' }],{signal});
      if(signal.aborted||this.destroyed||this.ended||this.s.view.result)return;
      if (ok) return this.onQuit();
    } else if (v === 'restart') return this.onRestart();
    if (this.s.kind !== 'guest') this.s.setPaused(wasPaused && v !== 'resume' ? wasPaused : false);
  }

  controlsHelp() {
    const rows=[['마우스','빈 터 클릭: 건설 · 유산: 강화 · 우클릭: 내 영웅 이동'],['터치','왼쪽 패드: 내 영웅 이동 · 빈 터: 건설'],['Q W','내 영웅 기술 · 궁극기'],['D F','비기 1 · 2'],['Z X C V','보유 보급품'],['N','다음 파도 조기 호출']];
    if(this.s.coop)rows.push(['Space','두 사람이 함께 합격기'],['G','동료에게 위치 핑']);
    if(this.is3d)rows.push(['화면 드래그 / 휠','시점 이동 / 확대·축소']);
    return h('div',{class:'keys'},rows.flatMap(([key,text])=>[h('kbd',{},key),h('span',{},text)]));
  }

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
    if(v.stageId==='s25'&&v.wave.n<=2)
      if(show('final-opening','두 갈래 길이 갈라지기 전 <b>입구의 첫 굽이</b>에 영웅을 배치하면 초반을 함께 막을 수 있습니다. <b>남한산성</b>의 병사와 <b>첨성대</b>의 은신 탐지도 준비하세요.',{left:'12px',bottom:'12px'}))return;
    if(v.stageId==='s25'&&v.wave.n>=22)
      if(show('final-reallocate','마지막 적장은 <b>은신 병력</b>을 계속 부릅니다. 탐지를 유지하고, 피해가 적은 유산을 철거해 <b>석굴암의 대광명(A 특화)</b>에 재투자하세요. 특화 유산의 높은 단일 피해가 중요합니다.',{left:'12px',bottom:'12px'}))return;
    if (v.wave.n === 0 && v.towers.length === 0)
      return show(this.touchInput?'build-pad-v3':'build', this.touchInput?'<b>왼쪽 아래 패드</b>로 영웅을 움직이고, <b>빈 터를 눌러</b> 유산을 세우세요. 아래 영웅 카드를 누르면 내 영웅을 선택합니다.':'<b>빈 터(풀밭)</b>를 클릭해 유산을 세우세요. 적이 지나갈 <b>길 가까이</b>가 좋습니다. 처음엔 값싼 <b>숭례문</b>을 추천합니다.', { left: '12px', top: '12px' });
    if (v.wave.n === 0 && v.towers.length > 0)
      return show('wave', `파도는 <b>누르지 않아도 저절로</b> 옵니다(첫 파도 30초, 그다음은 18초 쉬고). 준비가 끝났으면 <b>출정!</b>(${'N 키'})으로 바로 부르세요. 둘째 파도부터는 일찍 부를수록 보너스 군자금!`, { right: '12px', bottom: '12px' });
    if (v.wave.n >= 2)
      if(this.touchInput&&show('hero-pad-v3','아래 영웅 카드를 눌러 고르고 <b>왼쪽 패드</b>를 미세요. 다른 손으로 기술 버튼을 누른 뒤 지점을 누르면 시전합니다. <b>빈 터 터치</b>는 건설입니다.',{left:'12px',bottom:'12px'}))return;
    if (v.wave.n >= 2)
      if (show('hero', `영웅을 클릭해 고르고 <b>우클릭</b>(또는 길 클릭)으로 옮기세요. <b>Q/W</b>로 내 영웅의 기술을 씁니다. 마우스를 올린 곳에 시전됩니다.`, { left: '12px', bottom: '12px' })) return;
    if (v.wave.n >= 3) if (show('equip', '<b>D/F</b>는 장착한 비기입니다. 적이 몰린 곳에 쓰세요. 비기는 진영의 <b>비기</b> 메뉴에서 바꾸고 강화합니다.', { left: '12px', bottom: '12px' })) return;
    if (v.wave.nextTactic) if (show('tactic', '<b>왜군 전술 카드</b>가 공개됐습니다! 대비책을 세워 한 명도 놓치지 않으면 <b>전술 파훼</b> 보너스를 받습니다.', { left: '270px', top: '12px' })) return;
    if (this.s.coop && v.resonance.gauge >= RESONANCE_MAX)
      if (show('combo', `<b>공명 게이지</b>가 찼습니다. 두 영웅을 <b>5칸 안</b>에 모으고 두 사람이 <b>2.5초 안에 함께</b> <b>Space</b>를 누르면 <b>합격기</b>가 발동합니다!`, { left: '40%', bottom: '12px' })) return;
    if (v.towers.some((t) => t.level >= 3 && !t.branch))
      if (show('branch', '3단계 유산은 <b>두 갈래 특화</b> 중 하나를 고를 수 있습니다. 유산을 클릭해 보세요.', { right: '12px', top: '12px' })) return;
    if (v.towers.some((t) => t.syn > 0))
      show('synergy', '<b>유산 공명</b>! 같은 계열(궁궐·사찰·성곽과학)의 <b>다른</b> 유산이 2칸 안에 있으면 1종당 공격력 +12%. 점선이 공명을 뜻합니다.', { right: '12px', top: '12px' });
  }
}
