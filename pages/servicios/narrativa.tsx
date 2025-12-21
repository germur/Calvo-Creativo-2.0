import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function NarrativaService() {
    return (
        <>
            <SeoHead title="Narrativa Visual: SEO Fighter | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-paper font-sans text-white pt-20 selection:bg-accent selection:text-ink">

                {/* Hero Section */}
                <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden border-b-8 border-ink bg-white">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>

                    <div className="relative z-10 max-w-5xl mx-auto">
                        <div className="bg-ink text-accent border-4 border-ink px-4 py-1 shadow-brutal mb-6 inline-block transform -rotate-2">
                            <span className="font-mono text-sm font-bold uppercase tracking-widest">★ Web Analytics & Salsa Dura</span>
                        </div>

                        <h1 className="text-7xl md:text-9xl font-display uppercase leading-[0.85] tracking-tighter text-ink mb-6 text-shadow-brutal-sm">
                            Narrativa<br />
                            <span className="text-primary">Visual</span><br />
                            <span className="text-ink">De Datos</span>
                        </h1>

                        <p className="font-mono text-ink/70 text-xl md:text-2xl mt-6 uppercase tracking-widest border-b-4 border-accent inline-block pb-2">
                            El Sonido Bestial
                        </p>

                        <div className="max-w-2xl mx-auto mb-12 mt-8">
                            <p className="text-ink font-body text-lg border-l-4 border-primary pl-6 text-left">
                                Transformamos métricas frías en ritmos calientes. Donde la estrategia SEO encuentra el storytelling líquido. En un mundo de caos, la data cruda no son solo números; es un beat esperando el drop.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="bg-primary text-white px-8 py-3 font-display uppercase text-xl border-4 border-ink shadow-brutal hover:translate-y-[-4px] hover:shadow-brutal-hover transition-all flex items-center gap-2">
                                Ver la Data <span className="material-symbols-outlined">visibility</span>
                            </button>
                            <button className="bg-white text-ink px-8 py-3 font-display uppercase text-xl border-4 border-ink shadow-brutal hover:bg-ink hover:text-white transition-all">
                                Escuchar el Flow
                            </button>
                        </div>
                    </div>
                </section>

                {/* KPIs / Metrics Banner (Brutalist) */}
                <section className="py-16 px-4 bg-accent border-b-8 border-ink">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: 'Organic Traffic', val: '120k+', sub: '↗ +150% Rhythm' },
                            { label: 'Ranking', val: 'Top 3', sub: '▶ Hit Parade' },
                            { label: 'Conv. Rate', val: '5.8%', sub: '⚡ Liquid Flow' },
                            { label: 'Retention', val: '85%', sub: '❤ Fan Base' },
                        ].map((item, i) => (
                            <div key={i} className="bg-paper p-6 border-4 border-white shadow-brutal-sm hover:translate-y-[-2px] transition-transform">
                                <div className="text-[10px] uppercase text-accent mb-2 font-mono font-bold tracking-wider border-b border-gray-700 pb-2">{item.label}</div>
                                <div className="text-4xl md:text-5xl font-display text-white mb-2 leading-none">{item.val}</div>
                                <div className="text-xs font-bold text-white uppercase flex items-center gap-1 font-mono">
                                    {item.sub}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* El Flujo de la Data */}
                <section className="py-24 px-4 bg-paper relative overflow-hidden">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-6xl md:text-8xl font-display uppercase text-white mb-4 leading-none">
                                El Flujo de<br />
                                <span className="text-primary text-shadow-brutal-sm-white">la Data</span>
                            </h2>
                            <p className="text-gray-400 mb-12 leading-relaxed font-mono border-l-4 border-white pl-4">
                                La data de búsqueda no es estática; se mueve, fluye, baila como un vinilo de salsa a 45rpm. Refinamos el ruido en estrategia narrativa visual.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-6 items-start group">
                                    <div className="size-16 bg-white border-4 border-primary flex items-center justify-center text-ink shadow-brutal-sm flex-shrink-0 group-hover:rotate-6 transition-transform">
                                        <span className="material-symbols-outlined text-3xl font-black">waves</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-display uppercase text-white mb-1">Raw Input</h3>
                                        <p className="text-xs text-gray-400 font-mono">Gathering chaos from search ecos. The noise before the melody.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start group">
                                    <div className="size-16 bg-accent border-4 border-white flex items-center justify-center text-ink shadow-brutal-sm flex-shrink-0 group-hover:-rotate-6 transition-transform">
                                        <span className="material-symbols-outlined text-3xl font-black">equalizer</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-display uppercase text-white mb-1">Liquid Analysis</h3>
                                        <p className="text-xs text-gray-400 font-mono">Filters & metrics through a brutal lens. Finding the groove.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start group">
                                    <div className="size-16 bg-primary border-4 border-white flex items-center justify-center text-white shadow-brutal-sm flex-shrink-0 group-hover:rotate-3 transition-transform">
                                        <span className="material-symbols-outlined text-3xl font-black">lightbulb</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-display uppercase text-white mb-1">Solid Strategy</h3>
                                        <p className="text-xs text-gray-400 font-mono">Crystallizing insights into rhythm and revenue. The punchline.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <button className="bg-transparent border-4 border-white text-white px-8 py-3 font-display uppercase text-xl hover:bg-white hover:text-ink transition-colors">
                                    Expandir el Proceso
                                </button>
                            </div>
                        </div>

                        {/* Visual Graphic (Brutalist) */}
                        <div className="relative h-[500px] w-full bg-secondary border-4 border-white shadow-brutal overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-multiply opacity-50"></div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                                <div className="bg-white border-4 border-ink p-6 rotate-3 shadow-brutal hover:rotate-0 transition-transform">
                                    <span className="material-symbols-outlined text-8xl text-primary mb-2">water_drop</span>
                                    <div className="font-display font-black text-4xl uppercase tracking-tighter text-ink leading-none">Visual<br />Pulse</div>
                                </div>
                            </div>

                            {/* Decorative Corners */}
                            <div className="absolute top-4 left-4 size-4 bg-white border border-ink"></div>
                            <div className="absolute top-4 right-4 size-4 bg-white border border-ink"></div>
                            <div className="absolute bottom-4 left-4 size-4 bg-white border border-ink"></div>
                            <div className="absolute bottom-4 right-4 size-4 bg-white border border-ink"></div>
                        </div>
                    </div>
                </section>

                {/* Case Studies Carousel */}
                <section className="py-24 px-4 bg-white border-t-8 border-ink">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <h2 className="text-6xl md:text-7xl font-display uppercase text-ink leading-none">Case Studies</h2>
                                <div className="h-4 w-32 bg-primary mt-2"></div>
                            </div>
                            <div className="flex gap-4">
                                <button className="size-14 bg-white border-4 border-ink flex items-center justify-center hover:bg-ink hover:text-white transition-colors shadow-brutal-sm"><span className="material-symbols-outlined">arrow_back</span></button>
                                <button className="size-14 bg-accent border-4 border-ink flex items-center justify-center hover:translate-y-[-2px] hover:shadow-brutal-hover transition-all shadow-brutal-sm"><span className="material-symbols-outlined">arrow_forward</span></button>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Case 1 */}
                            <div className="group relative h-[450px] border-4 border-ink bg-paper shadow-brutal hover:-translate-y-2 transition-transform">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <div className="bg-primary text-white text-xs font-bold px-2 py-1 uppercase inline-block mb-3 border border-ink">Case 01</div>
                                    <h3 className="text-3xl font-display uppercase text-white leading-none mb-2">UFC Traffic<br />Knockout</h3>
                                    <div className="h-1 w-12 bg-accent mb-3"></div>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-accent transition-colors">
                                        View Case <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </div>
                                </div>
                            </div>

                            {/* Case 2 */}
                            <div className="group relative h-[450px] border-4 border-ink bg-paper shadow-brutal hover:-translate-y-2 transition-transform">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <div className="bg-secondary text-ink text-xs font-bold px-2 py-1 uppercase inline-block mb-3 border border-ink">Case 02</div>
                                    <h3 className="text-3xl font-display uppercase text-white leading-none mb-2">Hip-Hop<br />Keyword Flow</h3>
                                    <div className="h-1 w-12 bg-white mb-3"></div>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-secondary transition-colors">
                                        View Case <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </div>
                                </div>
                            </div>

                            {/* Case 3 */}
                            <div className="group relative h-[450px] border-4 border-ink bg-paper shadow-brutal hover:-translate-y-2 transition-transform">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542208998-f6dbbb0a4d70?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <div className="bg-accent text-ink text-xs font-bold px-2 py-1 uppercase inline-block mb-3 border border-ink">Case 03</div>
                                    <h3 className="text-3xl font-display uppercase text-white leading-none mb-2">Salsa Dura<br />Analytics</h3>
                                    <div className="h-1 w-12 bg-white mb-3"></div>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-accent transition-colors">
                                        View Case <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Footer Style */}
                <section className="bg-paper py-32 border-t-8 border-ink relative overflow-hidden">
                    {/* Background Noise */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

                    <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                        <span className="material-symbols-outlined text-8xl text-white mb-6 animate-bounce">queue_music</span>
                        <h2 className="text-6xl md:text-8xl font-display uppercase text-white mb-6 leading-[0.85]">
                            ¿Listo para el<br />
                            <span className="text-primary text-shadow-brutal-sm">Remix de tu Data?</span>
                        </h2>
                        <p className="text-gray-400 mb-12 max-w-xl mx-auto font-mono text-lg">
                            Let's turn your static spreadsheets into a chart-topping strategy. Contact us to start the session.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            <button className="bg-accent text-ink px-10 py-4 font-display uppercase text-2xl border-4 border-ink shadow-brutal hover:scale-105 transition-transform">Start Project</button>
                            <button className="bg-transparent border-4 border-white text-white px-10 py-4 font-display uppercase text-2xl hover:bg-white hover:text-ink transition-colors">Read Manifesto</button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
