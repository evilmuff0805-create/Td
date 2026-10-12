// A bounded, explicit test policy. These orders use the ordinary game command path.
export function preparedStrategy(stage, kind, attempt) {
  const preferred = stage.finale
    ? { plan: 'nam', placement: kind === 'solo' ? 'final-entry' : 'rally' }
    : stage.chapter >= 4
      ? { plan: stage.id === 's24' ? 'ice' : 'fresh', placement: 'gate', ...(stage.id === 's24' ? { buildPlacement: 'exit' } : {}) }
      : { plan: 'balanced', placement: 'default' };
  const choices = [preferred,
    { plan: 'ice', placement: 'exit', buildPlacement: 'exit' },
    { plan: 'fresh', placement: 'gate' },
    { plan: 'nam', placement: 'rally' },
    { plan: 'balanced', placement: 'middle' },
    { plan: 'bul', placement: 'spread' }];
  return { ...choices[(attempt - 1) % choices.length], branch: attempt <= 6 ? 'A' : 'alt',
    upgradePolicy: attempt <= 6 ? (kind === 'solo' ? 'cannon' : 'focus') : (kind === 'solo' ? 'focus' : 'cannon'),
    economyAware: true, staggerBongsu: true };
}

export function preparedSender(session) {
  return command => {
    // Build and move during the real 30-second preparation; no early-wave bonus.
    if (command.t === 'nextWave' && session.state.wave.n === 0) return;
    return session.send(command);
  };
}
