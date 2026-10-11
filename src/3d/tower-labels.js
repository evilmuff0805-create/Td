import { TOWERS } from '../data/towers.js';
import { towerTier,towerVisual } from './tower-visuals.js';

// Four small dots track each building's base; details open only on interaction.
export class TowerLabels {
  constructor(container, select, {insets} = {}) {
    this.container=container;this.select=select;this.items=new Map();this.getInsets=insets;
  }
  update(game,world,selected,mode) {
    const maxLevel=game.stageId==='winter3d'?3:4;
    const active=new Set(),entries=[],width=world.renderer.domElement.clientWidth,height=world.renderer.domElement.clientHeight;
    const insets=this.getInsets?.({width,height})??{};
    this.width=width;this.height=height;
    this.container.classList.toggle('aiming',!!mode);
    for(const tower of game.towers) {
      const tier=towerTier(tower);
      active.add(tower.id);let item=this.items.get(tower.id);
      if(!item) {
        const button=document.createElement('button');button.type='button';button.className='tower-badge';button.dataset.towerId=tower.id;
        const name=document.createElement('span');name.className='tower-badge-name';name.textContent=TOWERS[tower.type].name;
        const stage=document.createElement('span');stage.className='tower-badge-detail';
        const pips=document.createElement('span');pips.className='tier-pips';pips.setAttribute('aria-hidden','true');
        for(let i=0;i<4;i++){const pip=document.createElement('i');pip.classList.toggle('unavailable',i>=maxLevel);pips.append(pip);}
        const info=document.createElement('span');info.className='tower-badge-info';info.append(name,stage);
        button.append(info,pips);button.addEventListener('click',()=>this.select(tower.id));this.container.append(button);
        item={button,stage,pips,info,level:0,hovered:false,focused:false};this.items.set(tower.id,item);
        const detail=(key,on)=>{
          item[key]=on;
        };
        button.addEventListener('pointerenter',()=>detail('hovered',true));
        button.addEventListener('pointerleave',()=>detail('hovered',false));
        button.addEventListener('focus',()=>detail('focused',true));
        button.addEventListener('blur',()=>detail('focused',false));
      }
      if(item.level!==tier||item.branch!==tower.branch) {
        const visual=towerVisual(tower.type,tier,tower.branch,maxLevel===4);
        item.stage.textContent=`${tier}단계${tower.branch?` ${tower.branch}`:''}${visual.isMax?' · 최대':''}`;
        item.button.dataset.level=tier;
        item.button.dataset.branch=tower.branch||'';
        item.button.classList.toggle('max-tier',visual.isMax);
        item.button.setAttribute('aria-label',`${TOWERS[tower.type].name}, ${tier} / ${maxLevel}단계, ${visual.upgradeCount}회 강화${tower.branch?`, 특화 ${tower.branch} ${visual.name}`:''}${visual.isMax?', 최대 단계':''}`);
        item.button.title=`${visual.name} · ${visual.upgradeCount}회 강화${visual.isMax?' · 최대':''}`;
        [...item.pips.children].forEach((pip,i)=>pip.classList.toggle('filled',i<tier));item.level=tier;item.branch=tower.branch;
      }
      const isSelected=selected?.kind==='tower'&&selected.id===tower.id&&!mode;
      const interacting=!mode&&(item.hovered||item.focused),expanded=isSelected||interacting;
      item.button.classList.toggle('detail-open',expanded);
      item.button.setAttribute('aria-expanded',String(expanded));
      item.button.setAttribute('aria-pressed',String(isSelected));
      // The compact target and four dots never move when its tooltip opens.
      item.width=40;item.height=20;
      item.expanded=expanded;
      item.button.disabled=!!game.result;item.button.tabIndex=mode?-1:0;
      const model=world.towers.get(tower.id)?.root,base=world.project(tower.cx,model?.position?.y??.03,tower.cy);
      const p={x:base.x,y:base.y+22};
      item.button.hidden=!base.visible||p.x-20<(insets.left??6)||p.x+20>width-(insets.right??6)||p.y-20<(insets.top??6)||p.y>height-(insets.bottom??6);
      if(!item.button.hidden)entries.push({id:tower.id,...p,width:item.width,height:item.height});
    }
    this.positions=new Map();
    for(const e of entries) {
      const item=this.items.get(e.id);
      this.positions.set(e.id,{x:e.x,y:e.y,left:e.x-20,right:e.x+20,top:e.y-20,bottom:e.y});
      item.button.style.left=`${e.x}px`;item.button.style.top=`${e.y}px`;
      const infoWidth=Math.min(140,width-12),infoX=Math.max(6+infoWidth/2,Math.min(width-6-infoWidth/2,e.x));
      item.info.style.width=`${infoWidth}px`;item.info.style.left=`${20+infoX-e.x}px`;
    }
    for(const [id,item] of this.items)if(!active.has(id)){item.button.remove();this.items.delete(id);}
  }
  clear() {this.container.replaceChildren();this.items.clear();this.positions=null;this.layoutKey=null;}
}
