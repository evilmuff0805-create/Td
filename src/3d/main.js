import { WinterWorld } from './world.js';
import { newBattleGame,canBuildAt,TOWER_TYPES,STAGE_ID } from './scenario.js';
import { step,applyCommand,DT } from '../sim/sim.js';
import { TOWERS,SELL_RATE } from '../data/towers.js';
import { metaCost } from '../data/quests.js';
import { STAGES,STAGE_BY_ID } from '../data/stages.js';
import { HEROES } from '../data/heroes.js';
import { SKILLS,skillDesc } from '../data/skills.js';
import { findCombo } from '../data/combos.js';
import { ENEMIES } from '../data/enemies.js';
import { getMap,T_WATER } from '../sim/map.js';
import { audio } from '../audio/audio.js';
import { loadProfile } from '../meta/profile.js';
import { towerTier,towerVisual,towerDisplayStats } from './tower-visuals.js';
import { TowerLabels } from './tower-labels.js';
import { seasonFor,SEASONS } from './seasons.js';
import { StageChooser,createTowerLibrary,atlasStyle,saveWin } from './interface.js';
import { abilityTarget,targetedCommand } from './targeting.js';
import { abilityIcon } from './ability-icons.js';
import { equippedAbility,comboView,rallyTargets } from './battle-controls.js';
import { abilityIllustration,paintAbility } from './skill-art.js';
import { paintBattleEvent } from './battle-events.js';
import { whenBattleArtReady } from './battle-art-ready.js';

