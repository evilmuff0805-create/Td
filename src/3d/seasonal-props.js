import { SEASON_TREE_ART } from './season-tree-data.js';

const kinds={spring:'blossom',summer:'broadleaf',autumn:'maple'};
// Retain evergreen patches among the seasonal trees rather than making every
// neighbouring tree the same species. This changes scenery only.
export function seasonalTreeKind(theme,patch=0){
  if(theme.snow)return 'snowPine';
  return patch<(theme.id==='autumn'?.85:theme.id==='spring'?.70:.66)?kinds[theme.id]??'pine':'pine';
}
export function seasonalTreeIndex(theme,kind,variation=0){
  if(theme.snow||kind!==kinds[theme.id])return null;
  return SEASON_TREE_ART.indices[theme.id]?.[variation>=.5?1:0]??null;
}
