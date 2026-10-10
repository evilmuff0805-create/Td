import assert from 'node:assert/strict';
import { Session } from '../src/game/session.js';
import { defaultProfile, loadProfile, playerSpec, applyBattle, stageUnlocked, diffUnlocked, campaignFirstClearCoins } from '../src/meta/profile.js';
import { STAGES, DIFF_ORDER } from '../src/data/stages.js';
import { createGame, step, queueCommand } from '../src/sim/sim.js';
import { createBot, botThink, botSkills } from '../src/sim/ai.js';
import { SnapshotEncoder, emptyView, applySnapshot } from '../src/sim/snapshot.js';
import { towerDisplayStats } from '../src/3d/tower-visuals.js';
import { battleView, selectedEntity } from '../src/3d/view.js';
import { combatantModel } from '../src/3d/combat-models.js';
import { MAT } from '../src/3d/models.js';
import { SKINS } from '../src/data/skins.js';
import { GameUI } from '../src/ui/hud.js';
import { audio } from '../src/audio/audio.js';
import * as T from 'three';
import { attachHeroSilhouette, updateHeroSilhouette, heroOccluded } from '../src/3d/visibility.js';
import { getMap } from '../src/sim/map.js';
import { Net } from '../src/net/net.js';
import { layoutTowerLabels } from '../src/3d/label-layout.js';
import { combatStatus } from '../src/3d/combat-status.js';

const memory=new Map();
globalThis.localStorage={getItem:k=>memory.get(k)??null,setItem:(k,v)=>memory.set(k,String(v))};
let passed=0;
function test(name,fn){fn();passed++;console.log(`  ✔ ${name}`);}
const spec=(p=defaultProfile(),heroes=['yi','sejong'])=>playerSpec(p,heroes,['singijeon','bongsu'],'검증');

test('유산 단계 배지는 좁은 화면·상단 지붕·밀집 배치에서 선택을 보존하고 서로 겹치지 않음',()=>{
  for(const [width,height,insets] of [[414,500,{}],[1280,560,{}],[414,896,{top:73,bottom:306}]]) {
    const labels=Array.from({length:12},(_,id)=>({id,x:width/2+id%3*8,y:40+Math.floor(id/3)*7,width:70+(id%2)*12,height:44,selected:id===9}));
    const positions=layoutTowerLabels(labels,width,height,insets),rects=[...positions.values()].filter(Boolean);
    assert.equal(rects.length,labels.length);assert.ok(positions.get(9));
    for(let i=0;i<rects.length;i++){
      const a=rects[i];assert.ok(a.left>=6&&a.right<=width-6&&a.top>=(insets.top??6)&&a.bottom<=height-(insets.bottom??6));
      for(const b of rects.slice(i+1))assert.ok(a.right+5.9<=b.left||b.right+5.9<=a.left||a.bottom+5.9<=b.top||b.bottom+5.9<=a.top,'클릭 영역까지 겹치면 안 됨');
    }
    const selected=layoutTowerLabels([labels[9]],width,height,insets).get(9);assert.deepEqual(positions.get(9),selected,'선택한 유산을 다른 배지 때문에 밀지 않음');
  }
});

test('정식 캠페인은 프로필 편성·강화·예산으로 시작하며 미리보기 지원 유산을 주지 않음',()=>{
  const p=defaultProfile();p.heroes.yi.lv=2;p.skills.singijeon.lv=1;p.towers.sungnyemun.lv=7;p.items.insam=3;p.skins.owned.push('yi_gold');p.skins.eq.yi='yi_gold';
  const session=new Session({kind:'solo',stageId:'s1',difficulty:'normal',seed:123,specs:[spec(p)]});
  assert.equal(session.state.towers.length,0);assert.equal(session.state.players[0].gold,STAGES[0].startGold);
  assert.equal(session.state.players[0].towerLv.sungnyemun,7);assert.equal(session.state.players[0].skills[0].lv,1);
  assert.equal(session.state.heroes[0].skin,'yi_gold');assert.equal(session.state.players[0].items.insam,2);
  session.setPaused(true);session.send({t:'build',p:0,x:13,y:6,tower:'sungnyemun'});session.update(1/60);
  assert.equal(session.state.towers.length,1);assert.ok(session.state.players[0].gold<240);assert.equal(session.state.time,0);
  session.destroy();
});

