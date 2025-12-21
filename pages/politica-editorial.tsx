import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PoliticaEditorial() {
    return (
        <div className="min-h-screen flex flex-col bg-paper font-sans">
            <Head>
                <title>Política Editorial & Ética IA | Calvo Creativo</title>
                <meta name="description" content="Nuestra postura sobre el uso de Inteligencia Artificial en la creación de contenido y estrategias SEO. Transparencia ante todo." />
            </Head>

            <Navigation />

            <main className="flex-grow pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto w-full">
                <header className="mb-12 border-b-4 border-black pb-8">
                    <span className="font-mono text-xs uppercase tracking-widest text-red-600 mb-2 block">Trust & Safety</span>
                    <h1 className="text-4xl md:text-5xl font-display font-black uppercase mb-6">Política Editorial & <br />Ética IA</h1>
                    <p className="font-serif text-xl italic text-gray-700">"El martillo no construye la casa, pero ayuda al carpintero."</p>
                </header>

                <div className="prose prose-lg prose-headings:font-display prose-headings:uppercase prose-p:font-sans prose-strong:text-red-600">
                    <h3>1. Nuestra Postura sobre la IA</h3>
                    <p>
                        En Calvo Creativo, <strong>abrazamos la Inteligencia Artificial</strong> como una herramienta de productividad y análisis, no como un sustituto del criterio humano. Creemos en el modelo "Centauro": Humano + Máquina {'>'} Humano solo o Máquina sola.
                    </p>

                    <h3>2. ¿Qué es Generado por IA y qué es Humano?</h3>
                    <ul>
                        <li><strong>100% Humano:</strong> La estrategia, la creatividad, las opiniones (Liner Notes), la supervisión final y la relación con el cliente.</li>
                        <li><strong>Asistido por IA:</strong> El procesamiento de datos masivos, la generación de esquemas (outlines), la optimización de código (Vibe Coding) y el análisis de sentimientos.</li>
                    </ul>

                    <h3>3. Verificación de Datos</h3>
                    <p>
                        Nunca publicamos contenido generado por IA sin una revisión humana exhaustiva (Human-in-the-loop). Sabemos que los LLMs alucinan, y nuestra reputación se basa en la precisión técnica.
                    </p>

                    <h3>4. Compromiso de Transparencia</h3>
                    <p>
                        Si un experimento o artículo en el "Lab" es generado enteramente por IA con fines de prueba, lo etiquetaremos claramente.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
