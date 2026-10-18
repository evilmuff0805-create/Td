// Construction and upgrades live below the battlefield, never above a unit.
import {h,clear} from './dom.js';
export class CommandDock {
  constructor({owner=0,host,onClose}){
    this.host=host;this.items=[];this.hoverKey=null;
    this.el=h('section',{class:`command-dock p${owner}`,'aria-label':'건설 및 강화'},
      this.detail=h('div',{class:'command-detail'}),
      h('button',{class:'command-close','aria-label':'건설 및 강화 닫기',onclick:onClose},'×'),
      this.options=h('div',{class:'command-options','aria-label':'명령 목록'}));
    host.hidden=false;host.append(this.el);
  }
  layout(){} // Same command-item interface as the retired battlefield ring.
  rects(){return [];}
  render(items,defaultTip){
    const active=document.activeElement,focusKey=this.items[this.buttons?.indexOf(active)]?.key;
    const scroll=this.options.scrollLeft;this.items=items;this.defaultTip=defaultTip;
    clear(this.options);this.buttons=items.map(it=>{
      const button=h('button',{class:`command-option ${it.cls||''}`,disabled:it.disabled,'aria-label':it.label,
        onmouseenter:()=>this.hover(it.key),onfocus:()=>this.hover(it.key),onmouseleave:()=>this.hover(null),
        onclick:e=>{e.stopPropagation();if(!it.disabled)it.run?.();}},
        it.icon?h('img',{src:it.icon,alt:''}):h('span',{class:'command-glyph'},it.glyph),
        h('span',{class:'command-name'},it.label?.replace(/\s*\([^)]*\)\s*$/,'')),
        it.cost!=null?h('span',{class:'command-price num'},typeof it.cost==='number'?`${it.cost}냥`:it.cost):null);
      this.options.append(button);return button;
    });
    this.options.scrollLeft=scroll;
    if(focusKey!=null)this.buttons[items.findIndex(it=>it.key===focusKey)]?.focus({preventScroll:true});
    this.hover(this.hoverKey);
  }
  hover(key){
    this.hoverKey=key;const it=this.items.find(item=>item.key===key);
    clear(this.detail).append(it?.tip?.()??this.defaultTip??'');
    if(it)it.onhover?.();else this.onleave?.();
  }
  remove(){this.el.remove();if(!this.host.children.length)this.host.hidden=true;}
}
