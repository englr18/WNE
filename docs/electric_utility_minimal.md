---
name: Electric Utility Minimal
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce3f2'
  on-surface: '#151c27'
  on-surface-variant: '#41493a'
  inverse-surface: '#2a313c'
  inverse-on-surface: '#ebf1ff'
  outline: '#717a68'
  outline-variant: '#c1cab5'
  surface-tint: '#2f6c00'
  primary: '#2f6c00'
  on-primary: '#111827'
  primary-container: '#b6f58c'
  on-primary-container: '#0b2000'
  inverse-primary: '#91d963'
  secondary: '#575e70'
  on-secondary: '#ffffff'
  secondary-container: '#d9dff5'
  on-secondary-container: '#5c6274'
  tertiary: '#575e70'
  on-tertiary: '#ffffff'
  tertiary-container: '#ced4e9'
  on-tertiary-container: '#545b6d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#acf67c'
  primary-fixed-dim: '#91d963'
  on-primary-fixed: '#092100'
  on-primary-fixed-variant: '#225100'
  secondary-fixed: '#dce2f7'
  secondary-fixed-dim: '#c0c6db'
  on-secondary-fixed: '#141b2b'
  on-secondary-fixed-variant: '#404758'
  tertiary-fixed: '#dbe2f8'
  tertiary-fixed-dim: '#bfc6db'
  on-tertiary-fixed: '#141b2b'
  on-tertiary-fixed-variant: '#404758'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce3f2'
  primary-dim: '#86d455'
  surface-canvas: '#f9f9fb'
  surface-card: '#ffffff'
  surface-subtle: '#f2f3f3'
  border-subtle: rgba(17, 24, 39, 0.08)
  border-strong: rgba(17, 24, 39, 0.16)
  text-primary: '#111827'
  text-muted: '#6b7280'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 3rem
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.45'
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  container-max-w: 680px
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
---

## Brand & Style

The design system is engineered for anonymous communication, private interactions, and contemporary social utility. It fuses refined modern minimalism with an unapologetic, high-energy electric signature. 

