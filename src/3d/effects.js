import * as T from 'three';
import { YI_FAN } from '../data/heroes.js';
import { SKILLS } from '../data/skills.js';
import { PaintedEffectArt } from './effect-art.js';

const basic=(color,opacity=1)=>new T.MeshBasicMaterial({color,transparent:true,opacity,side:T.DoubleSide,depthWrite:false,blending:T.AdditiveBlending,toneMapped:false});
export function fanGeometry(range=YI_FAN.range,halfAngle=YI_FAN.halfAngle) {
  const p=[0,0,0],indices=[],segments=36;
  for(let i=0;i<=segments;i++){const a=-halfAngle+2*halfAngle*i/segments;p.push(Math.cos(a)*range,0,Math.sin(a)*range);if(i<segments)indices.push(0,i+1,i+2);}
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(p,3));geo.setIndex(indices);geo.computeVertexNormals();return geo;
}
function outline(range,halfAngle) {
  const p=[new T.Vector3(0,0,0)];
  for(let i=0;i<=36;i++){const a=-halfAngle+2*halfAngle*i/36;p.push(new T.Vector3(Math.cos(a)*range,0,Math.sin(a)*range));}
  p.push(new T.Vector3(0,0,0));return new T.BufferGeometry().setFromPoints(p);
}
function reticle(radius,color) {
  const g=new T.Group(),ring=new T.Mesh(new T.RingGeometry(radius-.035,radius,64),basic(color,.85));ring.material.blending=T.NormalBlending;ring.rotation.x=-Math.PI/2;g.add(ring);
  for(let i=0;i<4;i++){const a=i*Math.PI/2,bar=new T.Mesh(new T.PlaneGeometry(.16,.035),basic(color,.9));bar.material.blending=T.NormalBlending;bar.rotation.x=-Math.PI/2;bar.rotation.z=a;bar.position.set(Math.cos(a)*radius,0,Math.sin(a)*radius);g.add(bar);}
  return g;
}
export function impactWarning(radius,color) {
  const root=reticle(radius,color),progress=reticle(radius*.94,color);root.add(progress);root.userData.progress=progress;
  root.traverse(o=>{if(o.geometry)o.geometry.userData.owned3d=true;if(o.material)o.material.userData.owned3d=true;});return root;
}
function release(root) {
  const geos=new Set(),mats=new Set();root.traverse(o=>{if(o.geometry)geos.add(o.geometry);if(o.material)mats.add(o.material);});
  for(const g of geos)g.dispose();for(const m of mats)m.dispose();
}

