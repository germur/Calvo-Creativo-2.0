import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function LadoA() {
    return (
        <>
            <SeoHead title="Lado A: Técnico | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-[#111111] font-sans selection:bg-[#ffc107] selection:text-black">

                {/* Banner Hero */}
                <div className="relative border-b-4 border-white/10">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] opacity-50"></div>

                    <div className="max-w-7xl mx-auto px-4 py-20 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="h-0.5 w-12 bg-[#ffc107]"></div>
                                <span className="text-[#ffc107] text-xs font-bold uppercase tracking-[0.2em]">Zona de Guerra SEO</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black uppercase text-[#ffc107] leading-[0.85] tracking-tighter mb-8 shadow-black drop-shadow-lg">
                                Lado A:<br />
                                Arquitectura Y<br />
                                Código
                            </h1>
                            <div className="border-l-4 border-[#ffc107] pl-6 py-2 mb-8">
                                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                                    "Domando dragones algorítmicos con acero y Python."
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-[#ffc107] text-black border-2 border-[#ffc107] px-8 py-3 font-bold uppercase hover:bg-transparent hover:text-[#ffc107] transition-all">Ver Estrategias</button>
                                <button className="border-2 border-white/20 text-white px-8 py-3 font-bold uppercase hover:border-white transition-all">Explorar Código</button>
                            </div>
                        </div>

                        <div className="relative h-[400px] bg-[#1a1a1a] rounded-full border border-white/10 flex items-center justify-center p-12">
                            <div className="absolute inset-0 rounded-full border border-[#ffc107]/20 animate-pulse"></div>
                            {/* Circular Code Visual */}
                            <div className="font-mono text-[10px] text-[#ccff00] leading-tight opacity-70 rotate-6 p-8 bg-black/50 rounded-lg">
                                {`def slay_dragon(algo):
  return optimize(algo)
while True:
  audit_core_web_vitals()`}
                            </div>
                            <div className="absolute top-10 right-10 size-24 bg-[#d32f2f] rounded-full flex items-center justify-center shadow-[0_0_30px_#d32f2f]">
                                <span className="material-symbols-outlined text-black text-5xl">smart_toy</span>
                            </div>

                            <div className="absolute bottom-10 left-10 size-32 bg-[#ffc107]/10 rounded-full border border-[#ffc107] flex items-center justify-center shadow-[0_0_20px_#ffc107]">
                                <span className="material-symbols-outlined text-[#ffc107] text-6xl">security</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Arsenal de Servicios */}
                <section className="py-24 px-4">
                    <div className="text-center mb-16">
                        <span className="material-symbols-outlined text-white/20 text-4xl mb-4">dashboard_customize</span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-2">El Arsenal de Servicios</h2>
                        <p className="text-gray-500 font-mono text-sm">Herramientas forjadas en las profundidades del código.</p>
                    </div>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* 1. Auditorías */}
                        <div className="bg-[#1f1f1f] p-8 border border-white/5 hover:border-[#ffc107] group transition-all">
                            <div className="size-12 bg-[#2a2a2a] rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-[#ffc107] group-hover:text-black transition-colors">
                                <span className="material-symbols-outlined">construction</span>
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase mb-4">Auditorías Vikingas</h3>
                            <p className="text-gray-500 text-xs leading-relaxed mb-8">
                                Destrucción de código obsoleto y limpieza técnica profunda. Eliminamos la deuda técnica como si fuera un enemigo en el campo de batalla.
                            </p>
                            <ul className="text-[10px] text-gray-400 space-y-2 mb-8 uppercase font-bold tracking-wider">
                                <li className="flex items-center gap-2"><span className="text-[#ffc107]">✓</span> Core Web Vitals</li>
                                <li className="flex items-center gap-2"><span className="text-[#ffc107]">✓</span> JS Rendering</li>
                                <li className="flex items-center gap-2"><span className="text-[#ffc107]">✓</span> Log Analysis</li>
                            </ul>
                            <Link href="/servicios/auditoria" className="block w-full text-center bg-black border border-white/20 text-white text-xs font-bold uppercase py-3 hover:bg-[#ffc107] hover:text-black hover:border-[#ffc107] transition-all">
                                Ver Auditoría
                            </Link>
                        </div>

                        {/* 2. Migraciones */}
                        <div className="bg-[#1f1f1f] p-8 border border-white/5 hover:border-[#0070f3] group transition-all">
                            <div className="size-12 bg-[#2a2a2a] rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-[#0070f3] transition-colors">
                                <span className="material-symbols-outlined">explore</span>
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase mb-4">Migraciones Épicas</h3>
                            <p className="text-gray-500 text-xs leading-relaxed mb-8">
                                Travesías seguras entre servidores sin perder tráfico. Guiamos tu data a través de mares tormentosos hacia tierras fértiles.
                            </p>
                            <ul className="text-[10px] text-gray-400 space-y-2 mb-8 uppercase font-bold tracking-wider">
                                <li className="flex items-center gap-2"><span className="text-[#0070f3]">✓</span> Mapping 301</li>
                                <li className="flex items-center gap-2"><span className="text-[#0070f3]">✓</span> Staging Validation</li>
                                <li className="flex items-center gap-2"><span className="text-[#0070f3]">✓</span> Post-Launch Monitor</li>
                            </ul>
                            <Link href="/servicios/migraciones" className="block w-full text-center bg-black border border-white/20 text-white text-xs font-bold uppercase py-3 hover:bg-[#0070f3] hover:border-[#0070f3] transition-all">
                                Iniciar Viaje
                            </Link>
                        </div>

                        {/* 3. Automatización */}
                        <div className="bg-[#1f1f1f] p-8 border border-white/5 hover:border-[#fff700] group transition-all">
                            <div className="size-12 bg-[#2a2a2a] rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-[#fff700] group-hover:text-black transition-colors">
                                <span className="material-symbols-outlined">auto_fix</span>
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase mb-4">Hechicería Python</h3>
                            <p className="text-gray-500 text-xs leading-relaxed mb-8">
                                Automatización de procesos repetitivos. Conjuramos scripts que hacen el trabajo de diez hombres en segundos.
                            </p>
                            <ul className="text-[10px] text-gray-400 space-y-2 mb-8 uppercase font-bold tracking-wider">
                                <li className="flex items-center gap-2"><span className="text-[#fff700]">✓</span> Data Scraping</li>
                                <li className="flex items-center gap-2"><span className="text-[#fff700]">✓</span> API Integrations</li>
                                <li className="flex items-center gap-2"><span className="text-[#fff700]">✓</span> NLP Content Analysis</li>
                            </ul>
                            <Link href="/servicios/automatizacion" className="block w-full text-center bg-black border border-white/20 text-white text-xs font-bold uppercase py-3 hover:bg-[#fff700] hover:text-black hover:border-[#fff700] transition-all">
                                Ver Grimorio
                            </Link>
                        </div>

                        {/* 4. Geo-IA */}
                        <div className="bg-[#1f1f1f] p-8 border border-white/5 hover:border-[#00e5ff] group transition-all">
                            <div className="size-12 bg-[#2a2a2a] rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-[#00e5ff] group-hover:text-black transition-colors">
                                <span className="material-symbols-outlined">hub</span>
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase mb-4">Afinando para la IA</h3>
                            <p className="text-gray-500 text-xs leading-relaxed mb-8">
                                (ChatGPT/Gemini) Optimizamos tu fortaleza digital para ser leída por los nuevos dioses. Adaptación de contenido para Generative Engine Optimization.
                            </p>
                            <ul className="text-[10px] text-gray-400 space-y-2 mb-8 uppercase font-bold tracking-wider">
                                <li className="flex items-center gap-2"><span className="text-[#00e5ff]">✓</span> Entity Science</li>
                                <li className="flex items-center gap-2"><span className="text-[#00e5ff]">✓</span> Knowledge Graph</li>
                                <li className="flex items-center gap-2"><span className="text-[#00e5ff]">✓</span> LLM Context Priming</li>
                            </ul>
                            <Link href="/servicios/geo-ia" className="block w-full text-center bg-black border border-white/20 text-white text-xs font-bold uppercase py-3 hover:bg-[#00e5ff] hover:text-black hover:border-[#00e5ff] transition-all">
                                Ver Estrategia GEO
                            </Link>
                        </div>

                    </div>
                </section>

                {/* El Oráculo de Datos */}
                <section className="py-24 px-4 bg-[#0a0a0a] border-t border-white/10">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                            <h2 className="text-4xl font-black uppercase text-white mb-6">El Oráculo de Datos</h2>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                Nuestras métricas se levantan como templos antiguos. Resultados sólidos, construidos para perdurar a través de los cambios de algoritmo.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-[#1a1a1a] p-4 border border-white/10 flex justify-between items-center">
                                    <span className="text-xs font-bold text-white uppercase">Crecimiento Orgánico</span>
                                    <span className="text-[#ffc107] font-black">+145%</span>
                                </div>
                                <div className="bg-[#1a1a1a] p-4 border border-white/10 flex justify-between items-center">
                                    <span className="text-xs font-bold text-white uppercase">Velocidad de Carga</span>
                                    <span className="text-[#ffc107] font-black">0.8s</span>
                                </div>
                                <div className="bg-[#1a1a1a] p-4 border border-white/10 flex justify-between items-center">
                                    <span className="text-xs font-bold text-white uppercase">Errores 404</span>
                                    <span className="text-green-500 font-black uppercase text-[10px] tracking-wider">Exterminados</span>
                                </div>
                            </div>
                        </div>

                        {/* Chart Graph */}
                        <div className="lg:col-span-2 bg-[#111] border border-white/10 p-4 relative min-h-[300px] flex items-end px-8 pb-8 gap-4">
                            <div className="absolute inset-0 z-0 bg-repeat opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            {/* Bars */}
                            <div className="flex-1 bg-[#ffc107]/20 h-[10%] relative group"><div className="absolute bottom-0 w-full bg-[#ffc107] h-1 group-hover:h-full transition-all duration-500"></div></div>
                            <div className="flex-1 bg-[#ffc107]/20 h-[30%] relative group"><div className="absolute bottom-0 w-full bg-[#ffc107] h-1 group-hover:h-full transition-all duration-500 delay-75"></div></div>
                            <div className="flex-1 bg-[#ffc107]/20 h-[45%] relative group"><div className="absolute bottom-0 w-full bg-[#ffc107] h-1 group-hover:h-full transition-all duration-500 delay-150"></div></div>
                            <div className="flex-1 bg-[#ffc107]/20 h-[70%] relative group"><div className="absolute bottom-0 w-full bg-[#ffc107] h-1 group-hover:h-full transition-all duration-500 delay-200"></div></div>
                            <div className="flex-1 bg-[#ffc107]/20 h-[95%] relative group"><div className="absolute bottom-0 w-full bg-[#ffc107] h-1 group-hover:h-full transition-all duration-500 delay-300"></div></div>

                            {/* Labels */}
                            <div className="absolute bottom-2 left-8 right-8 flex justify-between text-[8px] text-gray-500 font-mono uppercase">
                                <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><span>YTD</span>
                            </div>
                            {/* Y Axis */}
                            <div className="absolute top-8 bottom-8 left-2 flex flex-col justify-between text-[8px] text-gray-500 font-mono">
                                <span>10k</span><span>5k</span><span>1k</span><span>0</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
