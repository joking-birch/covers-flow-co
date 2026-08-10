# design-sync notes — covers-flow-co

- This repo is an Astro marketing site, NOT a component library. There are no React
  components to bundle: the sync is a **design-language import** (tokens + base CSS +
  fonts + guidelines + hand-authored foundation cards) using the converter's
  tokens-only path (empty-bodied `_ds_bundle.js`). The one component,
  `src/components/NighthawksHero.astro`, is Astro-only and deliberately not ported —
  ship-what-you-built rule.
- Design language source of truth: `src/styles/tokens.css` (palette, type scale,
  spacing, motion, plus usage/contrast rules in its trailing comment) and
  `src/styles/global.css` (base styles + the three-bar `.mark` motif).
- Fonts come from @fontsource packages in node_modules; the site loads exactly
  Space Grotesk 500/700, Inter 400/500, IBM Plex Mono 400 (see
  `src/layouts/Layout.astro`) — mirrored in `extraFonts`.
- Synced project: **CoversFlow** (`658cc90c-6a64-4ab3-adde-389acdd1176c`). The user's
  account also has a separate "Nocturne" design project — unrelated, don't touch it.

## Build gotchas (all already encoded in config.json)

- The converter requires react/react-dom under `--node-modules` even for a
  tokens-only DS (it vendors them for preview cards). This repo has no React:
  `npm i --no-save react react-dom` before building. Astro's dependency tree does
  not carry them.
- `--entry` must point at `.design-sync/empty-entry.mjs` (a committed 2-line
  `export {}`), otherwise `resolvePackage` tries `node_modules/covers-flow-co` —
  which npm never self-installs — and dies on ENOENT.
- `cfg.tokensGlob` is only honored when `cfg.tokensPkg` is also set, and there is no
  tokens package here. Forked `lib/css.mjs` → `.design-sync/overrides/css.mjs` so
  `copyTokens` resolves the glob relative to the repo root when `tokensPkg` is unset.
  Declared in `cfg.libOverrides`. Without it, `tokens/tokens.css` never lands and the
  whole palette is missing from the `styles.css` closure.
- Playwright: this Mac has chromium build **1208** cached in
  `~/Library/Caches/ms-playwright`, which pins **playwright@1.58.0**. Install that
  exact version into `.ds-sync/` or the render check fails with
  "Executable doesn't exist".
- Foundation cards must live in **`_preview/`**, not `components/<group>/<Name>/`.
  Putting them under `components/` trips validate's `count mismatch: N previews vs 0
  components` (the meta reports 0 components for a tokens-only DS). Cards in
  `_preview/` link `../styles.css` and carry no `@dsCard` first line; they are
  registered explicitly via `DesignSync(register_assets)`.
- Card bodies must be wrapped in `<div id="root">` — validate's render check reads
  `#root` / `[id^="r"]` and reports `root empty` for content that sits directly in
  `<body>`, even though the screenshot is fine.

## Known render warns

- None. Final validate: `✓ bundle is complete`, render check 0/0 (tokens-only DS has
  no component previews to check; the four `_preview/` cards were verified visually
  in a browser at 800px instead).

## Prototype reskin (2026-08-07)

- `design_handoff_nighthawks_hero/Nighthawks Landing.dc.html` was reskinned off the old
  Nocturne dark blue-grey theme onto the CoversFlow palette, and repointed from
  `_ds/nocturne-337abc1e-…` to `_ds/coversflow-658cc90c-…`. 173 replacements across 36
  groups; geometry, animation timings and copy verified byte-identical (fingerprint diff
  over clip-paths, SVG coords, hotspot positions and animation shorthands).
- **The ground flip is the trap.** The page ground went dark → `--paper`, so the root text
  colour is now `--ink`. Every surface on a `--night` field must set `color: var(--paper)`
  explicitly; the six pillar cards inherited `--ink` on `--night` (~1.1:1, invisible) until
  patched. This is now documented in `conventions.md` so the design agent doesn't repeat it.
- Contrast audit of the reskinned page found two remaining items, both inherited from the
  DS's own intent and matching the live site, so left alone: `--ochre` numerals on paper
  are 2.61:1 (tokens.css explicitly assigns ochre to "numerals, dots, highlights"), and
  `--ink-3` captions at 11.5px are 4.35:1, just under the 4.5 threshold.

## Re-sync risks

- The four foundation cards in `.design-sync/foundations/` are **hand-authored** and
  are copied into `ds-bundle/_preview/` by hand — no converter step regenerates them.
  After any edit to `tokens.css`, re-check that the swatches, hex labels, and type
  steps in those cards still match, then re-copy and re-upload.
- `extraFonts` points into `node_modules/@fontsource/*` — a fontsource major bump or
  lockfile change could move/rename those CSS files; re-check against the imports in
  `src/layouts/Layout.astro`.
- The `css.mjs` fork will drift from the bundled `lib/css.mjs`; diff them on re-sync
  and merge upstream changes.
- `.design-sync/conventions.md` enumerates every token by name. Any token renamed or
  removed in `tokens.css` silently makes the header lie — re-run the validation grep
  (every `--name` in conventions.md must exist in `ds-bundle/tokens/tokens.css`).
