# WM Hero Block

## Overview

A modern, full-bleed WireMasters hero rendered over a brand maroon→navy
gradient. Content flows normally (no absolutely-positioned text over a
stretched background image), so it renders reliably regardless of asset
size — unlike the legacy `hero-v2` block.

## Authoring Structure

Author a single cell with content in this order:

1. **Eyebrow** — a short paragraph *before* the headline (rendered as a pill).
2. **Headline** — an `h1`.
3. **Lede** — one or more paragraphs of supporting copy.
4. **CTAs** — a paragraph containing links. The first link renders as the
   primary (solid) button; any additional links render as secondary (outline).
5. **Trust line** — the final paragraph (e.g. a certifications list).

Example:

```
| WM Hero                                              |
|------------------------------------------------------|
| Aerospace & Defense Wire Specialists                 |
| # Mil-Spec Wire, Cable & Connectors                  |
| Certified components with full traceability…         |
| [Shop Products](/products) [Request Account](/…)     |
| AS9100 · ISO 9001 · Mil-Spec · RoHS                  |
```

## Notes

- Colors come from the global `--wm-maroon` / `--wm-navy` brand tokens.
- Headings use the `--type-heading-font-family` (Poppins) token.
