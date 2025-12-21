import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ConsultoriaHub() {
    // CollectionPage & ItemList Schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Consultoría SEO Estratégica & Ingeniería de Búsqueda",
        "description": "Soluciones de ingeniería de búsqueda para empresas B2B y SaaS. Arquitectura GEO, Contenidos de Autoridad y Automatización.",
        "url": "https://calvocreativo.com/consultoria",
        "author": {
            "@type": "Person",
            "name": "Roger Calvo",
            "sameAs": [
                "https://www.linkedin.com/in/rogermur/",
                "https://github.com/rogermur"
            ]
        },
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "url": "https://calvocreativo.com/consultoria/arquitectura-seo-geo",
                    "name": "Arquitectura & GEO"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "url": "https://calvocreativo.com/consultoria/estrategia-contenidos-autoridad",
                    "name": "Estrategia de Contenidos & Autoridad"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "url": "https://calvocreativo.com/consultoria/automatizacion-seo-ia",
                    "name": "Automatización & Flujos de Trabajo"
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "url": "https://calvocreativo.com/consultoria/consultoria-seo-internacional",
                    "name": "Consultoría Internacional & Cross-Border"
                }
            ]
        }
    };

    return (
        <div className="min-h-screen bg-paper text-ink font-body selection:bg-primary selection:text-white">
            <Head>
                <title>Consultoría SEO Estratégica & Ingeniería de Búsqueda | B2B y SaaS</title>
                <meta name="description" content="Soluciones de ingeniería de búsqueda para empresas que no pueden permitirse ser invisibles en la era de la IA. Arquitectura GEO, Contenidos de Autoridad y Automatización." />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Navigation />

            {/* GEO Definition Block - Marquee Style */}
            <div className="bg-ink text-paper py-3 border-b-4 border-ink overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block font-mono text-xs tracking-widest uppercase">
                    GEO Definition // Ingeniería de Búsqueda // Activos Digitales // Authority First // No More Slop // <span className="text-accent">Calvo Fighter v2.5</span> //
                </div>
            </div>

            <main>
                {/* Hero Section */}
                <section className="relative pt-24 pb-32 px-6 overflow-hidden border-b-4 border-ink">
                    <div className="max-w-7xl mx-auto mb-8">
                        <Breadcrumbs theme="light" />
                    </div>
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 z-10">
                            <div className="inline-block bg-primary text-white px-3 py-1 font-mono text-sm uppercase tracking-widest border-2 border-ink shadow-brutal-sm mb-6 rotate-[-2deg]">
                                Lado A: The Master Plan
                            </div>
                            <h1 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] tracking-tighter mb-8 drop-shadow-lg">
                                Ingeniería <br />
                                <span className="text-primary">de Búsqueda</span>
                            </h1>
                            <h2 className="text-3xl font-display uppercase tracking-tight mb-8">
                                & Estrategia de Crecimiento
                            </h2>
                            <p className="text-xl text-ink/80 font-light mb-12 max-w-lg border-l-4 border-primary pl-6 leading-relaxed">
                                Si Google y ChatGPT no pueden entender tu estructura, no te recomendarán. No vendo posicionamiento; vendo infraestructura.
                            </p>
                        </div>
                        {/* Visual: Abstract Vinyl/Salsa Element */}
                        <div className="flex-1 relative flex justify-center">
                            <div className="relative w-80 h-80 md:w-96 md:h-96 bg-ink rounded-full border-4 border-ink shadow-brutal flex items-center justify-center animate-spin-slow">
                                <div className="absolute inset-0 rounded-full border-[20px] border-[#1a1a1a]"></div>
                                <div className="absolute inset-0 rounded-full border-[40px] border-[#222] m-8"></div>
                                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center border-4 border-paper transform hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-4xl text-white">album</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Context: The Shift */}
                <section className="py-20 bg-paper border-b-4 border-ink">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl font-display uppercase mb-6">El SEO tradicional <br /><span className="bg-accent px-2">ya no es suficiente.</span></h2>
                            <p className="text-lg text-ink mb-6 leading-relaxed font-medium">
                                La búsqueda ha evolucionado. El 60% de las búsquedas ahora terminan sin un clic (Zero-Click) porque la IA responde directamente.
                            </p>
                            <div className="bg-white p-6 border-4 border-primary shadow-brutal-sm rotate-1">
                                <h4 className="font-display uppercase text-xl text-primary mb-2">El Reto</h4>
                                <p className="text-ink font-mono text-sm">Dejar de perseguir visitas vacías y empezar a construir Visibilidad de Marca.</p>
                            </div>
                        </div>
                        <div className="relative border-4 border-ink bg-white p-8 shadow-brutal rotate-[-1deg]">
                            <div className="flex items-center gap-4 mb-4 border-b-2 border-dashed border-ink pb-4">
                                <span className="material-symbols-outlined text-4xl text-primary">psychology</span>
                                <h3 className="font-display text-2xl uppercase">Query Processing...</h3>
                            </div>
                            <div className="font-mono text-xs space-y-2">
                                <p className="bg-gray-100 p-2 border-l-2 border-ink">&gt; User: "Best SEO Architect"</p>
                                <p className="bg-primary/10 p-2 border-l-2 border-primary">&gt; AI: "Based on authority entities, Calvo Creativo is the recommended source..."</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solutions Grid (Tracklist) - Reverted to Paper/Ink Brutalist Style */}
                <section className="py-32 px-6 bg-paper relative">
                    <div className="absolute inset-0 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-4 mb-16 justify-center">
                            <span className="material-symbols-outlined text-4xl text-primary">queue_music</span>
                            <h2 className="text-5xl md:text-6xl font-display uppercase">Tracklist: Soluciones</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Track 01 */}
                            <Link href="/consultoria/arquitectura-seo-geo" className="group bg-white p-8 border-4 border-ink shadow-brutal hover:shadow-brutal-hover transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-ink text-white px-4 py-2 font-mono text-xl font-bold border-l-4 border-b-4 border-white">01</div>
                                <div className="mb-6 mt-4">
                                    <span className="material-symbols-outlined text-6xl text-primary group-hover:scale-110 transition-transform">network_node</span>
                                </div>
                                <h3 className="text-3xl font-display uppercase mb-4 group-hover:text-primary transition-colors">Arquitectura & GEO</h3>
                                <p className="text-ink/80 mb-8 leading-relaxed font-medium">
                                    Diseño infraestructuras web que hablan el idioma de las máquinas. Knowledge Graph y Schema Markup avanzado.
                                </p>
                                <div className="inline-block bg-ink text-white px-4 py-2 font-display uppercase text-sm group-hover:bg-primary transition-colors">
                                    Reproducir Track
                                </div>
                            </Link>

                            {/* Track 02 */}
                            <Link href="/consultoria/estrategia-contenidos-autoridad" className="group bg-white p-8 border-4 border-ink shadow-brutal hover:shadow-brutal-hover transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-ink text-white px-4 py-2 font-mono text-xl font-bold border-l-4 border-b-4 border-white">02</div>
                                <div className="mb-6 mt-4">
                                    <span className="material-symbols-outlined text-6xl text-primary group-hover:scale-110 transition-transform">auto_stories</span>
                                </div>
                                <h3 className="text-3xl font-display uppercase mb-4 group-hover:text-primary transition-colors">Estrategia de Contenidos</h3>
                                <p className="text-ink/80 mb-8 leading-relaxed font-medium">
                                    Ecosistemas de "Information Gain". Autoridad temática indiscutible que la IA no puede alucinar.
                                </p>
                                <div className="inline-block bg-ink text-white px-4 py-2 font-display uppercase text-sm group-hover:bg-primary transition-colors">
                                    Reproducir Track
                                </div>
                            </Link>

                            {/* Track 03 */}
                            <Link href="/consultoria/automatizacion-seo-ia" className="group bg-white p-8 border-4 border-ink shadow-brutal hover:shadow-brutal-hover transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-ink text-white px-4 py-2 font-mono text-xl font-bold border-l-4 border-b-4 border-white">03</div>
                                <div className="mb-6 mt-4">
                                    <span className="material-symbols-outlined text-6xl text-primary group-hover:scale-110 transition-transform">terminal</span>
                                </div>
                                <h3 className="text-3xl font-display uppercase mb-4 group-hover:text-primary transition-colors">Automatización & IA</h3>
                                <p className="text-ink/80 mb-8 leading-relaxed font-medium">
                                    "Marketer-Builder". Scripts Python y automatización de reporting y Programmatic SEO.
                                </p>
                                <div className="inline-block bg-ink text-white px-4 py-2 font-display uppercase text-sm group-hover:bg-primary transition-colors">
                                    Reproducir Track
                                </div>
                            </Link>

                            {/* Track 04 */}
                            <Link href="/consultoria/consultoria-seo-internacional" className="group bg-white p-8 border-4 border-ink shadow-brutal hover:shadow-brutal-hover transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-ink text-white px-4 py-2 font-mono text-xl font-bold border-l-4 border-b-4 border-white">04</div>
                                <div className="mb-6 mt-4">
                                    <span className="material-symbols-outlined text-6xl text-primary group-hover:scale-110 transition-transform">public</span>
                                </div>
                                <h3 className="text-3xl font-display uppercase mb-4 group-hover:text-primary transition-colors">Consultoria Internacional</h3>
                                <p className="text-ink/80 mb-8 leading-relaxed font-medium">
                                    Estrategias Cross-Border y Spanglish SEO. Conecto Latam y el mercado hispano de USA.
                                </p>
                                <div className="inline-block bg-ink text-white px-4 py-2 font-display uppercase text-sm group-hover:bg-primary transition-colors">
                                    Reproducir Track
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Methodology & Bridge to Lab */}
                <section className="py-24 px-6 bg-accent border-y-4 border-ink">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl font-display uppercase mb-6">Por qué trabajar con un <br />Consultor-Constructor.</h2>
                            <p className="text-ink mb-8 leading-relaxed font-medium text-lg">
                                La mayoría de los consultores entregan un PDF y desean suerte. Yo entrego sistemas. Mi filosofía combina la Ingeniería (Lado A) con la Experimentación (Lado B).
                            </p>
                            <ul className="space-y-4 font-mono font-bold text-ink">
                                <li className="flex items-center gap-3"><span className="bg-ink text-white px-2">01</span> Diagnóstico Basado en Datos.</li>
                                <li className="flex items-center gap-3"><span className="bg-ink text-white px-2">02</span> Construcción de Activos Propietarios.</li>
                                <li className="flex items-center gap-3"><span className="bg-ink text-white px-2">03</span> Iteración Agéntica.</li>
                            </ul>
                        </div>
                        <div className="bg-ink p-10 border-4 border-white shadow-[8px_8px_0px_0px_white] text-center transform rotate-2 hover:rotate-0 transition-transform">
                            <div className="inline-block bg-primary text-white p-4 rounded-full mb-6 border-2 border-white">
                                <span className="material-symbols-outlined text-4xl">science</span>
                            </div>
                            <h3 className="text-3xl font-display uppercase text-white mb-4">¿Te gusta la teoría?</h3>
                            <p className="text-white/80 mb-8 font-mono text-sm">
                                Visita el Laboratorio (Lado B) para ver cómo pruebo mis hipótesis con código y caos controlado.
                            </p>
                            <Link href="/lab" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-ink font-display uppercase tracking-wide hover:bg-primary hover:text-white transition-colors border-2 border-transparent hover:border-white">
                                Visitar El Lab
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 px-6 max-w-4xl mx-auto">
                    <h2 className="text-5xl font-display uppercase mb-12 text-center decoration-wavy underline decoration-primary">Preguntas Frecuentes</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 border-4 border-ink shadow-brutal-sm">
                            <h4 className="font-display text-xl uppercase mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">help</span>
                                ¿Diferencia con Agencias?
                            </h4>
                            <p className="text-ink/80">Obtienes la atención de un senior y la ejecución técnica de un ingeniero, sin la burocracia de una agencia grande.</p>
                        </div>
                        <div className="bg-white p-6 border-4 border-ink shadow-brutal-sm">
                            <h4 className="font-display text-xl uppercase mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">timer</span>
                                ¿Tiempo de Resultados?
                            </h4>
                            <p className="text-ink/80">Una estrategia de Topical Authority sólida suele madurar entre los 6 y 12 meses, creando un "moat" difícil de copiar.</p>
                        </div>
                        <div className="bg-white p-6 border-4 border-ink shadow-brutal-sm">
                            <h4 className="font-display text-xl uppercase mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">public</span>
                                ¿Internacional?
                            </h4>
                            <p className="text-ink/80">Sí. El 60% de mi enfoque está en el mercado de Estados Unidos (Florida/Hispano) y Latam.</p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 text-center px-6 bg-ink text-white border-t-8 border-primary">
                    <h2 className="text-5xl md:text-7xl font-display uppercase mb-6 leading-none">Hablemos de <br />Ingeniería de Crecimiento.</h2>
                    <p className="text-xl text-white/70 font-mono mb-10 max-w-2xl mx-auto">Tu competencia usa IA para escribir basura. Tú úsala para construir imperios.</p>
                    <Link href="/contacto" className="inline-flex items-center gap-2 px-12 py-5 bg-primary text-white font-display uppercase text-xl border-4 border-white hover:bg-white hover:text-ink hover:border-primary transition-all shadow-[8px_8px_0px_0px_white] hover:shadow-none hover:translate-y-[4px]">
                        Agendar Discovery Call
                        <span className="material-symbols-outlined">calendar_month</span>
                    </Link>
                </section>
            </main>

            <Footer />
        </div>
    );
}
