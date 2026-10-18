import { Ring,spread } from './ring.js';
import { h } from './dom.js';
import { TOWER_ORDER,TOWERS } from '../data/towers.js';
import { towerIcon } from '../render/draw-towers.js';
import { lockBattlePageZoom } from './battle-viewport.js';

let releaseZoom=lockBattlePageZoom();
document.querySelector('header').append(h('label',{},h('input',{type:'checkbox',checked:true,'aria-label':'전투 줌 제한',onchange:e=>{releaseZoom();releaseZoom=e.target.checked?lockBattlePageZoom():()=>{};}}),'전투 줌 제한'));
window.addEventListener('pagehide',()=>releaseZoom(),{once:true});

const area=document.getElementById('review'),overlay=area.querySelector('.overlay'),status=document.getElementById('status');
let ring,index=0;
function render(){
  const size=document.getElementById('size').value.split('x').map(Number);
  area.style.width=size[0]?`${size[0]}px`:'100vw';area.style.height=size[1]?`${size[1]}px`:'calc(100dvh - 154px)';
  ring?.remove();const kbd=document.getElementById('keyboard').checked,n=Number(document.getElementById('count').value),edge=document.getElementById('position').value==='edge',x=edge?14:area.clientWidth/2,y=edge?14:area.clientHeight/2;
  ring=new Ring({owner:kbd?1:0,kbd,help:kbd?'←→ 고르기 · E 확정 · Q 취소':''});ring.layout(x,y,area.clientWidth,area.clientHeight,1,n);overlay.append(ring.el);
  const angles=spread(n),list=TOWER_ORDER.slice(0,n);index%=n;
  ring.render(list.map((id,i)=>({key:id,angle:angles[i],icon:towerIcon(id),cost:TOWERS[id].levels[0].cost,label:TOWERS[id].name,active:kbd&&i===index,num:String((i+1)%10),tip:()=>h('div',{},h('b',{},TOWERS[id].name),h('div',{},TOWERS[id].desc)),run:()=>{status.textContent=`${TOWERS[id].name} 선택 확인 (검수 화면 — 저장하지 않음)`;}})),h('div',{},h('b',{},'유산 건설'),h('div',{},'실제 전투와 같은 버튼·가격표·선택 확대 크기를 사용합니다.')));
  Object.assign(document.getElementById('anchor').style,{left:`${x}px`,top:`${y}px`});status.textContent=`${n}종 · ${ring.placement.grid?'줄 배치':'원형 배치'} · ${ring.btn}px 버튼`;
  area.dataset.layout=ring.placement.grid?'grid':'circle';area.dataset.count=n;
}
for(const id of ['count','position','keyboard','size'])document.getElementById(id).addEventListener('change',render);
document.getElementById('next').onclick=()=>{index++;render();};window.addEventListener('resize',render);render();
