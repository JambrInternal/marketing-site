# Marketing Site

This repo contains the marketing website.

The site exists to:
- Clearly explain the problem
- Make the right buyer feel understood
- Drive one action: booking a call

This is a **sales-driven site**, not a brochure.

Before writing any code or copy:
1. Read `docs/PRODUCT_CONTEXT.md`
2. Read `docs/AGENT_RULES.md`
3. Follow `docs/STRUCTURE.md`

If something is unclear, default to **simplicity and clarity**.

## Local development

No build step is required. Serve the repo root with any static file server.

Example:

```
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## File layout

- `index.html` (Home)
- `how-it-works/index.html` (Optional)
- `book/index.html`
- `privacy/index.html`
- `assets/styles.css`
- `assets/scripts.js`

## Updating brand and booking details

- Brand name appears in `index.html`, `how-it-works/index.html`, `book/index.html`, and `privacy/index.html`.
- Booking link lives in `book/index.html`.
- Contact emails live in `privacy/index.html`.
