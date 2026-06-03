import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function CasosIndex() {
    return (
        <>
            <SeoHead title="Casos de Éxito | Calvo Creativo" description="Casos reales de SEO técnico, vibecoding y estrategia de contenidos. Proyectos con antes y después verificable: migraciones, rendimiento web y herramientas con IA." />
            <Navigation />

            <main className="min-h-screen bg-[#111] font-sans pt-20 text-[#e0e0e0]">

                {/* Header */}
                <section className="px-4 py-12 border-b border-[#333]">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#ffb300] material-symbols-outlined text-xs">folder_open</span>
                            <span className="text-[#ffb300] text-[10px] font-bold uppercase tracking-[0.2em]">Casos reales</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
                            Casos de éxito<br />
                            <span className="text-[#ffb300]">Trabajo real, datos reales</span>
                        </h1>

                        <p className="text-gray-400 font-light leading-relaxed max-w-xl">
                            Proyectos reales de SEO técnico, vibecoding y estrategia. Cada caso muestra el antes, el proceso y el después, con métricas verificables y sin humo.
                        </p>
                    </div>
                </section>

                {/* Grid Cases */}
                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Case 1 — Roger Murillo (real) */}
                        <Link href="/casos/rogermurillo" className="bg-[#1a1a1a] border border-[#333] group hover:border-[#ffb300] transition-colors relative block">
                            <div className="absolute top-0 right-10 bg-[#ffb300]/20 h-2 w-12 z-10"></div>
                            <div className="relative h-64 overflow-hidden border-b border-[#333] bg-[#0a0a0a] flex items-center justify-center">
                                <div className="text-center px-6">
                                    <div className="text-[#ffb300] text-5xl font-black">96<span className="text-2xl">/100</span></div>
                                    <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-2">Rendimiento Lighthouse</div>
                                </div>
                                <div className="absolute top-4 left-4 border border-[#ffb300] text-[#ffb300] size-8 flex items-center justify-center font-bold text-sm bg-black">01</div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold uppercase text-white leading-tight">De WordPress<br />a Astro</h3>
                                    <span className="material-symbols-outlined text-gray-600 group-hover:text-[#ffb300] transition-colors -rotate-45 group-hover:rotate-0 transform">arrow_forward</span>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-mono">
                                    Rehíce rogermurillo.co de una peluquería lenta y llena de bugs a una firma de consultoría premium. SEO técnico, vibecoding y herramientas con IA.
                                </p>
                                <div className="flex justify-between items-end border-t border-[#333] pt-4">
                                    <div className="flex gap-2">
                                        <span className="bg-[#333] text-gray-300 px-1 text-[8px] uppercase">SEO Técnico</span>
                                        <span className="bg-[#333] text-gray-300 px-1 text-[8px] uppercase">Vibecoding</span>
                                    </div>
                                    <span className="text-[#ffb300] text-[10px] font-bold font-mono">96/100 · LCP 1.2s</span>
                                </div>
                            </div>
                        </Link>

                        {/* Próximos casos (honestos) */}
                        <div className="bg-[#0f0f0f] border border-[#222] relative flex items-center justify-center min-h-[300px]">
                            <div className="text-center px-8">
                                <span className="material-symbols-outlined text-4xl text-gray-600 mb-2">hourglass_empty</span>
                                <h3 className="text-lg font-bold uppercase text-gray-400">Próximamente</h3>
                                <p className="text-[10px] text-gray-600 mt-2">Más casos reales en camino: dashboards, CRMs y proyectos cross-border.</p>
                            </div>
                        </div>

                        <div className="bg-[#0f0f0f] border border-[#222] relative flex items-center justify-center min-h-[300px]">
                            <div className="text-center px-8">
                                <span className="material-symbols-outlined text-4xl text-gray-600 mb-2">hourglass_empty</span>
                                <h3 className="text-lg font-bold uppercase text-gray-400">Próximamente</h3>
                                <p className="text-[10px] text-gray-600 mt-2">Documentando resultados antes de publicarlos. Datos reales o nada.</p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 border-t border-[#ffb300] bg-[#1a0a00]">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h2 className="text-4xl font-black uppercase text-white mb-6">¿Tu próximo caso de éxito?</h2>
                        <p className="text-gray-400 mb-8 font-light">Si tu web se quedó atrás o necesita una base técnica seria, hablemos.</p>
                        <Link href="/contacto" className="inline-block border-2 border-[#ffb300] text-[#ffb300] px-12 py-3 font-bold uppercase hover:bg-[#ffb300] hover:text-black transition-colors tracking-widest text-sm">
                            Hablemos
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
