import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { GetStaticProps, GetStaticPaths } from 'next';
import { cities } from '@/lib/pseo-data';

interface Props {
    city: typeof cities[0];
}

export default function CityPage({ city }: Props) {
    if (!city) return null;

    const title = `Consultor SEO ${city.name} | Agencia SEO Experta en ${city.country} | Calvo Creativo`;
    const description = `Domina las búsquedas en ${city.name}. Estrategia SEO técnica y creativa para superar a la competencia en ${city.country}. Auditoría gratuita.`;

    return (
        <div className="min-h-screen flex flex-col bg-paper font-sans selection:bg-red-600 selection:text-white">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={`https://calvocreativo.com/seo/${city.slug}`} />

                {/* Local Business Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": `Consultoría SEO ${city.name}`,
                            "provider": {
                                "@type": "Organization",
                                "name": "Calvo Creativo",
                                "url": "https://calvocreativo.com"
                            },
                            "areaServed": {
                                "@type": "City",
                                "name": city.name,
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressCountry": city.country
                                }
                            },
                            "description": description,
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD",
                                "description": "Auditoría SEO Inicial Gratuita"
                            }
                        })
                    }}
                />
            </Head>

            <Navigation />

            <main className="pt-32 pb-20">
                {/* Hero */}
                <section className="px-6 md:px-12 mb-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs uppercase mb-6">
                            SEO Local // {city.country}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-black uppercase mb-8 leading-[0.9]">
                            Consultor SEO <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">{city.demonym}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl border-l-4 border-black pl-6 mb-10">
                            Tu competencia en <strong>{city.name}</strong> está dormida o vendiendo humo. Vamos a despertarlos.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contacto" className="bg-black text-white font-display px-8 py-4 uppercase text-lg shadow-[8px_8px_0px_#dc2626] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                Agendar Auditoría en {city.name} →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Local Context Section */}
                <section className="py-20 bg-gray-100 border-y-4 border-black px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-display font-bold uppercase mb-6">El Mercado en {city.name}</h2>
                            <div className="space-y-8">
                                <div className="bg-white p-6 border-2 border-black shadow-brutal">
                                    <h3 className="font-mono text-xs font-bold uppercase text-red-600 mb-2">El Problema</h3>
                                    <p className="text-gray-700 font-medium">{city.marketChallenges}</p>
                                </div>
                                <div className="bg-white p-6 border-2 border-black shadow-brutal">
                                    <h3 className="font-mono text-xs font-bold uppercase text-green-600 mb-2">La Oportunidad</h3>
                                    <p className="text-gray-700 font-medium">{city.localOpportunities}</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Metaphor */}
                        <div className="relative h-80 bg-black flex items-center justify-center p-8 border-2 border-black overflow-hidden">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(60,60,60,0.5)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                            <div className="text-center relative z-10">
                                <div className="text-6xl mb-4">📍</div>
                                <div className="font-display text-4xl text-white uppercase">{city.name}</div>
                                <div className="font-mono text-green-400 text-xs mt-2">TARGET_LOCKED</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Calvo Creativo */}
                <section className="py-20 px-6 max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-display font-bold uppercase mb-8">¿Por qué elegir Calvo Creativo en {city.name}?</h2>
                    <p className="text-lg text-gray-700 mb-12">
                        No soy una agencia local genérica. Soy un consultor global que entiende la idiosincrasia de {city.country}.
                        Aplico ingeniería inversa a los competidores locales y traigo tácticas avanzadas de mercados más agresivos.
                    </p>
                    <Link href="/consultoria" className="inline-block border-b-2 border-black text-black font-bold uppercase hover:text-red-600 hover:border-red-600 transition-colors">
                        Ver metodología completa
                    </Link>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = cities.map((city) => ({
        params: { city: city.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const city = cities.find((c) => c.slug === params?.city);
    return {
        props: {
            city,
        },
    };
};
