// Rendering accepts the live host state and the compact guest view alike.
// Derived coordinates belong here, never in the authoritative simulation.
export function battleView(view) {
  return { ...view, towers: view.towers.map(t => ({ ...t,
    cx: Number.isFinite(t.cx) ? t.cx : t.x + .5,
    cy: Number.isFinite(t.cy) ? t.cy : t.y + .5,
    beam: t.beam || [],
  })) };
}

export function selectedEntity(view, ui) {
  if (ui.selTower != null && view.towers.some(t => t.id === ui.selTower)) return { kind: 'tower', id: ui.selTower };
  const h = ui.selHeroes?.find(i => view.heroes[i]);
  return h === undefined ? null : { kind: 'hero', h };
}
