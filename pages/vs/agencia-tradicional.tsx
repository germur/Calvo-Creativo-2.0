import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { trackEvent } from '@/lib/analytics';

export default function AgencyComparison() {
    const comparisonSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Calvo Creativo vs Agencia SEO Tradicional",
        "description": "Comparativa honesta: Por qué las agencias tradicionales fallan y cómo mi modelo de Ingeniería de Búsqueda es diferente.",
        "mainEntity": {
            "@type": "Table",
            "about": "Comparativa de Modelos de Servicio SEO"
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-paper font-sans selection:bg-red-600 selection:text-white">
            <Head>
                <title>Calvo Creativo vs Agencia Tradicional | La Verdad Incómoda</title>
                <meta name="description" content="No contrates una agencia SEO hasta leer esto. Descubre por qué el modelo tradicional está roto y cómo la ingeniería de búsqueda real te ahorra dinero." />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
                />
            </Head>

            <Navigation />

            <main className="pt-32 pb-20">
                {/* Hero */}
                <section className="px-6 md:px-12 mb-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs uppercase mb-6 -rotate-1">
                            Versus // La Comparativa
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase mb-8 leading-[0.9]">
                            No contrates una <span className="line-through decoration-red-600 decoration-4 text-gray-400">Agencia Tradicional</span><br />
                            hasta leer esto.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto mb-10">
                            Las agencias tradicionales te alquilan juniors. Yo construyo activos. <br />
                            <strong>Entiende la diferencia antes de firmar un contrato de 12 meses.</strong>
                        </p>
                    </div>
                </section>

                {/* The Comparison Table */}
                <section className="px-4 md:px-12 mb-24">
                    <div className="max-w-6xl mx-auto bg-white border-4 border-black shadow-[12px_12px_0px_#000] overflow-hidden">
                        <div className="grid grid-cols-3 bg-black text-white font-mono text-xs md:text-sm uppercase tracking-widest border-b-4 border-black">
                            <div className="p-4 md:p-6 border-r border-gray-800 flex items-center">Feature</div>
                            <div className="p-4 md:p-6 border-r border-gray-800 bg-gray-900 flex items-center justify-center text-center text-gray-400">
                                Agencia Tradicional 🏢
                            </div>
                            <div className="p-4 md:p-6 bg-red-600 flex items-center justify-center text-center font-bold">
                                Calvo Creativo 🧠
                            </div>
                        </div>

                        {/* Rows */}
                        {[
                            {
                                feature: "Tu Contacto Principal",
                                agency: "Account Manager (Vendedor)",
                                me: "Ingeniero/Estratega (Hacedor)"
                            },
                            {
                                feature: "Estrategia",
                                agency: "Checklist Genérico (Copy-Paste)",
                                me: "Ingeniería Inversa + GEO"
                            },
                            {
                                feature: "Reportes",
                                agency: "PDFs automáticos de Semrush",
                                me: "Dashboards de Negocio (Revenue)"
                            },
                            {
                                feature: "Velocidad",
                                agency: "Lenta (Burocracia Interna)",
                                me: "Rápida (Directo al Código)"
                            },
                            {
                                feature: "Incentivo Real",
                                agency: "Mantenerte pagando para siempre",
                                me: "Que no me necesites en 6 meses"
                            }
                        ].map((row, i) => (
                            <div key={i} className="grid grid-cols-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                                <div className="p-4 md:p-6 border-r border-gray-200 font-bold font-display uppercase flex items-center text-sm md:text-base">
                                    {row.feature}
                                </div>
                                <div className="p-4 md:p-6 border-r border-gray-200 text-gray-500 flex items-center justify-center text-center text-sm md:text-base">
                                    {row.agency}
                                </div>
                                <div className="p-4 md:p-6 font-medium flex items-center justify-center text-center bg-red-50/30 text-sm md:text-base">
                                    {row.me}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* The "Why" - Deep Dive */}
                <section className="py-20 bg-gray-100 border-y-4 border-black px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-display font-black uppercase mb-12 text-center">¿Por qué el modelo de agencia está roto?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="font-bold text-xl uppercase border-b-2 border-red-600 pb-2 inline-block">1. El Overhead te mata</h3>
                                <p className="text-gray-700">
                                    Cuando pagas $3,000/mes a una agencia grande, $2,000 van a pagar sus oficinas lujosas, la mesa de ping-pong y los salarios de los directivos que nunca tocan tu cuenta. Solo $500 van al trabajo real.
                                </p>
                                <p className="text-gray-700 font-bold">
                                    Conmigo, pagas por cerebro, no por ladrillos.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="font-bold text-xl uppercase border-b-2 border-red-600 pb-2 inline-block">2. El "Junior" Dilemma</h3>
                                <p className="text-gray-700">
                                    El senior te vende, pero el junior ejecuta. Tu estrategia queda en manos de alguien que aprendió SEO hace 3 meses con un curso de Udemy.
                                </p>
                                <p className="text-gray-700 font-bold">
                                    Aquí no hay intermediarios. Yo diseño, yo audito, yo ejecuto.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who is this for? */}
                <section className="py-24 px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="bg-gray-50 p-8 border-2 border-gray-200 opacity-70 grayscale hover:grayscale-0 transition-all">
                            <h3 className="font-display font-bold uppercase text-2xl mb-6 text-gray-500">Elige a la Agencia Si...</h3>
                            <ul className="space-y-4 list-disc pl-5 text-gray-600">
                                <li>Necesitas "culpables" para reportar a una junta directiva corporativa.</li>
                                <li>Prefieres reuniones semanales de 2 horas sobre "status" en lugar de trabajo real.</li>
                                <li>Te importa más la cantidad de entregables (PDFs) que el impacto en ingresos.</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_#dc2626] relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 font-mono text-xs uppercase font-bold">Recomendado</div>
                            <h3 className="font-display font-bold uppercase text-2xl mb-6 text-black">Elígeme a Mí Si...</h3>
                            <ul className="space-y-4 list-disc pl-5 text-black font-medium">
                                <li>Eres un Fundador, CMO o VP que necesita mover la aguja de ingresos.</li>
                                <li>Estás harto de explicarle tu negocio a un Account Manager nuevo cada mes.</li>
                                <li>Quieres una estrategia técnica a prueba de futuros cambios de IA (GEO).</li>
                            </ul>
                            <div className="mt-8">
                                <Link
                                    href="/contacto"
                                    onClick={() => trackEvent('click_schedule_audit', 'Conversion', 'Comparison Best Choice')}
                                    className="block w-full text-center bg-black text-white font-display uppercase py-4 hover:bg-neutral-800 transition-colors"
                                >
                                    Solicitar Auditoría Estratégica →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 bg-black text-white text-center px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-display font-black uppercase mb-8">¿Listo para dejar de alquilar y empezar a construir?</h2>
                        <p className="text-xl text-gray-400 mb-12">
                            Tengo cupo para <strong>2 nuevos clientes</strong> este mes. Si buscas calidad artesanal en lugar de "comida rápida" SEO, hablemos.
                        </p>
                        <Link
                            href="/contacto"
                            onClick={() => trackEvent('click_schedule_audit', 'Conversion', 'Comparison Footer CTA')}
                            className="inline-block bg-white text-black font-display text-xl uppercase px-12 py-5 rounded-full hover:scale-105 transition-transform"
                        >
                            Quiero hablar contigo
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
