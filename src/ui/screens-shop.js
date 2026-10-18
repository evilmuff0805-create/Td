// 옥 상점: 보급소 · 엽전 교환 · 의상실
import { h, toast, fmt, modal } from './dom.js';
import { setBackdrop } from './backdrop.js';
import { topbar } from './screens-menu.js';
import { heroBust, heroFull } from './icons.js';
import { HEROES, HERO_ORDER } from '../data/heroes.js';
import { ITEMS, ITEM_ORDER, ITEM_PER_BATTLE, ITEM_BUNDLE } from '../data/items.js';
import { SKINS } from '../data/skins.js';
import { COIN_PACKS } from '../data/shop.js';
import { itemPrice, buyItem, buySkin, equipSkin, ownsSkin, heroSkin, heroUnlockState, exchangeCoins } from '../meta/profile.js';
import { audio } from '../audio/audio.js';

const jade = (n) => h('span', { class: 'jade num' }, `◆${fmt(n)}`);

export function shopScreen(app, params = {}) {
  setBackdrop('lacquer');
  const tab = ['items', 'coins', 'skins'].includes(params.tab) ? params.tab : 'items';
  const tabs = [['items', '보급소'], ['coins', '엽전 교환'], ['skins', '의상실']];
  const tabBar = h('div', { class: 'tabs', role: 'tablist' }, tabs.map(([k, label]) =>
    h('button', { role: 'tab', 'aria-selected': String(k === tab), onclick: () => app.go('shop', { tab: k, hero: params.hero, art: params.art }) }, label)));
  const body = tab === 'coins' ? coinsTab(app) : tab === 'skins' ? skinsTab(app, params.hero, params.art) : itemsTab(app);
  return h('div', { class: 'screen' }, topbar(app, '옥 상점'),
    h('div', { class: 'content stack' },
      h('div', { class: 'panel shop-banner' },
        h('span', { class: 'gem', 'aria-hidden': 'true' }, '◆'),
        h('div', { class: 'stack', style: { gap: '2px' } },
          h('b', {}, '옥은 임무·출석·첫 승리로 모읍니다'),
          h('span', { class: 'dim' }, '보급품·의복을 구입하거나, 영구 강화에 쓰는 엽전으로 교환할 수 있습니다.'))),
      tabBar, body));
}

function coinsTab(app) {
  const p = app.profile, buttons = [];
  let pending = false;
  const body = h('div', { class: 'stack' },
    h('p', { class: 'dim' }, '옥 1개당 엽전 100개로 교환합니다. 엽전은 영웅·비기·유산의 영구 강화에 쓰며, 전투 중 군자금과는 별개입니다.'),
    h('div', { class: 'grid-cards shop-grid' }, COIN_PACKS.map(pack => {
      let spent = false;
      const button = h('button', {
        class: 'btn btn-gold', disabled: p.jade < pack.jade,
        'aria-label': `${fmt(pack.coins)}엽전 교환 · ${fmt(pack.jade)}옥`,
        onclick: async () => {
          if (pending || spent || button.disabled || !body.isConnected) return;
          pending = true;
          buttons.forEach(b => { b.disabled = true; });
          try {
            const confirmed = await modal('엽전 교환', `${fmt(pack.jade)}옥을 사용해 ${fmt(pack.coins)}엽전을 받을까요?`, [
              { label: '취소', value: false }, { label: '교환하기', value: true, cls: 'btn-gold' },
            ]);
            if (!confirmed || !body.isConnected || app.profile !== p) return;
            if (exchangeCoins(p, pack.id)) {
              spent = true;
              audio.play('coin');
              toast(`${fmt(pack.coins)}엽전을 받았습니다`);
              app.go('shop', { tab: 'coins' });
            } else {
              audio.play('deny');
              toast('잔액을 확인해 주세요. 교환하지 않았습니다');
            }
          } finally {
            pending = false;
            if (body.isConnected) buttons.forEach((b, i) => { b.disabled = p.jade < COIN_PACKS[i].jade; });
          }
        },
      }, '교환 ', jade(pack.jade));
      buttons.push(button);
      return h('div', { class: 'card item-card coin-pack' },
        h('div', { class: 'item-medal', 'aria-hidden': 'true' }, h('span', { class: 'coin' }, '●')),
        h('b', { class: 'nm coin num' }, `${fmt(pack.coins)}엽전`),
        h('span', { class: 'desc' }, `${fmt(pack.jade)}옥으로 교환`), button);
    })));
  return body;
}

