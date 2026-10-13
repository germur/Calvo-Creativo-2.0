const SUGGEST_URL = 'https://suggestqueries.google.com/complete/search';
const inflight = new Map<string, Promise<Response>>();
const cache = new Map<string, { expires: number; body: string }>();
const MAX_INFLIGHT = 4;

function json(data: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers } });
}
async function suggestions(query: string, country: string, lang: string, request: typeof fetch): Promise<string[] | null> {
  const url = new URL(SUGGEST_URL);
  url.search = new URLSearchParams({ client: 'firefox', q: query, hl: lang, gl: country.toLowerCase() }).toString();
  try {
    const response = await request(url, { signal: AbortSignal.timeout(6000) });
    if (!response.ok) return null;
    const data = await response.json();
    return Array.isArray(data[1]) ? data[1].filter((value: unknown) => typeof value === 'string').map((value: string) => value.toLowerCase().trim()).filter(Boolean) : null;
  } catch { return null; }
}
export async function keywordResponse(url: URL, request: typeof fetch = fetch): Promise<Response> {
  const seed = (url.searchParams.get('seed') || '').trim().toLowerCase();
  const country = (url.searchParams.get('country') || 'CO').toUpperCase();
  const lang = (url.searchParams.get('lang') || 'es').toLowerCase();
  if (!seed || seed.length > 100 || /[\x00-\x1f]/.test(seed) || !/^[A-Z]{2}$/.test(country) || !/^[a-z]{2}(-[a-z]{2})?$/.test(lang)) {
    return json({ error: 'Introduce una palabra clave de hasta 100 caracteres y una región e idioma válidos.' }, 400);
  }
  const key = JSON.stringify([seed, country, lang]);
  const headers = { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' };
  const cached = cache.get(key);
  if (cached && cached.expires > Date.now()) return new Response(cached.body, { headers: { ...headers, 'Content-Type': 'application/json; charset=utf-8' } });
  if (inflight.has(key)) return (await inflight.get(key)!).clone();
  if (inflight.size >= MAX_INFLIGHT) return json({ error: 'Hay varias consultas en curso. Inténtalo en unos segundos.' }, 429, { 'Retry-After': '10' });
  const promise = (async () => {
    const queries = ['', ...'abcdefghijklmnopqrstuvwxyz'].map(letter => letter ? `${seed} ${letter}` : seed);
    const results: (string[] | null)[] = [];
    // Bound requests to the upstream instead of firing all 27 at once.
    for (let index = 0; index < queries.length; index += 9) {
      results.push(...await Promise.all(queries.slice(index, index + 9).map(query => suggestions(query, country, lang, request))));
    }
    const failures = results.filter(result => result === null).length;
    if (failures === results.length) return json({ error: 'El servicio de sugerencias no está disponible. Inténtalo más tarde.' }, 502);
    const keywords = [...new Set(results.flatMap(result => result || []))].filter(keyword => keyword !== seed && keyword.length > 2).sort();
    const data = { keywords, seed, country, lang, total: keywords.length, partial: failures > 0 };
    const response = json(data, 200, failures ? { 'Cache-Control': 'no-store' } : headers);
    if (!failures) {
      if (cache.size >= 100) cache.delete(cache.keys().next().value!);
      cache.set(key, { expires: Date.now() + 3600000, body: JSON.stringify(data) });
    }
    return response;
  })();
  inflight.set(key, promise);
  try { return (await promise).clone(); } finally { inflight.delete(key); }
}
