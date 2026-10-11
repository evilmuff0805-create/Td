const indices={villageFence:[0,1],fieldWall:[2,3],villageCargo:[4,5]};
export const villagePropSeason=theme=>theme.snow?'winter':'temperate';
export const villagePropIndex=(kind,variation=0)=>indices[kind]?.[variation>=.5?1:0]??null;
export const villagePropFallback=kind=>kind==='villageCargo'?'supplies':kind==='villageFence'||kind==='fieldWall'?'wall':null;

// A billboard's top also projects onto XZ. Limit every actual corner, including
// off-center legacy fallbacks, rather than assuming half the image width fits.
export function fitPropFootprint(image,radius){
  if(!Number.isFinite(radius)||radius<=0)return 1;
  const positions=image.geometry.attributes.position,corner=image.position.clone();let extent=0;
  for(let i=0;i<positions.count;i++){
    corner.fromBufferAttribute(positions,i).applyQuaternion(image.quaternion);
    extent=Math.max(extent,Math.hypot(corner.x,corner.z));
  }
  const scale=extent>radius?radius/extent:1;image.scale.setScalar(scale);return scale;
}
