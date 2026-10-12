// Isolated DOM/engine comparison: no profile reads, writes, growth or battle rewards.
import { h, clear, fmt } from './dom.js';
import { battleRules } from './battle-rules.js';
import { STAGE_BY_ID, DIFFICULTY } from '../data/stages.js';
import { TOWER_ORDER } from '../data/towers.js';
import { createGame } from '../sim/sim.js';
import { spawnEnemy } from '../sim/combat.js';

const stage=h('select',{'aria-label':'전장'},['s21','s24','s25'].map(id=>h('option',{value:id},STAGE_BY_ID[id].name)));
const difficulty=h('select',{'aria-label':'난이도'},Object.entries(DIFFICULTY).map(([id,d])=>h('option',{value:id,selected:id==='hell'},d.name)));
const mode=h('select',{'aria-label':'모드'},[['solo','혼자 출정'],['local','로컬 2인'],['online','온라인 2인']].map(([value,label])=>h('option',{value},label)));
const narrow=h('button',{class:'btn','aria-pressed':'false',onclick:()=>{const active=preview.classList.toggle('narrow');narrow.setAttribute('aria-pressed',String(active));}},'414px 패널 비교');
const preview=document.getElementById('preview');
document.getElementById('controls').append(stage,difficulty,mode,narrow);
function render(){
  const coop=mode.value!=='solo',s=createGame({stageId:stage.value,difficulty:difficulty.value,mode:mode.value,players:coop?[{heroes:['yi']},{heroes:['sejong']}]:[{heroes:['yi','sejong']}]});
  const ordinary=[1,3,5,8].map(w=>[w,spawnEnemy(s,'ashigaru',0,w).maxHp]);
  const boss=spawnEnemy(s,'hideyoshi',0,8);
  clear(preview).append(h('h3',{},STAGE_BY_ID[stage.value].name),battleRules(stage.value,difficulty.value,coop,TOWER_ORDER),
    h('div',{id:'engine',class:'dim'},`엔진 확인 · 시작 지갑 ${s.players.map((p,i)=>`${i+1}P ${fmt(p.gold)}냥`).join(' / ')} · 일반병 HP ${ordinary.map(([w,hp])=>`${w}파 ${hp.toFixed(1)}`).join(' / ')} · 고정 체력 최종 적장 HP ${fmt(boss.maxHp)}`));
}
for(const el of [stage,difficulty,mode])el.addEventListener('change',render);
render();