### Aesthetic Movement & Philosophy
- **High-Contrast Digital Minimal:** The aesthetic prioritizes absolute visual clarity, reduced friction, and hyper-focused content hierarchy. Superfluous chrome is eliminated in favor of clean structure, intentional whitespace, and razor-sharp typographic discipline.
- **Electric Accentuation:** Replacing traditional conservative greens, the primary brand accent (#9FE870) acts as an electric beacon. It injects vitality and forward-looking optimism while strictly pairing with deep ink neutrals (#111827) to maintain pristine readability and WCAG AAA-level contrast in light environments.
- **Trust, Anonymity & Vitality:** The emotional atmosphere balances the safety of private, discrete expression with the engaging pulse of live digital social spaces.

### Target Audience & Voice
- Designed for mobile-first creators, anonymous dialog platforms, and social communities valuing privacy without feeling sterile.
- The voice is candid, lucid, vibrant, and direct.

## Colors

The color palette centers on the high-visibility electric neon lime (`#9FE870`), anchored by deep ink neutrals and balanced slate tones. Because `#9FE870` has very high intrinsic luminance, it is strictly treated as a light-value surface rather than a dark accent.

### Color Tokens & Usage
- **Primary Brand (`#9FE870`):** Electric neon lime. Acts as the visual driver for primary call-to-action buttons, verified state badges, key focal points, active indicators, and high-impact micro-interactions.
- **On-Primary (`#111827`):** Deep ink slate. All text, iconography, and glyphs placed over `#9FE870` must use `#111827` to guarantee robust contrast (contrast ratio > 10.5:1, easily exceeding WCAG AAA standards). White text on `#9FE870` is strictly forbidden.
- **Secondary (`#111827`):** High-priority structural elements, primary headings, prominent dark buttons, and base typography.
- **Tertiary / Neutral Slate (`#575E70` / `#6B7280`):** Mid-tone neutrals reserved for secondary copy, muted badges, inactive tabs, and supporting icon strokes.
- **Surfaces & Canvases (`#F9F9FB` / `#F2F3F3` & `#FFFFFF`):** Multi-tier surface system. The global base canvas utilizes `#F9F9FB` to mitigate eye strain; contained cards, sheets, and popovers employ pure `#FFFFFF` for sharp elevation.

## Typography

Typography relies entirely on `Inter` for unmatched clarity, neutral geometry, and crisp legibility across high-density mobile interfaces.

### Hierarchy Guidelines
- **Headings & Display:** Display styles employ tight negative tracking (`-0.03em` to `-0.02em`) and heavy weights (`700` or `600`) to anchor views with decisive structure. On smaller viewports, dedicated mobile display tokens (`display-lg-mobile` and `headline-lg-mobile`) keep headline scale proportional without awkward wraps.
- **Body:** Standard body text is balanced with open line-heights (`1.45` to `1.6`) for friction-free reading of user-generated content and questions.
- **Labels & Microcopy:** Badges, timestamps, and interactive button text use `Inter SemiBold (600)` with relaxed tracking (`+0.01em` to `+0.02em`) to guarantee quick visual parsing when set against vibrant backgrounds like `#9FE870`.

## Layout & Spacing

The layout model is anchored on an 8-point spatial system (with 4px half-steps for fine alignment), optimized for a focused, centered content stream.

### Architecture & Breakpoints
- **Streamlined Feed (Single-Column Shell):** Core content containers enforce a maximum width of `680px`. This keeps reading lines comfortable and mobile composition controls easily within thumb reach.
- **Mobile (< 640px):** Views adopt edge-to-edge layouts bounded by `1rem` (`16px`) side margins. Actions expand to full container width for touch ergonomics.
- **Desktop & Tablet (≥ 640px):** Content resides inside a floating card stack with `1.5rem` (`24px`) side gutters, flanked by clean background whitespace.

## Elevation & Depth

Depth is established through soft surface transitions, whisper-quiet perimeter borders, and ambient diffusion rather than harsh drop shadows.

- **Canvas (Level 0):** Neutral `#F9F9FB` surface serving as the foundational backdrop.
- **Cards & Elevated Containers (Level 1):** Solid `#FFFFFF` surfaces defined by a delicate boundary line (`1px solid rgba(17, 24, 39, 0.08)`) and an ultra-diffused shadow:
  `box-shadow: 0 1px 3px 0 rgba(17, 24, 39, 0.04), 0 1px 2px -1px rgba(17, 24, 39, 0.03);`
- **Overlays, Drawers & Modals (Level 2):** Floating interactive sheets with enhanced separation:
  `box-shadow: 0 10px 25px -5px rgba(17, 24, 39, 0.08), 0 8px 10px -6px rgba(17, 24, 39, 0.04);`
- **Focus Rings:** High-visibility double ring consisting of a `2px solid #111827` primary boundary offset by a `2px solid #9FE870` luminous halo.

## Shapes

The shape system employs roundedness level 2 (`rounded-md: 0.75rem`, `rounded-lg: 1rem`, `rounded-xl: 1.5rem`), creating a contemporary, welcoming feel that balances structural precision with tactile softness.

- **Buttons & Text Inputs:** `0.75rem` (`12px`) standard radius, offering modern ergonomic tap surfaces.
- **Cards & Message Bubbles:** `1rem` (`16px`) to `1.5rem` (`24px`), giving distinct friendly definition to user submissions and conversation threads.
- **Pills & Status Chips:** Full pill radius (`9999px`) for category tags, verification badges, and floating action capsules.

## Components

### Buttons
- **Primary Brand Button:** Solid `#9FE870` background with bold `#111827` text and icons. Never use white text on this button. Hover state deepens smoothly to `#86D455`. Active state scales subtly (`scale(0.98)`).
- **Secondary Ink Button:** Solid `#111827` background with `#FFFFFF` text. Used for secondary high-emphasis or administrative actions. Hover state transitions to `#2A313D`.
- **Subtle / Outline Button:** `#FFFFFF` surface with `1px solid rgba(17, 24, 39, 0.12)` border and `#111827` text. Hover shifts background to `#F2F3F3`.

### Input Fields & Textareas
- **Anonymous Message Composer:** Multi-line text field hosted on `#FFFFFF` with `1px solid rgba(17, 24, 39, 0.12)` border and `12px` radius. Focus transition replaces the border with a crisp `2px solid #111827` stroke and a subtle `#9FE870` glow.
- **Single-Line Inputs:** `44px` height, `#FFFFFF` background, `14px 16px` padding, placeholder text in `#6B7280`.

### Chips & Badges
- **Active / Verified Chip:** `#9FE870` background with `#111827` label text (`label-sm` weight 600), rounded in full pill (`9999px`).
- **Neutral Chip:** `#F2F3F3` background with `#575E70` text for inactive or secondary tags.

### Checkboxes & Radio Buttons
- **Checkbox:** `20px × 20px`, `6px` radius with `1.5px solid rgba(17, 24, 39, 0.2)`. When checked, surface fills with `#9FE870` and renders a bold `#111827` checkmark.
- **Radio Button:** `20px` diameter circle. Selected state displays an outer ring in `#111827` with an inner dot in `#9FE870`.

### Cards
- Standard feed cards use `#FFFFFF` fill, `16px` border-radius, `1px solid rgba(17, 24, 39, 0.08)` border, and Level 1 elevation. Accompanying action highlights (e.g., share prompt or copy link) feature `#9FE870` hover accents with `#111827` icon glyphs.