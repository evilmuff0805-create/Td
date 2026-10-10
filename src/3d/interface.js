import { ART } from '../data/art.js';
import { CHAPTERS,STAGES,STAGE_BY_ID } from '../data/stages.js';
import { HERO_ORDER,HEROES } from '../data/heroes.js';
import { SKILL_ORDER,SKILLS } from '../data/skills.js';
import { TOWER_ORDER,TOWERS } from '../data/towers.js';
import { getMap,T_PATH,T_WATER,T_BASE,T_BLOCK } from '../sim/map.js';
import { seasonFor,SEASONS } from './seasons.js';
import { campaignSupport } from './scenario.js';
import { normalizeBattleSkills } from './battle-controls.js';
import { findCombo } from '../data/combos.js';
import { SKINS } from '../data/skins.js';

export function atlasStyle(element,category,id) {
  const cell=ART[category]?.[id];if(!cell){element.style.backgroundImage='none';return;}
  const atlas=ART.atlases[cell.atlas],col=cell.cell%atlas.columns,row=Math.floor(cell.cell/atlas.columns);
  element.style.backgroundImage=`url("${atlas.src}")`;element.style.backgroundSize=`${atlas.columns*100}% ${atlas.rows*100}%`;
  element.style.backgroundPosition=`${col/(atlas.columns-1)*100}% ${row/(atlas.rows-1)*100}%`;
}
export function miniMap(stage,theme=seasonFor(stage)) {
  const map=getMap(stage.id);let cells='';
  for(let y=0;y<map.h;y++)for(let x=0;x<map.w;x++) {
    const tile=map.grid[y*map.w+x],color=tile===T_WATER?theme.water:tile===T_PATH?theme.road:tile===T_BASE?'#efc780':tile===T_BLOCK?theme.leaf[2]:theme.ground;
    cells+=`<rect x="${x}" y="${y}" width="1" height="1" fill="${color}"/>`;
  }
  return `<svg viewBox="0 0 ${map.w} ${map.h}" aria-label="${stage.name} 실제 진입 경로 지도" role="img">${cells}</svg>`;
}
const SAVE='hoguk3d.campaign.v1';
export function loadProgress(){try{return JSON.parse(localStorage.getItem(SAVE))??{};}catch{return {};}}
export function saveWin(game){const p=loadProgress();p[game.stageId]=Math.max(Number(p[game.stageId])||0,game.result.stars||1);try{localStorage.setItem(SAVE,JSON.stringify(p));}catch{}return p;}

