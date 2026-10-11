import { HERO_BUST_ART } from '../data/hero-bust-data.js';
import { skinDef } from '../data/skins.js';

const loaded = new Map();
const pending = new Map();
const own = (id) => Object.hasOwn(HERO_BUST_ART, id);

// Portraits are separate from battle art: importing this module decodes nothing.
export function heroBustArt(id, skin = null) {
  if (!own(id) || skinDef(id, skin)) return null;
  return loaded.get(id) || null;
}

export function loadHeroBust(id, skin = null) {
  if (!own(id) || skinDef(id, skin) || typeof Image === 'undefined') return Promise.resolve(null);
  if (pending.has(id)) return pending.get(id);
  const spec = HERO_BUST_ART[id];
  const request = new Promise((resolve) => {
    const img = new Image();
    img.decoding = 'async';
    const finish = (ok) => {
      img.onload = img.onerror = null;
      const valid = ok && (img.naturalWidth || img.width) === spec.width && (img.naturalHeight || img.height) === spec.height;
      const art = valid ? { img, source: 'hero-bust-v1', look: id } : null;
      if (art) loaded.set(id, art);
      resolve(art);
    };
    img.onload = () => finish(true);
    img.onerror = () => finish(false);
    try {
      img.src = spec.path.startsWith('data:') ? spec.path : new URL(spec.path, new URL('../../', import.meta.url)).href;
    } catch {
      finish(false);
    }
  });
  pending.set(id, request);
  return request;
}
