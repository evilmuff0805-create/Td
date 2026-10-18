import {Session as NetworkSession} from '../src/game/session.js';
import assert from 'node:assert/strict';
import { writeFileSync } from 'node:fs';
import { TowerLabels } from '../src/3d/tower-labels.js';
import { layoutTowerLabels } from '../src/3d/label-layout.js';
import { BattleEffects } from '../src/3d/effects.js';
import { audio } from '../src/audio/audio.js';
import { createGame, applyCommand, DT } from '../src/sim/sim.js';
import { HERO_ORDER } from '../src/data/heroes.js';
import { SKILL_ORDER } from '../src/data/skills.js';
import { SimulationSession as Session } from './session-fixtures.mjs';
import { GameUI } from '../src/ui/hud.js';
import { loadProfile } from '../src/meta/profile.js';
import { settingsScreen } from '../src/ui/screens-menu.js';

const results=[];
function test(name,fn){fn();results.push({name,passed:true});console.log(`  ✔ ${name}`);}
const memory=new Map();
const canvas=new Proxy({}, {get:(_,key)=>key==='createLinearGradient'||key==='createRadialGradient'?()=>({addColorStop(){}}):()=>{}});
class Element {
  constructor(tag){this.tagName=tag.toUpperCase();this.children=[];this.attributes=new Map();this.dataset={};this.style={};this.events=new Map();this.className='';this._text='';
    this.classList={contains:k=>this.className.split(' ').includes(k),toggle:(k,on)=>{const s=new Set(this.className.split(' ').filter(Boolean));on??=!s.has(k);on?s.add(k):s.delete(k);this.className=[...s].join(' ');return on;}};}
  set textContent(v){this._text=String(v);this.children=[];}
  get textContent(){return this._text+this.children.map(c=>c.textContent).join('');}
  get firstChild(){return this.children[0]??null;}
  setAttribute(k,v){this.attributes.set(k,String(v));}
  getAttribute(k){return this.attributes.get(k)??null;}
  append(...els){for(const el of els){el.parent=this;this.children.push(el);}}
  appendChild(el){this.append(el);return el;}
  prepend(el){el.parent=this;this.children.unshift(el);}
  removeChild(el){this.children.splice(this.children.indexOf(el),1);el.parent=null;}
  remove(){this.parent?.removeChild(this);}
  replaceChildren(){this.children.forEach(el=>el.parent=null);this.children=[];}
  addEventListener(k,fn){this.events.set(k,fn);}
  emit(k,e={}){this.events.get(k)?.(e);}
  get offsetWidth(){return this.classList.contains('detail-open')?90:40;}
  get offsetHeight(){return this.classList.contains('detail-open')?48:20;}
  getContext(){return canvas;}
}
globalThis.Node=Element;
globalThis.document={createElement:tag=>new Element(tag),createTextNode:t=>Object.assign(new Element('#text'),{textContent:t}),body:new Element('body')};
globalThis.localStorage={getItem:k=>memory.get(k)??null,setItem:(k,v)=>memory.set(k,String(v))};
globalThis.window={addEventListener(){},removeEventListener(){},devicePixelRatio:1,matchMedia:()=>({matches:true})};
globalThis.innerWidth=1280;globalThis.innerHeight=720;
globalThis.requestAnimationFrame=()=>1;globalThis.cancelAnimationFrame=()=>{};
function fixture(count=12){
  const game={stageId:'s1',towers:Array.from({length:count},(_,i)=>({id:i+1,type:'sungnyemun',level:1,cx:195+i%3*8,cy:110+Math.floor(i/3)*8}))};
  const world={renderer:{domElement:{clientWidth:414,clientHeight:500}},towers:new Map(),project:(x,_height,y)=>({x,y,visible:true})};
  const selected=[],container=new Element('div'),labels=new TowerLabels(container,id=>selected.push(id));
  return {game,world,labels,container,selected};
}
function anchored(f){
  for(const t of f.game.towers){const at=f.labels.positions.get(t.id);if(!at)continue;assert.equal(at.x,t.cx);assert.equal(at.y,t.cy+22);assert.equal(at.top,t.cy+2);}
  assert.ok(!walk(f.container).some(el=>el.className==='tower-label-leader'),'No displaced marker leaders');
}
const spec=(hero='yi',skill='singijeon')=>({heroes:[hero],skills:[skill],towers:['sungnyemun']});
function coop(hero='yi',skill='singijeon'){
  const game=createGame({stageId:'s1',mode:'local',seed:7,courier:false,players:[spec(hero,skill),spec('sejong',skill)]});
  game.heroes.forEach(h=>{h.skillCd=h.ultCd=0;});game.players.forEach(p=>p.skills.forEach(s=>s.cd=0));return game;
}
const cues=events=>events.filter(e=>e.k==='abilityCue'&&e.sound);
const walk=el=>[el,...el.children.flatMap(walk)];

