import * as T from 'three';
import { makeRng } from '../sim/rng.js';

// Solid leaf diamonds catch light from both sides. Open space between leaves
// lets the branches show through and breaks the old spherical crown outline.
export function foliageCluster(seed) {
  const rng=makeRng(Math.floor(seed*7919)+17),positions=[],uv=[],colors=[];
  for(let i=0;i<36;i++) {
    const a=i*2.399+seed,r=Math.sqrt((i+.5)/36)*.93;
    const center=new T.Vector3(Math.cos(a)*r,(rng()-.5)*1.15,Math.sin(a)*r);
    const yaw=rng()*Math.PI*2,pitch=(rng()-.5)*1.1,rotation=new T.Euler(pitch,yaw,(rng()-.5)*.8),length=.18+rng()*.15,width=length*(.32+rng()*.16);
    const vertices=[[0,0,length],[width,0,0],[0,0,-length],[-width,0,0],[0,.04,0],[0,-.012,0]].map(p=>new T.Vector3(...p).applyEuler(rotation).add(center));
    const shade=.74+rng()*.26;
    for(const face of [[0,1,4],[1,2,4],[2,3,4],[3,0,4],[1,0,5],[2,1,5],[3,2,5],[0,3,5]])for(const j of face) {
      const p=vertices[j];positions.push(...p.toArray());uv.push(p.x*.5+.5,p.z*.5+.5);
      const light=shade*(j===4?1:j===5?.75:.9);colors.push(light,light,light);
    }
  }
  const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geometry.setAttribute('color',new T.Float32BufferAttribute(colors,3));geometry.computeVertexNormals();return geometry;
}
