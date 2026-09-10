---
name: Wise-Inspired
colors:
  surface: '#ffffff'
  surface-dim: '#f7f7f8'
  surface-bright: '#ffffff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fafafa'
  surface-container: '#f5f5f5'
  surface-container-high: '#eeeeee'
  surface-container-highest: '#e5e5e5'
  on-surface: '#1a1a2e'
  on-surface-variant: '#5e6278'
  inverse-surface: '#1a3324'
  inverse-on-surface: '#ffffff'
  outline: '#d1d5db'
  outline-variant: '#e5e7eb'
  surface-tint: '#9fe870'
  primary: '#9fe870'
  on-primary: '#1a3324'
  primary-container: 'rgba(159, 232, 112, 0.12)'
  on-primary-container: '#0d5c1a'
  inverse-primary: '#7cc94d'
  secondary: '#5e6278'
  on-secondary: '#ffffff'
  secondary-container: '#f0f1f5'
  on-secondary-container: '#3a3d4e'
  tertiary: '#f59e0b'
  on-tertiary: '#ffffff'
  tertiary-container: '#fef3c7'
  on-tertiary-container: '#92400e'
  error: '#ef4444'
  on-error: '#ffffff'
  error-container: '#fef2f2'
  on-error-container: '#991b1b'
  text-primary: '#1a1a2e'
  text-secondary: '#5e6278'
  text-tertiary: '#9ca3af'
  accent-green: '#9fe870'
  nav-bg: '#1a3324'
  nav-text: '#ffffff'
  border: '#e5e7eb'
  border-focus: '#9fe870'
  shadow-sm: '0 1px 3px rgba(0,0,0,0.06)'
  shadow-md: '0 4px 16px rgba(0,0,0,0.08)'
  shadow-lg: '0 8px 32px rgba(0,0,0,0.12)'
  shadow-xl: '0 16px 48px rgba(0,0,0,0.16)'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 52px
    fontWeight: '800'
    lineHeight: 1.1
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 1.15
    letterSpacing: -0.025em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 1.2
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 1.3
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 1.4
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 1.6
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 1.5
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 1.5
    letterSpacing: 0.005em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 1.4
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 1.3
    letterSpacing: 0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 0.75rem
  md: 1rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-xxs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  space-4xl: 6rem
  container-max: 1120px
  gutter-desktop: 2rem
  gutter-mobile: 1.25rem
---

## Brand & Style

This design system channels Wise's fintech authority into a lightweight utility — a dark green navigation bar that signals trust, a bright green accent that drives action, and a converter-widget hero that puts the tool front and center. The aesthetic fuses **Fintech Trust** with **Utility Clarity**:

- A deep green (`#1a3324`) navigation bar establishes credibility and calm authority.
- A bright electric green (`#9fe870`) powers CTAs, active states, and focus — the action color.
- Clean white surfaces with generous whitespace keep the tool approachable and scannable.
- Subtle shadows and rounded controls create depth without visual noise.

## Colors

The color system operates on a light foundation with a dark header establishing trust.

- **Primary (`#9fe870`)**: The sole accent. Used for primary CTAs, active selection states, and focus rings. Bright, energetic, impossible to miss.
- **Navigation (`#1a3324`)**: Deep green header and footer. White text on dark green signals professionalism and security — the fintech register.
- **Neutral Surface Hierarchy**: `#ffffff` (page background), `#f7f7f8` (subtle variation), `#f5f5f5` (cards and containers). Clean, minimal, breathing room as design.
- **Text Contrast**: Primary text at `#1a1a2e` for immediate readability, secondary at `#5e6278` for supporting content, tertiary at `#9ca3af` for minimal labels.

## Typography

The typographic system uses **Plus Jakarta Sans** — a modern geometric sans with sharp character and excellent legibility at all sizes.

- **Hero Display**: Extra-bold weight at 52px with tight tracking creates a commanding, confident entrance.
- **Headlines**: Bold weights with negative tracking for crisp, editorial presence.
- **Body**: Regular weights with comfortable 1.6 line height for effortless reading.
- **Labels**: Semibold weights with subtle tracking for clean, scannable metadata.

## Layout & Spacing

Layout geometry prioritizes breathing room and centered focus.

- **Container**: Max-width `1120px` centered — generous but focused.
- **Desktop (≥768px)**: Centered content with generous section spacing (4rem–6rem).
- **Mobile (<768px)**: Full-width with 1.25rem gutters, maintaining 48px minimum touch targets.
- **Spacing rhythm**: 8px base unit with generous gaps between sections.

## Elevation & Depth

Depth comes from soft shadows and clean surfaces — never harsh borders.

1. **Page Surface (`#ffffff`)**: The ground plane, clean and open.
2. **Card Layer**: Elevated with `box-shadow: 0 4px 16px rgba(0,0,0,0.08)` and subtle 1px borders.
3. **Hero Card**: Deeper shadow with `box-shadow: 0 8px 32px rgba(0,0,0,0.12)` for emphasis.
4. **Focus State**: Green glow via `box-shadow: 0 0 0 3px rgba(159, 232, 112, 0.3)`.

## Shapes

Soft, consistent rounding with no sharp edges:

- **Interactive Controls (Buttons, Inputs)**: `12px` (0.75rem).
- **Cards & Containers**: `16px` (1rem).
- **Pills & Badges**: Fully rounded (`9999px`).
- **All radii harmonious**: No mixed radii within a single component.

## Components

### Navigation Bar
- Deep green (`#1a3324`) background, full-width, sticky.
- White text, logo + wordmark left, minimal nav right.
- Height `64px` on desktop, `56px` on mobile.

### Primary Button
- Solid `#9fe870` background, `#1a3324` text, 700 weight.
- Height `52px`, full-width on mobile, `16px` radius.
- Hover: brightness decrease with subtle green shadow.
- Active: scale `0.98`.
- Disabled: `0.5` opacity, `not-allowed` cursor.

### Secondary / Ghost Button
- Transparent background, `#5e6278` text.
- Hover: `rgba(0,0,0,0.04)` background, `#1a1a2e` text.
- Same height and radius as primary.

### Input Fields
- White surface, `#e5e7eb` border, `12px` radius.
- Height `auto` for textarea (min 160px).
- Focus: `#9fe870` border with green glow ring.
- Placeholder: `#9ca3af`.

### Cards
- White surface, `16px` radius, soft shadow.
- Subtle 1px border for definition.
- Padding `24px` on desktop, `16px` on mobile.

### Results List
- Inside the hero card, each row is a button.
- Selected: green left border, subtle green background tint.
- Hover: subtle gray background.

### Feature Cards
- White background, `16px` radius, subtle shadow.
- Icon circle with green accent, title, description.
- 3-column grid on desktop, stacked on mobile.

### Trust Badge
- Pill-shaped (`9999px` radius), green background with dark text.
- Small, lightweight, reassuring.
- SVG icon + text.

### Banner / Alert
- Rounded, soft background matching type (error: red tint, warning: amber tint, info: gray tint).
- Icon + message, no harsh borders.

### Footer
- Deep green background, white text.
- Organized columns with links.
- Privacy message prominently displayed.
