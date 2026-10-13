import { WinterWorld } from './world.js';
import { STAGE_BY_ID } from '../data/stages.js';
import { createGame } from '../sim/sim.js';
import { spawnEnemy,addSummon,newId } from '../sim/combat.js';
import { getMap,posAt } from '../sim/map.js';
import { ENEMIES } from '../data/enemies.js';
import { FrameMetrics } from './frame-metrics.js';

let canvas=document.getElementById('review');const metrics=document.getElementById('metrics');
let world,game,lastFrame=performance.now(),spawnMs=0,sampleWindow=0,generation=0,running=false,warmup=0,setupBegan=0;
const frameMetrics=new FrameMetrics();let history=[],restoreTimer;
document.addEventListener('visibilitychange',()=>{frameMetrics.reset();lastFrame=performance.now();});
async function start(){
  const ticket=++generation;running=false;clearTimeout(restoreTimer);frameMetrics.reset();history=[];
  const all=document.getElementById('roster').value==='all',enemyKinds=all?Object.keys(ENEMIES):['ashigaru','samurai','teppo'];
  const options={illustrated:document.getElementById('art').value==='fixed',batchCrowd:document.getElementById('batch').value==='on',high:document.getElementById('quality').value==='high',count:+document.getElementById('count').value,heroLooks:[{heroId:'yi'},{heroId:'sejong'}],combatKinds:all?{enemy:enemyKinds,ally:['militia','guard','elite','monk','courier','turtle']}:undefined};
  if(world){world.destroy();const fresh=canvas.cloneNode(false);for(const key of Object.keys(fresh.dataset))delete fresh.dataset[key];canvas.replaceWith(fresh);canvas=fresh;world=null;}
  metrics.textContent='전장 그림 준비 중…';setupBegan=performance.now();document.getElementById('batch').disabled=options.illustrated;
  const localWorld=world=new WinterWorld(canvas,STAGE_BY_ID.s12,'autumn',options);localWorld.quality(options.high);
  const localGame=game=createGame({stageId:'s12',difficulty:'normal',mode:'solo',seed:1,players:[{name:'성능 검증',heroes:['yi','sejong'],skills:['singijeon','bongsu'],towers:[]}]});
  const count=options.count,map=getMap('s12');
  for(let i=0;i<count;i++){const type=enemyKinds[i%enemyKinds.length],enemy=spawnEnemy(localGame,type,i%map.paths.length,1);enemy.d=(i/count)*map.paths[enemy.path].total;}
  if(all){
    for(const [i,kind]of ['militia','guard','elite','monk'].entries())addSummon(localGame,{kind,x:7+i,y:7,anim:0});
    for(const [i,kind]of ['courier','turtle'].entries()){const p=posAt(map.paths[0],5+i*2);localGame.movers.push({id:newId(localGame),kind,path:0,d:5+i*2,speed:.6,...p});}
  }
  await localWorld.art?.promise;
  if(ticket!==generation||world!==localWorld||localWorld.destroyed)return;
  const spawnStart=performance.now();localWorld.sync(localGame,0,0,{kind:'hero',h:0});spawnMs=performance.now()-spawnStart;
  sampleWindow=0;lastFrame=performance.now();warmup=3;running=true;
  canvas.dataset.ready='false';canvas.dataset.sampleWindow='0';canvas.dataset.count=count;canvas.dataset.roster=all?'all':'basic';
  metrics.textContent=localWorld.art?.failed?'그림 로드 실패 · 모델 대체 준비 중…':'첫 화면 준비 중…';
}
function frame(now){
  if(!running||world.destroyed){requestAnimationFrame(frame);return;}
  if(world.graphics.waiting){lastFrame=now;frameMetrics.reset();metrics.textContent=world.graphics.status==='failed'?'그래픽 복구 실패':'그래픽 복구 중…';requestAnimationFrame(frame);return;}
  const dt=warmup?0:Math.min(.05,(now-lastFrame)/1000);lastFrame=now;game.time+=dt;
  const map=getMap(game.stageId);
  for(let i=0;i<game.enemies.length;i++){const e=game.enemies[i],path=map.paths[e.path];e.d=(e.d+dt*.6)%path.total;const p=posAt(path,e.d);e.x=p.x+(i%3-1)*.16;e.y=p.y;e.anim=0;e.hp=e.maxHp;}
  for(const [i,actor]of [...game.summons,...game.movers].entries()){const path=map.paths[actor.path??0],p=posAt(path,(5+i*2+game.time*.6)%path.total);actor.x=p.x+.35;actor.y=p.y;actor.dx=p.dx;actor.dy=p.dy;}
  world.sync(game,game.time,dt,{kind:'hero',h:0});world.fx.update(dt);world.draw(game.time,dt);
  const directional=[...world.units.values(),...world.scenery.values()].map(root=>root.userData.fixedImage).filter(d=>d?.directional&&d.faction!=='hero');canvas.dataset.directionalActors=String(directional.length);canvas.dataset.directionalKinds=String(new Set(directional.map(d=>d.kind)).size);
  if(warmup){warmup--;lastFrame=performance.now();if(!warmup){canvas.dataset.ready='true';canvas.dataset.setupMs=Math.round(performance.now()-setupBegan);}}
  else {
    const measured=frameMetrics.add(now,!document.hidden);
    if(measured){
      const info=world.renderer.info,memory=world.art?.characterMemory()??{};
      const sample={...measured,...memory,drawCalls:info.render.calls,textures:info.memory.textures,geometries:info.memory.geometries,spawnMs:Math.round(spawnMs),pixelRatio:world.renderer.getPixelRatio(),quality:world.highQuality?'high':'low',viewport:`${canvas.clientWidth}x${canvas.clientHeight}`,sampleWindow:++sampleWindow};
      Object.assign(canvas.dataset,Object.fromEntries(Object.entries(sample).map(([k,v])=>[k,String(v)])),{p95:String(measured.frameP95)});
      history.push(sample);history=history.slice(-20);canvas.dataset.frameHistory=JSON.stringify(history);
      metrics.textContent=`${sample.fps} fps · ${sample.drawCalls}회 그리기 · p95 ${sample.frameP95}ms · 캐릭터 캔버스 ${((memory.characterCanvasBytes??0)/1048576).toFixed(1)} MiB · 복구 ${world.graphics.recoveries}회`;
    }
  }
  requestAnimationFrame(frame);
}
for(const id of ['count','roster','batch','quality','art'])document.getElementById(id).onchange=start;
document.getElementById('restart').onclick=start;addEventListener('resize',()=>world?.resize());addEventListener('pagehide',()=>{generation++;running=false;clearTimeout(restoreTimer);world?.destroy();});start();requestAnimationFrame(frame);
document.getElementById('restore').onclick=()=>{const current=world;current.renderer.forceContextLoss();clearTimeout(restoreTimer);restoreTimer=setTimeout(()=>{if(world===current&&!current.destroyed)current.renderer.forceContextRestore();},350);};
