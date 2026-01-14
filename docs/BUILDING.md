# How to Build This Site

## Core principle

The website is a **sales assistant**, not a brochure.

If a section does not:
- Clarify the problem
- Build trust
- Or move someone to book a call

…it does not belong.

## Scope (v1)

Allowed:
- Home
- How it works
- Book a call
- Privacy

Not allowed:
- Blog
- Pricing
- Careers
- Press
- Feature sprawl
- AI technical explanations

## Decision rule

When in doubt:
- Fewer pages
- Shorter copy
- One clear message

## Implementation notes

- The site runs on Next.js (app router).
- Routes live in `app/` and shared UI lives in `components/`.
- Static assets live in `public/`.
