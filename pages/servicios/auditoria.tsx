import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function AuditoriaService() {
    return (
        <>
            <SeoHead title="Auditoría SEO: Protocolo Vikingo | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-background-dark font-display text-white antialiased overflow-x-hidden selection:bg-gold selection:text-stone-dark flex flex-col items-center">

                {/* Hero Section */}
                <section className="relative w-full max-w-7xl px-4 py-12 md:py-24 md:px-8">
                    <div className="relative overflow-hidden rounded-xl border border-stone-lighter bg-stone-light shadow-2xl">
                        {/* Background Texture */}
                        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-leather.png')" }}></div>

                        <div className="relative z-10 grid gap-12 lg:grid-cols-2 p-8 md:p-12 items-center">
                            <div className="flex flex-col gap-6">
                                <div className="inline-flex items-center gap-2 text-gold text-xs font-bold tracking-[0.2em] uppercase">
                                    <span className="h-px w-8 bg-gold"></span>
                                    <span>Protocolo Técnico v2.0</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter text-white uppercase">
                                    Limpieza<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#b88c12]">Del Código</span>
                                </h1>
                                <p className="text-lg md:text-xl text-parchment max-w-md font-light border-l-2 border-gold pl-4">
                                    Identificamos grietas arquitectónicas y eliminamos la deuda técnica. Auditoría forense para sitios que no pueden fallar.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button className="flex h-12 items-center justify-center rounded bg-gold px-6 text-stone-dark font-bold hover:bg-white transition-colors uppercase tracking-wider">
                                        Iniciar Purga
                                    </button>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-center min-h-[300px]">
                                <div className="relative w-full aspect-square max-w-sm rounded bg-stone-dark border border-stone-lighter p-8 shadow-2xl overflow-hidden group flex flex-col items-center justify-center text-center">
                                    <span className="material-symbols-outlined text-8xl text-gold mb-4 group-hover:scale-110 transition-transform duration-500">gavel</span>
                                    <div className="font-mono text-xs text-parchment">
                                        &gt; scanning_core_vitals...<br />
                                        &gt; error_404_found: 0<br />
                                        &gt; status: <span className="text-gold font-bold">OPTIMAL</span>
                                    </div>
                                    <div className="absolute inset-0 border-4 border-gold/10 rounded pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pillars Section */}
                <section className="w-full max-w-7xl px-4 py-12 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Pilar 1 */}
                        <div className="group relative bg-stone-light border border-stone-lighter p-8 hover:border-gold transition-colors">
                            <div className="absolute top-4 right-4 text-gold/10 font-black text-6xl select-none group-hover:text-gold/20 transition-colors">01</div>
                            <h3 className="text-2xl font-bold text-white mb-4 uppercase">Cimientos</h3>
                            <p className="text-parchment text-sm leading-relaxed mb-4">
                                Rastreo de errores críticos: Rendering, Core Web Vitals y velocidad de carga. Si la base tiembla, el castillo cae.
                            </p>
                            <ul className="text-xs text-stone-400 space-y-2 font-mono">
                                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Server Response Time</li>
                                <li className="flex items-center gap-2"><span className="text-gold">✓</span> DOM Complexity</li>
                            </ul>
                        </div>

                        {/* Pilar 2 */}
                        <div className="group relative bg-stone-light border border-stone-lighter p-8 hover:border-gold transition-colors">
                            <div className="absolute top-4 right-4 text-gold/10 font-black text-6xl select-none group-hover:text-gold/20 transition-colors">02</div>
                            <h3 className="text-2xl font-bold text-white mb-4 uppercase">Contenido</h3>
                            <p className="text-parchment text-sm leading-relaxed mb-4">
                                Detectamos canibalización de keywords y contenido delgado (Thin Content). Cada URL debe tener un propósito de combate.
                            </p>
                            <ul className="text-xs text-stone-400 space-y-2 font-mono">
                                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Semantic Structure</li>
                                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Duplicate Content</li>
                            </ul>
                        </div>

                        {/* Pilar 3 */}
                        <div className="group relative bg-stone-light border border-stone-lighter p-8 hover:border-gold transition-colors">
                            <div className="absolute top-4 right-4 text-gold/10 font-black text-6xl select-none group-hover:text-gold/20 transition-colors">03</div>
                            <h3 className="text-2xl font-bold text-white mb-4 uppercase">Autoridad</h3>
                            <p className="text-parchment text-sm leading-relaxed mb-4">
                                Defensa contra backlinks tóxicos y análisis de la distribución de PageRank interno.
                            </p>
                            <ul className="text-xs text-stone-400 space-y-2 font-mono">
                                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Toxic Links Audit</li>
                                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Internal Linking</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Dashboard Technical */}
                <section className="w-full bg-stone-dark border-y border-stone-lighter py-16">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-2">Estado del Reino</h2>
                                <p className="text-parchment">Datos sin censura. Métricas reales.</p>
                            </div>
                            <div className="bg-stone-light border border-gold px-4 py-2 rounded text-gold text-xs font-mono animate-pulse">
                                SYSTEM_STATUS: ONLINE
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[#1c1a15] border border-stone-lighter p-8 flex flex-col items-center justify-center relative">
                                <div className="size-40 rounded-full border-8 border-stone-light border-t-gold flex items-center justify-center mb-6">
                                    <div className="text-center">
                                        <div className="text-4xl font-black text-white">98<span className="text-sm">%</span></div>
                                        <div className="text-xs text-parchment uppercase">Salud</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-8 w-full text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-white">0</div>
                                        <div className="text-[10px] text-stone-500 uppercase">Errores 404</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">0.5s</div>
                                        <div className="text-[10px] text-stone-500 uppercase">LCP</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">100</div>
                                        <div className="text-[10px] text-stone-500 uppercase">Mobile</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="bg-stone-light p-4 border border-stone-lighter flex justify-between items-center group hover:border-gold transition-colors">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-red-500">error</span>
                                        <span className="text-white font-bold uppercase text-sm">Broken Links</span>
                                    </div>
                                    <div className="font-mono text-gold text-xs">DETECTED & FIXED</div>
                                </div>
                                <div className="bg-stone-light p-4 border border-stone-lighter flex justify-between items-center group hover:border-gold transition-colors">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-yellow-500">warning</span>
                                        <span className="text-white font-bold uppercase text-sm">Redirect Chains</span>
                                    </div>
                                    <div className="font-mono text-gold text-xs">RESOLVED</div>
                                </div>
                                <div className="bg-stone-light p-4 border border-stone-lighter flex justify-between items-center group hover:border-gold transition-colors">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                                        <span className="text-white font-bold uppercase text-sm">Schema Markup</span>
                                    </div>
                                    <div className="font-mono text-gold text-xs">VALIDATED</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 px-4 text-center">
                    <h2 className="text-4xl font-bold text-white uppercase mb-8">¿Tu fortaleza digital resiste?</h2>
                    <Link href="/contacto">
                        <button className="bg-gold text-stone-dark font-bold text-lg px-12 py-4 rounded hover:bg-white transition-colors border-2 border-transparent hover:border-gold uppercase tracking-wider">
                            Solicitar Auditoría
                        </button>
                    </Link>
                </section>

            </main>
            <Footer />
        </>
    );
}
