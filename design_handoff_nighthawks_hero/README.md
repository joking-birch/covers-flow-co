# Handoff: Nighthawks interactive hero — CoversFlow.co

## Overview
The homepage hero for CoversFlow.co (hospitality SEO agency). Edward Hopper's *Nighthawks*
fills the viewport; six regions of the painting are hotspots, each tied to one pillar page.
Hovering a hotspot blurs and dims the whole painting, lifts that region back out sharp with a
marching-dash outline traced around it, and opens a small card naming the pillar. At rest the
painting is completely untouched — flat, no overlays, no motion on the artwork.

The six pillars, and why each figure carries it:

| # | Region of the painting | Pillar | Candidate sub-topics |
|---|---|---|---|
| 01 | The PHILLIES sign | **Brand Visibility** | branded SERP, AI answer engines, entity/knowledge panel |
| 02 | The dark storefront across the street | **Competitive Gaps** | keyword gap audits, competitor content teardowns, share of search |
| 03 | The man with his back to the viewer | **Discovery** | near-me intent, editorial & guides, digital PR |
| 04 | The couple at the counter | **Community** | review conversations, events & partnerships, local link earning |
| 05 | The counterman and the urns | **Front of House** | Google Business Profile, booking flow, location pages |
| 06 | The door at the far right | **Back of House** | menu/recipe schema, site architecture, Core Web Vitals |

Below the hero, the same six pillars repeat as a plain link grid. Keep it: it is the real
internal-linking layer for SEO and the no-JS / touch fallback.

## About the design files
The files in this bundle are **design references created in HTML** — a prototype of the intended
look and behaviour, not production code to lift wholesale. `NighthawksHero.astro` is the
exception: it is a working Astro port of the prototype, written to be dropped into an Astro
project and then adapted to the codebase's own conventions (naming, image pipeline, content
collections). `Nighthawks Landing.dc.html` is the original prototype, kept for visual reference.

## Fidelity
**High-fidelity** for the hero: geometry, motion timings and copy are final. The colour palette
is now final too — `Nighthawks Landing.dc.html` has been reskinned onto the mid-century poster
palette in `tokens.css` and binds to the CoversFlow design system
(`_ds/coversflow-658cc90c-6a64-4ab3-adde-389acdd1176c/`), replacing the original dark blue-grey
UI theme it was prototyped on. Geometry, motion timings and copy came through that reskin
byte-identical — only colour, type and spacing tokens changed.

One thing the reskin had to add rather than swap: the page ground flipped from dark to `--paper`,
so the root text colour is now `--ink`. Anything sitting on a `--night` field (the pillar cards)
needs an explicit `color: var(--paper)` — inheriting leaves dark ink on a dark card at ~1.1:1.

## Screens / views

### Hero (the only screen in this handoff)
**Purpose** — orient a first-time visitor and route them to one of six pillar pages.

