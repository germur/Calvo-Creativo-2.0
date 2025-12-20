import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function Custom404() {
    return (
        <>
            <SeoHead title="404: Disco Rayado | Calvo Creativo" />
            <Navigation />
            <main className="min-h-screen bg-[#1a0b0b] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">

                {/* Background 404 Effect */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                    <span className="text-[30vw] font-black tracking-tighter text-white">404</span>
                </div>

                <div className="z-10 text-center px-4">
                    <p className="text-[#ff3333] tracking-[0.3em] text-sm font-mono uppercase mb-4">Error 404</p>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tight mb-6">
                        ¡Rayos! <span className="text-[#ff3333]">Disco</span><br />
                        <span className="text-[#ff3333]">Rayado.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 font-light mb-2">
                        La aguja saltó. Esta pista no existe en este LP.
                    </p>

                    <p className="font-mono text-sm text-[#ff3333]/70 mb-12">
                        Error: Track_Not_Found_Exception
                    </p>

                    <Link href="/" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded font-bold uppercase tracking-wider hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined">arrow_back</span>
                        REGRESA A LA PORTADA
                    </Link>
                </div>

                {/* Vinyl Grooves Decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"></div>

            </main>
            <Footer />
        </>
    );
}
