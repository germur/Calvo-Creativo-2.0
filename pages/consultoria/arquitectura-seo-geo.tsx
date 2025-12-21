import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import Link from 'next/link';

export default function ArquitecturaSeoGeo() {
    return (
        <ServiceLayout
            title="Arquitectura Web SEO & GEO | Diseño para Visibilidad en Google y ChatGPT"
            description="No dejes que la IA ignore tu marca. Diseñamos la infraestructura semántica (Schema, Entidades, Grafos de Conocimiento) para que tu web sea entendida por Google, Perplexity y LLMs."
            serviceName="Arquitectura SEO & GEO"
            geoDefinition="La Arquitectura GEO (Generative Engine Optimization) es la ingeniería de la estructura de un sitio web enfocada en la comprensión de máquinas. A diferencia del SEO tradicional, que organiza el contenido para palabras clave, la arquitectura GEO utiliza Grafos de Conocimiento y marcado de datos estructurados (Schema) para definir 'Entidades' (personas, lugares, conceptos) y sus relaciones. El objetivo es facilitar que los Modelos de Lenguaje (LLMs) como ChatGPT, Gemini y Perplexity rastreen, comprendan y citen el contenido de una marca como una fuente de verdad confiable."
            faqItems={[
                { question: "¿El SEO técnico tradicional ha muerto?", answer: "No, ha evolucionado. El rastreo y la indexación siguen siendo la base. Si Google no puede ver tu página (robots.txt, errores 404), la IA tampoco podrá. GEO es una capa sobre el SEO técnico tradicional, no un reemplazo." },
                { question: "¿Por qué necesito Schema si ya tengo buen contenido?", answer: "El contenido es para humanos; el Schema es para máquinas. Un estudio de Data World mostró que los LLMs que utilizan datos conectados a grafos de conocimiento logran un 300% más de precisión que los que solo leen texto plano. Sin Schema, dependes de que la IA 'adivine' tu contenido." },
                { question: "¿Cuánto tarda en notarse el impacto de la Arquitectura GEO?", answer: "La reindexación de datos estructurados puede ser rápida (semanas), pero construir autoridad de entidad lleva tiempo. Sin embargo, arreglar la estructura técnica suele dar los resultados más rápidos en términos de recuperación de tráfico y mejora de CTR en resultados ricos." }
            ]}
        >
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="z-10">
                        <div className="inline-block bg-[#E11D48] text-white px-3 py-1 text-xs font-mono uppercase tracking-widest mb-6">
                            Track 01 // The Backbone
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-black text-[#0A0A0A] leading-[0.9] tracking-tighter mb-6">
                            Arquitectura SEO & GEO: <br />
                            <span className="text-[#E11D48]">Infraestructura para la Era Agéntica.</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-light mb-8 max-w-lg border-l-4 border-[#E11D48] pl-6">
                            Si ChatGPT no te entiende, no te recomienda.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contacto" className="inline-block">
                                <button className="h-14 px-8 rounded bg-[#0A0A0A] text-white font-bold uppercase tracking-wide hover:bg-[#E11D48] transition-colors shadow-xl">
                                    Solicitar Auditoría Técnica
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Visual: Knowledge Graph Node Network */}
                    <div className="relative h-[400px] bg-[#1a1a1a] rounded-xl border border-gray-800 shadow-2xl p-6 overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse"></div>

                        {/* Network Animation */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Central Node (Your Brand) */}
                            <div className="w-16 h-16 bg-[#E11D48] rounded-full flex items-center justify-center text-white font-bold z-10 shadow-[0_0_30px_rgba(225,29,72,0.6)] animate-bounce">
                                ROOT
                            </div>

                            {/* Satellite Nodes */}
                            <div className="absolute top-1/4 left-1/4 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-xs text-white z-0">
                                Product
                            </div>
                            <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-xs text-white z-0">
                                CEO
                            </div>
                            <div className="absolute top-1/4 right-1/4 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-xs text-white z-0">
                                Location
                            </div>

                            {/* Connecting Lines (SVG) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="white" strokeWidth="1" className="opacity-30" />
                                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="white" strokeWidth="1" className="opacity-30" />
                                <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="white" strokeWidth="1" className="opacity-30" />
                            </svg>

                            <div className="absolute bottom-4 left-4 font-mono text-xs text-green-400">
                                &lt;script type="application/ld+json"&gt; ... &lt;/script&gt;
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem: Invisible to Agents */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Tu web es un "documento plano" para la IA</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        Internet ha cambiado. El 60% de las búsquedas en 2026 terminan sin un clic ("Zero-Click"). Los usuarios obtienen respuestas directas de la IA. Si tu sitio sigue estructurado como en 2020 (solo HTML), eres invisible.
                    </p>
                    <div className="bg-orange-50 p-6 rounded-lg text-left max-w-2xl mx-auto border border-orange-100">
                        <h4 className="font-bold mb-3 uppercase text-xs tracking-widest text-orange-900">El Riesgo Real:</h4>
                        <p className="text-orange-800 text-sm">
                            Perder la autoridad temática frente a competidores que sí "hablan el idioma" de los LLMs. Tienes tráfico, pero tus menciones en búsquedas conversacionales son nulas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Solution: Semantic Engineering */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-display font-black mb-4">Ingeniería de Búsqueda Semántica</h2>
                    <p className="text-gray-600">Construimos "Reasoning Readiness". Transformamos tu sitio en una entidad viva que las máquinas procesan.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Entity First */}
                    <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-shadow group">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:bg-[#E11D48] group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">network_node</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Entity-First Strategy</h3>
                        <p className="text-sm text-gray-600">
                            Los motores ya no buscan cadenas de texto ("strings"), buscan cosas ("things"). Mapeamos las entidades que definen tu negocio (CEO, Servicios) en el Knowledge Graph.
                        </p>
                    </div>

                    {/* Aggressive Schema */}
                    <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-shadow group">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:bg-[#E11D48] group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">code</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Schema JSON-LD</h3>
                        <p className="text-sm text-gray-600">
                            Implementamos esquemas anidados profundos: Organization, Person (E-E-A-T), Service, y FAQ para alimentar directamente los resúmenes de IA.
                        </p>
                    </div>

                    {/* Semantic Silos */}
                    <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-shadow group">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:bg-[#E11D48] group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">account_tree</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Silos Semánticos</h3>
                        <p className="text-sm text-gray-600">
                            Hub & Spoke. Organizamos tu contenido por relevancia temática, no por fecha, distribuyendo la autoridad (Link Juice) de forma lógica.
                        </p>
                    </div>
                </div>
            </section>

            {/* UX / Core Web Vitals */}
            <section className="py-20 bg-black text-white px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-display font-black mb-6">Velocidad para el usuario, <br /><span className="text-[#ccff00]">Claridad para el bot.</span></h2>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-[#ccff00]">speed</span>
                                <div>
                                    <h4 className="font-bold">Core Web Vitals (INP)</h4>
                                    <p className="text-sm text-white/60">Si tu sitio tarda en responder, la IA asume mala experiencia.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-[#ccff00]">javascript</span>
                                <div>
                                    <h4 className="font-bold">Rendering para IA</h4>
                                    <p className="text-sm text-white/60">Aseguramos que tu JavaScript sea accesible para crawlers con poco presupuesto.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        {/* Visual Speedometer Concept */}
                        <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden relative">
                            <div className="absolute top-0 left-0 h-full w-[98%] bg-[#ccff00] shadow-[0_0_15px_#ccff00]"></div>
                        </div>
                        <div className="flex justify-between text-xs font-mono text-gray-500 mt-2">
                            <span>0s</span>
                            <span>INP &lt; 200ms</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bridge to Lado B Experiment */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto bg-gray-100 text-black p-12 rounded-[2rem] relative overflow-hidden text-center border border-gray-200">
                    <div className="relative z-10">
                        <span className="font-mono text-xs text-[#E11D48] uppercase tracking-widest mb-4 block">Del Laboratorio (Lado B)</span>
                        <h3 className="text-3xl font-bold mb-4">No es teoría, es código.</h3>
                        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                            Mira cómo un cambio en el marcado JSON-LD aumentó la visibilidad en Perplexity un 40% sin crear contenido nuevo.
                        </p>
                        <Link href="/lab" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold uppercase tracking-wide hover:bg-[#E11D48] transition-colors">
                            Ver Experimento Schema
                            <span className="material-symbols-outlined">experiment</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 text-center px-6">
                <h2 className="text-3xl md:text-5xl font-display font-black mb-6">¿Tu web habla el idioma del futuro?</h2>
                <h3 className="text-2xl text-gray-400 font-light mb-8">Auditemos tu arquitectura hoy.</h3>
                <Link href="/contacto" className="inline-flex items-center gap-2 px-10 py-5 bg-[#E11D48] text-white font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-xl rounded">
                    Solicitar Auditoría
                    <span className="material-symbols-outlined">build</span>
                </Link>
            </section>
        </ServiceLayout>
    );
}