test('건물 아래 점 4개는 단계 1·2·3·최종 A/B를 채우고 이름·특화 접근성 설명을 보존',()=>{
  const f=fixture(5);f.game.towers.forEach((t,i)=>{t.level=Math.min(3,i+1);if(i>2)t.branch=i===3?'A':'B';});
  f.world.art={anchor(){throw new Error('Stage dots must follow the base, not the roof.');}};
  f.world.towers.set(1,{root:{position:{y:.03},userData:{labelHeight:99}}});
  f.labels.update(f.game,f.world);assert.deepEqual([...f.labels.items.values()].map(i=>i.pips.children.filter(p=>p.classList.contains('filled')).length),[1,2,3,4,4]);
  for(const [id,item] of f.labels.items){assert.equal(item.pips.children.length,4);assert.equal(item.expanded,false);assert.match(item.button.getAttribute('aria-label'),/숭례문/);assert.equal(item.button.getAttribute('aria-expanded'),'false');assert.ok(f.labels.positions.get(id).top>=f.game.towers[id-1].cy+2);}
  assert.equal(f.labels.items.get(4).button.dataset.branch,'A');assert.equal(f.labels.items.get(5).button.dataset.branch,'B');
  assert.match(f.labels.items.get(4).button.getAttribute('aria-label'),/특화 A.*최대 단계/);
  assert.equal(f.labels.items.get(5).pips.children.filter(p=>p.classList.contains('filled')).length,4);
  const winter=fixture(1);winter.game.stageId='winter3d';winter.game.towers[0].level=3;winter.labels.update(winter.game,winter.world);
  assert.equal(winter.labels.items.get(1).pips.children.filter(p=>p.classList.contains('filled')).length,3);assert.equal(winter.labels.items.get(1).pips.children[3].classList.contains('unavailable'),true);assert.equal(winter.labels.items.get(1).button.classList.contains('max-tier'),true);
});

test('12개 밀집 건물도 모바일·데스크톱에서 단계 점을 각 건물 바로 아래에 고정',()=>{
  for(const [width,height,insets] of [[414,500,{}],[1280,560,{}],[414,896,{top:73,bottom:306}]]){
    const f=fixture();f.world.renderer.domElement={clientWidth:width,clientHeight:height};f.labels.getInsets=()=>insets;
    f.labels.update(f.game,f.world);anchored(f);
    const compactArea=[...f.labels.items.values()].reduce((n,i)=>n+i.width*i.height,0);assert.ok(compactArea<12*90*48*.2);
    const before=structuredClone([...f.labels.positions]);f.labels.update(f.game,f.world,{kind:'tower',id:9});anchored(f);assert.deepEqual([...f.labels.positions],before);
    assert.equal(f.labels.items.get(9).expanded,true);assert.equal([...f.labels.items.values()].filter(i=>i.expanded).length,1);
  }
});

test('이름 설명을 열거나 건물이 이동해도 점은 건물 바로 아래를 따라가며 연결선이 없음',()=>{
  const f=fixture();f.labels.update(f.game,f.world,{kind:'tower',id:1});
  const before=f.labels.positions.get(12),item=f.labels.items.get(12);item.button.emit('pointerenter');
  f.labels.update(f.game,f.world,{kind:'tower',id:1});const after=f.labels.positions.get(12);
  assert.deepEqual(after,before);anchored(f);
  f.game.towers[11].cx=375;f.labels.update(f.game,f.world,{kind:'tower',id:1});
  assert.equal(f.labels.positions.get(12).x,375);anchored(f);assert.equal(item.leader,undefined);
  item.button.emit('pointerleave');f.labels.update(f.game,f.world,{kind:'tower',id:1});assert.equal(item.expanded,false);
});

