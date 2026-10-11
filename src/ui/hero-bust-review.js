import { h } from './dom.js';
import { heroBust, heroFull } from './icons.js';
import { HERO_ORDER, HEROES } from '../data/heroes.js';
import { preloadArt } from '../render/art.js';
import { SKINS } from '../data/skins.js';

await preloadArt();
const controls = document.querySelector('#controls');
const portraits = document.querySelector('#portraits');
const requested = new URLSearchParams(location.search).get('set');
let group = ['base', 'skins', 'all'].includes(requested) ? requested : 'base';
let mode = 'bust';
function render() {
  controls.replaceChildren(
    h('div', { class: 'control-group', role: 'group', 'aria-label': '외형 모음' },
      ...[['base', '기본 8명'], ['skins', '특수 의상 16종'], ['all', '전체 24종']].map(([id, name]) => h('button', { 'aria-pressed': String(group === id), onclick: () => { group = id; render(); } }, name))),
    h('div', { class: 'control-group', role: 'group', 'aria-label': '그림 보기' },
      ...[['bust', '일러스트'], ['full', '전신']].map(([id, name]) => h('button', { 'aria-pressed': String(mode === id), onclick: () => { mode = id; render(); } }, name))));
  const looks = HERO_ORDER.flatMap(id => [
    ...(group !== 'skins' ? [{ id, skin: null, name: '기본 복장' }] : []),
    ...(group !== 'base' ? SKINS[id].map(skin => ({ id, skin: skin.id, name: skin.name })) : []),
  ]);
  portraits.dataset.lookCount = String(looks.length);
  portraits.dataset.mode = mode;
  document.querySelector('#summary').textContent = `${group === 'base' ? '기본 복장 8명' : group === 'skins' ? '특수 의상 16종' : '기본·특수 의상 24종'} · 남색 그림자와 따뜻한 빛`;
  portraits.replaceChildren(...looks.map(({id, skin, name}) => h('article', { 'data-hero': id, 'data-look': skin ?? id },
    h('div', { class: 'picture' }, mode === 'bust' ? heroBust(id, 304, skin) : heroFull(id, 304, skin)),
    h('div', { class: 'caption' }, h('b', {}, HEROES[id].name), h('span', {}, name)))));
}
render();
