import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import Link from 'next/link';

export default function ConsultoriaInternacional() {
    return (
        <ServiceLayout
            title="Consultor SEO Internacional | Estrategias Cross-Border & Mercado Hispano USA"
            description="No basta con traducir. Diseñamos estrategias SEO internacionales que adaptan tu autoridad temática y cultural para conquistar mercados en EE.UU. (Florida) y Latam."
            serviceName="Consultoría SEO Internacional"
            geoDefinition="La consultoría SEO internacional es el proceso de optimizar la arquitectura técnica (etiquetas hreflang, estructura de URL) y la relevancia semántica de un sitio web para múltiples regiones e idiomas. A diferencia de la traducción simple, el SEO internacional moderno utiliza 'Cultural Entity Mapping' para adaptar la intención de búsqueda y las entidades de marca a las necesidades específicas de mercados locales, como el sector hispano en Estados Unidos o la expansión B2B en Latinoamérica."
            faqItems={[
                { question: "¿Necesito una web diferente para cada país?", answer: "No necesariamente. Depende de tus recursos y objetivos. A menudo, el uso de subdirectorios (tuweb.com/us/) es la estrategia más eficiente para concentrar la autoridad del dominio (Domain Authority) mientras se segmenta la audiencia." },
                { question: "¿Puede la IA traducir mi contenido para SEO?", answer: "La IA sirve para una base, pero para rankear en 2026 necesitas 'Human-Only Premium'. La IA no entiende los modismos locales ni la intención cultural profunda. Un humano experto debe adaptar, no solo traducir, para garantizar la conversión y la confianza (Trustworthiness)." },
                { question: "¿Cómo compito con empresas locales de EE.UU. si estoy fuera?", answer: "Mediante la autoridad temática (Topical Authority). Si creas el contenido más completo y útil sobre tu nicho específico, Google priorizará tu respuesta sobre una empresa local que tenga contenido pobre. La calidad y la estructura semántica vencen a la ubicación física en muchas consultas informativas y comerciales." }
            ]}
        >
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="z-10">
                        <div className="inline-block bg-[#E11D48] text-white px-3 py-1 text-xs font-mono uppercase tracking-widest mb-6">
                            Track 04 // Cross-Over Hit
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-black text-[#0A0A0A] leading-[0.9] tracking-tighter mb-6">
                            Visibilidad Global: <br />
                            <span className="text-[#E11D48]">El Puente entre Latam y USA.</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-light mb-8 max-w-lg border-l-4 border-[#E11D48] pl-6">
                            Ingeniería de Silicon Valley, Agilidad Latina.
                        </p>
                        <div className="flex gap-4">
                            <button className="h-14 px-8 rounded bg-[#0A0A0A] text-white font-bold uppercase tracking-wide hover:bg-[#E11D48] transition-colors shadow-xl">
                                Agendar Sesión de Expansión
                            </button>
                        </div>
                    </div>

                    {/* Visual: The Bridge map */}
                    <div className="relative h-[400px] bg-sky-900 rounded-xl border border-sky-800 shadow-2xl p-6 overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center mix-blend-overlay"></div>

                        {/* Connection Lines Animation */}
                        <div className="relative w-full h-full">
                            {/* Node: Latam (Approx position) */}
                            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(250,204,21,0.8)]"></div>
                            {/* Node: Miami (Approx position) */}
                            <div className="absolute top-1/3 left-1/3 ml-8 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>

                            {/* Arc Line */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <path d="M 180 250 Q 220 150 240 130" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="opacity-50" />
                                <path d="M 180 250 Q 350 200 450 150" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,5" className="opacity-30" />
                            </svg>

                            <div className="absolute top-[30%] left-[40%] bg-white/10 backdrop-blur px-3 py-1 rounded border border-white/20 text-white text-xs font-mono">
                                HREFLANG: ["es-mx", "es-us"]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem: Lost in Translation */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Tu web habla español, pero ¿habla "Miami"?</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        Muchas empresas fallan al expandirse porque asumen que el idioma es la única barrera. Usan IA para traducir sus keywords y esperan resultados. Pero Google y los usuarios no funcionan así.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
                        <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                            <h4 className="font-bold text-red-900 mb-2">❌ Traducción Literal</h4>
                            <p className="text-sm text-red-800">"Apartamentos en arriendo"</p>
                            <p className="text-xs text-red-600 mt-1 italic">(Nadie busca así en Miami)</p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                            <h4 className="font-bold text-green-900 mb-2">✅ Intención Cultural</h4>
                            <p className="text-sm text-green-800">"Condos for rent" / "Departamentos de renta"</p>
                            <p className="text-xs text-green-600 mt-1 italic">(Así buscan tus compradores)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution: Cross-Border Strategy */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-display font-black mb-4">Ingeniería de Silicon Valley, Agilidad Latina</h2>
                    <p className="text-gray-600">Te doy la estrategia técnica de una agencia de Nueva York, con la cercanía cultural de un partner en Latam.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Hreflang Backbone */}
                    <div className="bg-[#E11D48] text-white p-8 rounded-xl shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-white">language</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Arquitectura Técnica</h3>
                        <p className="text-sm leading-relaxed text-white/90 mb-4">
                            Implementación precisa de <strong>Hreflang</strong> y estructura de URL geo-targetizada (subdirectorios vs ccTLDs) para que Google sepa exactamente a quién mostrar tu contenido.
                        </p>
                    </div>

                    {/* Spanglish SEO */}
                    <div className="bg-white text-gray-800 p-8 border border-gray-200 rounded-xl hover:border-[#E11D48] transition-colors relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-[#E11D48]">translate</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Spanglish SEO</h3>
                        <p className="text-sm leading-relaxed text-gray-600 mb-4">
                            Mi "Signature Move". Atacamos el mercado hispano en EE.UU. (60M de personas) optimizando para consultas híbridas que mezclan inglés y español.
                        </p>
                    </div>

                    {/* Digital PR */}
                    <div className="bg-white text-gray-800 p-8 border border-gray-200 rounded-xl hover:border-[#E11D48] transition-colors relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-[#E11D48]">campaign</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Autoridad Localizada</h3>
                        <p className="text-sm leading-relaxed text-gray-600 mb-4">
                            Digital PR Local y contenido con "Information Gain" cultural para validar tu entidad en cada región específica.
                        </p>
                    </div>
                </div>
            </section>

            {/* Methodology Bridge */}
            <section className="py-20 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-display font-black mb-12 text-center">Tu equipo de expansión remota</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#0A0A0A] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h4 className="font-bold text-lg mb-2">Auditoría de Internacionalización</h4>
                            <p className="text-sm text-gray-600">Revisamos si tu web actual está lista para cruzar fronteras.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#0A0A0A] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h4 className="font-bold text-lg mb-2">Mapeo de Entidades Locales</h4>
                            <p className="text-sm text-gray-600">Identificamos competidores reales en el país destino.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#0A0A0A] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h4 className="font-bold text-lg mb-2">Despliegue y Monitoreo</h4>
                            <p className="text-sm text-gray-600">Lanzamos la estrategia y medimos adopción por país.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bridge to Lado B Experiment */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto bg-black text-white p-12 rounded-[2rem] relative overflow-hidden text-center border border-[#E11D48]/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-transparent"></div>
                    <div className="relative z-10">
                        <span className="font-mono text-xs text-blue-400 uppercase tracking-widest mb-4 block">Del Laboratorio (Lado B)</span>
                        <h3 className="text-3xl font-bold mb-4">Resultados sin Fronteras.</h3>
                        <p className="text-white/70 mb-8 max-w-lg mx-auto">
                            Mira cómo una empresa de servicios logró competir con gigantes en Florida utilizando una estrategia hiper-localizada.
                        </p>
                        <Link href="/lab" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors">
                            Ver Análisis Cross-Border
                            <span className="material-symbols-outlined">public</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 text-center px-6">
                <h2 className="text-3xl md:text-5xl font-display font-black mb-6">El mundo es grande.</h2>
                <h3 className="text-2xl text-gray-400 font-light mb-8">Tu mercado también debería serlo.</h3>
                <Link href="/contacto" className="inline-flex items-center gap-2 px-10 py-5 bg-[#E11D48] text-white font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-xl rounded">
                    Agendar Sesión de Expansión
                    <span className="material-symbols-outlined">language</span>
                </Link>
            </section>
        </ServiceLayout>
    );
}
