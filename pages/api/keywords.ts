import type { NextApiRequest, NextApiResponse } from 'next'

const SUGGEST_URL = 'https://suggestqueries.google.com/complete/search'
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36'

async function fetchSuggestions(query: string, country: string, lang: string): Promise<string[]> {
  const url = `${SUGGEST_URL}?client=firefox&q=${encodeURIComponent(query)}&hl=${lang}&gl=${country.toLowerCase()}`
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': UA },
      signal: AbortSignal.timeout(6000),
    })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data[1])
      ? data[1].map((s: string) => s.toLowerCase().trim()).filter(Boolean)
      : []
  } catch {
    return []
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).end()

  const seed = typeof req.query.seed === 'string' ? req.query.seed.trim().toLowerCase() : ''
  const country = typeof req.query.country === 'string' ? req.query.country.toUpperCase() : 'CO'
  const lang = typeof req.query.lang === 'string' ? req.query.lang.toLowerCase() : 'es'

  if (!seed) return res.status(400).json({ error: 'seed requerido' })

  // Alphabet-soup: seed + seed a, seed b, ..., seed z
  const letters = ['', ...'abcdefghijklmnopqrstuvwxyz'.split('')]
  const queries = letters.map(l => (l ? `${seed} ${l}` : seed))

  // Fire all requests in parallel — server-side avoids CORS and rate limits are generous per IP
  const results = await Promise.all(queries.map(q => fetchSuggestions(q, country, lang)))

  const all = new Set<string>()
  results.flat().forEach(kw => all.add(kw))
  all.delete(seed) // seed itself is not a discovered keyword

  const keywords = Array.from(all)
    .filter(kw => kw.length > 2)
    .sort()

  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
  return res.json({ keywords, seed, country, lang, total: keywords.length })
}
