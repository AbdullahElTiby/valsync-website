# Tasks: Fix Game Responsiveness

**Input**: Design documents from `specs/001-fix-game-responsiveness/`

**Prerequisites**: [plan.md](./plan.md), [spec.md](./spec.md), [research.md](./research.md), [data-model.md](./data-model.md), [contracts/responsive-ui-contract.md](./contracts/responsive-ui-contract.md), [quickstart.md](./quickstart.md)

**Tests**: No separate TDD test suite was requested. Validation tasks use browser viewport checks, touch interaction checks, localization checks, and JavaScript syntax parsing from `quickstart.md`.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because it touches different files or is a read-only validation task.
- **[Story]**: Which user story this task belongs to, such as [US1], [US2], or [US3].
- Every task includes exact file paths.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the responsive validation baseline before changing behavior.

- [X] T001 Review current responsive contract requirements in specs/001-fix-game-responsiveness/contracts/responsive-ui-contract.md and quickstart validation steps in specs/001-fix-game-responsiveness/quickstart.md
- [X] T002 Run inline JavaScript syntax parsing for index.html and mobile.html using the command documented in specs/001-fix-game-responsiveness/quickstart.md
- [X] T003 [P] Start a local static server from T:/Code/VALSYNC-WEBSITE for browser validation of index.html, mobile.html, privacy.html, and terms.html
- [X] T004 [P] Capture baseline responsive failures for index.html at 320px, 375px, 430px, 768px, 1024px, 1366px, and 1920px in specs/001-fix-game-responsiveness/responsive-audit.md
- [X] T005 [P] Capture baseline responsive failures for mobile.html at 320px, 375px, 430px, 768px, and 1024px in specs/001-fix-game-responsiveness/responsive-audit.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Fix shared layout foundations that every user story depends on.

**CRITICAL**: No user story work should be considered complete until this phase is complete.

- [X] T006 Add global overflow, media sizing, word wrapping, and touch target safeguards in styles.css
- [X] T007 Update shared navigation, language switcher, footer, and RTL responsive behavior in styles.css
- [X] T008 Add responsive utility rules for compact sections, grid wrapping, and control spacing in styles.css
- [X] T009 Confirm index.html and mobile.html do not duplicate conflicting global responsive rules that should live in styles.css
- [X] T010 Run inline JavaScript syntax parsing for index.html and mobile.html after foundational CSS/HTML changes

**Checkpoint**: Shared responsive foundation is ready for user story implementation.

---

## Phase 3: User Story 1 - Play and browse comfortably on phones (Priority: P1) MVP

**Goal**: A mobile visitor can browse the primary experience at 320px-430px widths without horizontal overflow and can use primary controls with touch.

**Independent Test**: Open index.html at 320px, 375px, and 430px; scroll top to bottom; confirm no unintended horizontal scrolling, no overlapping primary content, and all primary controls are tappable.

### Implementation for User Story 1

- [X] T011 [US1] Refine the sticky navigation mobile layout in styles.css so logo, language buttons, and download CTA wrap or compress without overflow
- [X] T012 [US1] Refine hero mobile stacking, heading sizing, CTA spacing, and signal panel layout in index.html
- [X] T013 [US1] Refine feature, step, FAQ, changelog, privacy, and footer section spacing for 320px-430px widths in index.html
- [X] T014 [US1] Refine comparison table behavior for narrow screens in index.html so row labels and values remain readable without page overflow
- [X] T015 [US1] Ensure all visible mobile controls meet comfortable touch spacing in index.html and styles.css
- [X] T016 [US1] Validate index.html at 320px, 375px, and 430px and record pass/fail outcomes in specs/001-fix-game-responsiveness/responsive-audit.md
- [X] T017 [US1] Validate phone landscape behavior for index.html and record orientation outcomes in specs/001-fix-game-responsiveness/responsive-audit.md

**Checkpoint**: User Story 1 should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Preserve game media clarity across devices (Priority: P2)

**Goal**: Visitors can inspect game-related screenshots/media across phones, tablets, and desktops without losing essential image content or controls.

**Independent Test**: Review the screenshot/media section in index.html and mobile.html at phone, tablet, laptop, and desktop widths; confirm media is not distorted, controls are visible, swipes advance exactly one item, and zoom/pan returns to a stable layout.

### Implementation for User Story 2

- [X] T018 [P] [US2] Refine phone frame, screen, caption, zoom button, arrow controls, dots, and thumbnail responsive sizing in index.html
- [X] T019 [P] [US2] Refine standalone media demo frame, controls, caption, dots, and thumbnail responsive sizing in mobile.html
- [X] T020 [US2] Align carousel swipe, tap, zoom, pan, pointer, and touch behavior between index.html and mobile.html
- [X] T021 [US2] Ensure carousel transforms advance exactly one slide and reset safely after cancel, resize, or slide changes in index.html and mobile.html
- [X] T022 [US2] Add or adjust layout placeholders/fallback behavior for slow or failed screenshot assets in index.html and mobile.html
- [X] T023 [US2] Validate all screenshot assets in img/ remain visually undistorted and preserve their primary subject at 320px, 768px, 1366px, and 1920px in index.html
- [X] T024 [US2] Validate swipe, arrow, dot, thumbnail, double-tap, zoom, and pan interactions in index.html and mobile.html and record results in specs/001-fix-game-responsiveness/responsive-audit.md

**Checkpoint**: User Stories 1 and 2 should both work independently.

---

## Phase 5: User Story 3 - Read localized content without layout breakage (Priority: P3)

