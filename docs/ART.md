# 그림 파일 넣기 (영웅 이미지)

코드로 그린 기본 그림 대신 사람이 만든 이미지를 넣을 수 있습니다. **이미지가 있는 영웅만 바뀌고, 없는 영웅은 기본 그림 그대로**라 하나씩 바꿔 넣어도 됩니다.

## 넣는 방법

1. 이미지를 `assets/heroes/<영웅 id>.webp`(전투용 전신)와 `assets/portraits/<영웅 id>.webp`(초상)로 저장합니다.
2. `src/data/art.js`의 `ART` 목록에 한 줄씩 추가합니다.
   - 전투용: `ax` = 두 발 사이 중심의 가로 위치(0~1, 망토나 활이 한쪽으로 튀어나오면 0.5가 아님)
   - 초상: `face` = 얼굴 중심 `[x, y]`(0~1)과 정사각 잘라내기 크기(그림 높이 비율). 작은 초상(전투 화면 영웅 카드, 도감 목록)이 이 부분만 씁니다.
3. `node tools/build.mjs` — 그림이 한 파일(`dist/hoguk.html`)에 담깁니다.

흰 배경 이미지는 배경을 따서 넣어야 합니다(이번 이순신 샘플은 테두리와 이어진 흰색 + 활시위 안쪽처럼 갇힌 순백 덩어리를 지우고, 경계는 반투명 처리).

## 규격

| 구분 | 비율 · 크기 | 배경 | 쓰는 곳 |
|---|---|---|---|
| 전투용 전신 | 세로형, 높이 512px로 줄여 저장(WebP, 40KB 안팎) | 투명 | 전장(키 약 56px), 제목 화면 영웅 줄, 도감 큰 그림 |
| 초상 | 가로 3:2, 1200×800 (WebP, 150KB 안팎) | 장면 포함 | 영웅 카드 · 도감 목록(얼굴 부분), 앞으로 큰 일러스트 자리 |

- **오른쪽을 보는 한 장**이면 됩니다. 왼쪽은 뒤집어 그리고, 걷기(통통 튐 + 앞으로 기울기) · 공격(앞으로 내딛기) · 숨쉬기는 코드로 붙입니다.
- 모든 영웅을 같은 카메라 각도(약간 위에서), 같은 조명(왼쪽 위 주광 + 차가운 달빛 + 따뜻한 테두리 빛), 같은 화풍으로 맞춥니다.
- 전장에서는 작게 보이므로 얼굴보다 **실루엣과 색**이 뚜렷해야 합니다.

## 프롬프트

### 공통 (전투용 전신)
```
Stylized 3D game character render of <CHARACTER>.
Full body, standing in a ready stance, facing right, <POSE / WEAPON>.
Outfit: <OUTFIT>.
Camera: slightly high 3/4 view, whole body visible, centered, feet at the bottom of the frame, small margin around the character.
Style: high-quality stylized 3D render, slightly exaggerated heroic proportions, hand-painted textures, crisp readable silhouette, strong color separation.
Lighting: key light from the upper left, cool blue moonlight fill, subtle warm rim light, soft ambient occlusion, cinematic mood.
Background: plain solid flat white background, no ground, no scenery, no cast shadow, no text.
```

### 공통 (초상)
```
Stylized 3D cinematic character portrait of <CHARACTER>.
Waist-up, three-quarter view, <POSE / WEAPON>, <EXPRESSION>.
Outfit: <OUTFIT>.
Setting: <SCENE>, night, cold blue moonlight, warm torch light, faint snow particles, misty atmosphere.
Style: high-quality stylized 3D game cinematic art, hand-painted textures, dramatic rim lighting, shallow depth of field. 3:2 landscape.
```

### 네거티브
```
Japanese samurai armor, Chinese armor, anime style, flat 2D, pixel art, photorealistic, text, watermark, logo, extra fingers, cropped feet, multiple characters, busy background, ground plane, harsh black shadows
```

### 영웅별 빈칸

| id | 영웅 | CHARACTER | POSE / WEAPON | OUTFIT | SCENE (초상) |
|---|---|---|---|---|---|
| `yi` | 이순신 ✅ | Yi Sun-sin, legendary Korean admiral of the Joseon dynasty (1590s) | holding a traditional Korean composite bow, quiver on his back | deep navy-blue Joseon dujeonggap studded brigandine with gold rivets, crimson red cape, Joseon steel helmet with a red horsehair tassel, black mustache and short beard | rocky Korean coastline, turtle ships in the stormy sea |
| `sejong` | 세종대왕 | King Sejong the Great of Joseon (1440s), wise and gentle scholar-king | holding a thin blue-bound book (Hunminjeongeum), other hand raised in a calm gesture | red royal dragon robe (gonryongpo) with round gold dragon emblems on chest and shoulders, black ikseongwan hat with two upright flaps at the back, black jade belt, neat black beard | royal palace hall with glowing paper lanterns, Hangul letters floating as golden light |
| `eulji` | 을지문덕 | Eulji Mundeok, Goguryeo general and strategist (612 AD) | holding a white feather fan, other hand on a sword hilt | dark green Goguryeo lamellar armor with bronze plates, helmet with two tall white feather plumes, long black beard, clever smile | river bank at night, floodwaters bursting from a broken dam |
| `gang` | 강감찬 | Gang Gam-chan, elderly Goryeo general (Battle of Gwiju, 1019) | holding a straight double-edged sword pointed forward | purple and steel Goryeo lamellar armor, steel helmet with a gold star crest, long grey beard, sharp eyes | battlefield plain under a sky of falling meteors |
| `gwon` | 권율 | Gwon Yul, Joseon general who defended Haengju Fortress (1593) | holding a long spear and a round wooden shield | brown leather-and-steel Joseon armor, helmet with a red tassel, sturdy build, short beard | wooden palisade of a mountain fortress, women carrying stones in aprons |
| `gwak` | 곽재우 | Gwak Jae-u, the Red-Robed General, leader of the Joseon righteous army | holding a bow, arrow drawn | bright red flowing robe, wide-brimmed black Korean gat hat, black sash, fierce face with mustache | misty marsh with reeds, hidden militia torches |
| `ahn` | 안중근 | An Jung-geun, Korean independence activist (1909) | holding an early 1900s pistol pointed down, determined stance | long dark wool overcoat over a dark suit, black flat cap, thick mustache | snowy train platform at night, steam and lamplight |
| `dangun` | 단군왕검 | Dangun Wanggeom, mythical founding king of Gojoseon | one hand crackling with blue lightning, a bronze ritual bell at his belt, a small pouch of garlic bulbs | white hemp robes with a green sash, bronze crown with jade beads, long white hair and beard, sacred aura | mountain peak above the clouds, sacred birch tree, thunderclouds |
