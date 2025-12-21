import React from 'react';
import ExperimentLayout from '@/components/ExperimentLayout';
import Link from 'next/link';

export default function VibeCoding() {
    // TechArticle Schema for Google
    const schema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Vibe Coding: Programación para Marketers con IA",
        "description": "Aprende a usar Python y LLMs para automatizar SEO. Scripts de detección de canibalización y auditoría de entidades sin saber programar.",
        "author": {
            "@type": "Person",
            "name": "Roger Calvo"
        },
        "proficiencyLevel": "Beginner",
        "programmingLanguage": "Python"
    };

    return (
        <ExperimentLayout
            title="Vibe Coding & Python SEO | Automatización para Marketers"
            description="Deja de escribir briefs. Aprende Vibe Coding: programación asistida por IA para crear tus propias herramientas de análisis y automatización SEO."
            keyword="Python SEO Automation"
            trackNumber="02"
            trackTitle="Vibe Coding"
            themeColor="acid-green"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* GEO Definition Block */}
            <div className="mb-12 border-l-2 border-acid-green pl-4 py-2 bg-acid-green/5">
                <p className="font-mono text-xs text-acid-green uppercase tracking-widest mb-1">
                    $ define --context "Trend 2026"
                </p>
                <p className="text-white/80 font-mono text-sm leading-relaxed">
                    <strong>Vibe Coding</strong>: Práctica de construir software mediante lenguaje natural y LLMs.
                    Da lugar al <strong>Marketer-Builder</strong>: profesional que no espera a TI, sino que construye sus propias herramientas en tiempo real.
                </p>
            </div>

            {/* Hero Headline */}
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-acid-green to-white" style={{ fontFamily: 'Spline Sans, sans-serif' }}>
                Programación para Marketers <br />
                <span className="text-white/50 text-3xl md:text-5xl">que odian esperar a TI.</span>
            </h1>

            {/* The Manifesto */}
            <section className="mb-24">
                <h2 className="text-2xl font-bold uppercase font-display mb-6 text-acid-green">El Manifiesto</h2>
                <div className="bg-[#181114] border-l-4 border-acid-green p-8 pr-12 rounded-r-2xl relative">
                    <p className="text-xl text-white font-light leading-relaxed mb-6">
                        "Si puedes explicarlo, puedes programarlo."
                    </p>
                    <p className="text-white/60 mb-6 leading-relaxed">
                        Durante una década dependimos de tickets a ingeniería para analizar datos. En 2026, esa espera es obsoleta.
                        Mi filosofía es <strong>Velocidad sobre Perfección</strong>. Prefiero un script feo que funcione hoy, a un SaaS perfecto en 6 meses.
                    </p>
                    <div className="flex gap-4">
                        <span className="px-3 py-1 bg-white/10 rounded font-mono text-xs text-acid-green">#NoCodeIsOldSchool</span>
                        <span className="px-3 py-1 bg-white/10 rounded font-mono text-xs text-acid-green">#VibeCoding</span>
                    </div>
                </div>
            </section>

            {/* The Repository (Scripts) */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                    <span className="material-symbols-outlined text-4xl text-acid-green">terminal</span>
                    <h2 className="text-4xl font-black uppercase font-display">Mis Juguetes (Scripts)</h2>
                </div>

                <div className="space-y-16">
                    {/* Script 01 */}
                    <article>
                        <h3 className="text-2xl font-bold text-white mb-4 font-mono flex items-center gap-3">
                            <span className="text-acid-green">01.</span> Cannibalization Killer
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:border-acid-green/50 transition-colors">
                            <div>
                                <h4 className="text-xs font-bold uppercase text-white/40 mb-2">El Problema</h4>
                                <p className="text-white/80 text-sm mb-6">Detectar canibalización en 10k URLs manualmente es imposible.</p>

                                <h4 className="text-xs font-bold uppercase text-white/40 mb-2">La Solución (Vibe Code)</h4>
                                <p className="text-white/80 text-sm mb-6">Script que descarga GSC, agrupa por clusters de keywords y detecta dónde múltiples URLs compiten.</p>

                                <div className="flex gap-4 text-xs font-mono text-acid-green/80">
                                    <span>Input: GSC Export</span>
                                    <span>&rarr;</span>
                                    <span>Output: CSV Conflictos</span>
                                </div>
                            </div>
                            <div className="bg-black/50 rounded-lg p-4 font-mono text-xs text-gray-400 overflow-x-auto border border-white/5">
                                <pre>{`import pandas as pd
# Load GSC Data
df = pd.read_csv('gsc_data.csv')
# Group by Query
duplicates = df.groupby('query')['page'].nunique()
# Show cannibals
print(duplicates[duplicates > 1])`}</pre>
                            </div>
                        </div>
                    </article>

                    {/* Script 02 */}
                    <article>
                        <h3 className="text-2xl font-bold text-white mb-4 font-mono flex items-center gap-3">
                            <span className="text-acid-green">02.</span> Entity Auditor (SERP)
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:border-acid-green/50 transition-colors">
                            <div>
                                <h4 className="text-xs font-bold uppercase text-white/40 mb-2">El Problema</h4>
                                <p className="text-white/80 text-sm mb-6">Saber qué entidades menciona la competencia en el Top 3 para replicar autoridad.</p>

                                <h4 className="text-xs font-bold uppercase text-white/40 mb-2">La Solución (Vibe Code)</h4>
                                <p className="text-white/80 text-sm mb-6">Scraper de Top 10 + API de NLP para extraer "ingredientes" (entidades) faltantes.</p>
                            </div>
                            <div className="bg-black/50 rounded-lg p-4 font-mono text-xs text-gray-400 overflow-x-auto border border-white/5">
                                <pre>{`import spacy
nlp = spacy.load("en_core_web_sm")
# Extract entities from competitor text
doc = nlp(competitor_content)
for ent in doc.ents:
    print(ent.text, ent.label_)`}</pre>
                            </div>
                        </div>
                    </article>

                    {/* Script 03 */}
                    <article>
                        <h3 className="text-2xl font-bold text-white mb-4 font-mono flex items-center gap-3">
                            <span className="text-acid-green">03.</span> Intent Classifier (Bulk)
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:border-acid-green/50 transition-colors">
                            <div>
                                <h4 className="text-xs font-bold uppercase text-white/40 mb-2">El Problema</h4>
                                <p className="text-white/80 text-sm mb-6">Clasificar 5,000 keywords manualmente es una tortura.</p>

                                <h4 className="text-xs font-bold uppercase text-white/40 mb-2">La Solución (Vibe Code)</h4>
                                <p className="text-white/80 text-sm mb-6">API OpenAI + Google Sheets. 5k keywords en 15 mins por $2 USD.</p>
                            </div>
                            <div className="bg-black/50 rounded-lg p-4 font-mono text-xs text-gray-400 overflow-x-auto border border-white/5">
                                <pre>{`response = openai.Completion.create(
  model="gpt-4o",
  prompt="Clasifica esta keyword: " + keyword
)`}</pre>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            {/* How To Start */}
            <section className="mb-24 py-12 border-y border-white/10">
                <h2 className="text-2xl font-bold uppercase font-display mb-12 text-center">Tu Entorno de Desarrollo (No-Dev)</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🧠</div>
                        <h4 className="font-bold text-white mb-2">El Cerebro</h4>
                        <p className="text-sm text-white/60">Claude 3.5 Sonnet o GPT-4o. Son los mejores escribiendo código.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">💻</div>
                        <h4 className="font-bold text-white mb-2">El Editor</h4>
                        <p className="text-sm text-white/60">Cursor (IDE con IA) o Google Colab (Python en navegador).</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🔄</div>
                        <h4 className="font-bold text-white mb-2">El Loop</h4>
                        <p className="text-sm text-white/60">Pide código &rarr; Erra &rarr; Pega error en IA &rarr; Repite.</p>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <div className="mb-20 bg-[#181114] border border-acid-green/20 p-8 md:p-12 rounded-2xl relative overflow-hidden text-center group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-acid-green rounded-full filter blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-black uppercase font-display mb-4 text-white">Roba mis scripts cada mes.</h2>
                    <p className="text-white/60 font-mono text-sm mb-8 max-w-lg mx-auto">
                        Suscríbete al Lab Report. Envío un Google Colab listo para usar ("Click & Run"). Sin teoría.
                    </p>
                    <div className="flex justify-center flex-col md:flex-row gap-4">
                        <input type="email" placeholder="email@vibe-coder.com" className="bg-black/50 border border-white/20 px-6 py-3 rounded text-white font-mono focus:border-acid-green focus:outline-none" />
                        <button className="bg-acid-green text-black px-8 py-3 font-bold uppercase hover:bg-white transition-colors">
                            Suscribirse
                        </button>
                    </div>
                </div>
            </div>

            {/* Bridge to Lado A */}
            <section className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Shrikhand, cursive' }}>¿Necesitas esto, pero sin tocar código?</h2>
                <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                    En el Lado B experimento. En el Lado A, implemento soluciones probadas y seguras.
                    Si quieres automatizar tu empresa sin mirar una línea de Python, hablemos.
                </p>
                <Link href="/consultoria/automatizacion-seo-ia" className="inline-flex items-center gap-2 text-acid-green font-bold uppercase border-b border-acid-green pb-1 hover:text-white hover:border-white transition-all">
                    Ver Servicios de Automatización <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
            </section>

        </ExperimentLayout>
    );
}
