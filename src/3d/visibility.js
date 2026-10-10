import * as T from 'three';

const ray=new T.Raycaster(),sample=new T.Vector3(),projected=new T.Vector3(),ndc=new T.Vector2();

export function heroOccluded(hero,roots,camera) {
  if(!roots.length)return false;
  // Cast from the camera toward torso/head samples, including orthographic views.
  for(const height of [.9,1.55]) {
    sample.set(hero.x,height,hero.y);projected.copy(sample).project(camera);ndc.set(projected.x,projected.y);
    ray.setFromCamera(ndc,camera);ray.far=Math.max(0,ray.ray.origin.distanceTo(sample)-.05);
    if(ray.intersectObjects(roots,true).some(hit=>{
      const materials=Array.isArray(hit.object.material)?hit.object.material:[hit.object.material];
      return hit.object.visible&&materials.some(m=>m.visible&&(!m.transparent||m.opacity>=.9));
    }))return true;
  }
  return false;
}

// Only draw fragments hidden behind opaque geometry. Child meshes inherit every
// joint animation, while commands, picking and the hero's logical position stay unchanged.
export function attachHeroSilhouette(root) {
  if(root.userData.silhouetteMeshes)return;
  const originals=[];root.traverse(o=>{if(o.isMesh)originals.push(o);});
  const mat=new T.MeshBasicMaterial({color:'#83c8ec',transparent:true,opacity:.55,depthTest:true,depthFunc:T.GreaterDepth,depthWrite:false,toneMapped:false});
  mat.userData.owned3d=true;
  root.userData.silhouetteMaterial=mat;
  root.userData.silhouetteMeshes=originals.map(o=>{
    const hint=new T.Mesh(o.geometry,mat);hint.visible=false;hint.renderOrder=30;
    hint.raycast=()=>{};hint.userData.heroSilhouette=true;o.add(hint);return hint;
  });
}

export function updateHeroSilhouette(root,hero,towers,{camera,models}={}) {
  const nearby=towers.filter(t=>Math.hypot((t.cx??t.x+.5)-hero.x,(t.cy??t.y+.5)-hero.y)<3);
  const visible=!hero.dead&&!!camera&&heroOccluded(hero,nearby.map(t=>models?.get(t.id)?.root).filter(Boolean),camera);
  root.userData.silhouetteMaterial.color.set(hero.owner===1?'#efaa96':'#83c8ec');
  for(const hint of root.userData.silhouetteMeshes)hint.visible=visible;
}