test('온라인 압축 상태의 특화 유산·배율·투사체를 3D 표시로 복원하고 원본은 보존',()=>{
  const s=createGame({stageId:'s1',difficulty:'normal',mode:'solo',seed:1,players:[spec()]});
  queueCommand(s,{t:'build',p:0,x:13,y:6,tower:'sungnyemun'});step(s);const t=s.towers[0];
  t.level=3;t.branch='A';t.dmgMult=1.74;t.asMult=1.21;t.rangeMult=1.32;
  s.projectiles.push({id:999,kind:'bigshell',mode:'drop',x:5,y:5,k:.3,hit:{single:true,r:.8},src:{kind:'tower',ref:t},target:777});
  s.projectiles.push({id:1000,kind:'arrow',mode:'homing',x:6,y:5,src:{kind:'hero',ref:s.heroes[0]},target:777,chained:true});
  const view=emptyView({stageId:'s1',difficulty:'normal'});
  assert.equal(selectedEntity(view,{selHeroes:[0]}),null);
  const packet=JSON.parse(JSON.stringify(new SnapshotEncoder().encode(s,[{k:'shot',caster:s.heroes[0].id,x1:1,y1:2,x2:3,y2:4}])));
  applySnapshot(view,packet);
  const rendered=battleView(view),rt=rendered.towers[0];
  assert.equal(rt.cx,13.5);assert.equal(rt.cy,6.5);assert.equal(view.towers[0].cx,undefined);
  assert.equal(rt.branch,'A');assert.equal(rt.dmgMult,1.74);assert.equal(rt.asMult,1.21);
  const stats=towerDisplayStats(rt,rendered);assert.ok(Number.isFinite(stats.dmg));assert.ok(Number.isFinite(stats.range));
  assert.equal(view.projectiles[0].hit.single,true);assert.equal(view.projectiles[0].src.id,t.id);assert.equal(view.projectiles[0].target,777);
  assert.deepEqual(view.projectiles[1].src,{kind:'hero',id:s.heroes[0].id});assert.equal(view.projectiles[1].chained,true);
  assert.equal(packet.ev[0].caster,s.heroes[0].id);assert.equal(s.projectiles[1].src.ref,s.heroes[0]);
  const legacy={...packet,pr:packet.pr.map(p=>p.slice(0,15))};applySnapshot(view,legacy);
  assert.equal(view.projectiles[0].src.id,t.id);assert.equal(view.projectiles[1].src,undefined);assert.equal(view.projectiles[1].chained,false);
});

test('GameUI의 그림 대기는 자동 출정·수동 출정을 멈추고 게스트 동기화는 유지한다',()=>{
  const session=new Session({kind:'solo',stageId:'s1',difficulty:'normal',seed:2,specs:[spec()]});
  const ui=Object.assign(Object.create(GameUI.prototype),{s:session,renderer:{loading:true,events(){},render(){}},ui:{clock:0},bottom:{},last:0,solo:true,local:false,selHero:0,hintTimer:100,handleEvents(){},drawXray(){},updateHud(){}});
  const before=session.state.wave.timer,raf=globalThis.requestAnimationFrame;globalThis.requestAnimationFrame=()=>1;
  try {
    ui.callWave();assert.equal(session.state.cmds.length,0);
    for(let i=1;i<=400;i++)ui.frame(i*100);
    assert.equal(session.state.time,0);assert.equal(session.state.wave.timer,before);assert.equal(ui.bottom.inert,true);
    session.send({t:'nextWave',p:0});session.update(.1,{waitingForRenderer:true});assert.equal(session.state.wave.phase,'prep');
    ui.renderer.loading=false;ui.frame(40100);assert.equal(ui.bottom.inert,false);assert.equal(session.state.wave.phase,'spawn');assert.ok(session.state.time>0);
  } finally {globalThis.requestAnimationFrame=raf;session.destroy();}
  const handlers=new Map(),net={on(k,fn){handlers.set(k,fn);return()=>handlers.delete(k);},send(){}};
  const guest=new Session({kind:'guest',stageId:'s1',difficulty:'normal',net});
  const state=createGame({stageId:'s1',difficulty:'normal',mode:'solo',seed:2,players:[spec()]});
  handlers.get('snap')({s:new SnapshotEncoder().encode(state,[{k:'toast',p:1,text:'동기화'}])});
  assert.equal(guest.update(.1,{waitingForRenderer:true})[0].text,'동기화');assert.equal(guest.view.heroes.length,2);guest.destroy();
});

