/**
 * WireMasters hero.
 * Authoring shape (single cell), in order:
 *   <p> eyebrow (optional, appears before the h1)
 *   <h1> headline
 *   <p> lede subtext
 *   <p> CTA links (first link = primary, rest = secondary)
 *   <p> trust line (optional, appears last)
 * All content flows normally over a brand gradient — no background-image
 * stretching, so it can never blow up a small asset the way hero-v2 did.
 */
export default function decorate(block) {
  const cell = block.querySelector(':scope > div > div') || block;

  const content = document.createElement('div');
  content.className = 'wm-hero-content';
  [...cell.children].forEach((el) => content.append(el));

  const children = [...content.children];
  const headlineIndex = children.findIndex((el) => el.tagName === 'H1');
  const plainParas = [];

  children.forEach((el, i) => {
    if (el.tagName !== 'P') return;
    if (el.querySelector('a')) {
      el.classList.add('wm-hero-ctas');
      [...el.querySelectorAll('a')].forEach((a, j) => {
        a.classList.add('wm-hero-btn', j === 0 ? 'wm-hero-btn--primary' : 'wm-hero-btn--secondary');
      });
    } else if (headlineIndex !== -1 && i < headlineIndex) {
      el.classList.add('wm-hero-eyebrow');
    } else {
      plainParas.push(el);
    }
  });

  // The last plain paragraph is the trust line; earlier ones are lede copy.
  if (plainParas.length > 1) {
    plainParas[plainParas.length - 1].classList.add('wm-hero-trust');
    plainParas.slice(0, -1).forEach((p) => p.classList.add('wm-hero-lede'));
  } else {
    plainParas.forEach((p) => p.classList.add('wm-hero-lede'));
  }

  block.replaceChildren(content);
}
