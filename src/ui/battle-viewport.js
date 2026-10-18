// Keep native page zoom separate from the battlefield's OrbitControls camera.
const locks = new WeakMap();
export function lockBattlePageZoom(doc = document) {
  let shared = locks.get(doc);
  if (!shared) {
    const root = doc.documentElement;
    const beforeRoot = root?.getAttribute('data-battle-zoom') ?? null;
    root?.setAttribute('data-battle-zoom', 'locked');
    const meta = doc.querySelector?.('meta[name="viewport"]');
    const beforeMeta = meta?.getAttribute('content') ?? null;
    const base = beforeMeta ?? 'width=device-width, initial-scale=1, viewport-fit=cover';
    const locked = base.split(',').map(s => s.trim())
      .filter(s => !/^(maximum-scale|user-scalable)\s*=/i.test(s))
      .concat('maximum-scale=1', 'user-scalable=no').join(', ');
    meta?.setAttribute('content', locked);
    // Safari's native gesture events are not the camera's pointer events.
    // Do not cancel ordinary touchstart/touchend or stop propagation.
    const preventPageGesture = event => { if (event.cancelable) event.preventDefault(); };
    const types = ['gesturestart', 'gesturechange', 'gestureend'];
    for (const type of types) doc.addEventListener(type, preventPageGesture, { capture: true, passive: false });
    shared = { count: 0, restore: () => {
      for (const type of types) doc.removeEventListener(type, preventPageGesture, true);
      if (meta?.getAttribute('content') === locked) {
        beforeMeta === null ? meta.removeAttribute('content') : meta.setAttribute('content', beforeMeta);
      }
      if (root?.getAttribute('data-battle-zoom') === 'locked') {
        beforeRoot === null ? root.removeAttribute('data-battle-zoom') : root.setAttribute('data-battle-zoom', beforeRoot);
      }
    } };
    locks.set(doc, shared);
  }
  shared.count++;
  let released = false;
  return () => {
    if (released) return;
    released = true;
    if (--shared.count) return;
    shared.restore();
    locks.delete(doc);
  };
}
