import { h } from './dom.js';
import { heroBust, heroFull } from './icons.js';
import { HERO_ORDER, HEROES } from '../data/heroes.js';
import { preloadArt } from '../render/art.js';

await preloadArt();
const controls = document.querySelector('#controls');
const portraits = document.querySelector('#portraits');
function render(mode = 'bust') {
  controls.replaceChildren(...[['bust', '일러스트'], ['full', '전신']].map(([id, name]) => h('button', { 'aria-pressed': String(mode === id), onclick: () => render(id) }, name)));
  portraits.replaceChildren(...HERO_ORDER.map(id => h('article', { 'data-hero': id },
    h('div', { class: 'picture' }, mode === 'bust' ? heroBust(id, 304) : heroFull(id, 304)),
    h('div', { class: 'caption' }, h('b', {}, HEROES[id].name), h('span', {}, HEROES[id].title)))));
}
render();
