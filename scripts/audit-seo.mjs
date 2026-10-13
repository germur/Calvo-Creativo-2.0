import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { load } from 'cheerio';
import { htmlPages, routeFor, dist } from './finalize-build.mjs';

const site = 'https://calvocreativo.com';
const pages = new Map(htmlPages().map(file => [routeFor(file), load(fs.readFileSync(file, 'utf8'))]));
const redirects = JSON.parse(fs.readFileSync('migration/redirects.json', 'utf8'));
const errors = [], titles = new Map(), graph = new Map();
function check(ok, message) { if (!ok) errors.push(message); }
function nodes(value) {
  if (!value || typeof value !== 'object') return [];
  return [value, ...Object.values(value).flatMap(nodes)];
}
for (const [route, $] of pages) {
  check($('h1').length === 1, `${route}: expected one H1`);
  check($('main').length === 1, `${route}: expected one main landmark`);
  let previousHeading = 0;
  $('main h1, main h2, main h3, main h4, main h5, main h6').each((_, el) => {
    const level = Number(el.tagName[1]);
    check(!previousHeading || level <= previousHeading + 1, `${route}: heading skips a level: ${$(el).text().slice(0,70)}`);
    previousHeading = level;
  });
  check(!$('body').text().includes('Roger Calvo'), `${route}: outdated personal name`);
  const ids = $('[id]').toArray().map(el => $(el).attr('id'));
  check(new Set(ids).size === ids.length, `${route}: duplicate HTML IDs`);
  const title = $('title').text();
  check(!titles.has(title), `${route}: title duplicated with ${titles.get(title)}`);
  titles.set(title, route);
  const links = new Set();
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    const url = new URL(href, site + route);
    if (url.origin !== site) return;
    const target = url.pathname.replace(/\/$/, '') || '/';
    if (target.startsWith('/api/') || (!pages.has(target) && fs.existsSync(path.join(dist, target)))) return;
    check(!redirects[target], `${route}: internal link unnecessarily redirects: ${href}`);
    check(target === '/' || !url.pathname.endsWith('/'), `${route}: internal link has trailing slash: ${href}`);
    check(pages.has(target), `${route}: missing destination ${href}`);
    if (pages.has(target)) {
      links.add(target);
      if (url.hash) check(pages.get(target)('[id]').toArray().some(el => pages.get(target)(el).attr('id') === decodeURIComponent(url.hash.slice(1))), `${route}: missing anchor ${href}`);
    }
  });
  graph.set(route, links);
  const roots = $('script[type="application/ld+json"]').toArray().flatMap(el => {
    const schema = JSON.parse($(el).text());
    return Array.isArray(schema) ? schema : schema['@graph'] || [schema];
  });
  check(roots.filter(n => n['@type'] === 'BreadcrumbList').length <= 1, `${route}: duplicate breadcrumb schema`);
  check(roots.filter(n => n['@type'] === 'WebSite').length === 1, `${route}: expected one website entity`);
  for (const n of nodes(roots)) {
    if (n['@type'] === 'Person') check(n.name === 'Roger Murillo' && n['@id'] === `${site}/#roger`, `${route}: inconsistent Person entity`);
    if (n['@type'] === 'Organization' && n.name === 'Calvo Creativo') check(n['@id'] === `${site}/#organization`, `${route}: inconsistent brand entity`);
    if (n['@type'] === 'ProfilePage') check(n.mainEntity?.['@id'] === `${site}/#roger`, `${route}: profile must identify Roger Murillo`);
    if (n['@type'] === 'BlogPosting') {
      check(n.author?.name === 'Roger Murillo' && n.author?.['@id'] === `${site}/#roger`, `${route}: wrong article author`);
      check(/^\d{4}-\d{2}-\d{2}/.test(n.datePublished || ''), `${route}: missing article publication date`);
      check(n.headline && n.image && n.mainEntityOfPage?.['@id'] === site + route, `${route}: incomplete article identity`);
    }
    if (n['@type'] === 'BreadcrumbList') {
      (n.itemListElement || []).forEach((item, index) => {
        const target = new URL(item.item).pathname;
        check(item.position === index + 1 && pages.has(target), `${route}: invalid breadcrumb ${item.item}`);
      });
    }
  }
}
const reached = new Set(), queue = ['/'];
while (queue.length) {
  const route = queue.shift(); if (reached.has(route)) continue;
  reached.add(route); queue.push(...(graph.get(route) || []));
}
const sitemap = load(fs.readFileSync('dist/sitemap-0.xml', 'utf8'), {xmlMode: true});
const orphans = sitemap('loc').toArray().map(el => new URL(sitemap(el).text()).pathname).filter(route => !reached.has(route));
check(!orphans.length, `Indexable pages unreachable from home: ${orphans.join(', ')}`);
fs.writeFileSync('migration/seo-audit.json', JSON.stringify({pages: pages.size, errors, indexableOrphans: orphans}, null, 2) + '\n');
console.log(`SEO audit: ${pages.size} pages, ${errors.length} errors, ${orphans.length} indexable orphans.`);
if (errors.length) console.error(errors.join('\n'));
assert.equal(errors.length, 0, 'SEO audit failed; see migration/seo-audit.json');
