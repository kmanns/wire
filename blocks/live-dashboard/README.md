# Live Dashboard Block

## Overview

Renders a small "live systems" widget — grouped tiles of label/value rows
(e.g. metal prices, order status) that gently animate to suggest live data.
Values are demo placeholders; wire a real feed in before using this for
anything beyond a demo.

## Block Structure

Author as a table. A row with only one populated cell starts a new tile
(its text becomes the tile heading). Subsequent two-cell rows become
label/value lines within that tile.

```
| Live Dashboard      |          |
|----------------------|----------|
| Current Metal Prices |          |
| Copper (LME)         | $4.12/lb |
| Aluminum (LME)        | $2.47/lb |
| Order Status          |          |
| Order #48213          | In Transit |
```

## Notes

- Uses the real WireMasters brand maroon (`#7b2539`, sampled from the logo
  mark) scoped locally to this block — does not touch the sitewide
  `--color-brand-*` tokens used by cart/checkout/account pages.
- Motion respects `prefers-reduced-motion: reduce` (values stop animating).
