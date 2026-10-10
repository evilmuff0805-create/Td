export function combatStatus(entity) {
  if(entity.dead||entity.hp<=0||(entity.stealth&&!entity.revealed))return null;
  if(entity.stunT>0)return {text:'기절',tone:'stun'};
  if(entity.shield>0)return {text:'보호',tone:'shield'};
  if(entity.burnT>0)return {text:'화상',tone:'burn'};
  if(entity.slowT>0)return {text:'둔화',tone:'slow'};
  return null;
}