test('온라인 Session은 상대 영웅 이동·상대 유산 철거를 거부하고 게스트 이벤트는 한 번만 전달',()=>{
  const endpoint=()=>({handlers:new Map(),on(k,f){this.handlers.set(k,f);return()=>this.handlers.delete(k);},send(m){this.peer.handlers.get(m.t)?.(JSON.parse(JSON.stringify(m)));}});
  const hn=endpoint(),gn=endpoint();hn.peer=gn;gn.peer=hn;
  const host=new Session({kind:'host',stageId:'s1',difficulty:'normal',seed:4,specs:[spec(defaultProfile(),['yi']),spec(defaultProfile(),['sejong'])],net:hn});
  const guest=new Session({kind:'guest',stageId:'s1',difficulty:'normal',net:gn});
  host.setPaused(true);host.send({t:'build',p:0,x:13,y:6,tower:'sungnyemun'});host.lastSnap=-1e9;host.update(1/60);
  assert.equal(guest.view.heroes.length,2);const h=host.state.heroes[0],old=JSON.stringify(h);
  guest.send({t:'move',p:0,h:0,x:2,y:2});guest.send({t:'sell',p:0,id:host.state.towers[0].id});host.update(1/60);
  assert.equal(JSON.stringify(h),old);assert.equal(host.state.towers.length,1);
  hn.send({t:'snap',s:new SnapshotEncoder().encode(host.state,[{k:'toast',p:1,text:'전달'}])});
  assert.equal(guest.update(1/60).filter(e=>e.text==='전달').length,1);assert.equal(guest.update(1/60).length,0);
  host.destroy();guest.destroy();assert.equal(hn.handlers.size,0);assert.equal(gn.handlers.size,0);
});

test('온라인 연결을 닫은 뒤 Session 정리를 반복해도 예외나 다음 연결의 구독 손실이 없음',()=>{
  const net=new Net(),session=new Session({kind:'host',stageId:'s1',difficulty:'normal',seed:4,specs:[spec(defaultProfile(),['yi']),spec(defaultProfile(),['sejong'])],net});
  const old=()=>{},off=net.on('cmd',old);net.close();
  let received=0;net.on('cmd',()=>received++);assert.doesNotThrow(()=>{session.destroy();session.destroy();off();off();});
  net.emit('cmd',{});assert.equal(received,1);net.close();
});

test('상점 의복 16종을 실제 3D 재질에 적용하며 공용 재질 색상을 바꾸지 않음',()=>{
  const colors=Object.values(MAT).map(m=>m.color.getHex());let count=0;
  for(const [id,skins] of Object.entries(SKINS))for(const skin of skins){
    const model=combatantModel(id,skin.id);assert.equal(model.userData.skin,skin.id);model.updateMatrixWorld(true);
    let owned=0;model.traverse(o=>{assert.ok(o.matrixWorld.elements.every(Number.isFinite));if(o.isMesh&&o.material.userData.owned3d)owned++;});assert.ok(owned>0);count++;
  }
  assert.equal(count,16);assert.deepEqual(Object.values(MAT).map(m=>m.color.getHex()),colors);
});

