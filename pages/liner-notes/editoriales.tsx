import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function EditorialesIndex() {
    return (
        <>
            <SeoHead title="Opinión Editoriales: Con Flow y Sabor | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-[#e8e8e5] font-serif pt-20 text-[#1a1a1a]">

                {/* Masthead */}
                <div className="max-w-7xl mx-auto px-4 py-12 border-b border-black md:border-b-4">
                    <div className="text-center">
                        <h1 className="text-6xl md:text-8xl font-headline font-black uppercase leading-none tracking-tighter mb-4 text-[#1a1a1a]">
                            Calvo Creativo: Opinión<br />
                            <i className="font-serif text-[#f9a825] font-light italic">Editoriales</i> Con Flow y<br />
                            Sabor
                        </h1>

                        <div className="flex justify-between items-center border-t border-black pt-2 mt-8 text-[10px] font-sans font-bold uppercase tracking-widest text-gray-500">
                            <div>Vol. 34 — Calvo Creativo</div>
                            <div>Global Pattern: US</div>
                            <div>Est. 1978</div>
                        </div>
                    </div>
                </div>

                <section className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-12 gap-12">

                    {/* Main Feature */}
                    <div className="lg:col-span-8">
                        <div className="mb-6 relative group cursor-pointer">
                            <div className="absolute top-4 left-4 bg-black text-white px-2 py-1 text-[10px] uppercase font-bold tracking-widest z-10">Featured</div>
                            <div className="h-[400px] overflow-hidden bg-black mb-6">
                                <img src="https://images.unsplash.com/photo-1555676329-373d43232822?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                            </div>

                            <div className="flex items-center gap-4 text-[10px] font-sans font-bold uppercase text-[#f9a825] mb-2">
                                <span>SEO Fight Club</span>
                                <span>•</span>
                                <span>Oct 24, 2024</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black font-headline uppercase leading-none mb-4 group-hover:text-[#f9a825] transition-colors">Why Technical Audits are the Ground Game of Search</h2>

                            <p className="text-lg leading-relaxed text-gray-800 mb-6 drop-cap">
                                In the octagon of search engines, content is striking—it's flashy, it gets the crowd roaring, and it can end a fight in seconds. But technical SEO? That's the grappling. That's the ground game that keeps you in the fight when the algorithm tries to take you down. Without a solid technical foundation, your beautiful content is just flailing in the wind. Let's dive deep into the mechanics of visibility and why a clean crawl budget is worth more than a viral post.
                            </p>

                            <Link href="/liner-notes/seo-rumble" className="text-[10px] font-sans font-bold uppercase text-[#f9a825] hover:text-black flex items-center gap-2 border-b border-[#f9a825] pb-1 inline-block">
                                Read Full Editorial <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 border-t border-black pt-12 mt-12">
                            {/* Sub Feature 1 */}
                            <div>
                                <div className="h-48 overflow-hidden bg-gray-200 mb-4">
                                    <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale contrast-125" />
                                </div>
                                <div className="text-[9px] font-sans font-bold uppercase text-[#f9a825] mb-1">Salsa Dura Strategy</div>
                                <h3 className="text-2xl font-black font-headline uppercase leading-tight mb-2">Syncopated Content: Off-Beat Publishing Schedules</h3>
                                <p className="text-xs font-sans text-gray-600 leading-relaxed mb-4">
                                    Just like the syncopated rhythms of Fania Records, Google's updates require a keen ear and a willingness to improvise. Don't publish on the 1, publish on the 'and'.
                                </p>
                            </div>

                            {/* Sub Feature 2 */}
                            <div>
                                <div className="h-48 overflow-hidden bg-gray-200 mb-4">
                                    <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale contrast-125" />
                                </div>
                                <div className="text-[9px] font-sans font-bold uppercase text-[#f9a825] mb-1">Remix Culture</div>
                                <h3 className="text-2xl font-black font-headline uppercase leading-tight mb-2">Sampling Culture: Hip-Hop's Lesson for Content Strategy</h3>
                                <p className="text-xs font-sans text-gray-600 leading-relaxed mb-4">
                                    Remixing isn't stealing; it's recontextualizing. How to repurpose your best assets without losing the soul of the original message in a sea of AI content.
                                </p>
                            </div>
                        </div>

                        {/* Quote Banner */}
                        <div className="bg-[#f0ece2] border-y-4 border-[#e0e0e0] p-8 mt-12 text-center">
                            <p className="text-3xl font-black font-serif italic text-gray-800 mb-4">
                                "If you aren't optimizing for the entity, you're just optimizing for strings. And strings break."
                            </p>
                            <div className="text-[10px] font-sans font-bold uppercase text-gray-400">— The Algorithm Whisperer</div>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-12">
                        {/* Quote Card */}
                        <div className="bg-[#1a1a1a] p-8 text-white relative overflow-hidden">
                            <span className="material-symbols-outlined text-6xl absolute top-4 right-4 text-white/10 rotate-12">format_quote</span>
                            <div className="text-[10px] font-sans font-bold uppercase text-[#f9a825] mb-4">The Daily Rant</div>
                            <p className="font-serif italic text-lg leading-relaxed mb-6">
                                "Stop buying backlinks from sites that look like they were built in 2003. It's not vintage, it's spam."
                            </p>
                            <div className="text-[9px] font-sans font-bold uppercase text-gray-500 text-right">— Angry SEO Guy</div>
                        </div>

                        {/* Quick Hits List */}
                        <div>
                            <h4 className="font-headline font-black uppercase text-xl border-b-2 border-black pb-2 mb-6">Quick Hits</h4>
                            <ul className="space-y-6">
                                {[
                                    { id: '01', title: 'Schema Markup for Dummies', desc: 'Tech SEO' },
                                    { id: '02', title: 'Why your H1s are weak', desc: 'Content' },
                                    { id: '03', title: 'Voice Search is still coming', desc: 'Trends' },
                                    { id: '04', title: 'Core Web Vitals Panic', desc: 'Performance' },
                                ].map((hit, i) => (
                                    <li key={i} className="flex gap-4 group cursor-pointer">
                                        <div className="text-[#f9a825] font-headline font-black text-lg">{hit.id}</div>
                                        <div>
                                            <h5 className="font-serif font-bold leading-tight group-hover:text-[#f9a825] transition-colors">{hit.title}</h5>
                                            <div className="text-[9px] font-sans uppercase text-gray-500 mt-1">{hit.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Archives Widget */}
                        <div className="border border-dashed border-gray-400 p-6 text-center bg-white">
                            <span className="material-symbols-outlined text-4xl text-gray-400 mb-2">inventory_2</span>
                            <h4 className="font-headline font-black uppercase mb-2">The Archives</h4>
                            <p className="text-xs font-sans text-gray-500 mb-4">Dig through the crates of past editorials.</p>
                            <button className="w-full border border-black px-4 py-2 text-[10px] font-bold uppercase hover:bg-black hover:text-white transition-colors">Browse All</button>
                        </div>

                        {/* Sponsored Ad */}
                        <div className="bg-[#f9a825] p-8 text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            <div className="text-[9px] font-sans font-bold uppercase text-black/50 mb-4">Sponsored</div>
                            <h3 className="font-headline font-black uppercase text-4xl mb-2 italic">Flow State SEO</h3>
                            <p className="font-serif italic text-sm mb-6">Master the rhythm of the algorithm.</p>
                            <button className="bg-black text-white px-6 py-3 text-[10px] font-bold uppercase hover:scale-105 transition-transform">Join Course</button>
                        </div>
                    </div>

                </section>
            </main>
            <Footer />
        </>
    );
}
