# Marketing Site

This repo contains the marketing website.

The site exists to:
- Clearly explain the problem
- Make the right buyer feel understood
- Drive one action: booking a call

This is a **sales-driven site**, not a brochure.

Before writing any code or copy:
1. Read `docs/PRODUCT_CONTEXT.md`
2. Read `AGENTS.md`
3. Follow `docs/STRUCTURE.md`

If something is unclear, default to **simplicity and clarity**.

## Local development

If you use mise for tool management:

```
mise install
```

Set PostHog env vars:

```
cp .env.example .env
```

Then set `NEXT_PUBLIC_POSTHOG_KEY` in `.env`.

Install dependencies and run the dev server:

```
npm install
npm run dev
```

Build and run production:

```
npm run build
npm run start
```

## File layout

- `app/` (Next.js routes and layout)
- `components/` (shared UI)
- `public/` (static assets)
- `scripts/` (small repo checks)
- `.env.example` (PostHog public key + host template)

## Updating brand and booking details

- Brand assets live in `public/brand` and `public/favicon`.
- Booking link lives in `app/book/page.jsx`.
- Contact emails live in `app/privacy/page.jsx`.
