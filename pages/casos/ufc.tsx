import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function UfcCase() {
    return (
        <>
            <SeoHead title="TOP SECRET: UFC Audit | Calvo Creativo" />
            <Navigation />

            {/* Dossier Background */}
            <main className="min-h-screen bg-[#050505] font-mono text-white pt-20 pb-20 relative overflow-hidden selection:bg-[#ff1744] selection:text-white">

                {/* Grid Overlay */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
                    style={{ backgroundImage: 'linear-gradient(#1f1f1f 1px, transparent 1px), linear-gradient(90deg, #1f1f1f 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">

                    {/* Top Bar Status */}
                    <div className="flex justify-between items-center text-[10px] text-gray-500 border-b border-gray-800 pb-2 mb-8 uppercase tracking-[0.2em]">
                        <div>
                            <span className="text-[#ff1744] mr-2">🔒 root@vibecoding:</span>
                            /el-artista/stats-ufc/
                        </div>
                        <div className="flex gap-4">
                            <span className="border border-[#ff1744] text-[#ff1744] px-1">EASTER_EGG_LVL_01</span>
                            <Link href="/el-artista" className="hover:text-white transition-colors">&lt; RETURN TO PROFILE</Link>
                        </div>
                    </div>

                    {/* Header: Classified Stamp */}
                    <div className="relative mb-16 border-l-4 border-[#ff1744] pl-6 py-4 bg-gradient-to-r from-white/5 to-transparent">
                        <div className="inline-block bg-[#ff1744] text-black text-xs font-black px-2 py-0.5 mb-2">TOP SECRET</div>
                        <div className="text-gray-400 text-xs mb-1 tracking-wider uppercase">Case: UFC_SEO_AUDIT_V2</div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase text-white leading-[0.85] tracking-tight mb-4">
                            STATS UFC<br />
                            <span className="text-gray-600">RECONNAISSANCE</span>
                        </h1>
                        <p className="text-[#ff1744] text-xs uppercase tracking-widest animate-pulse">
                            &gt;&gt; Unsolicited Technical Analysis of UFC.COM Mobile Performance Infrastructure.
                        </p>

                        {/* Stamp */}
                        <div className="absolute top-0 right-0 md:right-20 transform rotate-12 border-4 border-[#ff1744]/30 p-4 text-[#ff1744]/30 font-black text-4xl uppercase tracking-widest pointer-events-none select-none">
                            Confidential<br />Dossier
                        </div>
                    </div>

                    {/* Executive Summary Console */}
                    <div className="bg-[#0a0a0a] border border-gray-800 p-6 mb-12 font-mono text-sm leading-relaxed shadow-2xl relative">
                        <div className="flex items-center gap-2 mb-4 text-[#ff1744]">
                            <span className="material-symbols-outlined text-sm">terminal</span>
                            <h3 className="uppercase tracking-widest font-bold">Executive Summary</h3>
                        </div>

                        <p className="text-gray-300 mb-4">
                            <span className="text-white font-bold">&gt; [INIT_SCAN]:</span> Target URL <span className="bg-gray-800 px-1 text-white">ufc.com/rankings</span> exhibits dominant domain authority but suffers from critical <span className="bg-[#ff1744] text-black px-1">LCP LATENCY</span> latency on mobile networks.
                        </p>
                        <p className="text-gray-400">
                            While the "fighter reach" (backlink profile) is heavyweight-class, the <span className="bg-[#ff1744] text-black px-1">CORE WEB VITALS</span> suggest poor defensive movement against Google's latest algorithm updates. <span className="text-white font-bold">Strategy:</span> Neutralize <span className="bg-[#ff1744] text-black px-1">RENDER BLOCKING JS</span> to secure the belt in SERP rankings.
                        </p>

                        <div className="mt-6 border border-[#ff1744]/50 border-dashed p-2 text-[#ff1744] text-xs text-center uppercase bg-[#ff1744]/5">
                            [ ! ] ALERT: Unused Javascript Payloads Detected in HEAD
                        </div>
                    </div>

                    {/* Tale of the Tape - Comparison */}
                    <div className="border border-gray-800 bg-[#0a0a0a] p-8 relative">
                        <div className="absolute top-0 left-0 bg-[#ff1744] text-black text-[10px] font-bold px-2 uppercase">Red Corner</div>
                        <div className="absolute top-0 right-0 text-white/50 text-[10px] font-bold px-2 uppercase border-l border-b border-gray-800">Vs. Industry Benchmark</div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 items-center">

                            {/* Input: UFC.COM */}
                            <div className="text-center">
                                <h3 className="text-2xl font-black uppercase mb-8">UFC.COM</h3>

                                <div className="mb-8">
                                    <div className="text-5xl font-black text-white">91</div>
                                    <div className="h-0.5 w-full bg-white mt-1 mb-2"></div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-widest">Domain Rating</div>
                                </div>

                                <div className="mb-8">
                                    <div className="text-5xl font-black text-[#ff1744]">2.4s</div>
                                    <div className="h-0.5 w-full bg-[#ff1744] mt-1 mb-2"></div>
                                    <div className="text-[10px] text-[#ff1744] uppercase tracking-widest">Load Speed (LCP)</div>
                                </div>

                                <div>
                                    <div className="text-3xl font-bold text-white">12.5M</div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Backlinks</div>
                                </div>
                            </div>

                            {/* VS Graphic */}
                            <div className="flex flex-col items-center justify-center opacity-80">
                                <div className="size-16 border border-[#ff1744] rounded-full flex items-center justify-center text-[#ff1744] mb-4 animate-pulse">
                                    <span className="material-symbols-outlined text-3xl">equalizer</span>
                                </div>
                                <h4 className="text-xl font-black uppercase text-white tracking-tighter italic">Technical<br />Matchup</h4>
                                <div className="flex gap-1 mt-2">
                                    <div className="w-8 h-px bg-gray-700"></div>
                                    <div className="text-[10px] text-gray-700 uppercase">Stats</div>
                                    <div className="w-8 h-px bg-gray-700"></div>
                                </div>
                            </div>

                            {/* Input: Benchmark */}
                            <div className="text-center opacity-60">
                                <h3 className="text-xl font-bold uppercase mb-8 text-gray-400">Benchmark</h3>

                                <div className="mb-8">
                                    <div className="text-4xl font-bold text-gray-300">89</div>
                                    <div className="h-0.5 w-full bg-gray-700 mt-1 mb-2"></div>
                                    <div className="text-[10px] text-gray-600 uppercase tracking-widest">Avg. Rating</div>
                                </div>

                                <div className="mb-8">
                                    <div className="text-4xl font-bold text-[#00e676]">1.2s</div>
                                    <div className="h-0.5 w-full bg-[#00e676] mt-1 mb-2"></div>
                                    <div className="text-[10px] text-[#00e676] uppercase tracking-widest">Ideal Speed</div>
                                </div>

                                <div>
                                    <div className="text-2xl font-bold text-gray-300">8.2M</div>
                                    <div className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">Avg. Reach</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="border border-gray-800 bg-[#0f0f0f] p-4 flex items-center justify-between group cursor-pointer hover:border-gray-600">
                            <div>
                                <div className="text-[10px] bg-gray-800 text-gray-400 inline-block px-1 mb-1">RAW DATA</div>
                                <h4 className="text-lg font-bold text-white uppercase">Lighthouse.json</h4>
                                <p className="text-[10px] text-gray-500">Size: 4.2 MB // Encrypted</p>
                            </div>
                            <span className="material-symbols-outlined text-gray-500">description</span>
                        </div>

                        <div className="border border-gray-800 bg-[#0f0f0f] p-4 flex items-center justify-between group cursor-pointer hover:border-gray-600">
                            <div>
                                <div className="text-[10px] bg-gray-800 text-gray-400 inline-block px-1 mb-1">EVIDENCE</div>
                                <h4 className="text-lg font-bold text-white uppercase">Screenshot_Mobile.png</h4>
                                <p className="text-[10px] text-gray-500">Size: 12.8 MB // Uncompressed</p>
                            </div>
                            <span className="material-symbols-outlined text-gray-500">image</span>
                        </div>

                        <button className="bg-[#ff1744] text-white p-4 font-black uppercase tracking-wider hover:bg-red-700 transition-colors flex flex-col items-center justify-center">
                            <span className="material-symbols-outlined mb-2">download</span>
                            <span>Extract Dossier</span>
                            <span className="text-[9px] opacity-70 mt-1">Full PDF Report</span>
                        </button>
                    </div>

                    {/* Warning Footer */}
                    <div className="mt-20 text-center">
                        <span className="material-symbols-outlined text-[#ff1744] mb-2">warning</span>
                        <p className="text-[9px] text-gray-600 uppercase max-w-lg mx-auto leading-relaxed">
                            WARNING: This document contains proprietary analysis. Unauthorized distribution will result in immediate termination of access privileges. <span className="underline decoration-[#ff1744] text-gray-500 cursor-pointer">Burn after reading.</span>
                        </p>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
