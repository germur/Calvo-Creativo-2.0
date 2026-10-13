import test from 'node:test';
import assert from 'node:assert/strict';
import gone from '../netlify/edge-functions/gone.ts';
import { keywordResponse } from '../src/server/keywords.ts';

test('all four removed service families return 410, while similar paths pass through', async () => {
  for (const family of ['strategic-seo-consulting','personal-branding-consulting','seo-automation','digital-storytelling-services']) {
    for (const suffix of ['', '/miami-fl', '/nested/page']) {
      const response = await gone(new Request(`https://calvocreativo.com/services/${family}${suffix}`), { next: () => { throw Error('Unexpected fallback'); } });
      assert.equal(response.status, 410);
      assert.equal(response.headers.get('X-Robots-Tag'), 'noindex');
    }
  }
  for (const pathname of ['/services/seo-audit', '/services/seo-automation-guide', '/consultoria']) {
    const response = await gone(new Request(`https://calvocreativo.com${pathname}`), { next: async () => new Response('unchanged', { status: 200 }) });
    assert.equal(await response.text(), 'unchanged');
  }
});

test('keywords reject invalid input before calling Google', async () => {
  for (const query of ['', '?seed=' + 'x'.repeat(101), '?seed=seo&country=invalid', '?seed=seo&lang=../../']) {
    const response = await keywordResponse(new URL(`https://calvocreativo.com/api/keywords${query}`), () => { throw Error('Unexpected upstream request'); });
    assert.equal(response.status, 400);
  }
});

test('keywords normalize and deduplicate suggestions, then cache the complete result', async () => {
  let calls = 0;
  let active = 0;
  let peak = 0;
  const request = async () => {
    calls++; active++; peak = Math.max(peak, active);
    await new Promise(resolve => setTimeout(resolve, 1));
    active--;
    return new Response(JSON.stringify(['test', ['TEST MIGRATION', 'SEO PARA EMPRESAS', 'seo para empresas', 'x']]));
  };
  const url = new URL('https://calvocreativo.com/api/keywords?seed=test%20migration&country=CO&lang=es');
  const response = await keywordResponse(url, request);
  assert.equal(response.status, 200);
  const data = await response.json();
  assert.deepEqual(data.keywords, ['seo para empresas']);
  assert.equal(data.total, 1);
  assert.equal(data.partial, false);
  assert.equal(calls, 27);
  assert.ok(peak <= 9);
  const cached = await keywordResponse(url, () => { throw Error('Cache was missed'); });
  assert.deepEqual(await cached.json(), data);
});

test('upstream failure is reported as a failure rather than an empty success', async () => {
  const response = await keywordResponse(new URL('https://calvocreativo.com/api/keywords?seed=upstream-failure-test'), async () => new Response('blocked', { status: 429 }));
  assert.equal(response.status, 502);
  assert.ok((await response.json()).error);
});