test('3D 오른쪽 회전·두 손가락 확대·취소·화면 종료가 영웅 이동이나 유령 클릭을 남기지 않음',()=>{
  const original={window:globalThis.window,document:globalThis.document,setTimeout,clearTimeout,ctx:audio.ctx};
  const timers=new Map(),handlers=new Map();let seq=0,moves=0,clicks=0;
  globalThis.window={addEventListener(){}};globalThis.document={addEventListener(){}};audio.ctx={state:'running'};
  globalThis.setTimeout=fn=>{timers.set(++seq,fn);return seq;};globalThis.clearTimeout=id=>timers.delete(id);
  try {
    const ui={is3d:true,cv:{addEventListener:(k,f)=>handlers.set(k,f)},renderer:{pick:()=>({x:5,y:5})},ui:{},canBuildAt:()=>true,moveHeroTo:()=>moves++,leftClick:()=>clicks++,keyDown(){},p2keys:new Set()};
    GameUI.prototype.bindInput.call(ui);
    const send=(k,id,x=10,y=10,button=0)=>handlers.get(k)({pointerId:id,pointerType:'touch',clientX:x,clientY:y,button,preventDefault(){}});
    send('pointerdown',1);send('pointerdown',2);send('pointermove',1,30,30);send('pointercancel',2);
    assert.equal(timers.size,0);assert.equal(moves,0);
    send('pointerdown',3);send('pointerdown',4);send('pointerup',3);send('pointerup',4);assert.equal(clicks,0);
    send('pointerdown',5);send('pointerup',5);assert.equal(clicks,1);
    send('pointerdown',6,10,10,2);send('pointermove',6,40,10,2);send('contextmenu',6,40,10,2);send('pointerup',6,40,10,2);assert.equal(moves,0);
    send('pointerdown',7);ui.cancelPress();assert.equal(timers.size,0);
  }finally{globalThis.window=original.window;globalThis.document=original.document;globalThis.setTimeout=original.setTimeout;globalThis.clearTimeout=original.clearTimeout;audio.ctx=original.ctx;}
});

test('건물에 가려진 영웅 실루엣은 관절·지오메트리를 공유하고 소유권·사망을 반영',()=>{
  const root=combatantModel('sejong');const originals=[];root.traverse(o=>{if(o.isMesh)originals.push(o);});
  attachHeroSilhouette(root);attachHeroSilhouette(root);
  const hints=root.userData.silhouetteMeshes;assert.equal(hints.length,originals.length);
  hints.forEach((hint,i)=>{assert.equal(hint.geometry,originals[i].geometry);assert.equal(hint.parent,originals[i]);assert.equal(hint.material.depthFunc,T.GreaterDepth);assert.equal(hint.material.depthWrite,false);});
  const building=new T.Mesh(new T.BoxGeometry(6,4,4),new T.MeshBasicMaterial());building.position.set(4.5,2,5.5);building.updateMatrixWorld();
  const camera=new T.OrthographicCamera(-10,10,10,-10,.1,150);camera.position.set(4.5,8,18);camera.lookAt(4.5,0,5.5);camera.updateMatrixWorld();
  const hero={x:4.5,y:5.5,owner:1,dead:false},towers=[{id:9,x:4,y:5}],context={camera,models:new Map([[9,{root:building}]])};
  const update=()=>updateHeroSilhouette(root,hero,towers,context);
  update();assert.ok(hints.every(h=>h.visible));assert.equal(root.userData.silhouetteMaterial.color.getHexString(),'efaa96');
  hero.x=6.6;update();assert.ok(hints.every(h=>h.visible),'2.1칸 뒤의 높은 지붕 가림도 표시');
  hero.owner=0;update();assert.equal(root.userData.silhouetteMaterial.color.getHexString(),'83c8ec');
  hero.dead=true;update();assert.ok(hints.every(h=>!h.visible));
  hero.dead=false;hero.x=10;update();assert.ok(hints.every(h=>!h.visible));
  building.geometry.dispose();building.material.dispose();
  root.userData.silhouetteMaterial.dispose();
});

