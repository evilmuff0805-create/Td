#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { HERO_POSE_ART } from '../src/3d/hero-pose-data.js';
import { COMBAT_POSE_ART } from '../src/3d/combat-pose-data.js';
import { SKIN_POSE_ART } from '../src/3d/skin-pose-data.js';
import { PAINTED_SURFACES } from '../src/3d/painted-surfaces.js';
import { SEASON_TREE_ART } from '../src/3d/season-tree-data.js';
import { SIGNATURE_ART } from '../src/3d/signature-data.js';
import { TACTIC_ART } from '../src/3d/tactic-data.js';
import { MENU_HERO_ART } from '../src/data/hero-menu-data.js';
import { HERO_INBETWEEN_ART } from '../src/3d/inbetween-data.js';
import { COMBAT_INBETWEEN_ART } from '../src/3d/combat-inbetween-data.js';
import { VILLAGE_PROP_ART } from '../src/3d/village-prop-data.js';
import { HERO_BUST_ART } from '../src/data/hero-bust-data.js';
import { SKIN_BUST_ART } from '../src/data/skin-bust-data.js';
import { COMBO_IMPACT_ATLAS } from '../src/3d/combo-impact-art.js';
import { COMBO_ELEMENTS } from '../src/3d/combo-element-data.js';

