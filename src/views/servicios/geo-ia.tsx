import Link from '@/src/site/Link';
import Navigation from '@/src/site/Navigation';
import Footer from '@/src/site/Footer';
import SeoHead from '@/components/SeoHead';

export default function GeoIaService() {
    return (
        <>
            <SeoHead
                title="GEO Local: SEO para ChatGPT, Gemini y Google Maps | Calvo Creativo"
                type="service"
                description="SEO local y GEO para negocios: revisión de Google Business Profile, páginas de servicio, datos de negocio y visibilidad en buscadores y asistentes de IA."
                provider="Calvo Creativo"
                areaServed="Global, LATAM, USA"
                offerCatalog="Geomancia Digital Services"
            />
            <Navigation />

            <main className="min-h-screen bg-background-dark font-display text-white antialiased overflow-x-hidden selection:bg-gold selection:text-stone-dark flex flex-col items-center">

                {/* Hero Section */}
                <section className="relative w-full max-w-7xl px-4 py-12 md:py-24 md:px-8">
                    <div className="relative overflow-hidden rounded-xl border border-stone-lighter bg-stone-light shadow-2xl">
                        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('/textures/circuit-board.png')" }}></div>

                        <div className="relative z-10 grid gap-12 lg:grid-cols-2 p-8 md:p-12 items-center">
                            <div className="flex flex-col gap-6">
                                <div className="inline-flex items-center gap-2 text-gold text-xs font-bold tracking-[0.2em] uppercase">
                                    <span className="h-px w-8 bg-gold"></span>
                                    <span>Geomancia Digital</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter text-white uppercase">
                                    GEO y SEO local<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#b88c12]">para negocios</span>
                                </h1>
                                <p className="text-lg md:text-xl text-parchment max-w-md font-light border-l-2 border-gold pl-4">
                                    Haz que tus servicios y áreas de atención sean fáciles de encontrar y comprender. Revisamos tu presencia en Google Maps, la web y la información que pueden utilizar los asistentes de IA, sin prometer recomendaciones.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Link href="/contacto" className="flex min-h-12 items-center justify-center rounded bg-gold px-6 py-3 text-stone-dark font-bold hover:bg-white transition-colors uppercase tracking-wider">
                                        Consultar mi presencia local
                                    </Link>
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
                                Revisión del perfil de empresa, categorías, horarios, área de atención y datos de contacto reales. El posicionamiento local también depende de relevancia, distancia y prominencia.
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
                                Datos estructurados coherentes con el contenido visible y la información real del negocio. El marcado ayuda a describir entidades, pero no garantiza menciones.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-stone-light p-8 border border-stone-lighter flex flex-col items-center text-center hover:border-gold transition-colors group">
                            <div className="size-16 rounded-full bg-stone-dark border border-stone-lighter flex items-center justify-center mb-6 group-hover:border-gold">
                                <span className="material-symbols-outlined text-3xl text-white">radar</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase">Neural Flow</h3>
                            <p className="text-parchment text-sm">
                                Páginas de servicio, preguntas frecuentes y evidencia local que respondan dudas de compradores, con información verificable y recorridos claros hacia el contacto.
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
                                MODO: ILUSTRATIVO
                            </div>

                            <div className="absolute bottom-4 right-4 flex items-center gap-2">
                                <span className="size-2 bg-gold rounded-full animate-pulse"></span>
                                <span className="text-white text-xs font-bold uppercase">Visualización conceptual</span>
                            </div>

                            {/* Center Point */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 bg-gold rounded-full shadow-[0_0_20px_#f4c025]"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 border border-gold/30 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 border border-gold/10 rounded-full"></div>
                        </div>
                    </div>
                </section>

                <section className="w-full max-w-5xl px-6 py-16 font-body">
                    <h2 className="text-3xl font-display font-bold mb-6">Qué incluye una consultoría GEO y SEO local</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                          ['Diagnóstico local','Comprobamos la presencia del negocio, servicios y áreas reales de atención.'],
                          ['Arquitectura web','Identificamos páginas comerciales y preguntas locales útiles, sin multiplicar páginas por ciudad de forma artificial.'],
                          ['Información y confianza','Revisamos datos de contacto, evidencia, consistencia y marcado estructurado cuando corresponda.'],
                          ['Medición','Definimos una línea base de Search Console, Google Business Profile y contactos medibles; las menciones de IA se evalúan como señales separadas.']
                        ].map(([title,copy])=><article key={title} className="border border-stone-lighter p-6 rounded"><h3 className="font-bold text-xl mb-3">{title}</h3><p className="text-parchment">{copy}</p></article>)}
                    </div>
                    <p className="mt-8 text-parchment">El SEO local y GEO no son sinónimos: uno trabaja visibilidad en búsquedas con intención local y el otro estudia presencia en respuestas generativas. Explora la <Link href="/lab/glosario/geo" className="text-gold underline">definición de GEO</Link> y la <Link href="/consultoria/arquitectura-seo-geo" className="text-gold underline">arquitectura SEO técnica</Link>.</p>
                </section>
                {/* CTA */}
                <section className="py-24 px-4 text-center">
                    <h2 className="text-4xl font-bold text-white uppercase mb-8">Conquista el Mapa</h2>
                    <Link href="/contacto" className="inline-block bg-gold text-stone-dark font-bold text-lg px-12 py-4 rounded hover:bg-white transition-colors border-2 border-transparent hover:border-gold uppercase tracking-wider">
                        Hablemos de tu estrategia GEO
                    </Link>
                </section>

            </main>
            <Footer />
        </>
    );
}