export class BattleEffects {
  constructor(scene,glow,{illustrated=false}={}) {
    this.scene=scene;this.glow=glow;this.active=[];
    this.art=illustrated?new PaintedEffectArt():null;this.art?.load();
    this.fan=new T.Group();this.fan.position.y=.08;
    this.fan.add(new T.Mesh(fanGeometry(),new T.MeshBasicMaterial({color:'#339bcc',transparent:true,opacity:.23,side:T.DoubleSide,depthWrite:false,toneMapped:false})));
    this.fan.add(new T.Line(outline(YI_FAN.range,YI_FAN.halfAngle),new T.LineBasicMaterial({color:'#2589ba',transparent:true,opacity:.95,depthWrite:false,toneMapped:false})));
    this.target=reticle(SKILLS.singijeon.radius,'#d58b3e');this.target.position.y=.085;
    this.reach=reticle(1,'#82b1c6');this.reach.position.y=.065;
    this.spawns=new T.Group();for(let i=0;i<4;i++)this.spawns.add(reticle(.22,'#9ed6b1'));
    this.corridor=new T.Mesh(new T.PlaneGeometry(1,1),basic('#d8b86f',.18));this.corridor.rotation.x=-Math.PI/2;
    this.corridorRoot=new T.Group();this.corridorRoot.add(this.corridor);
    this.previewRoots=[this.fan,this.target,this.reach,this.spawns,this.corridorRoot];scene.add(...this.previewRoots);this.preview(null,null,null);
  }
  preview(kind,hero,point,aim=null) {
    this.fan.visible=kind==='heroSkill'&&hero?.heroId==='yi'&&!!point&&!hero.dead;this.target.visible=!!aim&&!aim.fan&&!aim.spawns?.length;
    this.reach.visible=!!aim?.reach;this.spawns.visible=!!aim?.spawns?.length;this.corridorRoot.visible=!!aim&&(aim.dash||aim.wall);
    if(this.fan.visible){this.fan.position.set(hero.x,.08,hero.y);this.fan.rotation.y=-Math.atan2(point.z-hero.y,point.x-hero.x);}
    if(this.target.visible){this.target.position.set(aim.x,.085,aim.y);this.target.scale.setScalar(aim.radius/SKILLS.singijeon.radius);this.target.traverse(o=>{o.material?.color.set(aim.color);});}
    if(this.reach.visible){this.reach.position.set(hero.x,.065,hero.y);this.reach.scale.setScalar(aim.reach);}
    for(let i=0;i<4;i++){const p=aim?.spawns?.[i],root=this.spawns.children[i];root.visible=!!p;if(p)root.position.set(p.x,.09,p.y);}
    if(this.corridorRoot.visible) {
      const dx=aim.x-hero.x,dy=aim.y-hero.y,d=Math.hypot(dx,dy);
      this.corridorRoot.position.set(aim.wall?aim.x:(aim.x+hero.x)/2,.08,aim.wall?aim.y:(aim.y+hero.y)/2);
      this.corridorRoot.rotation.y=aim.wall?0:-Math.atan2(dy,dx);this.corridorRoot.scale.set(aim.wall?1.34:Math.max(.01,d),1,aim.wall?.36:1.6);
    }
  }
  add(root,life,animate) {
    // Simultaneous rocket impacts stay bounded even when simulation catches up.
    if(this.active.length>=64){const old=this.active.shift();this.scene.remove(old.root);release(old.root);}
    this.scene.add(root);this.active.push({root,life,t:0,animate});
  }
  impact(x,z,r=.8,color='#ffbd76',kind='impact') {
    const root=new T.Group();root.position.set(x,.09,z);
    const paintedKind=['build','hangul','stone','light','thunder'].includes(kind)?'light':['ice','frost'].includes(kind)?'ice':['garlic','heal'].includes(kind)?'heal':kind==='flood'?'flood':'fire';
    const ring=this.art?.decal(paintedKind,1,.65)??new T.Mesh(new T.RingGeometry(.78,1,40),basic(color,.75));ring.rotation.x=-Math.PI/2;root.add(ring);
    const painted=!!ring.userData.paintedEffect;
    const halo=new T.Sprite(new T.SpriteMaterial({map:this.glow,color,transparent:true,opacity:.9,depthWrite:false,blending:T.AdditiveBlending}));halo.position.y=.15;root.add(halo);
    const n=kind==='build'?10:14,p=new Float32Array(n*3),vel=[];
    for(let i=0;i<n;i++){const a=i*2.399+x;vel.push([Math.cos(a)*r*(.7+(i%4)*.12),.6+(i%5)*.2,Math.sin(a)*r*(.7+(i%4)*.12)]);}
    const geo=new T.BufferGeometry();geo.setAttribute('position',new T.BufferAttribute(p,3));
    const sparks=new T.Points(geo,new T.PointsMaterial({color,map:this.glow,size:painted?.085:kind==='build'?.13:.16,transparent:true,depthWrite:false,blending:T.AdditiveBlending}));root.add(sparks);
    const life=kind==='build'?.9:.62;
    this.add(root,life,(t,k)=>{
      ring.scale.setScalar(r*(painted?.45+k*.65:.15+k*1.3));ring.material.opacity=(1-k)*.65;
      halo.scale.setScalar(r*(.65+Math.sin(k*Math.PI)*1.2));halo.material.opacity=Math.pow(1-k,2)*(painted?.22:.8);
      for(let i=0;i<n;i++){const v=vel[i];p[i*3]=v[0]*k;p[i*3+1]=Math.max(.02,v[1]*t-1.3*t*t);p[i*3+2]=v[2]*k;}
      geo.attributes.position.needsUpdate=true;sparks.material.opacity=1-k;
    });
  }
  volley(x,z,angle,range=YI_FAN.range,halfAngle=YI_FAN.halfAngle) {
    const root=new T.Group();root.position.set(x,.11,z);root.rotation.y=-angle;
    const fieldGeometry=fanGeometry(range,halfAngle),positions=fieldGeometry.attributes.position;
    const uv=new Float32Array(positions.count*2);for(let i=0;i<positions.count;i++){uv[i*2]=positions.getX(i)/range;uv[i*2+1]=.5-positions.getZ(i)/(range*2);}
    fieldGeometry.setAttribute('uv',new T.BufferAttribute(uv,2));
    const field=this.art?.mesh('volley',fieldGeometry,.56)??new T.Mesh(fieldGeometry,basic('#70caff',.28));root.add(field);
    const rim=new T.Line(outline(range,halfAngle),new T.LineBasicMaterial({color:'#bcf0ff',transparent:true,opacity:.9,depthWrite:false}));root.add(rim);
    const arrows=[];
    const arrowMaterial=(color,opacity)=>{const mat=basic(color,opacity);if(field.userData.paintedEffect)mat.blending=T.NormalBlending;mat.userData.baseOpacity=opacity;return mat;};
    for(let i=0;i<11;i++){
      const a=-halfAngle+i*halfAngle/5,arrow=new T.Group();arrow.rotation.y=-a;
      const shaft=new T.Mesh(new T.BoxGeometry(.42,.023,.023),arrowMaterial(field.userData.paintedEffect?'#dec69e':'#b7ebff',.9));arrow.add(shaft);
      const tip=new T.Mesh(new T.ConeGeometry(.07,.2,4),arrowMaterial(field.userData.paintedEffect?'#d5e3e8':'#e6faff',.95));tip.rotation.z=-Math.PI/2;tip.position.x=.27;arrow.add(tip);
      const tail=new T.Mesh(new T.PlaneGeometry(.7,.045),arrowMaterial(field.userData.paintedEffect?'#aac8d9':'#5fbcff',field.userData.paintedEffect?.28:.6));tail.rotation.x=-Math.PI/2;tail.position.x=-.32;arrow.add(tail);
      root.add(arrow);arrows.push({arrow,a});
    }
    this.add(root,.85,(t,k)=>{
      const travel=Math.min(1,t/.52)*range;
      for(const {arrow,a} of arrows){arrow.position.set(Math.cos(a)*travel,.65+Math.sin(k*Math.PI)*.24,Math.sin(a)*travel);arrow.traverse(o=>{if(o.material)o.material.opacity=Math.max(0,1-k)*o.material.userData.baseOpacity;});}
      field.material.opacity=(1-k)*(field.userData.paintedEffect?.56:.22);rim.material.opacity=(1-k)*(field.userData.paintedEffect?.45:.8);
    });
  }
  barrage(x,z) {
    const root=reticle(SKILLS.singijeon.radius,'#ffb268');root.position.set(x,.09,z);
    this.add(root,1.5,(_,k)=>{root.rotation.y=k*.35;root.traverse(o=>{if(o.material)o.material.opacity=(1-k)*.8;});});
  }
  line(x1,z1,x2,z2,color='#e9d5a6',life=.18,lightning=false,startHeight=.8,endHeight=.8) {
    const points=[];for(let i=0;i<=8;i++){const k=i/8;points.push(new T.Vector3(x1+(x2-x1)*k, startHeight+(endHeight-startHeight)*k+(lightning&&i>0&&i<8?Math.sin(i*8)*.17:0),z1+(z2-z1)*k+(lightning&&i>0&&i<8?Math.sin(i*3)*.1:0)));}
    const root=new T.Line(new T.BufferGeometry().setFromPoints(points),new T.LineBasicMaterial({color,transparent:true,opacity:.95,depthWrite:false,toneMapped:false}));
    this.add(root,life,(_,k)=>{root.material.opacity=1-k;});
  }
  thunder(x,z,r=.7) {
    const points=[];for(let i=0;i<=10;i++)points.push(new T.Vector3(x+(i===10?0:Math.sin(i*5.7)*.22),4.5*(1-i/10),z+(i===10?0:Math.cos(i*4.1)*.15)));
    const root=new T.Line(new T.BufferGeometry().setFromPoints(points),new T.LineBasicMaterial({color:'#d9f2ff',transparent:true,opacity:1,depthWrite:false,toneMapped:false}));
    this.add(root,.45,(_,k)=>{root.material.opacity=(1-k)*(Math.sin(k*45)>.2?.4:1);});this.impact(x,z,r,'#a5d9fa','thunder');
  }
  spell(kind,x,z,r=1,angle=0) {
    const root=new T.Group();root.position.set(x,.08,z);const parts=[];
    if(kind==='slash')root.renderOrder=4;
    const color=kind==='flood'?'#93d8e8':kind==='heal'?'#9edfb4':'#f2d792';
    for(let i=0;i<(this.art?.ready||kind==='slash'?1:3);i++) {
      const arc=this.art?.decal(['flood','heal','slash'].includes(kind)?kind:'light',1,.65)??new T.Mesh(new T.RingGeometry(.91,1,48,1,kind==='slash'?-.8:0,kind==='slash'?1.6:Math.PI*2),basic(color,kind==='slash'?.8:.32));
      // A short contact stroke crosses the victim's painted body; terrain
      // effects remain depth-tested, while the stroke stays below health bars.
      if(kind==='slash'){arc.material.depthTest=false;arc.renderOrder=4;}
      arc.rotation.x=-Math.PI/2;arc.rotation.z=angle;root.add(arc);parts.push(arc);
    }
    if(kind==='smite') {
      const pillar=new T.Mesh(new T.CylinderGeometry(.035,.18,3,10,1,true),basic(color,.45));pillar.position.y=1.5;root.add(pillar);parts.push(pillar);
    }
    if(kind==='heal')for(const y of [.25,.55,.85]) {
      const cross=new T.Group();cross.position.y=y;
      cross.add(new T.Mesh(new T.BoxGeometry(.25,.055,.035),basic(color,.75)),new T.Mesh(new T.BoxGeometry(.055,.25,.035),basic(color,.75)));root.add(cross);
      parts.push(cross);
    }
    if(kind==='hangul')for(let i=0;i<12;i++) {
      const a=i*2.399,rad=r*(.25+(i%4)*.18),points=[];
      const strokes=i%3===0?[[-.10,.12,.10,.12],[.10,.12,.10,-.12]]:i%3===1?[[-.10,.12,-.10,-.12],[-.10,-.12,.10,-.12]]:[[-.10,.12,.10,.12],[.10,.12,.10,-.12],[.10,-.12,-.10,-.12],[-.10,-.12,-.10,.12]];
      for(const [x1,y1,x2,y2]of strokes)points.push(new T.Vector3(x1,y1,0),new T.Vector3(x2,y2,0));
      const glyph=new T.LineSegments(new T.BufferGeometry().setFromPoints(points),new T.LineBasicMaterial({color:i%2?'#f0d49a':'#a6dce6',transparent:true,opacity:.9,depthWrite:false,toneMapped:false}));
      glyph.position.set(Math.cos(a)*rad,1.3+(i%4)*.19,Math.sin(a)*rad);glyph.rotation.y=a;glyph.userData.startY=glyph.position.y;root.add(glyph);parts.push(glyph);
    }
    const life=kind==='flood'?1.2:kind==='hangul'?1.1:kind==='heal'?1:.55;
    for(const part of parts)if(!part.isLineSegments)part.userData.startY=part.position.y;
    this.add(root,life,(_,k)=>{
      for(let i=0;i<parts.length;i++) {
        const part=parts[i];
        if(part.userData.paintedEffect){part.scale.setScalar(r*(kind==='slash'?.85+k*.15:.58+k*.42));part.position.y=kind==='slash'?.6:.015;part.material.opacity=(1-k)*(kind==='flood'?.64:.72);}
        else if(part.geometry?.type==='RingGeometry'){part.scale.setScalar(r*Math.min(1.06,.14+k*1.08+i*.12));part.position.y=kind==='flood'?.04+Math.sin(k*Math.PI)*i*.075:kind==='slash'?.4:0;part.material.opacity=(1-k)*(kind==='slash'?.85:.30);}
        else if(part.isLineSegments){part.position.y=part.userData.startY*(1-k)+.08;part.material.opacity=Math.sin(k*Math.PI)*.9;}
        else {part.position.y=part.userData.startY+k*(kind==='heal'?.65:.12);part.traverse(o=>{if(o.material)o.material.opacity=(1-k)*.65;});}
      }
    });
  }
  combo(event,game) {
    const root=new T.Group();root.position.set(event.x,.1,event.y);
    const painted=this.art?.decal('combo',.95,.7);if(painted)root.add(painted);
    const shape=new T.Shape(),r=.72;shape.absarc(0,0,r,0,Math.PI,false);shape.absarc(-r/2,0,r/2,Math.PI,0,true);shape.absarc(r/2,0,r/2,Math.PI,Math.PI*2,false);shape.closePath();
    for(const [i,color] of (painted?[]:['#ed876c','#75bfe9']).entries()) {
      const part=new T.Mesh(new T.ShapeGeometry(shape,24),basic(color,.7));part.rotation.x=-Math.PI/2;part.rotation.z=i*Math.PI;root.add(part);
    }
    const rim=reticle(1.18,'#eacb8b');root.add(rim);
    this.add(root,1.7,(_,k)=>{root.scale.setScalar(.6+k*.9);root.rotation.y=k*.65;root.traverse(o=>{if(o.material)o.material.opacity=(1-k)*(painted?.6:.75);});});
    const [a,b]=game.heroes;this.line(a.x,a.y,b.x,b.y,'#ecdc9b',.7,true);
    for(const h of game.heroes)this.impact(h.x,h.y,.75,event.id==='dangun_sejong'?'#a1dfad':'#e7d99e',event.id==='dangun_sejong'?'heal':'build');
    if(['gwon_yi','eulji_gang','ahn_sejong','generic'].includes(event.id))for(const e of game.enemies.slice(0,20))
      this.impact(e.x,e.y,.7,event.id==='eulji_gang'?'#91d6ec':event.id==='gwon_yi'?'#f0ba78':'#d6d6fa',event.id==='eulji_gang'?'flood':event.id==='gwon_yi'?'fire':'light');
  }
  update(dt) {
    for(let i=this.active.length-1;i>=0;i--){const e=this.active[i];e.t+=dt;const k=Math.min(1,e.t/e.life);e.animate(e.t,k);if(k>=1){this.scene.remove(e.root);release(e.root);this.active.splice(i,1);}}
  }
  reset(){for(const e of this.active){this.scene.remove(e.root);release(e.root);}this.active=[];this.preview(null,null,null);}
  zone(kind,radius) {
    const root=new T.Group(),color=kind==='ice'?'#a5cddd':'#d5a066',painted=this.art?.decal(kind==='ice'?'ice':'fire',radius,.52);
    root.userData.paintedZone=!!painted;root.userData.zoneKind=kind;
    const disc=painted??new T.Mesh(new T.CircleGeometry(radius,48),basic(color,.14));disc.rotation.x=-Math.PI/2;disc.material.blending=T.NormalBlending;root.add(disc);root.userData.disc=disc;
    const edge=reticle(radius,color);root.add(edge);root.userData.edge=edge;
    const n=8,positions=new Float32Array(n*3);
    for(let i=0;i<n;i++){const a=i*2.399;positions.set([Math.cos(a)*radius*.72,.12+(i%3)*.08,Math.sin(a)*radius*.72],i*3);}
    const geo=new T.BufferGeometry();geo.setAttribute('position',new T.BufferAttribute(positions,3));
    const motes=new T.Points(geo,new T.PointsMaterial({map:this.glow,color,size:.09,transparent:true,opacity:.55,depthWrite:false,blending:T.AdditiveBlending}));root.add(motes);root.userData.motes=motes;
    root.traverse(o=>{if(o.geometry)o.geometry.userData.owned3d=true;if(o.material)o.material.userData.owned3d=true;});return root;
  }
  updateZone(root,zone,time) {
    const fade=Math.min(1,Math.max(0,zone.t)/.45),painted=root.userData.paintedZone;
    root.userData.disc.material.opacity=fade*(painted?.46+Math.sin(time*2)*.035:.14);
    root.userData.disc.rotation.z=time*(zone.kind==='ice'?-.035:.065);
    root.userData.edge.traverse(o=>{if(o.material)o.material.opacity=fade*.24;});
    root.userData.motes.position.y=Math.sin(time*2)*.05;root.userData.motes.material.opacity=fade*.4;
  }
  destroy(){this.reset();for(const root of this.previewRoots){this.scene.remove(root);release(root);}this.previewRoots=[];this.art?.dispose();}
}