const $=id=>document.getElementById(id),canvas=$('world'),query=new URLSearchParams(location.search);
let config={stageId:STAGE_BY_ID[query.get('stage')]?query.get('stage'):'s1',heroIds:['yi','gwon'],skillIds:['singijeon','hanpa'],season:SEASONS[query.get('season')]?query.get('season'):'auto',support:true};
if(config.stageId===STAGE_ID){config.heroIds=['yi'];config.skillIds=['singijeon'];}
let world,game,chooser,openLibrary,started=false,paused=false,activeHero=0,selected={kind:'hero',h:0},mode=null,hover=null;
const firingEvents=[];
let last=performance.now(),accumulator=0,clock=0,uiClock=0,frames=0,fps=0,noticeUntil=0,castUntil=0,lastCommand='준비',resultShown=false;
const towerLabels=new TowerLabels($('tower-labels'),id=>{if(!mode&&!game.result)selection({kind:'tower',id});},{insets:({height})=>({top:document.querySelector('.topbar').offsetHeight+8,bottom:height-document.querySelector('.commandbar').offsetTop+8})});
audio.setVolumes(new URLSearchParams(location.search).get('mute')==='1'?0:Math.min(.25,loadProfile().settings.sfx),0);
const hero=()=>game.heroes[activeHero],heroDef=()=>HEROES[hero().heroId],skillDef=(slot=mode?.slot??0)=>SKILLS[equippedAbility(game,slot)?.id];
const modalOpen=()=>!!document.querySelector('dialog[open]');
const cost=(type,base=TOWERS[type].levels[0].cost)=>metaCost(base,game.players[0].towerLv[type]||0);
function notice(text) {$('notice').textContent=text;$('notice').classList.add('show');noticeUntil=performance.now()+2900;}
function dispatch(command) {
  if(game.result||world.art?.loading)return false;
  const h=game.heroes[command.h??activeHero],slot=equippedAbility(game,command.slot??0),combos=game.players[0].stats.combos;
  if(command.t==='skill'&&!slot)return false;
  const prior=command.t==='heroSkill'?h.skillCd:command.t==='heroUlt'?h.ultCd:command.t==='skill'?slot.cd:undefined;
  applyCommand(game,{p:0,...command});lastCommand=command.t;
  const next=command.t==='heroSkill'?h.skillCd:command.t==='heroUlt'?h.ultCd:command.t==='skill'?slot.cd:undefined;
  if(next>prior)announceSkill(command.t,command.slot??0);
  events();updateHUD();return next>prior||game.players[0].stats.combos>combos;
}
function abilityArt(kind,slot=mode?.slot??0) {
  return abilityIllustration(kind==='skill'?equippedAbility(game,slot)?.id:hero().heroId,kind);
}
function announceSkill(kind,slot=0) {
  const def=kind==='skill'?skillDef(slot):kind==='heroUlt'?heroDef().ult:heroDef().skill,art=abilityArt(kind,slot);
  $('cast-pair').hidden=true;$('cast-banner').classList.remove('combo-cast');
  $('cast-art').hidden=!art;paintAbility($('cast-art'),art);
  $('cast-kind').textContent=kind==='skill'?'조선의 비기':`${heroDef().name} · ${kind==='heroUlt'?'궁극기':'영웅기'}`;
  $('cast-name').textContent=def.name;$('cast-description').textContent=(kind==='skill'?skillDesc(equippedAbility(game,slot).id,equippedAbility(game,slot).lv):def.desc.replace(/\{(\w+)\}/g,(_,k)=>def[k]??'')).slice(0,90);
  $('cast-banner').hidden=false;castUntil=clock+2.8;
}
function announceCombo(event) {
  const def=findCombo(event.a,event.b);$('cast-art').hidden=true;$('cast-pair').hidden=false;
  [...$('cast-pair').children].forEach((el,i)=>{const id=i?event.b:event.a;atlasStyle(el,'heroes',id,game.heroes.find(h=>h.heroId===id)?.skin);});
  $('cast-kind').textContent=`${HEROES[event.a].name} × ${HEROES[event.b].name} · 합격기`;
  $('cast-name').textContent=event.name;$('cast-description').textContent=def.desc;
  $('cast-banner').classList.add('combo-cast');$('cast-banner').hidden=false;castUntil=clock+3.6;
}
function events() {
  world.cueEnemies(game.events,game.time);
  world.cueHeroes(game.events,game);
  for(const e of game.events) {
    if(e.k==='sfx')audio.play(e.n);
    else if(e.k==='toast')notice(e.text);
    else if(e.k==='announce')notice(`${e.text}${e.sub?` · ${e.sub}`:''}`);
    else if(e.k==='boss')notice(`적장 출현 · ${ENEMIES[e.type].name}`);
    else if(e.k==='wave')notice(`${e.n} / ${game.wave.total}파도 · 방어선을 지켜라`);
    else if(e.k==='combo')announceCombo(e);
    paintBattleEvent(world,e,game,{deferShot:event=>firingEvents.push(event)});
  }
  game.events.length=0;
}
function selection(value) {if(value?.kind==='hero')activeHero=value.h??activeHero;selected=value;mode=null;world.buildPreview(null,null,false);updateHUD();}
function cycleHero(){activeHero=(activeHero+1)%game.heroes.length;selection({kind:'hero',h:activeHero});}
function chooseBuild(type) {if(game.result)return;selected=null;mode={kind:'build',type};notice(`${TOWERS[type].name} · ${cost(type)}냥 · 빈 땅을 클릭하세요`);updateHUD();}
function chooseSkill(kind,slot=0) {
  if(game.result)return;
  const h=hero(),equipped=equippedAbility(game,slot);if(kind==='skill'&&!equipped)return;
  const cd=kind==='heroSkill'?h.skillCd:kind==='heroUlt'?h.ultCd:equipped.cd;
  if(cd>0||h.dead&&kind!=='skill')return;
  if(kind==='skill'&&skillDef(slot).target==='none'||kind==='heroUlt'&&['sejong','gang','gwak','ahn','dangun'].includes(h.heroId)) {
    mode=null;dispatch({t:kind,h:activeHero,slot,x:h.x,y:h.y});return;
  }
  selected={kind:'hero',h:activeHero};mode={kind,slot};world.buildPreview(null,null,false);
  notice(`${kind==='heroSkill'?heroDef().skill.name:kind==='heroUlt'?heroDef().ult.name:skillDef(slot).name} · 전장에 시전할 곳을 클릭하세요`);updateHUD();
}
function rally() {
  if(game.result)return;const targets=rallyTargets(game);if(!targets)return;
  selection({kind:'hero',h:activeHero});targets.forEach((p,h)=>dispatch({t:'move',h,x:p.x,y:p.y}));
  world.markMove((targets[0].x+targets[1].x)/2,(targets[0].y+targets[1].y)/2);
  notice(started&&!paused?'두 영웅이 집결 지점으로 이동합니다.':'집결 명령을 내렸습니다. 전투를 진행하면 이동합니다.');
}
function chooseCombo() {
  if(game.result)return;const state=comboView(game);
  selection({kind:'hero',h:activeHero});if(!state.ok){notice(state.why);return;}dispatch({t:'combo'});
}
function beginWave() {if(world.art?.loading){notice('전장 그림을 준비하고 있습니다. 잠시만 기다려 주세요.');return;}if(game.result||game.wave.phase!=='prep')return;audio.init();started=true;paused=false;dispatch({t:'nextWave'});updateHUD();}
function pause(){if(!started||game.result)return;paused=!paused;updateHUD();}
function startBattle(nextConfig=config) {
  firingEvents.length=0;world.enemyCues.clear();
  config={...nextConfig};towerLabels.clear();game=newBattleGame(config);world.loadStage(STAGE_BY_ID[config.stageId],config.season,game.heroes);
  activeHero=0;started=false;paused=false;selected={kind:'hero',h:0};mode=null;hover=null;accumulator=0;resultShown=false;lastCommand='준비';
  if($('result-dialog').open)$('result-dialog').close();$('cast-banner').hidden=true;
  world.sync(game,0,DT,selected);world.home();updateHUD();notice(`${seasonFor(STAGE_BY_ID[config.stageId],config.season).name} · ${STAGE_BY_ID[config.stageId].name} · 출정을 준비하세요`);
  $('loading').hidden=!world.art?.loading;
  whenBattleArtReady(world,game,()=>game,()=>{world.sync(game,0,0,selected);world.home();$('loading').hidden=true;});
  const url=new URL(location.href);url.searchParams.set('stage',config.stageId);if(config.season==='auto')url.searchParams.delete('season');else url.searchParams.set('season',config.season);history.replaceState(null,'',url);
}
function towerUpgrade(branch=null) {
  const t=game.towers.find(o=>o.id===selected?.id);if(!t)return;
  const max=game.stageId===STAGE_ID?3:4;if(towerTier(t)>=max)return;
  if(t.level===3&&!branch){notice('A 또는 B 특화를 선택하세요.');return;}
  dispatch({t:'upgrade',id:t.id,...(branch?{branch}:{})});
}
function towerSell(){const id=selected?.id;if(!id)return;dispatch({t:'sell',id});selection({kind:'hero',h:activeHero});}
function iconArt(element,src,text,color,id,kind) {
  if(element.dataset.src===(src??'')&&element.dataset.text===text)return;element.dataset.src=src??'';element.dataset.text=text;element.replaceChildren();element.style.background=color;
  element.setAttribute('aria-hidden','true');
  const art=abilityIllustration(id,kind,true);paintAbility(element,art);
  if(!art){if(src){const img=document.createElement('img');img.src=src;img.alt='';element.append(img);}else element.innerHTML=abilityIcon(id,kind);}
}
function updateHUD() {
  const h=hero(),hd=heroDef(),sk=skillDef(),theme=world.theme,stage=STAGE_BY_ID[game.stageId];
  $('lives').textContent=game.lives;$('max-lives').textContent=`/ ${game.maxLives}`;$('gold').textContent=game.players[0].gold;$('wave').textContent=game.wave.n;$('max-wave').textContent=`/ ${game.wave.total}`;
  $('stage-name').textContent=stage.name;$('season-label').textContent=`${theme.english} · ${theme.name} · ${getMap(stage.id).paths.length}개 진입로`;
  $('stage-description').textContent=theme.caption;$('result-stage').textContent=stage.name;
  $('hero-name').textContent=hd.name;$('hero-health').textContent=h.dead?`회복 ${Math.ceil(h.respawn)}초`:`Lv.${h.lv} · ${Math.ceil(h.hp)} / ${Math.ceil(h.maxHp)}`;
  $('hero-partner').textContent=game.heroes.length>1?`교대 ↔ ${HEROES[game.heroes[(activeHero+1)%game.heroes.length].heroId].name}`:hd.title;atlasStyle($('hero-portrait'),'heroes',h.heroId,h.skin);
  $('hero').setAttribute('aria-label',`${hd.name}, ${$('hero-health').textContent}, ${$('hero-partner').textContent}`);
  $('hero-skill-name').textContent=hd.skill.short.replace(/\n/g,'');$('hero-ult-name').textContent=hd.ult.short;
  $('skill').title=`${hd.skill.name} · ${hd.skill.desc}`;$('ultimate').title=`${hd.ult.name} · ${hd.ult.desc}`;
  iconArt($('hero-skill-icon'),h.heroId==='yi'?'assets/3d/art/hakikjin-icon-v2.webp':null,hd.skill.short.replace(/\n/g,''),hd.color,h.heroId,'heroSkill');
  iconArt($('hero-ult-icon'),null,hd.ult.short,hd.color,h.heroId,'heroUlt');
  const cooldowns=[['skill','skill-cd',h.skillCd,hd.skill.cd,true],['ultimate','ult-cd',h.ultCd,hd.ult.cd,true]];
  for(const [slot,id,icon,name,display] of [[0,'barrage','equip-icon','equip-name','barrage-cd'],[1,'equip-two','equip-two-icon','equip-two-name','equip-two-cd']]) {
    const eq=equippedAbility(game,slot);$(id).hidden=!eq;$(id).disabled=!eq;if(!eq)continue;
    const def=SKILLS[eq.id];$(name).textContent=def.short;$(id).title=`${def.name} · ${skillDesc(eq.id,eq.lv)}`;
    iconArt($(icon),eq.id==='singijeon'?'assets/3d/art/singijeon-icon-v2.webp':null,def.short,'#654f35',eq.id,'skill');
    cooldowns.push([id,display,eq.cd,eq.max,false]);$(id).setAttribute('aria-pressed',String(mode?.kind==='skill'&&mode.slot===slot));
  }
  for(const [id,display,cd,max,needsHero] of cooldowns) {
    $(display).textContent=cd>0?`${Math.ceil(cd)}초`:'시전 가능';$(id).disabled=cd>0||needsHero&&h.dead||!!game.result;
    $(id).style.setProperty('--cooldown',Math.max(0,Math.min(1,cd/max)));$(id).classList.toggle('cooling',cd>0);
  }
  $('arrow-cost').textContent=`궁수루 · ${cost('sungnyemun')}냥`;$('cannon-cost').textContent=`포루 · ${cost('hwaseong')}냥`;
  $('next').disabled=game.wave.phase!=='prep'||!!game.result;$('wave-note').textContent=!started?'방어선을 정비하세요':paused?'일시정지 중':game.wave.phase==='prep'?`${Math.ceil(game.wave.timer)}초 뒤 자동 출정`:`남은 왜군 ${game.enemies.length+game.wave.queue.length}명`;
  $('next-label').textContent=!started?'전투 시작 →':game.wave.phase==='prep'?'다음 파도 →':'전투 중';$('pause').textContent=paused?'▶':'Ⅱ';$('pause').setAttribute('aria-label',paused?'계속':'일시정지');$('pause').disabled=!started||!!game.result;
  $('hero').setAttribute('aria-pressed',String(selected?.kind==='hero'&&!mode));$('build-arrow').setAttribute('aria-pressed',String(mode?.type==='sungnyemun'));$('build-cannon').setAttribute('aria-pressed',String(mode?.type==='hwaseong'));
  $('skill').setAttribute('aria-pressed',String(mode?.kind==='heroSkill'));$('ultimate').setAttribute('aria-pressed',String(mode?.kind==='heroUlt'));
  const combo=comboView(game);$('combo').disabled=!combo.ok||!!game.result;
  $('combo').title=combo.hasPair?`${combo.def.name} · ${combo.def.desc} · ${combo.ok?'시전 가능':combo.why}`:combo.why;
  $('combo-cd').textContent=combo.ok?'시전 가능':!combo.hasPair?'영웅 둘 필요':!combo.alive?'회복 대기':combo.charge<100?`공명 ${Math.floor(combo.charge)}%`:'집결 필요';
  $('combo').classList.toggle('combo-ready',combo.ok&&!game.result);$('combo').style.setProperty('--charge',`${combo.charge}%`);
  iconArt($('combo-icon'),null,'합격기','#243d53','taegeuk','combo');
  $('combo-name').textContent=combo.def?.name??'합격기';$('combo-charge').textContent=`공명 ${Math.floor(combo.charge)} / 100`;$('resonance').value=combo.charge;
  $('combo-status').textContent=combo.hasPair?`${combo.ok?'C · 합격기 시전 가능':combo.why} · 거리 ${combo.distance.toFixed(1)} / ${combo.range}칸`:'두 영웅을 편성하면 합격기를 사용할 수 있습니다.';
  $('rally').hidden=!combo.hasPair;$('rally').disabled=!combo.alive||!!game.result||combo.distance<1;
  $('hero-actions').hidden=selected?.kind!=='hero'||!!mode;
  const t=selected?.kind==='tower'?game.towers.find(o=>o.id===selected.id):null,max=game.stageId===STAGE_ID?3:4;
  $('selection').hidden=!(selected||mode);$('tower-actions').hidden=!t;$('tower-tier').hidden=!t;$('tower-appearance').hidden=!t;$('selection').classList.toggle('tower-selected',!!t);$('branches').hidden=!(t?.level===3&&!t.branch&&max===4);
  if(t) {
    const def=TOWERS[t.type],stats=towerDisplayStats(t,game),tier=towerTier(t),visual=towerVisual(t.type,tier,t.branch,max===4),upgradeCost=visual.cost&&cost(t.type,visual.cost);
    $('selection-kind').textContent=`유산 · ${visual.name}`;$('selection-name').textContent=def.name;
    $('selection-info').textContent=`${stats.dmg?`공격력 ${Math.round(stats.dmg)}`:stats.dps?`초당 ${Math.round(stats.dps)} 피해`:`${def.title}`} · 사거리 ${stats.range.toFixed(1)}칸 · 처치 ${t.kills}`;
    $('tier-number').textContent=`${tier} / ${max}단계`;$('tier-status').textContent=visual.isMax?`${t.branch??''} 최대 · 강화 ${visual.upgradeCount}회`:visual.status;$('tower-tier').classList.toggle('max-tier',visual.isMax);
    [...$('tier-progress').children].forEach((pip,i)=>{pip.hidden=i>=max;pip.classList.toggle('filled',i<tier);});
    $('tower-appearance').textContent=visual.next?`다음 외형 · ${visual.next}`:visual.appearance;
    $('upgrade').hidden=tier===3&&max===4;$('upgrade').textContent=upgradeCost?`${tier+1}단계 강화 · ${upgradeCost}냥`:`${max}단계 · 최대`;$('upgrade').disabled=!upgradeCost||game.players[0].gold<upgradeCost||!!game.result;
    for(const b of ['A','B']){const bd=def.branches[b],button=$(`branch-${b.toLowerCase()}`);button.textContent=`${b} · ${bd.name} · ${cost(t.type,bd.cost)}냥`;button.title=bd.desc;button.disabled=game.players[0].gold<cost(t.type,bd.cost)||!!game.result;}
    $('sell').textContent=`철거 · ${Math.floor(t.spent[0]*SELL_RATE)}냥`;
  } else if(mode?.kind==='build') {
    $('selection-kind').textContent='유산 건설';$('selection-name').textContent=TOWERS[mode.type].name;$('selection-info').textContent=`${TOWERS[mode.type].desc} · ${cost(mode.type)}냥 · 초록 땅에 건설 · Esc 취소`;
  } else {
    const def=mode?.kind==='heroSkill'?hd.skill:mode?.kind==='heroUlt'?hd.ult:mode?.kind==='skill'?sk:null;
    $('selection-kind').textContent=def?mode.kind==='skill'?'비기 · 전장에 시전':`${hd.name} · ${mode.kind==='heroUlt'?'궁극기':'영웅기'}`:`영웅 · ${hd.role}`;
    $('selection-name').textContent=def?.name??hd.name;$('selection-info').textContent=def?mode.kind==='skill'?skillDesc(equippedAbility(game,mode.slot).id,equippedAbility(game,mode.slot).lv):def.desc.replace(/\{(\w+)\}/g,(_,k)=>def[k]??''):hd.passive.desc+' · 우클릭으로 이동';
  }
  const art=abilityArt(mode?.kind);$('selection-art').hidden=!art;paintAbility($('selection-art'),art);$('selection').classList.toggle('ability-selected',!!art);document.body.dataset.aim=mode?.kind??'';
  document.body.dataset.state=game.result?game.result.win?'win':'lose':paused?'paused':started?'battle':'ready';document.body.dataset.season=theme.id;document.body.dataset.skills=game.players[0].skills.length;
  $('stats').textContent=`WebGL2 · ${fps} FPS\n${world.renderer.info.render.calls} draw calls · ${Math.round(world.renderer.info.render.triangles/1000)}k triangles\nGPU geometry ${world.renderer.info.memory.geometries} · texture ${world.renderer.info.memory.textures}\n전투 ${game.time.toFixed(1)}초 · 처치 ${game.players[0].stats.kills} · 적 ${game.enemies.length}\n유산 ${game.towers.length} · 영웅 ${game.heroes.length} · ${stage.id}\n출정 지원 ${config.support?'사용':'없음'} · ${hd.name} 영구강화 ${h.metaLv}\n최근 명령: ${lastCommand}`;
}
function clickAt(event) {
  if(game.result||modalOpen())return;
  const aim=world.aim(event.clientX,event.clientY),p=aim.point;if(!p)return;hover=p;
  const map=getMap(game.stageId),water=map.grid[Math.floor(p.z)*map.w+Math.floor(p.x)]===T_WATER;
  if(event.button===2) {
    if(water){notice('물 위에는 이동할 수 없습니다. 다리나 땅을 선택하세요.');return;}
    selection({kind:'hero',h:activeHero});dispatch({t:'move',h:activeHero,x:p.x,y:p.z});world.markMove(hero().tx,hero().ty);return;
  }
  if(mode?.kind==='build') {
    const x=Math.floor(p.x),y=Math.floor(p.z);if(!canBuildAt(game,x,y)){notice('길·건물·바위·물 위에는 지을 수 없습니다.');return;}
    const before=game.towers.length,type=mode.type;dispatch({t:'build',tower:type,x,y});if(game.towers.length>before)selection({kind:'tower',id:game.towers.at(-1).id});return;
  }
  if(mode) {const command=targetedCommand(mode.kind,activeHero,p,mode.slot);mode=null;dispatch(command);updateHUD();return;}
  if(aim.entity?.kind==='tower'){selection(aim.entity);return;}
  if(aim.entity?.kind==='hero'){selection({kind:'hero',h:game.heroes.findIndex(h=>h.id===aim.entity.id)});return;}
  if(event.pointerType==='touch'&&selected?.kind==='hero'){if(water)return;dispatch({t:'move',h:activeHero,x:p.x,y:p.z});world.markMove(hero().tx,hero().ty);return;}
  selection(null);
}
function input() {
  chooser=new StageChooser(startBattle);openLibrary=createTowerLibrary(chooseBuild,cost);
  $('stages').onclick=()=>chooser.open(config);$('library').onclick=openLibrary;$('hero').onclick=cycleHero;$('build-arrow').onclick=()=>chooseBuild(TOWER_TYPES[0]);$('build-cannon').onclick=()=>chooseBuild(TOWER_TYPES[1]);
  $('skill').onclick=()=>chooseSkill('heroSkill');$('ultimate').onclick=()=>chooseSkill('heroUlt');$('barrage').onclick=()=>chooseSkill('skill',0);$('equip-two').onclick=()=>chooseSkill('skill',1);$('combo').onclick=chooseCombo;$('rally').onclick=rally;$('next').onclick=beginWave;$('pause').onclick=pause;
  $('restart').onclick=()=>startBattle();$('again').onclick=()=>startBattle();$('upgrade').onclick=()=>towerUpgrade();$('branch-a').onclick=()=>towerUpgrade('A');$('branch-b').onclick=()=>towerUpgrade('B');$('sell').onclick=towerSell;
  $('help').onclick=()=>$('help-dialog').showModal();$('home').onclick=()=>world.home();$('rotate-left').hidden=true;$('rotate-right').hidden=true;
  $('result-stages').onclick=()=>{$('result-dialog').close();chooser.open(config);};$('continue').onclick=()=>{const next=STAGES[STAGES.findIndex(s=>s.id===config.stageId)+1];if(next)startBattle({...config,stageId:next.id,season:'auto'});};
  let high=true;$('quality').onclick=()=>{high=!high;world.quality(high);$('quality').textContent=`품질 ${high?'높음':'낮음'}`;};
  let down=null;canvas.addEventListener('pointerdown',e=>{audio.init();down={x:e.clientX,y:e.clientY,button:e.button};});
  canvas.addEventListener('pointerup',e=>{if(down&&e.button===down.button&&Math.hypot(e.clientX-down.x,e.clientY-down.y)<6)clickAt(e);down=null;});
  canvas.addEventListener('pointercancel',()=>{down=null;});canvas.addEventListener('pointermove',e=>{hover=world.aim(e.clientX,e.clientY).point;});canvas.addEventListener('pointerleave',()=>{hover=null;});canvas.addEventListener('contextmenu',e=>e.preventDefault());
  window.addEventListener('resize',()=>world.resize());document.addEventListener('visibilitychange',()=>{last=performance.now();accumulator=0;if(document.hidden&&started)paused=true;updateHUD();});
  new ResizeObserver(entries=>{document.documentElement.style.setProperty('--commandbar-height',`${entries[0].target.getBoundingClientRect().height}px`);}).observe(document.querySelector('.commandbar'));
  document.addEventListener('keydown',e=>{
    if(modalOpen()||e.repeat)return;const key=e.key.toLowerCase();if(['1','2','3','q','r','f','g','c','b','n',' ','escape'].includes(key))e.preventDefault();
    if(world.art?.loading&&key!=='escape')return;
    if(key==='1')chooseBuild(TOWER_TYPES[0]);else if(key==='2')chooseBuild(TOWER_TYPES[1]);else if(key==='3')cycleHero();else if(key==='b')openLibrary();
    else if(key==='q')chooseSkill('heroSkill');else if(key==='r')chooseSkill('heroUlt');else if(key==='f')chooseSkill('skill',0);else if(key==='g')chooseSkill('skill',1);else if(key==='c')chooseCombo();else if(key==='n')beginWave();else if(key===' ')pause();else if(key==='escape')selection(null);
  });
}
function frame(now) {
  const dt=Math.min(.1,(now-last)/1000);last=now;clock+=dt;uiClock+=dt;frames++;const modal=modalOpen();
  if(started&&!paused&&!game.result&&!modal&&!document.hidden&&!world.art?.loading){accumulator=Math.min(.2,accumulator+dt);while(accumulator>=DT){step(game);accumulator-=DT;events();}}
  world.sync(game,started?game.time:clock,paused||modal?0:dt,mode?.kind==='build'?null:selected);world.buildPreview(mode?.kind==='build'?mode.type:null,hover,hover&&canBuildAt(game,Math.floor(hover.x),Math.floor(hover.z)));
  for(const e of firingEvents)world.firingLine(e);firingEvents.length=0;
  const target=abilityTarget(game,mode?.kind,hero(),hover,equippedAbility(game,mode?.slot??0)?.id);world.fx.preview(mode?.kind,hero(),hover,target);world.fx.update(paused||modal?0:dt);world.draw(clock,dt);towerLabels.update(game,world,selected,mode);
  const label=$('entity-label'),h=selected?.kind==='hero'?hero():null;
  if(h&&!mode){
    const root=world.units.get(`h${h.id}`),anchor=world.art?.anchor(root,.14),p=anchor?world.project(anchor.x,anchor.y,anchor.z):world.project(h.x,root?.userData.labelHeight??1.85,h.y);
    label.hidden=!p.visible||h.dead||p.x<0||p.x>canvas.clientWidth||p.y<0||p.y>canvas.clientHeight;
    const name=heroDef().name;if(label.textContent!==name)label.textContent=name;
    if(!label.hidden){const margin=label.offsetWidth/2+8;label.style.left=`${Math.max(margin,Math.min(canvas.clientWidth-margin,p.x))}px`;label.style.top=`${Math.max(label.offsetHeight+8,p.y)}px`;}
  }else label.hidden=true;
  if(uiClock>.5){fps=Math.round(frames/uiClock);frames=0;uiClock=0;updateHUD();}if(now>noticeUntil)$('notice').classList.remove('show');if(clock>castUntil)$('cast-banner').hidden=true;
  if(game.result&&!resultShown) {
    resultShown=true;if(game.result.win)saveWin(game);$('result-title').textContent=game.result.win?'방어선을 지켜냈습니다':'성문이 함락되었습니다';
    $('result-info').textContent=`${game.wave.n} / ${game.wave.total}파도 · 처치 ${game.players[0].stats.kills} · 성문 ${game.lives} / ${game.maxLives}`;
    const next=STAGES[STAGES.findIndex(s=>s.id===config.stageId)+1];$('continue').hidden=!game.result.win||!next;if(next)$('continue').textContent=`다음 · ${next.name} →`;
    $('result-dialog').showModal();updateHUD();
  }
  requestAnimationFrame(frame);
}
try {
  game=newBattleGame(config);world=new WinterWorld(canvas,STAGE_BY_ID[config.stageId],config.season,{heroLooks:game.heroes});input();world.sync(game,0,DT,selected);world.home();world.draw(0,0);document.body.dataset.renderer='webgl2';
  whenBattleArtReady(world,game,()=>game,()=>{world.sync(game,0,0,selected);world.home();$('loading').hidden=true;last=performance.now();});
  updateHUD();last=performance.now();requestAnimationFrame(frame);
} catch(error) {
  console.error(error);$('loading').querySelector('h2').textContent='3D 전장을 열 수 없습니다';$('loading').querySelector('p').textContent=/WebGL|context/i.test(error.message)?'WebGL2를 지원하는 브라우저와 그래픽 가속이 필요합니다. 브라우저 설정을 확인한 뒤 새로고침하세요.':'전장을 준비하는 중 오류가 발생했습니다. 새로고침 후 다시 시도하세요.';
  const a=document.createElement('a');a.href='index.html';a.textContent='진영으로 돌아가기';$('loading').firstElementChild.append(a);
}
