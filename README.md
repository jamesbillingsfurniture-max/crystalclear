# Crystal Clear Windows — Design System

A complete brand + UI design system for **Crystal Clear Windows**, a local, family-run window cleaning business. This system lets design agents (and people) produce on-brand websites, booking flows, quotes, flyers, and mockups that feel consistent, bright, and trustworthy.

> **Note on origin:** No existing brand assets, codebase, or Figma files were provided — only the brief: *"crystal clear windows. local window cleaning business."* This system was therefore **designed from scratch** as a coherent, original identity. Everything here is a proposed starting point meant to be refined with the owner. There are **no external source links** (no Figma, GitHub, or codebase) to reference.

---

## THE COMPANY

Crystal Clear Windows is the kind of local outfit a neighborhood trusts: a small crew, a ladder, a squeegee, and a reputation built one streak-free pane at a time. They clean **residential and small-commercial** windows — homes, storefronts, offices — plus add-ons like gutters, screens, and solar panels.

**What the brand needs to communicate**
- **Trust & reliability** — insured, on time, respectful of your home.
- **Visible results** — the satisfying before/after of a genuinely clean window.
- **Local & personable** — you talk to the actual owner, not a call center.
- **Easy to book** — a free quote in under a minute.

**The feeling:** standing at a freshly cleaned window on a bright morning. Clear light, crisp air, nothing between you and the view.

### Products / surfaces in this system
1. **Marketing website** (`ui_kits/website`) — the primary surface. Homepage hero, services, before/after proof, reviews, quote CTA, and the **quote / booking flow** (a 2-step modal — this is the single conversion path, so there is no separate booking kit).

---

## CONTENT FUNDAMENTALS

The voice is a **friendly local pro**: confident and warm, never corporate or salesy. Like the owner talking to you on your porch.

- **Person:** "We" (the business) talking to "you / your" (the customer). Never third-person ("the company provides…").
- **Casing:** **Sentence case** everywhere — headings, buttons, nav. The only uppercase is the tracked **eyebrow** label (e.g. `RESIDENTIAL & COMMERCIAL`).
- **Tone:** plainspoken and reassuring. Short sentences. Active voice. Concrete over abstract ("We're in and out in about an hour" beats "efficient service delivery").
- **Sparkle, sparingly:** one confident tagline-style line per section is welcome ("Streak-free, or we come back free."). Don't overdo the puns — *clarity is the joke*, used lightly.
- **Numbers build trust:** real, specific proof — "500+ homes cleaned", "5.0 on Google", "fully insured". Avoid vague superlatives ("the best in town").
- **CTAs are plain verbs + benefit:** "Get a free quote", "Book your clean", "See our work", "Call us today". Never "Submit" or "Learn more".
- **No emoji** in product UI or marketing copy. The sparkle ✦ motif is a brand *graphic*, not a typed emoji.
- **Guarantee language is central:** the streak-free guarantee should appear near most primary CTAs.

**Voice examples**
- Hero: *"Windows so clean, you'll forget they're there."*
- Subhead: *"Friendly, fully-insured window cleaning for homes and storefronts across the area. Free quotes, streak-free results."*
- Service blurb: *"Inside and out, frames and sills included. We treat your home like our own."*
- Reassurance: *"Not happy with a pane? We'll re-clean it free — no questions."*
- Booking confirmation: *"You're booked! We'll text you the morning of to confirm."*

---

## VISUAL FOUNDATIONS

The look is **bright, airy, and crisp** — lots of clean white space, clear sky blue, and one warm spark of sun. Think clean glass and good light, not heavy gradients or dark drama.

**Color.** Primary is **Sky blue** (`--sky-500 #138cdb`) — clear-day sky and fresh water. Text and structure use **Ink navy** (`--ink-900 #0b1d31`), the look of wet glass at dusk. Backgrounds are cool near-white **Frost** tones. A warm **Sunshine** gold (`--sun-400 #ffcb45`) is the *only* accent — reserved for sparkle marks, star ratings, and the occasional highlight. Neutrals are intentionally **cool-tinted** (slightly blue greys), never warm beige. Most of any layout is white + ink text; blue does the lifting on CTAs and brand-filled bands; gold is a garnish.

**Type.** Display/headlines are **Bricolage Grotesque** (700–800) — a modern grotesque with just enough character to feel human and local without being whimsical. Body is **Hanken Grotesk** (400–600) — clean, warm, highly readable. Eyebrows are Hanken Grotesk **uppercase, bold, tracked +0.14em**. Headlines run tight (line-height ~1.05, letter-spacing −0.02em). Body is roomy (1.5). Optional **Space Mono** appears only for small technical details (booking ref numbers, prices in receipts).

**Spacing & layout.** A **4px base scale**. Generous section padding (80–128px vertical on web). Content max-width ~1200px, centered, with comfortable gutters. Layouts are calm and grid-aligned — single clear focal point per section, never cramped. Fixed elements: a sticky translucent top nav (frosted) and, on mobile, a sticky bottom "Get a quote" bar.

**Backgrounds.** Predominantly flat **Frost white** (`--frost-50`). Brand-filled bands use solid **Sky** with white text. A *subtle* top-down sky gradient (light blue → white) may be used **once**, on the hero only. Real **photography** is the hero of imagery — bright, sunny before/after shots, crew on a ladder, sparkling storefronts. No stock-y abstractions. Photos lean **warm-bright and high-key** (lots of light, gentle warmth from the sun accent), never cold/desaturated or moody. A faint **diagonal shine** highlight (the swipe of a clean squeegee) may overlay brand panels at low opacity.

