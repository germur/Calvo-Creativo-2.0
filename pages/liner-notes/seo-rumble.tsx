import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function SeoRumbleArticle() {
    return (
        <>
            <SeoHead title="The SEO Rumble: Keyword Knockouts | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-[#f3f0e6] font-sans pt-20 text-[#1a1a1a] selection:bg-red-600 selection:text-white">

                {/* Main Layout Container */}
                <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 px-4 py-8">

                    {/* Article Column */}
                    <div className="lg:col-span-8 bg-white p-8 md:p-12 shadow-xl relative">
                        {/* Paper Top Jagged Edge logic could go here, simplified for now */}

                        <div className="flex justify-between items-start border-b-[3px] border-black pb-6 mb-8">
                            <div>
                                <div className="text-[10px] font-mono font-bold text-red-600 uppercase mb-1">Vol. 4, Issue 12</div>
                                <div className="text-[10px] font-mono font-bold text-gray-500 uppercase">October 12, 1978</div>
                            </div>
                            <div className="flex gap-2">
                                <span className="material-symbols-outlined text-red-600">local_fire_department</span>
                                <span className="text-[10px] font-black uppercase pt-1">Tags: SEO, MMA, Strategy</span>
                            </div>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-black uppercase leading-[0.85] mb-6 tracking-tighter">
                            The SEO Rumble:<br />
                            <span className="bg-red-600 text-white px-2 decoration-clone">Keyword</span><br />
                            Knockouts
                        </h1>

                        <div className="flex items-center gap-4 mb-12">
                            <div className="size-12 rounded-full border-2 border-black overflow-hidden bg-gray-300">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover grayscale" />
                            </div>
                            <div>
                                <div className="font-black uppercase text-sm">By Calvo Creativo</div>
                                <div className="text-[10px] font-mono uppercase text-gray-500">Senior Bout Analyst</div>
                            </div>
                            <div className="flex-grow"></div>
                            <button className="size-8 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"><span className="material-symbols-outlined text-sm">share</span></button>
                            <button className="size-8 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"><span className="material-symbols-outlined text-sm">bookmark</span></button>
                        </div>

                        <div className="mb-12 border-2 border-black p-1">
                            <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=1200" className="w-full h-64 md:h-96 object-cover grayscale contrast-125" />
                            <div className="bg-black text-white text-[9px] font-bold uppercase p-1">Fig 1.1: Ringside Analysis</div>
                        </div>

                        <article className="prose prose-lg prose-headings:font-black prose-p:font-serif prose-p:leading-relaxed max-w-none">
                            <p className="lead font-bold text-2xl font-sans not-italic mb-8">
                                <span className="text-6xl float-left font-black text-red-600 mr-2 leading-none mt-[-10px]">(I)</span>
                                ntro) The algorithm doesn't care about your feelings. It cares about precision, timing, and the sheer volume of the strike. In the world of SEO, much like in the octagon or on the mic, rhythm dictates the winner.
                            </p>

                            <p>
                                When you drop a keyword, it has to hit like a <span className="bg-red-100 px-1 font-bold">snare drum</span> in a boom-bap beat. Too soft, and it gets lost in the noise of the SERPs. Too loud, and you're flagged for spamming—disqualified for an illegal knee to the head of the user experience. We analyzed over 500 competitive niches, treating each SERP feature as a round in a championship bout. The results were bloody, but conclusive.
                            </p>

                            <blockquote className="border-l-4 border-red-600 bg-yellow-100 p-6 my-8 font-black italic text-xl transform rotate-1 shadow-sm relative">
                                "SEO isn't dead. It just moved underground, where the beats are harder and the fights are un-sanctioned."
                                <div className="absolute -top-4 -right-4 bg-yellow-300 size-16 flex items-center justify-center p-2 text-[8px] font-handwriting leading-tight transform -rotate-12 shadow-md">
                                    Don't forget the negative match!
                                </div>
                            </blockquote>

                            <p>
                                The <strong className="text-red-600">"Salsa Dura"</strong> approach implies a polyrhythmic strategy. While your technical SEO keeps the steady clave rhythm—ensuring crawlability and indexation—your content strategy needs to improvise. It needs the brass section's punch. This is what we call "Keyword Syncopation." You don't just target the head term; you dance around it with semantic variants until the query intent is exhausted.
                            </p>

                            {/* Oscilloscope Graphic */}
                            <div className="bg-black p-6 rounded-lg my-12 border border-red-900 border-opacity-50 relative overflow-hidden">
                                <div className="text-[10px] font-mono text-red-600 mb-2 uppercase">Channel 1: Traffic</div>
                                <div className="text-white text-4xl font-black mb-4">+450% <span className="text-xs text-gray-500 font-normal">GAIN</span></div>
                                <div className="h-32 flex items-end gap-1">
                                    {[...Array(40)].map((_, i) => (
                                        <div key={i} className="flex-1 bg-red-600" style={{ height: `${20 + Math.random() * 80}%`, opacity: 0.8 }}></div>
                                    ))}
                                </div>
                                <div className="absolute top-4 right-4 flex items-center gap-2">
                                    <div className="size-2 rounded-full bg-red-600 animate-pulse"></div>
                                    <span className="text-[9px] text-red-600 font-mono">LIVE INPUT</span>
                                </div>
                            </div>

                            <p>
                                As illustrated in the oscilloscope reading above, traffic spikes correlate directly with high-volume "power chords"—keywords that have high difficulty but massive payoff. Don't be afraid to spar with the heavyweights.
                            </p>
                        </article>

                        <div className="mt-16 pt-8 border-t-2 border-black border-dashed flex justify-between items-center">
                            <div>
                                <div className="text-[10px] font-black uppercase text-gray-400">Next Issue:</div>
                                <div className="text-xl font-black uppercase text-red-600 hover:underline cursor-pointer">The Backlink Beef</div>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-[#e0e0e0] border border-black px-4 py-2 text-[10px] font-bold uppercase hover:bg-white transition-colors">Archive This</button>
                                <button className="bg-red-600 border border-black text-white px-4 py-2 text-[10px] font-bold uppercase hover:bg-red-700 transition-colors shadow-[2px_2px_0_black]">Share Cut</button>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-[#f0f0f0] p-6 border-2 border-black sticky top-24">
                            <div className="flex items-center gap-2 border-b-2 border-black pb-4 mb-6">
                                <span className="material-symbols-outlined text-2xl text-red-600">queue_music</span>
                                <h3 className="font-black uppercase text-lg">Side B: Tracks</h3>
                            </div>

                            <ul className="space-y-6">
                                {[
                                    { id: '01', title: 'Semantic Core Theory', time: '3 min read', genre: 'Rap Analytic' },
                                    { id: '02', title: 'Link Building & Grappling', time: '5 min read', genre: 'UFC Tactics' },
                                    { id: '03', title: 'Local SEO: The Block Party', time: '4 min read', genre: 'Salsa Style' }
                                ].map((track) => (
                                    <li key={track.id} className="group cursor-pointer">
                                        <div className="flex gap-3 mb-1">
                                            <div className="text-red-600 font-mono font-bold text-xs pt-1">{track.id}</div>
                                            <div>
                                                <div className="font-bold uppercase text-sm leading-tight group-hover:text-red-600 transition-colors">{track.title}</div>
                                                <div className="text-[10px] font-mono text-gray-500 mt-1">{track.time} • {track.genre}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-4 border-t border-gray-300 text-center">
                                <Link href="/liner-notes" className="text-[10px] font-black uppercase text-red-600 hover:underline flex items-center justify-center gap-1">
                                    View Full Discography <span className="material-symbols-outlined text-xs">arrow_forward</span>
                                </Link>
                            </div>
                        </div>

                        {/* Newsletter Ad */}
                        <div className="bg-red-600 text-white p-6 border-2 border-black text-center shadow-[4px_4px_0_black]">
                            <span className="material-symbols-outlined text-4xl mb-4">mail</span>
                            <h3 className="font-black uppercase text-2xl mb-2 leading-none">Don't Miss<br />The Beat</h3>
                            <p className="text-[10px] font-mono mb-6 mx-auto max-w-[200px]">Get raw SEO tactics delivered to your inbox weekly. No fluff. Just bars.</p>
                            <input type="email" placeholder="Your email..." className="w-full bg-red-700 border border-white/30 text-white text-xs px-3 py-2 mb-2 placeholder-red-300 outline-none focus:border-white" />
                            <button className="w-full bg-white text-red-600 font-black uppercase text-xs py-2 hover:bg-gray-100 transition-colors">Join the Crew</button>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
}
