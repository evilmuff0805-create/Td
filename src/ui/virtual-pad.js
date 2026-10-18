import { h } from './dom.js';

// Direction is digital after a small dead zone; the game keeps its hero speed.
export function padVector(dx, dy, radius, deadZone = .18) {
  if (![dx, dy, radius].every(Number.isFinite) || radius <= 0) return { x: 0, y: 0, thumbX: 0, thumbY: 0 };
  const length = Math.hypot(dx, dy), limit = Math.min(length, radius);
  const x = length ? dx / length : 0, y = length ? dy / length : 0;
  return { x: length > radius * deadZone ? x : 0, y: length > radius * deadZone ? y : 0, thumbX: x * limit, thumbY: y * limit };
}

// Invert the projected map axes so up on the pad means up on the screen,
// including the isometric camera. Diagonals have the same world speed.
export function padWorldDirection(vector, axisX = { x: 1, y: 0 }, axisY = { x: 0, y: 1 }) {
  const det = axisX.x * axisY.y - axisX.y * axisY.x;
  if (![vector.x, vector.y, det].every(Number.isFinite) || Math.abs(det) < 1e-8) return null;
  const x = (vector.x * axisY.y - vector.y * axisY.x) / det;
  const y = (vector.y * axisX.x - vector.x * axisX.y) / det;
  const length = Math.hypot(x, y);
  return length > 0 ? { x: x / length, y: y / length } : { x: 0, y: 0 };
}

export function createVirtualPad({ canStart, onStart, onChange, onEnd }) {
  const thumb = h('span', { class: 'virtual-pad-thumb', 'aria-hidden': 'true' });
  const surface = h('div', { class: 'virtual-pad', role: 'group', 'aria-label': '영웅 이동 패드' },
    ['up', 'right', 'down', 'left'].map((direction, i) => h('span', { class: `pad-arrow ${direction}`, 'aria-hidden': 'true' }, ['▴', '▸', '▾', '◂'][i])), thumb);
  const el = h('div', { class: 'battle-touch-controls' }, surface, h('span', { class: 'pad-caption' }, '패드로 이동 · 땅 터치 건설'));
  let pointerId = null, value = padVector(0, 0, 1), disabled = false;
  const paint = () => { thumb.style.transform = `translate(${value.thumbX}px, ${value.thumbY}px)`; surface.classList.toggle('active', pointerId !== null); };
  const change = e => {
    const rect = surface.getBoundingClientRect(), radius = Math.max(1, (Math.min(rect.width, rect.height) - 48) / 2);
    value = padVector(e.clientX - rect.left - rect.width / 2, e.clientY - rect.top - rect.height / 2, radius);
    paint(); onChange?.(value);
  };
  const cancel = () => {
    if (pointerId === null) return;
    const id = pointerId; pointerId = null; value = padVector(0, 0, 1); paint();
    if (surface.hasPointerCapture?.(id)) surface.releasePointerCapture(id);
    onEnd?.();
  };
  const down = e => {
    if (pointerId !== null || disabled || e.button !== 0 || !canStart()) return;
    const rect = surface.getBoundingClientRect(); if (!rect.width || !rect.height) return;
    e.preventDefault(); e.stopPropagation(); pointerId = e.pointerId;
    // Document listeners also release the pad if capture is unavailable.
    try { surface.setPointerCapture?.(pointerId); } catch {}
    onStart?.(); if (pointerId !== null) change(e);
  };
  const move = e => { if (e.pointerId !== pointerId) return; e.preventDefault(); change(e); };
  const up = e => { if (e.pointerId === pointerId) cancel(); };
  surface.addEventListener('pointerdown', down);
  surface.addEventListener('lostpointercapture', up);
  document.addEventListener('pointermove', move, { passive: false });
  document.addEventListener('pointerup', up);
  document.addEventListener('pointercancel', up);
  return { el, surface, get value() { return value; }, get pointerId() { return pointerId; }, cancel,
    setDisabled(next) { if (disabled === next) return; disabled = next; surface.setAttribute('aria-disabled', String(next)); if (next) cancel(); },
    destroy() { cancel(); surface.removeEventListener('pointerdown', down); surface.removeEventListener('lostpointercapture', up); document.removeEventListener('pointermove', move); document.removeEventListener('pointerup', up); document.removeEventListener('pointercancel', up); }
  };
}
