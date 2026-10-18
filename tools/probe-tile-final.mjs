// A fixed, genuinely earned entry profile. This diagnoses tactics; it does not
// invent a campaign clear or grant levels to the product's profile.
import fs from 'node:fs';
import {Session} from '../src/game/session.js';
import {playerSpec} from '../src/meta/profile.js';
import {preparedSender,preparedRelocation} from './prepared-campaign-policy.mjs';
import {finalCampaignTactics} from './campaign-tactics.mjs';
import {getMap} from '../src/sim/map.js';
const input=JSON.parse(fs.readFileSync('docs/TILE_BOARD_SHOP_PROGRESSION.json','utf8')),results=[];
for(const run of input.runs){
  const entry=run.battleLog.find(b=>b.stage==='s25');if(!entry)continue;
  for(const plan of ['holy','fresh','nam'])for(const buildPlacement of ['coverage','exit']){
    const p=structuredClone(run.finalProfile);
    for(const kind of ['heroes','skills','towers'])for(const [id,lv]of Object.entries(entry.before[kind]))p[kind][id].lv=lv;
    p.coins=entry.before.coins;p.jade=entry.before.jade;
    const session=new Session({kind:'solo',stageId:'s25',difficulty:'normal',seed:entry.seed,specs:[playerSpec(p,['yi'],['singijeon','bongsu'])]}),s=session.state;
    const control={kind:'solo',state:s,send:preparedSender(session)},tactics=finalCampaignTactics(control,{tileBoard:true,keepOpening:true,botOptions:{plan,branch:'A',economyAware:true,upgradePolicy:'cannon',staggerBongsu:true,buildPlacement}});
    session.relocateHero(0,getMap('s25').deploymentSlots[1].id);session.update(1/60);
    while(!session.result&&s.tick<144000){preparedRelocation(session);tactics.think();session.update(1/60);}
    const record={seed:run.seed,battleSeed:entry.seed,placement:'neighbor-before-construction',plan,buildPlacement,win:!!session.result?.win,wave:s.wave.n,lives:s.lives,gold:s.players[0].gold,finalOrders:tactics.orders,towers:s.towers.map(t=>({type:t.type,slot:t.deploymentSlotId,level:t.level,branch:t.branch,syn:t.syn,bDmg:t.bDmg,damage:t.dmgDone}))};results.push(record);console.log(JSON.stringify({...record,towers:undefined}));session.destroy();
  }
}
fs.writeFileSync('docs/tile-board/FINAL_TACTIC_PROBE.json',JSON.stringify({generatedAt:new Date().toISOString(),sourceReport:input.generatedAt,scope:'Fixed actual first s25 entry profiles, unchanged slot layout and combat numbers. Not fresh campaign completion.',results},null,2)+'\n');
