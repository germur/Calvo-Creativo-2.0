import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function AuditoriaService() {
    return (
        <>
            <SeoHead title="Auditoría SEO: Protocolo de Batalla | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-[#f5f5f5] font-sans selection:bg-[#ffc107] selection:text-black pt-20">

                {/* Header Hero */}
                <section className="bg-white border-b-8 border-black pb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0d47a1] transform skew-x-12 origin-top-right z-0"></div>
                    <div className="absolute top-0 right-0 w-full h-full text-black opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>

                    <div className="max-w-7xl mx-auto px-4 relative z-10 pt-12">
                        <div className="inline-block bg-white border-2 border-black px-4 py-1 font-bold text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8 transform -rotate-1">
                            🔴 Protocolo Batalla v2.0
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-7xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-8 text-[#ffc107] drop-shadow-[4px_4px_0px_#000]">
                                    Limpiando<br />
                                    <span className="text-[#ff1744] drop-shadow-[4px_4px_0px_#000]">El Ruido</span>
                                </h1>
                                <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-lg">
                                    <p className="text-lg font-bold leading-tight">
                                        Estrategia de combate para la arquitectura digital. Identificamos grietas y eliminamos la deuda técnica con fuerza bruta.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <button className="bg-[#ff1744] text-white border-4 border-black px-8 py-3 font-black uppercase hover:bg-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                                        Iniciar Purga <span className="material-symbols-outlined">delete_forever</span>
                                    </button>
                                    <button className="bg-[#ffc107] text-black border-4 border-black px-8 py-3 font-black uppercase hover:bg-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        Ver Manifiesto
                                    </button>
                                </div>
                            </div>

                            {/* Alerta Card Image replacement or CSS visual */}
                            <div className="hidden md:flex justify-end relative">
                                <div className="bg-white transform rotate-3 p-4 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-80 absolute top-20 right-20 z-10">
                                    <h3 className="font-black text-3xl uppercase mb-2">¡Alerta!</h3>
                                    <p className="font-mono text-xs leading-none">El ruido en el código destruye tu ranking. ¡Actúa ahora!</p>
                                    <div className="h-4 bg-[#ff1744] mt-4 w-full"></div>
                                </div>
                                <div className="w-full h-96 bg-gray-900 grayscale opacity-50 mix-blend-multiply border-4 border-black">
                                    {/* Placeholder for ruins image */}
                                    <img src="https://images.unsplash.com/photo-1599593259972-0e0e1a179374?auto=format&fit=crop&q=80&w=800" alt="Ruins" className="w-full h-full object-cover opacity-50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pillars Section */}
                <section className="bg-[#1a1a1a] py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-4 mb-16">
                            <span className="text-[#ffc107] text-6xl font-black italic">///</span>
                            <h2 className="text-white text-5xl md:text-6xl font-black uppercase">Los Tres Pilares</h2>
                            <span className="bg-white border-2 border-black text-black px-2 py-0.5 text-[10px] uppercase font-bold transform -skew-x-12">Análisis Estructural</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Pilar 1 */}
                            <div className="bg-white border-4 border-[#ffc107] p-0 relative group hover:-translate-y-2 transition-transform">
                                <div className="p-8 border-b-4 border-gray-100">
                                    <div className="size-16 bg-[#0d47a1] text-white flex items-center justify-center text-3xl font-bold mb-6 border-2 border-black">A</div>
                                    <h3 className="text-3xl font-black uppercase mb-2">Cimientos</h3>
                                    <span className="bg-black text-white px-1 text-[10px] uppercase font-bold">Técnica</span>
                                    <p className="mt-4 text-sm font-light">
                                        ¿Si la base tiembla, el castillo cae? Rastreo de errores críticos: velocidad y renderizado.
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-50 flex gap-2">
                                    <span className="border border-gray-400 px-1 text-[10px] uppercase">LCP</span>
                                    <span className="border border-gray-400 px-1 text-[10px] uppercase">CLS</span>
                                </div>
                            </div>

                            {/* Pilar 2 */}
                            <div className="bg-white border-4 border-[#ff1744] p-0 relative group hover:-translate-y-2 transition-transform">
                                <div className="p-8 border-b-4 border-gray-100">
                                    <div className="size-16 bg-[#ffc107] text-black flex items-center justify-center text-3xl font-bold mb-6 border-2 border-black">
                                        <span className="material-symbols-outlined">menu_book</span>
                                    </div>
                                    <h3 className="text-3xl font-black uppercase mb-2">Contenido</h3>
                                    <span className="bg-black text-white px-1 text-[10px] uppercase font-bold">Semántica</span>
                                    <p className="mt-4 text-sm font-light">
                                        ¡Cada palabra pesa! Detectamos canibalización y contenido delgado. Eliminamos la paja.
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-50 flex gap-2">
                                    <span className="border border-gray-400 px-1 text-[10px] uppercase">Keywords</span>
                                    <span className="border border-gray-400 px-1 text-[10px] uppercase">Htags</span>
                                </div>
                            </div>

                            {/* Pilar 3 */}
                            <div className="bg-white border-4 border-[#0d47a1] p-0 relative group hover:-translate-y-2 transition-transform">
                                <div className="p-8 border-b-4 border-gray-100">
                                    <div className="size-16 bg-black text-white flex items-center justify-center text-3xl font-bold mb-6 border-2 border-black">
                                        <span className="material-symbols-outlined">shield</span>
                                    </div>
                                    <h3 className="text-3xl font-black uppercase mb-2">Autoridad</h3>
                                    <span className="bg-black text-white px-1 text-[10px] uppercase font-bold">Defensa</span>
                                    <p className="mt-4 text-sm font-light">
                                        Defensa contra las artes oscuras del spam. Análisis de backlinks tóxicos y fuerza bruta.
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-50 flex gap-2">
                                    <span className="border border-gray-400 px-1 text-[10px] uppercase">DR</span>
                                    <span className="border border-gray-400 px-1 text-[10px] uppercase">Spam Score</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chart Section */}
                <section className="py-24 bg-[#f5f5f5] border-t-8 border-black">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="flex justify-between items-end mb-8">
                            <h2 className="text-5xl font-black uppercase leading-none">Estado del Reino<br /><span className="text-lg bg-[#ffc107] px-2 text-black">Amenazas visualizadas. Datos sin censura.</span></h2>
                            <button className="bg-[#ff8a80] border-2 border-[#ff1744] text-[#b71c1c] px-4 py-1 text-xs font-bold uppercase animate-pulse">
                                <span className="material-symbols-outlined align-middle text-sm mr-1">warning</span> Escaneo en curso...
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                            {/* Donut Chart Visual */}
                            <div className="flex flex-col items-center justify-center p-8 bg-gray-50 border-2 border-black relative">
                                <div className="absolute top-0 right-0 bg-black text-white text-[10px] px-2 py-1 font-bold">REPORTE #4020</div>
                                <div className="size-48 rounded-full border-[16px] border-[#0d47a1] border-r-transparent border-b-[#0d47a1]/30 flex items-center justify-center relative">
                                    <div className="text-center">
                                        <div className="text-6xl font-black leading-none">68<span className="text-xl">%</span></div>
                                        <div className="text-[10px] bg-[#ff1744] text-white px-1 font-bold">SALUD</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 w-full mt-8 gap-4 text-center">
                                    <div className="border border-gray-300 p-2">
                                        <div className="font-black text-xl">124</div>
                                        <div className="text-[8px] uppercase text-gray-500">Errores 404</div>
                                    </div>
                                    <div className="border border-gray-300 p-2">
                                        <div className="font-black text-xl">1.2s</div>
                                        <div className="text-[8px] uppercase text-gray-500">Latencia</div>
                                    </div>
                                    <div className="border border-gray-300 p-2">
                                        <div className="font-black text-xl">45</div>
                                        <div className="text-[8px] uppercase text-gray-500">Tóxicos</div>
                                    </div>
                                </div>
                            </div>

                            {/* Bars */}
                            <div className="flex flex-col gap-6 justify-center">
                                {[
                                    { label: 'Imágenes Rotas', val: '80%', color: 'bg-[#ff1744]', code: 'CRITICAL' },
                                    { label: 'Enlaces Huérfanos', val: '40%', color: 'bg-[#ffc107]', code: 'WARN' },
                                    { label: 'Script Bloqueado', val: '25%', color: 'bg-gray-400', code: 'SAFE' },
                                    { label: 'Metadatos Duplicados', val: '65%', color: 'bg-[#0d47a1]', code: 'ACTN' },
                                ].map((item, i) => (
                                    <div key={i} className="border-2 border-black p-2 bg-white shadow-[4px_4px_0px_0px_gray]">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-black uppercase text-xs flex items-center gap-2">
                                                <span className="material-symbols-outlined text-sm">error</span> {item.label}
                                            </span>
                                            <span className="bg-black text-white text-[8px] px-1 font-mono">{item.code}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 h-4 border border-black relative">
                                            <div className={`h-full ${item.color} border-r-2 border-black`} style={{ width: item.val }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 bg-[#ffc107] text-center px-4 border-t-8 border-black">
                    <h2 className="text-5xl md:text-7xl font-black uppercase text-[#1a1a1a] mb-6 leading-none">
                        ¿Tu web resiste<br />el asedio?
                    </h2>
                    <div className="bg-white border-4 border-black inline-block p-4 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
                        <p className="font-mono text-sm font-bold">Obtén el informe. Sin ruido. Sin excusas. Solo datos duros.</p>
                    </div>
                    <div>
                        <button className="bg-[#0d47a1] text-white border-4 border-black px-12 py-4 text-2xl font-black uppercase hover:scale-105 transition-transform shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            Solicitar Auditoría
                        </button>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
