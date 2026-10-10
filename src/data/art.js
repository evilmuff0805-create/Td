// Illustrated atlases share one camera, material treatment and light direction.
// Cell indices are row-major. tools/build.mjs embeds every atlas for offline play.
const cells = (atlas, ids) => Object.fromEntries(ids.map((id, cell) => [id, { atlas, cell }]));
export const ART = {
  atlases: {
    heroes: { src: 'assets/illustrated/heroes.webp', columns: 4, rows: 2 },
    units: { src: 'assets/illustrated/units.webp', columns: 4, rows: 4 },
    bosses: { src: 'assets/illustrated/bosses.webp', columns: 4, rows: 3 },
    buildings: { src: 'assets/illustrated/buildings.webp', columns: 4, rows: 3 },
    props: { src: 'assets/illustrated/props.webp', columns: 4, rows: 3 },
    terrain: { src: 'assets/illustrated/terrain.webp', columns: 4, rows: 2 },
  },
  heroes: cells('heroes', ['yi', 'sejong', 'eulji', 'gang', 'gwon', 'gwak', 'ahn', 'dangun']),
  enemies: {
    ...cells('units', ['ashigaru', 'teppo', 'scout', 'samurai', 'ninja', 'onmyoji', 'cavalry', 'drum', 'armored', 'ram']),
    ...cells('bosses', ['konishi', 'kato', 'wakizaka', 'ukita', 'ishida', 'so', 'kuroda', 'todo', 'kuki', 'kurushima', 'shimazu', 'hideyoshi']),
  },
  allies: Object.fromEntries(['militia', 'guard', 'elite', 'monk', 'courier', 'turtle'].map((id, i) => [id, { atlas: 'units', cell: i + 10 }])),
  towers: cells('buildings', ['sungnyemun', 'hwaseong', 'bosingak', 'cheomseong', 'haeinsa', 'seokguram', 'gyeongbok', 'namhansan', 'seokbinggo', 'bulguksa']),
  structures: { gate: { atlas: 'buildings', cell: 10 }, hall: { atlas: 'buildings', cell: 11 } },
  props: cells('props', ['pine', 'snowPine', 'maple', 'bamboo', 'rock', 'snowRock', 'hanok', 'thatch', 'supplies', 'jangseung', 'cliff', 'wall']),
  terrain: cells('terrain', ['spring', 'summer', 'autumn', 'winter', 'road', 'snowRoad', 'court', 'water']),
  faces: {
    yi: [0.61, 0.25, 0.37], sejong: [0.44, 0.23, 0.36], eulji: [0.59, 0.28, 0.37], gang: [0.66, 0.25, 0.37],
    gwon: [0.49, 0.25, 0.36], gwak: [0.58, 0.22, 0.36], ahn: [0.59, 0.22, 0.35], dangun: [0.55, 0.26, 0.38],
  },
  portraits: {}, backgrounds: {},
  scene: 'assets/illustrated/scene.webp',
};
