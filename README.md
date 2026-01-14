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

## Deployment

GitHub Actions builds a static export and deploys to GitHub Pages.

To set a custom domain later:
- Configure it in `Settings → Pages`.
- Add `public/CNAME` when the domain is ready.

Optional repo variables or secrets for PostHog:
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST` (defaults to `https://app.posthog.com`)

GitHub Pages builds use a base path of `/<repo-name>`. If you later add a
custom domain and want root hosting, set `NEXT_PUBLIC_BASE_PATH` to `/` in the
workflow or repo variables.

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
