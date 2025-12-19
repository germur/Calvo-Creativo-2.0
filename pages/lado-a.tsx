import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function LadoA() {
    return (
        <>
            <SeoHead title="Lado A: Técnico | Calvo Creativo" />
            <Navigation />
            <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
                <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
                    {/* Hero Section */}
                    <section className="relative overflow-hidden rounded-2xl border border-border bg-[#181611] p-8 md:p-12 mb-16 shadow-2xl">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
                        <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
                            <div className="flex flex-col gap-6">
                                <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.2em] uppercase font-mono">
                                    <span className="h-px w-8 bg-primary"></span>
                                    <span>Zona de Guerra SEO</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-headline leading-[0.9] tracking-tighter text-white uppercase italic">
                                    LADO A:<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white drop-shadow-md">ARQUITECTURA Y CÓDIGO</span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-400 max-w-md font-light border-l-2 border-primary pl-4 italic">
                                    "Domando dragones algorítmicos con acero y Python."
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button className="flex h-12 items-center justify-center rounded bg-primary px-6 text-black font-bold hover:scale-105 transition-all">
                                        Ver Estrategias
                                    </button>
                                    <button className="flex h-12 items-center justify-center rounded border border-border bg-black/40 px-6 text-white font-medium hover:border-primary transition-all">
                                        Explorar Código
                                    </button>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-center">
                                <div className="w-full max-w-sm aspect-square bg-card border border-border p-8 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(249,245,6,0.1)] relative">
                                    <span className="material-symbols-outlined text-[120px] text-primary/80 animate-pulse-soft">shield_person</span>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-40 font-mono text-[10px] text-primary rotate-12 pointer-events-none whitespace-pre">
                                        {`def slay_dragon(algo):\n  return optimize(algo)\n\nwhile True:\n  audit_vitals()`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services Grid */}
                    <section className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-headline uppercase text-white mb-2 tracking-widest">El Arsenal de Servicios</h2>
                            <p className="text-gray-500 font-mono text-sm uppercase">Herramientas forjadas en las profundidades del código.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Auditorías Vikingas', icon: 'construction', desc: 'Destrucción de código obsoleto y limpieza profunda.' },
                                { title: 'Migraciones Épicas', icon: 'explore', desc: 'Travesías seguras entre servidores sin perder tráfico.' },
                                { title: 'Hechicería Python', icon: 'auto_fix_high', desc: 'Automatización de procesos repetitivos y scripts.' },
                                { title: 'Afinando para IA', icon: 'model_training', desc: 'GEO: Generative Engine Optimization para el futuro.' },
                            ].map((item, idx) => (
                                <div key={idx} className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-card border border-border p-6 hover:border-primary/50 transition-all duration-300">
                                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-background p-3 text-primary group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-white group-hover:text-primary transition-colors uppercase font-headline">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                                    <button className="w-full rounded bg-background py-2 text-xs font-bold text-white uppercase tracking-widest hover:bg-primary hover:text-black transition-colors border border-border">
                                        Detalles
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="bg-card border border-border rounded-2xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-headline uppercase text-white mb-4">El Oráculo de Datos</h2>
                                <p className="text-gray-400 mb-8">Nuestras métricas se levantan como templos antiguos. Resultados sólidos, construidos para perdurar.</p>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-border/50 pb-2">
                                        <span className="text-gray-500 font-mono uppercase text-xs">Crecimiento Orgánico</span>
                                        <span className="text-primary font-bold">+145%</span>
                                    </div>
                                    <div className="flex justify-between border-b border-border/50 pb-2">
                                        <span className="text-gray-500 font-mono uppercase text-xs">Velocidad (LCP)</span>
                                        <span className="text-primary font-bold">0.8s</span>
                                    </div>
                                    <div className="flex justify-between border-b border-border/50 pb-2">
                                        <span className="text-gray-500 font-mono uppercase text-xs">Errores 404</span>
                                        <span className="text-green-500 font-bold uppercase text-[10px] tracking-widest">Exterminados</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-64 flex items-end gap-4 px-4 border-l border-b border-border/30">
                                {[20, 45, 30, 80, 65, 90, 100].map((h, i) => (
                                    <div key={i} className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm transition-all duration-1000" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
