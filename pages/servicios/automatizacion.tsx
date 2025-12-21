import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function AutomatizacionService() {
    return (
        <>
            <SeoHead title="Automatización SEO: Golems Digitales | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-background-dark font-display text-white antialiased overflow-x-hidden selection:bg-gold selection:text-stone-dark flex flex-col items-center">

                {/* Hero Section */}
                <section className="relative w-full max-w-7xl px-4 py-12 md:py-24 md:px-8">
                    <div className="relative overflow-hidden rounded-xl border border-stone-lighter bg-stone-light shadow-2xl">
                        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>

                        <div className="relative z-10 grid gap-12 lg:grid-cols-2 p-8 md:p-12 items-center">
                            <div className="flex flex-col gap-6">
                                <div className="inline-flex items-center gap-2 text-gold text-xs font-bold tracking-[0.2em] uppercase">
                                    <span className="h-px w-8 bg-gold"></span>
                                    <span>Ingeniería Arcana</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter text-white uppercase">
                                    Golems<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#b88c12]">Python</span>
                                </h1>
                                <p className="text-lg md:text-xl text-parchment max-w-md font-light border-l-2 border-gold pl-4">
                                    Scripts que trabajan mientras duermes. Automatizamos la recolección de datos, el enlazado interno y la generación de reportes.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button className="flex h-12 items-center justify-center rounded bg-gold px-6 text-stone-dark font-bold hover:bg-white transition-colors uppercase tracking-wider">
                                        Activar Golem
                                    </button>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-center min-h-[300px]">
                                <div className="relative w-full aspect-square max-w-sm rounded bg-stone-dark border border-stone-lighter p-8 shadow-2xl overflow-hidden flex flex-col items-center justify-center text-center group">
                                    <span className="material-symbols-outlined text-9xl text-stone-lighter group-hover:text-gold transition-colors duration-700">smart_toy</span>
                                    <div className="absolute top-4 right-4 animate-pulse">
                                        <div className="size-2 bg-gold rounded-full"></div>
                                    </div>
                                    <div className="mt-8 bg-black/50 p-4 border border-stone-lighter font-mono text-[10px] text-left text-stone-400 w-full">
                                        def wake_golem(target):<br />
                                        &nbsp;&nbsp;data = scan(target)<br />
                                        &nbsp;&nbsp;return <span className="text-gold">gold_nuggets</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Capabilities Grid */}
                <section className="w-full max-w-7xl px-4 py-20 md:px-8">
                    <h2 className="text-3xl font-bold text-center text-white uppercase mb-16 flex items-center justify-center gap-4">
                        <span className="h-px w-12 bg-stone-lighter"></span>
                        Grimorio de Scripts
                        <span className="h-px w-12 bg-stone-lighter"></span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Script 1 */}
                        <div className="bg-stone-light p-6 border border-stone-lighter hover:border-gold transition-colors group">
                            <div className="size-12 bg-stone-dark border border-stone-lighter flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-stone-dark transition-colors">
                                <span className="material-symbols-outlined">data_object</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 uppercase">Scraping de Datos</h3>
                            <p className="text-parchment text-sm mb-4">
                                Extracción masiva de SERPs, competidores y oportunidades de keywords. Convertimos el caos de la web en CSVs ordenados.
                            </p>
                        </div>

                        {/* Script 2 */}
                        <div className="bg-stone-light p-6 border border-stone-lighter hover:border-gold transition-colors group">
                            <div className="size-12 bg-stone-dark border border-stone-lighter flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-stone-dark transition-colors">
                                <span className="material-symbols-outlined">auto_fix_high</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 uppercase">Interlinking Auto</h3>
                            <p className="text-parchment text-sm mb-4">
                                Algoritmos que detectan oportunidades de enlazado interno semántico y sugieren conexiones para fortalecer tu arquitectura.
                            </p>
                        </div>

                        {/* Script 3 */}
                        <div className="bg-stone-light p-6 border border-stone-lighter hover:border-gold transition-colors group">
                            <div className="size-12 bg-stone-dark border border-stone-lighter flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-stone-dark transition-colors">
                                <span className="material-symbols-outlined">monitoring</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 uppercase">Dashboards Vivos</h3>
                            <p className="text-parchment text-sm mb-4">
                                Conectamos Search Console, Analytics y APIs externas en un solo tablero de mando automatizado.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Code Block Feature */}
                <section className="w-full bg-stone-dark py-16 px-4">
                    <div className="max-w-4xl mx-auto flex flex-col items-center">
                        <div className="w-full bg-[#1e1e1e] rounded-lg border border-stone-lighter overflow-hidden shadow-2xl">
                            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-stone-lighter/20">
                                <div className="size-3 rounded-full bg-red-500"></div>
                                <div className="size-3 rounded-full bg-yellow-500"></div>
                                <div className="size-3 rounded-full bg-green-500"></div>
                                <span className="ml-2 font-mono text-xs text-stone-500">automaton.py</span>
                            </div>
                            <div className="p-6 overflow-x-auto">
                                <pre className="font-mono text-sm text-stone-300">
                                    <span className="text-purple-400">import</span> calvo_labs <span className="text-purple-400">as</span> cl<br /><br />
                                    <span className="text-blue-400">def</span> <span className="text-yellow-300">optimize_everything</span>():<br />
                                    &nbsp;&nbsp;targets = cl.get_keywords()<br />
                                    &nbsp;&nbsp;<span className="text-purple-400">for</span> t <span className="text-purple-400">in</span> targets:<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;competitors = cl.scan_serp(t)<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;gap = cl.analyze_gap(competitors)<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">print</span>(f<span className="text-green-300">"Opportunity found: &#123;gap&#125;"</span>)<br />
                                    <br />
                                    <span className="text-gray-500"># Running process...</span>
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 px-4 text-center">
                    <h2 className="text-4xl font-bold text-white uppercase mb-8">Automatiza tu Éxito</h2>
                    <button className="bg-gold text-stone-dark font-bold text-lg px-12 py-4 rounded hover:bg-white transition-colors border-2 border-transparent hover:border-gold uppercase tracking-wider">
                        Solicitar Scripts
                    </button>
                </section>
            </main>
            <Footer />
        </>
    );
}