export class StageChooser {
  constructor(onStart) {
    this.dialog=document.getElementById('stage-dialog');this.onStart=onStart;
    const target=document.getElementById('stage-grid');
    for(const chapter of CHAPTERS) {
      const group=document.createElement('section');group.className='chapter';const heading=document.createElement('h3');heading.textContent=chapter.name;group.append(heading);
      const row=document.createElement('div');row.className='chapter-maps';group.append(row);
      for(const id of chapter.stages) {
        const stage=STAGE_BY_ID[id],theme=seasonFor(stage),button=document.createElement('button');button.className='stage-card';button.type='button';button.dataset.stage=id;
        button.innerHTML=`${miniMap(stage)}<span><small>${theme.name} · ${getMap(id).paths.length}개 진입로 <em></em></small><b>${stage.name}</b><i>${stage.waves.length}파도 · ${stage.startGold}냥</i></span>`;
        button.onclick=()=>{this.pending.stageId=id;this.render();};row.append(button);
      }
      target.append(group);
    }
    for(const id of ['hero-one','hero-two']) {
      const select=document.getElementById(id);
      if(id==='hero-two')select.add(new Option('혼자 출정',''));
      for(const h of HERO_ORDER)select.add(new Option(`${HEROES[h].name} · ${HEROES[h].role}`,h));
      select.onchange=()=>this.render();
    }
    for(const [heroId,skinId]of [['hero-one','skin-one'],['hero-two','skin-two']])document.getElementById(skinId).onchange=()=>{
      const hero=document.getElementById(heroId).value;
      this.pending.skins={...this.pending.skins,[hero]:document.getElementById(skinId).value};this.render();
    };
    for(const selectId of ['equip-choice','equip-two-choice']) {
      const select=document.getElementById(selectId);if(selectId==='equip-two-choice')select.add(new Option('하나만 장착',''));
      for(const id of SKILL_ORDER)select.add(new Option(SKILLS[id].name,id));select.onchange=()=>this.render();
    }
    for(const [id,t] of Object.entries(SEASONS))document.getElementById('season-choice').add(new Option(t.name,id));
    document.getElementById('season-choice').onchange=()=>this.render();
    document.getElementById('support-choice').onchange=()=>this.render();
    document.getElementById('stage-close').onclick=()=>this.dialog.close();
    document.getElementById('stage-start').onclick=()=>{
      const ids=[document.getElementById('hero-one').value,document.getElementById('hero-two').value].filter(Boolean);
      if(new Set(ids).size!==ids.length){document.getElementById('loadout-note').textContent='서로 다른 두 영웅을 선택하세요.';return;}
      const skillIds=[document.getElementById('equip-choice').value,document.getElementById('equip-two-choice').value].filter(Boolean);
      if(new Set(skillIds).size!==skillIds.length)return;
      const skins=Object.fromEntries([['hero-one','skin-one'],['hero-two','skin-two']].map(([hero,skin])=>[document.getElementById(hero).value,document.getElementById(skin).value]).filter(([hero,skin])=>hero&&skin));
      const config={stageId:this.pending.stageId,heroIds:ids,skillIds,skins,season:document.getElementById('season-choice').value,support:document.getElementById('support-choice').checked};
      this.dialog.close();this.onStart(config);
    };
  }
  open(config) {
    this.pending={...config};document.getElementById('hero-one').value=config.heroIds[0];document.getElementById('hero-two').value=config.heroIds[1]??'';
    for(const id of ['skin-one','skin-two'])delete document.getElementById(id).dataset.hero;
    const skills=normalizeBattleSkills(config);document.getElementById('equip-choice').value=skills[0];document.getElementById('equip-two-choice').value=skills[1]??'';document.getElementById('season-choice').value=config.season;document.getElementById('support-choice').checked=config.support;
    this.render();this.dialog.showModal();
  }
  render() {
    for(const [heroId,skinId]of [['hero-one','skin-one'],['hero-two','skin-two']]){
      const hero=document.getElementById(heroId).value,select=document.getElementById(skinId);
      if(select.dataset.hero!==hero){
        select.replaceChildren(new Option('기본 의상',''));for(const skin of SKINS[hero]??[])select.add(new Option(skin.name,skin.id));
        select.value=this.pending.skins?.[hero]??'';select.dataset.hero=hero;
      }
      select.disabled=!hero;
    }
    const stage=STAGE_BY_ID[this.pending.stageId]??STAGES[0],theme=seasonFor(stage,document.getElementById('season-choice').value),progress=loadProgress();
    for(const b of this.dialog.querySelectorAll('.stage-card')) {
      b.setAttribute('aria-pressed',String(b.dataset.stage===stage.id));b.querySelector('em').textContent=progress[b.dataset.stage]?'★'.repeat(progress[b.dataset.stage]):'';
    }
    document.getElementById('stage-preview').innerHTML=miniMap(stage,theme);
    document.getElementById('stage-preview-name').textContent=stage.name;document.getElementById('stage-preview-meta').textContent=`${theme.name} · ${stage.date} · ${stage.waves.length}파도`;
    document.getElementById('stage-preview-desc').textContent=stage.desc;
    document.getElementById('stage-start').textContent=`${stage.name} 출정 →`;
    const a=document.getElementById('hero-one').value,b=document.getElementById('hero-two').value,first=document.getElementById('equip-choice').value,second=document.getElementById('equip-two-choice').value;
    const error=a===b?'서로 다른 두 영웅을 선택하세요.':first===second?'서로 다른 두 비기를 선택하세요.':'';
    document.getElementById('stage-start').disabled=!!error;
    document.getElementById('loadout-note').textContent=error||(b?`합격기 · ${findCombo(a,b).name} · 공명 100, 두 영웅 거리 5칸 이내`:'혼자 출정 · 합격기는 영웅 둘이 필요합니다.');
    const levels=campaignSupport(stage.id);
    document.getElementById('support-note').textContent=document.getElementById('support-choice').checked?`출정 지원 · 영웅 영구강화 ${levels.hero} · 비기 ${levels.skill} · 유산 복원 ${levels.tower} · 기존 캠페인 권장 성장치`:'출정 지원 없음 · 영구강화 0으로 도전합니다.';
  }
}
export function createTowerLibrary(onSelect,cost) {
  const dialog=document.getElementById('library-dialog'),grid=document.getElementById('library-grid');
  for(const id of TOWER_ORDER) {
    const def=TOWERS[id],button=document.createElement('button');button.type='button';button.className='library-card';button.dataset.type=id;
    const icon=document.createElement('span');icon.className='atlas-icon';atlasStyle(icon,'towers',id);button.append(icon);
    const text=document.createElement('span');text.innerHTML=`<b>${def.name}</b><small>${def.title}</small><em></em>`;button.append(text);
    const p=document.createElement('p');p.textContent=def.desc;button.append(p);
    button.onclick=()=>{dialog.close();onSelect(id);};grid.append(button);
  }
  document.getElementById('library-close').onclick=()=>dialog.close();
  return ()=>{for(const b of grid.children)b.querySelector('em').textContent=`${cost(b.dataset.type)}냥`;dialog.showModal();};
}
