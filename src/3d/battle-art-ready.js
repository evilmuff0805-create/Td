// An older battlefield may finish loading after the player has opened a new one.
export function whenBattleArtReady(world,battle,current,ready){
  const request=world.art?.promise??Promise.resolve();
  return request.then(()=>{
    if(world.destroyed||world.art?.loading||(world.art&&world.art.promise!==request)||current()!==battle)return false;
    ready();return true;
  });
}
