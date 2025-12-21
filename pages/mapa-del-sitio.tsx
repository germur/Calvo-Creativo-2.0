import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Sitemap() {
    return (
        <div className="min-h-screen flex flex-col bg-paper font-sans">
            <Head>
                <title>Mapa del Sitio | Calvo Creativo</title>
                <meta name="description" content="Índice completo de Calvo Creativo. Navegación rápida para usuarios y agentes de IA." />
            </Head>

            <Navigation />

            <main className="flex-grow pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto w-full">
                <header className="mb-12 border-b-4 border-black pb-8">
                    <h1 className="text-4xl md:text-6xl font-display font-black uppercase mb-4">Mapa del Sitio</h1>
                    <p className="font-mono text-gray-600">Estructura jerárquica para humanos y máquinas.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* LADO A */}
                    <div>
                        <h2 className="text-2xl font-display font-bold uppercase mb-6 flex items-center gap-2">
                            <span className="text-3xl">💿</span> Lado A: Consultoría
                        </h2>
                        <ul className="space-y-3 font-mono text-sm border-l-2 border-black pl-6">
                            <li><Link href="/consultoria" className="hover:text-red-600 hover:underline">/consultoria (Index)</Link></li>
                            <li><Link href="/consultoria/arquitectura-seo-geo" className="hover:text-red-600 hover:underline">/arquitectura-seo-geo</Link></li>
                            <li><Link href="/consultoria/estrategia-contenidos-autoridad" className="hover:text-red-600 hover:underline">/estrategia-contenidos-autoridad</Link></li>
                            <li><Link href="/consultoria/automatizacion-seo-ia" className="hover:text-red-600 hover:underline">/automatizacion-seo-ia</Link></li>
                            <li><Link href="/consultoria/consultoria-seo-internacional" className="hover:text-red-600 hover:underline">/consultoria-seo-internacional</Link></li>
                        </ul>
                    </div>

                    {/* LADO B */}
                    <div>
                        <h2 className="text-2xl font-display font-bold uppercase mb-6 flex items-center gap-2">
                            <span className="text-3xl">🎺</span> Lado B: Lab
                        </h2>
                        <ul className="space-y-3 font-mono text-sm border-l-2 border-black pl-6">
                            <li><Link href="/lab" className="hover:text-acid-green bg-black text-white px-1">/lab (Index)</Link></li>
                            <li><Link href="/lab/seo-fight-club" className="hover:text-red-600 hover:underline">/seo-fight-club</Link></li>
                            <li><Link href="/lab/vibe-coding" className="hover:text-red-600 hover:underline">/vibe-coding</Link></li>
                            <li><Link href="/liner-notes" className="hover:text-red-600 hover:underline">/liner-notes (Blog)</Link></li>
                        </ul>
                    </div>

                    {/* ENTIDAD & LEGAL */}
                    <div>
                        <h2 className="text-xl font-display font-bold uppercase mb-6 text-gray-500">Entidad & Legal</h2>
                        <ul className="space-y-2 font-mono text-xs text-gray-600">
                            <li><Link href="/el-artista" className="hover:text-black hover:underline">/el-artista (Sobre Mí)</Link></li>
                            <li><Link href="/autor/roger-calvo" className="hover:text-black hover:underline">/autor/roger-calvo (Perfil Profesional)</Link></li>
                            <li><Link href="/contacto" className="hover:text-black hover:underline">/contacto</Link></li>
                            <li><Link href="/politica-editorial" className="hover:text-black hover:underline">/politica-editorial (AI Ethics)</Link></li>
                            <li><Link href="/politica-privacidad" className="hover:text-black hover:underline">/politica-privacidad</Link></li>
                        </ul>
                    </div>
                    {/* RESOURCES */}
                    <div>
                        <h2 className="text-xl font-display font-bold uppercase mb-6 text-gray-500">Recursos</h2>
                        <ul className="space-y-2 font-mono text-xs text-gray-600">
                            <li><Link href="/newsletter" className="hover:text-black hover:underline">/newsletter (Lab Report)</Link></li>
                            <li><Link href="/public/llms.txt" className="hover:text-black hover:underline">/llms.txt</Link></li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
