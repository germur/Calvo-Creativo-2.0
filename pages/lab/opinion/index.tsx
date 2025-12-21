import React from 'react';
import ExperimentLayout from '@/components/ExperimentLayout';
import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '@/lib/posts';

// Define the Post type
type Post = {
    id: string;
    date: string;
    title: string;
    excerpt?: string;
    tags?: string[];
    [key: string]: any;
};

export async function getStaticProps() {
    const allPostsData = getSortedPostsData('opinion');
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Opinion({ allPostsData = [] }: { allPostsData?: Post[] }) {
    // CollectionPage Schema for the Opinion Hub
    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Opinión & Ensayos SEO | El Lado Humano",
        "description": "Análisis profundo y opiniones sin filtro sobre el futuro del SEO. Donde desafiamos el contenido commodity generado por IA.",
        "author": {
            "@type": "Person",
            "name": "Roger Calvo",
            "url": "https://calvocreativo.com/el-artista"
        }
    };

    return (
        <ExperimentLayout
            title="Opinión & Ensayos SEO | Human Perspectives"
            description="Análisis profundo y opiniones sin filtro sobre el futuro del SEO, GEO y la IA. Perspectivas humanas que la IA no puede falsificar."
            keyword="SEO Opinion & Ethics"
            trackNumber="03"
            trackTitle="Deep Dives"
            themeColor="acid-purple"
            mode="light"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* GEO Definition Block */}
            <div className="mb-12 border-l-4 border-acid-purple pl-4 py-2 bg-acid-purple/5">
                <p className="font-mono text-xs text-acid-purple uppercase tracking-widest mb-1">
                    $ define --context "Human Element"
                </p>
                <p className="text-ink/80 font-mono text-sm leading-relaxed">
                    <strong>Information Gain</strong>: En una web saturada de "promedios" generados por IA, Google prioriza la <strong>Experiencia (E-E-A-T)</strong>.
                    La opinión fundamentada y contraria es el único antídoto contra el "slop".
                </p>
            </div>

            {/* Hero Section with Visual Noise */}
            <div className="relative mb-24 py-12">
                <div className="absolute top-0 right-0 w-64 h-64 bg-acid-purple/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

                {/* Visual Badges/Stickers - Floating */}
                <div className="hidden md:block absolute top-10 right-10 rotate-12">
                    <div className="bg-ink text-white font-black uppercase text-xs px-4 py-2 border-2 border-transparent shadow-[4px_4px_0px_#8B5CF6]">
                        Verified Human_
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-8 text-ink" style={{ fontFamily: 'Spline Sans, sans-serif' }}>
                    Lo que la IA <br />
                    <span className="relative">
                        No Puede
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-acid-purple" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                        </svg>
                    </span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-purple to-purple-900 font-display">Alucinar.</span>
                </h1>

                <p className="text-xl text-ink/70 max-w-2xl leading-relaxed">
                    Opinión sin filtro. Estrategia sin relleno. <br />
                    <span className="text-acid-purple font-bold">100% Biológico. 0% Sintético.</span>
                </p>
            </div>

            {/* The Manifesto: Visual Comparison */}
            <section className="mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold uppercase font-display mb-6 text-acid-purple flex items-center gap-3">
                            <span className="material-symbols-outlined">fingerprint</span>
                            El Manifiesto
                        </h2>
                        <div className="prose">
                            <p className="text-lg text-ink font-light leading-relaxed">
                                "En un mar de contenido sintético, la humanidad es el nuevo lujo."
                            </p>
                            <p className="text-ink/60 leading-relaxed">
                                Si le pides a ChatGPT un artículo sobre SEO, te dará el promedio.
                                Yo no escribo promedio. Escribo desde la trinchera.
                            </p>
                        </div>
                    </div>

                    {/* Visual Graphic: Human vs AI */}
                    <div className="relative bg-white border-4 border-ink p-8 shadow-brutal overflow-hidden group hover:-translate-y-1 transition-transform">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-5"></div>

                        <div className="relative z-10 flex justify-between items-center text-center">
                            {/* Human Side */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-20 h-20 bg-acid-purple rounded-full flex items-center justify-center border-4 border-ink shadow-[4px_4px_0px_#000]">
                                    <span className="material-symbols-outlined text-4xl text-white">accessibility_new</span>
                                </div>
                                <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold">Human Insight</span>
                            </div>

                            <div className="text-ink/20 font-black text-2xl">VS</div>

                            {/* AI Side */}
                            <div className="flex flex-col items-center gap-2 opacity-50 grayscale group-hover:grayscale-0 transition-all">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-300">
                                    <span className="material-symbols-outlined text-3xl text-gray-400">smart_toy</span>
                                </div>
                                <span className="font-mono text-xs uppercase tracking-widest text-ink/40">AI Average</span>
                            </div>
                        </div>

                        {/* Data Point */}
                        <div className="mt-8 bg-ink text-white p-4 text-center border-2 border-transparent">
                            <div className="text-3xl font-black mb-1">100%</div>
                            <div className="text-[10px] font-mono uppercase text-acid-purple">Information Gain</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Essays (Deep Dives) - Visual Grid */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-ink text-white rounded-full flex items-center justify-center font-black text-xl">
                        01
                    </div>
                    <h2 className="text-4xl font-black uppercase font-display text-ink">Deep Dives</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {allPostsData.length > 0 ? (
                        allPostsData.map((post, index) => (
                            <Link href={`/lab/opinion/${post.id}`} key={post.id} className="group cursor-pointer block">
                                <div className="bg-white border-4 border-ink overflow-hidden hover:shadow-brutal transition-all hover:-translate-y-2 duration-300 shadow-xl">

                                    {/* Visual Cover Art (CSS Generated) */}
                                    <div className={`h-48 relative overflow-hidden ${index % 2 === 0 ? 'bg-ink' : 'bg-primary'}`}>
                                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>

                                        {/* Floating Icon */}
                                        <div className="absolute bottom-4 right-4">
                                            <span className="material-symbols-outlined text-6xl text-white/20 group-hover:text-white/60 transition-colors">
                                                {index % 2 === 0 ? 'psychology' : 'extension'}
                                            </span>
                                        </div>

                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white text-ink text-[10px] font-bold uppercase px-3 py-1 border-2 border-ink shadow-sm">
                                                Ensayo {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-ink mb-4 leading-tight group-hover:text-primary transition-colors font-display uppercase">
                                            {post.title}
                                        </h3>
                                        <p className="text-ink/70 mb-6 text-sm line-clamp-3 font-medium">
                                            {post.excerpt || 'Click to read full analysis...'}
                                        </p>
                                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                                            Leer Artículo <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-2">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-2 text-center py-20 border-4 border-dashed border-ink/10 rounded-xl">
                            <h3 className="font-display text-2xl text-ink/50 uppercase">No hay ensayos aún</h3>
                            <p className="font-mono text-xs text-ink/40 mt-2">Roger está escribiendo...</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Hot Takes (Micro-Blogging) */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-ink text-white rounded-full flex items-center justify-center font-black text-xl">
                        02
                    </div>
                    <h2 className="text-4xl font-black uppercase font-display text-ink">Hot Takes</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Take 1 */}
                    <div className="bg-white p-6 border-4 border-ink hover:shadow-brutal transition-all group relative">
                        {/* Quote Mark Decoration */}
                        <div className="absolute top-4 right-4 text-6xl text-ink/5 font-serif font-black">"</div>

                        <div className="flex items-start gap-4 mb-4 relative z-10">
                            <div className="size-10 rounded-full bg-ink flex items-center justify-center text-white font-bold text-xs ring-2 ring-white shadow-md">RC</div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-ink text-sm">Roger Calvo</span>
                                    <span className="text-primary material-symbols-outlined text-[14px]">verified</span>
                                    <span className="text-ink/40 text-xs">@calvoseo</span>
                                </div>
                                <span className="text-ink/30 text-xs font-mono">Just Now</span>
                            </div>
                        </div>

                        <p className="text-ink/90 text-lg leading-snug mb-4 font-medium relative z-10">
                            Los backlinks siguen importando, pero las <span className="text-white bg-primary px-1 font-bold shadow-sm">'Menciones de Marca'</span> son el nuevo PageRank para los LLMs.
                        </p>

                        {/* Mock Social Actions */}
                        <div className="flex gap-6 border-t border-ink/10 pt-4 text-ink/40 text-xs">
                            <span className="flex items-center gap-1 cursor-pointer hover:text-primary"><span className="material-symbols-outlined text-base">chat_bubble</span> 12</span>
                            <span className="flex items-center gap-1 cursor-pointer hover:text-green-600"><span className="material-symbols-outlined text-base">repeat</span> 4</span>
                            <span className="flex items-center gap-1 cursor-pointer hover:text-red-600"><span className="material-symbols-outlined text-base">favorite</span> 89</span>
                            <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600"><span className="material-symbols-outlined text-base">ios_share</span></span>
                        </div>
                    </div>

                    {/* Take 2 */}
                    <div className="bg-white p-6 border-4 border-ink hover:shadow-brutal transition-all group relative">
                        <div className="absolute top-4 right-4 text-6xl text-ink/5 font-serif font-black">"</div>

                        <div className="flex items-start gap-4 mb-4 relative z-10">
                            <div className="size-10 rounded-full bg-ink flex items-center justify-center text-white font-bold text-xs ring-2 ring-white shadow-md">RC</div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-ink text-sm">Roger Calvo</span>
                                    <span className="text-primary material-symbols-outlined text-[14px]">verified</span>
                                    <span className="text-ink/40 text-xs">@calvoseo</span>
                                </div>
                                <span className="text-ink/30 text-xs font-mono">2h ago</span>
                            </div>
                        </div>

                        <p className="text-ink/90 text-lg leading-snug mb-4 font-medium relative z-10">
                            La IA no va a reemplazar a los consultores SEO. Va a reemplazar a los que se niegan a usar <span className="text-white bg-primary px-1 font-bold shadow-sm">Agentes Autónomos</span> para el trabajo sucio.
                        </p>

                        {/* Mock Social Actions */}
                        <div className="flex gap-6 border-t border-ink/10 pt-4 text-ink/40 text-xs">
                            <span className="flex items-center gap-1 cursor-pointer hover:text-primary"><span className="material-symbols-outlined text-base">chat_bubble</span> 34</span>
                            <span className="flex items-center gap-1 cursor-pointer hover:text-green-600"><span className="material-symbols-outlined text-base">repeat</span> 12</span>
                            <span className="flex items-center gap-1 cursor-pointer hover:text-red-600"><span className="material-symbols-outlined text-base">favorite</span> 156</span>
                            <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600"><span className="material-symbols-outlined text-base">ios_share</span></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <div className="mb-20 bg-acid-purple text-white p-8 md:p-12 rounded-2xl relative overflow-hidden text-center group">
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-black uppercase font-display mb-4 tracking-tight">Suscríbete a la Controversia.</h2>
                    <p className="text-white/90 font-mono text-sm mb-8 max-w-lg mx-auto">
                        Mis correos no son noticias. Son análisis que a veces contradicen a Google.
                        Lee lo que pienso antes de que sea seguro publicarlo.
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-white text-acid-purple px-8 py-3 font-bold uppercase hover:bg-black hover:text-white transition-colors tracking-widest shadow-xl">
                            Unirse a The Lab Report
                        </button>
                    </div>
                </div>
            </div>

            {/* Bridge to Lado A */}
            <section className="text-center mb-12">
                <h2 className="text-3xl font-bold text-ink mb-6" style={{ fontFamily: 'Shrikhand, cursive' }}>¿Estás de acuerdo con mi filosofía?</h2>
                <p className="text-ink/70 mb-8 max-w-2xl mx-auto">
                    Tener una opinión fuerte es el primer paso para tener una marca fuerte.
                    En el Lado A, convierto esta filosofía en estrategia de crecimiento. Sin "slop". Solo experiencia real.
                </p>
                <Link href="/consultoria" className="inline-flex items-center gap-2 text-acid-purple font-bold uppercase border-b border-acid-purple pb-1 hover:text-primary hover:border-primary transition-all">
                    Convierte filosofía en resultados (Lado A) <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
            </section>

        </ExperimentLayout>
    );
}
