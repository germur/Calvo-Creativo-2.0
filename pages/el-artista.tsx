import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';
import SpotifyWidget from '@/components/SpotifyWidget';
import Breadcrumbs from '@/components/Breadcrumbs';

// Icons for the Hall of Fame (RESTORED)
const idols = [
    {
        name: 'Lionel Messi',
        role: 'The Vision',
        desc: 'Comprensión del juego más allá del talento. Ver los espacios antes de que existan.',
        img: '/assets/hall-of-fame/messi-salsa.jpg',
        color: 'from-blue-500 to-white'
    },
    {
        name: 'Zinedine Zidane',
        role: 'The Elegance',
        desc: 'La técnica al servicio de la eficacia. Hacer que lo difícil parezca fácil.',
        img: '/assets/hall-of-fame/zidane-salsa.jpg',
        color: 'from-blue-900 to-white'
    },
    {
        name: 'Ronaldo Nazário',
        role: 'The Power',
        desc: 'Potencia explosiva y definición clínica. Resolver problemas con contundencia.',
        img: '/assets/hall-of-fame/ronaldo-salsa.jpg',
        color: 'from-yellow-400 to-green-600'
    },
    {
        name: 'Kobe Bryant',
        role: 'The Mindset',
        desc: 'Mamba Mentality. Obsesión por mejorar. Trabajo silencioso cuando nadie mira.',
        img: '/assets/hall-of-fame/kobe-salsa.jpg',
        color: 'from-purple-600 to-yellow-400'
    }
];

