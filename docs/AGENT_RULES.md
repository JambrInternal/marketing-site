# Agent Rules

## Non-negotiables

- Do not add pages beyond v1
- Do not invent personas or markets
- Do not add new CTAs
- Do not introduce pricing
- Do not explain AI internals

## Decision authority

Agents may:
- Improve clarity
- Tighten copy
- Simplify structure

Agents may NOT:
- Redefine the product
- Expand scope
- Add speculative features

## Review checklist (before PR)

- Is this clearer than before?
- Would a trades owner understand this instantly?
- Does this move the reader toward booking a call?

If any answer is “no”, revise.

## Repo facts (current)

- The site uses Next.js app router.
- Page copy lives in `app/` and shared layout/components live in `components/`.
- Static assets live in `public/` (brand assets in `public/brand` and favicons in `public/favicon`).
