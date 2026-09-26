// 원형 명령 고리: 타일을 둘러싼 작은 버튼 몇 개와 설명 한 줄.
// 큰 창 대신 이 고리를 쓰면 뒤편 전장(특히 동료 영웅)이 가려지지 않는다.
import { h, clear } from './dom.js';

const BTN = 52; // 버튼 지름(px)

// items: { key, angle(도), icon(src) | glyph, cost, label, disabled, active, cls, tip(): Node|string, run() }
export class Ring {
  // kbd: 키보드로만 고르는 고리 (로컬 2P) — 마우스 클릭은 통과시킨다
  constructor({ owner = 0, help = '', kbd = false }) {
    this.owner = owner;
    this.above = kbd; // 두 고리가 겹칠 때 설명끼리 부딪히지 않게 2P 설명은 위로
    this.help = help;
    this.fresh = true;
    this.el = h('div', { class: `ringwrap p${owner}${kbd ? ' kbd' : ''}` });
    this.hoverKey = null;
    this.items = [];
  }

  // cx, cy: 타일 중심(오버레이 px), bw, bh: 오버레이 크기, k: 캔버스 배율
  layout(cx, cy, bw, bh, k) {
    this.R = Math.max(54, Math.min(74, 1.45 * 40 * k));
    const m = this.R + BTN / 2 + 6;
    this.cx = Math.max(m, Math.min(bw - m, cx));
    this.cy = Math.max(m, Math.min(bh - m - 10, cy));
    this.bw = bw;
    this.bh = bh;
  }

  render(items, defaultTip) {
    this.items = items;
    this.defaultTip = defaultTip;
    const wrap = clear(this.el);
    // 처음 열 때만 튀어나오는 연출 (군자금이 바뀌어 다시 그릴 때는 가만히)
    const ring = h('div', { class: `ring${this.fresh ? ' fresh' : ''}`, style: { left: `${this.cx}px`, top: `${this.cy}px` } },
      h('div', { class: 'ring-halo', style: { width: `${this.R * 2}px`, height: `${this.R * 2}px` } }));
    this.fresh = false;
    items.forEach((it, i) => {
      const a = (it.angle * Math.PI) / 180;
      const b = h('button', {
        class: `rbtn ${it.cls || ''}${it.active ? ' active' : ''}`,
        disabled: it.disabled,
        'aria-label': it.label,
        style: { left: `${Math.cos(a) * this.R}px`, top: `${Math.sin(a) * this.R}px`, animationDelay: `${i * 22}ms` },
        onmouseenter: () => this.hover(it.key),
        onfocus: () => this.hover(it.key),
        onmouseleave: () => this.hover(null),
        onclick: (e) => {
          e.stopPropagation();
          if (!it.disabled && it.run) it.run();
        },
      },
      it.icon ? h('img', { src: it.icon, alt: '' }) : h('span', { class: 'gl' }, it.glyph),
      it.cost !== undefined && it.cost !== null ? h('span', { class: 'cost num' }, it.cost) : null,
      it.num ? h('span', { class: 'hot' }, it.num) : null);
      b.style.setProperty('--fx', `${-Math.cos(a) * this.R}px`);
      b.style.setProperty('--fy', `${-Math.sin(a) * this.R}px`);
      ring.append(b);
    });
    this.tipEl = h('div', { class: 'rtip' });
    wrap.append(ring, this.tipEl);
    const active = items.find((it) => it.active);
    this.hover(this.hoverKey ?? (active ? active.key : null));
  }

  hover(key) {
    this.hoverKey = key;
    const it = key !== null ? this.items.find((x) => x.key === key) : null;
    const body = it && it.tip ? it.tip() : this.defaultTip;
    clear(this.tipEl).append(...[body, this.help ? h('div', { class: 'help' }, this.help) : null].filter(Boolean));
    if (it && it.onhover) it.onhover();
    else if (!it && this.onleave) this.onleave();
    this.placeTip();
  }

  // 설명은 고리 아래(공간이 없으면 위)에 두고, 클릭을 막지 않는다
  placeTip() {
    const t = this.tipEl;
    const w = t.offsetWidth || 260;
    const hgt = t.offsetHeight || 60;
    const off = this.R + BTN / 2 + 14;
    const below = this.cy + off;
    const above = this.cy - off - hgt;
    let top = this.above ? above : below;
    let left = this.cx - w / 2;
    if (this.above && top < 6) {
      // 위가 막히면 옆으로 (아래는 1P 설명 자리)
      const side = this.R + 34;
      left = this.cx + side + w < this.bw - 6 ? this.cx + side : this.cx - side - w;
      top = this.cy - hgt / 2;
    } else if (top < 6) top = below;
    else if (top + hgt > this.bh - 6) top = above;
    left = Math.max(6, Math.min(this.bw - w - 6, left));
    t.style.left = `${left}px`;
    t.style.top = `${Math.max(6, Math.min(this.bh - hgt - 6, top))}px`;
  }

  // 가려짐 판정용 사각형들 (오버레이 좌표)
  rects() {
    const out = [];
    const b = BTN / 2 + 4;
    for (const it of this.items) {
      const a = (it.angle * Math.PI) / 180;
      out.push({ x: this.cx + Math.cos(a) * this.R - b, y: this.cy + Math.sin(a) * this.R - b, w: b * 2, h: b * 2 + 10, btn: true });
    }
    if (this.tipEl) out.push({ x: this.tipEl.offsetLeft, y: this.tipEl.offsetTop, w: this.tipEl.offsetWidth, h: this.tipEl.offsetHeight });
    return out;
  }

  remove() {
    this.el.remove();
  }
}

// 고리 둘레에 n개를 12시 방향부터 고르게
export function spread(n, start = -90) {
  return Array.from({ length: n }, (_, i) => start + (360 / n) * i);
}
