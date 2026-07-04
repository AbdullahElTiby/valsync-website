# Data Model: Fix Game Responsiveness

This feature does not introduce stored business data. The relevant model is the responsive UI state that must remain coherent across pages, viewport sizes, languages, and interactions.

## Entity: Responsive Viewport

**Represents**: The current browser display context used to validate layout.

**Fields**:

- `width`: viewport width; validation values include 320, 375, 430, 768, 1024, 1366, and 1920px.
- `height`: viewport height; includes portrait and landscape cases.
- `orientation`: portrait or landscape.
- `inputMode`: touch, pointer, keyboard, or mixed.
- `motionPreference`: default motion or reduced motion.

**Validation Rules**:

- Widths at or above 320px must not create unintended horizontal page scrolling.
- Orientation changes must settle into a readable layout within 1 second.
- Touch-only input must support primary carousel/media interactions.

## Entity: Page Section

**Represents**: A visible content region such as navigation, hero, features, screenshots/media, steps, comparison, FAQ, changelog, privacy CTA, or footer.

**Fields**:

- `sectionName`: user-facing section identity.
- `contentPriority`: primary, supporting, or secondary.
- `interactiveElements`: buttons, links, toggles, carousel controls, thumbnails, or language controls.
- `responsiveState`: pass, warning, or fail for current viewport.

**Validation Rules**:

- Primary sections must remain readable and visible without overlap.
- Interactive elements must remain reachable and comfortably tappable.
- Supporting content may reflow, wrap, or stack before primary content is hidden.

## Entity: Media Carousel State

**Represents**: The screenshot/game media presentation and its current interaction state.

**Fields**:

- `currentItem`: active media item index.
- `itemCount`: number of available media items.
- `zoomState`: default, zoomed, or panning.
- `gestureState`: idle, swiping, tapping, or dragging.
- `controlVisibility`: whether arrows, zoom, dots, thumbnails, and captions are visible or adapted.

**Validation Rules**:

- Moving to the next or previous item must advance exactly one media item.
- Swipe, tap, keyboard, and visible controls must not conflict.
- Zoomed media should pan instead of changing slides.
- Media controls must not obscure essential image content on small screens.

## Entity: Locale Layout State

**Represents**: The active language and reading direction.

**Fields**:

- `language`: English, Arabic, German, or Turkish.
- `direction`: left-to-right or right-to-left.
- `textExpansionRisk`: normal, long-label, or right-to-left.
- `activeCopyAreas`: navigation, hero, cards, captions, comparison rows, FAQ, and CTA copy.

**Validation Rules**:

- Text must wrap or adapt without clipping in every supported language.
- RTL layout must keep reading order coherent and preserve touch/control behavior.
- Language switching must not leave stale layout direction or broken active states.

## Entity: Responsive Validation Result

**Represents**: A review outcome for a page, viewport, language, and interaction.

**Fields**:

- `page`: reviewed page path.
- `viewport`: responsive viewport under review.
- `language`: active language.
- `journey`: user journey being tested.
- `outcome`: pass, fail, or blocked.
- `issue`: concise description when outcome is fail or blocked.

**Validation Rules**:

- All primary journeys must pass at required viewport widths.
- Failures must identify the page, viewport, language, and affected section.
- Blocked validations must state the missing condition, such as unavailable device touch testing.
