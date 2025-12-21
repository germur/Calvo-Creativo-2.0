import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function LetrasService() {
    return (
        <>
            <SeoHead title="Letras que Conectan: UX Writing | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-white font-sans text-ink pt-20 selection:bg-accent selection:text-ink">

                {/* Hero Section */}
                <section className="relative min-h-[85vh] flex flex-col justify-center px-4 md:px-20 overflow-hidden border-b-8 border-ink">
                    <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-paper hidden md:block border-l-8 border-ink"></div>

                    <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-3 gap-12 items-center">
                        <div className="md:col-span-2">
                            <div className="inline-block bg-primary text-white px-4 py-1 font-mono font-bold uppercase text-sm border-4 border-ink shadow-brutal mb-8 rotate-1">
                                ✒ UX Writing V2
                            </div>

                            <h1 className="text-8xl md:text-[10rem] font-display uppercase leading-[0.8] tracking-tighter text-ink mb-8">
                                Letras<br />
                                Que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Pegann</span>
                            </h1>

                            <div className="border-l-8 border-accent pl-8 py-2 mb-10 max-w-xl">
                                <p className="text-2xl font-bold font-mono text-ink/80 leading-snug">
                                    Estrategia que golpea como un beat de hip-hop, claridad que fluye como salsa dura.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-6">
                                <button className="bg-ink text-white px-8 py-4 font-display uppercase text-xl border-4 border-transparent hover:bg-primary hover:border-ink shadow-brutal transition-all flex items-center gap-2 group">
                                    Ver Casos <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                                <button className="bg-white text-ink px-8 py-4 font-display uppercase text-xl border-4 border-ink hover:bg-accent transition-colors shadow-brutal-sm">
                                    Escuchar Manifiesto
                                </button>
                            </div>
                        </div>

                        {/* Floating Words Decoration on the Dark Side */}
                        <div className="hidden md:flex flex-col gap-12 items-start relative">
                            <div className="text-8xl font-display text-white/10 rotate-12 absolute -right-20 top-0 pointer-events-none">FLOW</div>

                            <div className="bg-secondary text-ink px-6 py-2 border-4 border-white shadow-[8px_8px_0px_0px_#fff] transform -rotate-6 transition-transform hover:rotate-0 cursor-default">
                                <span className="font-display uppercase text-2xl">Claridad</span>
                            </div>
                            <div className="bg-accent text-ink px-6 py-2 border-4 border-white shadow-[8px_8px_0px_0px_#fff] transform rotate-3 transition-transform hover:rotate-0 cursor-default ml-12">
                                <span className="font-display uppercase text-2xl">Empatía</span>
                            </div>
                            <div className="bg-primary text-white px-6 py-2 border-4 border-white shadow-[8px_8px_0px_0px_#fff] transform -rotate-3 transition-transform hover:rotate-0 cursor-default">
                                <span className="font-display uppercase text-2xl">Ritmo</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="py-24 px-4 bg-accent border-b-8 border-ink">
                    <div className="max-w-7xl mx-auto rounded-[3rem] bg-paper p-8 md:p-16 border-4 border-ink shadow-brutal relative">
                        {/* Decorative Screws */}
                        <div className="absolute top-6 left-6 size-4 bg-white border-2 border-ink rounded-full flex items-center justify-center"><div className="w-2 h-0.5 bg-ink rotate-45"></div></div>
                        <div className="absolute top-6 right-6 size-4 bg-white border-2 border-ink rounded-full flex items-center justify-center"><div className="w-2 h-0.5 bg-ink rotate-45"></div></div>
                        <div className="absolute bottom-6 left-6 size-4 bg-white border-2 border-ink rounded-full flex items-center justify-center"><div className="w-2 h-0.5 bg-ink rotate-45"></div></div>
                        <div className="absolute bottom-6 right-6 size-4 bg-white border-2 border-ink rounded-full flex items-center justify-center"><div className="w-2 h-0.5 bg-ink rotate-45"></div></div>

                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-6xl md:text-7xl font-display uppercase text-white mb-6">La Filosofía del Flow</h2>
                            <p className="font-mono text-white/80 text-lg leading-relaxed">
                                Donde la data de SEO encuentra la empatía humana. Escribimos para guiar, no para confundir. El texto debe sentirse como una conversación natural, con sus pausas, sus acentos y su ritmo.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white p-8 border-4 border-ink hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_#e63946] group">
                                <div className="size-16 bg-primary text-white border-4 border-ink flex items-center justify-center mb-6 shadow-brutal-sm">
                                    <span className="material-symbols-outlined text-3xl">music_note</span>
                                </div>
                                <h3 className="text-3xl font-display uppercase text-ink mb-3">Ritmo</h3>
                                <p className="text-sm font-mono text-ink/80 leading-relaxed border-t-2 border-ink/10 pt-4">
                                    El texto debe tener cadencia, como una buena canción de salsa. Evita la monotonía, juega con la longitud de las frases.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 border-4 border-ink hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_#ffcc00] group">
                                <div className="size-16 bg-secondary text-ink border-4 border-ink flex items-center justify-center mb-6 shadow-brutal-sm">
                                    <span className="material-symbols-outlined text-3xl">visibility</span>
                                </div>
                                <h3 className="text-3xl font-display uppercase text-ink mb-3">Claridad</h3>
                                <p className="text-sm font-mono text-ink/80 leading-relaxed border-t-2 border-ink/10 pt-4">
                                    Sin ambigüedades. Directo al grano, sin perder el estilo. La usabilidad es el bajo que sostiene la melodía.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-8 border-4 border-ink hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_#000] group">
                                <div className="size-16 bg-paper text-white border-4 border-ink flex items-center justify-center mb-6 shadow-brutal-sm">
                                    <span className="material-symbols-outlined text-3xl">bolt</span>
                                </div>
                                <h3 className="text-3xl font-display uppercase text-ink mb-3">Impacto</h3>
                                <p className="text-sm font-mono text-ink/80 leading-relaxed border-t-2 border-ink/10 pt-4">
                                    Palabras que resuenan y generan acción inmediata. Microcopy que golpea fuerte y deja huella.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dojo de las Letras (Techniques) */}
                <section className="py-24 px-4 bg-white relative">
                    {/* Background Grid */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-20">
                            <div className="inline-block bg-ink text-white px-6 py-2 rotate-2 mb-4 border-4 border-transparent hover:border-accent transition-all">
                                <span className="font-display uppercase text-2xl">Training Grounds</span>
                            </div>
                            <h2 className="text-6xl md:text-8xl font-display font-black text-ink uppercase leading-none">
                                El Dojo de<br /><span className="text-primary">Las Letras</span>
                            </h2>
                        </div>

                        <div className="space-y-16">
                            {/* Technique 1 */}
                            <div className="grid md:grid-cols-2 bg-paper border-4 border-ink shadow-brutal group">
                                <div className="p-8 md:p-12 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-ink bg-white">
                                    <div className="bg-accent text-ink text-xs font-mono font-bold uppercase mb-4 inline-block px-2 py-1 border-2 border-ink shadow-brutal-sm">Técnica #1 MMA</div>
                                    <h3 className="text-5xl font-display uppercase text-ink mb-6">El Gancho ("The Hook")</h3>
                                    <p className="font-mono text-ink/80 mb-8 leading-relaxed">
                                        Capturando la atención en los primeros 3 segundos. Al igual que en el octágono, si no conectas al principio, pierdes la pelea por la atención. Usamos verbos activos y promesas de valor inmediato.
                                    </p>
                                    <button className="self-start border-4 border-ink px-8 py-3 bg-white hover:bg-ink hover:text-white font-display uppercase font-bold transition-colors shadow-brutal-sm">Ver Ejemplo Real ↗</button>
                                </div>
                                <div className="bg-ink relative min-h-[400px] overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555431189-0fabf2667795?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center opacity-60 grayscale mix-blend-luminosity"></div>

                                    {/* Floating Card UI Mockup */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-sm">
                                        <div className="bg-white border-4 border-ink p-6 shadow-brutal rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                            <div className="text-xs font-bold mb-2 font-mono uppercase text-gray-400">Antes:</div>
                                            <div className="text-sm text-gray-500 line-through mb-4 font-mono">"Ofrecemos servicios de optimización para su sitio."</div>

                                            <div className="h-0.5 w-full bg-gray-200 mb-4"></div>

                                            <div className="text-xs font-bold mb-2 font-mono uppercase text-primary">Después:</div>
                                            <div className="text-2xl font-display uppercase leading-none">"Domina Google. Destruye a tu competencia."</div>

                                            <div className="absolute -top-4 -right-4 size-10 bg-primary border-4 border-ink flex items-center justify-center text-white shadow-brutal-sm">
                                                <span className="material-symbols-outlined font-black">check</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Technique 2 */}
                            <div className="grid md:grid-cols-2 bg-paper border-4 border-ink shadow-brutal group">
                                <div className="bg-primary relative min-h-[400px] order-2 md:order-1 overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center opacity-40 mix-blend-multiply"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-9xl text-white border-4 border-white p-4 rounded-full animate-pulse">mic_external_on</span>
                                    </div>
                                </div>
                                <div className="p-8 md:p-12 flex flex-col justify-center bg-paper text-white order-1 md:order-2 border-b-4 md:border-b-0 md:border-l-4 border-ink">
                                    <div className="bg-secondary text-ink text-xs font-mono font-bold uppercase mb-4 inline-block px-2 py-1 border-2 border-white shadow-brutal-sm">Técnica #2 Salsa</div>
                                    <h3 className="text-5xl font-display uppercase text-white mb-6">La Improvisación</h3>
                                    <p className="font-mono text-gray-300 mb-8 leading-relaxed">
                                        Adaptando el tono de voz al contexto del usuario en tiempo real. Como un sonero improvisando en el coro, el UX writing debe ser flexible. ¿Error 404? Es una oportunidad para un solo de timbales.
                                    </p>
                                    <button className="self-start border-4 border-white px-8 py-3 bg-transparent hover:bg-white hover:text-ink font-display uppercase font-bold transition-colors shadow-brutal-sm">Ver Ejemplo Real ↗</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 bg-ink text-center px-4 border-t-8 border-white">
                    <h2 className="text-7xl md:text-9xl font-display text-white uppercase mb-8 leading-none">
                        ¿Listo para<br /> <span className="text-primary">el Mambo?</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-xl mb-12 max-w-2xl mx-auto">
                        Transformemos esos textos aburridos en una experiencia<br />que tus usuarios quieran bailar.
                    </p>
                    <button className="bg-accent text-ink border-4 border-white hover:bg-white hover:border-accent px-12 py-5 font-display text-2xl uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Empezar Proyecto
                    </button>
                </section>

            </main>
            <Footer />
        </>
    );
}
