import { useState, useCallback } from 'react'
import ExperimentLayout from '@/components/ExperimentLayout'

// ─── Clustering (pure JS, no dependencies) ────────────────────────────────────

const STOPWORDS = new Set([
  'de', 'la', 'el', 'en', 'y', 'a', 'los', 'las', 'del', 'un', 'una',
  'para', 'con', 'que', 'por', 'como', 'se', 'es', 'al', 'lo', 'su',
  'sin', 'no', 'vs', 'qué', 'cómo', 'cuál', 'cuáles', 'más',
  'the', 'and', 'of', 'in', 'to', 'for', 'is', 'on', 'it', 'with',
  'as', 'at', 'by', 'or', 'be', 'are', 'from', 'this', 'that',
  'how', 'what', 'do', 'can', 'your',
])

interface Cluster {
  label: string
  keywords: string[]
}

function clusterKeywords(keywords: string[], seedTerms: Set<string> = new Set(), maxClusters = 14): Cluster[] {
  if (keywords.length === 0) return []

  // Exclude words that are part of the seed (they'd dominate every cluster)
  // and words that appear in >70% of keywords (ubiquitous = not differentiating)
  const wordCount = new Map<string, number>()
  keywords.forEach(kw => {
    const words = kw.split(/\s+/).filter(w => w.length > 2 && !STOPWORDS.has(w) && !seedTerms.has(w))
    new Set(words).forEach(w => wordCount.set(w, (wordCount.get(w) || 0) + 1))
  })

  const tooFrequent = new Set<string>()
  const ubiquityThreshold = Math.ceil(keywords.length * 0.7)
  wordCount.forEach((count, word) => {
    if (count >= ubiquityThreshold) tooFrequent.add(word)
  })
  tooFrequent.forEach(w => wordCount.delete(w))

  const minFreq = Math.max(2, Math.ceil(keywords.length * 0.035))
  const centers = Array.from(wordCount.entries())
    .filter(([, n]) => n >= minFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxClusters)
    .map(([word]) => word)

  if (centers.length === 0) return [{ label: 'General', keywords }]

  const buckets = new Map<string, string[]>()
  centers.forEach(c => buckets.set(c, []))
  buckets.set('__otros__', [])

  keywords.forEach(kw => {
    const kwWords = new Set(kw.split(/\s+/).filter(w => !seedTerms.has(w)))
    const match = centers.find(c => kwWords.has(c))
    buckets.get(match ?? '__otros__')!.push(kw)
  })

  const result: Cluster[] = centers
    .map(c => ({ label: c, keywords: buckets.get(c)! }))
    .filter(c => c.keywords.length > 0)
    .sort((a, b) => b.keywords.length - a.keywords.length)

  const otros = buckets.get('__otros__')!
  if (otros.length > 0) result.push({ label: 'Otros', keywords: otros })

  return result
}

// ─── Countries ────────────────────────────────────────────────────────────────