const html = fs.readFileSync(new URL('../dist/hoguk.html', import.meta.url), 'utf8');
const sheets = [...Object.values(HERO_POSE_ART), ...Object.values(COMBAT_POSE_ART).flatMap(Object.values), ...Object.values(SKIN_POSE_ART),...Object.values(HERO_INBETWEEN_ART),...Object.values(COMBAT_INBETWEEN_ART)];
const count = needle => { let n=0,at=0; while((at=html.indexOf(needle,at))!==-1){n++;at+=needle.length;} return n; };
assert.equal(new Set(sheets.map(s=>s.path)).size,sheets.length);
for(const sheet of sheets){
  const encoded=fs.readFileSync(new URL('../'+sheet.path,import.meta.url)).toString('base64');
  assert.equal(count('data:image/webp;base64,'+encoded),1,sheet.path+' must be embedded exactly once');
  assert.ok(!html.includes(sheet.path),sheet.path+' must not remain as an external request');
}
const rejected = ['assets/3d/fixed/units/kurushima-directions-v1.webp','assets/3d/fixed/units/shimazu-directions-v1.webp',...['yi_white','yi_gold','sejong_blue','sejong_gold'].map(id=>'assets/3d/fixed/skins/'+id+'-directions-v1.webp')];
for(const rel of rejected){
  const encoded=fs.readFileSync(new URL('../'+rel,import.meta.url)).toString('base64');
  assert.equal(count('data:image/webp;base64,'+encoded),0,rel+' rejected art must stay out of the build');
}
// Originals, rejected variants, reference crops and mechanical packing sources
// are production records. Only selected delivery WebPs are shipped.
let inbetweenArchivePngs=0;
function checkSourceArchive(directory){
  for(const entry of fs.readdirSync(directory,{withFileTypes:true})){
    const file=new URL(entry.name+(entry.isDirectory()?'/':''),directory);
    if(entry.isDirectory())checkSourceArchive(file);
    else if(entry.name.endsWith('.png')){
      const encoded=fs.readFileSync(file).toString('base64');
      assert.equal(count('data:image/png;base64,'+encoded),0,entry.name+' source art must stay out of the build');
      inbetweenArchivePngs++;
    }
  }
}
checkSourceArchive(new URL('../assets/3d/fixed/inbetweens/source/',import.meta.url));
checkSourceArchive(new URL('../assets/3d/fixed/combat-inbetweens/source/',import.meta.url));
const archiveCountBeforePortraits = inbetweenArchivePngs;
checkSourceArchive(new URL('../assets/illustrated/portraits/source/',import.meta.url));
const portraitArchivePngs = inbetweenArchivePngs - archiveCountBeforePortraits;
const archiveCountBeforeSkinPortraits = inbetweenArchivePngs;
checkSourceArchive(new URL('../assets/illustrated/portraits/skins/source/',import.meta.url));
const skinPortraitArchivePngs = inbetweenArchivePngs - archiveCountBeforeSkinPortraits;
const terrain=['ground','snow-ground','road'].map(kind=>PAINTED_SURFACES[kind]);
for(const rel of terrain){
  const encoded=fs.readFileSync(new URL('../'+rel,import.meta.url)).toString('base64');
  assert.equal(count('data:image/webp;base64,'+encoded),1,rel+' terrain must be embedded exactly once');
  assert.ok(!html.includes(rel),rel+' terrain must not remain as an external request');
}
const trees=fs.readFileSync(new URL('../'+SEASON_TREE_ART.path,import.meta.url)).toString('base64');
assert.equal(count('data:image/webp;base64,'+trees),1,'Seasonal trees must be embedded exactly once');
assert.ok(!html.includes(SEASON_TREE_ART.path));
for(const {path:rel}of Object.values(VILLAGE_PROP_ART)){
  const encoded=fs.readFileSync(new URL('../'+rel,import.meta.url)).toString('base64');
  assert.equal(count('data:image/webp;base64,'+encoded),1,rel+' village props must be embedded exactly once');
  assert.ok(!html.includes(rel));
}
for(const name of ['village-props-v1','village-props-winter-v1']){
  const rel='assets/3d/fixed/source/'+name+'.png',encoded=fs.readFileSync(new URL('../'+rel,import.meta.url)).toString('base64');
  assert.equal(count('data:image/png;base64,'+encoded),0,rel+' source record must not ship');
}
const water=fs.readFileSync(new URL('../'+PAINTED_SURFACES.water,import.meta.url)).toString('base64');
assert.equal(count('data:image/webp;base64,'+water),1,'Painted water must be embedded exactly once');
assert.ok(!html.includes(PAINTED_SURFACES.water));
const skillAtlases=[SIGNATURE_ART.path,TACTIC_ART.path,'assets/3d/art/hero-abilities-atlas-v1.webp','assets/3d/art/skills-atlas-v1.webp'];
for(const rel of skillAtlases){const encoded=fs.readFileSync(new URL('../'+rel,import.meta.url)).toString('base64');assert.equal(count('data:image/webp;base64,'+encoded),1,rel+' skill art must be embedded exactly once');assert.ok(!html.includes(rel));}
const impactEncoded=fs.readFileSync(new URL('../'+COMBO_IMPACT_ATLAS,import.meta.url)).toString('base64');
assert.equal(count('data:image/webp;base64,'+impactEncoded),1,'Combo impact animation must be embedded exactly once');assert.ok(!html.includes(COMBO_IMPACT_ATLAS));
for(const version of [1,2,3]){const rel='assets/3d/fixed/source/combo-impact-flipbook-v'+version+'.png',encoded=fs.readFileSync(new URL('../'+rel,import.meta.url)).toString('base64');assert.equal(count('data:image/png;base64,'+encoded),0,'Combo source and rejected variants must not ship');}
for(const [family,{path:rel}]of Object.entries(COMBO_ELEMENTS)){
  const encoded=fs.readFileSync(new URL('../'+rel,import.meta.url)).toString('base64');
  assert.equal(count('data:image/webp;base64,'+encoded),1,`${family} flipbook must be embedded exactly once`);assert.ok(!html.includes(rel));
  const original=fs.readFileSync(new URL(`../assets/3d/fixed/source/combo-${family}-v1.png`,import.meta.url)).toString('base64');
  assert.equal(count('data:image/png;base64,'+original),0,`${family} source archive must not ship`);
}
for(const rel of ['assets/3d/art/hero-abilities-atlas-v1.png','assets/3d/art/skills-atlas-v1.png']){const encoded=fs.readFileSync(new URL('../'+rel,import.meta.url)).toString('base64');assert.equal(count('data:image/png;base64,'+encoded),0,'Archive icon PNG must not be embedded');}
const menu=fs.readFileSync(new URL('../'+MENU_HERO_ART.path,import.meta.url)).toString('base64');
assert.equal(count('data:image/webp;base64,'+menu),1,'Approved UI poses must be embedded exactly once');
assert.ok(!html.includes(MENU_HERO_ART.path));
for(const {path:rel} of [...Object.values(HERO_BUST_ART), ...Object.values(SKIN_BUST_ART)]) {
  const encoded=fs.readFileSync(new URL('../'+rel,import.meta.url)).toString('base64');
  assert.equal(count('data:image/webp;base64,'+encoded),1,rel+' portrait must be embedded exactly once');
  assert.ok(!html.includes(rel));
}
console.log(JSON.stringify({standaloneBytes:Buffer.byteLength(html),embeddedDirectionalSheets:sheets.length,embeddedMenuSheets:1,embeddedHeroBusts:8,embeddedSkinBusts:16,skinPortraitSourcePngsEmbedded:0,skinPortraitSourcePngsChecked:skinPortraitArchivePngs,portraitSourcePngsEmbedded:0,portraitSourcePngsChecked:portraitArchivePngs,embeddedTerrainSurfaces:terrain.length,embeddedSeasonalPropSheets:1,embeddedVillagePropSheets:2,villageSourcePngsEmbedded:0,embeddedWaterSurfaces:1,embeddedSkillAtlases:skillAtlases.length,embeddedComboImpactAtlases:1,embeddedComboElementAtlases:Object.keys(COMBO_ELEMENTS).length,comboImpactSourcePngsEmbedded:0,comboElementSourcePngsEmbedded:0,eachEmbeddedExactlyOnce:true,rejectedVersionsEmbedded:0,inbetweenArchivePngsEmbedded:0,inbetweenArchivePngsChecked:archiveCountBeforePortraits},null,2));
