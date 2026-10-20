const fs = require('node:fs');
const path = require('node:path');
const pug = require('pug');
const base = process.env.BASE_PATH || '/loc8r';
if (!/^\/[a-zA-Z0-9/_-]*$/.test(base)) throw new Error('Invalid BASE_PATH');
const prefix = base.replace(/\/$/, '');
const out = path.resolve('dist');
fs.rmSync(out, { recursive: true, force: true });
fs.cpSync('public', out, { recursive: true });
const pages = [
  ['', 'locations-list', 'Home'],
  ['about', 'generic-text', 'About'],
  ['location', 'location-info', 'Location info'],
  ['location/review/new', 'location-review-form', 'Sample review form'],
];
for (const [route, view, title] of pages) {
  const html = pug.renderFile(`app_server/views/${view}.pug`, { title })
    .replace(/\b(href|src|action)="\/(?!\/)([^"]*)"/g, (_, attr, target) =>
      `${attr}="${prefix}/${target}"`);
  if (/AIza[\w-]+|maps\.googleapis\.com/.test(html)) throw new Error('Unexpected keyed map');
  const folder = path.join(out, route);
  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, 'index.html'), html);
}
fs.writeFileSync(path.join(out, '.nojekyll'), '');
fs.writeFileSync(path.join(out, '404.html'),
  `<!doctype html><html lang="en"><meta charset="utf-8"><title>Not found — Loc8r</title><h1>Page not found</h1><a href="${prefix}/">Return to Loc8r</a></html>`);
console.log(`Built ${pages.length} sample pages with base ${prefix}/`);
