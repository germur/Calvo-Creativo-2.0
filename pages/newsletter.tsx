import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Newsletter() {
    return (
        <div className="min-h-screen flex flex-col bg-paper font-sans">
            <Head>
                <title>The Lab Report | Newsletter SEO & Vibe Coding</title>
                <meta name="description" content="Suscríbete al Lab Report. Análisis profundo, scripts de Python y experimentos de SEO técnico directo a tu bandeja de entrada." />
            </Head>

            <Navigation />

            <div className="flex-grow flex items-center justify-center py-24 px-6 relative overflow-hidden">
                {/* Background Noise */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 pointer-events-none"></div>

                <div className="max-w-2xl w-full text-center relative z-10">
                    <div className="inline-block bg-acid-green text-black px-4 py-1 font-mono text-xs font-bold uppercase mb-8 rotate-[-2deg] border-2 border-black shadow-brutal-sm">
                        Incoming Transmission
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-black uppercase mb-6 leading-none">
                        The Lab <br /><span className="text-red-600">Report</span>.
                    </h1>

                    <p className="text-xl text-gray-700 font-light mb-12 leading-relaxed">
                        Scripts de Python, experimentos fallidos (y exitosos), y estrategia SEO cruda. Sin relleno de IA. Solo insights de ingeniería.
                    </p>

                    {/* Fake Form for MVP */}
                    <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_#000] text-left">
                        <label className="block font-mono text-xs font-bold uppercase mb-2">Tu mejor correo electrónico</label>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="ingeniero@ejemplo.com"
                                className="flex-1 bg-gray-100 border-2 border-black px-4 py-3 font-mono focus:outline-none focus:bg-white focus:border-red-600 transition-colors"
                            />
                            <button className="bg-black text-white px-8 py-3 font-display uppercase text-xl hover:bg-neutral-800 transition-colors">
                                Unirse
                            </button>
                        </div>
                        <p className="mt-4 text-xs text-gray-500 font-mono">
                            * Cero spam. Nos damos de baja si aburrimos.
                            <a href="/politica-privacidad" className="underline ml-1">Privacidad</a>.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
