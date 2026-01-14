# Agent Maple — Web Asset Set

This folder contains a ready-to-drop set of brand assets for web use: lockups, icons, and a complete favicon/PWA set.

## Folder layout

- `brand/` — logo + icon PNGs (transparent + monochrome variants, plus responsive widths)
- `favicon/` — `favicon.ico`, PNG favicons, `site.webmanifest`, `browserconfig.xml`, `safari-pinned-tab.svg`
- `components/` — example React component (`AgentMapleLogo.tsx`)
- `head-snippet.html` — copy/paste tags for your `<head>`

## Quick start

1) Copy:
- `favicon/` → your public `/favicon/`
- `brand/` → your public `/brand/`

2) Add to `<head>` (see `head-snippet.html`).

Theme color used: `#25263b`

## Notes

- The `lockup-transparent` PNG is intended for **dark backgrounds** (since the wordmark includes light text).
- Use `lockup-mono-dark` for **light backgrounds**.
- `safari-pinned-tab.svg` is a simplified vector trace of the icon suitable for Safari pinned tabs.