test('키보드 초점·화면 크기 변경·조준 종료가 단계 설명과 클릭 대상을 보존',()=>{
  const f=fixture();f.labels.update(f.game,f.world);const item=f.labels.items.get(7);item.button.emit('focus');f.labels.update(f.game,f.world);
  assert.equal(item.expanded,true);assert.equal(item.button.getAttribute('aria-pressed'),'false');
  f.world.renderer.domElement.clientWidth=360;f.labels.update(f.game,f.world);anchored(f);
  f.labels.update(f.game,f.world,{kind:'tower',id:7},{kind:'skill'});assert.equal(item.expanded,false);assert.equal(item.button.tabIndex,-1);
  f.labels.update(f.game,f.world,{kind:'tower',id:7});assert.equal(item.expanded,true);assert.equal(item.button.tabIndex,0);
  item.button.emit('blur');item.button.emit('click');assert.deepEqual(f.selected,[7]);
  f.labels.update(f.game,f.world);assert.equal(item.expanded,false);
});

test('화면 밖·철거·승패·종료는 유령 배지나 선택 상태를 남기지 않음',()=>{
  const f=fixture(2);f.labels.update(f.game,f.world);f.game.result={win:true};f.game.towers[1].cx=-50;f.labels.update(f.game,f.world);
  assert.equal(f.labels.items.get(1).button.disabled,true);assert.equal(f.labels.items.get(2).button.hidden,true);
  f.game.towers.pop();f.labels.update(f.game,f.world);assert.equal(f.labels.items.size,1);assert.equal(f.container.children.length,1);
  f.labels.clear();assert.equal(f.container.children.length,0);assert.equal(f.labels.positions,null);assert.equal(f.labels.layoutKey,null);
  f.game.result=null;f.labels.update(f.game,f.world);assert.equal(f.labels.items.get(1).button.getAttribute('aria-pressed'),'false');
});

test('임시 무음 URL은 저장된 볼륨을 수정하지 않고 이후 슬라이더보다 우선',()=>{
  const preferences={sfx:.55,bgm:.4},before=JSON.stringify(preferences),stored=[...memory];
  audio.configure('?mute=1&sound=effects',preferences.sfx,preferences.bgm);assert.equal(audio.sfxVol,0);assert.equal(audio.bgmVol,0);
  audio.setVolumes(1,1);assert.equal(audio.sfxVol,0);assert.equal(audio.bgmVol,0);
  assert.equal(JSON.stringify(preferences),before);assert.deepEqual([...memory],stored);
});

test('효과음 전용 URL은 처음에만 기존 0 설정을 복구하고 수동 0과 정상 설정은 존중',()=>{
  audio.configure('?sound=effects',0,.4);assert.equal(audio.sfxVol,.7);assert.equal(audio.bgmVol,0);
  audio.setVolumes(0,0);assert.equal(audio.sfxVol,0);audio.configure('',.3,.4);assert.equal(audio.sfxVol,.3);assert.equal(audio.bgmVol,.4);
  audio.setVolumes(NaN,Infinity);assert.equal(audio.sfxVol,0);assert.equal(audio.bgmVol,0);
});

test('실제 WebAudio 발동음은 유효한 짧은 소리를 효과음 채널로만 보내며 동시 발동을 생략하지 않음',()=>{
  const nodes=[],parameter=()=>({value:0,setValueAtTime(v,t){assert.ok(Number.isFinite(v)&&v>0&&Number.isFinite(t));},exponentialRampToValueAtTime(v,t){assert.ok(Number.isFinite(v)&&v>0&&Number.isFinite(t));}});
  const node=kind=>{const n={kind,gain:parameter(),frequency:parameter(),Q:{value:0},targets:[],connect(v){this.targets.push(v);},start(t){assert.ok(t>=0);this.started=true;},stop(t){assert.ok(t>=0);}};nodes.push(n);return n;};
  class Context {constructor(){this.sampleRate=8000;this.currentTime=1;this.state='running';this.destination={};}createGain(){return node('gain');}createOscillator(){return node('osc');}createBufferSource(){return node('noise');}createBiquadFilter(){return node('filter');}createBuffer(_c,len){return{getChannelData:()=>new Float32Array(len)};}}
  window.AudioContext=Context;audio.init();audio.configure('?sound=effects',.7,0);
  const begin=nodes.length;for(const kind of ['heroSkill','heroSkill','heroUlt','skill'])audio.playActivation(kind);
  const made=nodes.slice(begin);assert.equal(made.filter(n=>n.started).length,12);assert.equal(made.filter(n=>n.targets.includes(audio.sfx)).length,12);
  assert.ok(made.every(n=>!n.targets.includes(audio.bgm)));const end=nodes.length;audio.playActivation('invalid');audio.configure('?mute=1');audio.playActivation('heroSkill');assert.equal(nodes.length,end);
});

