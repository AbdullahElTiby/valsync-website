---
name: VALSYNC Website
description: A privacy-first Valorant companion landing page — tactical, understated, earnest.
colors:
  void-navy: "oklch(0.127 0.033 254)"
  surface-steel: "oklch(0.162 0.031 253)"
  surface-elevated: "oklch(0.208 0.028 253)"
  signal-red: "oklch(0.628 0.223 22)"
  signal-red-glow: "oklch(0.78 0.10 22)"
  telemetry-cyan: "oklch(0.779 0.187 171)"
  telemetry-gold: "oklch(0.804 0.143 85)"
  telemetry-green: "oklch(0.65 0.17 145)"
  ink-primary: "oklch(0.919 0.012 255)"
  ink-muted: "oklch(0.65 0.01 255)"
  border-divider: "oklch(0.30 0.02 255)"
typography:
  display:
    fontFamily: "Saira, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5.5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Saira, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Saira, system-ui, sans-serif"
    fontSize: "clamp(16px, 1.1vw, 18px)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Saira, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.sm}"
    padding: "12px 28px"
  feature-item:
    backgroundColor: "{colors.surface-steel}"
    rounded: "{rounded.md}"
    padding: "24px"
  privacy-card:
    backgroundColor: "{colors.surface-steel}"
    rounded: "{rounded.lg}"
    padding: "clamp(32px, 4vw, 48px)"
---

# Design System: VALSYNC Website

## 1. Overview

**Creative North Star: "The Tactical Readout"**

VALSYNC's surface is a HUD that earns its place mid-match: precise, private, and quietly competent. Every color is a signal; every layout choice is telemetry, not decoration. The page feels like it was designed by people who play Valorant — not by a marketing team guessing what gamers like.

Dark mode is not a preference choice; it is the natural state. A Radiant player checks their companion app in a dark room, one monitor glow, late at night. The near-black background (`void-navy`) absorbs ambient light; surfaced elements step forward in measured lightness increments. The scanline overlay (2.5% opacity) is the system's only texture — a quiet nod to the game's CRT-influenced aesthetic, never a full-screen spectacle.

This system explicitly rejects: neon gradients, glow borders, glassmorphism stacks, pastel-brand SaaS, cluttered stat-tracker density, and any visual treatment that reads as "for gamers" in the esports-hype sense. The voice is Tactical. Understated. Earnest.

**Key Characteristics:**
- Dark-first, never light-by-default
- Signal-colored accents used as telemetry: red for emphasis, cyan for information, gold for highlights
- Single-family sans-serif typography with committed weight contrast
- Tonal layering over shadows — depth is lightness, not elevation
- Zero decorative elements; everything on screen carries information

## 2. Colors: The Signal Palette

The palette is structured as a military-readout color system: a deep void background, two surfacing steps, four signal colors, and two ink tones. Every hue has a tactical role.

### Primary
- **Signal Red** (`oklch(0.628 0.223 22)`): CTAs, the Valorant red accent in the hero headline, logo mark, primary buttons, and any element that demands the user's action. Used on ≤15% of any screen surface. Paired exclusively with white text on fills.
- **Signal Red Glow** (`oklch(0.78 0.10 22)`): Text highlights, privacy-item headings, emphasis that should feel warm rather than urgent. A glance-shot of the primary at lower chroma.

### Secondary
- **Telemetry Cyan** (`oklch(0.779 0.187 171)`): Secondary information, readout accents, focus rings, hover states, badge text, feature-icon tints. The "data" color — it signals "this is information, not action."
- **Telemetry Gold** (`oklch(0.804 0.143 85)`): Tertiary highlights, trust-signal dots, gold-accented feature icons. Used sparingly for warm contrast against the cyan.
- **Telemetry Green** (`oklch(0.65 0.17 145)`): Positive trust signals, replay/map-related feature icons, success indicators.

### Neutral
- **Void Navy** (`oklch(0.127 0.033 254)`): App canvas and body background. Slightly blue-tinted near-black — deep enough to absorb ambient light, tinted enough to feel deliberate rather than "off-black."
- **Surface Steel** (`oklch(0.162 0.031 253)`): Cards, panels, feature items, the privacy block. One lightness step above void.
- **Surface Elevated** (`oklch(0.208 0.028 253)`): Hover states, lifted containers. Rarely used at rest.
- **Ink Primary** (`oklch(0.919 0.012 255)`): All body text, headings, button text on fills. Near-white with a blue cast matching the background's hue.
- **Ink Muted** (`oklch(0.65 0.01 255)`): Secondary text, captions, metadata, footer copy.
- **Border Divider** (`oklch(0.30 0.02 255)`): Section dividers, card borders, outline rings.

### Named Rules
**The Signal-Only Rule.** Accent colors are used exclusively as signal telemetry. A cyan element signals "information." A gold element signals "highlight." A green element signals "positive/trust." Never use an accent color purely for decoration; if it doesn't carry meaning, it stays neutral.

**The White-on-Signal Rule.** Any text rendered on a saturated signal-color fill (Signal Red, Telemetry Cyan, Telemetry Gold, Telemetry Green) must be white (Ink Primary). Dark text on a signal fill reads as muddy and is prohibited.

## 3. Typography

**Primary Font:** Saira (variable: weight 100–900, width 75–125), with `system-ui` and `sans-serif` fallbacks.

**Character:** Saira is a wide-aperture geometric sans with a technical precision feel. Its variable width axis (75–125) allows condensed labels without switching families. The single-family approach is a deliberate commitment: one voice, many weights, zero gimmicks. No display-serif counterpoint, no italic drop caps, no mono for "technical" signaling — the font's own variable range carries all the hierarchy the system needs.

