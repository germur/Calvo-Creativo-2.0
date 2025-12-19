import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <SeoHead
                title="Home"
                description="El Especialista - Portfolio de Estrategia SEO Digital y Creatividad Técnica."
            />
            <div className="flex min-h-screen flex-col bg-background text-white selection:bg-primary selection:text-black">
                <Navigation />
                <main className="flex-grow flex flex-col items-center justify-center p-6 relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse-soft"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
                    </div>

                    <div className="z-10 text-center max-w-5xl mx-auto flex flex-col gap-8 md:gap-12 relative">

                        {/* Badge */}
                        <div className="animate-float">
                            <span className="inline-block border border-primary/30 bg-primary/5 px-4 py-1 rounded-full text-xs font-mono text-primary uppercase tracking-widest backdrop-blur-sm">
                                Vibecoding v2.0 Online
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-headline tracking-tighter leading-[0.85] uppercase mix-blend-difference">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 hover:to-primary transition-all duration-700 ease-out cursor-default">Digital</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 hover:from-primary hover:to-primary/50 transition-all duration-700 ease-out cursor-default">Gatefold</span>
                        </h1>

                        {/* Subtitle / Description */}
                        <p className="font-mono text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            <span className="text-primary font-bold">EL ESPECIALISTA</span> combina la técnica del SEO con el arte del desarrollo web.
                            Resultados que suenan bien y rankean mejor.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
                            <Link href="/lado-a" className="group relative px-8 py-4 bg-white text-black font-headline text-xl uppercase tracking-wide overflow-hidden transition-all hover:scale-105 active:scale-95">
                                <span className="relative z-10 flex items-center gap-2">
                                    Lado A (Técnico) <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </span>
                                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                            </Link>
                            <Link href="/lado-b" className="px-8 py-4 border border-white/20 font-headline text-xl uppercase tracking-wide hover:bg-white/5 transition-all text-white/80 hover:text-white">
                                Lado B (Creativo)
                            </Link>
                        </div>
                    </div>

                    {/* Decorative Footer Detail */}
                    <div className="absolute bottom-8 left-0 w-full text-center">
                        <span className="font-title text-white/5 text-[15vw] leading-none pointer-events-none select-none">VIBES</span>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
