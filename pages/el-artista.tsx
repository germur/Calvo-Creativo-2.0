import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    const personSchema = useMemo(() => JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Roger Calvo",
        "jobTitle": "Consultor SEO & Marketer-Builder",
        "url": "https://calvocreativo.com/el-artista",
        "sameAs": [
            "https://www.linkedin.com/in/rogermur/",
            "https://github.com/germur"
        ],
        "knowsAbout": ["SEO", "Python", "Generative Engine Optimization", "Content Strategy", "Digital Marketing"],
        "description": "Roger Calvo es un Consultor SEO y Marketer-Builder especializado en estrategias B2B, automatización con Python y optimización para motores generativos (GEO)."
    }), []);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-black font-sans">
            <SeoHead
                title="Roger Calvo | Consultor SEO & GEO Marketer-Builder"
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
                        {/* Terminal-style system overview */}
                        <div className="rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl">
                            {/* Terminal header */}
                            <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-white/10">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-3 font-mono text-xs text-gray-500">roger@calvo ~ /system-architecture</span>
                            </div>
                            {/* Terminal content */}
                            <div className="p-6 font-mono text-sm space-y-4">
                                <div>
                                    <span className="text-green-400">$</span> <span className="text-white">cat</span> <span className="text-yellow-300">stack.yml</span>
                                </div>
                                <div className="space-y-3 text-gray-400 pl-2 border-l-2 border-green-500/30">
                                    <div>
                                        <span className="text-purple-400">search_engineering:</span>
                                        <div className="pl-4 space-y-1 mt-1">
                                            <div><span className="text-blue-400">- </span><span className="text-white">Topical Authority Architecture</span></div>
                                            <div><span className="text-blue-400">- </span><span className="text-white">GEO (Generative Engine Optimization)</span></div>
                                            <div><span className="text-blue-400">- </span><span className="text-white">Entity Graph & Schema.org</span></div>
                                            <div><span className="text-blue-400">- </span><span className="text-white">Technical SEO & Crawl Engineering</span></div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-purple-400">automation:</span>
                                        <div className="pl-4 space-y-1 mt-1">
                                            <div><span className="text-blue-400">- </span><span className="text-white">Python</span> <span className="text-gray-600"># scripts, scrapers, auditorías</span></div>
                                            <div><span className="text-blue-400">- </span><span className="text-white">Claude API + Agents</span> <span className="text-gray-600"># LLM workflows</span></div>
                                            <div><span className="text-blue-400">- </span><span className="text-white">Google APIs</span> <span className="text-gray-600"># GSC, GA4, Sheets</span></div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-purple-400">frontend:</span>
                                        <div className="pl-4 space-y-1 mt-1">
                                            <div><span className="text-blue-400">- </span><span className="text-white">Next.js / React</span></div>
                                            <div><span className="text-blue-400">- </span><span className="text-white">Tailwind CSS</span></div>
                                            <div><span className="text-blue-400">- </span><span className="text-white">Netlify (CI/CD)</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <span className="text-green-400">$</span> <span className="text-gray-500 animate-pulse">_</span>
                                </div>
                            </div>
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

            {/* --- SECTION 2.5: CV BRIDGE --- */}
            <section className="bg-paper text-ink py-20 px-4 md:px-12 lg:px-24 border-y-2 border-black/10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

                    {/* Left: marker + label */}
                    <div className="md:col-span-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3 block">
                            // Track 03 — The Receipts
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-black uppercase leading-none tracking-tighter mb-4">
                            ¿Quieres <br /><span className="text-red-600">los recibos?</span>
                        </h2>
                        <p className="font-mono text-xs text-gray-500 leading-relaxed">
                            Bio + filosofía está bien, pero a veces necesitas ver el historial completo: empresas, períodos, resultados con números. Para eso existe el CV.
                        </p>
                    </div>

                    {/* Right: CV preview card */}
                    <div className="md:col-span-8">
                        <Link
                            href="/cv"
                            className="group block bg-white border-4 border-black p-8 md:p-10 shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#dc2626] hover:-translate-x-1 hover:-translate-y-1 transition-all relative overflow-hidden"
                        >
                            {/* Bag-on-head sticker */}
                            <div className="absolute -top-2 -right-2 w-20 h-20 bg-black flex flex-col items-center justify-center transform rotate-6 border-2 border-black">
                                <span className="font-mono text-[8px] uppercase tracking-widest text-white/60">a.k.a.</span>
                                <span className="font-display italic text-2xl text-white leading-none mt-0.5" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>Mr. X</span>
                            </div>

                            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-2">Curriculum Vitae</p>
                            <h3 className="text-3xl md:text-4xl font-display font-black uppercase leading-none mb-4 text-ink">
                                Roger Murillo
                            </h3>
                            <p className="font-mono text-sm text-red-600 font-bold mb-6 uppercase tracking-tight">
                                SEO Strategist & Content Architect
                            </p>

                            {/* Mini metrics row */}
                            <div className="grid grid-cols-3 border-y-2 border-black py-4 mb-6">
                                <div>
                                    <div className="text-2xl font-display font-black text-red-600">7y</div>
                                    <div className="text-[10px] font-mono text-gray-500 leading-tight">U.S. + LATAM</div>
                                </div>
                                <div className="border-x-2 border-black px-3">
                                    <div className="text-2xl font-display font-black text-red-600">4×</div>
                                    <div className="text-[10px] font-mono text-gray-500 leading-tight">Brands @ Holding</div>
                                </div>
                                <div className="pl-3">
                                    <div className="text-2xl font-display font-black text-red-600">#1</div>
                                    <div className="text-[10px] font-mono text-gray-500 leading-tight">Organic GBP, $0 ads</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                                    Ver CV completo · Imprimir / PDF
                                </span>
                                <span className="material-symbols-outlined text-2xl text-black group-hover:translate-x-2 group-hover:text-red-600 transition-all">arrow_forward</span>
                            </div>
                        </Link>
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
                                    <div className="flex items-center gap-2" title="BJJ White Belt (3 Stripes)">
                                        <span className="text-sm">BJJ</span>
                                        <div className="h-6 w-32 bg-white border border-gray-300 rounded-sm flex justify-end relative shadow-sm">
                                            <div className="h-full w-10 bg-black flex items-center justify-evenly px-1">
                                                <div className="w-1 h-full bg-white transform -skew-x-12"></div>
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

                    {/* Right: Hall of Fame — Idols that shaped my philosophy */}
                    <div className="lg:col-span-8">
                        <h3 className="font-display text-2xl uppercase mb-3 flex items-center gap-4">
                            Hall of Fame <span className="h-px bg-paper/20 flex-grow"></span>
                        </h3>
                        <p className="font-mono text-xs text-paper/50 uppercase tracking-wide mb-8">
                            Los atletas que moldearon mi filosofía de trabajo
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {idols.map((idol, i) => (
                                <div
                                    key={i}
                                    className="group relative rounded-xl overflow-hidden border border-paper/10 hover:border-paper/40 transition-all shadow-lg bg-black"
                                >
                                    {/* Background Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={idol.img}
                                            alt={idol.name}
                                            width={600}
                                            height={400}
                                            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Dark gradient from bottom */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                                        {/* Name overlay on image */}
                                        <div className="absolute bottom-0 left-0 right-0 p-5">
                                            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-1">{idol.role}</div>
                                            <h4 className="font-display text-2xl md:text-3xl uppercase leading-none text-white font-bold">{idol.name}</h4>
                                        </div>
                                    </div>

                                    {/* Description always visible */}
                                    <div className="p-5 bg-[#111]">
                                        <p className="text-sm text-paper/70 leading-relaxed">
                                            {idol.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* UFC Blog — Quimbara */}
                <div className="max-w-7xl mx-auto mt-20">
                    <a
                        href="https://quimbara.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block overflow-hidden rounded-xl border-2 border-red-600/40 hover:border-red-500 transition-all bg-gradient-to-br from-black via-red-950/20 to-black hover:shadow-[0_0_40px_rgba(220,38,38,0.25)]"
                    >
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.4),transparent_60%)]"></div>

                        {/* Live badge */}
                        <div className="absolute top-6 right-6 flex items-center gap-2 z-10">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-red-400">External · Live</span>
                        </div>

                        <div className="relative grid md:grid-cols-12 gap-8 p-10 md:p-14">
                            {/* Left: visual */}
                            <div className="md:col-span-4 flex flex-col justify-center items-center md:items-start">
                                <span className="material-symbols-outlined text-7xl text-red-500 mb-2">sports_mma</span>
                                <span className="bg-red-600 text-white font-bold uppercase px-3 py-1 text-[10px] tracking-widest transform -rotate-2 mt-2">
                                    Side Project
                                </span>
                            </div>

                            {/* Right: copy */}
                            <div className="md:col-span-8">
                                <div className="font-mono text-xs uppercase tracking-widest text-red-400 mb-2">
                                    quimbara.org
                                </div>
                                <h3 className="font-display text-4xl md:text-5xl uppercase tracking-tighter text-paper leading-none mb-4">
                                    Mi blog de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">UFC</span>
                                </h3>
                                <p className="text-paper/70 font-mono text-sm leading-relaxed mb-6 max-w-xl">
                                    Análisis de peleas, estilos, fighters y la cultura alrededor del MMA. Si te gusta el deporte tanto como a mí, esto es para ti.
                                </p>
                                <div className="inline-flex items-center gap-3 text-red-400 font-bold uppercase text-sm tracking-widest border-b-2 border-red-500/40 group-hover:border-red-500 pb-1 transition-all">
                                    <span>Visitar Quimbara</span>
                                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_outward</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Liverpool / Culture Banner */}
                <div className="max-w-7xl mx-auto mt-20 relative rounded-xl overflow-hidden border-2 border-red-900/30 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-950 to-black"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-transparent"></div>

                    <div className="relative p-8 md:p-24 flex flex-col justify-center">
                        <span className="font-display text-red-400 text-sm md:text-xl uppercase tracking-widest mb-2">Culture & Origins</span>
                        <h2 className="text-4xl sm:text-5xl md:text-9xl font-display font-black text-white leading-[0.85] uppercase tracking-tighter opacity-90 drop-shadow-2xl">
                            You&apos;ll Never<br />
                            Walk Alone
                        </h2>
                        <p className="mt-6 md:mt-8 text-white/80 max-w-lg font-mono text-xs md:text-sm leading-relaxed border-l-4 border-red-500 pl-4 md:pl-6">
                            Soy hincha del Liverpool. No solo por los títulos, sino por su identidad. La cultura competitiva, la historia y la conexión con la gente.
                        </p>

                        {/* Culture References — inline on mobile */}
                        <div className="mt-6 md:mt-10 flex flex-wrap items-center gap-3">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                                Cultural References:
                            </span>
                            <div className="flex gap-2">
                                <div title="Notorious B.I.G. - The Flow" className="w-9 h-9 md:w-10 md:h-10 bg-black/40 backdrop-blur rounded-full flex items-center justify-center border border-yellow-500/50">
                                    <span className="material-symbols-outlined text-yellow-500 text-base md:text-lg">crown</span>
                                </div>
                                <div title="Wu-Tang Clan - The Strategy" className="w-9 h-9 md:w-10 md:h-10 bg-black/40 backdrop-blur rounded-full flex items-center justify-center border border-yellow-500/50">
                                    <span className="font-display font-bold text-yellow-500 text-[10px]">WTC</span>
                                </div>
                                <div title="UFC - The Mindset" className="w-9 h-9 md:w-10 md:h-10 bg-black/40 backdrop-blur rounded-full flex items-center justify-center border border-red-500/50">
                                    <span className="material-symbols-outlined text-red-500 text-base md:text-lg">sports_mma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Author Profile Link */}
            <section className="py-8 bg-black/90 border-t border-white/10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Link href="/autor/roger-calvo" className="inline-flex items-center gap-3 text-white/60 hover:text-white font-mono text-sm uppercase tracking-widest transition-colors">
                        <span className="material-symbols-outlined text-lg">person</span>
                        Perfil completo del autor
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
