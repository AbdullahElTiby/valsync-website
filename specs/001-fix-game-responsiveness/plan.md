# Implementation Plan: Fix Game Responsiveness

**Branch**: `001-fix-game-responsiveness` | **Date**: 2026-07-04 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-fix-game-responsiveness/spec.md`

## Summary

Improve the existing static VALSYNC game-facing web experience so all primary sections, localized text, and screenshot/game media remain usable from 320px mobile screens through wide desktop layouts. The technical approach is to tighten responsive layout contracts in the existing HTML/CSS/JavaScript surface, preserve current visual identity, and validate behavior across representative viewport sizes, languages, and touch interactions.

## Technical Context

**Language/Version**: HTML5, CSS3, vanilla JavaScript running in modern browsers

**Primary Dependencies**: No build-time application dependencies; remote Google Fonts; bundled static image assets; optional local static HTTP server for validation

**Storage**: Browser `localStorage` for language preference only; no feature data persistence

**Testing**: Browser viewport validation, responsive visual inspection, JavaScript syntax checks, touch/pointer interaction checks, localization/RTL layout checks

**Target Platform**: Static web pages served by any static host and viewed on mobile, tablet, laptop, and desktop browsers

**Project Type**: Static frontend website with interactive media carousel/demo

**Performance Goals**: Layout stabilizes within 1 second after viewport resize/orientation changes; media controls remain responsive during swipe/tap interactions; no avoidable layout shifts from media loading

**Constraints**: Preserve current visual identity and copy; support 320px minimum viewport width; avoid introducing a build system or heavy dependencies; maintain accessible focus/touch targets; support English, Arabic, German, and Turkish layouts

**Scale/Scope**: Primary public pages in the repository, especially `index.html`, `mobile.html`, `styles.css`, `js/i18n.js`, `lang/*.json`, and `img/screenshot-*.jpg`

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The current constitution file still contains placeholder principles and governance text, so it does not define enforceable project-specific gates. Default planning gates for this feature:

- Preserve existing user-facing scope and visual identity.
- Avoid unnecessary architecture or dependency additions for a static site.
- Keep behavior verifiable through browser-level responsive checks.
- Maintain localization and RTL behavior as first-class acceptance concerns.

**Gate Status**: PASS. The plan is scoped to existing static website files and validation artifacts, with no new system boundaries or dependencies.

## Project Structure

### Documentation (this feature)

```text
specs/001-fix-game-responsiveness/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── responsive-ui-contract.md
├── checklists/
│   └── requirements.md
└── tasks.md
```

### Source Code (repository root)

```text
index.html                 # Main static page, inline section styles, carousel behavior
mobile.html                # Standalone interactive phone/media demo
styles.css                 # Shared base styles, navigation, footer, RTL rules
js/
└── i18n.js                # Locale selection, text replacement, document direction
lang/
├── ar.json
├── de.json
├── en.json
└── tr.json                # Localized copy used for responsive text validation
img/
├── screenshot-home.jpg
├── screenshot-matches.jpg
├── screenshot-store.jpg
├── screenshot-loadout.jpg
├── screenshot-party.jpg
└── screenshot-social.jpg  # Media assets whose framing must remain responsive
privacy.html
terms.html                 # Secondary static pages for shared chrome regression checks
```

**Structure Decision**: Use the existing single static frontend structure. Responsive fixes should remain in the current HTML/CSS/JS files unless implementation reveals a clear need to extract shared carousel code after planning.

## Phase 0: Research

Research completed in [research.md](./research.md). Key decisions:

- Use existing static layout primitives and targeted responsive rules rather than adding a framework.
- Validate a fixed viewport matrix: 320, 375, 430, 768, 1024, 1366, and 1920px.
- Treat localization, RTL, touch-only interaction, and media framing as acceptance-level responsive requirements.
- Use browser-based manual/automated checks plus syntax checks instead of introducing a test runner.

## Phase 1: Design & Contracts

Design artifacts generated:

- [data-model.md](./data-model.md): responsive UI entities and validation states.
- [contracts/responsive-ui-contract.md](./contracts/responsive-ui-contract.md): user-visible UI contract for layout, touch, media, localization, and reduced motion.
- [quickstart.md](./quickstart.md): validation guide for local review before implementation completion.

Agent context update: no `update-agent-context` script is present in this Spec Kit PowerShell scaffold, so no separate context script was run. The active feature context is recorded in `.specify/feature.json`, and Codex/opencode integrations are already installed.

## Constitution Check

*Post-design re-check.*

**Gate Status**: PASS. The design preserves the static site structure, avoids new dependencies, keeps validation user-visible, and treats localization/RTL/touch responsiveness as explicit contract points.

## Complexity Tracking

No constitution violations or added architectural complexity.
