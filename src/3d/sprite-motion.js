// Root-owned visual state survives snapshot entity replacement. All positions
// remain authoritative; this controller changes only an image's pose/transform.
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const finite=(n,fallback)=>Number.isFinite(n)?n:fallback;
const smooth=t=>t*t*(3-2*t);
const stepLength=kind=>kind==='cavalry'||kind==='courier'?.52:kind==='ram'?.48:kind==='turtle'?.6:.32;

export function updateSpriteMotion(previous,input){
  const x=finite(input.x,0),z=finite(input.z,0),time=finite(input.time,0),dt=clamp(finite(input.dt,0),0,.15);
  const tx=finite(input.targetX,x),tz=finite(input.targetZ,z);
  const reset=!previous||time<previous.lastTime-.1||input.reset||input.resetKey!==previous.resetKey;
  const s=reset?{x,z,tx,tz,lastTime:time,clock:time,phase:0,blend:0,hp:input.hp,seq:undefined,actionStart:-9,duration:.25,hitAt:-9,attack:0,resetKey:input.resetKey}:previous;
  const jump=Math.hypot(tx-s.tx,tz-s.tz)>1.25||Math.hypot(x-s.x,z-s.z)>1.25;
  // A delayed packet may include an attack, damage or stun while paused. Hold
  // the displayed frame and defer those cues until playback actually resumes.
  if((input.frozen||dt===0)&&!reset&&s.visual){
    s.frozenJump=!!s.frozenJump||jump;
    s.x=x;s.z=z;s.tx=tx;s.tz=tz;s.lastTime=time;s.wasFrozen=true;
    return {...s.visual,state:s};
  }
  // Do not wait for a new server timestamp: guests still move by interpolation.
  if(!input.frozen&&dt>0)s.clock=s.wasFrozen||time>s.lastTime?Math.max(time,s.clock):Math.min(time+.12,s.clock+dt);
  // A delayed pause packet may carry a newer simulation timestamp. Keep the
  // exact displayed pose until playback resumes, then resynchronise above.
  s.wasFrozen=!!input.frozen||dt===0;
  const distance=!reset&&!jump&&!input.stunned&&!input.frozen&&dt>0?Math.hypot(x-s.x,z-s.z):0;
  if(jump||s.frozenJump){s.phase=0;s.blend=0;s.frozenJump=false;}
  if(distance>0.00001)s.phase=(s.phase+distance/(2*stepLength(input.kind)))%1;
  if(input.stunned)s.blend=0;
  else if(!input.frozen&&dt>0)s.blend+=(Number(distance>.00001)-s.blend)*(1-Math.exp(-dt*18));

  const hasCue=Number.isFinite(input.actionSeq);
  const newAction=hasCue?input.actionSeq>0&&input.actionSeq!==s.seq:input.attack>0&&(s.attack<=0||input.attack>s.attack+.06);
  if(newAction){s.actionStart=finite(input.actionAt,s.clock);s.duration=clamp(finite(input.actionDuration,input.attack||.25),.12,.6);}
  if(Number.isFinite(s.hp)&&Number.isFinite(input.hp)&&input.hp<s.hp)s.hitAt=s.clock;
  s.hp=input.hp;s.seq=input.actionSeq;s.attack=input.attack||0;
  s.x=x;s.z=z;s.tx=tx;s.tz=tz;s.lastTime=time;

  const age=Math.max(0,s.clock-s.actionStart),attacking=age<s.duration+.09&&!input.stunned;
  const recovery=attacking?1-smooth(clamp(age/(s.duration+.09),0,1)):0;
  const hitAge=s.clock-s.hitAt,hit=hitAge>=0&&hitAge<.18?Math.sin(Math.PI*hitAge/.18):0;
  // Supplemented heroes have actual passing/follow-through/recovery artwork.
  // Unsupported or failed looks retain the approved four-row animation.
  const beat=s.phase%1,walkRow=beat<.30?1:beat<.5?0:beat<.80?2:0;
  const row=input.inbetweens?(attacking?(age<s.duration*.28?3:age<s.duration*.70?6:7):s.blend>.16?[1,4,2,5][Math.min(3,Math.floor(beat*4))]:0):attacking&&age<s.duration*.72?3:s.blend>.16?walkRow:0;
  const grounded=input.kind==='turtle'||input.kind==='ram';
  const visual={row,phase:s.phase,blend:s.blend,attacking,hit,
    lift:grounded?0:Math.abs(Math.sin(beat*Math.PI*2))*.009*s.blend-hit*.008,
    lean:grounded?0:.022*s.blend-.045*recovery-.055*hit,
    recoil:grounded?0:-.018*recovery-.022*hit};
  s.visual=visual;return {...visual,state:s};
}

// Review pages use the battle controller during playback; explicit phase
// controls expose both the approved poses and any available supplements.
export function previewMotion(motion,time,dt,kind){
  const cycle=Math.floor(time/.9),attackAge=time-cycle*.9;
  return {x:motion==='walk'?time*1.6:0,z:0,time,dt,kind,
    actionSeq:motion==='attack'?cycle+1:0,actionAt:cycle*.9,actionDuration:.25,
    attack:motion==='attack'?Math.max(0,.25-attackAge):0,resetKey:motion};
}
