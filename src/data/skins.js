// 영웅 의복(의상실): 옥으로 사는 외형. 능력치는 그대로이고 모습만 바뀐다.
// body/sleeve/boots: 옷 색, gold: 금빛 전설(몸에 금빛 기운이 감돈다)
export const SKINS = {
  yi: [
    { id: 'yi_white', name: '백의종군', price: 60, body: '#e9e6dc', sleeve: '#dcd8cc', desc: '벼슬을 잃고도 흰옷으로 싸움터를 지킨 충무공.' },
    { id: 'yi_gold', name: '금빛 전설', price: 150, gold: true, desc: '금빛 두정갑과 전설의 기운.' },
  ],
  sejong: [
    { id: 'sejong_blue', name: '청룡포', price: 60, body: '#2d5b8a', sleeve: '#2d5b8a', desc: '푸른 곤룡포를 입은 성군.' },
    { id: 'sejong_gold', name: '금빛 전설', price: 150, gold: true, desc: '황금 곤룡포와 전설의 기운.' },
  ],
  eulji: [
    { id: 'eulji_iron', name: '고구려 철기', price: 60, body: '#4a4f5c', sleeve: '#5a606e', desc: '개마무사의 검은 쇠비늘 갑옷.' },
    { id: 'eulji_gold', name: '금빛 전설', price: 150, gold: true, desc: '금빛 찰갑과 전설의 기운.' },
  ],
  gang: [
    { id: 'gang_crimson', name: '귀주의 붉은 별', price: 60, body: '#8a2a2a', sleeve: '#9a3434', desc: '귀주대첩의 붉은 전포.' },
    { id: 'gang_gold', name: '금빛 전설', price: 150, gold: true, desc: '금빛 갑주와 전설의 기운.' },
  ],
  gwon: [
    { id: 'gwon_hill', name: '행주 산성', price: 60, body: '#556b3a', sleeve: '#62783f', desc: '산성을 지키던 들녘빛 전복.' },
    { id: 'gwon_gold', name: '금빛 전설', price: 150, gold: true, desc: '금빛 갑옷과 전설의 기운.' },
  ],
  gwak: [
    { id: 'gwak_black', name: '흑의 의병', price: 60, body: '#2c2b33', sleeve: '#3a3944', desc: '밤을 틈타 기습하던 검은 옷.' },
    { id: 'gwak_gold', name: '금빛 전설', price: 150, gold: true, desc: '금빛 홍의와 전설의 기운.' },
  ],
};

export const GOLD_LOOK = { body: '#caa12a', sleeve: '#b8901f', boots: '#5a3a14' };

export function skinDef(heroId, skinId) {
  if (!skinId) return null;
  return (SKINS[heroId] || []).find((s) => s.id === skinId) || null;
}