test('카메라에서 실제 건물에 가려진 영웅만 표시하며 앞·옆·투명 소품은 원래 재질을 유지',()=>{
  const building=new T.Mesh(new T.BoxGeometry(2,3,2),new T.MeshBasicMaterial());building.position.y=1.5;building.updateMatrixWorld();
  const camera=new T.OrthographicCamera(-10,10,10,-10,.1,150);camera.position.set(0,8,14);camera.lookAt(0,0,0);camera.updateMatrixWorld();
  assert.equal(heroOccluded({x:0,y:2},[building],camera),false,'건물 앞의 영웅');
  assert.equal(heroOccluded({x:0,y:-2},[building],camera),true,'건물 뒤의 영웅');
  assert.equal(heroOccluded({x:3,y:-2},[building],camera),false,'건물 옆의 영웅');
  camera.position.set(0,8,-14);camera.lookAt(0,0,0);camera.updateMatrixWorld();
  assert.equal(heroOccluded({x:0,y:2},[building],camera),true,'시점을 반대로 회전');
  building.material.transparent=true;building.material.opacity=.2;
  assert.equal(heroOccluded({x:0,y:2},[building],camera),false,'투명 소품은 가림으로 세지 않음');
  building.geometry.dispose();building.material.dispose();
});

test('측정 봇의 두 갈래 경로 배치는 숫자 ID와 각 협동 담당 경로를 사용',()=>{
  const stage=STAGES.find(st=>getMap(st.id).paths.length>1),map=getMap(stage.id);
  const s=createGame({stageId:stage.id,difficulty:'normal',mode:'coop',seed:7,players:[spec(defaultProfile(),['yi']),spec(defaultProfile(),['sejong'])]});
  for(let p=0;p<2;p++){
    const commands=[];botThink(s,createBot(s,p),c=>commands.push(c));
    const move=commands.find(c=>c.t==='move'),at=map.samples.find(sm=>sm.path===p&&sm.d>map.paths[p].total*.35);
    assert.ok(move);assert.equal(move.x,at.x+.8);assert.equal(move.y,at.y+.8);
    assert.notEqual(at.d,map.samples.find(sm=>sm.d>4).d);
  }
});

test('첫 전장 실제 승리 → 보상·품계·다음 전장·새 유산·난이도 해금 → 저장 복원',()=>{
  const p=loadProfile(),s=createGame({stageId:'s1',difficulty:'normal',mode:'solo',seed:7919,players:[spec(p)]}),bot=createBot(s,0);
  while(!s.result&&s.tick<144000){botThink(s,bot,c=>queueCommand(s,c));botSkills(s,bot,c=>queueCommand(s,c));step(s);s.events.length=0;}
  assert.ok(s.result?.win,'새 프로필의 첫 전장 기본 봇이 완주해야 함');const before=p.coins;
  const reward=applyBattle(p,{stageId:'s1',difficulty:'normal',mode:'solo',result:s.result,stats:s.players[0].stats});
  assert.ok(reward.firstClear);assert.ok(p.coins>before);assert.ok(p.stages.s1.normal>0);assert.ok(stageUnlocked(p,STAGES[1].id));assert.ok(diffUnlocked(p,'s1','hard'));assert.ok(p.towersUnlocked.includes('haeinsa'));
  const restored=loadProfile();assert.equal(restored.coins,p.coins);assert.equal(restored.stats.games,1);assert.equal(restored.stages.s1.normal,p.stages.s1.normal);
  console.log(`    신규 기록 · ${s.wave.n}파 승리 · 민심 ${s.lives}/${s.maxLives} · 엽전 +${reward.rewards.coins}`);
});

