// 원형 명령 고리: 타일을 둘러싼 작은 버튼 몇 개와 설명 한 줄.
// 큰 창 대신 이 고리를 쓰면 뒤편 전장(특히 동료 영웅)이 가려지지 않는다.
import { h, clear } from './dom.js';
import { commandRingLayout } from './ring-layout.js';

// items: { key, angle(도), icon(src) | glyph, cost, label, disabled, active, cls, tip(): Node|string, run() }
export class Ring {
  // kbd: 키보드로만 고르는 고리 (로컬 2P) — 마우스 클릭은 통과시킨다
  constructor({ owner = 0, help = '', kbd = false }) {
    this.owner = owner;
    this.kbd = kbd;
    this.above = kbd; // 두 고리가 겹칠 때 설명끼리 부딪히지 않게 2P 설명은 위로
    this.help = help;
    this.fresh = true;
    this.el = h('div', { class: `ringwrap p${owner}${kbd ? ' kbd' : ''}` });
    this.hoverKey = null;
    this.items = [];
  }

  // cx, cy: 타일 중심(오버레이 px), bw, bh: 오버레이 크기, k: 캔버스 배율, n: 버튼 수
  layout(cx, cy, bw, bh, k, n = 0) {
    this.layoutArgs={cx,cy,bw,bh,k,n};
    const angles=this.items.length===n?this.items.map(it=>it.angle):spread(n);
    const at=commandRingLayout({x:cx,y:cy,width:bw,height:bh,scale:k,angles,above:this.above});
    this.placement=at;this.dense=n>8;this.btn=at.button;this.R=at.radius;this.cx=at.cx;this.cy=at.cy;this.bw=bw;this.bh=bh;
    if(this.ringEl)this.positionButtons();
  }

  render(items, defaultTip) {
    const focusedIndex=this.buttons?.findIndex(button=>button===document.activeElement)??-1;
    const focusedKey=focusedIndex>=0?this.items[focusedIndex]?.key:null,scrollTop=this.ringEl?.scrollTop??0;
    this.items = items;
    this.defaultTip = defaultTip;
    const {cx,cy,bw,bh,k}=this.layoutArgs;
    this.layout(cx,cy,bw,bh,k,items.length);
    const wrap = clear(this.el);
    // 처음 열 때만 튀어나오는 연출 (군자금이 바뀌어 다시 그릴 때는 가만히)
    const ring = h('div', { class: 'ring' },
      h('div', { class: 'ring-halo', style: { width: `${this.R * 2}px`, height: `${this.R * 2}px` } }));
    this.ringEl=ring;this.buttons=[];
    items.forEach((it, i) => {
      const b = h('button', {
        class: `rbtn ${it.cls || ''}${it.active ? ' active' : ''}`,
        disabled: it.disabled,
        'aria-label': it.label,
        style: { animationDelay: `${i * 22}ms` },
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
      this.buttons.push(b);
      ring.append(b);
    });
    this.positionButtons();
    this.tipEl = h('div', { class: 'rtip' });
    wrap.append(ring, this.tipEl);
    this.positionButtons();this.fresh=false;
    if(!this.kbd&&this.placement.grid)ring.scrollTop=scrollTop;
    const active = items.find((it) => it.active);
    this.hover(this.hoverKey ?? (active ? active.key : null));
    if(!this.kbd&&focusedKey!==null){const index=items.findIndex(it=>it.key===focusedKey);this.buttons[index]?.focus({preventScroll:true});}
  }

  positionButtons(){
    const at=this.placement,ring=this.ringEl;
    ring.className=`ring${this.fresh?' fresh':''}${this.dense?' dense':''}${at.grid?' grid':''}`;
    Object.assign(ring.style,{left:`${this.cx}px`,top:`${this.cy}px`,width:at.grid?`${at.panelWidth}px`:'0px',height:at.grid?`${at.panelHeight}px`:'0px'});
    this.buttons?.forEach((button,i)=>{const p=at.points[i];if(!p)return;Object.assign(button.style,{left:`${p.x}px`,top:`${p.y}px`});button.style.setProperty('--fx',`${-p.x}px`);button.style.setProperty('--fy',`${-p.y}px`);});
    if(at.grid&&this.kbd){const i=this.items.findIndex(it=>it.active);if(i>=0)ring.scrollTop=Math.max(0,at.points[i].y-at.panelHeight/2);}
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
    t.style.maxWidth=`${Math.max(0,Math.min(280,this.bw-12))}px`;
    const w = t.offsetWidth || 260;
    const bounds=this.placement.bounds,below=this.cy+bounds.bottom+10;
    const aboveSpace=this.cy+bounds.top-16,belowSpace=this.bh-below-6;
    const useAbove=this.above?aboveSpace>=Math.min(44,belowSpace):belowSpace<Math.min(44,aboveSpace);
    t.style.maxHeight=`${Math.max(0,useAbove?aboveSpace:belowSpace)}px`;
    const hgt = Math.min(t.offsetHeight || 60,Math.max(0,useAbove?aboveSpace:belowSpace));
    const above = this.cy+bounds.top-10-hgt;
    let top = useAbove ? above : below;
    let left = this.cx - w / 2;
    if (this.above && top < 6) {
      // 위가 막히면 옆으로 (아래는 1P 설명 자리)
      const side = bounds.right + 10;
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
    const at=this.placement;
    if(at.grid)out.push({x:this.cx+at.bounds.left,y:this.cy+at.bounds.top,w:at.panelWidth,h:at.panelHeight,btn:true});
    else for (const p of at.points) {
      out.push({ x: this.cx+p.x-at.cellW/2, y:this.cy+p.y-at.cellH/2, w:at.cellW,h:at.cellH,btn:true });
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
