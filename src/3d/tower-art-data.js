// Explicit source-pixel boundaries follow transparent gutters, not equal rows.
// Keep asset paths literal so the standalone HTML build embeds both sheets.
export const LANDMARK_STAGE_ART={
  a:{path:'assets/3d/fixed/landmark-tiers-a-v1.webp',width:1402,height:1122,
    x:[0,287,565,841,1123,1402],y:[0,299,578,830,1122],
    types:['bosingak','cheomseong','haeinsa','seokguram']},
  b:{path:'assets/3d/fixed/landmark-tiers-b-v1.webp',width:1402,height:1122,
    x:[0,284,567,846,1124,1402],y:[0,312,579,806,1122],
    types:['gyeongbok','namhansan','seokbinggo','bulguksa']},
};

export function landmarkFrame(type,tier,branch) {
  for(const [sheet,layout] of Object.entries(LANDMARK_STAGE_ART)) {
    const row=layout.types.indexOf(type);
    if(row>=0)return {sheet,index:row*5+(tier===4?(branch==='B'?4:3):tier-1)};
  }
  return null;
}
