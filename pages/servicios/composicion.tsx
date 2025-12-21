import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function ComposicionService() {
    const [mixValue, setMixValue] = useState(50);

    return (
        <>
            <SeoHead title="Composición de Hits: SEO Fighter | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-paper font-sans text-ink pt-20 selection:bg-accent selection:text-ink">

                {/* Hero Section */}
                <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden border-b-8 border-ink">
                    {/* Brutalist Background Elements */}
                    <div className="absolute inset-0 bg-paper">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #e63946 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                        </div>
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto">
                        <div className="bg-primary text-white border-4 border-ink px-6 py-2 shadow-brutal mb-8 inline-block rotate-[-2deg] hover:rotate-0 transition-transform">
                            <span className="font-display uppercase text-xl tracking-wider">V.2.5 Hit System</span>
                        </div>

                        <h1 className="text-7xl md:text-9xl font-display uppercase leading-[0.85] tracking-tighter text-ink mb-6 text-shadow-brutal">
                            Composición<br />
                            <span className="text-primary">De Hits</span>
                        </h1>

                        <p className="font-mono text-ink/80 mt-8 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed bg-white border-2 border-ink p-4 shadow-brutal-sm rotate-1">
                            Transformamos data cruda en rankings que rompen charts. Una estrategia SEO agresiva donde el algoritmo baila a nuestro ritmo.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 mt-12">
                            <button className="bg-ink text-white px-8 py-4 font-display uppercase text-xl border-4 border-transparent hover:bg-primary hover:border-ink shadow-brutal transition-all flex items-center gap-2 group">
                                <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">play_circle</span> Drop the Needle
                            </button>
                            <Link href="/liner-notes" className="bg-accent text-ink px-8 py-4 font-display uppercase text-xl border-4 border-ink shadow-brutal hover:translate-y-[-4px] hover:shadow-brutal-hover transition-all">
                                Ver Liner Notes
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-24 px-4 bg-secondary border-b-8 border-ink">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16 relative">
                            <h2 className="text-6xl md:text-8xl font-display uppercase text-ink leading-none">The Creative Process</h2>
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-4 py-1 border-2 border-ink rotate-2">
                                <span className="font-mono text-xs font-bold uppercase">From Demo to Master</span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Step 1 */}
                            <div className="bg-paper p-8 border-4 border-ink shadow-brutal relative group hover:-translate-y-2 transition-transform">
                                <div className="absolute -top-6 -left-2 size-14 bg-primary border-4 border-ink flex items-center justify-center text-white shadow-brutal-sm">
                                    <span className="material-symbols-outlined text-3xl font-black">music_note</span>
                                </div>
                                <h3 className="mt-8 text-4xl font-display uppercase text-white mb-2">The Beat <span className="text-accent text-lg align-top">(Research)</span></h3>
                                <p className="font-mono text-sm text-gray-400 leading-relaxed border-t-2 border-gray-700 pt-4 mt-4">
                                    Encontramos el ritmo en las keywords. Analizamos el ruido del mercado para encontrar la señal y marcar el tempo del crecimiento.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white p-8 border-4 border-ink shadow-brutal relative group hover:-translate-y-2 transition-transform mt-12 md:mt-0">
                                <div className="absolute -top-6 -left-2 size-14 bg-accent border-4 border-ink flex items-center justify-center text-ink shadow-brutal-sm">
                                    <span className="material-symbols-outlined text-3xl font-black">mic</span>
                                </div>
                                <h3 className="mt-8 text-4xl font-display uppercase text-ink mb-2">The Lyrics <span className="text-primary text-lg align-top">(Content)</span></h3>
                                <p className="font-mono text-sm text-ink/80 leading-relaxed border-t-2 border-ink/20 pt-4 mt-4">
                                    Escribimos flows que enganchan. Copywriting y optimización que le habla a los humanos y a los bots por igual.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-primary p-8 border-4 border-ink shadow-brutal relative group hover:-translate-y-2 transition-transform mt-12 md:mt-0">
                                <div className="absolute -top-6 -left-2 size-14 bg-white border-4 border-ink flex items-center justify-center text-ink shadow-brutal-sm">
                                    <span className="material-symbols-outlined text-3xl font-black">tune</span>
                                </div>
                                <h3 className="mt-8 text-4xl font-display uppercase text-white mb-2">The Mix <span className="text-ink text-lg align-top">(Technical)</span></h3>
                                <p className="font-mono text-sm text-white/90 leading-relaxed border-t-2 border-white/20 pt-4 mt-4">
                                    Masterizando el track para los algoritmos. SEO técnico asegurando que tu contenido llegue a los charts limpio y fuerte.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mixer Interaction (Brutalist Style) */}
                <section className="py-24 px-4 bg-paper">
                    <div className="max-w-4xl mx-auto bg-ink border-4 border-white p-8 md:p-12 relative shadow-[10px_10px_0px_0px_#fff]">

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b-4 border-white pb-8">
                            <div>
                                <h3 className="text-4xl md:text-5xl font-display uppercase text-white leading-none">Adjust Your Mix</h3>
                                <p className="text-accent font-mono text-sm uppercase mt-2">/// Growth vs Authority Protocol</p>
                            </div>
                            <span className="material-symbols-outlined text-6xl text-white md:mt-0 mt-4 animate-spin-slow">settings_motion</span>
                        </div>

                        <div className="relative h-24 flex items-center bg-[#222] border-4 border-white p-2">
                            {/* Track Pattern */}
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 19px, #fff 20px)' }}></div>

                            {/* Track Line */}
                            <div className="w-full h-8 bg-black border-2 border-white relative overflow-hidden">
                                <div className="absolute left-0 top-0 h-full bg-primary transition-all duration-100" style={{ width: `${mixValue}%` }}>
                                    <div className="absolute right-0 top-0 h-full w-2 bg-white animate-pulse"></div>
                                </div>
                            </div>

                            {/* Slider Input */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={mixValue}
                                onChange={(e) => setMixValue(parseInt(e.target.value))}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                            />

                            {/* Draggable Knob */}
                            <div
                                className="absolute top-1/2 -translate-y-1/2 size-16 bg-accent border-4 border-black shadow-brutal flex items-center justify-center z-10 pointer-events-none transition-all duration-100"
                                style={{ left: `calc(${mixValue}% - 32px)` }}
                            >
                                <span className="font-display text-black text-xl">{mixValue}</span>
                            </div>
                        </div>

                        <div className="flex justify-between text-xs md:text-sm font-bold font-mono text-white uppercase mt-6">
                            <span className="bg-primary px-2 py-1">Aggressive Growth</span>
                            <span className="bg-secondary text-ink px-2 py-1">Brand Authority</span>
                        </div>
                    </div>
                </section>

                {/* Pricing / Sessions */}
                <section className="py-24 px-4 bg-white border-t-8 border-ink">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="bg-accent border-2 border-ink px-4 py-1 font-mono font-bold uppercase text-sm shadow-brutal-sm mb-4 inline-block">Pricing Models</span>
                            <h2 className="text-6xl md:text-8xl font-display uppercase text-ink leading-none">Studio Sessions</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Plan 1 */}
                            <div className="bg-paper p-8 border-4 border-ink shadow-brutal flex flex-col items-start">
                                <h4 className="text-2xl font-display uppercase text-white mb-2">The Demo Tape</h4>
                                <div className="text-5xl font-display text-accent mb-6">$500<span className="text-base font-mono text-gray-400">/proy</span></div>
                                <ul className="space-y-4 mb-8 font-mono text-sm text-gray-300 flex-grow w-full">
                                    <li className="flex items-center gap-3 border-b border-gray-700 pb-2"><span className="material-symbols-outlined text-accent">check</span> Basic Keyword Research</li>
                                    <li className="flex items-center gap-3 border-b border-gray-700 pb-2"><span className="material-symbols-outlined text-accent">check</span> 1 Blog Post Optimized</li>
                                    <li className="flex items-center gap-3 border-b border-gray-700 pb-2"><span className="material-symbols-outlined text-accent">check</span> On-page Content Fixes</li>
                                </ul>
                                <button className="w-full py-4 border-4 border-white text-white font-display uppercase text-xl hover:bg-white hover:text-ink transition-colors">Start Mixing</button>
                            </div>

                            {/* Plan 2 (Featured) */}
                            <div className="bg-primary p-8 border-4 border-ink shadow-brutal relative transform md:-translate-y-8 z-10">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ink text-white px-4 py-1 font-mono text-xs font-bold uppercase border-2 border-white">Most Popular</div>
                                <h4 className="text-2xl font-display uppercase text-white mb-2">The Studio Album</h4>
                                <div className="text-5xl font-display text-white mb-6">$1500<span className="text-base font-mono text-white/70">/mes</span></div>
                                <ul className="space-y-4 mb-8 font-mono text-sm text-white flex-grow w-full">
                                    <li className="flex items-center gap-3 border-b border-white/30 pb-2"><span className="material-symbols-outlined text-ink bg-white rounded-full p-0.5">check</span> Estrategia Integral</li>
                                    <li className="flex items-center gap-3 border-b border-white/30 pb-2"><span className="material-symbols-outlined text-ink bg-white rounded-full p-0.5">check</span> 4 Blog Posts Premium</li>
                                    <li className="flex items-center gap-3 border-b border-white/30 pb-2"><span className="material-symbols-outlined text-ink bg-white rounded-full p-0.5">check</span> Auditoría Técnica Mensual</li>
                                    <li className="flex items-center gap-3 border-b border-white/30 pb-2"><span className="material-symbols-outlined text-ink bg-white rounded-full p-0.5">check</span> Backlink Outreach</li>
                                </ul>
                                <button className="w-full py-4 bg-ink border-4 border-white text-white font-display uppercase text-xl hover:bg-white hover:text-ink hover:border-ink transition-colors shadow-brutal">Get Signed</button>
                            </div>

                            {/* Plan 3 */}
                            <div className="bg-white p-8 border-4 border-ink shadow-brutal flex flex-col items-start text-ink">
                                <h4 className="text-2xl font-display uppercase text-ink mb-2">Platinum Record</h4>
                                <div className="text-5xl font-display text-primary mb-6">$3000<span className="text-base font-mono text-ink/60">/mes</span></div>
                                <ul className="space-y-4 mb-8 font-mono text-sm text-ink/80 flex-grow w-full">
                                    <li className="flex items-center gap-3 border-b border-gray-200 pb-2"><span className="material-symbols-outlined text-primary font-bold">check</span> Full Domination</li>
                                    <li className="flex items-center gap-3 border-b border-gray-200 pb-2"><span className="material-symbols-outlined text-primary font-bold">check</span> Daily Updates</li>
                                    <li className="flex items-center gap-3 border-b border-gray-200 pb-2"><span className="material-symbols-outlined text-primary font-bold">check</span> Global Localization</li>
                                </ul>
                                <button className="w-full py-4 border-4 border-ink text-ink font-display uppercase text-xl hover:bg-primary hover:text-white transition-colors">Go Global</button>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
