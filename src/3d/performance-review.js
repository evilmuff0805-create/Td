import { WinterWorld } from './world.js';
import { STAGE_BY_ID } from '../data/stages.js';
import { createGame } from '../sim/sim.js';
import { spawnEnemy } from '../sim/combat.js';
import { getMap,posAt } from '../sim/map.js';

let canvas=document.getElementById('review');const metrics=document.getElementById('metrics');
let world,game,frames=0,last=performance.now(),lastFrame=last,samples=[],spawnMs=0,sampleWindow=0,generation=0,running=false,warmup=0,setupBegan=0;
async function start(){
  const ticket=++generation;running=false;
  const options={illustrated:document.getElementById('art').value==='fixed',batchCrowd:document.getElementById('batch').value==='on',high:document.getElementById('quality').value==='high',count:+document.getElementById('count').value};
  if(world){world.destroy();const fresh=canvas.cloneNode(false);for(const key of Object.keys(fresh.dataset))delete fresh.dataset[key];canvas.replaceWith(fresh);canvas=fresh;world=null;}
  metrics.textContent='전장 그림 준비 중…';setupBegan=performance.now();document.getElementById('batch').disabled=options.illustrated;
  const localWorld=world=new WinterWorld(canvas,STAGE_BY_ID.s12,'autumn',options);localWorld.quality(options.high);
  const localGame=game=createGame({stageId:'s12',difficulty:'normal',mode:'solo',seed:1,players:[{name:'성능 검증',heroes:['yi','sejong'],skills:['singijeon','bongsu'],towers:[]}]});
  const count=options.count,map=getMap('s12');
  for(let i=0;i<count;i++){const type=['ashigaru','samurai','teppo'][i%3],enemy=spawnEnemy(game,type,i%map.paths.length,1);enemy.d=(i/count)*map.paths[enemy.path].total;}
  await localWorld.art?.promise;
  if(ticket!==generation||world!==localWorld||localWorld.destroyed)return;
  const spawnStart=performance.now();localWorld.sync(localGame,0,0,{kind:'hero',h:0});spawnMs=performance.now()-spawnStart;
  frames=0;samples=[];sampleWindow=0;last=lastFrame=performance.now();warmup=3;running=true;
  canvas.dataset.ready='false';canvas.dataset.sampleWindow='0';canvas.dataset.count=count;
  metrics.textContent=localWorld.art?.failed?'그림 로드 실패 · 모델 대체 준비 중…':'첫 화면 준비 중…';
}
function frame(now){
  if(!running||world.destroyed){requestAnimationFrame(frame);return;}
  const dt=warmup?0:Math.min(.05,(now-lastFrame)/1000);if(!warmup)samples.push(now-lastFrame);lastFrame=now;game.time+=dt;
  const map=getMap(game.stageId);
  for(let i=0;i<game.enemies.length;i++){const e=game.enemies[i],path=map.paths[e.path];e.d=(e.d+dt*.6)%path.total;const p=posAt(path,e.d);e.x=p.x+(i%3-1)*.16;e.y=p.y;e.anim=0;e.hp=e.maxHp;}
  world.sync(game,game.time,dt,{kind:'hero',h:0});world.fx.update(dt);world.draw(game.time,dt);frames++;
  if(warmup){warmup--;frames=0;samples=[];last=lastFrame=performance.now();if(!warmup){canvas.dataset.ready='true';canvas.dataset.setupMs=Math.round(performance.now()-setupBegan);}}
  else if(now-last>=1000){const info=world.renderer.info,ordered=samples.slice().sort((a,b)=>a-b);metrics.textContent=`${world.art?.failed?'모델 대체 · ':''}${Math.round(frames*1000/(now-last))} fps · ${info.render.calls}회 그리기 · ${Math.round(info.render.triangles/1000)}k 삼각형 · p95 ${Math.round(ordered[Math.floor(ordered.length*.95)]??0)}ms · 병력 구성 ${Math.round(spawnMs)}ms`;canvas.dataset.drawCalls=info.render.calls;canvas.dataset.geometries=info.memory.geometries;canvas.dataset.fps=Math.round(frames*1000/(now-last));canvas.dataset.p95=Math.round(ordered[Math.floor(ordered.length*.95)]??0);canvas.dataset.spawnMs=Math.round(spawnMs);canvas.dataset.sampleWindow=++sampleWindow;frames=0;samples=[];last=now;}
  requestAnimationFrame(frame);
}
for(const id of ['count','batch','quality','art'])document.getElementById(id).onchange=start;
document.getElementById('restart').onclick=start;addEventListener('resize',()=>world?.resize());addEventListener('pagehide',()=>{generation++;running=false;world?.destroy();});start();requestAnimationFrame(frame);