export default function ElArtista() {
    const [activeIdol, setActiveIdol] = useState<number | null>(null);

    const personSchema = useMemo(() => JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Roger Calvo",
        "jobTitle": "Consultor SEO & Marketer-Builder",
        "url": "https://calvocreativo.com/el-artista",
        "sameAs": [
            "https://www.linkedin.com/in/rogermur/",
            "https://github.com/rogermur"
        ],
        "knowsAbout": ["SEO", "Python", "Generative Engine Optimization", "Content Strategy", "Digital Marketing"],
        "description": "Roger Calvo es un Consultor SEO y Marketer-Builder especializado en estrategias B2B, automatización con Python y optimización para motores generativos (GEO)."
    }), []);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-black font-sans">
            <SeoHead
                title="El Artista: Roger Calvo | The Architect & The Fighter"
                description="Consultor SEO y Marketer-Builder. La fusión entre la estrategia técnica (The Architect) y la mentalidad competitiva (The Fighter)."
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: personSchema }}
            />
            <Navigation />

            {/* Breadcrumbs for Architecture */}
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 pt-20">
                <Breadcrumbs theme="dark" />
            </div>

            {/* --- SECTION 1: THE ARCHITECT (Original Identity RESTORED) --- */}
            <section className="relative pt-12 pb-24 px-4 md:px-12 lg:px-24 overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 mb-6 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Profile: Marketer-Builder</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-8">
                            THE<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">ARCHITECT.</span>
                        </h1>

                        {/* 3rd Person Bio Snippet (Entity) - Integrated subtly */}
                        <div className="mb-6 opacity-60 text-xs font-mono max-w-lg border-l border-gray-700 pl-3">
                            <p>Roger Calvo: Consultor SEO Estratégico & Python Developer.<br />Especialista en Information Gain y GEO.</p>
                        </div>

                        <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-light max-w-xl">
                            <p>
                                <strong className="text-white">Resumen profesional.</strong> Soy estratega SEO con enfoque técnico, creativo y orientado a negocio. No vendo humo ni fórmulas mágicas. Construyo arquitecturas sólidas y sistemas que escalan.
                            </p>
                            <p>
                                Mi trabajo une estrategia, criterio editorial y código. Desde <span className="text-white font-mono bg-white/10 px-1">Python</span> para automatizar, hasta <span className="text-white font-mono bg-white/10 px-1">React/Astro</span> para construir.
                            </p>
                            <p className="border-l-4 border-accent pl-4 italic text-white/80">
                                "El SEO no es solo posicionar. Es competir con criterio, resistir a largo plazo y ganar con inteligencia."
                            </p>
                        </div>

                        {/* Tech Stack Icons (Restored) */}
                        <div className="mt-12 flex flex-wrap gap-4">
                            {['Technical SEO', 'Python Automations', 'React / Next.js', 'Information Gain', 'Entity Graph'].map((skill) => (
                                <div key={skill} className="bg-white/5 border border-white/10 px-4 py-2 rounded flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default">
                                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                                    <span className="text-xs font-mono uppercase tracking-wide">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        {/* Abstract Visual Representation of "Structure" */}
                        <div className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden p-8 flex items-center justify-center">
                            <div className="absolute inset-0 opacity-30 animate-pulse bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                            {/* Central Graphic */}
                            <div className="relative z-10 text-center">
                                <span className="material-symbols-outlined text-9xl text-white/20 mb-4">architecture</span>
                                <div className="font-mono text-xs text-gray-500 uppercase tracking-[0.3em]">System Architecture & Logic</div>
                            </div>
                            {/* Floating "Nodes" - Added these back for flavor */}
                            <div className="absolute top-10 left-10 bg-black border border-white/20 p-2 rounded text-xs font-mono text-accent">Indexability</div>
                            <div className="absolute bottom-20 right-10 bg-black border border-white/20 p-2 rounded text-xs font-mono text-blue-400">Crawl Budget</div>
                            <div className="absolute top-1/2 right-4 bg-black border border-white/20 p-2 rounded text-xs font-mono text-purple-400">Semantic HTML</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: CREDENTIALS & TRUST (NEW COMPLEMENT) --- */}
            <section className="py-12 bg-black border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center font-mono text-xs uppercase tracking-widest text-gray-500 mb-8">Trayectoria & Validación (E-E-A-T)</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Mock Logos / Validation */}
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-2xl" aria-hidden="true">verified</span>
                            <span className="font-bold">Google Analytics Certified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-2xl" aria-hidden="true">code</span>
                            <span className="font-bold">SEO Specialist</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-2xl" aria-hidden="true">swords</span>
                            <span className="font-bold">Main Riven (Peak 2.8k 2v2/3v3 WotLK)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 3: THE FIGHTER & HALL OF FAME (Original Identity RESTORED) --- */}
            <section className="bg-ink text-paper relative py-24 px-4 md:px-12 lg:px-24 border-t-8 border-accent">
                {/* Section Header */}
                <div className="max-w-7xl mx-auto mb-20 text-center">
                    <span className="bg-red-600 text-white font-bold uppercase px-3 py-1 text-xs tracking-widest inline-block mb-4 transform -rotate-2">
                        Mindset & Culture
                    </span>
                    <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-6 text-paper">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Fighter</span>_
                    </h2>
                    <p className="font-mono text-paper/70 max-w-2xl mx-auto">
                        Mi forma de trabajar está moldeada por el deporte. Disciplina diaria, análisis frío y respeto por el proceso. No todo se gana rápido, pero todo se construye con método.
                    </p>
                </div>

                {/* Dashboard Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Tale of the Tape (Stats) */}
                    <div className="lg:col-span-4 bg-black/20 border-2 border-paper/10 rounded-xl p-8 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-paper/10">
                            <h3 className="font-display text-2xl uppercase">Tale of the Tape</h3>
                            <span className="animate-pulse w-3 h-3 bg-red-500 rounded-full"></span>
                        </div>
                        <div className="space-y-6 font-mono">
                            <div>
                                <div className="text-xs uppercase text-paper/50 mb-1">Discipline</div>
                                <div className="text-xl font-bold flex items-center gap-3">
                                    <span>Boxing</span>
                                    <span className="text-paper/30">/</span>
                                    <div className="flex items-center gap-2" title="BJJ White Belt (2 Stripes)">
                                        <span className="text-sm">BJJ</span>
                                        <div className="h-6 w-32 bg-white border border-gray-300 rounded-sm flex justify-end relative shadow-sm">
                                            <div className="h-full w-8 bg-black flex items-center justify-evenly px-1">
                                                <div className="w-1 h-full bg-white transform -skew-x-12"></div>
                                                <div className="w-1 h-full bg-white transform -skew-x-12"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="text-xs uppercase text-paper/50 mb-1">Mojo / Life Philosophy</div>
                                <div className="text-xl font-bold text-red-500">"I love it when you call me Big Poppa"</div>
                            </div>

                            {/* Spotify Rap Mix */}
                            <div className="mt-12 max-w-md mx-auto transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                                <SpotifyWidget
                                    url="https://open.spotify.com/embed/playlist/5h7E5rBunS8Wckl2l4HmzU?utm_source=generator"
                                    title="Training Mix"
                                    subtitle="Ritmo para picar código"
                                    theme="rap"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Hall of Fame (Visual Grid) RESTORED */}
                    <div className="lg:col-span-8">
                        <h3 className="font-display text-2xl uppercase mb-8 flex items-center gap-4">
                            Hall of Fame <span className="h-px bg-paper/20 flex-grow"></span>
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {idols.map((idol, i) => (
                                <div
                                    key={i}
                                    onMouseEnter={() => setActiveIdol(i)}
                                    onMouseLeave={() => setActiveIdol(null)}
                                    className="relative group h-64 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-paper/50 transition-all shadow-lg bg-black"
                                >
                                    {/* Background Image - RESTORED */}
                                    <Image
                                        src={idol.img}
                                        alt={idol.name}
                                        width={600}
                                        height={800}
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${idol.color} opacity-80 mix-blend-multiply group-hover:opacity-60 transition-opacity`}></div>

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <div className={`transform transition-all duration-300 ${activeIdol === i ? '-translate-y-2' : 'translate-y-0'}`}>
                                            <div className="font-mono text-xs uppercase tracking-widest text-white/70 mb-1">{idol.role}</div>
                                            <h4 className="font-display text-3xl uppercase leading-none text-white mb-2">{idol.name}</h4>

                                            <div className={`overflow-hidden transition-all duration-300 ${activeIdol === i ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <p className="text-sm text-white/90 leading-tight font-light border-l-2 border-white pl-3 mt-2">
                                                    {idol.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur rounded p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-white text-sm">trophy</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Liverpool / Culture Banner */}
                <div className="max-w-7xl mx-auto mt-20 relative rounded-xl overflow-hidden border-2 border-red-900/30 group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579952363873-1b9a2d677688?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-transparent"></div>

                    {/* Hip Hop / Culture Badges - RESTORED */}


                    {/* Culture References (RESTORED & CLARIFIED) */}
                    <div className="absolute top-6 right-6 md:top-10 md:right-10 flex flex-col items-end gap-2 z-50">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 bg-black/50 px-2 py-1 rounded backdrop-blur-md">
                            Cultural References
                        </span>
                        <div className="flex gap-3">
                            <div title="Notorious B.I.G. - The Flow" className="group/icon relative w-10 h-10 bg-black/40 backdrop-blur rounded-full flex items-center justify-center border border-yellow-500/50 hover:border-yellow-500 hover:bg-black/80 transition-all cursor-help">
                                <span className="material-symbols-outlined text-yellow-500 text-lg">crown</span>
                                <span className="absolute -bottom-8 right-0 text-[10px] bg-black text-white px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Biggie's Flow</span>
                            </div>
                            <div title="Wu-Tang Clan - The Strategy" className="group/icon relative w-10 h-10 bg-black/40 backdrop-blur rounded-full flex items-center justify-center border border-yellow-500/50 hover:border-yellow-500 hover:bg-black/80 transition-all cursor-help">
                                <span className="font-display font-bold text-yellow-500 text-[10px]">WTC</span>
                                <span className="absolute -bottom-8 right-0 text-[10px] bg-black text-white px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Wu-Tang Strategy</span>
                            </div>
                            <div title="UFC - The Mindset" className="group/icon relative w-10 h-10 bg-black/40 backdrop-blur rounded-full flex items-center justify-center border border-red-500/50 hover:border-red-500 hover:bg-black/80 transition-all cursor-help">
                                <span className="material-symbols-outlined text-red-500 text-lg">sports_mma</span>
                                <span className="absolute -bottom-8 right-0 text-[10px] bg-black text-white px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">UFC Mindset</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative p-12 md:p-24 flex flex-col justify-center">
                        <span className="font-display text-red-400 text-xl uppercase tracking-widest mb-2 mix-blend-plus-lighter">Culture & Origins</span>
                        <h2 className="text-6xl md:text-9xl font-display font-black text-white leading-[0.8] uppercase tracking-tighter opacity-90 drop-shadow-2xl">
                            You'll Never<br />
                            Walk Alone
                        </h2>
                        <p className="mt-8 text-white/80 max-w-lg font-mono text-sm leading-relaxed border-l-4 border-red-500 pl-6">
                            Soy hincha del Liverpool. No solo por los títulos, sino por su identidad. La cultura competitiva, la historia y la conexión con la gente.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
