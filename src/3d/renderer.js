import * as T from 'three';
import { WinterWorld } from './world.js';
import { battleView, selectedEntity } from './view.js';
import { abilityTarget } from './targeting.js';
import { TowerLabels } from './tower-labels.js';
import { STAGE_BY_ID } from '../data/stages.js';
import { getMap, T_BUILD } from '../sim/map.js';
import { combatStatus } from './combat-status.js';
import { paintBattleEvent } from './battle-events.js';

// The full game owns commands, rewards, audio and networking. This adapter only paints.
export class Renderer3D {
  static is3d = true;
  constructor(canvas, { overlay, onTowerSelect, onBuild } = {}) {
    this.canvas = canvas; this.overlay = overlay; this.onTowerSelect = onTowerSelect; this.onBuild=onBuild;
    this.fx = { showDamage: true, shakeLevel: 1 }; this.pending = []; this.health = new Map(); this.numbers = [];
    this.frames=0;this.fpsAt=performance.now();
  }
  setup(stageId, opts = {}) {
    this.world = new WinterWorld(this.canvas, STAGE_BY_ID[stageId], 'auto', {heroLooks:opts.heroLooks});
    this.world.quality(opts.quality !== 'low');
    if (opts.mood === 'bright') {
      this.world.hemi.intensity = 1.9; this.world.renderer.toneMappingExposure *= 1.12;
    }
    this.labelLayer = document.createElement('div'); this.labelLayer.className = 'battle-tower-labels';
    this.damageLayer = document.createElement('div'); this.damageLayer.className = 'battle-damage';
    this.statusLayer=document.createElement('div');this.statusLayer.className='battle-status';this.statuses=new Map();
    this.overlay.append(this.labelLayer, this.damageLayer, this.statusLayer);
    this.loadingLayer=document.createElement('div');this.loadingLayer.className='battle-loading';this.loadingLayer.setAttribute('role','status');this.loadingLayer.textContent='전장 그림을 준비하고 있습니다…';this.overlay.append(this.loadingLayer);
    const season=this.overlay.querySelector('.battle-season');
    if(season)season.textContent=`${this.world.theme.name} · ${STAGE_BY_ID[stageId].name}`;
    this.labels = new TowerLabels(this.labelLayer, id => this.onTowerSelect?.(id));
    this.buildLayer=document.createElement('div');this.buildLayer.className='battle-build-sites';this.buildLayer.hidden=true;this.overlay.prepend(this.buildLayer);
    this.sites=[];const map=getMap(stageId);
    for(let y=0;y<map.h;y++)for(let x=0;x<map.w;x++)if(map.grid[y*map.w+x]===T_BUILD){
      const button=document.createElement('button');button.className='build-site';button.title='이곳에 유산 건설';button.setAttribute('aria-label',`건설 터 ${x+1}, ${y+1}`);
      button.dataset.gridX=x;button.dataset.gridY=y;button.addEventListener('click',()=>this.onBuild?.(x,y));this.buildLayer.append(button);this.sites.push({x,y,button});
    }
    this.p2 = new T.Mesh(new T.RingGeometry(.4, .46, 32), new T.MeshBasicMaterial({ color: '#ee8c77', side: T.DoubleSide, depthWrite: false }));
    this.p2.rotation.x = -Math.PI / 2; this.p2.visible = false; this.world.scene.add(this.p2);
    this.p2Preview = new T.Mesh(new T.PlaneGeometry(.92, .92), new T.MeshBasicMaterial({ color: '#ee8c77', transparent: true, opacity: .32, side: T.DoubleSide, depthWrite: false }));
    this.p2Preview.rotation.x = -Math.PI / 2; this.p2Preview.visible = false; this.world.scene.add(this.p2Preview);
  }
  events(list) { this.pending.push(...list); }
  prepareView(view) { this.world.prepareHeroLooks(view.heroes); }
  get loading() { return this.world?.art?.loading === true; }
  render(view, ui, dt) {
    this.prepareView(view);
    const game = battleView(view), world = this.world, selected = selectedEntity(game, ui);
    this.loadingLayer.hidden=!this.loading;
    if(this.loading){this.loadingLayer.textContent=ui.assetWaitRemote?'전장 그림을 준비하고 있습니다…\n접속한 전투 상태를 동기화하고 있습니다.':'전장 그림을 준비하고 있습니다…';this.pending.length=0;world.draw(ui.clock,dt);return;}
    world.cueEnemies(this.pending,game.time);
    world.sync(game, game.time, view.paused ? 0 : dt * view.speed, selected);
    for (const e of this.pending) this.effect(e, game);
    this.pending.length = 0;
    const target = ui.targeting, hero = game.heroes[target?.h ?? ui.selHeroes?.[0]];
    const point = ui.aim ? new T.Vector3(ui.aim.x, 0, ui.aim.y) : null;
    const aim = target && point && (hero || target.kind === 'skill') ? abilityTarget(game, target.kind, hero, point, target.skillId) : null;
    // Supply point-item previews as well as hero/skill previews.
    const itemAim = target?.kind === 'item' && point ? { x: point.x, y: point.z, radius: ui.aim.r, color: '#a6dfb6' } : null;
    world.fx.preview(target?.kind, hero, point, aim || itemAim);
    const at = ui.buildAt || ui.hover;
    world.buildPreview(ui.placing, at ? { x: at.x, z: at.y } : null, !!ui.buildAt || ui.hoverOk);
    if (ui.moveMark && ui.moveMark !== this.lastMove) { world.markMove(ui.moveMark.x, ui.moveMark.y); this.lastMove = ui.moveMark; }
    this.p2.visible = !!ui.p2cursor;
    if (ui.p2cursor) this.p2.position.set(ui.p2cursor.x + .5, .09, ui.p2cursor.y + .5);
    this.p2Preview.visible = !!ui.p2intent?.type;
    if (ui.p2intent) this.p2Preview.position.set(ui.p2intent.x + .5, .075, ui.p2intent.y + .5);
    world.fx.update(view.paused ? 0 : dt * view.speed);
    world.draw(ui.clock, dt);
    this.labels.update(game, world, selected, target);
    this.buildLayer.hidden=!ui.showGrid||!!target||!!game.result;
    if(!this.buildLayer.hidden)for(const site of this.sites){
      const p=this.screenPoint(site.x+.5,site.y+.5);site.button.hidden=game.towers.some(t=>t.x===site.x&&t.y===site.y)||!p.visible||p.x<20||p.y<20||p.x>this.canvas.clientWidth-20||p.y>this.canvas.clientHeight-20;
      site.button.style.left=`${p.x}px`;site.button.style.top=`${p.y}px`;
    }
    this.damage(game, dt);
    this.statusMarkers(game);
    this.canvas.dataset.renderMode = '3d';
    this.canvas.dataset.geometries = world.renderer.info.memory.geometries;
    this.canvas.dataset.textures = world.renderer.info.memory.textures;
    this.frames++;
    const now=performance.now();
    if(now-this.fpsAt>=1000){this.canvas.dataset.fps=Math.round(this.frames*1000/(now-this.fpsAt));this.frames=0;this.fpsAt=now;}
    this.canvas.dataset.drawCalls=world.renderer.info.render.calls;
    this.canvas.dataset.triangles=world.renderer.info.render.triangles;
  }
  effect(e, game) {
    paintBattleEvent(this.world,e,game);
  }
  damage(game,dt) {
    const next = new Map();
    for(const e of [...game.heroes,...game.enemies,...game.summons]) {
      next.set(e.id,e.hp); const prev=this.health.get(e.id), amount=prev-e.hp;
      if(this.fx.showDamage && amount>=1 && this.numbers.length<40) {
        const el=document.createElement('span'); el.textContent=Math.round(amount);el.className=e.heroId?'friendly-hit':amount>=80?'strong-hit':'';this.damageLayer.append(el);
        this.numbers.push({el,x:e.x,y:e.y,t:0});
      }
    }
    this.health=next;
    for(let i=this.numbers.length-1;i>=0;i--) {
      const n=this.numbers[i]; n.t+=dt;
      if(n.t>.85) {n.el.remove();this.numbers.splice(i,1);continue;}
      const p=this.screenPoint(n.x,n.y,1.65+n.t*.8); n.el.hidden=!p.visible;
      n.el.style.transform=`translate(${p.x}px,${p.y}px)`; n.el.style.opacity=Math.min(1,(.85-n.t)*3);
    }
  }
  statusMarkers(game) {
    const active=new Set();
    for(const e of [...game.heroes,...game.enemies]) {
      const status=combatStatus(e);if(!status||active.size>=24)continue;
      const root=this.world.units.get(`${e.heroId?'h':'e'}${e.id}`);
      const anchor=this.world.art?.anchor(root,.18),point=anchor?this.world.project(anchor.x,anchor.y,anchor.z):this.screenPoint(e.x,e.y,e.heroId?2.05:(root?.userData.labelHeight??1.85)+.08);
      if(!point.visible||point.x<0||point.y<0||point.x>this.canvas.clientWidth||point.y>this.canvas.clientHeight)continue;
      active.add(e.id);let el=this.statuses.get(e.id);
      if(!el){el=document.createElement('span');this.statusLayer.append(el);this.statuses.set(e.id,el);}
      if(el.dataset.tone!==status.tone){el.textContent=status.text;el.dataset.tone=status.tone;}
      el.style.transform=`translate(${point.x}px,${point.y}px) translate(-50%,-100%)`;
    }
    for(const [id,el]of this.statuses)if(!active.has(id)){el.remove();this.statuses.delete(id);}
  }
  pick(x,y) { const hit=this.world.aim(x,y); return hit.point ? {x:hit.point.x,y:hit.point.z,entity:hit.entity} : null; }
  screenPoint(x,y,height=.08) { return this.world.project(x,height,y); }
  resize() { this.world?.resize(); }
  destroy() {
    if(this.destroyed)return; this.destroyed=true;
    this.labels?.clear(); this.labelLayer?.remove(); this.damageLayer?.remove();this.buildLayer?.remove();this.sites=[];
    this.statusLayer?.remove();this.statuses?.clear();this.loadingLayer?.remove();
    for(const o of [this.p2,this.p2Preview]) if(o){o.geometry.dispose();o.material.dispose();this.world?.scene.remove(o);}
    this.world?.destroy(); this.pending=[]; this.health.clear(); this.numbers=[];
  }
}
