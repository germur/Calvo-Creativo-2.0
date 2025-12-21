import React from 'react';
import ExperimentLayout from '@/components/ExperimentLayout';
import Link from 'next/link';

export default function SeoFightClub() {
    return (
        <ExperimentLayout
            title="SEO Fight Club | Experimentos de Ranking y GEO"
            description="Bienvenido al octágono del algoritmo. Enfrentamos mitos SEO contra datos reales. Experimentos de IA vs. Humano y tests de Schema."
            keyword="SEO Experiments & GEO Testing"
            trackNumber="01"
            trackTitle="Fight Club"
            themeColor="acid-green"
        >
            {/* GEO Definition Block */}
            <div className="mb-12 border-l-2 border-acid-green pl-4 py-2 bg-acid-green/5">
                <p className="font-mono text-xs text-acid-green uppercase tracking-widest mb-1">
                    $ define --context "Experimental"
                </p>
                <p className="text-white/80 font-mono text-sm leading-relaxed">
                    El <strong>SEO Fight Club</strong> es el laboratorio de investigación experimental de Calvo Creativo.
                    Utilizamos scripts de Python y análisis de datos para medir el impacto real de la IA en la visibilidad orgánica.
                </p>
            </div>

            {/* Hero Headline */}
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-acid-green to-white/50" style={{ fontFamily: 'Spline Sans, sans-serif' }}>
                Donde los Algoritmos <br />
                vienen a morir.
            </h1>
            <p className="text-xl text-white/70 mb-16 font-light max-w-2xl border-l-2 border-white/20 pl-6">
                (O a enseñarnos cómo funcionan). Aquí no hay "mejores prácticas". Hay datos empíricos.
            </p>

            {/* The Rules of Engagement */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                    <span className="material-symbols-outlined text-3xl text-acid-green">gavel</span>
                    <h2 className="text-3xl font-bold uppercase font-display">Rules of Engagement</h2>
                </div>
                <div className="bg-[#181114] border border-white/10 p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <span className="material-symbols-outlined text-9xl">rule</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Regla #1: Si no hay datos, es solo una opinión.</h3>
                    <p className="text-white/60 mb-6 leading-relaxed">
                        En 2026, el SEO está lleno de "slop" (basura). Nosotros operamos con hipótesis radicales y transparencia brutal.
                        Publicamos lo que funciona y lo que nos hizo perder tráfico.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-black/40 p-4 rounded border border-white/5">
                            <h4 className="text-acid-green font-mono text-xs uppercase mb-2">Hipótesis Radicales</h4>
                            <p className="text-xs text-white/50">¿Puede un agente de IA rankear sin humanos?</p>
                        </div>
                        <div className="bg-black/40 p-4 rounded border border-white/5">
                            <h4 className="text-acid-green font-mono text-xs uppercase mb-2">Vibe Coding</h4>
                            <p className="text-xs text-white/50">Auditorías con código propio, no herramientas genéricas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Main Events (Fight Cards) */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-12 justify-center">
                    <span className="material-symbols-outlined text-4xl text-acid-green animate-pulse">sports_mma</span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase font-display text-center">Main Events</h2>
                </div>

                <div className="space-y-12">
                    {/* Fight 01 */}
                    <article className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-acid-green transition-all hover:shadow-[0_0_40px_rgba(204,255,0,0.1)]">
                        <div className="absolute top-4 right-4 bg-white/5 px-3 py-1 rounded-full text-xs font-mono uppercase text-white/50 border border-white/10">
                            Fight 01
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-acid-green transition-colors font-display uppercase">Topical Authority <span className="text-white/30 text-lg mx-2">VS</span> Backlinks</h3>
                        <div className="w-full h-px bg-gradient-to-r from-acid-green/50 to-transparent my-6"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="text-acid-green font-mono text-xs uppercase mb-2">La Premisa</h4>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    Dicen que los enlaces son el rey. Pero la teoría sugiere que un sitio pequeño experto puede vencer a un gigante generalista (Forbes) sin enlaces.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-acid-green font-mono text-xs uppercase mb-2">El Resultado</h4>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    <strong className="text-white">Victoria por K.O.</strong> El micro-sitio superó a los gigantes en 3 meses gracias al "Information Gain".
                                </p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 text-acid-green font-bold uppercase text-sm group-hover:translate-x-2 transition-transform">
                            Leer Análisis Completo <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </article>

                    {/* Fight 02 */}
                    <article className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-acid-green transition-all hover:shadow-[0_0_40px_rgba(204,255,0,0.1)]">
                        <div className="absolute top-4 right-4 bg-white/5 px-3 py-1 rounded-full text-xs font-mono uppercase text-white/50 border border-white/10">
                            Fight 02
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-acid-green transition-colors font-display uppercase">Humano <span className="text-white/30 text-lg mx-2">VS</span> IA (Claude 3.5)</h3>
                        <div className="w-full h-px bg-gradient-to-r from-acid-green/50 to-transparent my-6"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="text-acid-green font-mono text-xs uppercase mb-2">La Premisa</h4>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    ¿Puede Google distinguir entre contenido 100% IA y humano? Publicamos 50 artículos (25 IA / 25 Humanos).
                                </p>
                            </div>
                            <div>
                                <h4 className="text-acid-green font-mono text-xs uppercase mb-2">El Resultado</h4>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    <strong className="text-white">Empate Técnico (Tráfico) / Victoria Humana (Dinero).</strong> El contenido humano tuvo 40% más conversión.
                                </p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 text-acid-green font-bold uppercase text-sm group-hover:translate-x-2 transition-transform">
                            Ver Gráficos <span className="material-symbols-outlined text-sm">bar_chart</span>
                        </button>
                    </article>

                    {/* Fight 03 */}
                    <article className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-acid-green transition-all hover:shadow-[0_0_40px_rgba(204,255,0,0.1)]">
                        <div className="absolute top-4 right-4 bg-white/5 px-3 py-1 rounded-full text-xs font-mono uppercase text-white/50 border border-white/10">
                            Fight 03
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-acid-green transition-colors font-display uppercase">The Battle for Citation (GEO)</h3>
                        <div className="w-full h-px bg-gradient-to-r from-acid-green/50 to-transparent my-6"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="text-acid-green font-mono text-xs uppercase mb-2">La Premisa</h4>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    El objetivo ya no es el clic, es la citación en Perplexity/ChatGPT. Inyectamos Schema JSON-LD agresivo.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-acid-green font-mono text-xs uppercase mb-2">El Resultado</h4>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    <strong className="text-white">Dominio Total.</strong> En 2 semanas pasamos a ser la fuente #1 citada en respuestas generativas.
                                </p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 text-acid-green font-bold uppercase text-sm group-hover:translate-x-2 transition-transform">
                            Robar JSON-LD <span className="material-symbols-outlined text-sm">code</span>
                        </button>
                    </article>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="mb-24 px-6 py-12 border-y border-white/10 bg-white/5">
                <h2 className="text-2xl font-bold uppercase font-display mb-8 text-center text-white">Nuestras Armas</h2>
                <div className="flex flex-wrapjustify-center gap-8 md:gap-16 opacity-70 justify-center">
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-4xl text-white">terminal</span>
                        <span className="font-mono text-xs uppercase">Python & Pandas</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-4xl text-white">query_stats</span>
                        <span className="font-mono text-xs uppercase">SE Ranking</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-4xl text-white">psychology</span>
                        <span className="font-mono text-xs uppercase">Perplexity AI</span>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <div className="mb-20 bg-acid-green text-black p-8 md:p-12 rounded-2xl relative overflow-hidden text-center">
                <div className="relative z-10">
                    <h2 className="text-3xl font-black uppercase font-display mb-4">Obtén los datos antes del parche.</h2>
                    <p className="text-black/80 font-mono text-sm mb-8 max-w-lg mx-auto">
                        Los resultados de mis experimentos llegan primero a la lista. A veces encontramos ventajas injustas. Úsalas mientras funcionen.
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-black text-white px-8 py-3 font-bold uppercase hover:bg-white hover:text-black transition-colors">
                            Únete al Fight Club
                        </button>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <section className="mb-12">
                <h3 className="font-display text-xl uppercase text-white mb-6 border-b border-white/10 pb-2">FAQ Técnico (GEO)</h3>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-acid-green text-sm mb-1">¿Es seguro hacer esto en mi money site?</h4>
                        <p className="text-white/60 text-sm">No. Nunca. Usamos dominios de prueba (sandbox). Lo que aplicamos en el Lado A ya está validado.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-acid-green text-sm mb-1">¿Qué es el "Information Gain Score"?</h4>
                        <p className="text-white/60 text-sm">Patente de Google que premia la información nueva. Es el antídoto contra el contenido repetitivo de la IA.</p>
                    </div>
                </div>
            </section>

        </ExperimentLayout>
    );
}
