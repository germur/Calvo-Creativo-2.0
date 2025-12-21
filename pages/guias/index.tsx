import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function GuiasIndex() {
    return (
        <>
            <SeoHead title="Guías Técnicas: Partituras SEO | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-[#f8f9fa] font-sans pt-20 text-[#1d1d1f]">

                {/* Breadcrumb & Header */}
                <section className="px-4 py-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8 flex gap-2">
                            <span>Home</span> / <span>Liner Notes</span> / <span className="text-[#0052cc]">Guías Técnicas</span>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2">
                                <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6 tracking-tighter">
                                    CALVO CREATIVO:<br />
                                    GUÍAS TÉCNICAS,<br />
                                    <span className="text-[#0052cc]">PARTITURAS</span><br />
                                    PARA DOMINAR <span className="text-[#1d1d1f]">EL RITMO</span>
                                </h1>
                                <p className="text-xl text-gray-500 font-light leading-relaxed mb-6">
                                    Archival technical strategies from the Calvo Creativo studio.
                                </p>
                                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                                    VOL. 2: THE SALSA DURA SESSIONS
                                </div>
                                <div className="h-0.5 w-full bg-black mt-8"></div>
                            </div>

                            {/* Editor's Note Side */}
                            <div className="lg:col-span-1">
                                <div className="bg-[#fffde7] p-8 border-t-4 border-[#fff176]">
                                    <h4 className="flex items-center gap-2 font-bold uppercase text-xs mb-4 text-[#bf9a00]">
                                        <span className="material-symbols-outlined text-sm">format_quote</span> Editor's Note
                                    </h4>
                                    <p className="font-serif text-lg italic leading-relaxed text-[#5f4b00] mb-6">
                                        "The rhythm of the algorithm changes, but the fundamentals of the groove remain. Keep your canonicals tight and your sitemaps clean."
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-gray-300 overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1577382749553-6232938090bd?auto=format&fit=crop&q=80&w=200" className="object-cover w-full h-full grayscale" />
                                        </div>
                                        <div className="text-xs">
                                            <div className="font-bold">The Archivist</div>
                                            <div className="text-gray-500 uppercase text-[9px]">Head of SEO</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Area */}
                <section className="px-4 py-12 bg-white">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">

                        {/* Main Feed */}
                        <div className="lg:col-span-8 space-y-8">
                            {/* Search Bar */}
                            <div className="bg-[#f5f5f7] p-2 flex items-center justify-between rounded-lg mb-8">
                                <div className="flex items-center gap-2 w-full px-2">
                                    <span className="material-symbols-outlined text-gray-400">search</span>
                                    <input type="text" placeholder="Search the archives (e.g., Schema, Core Web Vitals)..." className="bg-transparent w-full text-sm outline-none placeholder-gray-400" />
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1 bg-white text-[10px] font-bold uppercase text-[#0052cc] rounded shadow-sm border border-gray-100">Date</button>
                                    <button className="px-3 py-1 bg-transparent text-[10px] font-bold uppercase text-gray-400 hover:text-black">Topic</button>
                                </div>
                            </div>

                            {/* Article Card 1 */}
                            <div className="border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-shadow group cursor-pointer bg-white relative overflow-hidden">
                                <div className="absolute top-8 right-8 text-[#0052cc]">
                                    <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                                <div className="text-[10px] font-mono text-gray-300 uppercase mb-6">REF: SEO-01-24</div>
                                <h2 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-[#0052cc] transition-colors">Schema Markup: The Rhythm Section</h2>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xl">
                                    Structured data implementation protocols from Calvo Creativo. Ensuring the crawl bots dance to your beat without missing a step.
                                </p>
                                <div className="flex gap-2">
                                    <span className="bg-gray-100 text-gray-600 px-2 py-1 text-[10px] font-medium uppercase">JSON-LD</span>
                                    <span className="bg-[#e3f2fd] text-[#0052cc] px-2 py-1 text-[10px] font-medium uppercase">Technical</span>
                                </div>
                            </div>

                            {/* Article Card 2 */}
                            <div className="border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-shadow group cursor-pointer bg-white relative overflow-hidden">
                                <div className="absolute top-8 right-8 text-[#0052cc]">
                                    <span className="material-symbols-outlined">edit</span>
                                </div>
                                <div className="text-[10px] font-mono text-gray-300 uppercase mb-6">REF: CWV-02-24</div>
                                <h2 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-[#0052cc] transition-colors">Core Web Vitals: Optimizing Velocity</h2>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xl">
                                    A precise Calvo Creativo guide to LCP, INP, and CLS. Improving site performance with the intensity of a heavy bag session.
                                </p>
                                <div className="flex gap-2">
                                    <span className="bg-gray-100 text-gray-600 px-2 py-1 text-[10px] font-medium uppercase">Performance</span>
                                    <span className="bg-gray-100 text-gray-600 px-2 py-1 text-[10px] font-medium uppercase">UX</span>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Card 3 */}
                                <div className="border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-shadow group bg-white">
                                    <div className="text-[10px] font-mono text-gray-300 uppercase mb-6">REF: INT-03-24</div>
                                    <h3 className="text-xl font-bold mb-3">International SEO: Global Frequencies</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed mb-6">
                                        Hreflang implementation and geotargeting strategies. Broadcasting your signal across borders clearly.
                                    </p>
                                    <span className="bg-gray-100 text-gray-600 px-2 py-1 text-[10px] font-medium uppercase">Strategy</span>
                                </div>

                                {/* Card 4 */}
                                <div className="border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-shadow group bg-white">
                                    <div className="text-[10px] font-mono text-gray-300 uppercase mb-6">REF: JS-04-24</div>
                                    <h3 className="text-xl font-bold mb-3">JavaScript SEO: Rendering the Flow</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed mb-6">
                                        Handling dynamic content and hydration. Ensuring your JS heavy apps are indexable and smooth.
                                    </p>
                                    <span className="bg-gray-100 text-gray-600 px-2 py-1 text-[10px] font-medium uppercase">React</span>
                                </div>
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-center gap-2 pt-8">
                                <button className="size-8 bg-[#0052cc] text-white text-xs font-bold rounded">1</button>
                                <button className="size-8 bg-white border border-gray-200 text-black text-xs font-bold rounded hover:bg-gray-50">2</button>
                                <button className="size-8 bg-white border border-gray-200 text-black text-xs font-bold rounded hover:bg-gray-50">3</button>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="bg-white border rounded-xl p-8 mb-8 sticky top-24">
                                <h5 className="text-xs font-bold uppercase text-gray-400 mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">folder</span> Related Rhythms
                                </h5>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {['#TechnicalSEO', '#CrawlBudget', '#Vibecoding', '#SalsaDura', '#Indexing', '#Migrations'].map((tag, i) => (
                                        <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 text-[10px] font-bold rounded hover:bg-[#0052cc] hover:text-white cursor-pointer transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="h-px bg-gray-100 w-full mb-8"></div>

                                <h5 className="text-xs font-bold uppercase text-gray-400 mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">headphones</span> On Rotation
                                </h5>

                                <div className="flex items-center gap-4 bg-[#f5f5f7] p-4 rounded-lg">
                                    <div className="size-12 bg-gray-300 rounded-full overflow-hidden animate-spin-slow">
                                        <img src="https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm">Quimbara</div>
                                        <div className="text-xs text-gray-500">Celia Cruz & Johnny Pacheco</div>
                                        <div className="h-1 bg-gray-300 w-24 mt-2 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#0052cc] w-1/3"></div>
                                        </div>
                                    </div>
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
