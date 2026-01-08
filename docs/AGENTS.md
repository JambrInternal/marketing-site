# AGENTS.md — Instructions for Automated Agents

This repository contains the marketing website for an on-site AI agent serving
trades, field-service teams, and industrial operators.

If you are an automated agent (or a human acting like one), this is the **first
file you must read**.

---

## 0) Prime Directive

The website is a **sales assistant**, not a brochure.

Every change must do at least one of the following:
- Improve clarity for the buyer
- Build trust
- Increase the likelihood of booking a call

If a change does none of these, do not make it.

---

## 1) How This Repo Is Organized

This repo uses multiple Markdown documents to prevent agents from re-deciding
product, scope, or tone. Each document has a specific purpose.

### docs/PRODUCT_CONTEXT.md
- Defines what the business does
- Defines what the business does not do
- Defines the primary buyer and outcome

Use this file when:
- Writing or editing copy
- Deciding how to describe the product
- Evaluating whether content fits the business

You must not contradict this file.

---

### docs/BUILDING.md
- Defines the philosophy for building the site
- Defines v1 scope
- Explicitly lists what must not be built

Use this file when:
- Considering adding pages, features, or sections
- You feel tempted to expand scope

If something is not allowed here, do not do it.

---

### docs/STRUCTURE.md
- Defines which pages exist
- Defines homepage section order
- Locks the call to action

Use this file when:
- Working on layout
- Modifying or reviewing page structure
- Reviewing PRs for scope creep

Do not add pages or reorder sections.

---

### docs/BRAND_GUIDELINES.md
- Defines tone, personality, and visual direction

Use this file when:
- Choosing words
- Adjusting tone
- Making styling or design decisions

If something feels flashy, clever, or trendy, it likely violates this file.

---

### docs/COPY_RULES.md
- Defines how copy must be written
- Sets language and length constraints

Use this file when:
- Writing or editing any text
- Shortening or simplifying copy

If copy is long, technical, or marketing-heavy, revise it.

---

### docs/AGENTS.md (this file)
- Defines how agents must behave
- Sets non-negotiable rules
- Explains decision authority

If there is a conflict between documents, resolve it in this order:
1. docs/AGENTS.md
2. docs/STRUCTURE.md
3. docs/PRODUCT_CONTEXT.md
4. All other docs

---

## 2) Non-Negotiables

You must not:

- Add pages beyond:
  - `/` (Home)
  - `/how-it-works` (optional)
  - `/book`
  - `/privacy`
- Add secondary CTAs  
  The primary CTA is locked: **“Book a 25-min call”**
- Add pricing, plans, or packages
- Add a blog, careers, press, or SEO content
- Explain AI internals (models, frameworks, architecture)
- Invent claims, metrics, or testimonials
- Introduce buzzwords or hype language

Breaking any of these invalidates the change.

---

## 3) Target Buyer (Write for One Person)

The reader is:
- A trades owner, operations lead, or dispatch manager
- Busy and practical
- Skeptical of hype
- Often reading on a phone between jobs

Write directly to this person.
Do not write for investors, engineers, or a generic audience.

---

## 4) Homepage Rules

Homepage section order is fixed:

1. Hero
2. The Problem
3. The Solution
4. Why This (Differentiation)
5. Proof (early-stage acceptable)
6. Call to Action

You may improve content within sections.
You may not reorder or add sections.

---

## 5) Copy Rules (Enforced)

- Short sentences
- Plain language
- Outcome-focused
- Real-world scenarios (missed calls, after-hours, emergencies)

Avoid:
- Technical explanations
- Long paragraphs
- Marketing jargon

Anything important must be understandable in **10 seconds on mobile**.

---

## 6) Design Rules (Enforced)

- Mobile-first
- Minimal animation
- High contrast and accessible
- Limited color palette
- No decorative UI without purpose

Design should feel:
- Calm
- Reliable
- Industrial
- Trustworthy

---

## 7) What You May Do

Encouraged actions:
- Tighten copy for clarity
- Remove unnecessary words
- Improve readability and hierarchy
- Improve accessibility
- Improve performance
- Improve booking flow clarity

All changes must respect scope.

---

## 8) Pull Request Requirements

Every pull request must include:

1. Goal: what user confusion or objection this addresses
2. Summary: what changed
3. Conversion impact: why this helps booking a call
4. Scope check: confirmation that you did not:
   - Add pages
   - Add CTAs
   - Add pricing
   - Add AI internals

PRs without this information should be rejected.

---

## 9) When You Are Unsure

Default to:
- Less content
- More clarity
- One CTA
- No hype

If still unsure:
- Make no change
- Explain uncertainty in the PR description
