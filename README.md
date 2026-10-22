# Loc8r

A learning implementation from *Getting MEAN*, with fixed sample location
listings and reviews. Credits in the original templates are retained.

## Free hosting

The current application has no database or review-saving endpoint. GitHub Actions
renders its Pug templates into static HTML and publishes `main` to GitHub Pages:
https://grimsyntaxcloud.github.io/loc8r/

`npm ci` followed by `npm run build:pages` generates `dist/`. `BASE_PATH` defaults
to `/loc8r`; set it to `/` for a root-hosted preview. The exporter preserves the
four existing pages and public assets. The review form is labeled as a sample
and cannot submit personal information. The location map is an OpenStreetMap
link requiring no API key.

Express remains available for the original local/server-rendered implementation.
The legacy Node/Express dependencies are not deployed to GitHub Pages.

The old Google Maps key was removed from the current source, but remains in Git
history. The owner reported deleting that credential in Google Cloud.

## Local development and checks

Use Node.js 22 LTS or newer:

```sh
npm ci
npm start
```

Open http://localhost:3000. This starts the original Express/Pug renderer with the same fixed sample data; it does not require a database credential. `npm run dev` restarts it when source files change.

To preview the actual static deployment:

```sh
BASE_PATH=/ npm run build:pages
python3 -m http.server 8080 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:8080. Run `npm audit` when maintaining dependencies. The Pages build is the existing automated validation; there is no separate behavioral test suite. `.github/dependabot.yml` checks both npm packages and Actions weekly, while changes still require review and a passing build.
