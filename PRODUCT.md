# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Individuals and freelancers who frequently receive contact numbers from informal sources — forwarded WhatsApp/Telegram groups, social media comments, manual notes — and want to open a WhatsApp chat without manually copying and pasting numbers.

## Product Purpose

WA Number Extractor is a PWA that instantly extracts phone numbers from pasted text (or manual input), normalizes them to E.164 format, and opens a WhatsApp chat via `wa.me`. It exists to eliminate the friction of manually finding, copying, and formatting phone numbers from messy text before reaching out on WhatsApp.

Success means: a user pastes messy text and is in a WhatsApp chat within seconds.

## Positioning

100% client-side processing — no data ever leaves the device. No backend, no tracking, no server dependency. The app is a privacy-first utility that works offline for page load (redirect to `wa.me` requires internet). This positions it against any server-dependent contact tools that require uploading text to a third party.

## Operating Context

- User receives a forwarded message, social media comment, or note containing phone numbers.
- User opens the PWA (installed or via browser) and pastes the text into a single textarea.
- App extracts and normalizes numbers in real time as the user types or pastes.
- If one number is found, it's auto-selected and the user taps "Buka WhatsApp."
- If multiple numbers are found, the user picks one from a list, then taps the button.
- Redirect happens via `https://wa.me/<E.164 number>` with no pre-filled message.

## Capabilities and Constraints

**Core capabilities:**
- Clipboard paste via `navigator.clipboard.readText()` with graceful fallback.
- Real-time regex extraction of phone numbers from free-form text.
- E.164 normalization for Indonesian numbers (08xx → +628xx, 628xx → +628xx) and international formats with explicit `+` or country code.
- Default to +62 (Indonesia) for ambiguous local-format numbers without country code.
- Manual number input as an alternative to paste.
- Single-column mobile-first layout, responsive to desktop.
- PWA installable with service worker for offline page caching.

**Constraints:**
- 100% client-side — no data sent to any server.
- No backend, no authentication, no database.
- No pre-filled WhatsApp messages (v1.0).
- No WhatsApp app detection — `wa.me` fallback is browser/OS default behavior.
- No number history or multi-device sync.
- No bulk import or list management.
- No entity extraction beyond phone numbers.
- Text input up to ~10,000 characters recommended for performance.
- iOS Safari 17+ and Android Chrome (modern browsers only).

## Brand Commitments

- App name: WA Number Extractor (or `wne` as project shorthand).
- Generic chat icon — no official WhatsApp logo to avoid implying a Meta-affiliated product.
- Voice: friendly and casual. Copy should be light and approachable (e.g., "Found 3 numbers! Pick one to chat.").
- Visual identity: designed from scratch — no inherited brand constraints.

## Evidence on Hand

- Full PRD at `docs/PRD.md` with user stories, functional/non-functional requirements, and technical stack.
- Detailed UX specification at `docs/UX.md` with wireframes, interaction flows, state tables, and accessibility requirements.
- Current codebase is Vite + React + TypeScript starter template (not yet implemented for this product).

## Product Principles

1. **Privacy first.** All processing is client-side. No data leaves the device. No tracking, no analytics, no server calls.
2. **One-tap to chat.** The path from paste to WhatsApp should be as short as humanly possible. Minimize steps, decisions, and friction.
3. **Clear feedback, no guessing.** Every state — empty input, no numbers found, multiple candidates, valid selection — has a clear visual signal. The user always knows what's happening.
4. **Mobile-first, always.** The primary use case is a phone. Design for thumb reach, tap targets, and small screens first. Desktop is a bonus, not the priority.
5. **Disposable by design.** The app doesn't need to remember anything. No history, no accounts, no state persistence between sessions. Open, extract, chat, done.

## Accessibility & Inclusion

- Textarea with visible label, not placeholder-only.
- All interactive elements keyboard-accessible.
- Selected state uses more than color (checkmark + border + background).
- Disabled buttons include `aria-describedby` explaining why.
- Error banners use `role="alert"`.
- Tap targets meet minimum size for mobile.
- Focus states are clearly visible.
