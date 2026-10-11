import { HERO_BUST_ART } from '../data/hero-bust-data.js';
import { SKIN_BUST_ART } from '../data/skin-bust-data.js';
import { skinDef } from '../data/skins.js';

const loaded = new Map();
const pending = new Map();
const own = (id) => Object.hasOwn(HERO_BUST_ART, id);

function selectedBust(id, skin) {
  if (!own(id)) return null;
  const costume = skinDef(id, skin)?.id;
  // A valid costume with unavailable art must keep its own fallback, never
  // silently show the base outfit. Foreign/invalid IDs normalize to base.
  if (costume) return Object.hasOwn(SKIN_BUST_ART, costume) ? { key: costume, spec: SKIN_BUST_ART[costume], source: 'hero-skin-bust-v1' } : null;
  return { key: id, spec: HERO_BUST_ART[id], source: 'hero-bust-v1' };
}

// Portraits are separate from battle art: importing this module decodes nothing.
export function heroBustArt(id, skin = null) {
  const look = selectedBust(id, skin);
  return look ? loaded.get(look.key) || null : null;
}

export function loadHeroBust(id, skin = null) {
  const look = selectedBust(id, skin);
  if (!look || typeof Image === 'undefined') return Promise.resolve(null);
  const { key, spec, source } = look;
  if (pending.has(key)) return pending.get(key);
  const request = new Promise((resolve) => {
    const img = new Image();
    img.decoding = 'async';
    const finish = (ok) => {
      img.onload = img.onerror = null;
      const valid = ok && (img.naturalWidth || img.width) === spec.width && (img.naturalHeight || img.height) === spec.height;
      const art = valid ? { img, source, look: key } : null;
      if (art) loaded.set(key, art);
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
  pending.set(key, request);
  return request;
}
