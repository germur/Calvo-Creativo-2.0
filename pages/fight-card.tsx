import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function FightCard() {
    return (
        <>
            <SeoHead title="Official Fight Card: Calvo vs Algoritmo | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-[#d4a88c] font-sans pt-20 text-[#1a0a00] relative overflow-hidden">

                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cardboard-flat.png")` }}></div>

                {/* Main Poster Container */}
                <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
                    <div className="border-[12px] border-black bg-gradient-to-br from-[#ffb74d] to-[#e65100] shadow-[20px_20px_0_rgba(0,0,0,0.8)] p-1">
                        <div className="border-[4px] border-black h-full p-6 md:p-12 relative">

                            {/* Header Icons */}
                            <div className="flex justify-center gap-12 mb-8 text-black opacity-80">
                                <span className="material-symbols-outlined text-4xl">sports_mma</span>
                                <span className="font-black uppercase tracking-widest text-sm pt-2">Live from the Calvo Creativo Arena</span>
                                <span className="material-symbols-outlined text-4xl">sports_mma</span>
                            </div>

                            <h1 className="text-center text-7xl md:text-9xl font-black uppercase leading-none tracking-tighter mb-4 text-[#1a0500]">
                                Official<br />Fight Card
                            </h1>

                            <div className="flex justify-center gap-4 mb-12">
                                <div className="border-2 border-black bg-transparent px-4 py-1 text-[10px] uppercase font-bold text-black/60 rotate-2">Heavyweight Title</div>
                                <div className="border-2 border-black bg-transparent px-4 py-1 text-[10px] uppercase font-bold text-black/60 -rotate-2">Sold Out</div>
                                <div className="border-2 border-black bg-transparent px-4 py-1 text-[10px] uppercase font-bold text-black/60 rotate-1">Admit One</div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 items-center border-t-[6px] border-b-[6px] border-black py-12 bg-white/10 backdrop-blur-sm">
                                {/* Fighter Image */}
                                <div className="relative">
                                    <div className="aspect-[3/4] bg-black grayscale mix-blend-multiply opacity-80 contrast-125">
                                        <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-black text-white px-2 text-[10px] uppercase font-black">Main Event</div>
                                </div>

                                {/* Matchup Details */}
                                <div className="text-center md:text-left">
                                    <div className="bg-black text-[#ffb74d] inline-block px-2 text-[10px] font-bold uppercase mb-4">Oct 24, 2024</div>

                                    <h2 className="text-5xl md:text-6xl font-black uppercase leading-[0.9] mb-1">
                                        Calvo Creativo<br />
                                        <span className="text-red-700">VS.<br /></span>
                                        Algoritmo
                                    </h2>

                                    <div className="h-1 w-20 bg-black my-6"></div>

                                    <p className="font-serif italic text-lg leading-snug mb-8 font-bold text-[#3e2723]">
                                        Calvo Creativo goes 12 rounds against the latest algorithm changes. A technical analysis on surviving the volatility and striking back with quality content.
                                    </p>

                                    <div className="grid grid-cols-3 gap-4 border-t-2 border-black pt-4">
                                        <div>
                                            <div className="text-[9px] uppercase font-bold text-black/60">Reading Time</div>
                                            <div className="text-xl font-black">6 MIN</div>
                                        </div>
                                        <div>
                                            <div className="text-[9px] uppercase font-bold text-black/60">Difficulty</div>
                                            <div className="text-xl font-black">HARD</div>
                                        </div>
                                        <div>
                                            <div className="text-[9px] uppercase font-bold text-black/60">Views</div>
                                            <div className="text-xl font-black">12.5k</div>
                                        </div>
                                    </div>

                                    <button className="w-full bg-[#bf360c] text-white font-black uppercase py-4 mt-8 border-2 border-black shadow-[4px_4px_0_black] hover:translate-y-px hover:shadow-[2px_2px_0_black] transition-all flex items-center justify-center gap-2">
                                        Read Full Fight <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>

                            {/* The Undercard */}
                            <div className="mt-12">
                                <h3 className="text-3xl font-black uppercase mb-6 flex items-center gap-4">
                                    The Undercard
                                    <div className="h-1 bg-black flex-grow"></div>
                                    <span className="material-symbols-outlined">flash_on</span>
                                </h3>

                                <div className="space-y-4">
                                    {/* Bout 1 */}
                                    <div className="bg-white/40 border-2 border-black p-4 flex flex-col md:flex-row justify-between items-center gap-4 hover:bg-white/60 transition-colors cursor-pointer group">
                                        <div className="text-center md:text-left flex-1">
                                            <div className="text-[10px] font-black uppercase text-[#bf360c]">Rd. 01 • Oct 12</div>
                                            <div className="text-xl font-black uppercase leading-none">Calvo Creativo</div>
                                            <div className="text-[10px] uppercase font-bold text-black/50">Strategic Vision</div>
                                        </div>
                                        <div className="text-4xl font-black text-black/20 italic">VS</div>
                                        <div className="text-center md:text-right flex-1">
                                            <div className="text-xl font-black uppercase leading-none">Keyword Chaos</div>
                                            <div className="text-[10px] uppercase font-bold text-black/50">Search Volume Noise</div>
                                        </div>
                                        <div className="size-10 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">visibility</span>
                                        </div>
                                    </div>

                                    {/* Bout 2 */}
                                    <div className="bg-white/40 border-2 border-black p-4 flex flex-col md:flex-row justify-between items-center gap-4 hover:bg-white/60 transition-colors cursor-pointer group">
                                        <div className="text-center md:text-left flex-1">
                                            <div className="text-[10px] font-black uppercase text-[#bf360c]">Rd. 02 • Sep 28</div>
                                            <div className="text-xl font-black uppercase leading-none">Calvo Creativo</div>
                                            <div className="text-[10px] uppercase font-bold text-black/50">Authority Building</div>
                                        </div>
                                        <div className="text-4xl font-black text-black/20 italic">VS</div>
                                        <div className="text-center md:text-right flex-1">
                                            <div className="text-xl font-black uppercase leading-none">Link Farms</div>
                                            <div className="text-[10px] uppercase font-bold text-black/50">Black Hat Tactics</div>
                                        </div>
                                        <div className="size-10 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">visibility</span>
                                        </div>
                                    </div>

                                    {/* Bout 3 */}
                                    <div className="bg-white/40 border-2 border-black p-4 flex flex-col md:flex-row justify-between items-center gap-4 hover:bg-white/60 transition-colors cursor-pointer group">
                                        <div className="text-center md:text-left flex-1">
                                            <div className="text-[10px] font-black uppercase text-[#bf360c]">Rd. 03 • Sep 14</div>
                                            <div className="text-xl font-black uppercase leading-none">Calvo Creativo</div>
                                            <div className="text-[10px] uppercase font-bold text-black/50">Local Dominance</div>
                                        </div>
                                        <div className="text-4xl font-black text-black/20 italic">VS</div>
                                        <div className="text-center md:text-right flex-1">
                                            <div className="text-xl font-black uppercase leading-none">Invisible Maps</div>
                                            <div className="text-[10px] uppercase font-bold text-black/50">Zero Visibility</div>
                                        </div>
                                        <div className="size-10 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">visibility</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mt-8 text-center text-[10px] font-black uppercase tracking-widest text-[#3e2723]">
                        Promoted by Calvo Creativo • Est 2024 • NYC / MIA / BCN
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
}
