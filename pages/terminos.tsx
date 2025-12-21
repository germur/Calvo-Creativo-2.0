import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Terminos() {
    return (
        <div className="min-h-screen flex flex-col bg-paper font-sans">
            <Head>
                <title>Términos y Condiciones | Calvo Creativo</title>
                <meta name="description" content="Términos de servicio para el uso de Calvo Creativo y sus herramientas." />
                <meta name="robots" content="noindex" />
            </Head>

            <Navigation />

            <main className="flex-grow pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto w-full">
                <header className="mb-12 border-b-4 border-black pb-8">
                    <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2 block">Legal Compliance</span>
                    <h1 className="text-4xl md:text-5xl font-display font-black uppercase mb-6">Términos de Servicio</h1>
                </header>

                <div className="prose prose-sm prose-gray max-w-none">
                    <p>Bienvenido a Calvo Creativo.</p>
                    <h3>1. Propiedad Intelectual</h3>
                    <p>Todo el código, contenido y metodologías (incluyendo "Lado A" y "Lado B") son propiedad de Calvo Creativo.</p>
                    <h3>2. Uso de Scripts (Vibe Coding)</h3>
                    <p>Los scripts compartidos en el Laboratorio son Open Source bajo licencia MIT, a menos que se especifique lo contrario.</p>
                    <h3>3. Limitación de Responsabilidad</h3>
                    <p>No nos hacemos responsables por pérdidas de tráfico derivadas de la mala implementación de nuestras estrategias o scripts.</p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
