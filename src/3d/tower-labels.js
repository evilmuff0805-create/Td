import { TOWERS } from '../data/towers.js';
import { towerTier,towerVisual } from './tower-visuals.js';
import { layoutTowerLabels } from './label-layout.js';

// DOM labels stay legible at every camera zoom; their anchors follow the real roofs.
export class TowerLabels {
  constructor(container, select, {insets} = {}) {
    this.container=container;this.select=select;this.items=new Map();this.getInsets=insets;
  }
  update(game,world,selected,mode) {
    const maxLevel=game.stageId==='winter3d'?3:4;
    const active=new Set(),entries=[],width=world.renderer.domElement.clientWidth,height=world.renderer.domElement.clientHeight;
    const resized=this.width!==width||this.height!==height,insets=this.getInsets?.({width,height})??{};
    this.width=width;this.height=height;
    this.container.classList.toggle('aiming',!!mode);
    for(const tower of game.towers) {
      const tier=towerTier(tower);
      active.add(tower.id);let item=this.items.get(tower.id);
      if(!item) {
        const button=document.createElement('button');button.type='button';button.className='tower-badge';button.dataset.towerId=tower.id;
        const name=document.createElement('span');name.className='tower-badge-name';name.textContent=TOWERS[tower.type].name;
        const stage=document.createElement('b'),pips=document.createElement('span');pips.className='tier-pips';pips.setAttribute('aria-hidden','true');
        for(let i=0;i<maxLevel;i++)pips.append(document.createElement('i'));
        const leader=document.createElement('span');leader.className='tower-label-leader';leader.setAttribute('aria-hidden','true');
        button.append(name,stage,pips);button.addEventListener('click',()=>this.select(tower.id));this.container.append(leader,button);
        item={button,stage,pips,leader,level:0};this.items.set(tower.id,item);
      }
      if(item.level!==tier||item.branch!==tower.branch) {
        const visual=towerVisual(tower.type,tier,tower.branch,maxLevel===4);
        item.stage.textContent=`${tier}단계${tower.branch?` ${tower.branch}`:''}${visual.isMax?' · 최대':''}`;
        item.button.dataset.level=tier;
        item.button.classList.toggle('max-tier',visual.isMax);
        item.button.setAttribute('aria-label',`${TOWERS[tower.type].name}, ${tier} / ${maxLevel}단계, ${visual.upgradeCount}회 강화${tower.branch?`, 특화 ${tower.branch} ${visual.name}`:''}${visual.isMax?', 최대 단계':''}`);
        item.button.title=`${visual.name} · ${visual.upgradeCount}회 강화${visual.isMax?' · 최대':''}`;
        [...item.pips.children].forEach((pip,i)=>pip.classList.toggle('filled',i<tier));item.level=tier;item.branch=tower.branch;
        item.measureDirty=true;
      }
      const isSelected=selected?.kind==='tower'&&selected.id===tower.id&&!mode;
      item.button.setAttribute('aria-pressed',String(isSelected));
      // Selection reveals the name in the preview, and responsive padding also changes size.
      if(item.measureDirty||resized||item.selected!==isSelected){
        item.button.hidden=false;item.width=item.button.offsetWidth||80;item.height=item.button.offsetHeight||46;item.measureDirty=false;
      }
      item.selected=isSelected;
      item.button.disabled=!!game.result;item.button.tabIndex=mode?-1:0;
      const model=world.towers.get(tower.id)?.root,anchor=world.art?.anchor(model,.18),p=anchor?world.project(anchor.x,anchor.y,anchor.z):world.project(tower.cx,(model?.userData.labelHeight??2)+.03,tower.cy),base=world.project(tower.cx,.1,tower.cy);
      item.button.hidden=!p.visible||base.x<0||base.x>width||base.y<0||base.y>height;
      item.leader.hidden=true;
      if(!item.button.hidden)entries.push({id:tower.id,x:p.x,y:p.y,width:item.width,height:item.height,selected:selected?.kind==='tower'&&selected.id===tower.id});
    }
    const key=[width,height,insets.top??6,insets.right??6,insets.bottom??6,insets.left??6,...entries.flatMap(e=>[e.id,e.x.toFixed(1),e.y.toFixed(1),e.width,e.height,e.selected])].join(',');
    if(key!==this.layoutKey){this.positions=layoutTowerLabels(entries,width,height,insets);this.layoutKey=key;}
    const positions=this.positions;
    for(const e of entries) {
      const item=this.items.get(e.id),at=positions.get(e.id);item.button.hidden=!at;if(!at)continue;
      item.button.style.left=`${at.x}px`;item.button.style.top=`${at.y}px`;
      const x=Math.max(at.left,Math.min(at.right,e.x)),y=Math.max(at.top,Math.min(at.bottom,e.y)),dx=x-e.x,dy=y-e.y,length=Math.hypot(dx,dy);
      item.leader.hidden=length<7;
      if(length>=7){item.leader.style.left=`${e.x}px`;item.leader.style.top=`${e.y}px`;item.leader.style.width=`${length}px`;item.leader.style.transform=`rotate(${Math.atan2(dy,dx)}rad)`;}
    }
    for(const [id,item] of this.items)if(!active.has(id)){item.button.remove();item.leader.remove();this.items.delete(id);}
  }
  clear() {this.container.replaceChildren();this.items.clear();}
}
