import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function MigracionesService() {
    return (
        <>
            <SeoHead title="Migraciones SEO: Éxodo Digital | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-background-dark font-display text-white antialiased overflow-x-hidden selection:bg-gold selection:text-stone-dark flex flex-col items-center">

                {/* Hero Section */}
                <section className="relative w-full max-w-7xl px-4 py-12 md:py-24 md:px-8">
                    <div className="relative overflow-hidden rounded-xl border border-stone-lighter bg-stone-light shadow-2xl">
                        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-matter.png')" }}></div>

                        <div className="relative z-10 grid gap-12 lg:grid-cols-2 p-8 md:p-12 items-center">
                            <div className="flex flex-col gap-6">
                                <div className="inline-flex items-center gap-2 text-gold text-xs font-bold tracking-[0.2em] uppercase">
                                    <span className="h-px w-8 bg-gold"></span>
                                    <span>Travesía Segura</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter text-white uppercase">
                                    Éxodo<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#b88c12]">Digital</span>
                                </h1>
                                <p className="text-lg md:text-xl text-parchment max-w-md font-light border-l-2 border-gold pl-4">
                                    Mudamos tu imperio digital sin perder ni una moneda de oro de tu autoridad. Mapeo 301, validación de staging y monitoreo post-lanzamiento.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button className="flex h-12 items-center justify-center rounded bg-gold px-6 text-stone-dark font-bold hover:bg-white transition-colors uppercase tracking-wider">
                                        Iniciar Migración
                                    </button>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-center min-h-[300px]">
                                <div className="relative w-full aspect-square max-w-sm rounded bg-stone-dark border border-stone-lighter p-8 shadow-2xl overflow-hidden flex flex-col items-center justify-center text-center">
                                    <span className="material-symbols-outlined text-8xl text-stone-lighter mb-4">map</span>
                                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover opacity-10 invert"></div>
                                    <div className="z-10 bg-gold/10 border border-gold px-4 py-2 rounded text-gold font-mono text-xs">
                                        301 Redirect: /old -&gt; /new<br />
                                        Authority: <span className="text-white">PRESERVED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="w-full max-w-5xl px-4 py-20">
                    <h2 className="text-3xl font-bold text-center text-white uppercase mb-12 flex items-center justify-center gap-4">
                        <span className="h-px w-12 bg-stone-lighter"></span>
                        La Ruta del Éxodo
                        <span className="h-px w-12 bg-stone-lighter"></span>
                    </h2>

                    <div className="relative border-l-2 border-stone-lighter ml-4 md:ml-12 space-y-12">
                        {/* Step 1 */}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[11px] top-0 size-5 rounded-full bg-gold border-4 border-background-dark box-content"></div>
                            <h3 className="text-xl font-bold text-white uppercase mb-2">Auditoría Pre-Migración</h3>
                            <p className="text-parchment text-sm">
                                Inventario total de URLs. Identificamos las páginas con backlinks y tráfico vital. Nada se queda atrás.
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[11px] top-0 size-5 rounded-full bg-stone-500 border-4 border-background-dark box-content"></div>
                            <h3 className="text-xl font-bold text-white uppercase mb-2">Mapeo de Redirecciones</h3>
                            <p className="text-parchment text-sm">
                                Diseño del mapa 301. Cada URL antigua debe encontrar su nuevo hogar. Cero errores 404 permitidos.
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[11px] top-0 size-5 rounded-full bg-stone-500 border-4 border-background-dark box-content"></div>
                            <h3 className="text-xl font-bold text-white uppercase mb-2">Validación en Staging</h3>
                            <p className="text-parchment text-sm">
                                Simulacro de batalla. Probamos las redirecciones y la indexabilidad en un entorno seguro antes de salir en vivo.
                            </p>
                        </div>
                        {/* Step 4 */}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[11px] top-0 size-5 rounded-full bg-gold border-4 border-background-dark box-content animate-pulse"></div>
                            <h3 className="text-xl font-bold text-white uppercase mb-2">Lanzamiento & Monitoreo</h3>
                            <p className="text-parchment text-sm">
                                Go Live. Vigilancia extrema en Search Console durante las primeras 72 horas para asegurar la indexación.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats / Constellations */}
                <section className="w-full bg-stone-dark border-y border-stone-lighter py-16">
                    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white uppercase mb-4">Continuidad del Negocio</h3>
                            <p className="text-parchment mb-6 leading-relaxed">
                                Una migración mal ejecutada puede destruir años de trabajo SEO en días. Nuestro proceso garantiza <span className="text-gold font-bold">Cero Pérdida de Tráfico</span>.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-background-dark p-4 border-l-2 border-gold">
                                    <div className="text-3xl font-black text-white">99%</div>
                                    <div className="text-xs text-stone-400 uppercase">Traffic Retention</div>
                                </div>
                                <div className="bg-background-dark p-4 border-l-2 border-gold">
                                    <div className="text-3xl font-black text-white">100%</div>
                                    <div className="text-xs text-stone-400 uppercase">Uptime</div>
                                </div>
                            </div>
                        </div>
                        <div className="h-64 bg-background-dark border border-stone-lighter relative overflow-hidden flex items-end px-4 gap-2">
                            {/* Fake Chart */}
                            <div className="w-full bg-stone-lighter h-[30%] opacity-50"></div>
                            <div className="w-full bg-stone-lighter h-[40%] opacity-50"></div>
                            <div className="w-full bg-stone-lighter h-[55%] opacity-50"></div>
                            <div className="w-full bg-gold h-[60%] shadow-[0_0_20px_rgba(244,192,37,0.3)] relative group">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-light text-gold text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">MIGRATION</div>
                            </div>
                            <div className="w-full bg-gold h-[70%] shadow-[0_0_20px_rgba(244,192,37,0.3)]"></div>
                            <div className="w-full bg-gold h-[85%] shadow-[0_0_20px_rgba(244,192,37,0.3)]"></div>
                            <div className="w-full bg-gold h-[90%] shadow-[0_0_20px_rgba(244,192,37,0.3)]"></div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 px-4 text-center">
                    <h2 className="text-4xl font-bold text-white uppercase mb-8">¿Listo para mover tu imperio?</h2>
                    <button className="bg-gold text-stone-dark font-bold text-lg px-12 py-4 rounded hover:bg-white transition-colors border-2 border-transparent hover:border-gold uppercase tracking-wider">
                        Planificar Migración
                    </button>
                </section>
            </main>
            <Footer />
        </>
    );
}
