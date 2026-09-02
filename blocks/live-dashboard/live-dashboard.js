/**
 * Authoring shape: each row = one ticker/status line.
 * Column 1: label. Column 2: value. Optional "status" class row for a badge.
 */
export default function decorate(block) {
  const rows = [...block.children];
  const tiles = document.createElement('div');
  tiles.className = 'live-dashboard-tiles';

  let currentTile = null;
  rows.forEach((row) => {
    const cells = [...row.children];
    const label = cells[0]?.textContent.trim();
    const value = cells[1]?.textContent.trim();

    // A row whose first cell has no second cell starts a new tile (heading row).
    if (!cells[1] || !cells[1].textContent.trim()) {
      currentTile = document.createElement('div');
      currentTile.className = 'live-dashboard-tile';
      const h3 = document.createElement('h3');
      h3.textContent = label;
      currentTile.append(h3);
      tiles.append(currentTile);
      row.remove();
      return;
    }

    if (!currentTile) {
      currentTile = document.createElement('div');
      currentTile.className = 'live-dashboard-tile';
      tiles.append(currentTile);
    }

    const line = document.createElement('div');
    line.className = 'live-dashboard-row';
    const labelEl = document.createElement('span');
    labelEl.textContent = label;
    const valueEl = document.createElement('span');
    valueEl.className = 'live-dashboard-value';
    valueEl.dataset.placeholder = 'true';
    valueEl.textContent = value;
    line.append(labelEl, valueEl);
    currentTile.append(line);
    row.remove();
  });

  const note = document.createElement('p');
  note.className = 'live-dashboard-note';
  note.textContent = 'Demo data — connects to live MyWM pricing and order data in production.';
  tiles.lastElementChild?.append(note);

  block.append(tiles);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const values = block.querySelectorAll('.live-dashboard-value[data-placeholder]');
  const baselines = [...values].map((el) => parseFloat(el.textContent.replace(/[^0-9.]/g, '')) || null);
  setInterval(() => {
    values.forEach((el, i) => {
      if (baselines[i] === null) return;
      const delta = (Math.random() - 0.5) * 0.06;
      baselines[i] = Math.max(0, baselines[i] + delta);
      const suffix = el.textContent.replace(/[0-9.]+/, '').trim();
      el.textContent = `$${baselines[i].toFixed(2)} ${suffix}`.trim();
      el.classList.toggle('is-up', delta >= 0);
      el.classList.toggle('is-down', delta < 0);
    });
  }, 2200);
}
