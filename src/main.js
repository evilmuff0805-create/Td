// 호국영웅전 — 앱 진입점과 화면 전환
import { clear, toast, modal, h } from './ui/dom.js';
import { STAGE_BY_ID, DIFFICULTY } from './data/stages.js';
import { loadProfile, applyBattle, saveProfile } from './meta/profile.js';
import { titleScreen, hubScreen, questsScreen, settingsScreen } from './ui/screens-menu.js';
import { campaignScreen, loadoutScreen, coopScreen, localSetupScreen, lobbyScreen, resultScreen } from './ui/screens-play.js';
import { heroesScreen, skillsScreen, relicsScreen } from './ui/screens-codex.js';
import { shopScreen } from './ui/screens-shop.js';
import { Session } from './game/session.js';
import { GameUI } from './ui/hud.js';
import { Renderer3D } from './3d/renderer.js';
import { audio } from './audio/audio.js';
import { preloadArt } from './render/art.js';

const SCREENS = {
  title: titleScreen,
  hub: hubScreen,
  quests: questsScreen,
  settings: settingsScreen,
  campaign: campaignScreen,
  loadout: loadoutScreen,
  coop: coopScreen,
  localSetup: localSetupScreen,
  lobby: lobbyScreen,
  result: resultScreen,
  heroes: heroesScreen,
  skills: skillsScreen,
  relics: relicsScreen,
  shop: shopScreen,
};

class App {
  constructor(root) {
    this.root = root;
    this.profile = loadProfile();
    if (new URLSearchParams(location.search).get('mute') === '1') {
      this.profile.settings.sfx = 0;
      this.profile.settings.bgm = 0;
      saveProfile();
    }
    audio.setVolumes(this.profile.settings.sfx, this.profile.settings.bgm);
    this.game = null;
    this.current = null;
    document.addEventListener('pointerdown', () => audio.init(), { once: true });
    document.addEventListener('keydown', () => audio.init(), { once: true });
  }

  go(name, params = {}) {
    if (this.game) {
      this.game.destroy();
      this.game = null;
      document.body.classList.remove('in-game');
    }
    const fn = SCREENS[name];
    if (!fn) return;
    this.current = { name, params };
    const scrollKeep = this.lastName === name ? (this.root.firstChild && this.root.firstChild.scrollTop) || 0 : 0;
    this.lastName = name;
    const el = fn(this, params);
    clear(this.root).append(el);
    if (scrollKeep) el.scrollTop = scrollKeep;
    if (name !== 'title') audio.startBgm('menu');
  }

  refresh() {
    if (this.current) this.go(this.current.name, this.current.params);
  }

  startBattle(battle) {
    if (this.game) this.game.destroy();
    const b = { ...battle, seed: battle.seed ?? ((Math.random() * 1e9) | 0) };
    const session = new Session(b);
    document.body.classList.add('in-game');
    // 먹 장막이 걷히며 전장이 드러난다
    const st = STAGE_BY_ID[b.stageId];
    const wipe = h('div', { class: 'ink-wipe', 'aria-hidden': 'true' },
      h('div', { class: 'nm' }, h('div', { class: 'big' }, st.name), h('div', { class: 'sub' }, `${DIFFICULTY[b.difficulty].name} · ${st.waves.length}파도`)));
    document.body.append(wipe);
    setTimeout(() => wipe.remove(), 1400);
    audio.play('wave');
    const onPeerLeft = () => {
      if (b.kind === 'host') {
        session.send({ t: 'leave', p: 1 });
        toast('동료가 떠났습니다. 동료의 영웅과 유산을 넘겨받습니다.', 3000);
      } else if (b.kind === 'guest' && !session.view.result) {
        modal('연결 끊김', '호스트와의 연결이 끊겼습니다. 진영으로 돌아갑니다.').then(() => this.go('hub'));
      }
    };
    const offs = b.net ? [b.net.on('peer-left', onPeerLeft), b.net.on('close', onPeerLeft)] : [];
    this.game = new GameUI({
      root: this.root,
      session,
      profile: this.profile,
      names: b.names,
      rendererClass: new URLSearchParams(location.search).get('view') === '2d' || this.profile.settings.renderer === '2d' ? undefined : Renderer3D,
      onEnd: ({ result, stats, stats2 }) => {
        offs.forEach((o) => o());
        const merged = { ...stats };
        if (stats2) for (const [k, v] of Object.entries(stats2)) merged[k] = (merged[k] || 0) + v;
        const applied = applyBattle(this.profile, { stageId: b.stageId, difficulty: b.difficulty, mode: b.kind === 'solo' ? 'solo' : 'coop', result, stats: merged });
        if (b.net) b.net.close();
        this.go('result', { battle: b, result, applied, stats: merged });
      },
      onQuit: () => {
        offs.forEach((o) => o());
        saveProfile();
        if (b.net) b.net.close();
        this.go('hub');
      },
      onRestart: () => {
        offs.forEach((o) => o());
        this.startBattle({ ...battle, seed: undefined });
      },
    });
  }
}

const app = new App(document.getElementById('app'));
window.__app = app;
const fonts = document.fonts && document.fonts.load ? Promise.all([
  document.fonts.load('40px "Nanum Brush Script"'),
  document.fonts.load('700 16px "Noto Sans KR"'),
  document.fonts.load('16px "Gowun Batang"'),
]).catch(() => {}) : Promise.resolve();
// 영웅 그림 파일도 첫 화면 전에 (초상 · 전장 그림이 처음부터 보이도록)
const ready = Promise.all([
  Promise.race([fonts, new Promise((r) => setTimeout(r, 2500))]),
  preloadArt().catch(() => {}),
]);
ready.then(() => app.go('title'));
