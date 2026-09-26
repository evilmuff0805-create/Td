// 작은 DOM 도우미
export function h(tag, props = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(props || {})) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'html') el.innerHTML = v;
    else if (v === true) el.setAttribute(k, '');
    else el.setAttribute(k, v);
  }
  append(el, children);
  return el;
}

function append(el, children) {
  for (const c of children) {
    if (c === null || c === undefined || c === false) continue;
    if (Array.isArray(c)) append(el, c);
    else el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
}

export function clear(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
  return el;
}

export const $ = (sel, root = document) => root.querySelector(sel);

let toastRoot = null;
export function toast(text, ms = 1800) {
  if (!toastRoot) {
    toastRoot = h('div', { class: 'toasts', role: 'status', 'aria-live': 'polite' });
    document.body.append(toastRoot);
  }
  const t = h('div', { class: 'toast' }, text);
  toastRoot.append(t);
  while (toastRoot.children.length > 4) toastRoot.firstChild.remove();
  setTimeout(() => t.remove(), ms);
}

// confirm() 대신 쓰는 모달
export function modal(title, body, buttons = [{ label: '확인', value: true, cls: 'btn-seal' }]) {
  return new Promise((resolve) => {
    const back = h('div', { class: 'modal-back' });
    const close = (v) => {
      back.remove();
      document.removeEventListener('keydown', onKey, true);
      resolve(v);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        close(null);
      }
    };
    document.addEventListener('keydown', onKey, true);
    const box = h(
      'div',
      { class: 'panel modal', role: 'dialog', 'aria-modal': 'true' },
      h('h3', {}, title),
      typeof body === 'string' ? h('p', {}, body) : body,
      h('div', { class: 'row', style: { marginTop: '14px', justifyContent: 'flex-end' } },
        buttons.map((b) => h('button', { class: `btn ${b.cls || ''}`, onclick: () => close(b.value) }, b.label))),
    );
    back.append(box);
    back.addEventListener('click', (e) => {
      if (e.target === back) close(null);
    });
    document.body.append(back);
    const first = box.querySelector('.btn-seal') || box.querySelector('button');
    if (first) first.focus();
  });
}

export function starStr(n, max = 3) {
  return h('span', { class: 'stars', 'aria-label': `별 ${n}개` }, '★'.repeat(n), h('span', { class: 'off' }, '★'.repeat(max - n)));
}

export function fmt(n) {
  return Math.floor(n).toLocaleString('ko-KR');
}
