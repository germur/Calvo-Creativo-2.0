import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function AutomatizacionService() {
    return (
        <>
            <SeoHead title="Automatización SEO: La Orquesta | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-[#111] font-sans text-gray-200 pt-20">

                {/* Header Hero */}
                <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                    {/* Radial Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111]/80 to-[#111]"></div>

                    {/* Main Graphic Content */}
                    <div className="relative z-10 max-w-5xl w-full">
                        <div className="bg-[#fff700] text-black text-xs font-black uppercase px-2 py-1 inline-block mb-10 transform -rotate-2 border-2 border-white">
                            ⚡ VIBECODING SE V2 ACTIVADO
                        </div>

                        <div className="relative mb-12">
                            {/* Industrial Title */}
                            <h1 className="text-6xl md:text-9xl font-black uppercase text-white italic leading-[0.85] tracking-tighter mix-blend-screen">
                                Automatización<br />
                                <span className="text-[#ff3d00]">De La Orquesta</span>
                            </h1>

                            {/* Robot Icon Overlay */}
                            <div className="absolute -right-4 top-1/2 -translate-y-1/2 size-48 md:size-64 bg-[#fff700] rounded-full border-8 border-[#333] flex items-center justify-center shadow-[0_0_50px_rgba(255,247,0,0.3)] hidden md:flex animate-pulse">
                                <span className="material-symbols-outlined text-black text-[8rem]">smart_toy</span>
                            </div>

                            {/* Code Snippet Decoration */}
                            <div className="absolute -top-10 -left-10 bg-[#333] p-2 border border-gray-600 rounded text-xs font-mono text-green-400 opacity-50 transform -rotate-12 hidden md:block">
                                &gt;&gt; WQQgg_bot-On
                            </div>
                        </div>

                        {/* Speech Bubble */}
                        <div className="bg-white text-black p-6 md:p-8 max-w-xl text-left relative shadow-[10px_10px_0px_0px_#fff700] border-2 border-black mb-12">
                            <p className="font-bold text-lg md:text-xl font-mono leading-snug">
                                "¡No temas al caos de los datos! Con mis scripts de Python, dirijo el tráfico web como un director de orquesta con superpoderes. ¡Eficiencia explosiva!"
                            </p>
                            {/* Triangle Pointer */}
                            <div className="absolute -bottom-4 left-10 w-8 h-8 bg-white border-r-2 border-b-2 border-black transform rotate-45"></div>

                            {/* Rocket Icon */}
                            <div className="absolute -bottom-6 -right-6 size-16 bg-white border-2 border-black shadow-[4px_4px_0px_0px_#ff3d00] flex items-center justify-center transform rotate-12">
                                <span className="material-symbols-outlined text-[#ff3d00] text-4xl">rocket_launch</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#0052cc] text-white px-8 py-3 font-black uppercase border-2 border-[#0052cc] hover:bg-white hover:text-[#0052cc] transition-colors shadow-[0_0_20px_#0052cc]">
                                Explorar Código
                            </button>
                            <button className="bg-white text-black px-8 py-3 font-black uppercase border-2 border-white hover:bg-gray-200 transition-colors">
                                Ver Documentación
                            </button>
                        </div>
                    </div>

                    {/* Running Text Banner */}
                    <div className="absolute bottom-10 w-full overflow-hidden border-y border-[#fff700] bg-[#fff700]/10 py-1">
                        <div className="whitespace-nowrap font-mono text-[#fff700] text-xs font-bold animate-marquee">
                            PYTHON // AUTOMATION // SEO // SPEED // POWER // PYTHON // AUTOMATION // SEO // SPEED // POWER // PYTHON // AUTOMATION // SEO // SPEED // POWER //
                        </div>
                    </div>
                </section>

                {/* Tools Arsenal */}
                <section className="bg-[#ffd700] py-24 px-4 border-y-8 border-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16 relative">
                            <span className="bg-[#ff3d00] text-white font-black text-sm uppercase px-2 py-1 inline-block -rotate-2 border-2 border-black absolute -top-4 left-1/2 -translate-x-1/2 z-10">EL ARSENAL</span>
                            <h2 className="text-5xl md:text-7xl font-black uppercase text-white drop-shadow-[4px_4px_0px_black] italic">Herramientas De Poder</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white border-4 border-black p-0 shadow-[10px_10px_0px_0px_black] hover:-translate-y-2 transition-transform">
                                <div className="bg-[#0052cc] h-32 flex items-center justify-center border-b-4 border-black relative overflow-hidden">
                                    <span className="material-symbols-outlined text-white text-6xl">web</span>
                                    <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full border border-black"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-black uppercase italic mb-2">La Red de la Araña</h3>
                                    <p className="text-sm border-l-2 border-[#0052cc] pl-2 mb-4">
                                        ¡Rastrea masivo! Crawlers que devoran la web y extraen datos con la precisión de un láser.
                                    </p>
                                    <div className="bg-gray-100 p-2 font-mono text-[10px] text-gray-600 border border-gray-300">
                                        &gt; run_crawler.py --super-speed
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white border-4 border-black p-0 shadow-[10px_10px_0px_0px_black] hover:-translate-y-2 transition-transform transform md:-translate-y-4">
                                <div className="bg-[#ff3d00] h-32 flex items-center justify-center border-b-4 border-black">
                                    <span className="material-symbols-outlined text-white text-6xl">cut</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-black uppercase italic mb-2">El Alquimista</h3>
                                    <p className="text-sm border-l-2 border-[#ff3d00] pl-2 mb-4">
                                        Transforma logs aburridos en oro puro. Análisis de datos que golpea con fuerza.
                                    </p>
                                    <div className="bg-gray-100 p-2 font-mono text-[10px] text-gray-600 border border-gray-300">
                                        &gt; analyze_logs.py --transmute
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white border-4 border-black p-0 shadow-[10px_10px_0px_0px_black] hover:-translate-y-2 transition-transform">
                                <div className="bg-[#111] h-32 flex items-center justify-center border-b-4 border-black">
                                    <span className="material-symbols-outlined text-[#fff700] text-6xl">smart_toy</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-black uppercase italic mb-2">El Golem</h3>
                                    <p className="text-sm border-l-2 border-black pl-2 mb-4">
                                        Reportes que se construyen solos mientras duermes. Automatización imparable.
                                    </p>
                                    <div className="bg-gray-100 p-2 font-mono text-[10px] text-gray-600 border border-gray-300">
                                        &gt; build_report.py --daemon
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Code & Logic Section */}
                <section className="bg-gray-100 py-24 px-4 overflow-hidden">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                        {/* Left: Chart Graphic */}
                        <div className="relative">
                            <div className="bg-[#0052cc] text-white text-xs font-bold uppercase px-2 py-1 inline-block mb-2">RESULTADOS VISUALES</div>
                            <h2 className="text-4xl font-black uppercase italic mb-8 text-black">
                                Eficiencia <span className="text-[#0052cc]">Máxima</span>
                            </h2>

                            <div className="relative border-4 border-black bg-white p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)]">
                                <div className="absolute -top-6 -left-6 size-20 bg-[#fff700] rounded-full border-4 border-black flex items-center justify-center font-black text-xl z-10 transform -rotate-12">
                                    +245%
                                </div>
                                <div className="flex justify-between items-center mb-4 ml-16">
                                    <span className="font-bold uppercase text-xs">Crecimiento Orgánico</span>
                                    <span className="text-[9px] bg-black text-white px-1">Comparado con periodo normal</span>
                                </div>

                                {/* SVG Chart */}
                                <div className="h-64 border border-gray-200 relative">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path d="M0 90 C 20 80, 40 70, 50 50 S 80 20, 100 10" stroke="black" strokeWidth="2" fill="none" />
                                        <path d="M0 90 C 20 80, 40 70, 50 50 S 80 20, 100 10" stroke="#ff3d00" strokeWidth="4" fill="none" transform="translate(0, -2)" />
                                        {/* Points */}
                                        <circle cx="20" cy="80" r="2" fill="#0052cc" stroke="black" />
                                        <circle cx="50" cy="50" r="2" fill="#0052cc" stroke="black" />
                                        <circle cx="80" cy="20" r="2" fill="#0052cc" stroke="black" />
                                        <circle cx="100" cy="10" r="2" fill="#fff700" stroke="black" strokeWidth="0.5" />
                                    </svg>

                                    <div className="absolute top-4 right-4 bg-[#ff3d00] text-white text-[8px] px-1 font-bold">GROWTH_RATE.svg</div>
                                </div>

                                <div className="flex justify-between mt-2 text-[8px] font-mono text-gray-500 uppercase">
                                    <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Code Block */}
                        <div className="bg-[#1e1e1e] p-6 rounded shadow-2xl border-l-4 border-l-[#fff700] text-sm relative">
                            <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                                <span className="text-gray-400 font-mono text-xs">EL CÓDIGO MAESTRO</span>
                                <span className="flex gap-1">
                                    <div className="size-2 bg-red-500 rounded-full"></div>
                                    <div className="size-2 bg-yellow-500 rounded-full"></div>
                                    <div className="size-2 bg-green-500 rounded-full"></div>
                                </span>
                            </div>

                            <pre className="font-mono text-xs leading-relaxed text-gray-300 overflow-x-auto">
                                {`import salsa_dura as sd
from barretto_labs import superbot

def iniciar_fiesta(url_objetivo):
    # Preparando los instrumentos
    bot = superbot.init(power=100)
    signals = sd.scan_rhythm(url_objetivo)
    
    for beat in signals:
        if beat.impact < MAX_VOLUME:
            superbot.boost_bass(beat)
            print(f"[BOOM] Optimizando nodo: {beat.id}")
            
    return sd.descarga_total(signals)

# Ejecutar secuencia
iniciar_fiesta('https://tu-web.com')

> Procesando... █`}
                            </pre>
                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
