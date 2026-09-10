# Design System

<!-- impeccable:design-schema 1 -->

## Visual World

Design Annual plate section — a precision print-production aesthetic where every element is placed with registration-mark intent. The interface reads as a measured specimen sheet: hairline rules, crosshair registration marks, one grotesque typeface, and an uncoated-stock ground.

## Palette

| Role | Light | Dark |
|---|---|---|
| Ground | #F5F4F6 | #16171D |
| Ground warm | #FAF6F5 | #1C1D24 |
| Ground green | #EEF3EF | #1A1F1C |
| Ink | #16181A | #F3F4F6 |
| Ink secondary | #6B6375 | #9CA3AF |
| Accent (primary) | #9FE870 | #9FE870 |
| Accent hover | #8CD460 | #B5F08A |
| Hairline | #C9C7C4 | #2E303A |
| Error bg | #FEF2F2 | #2A1215 |
| Error border | #FCA5A5 | #7F1D1D |
| Error text | #991B1B | #FCA5A5 |
| Warning bg | #FEFCE8 | #2A2410 |
| Warning border | #FDE047 | #854D0E |
| Warning text | #854D0E | #FDE047 |

## Typography

- **Display:** DM Sans, 500 weight, 2rem, tracking -0.02em
- **Body:** DM Sans, 400 weight, 17px/1.55
- **Labels:** JetBrains Mono, 600 weight, 11px, uppercase, tracking 0.14em
- **Numbers:** DM Sans, 400 weight, 17px/1.55

## Spacing

- Container max-width: 520px (mobile), 640px (desktop)
- Gutter: 20px (mobile), 40px (desktop)
- Header margin-bottom: 40px
- Section margin-top: 24px
- Row padding: 14px 16px

## Components

### Plate (textarea area)
- Relative container with crosshair marks at four corners
- Crosshairs: 12px, hairline color, plus-shaped via pseudo-elements
- Textarea: warm-ground background, 1px hairline border, no border-radius
- Focus state: accent border color

### Result rows
- Hairline top border on each row, hairline bottom on last
- Radio-dot: 18px circle, 2px hairline border, fills with accent when active
- Selected row: ground-green background, accent border
- Index label: mono uppercase, secondary ink color

### CTA button
- Full-width, filled accent background
- Mono caps label, bold weight, 0.08em tracking
- Disabled: 0.4 opacity, not-allowed cursor
- Focus: 2px ink outline, 3px offset

### Banners
- 1px border, specific background tint per type
- Icon: 18px circle with border, centered glyph
- role="alert" for screen readers

### Ghost buttons (Paste, Clear)
- Mono uppercase labels, transparent background
- 1px hairline border
- Hover: ink color border and text

## Interaction

- Real-time extraction on input change (no extract button)
- Radio-like selection: click to select, click again to deselect
- Single number auto-selects; multiple requires manual selection
- CTA opens wa.me/<E164> in new tab
- Enter key opens WhatsApp when a number is selected
- Clear resets all state and focuses textarea

## Accessibility

- Textarea has sr-only visible label
- All buttons keyboard-accessible with visible focus-visible outlines
- Radio group with role="radiogroup" and aria-checked
- Disabled CTA has aria-describedby with reason
- Error banners use role="alert"
- Tap targets meet minimum mobile size
- Focus-visible: 2px accent outline with offset

## Browser Surfaces

- Text selection: accent-tinted background (rgba(159, 232, 112, 0.3))
- Scrollbar: 6px webkit scrollbar, hairline track, hairline thumb
- Caret: inherits textarea color

## Responsive

- Mobile-first single column
- Content max-width constrains on desktop
- Textarea min-height: 160px
- Gutter doubles on desktop (20px → 40px)
