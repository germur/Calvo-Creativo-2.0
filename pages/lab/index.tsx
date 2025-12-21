import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import SpotifyWidget from '@/components/SpotifyWidget';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function LabHub() {
    // CollectionPage Schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "SEO Lab & Vibe Coding | Experimentos de Marketing",
        "description": "Repositorio de investigación primaria y scripts de Python. Datos reales de SEO para mentes curiosas.",
        "url": "https://calvocreativo.com/lab",
        "provider": {
            "@type": "Person",
            "name": "Roger Calvo",
            "sameAs": [
                "https://www.linkedin.com/in/rogermur/",
                "https://github.com/rogermur"
            ]
        }
    };

    return (
        <div className="min-h-screen bg-[#120810] text-white selection:bg-[#f4258c] selection:text-white font-sans">
            <Head>
                <title>SEO Lab & Vibe Coding | Experimentos de Marketing con IA y Python</title>
                <meta name="description" content="No confíes en la teoría. En el Lab rompemos algoritmos, probamos agentes de IA y compartimos scripts de Python. Datos reales." />
                <link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&family=Shrikhand&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Navigation />

            {/* GEO Definition - Glass Terminal Style */}
            <div className="border-b border-white/10 bg-[#120810] py-2 px-4 text-xs text-[#ccff00] font-mono overflow-x-auto relative z-10">
                <div className="flex items-center gap-2 whitespace-nowrap">
                    <span className="text-[#f4258c]">$</span>
                    <span className="opacity-80">define --entity "Calvo Lab" --context "SEO R&D"</span>
                </div>
            </div>

            <main className="relative overflow-hidden">
                {/* Background Ambient Glows */}
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#f4258c] rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#ccff00] rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>

                {/* Hero Section */}
                <section className="relative pt-20 pb-32 px-6">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="mb-8">
                            <Breadcrumbs theme="acid" />
                        </div>

                        <div className="inline-flex items-center gap-2 border border-[#f4258c]/50 text-[#f4258c] px-4 py-1 text-xs font-mono uppercase tracking-widest mb-8 rounded-full bg-[#f4258c]/10 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-[#f4258c] animate-pulse"></span>
                            Lado B: R&D Facility
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50" style={{ fontFamily: 'Spline Sans, sans-serif' }}>
                            El Laboratorio <br />
                            <span className="text-[#ccff00]" style={{ fontFamily: 'Shrikhand, cursive', fontWeight: 'normal' }}>Experimental</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/60 font-light border-l-2 border-[#f4258c] pl-6 leading-relaxed max-w-3xl mt-8 font-mono">
                            La teoría es aburrida. Los datos son sexys. <br />
                            <span className="text-white">Rompemos algoritmos para ver cómo funcionan.</span>
                        </p>
                    </div>

                    {/* Spotify Widget - Salsa DNA in Acid Mode */}
                    <div className="absolute bottom-10 right-10 z-20 hidden lg:block transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-xs">
                        <SpotifyWidget
                            url="https://open.spotify.com/embed/playlist/1Oes14Ipbh8KQc2BlxNWEl?utm_source=generator"
                            title="Lab Frequency"
                            subtitle="Salsa para romper código"
                            theme="acid"
                        />
                    </div>
                </section>

                {/* Categories (The Tracks) - Glass Cards */}
                <section className="py-20 px-6 border-y border-white/5 bg-white/5 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Fight Club */}
                            <Link href="/lab/seo-fight-club" className="group relative bg-[#181114] border border-white/10 rounded-2xl p-8 hover:border-[#f4258c] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(244,37,140,0.2)] flex flex-col h-full overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f4258c] rounded-full filter blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                <div className="mb-6">
                                    <span className="material-symbols-outlined text-5xl text-[#f4258c]">sports_mma</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#f4258c] transition-colors" style={{ fontFamily: 'Spline Sans, sans-serif' }}>SEO Fight Club</h3>
                                <p className="text-white/50 text-sm mb-8 flex-grow font-mono leading-relaxed">
                                    Enfrentamos teorías contra la realidad. Casos de estudio en tiempo real donde ponemos a prueba al algoritmo.
                                </p>
                                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                                    <span className="text-[#f4258c] text-xs font-bold uppercase tracking-widest">Ver Combates</span>
                                    <span className="material-symbols-outlined text-[#f4258c] text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </Link>

                            {/* Vibe Coding */}
                            <Link href="/lab/vibe-coding" className="group relative bg-[#181114] border border-white/10 rounded-2xl p-8 hover:border-[#ccff00] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] flex flex-col h-full overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ccff00] rounded-full filter blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                <div className="mb-6">
                                    <span className="material-symbols-outlined text-5xl text-[#ccff00]">code</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ccff00] transition-colors" style={{ fontFamily: 'Spline Sans, sans-serif' }}>Vibe Coding</h3>
                                <p className="text-white/50 text-sm mb-8 flex-grow font-mono leading-relaxed">
                                    Scripts de Python y templates. Copia y pega soluciones para automatizar tu SEO sin saber programar.
                                </p>
                                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                                    <span className="text-[#ccff00] text-xs font-bold uppercase tracking-widest">Robar Código</span>
                                    <span className="material-symbols-outlined text-[#ccff00] text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </Link>

                            {/* Opinion */}
                            <Link href="/lab/opinion" className="group relative bg-[#181114] border border-white/10 rounded-2xl p-8 hover:border-[#8b5cf6] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] flex flex-col h-full overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b5cf6] rounded-full filter blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                <div className="mb-6">
                                    <span className="material-symbols-outlined text-5xl text-[#8b5cf6]">psychology</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#8b5cf6] transition-colors" style={{ fontFamily: 'Spline Sans, sans-serif' }}>Deep Dives</h3>
                                <p className="text-white/50 text-sm mb-8 flex-grow font-mono leading-relaxed">
                                    Análisis profundos sobre el futuro de la búsqueda. Por qué el Zero-Click es el inicio del AEO.
                                </p>
                                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                                    <span className="text-[#8b5cf6] text-xs font-bold uppercase tracking-widest">Leer Ensayos</span>
                                    <span className="material-symbols-outlined text-[#8b5cf6] text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Featured Experiment (Frankenstein) */}
                <section className="py-24 px-6 relative">
                    <div className="max-w-5xl mx-auto border border-white/10 bg-[#181114]/50 backdrop-blur-md rounded-3xl p-8 md:p-12 relative overflow-hidden ring-1 ring-white/5">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f4258c] to-transparent opacity-50"></div>

                        <div className="absolute top-6 right-8 flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            <span className="text-xs font-mono uppercase tracking-widest text-white/50">Live Now</span>
                        </div>

                        <h2 className="text-[#ccff00] font-mono text-sm mb-4 flex items-center gap-2 uppercase tracking-widest">
                            <span className="material-symbols-outlined text-lg">biotech</span>
                            Experiment #042
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase text-white mb-6 leading-none" style={{ fontFamily: 'Spline Sans, sans-serif' }}>
                            Proyecto <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4258c] to-[#ccff00]">Frankenstein</span>
                        </h3>
                        <p className="text-white/70 mb-8 max-w-2xl leading-relaxed font-light text-lg">
                            Le dimos a un enjambre de agentes autónomos el control total de un sitio web. <br className="hidden md:block" />
                            <span className="text-white font-bold">Resultado preliminar:</span> Tráfico <span className="text-[#ccff00]">+40%</span>, penalización manual en día 28.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/lab/seo-fight-club/frankenstein" className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase hover:bg-[#ccff00] transition-colors flex items-center gap-2 shadow-lg shadow-white/10 hover:shadow-[#ccff00]/20">
                                Leer Autopsia <span className="material-symbols-outlined text-sm">visibility</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Bridge to Lado A */}
                <section className="py-24 px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'Shrikhand, cursive' }}>¿Te gusta lo que ves?</h2>
                        <p className="text-lg text-white/60 mb-10 leading-relaxed font-mono">
                            No experimentamos con el dinero de los clientes. Experimentamos aquí, para ir a lo seguro contigo. <br />
                            <span className="text-white">Todo lo que aprendemos rompiendo cosas, lo usamos para construir imperios.</span>
                        </p>
                        <Link href="/consultoria" className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-[#f4258c] rounded-full text-white font-bold uppercase tracking-widest hover:bg-[#f4258c]/10 transition-all group">
                            <span className="group-hover:text-[#f4258c] transition-colors">Ir a Lado A</span>
                            <span className="material-symbols-outlined text-[#f4258c] group-hover:translate-x-1 transition-transform">arrow_outward</span>
                        </Link>
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="py-16 px-6 border-t border-white/5 bg-black/40 backdrop-blur-sm text-center">
                    <p className="text-white/40 mb-6 font-mono text-xs uppercase tracking-[0.2em]">&gt; Únete a la Resistencia_</p>
                    <div className="flex justify-center gap-0 max-w-md mx-auto relative group">
                        <div className="absolute inset-0 bg-[#f4258c] rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <input type="email" placeholder="tu@email.com" className="w-full bg-[#120810] border border-white/20 rounded-l-lg px-6 py-4 text-white font-mono text-sm focus:border-[#f4258c] focus:outline-none relative z-10" />
                        <button className="bg-[#f4258c] text-white px-8 font-bold uppercase rounded-r-lg hover:bg-[#d91b76] transition-colors relative z-10 text-sm tracking-widest">
                            Join
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
