@AGENTS.md

# Past Nine — Website Build Brief

## Business
- Name: **Past Nine** — tagline "Creative Developer" (used occasionally, not the primary lockup)
- Sole trader, NZ web developer / software engineer, based in Wellington
- Domain: pastnine.co.nz

## Tech stack
- Next.js
- TypeScript
- Tailwind CSS
- ESLint

## Site structure
- **Home** — hero section, then portfolio work directly under the header (1–2 strongest pieces, not a separate portfolio page)
- **Services** — full list of services offered, as its own page
- **About** — short, honest, personal
- **Contact** — simple form + email

## Design principles
- **Mobile-first, not mobile-reduced.** Every screen size should get a genuinely similar experience — same content, same polish, not a stripped-down mobile fallback. (Several competitor Wellington sites researched failed at this — this is a real differentiator.)
- **Predominantly white** background across the site.
- **Hero carries the visual energy**; everything else stays quiet and disciplined by comparison — spend boldness in one place, not scattered throughout.
- **"Alive" feeling** comes from a single deliberate hero animation/interaction — **to be added later, after the static design is finalized.** Don't block the build on this.
- Avoid generic AI-design defaults: no cream-background + terracotta-accent combo, no all-caps tracked eyebrow labels, no identical rounded cards with matching soft shadows, no arrow (→) appended to every CTA/link by default.
- Numbered markers / step indicators only where content is genuinely sequential — not decorative.

## Reference images
- Located at `src/reference` — Files are named by what they should reference ie Hero

## Typography
- **Logo font: Liham** — a wide serif display typeface (vintage/postage-stamp inspired, handmade character, limited glyph set — roughly 42 glyphs, largely capitals). Best reserved for the **logo/wordmark and short display moments only**, not full paragraphs or long headers, given the limited character set.
- **Header font — two directions to choose between:**
  - *Option A:* Reuse Liham for short hero headlines only, paired with a plain, neutral sans for everything else (safe, cohesive, but limited by the glyph set for longer headers).
  - *Option B:* A distinct, blocky/interesting sans or slab for headers that contrasts against Liham's vintage character — e.g. Space Grotesk, Archivo, or a slab serif like Zilla Slab. Gives more flexibility for longer headings while still feeling intentional next to the logo.
  - *(Decide once you see both rendered against the logo — don't guess in the abstract.)*
- **Body font:** a clean, highly legible sans-serif (e.g. Inter, Public Sans, or similar) for paragraphs and descriptions — kept visually distinct from the header treatment.

## Color palette

**Light / primary (white-dominant pages):**
- `#011227` — primary text/headings
- `#3D4A5C` — secondary text (paragraphs, descriptions)
- `#7A8492` — muted text (captions, metadata)
- `#D9DEE4` — hairline borders/dividers on white

**Dark accents (for hero or any dark-background sections):**
- `#FFFFFF` — headings/logo on dark
- `#B8C4D6` — secondary nav text, muted
- `#5A7096` — low-emphasis (dividers, inactive states)

## Content notes
- **Services page:** custom website design & development only, for now. Do not list AI setup or productised offerings yet — those are future services Gemma isn't trained up on delivering yet, and promising them early could undersell the brand once they're actually ready.
- **Portfolio:** Scarecrow Landcare case study + 1–2 concept pieces built specifically to show range (one simple/clean, one more expressive) — label concept pieces honestly as concept work if they're not real client projects.
- **Copy tone:** short, honest, human — no filler, no generic agency language. Write from the visitor's perspective, plain verbs, sentence case.

## SEO — build this into every page, not as a later pass
SEO matters from the first commit, not as cleanup at the end. Apply the following to every page as it's built:

- **Metadata:** unique, descriptive `title` and `description` per page via Next.js `generateMetadata()` — never reused across pages. Include Open Graph tags (`og:title`, `og:description`, `og:image`) so shared links look right on socials/Slack. Canonical URL set on every page.
- **Structured data (JSON-LD):** `Organization` schema on the homepage (name, logo, contact). Consider `Person` schema given the personal creative-developer angle. Hold off on `FAQPage` schema for launch — Gemma isn't adding an FAQ section on first launch, but keep it in mind as a later addition once there's real Q&A content to mark up (Services or Contact page is the natural home for it).
- **Performance (Core Web Vitals):** LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms. Use `next/image` for all images (never raw `<img>`), `next/font` for font loading, and `priority` loading on hero content since it's the first thing visible.
- **Technical basics:** auto-generate `sitemap.ts` and `robots.ts`. Use semantic HTML (`<main>`, `<nav>`, `<article>`) throughout, not generic `<div>` soup. Alt text on every image. `lang="en-NZ"` (or `en`) on the `<html>` tag.
- **Treat this as a per-page checklist**, not a final pass — each page should meet the above before it's considered done, not retrofitted after all pages exist.

## Build order
1. Static page structure (Home, Services, About, Contact) with real content
2. Typography + color system applied
3. Responsive pass — verify mobile parity, not just "doesn't break"
4. SEO checklist applied per page (see above)
5. Hero animation — added last, once everything else is approved