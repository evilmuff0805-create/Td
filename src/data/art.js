// 그림 파일 목록 (사람이 만든 이미지). 목록에 없으면 코드로 그린 기본 그림을 쓴다.
//  - 전투용(sprite): 오른쪽을 보는 전신, 배경 투명, 발끝이 아래 끝. ax = 두 발 사이 중심의 가로 위치(0~1)
//  - 초상(portrait): 가로 3:2 일러스트. face = 얼굴 중심 [x, y] 과 정사각 잘라내기 크기(높이 비율)
//  빌드(tools/build.mjs)는 'assets/…' 경로를 data URI 로 바꿔 한 파일에 담는다.
export const ART = {
  heroes: {
    yi: { sprite: 'assets/heroes/yi.webp', ax: 0.52 },
  },
  portraits: {
    yi: { src: 'assets/portraits/yi.webp', face: [0.425, 0.235, 0.46] },
  },
};
