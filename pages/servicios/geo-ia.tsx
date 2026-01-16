import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function GeoIaService() {
    return (
        <>
            <SeoHead
                title="Geo-IA: Geomancia Digital | Calvo Creativo"
                type="service"
                description="Optimización para Motores Generativos (GEO). Adapta tu presencia local para ChatGPT, Gemini y Google Maps."
                provider="Calvo Creativo"
                areaServed="Global, LATAM, USA"
                offerCatalog="Geomancia Digital Services"
            />
            <Navigation />

            <main className="min-h-screen bg-background-dark font-display text-white antialiased overflow-x-hidden selection:bg-gold selection:text-stone-dark flex flex-col items-center">

                {/* Hero Section */}
                <section className="relative w-full max-w-7xl px-4 py-12 md:py-24 md:px-8">
                    <div className="relative overflow-hidden rounded-xl border border-stone-lighter bg-stone-light shadow-2xl">
                        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/circuit-board.png')" }}></div>

                        <div className="relative z-10 grid gap-12 lg:grid-cols-2 p-8 md:p-12 items-center">
                            <div className="flex flex-col gap-6">
                                <div className="inline-flex items-center gap-2 text-gold text-xs font-bold tracking-[0.2em] uppercase">
                                    <span className="h-px w-8 bg-gold"></span>
                                    <span>Geomancia Digital</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter text-white uppercase">
                                    Geo<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#b88c12]">Optimización</span>
                                </h1>
                                <p className="text-lg md:text-xl text-parchment max-w-md font-light border-l-2 border-gold pl-4">
                                    Prepara tu territorio para los nuevos dioses de la IA. Adaptamos tu presencia local para ChatGPT, Gemini y Google Maps.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button className="flex h-12 items-center justify-center rounded bg-gold px-6 text-stone-dark font-bold hover:bg-white transition-colors uppercase tracking-wider">
                                        Explorar Territorio
                                    </button>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-center min-h-[300px]">
                                <div className="relative w-full aspect-square max-w-sm rounded-full bg-stone-dark border-4 border-stone-lighter p-8 shadow-[0_0_50px_rgba(244,192,37,0.1)] overflow-hidden flex flex-col items-center justify-center text-center group">
                                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover opacity-20 invert animate-spin-slow"></div>
                                    <span className="material-symbols-outlined text-8xl text-gold relative z-10">explore</span>
                                    <div className="absolute bottom-10 bg-black/80 px-4 py-1 rounded text-xs text-white border border-gold/50">
                                        Lat: 40.7128° N
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Trinity */}
                <section className="w-full max-w-7xl px-4 py-20 md:px-8">
                    <h2 className="text-3xl font-bold text-center text-white uppercase mb-16 flex items-center justify-center gap-4">
                        <span className="h-px w-12 bg-stone-lighter"></span>
                        La Triada GEO
                        <span className="h-px w-12 bg-stone-lighter"></span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-stone-light p-8 border border-stone-lighter flex flex-col items-center text-center hover:border-gold transition-colors group">
                            <div className="size-16 rounded-full bg-stone-dark border border-stone-lighter flex items-center justify-center mb-6 group-hover:border-gold">
                                <span className="material-symbols-outlined text-3xl text-white">share_location</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase">Local Sigils</h3>
                            <p className="text-parchment text-sm">
                                Inscripción de coordenadas exactas y dominancia en Google Business Profile. Tu marca en el mapa, inamovible.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-stone-light p-8 border border-stone-lighter flex flex-col items-center text-center hover:border-gold transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="size-16 rounded-full bg-stone-dark border border-stone-lighter flex items-center justify-center mb-6 group-hover:border-gold">
                                <span className="material-symbols-outlined text-3xl text-gold">psychology</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase">Semantic Iron</h3>
                            <p className="text-parchment text-sm">
                                Estructuras de datos (Schema) que los LLMs como Gemini pueden 'entender'. Hablamos el idioma de las máquinas.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-stone-light p-8 border border-stone-lighter flex flex-col items-center text-center hover:border-gold transition-colors group">
                            <div className="size-16 rounded-full bg-stone-dark border border-stone-lighter flex items-center justify-center mb-6 group-hover:border-gold">
                                <span className="material-symbols-outlined text-3xl text-white">radar</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase">Neural Flow</h3>
                            <p className="text-parchment text-sm">
                                Optimización de contenido no estructurado para respuestas conversacionales. Sé la respuesta, no solo un link.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Radar Interface */}
                <section className="w-full bg-stone-dark border-y border-stone-lighter py-16 px-4">
                    <div className="max-w-4xl mx-auto bg-[#1a1a1a] border border-stone-lighter p-2 rounded">
                        <div className="aspect-video bg-black relative overflow-hidden rounded border border-white/10">
                            {/* Radar Grid */}
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #f4c025 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                            {/* Scanning Line */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent w-[20%] h-full animate-spin-slow origin-bottom-left"></div>

                            {/* UI Overlay */}
                            <div className="absolute top-4 left-4 font-mono text-xs text-green-500">
                                TARGET: LOCAL_PACK<br />
                                CONFIDENCE: 98%
                            </div>

                            <div className="absolute bottom-4 right-4 flex items-center gap-2">
                                <span className="size-2 bg-gold rounded-full animate-pulse"></span>
                                <span className="text-white text-xs font-bold uppercase">Live Signal</span>
                            </div>

                            {/* Center Point */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 bg-gold rounded-full shadow-[0_0_20px_#f4c025]"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 border border-gold/30 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 border border-gold/10 rounded-full"></div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 px-4 text-center">
                    <h2 className="text-4xl font-bold text-white uppercase mb-8">Conquista el Mapa</h2>
                    <button className="bg-gold text-stone-dark font-bold text-lg px-12 py-4 rounded hover:bg-white transition-colors border-2 border-transparent hover:border-gold uppercase tracking-wider">
                        Estrategia GEO
                    </button>
                </section>

            </main>
            <Footer />
        </>
    );
}
