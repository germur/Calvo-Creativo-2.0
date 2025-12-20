import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function MigracionesService() {
    return (
        <>
            <SeoHead title="Migraciones SEO: La Mudanza Sin Perder El Ritmo | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-[#1b1b1b] font-sans text-gray-200 pt-20">

                {/* Header Hero */}
                <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden border-b-4 border-[#ff2e2e]">
                    {/* Sea Background */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2670')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-transparent to-black/80"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="bg-[#fff700] text-black font-black text-[10px] uppercase font-mono px-3 py-1 inline-block mb-6 transform -rotate-1">
                            ⚠️ Bitácora de Navegación v3.0
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black uppercase text-white leading-[0.85] mb-8 drop-shadow-2xl">
                            La Mudanza<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white">Sin Perder</span><br />
                            <span className="text-[#0070f3] drop-shadow-[0_0_20px_rgba(0,112,243,0.5)]">El Ritmo</span>
                        </h1>

                        <div className="bg-black/80 backdrop-blur-md border border-white/10 p-6 md:p-8 max-w-2xl mx-auto mb-10 border-l-4 border-l-[#fff700]">
                            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-300">
                                Navegando los mares turbulentos de las migraciones SEO. Preservando el alma y la autoridad de tu sitio a través de la transición digital.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-[#ff2e2e] hover:bg-[#d32f2f] text-white px-8 py-3 font-black uppercase rounded-sm flex items-center gap-2 transition-all">
                                Iniciar Travesía <span className="material-symbols-outlined">sailing</span>
                            </button>
                            <button className="border-2 border-white/30 hover:border-white text-white px-8 py-3 font-black uppercase rounded-sm flex items-center gap-2 transition-all">
                                Ver Mapa <span className="material-symbols-outlined">map</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="py-24 px-4 bg-[#1f1f1f]">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-[#2a2a2a] border border-gray-700 p-8 shadow-2xl relative">
                            <div className="absolute -top-3 -left-3 bg-[#fff700] text-black font-bold text-xs px-2 py-1 transform -rotate-2">EL CAPITÁN HABLA</div>
                            <div className="text-[#0070f3] font-black uppercase text-xl mb-4">Filosofía:<br /><span className="text-white text-4xl">Transmigración Digital</span></div>
                            <div className="border-l-2 border-[#ff2e2e] pl-4 mb-4 text-gray-400 italic">
                                "Una migración web no es simplemente mover archivos. Es una <span className="text-white bg-[#ff2e2e] px-1 font-bold not-italic">reencarnación del alma</span> de su negocio digital."
                            </div>
                            <p className="text-sm text-gray-500 font-mono leading-relaxed mb-6">
                                Como una banda de Salsa Dura manteniendo la clave intacta, nosotros mantenemos su tráfico, ranking y autoridad. <span className="text-[#fff700]">Sin saltos. Sin silencios.</span>
                            </p>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400">
                                    <span className="material-symbols-outlined text-[#fff700]">shield</span> Ranking Protegido
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400">
                                    <span className="material-symbols-outlined text-[#ff2e2e]">trending_up</span> Growth Seguro
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[400px] border-4 border-[#fff700] p-1 bg-black transform rotate-2">
                            {/* World Map Dark Style */}
                            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center invert opacity-20"></div>
                            <div className="relative z-10 w-full h-full border border-gray-800 flex items-end p-4">
                                <div className="bg-white text-black font-mono text-[10px] px-2 py-1 font-bold">100% TRAFIC POPULAR</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline / Battle Plan */}
                <section className="py-24 px-4 bg-[#1b1b1b] border-t border-gray-800">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="bg-[#ff2e2e] text-white text-xs font-bold uppercase px-2 py-1 inline-block mb-4">Plan de Batalla</div>
                            <h2 className="text-4xl md:text-6xl font-black uppercase text-white">El Diario de a Bordo</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 relative">
                            {/* Card 1 */}
                            <div className="bg-[#252525] border border-gray-700 p-6 relative">
                                <div className="absolute -top-4 -left-4 size-10 bg-[#0070f3] rounded-full flex items-center justify-center font-black text-white border-4 border-[#1b1b1b] z-10">01</div>
                                <div className="flex items-center gap-2 text-[#fff700] mb-2 font-bold uppercase text-xs">
                                    <span className="material-symbols-outlined text-sm">radar</span> Semana 1-2
                                </div>
                                <h3 className="text-2xl font-black uppercase mb-2">Auditoría del Compás</h3>
                                <p className="text-sm text-gray-400 mb-4 border-l-2 border-[#0070f3] pl-2">
                                    Evaluación estructural del sitio actual. Identificación de todos los activos SEO, backlinks y contenido vital que debe ser transportado. <span className="text-white font-bold">¡Nada se queda atrás!</span>
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#252525] border border-[#ff2e2e] p-6 relative md:mt-12">
                                <div className="absolute -top-4 -right-4 size-10 bg-[#ff2e2e] rounded-full flex items-center justify-center font-black text-white border-4 border-[#1b1b1b] z-10">02</div>
                                <div className="flex items-center gap-2 text-[#ff2e2e] mb-2 font-bold uppercase text-xs">
                                    <span className="material-symbols-outlined text-sm">map</span> Semana 3 - Redirección
                                </div>
                                <h3 className="text-2xl font-black uppercase mb-2">Trazo del Mapa</h3>
                                <p className="text-sm text-gray-400 mb-4 border-l-2 border-[#ff2e2e] pl-2">
                                    Mapeo 1:1 de URLs antiguas a nuevas. Configuración de reglas .htaccess para evitar el temido error 404.
                                </p>
                                <div className="bg-black p-2 font-mono text-[10px] text-green-500 truncate">
                                    301 Redirect: /old-page -&gt; /new-page
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#fff700] p-6 relative md:col-span-2 text-black max-w-2xl mx-auto w-full transform -rotate-1">
                                <div className="absolute -top-4 -left-4 size-10 bg-black text-white rounded-full flex items-center justify-center font-black border-4 border-[#1b1b1b] z-10">03</div>
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-xl font-black uppercase mb-2">La Travesía</h3>
                                        <p className="text-xs font-bold uppercase">Despliegue a producción en horas de menor marea.</p>
                                        <div className="w-full bg-black h-2 mt-4"><div className="bg-white h-full w-3/4"></div></div>
                                    </div>
                                    <div className="border-l-2 border-black pl-4">
                                        <h4 className="font-bold uppercase text-sm mb-1">Navegación Celeste</h4>
                                        <p className="text-[10px] leading-tight">Vigilancia constante de Google Search Console. Recuperación de indexación asegurada.</p>
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 font-black text-4xl opacity-10">GO!</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Data Constellations Chart */}
                <section className="py-24 px-4 bg-[#141414]">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <div className="bg-[#0070f3] text-white text-[10px] font-bold px-2 py-0.5 inline-block mb-2">SISTEMA DE MONITOREO</div>
                                <h2 className="text-4xl font-black uppercase text-white leading-none">Constelaciones<br /><span className="text-[#ff2e2e]">De Datos</span></h2>
                            </div>
                            <div className="font-mono text-[10px] text-[#fff700] text-right">
                                STATUS: ONLINE<br />
                                LOC: 40.7128° N, 74.0060° W
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            {/* Big Chart */}
                            <div className="md:col-span-2 bg-[#1f1f1f] border border-gray-800 p-6 relative">
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="font-bold text-white uppercase text-sm">Retención de Tráfico</h4>
                                    <span className="material-symbols-outlined text-[#fff700]">water_drop</span>
                                </div>
                                <div className="flex items-end gap-2 h-40 px-4">
                                    <div className="flex-1 bg-gray-800 h-[30%]"></div>
                                    <div className="flex-1 bg-gray-800 h-[40%]"></div>
                                    <div className="flex-1 bg-[#0070f3] h-[50%] relative">
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#ff2e2e] text-white text-[8px] px-1 font-bold">MIGRATION</div>
                                        <div className="absolute top-0 bottom-0 left-1/2 w-px border-l border-dashed border-[#ff2e2e]"></div>
                                    </div>
                                    <div className="flex-1 bg-[#ff2e2e] h-[45%]"></div>
                                    <div className="flex-1 bg-[#fff700] h-[60%]"></div>
                                    <div className="flex-1 bg-[#0070f3] h-[55%]"></div>
                                    <div className="flex-1 bg-[#ff2e2e] h-[70%]"></div>
                                    <div className="flex-1 bg-[#fff700] h-[75%]"></div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-col gap-4">
                                <div className="bg-[#0070f3] p-6 text-white text-center flex-1 flex flex-col justify-center border-b-4 border-black">
                                    <div className="text-5xl font-black mb-1">99.8%</div>
                                    <div className="text-[10px] font-bold bg-black inline-block px-4 py-1 uppercase">Uptime</div>
                                    <span className="material-symbols-outlined absolute top-2 right-2 opacity-30">dns</span>
                                </div>
                                <div className="bg-white p-6 text-black text-center flex-1 flex flex-col justify-center border-b-4 border-[#ff2e2e]">
                                    <div className="text-4xl font-black mb-1 uppercase">ZERO</div>
                                    <div className="text-[10px] font-bold border border-[#ff2e2e] text-[#ff2e2e] inline-block px-1 uppercase">Ranking Loss</div>
                                    <div className="w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#ff2e2e] border-r-[20px] border-r-transparent absolute bottom-0 left-0"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
