import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { load } from 'cheerio';
import { htmlPages, routeFor, dist } from './finalize-build.mjs';

const pages = htmlPages();
const errors = [];
const brokenLinks = new Map();
const missingImages = new Set();
const paths = new Set(pages.map(routeFor));
const redirects = JSON.parse(fs.readFileSync('migration/redirects.json', 'utf8'));
function check(condition, message) { if (!condition) errors.push(message); }
for (const file of pages) {
  const route = routeFor(file);
  const html = fs.readFileSync(file, 'utf8');
  const $ = load(html);
  check($('html').attr('lang') === 'es', `${route}: missing Spanish language`);
  check($('head title').length === 1 && $('head title').text().trim(), `${route}: expected one nonempty title`);
  check($('head meta[name="description"]').length === 1, `${route}: expected one description`);
  const canonical = $('link[rel="canonical"]');
  check(canonical.length === 1 && canonical.attr('href') === `https://calvocreativo.com${route === '/' ? '' : route}`, `${route}: wrong canonical ${canonical.attr('href')}`);
  check($('body title, body meta[name="description"], body link[rel="canonical"]').length === 0, `${route}: metadata escaped into body`);
  check($('template[data-calvo-island]').length === 0, `${route}: unresolved interactive widget`);
  check(!html.includes('__NEXT_DATA__') && !html.includes('/_next/'), `${route}: residual Next runtime`);
  $('script[type="application/ld+json"]').each((_, element) => {
    try { JSON.parse($(element).text()); } catch { errors.push(`${route}: invalid JSON-LD`); }
  });
  if (route.startsWith('/seo/') || route.startsWith('/industrias/') || ['/newsletter','/booking','/contratar','/gracias','/wins','/mapa-del-sitio','/politica-privacidad','/terminos'].includes(route)) {
    check(($('meta[name="robots"]').attr('content') || '').includes('noindex'), `${route}: noindex lost`);
  }
  if (route === '/') check($('astro-island').length === 0, 'Home unexpectedly hydrates React');
  if (route.startsWith('/liner-notes/') && !['/liner-notes/editoriales','/liner-notes/seo-rumble'].includes(route) || route === '/lab/opinion/el-clic-ha-muerto') {
    check($('article').text().trim().length > 300, `${route}: article absent from HTML`);
    $('a[href^="#"]').each((_, a) => {
      const id = $(a).attr('href').slice(1);
      check($('[id]').toArray().some(el => $(el).attr('id') === id), `${route}: broken article anchor #${id}`);
    });
  }
  $('form[data-netlify]').each((_, el) => {
    const form = $(el);
    check(form.attr('method').toUpperCase() === 'POST', `${route}: wrong form method`);
    check(form.find('input[name="form-name"]').attr('value') === form.attr('name'), `${route}: wrong Netlify form identity`);
    check(form.find('input[name="email"][type="email"]').length === 1, `${route}: email capture missing`);
    check(form.find('[name="bot-field"]').length === 1, `${route}: honeypot missing`);
  });
  $('a[href^="/"]').each((_, el) => {
    const href = $(el).attr('href').split(/[?#]/)[0].replace(/\/$/, '') || '/';
    if (href.startsWith('//') || paths.has(href) || redirects[href] || fs.existsSync(path.join(dist, href)) || href.startsWith('/api/')) return;
    brokenLinks.set(href, [...new Set([...(brokenLinks.get(href) || []), route])]);
  });
  $('img[src^="/"]').each((_, el) => {
    let src = $(el).attr('src');
    if (src.startsWith('/.netlify/images?')) src = new URL(src, 'https://calvocreativo.com').searchParams.get('url');
    if (src?.startsWith('/') && !fs.existsSync(path.join(dist, src))) missingImages.add(src);
  });
}
check(!paths.has('/lab/opinion/_template'), 'Internal opinion template was emitted');
const expected = JSON.parse(fs.readFileSync('migration/routes.json', 'utf8')).filter(route => !route.includes('['));
for (const route of expected) check(paths.has(route), `Missing migrated route ${route}`);
for (const target of Object.values(redirects)) {
  if (!target.includes(':') && target !== '/sitemap.xml') check(paths.has(target), `Redirect destination missing: ${target}`);
}
const sitemap = load(fs.readFileSync('dist/sitemap-0.xml', 'utf8'), { xmlMode: true });
for (const loc of sitemap('loc').toArray()) {
  const route = new URL(sitemap(loc).text()).pathname;
  check(paths.has(route), `Sitemap points to absent page ${route}`);
  const file = pages.find(file => routeFor(file) === route);
  const $ = load(fs.readFileSync(file, 'utf8'));
  if (!['deploy-preview','branch-deploy'].includes(process.env.CONTEXT)) check(!($('meta[name="robots"]').attr('content') || '').includes('noindex'), `Sitemap contains noindex ${route}`);
}
fs.writeFileSync('migration/validation.json', JSON.stringify({ pages: pages.length, errors, brokenLinks: Object.fromEntries(brokenLinks), missingImages: [...missingImages] }, null, 2) + '\n');
console.log(`Verified ${pages.length} HTML pages. ${errors.length} failures, ${brokenLinks.size} missing internal destinations, ${missingImages.size} missing images.`);
if (errors.length) console.error(errors.join('\n'));
assert.equal(errors.length, 0, 'Migration verification failed; see migration/validation.json');