**Goal**: English, Arabic, German, and Turkish content remain readable across supported device sizes without clipping, overlap, stale direction, or broken controls.

**Independent Test**: Switch EN, AR, DE, and TR at 320px, 768px, and 1366px; confirm text wraps correctly, Arabic direction is coherent, and controls still work.

### Implementation for User Story 3

- [X] T025 [P] [US3] Audit long localized strings in lang/en.json, lang/ar.json, lang/de.json, and lang/tr.json for navigation, hero, cards, captions, comparison rows, FAQ, and CTA copy
- [X] T026 [US3] Adjust language switcher, active language state, and RTL layout resilience in styles.css and js/i18n.js
- [X] T027 [US3] Refine RTL-specific hero, section header, comparison, privacy, footer, and media layout rules in styles.css
- [X] T028 [US3] Refine localized text containers in index.html so headings, buttons, cards, captions, comparison rows, FAQ, and CTA copy wrap without clipping
- [X] T029 [US3] Validate English, Arabic, German, and Turkish layouts at 320px, 768px, and 1366px in index.html and record results in specs/001-fix-game-responsiveness/responsive-audit.md
- [X] T030 [US3] Validate Arabic RTL media interaction and reading order in index.html and record results in specs/001-fix-game-responsiveness/responsive-audit.md

**Checkpoint**: All user stories should be independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, cleanup, and documentation across all stories.

- [X] T031 [P] Run final JavaScript syntax parsing for index.html and mobile.html using specs/001-fix-game-responsiveness/quickstart.md
- [X] T032 [P] Validate privacy.html and terms.html shared navigation/footer behavior at 320px, 768px, and 1366px and record results in specs/001-fix-game-responsiveness/responsive-audit.md
- [X] T033 Validate reduced-motion behavior in index.html and mobile.html against specs/001-fix-game-responsiveness/contracts/responsive-ui-contract.md
- [X] T034 Validate full viewport matrix from specs/001-fix-game-responsiveness/quickstart.md for index.html and record final outcomes in specs/001-fix-game-responsiveness/responsive-audit.md
- [X] T035 Update specs/001-fix-game-responsiveness/responsive-audit.md with final pass/fail summary mapped to SC-001 through SC-006 from specs/001-fix-game-responsiveness/spec.md
- [X] T036 Review changed files index.html, mobile.html, styles.css, js/i18n.js, lang/en.json, lang/ar.json, lang/de.json, and lang/tr.json for unnecessary churn and consistency with specs/001-fix-game-responsiveness/plan.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion; blocks all user story completion.
- **User Story 1 (Phase 3)**: Depends on Foundational; MVP scope.
- **User Story 2 (Phase 4)**: Depends on Foundational; can begin after US1 baseline decisions are clear, but remains independently testable.
- **User Story 3 (Phase 5)**: Depends on Foundational; can run after or alongside US2 once layout containers are stable.
- **Polish (Phase 6)**: Depends on selected user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: No dependency on other stories after Foundational. This is the MVP.
- **User Story 2 (P2)**: Uses shared responsive foundation and media controls; independent from localization-specific work.
- **User Story 3 (P3)**: Uses shared responsive foundation; validates localized and RTL variants of the same experience.

### Within Each User Story

- Audit or sizing tasks should happen before interaction validation.
- CSS/layout changes should happen before final viewport validation.
- JavaScript interaction changes should be followed by syntax parsing before browser validation.
- Each story checkpoint should be validated before moving to lower-priority polish.

### Parallel Opportunities

- T003, T004, and T005 can run in parallel after T001-T002.
- T018 and T019 can run in parallel because they target different pages.
- T025 can run in parallel with US2 layout work because it reviews translation files.
- T031 and T032 can run in parallel during final polish.

---

## Parallel Example: User Story 2

```text
Task: "T018 [P] [US2] Refine phone frame, screen, caption, zoom button, arrow controls, dots, and thumbnail responsive sizing in index.html"
Task: "T019 [P] [US2] Refine standalone media demo frame, controls, caption, dots, and thumbnail responsive sizing in mobile.html"
```

---

## Parallel Example: User Story 3

```text
Task: "T025 [P] [US3] Audit long localized strings in lang/en.json, lang/ar.json, lang/de.json, and lang/tr.json"
Task: "T029 [US3] Validate English, Arabic, German, and Turkish layouts at 320px, 768px, and 1366px in index.html"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. Stop and validate phone browsing at 320px, 375px, 430px, and phone landscape.
5. Demo mobile browsing improvements before moving to media and localization refinements.

### Incremental Delivery

1. Deliver US1 for mobile browsing and core controls.
2. Add US2 for media clarity, swipes, zoom, and carousel stability.
3. Add US3 for localized and RTL layout resilience.
4. Finish with full quickstart validation and final responsive audit.

### Parallel Team Strategy

With multiple builders:

1. One builder handles shared CSS foundation in styles.css.
2. One builder handles media behavior and sizing in index.html/mobile.html.
3. One builder audits localization and RTL behavior in lang/*.json, styles.css, and js/i18n.js.
4. One reviewer runs the viewport matrix and updates responsive-audit.md.

---

## Notes

- [P] tasks touch different files or are read-only validation tasks and can run in parallel.
- [US1], [US2], and [US3] labels map directly to the prioritized stories in spec.md.
- Keep responsive-audit.md concise: record viewport, language, page, outcome, and issue when failing.
- Do not introduce a build system or framework unless a later implementation task documents why the static approach cannot satisfy the contract.
- Existing unrelated working tree changes must not be reverted while completing these tasks.
