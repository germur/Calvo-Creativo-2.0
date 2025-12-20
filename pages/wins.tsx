import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function Wins() {
    return (
        <>
            <SeoHead title="Recent Wins: The Fight Record | Calvo Creativo" />
            <Navigation />

            {/* Comic Book Background */}
            <main className="min-h-screen bg-[#f0f0e8] font-sans selection:bg-[#fff700] selection:text-black py-12 px-4 relative overflow-hidden">

                {/* Halftone Pattern Overlay */}
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <div className="max-w-7xl mx-auto relative z-10 w-full">

                    {/* Header Section: Comic Strip Title */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-8 border-black pb-6">
                        <div>
                            <div className="bg-[#fff700] border-4 border-black px-4 py-1 inline-block transform -rotate-2 mb-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <span className="font-black font-condensed uppercase text-xs tracking-widest">Location: SERP City / Mission: Domination</span>
                            </div>
                            <h1 className="text-8xl md:text-9xl font-black italic uppercase leading-[0.85] text-black drop-shadow-[5px_5px_0px_rgba(255,0,0,1)]">
                                RECENT<br />
                                <span className="text-[#ff0d0d]">WINS</span>
                            </h1>
                        </div>

                        <div className="hidden lg:block relative">
                            <span className="text-[10rem] font-black text-[#e0e0e0] leading-none absolute -top-20 -right-20 transform rotate-12 -z-10 select-none">POW!</span>
                        </div>

                        <div className="flex bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            {['1 Round', '6 Rounds', 'Full Fight'].map((item, i) => (
                                <button key={item} className={`px-6 py-3 font-bold uppercase hover:bg-black hover:text-[#fff700] transition-colors ${i === 1 ? 'bg-black text-[#fff700]' : 'text-black'} ${i !== 2 ? 'border-r-4 border-black' : ''}`}>
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* Main Event Chart */}
                        <div className="lg:col-span-8 bg-white border-8 border-black p-0 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
                            <div className="bg-[#ffc107] border-b-8 border-black p-4 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-4xl font-black">monitoring</span>
                                    <span className="text-3xl font-black uppercase italic">Traffic Velocity</span>
                                </div>
                                <div className="bg-black text-white px-3 py-1 font-bold text-xs uppercase tracking-widest">Client: Barretto Power</div>
                            </div>

                            <div className="p-8 relative">
                                {/* Speech Bubble */}
                                <div className="absolute top-4 left-4 bg-[#0d47a1] border-4 border-black p-4 text-white max-w-xs transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10">
                                    <p className="font-bold uppercase text-sm leading-tight">Status Update:<br />We are crushing the competition in the lightweight division!</p>
                                </div>

                                <div className="flex justify-end items-end mb-8 relative">
                                    <div className="text-right">
                                        <div className="bg-[#ff0d0d] text-white px-2 py-0.5 inline-block text-xs font-black uppercase mb-1 transform rotate-2">Unstoppable</div>
                                        <div className="text-9xl font-black italic tracking-tighter leading-none">+200%</div>
                                    </div>
                                </div>

                                {/* Bar Chart CSS */}
                                <div className="flex items-end h-64 gap-2 md:gap-8 px-4 border-b-8 border-black pb-0">
                                    {[
                                        { h: '20%', label: 'JAN', color: 'bg-gray-200' },
                                        { h: '35%', label: 'FEB', color: 'bg-gray-400' },
                                        { h: '45%', label: 'MAR', color: 'bg-[#0d47a1]' },
                                        { h: '50%', label: 'APR', color: 'bg-[#ffc107]', bubble: true },
                                        { h: '65%', label: 'MAY', color: 'bg-[#ff0000]' },
                                        { h: '95%', label: 'JUN', color: 'bg-[#ff0000] pattern-dots', star: true },
                                    ].map((bar, i) => (
                                        <div key={i} className="flex-1 flex flex-col justify-end h-full group relative">
                                            {bar.bubble && (
                                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white border-4 border-black px-2 py-1 text-xs font-black mb-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-20 whitespace-nowrap">
                                                    OUCH!
                                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r-4 border-b-4 border-black transform rotate-45"></div>
                                                </div>
                                            )}
                                            {bar.star && (
                                                <div className="absolute -top-8 -right-4 text-4xl text-[#fff700] z-20 animate-pulse">💥</div>
                                            )}
                                            <div className={`w-full border-4 border-black hover:bg-black transition-all ${bar.color}`} style={{ height: bar.h }}></div>
                                            <span className="text-center font-black uppercase mt-2 text-sm">{bar.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Cards */}
                        <div className="lg:col-span-4 flex flex-col gap-6">

                            {/* Main Event Card */}
                            <div className="bg-[#ff0d0d] border-8 border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-white text-center transform rotate-1">
                                <div className="bg-[#ffc107] border-4 border-black inline-block px-4 py-1 text-black font-black uppercase text-xl mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"> Main Event </div>

                                <div className="bg-white text-black p-4 border-4 border-black mb-4 transform -rotate-1">
                                    <div className="flex justify-between items-center border-b-2 border-black border-dashed pb-2 mb-2">
                                        <span className="font-bold uppercase text-sm">Keyword</span>
                                        <span className="font-bold uppercase text-sm">Rank</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center font-black text-xl">
                                            <span>"SEO SPECIALIST"</span>
                                            <span className="text-[#ff0d0d] text-3xl">#1</span>
                                        </div>
                                        <div className="flex justify-between items-center font-black text-xl text-gray-500">
                                            <span>"WEB DESIGN"</span>
                                            <span className="text-[#ff0d0d] text-2xl">#3</span>
                                        </div>
                                        <div className="flex justify-between items-center font-black text-xl">
                                            <span>"CONTENT KING"</span>
                                            <span className="text-[#ff0d0d] text-3xl">#1</span>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-5xl font-black italic shadow-black drop-shadow-md">+10 SPOTS</h3>
                                <p className="font-bold uppercase tracking-widest text-sm">Climbed this week</p>
                            </div>

                            {/* Recent Fights List */}
                            <div className="bg-white border-8 border-black p-0 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                                <div className="p-4 border-b-4 border-black flex justify-between items-center">
                                    <h3 className="font-black text-2xl uppercase">Recent Fights</h3>
                                    <span className="material-symbols-outlined text-2xl">print</span>
                                </div>
                                <div className="divide-y-4 divide-black">
                                    {[
                                        { name: 'Sneaker Head', tag: 'E-Commerce', icon: 'shopping_bag' },
                                        { name: 'Beat Maker', tag: 'Local SEO', icon: 'mic' },
                                        { name: 'Iron Gym', tag: 'Strategy', icon: 'fitness_center' }
                                    ].map((client, i) => (
                                        <div key={i} className="p-4 flex items-center justify-between hover:bg-[#fff700] transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-4">
                                                <div className="size-10 bg-gray-200 border-2 border-black flex items-center justify-center">
                                                    <span className="material-symbols-outlined">{client.icon}</span>
                                                </div>
                                                <div>
                                                    <div className="font-black uppercase text-lg leading-none">{client.name}</div>
                                                    <div className="bg-black text-white px-1 py-0.5 text-[10px] uppercase font-bold inline-block">{client.tag}</div>
                                                </div>
                                            </div>
                                            <div className="size-6 border-2 border-black bg-[#00e676] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-white">
                                                <span className="material-symbols-outlined text-sm font-bold">check</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 bg-[#ffc107] border-t-4 border-black text-center font-black uppercase hover:bg-black hover:text-[#ffc107] cursor-pointer transition-colors flex justify-center items-center gap-2">
                                    View All Cards <span className="material-symbols-outlined">arrow_forward</span>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Bottom Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-[#ffc107] border-8 border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between">
                            <div>
                                <h3 className="font-black uppercase text-xl">Organic Traffic</h3>
                                <div className="text-7xl font-black italic text-black">+120%</div>
                                <p className="text-xs font-bold uppercase mt-2">Vs Last Month (The crowd goes wild!)</p>
                            </div>
                            <div className="size-24 bg-white border-4 border-black rounded-full flex items-center justify-center animate-spin-slow">
                                <span className="material-symbols-outlined text-6xl">public</span>
                            </div>
                        </div>

                        <div className="bg-[#0d47a1] border-8 border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-black uppercase text-xl mb-2">Conversion</h3>
                                <div className="flex items-end gap-2">
                                    <div className="text-7xl font-black italic">5.2%</div>
                                    <div className="bg-[#00e676] text-black border-2 border-black px-2 py-0.5 font-bold text-xs mb-4 rotate-3">+1.5% LIFT</div>
                                </div>
                                <p className="text-sm font-bold">Landing hits where it counts.</p>
                            </div>
                            <div className="absolute -right-4 -bottom-4 opacity-50">
                                <span className="material-symbols-outlined text-9xl">target</span>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
