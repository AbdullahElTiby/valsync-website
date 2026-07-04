# Responsive UI Contract: Fix Game Responsiveness

This contract defines the externally visible behavior the VALSYNC game-facing web experience must provide after implementation.

## Supported Pages

- `index.html`: primary public experience.
- `mobile.html`: standalone media demo when present.
- `privacy.html` and `terms.html`: shared navigation/footer regression coverage.

## Viewport Contract

For each supported page at 320, 375, 430, 768, 1024, 1366, and 1920px widths:

- The page must not create unintended horizontal scrolling.
- Text must remain readable without clipping or overlapping adjacent content.
- Primary controls must remain visible and reachable.
- Sections may stack, reflow, resize, or reduce supporting density to preserve primary content.

## Touch and Interaction Contract

On touch-capable mobile viewports:

- Users can move through media by swiping left and right.
- Users can still use visible controls when gestures are not preferred.
- A tap target must be comfortably reachable and not depend on hover.
- Zoomed or inspected media must pan when dragged and must not accidentally advance slides.
- Cancelling a gesture must restore a stable visual state.

## Media Contract

For each screenshot/game media item:

- The primary subject remains visible at all target viewport widths.
- The media is not stretched or distorted.
- Captions, controls, dots, thumbnails, and overlays must not hide essential content on small screens.
- Slow or failed media loading must preserve layout space and avoid cascading overlap.

## Localization Contract

For English, Arabic, German, and Turkish:

- Navigation, hero, cards, media captions, comparison rows, FAQ, and CTA text remain inside their containers.
- Longer translated labels wrap or adapt gracefully.
- Arabic uses coherent right-to-left layout for text-oriented sections while media controls remain intuitive.
- Switching language does not create persistent overflow or stale directionality.

## Motion and Accessibility Contract

- Reduced-motion preferences must not hide essential content or make content unreachable.
- Focus styles remain visible for keyboard users.
- Interactive controls remain usable without requiring precise pointer placement.

## Failure Definition

A responsive state fails this contract if any of the following are observed:

- Horizontal scrolling appears outside intentional internal scroll regions.
- A primary action, navigation control, or media control is hidden, overlapped, or too small to use.
- Text is clipped, unreadable, or overlaps unrelated content.
- Media advances by the wrong amount or gets stuck after swipe, zoom, or orientation changes.
- A localized layout breaks while the default language appears correct.
