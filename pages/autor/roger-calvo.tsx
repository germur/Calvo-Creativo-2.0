import Head from 'next/head';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AuthorProfile() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Roger Calvo",
        "jobTitle": "SEO Strategist & Marketer-Builder",
        "url": "https://calvocreativo.com/autor/roger-calvo",
        "sameAs": [
            "https://www.linkedin.com/in/rogermur/",
            "https://github.com/rogermur",
            "https://calvocreativo.com"
        ],
        "image": "https://calvocreativo.com/images/roger-calvo.jpg",
        "description": "Estratega SEO especializado en Topical Authority y GEO (Generative Engine Optimization). Ingeniero de Búsqueda y desarrollador de automatizaciones en Python."
    };

    return (
        <div className="min-h-screen flex flex-col bg-paper font-sans text-ink">
            <Head>
                <title>Roger Calvo | SEO Strategist & Marketer-Builder</title>
                <meta name="description" content="Perfil profesional de Roger Calvo. Ingeniero de Búsqueda, Marketer-Builder y especialista en SEO Técnico y GEO." />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                />
            </Head>

            <Navigation />

            <main className="flex-grow pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Sidebar / Photo */}
                    <div className="md:col-span-1">
                        <div className="bg-black text-white p-2 border-4 border-black shadow-[8px_8px_0px_#dc2626] mb-8">
                            <div className="aspect-square bg-gray-800 relative grayscale hover:grayscale-0 transition-all overflow-hidden">
                                {/* Placeholder for real image */}
                                <div className="absolute inset-0 flex items-center justify-center text-4xl font-display font-black opacity-20 uppercase rotate-[-12deg]">
                                    Roger<br />Calvo
                                </div>
                                {/* <Image src="/path/to/image.jpg" ... /> */}
                            </div>
                            <div className="mt-4 text-center">
                                <h1 className="font-display text-2xl uppercase leading-none">Roger Calvo</h1>
                                <p className="font-mono text-xs text-gray-400 mt-1 uppercase tracking-widest">Marketer-Builder</p>
                            </div>
                        </div>

                        <div className="space-y-4 font-mono text-sm">
                            <div className="border-b-2 border-gray-200 pb-2">
                                <span className="block text-gray-400 text-xs uppercase">Ubicación</span>
                                <strong>Miami, FL / Global</strong>
                            </div>
                            <div className="border-b-2 border-gray-200 pb-2">
                                <span className="block text-gray-400 text-xs uppercase">Stack</span>
                                <strong>Python, Next.js, SEO</strong>
                            </div>
                            <div className="border-b-2 border-gray-200 pb-2">
                                <span className="block text-gray-400 text-xs uppercase">Enfoque</span>
                                <strong>Technical SEO & Automation</strong>
                            </div>
                        </div>
                    </div>

                    {/* Main Bio Content */}
                    <div className="md:col-span-2 prose prose-lg prose-headings:font-display prose-headings:uppercase prose-p:font-sans py-4">
                        <h2 className="text-4xl font-black mb-6">La intersección entre Código y Marketing.</h2>
                        <p>
                            Soy un <strong>Estratega SEO</strong> que no cree en la magia, sino en la ingeniería inversa.
                            Mi trabajo consiste en desmantelar cómo funcionan los motores de búsqueda (Google, Perplexity, LLMs) para reconstruir narrativas que las máquinas entienden y los humanos valoran.
                        </p>

                        <h3>Filosofía "Marketer-Builder"</h3>
                        <p>
                            El marketing moderno requiere más que ideas; requiere ejecución técnica. No solo diseño la estrategia, sino que construyo las herramientas (scripts, scrapers, automatizaciones) para ejecutarla a escala.
                        </p>

                        <h3>Áreas de Experiencia (E-E-A-T)</h3>
                        <ul>
                            <li><strong>Ingeniería de Búsqueda (Search Engineering):</strong> Arquitectura de información y Technical SEO avanzado.</li>
                            <li><strong>Generative Engine Optimization (GEO):</strong> Optimización para motores de respuesta basados en IA.</li>
                            <li><strong>Topical Authority:</strong> Construcción de mapas semánticos para dominar nichos.</li>
                        </ul>

                        <div className="not-prose mt-12 p-8 bg-gray-100 border-l-4 border-black">
                            <h4 className="font-display text-xl uppercase mb-2">Conecta conmigo</h4>
                            <p className="font-sans text-gray-700 mb-6">
                                Siempre estoy abierto a discutir proyectos complejos o experimentos técnicos.
                            </p>
                            <a href="https://www.linkedin.com/in/rogermur/" target="_blank" className="bg-[#0077b5] text-white px-6 py-3 font-bold uppercase hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                                LinkedIn Profile <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
