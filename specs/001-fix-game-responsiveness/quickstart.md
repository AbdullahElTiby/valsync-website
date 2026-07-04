# Quickstart: Validate Game Responsiveness

## Prerequisites

- A browser capable of responsive viewport testing.
- A local static server. Any static server is acceptable.
- Access to the repository root.

## Start the Site Locally

From the repository root:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

If `python` is not available in the current shell, use the bundled runtime path available in the Codex workspace dependencies.

Open:

- `http://127.0.0.1:4173/index.html`
- `http://127.0.0.1:4173/mobile.html`
- `http://127.0.0.1:4173/privacy.html`
- `http://127.0.0.1:4173/terms.html`

## Syntax Check

Run a JavaScript parse check for inline scripts before browser review:

```powershell
node -e "const fs=require('fs'); for (const f of ['index.html','mobile.html']) { const html=fs.readFileSync(f,'utf8'); const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]); scripts.forEach(s=>new Function(s)); console.log(f, 'inline scripts ok:', scripts.length); }"
```

## Viewport Matrix

Review `index.html` at these widths:

- 320px
- 375px
- 430px
- 768px
- 1024px
- 1366px
- 1920px

At each width:

1. Scroll from top to bottom.
2. Confirm there is no unintended horizontal page scroll.
3. Confirm navigation, calls to action, feature cards, media controls, comparison rows, FAQ, and footer remain readable and non-overlapping.
4. Confirm visible controls are comfortably tappable at mobile widths.

## Mobile Media Interaction

At phone widths:

1. Open the media/screenshot section.
2. Swipe left and right through all media items.
3. Use visible previous/next controls.
4. Double-tap or use zoom controls where available.
5. Pan zoomed media and then return to normal browsing.
6. Confirm the page does not jump unexpectedly and media advances by exactly one item.

## Localization Checks

For each language button:

- EN
- AR
- DE
- TR

Validate at 320px, 768px, and 1366px:

1. Switch language.
2. Confirm document direction updates correctly.
3. Confirm text does not clip or overlap in navigation, hero, cards, captions, comparison rows, FAQ, privacy CTA, and footer.
4. For Arabic, confirm the reading order is coherent and media interaction remains intuitive.

## Orientation Checks

At mobile widths:

1. Review portrait layout.
2. Switch to landscape.
3. Confirm content settles into a stable layout within 1 second.
4. Confirm core controls remain reachable.
5. Repeat while the media carousel is mid-section.

## Expected Outcome

The feature is ready for implementation completion when all checks pass against [responsive-ui-contract.md](./contracts/responsive-ui-contract.md) and the measurable outcomes in [spec.md](./spec.md).
