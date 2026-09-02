# Footer Block

## Overview

Renders the site footer from the `/footer` document fragment. The fragment is
authored as three sections: a brand column (logo + address), a group of link
columns, and a copyright/legal row.

## Layout

The footer lays its sections out horizontally on wider viewports:

- **Brand column** (first section) — logo and address, fixed-ish width.
- **Link columns** (second section) — the top-level list items render as
  side-by-side columns, each with a bold heading and a list of links.
- **Copyright row** (last section) — spans full width along the bottom with a
  hairline top border.

Columns wrap and stack gracefully on narrow screens. Colors and fonts come from
the global WireMasters brand tokens (`--wm-maroon`, `--type-heading-font-family`).

## Store-View Switcher

The footer also hosts the optional multi-store store-view switcher (modal +
dropdown), styled by the `.storeview-*` rules in `footer.css`.
