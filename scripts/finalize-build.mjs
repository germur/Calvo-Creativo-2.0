import fs from 'node:fs';
import path from 'node:path';
import { load } from 'cheerio';

export const dist = path.resolve('dist');
export function htmlPages(dir = dist) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === '_astro' ? [] : htmlPages(file);
    return entry.name.endsWith('.html') && entry.name !== '__forms.html' ? [file] : [];
  });
}
export function routeFor(file) {
  const relative = path.relative(dist, file).replaceAll('\\', '/');
  return relative === 'index.html' ? '/' : '/' + relative.replace(/\/index\.html$/, '').replace(/\.html$/, '');
}
export function finalize() {
  const pages = htmlPages();
  const preview = ['deploy-preview', 'branch-deploy'].includes(process.env.CONTEXT);
  const urls = [];
  const excluded = new Set(['/404', '/gracias', '/newsletter', '/wins', '/booking', '/contratar', '/mapa-del-sitio', '/__forms', '/politica-privacidad', '/terminos']);
  for (const file of pages) {
    const $ = load(fs.readFileSync(file, 'utf8'));
    const route = routeFor(file);
    const robots = $('meta[name="robots"]').attr('content') || '';
    if (!excluded.has(route) && !route.startsWith('/seo/') && !route.startsWith('/industrias/') && !robots.includes('noindex')) urls.push(`https://calvocreativo.com${route === '/' ? '' : route}`);
    if (preview) {
      $('meta[name="robots"]').remove();
      $('head').append('<meta name="robots" content="noindex, nofollow">');
      fs.writeFileSync(file, $.html());
    }
  }
  const escaped = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
  fs.writeFileSync(path.join(dist, 'sitemap-0.xml'), '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls.sort().map(url => `<url><loc>${escaped(url)}</loc></url>`).join('') + '</urlset>');
  fs.writeFileSync(path.join(dist, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>https://calvocreativo.com/sitemap-0.xml</loc></sitemap></sitemapindex>');
  if (preview) fs.writeFileSync(path.join(dist, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
  fs.mkdirSync('migration', { recursive: true });
  fs.writeFileSync('migration/built-routes.json', JSON.stringify(pages.map(routeFor).sort(), null, 2) + '\n');
  console.log(`Sitemap generated: ${urls.length} indexable URLs, ${pages.length} HTML pages${preview ? ' (preview: noindex)' : ''}.`);
}
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve('scripts/finalize-build.mjs')) finalize();
