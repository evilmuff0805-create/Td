// 옥 상점: 보급소(전투 소모품) · 의상실(영웅 의복)
import { h, toast, fmt } from './dom.js';
import { setBackdrop } from './backdrop.js';
import { topbar } from './screens-menu.js';
import { heroFull } from './icons.js';
import { HEROES, HERO_ORDER } from '../data/heroes.js';
import { ITEMS, ITEM_ORDER, ITEM_PER_BATTLE, ITEM_BUNDLE } from '../data/items.js';
import { SKINS } from '../data/skins.js';
import { itemPrice, buyItem, buySkin, equipSkin, ownsSkin, heroSkin, heroUnlockState } from '../meta/profile.js';
import { audio } from '../audio/audio.js';

const jade = (n) => h('span', { class: 'jade num' }, `◆${fmt(n)}`);

export function shopScreen(app, params = {}) {
  setBackdrop('lacquer');
  const tab = params.tab || 'items';
  const tabs = [['items', '보급소'], ['skins', '의상실']];
  const tabBar = h('div', { class: 'tabs', role: 'tablist' }, tabs.map(([k, label]) =>
    h('button', { role: 'tab', 'aria-selected': String(k === tab), onclick: () => app.go('shop', { tab: k, hero: params.hero }) }, label)));
  const body = tab === 'items' ? itemsTab(app) : skinsTab(app, params.hero);
  return h('div', { class: 'screen' }, topbar(app, '옥 상점'),
    h('div', { class: 'content stack' },
      h('div', { class: 'panel shop-banner' },
        h('span', { class: 'gem', 'aria-hidden': 'true' }, '◆'),
        h('div', { class: 'stack', style: { gap: '2px' } },
          h('b', {}, '옥은 임무·출석·첫 승리로 모읍니다'),
          h('span', { class: 'dim' }, '보급품은 전투를 돕고, 의복은 영웅의 모습을 바꿉니다. 능력치를 사는 곳은 아닙니다.'))),
      tabBar, body));
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

function skinsTab(app, heroSel) {
  const p = app.profile;
  const sel = heroSel || HERO_ORDER[0];
  const heroTabs = h('div', { class: 'seg', role: 'group', 'aria-label': '영웅' }, HERO_ORDER.map((id) =>
    h('button', { 'aria-pressed': String(id === sel), onclick: () => app.go('shop', { tab: 'skins', hero: id }) }, HEROES[id].name)));
  const cur = heroSkin(p, sel);
  const locked = !heroUnlockState(p, sel).unlocked;
  const options = [{ id: null, name: '기본 복장', desc: '처음 모습 그대로.', price: 0 }, ...SKINS[sel]];
  return h('div', { class: 'stack' },
    heroTabs,
    locked ? h('p', { style: { color: '#ffb3a6' } }, `${HEROES[sel].name}은(는) 아직 잠겨 있습니다. 의복은 미리 사 둘 수 있습니다.`) : null,
    h('div', { class: 'grid-cards skin-grid' }, options.map((sk) => {
      const owned = !sk.id || ownsSkin(p, sk.id);
      const on = (cur || null) === sk.id;
      const pic = heroFull(sel, 170, sk.id);
      pic.className = 'skin-pic';
      const act = on
        ? h('span', { class: 'chip on' }, '입는 중')
        : owned
          ? h('button', { class: 'btn btn-small', onclick: () => { equipSkin(p, sel, sk.id); audio.play('ui'); app.go('shop', { tab: 'skins', hero: sel }); } }, '입기')
          : h('button', {
            class: `btn btn-small ${sk.gold ? 'btn-gold' : 'btn-seal'}`, disabled: p.jade < sk.price,
            onclick: () => {
              if (buySkin(p, sel, sk.id)) {
                audio.play('win');
                toast(`${HEROES[sel].name} · ${sk.name}!`);
                app.go('shop', { tab: 'skins', hero: sel });
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
