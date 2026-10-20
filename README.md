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
