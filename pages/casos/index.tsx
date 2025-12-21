import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function CasosIndex() {
    return (
        <>
            <SeoHead title="Casos de Éxito: Greatest Hits | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-[#111] font-sans pt-20 text-[#e0e0e0]">

                {/* Header */}
                <section className="px-4 py-12 border-b border-[#333]">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#ffb300] material-symbols-outlined text-xs">folder_open</span>
                            <span className="text-[#ffb300] text-[10px] font-bold uppercase tracking-[0.2em]">Confidential Files</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
                            Calvo Creativo: Casos De Éxito<br />
                            <span className="text-[#ffb300]">Tus 'Greatest Hits'</span>
                        </h1>

                        <div className="grid md:grid-cols-2 gap-8">
                            <p className="text-gray-400 font-light leading-relaxed max-w-xl">
                                The Calvo Creativo Collection. Archivos clasificados, crónicas de batalla y éxitos de taquilla. <span className="text-[#ffb300]">Editor's Note:</span> Every campaign is a fight, every ranking is a hit record. Browse the liner notes from Calvo Creativo's biggest wins.
                            </p>

                            <div className="flex justify-end items-end">
                                <div className="bg-[#1a1a1a] border border-[#333] px-4 py-2 flex items-center gap-2 text-[10px] font-mono text-[#ffb300]">
                                    <span className="material-symbols-outlined text-sm">calendar_today</span> UPDATED: OCT 1974
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Filter Bar */}
                <section className="px-4 py-8 border-b border-[#333] bg-[#0a0a0a]">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="w-full md:w-auto relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">search</span>
                            <input type="text" placeholder="Search the archives..." className="bg-[#1a1a1a] border border-[#333] pl-10 pr-4 py-2 text-xs font-mono w-full md:w-64 focus:border-[#ffb300] outline-none text-[#ffb300]" />
                        </div>

                        <div className="flex gap-2">
                            <button className="bg-[#ffb300] text-black px-4 py-1 text-[10px] font-bold uppercase border border-[#ffb300]">All Tracks</button>
                            <button className="bg-transparent text-gray-500 px-4 py-1 text-[10px] font-bold uppercase border border-[#333] hover:border-gray-500 hover:text-gray-300">Technical SEO</button>
                            <button className="bg-transparent text-gray-500 px-4 py-1 text-[10px] font-bold uppercase border border-[#333] hover:border-gray-500 hover:text-gray-300">Content</button>
                            <button className="bg-transparent text-gray-500 px-4 py-1 text-[10px] font-bold uppercase border border-[#333] hover:border-gray-500 hover:text-gray-300">Local</button>
                        </div>
                    </div>
                </section>

                {/* Grid Cases */}
                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Case 1 */}
                        <div className="bg-[#1a1a1a] border border-[#333] group hover:border-[#ffb300] transition-colors relative">
                            <div className="absolute top-0 right-10 bg-[#ffb300]/20 h-2 w-12 z-10"></div>
                            <div className="relative h-64 overflow-hidden border-b border-[#333]">
                                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 border border-[#ffb300] text-[#ffb300] size-8 flex items-center justify-center font-bold text-sm bg-black">01</div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold uppercase text-white leading-tight">The E-Commerce<br />Knockout</h3>
                                    <span className="material-symbols-outlined text-gray-600 group-hover:text-[#ffb300] transition-colors -rotate-45 group-hover:rotate-0 transform">arrow_forward</span>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-mono">
                                    A heavyweight bout against declining traffic. How Calvo Creativo regained the title with a technical audit and aggressive content strategy...
                                </p>
                                <div className="flex justify-between items-end border-t border-[#333] pt-4">
                                    <div className="flex gap-2">
                                        <span className="bg-[#333] text-gray-300 px-1 text-[8px] uppercase">Tech SEO</span>
                                        <span className="bg-[#333] text-gray-300 px-1 text-[8px] uppercase">Retail</span>
                                    </div>
                                    <span className="text-[#ffb300] text-[10px] font-bold font-mono">+200% Organic</span>
                                </div>
                            </div>
                        </div>

                        {/* Case 2 */}
                        <div className="bg-[#1a1a1a] border border-[#333] group hover:border-[#ffb300] transition-colors relative">
                            <div className="absolute top-0 right-10 bg-[#ffb300]/20 h-2 w-12 z-10"></div>
                            <div className="relative h-64 overflow-hidden border-b border-[#333]">
                                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 border border-[#ffb300] text-[#ffb300] size-8 flex items-center justify-center font-bold text-sm bg-black">02</div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold uppercase text-white leading-tight">Local SEO Flow</h3>
                                    <span className="material-symbols-outlined text-gray-600 group-hover:text-[#ffb300] transition-colors -rotate-45 group-hover:rotate-0 transform">arrow_forward</span>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-mono">
                                    Dominating the block. Calvo Creativo put a local barbershop on the map using hyper-local citations and a "Salsa Dura" content cadence.
                                </p>
                                <div className="flex justify-between items-end border-t border-[#333] pt-4">
                                    <div className="flex gap-2">
                                        <span className="bg-[#333] text-gray-300 px-1 text-[8px] uppercase">Local</span>
                                        <span className="bg-[#333] text-gray-300 px-1 text-[8px] uppercase">GMB</span>
                                    </div>
                                    <span className="text-[#ffb300] text-[10px] font-bold font-mono">Top 3 Map Pack</span>
                                </div>
                            </div>
                        </div>

                        {/* Case 3 */}
                        <div className="bg-[#1a1a1a] border border-[#333] group hover:border-[#ffb300] transition-colors relative">
                            <div className="absolute top-0 right-10 bg-[#ffb300]/20 h-2 w-12 z-10"></div>
                            <div className="relative h-64 overflow-hidden border-b border-[#333] bg-white">
                                <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-50 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 border border-[#ffb300] text-[#ffb300] size-8 flex items-center justify-center font-bold text-sm bg-black">03</div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold uppercase text-white leading-tight">The Content Remix</h3>
                                    <span className="material-symbols-outlined text-gray-600 group-hover:text-[#ffb300] transition-colors -rotate-45 group-hover:rotate-0 transform">arrow_forward</span>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-mono">
                                    Sampling old assets to create new hits. How Calvo Creativo's refresh strategy turned zombie pages into traffic magnets.
                                </p>
                                <div className="flex justify-between items-end border-t border-[#333] pt-4">
                                    <div className="flex gap-2">
                                        <span className="bg-[#333] text-gray-300 px-1 text-[8px] uppercase">Content</span>
                                        <span className="bg-[#333] text-gray-300 px-1 text-[8px] uppercase">Strategy</span>
                                    </div>
                                    <span className="text-[#ffb300] text-[10px] font-bold font-mono">150% Leads</span>
                                </div>
                            </div>
                        </div>

                        {/* Locked/Redacted Cases */}
                        <div className="bg-[#0f0f0f] border border-[#222] relative flex items-center justify-center min-h-[300px] opacity-50 cursor-not-allowed">
                            <div className="text-center">
                                <span className="material-symbols-outlined text-4xl text-gray-600 mb-2">lock</span>
                                <h3 className="text-lg font-bold uppercase text-gray-500">[Redacted Case]</h3>
                                <p className="text-[10px] text-gray-600 px-8 mt-2">Highly competitive niche. Details currently under NDA.</p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 border-t border-[#ffb300] bg-[#1a0a00]">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h2 className="text-4xl font-black uppercase text-white mb-6">Ready to Record Your Hit?</h2>
                        <p className="text-gray-400 mb-8 font-light">Get in the studio with Calvo Creativo. Let's make some noise.</p>
                        <button className="border-2 border-[#ffb300] text-[#ffb300] px-12 py-3 font-bold uppercase hover:bg-[#ffb300] hover:text-black transition-colors tracking-widest text-sm">
                            Start Project
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
