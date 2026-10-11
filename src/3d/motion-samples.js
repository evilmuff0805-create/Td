// A display-only rehearsal. It never starts a Session or grants profile rewards.
const travel=(time,start,end)=>Math.max(0,Math.min(time,end)-start)*1.5;
export const MOTION_SAMPLES={
  stop:{name:'이동 → 멈춤 → 재이동',stops:[['이동',1.1],['멈추는 순간',1.36],['발 정리',1.43],['준비',1.6],['재이동',2.6]]},
  combat:{name:'이동 → 교전 → 복귀',stops:[['이동',1.1],['타격',1.31],['공격 후',1.41],['복귀',1.52],['재이동',2.3]]},
  turn:{name:'방향 경계와 실제 회전',stops:[['오른쪽 경계',.8],['왼쪽으로 회전',2.1],['왼쪽 경계',2.9],['오른쪽으로 회전',3.8]]},
  pause:{name:'일시정지 중 늦은 공격 정보',stops:[['첫 공격',.83],['일시정지',1.1],['늦은 공격 도착',1.5],['재개·새 공격',2.02],['복귀',2.24]]},
  stun:{name:'이동 → 기절 → 재이동',stops:[['이동',1.1],['기절',1.8],['재이동',2.5],['준비',3.9]]}
};
export const MOTION_SAMPLE_DURATION=4.8;
export function motionSample(scenario,time,dt,kind){
  let x=0,clock=time,seq=0,at=0,frozen=false,stunned=false,angle=-Math.PI/4,label='준비';
  if(scenario==='stop'){
    x=travel(time,.35,1.35)+travel(time,2.35,3.35);
    label=time<.35?'준비':time<1.35?'이동':time<1.49?'멈춤 · 발 정리':time<2.35?'준비':time<3.35?'재이동':'준비';
  }else if(scenario==='combat'){
    x=travel(time,.35,1.3)+travel(time,2,3)+travel(time,3.65,4.3);
    seq=time>=3?2:time>=1.3?1:0;at=seq===2?3:1.3;
    label=seq&&time-at<.34?'교전 · 타격과 복귀':time<.35||time>4.3?'준비':time>=1.64&&time<2||time>=3.34&&time<3.65?'교전 뒤 대기':'이동';
  }else if(scenario==='turn'){
    x=time*.8;
    const turn=time<1.6?.02:time<2.6?-.35:time<3.4?-.02:.35;
    angle=-Math.PI/2+turn+Math.sin(time*28)*.04;
    label=time<1.6?'경계 ±2.3° 흔들림':time<2.6?'왼쪽으로 실제 회전':time<3.4?'왼쪽 경계 흔들림':'오른쪽으로 실제 회전';
  }else if(scenario==='pause'){
    x=travel(time,0,.8)+travel(time,2.6,3.6);
    frozen=time>=1&&time<2;clock=time<1?time:time<2?(time>=1.35?1.1:1):time-.9;
    seq=time>=1.35?2:time>=.8?1:0;at=seq===2?1.1:.8;angle=seq===2?-Math.PI*.75:-Math.PI/4;
    label=frozen?(seq===2?'일시정지 · 반대 방향 공격 정보 도착':'일시정지 · 표시 유지'):seq&&clock-at<.34?'공격과 복귀':time>=2.6&&time<3.6?'재이동':'준비';
  }else if(scenario==='stun'){
    x=travel(time,.35,1.4)+travel(time,2.2,3.6);stunned=time>=1.4&&time<2.2;
    label=stunned?'기절 · 보행 중단':time>=2.2&&time<3.6?'기절 후 재이동':time>=.35&&time<1.4?'이동':'준비';
  }
  if(['courier','turtle'].includes(kind)){seq=0;label=label.replace('교전 · 타격과 복귀','이동 병기 · 대기').replace('공격과 복귀','이동 병기 · 대기');}
  return {x,z:0,time:clock,dt:frozen?0:dt,frozen,stunned,actionSeq:seq,actionAt:at,actionDuration:.25,attack:seq?Math.max(0,.25-(clock-at)):0,aimKey:seq?scenario+':'+seq:null,angle,label,resetKey:scenario};
}
