import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';
import { getSortedPostsData } from '@/lib/posts';

export async function getStaticProps() {
    const allPosts = getSortedPostsData();
    // Simulate "popular" by taking the most recent ones for now, or specific curated ones if a 'popular' tag existed.
    // Efficient fallback: Take top 3.
    const popularPosts = allPosts.slice(0, 3);
    return {
        props: {
            popularPosts
        },
    };
}

export default function Custom404({ popularPosts }: { popularPosts: any[] }) {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white font-sans flex flex-col">
            <SeoHead title="404: Disco Rayado | Calvo Creativo" />
            <Navigation />

            <main className="flex-grow flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-8 py-20">

                {/* Background Noise & Vinyl Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>

                {/* Spinning/Broken Vinyl Visual */}
                <div className="relative w-64 h-64 md:w-96 md:h-96 mb-12 group">
                    {/* The Record */}
                    <div className="absolute inset-0 rounded-full border-4 border-gray-800 bg-gray-900 shadow-2xl flex items-center justify-center animate-[spin_5s_linear_infinite] group-hover:[animation-play-state:paused]">
                        {/* Grooves */}
                        <div className="absolute inset-2 rounded-full border border-gray-800/50"></div>
                        <div className="absolute inset-8 rounded-full border border-gray-800/50"></div>
                        <div className="absolute inset-16 rounded-full border border-gray-800/50"></div>
                        <div className="absolute inset-24 rounded-full border border-gray-800/50"></div>

                        {/* Label */}
                        <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center text-center p-2 border-4 border-black relative">
                            <span className="font-display font-black text-black text-2xl uppercase leading-none transform -rotate-12">
                                Error<br />404
                            </span>
                        </div>
                    </div>
                    {/* The Crack (Visual Glitch) */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-black/80 transform rotate-45 z-10 filter blur-[1px]"></div>

                    {/* The Needle Arm (Static abstraction) */}
                    <div className="absolute -top-10 -right-10 w-48 h-2 bg-gray-400 transform rotate-45 origin-top-right shadow-xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-2xl">
                    <span className="font-mono text-red-500 text-sm uppercase tracking-[0.2em] mb-4 block">
                        System Failure // Track Not Found
                    </span>
                    <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-6 uppercase tracking-tighter leading-none">
                        Disco<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Rayado</span>.
                    </h1>
                    <p className="text-xl text-gray-400 font-light mb-8 max-w-lg mx-auto">
                        La aguja saltó. La pista que buscas se ha perdido o nunca se grabó. Pero no pares la fiesta.
                    </p>

                    {/* Fake Search Bar */}
                    <div className="max-w-md mx-auto mb-12 relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-gray-500">search</span>
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-none leading-5 bg-black/50 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-gray-900 focus:border-red-500 transition-colors font-mono text-sm"
                            placeholder="¿Qué intentabas encontrar?"
                            readOnly // Since it's visual for 404
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <button className="h-full px-4 bg-red-600 hover:bg-red-500 text-white font-bold uppercase text-xs transition-colors">
                                Buscar
                            </button>
                        </div>
                    </div>

                    {/* Tracklist (Navigation) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left border-t border-gray-800 pt-8">
                        <Link href="/" className="group p-4 border border-transparent hover:border-gray-800 hover:bg-gray-900 transition-all rounded">
                            <div className="text-xs text-gray-500 font-mono mb-1">Track 01</div>
                            <div className="font-display text-xl text-white group-hover:text-red-500 transition-colors">Inicio</div>
                            <div className="text-sm text-gray-400">Volver al Album Cover</div>
                        </Link>

                        {/* Dynamic Popular/Recent Posts */}
                        {popularPosts && popularPosts.length > 0 ? (
                            popularPosts.map((post, idx) => (
                                <Link key={post.id} href={`/liner-notes/${post.id}`} className="group p-4 border border-transparent hover:border-gray-800 hover:bg-gray-900 transition-all rounded hidden md:block">
                                    <div className="text-xs text-gray-500 font-mono mb-1">Track 0{idx + 2}</div>
                                    <div className="font-display text-lg text-white group-hover:text-yellow-500 transition-colors truncate">{post.title}</div>
                                    <div className="text-sm text-gray-400">Liner Notes</div>
                                </Link>
                            ))
                        ) : (
                            <Link href="/consultoria" className="group p-4 border border-transparent hover:border-gray-800 hover:bg-gray-900 transition-all rounded">
                                <div className="text-xs text-gray-500 font-mono mb-1">Track 02</div>
                                <div className="font-display text-xl text-white group-hover:text-yellow-500 transition-colors">Lado A</div>
                                <div className="text-sm text-gray-400">Servicios & Hits</div>
                            </Link>
                        )}

                        {/* Always show Lab as last option if space permits or as backup */}
                        <Link href="/lab" className="group p-4 border border-transparent hover:border-gray-800 hover:bg-gray-900 transition-all rounded">
                            <div className="text-xs text-gray-500 font-mono mb-1">Bonus Track</div>
                            <div className="font-display text-xl text-white group-hover:text-acid-green transition-colors">Lado B (Lab)</div>
                            <div className="text-sm text-gray-400">Experimentos & Code</div>
                        </Link>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