test('영웅 8명 기술·궁극기는 성공마다 한 번, 재사용·사망·다른 소유자 명령에는 발동음 없음',()=>{
  for(const id of HERO_ORDER)for(const kind of ['heroSkill','heroUlt']){
    const game=coop(id),cmd={t:kind,p:0,h:0,x:5.5,y:4.5};applyCommand(game,cmd);
    assert.deepEqual(cues(game.events),[{k:'abilityCue',sound:kind,p:0,caster:game.heroes[0].id,points:[]}]);
    game.events=[];applyCommand(game,cmd);assert.equal(cues(game.events).length,0);
    game.heroes[0].skillCd=game.heroes[0].ultCd=0;applyCommand(game,{...cmd,p:1});assert.equal(cues(game.events).length,0);
    game.heroes[0].dead=true;applyCommand(game,cmd);assert.equal(cues(game.events).length,0);
  }
});

test('장착 비기 8종과 전원 사망 중 봉수·군량도 성공 한 번만 발동음을 전달',()=>{
  for(const id of SKILL_ORDER){const game=coop('yi',id);if(['bongsu','gunryang'].includes(id))game.heroes.forEach(h=>h.dead=true);
    const cmd={t:'skill',p:1,slot:0,x:5.5,y:4.5};applyCommand(game,cmd);assert.deepEqual(cues(game.events),[{k:'abilityCue',sound:'skill',p:1,slot:0,points:[]}]);
    game.events=[];applyCommand(game,cmd);applyCommand(game,{...cmd,slot:99});assert.equal(cues(game.events).length,0);
  }
});

test('두 소유자 시뮬레이션 동시 기술은 각각 한 번 전달하고 독립 군자금·재사용·소유권을 보존',()=>{
  const session=new Session({kind:'local',stageId:'s1',difficulty:'normal',seed:7,specs:[spec('yi'),spec('sejong')]});session.setPaused(true);
  const gold=session.state.players.map(p=>p.gold);session.state.heroes.forEach(h=>h.skillCd=0);
  session.send({t:'heroSkill',p:0,h:0,x:5,y:5});session.send({t:'heroSkill',p:1,h:1,x:6,y:5});
  assert.deepEqual(cues(session.update(DT)).map(e=>e.p),[0,1]);assert.deepEqual(session.state.players.map(p=>p.gold),gold);assert.equal(session.state.time,0);
  assert.equal(session.update(DT).length,0);session.state.heroes[0].skillCd=0;session.send({t:'heroSkill',p:1,h:0,x:5,y:5});assert.equal(cues(session.update(DT)).length,0);session.destroy();
});

test('온라인 JSON 전달과 실제 HUD 이벤트 소비는 두 사람 발동음을 중복하지 않음',()=>{
  const endpoint=()=>({handlers:new Map(),on(k,f){this.handlers.set(k,f);return()=>this.handlers.delete(k);},send(m){this.peer.handlers.get(m.t)?.(JSON.parse(JSON.stringify(m)));}});
  const hn=endpoint(),gn=endpoint();hn.peer=gn;gn.peer=hn;
  const host=new NetworkSession({kind:'host',stageId:'s1',difficulty:'normal',seed:7,specs:[spec('yi'),spec('sejong')],net:hn}),guest=new NetworkSession({kind:'guest',stageId:'s1',difficulty:'normal',net:gn});
  host.setPaused(true);host.state.heroes.forEach(h=>h.skillCd=0);host.send({t:'heroSkill',p:0,h:0,x:5,y:5});guest.send({t:'heroSkill',p:0,h:1,x:6,y:5});host.lastSnap=-1e9;
  const sent=host.update(DT),received=guest.update(DT);assert.deepEqual(cues(received),cues(sent));assert.deepEqual(cues(received).map(e=>e.p),[0,1]);
  const oldActivation=audio.playActivation,oldPlay=audio.play,played=[],oldSounds=[];audio.playActivation=k=>played.push(k);audio.play=k=>oldSounds.push(k);
  try {const ui={s:guest};GameUI.prototype.handleEvents.call(ui,[...received,{k:'sfx',n:'ui'}]);GameUI.prototype.handleEvents.call(ui,guest.update(DT));assert.deepEqual(played,['heroSkill','heroSkill']);assert.ok(oldSounds.includes('ui'));}
  finally {audio.playActivation=oldActivation;audio.play=oldPlay;host.destroy();guest.destroy();}
});