test('25전장 × 3난이도 × 솔로·로컬 편성이 올바른 실제 Session을 생성',()=>{
  let count=0;
  for(const stage of STAGES)for(const difficulty of DIFF_ORDER)for(const kind of ['solo','local']){
    const specs=kind==='solo'?[spec()]:[spec(defaultProfile(),['yi']),spec(defaultProfile(),['sejong'])];
    const session=new Session({kind,stageId:stage.id,difficulty,seed:8,specs});
    assert.equal(session.view.wave.total,stage.waves.length);assert.equal(session.view.heroes.length,2);assert.equal(session.view.coop,kind==='local');
    assert.equal(session.view.towers.length,0);assert.ok(Number.isFinite(session.view.players[0].gold));session.destroy();count++;
  }
  console.log(`    ${count}개 출전 설정 생성·정리`);
});

test('장별 첫 승리 포상은 난이도별 한 번만 지급하고 패배·반복 승리에 중복 지급하지 않음',()=>{
  const p=defaultProfile(),result={win:true,stars:3,wavesCleared:12};
  const battle=(stageId,difficulty='normal',outcome=result)=>applyBattle(p,{stageId,difficulty,mode:'solo',result:outcome,stats:{}});
  const first=battle('s1'),repeat=battle('s1');
  assert.equal(first.firstClearCoins,300);assert.equal(repeat.firstClearCoins,0);
  assert.equal(first.rewards.coins-repeat.rewards.coins,300);
  assert.equal(battle(STAGES[5].id).firstClearCoins,600);assert.equal(battle('s25').firstClearCoins,1500);
  assert.equal(battle('s1','hard').firstClearCoins,campaignFirstClearCoins('s1','hard'));
  assert.equal(battle('s1','hard').firstClearCoins,0);
  assert.equal(battle(STAGES[6].id,'normal',{win:false,stars:0,wavesCleared:4}).firstClearCoins,0);
  assert.equal(battle(STAGES[6].id).firstClearCoins,600);assert.equal(campaignFirstClearCoins('invalid'),0);
});

test('전투 상태 표시는 실제 남은 시간과 보호막을 따르며 은신·사망을 노출하지 않음',()=>{
  const e={hp:100,stunT:1,shield:50,burnT:2,slowT:3};
  assert.equal(combatStatus(e).text,'기절');e.stunT=0;assert.equal(combatStatus(e).text,'보호');
  e.shield=0;assert.equal(combatStatus(e).text,'화상');e.burnT=0;assert.equal(combatStatus(e).text,'둔화');
  e.slowT=0;assert.equal(combatStatus(e),null);e.stunT=1;e.stealth=true;assert.equal(combatStatus(e),null);
  e.revealed=true;assert.equal(combatStatus(e).text,'기절');e.dead=true;assert.equal(combatStatus(e),null);
  e.dead=false;e.hp=0;assert.equal(combatStatus(e),null);
});

test('기존 저장의 첫 승리 포상을 한 번만 소급하고 성장·별·음소거 설정을 보존',()=>{
  const old=defaultProfile();delete old.campaignBonuses;delete old.campaignBonusNotice;
  old.coins=123;old.towers.sungnyemun.lv=17;old.settings.bgm=old.settings.sfx=0;
  old.stages={s1:{normal:3,hard:2},[STAGES[5].id]:{normal:1}};
  memory.set('hoguk.profile.v1',JSON.stringify(old));
  const first=loadProfile(),coins=300+campaignFirstClearCoins('s1','hard')+600;
  assert.equal(first.coins,123+coins);assert.equal(first.campaignBonusNotice,coins);
  assert.equal(first.towers.sungnyemun.lv,17);assert.deepEqual(first.stages,old.stages);
  assert.equal(first.settings.bgm,0);assert.equal(first.settings.sfx,0);
  const again=loadProfile();assert.equal(again.coins,first.coins);assert.deepEqual(again.campaignBonuses,first.campaignBonuses);
});

console.log(`\n정식 게임 통합 점검 ${passed}개 통과`);