const COUNTRIES = [
  { code: 'CO', label: 'Colombia', lang: 'es' },
  { code: 'ES', label: 'España', lang: 'es' },
  { code: 'MX', label: 'México', lang: 'es' },
  { code: 'AR', label: 'Argentina', lang: 'es' },
  { code: 'CL', label: 'Chile', lang: 'es' },
  { code: 'PE', label: 'Perú', lang: 'es' },
  { code: 'US', label: 'Estados Unidos', lang: 'en' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function KeywordResearch() {
  const [seed, setSeed] = useState('')
  const [countryCode, setCountryCode] = useState('CO')
  const [loading, setLoading] = useState(false)
  const [keywords, setKeywords] = useState<string[]>([])
  const [clusters, setClusters] = useState<Cluster[]>([])
  const [activeTab, setActiveTab] = useState<'keywords' | 'clusters'>('keywords')
  const [error, setError] = useState('')
  const [ran, setRan] = useState(false)
  const [ranSeed, setRanSeed] = useState('')
  const [ranCountry, setRanCountry] = useState('')

  const country = COUNTRIES.find(c => c.code === countryCode) ?? COUNTRIES[0]

  const run = useCallback(async () => {
    const trimmedSeed = seed.trim().toLowerCase()
    if (!trimmedSeed || loading) return
    setLoading(true)
    setError('')
    setKeywords([])
    setClusters([])
    setRan(false)

    try {
      const res = await fetch(
        `/api/keywords?seed=${encodeURIComponent(trimmedSeed)}&country=${country.code}&lang=${country.lang}`
      )
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      const kws: string[] = data.keywords ?? []
      const seedTerms = new Set(trimmedSeed.split(/\s+/).filter(Boolean))
      setKeywords(kws)
      setClusters(clusterKeywords(kws, seedTerms))
      setRanSeed(trimmedSeed)
      setRanCountry(country.code)
      setRan(true)
    } catch {
      setError('No se pudo conectar con Google Suggest. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }, [seed, country, loading])

  const seedChanged = ran && (seed.trim().toLowerCase() !== ranSeed || country.code !== ranCountry)

  const downloadCSV = () => {
    const rows = [['keyword', 'cluster']]
    clusters.forEach(c => c.keywords.forEach(kw => rows.push([kw, c.label])))
    const csv = rows.map(r => r.map(v => `"${v}"`).join(',')).join('\n')
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `keywords-${seed.replace(/\s+/g, '-')}-${country.code}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <ExperimentLayout
      title="Keyword Research Tool | The Playground"
      description="Descubre keywords con Google Suggest y agrúpalas por intención semántica. Gratis, sin API key, sin límites."
      keyword="keyword research tool gratis"
      trackNumber="04-02"
      trackTitle="Keyword Research"
      themeColor="acid-green"
      mode="dark"
      width="wide"
    >
      <div className="grid lg:grid-cols-12 gap-12">

        {/* ── LEFT: CONTROLS ─────────────────────────────────────────────────── */}
        <div className="lg:col-span-4 space-y-6 bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 h-fit sticky top-24">
          <div className="border-b border-white/10 pb-4">
            <h1 className="text-2xl font-bold text-white uppercase flex items-center gap-2">
              <span className="text-3xl">🔍</span> Keyword Research
            </h1>
            <p className="text-xs text-gray-400 mt-1 font-mono">GOOGLE_SUGGEST.EXE</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-300 uppercase tracking-wide">Seed Keyword</label>
            <input
              type="text"
              value={seed}
              onChange={e => setSeed(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && run()}
              placeholder="ej: marketing digital"
              className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-acid-green font-mono text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-300 uppercase tracking-wide">País</label>
            <select
              value={countryCode}
              onChange={e => setCountryCode(e.target.value)}
              className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-acid-green font-mono text-sm"
            >
              {COUNTRIES.map(c => (
                <option key={c.code} value={c.code}>{c.label} ({c.code})</option>
              ))}
            </select>
          </div>

          <button
            onClick={run}
            disabled={!seed.trim() || loading}
            className="w-full bg-acid-green text-black font-bold py-3 rounded-lg uppercase tracking-wide hover:bg-acid-green/80 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full animate-spin" />
                Expandiendo...
              </>
            ) : (
              '> Ejecutar'
            )}
          </button>

          {ran && keywords.length > 0 && (
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/40 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-acid-green font-mono">{keywords.length}</div>
                  <div className="text-[10px] text-gray-500 uppercase mt-1">Keywords</div>
                </div>
                <div className="bg-black/40 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-acid-green font-mono">{clusters.length}</div>
                  <div className="text-[10px] text-gray-500 uppercase mt-1">Clusters</div>
                </div>
              </div>
              <button
                onClick={downloadCSV}
                className="w-full border border-acid-green text-acid-green font-bold py-2 rounded-lg uppercase tracking-wide text-sm hover:bg-acid-green/10 transition-all"
              >
                ↓ Exportar CSV
              </button>
            </div>
          )}

          <div className="text-[10px] text-gray-600 font-mono pt-2">
            100% gratis · Sin API key · Google Suggest · Clustering semántico
          </div>
        </div>

        {/* ── RIGHT: RESULTS ─────────────────────────────────────────────────── */}
        <div className="lg:col-span-8">

          {/* Error */}
          {error && (
            <div className="bg-red-900/30 border border-red-500/40 rounded-xl p-6 text-red-400 font-mono text-sm">
              {error}
            </div>
          )}

          {/* Loading skeleton */}
          {loading && (
            <div className="space-y-4">
              <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 text-center space-y-3">
                <div className="text-2xl animate-pulse">🔄</div>
                <p className="text-gray-400 font-mono text-sm">
                  Consultando Google Suggest para <span className="text-acid-green">&ldquo;{seed}&rdquo;</span>...
                </p>
                <p className="text-gray-600 text-xs">Expandiendo con a-z · Puede tardar 3-5 segundos</p>
              </div>
            </div>
          )}

          {/* Empty state */}
          {!loading && !ran && !error && (
            <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-12 text-center space-y-4">
              <div className="text-5xl opacity-30">🔍</div>
              <p className="text-gray-600 font-mono text-sm">
                Ingresa una keyword y presiona Ejecutar
              </p>
              <p className="text-gray-700 text-xs">
                Alphabet-soup expansion: seed + a, seed + b, ..., seed + z
              </p>
            </div>
          )}

          {/* Results */}
          {!loading && ran && keywords.length > 0 && (
            <div className="space-y-6">
              {/* Active seed indicator */}
              <div className={`flex items-center justify-between gap-4 px-4 py-3 rounded-lg border ${
                seedChanged
                  ? 'bg-yellow-500/10 border-yellow-500/40 text-yellow-300'
                  : 'bg-black/40 border-white/10 text-gray-400'
              }`}>
                <div className="text-xs font-mono">
                  {seedChanged ? '⚠ Resultados anteriores · ' : 'Resultados para: '}
                  <span className="text-white font-bold">&ldquo;{ranSeed}&rdquo;</span>
                  <span className="text-gray-500"> · {ranCountry}</span>
                </div>
                {seedChanged && (
                  <button
                    onClick={run}
                    className="text-[11px] font-bold uppercase tracking-wide bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 px-3 py-1 rounded transition-colors whitespace-nowrap"
                  >
                    ↻ Actualizar
                  </button>
                )}
              </div>

              {/* Tabs */}
              <div className="flex gap-2 border-b border-white/10 pb-0">
                {(['keywords', 'clusters'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-3 font-bold uppercase text-sm tracking-wide transition-all border-b-2 -mb-px ${
                      activeTab === tab
                        ? 'text-acid-green border-acid-green'
                        : 'text-gray-500 border-transparent hover:text-gray-300'
                    }`}
                  >
                    {tab === 'keywords' ? `Keywords (${keywords.length})` : `Clusters (${clusters.length})`}
                  </button>
                ))}
              </div>

              {/* Keywords tab */}
              {activeTab === 'keywords' && (
                <div className="flex flex-wrap gap-2 max-h-[600px] overflow-y-auto pr-2">
                  {keywords.map(kw => (
                    <span
                      key={kw}
                      className="bg-black/50 border border-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-mono hover:border-acid-green/40 hover:text-white transition-colors cursor-default"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              )}

              {/* Clusters tab */}
              {activeTab === 'clusters' && (
                <div className="grid sm:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-2">
                  {clusters.map((cluster, i) => (
                    <div
                      key={cluster.label}
                      className="bg-[#1a1a1a] border border-white/10 rounded-xl p-5 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-acid-green uppercase text-sm tracking-wide">
                          {cluster.label === 'Otros' ? '— Otros' : cluster.label}
                        </h3>
                        <span className="text-[10px] font-mono text-gray-500 bg-black/40 px-2 py-1 rounded">
                          {cluster.keywords.length} kws
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cluster.keywords.slice(0, 20).map(kw => (
                          <span
                            key={kw}
                            className="bg-black/50 text-gray-400 px-2 py-1 rounded text-[11px] font-mono"
                          >
                            {kw}
                          </span>
                        ))}
                        {cluster.keywords.length > 20 && (
                          <span className="text-gray-600 text-[11px] px-2 py-1 font-mono">
                            +{cluster.keywords.length - 20} más
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* No results */}
          {!loading && ran && keywords.length === 0 && !error && (
            <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-8 text-center">
              <p className="text-gray-500 font-mono text-sm">
                Google Suggest no devolvió resultados para <span className="text-white">&ldquo;{seed}&rdquo;</span> en {country.label}.
              </p>
              <p className="text-gray-700 text-xs mt-2">Prueba con otra keyword o cambia el país.</p>
            </div>
          )}
        </div>
      </div>
    </ExperimentLayout>
  )
}
