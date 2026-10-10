import { HEROES,HERO_ORDER } from '../data/heroes.js';
import { SKILLS,SKILL_ORDER,skillDesc } from '../data/skills.js';
import { newBattleGame } from './scenario.js';
import { applyCommand } from '../sim/sim.js';
import { spawnEnemy } from '../sim/combat.js';
import { getMap,nearestOnPath,posAt } from '../sim/map.js';

const holdTimes={yi:[.25,.65],gang:[.15,.58],gwon:[.45,.35],gwak:[.25,.25],ahn:[.06,.12],dangun:[.5,.36]};
export const ABILITY_SAMPLES=[
  ...HERO_ORDER.flatMap(id=>['heroSkill','heroUlt'].map((kind,i)=>({key:`${id}-${kind}`,id,kind,name:`${HEROES[id].name} · ${HEROES[id][kind==='heroSkill'?'skill':'ult'].name}`,description:HEROES[id][kind==='heroSkill'?'skill':'ult'].desc,holdAt:holdTimes[id]?.[i]??.35}))),
  ...SKILL_ORDER.map(id=>({key:`${id}-skill`,id,kind:'skill',name:`비기 · ${SKILLS[id].name}`,description:skillDesc(id),holdAt:id==='bigyeok'?2.05:id==='cheonja'?.5:.35})),
  {key:'slash',id:'gang',kind:'attack',name:'강감찬 · 기본 참격',description:'실제 근접 기본 공격 접촉 장면입니다.',holdAt:.12},
  {key:'combo',id:'taegeuk',kind:'combo',name:'이순신·세종 · 합격기',description:'두 영웅의 실제 공명 명령으로 발동합니다.',holdAt:.35},
];
export function createAbilitySample(sample,stageId) {
  const hero=sample.kind==='heroSkill'||sample.kind==='heroUlt'||sample.kind==='attack'?sample.id:'yi';
  const game=newBattleGame({stageId,heroIds:[hero,hero==='yi'?'sejong':'yi'],skillIds:sample.kind==='skill'?[sample.id,'donguibogam']:['hanpa','donguibogam'],support:false});
  const map=getMap(stageId),target=nearestOnPath(map,12.4,6.4),path=map.paths[target.path];
  for(const [i,h]of game.heroes.entries()){
    h.x=target.x-2.1+i*.95;h.y=target.y+1.05+i*.15;h.tx=h.x;h.ty=h.y;h.post={x:h.x,y:h.y};h.skillCd=0;h.ultCd=0;h.cd=99;h.hp=h.maxHp*.5;
  }
  for(const tower of game.towers)tower.cd=99;
  for(let i=0;i<4;i++){
    const enemy=spawnEnemy(game,'samurai',target.path,1),distance=Math.max(.1,Math.min(path.total,target.d+(i-1.5)*.48)),point=posAt(path,distance);
    enemy.x=point.x;enemy.y=point.y;enemy.d=distance;enemy.hp=enemy.maxHp=5000;enemy.stunT=30;
    if(sample.kind==='attack'&&i===0){const h=game.heroes[0];h.x=enemy.x-.65;h.y=enemy.y;h.tx=h.x;h.ty=h.y;h.post={x:h.x,y:h.y};h.cd=0;}
  }
  game.players[0].skills.forEach(s=>s.cd=0);game.events.length=0;
  if(sample.kind==='combo'){game.resonance.gauge=100;applyCommand(game,{t:'combo',p:0});}
  else if(sample.kind==='skill')applyCommand(game,{t:'skill',p:0,slot:0,x:target.x,y:target.y});
  else if(sample.kind!=='attack')applyCommand(game,{t:sample.kind,p:0,h:0,x:target.x,y:target.y});
  return game;
}