test('소리 전용 빈 좌표는 추가 효과를 그리지 않고 기존 시각 효과는 정상 처리',()=>{
  let signatures=0,rings=0;const fx={signature(){signatures++;return false;},spell(){rings++;}};
  BattleEffects.prototype.heroCue.call(fx,{k:'abilityCue',sound:'heroSkill',points:[]});assert.equal(signatures,0);assert.equal(rings,0);
  BattleEffects.prototype.heroCue.call(fx,{k:'abilityCue',motif:'gwon-ult',points:[{x:5,y:4}]});assert.equal(signatures,1);assert.equal(rings,1);
});

test('온라인 전투 종료에 실은 마지막 발동음을 다음 정기 스냅샷에서 재전송하지 않음',()=>{
  const packets=[],net={on(){return()=>{};},send:p=>packets.push(JSON.parse(JSON.stringify(p)))};
  const host=new NetworkSession({kind:'host',stageId:'s1',difficulty:'normal',seed:7,specs:[spec('yi'),spec('sejong')],net});
  host.setPaused(true);host.state.heroes[0].skillCd=0;host.lastSnap=performance.now()+1e6;
  host.send({t:'heroSkill',p:0,h:0,x:5,y:5});assert.equal(cues(host.update(DT)).length,1);assert.equal(cues(host.netEvents).length,1);
  host.state.result={win:true};host.announceEnd();assert.equal(cues(packets.find(p=>p.t==='finish').s.ev).length,1);
  assert.equal(host.netEvents.length,0);host.terminalCached=true;host.lastSnap=-1e9;host.update(DT);assert.equal(cues(packets.filter(p=>p.t==='snap').at(-1).s.ev).length,0);host.destroy();
});

test('설정 UI는 효과음 전용 볼륨을 표시하고 편집한 값만 저장하며 음악 끄기 버튼을 제공',()=>{
  const profile=loadProfile();profile.settings.sfx=0;profile.settings.bgm=.35;audio.configure('?sound=effects',0,.35);
  const navigations=[],app={profile,go:k=>navigations.push(k)},screen=settingsScreen(app),all=walk(screen),sfx=all.find(e=>e.getAttribute('id')==='sfx'),bgm=all.find(e=>e.getAttribute('id')==='bgm');
  assert.equal(sfx.getAttribute('value'),'0.7');assert.equal(bgm.getAttribute('value'),'0');
  sfx.emit('input',{target:{value:'0'}});assert.equal(audio.sfxVol,0);assert.equal(audio.bgmVol,0);assert.equal(profile.settings.bgm,.35);
  const button=all.find(e=>e.tagName==='BUTTON'&&e.textContent==='배경음 끄고 효과음 켜기');button.emit('click');assert.equal(profile.settings.sfx,.7);assert.equal(profile.settings.bgm,0);assert.deepEqual(navigations,['settings']);
  const saved=JSON.parse(memory.get('hoguk.profile.v1'));assert.equal(saved.settings.sfx,.7);assert.equal(saved.settings.bgm,0);
  audio.configure('?mute=1',.7,.35);const muted=walk(settingsScreen(app));assert.ok(muted.find(e=>e.tagName==='BUTTON'&&e.textContent===button.textContent).attributes.has('disabled'));assert.ok(muted.some(e=>e.getAttribute('href')==='?sound=effects'));
});

writeFileSync(new URL('../docs/TOWER_DOTS_RUNTIME_VALIDATION.json',import.meta.url),JSON.stringify({date:'2026-10-11',tests:results.length,allPassed:true,results},null,2)+'\n');
console.log(`\n전장 표시·발동음 점검 ${results.length}개 통과`);
