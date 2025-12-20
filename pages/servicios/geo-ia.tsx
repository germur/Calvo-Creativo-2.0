import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function GeoIaService() {
    return (
        <>
            <SeoHead title="Geo-Optimización & Gemini: The Alchemist | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-[#0a0a0a] font-sans text-gray-200 pt-20 overflow-x-hidden">

                {/* Header Hero */}
                <section className="relative min-h-[80vh] flex flex-col justify-center px-4 md:px-12 border-b border-[#ffd700]/20">
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] pointer-events-none"></div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto w-full items-center relative z-10">
                        <div>
                            <div className="bg-white text-black font-black uppercase text-xs px-4 py-2 inline-block transform -rotate-2 mb-6 shadow-[4px_4px_0px_#ffd700]">
                                ¡Afinando para la IA!
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
                                Geo-<br />
                                <span className="text-[#ffd700] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">Optimización</span><br />
                                & <span className="text-white">Gemini</span>
                            </h1>

                            <div className="border border-[#ffd700] bg-[#1a1a1a]/80 p-6 md:p-8 backdrop-blur-sm max-w-xl relative">
                                <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-[#ffd700]"></div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-[#ffd700]"></div>
                                <p className="font-serif text-lg leading-relaxed text-gray-300">
                                    Transforming raw location data into <span className="text-[#ffd700] font-bold">SEMANTIC GOLD</span>. The alchemy of modern search across ChatGPT, Gemini, and Local Packs.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-10">
                                <button className="bg-[#ffd700] text-black font-black uppercase px-8 py-3 rounded-sm hover:bg-white transition-colors flex items-center gap-2">
                                    <span className="material-symbols-outlined">explore</span> Explorar
                                </button>
                                <button className="bg-white text-black font-black uppercase px-8 py-3 rounded-sm hover:bg-gray-200 transition-colors">
                                    Casos de Estudio
                                </button>
                            </div>
                        </div>

                        <div className="relative h-[600px] hidden md:flex items-center justify-center">
                            {/* Bottle/Alchemy Graphic Placeholder */}
                            <div className="relative w-full h-full bg-gradient-to-t from-[#ffd700]/20 to-transparent rounded-full blur-3xl opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

                            <div className="relative z-10 bg-[#111] p-1 border border-[#333] shadow-2xl rounded-lg">
                                <div className="bg-[#00e5ff] p-4 rounded-full absolute -bottom-6 -right-6 animate-bounce shadow-[0_0_20px_#00e5ff]">
                                    <span className="material-symbols-outlined text-black text-4xl">smart_toy</span>
                                </div>
                                {/* Image representing alchemy */}
                                <img src="https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&q=80&w=600" alt="Alchemy" className="opacity-80 mix-blend-screen grayscale contrast-125" />
                                <div className="bg-white p-4 absolute bottom-10 left-[-20px] transform rotate-3 shadow-xl">
                                    <p className="text-black font-black font-serif italic text-xl">"It's aliiive!!"</p>
                                </div>
                            </div>
                            <div className="absolute top-10 right-10 bg-[#ff3d00] text-white font-black text-xs px-2 py-0.5">V2.0</div>
                        </div>
                    </div>
                </section>

                {/* The Alchemist's Algorithm Cards */}
                <section className="bg-[#ffd700] py-24 px-4 text-black relative">
                    {/* Diagonal Stripes Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}></div>

                    <div className="max-w-7xl mx-auto relative z-10 w-full">
                        <div className="flex justify-between items-end mb-12 border-b-4 border-black pb-4">
                            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
                                The Alchemist's <span className="text-white drop-shadow-[2px_2px_0px_#000]">Algorithm</span>
                            </h2>
                            <div className="hidden md:flex gap-2">
                                <span className="bg-white border-2 border-black p-2 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">
                                    <span className="material-symbols-outlined">share</span>
                                </span>
                                <span className="bg-[#ff1744] border-2 border-black p-2 flex items-center justify-center text-white cursor-pointer">
                                    <span className="material-symbols-outlined">push_pin</span>
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white border-4 border-black p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
                                <div className="relative h-48 bg-[#0d47a1] mb-4 overflow-hidden border-2 border-black">
                                    <div className="absolute top-0 left-0 bg-[#ff1744] text-white font-black text-2xl p-2 border-r-2 border-b-2 border-black z-10">01</div>
                                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover mix-blend-overlay" />
                                </div>
                                <div className="px-4 pb-4">
                                    <h3 className="text-2xl font-black uppercase mb-3">Semantic Iron</h3>
                                    <div className="h-1 w-12 bg-[#ff1744] mb-3"></div>
                                    <p className="text-sm font-medium leading-relaxed">
                                        Forging unbreakable schema markup structures and entity relationships that search engines cannot ignore.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white border-4 border-black p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform transform md:-translate-y-8">
                                <div className="relative h-48 bg-[#ffd700] mb-4 overflow-hidden border-2 border-black">
                                    <div className="absolute top-0 left-0 bg-[#ffd700] text-black font-black text-2xl p-2 border-r-2 border-b-2 border-black z-10">02</div>
                                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover mix-blend-multiply opacity-70" />
                                </div>
                                <div className="px-4 pb-4">
                                    <h3 className="text-2xl font-black uppercase mb-3">Neural Flow</h3>
                                    <div className="h-1 w-12 bg-[#00e5ff] mb-3"></div>
                                    <p className="text-sm font-medium leading-relaxed border-l-2 border-[#00e5ff] pl-2">
                                        Optimizing unstructured content for conversational AI queries (Gemini/ChatGPT), ensuring your brand speaks the language of LLMs.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white border-4 border-black p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
                                <div className="relative h-48 bg-[#b71c1c] mb-4 overflow-hidden border-2 border-black">
                                    <div className="absolute top-0 left-0 bg-[#00e5ff] text-black font-black text-2xl p-2 border-r-2 border-b-2 border-black z-10">03</div>
                                    <img src="https://images.unsplash.com/photo-1614730341194-75c6074065db?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover mix-blend-hard-light" />
                                </div>
                                <div className="px-4 pb-4">
                                    <h3 className="text-2xl font-black uppercase mb-3">Local Sigils</h3>
                                    <div className="h-1 w-12 bg-[#ffd700] mb-3"></div>
                                    <p className="text-sm font-medium leading-relaxed">
                                        Inscription of Google Business Profile dominance through precise geo-coordinates and authority building.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map / AI Perception Section */}
                <section className="py-24 px-4 bg-[#1a1a1a]">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="size-10 bg-[#00e5ff] flex items-center justify-center rounded">
                                <span className="material-symbols-outlined text-black text-2xl">radar</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black uppercase text-white">
                                The Scrying Glass: <span className="text-[#ffd700]">AI Perception</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-12 gap-0 border-2 border-white/20 h-[600px] bg-[#0f0f0f] relative overflow-hidden">
                            {/* Control Panel */}
                            <div className="md:col-span-3 border-r border-white/20 p-6 flex flex-col gap-6 z-10 bg-[#111]">
                                <div className="text-[#ff1744] bg-[#ff1744]/10 border border-[#ff1744] px-2 py-0.5 text-[10px] uppercase font-bold w-fit">Control Panel</div>

                                <div>
                                    <label className="text-xs uppercase text-[#ffd700] font-bold block mb-2">Target Coordinates</label>
                                    <div className="bg-black border border-white/30 p-2 flex items-center text-sm font-mono text-green-400">
                                        <span className="material-symbols-outlined text-xs mr-2">search</span> San Juan, Puerto Rico
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-[10px] uppercase text-gray-400 mb-1">
                                            <span>Entity Density</span>
                                            <span className="text-[#ffd700]">HIGH</span>
                                        </div>
                                        <div className="h-1 bg-gray-800 w-full"><div className="h-full bg-[#ffd700] w-[80%]"></div></div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-[10px] uppercase text-gray-400 mb-1">
                                            <span>AI Confidence</span>
                                            <span className="text-[#00e5ff]">92%</span>
                                        </div>
                                        <div className="h-1 bg-gray-800 w-full"><div className="h-full bg-[#00e5ff] w-[92%]"></div></div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-[10px] uppercase text-gray-400 mb-1">
                                            <span>Local Signal</span>
                                            <span className="text-[#ff1744]">UNSTABLE</span>
                                        </div>
                                        <div className="h-1 bg-gray-800 w-full"><div className="h-full bg-[#ff1744] w-[30%]"></div></div>
                                    </div>
                                </div>

                                <button className="mt-auto bg-[#ffd700] text-black font-black uppercase py-3 border border-black hover:bg-white transition-colors flex justify-center items-center gap-2 text-sm">
                                    <span className="material-symbols-outlined text-base">my_location</span> Analyze Vector
                                </button>
                            </div>

                            {/* Map Area */}
                            <div className="md:col-span-9 relative bg-gray-900 overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/San_Juan_Puerto_Rico_map.png')] bg-cover bg-center grayscale opacity-40 mix-blend-luminosity"></div>
                                {/* Grid Overlay */}
                                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

                                {/* Radar Scan Effect */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 border border-[#00e5ff]/30 rounded-full animate-pulse flex items-center justify-center">
                                    <div className="size-64 border border-[#00e5ff]/50 rounded-full"></div>
                                    <div className="size-32 border border-[#00e5ff]/70 rounded-full"></div>
                                    <div className="absolute w-full h-1 bg-[#00e5ff]/50 top-1/2 left-0 animate-spin-slow origin-center"></div>
                                </div>

                                {/* UI Tools */}
                                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                                    <button className="bg-white text-black size-8 flex items-center justify-center font-bold">+</button>
                                    <button className="bg-white text-black size-8 flex items-center justify-center font-bold">-</button>
                                    <button className="bg-[#ffd700] text-black size-8 flex items-center justify-center font-bold border border-black transform hover:rotate-90 transition-transform">
                                        <span className="material-symbols-outlined text-sm">settings</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
