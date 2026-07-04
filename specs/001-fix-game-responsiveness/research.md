# Research: Fix Game Responsiveness

## Decision: Keep the implementation within the existing static site architecture

**Rationale**: The repository is a static website with `index.html`, `mobile.html`, shared `styles.css`, vanilla `js/i18n.js`, JSON translations, and local image assets. The responsiveness problems can be addressed through layout, media, and interaction refinements in the current files without adding a build system or application framework.

**Alternatives considered**:

- Add a frontend framework: rejected because it increases complexity without solving the immediate layout contract.
- Create a new responsive page from scratch: rejected because existing content, styling, and localization are already present and should be preserved.

## Decision: Validate against a fixed responsive viewport matrix

**Rationale**: The specification names measurable widths and success criteria. A stable matrix of 320, 375, 430, 768, 1024, 1366, and 1920px covers small phones, common phones, large phones, tablets, laptops, and wide desktops.

**Alternatives considered**:

- Test only device presets: rejected because named presets change over time and may miss exact boundary widths.
- Test only minimum and maximum widths: rejected because tablet and laptop transitions are common places for layout regressions.

## Decision: Treat touch interaction as a first-class mobile contract

**Rationale**: The media carousel is central to the product proof point, and the user explicitly asked to use touch swipes on mobile. Touch behavior should not rely on hover, keyboard input, or desktop-only pointer assumptions.

**Alternatives considered**:

- Rely only on visible arrow buttons: rejected because mobile users naturally swipe media galleries.
- Rely only on pointer events: rejected because mobile browser handling around images, touch-action, and gesture defaults can vary.

## Decision: Validate localization and RTL at the same priority as layout

**Rationale**: The site ships English, Arabic, German, and Turkish strings. German and Turkish can lengthen compact labels, while Arabic changes reading direction. Responsive fixes that only work for English are incomplete.

**Alternatives considered**:

- Validate default English only: rejected because it misses existing shipped user experiences.
- Treat RTL as a later enhancement: rejected because Arabic support already exists in the product surface.

## Decision: Use browser-based validation plus script syntax checks

**Rationale**: The project has no existing package manifest or test runner. A local static server, browser viewport review, JavaScript syntax parsing, and console/error checks can verify the required behavior without adding dependencies.

**Alternatives considered**:

- Add a full end-to-end test framework immediately: deferred because the feature can be validated with a smaller tool footprint; tasks can still add scripted browser checks if implementation risk warrants it.
- Manual-only testing: rejected because syntax and console checks are cheap and catch regressions early.

## Decision: Preserve media aspect and controls before decorative density

**Rationale**: The spec’s strongest media requirement is that the primary subject and controls stay visible. On constrained screens, captions, thumbnails, and decorative chrome should adapt before cropping or obscuring the media subject.

**Alternatives considered**:

- Preserve identical desktop composition on mobile: rejected because it risks cramped controls and hidden content.
- Remove controls on mobile in favor of gestures only: rejected because visible controls remain important for discoverability and accessibility.