**Corner radii.** Friendly and rounded but not bubbly: cards `--radius-xl 20px`, buttons & inputs `--radius-md 12px` (or pill for primary CTAs), small chips/badges pill. Images in cards `16px`.

**Cards.** White (`--bg-elevated`), `20px` radius, a hairline `--line` border, and a **soft sky-tinted shadow** (`--shadow-md`) — shadows are *blue*, never neutral black. On hover, cards **lift** (translateY −4px) and the shadow grows to `--shadow-lg`. An optional inner top highlight (`--shadow-inset`) gives glass-like sheen.

**Borders & lines.** Hairline cool-grey (`--line #e2ecf3`). Dividers are subtle. Brand outlines use `--sky-200`. Focus rings are a 3px sky halo (`--ring`), always visible for accessibility.

**Shadows / elevation.** A soft, sky-tinted ramp from `--shadow-xs` (resting chips) → `--shadow-md` (cards) → `--shadow-lg` (popovers, hovered cards) → `--shadow-xl` (modals). Primary buttons carry a colored `--shadow-brand` glow. No hard or pure-black shadows anywhere.

**Transparency & blur.** Used in two places: the **sticky nav** (frosted glass — white at ~70% with `backdrop-filter: blur(12px)`) and occasional **glass chips** over photos (white ~16% + blur). This reinforces the "clean glass" idea. Don't blur body content.

**Motion.** Gentle and purposeful. Standard transition `220ms var(--ease-out)` (a soft decelerating curve). Entrances **fade + rise** (opacity 0→1, translateY 12→0). No bounces, no spins, no infinite loops. Respect `prefers-reduced-motion`.

**Hover states.** Buttons **darken** one step (`--brand` → `--brand-strong`) and lift slightly with a stronger shadow. Cards lift. Links shift to `--brand-strong` with an underline. Never use opacity-dim as the only hover signal on primary actions.

**Press states.** A subtle **scale(0.98)** plus a return to the resting (un-lifted) shadow — the element "presses in." Fast (`--dur-fast 130ms`).

**Gradients.** Avoid as a rule. The two sanctioned uses: the single hero sky-fade, and the logo mark's faint white shine. **No** purple/blue tech gradients, no rainbow, no gradient text.

---

## ICONOGRAPHY

- **Icon set:** [**Lucide**](https://lucide.dev) — clean, 2px-stroke, rounded line icons. Linked from CDN (`https://unpkg.com/lucide@latest`). This is a **substitution chosen for the brand** (no icon set was provided); Lucide's friendly-but-crisp line style matches the "clean and clear" feel. Flagged as a choice, not a copy.
- **Style rules:** line (outline) icons only, 2px stroke, rounded caps/joins, `currentColor` so they inherit text color. Sizes 16 / 20 / 24px. Don't mix filled and outline sets.
- **Brand-relevant glyphs:** `droplet`, `sparkles`, `sun`, `home`, `building-2`, `shield-check`, `badge-check`, `star` (filled gold for ratings), `calendar-check`, `map-pin`, `phone`, `clock`, `check`, `sparkle`.
- **The sparkle ✦** is the one *custom* brand graphic (see `assets/logo-mark.svg`) — a 4-point spark used as a bullet, divider accent, and "shine" moment. It is a vector, **not** a typed emoji.
- **Emoji:** never used in UI or copy.
- **Unicode as icons:** avoid; use Lucide.
- **Logos:** `assets/logo-mark.svg` (the window-pane + sparkle mark; works on light and dark) and a composed wordmark (mark + "Crystal Clear" set in Bricolage Grotesque 800) demonstrated in the UI kits and `preview/` cards.

---

## CONTENT INDEX (root manifest)

| File / folder | What's inside |
|---|---|
| `README.md` | This file — context, content + visual foundations, iconography, index. |
| `colors_and_type.css` | The single source of truth: all color, type, spacing, radius, shadow, and motion tokens (raw + semantic). Import this everywhere. |
| `SKILL.md` | Agent-Skill manifest so this folder works as a downloadable Claude skill. |
| `assets/` | Brand vector assets — `logo-mark.svg` (and lockups composed in HTML). |
| `preview/` | Small HTML specimen cards that populate the Design System tab (type, color, spacing, components, brand). |
| `ui_kits/website/` | Marketing website UI kit — `index.html` + JSX components. The primary surface, including the in-site quote/booking modal. |

### Quick start
1. Link `colors_and_type.css` (or copy its `:root` block) into any new file.
2. Use the semantic tokens (`--brand`, `--fg1`, `--bg-elevated`, `--shadow-md`, etc.), not raw hexes.
3. Pull components/patterns from the UI kits; pull voice + rules from this README.
4. Use **real photography** where images go (or `image-slot` placeholders for the user to fill).

---

## CAVEATS
- This identity was invented from a one-line brief. Company name, colors, type pairing, and logo are **proposals** to validate with the owner.
- Fonts are loaded from **Google Fonts CDN** (Bricolage Grotesque + Hanken Grotesk). For offline/production use, download the `.woff2` files into `fonts/` and swap the `@import` for `@font-face`.
- Icons use **Lucide via CDN** (a substitution — see ICONOGRAPHY).
- No real photography exists yet; UI kits use `image-slot` placeholders and gradients where photos belong.
