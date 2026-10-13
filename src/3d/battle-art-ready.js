// An older battlefield may finish loading after the player has opened a new one.
export function whenBattleArtReady(world,battle,current,ready){
  const request=world.art?.promise??Promise.resolve();
  const comboRequest=world.fx?.comboArt?.promise;
  return Promise.all([request,comboRequest]).then(()=>{
    if(world.destroyed||world.art?.loading||world.fx?.comboArt?.sequenceLoading||(world.art&&world.art.promise!==request)||world.fx?.comboArt?.promise!==comboRequest||current()!==battle)return false;
    ready();return true;
  });
}
