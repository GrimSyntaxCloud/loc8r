# Loc8r

A cartographic field guide to finding wifi, coffee, and a place to work. This
learning project is based on _Getting MEAN_ by Simon Holmes and Clive Harber.
Andres's redesign gives the original fictional Starcups example a map-first
interface with a compact place index, mineral-and-ink colors, acid-lime
wayfinding, an animated route, and subtle pointer interactions.

[Open the free live demo](https://grimsyntaxcloud.github.io/loc8r/)

## What works

- Browse the sample location and open its detail page.
- Read its original address, facilities, opening hours, and two sample reviews.
- Open its sample coordinates on OpenStreetMap in a new tab.
- Explore a clearly labeled, non-submitting review form and the project story.
- Pause decorative motion; system reduced-motion preferences are respected.

The index contains one unique location. The previous page repeated the same
Starcups listing three times; the redesign removes that duplicated markup.
All places, distances, opening hours, and reviews are fixed examples, not live
business information. The street illustration is decorative rather than a
geographic map. There is no geolocation, live search, database, or review-saving
endpoint. Nothing entered into the sample review form is sent or saved.

## How it works

Pug templates are shared between the local Express renderer and a static
exporter. GitHub Actions renders four routes into HTML and publishes `main` to
GitHub Pages. The published site uses native CSS, SVG, and a small JavaScript
motion toggle. No animation libraries, remote fonts, paid assets, embedded maps,
or API keys are required. Bootstrap and Font Awesome are no longer loaded.

Routes: `/`, `/location/`, `/location/review/new/`, and `/about/`. The exporter
prefixes local links/assets with `/loc8r` for GitHub Pages. Express and its server
dependencies are used locally and are not deployed to Pages. No data-retention
cleanup is needed because the demo stores no visitor data.

## Local development

Use Node.js 22 LTS or newer:

```sh
npm ci
npm start
```

Open http://localhost:3000. This renders the same Pug templates and fictional
content; no database credential is needed. `npm run dev` restarts the local
server when source files change.

To preview the static deployment at a local root URL:

```sh
BASE_PATH=/ npm run build:pages
python3 -m http.server 4411 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:4411. Run `npm run build:pages` without `BASE_PATH` to produce
the `/loc8r/` GitHub Pages build in `dist/`.

## Verification and maintenance

`npm run build:pages` renders all four routes and rejects keyed Google Maps
references in the generated HTML. `npm audit --audit-level=low` checks the locked
dependency tree. Both checks run in pull requests before deployment.

The redesign was checked in the browser at desktop and narrow mobile sizes,
including page navigation, overflow, motion controls, and the review form's
non-submitting behavior. There is no separate behavioral test suite.
Dependabot checks npm packages and GitHub Actions weekly; updates still require
review and a passing build.

The historical Google Maps key was removed from the current source. The owner
reported deleting it in Google Cloud; old commits still contain that revoked
credential. This redesign does not introduce a replacement key.

## Credits

Original application and sample content: _Getting MEAN_, Simon Holmes and Clive
Harber (2018). Their attribution is preserved in the website footer. Interface
redesign and hand-drawn SVG street-grid illustration: Andres, developed with AI
assistance. The optional external map link points to OpenStreetMap.
