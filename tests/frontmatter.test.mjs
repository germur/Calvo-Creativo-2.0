import test from 'node:test';
import assert from 'node:assert/strict';
import frontmatter from '../lib/frontmatter.mjs';

test('editorial YAML preserves accents, quoted dates, lists and article body', () => {
  const source = '---\r\ntitle: "SEO: estrategia e IA"\r\ndate: "2026-03-12"\r\ntags: [SEO, "Guía Visual"]\r\nfeatured: true\r\n---\r\n# Artículo\r\n\r\nTexto original.\r\n';
  assert.deepEqual(frontmatter(source), {
    data: { title: 'SEO: estrategia e IA', date: '2026-03-12', tags: ['SEO', 'Guía Visual'], featured: true },
    content: '# Artículo\r\n\r\nTexto original.\r\n',
  });
});

test('plain Markdown is preserved and invalid frontmatter is rejected', () => {
  assert.deepEqual(frontmatter('# Sin metadatos\n'), {data: {}, content: '# Sin metadatos\n'});
  assert.throws(() => frontmatter('---\ntitle: Sin cierre\n'), /sin cierre/);
  assert.throws(() => frontmatter('---\n- incorrecto\n---\n'), /mapa YAML/);
});
