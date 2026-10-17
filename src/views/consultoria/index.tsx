import React from 'react';
import Head from '@/src/site/Head';
import Navigation from '@/src/site/Navigation';
import Footer from '@/src/site/Footer';
import Link from '@/src/site/Link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { cases } from '@/src/cases';

export default function ConsultoriaHub() {
    // CollectionPage & ItemList Schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Consultoría SEO Estratégica & Ingeniería de Búsqueda",
        "description": "Consultoría SEO con Roger Murillo para empresas de USA y Latam: diagnóstico, arquitectura web, contenidos, automatización y un alcance de implementación definido.",
        "url": "https://calvocreativo.com/consultoria",
        "author": {
            "@type": "Person",
            "@id": "https://calvocreativo.com/#roger",
            "name": "Roger Murillo",
            "sameAs": [
                "https://www.linkedin.com/in/rogermur/",
                "https://github.com/germur"
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
                <title>Consultoría SEO: estrategia e implementación | Calvo Creativo</title>
                <meta name="description" content="Trabaja con Roger Murillo en diagnóstico SEO, arquitectura web, contenido y automatización. Conoce el proceso, los entregables y cómo definir tu proyecto." />
                <link rel="canonical" href="https://calvocreativo.com/consultoria" />
                {/* Open Graph + Twitter (tanda 6) */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://calvocreativo.com/consultoria" />
                <meta property="og:title" content="Consultoría SEO: estrategia e implementación | Calvo Creativo" />
                <meta property="og:description" content="Diagnóstico, prioridades y alcance de implementación para tu negocio. Consultoría directa con Roger Murillo para USA y Latam." />
                <meta property="og:image" content="https://calvocreativo.com/api/og?title=Consultoria%20SEO%20B2B%20%26%20Ingenieria%20de%20Busqueda" />
                <meta property="og:site_name" content="Calvo Creativo" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Rogermu47429637" />
                <meta name="twitter:image" content="https://calvocreativo.com/api/og?title=Consultoria%20SEO%20B2B%20%26%20Ingenieria%20de%20Busqueda" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Navigation />

            {/* GEO Definition Block - Marquee Style */}
            <div className="bg-ink text-paper py-3 border-b-4 border-ink overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block font-mono text-xs tracking-widest uppercase">
                    Estrategia SEO // Arquitectura web // Contenido // Automatización // <span className="text-accent">Calvo Creativo</span> //
                </div>
            </div>

            <main>
                {/* Hero Section */}
                <section data-bjj-corner="" className="relative pt-24 pb-32 px-6 overflow-hidden border-b-4 border-ink">
                    <div className="max-w-7xl mx-auto mb-8">
                        <Breadcrumbs theme="light" />
                    </div>
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 z-10">
                            <div className="inline-block bg-primary text-white px-3 py-1 font-mono text-sm uppercase tracking-widest border-2 border-ink shadow-brutal-sm mb-6 rotate-[-2deg]">
                                Lado A: The Master Plan
                            </div>
                            <h1 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] tracking-tighter mb-8 drop-shadow-lg">
                                Consultoría <br />
                                <span className="text-primary">SEO</span>
                            </h1>
                            <h2 className="text-3xl font-display uppercase tracking-tight mb-8">
                                Estrategia e implementación
                            </h2>
                            <p className="text-xl text-ink/80 font-light mb-12 max-w-lg border-l-4 border-primary pl-6 leading-relaxed">
                                Soy Roger Murillo. Trabajo con empresas de servicios y marcas de USA y Latinoamérica para diagnosticar su web, ordenar prioridades y conectar arquitectura, contenido y medición con sus objetivos comerciales.
                            </p>
                            <div className="flex flex-wrap gap-6 items-center">
                                <Link href="/contacto" className="bg-ink text-paper px-6 py-4 font-bold border-2 border-ink shadow-brutal-sm hover:bg-primary transition-colors">Cuéntame tu proyecto →</Link>
                                <a href="#como-trabajamos" className="font-semibold underline underline-offset-4 py-3">Qué incluye el trabajo ↓</a>
                            </div>
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

                <section id="como-trabajamos" className="py-20 px-6 bg-paper border-b-4 border-ink scroll-mt-32" aria-labelledby="proceso-titulo">
                    <div className="max-w-7xl mx-auto">
                        <p className="font-mono text-sm uppercase tracking-widest text-primary mb-4">Del diagnóstico al trabajo</p>
                        <h2 id="proceso-titulo" className="text-4xl md:text-5xl font-display uppercase mb-6">Qué acordamos antes de empezar</h2>
                        <p className="text-lg leading-relaxed max-w-3xl text-ink/80 mb-10">La propuesta parte de tu objetivo, la situación de tu web y los recursos de tu equipo. Estos son los puntos que definimos para que sepas qué vas a recibir y quién se encarga de cada parte.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {title: '01 / Diagnóstico y prioridades', text: 'Qué información necesitamos, qué problemas vamos a revisar y cómo ordenaremos las oportunidades según su relevancia para el negocio.'},
                                {title: '02 / Plan y entregables', text: 'Las tareas, documentos o activos del proyecto: pueden incluir una auditoría, arquitectura, briefs de contenido o un flujo de automatización, según la necesidad.'},
                                {title: '03 / Implementación y responsables', text: 'Qué ejecuto yo, qué necesita tu equipo y qué queda fuera del alcance. Definimos también accesos, dependencias y mantenimiento cuando corresponda.'},
                                {title: '04 / Medición y revisión', text: 'Qué indicadores podremos observar con los datos disponibles: estado técnico, búsquedas, contactos u oportunidades. En IA, las menciones y citas se miden por separado dentro del panel elegido.'},
                            ].map(item => (
                                <article key={item.title} className="bg-white p-7 border-2 border-ink/20">
                                    <h3 className="font-display text-2xl uppercase mb-4">{item.title}</h3>
                                    <p className="text-ink/80 leading-relaxed">{item.text}</p>
                                </article>
                            ))}
                        </div>
                        <p className="text-sm text-ink/70 mt-8 max-w-3xl">Cada proyecto tiene un alcance propio. La propuesta concreta los entregables, el precio y los plazos antes de contratar.</p>
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
                                    Para webs con problemas técnicos o de estructura: diagnóstico de rastreo, indexación, arquitectura y datos estructurados, con prioridades de corrección.
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
                                    Para equipos que publican sin una dirección clara: investigación de compradores, revisión de contenido, arquitectura editorial y un plan de producción.
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
                                    Para equipos con tareas repetitivas: flujos con Python y APIs, reporting y SEO programático cuando hay datos y una necesidad que lo justifica.
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
                                    Para empresas que trabajan entre USA y Latam: investigación por mercado, intención en español e inglés y arquitectura para cada audiencia.
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
                                Trabajas directamente conmigo para entender el problema y decidir qué merece prioridad. Según el alcance, el proyecto puede combinar consultoría, implementación técnica y acompañamiento a tu equipo.
                            </p>
                            <ul className="space-y-4 font-mono font-bold text-ink">
                                <li className="flex items-center gap-3"><span className="bg-ink text-white px-2">01</span> Diagnóstico Basado en Datos.</li>
                                <li className="flex items-center gap-3"><span className="bg-ink text-white px-2">02</span> Construcción de Activos Propietarios.</li>
                                <li className="flex items-center gap-3"><span className="bg-ink text-white px-2">03</span> Seguimiento y revisión de resultados.</li>
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

                <section aria-labelledby="pruebas-titulo" className="py-20 px-6 bg-paper border-b border-ink/20">
                    <div className="max-w-7xl mx-auto">
                        <p className="font-mono text-sm uppercase tracking-widest text-primary mb-4">El trabajo detrás de la oferta</p>
                        <h2 id="pruebas-titulo" className="text-4xl md:text-5xl font-display uppercase mb-6">Decisiones que puedes revisar</h2>
                        <p className="text-lg text-ink/80 max-w-3xl mb-10">Los casos muestran el problema, lo que construimos y el alcance de la evidencia. Una implementación, una solicitud y una venta son resultados distintos.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {cases.filter(item => item.slug === 'rogermurillo' || item.slug === 'german-montenegro').map(item => (
                                <article key={item.slug} className="border-2 border-ink bg-white p-8">
                                    <p className="font-mono text-xs uppercase text-primary mb-4">{item.category}</p>
                                    <h3 className="font-display text-2xl uppercase mb-4">{item.client}</h3>
                                    <p className="text-ink/80 leading-relaxed mb-6">{item.summary}</p>
                                    <p className="font-semibold mb-2">{item.signal}</p>
                                    <p className="text-sm text-ink/70 mb-6">{item.label}</p>
                                    <Link href={`/casos/${item.slug}`} className="font-semibold underline underline-offset-4 decoration-primary py-2 inline-block">Revisar decisiones y evidencia →</Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section aria-labelledby="preguntas-titulo" className="py-20 px-6 max-w-4xl mx-auto">
                    <h2 id="preguntas-titulo" className="text-4xl md:text-5xl font-display uppercase mb-10">Antes de contratar</h2>
                    <div className="space-y-4">
                        {[
                            {question: '¿Cuándo tiene sentido contratarte?', answer: 'Cuando necesitas priorizar problemas de búsqueda, reorganizar tu web o contenido, o implementar un proceso que tu equipo no puede abordar por sí solo. En la conversación inicial revisamos si la necesidad encaja con mi trabajo.'},
                            {question: '¿La consultoría incluye la implementación?', answer: 'Depende del alcance acordado. Podemos trabajar diagnóstico y estrategia, implementación o acompañamiento a tu equipo. La propuesta especifica responsables; la producción de contenido, el desarrollo y el mantenimiento se detallan cuando formen parte del proyecto.'},
                            {question: '¿Cuánto cuesta y qué necesitas para cotizar?', answer: 'El precio se define según el alcance. Para preparar una propuesta, cuéntame tu objetivo, la URL de tu sitio, el mercado al que te diriges y los recursos de tu equipo. Si tienes un presupuesto o una fecha objetivo, inclúyelos.'},
                            {question: '¿Qué diferencia hay frente a contratar una agencia?', answer: 'Aquí trabajas directamente con Roger Murillo. Para comparar opciones, revisa quién hará el trabajo, qué entregables recibirás, qué capacidad de ejecución necesitas y quién mantendrá lo implementado.'},
                            {question: '¿Qué accesos necesita el proyecto?', answer: 'Se definen según las tareas. Para un diagnóstico pueden ser útiles Search Console, Analytics y la información comercial disponible. Una implementación puede requerir CMS, repositorio o hosting; acordamos los permisos necesarios para ese trabajo.'},
                            {question: '¿Cuándo se ven resultados? ¿Garantizas aparecer en IA?', answer: 'Los tiempos dependen del estado inicial, la competencia y lo que se implemente. No garantizo posiciones, citas ni recomendaciones de un modelo. Definimos indicadores y revisamos la evolución; aparecer en una respuesta no equivale a generar una venta.'},
                            {question: '¿Trabajas en español e inglés?', answer: 'Sí, con proyectos de USA y Latinoamérica. La investigación y el contenido se plantean según el mercado y el comprador; el trabajo internacional puede requerir más que traducir las páginas existentes.'},
                        ].map(item => (
                            <details key={item.question} className="bg-white p-6 border-2 border-ink/20">
                                <summary className="cursor-pointer font-semibold text-lg">{item.question}</summary>
                                <p className="text-ink/80 leading-relaxed mt-4">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 text-center px-6 bg-ink text-white border-t-8 border-primary">
                    <h2 className="text-5xl md:text-7xl font-display uppercase mb-6 leading-none">Hablemos de <br />Ingeniería de Crecimiento.</h2>
                    <p className="text-xl text-white/70 font-mono mb-10 max-w-2xl mx-auto">Cuéntame tu objetivo, comparte tu web y explica qué está frenando el proyecto. Con eso podemos definir el siguiente paso.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/contacto" className="inline-flex items-center gap-2 px-12 py-5 bg-primary text-white font-display uppercase text-xl border-4 border-white hover:bg-white hover:text-ink hover:border-primary transition-all shadow-[8px_8px_0px_0px_white] hover:shadow-none hover:translate-y-[4px]">
                            Hablemos de tu proyecto
                            <span className="material-symbols-outlined">calendar_month</span>
                        </Link>
                        <Link href="/lab/tools/roi-calculator" className="inline-flex items-center gap-2 text-white/70 hover:text-accent font-mono text-sm uppercase tracking-wide transition-colors">
                            <span className="material-symbols-outlined text-lg">calculate</span>
                            Calcula el retorno de tu inversión SEO
                        </Link>
                    </div>
                </section>
            <section className="max-w-7xl mx-auto px-6 py-10"><Link href="/fight-card" className="font-bold underline underline-offset-4">Ver la Fight Card: SEO técnico, contenidos y automatización</Link></section>
</main>

            <Footer />
        </div>
    );
}
