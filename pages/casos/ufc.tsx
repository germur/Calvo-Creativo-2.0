import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function UfcCase() {
    return (
        <>
            <SeoHead title="CONFIDENTIAL: UFC SEO Audit | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-[#0a0a0a] font-mono text-[#e0e0e0] pt-20 selection:bg-[#ff0000] selection:text-white relative overflow-hidden">

                {/* Background Grid */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="absolute inset-0 bg-[#0a0a0a]/80 z-0 pointer-events-none"></div>

                {/* Top Bar Status */}
                <div className="border-b border-red-900/50 bg-[#1a0505] px-4 py-2 relative z-10 flex justify-between items-center text-[10px] uppercase tracking-widest text-red-500">
                    <div className="flex gap-4">
                        <span className="animate-pulse">● REC</span>
                        <span>root@vibecoding:/el-artista/stats-ufc/</span>
                    </div>
                    <div className="border border-red-900 px-2 py-0.5 rounded">Status: DECRYPTED</div>
                </div>

                <section className="max-w-7xl mx-auto px-4 py-12 relative z-10">

                    {/* Header Docket */}
                    <div className="border-l-4 border-red-600 pl-8 mb-16 relative">
                        <div className="absolute -left-[5px] top-0 w-3 h-3 bg-red-600 rounded-full"></div>
                        <div className="inline-block bg-red-600 text-white px-2 py-0.5 text-[10px] font-bold uppercase mb-2">Top Secret</div>
                        <div className="text-red-600 text-[10px] font-bold uppercase tracking-widest mb-1">CASE: UFC_SEO_AUDIT_V2 | ANALYST: CALVO CREATIVO</div>

                        <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600">
                            Stats UFC<br />Reconnaissance
                        </h1>

                        <div className="text-red-500 text-xs uppercase tracking-widest mb-2">{'>>'} Unsolicited Technical Analysis of UFC.com Mobile Performance Infrastructure.</div>

                        {/* Stamp */}
                        <div className="absolute top-0 right-0 hidden md:block transform rotate-12 border-4 border-red-900/40 text-red-900/40 font-black text-4xl p-4 uppercase tracking-widest mask-grunge">
                            Confidential<br />Dossier
                        </div>
                    </div>

                    {/* Executive Summary */}
                    <div className="mb-20">
                        <h3 className="text-red-500 font-bold uppercase text-lg mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined">terminal</span> Executive Summary
                        </h3>
                        <div className="bg-[#110505] border border-red-900/30 p-8 rounded-lg relative overflow-hidden">
                            {/* Scanning Line Effect */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500/50 shadow-[0_0_20px_#ff0000] animate-scan-y opacity-30"></div>

                            <div className="font-mono text-sm leading-loose text-gray-400 max-w-4xl">
                                <p className="mb-4">
                                    <span className="text-white font-bold">{'>'} [INIT_SCAN]:</span> Target URL <span className="bg-gray-800 text-white px-1">ufc.com/rankings</span> exhibits dominant domain authority but suffers from critical <span className="bg-red-900/50 text-red-200 px-1">latency on mobile networks</span>.
                                </p>
                                <p className="mb-4">
                                    While the "fighter reach" (backlink profile) is heavyweight-class, the <span className="bg-black text-transparent select-none">Core Web Vitals scores</span> suggest poor defensive movement against Google's latest algorithm updates. Strategy: Neutralize <span className="bg-black text-transparent select-none">unused javascript</span> to secure the belt in SERP rankings.
                                </p>
                                <div className="mt-8 border border-red-900/50 border-dashed p-2 inline-block text-[10px] text-red-500 uppercase">
                                    [ ! ] ALERT: Unused JavaScript Payloads Detected in Head
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tale of the Tape (Comparison) */}
                    <div className="mb-20 relative">
                        <div className="flex justify-between items-end mb-6 border-b border-gray-800 pb-2">
                            <h3 className="text-white font-bold uppercase text-2xl flex items-center gap-2">
                                <span className="material-symbols-outlined text-red-600">sports_mma</span> Tale of the Tape
                            </h3>
                            <div className="text-[10px] uppercase bg-gray-900 px-2 py-1 text-gray-500">Vs. Industry Benchmark</div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-px bg-red-900/20 border border-gray-800">
                            {/* Red Corner */}
                            <div className="bg-[#0f0505] p-8 relative">
                                <div className="text-[10px] font-bold text-red-500 uppercase absolute top-4 left-4">Red Corner</div>
                                <h4 className="text-3xl font-black uppercase text-white mb-12 text-center">UFC.com</h4>

                                <div className="space-y-8">
                                    <div>
                                        <div className="flex justify-between text-xs uppercase text-gray-500 mb-1">Domain Rating</div>
                                        <div className="text-5xl font-black text-white">91 <span className="text-sm font-normal text-gray-600">DR</span></div>
                                        <div className="h-1 bg-gray-800 w-full mt-2"><div className="h-full bg-white w-[91%]"></div></div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs uppercase text-gray-500 mb-1">Load Speed</div>
                                        <div className="text-5xl font-black text-red-500">2.4s <span className="text-sm font-normal text-gray-600">LCP</span></div>
                                        <div className="h-1 bg-gray-800 w-full mt-2"><div className="h-full bg-red-600 w-[60%]"></div></div>
                                    </div>
                                </div>
                            </div>

                            {/* Blue Corner */}
                            <div className="bg-[#0a0a0a] p-8 relative">
                                <div className="text-[10px] font-bold text-blue-500 uppercase absolute top-4 right-4">Blue Corner</div>
                                <h4 className="text-3xl font-black uppercase text-gray-400 mb-12 text-center">Benchmark</h4>

                                <div className="space-y-8">
                                    <div className="text-right">
                                        <div className="flex justify-end text-xs uppercase text-gray-500 mb-1">Avg. Rating</div>
                                        <div className="text-5xl font-black text-gray-500">89 <span className="text-sm font-normal text-gray-700">DR</span></div>
                                        <div className="h-1 bg-gray-800 w-full mt-2 flex justify-end"><div className="h-full bg-gray-600 w-[89%]"></div></div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex justify-end text-xs uppercase text-gray-500 mb-1">Ideal Speed</div>
                                        <div className="text-5xl font-black text-green-500">1.2s <span className="text-sm font-normal text-gray-700">LCP</span></div>
                                        <div className="h-1 bg-gray-800 w-full mt-2 flex justify-end"><div className="h-full bg-green-500 w-[90%]"></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Center VS Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full bg-black border-2 border-red-600 flex items-center justify-center z-10 shadow-[0_0_20px_#ff0000]">
                            <span className="font-black italic text-red-600">VS</span>
                        </div>
                    </div>

                    {/* Evidence Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <div className="border border-gray-800 bg-[#111] p-4 group hover:border-red-600 transition-colors">
                            <div className="flex justify-between items-center mb-4">
                                <span className="material-symbols-outlined text-gray-500">description</span>
                                <div className="bg-gray-800 text-[8px] uppercase px-1">Raw Data</div>
                            </div>
                            <div className="font-bold text-white mb-1">LIGHTHOUSE.JSON</div>
                            <div className="text-[10px] text-gray-500">Size: 4.2 MB // Encrypted</div>
                        </div>

                        <div className="border border-gray-800 bg-[#111] p-4 group hover:border-red-600 transition-colors">
                            <div className="flex justify-between items-center mb-4">
                                <span className="material-symbols-outlined text-gray-500">image</span>
                                <div className="bg-gray-800 text-[8px] uppercase px-1">Evidence</div>
                            </div>
                            <div className="font-bold text-white mb-1">SCREENSHOT_MOBILE.PNG</div>
                            <div className="text-[10px] text-gray-500">Size: 12.8 MB // Uncompressed</div>
                        </div>

                        <div className="bg-red-600 p-1 group cursor-pointer hover:bg-red-500 transition-colors flex items-center justify-center">
                            <div className="border-2 border-black w-full h-full flex flex-col items-center justify-center p-4">
                                <span className="material-symbols-outlined text-black text-3xl mb-2">download</span>
                                <div className="font-black uppercase text-black text-xl text-center leading-none">Extract Dossier</div>
                                <div className="text-[8px] font-bold uppercase text-black/70 mt-1">Full PDF Report</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center opacity-50 text-[9px] uppercase tracking-widest text-red-900 mt-20">
                        <span className="material-symbols-outlined text-lg block mb-2">warning</span>
                        Warning: This document contains proprietary analysis by Calvo Creativo.<br />
                        Unauthorized distribution will result in immediate termination of access privileges.
                    </div>

                </section>

            </main>
            <Footer />
        </>
    );
}