**Layout**
- Section `.hero`, ground `--night` (#16283C).
- Inside, `.stage`: `width:100%`, `max-width: calc((100vh - 62px) * 16/9)`, `aspect-ratio: 16/9`,
  `margin: 0 auto`, `overflow: hidden`. **No `max-height`.**
- `62px` is the site header's height — replace with your real header height.
- Everything inside is absolutely positioned in percentages of this stage box.

**⚠ The one hard constraint.** All hotspot coordinates are percentages of the stage box, and the
painting fills it with `object-fit: cover`. The stage box must therefore always be exactly the
painting's 16:9 ratio — if it drifts (e.g. by adding `max-height`), `cover` crops the image and
every hotspot silently points at the wrong paint. This was the single largest bug found in
review.

**Layers, bottom to top**
1. `.base` — the painting. Gains `filter: blur(7px) saturate(.55) brightness(.5)` while any
   hotspot is active, transition `.45s ease`.
2. `.pop` ×6 (z-index 10) — a second copy of the painting per hotspot, clipped to that region.
   `opacity: 0` at rest (critical: at opacity 1 they double-expose and seam). Active: `opacity: 1`,
   `transform: scale(1.12)` about a per-hotspot `transform-origin`, transition
   `transform .55s cubic-bezier(.2,.8,.2,1), opacity .35s ease`.
   Each carries an SVG outline (`viewBox="0 0 100 100" preserveAspectRatio="none"`) with the same
   geometry: `stroke: var(--paper)`, `stroke-width: 1.5px`, `vector-effect: non-scaling-stroke`,
   `stroke-dasharray: 6 3 2 3`, `stroke-linecap: round`, `stroke-dashoffset` animated 0 → −28
   over `1.9s linear infinite` (marching dashes).
   *Do not apply an SVG turbulence/displacement filter to these strokes* — in a
   `preserveAspectRatio="none"` viewBox it is computed in the stretched coordinate space and
   smears the outline off the shape.
3. `.bubbles` (z-index 20) — the six callout markers. Real `<a href>` elements, so they are
   crawlable and work without JS.
4. `.cards` (z-index 30) — the six pillar cards, `pointer-events: none` until active.
5. `.intro` (z-index 35) — headline block, fades out while a hotspot is active.

**Hotspot geometry** (all values % of the stage box)

| # | id | `clip-path` | `transform-origin` | bubble (left/top) | card |
|---|---|---|---|---|---|
| 01 | `sign` | `polygon(31.2% 8%, 90.8% 0.2%, 90.8% 4.2%, 31.2% 15.7%)` | `61% 7%` | 44% / 15.5% | left 32%, top 38% |
| 02 | `street` | `inset(25% 68.5% 38% 0% round 0 8px 8px 0)` | `8% 43%` | 12% / 38% | left 34%, top 30% |
| 03 | `alone` | `ellipse(7.5% 16% at 54.5% 60%)` | `54.5% 60%` | 54.5% / 78% | right 55%, bottom 7% |
| 04 | `couple` | `ellipse(6.6% 10.5% at 70.3% 53%)` | `70.3% 53%` | 70.3% / 38% | left 29%, top 8% |
| 05 | `counter` | `ellipse(6.8% 16% at 85.5% 57%)` | `85.5% 57%` | 85.5% / 80% | left 40%, bottom 7% |
| 06 | `door` | `ellipse(4.2% 18% at 93.5% 47%)` | `93.5% 47%` | 92% / 24% | right 12.5%, bottom 7% |

Matching SVG outline shapes (same viewBox %): `polygon points="31.2,8 90.8,0.2 90.8,4.2 31.2,15.7"`,
`rect x="-1" y="25" width="32.5" height="37"`, `ellipse cx="54.5" cy="60" rx="7.5" ry="16"`,
`ellipse cx="70.3" cy="53" rx="6.6" ry="10.5"`, `ellipse cx="85.5" cy="57" rx="6.8" ry="16"`,
`ellipse cx="93.5" cy="47" rx="4.2" ry="18"`.

Two placement rules learned in review: a card must never overlap **its own** cutout or its own
bubble label (anchor from the side the cutout isn't on — `right:` for 03 and 06, so card width
can't push into the shape), and no hotspot's ellipse may exceed 100% after `scale(1.12)`
(hence 06 sits at 93.5% ± 4.2%, not 95% ± 4.5%).

**Components**

*Bubble marker* — column flex, `gap: 7px`, `transform: translate(-50%, -50%)` on its point.
- Ring: 38×38px, `border-radius: 50%`, `1px dashed rgb(paper / .6)`, ground `rgb(night / .3)` +
  `backdrop-filter: blur(3px)`; numeral in `--font-mono`, 11px, tracking .08em.
- Orbit: a second ring `inset: -6px`, `1px dashed var(--ochre)`, `opacity: .65`, rotating
  `26s linear infinite`; stagger the six by −4s each.
- Label: 10.5px, uppercase, tracking .14em, `white-space: nowrap`, on a
  `rgb(night / .6)` plate with 2px 6px padding (needed — labels sit over lit paint).
- Hover/focus: colour → `--lamp`. Focus ring 2px `--lamp`, offset 6px.

*Pillar card* — 296px wide, padding 16px, ground `rgb(night / .93)`, `1px dashed var(--paper-3)`,
`border-radius: 2px`. Head 19px display face with a mono `--ochre` numeral; blurb 13px/1.5;
tag chips 10.5px uppercase with dashed borders and 2px radius; CTA "Open the pillar →" in
`--lamp` with an underline on hover. Enters `opacity 0 → 1`, `translateY(8px) → 0`.

*Intro block* — `left: 4%; bottom: 7%`, `max-width: 330px` (hard cap — wider and it collides with
hotspot 03's label). H1 60px display, `max-width: 9ch`, tracking −0.03em; subhead 14.5px, 26ch;
hint line 11.5px uppercase in `--ochre`.

## Interactions & behaviour
- `pointerenter` / `focus` on a bubble sets `stage.dataset.active = id`; `pointerleave` on the
  stage and `focusout` (when focus leaves the stage) clear it. That single attribute drives every
  visual change through CSS — no framework island needed.
- Click follows the link to the pillar page.
- Touch / `hover: none` and viewports under 780px: hide the hotspot layer entirely and let the
  intro block and the pillar grid below carry the page. (Alternative if you want hotspots on
  touch: first tap sets `data-active` with `preventDefault()`, second tap follows the link.)
- Enable Astro's link prefetch (`prefetch: { defaultStrategy: 'hover' }`) so hovering a figure
  warms its pillar page.
- `prefers-reduced-motion: reduce`: kill the orbit rotation and the marching dashes, collapse
  transitions. Opacity changes may stay.

## State management
One string: the active hotspot id, or null. Lives in a DOM dataset attribute, not in JS state.
No data fetching. If pillar copy should be editable, move the `pillars` array into an Astro
content collection (`src/content/pillars/*.md` with `n`, `title`, `blurb`, `tags`, and the
geometry fields in frontmatter) and keep the component reading from it.

## Design tokens
Full set with usage notes in **`tokens.css`**. The palette in short:

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#F3EEE4` | page ground, warm newsprint |
| `--paper-2` | `#E7E0D1` | alternate band, card ground |
| `--paper-3` | `#D8CFBC` | rules, dashed borders |
| `--ink` | `#1B1A18` | headings, body |
| `--ink-2` | `#46423C` | secondary text |
| `--ink-3` | `#756E64` | captions, meta |
| `--rust` | `#A8431E` | primary accent — CTAs, active state, one band per page |
| `--rust-deep` | `#7E3116` | pressed |
| `--ochre` | `#C08B2C` | secondary accent — numerals, dots, marks |
| `--olive` | `#3B4232` | dark ground option, tags |
| `--signal` | `#C8362A` | rare emphasis |
| `--night` | `#16283C` | hero surround, footer |
| `--night-2` | `#22384F` | raised surface on night |
| `--diner-glass` | `#2E5C55` | teal edge accents |
| `--lamp` | `#E8DFA8` | the diner's lit ceiling — glow, links on night |

Type: a geometric/neo-grotesque display face at poster scale with tight tracking (Space Grotesk
or Neue Haas Grotesk if licensed), Inter for body, a mono for numerals and kickers. Scale
13 / 16 / 20 / 28 / 40 / 60px. Space 4-8-12-16-24-32-48-72. Radii 2px and 4px only — the poster
register is squared. Motion `cubic-bezier(.2,.8,.2,1)`, .25s / .45s.

The three-bar mark from the reference posters (a short rust / ochre / ink rule stack) is the one
brand ornament worth carrying into section headers.

## Assets
- `assets/nighthawks.jpg` — *Nighthawks*, Edward Hopper, 1942, Art Institute of Chicago.
  7680×4320. **Confirm rights before launch**, or commission an original illustration in the same
  register. The whole interaction depends only on the image's 16:9 ratio, so a replacement
  illustration can be dropped in and the six shapes retraced.
- Icons: Phosphor Icons if any are needed. The hero uses none.

## Files
- `NighthawksHero.astro` — working Astro port: hotspot data, generated per-hotspot CSS, the
  ~15-line hover script, responsive fallback, reduced-motion handling.
- `tokens.css` — the production palette, type scale, spacing, motion, with usage and contrast notes.
- `Nighthawks Landing.dc.html` — the original HTML prototype (visual reference; ignore its
  dark-UI colours).
- `assets/nighthawks.jpg` — the painting.

## Install (Astro)
1. `src/assets/nighthawks.jpg`, `src/components/NighthawksHero.astro`, `src/styles/tokens.css`.
2. Import `tokens.css` once in your base layout; adjust the `62px` header offset in `.stage`.
3. Render `<NighthawksHero />` at the top of `src/pages/index.astro`, with the six-link pillar
   grid below it.
4. `astro.config.mjs`: `prefetch: { defaultStrategy: 'hover' }`.
5. Create the six pillar routes (`/brand-visibility`, `/competitive-gaps`, `/discovery`,
   `/community`, `/front-of-house`, `/back-of-house`) — the hero's links assume those paths.
6. Verify at three window shapes (wide, square-ish, short) that each cutout still lands on its
   figure. If one drifts, the stage box is not 16:9.
