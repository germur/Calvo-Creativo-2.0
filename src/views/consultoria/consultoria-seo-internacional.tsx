import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import Link from '@/src/site/Link';

export default function ConsultoriaInternacional() {
    return (
        <ServiceLayout
            title="Consultor SEO Internacional | USA-Latam | Calvo Creativo"
            description="Consultor SEO internacional para empresas de Latinoamérica y Estados Unidos. Investigación por mercado, arquitectura multilingüe, estrategia de contenidos y medición."
            serviceName="Consultoría SEO Internacional"
            geoDefinition="La consultoría SEO internacional ayuda a que un sitio sea descubrible y relevante en distintos mercados e idiomas. Combina investigación de demanda local, arquitectura de URL, hreflang cuando existen versiones equivalentes, contenido adaptado y medición por país. El objetivo es conectar las búsquedas de cada mercado con una oferta comercial adecuada."
            faqItems={[
                { question: "¿Necesito una web diferente para cada país?", answer: "No necesariamente. Depende de tus recursos y objetivos. Los subdirectorios suelen simplificar la gestión en un mismo dominio; los dominios nacionales o subdominios pueden tener sentido por requisitos de negocio, marca o infraestructura. La decisión depende de las versiones existentes y del equipo que las mantendrá." },
                { question: "¿Puede la IA traducir mi contenido para SEO?", answer: "La IA puede ayudar a traducir y generar borradores. Conviene validar vocabulario, intención de búsqueda, exactitud y oferta con conocimiento del mercado. Traducir literalmente no garantiza posicionamiento ni ventas." },
                { question: "¿Cómo compito con empresas locales de EE.UU. si estoy fuera?", answer: "Empieza por distinguir búsquedas nacionales, locales y de contratación remota. La relevancia de la oferta, los contenidos, la evidencia y la arquitectura ayudan a competir; las búsquedas locales también pueden depender de proximidad y presencia real. No hay garantía de superar a competidores locales." },
                { question: "¿Puedo contratar un consultor SEO en Latam para una empresa de Estados Unidos?", answer: "Sí. El trabajo puede hacerse de forma remota, con objetivos, entregables y responsables acordados. Lo importante es definir si buscas captar clientes en Estados Unidos, en Latinoamérica o en ambos mercados, y el alcance de implementación." },
                { question: "¿Cuánto cuesta una consultoría SEO internacional?", answer: "El presupuesto depende del número de mercados e idiomas, el estado técnico del sitio, la producción de contenidos y el alcance de implementación. Primero revisamos la situación y definimos una propuesta de trabajo, sin prometer posiciones ni ventas." }
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
                            Consultor SEO Internacional: <br />
                            <span className="text-[#E11D48]">El puente entre Latam y USA.</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-light mb-8 max-w-lg border-l-4 border-[#E11D48] pl-6">
                            Soy Roger Murillo. Trabajo con empresas de Latinoamérica y Estados Unidos que necesitan posicionarse en su mercado actual o expandirse a uno nuevo. Investigación, arquitectura SEO y estrategia de contenidos adaptadas a cómo busca y decide cada comprador.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contacto" className="h-14 px-8 rounded bg-[#0A0A0A] text-white font-bold uppercase tracking-wide hover:bg-[#E11D48] transition-colors shadow-xl flex items-center">
                                Agendar Sesión de Expansión
                            </Link>
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
                            <h3 className="font-bold text-red-900 mb-2">❌ Traducción Literal</h3>
                            <p className="text-sm text-red-800">"Apartamentos en arriendo"</p>
                            <p className="text-xs text-red-600 mt-1 italic">(Ejemplo de vocabulario habitual en Colombia)</p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                            <h3 className="font-bold text-green-900 mb-2">✅ Intención Cultural</h3>
                            <p className="text-sm text-green-800">"Condos for rent" / "Departamentos de renta"</p>
                            <p className="text-xs text-green-600 mt-1 italic">(Variantes que conviene validar en el mercado de destino)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution: Cross-Border Strategy */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-display font-black mb-4">Consultoría SEO internacional: estrategia para cada mercado</h2>
                    <p className="text-gray-600">Trabajo directo contigo o con tu equipo: definimos qué mercados tienen sentido, cómo organizar la web y qué contenidos necesitan tus compradores.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Hreflang Backbone */}
                    <div className="bg-[#E11D48] text-white p-8 rounded-xl shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-white">language</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Arquitectura Técnica</h3>
                        <p className="text-sm leading-relaxed text-white/90 mb-4">
                            Arquitectura de URL y <strong>hreflang</strong> cuando existan versiones equivalentes por idioma o región, con revisión de canonicals, enlaces internos e indexación. Todo sobre una base de <Link href="/liner-notes/seo-tecnico-era-ia" className="underline hover:text-white/70">SEO técnico sólido</Link>.
                        </p>
                    </div>

                    {/* Spanglish SEO */}
                    <div className="bg-white text-gray-800 p-8 border border-gray-200 rounded-xl hover:border-[#E11D48] transition-colors relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-[#E11D48]">translate</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Spanglish SEO</h3>
                        <p className="text-sm leading-relaxed text-gray-600 mb-4">
                            Investigación de consultas en inglés, español y combinaciones de ambos idiomas para el mercado hispano de Estados Unidos, según la demanda observada.
                        </p>
                    </div>

                    {/* Digital PR */}
                    <div className="bg-white text-gray-800 p-8 border border-gray-200 rounded-xl hover:border-[#E11D48] transition-colors relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-[#E11D48]">campaign</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Autoridad Localizada</h3>
                        <p className="text-sm leading-relaxed text-gray-600 mb-4">
                            Contenido útil y evidencia local relevante para el comprador, con oportunidades de menciones y enlaces editoriales que se ganen por su valor.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white border-y border-gray-200" aria-labelledby="mercados-seo">
                <div className="max-w-6xl mx-auto">
                    <h2 id="mercados-seo" className="text-3xl md:text-5xl font-display font-black mb-6">SEO para empresas en Latinoamérica y Estados Unidos</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mb-10">Contratar un consultor SEO en Latam y hacer SEO internacional no son exactamente lo mismo. El punto de partida es tu objetivo de negocio.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                          ['Consultoría SEO en Latam','Si tu empresa ya opera en Latinoamérica, investigamos el país, la oferta y las búsquedas comerciales relevantes. Priorizamos las páginas que pueden acercar clientes al contacto.'],
                          ['De Estados Unidos hacia Latam','Si tu empresa quiere entrar a México, Colombia u otro mercado, comparamos demanda, competidores, lenguaje y capacidad de atender ese mercado antes de crear versiones locales.'],
                          ['De Latam hacia Estados Unidos','Si necesitas llegar a compradores estadounidenses o al mercado hispano, distinguimos intención en inglés y español, propuesta comercial, cobertura geográfica y rutas de conversión.']
                        ].map(([title,copy]) => <article key={title} className="border border-gray-200 bg-[#F8F5F0] p-6"><h3 className="font-display text-2xl mb-3">{title}</h3><p className="leading-relaxed text-gray-700">{copy}</p></article>)}
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
                            <h3 className="font-bold text-lg mb-2">Auditoría de Internacionalización</h3>
                            <p className="text-sm text-gray-600">Revisamos si tu web actual está lista para cruzar fronteras.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#0A0A0A] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-bold text-lg mb-2">Mapeo de Entidades Locales</h3>
                            <p className="text-sm text-gray-600">Identificamos competidores reales en el país destino.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#0A0A0A] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-bold text-lg mb-2">Despliegue y Monitoreo</h3>
                            <p className="text-sm text-gray-600">Lanzamos la estrategia y medimos adopción por país.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 max-w-6xl mx-auto" aria-labelledby="entregables-seo">
                <h2 id="entregables-seo" className="text-3xl md:text-5xl font-display font-black mb-6">Qué incluye contratar un consultor SEO internacional</h2>
                <p className="text-gray-700 max-w-3xl mb-8">El alcance se acuerda después del diagnóstico. Estos son los entregables que podemos definir según las necesidades del proyecto.</p>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                      ['Estudio de oportunidad por mercado','Consultas, intención, competidores y páginas prioritarias por país o idioma.'],
                      ['Plan técnico internacional','Arquitectura de URL, indexación, canonicals, hreflang y plan de migración si hace falta.'],
                      ['Mapa de contenidos y enlazado','Páginas comerciales, contenidos de soporte y conexiones internas sin duplicar intenciones.'],
                      ['Seguimiento y decisiones','Search Console por país y página; GA4 y contactos cuando la medición esté disponible. Priorización según señales y resultados.']
                    ].map(([title,copy]) => <article key={title} className="border-l-4 border-[#E11D48] bg-white p-6"><h3 className="text-xl font-bold mb-2">{title}</h3><p className="text-gray-700">{copy}</p></article>)}
                </div>
                <p className="mt-8 text-gray-700"><strong>¿Consultor o agencia?</strong> Con un consultor trabajas directamente con quien define el diagnóstico y las prioridades. Una agencia puede resultar adecuada cuando necesitas varios equipos de ejecución a la vez. <Link href="/vs/agencia-tradicional" className="underline text-[#E11D48]">Compara los modelos de trabajo</Link> y revisa el <Link href="/consultoria" className="underline text-[#E11D48]">alcance de la consultoría SEO</Link>.</p>
                <p className="mt-4 text-gray-700">Si estás evaluando la inversión, puedes usar la <Link href="/lab/tools/roi-calculator" className="underline text-[#E11D48]">calculadora de ROI SEO</Link> para modelar escenarios con tus propios datos.</p>
            </section>
            {/* Bridge to Lado B Experiment */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto bg-black text-white p-12 rounded-[2rem] relative overflow-hidden text-center border border-[#E11D48]/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-transparent"></div>
                    <div className="relative z-10">
                        <span className="font-mono text-xs text-blue-400 uppercase tracking-widest mb-4 block">Del Laboratorio (Lado B)</span>
                        <h3 className="text-3xl font-bold mb-4">Experiencia aplicada: del diagnóstico a una web que responde.</h3>
                        <p className="text-white/70 mb-8 max-w-lg mx-auto">
                            Explora cómo se reorganizó una web de servicios con arquitectura SEO, migración a Astro y recorridos hacia el contacto. El caso documenta decisiones y solicitudes registradas, sin atribuirlas a SEO ni presentarlas como resultados de una expansión internacional.
                        </p>
                        <Link href="/casos/rogermurillo" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors">
                            Ver caso de arquitectura y migración
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
