# 공개 2인 협동 테스트 배포 준비

2026-10-14. **사용자 결정: 공개 배포는 지금 보류. 서버 실행·공개 도메인·실제 WAN 검증은 진행하지 않는다.**

기존 Railway 12개 프로젝트의 기본 환경에서 호국영웅전 서비스는 찾지 못했다. 개인 워크스페이스에 별도 `hoguk` 프로젝트와 아직 실행 인스턴스가 없는 `hoguk-game` 생성 초안만 준비했다. 기존 앱은 변경하지 않는다.

- 저장소: https://github.com/evilmuff0805-create/Td
- 브랜치: `claude/korean-hero-tower-defense-i8ard8`. 검증된 구현 커밋을 고정하고 자동 배포를 끈다.
- 패키지: `dist/hoguk-web.zip`, 224파일 / 126,970,419바이트. 원화198개는 저장소와 바이트가 같다. 개발 화면·원본 PNG 보관함은 제외한다.
- Docker 빌드 단계는 `npm ci --ignore-scripts`와 `node tools/build-web.mjs`만 실행한다. 실행 컨테이너에는 `dist/web`만 복사하고 `node` 사용자로 실행한다. 이 PC에는 Docker가 없어서 실제 이미지 빌드는 아직 검증하지 못했다.
- 런타임: Node24, `HOST=0.0.0.0`, `PORT=8080`, `PUBLIC_ONLY=1`; HTTP 건강 확인 `/_health`, 동일 주소의 WebSocket `/ws`.
- 공개 HTTP는 게임 HTML·CSS·컴파일 스크립트·그림만 허용한다. 서버 파일·package·매니페스트·Git·개발 문서는 HTTP로 읽을 수 없다.
- 방 상태는 메모리 보관이다. 인스턴스1개, 메모리0.5GB·CPU0.5 제한으로 소규모 검수용 서버를 준비한다. 재배포/프로세스 재시작 시 현재 방은 사라진다. 여러 인스턴스 운영이나 영속 방 서버까지 완료한 범위는 아니다.
- 기존 서비스의 배포·변수·도메인·데이터는 건드리지 않는다. 실제 서버 시작과 공개 도메인은 사용자 배포 승인 뒤 진행한다. 실행중 서버와 트래픽에 Railway 사용 요금이 발생할 수 있다.

## 확인된 범위

`node tools/test-public-coop.mjs`는 격리된 웹 패키지를 실제 HTTP/WS로 띄워 원화 압축 전송·소스 접근 차단·방 생성/참가·2P 이동 명령·일시정지 재접속을 검증했다. 공개 URL 검수가 아니다.

승인 뒤 실제 배포가 성공하면 `node tools/test-public-coop.mjs --url=https://발급주소`와 실제 브라우저 두 창의 방 생성·참가를 확인한다. 이는 한 PC에서 공개 서버를 경유하는 검사다. 실폰 LTE + PC 등 서로 다른 실제 네트워크의 2인 테스트는 별도로 남는다.

현재 스테이징은 비어 있는 서비스 생성 1건뿐이다. 아직 인스턴스가 없어 설정 갱신 도구가 `Service Instance not found`를 반환했다. CPU·메모리·지역·소스 고정은 위의 배포 계획이며 적용 완료가 아니다. 재개 승인 뒤 빈 서비스를 만든 다음 제한과 소스를 설정하고 실제 빌드를 시작한다. [공식 문서](https://docs.railway.com/config-as-code/reference)에서 구형 Config as Code의 폐지 예고를 확인해 새 `railway.json`에 의존하지 않는다. [Node 공식 이미지](https://github.com/nodejs/docker-node/blob/main/README.md)를 사용한다.
