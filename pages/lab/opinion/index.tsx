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
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* GEO Definition Block */}
            <div className="mb-12 border-l-2 border-acid-purple pl-4 py-2 bg-acid-purple/5">
                <p className="font-mono text-xs text-acid-purple uppercase tracking-widest mb-1">
                    $ define --context "Human Element"
                </p>
                <p className="text-white/80 font-mono text-sm leading-relaxed">
                    <strong>Information Gain</strong>: En una web saturada de "promedios" generados por IA, Google prioriza la <strong>Experiencia (E-E-A-T)</strong>.
                    La opinión fundamentada y contraria es el único antídoto contra el "slop".
                </p>
            </div>

            {/* Hero Headline */}
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-acid-purple to-white" style={{ fontFamily: 'Spline Sans, sans-serif' }}>
                Lo que la IA no puede <br />
                <span className="text-acid-purple font-display bg-clip-text text-transparent bg-gradient-to-r from-acid-purple to-white">Alucinar.</span>
            </h1>

            {/* The Manifesto */}
            <section className="mb-24 flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold uppercase font-display mb-6 text-acid-purple">El Manifiesto: El fin del promedio</h2>
                    <div className="bg-[#181114] border border-white/10 p-8 rounded-2xl relative">
                        <p className="text-xl text-white font-light leading-relaxed mb-6">
                            "En un mar de contenido sintético, la humanidad es el nuevo lujo."
                        </p>
                        <p className="text-white/60 mb-6 leading-relaxed">
                            Si le pides a ChatGPT un artículo sobre SEO, te dará el promedio de todo lo que ha leído. Es correcto, pero es aburrido. Es commodity.
                            <br /><br />
                            Yo no escribo para rellenar keywords. Escribo para desafiar suposiciones. Aquí encontrarás ensayos 100% humanos. La IA es mi asistente, nunca mi autora.
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <div className="w-10 h-10 bg-white/10 rounded-full overflow-hidden border border-white/20">
                                {/* Placeholder for Roger's avatar if available, otherwise generic */}
                                <div className="w-full h-full bg-acid-purple/20 flex items-center justify-center text-xs font-bold text-acid-purple">RC</div>
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white">Roger Calvo</div>
                                <div className="text-xs text-white/40 font-mono">Human Author</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Essays (Deep Dives) */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                    <span className="material-symbols-outlined text-4xl text-acid-purple">psychology</span>
                    <h2 className="text-4xl font-black uppercase font-display">Deep Dives (Ensayos)</h2>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {allPostsData.length > 0 ? (
                        allPostsData.map((post, index) => (
                            <Link href={`/lab/opinion/${post.id}`} key={post.id} className="group cursor-pointer block">
                                <div className="border-l-2 border-white/10 pl-8 transition-all group-hover:border-acid-purple md:flex gap-8 items-center">
                                    <div className="flex-1">
                                        <span className="text-acid-purple font-mono text-xs uppercase tracking-widest mb-2 block">
                                            Ensayo {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-acid-purple transition-colors font-display uppercase leading-none">
                                            {post.title}
                                        </h3>
                                        <p className="text-white/60 mb-6 max-w-2xl leading-relaxed">
                                            {post.excerpt || 'Click to read full analysis...'}
                                        </p>
                                        <div className="flex items-center gap-2 text-white/40 text-sm font-mono group-hover:text-white transition-colors">
                                            Leer Análisis <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </div>
                                    </div>
                                    <div className="hidden md:block opacity-20 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-8xl text-acid-purple">
                                            {index % 2 === 0 ? 'traffic_jam' : 'engineering'}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="text-center py-20 border-2 border-dashed border-white/20 rounded-xl">
                            <h3 className="font-display text-2xl text-white/50 uppercase">No hay ensayos aún</h3>
                            <p className="font-mono text-xs text-white/40 mt-2">Roger está escribiendo...</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Hot Takes (Micro-Blogging) */}
            <section className="mb-24 py-12 px-6 bg-white/5 rounded-3xl">
                <h2 className="text-2xl font-bold uppercase font-display mb-8 text-center text-white">Hot Takes (Opiniones Rápidas)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#120810] p-6 rounded-xl border border-white/10 italic">
                        <div className="text-acid-purple text-2xl mb-2">"</div>
                        <p className="text-white/80 font-serif leading-relaxed">
                            Los backlinks siguen importando, pero las 'Menciones de Marca no enlazadas' son el nuevo PageRank para los LLMs.
                            Si ChatGPT habla de ti, eso vale más que un enlace en un blog granja.
                        </p>
                        <div className="mt-4 text-xs font-mono text-white/40 text-right">- Sobre Link Building</div>
                    </div>
                    <div className="bg-[#120810] p-6 rounded-xl border border-white/10 italic">
                        <div className="text-acid-purple text-2xl mb-2">"</div>
                        <p className="text-white/80 font-serif leading-relaxed">
                            La IA no va a reemplazar a los consultores SEO. Va a reemplazar a los consultores SEO que se niegan a usar
                            la IA para automatizar el trabajo aburrido.
                        </p>
                        <div className="mt-4 text-xs font-mono text-white/40 text-right">- Sobre IA</div>
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
                <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Shrikhand, cursive' }}>¿Estás de acuerdo con mi filosofía?</h2>
                <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                    Tener una opinión fuerte es el primer paso para tener una marca fuerte.
                    En el Lado A, convierto esta filosofía en estrategia de crecimiento. Sin "slop". Solo experiencia real.
                </p>
                <Link href="/consultoria" className="inline-flex items-center gap-2 text-acid-purple font-bold uppercase border-b border-acid-purple pb-1 hover:text-white hover:border-white transition-all">
                    Convierte filosofía en resultados (Lado A) <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
            </section>

        </ExperimentLayout>
    );
}