### Hierarchy
- **Display** (Bold 700, `clamp(2rem, 5.5vw, 4rem)`, 1.08 line-height, -0.02em tracking): Hero headlines only. Max ceiling at 4rem keeps the page from shouting. Letter-spacing at -0.02em tightens without touching.
- **Headline** (Bold 700, `clamp(1.5rem, 3.5vw, 2.25rem)`, 1.15 line-height, -0.01em tracking): Section headings. `text-wrap: balance` for even line breaks.
- **Body** (Normal 400, `clamp(16px, 1.1vw, 18px)`, 1.6 line-height): All running text. Capped at 42–48ch for readability. `text-wrap: pretty` to suppress orphans.
- **Label** (Semibold 600, `0.8rem`, 0.06em tracking): Badge text, trust-signal rows, nav labels.

### Named Rules
**The Single-Voice Rule.** Never introduce a second font family. Saira's weight axis (100–900) carries hierarchy; a second font is a second voice and this system only needs one.

## 4. Elevation

VALSYNC uses **tonal layering, not shadows**. Depth is conveyed through lightness alone: `void-navy` → `surface-steel` → `surface-elevated`. This matches the HUD readout aesthetic: a flat plane where information layers forward by getting brighter, not by casting shadows.

There are zero box-shadows in the system. Elevated surfaces (hover states on feature items, the privacy card) lift via a background-color transition from `surface-steel` to `surface-elevated` — a shift of ~0.046 in OKLCH lightness, perceptible but not dramatic.

The sticky nav bar uses `backdrop-filter: blur(12px)` and a translucent background (`void-navy` at 85% opacity). This is the system's only blur effect, and it exists for function (readability during scroll), not decoration.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Tonal shifts appear only as a response to state (hover) or structural hierarchy (privacy card). Never use box-shadow to convey depth.

## 5. Components

### Primary Button
- **Shape:** 4px corner radius (sharp, tactical, deliberate — not rounded-friendly).
- **Color:** Signal Red background, Ink Primary (white) text. No border.
- **Hover:** `filter: brightness(1.15)` — a subtle glow-up, not a color swap.
- **Focus:** 2px Telemetry Cyan outline with 2px offset.
- **Typography:** Bold 700 at 1rem (or 0.875rem for nav variant), Saira.
- **Padding:** 12px 28px (hero CTA) or 7px 18px (nav compact).

### Feature Items
- **Shape:** 8px corner radius. Full border (`1px solid border-divider`). Surface Steel background.
- **Layout:** Each item has a 2.5rem square icon (Signal Red tinted background by default, varied per item via Telemetry Cyan/Gold/Green), a bold heading, and muted body text in a column.
- **Hover:** Background transitions to Surface Elevated; border color shifts to Ink Muted.
- **Grid:** `repeat(auto-fit, minmax(260px, 1fr))` with 20px gap. Breakpoint-free responsive.

### Privacy Card
- **Shape:** 12px corner radius, full border, Surface Steel background.
- **Internal grid:** `repeat(auto-fit, minmax(220px, 1fr))` with 24px gap.
- **CTA:** Full-width Primary Button at bottom.

### Sticky Navigation
- **Background:** Void Navy at 85% opacity with 12px backdrop blur. Bottom border 1px.
- **Logo:** Saira Bold 1.25rem with a 2rem square Signal Red logo mark containing a white "V."
- **CTA:** Compact Primary Button variant.

### Scanline Overlay
- **Implementation:** `repeating-linear-gradient` at 2.5% opacity, fixed position, `pointer-events: none`. Two-pixel transparent, two-pixel black stripes repeating infinitely.
- **Z-index:** 9999 — above all content, below nothing actionable.

## 6. Do's and Don'ts

### Do:
- **Do** use Signal Red exclusively for CTAs and primary emphasis — never for decorative headings or passive elements.
- **Do** use Telemetry Cyan for all focus rings (`outline: 2px solid cyan; outline-offset: 2px`) on every interactive element.
- **Do** use tonal layering (lightness shift) for hover states on cards and surfaces — never box-shadow.
- **Do** keep the scanline overlay at exactly 2.5% opacity — it should be barely perceptible, never a visual feature.
- **Do** use `text-wrap: balance` on all h1–h3 elements for even line breaks.
- **Do** use `prefers-reduced-motion` to collapse all transitions and animations to 0.01ms.

### Don't:
- **Don't** use neon gradients (pink/cyan on black) — no BLITZ.gg / Porofessor.gg glow borders.
- **Don't** use pastel-brand SaaS cream/blue hero sections — no Monday.com / Notion empty-state warmth.
- **Don't** stack glassmorphism surfaces (frosted glass sheets layered 4 deep) — no Genshin companion app aesthetic.
- **Don't** build cluttered stat-tracker density (table-heavy, ad-crammed, competing CTAs) — no OP.GG data-warehouse.
- **Don't** use ad-first dark patterns (banner ads, upsell timers, auto-play video) — the no-monetization promise is visible in every pixel.
- **Don't** use delight-for-delight's-sake cruft (bouncing mascots, tooltip tours, confetti) — no Duolingo-onboarding energy.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe.
- **Don't** use gradient text (`background-clip: text`).
- **Don't** use tiny uppercase tracked eyebrows above every section — the hero badge is the system's one exception, and it's a category label, not a kicker.
- **Don't** use numbered section markers (01 / 02 / 03) as section scaffolding.
