export const SEASONS = {
  spring: { name:'봄', english:'SPRING', caption:'꽃잎이 흩날리는 길목, 다시 피어나는 수호의 맹세.', sky:'#182d3b', fog:'#263d4c', ground:'#a7b9a6', road:'#ddd0b5', shore:'#929b87', water:'#365c72', leaf:['#dfa3b3','#e7c0c8','#b67e97'], grass:'#5d775b', sun:'#ffe2ba', sunPower:2.05, hemi:'#abc9e2', bounce:'#364940', fill:'#829fbf', exposure:1.02, particle:'petal', snow:false },
  summer: { name:'여름', english:'SUMMER', caption:'푸른 숲과 강을 따라, 뜨거운 진격을 막아라.', sky:'#162c38', fog:'#254151', ground:'#879e91', road:'#d1c5aa', shore:'#9a9c83', water:'#265975', leaf:['#416d43','#648a4c','#355f48'], grass:'#3e6150', sun:'#ffe8c4', sunPower:2.15, hemi:'#a6c8e6', bounce:'#293e35', fill:'#779cbe', exposure:1.03, particle:'none', snow:false },
  autumn: { name:'가을', english:'AUTUMN', caption:'붉게 물든 산하, 황혼의 방어선을 지켜라.', sky:'#292d40', fog:'#3b4056', ground:'#baa58a', road:'#dfc5a4', shore:'#a79a81', water:'#36566f', leaf:['#b65d33','#d79841','#8e4032'], grass:'#8b7953', sun:'#ffd0a0', sunPower:2.0, hemi:'#b2bdd9', bounce:'#4c3d39', fill:'#899cbf', exposure:1.01, particle:'leaf', snow:false },
  winter: { name:'겨울', english:'WINTER', caption:'푸른 눈빛 아래, 마지막 길목을 지켜라.', sky:'#102039', fog:'#1b3151', ground:'#94b0d4', road:'#7896b6', shore:'#6d88a4', water:'#223d60', leaf:['#334e55','#243b48','#526b72'], grass:'#94a7bb', sun:'#aac9ff', sunPower:1.7, hemi:'#88b0ee', bounce:'#263953', fill:'#557bb1', exposure:.96, particle:'snow', snow:true },
};
// The original "sea" tag describes a setting. Give coastal battles an actual season.
const COAST_SEASONS={s8:'spring',s9:'summer',s3:'summer',s11:'autumn',s15:'summer',s18:'autumn',s22:'winter',s23:'spring'};
export function seasonFor(stage,override='auto') {
  const id=SEASONS[override]?override:COAST_SEASONS[stage.id]??(SEASONS[stage.season]?stage.season:'summer');
  return {id,...SEASONS[id]};
}
export function stageSeed(id) {let n=1088;for(const c of id)n=(n*31+c.charCodeAt(0))>>>0;return n;}
