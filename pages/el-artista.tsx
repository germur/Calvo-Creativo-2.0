import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function ElArtista() {
    const [isFighting, setIsFighting] = useState(false);

    return (
        <>
            <SeoHead title="El Artista | Calvo Creativo" />
            <Navigation />
            <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
                <div className="mx-auto max-w-7xl px-4 py-12 md:px-12 lg:px-40">
                    <div className="flex flex-col gap-2 border-l-4 border-primary pl-6 py-2 mb-12 relative">
                        <div className="absolute -left-1 top-0 h-4 w-1 bg-white"></div>
                        <div className="absolute -left-1 bottom-0 h-4 w-1 bg-white"></div>
                        <h1 className="text-5xl md:text-7xl font-headline tracking-tighter leading-none uppercase italic text-white">Sobre Mí</h1>
                        <p className="text-primary text-xl font-headline tracking-[0.2em] uppercase flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-primary"></span>
                            Tale of the Tape
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left: Fighter Image */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            <div
                                onMouseEnter={() => setIsFighting(true)}
                                onMouseLeave={() => setIsFighting(false)}
                                className="group relative w-full aspect-[3/4] rounded-lg overflow-hidden border-2 border-border bg-card cursor-pointer ring-1 ring-white/10 shadow-2xl transition-all"
                            >
                                {/* Base Image */}
                                <div className={`absolute inset-0 transition-opacity duration-500 bg-cover bg-center ${isFighting ? 'opacity-0' : 'opacity-100'}`} style={{ backgroundImage: "url('https://picsum.photos/id/1025/800/1200')" }}>
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent pt-20">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="size-2 rounded-full bg-blue-500"></span>
                                            <p className="text-blue-300 font-bold tracking-widest text-xs uppercase font-mono">Corner: Blue</p>
                                        </div>
                                        <h3 className="text-3xl font-headline text-white uppercase tracking-tight">The Strategist</h3>
                                    </div>
                                </div>

                                {/* Fighter Mode Image */}
                                <div className={`absolute inset-0 transition-opacity duration-500 bg-cover bg-center contrast-125 saturate-150 ${isFighting ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: "url('https://picsum.photos/id/1035/800/1200')", filter: 'sepia(0.5) hue-rotate(-20deg) contrast(1.5)' }}>
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent pt-20">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="size-2 rounded-full bg-red-500 animate-pulse"></span>
                                            <p className="text-white font-black tracking-widest text-xs uppercase font-mono">Corner: Red</p>
                                        </div>
                                        <h3 className="text-3xl font-headline text-white uppercase tracking-tight italic">The Optimizer</h3>
                                    </div>
                                </div>

                                <div className="absolute top-4 right-4 z-30 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider border border-white/20">
                                    {isFighting ? 'Fight Mode Active' : 'Hover for Stats'}
                                </div>
                            </div>

                            <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <span className="material-symbols-outlined text-8xl">mic_external_on</span>
                                </div>
                                <h4 className="text-primary font-headline uppercase text-sm mb-3 tracking-widest italic">Biografía (The Bio)</h4>
                                <p className="text-gray-300 text-lg leading-relaxed font-light">
                                    "<span className="text-white font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent italic">Peleando desde la esquina roja...</span> Fighting out of the red corner! A heavy hitter in Technical SEO with a reach spanning Python, JS, and SQL. Undefeated in migrations, representing the Vibecoding Gym..."
                                </p>
                            </div>
                        </div>

                        {/* Right: Stats Section */}
                        <div className="lg:col-span-7">
                            <div className="bg-[#1a1111] border-2 border-border rounded-xl overflow-hidden relative shadow-2xl">
                                <div className="bg-primary px-6 py-4 flex items-center justify-between border-b-4 border-black/20">
                                    <h3 className="text-white text-3xl font-headline tracking-tighter uppercase italic transform -skew-x-6">Tale of the Tape</h3>
                                    <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full border border-white/10">
                                        <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">Official Stats</span>
                                    </div>
                                </div>

                                <div className="divide-y divide-border/30">
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        <div className="p-8 border-r border-border/30 hover:bg-white/5 transition-colors">
                                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2 font-mono">Peso (Weight Class)</p>
                                            <p className="text-white text-3xl font-headline uppercase leading-tight italic">SEO Técnico Pesado</p>
                                            <p className="text-[10px] text-primary font-mono mt-1">&lt;Heavyweight /&gt;</p>
                                        </div>
                                        <div className="p-8 hover:bg-white/5 transition-colors">
                                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2 font-mono">Estilo de Pelea</p>
                                            <div className="inline-flex items-center px-3 py-1 rounded bg-white/10 border border-white/20 text-white font-black uppercase text-xs">
                                                Agresivo White Hat
                                            </div>
                                            <p className="text-[10px] text-gray-500 mt-2 italic font-mono">Technical KO Specialist</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        <div className="p-8 border-r border-border/30 hover:bg-white/5 transition-colors">
                                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2 font-mono">Ciudad (Hometown)</p>
                                            <p className="text-white text-xl font-bold font-headline uppercase">Digital Nomad / Global</p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary w-full animate-pulse"></div>
                                                </div>
                                                <span className="text-[10px] text-gray-500 font-mono">24ms</span>
                                            </div>
                                        </div>
                                        <div className="p-8 hover:bg-white/5 transition-colors">
                                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2 font-mono">Récord</p>
                                            <div className="flex items-baseline gap-2">
                                                <p className="text-primary text-5xl font-headline italic tracking-tighter">+50</p>
                                                <p className="text-white text-base font-headline uppercase">Proyectos</p>
                                            </div>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                                                <p className="text-gray-400 text-[10px] font-bold uppercase font-mono">0 Penalizaciones</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-6 font-mono">Alcance (Reach)</p>
                                        <div className="space-y-6">
                                            {['Python', 'JavaScript', 'SQL'].map((tech, i) => (
                                                <div key={tech} className="space-y-2">
                                                    <div className="flex justify-between font-headline text-sm text-white uppercase">
                                                        <span>{tech}</span>
                                                        <span className="font-mono text-[10px] text-gray-500">{i === 0 ? '80"' : i === 1 ? '76"' : '82"'}</span>
                                                    </div>
                                                    <div className="flex gap-1 h-2">
                                                        {[...Array(5)].map((_, j) => (
                                                            <div key={j} className={`flex-1 rounded-sm ${j < 4 ? (i % 2 === 0 ? 'bg-primary' : 'bg-white') : 'bg-white/10'}`}></div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-black/50 p-3 flex justify-between items-center px-6">
                                    <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase">WWWA Certified</span>
                                    <div className="flex gap-1">
                                        {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 bg-gray-700 rounded-full"></div>)}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <button className="clip-fighter flex items-center justify-center gap-2 bg-white text-black h-14 px-6 font-headline uppercase tracking-wider hover:bg-gray-200 transition-all active:scale-95">
                                    <span className="material-symbols-outlined">download</span>
                                    <span>Descargar Bio</span>
                                </button>
                                <button className="clip-fighter flex items-center justify-center gap-2 bg-primary text-white h-14 px-6 font-headline uppercase tracking-wider hover:bg-red-700 shadow-xl transition-all active:scale-95">
                                    <span className="material-symbols-outlined">mail</span>
                                    <span>Contact Fighter</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
