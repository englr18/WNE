---
name: WA Number Extractor
description: Extract phone numbers from text and open WhatsApp chats instantly
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
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce3f2'
  primary-dim: '#86d455'
  surface-canvas: '#f9f9fb'
  surface-card: '#ffffff'
  surface-subtle: '#f2f3f3'
  border-subtle: 'rgba(17, 24, 39, 0.08)'
  border-strong: 'rgba(17, 24, 39, 0.16)'
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

# Design System: WA Number Extractor

## Overview

**Creative North Star: "The Electric Utility"**

A high-contrast digital minimal system built for anonymous communication and private interactions. The aesthetic prioritizes absolute visual clarity, reduced friction, and hyper-focused content hierarchy. Superfluous chrome is eliminated in favor of clean structure, intentional whitespace, and razor-sharp typographic discipline. The electric neon lime accent (#9FE870) acts as a visual beacon, injecting vitality while deep ink neutrals maintain pristine readability.

**Key Characteristics:**
- Single typeface (Inter) across all roles — no decorative fonts
- Electric accent on primary actions only — rarity earns attention
- Soft surface transitions with ambient shadows — no harsh borders
- Rounded corners (0.75rem–1rem) for modern ergonomic feel
- 8-point spatial system with centered 680px content stream

## Colors

The palette centers on high-visibility electric neon lime anchored by deep ink neutrals.

### Primary
- **Electric Lime** (#2f6c00): Primary brand accent. Used for CTA buttons, selected states, active indicators, and focus halos. Reserved for ≤15% of any screen — its rarity is the point.
- **Primary Dim** (#86d455): Hover state for primary elements. Deeper, more grounded lime.
- **Primary Container** (#b6f58c): Tinted background for selected items and active regions.

### Secondary
- **Slate** (#575E70): Secondary structural elements, muted badges, inactive states.
- **Secondary Container** (#d9dff5): Background for secondary chips and tags.

### Neutral
- **On Surface** (#151c27): Primary text, headings, dark buttons. Never pure black.
- **Text Muted** (#6B7280): Secondary copy, placeholders, timestamps.
- **Surface Canvas** (#f9f9fb): Global base canvas. Mitigates eye strain.
- **Surface Card** (#ffffff): Elevated containers — cards, sheets, popovers.
- **Surface Subtle** (#f2f3F3): Hover backgrounds, subtle differentiation.

### Error
- **Error** (#ba1a1a): Destructive actions, error states.
- **Error Container** (#ffdad6): Error banner backgrounds.
- **On Error Container** (#93000a): Error text on container backgrounds.

### Named Rules

**The Electric Accent Rule.** The primary lime (#9FE870 / #2f6c00) appears on ≤15% of any given screen. Its rarity is the point — it signals action, selection, and verification, not decoration.

**The Deep Ink Rule.** All text uses #111827 or #151c27, never pure black (#000000). The slight warmth maintains readability without harshness.

## Typography

**Display Font:** Inter (system-ui fallback)
**Body Font:** Inter (system-ui fallback)

**Character:** Unmatched clarity, neutral geometry, and crisp legibility across high-density mobile interfaces. A single typeface eliminates visual friction from font switching.

### Hierarchy
- **Display** (700, 3rem/1.15, tracking -0.03em): Hero headlines on desktop. Tight negative tracking for decisive structure.
- **Display Mobile** (700, 2.25rem/1.2, tracking -0.025em): Headlines on small viewports. Proportional scale without awkward wraps.
- **Headline LG** (700, 2rem/1.25, tracking -0.02em): Section headings.
- **Headline MD** (600, 1.25rem/1.4, tracking -0.01em): Subsection headings.
- **Body LG** (400, 1.125rem/1.6, tracking -0.005em): Primary reading text. Open line-height for friction-free reading.
- **Body MD** (400, 1rem/1.5): Standard body text.
- **Label MD** (600, 0.875rem/1.25, tracking +0.01em): Buttons, badges, interactive text.
- **Label SM** (600, 0.75rem/1.2, tracking +0.02em): Timestamps, microcopy, chips.

### Named Rules

**The Single Face Rule.** Inter is the only typeface. Labels use weight 600, not a separate mono font. Display uses weight 700 with tight tracking. No decorative, script, or display-only faces.

## Layout

8-point spatial system with 4px half-steps for fine alignment. Single-column centered content stream optimized for mobile-first composition.

- **Container max-width:** 680px — keeps reading lines comfortable
- **Mobile (< 640px):** Edge-to-edge, 1rem (16px) side gutters
- **Desktop (≥ 640px):** Floating card stack, 1.5rem (24px) side gutters
- **Header margin-bottom:** 3rem
- **Section margin-top:** 1.5rem
- **Row padding:** 0.75rem 1rem

## Elevation & Depth

Depth is established through soft surface transitions, whisper-quiet borders, and ambient diffusion rather than harsh drop shadows.

- **Canvas (Level 0):** #f9f9fb global backdrop
- **Cards (Level 1):** #ffffff with `1px solid rgba(17, 24, 39, 0.08)` and `box-shadow: 0 1px 3px 0 rgba(17, 24, 39, 0.04), 0 1px 2px -1px rgba(17, 24, 39, 0.03)`
- **Overlays (Level 2):** Enhanced separation with `box-shadow: 0 10px 25px -5px rgba(17, 24, 39, 0.08), 0 8px 10px -6px rgba(17, 24, 39, 0.04)`
- **Focus Rings:** Double ring — `2px solid #111827` boundary offset by `2px solid #9FE870` luminous halo

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only on elevated containers (cards, sheets). No gratuitous shadows on buttons or inline elements.

## Shapes

Roundedness level 2 creates a contemporary, welcoming feel that balances structural precision with tactile softness.

- **Buttons & Inputs:** 0.75rem (12px) radius — modern ergonomic tap surfaces
- **Cards & Containers:** 1rem (16px) radius — friendly definition to content blocks
- **Pills & Chips:** Full radius (9999px) — category tags, verification badges
- **Banners:** 0.75rem (12px) radius — consistent with interactive elements

## Components

### Buttons
- **Primary Brand:** Solid #2f6c00 background, #111827 text (Inter 600). Never white text on primary. Hover deepens to #86d455. Radius 0.75rem.
- **Subtle / Ghost:** Transparent background, 1px border-subtle, text-muted. Hover shifts to border-strong with surface-subtle background. Radius 0.75rem.

### Input Fields & Textareas
- **Text Field:** White background, 1px border-subtle, 0.75rem radius. Focus replaces border with 2px on-surface stroke and primary glow shadow.
- **Multi-line:** 44px min-height, 1rem padding, placeholder in text-muted.

### Chips & Badges
- **Active Chip:** Primary-container background, primary text (label-sm), full pill radius.
- **Neutral Chip:** Surface-subtle background, secondary text, full pill radius.

### Cards
- White fill, 1rem radius, 1px border-subtle, Level 1 elevation. Internal padding 0.75rem 1rem.

### Result Rows
- Hairline top border on each row. Radio-dot: 18px circle, 2px border-strong, fills with primary when active. Selected row: primary-container background, 3px primary left border.

## Do's and Don'ts

### Do:
- **Do** use Inter for all text — labels included. Weight 600 replaces mono.
- **Do** reserve lime accent for actions and selection only.
- **Do** use soft shadows on cards and elevated containers.
- **Do** maintain 0.75rem minimum radius on interactive elements.
- **Do** use the double focus ring (2px ink + 2px primary halo).

### Don't:
- **Don't** use white text on the primary lime button — always #111827.
- **Don't** add shadows to buttons or inline elements.
- **Don't** use pure black (#000000) for text — use #111827 or #151c27.
- **Don't** exceed 15% screen coverage with the primary accent.
- **Don't** mix typefaces — Inter is the only font.
