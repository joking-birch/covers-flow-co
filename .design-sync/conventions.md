# CoversFlow design language — how to build with it

This is a **tokens-only design system**: there are no importable components. Build
every screen from plain HTML/JSX you style yourself, using the CSS custom properties
below — they are all defined in `tokens/tokens.css` (loaded via `styles.css`), which
also carries the authors' usage rules as comments. Read that file before styling.
Base styles in `_ds_bundle.css` set the page defaults: `--paper` background, `--ink`
text, `--font-body` at `--step-0`, line-height 1.6.

## The register
Mid-century poster / newsprint: warm paper grounds, near-black ink, accents used as
**lines, rules, and small blocks — never full-page floods**. Squared corners
(`--radius-sm` 2px / `--radius-md` 4px). At most ONE full-width `--rust` band per page.

## Tokens (the complete vocabulary)
- **Grounds**: `--paper` #F3EEE4 (page), `--paper-2` (alternate band / card),
  `--paper-3` (rules, dividers, disabled)
- **Ink**: `--ink` (headings, body), `--ink-2` (secondary text), `--ink-3` (captions, meta)
- **Accents**: `--rust` (primary: CTAs, active state, rules; pressed → `--rust-deep`),
  `--ochre` (numerals, dots, highlights), `--olive` (dark ground option, tags),
  `--signal` (rare: alerts, one word in a headline)
- **Night grounds**: `--night` (hero surround, footer), `--night-2` (raised surface on
  night), `--diner-glass` (teal edge accents, focus rings on night), `--lamp` (glow,
  highlights, links on dark)
- **Type**: `--font-display` (Space Grotesk — headings), `--font-body` (Inter),
  `--font-mono` (IBM Plex Mono — numerals, kickers). Scale: `--step--1` 13px captions,
  `--step-0` 16px body, `--step-1` 20px lead, `--step-2` 28px h3, `--step-3` 40px h2,
  `--step-4` 60px h1. Tracking: `--tracking-tight` (headings),
  `--tracking-caps` (uppercase kickers).
- **Space**: `--s-1` 4px → `--s-8` 72px (4, 8, 12, 16, 24, 32, 48, 72)
- **Motion**: `transition: … var(--dur-fast) var(--ease)` (0.25s) or `--dur` (0.45s)

## Recipes the authors specified
- **Buttons**: 1px `--ink` border on transparent, label `--ink`; hover fills `--rust`
  with `--paper` text; pressed `--rust-deep`.
- **Focus**: `outline: 2px solid var(--rust); outline-offset: 2px` on paper;
  `--lamp` on night grounds.
- **Contrast floor**: `--rust` on `--paper` is 5.2:1 — fine for headings, buttons,
  18px+ text, NOT for 13px body. Body text is always `--ink`/`--ink-2`.
- **The three-bar mark** (section-heading motif, class shipped in `_ds_bundle.css`):
  `<div class="mark"><i></i><i></i><i></i></div>` above a heading — rust/ochre/ink bars.
- **Night surfaces need an explicit text colour.** The page ground is `--paper` and the base
  stylesheet sets body text to `--ink`, so any panel you put on `--night` / `--night-2` must set
  `color: var(--paper)` on the container. Inheriting gives you `--ink` on `--night` — about
  1.1:1, invisible. Inside such a panel: body text `--paper-2`, links and CTAs `--lamp`,
  numerals `--ochre`, hairlines and chip borders `1px dashed var(--paper-3)`.

## Idiomatic example
```jsx
<section style={{ background: 'var(--paper)', padding: 'var(--s-7) var(--s-5)' }}>
  <div className="mark"><i /><i /><i /></div>
  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--step--1)',
      letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
      color: 'var(--ochre)', margin: 0 }}>01 · Brand Visibility</p>
  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--step-3)',
      letterSpacing: 'var(--tracking-tight)', margin: 'var(--s-2) 0 var(--s-4)' }}>
    Own your name in the results
  </h2>
  <button style={{ background: 'transparent', border: '1px solid var(--ink)',
      color: 'var(--ink)', font: '500 var(--step-0) var(--font-body)',
      padding: 'var(--s-3) var(--s-5)', borderRadius: 'var(--radius-sm)',
      transition: 'all var(--dur-fast) var(--ease)' }}>
    See the audit
  </button>
</section>
```

`guidelines/` holds the Nighthawks hero handoff — the design intent for the homepage.