function itemsTab(app) {
  const p = app.profile;
  return h('div', { class: 'stack' },
    h('p', { class: 'dim' }, `보급품은 전투 중 아래 보급 칸(혼자·온라인: Z X C V 키)에서 씁니다. 종류별로 전투마다 ${ITEM_PER_BATTLE}개까지 가져갑니다. ${ITEM_BUNDLE}개 묶음은 한 개 값을 덜어 드립니다.`),
    h('div', { class: 'grid-cards shop-grid' }, ITEM_ORDER.map((id, i) => {
      const it = ITEMS[id];
      const buy = (n) => {
        if (buyItem(p, id, n)) {
          audio.play('coin');
          toast(`${it.name} ${n}개를 보급소에 들였습니다`);
          app.go('shop', { tab: 'items' });
        } else {
          audio.play('deny');
          toast('옥이 모자랍니다');
        }
      };
      return h('div', { class: 'card item-card' },
        h('div', { class: 'item-medal' }, h('span', {}, it.short), h('kbd', {}, 'ZXCV'[i])),
        h('span', { class: 'nm' }, it.name),
        h('span', { class: 'sub' }, `보유 ${p.items[id] || 0}개`),
        h('span', { class: 'desc' }, it.desc),
        h('div', { class: 'row', style: { marginTop: 'auto' } },
          h('button', { class: 'btn btn-small', disabled: p.jade < itemPrice(id, 1), onclick: () => buy(1) }, '1개 ', jade(itemPrice(id, 1))),
          h('button', { class: 'btn btn-small btn-gold', disabled: p.jade < itemPrice(id, ITEM_BUNDLE), onclick: () => buy(ITEM_BUNDLE) }, `${ITEM_BUNDLE}개 `, jade(itemPrice(id, ITEM_BUNDLE)))));
    })));
}

function skinsTab(app, heroSel, artMode) {
  const p = app.profile;
  const sel = heroSel || HERO_ORDER[0];
  const full = artMode === 'full';
  const navigate = (hero = sel, art = full ? 'full' : 'bust') => app.go('shop', { tab: 'skins', hero, art });
  const heroTabs = h('div', { class: 'seg skin-heroes', role: 'group', 'aria-label': '영웅' }, HERO_ORDER.map((id) =>
    h('button', { 'aria-pressed': String(id === sel), onclick: () => navigate(id) }, HEROES[id].name)));
  const cur = heroSkin(p, sel);
  const locked = !heroUnlockState(p, sel).unlocked;
  const options = [{ id: null, name: '기본 복장', desc: '처음 모습 그대로.', price: 0 }, ...SKINS[sel]];
  return h('div', { class: 'stack' },
    heroTabs,
    h('div', { class: 'row hero-art-switch', role: 'group', 'aria-label': '의상 그림 보기' },
      h('button', { class: 'btn btn-small', 'aria-pressed': String(!full), onclick: () => navigate(sel, 'bust') }, '일러스트'),
      h('button', { class: 'btn btn-small', 'aria-pressed': String(full), onclick: () => navigate(sel, 'full') }, '전신')),
    locked ? h('p', { style: { color: '#ffb3a6' } }, `${HEROES[sel].name}은(는) 아직 잠겨 있습니다. 의복은 미리 사 둘 수 있습니다.`) : null,
    h('div', { class: 'grid-cards skin-grid' }, options.map((sk) => {
      const owned = !sk.id || ownsSkin(p, sk.id);
      const on = (cur || null) === sk.id;
      const pic = full ? heroFull(sel, 224, sk.id) : heroBust(sel, 224, sk.id);
      pic.className = 'skin-pic';
      const act = on
        ? h('span', { class: 'chip on' }, '입는 중')
        : owned
          ? h('button', { class: 'btn btn-small', onclick: () => { equipSkin(p, sel, sk.id); audio.play('ui'); navigate(); } }, '입기')
          : h('button', {
            class: `btn btn-small ${sk.gold ? 'btn-gold' : 'btn-seal'}`, disabled: p.jade < sk.price,
            onclick: () => {
              if (buySkin(p, sel, sk.id)) {
                audio.play('win');
                toast(`${HEROES[sel].name} · ${sk.name}!`);
                navigate();
              }
            },
          }, '구입 ', jade(sk.price));
      return h('div', { class: `card skin-card${on ? ' on' : ''}${sk.gold ? ' legend' : ''}` },
        pic,
        h('span', { class: 'nm' }, sk.name),
        h('span', { class: 'sub' }, sk.desc),
        h('div', { class: 'row', style: { marginTop: 'auto', justifyContent: 'center' } }, act));
    })));
}
