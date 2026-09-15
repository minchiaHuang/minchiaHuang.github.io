# DESIGN.md — minchiahuang.dev

Direction: **editorial broadsheet**, adapted from the Index design system on Refero Styles
(https://styles.refero.design/style/b1ec2120-ceb0-42d1-9f96-2c9db2bf009b).
Status: in progress on `feat/index-redesign`. The live site still uses the monochrome terminal style.

## 1. Principles

- A printed page, not an app. Flat surfaces, hairline rules, no shadows, no gradients.
- The homepage opens with **one sentence** set large in serif. Key words inside it are the navigation.
- Black and white do all the structural work. Yellow is a marker, never a surface or text colour.
- Long pages are broken by full-width **inverted plates** instead of decoration.

Hard constraints (unchanged from the previous direction):

- Plain HTML + one CSS file + `app.js`. Zero dependencies, zero build step
- Fonts self-hosted in `assets/fonts/` before shipping (the preview may use Google Fonts)
- Light and dark both readable; no horizontal overflow at 360px
- No three.js, particles, WebGL, or scroll parallax
- Keyboard nav: `G` GitHub · `L` LinkedIn · `E` Email · `R` Résumé · `I` Invert

## 2. Colour

Exactly the Index palette: three colours, no greys.

| Token | Default | INVERT | Use |
|---|---|---|---|
| `--paper` | `#ffffff` | `#000000` | Page background |
| `--ink` | `#000000` | `#ffffff` | All text, rules, borders, plate fill |
| `--mark` | `#ffd600` | `#ffd600` | Status dot only |

The page is always white by default, whatever the system setting. Dark exists only through
INVERT (`I`), which swaps `--paper` and `--ink`. Plates use `background: var(--ink); color: var(--paper)`,
so they invert automatically. Hierarchy comes from size, weight and case, not from grey text.

`--mark` must never carry text: on white it fails contrast.

## 3. Typography

Two families only.

| Family | Role |
|---|---|
| Cormorant Garamond 300 | Display: hero sentence, section headings, numerals, brand |
| Inter 400 / 500 | Everything else: body, nav, labels, buttons, captions |

| Step | Spec |
|---|---|
| `hero` | Serif 300, `clamp(34px, 6vw, 72px)`, line-height 1.1, tracking -0.02em |
| `h2` | Serif 300, `clamp(36px, 5vw, 56px)`, line-height 1.05, tracking -0.022em |
| `h3` | Serif 400, 30px, line-height 1.1 |
| `lead` | Inter 400, 18px, line-height 1.55 |
| `body` | Inter 400, 16px, line-height 1.55, max 62ch |
| `small` | Inter 400, 14px |
| `label` | Inter 500, 12px, uppercase, tracking 0.08em |

Rules: negative tracking above 24px, slightly positive tracking at 16px and below.

## 4. Shape and spacing

- Radius: **6px** for links, buttons, chips, keycaps; **16px** for cards. Nothing else
- Borders: always 1px
- Base unit 4px; section gap 64px (48px under 620px); max width 1200px; side gutter 24px (16px under 620px)

## 5. Components

| Component | Rule |
|---|---|
| Inline link | Outlined text: 1px `--ink` border, 6px radius, transparent fill. Default interactive element |
| Primary button | Filled `--ink`, 6px radius. Compact, one per screen at most |
| Status line | 10px `--mark` dot + uppercase label |
| Section head | 1px `--ink` top rule, label on the left, serif h2 below |
| Feature plate | Full-width inverted block for the lead project |
| Card | 16px radius, 1px `--ink` border, image on top |
| Numbered row | Large serif numeral left, body right, 1px rule above |
| Footer | Full-bleed inverted plate |

## 6. Don't

- Add a third font family
- Use yellow for text, buttons, or fills
- Use radii other than 6px and 16px
- Set the serif at weight 400+ for anything above 40px
- Add shadows, gradients, or motion beyond a colour change on hover
