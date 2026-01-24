import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { GetStaticProps, GetStaticPaths } from 'next';
import { industries } from '@/lib/pseo-data';

interface Props {
    industry: typeof industries[0];
}

export default function IndustryPage({ industry }: Props) {
    if (!industry) return null;

    const title = `SEO para ${industry.name} | Estrategia de Posicionamiento Web | Calvo Creativo`;
    const description = `Estrategia SEO especializada en ${industry.name}. Supera a la competencia y escala tu tráfico orgánico con tácticas probadas para el sector ${industry.name}.`;

    return (
        <div className="min-h-screen flex flex-col bg-paper font-sans selection:bg-red-600 selection:text-white">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={`https://calvocreativo.com/industrias/${industry.slug}`} />

                {/* Schema specific to industry needs */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": `SEO para ${industry.name}`,
                            "provider": {
                                "@type": "Organization",
                                "name": "Calvo Creativo",
                                "url": "https://calvocreativo.com"
                            },
                            "description": description,
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD",
                                "description": "Consultoría Inicial Gratuita"
                            }
                        })
                    }}
                />
            </Head>

            <Navigation />

            <main className="pt-32 pb-20">
                {/* Hero */}
                <section className="px-6 md:px-12 mb-20">
                    <div className="max-w-5xl mx-auto">
                        <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs uppercase mb-6 -rotate-1">
                            Sector Specialist // {industry.name}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-black uppercase mb-8 leading-[0.9]">
                            Estrategia SEO para <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">{industry.name}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl border-l-4 border-black pl-6 mb-10">
                            El SEO genérico no funciona en <strong>{industry.name}</strong>. Necesitas una arquitectura diseñada para tu modelo de negocio.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contacto" className="bg-black text-white font-display px-8 py-4 uppercase text-lg shadow-[8px_8px_0px_#dc2626] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                Auditoría de {industry.name} Gratis →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Pain Points & Solution */}
                <section className="py-20 bg-gray-100 border-y-4 border-black px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Pain Points (Left) */}
                        <div className="relative">
                            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-red-600"></div>
                            <h2 className="text-3xl font-display font-bold uppercase mb-8 text-gray-400">El Dolor</h2>
                            <p className="text-2xl font-medium text-black mb-6">
                                "{industry.painPoints}"
                            </p>
                            <p className="text-gray-600">
                                La mayoría de agencias aplicarán las mismas 3 técnicas de siempre. En {industry.name}, eso es tirar el dinero.
                            </p>
                        </div>

                        {/* Strategy (Right) */}
                        <div className="relative">
                            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-green-500"></div>
                            <h2 className="text-3xl font-display font-bold uppercase mb-8 text-gray-400">La Cura</h2>
                            <p className="text-2xl font-medium text-black mb-6">
                                {industry.strategy}
                            </p>
                            <p className="text-gray-600">
                                Mi enfoque se centra en <strong>{industry.schemaFocus}</strong> y tácticas de autoridad específicas para dominar tu nicho.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-6 max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-display font-black uppercase mb-8">¿Listo para dominar {industry.name}?</h2>
                    <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
                        Deja de competir por las migajas que dejan los gigantes. Construye tu propia autoridad temática.
                    </p>
                    <Link href="/contacto" className="inline-block bg-black text-white px-10 py-5 rounded-full font-bold uppercase hover:scale-105 transition-transform">
                        Hablar con un Experto en {industry.name}
                    </Link>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = industries.map((ind) => ({
        params: { industry: ind.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const industry = industries.find((i) => i.slug === params?.industry);
    return {
        props: {
            industry,
        },
    };
};
