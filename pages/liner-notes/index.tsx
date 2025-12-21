import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';
import { getSortedPostsData } from '@/lib/posts';
import Breadcrumbs from '@/components/Breadcrumbs';

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
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function LinerNotes({ allPostsData }: { allPostsData: Post[] }) {
    // Blog Schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Liner Notes | Ensayos sobre SEO, IA y Estrategia",
        "description": "No es otro blog de marketing. Análisis profundo sobre GEO, Vibe Coding y la nueva era de la búsqueda.",
        "author": {
            "@type": "Person",
            "name": "Roger Calvo"
        }
    };

    // Define posts for the map loop
    const posts = allPostsData || [];

    return (
        <>
            <SeoHead
                title="Liner Notes | Ensayos sobre SEO, IA y Estrategia Digital"
                description="Liner Notes: El contexto detrás del caos. Análisis estratégico sobre el fin del SEO, Marketer-Builders y el factor humano."
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Navigation />

            <main className="min-h-screen bg-paper font-sans pt-12 pb-24 px-4 md:px-8 selection:bg-accent selection:text-ink">

                {/* --- INTRO: THE ALBUM SLEEVE --- */}
                <div className="max-w-6xl mx-auto border-t-8 border-ink pt-12 mb-20">
                    <div className="mb-8">
                        <Breadcrumbs theme="light" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                            <span className="text-[10rem] font-display text-ink leading-none">LINER</span>
                        </div>

                        <div className="relative z-10 w-full md:w-2/3">
                            <div className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 inline-block mb-4 transform -rotate-2 border-2 border-ink shadow-brutal-sm">
                                VOL. 2.5: CONTEXTO
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display uppercase leading-tight tracking-tight mb-8 text-ink">
                                Liner <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">Notes_</span>
                            </h1>

                            {/* Concept Block */}
                            <div className="bg-white border-4 border-ink p-8 shadow-brutal relative">
                                <h3 className="font-display text-2xl uppercase mb-4 text-ink flex items-center gap-2">
                                    <span className="material-symbols-outlined">album</span> The Album Sleeve
                                </h3>
                                <p className="font-body text-lg text-ink/80 leading-relaxed mb-4">
                                    En la era del "contenido infinito", el contexto es el nuevo lujo. Aquí no encontrarás noticias de última hora.
                                </p>
                                <p className="font-mono text-sm text-ink/60 border-l-4 border-accent pl-4">
                                    Esta sección está dedicada al <strong>Information Gain</strong>: ensayos estratégicos para líderes que necesitan entender hacia dónde va la tecnología, no solo cómo usarla hoy.
                                </p>
                            </div>
                        </div>

                        {/* Author/Meta Box (Differential Element) */}
                        <div className="bg-ink text-paper p-6 border-4 border-ink shadow-brutal-sm md:w-1/3 transform rotate-1 hover:rotate-0 transition-transform w-full">
                            <div className="flex items-center gap-4 mb-4 border-b border-paper/20 pb-4">
                                <div className="size-12 bg-accent rounded-full border-2 border-white flex items-center justify-center font-display text-ink text-xl">RC</div>
                                <div>
                                    <div className="font-bold uppercase tracking-wider">Roger Calvo</div>
                                    <div className="font-mono text-xs opacity-60">Strategic SEO Consultant</div>
                                </div>
                            </div>
                            <div className="space-y-2 font-mono text-xs opacity-80">
                                <div className="flex justify-between">
                                    <span>STATUS:</span>
                                    <span className="text-primary">ONLINE</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>LOC:</span>
                                    <span>CLOUD / SCL</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>UPDATED:</span>
                                    <span>DEC 2025</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- TRACKS (Dynamic Feed) --- */}
                <div className="max-w-6xl mx-auto mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <span className="bg-ink text-white w-8 h-8 flex items-center justify-center font-display text-xl">A</span>
                        <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tighter text-ink">
                            Featured Tracks
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        {posts.length > 0 ? (
                            posts.map((post, index) => (
                                <Link href={`/liner-notes/${post.id}`} key={post.id} className="group relative block">
                                    <div className="bg-white border-4 border-ink p-0 shadow-brutal group-hover:shadow-brutal-hover group-hover:-translate-y-1 transition-all duration-300 grid md:grid-cols-12 gap-0">

                                        {/* Dynamic "Album Art" Column based on Index/ID */}
                                        <div className={`md:col-span-3 p-6 flex flex-col justify-between border-b-4 md:border-b-0 md:border-r-4 border-ink text-white relative overflow-hidden ${index % 2 === 0 ? 'bg-primary' : 'bg-gray-900'}`}>
                                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
                                            <div className="font-mono text-xs opacity-70 z-10">TRACK {String(index + 1).padStart(2, '0')}</div>
                                            <div className="mt-4 md:mt-0 z-10">
                                                <div className="text-white font-display text-5xl leading-none">
                                                    {post.tags && post.tags[0] ? post.tags[0].split(' ')[0].substring(0, 4) : 'POST'}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Column */}
                                        <div className="md:col-span-9 p-8 flex flex-col justify-center bg-paper group-hover:bg-white transition-colors">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {post.tags && post.tags.map((tag: string) => (
                                                    <span key={tag} className="bg-ink text-white text-[10px] font-bold uppercase px-2 py-0.5 font-mono">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <h3 className="text-2xl md:text-4xl font-display uppercase leading-tight text-ink mb-4 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="font-body text-ink/80 text-lg leading-snug max-w-3xl mb-6">
                                                {post.excerpt || 'Click to read full article...'}
                                            </p>
                                            <div className="flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">
                                                Reproducir Track <span className="material-symbols-outlined text-sm">play_circle</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="text-center py-20 border-4 border-dashed border-ink/20">
                                <h3 className="font-display text-3xl text-ink/50 uppercase">No hay tracks aún</h3>
                                <p className="font-mono text-sm text-ink/40 mt-2">Estamos grabando en el estudio...</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* --- THE DEEP CUTS (Categories) --- */}
                <div className="max-w-6xl mx-auto mb-24 border-t-4 border-ink pt-12">
                    <div className="flex items-center gap-4 mb-12">
                        <span className="bg-ink text-white w-8 h-8 flex items-center justify-center font-display text-xl">B</span>
                        <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tighter text-ink">
                            The Deep Cuts
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Tech Cut */}
                        <div className="bg-paper border-2 border-ink p-6 hover:bg-white transition-colors">
                            <span className="text-4xl mb-4 block">🎛️</span>
                            <h4 className="font-bold text-ink uppercase mb-2">Ingeniería de Búsqueda</h4>
                            <p className="font-mono text-xs text-ink/70 mb-4 leading-relaxed">
                                Análisis sobre Schema Markup, Grafos de Conocimiento y cómo estructurar tu web.
                            </p>
                        </div>

                        {/* Editorial Cut */}
                        <div className="bg-paper border-2 border-ink p-6 hover:bg-white transition-colors">
                            <span className="text-4xl mb-4 block">🎹</span>
                            <h4 className="font-bold text-ink uppercase mb-2">Composición,</h4>
                            <p className="font-mono text-xs text-ink/70 mb-4 leading-relaxed">
                                Cómo crear "Topic Clusters" que dominen nichos y por qué la Autoridad vence a los backlinks.
                            </p>
                        </div>

                        {/* Auto Cut */}
                        <div className="bg-paper border-2 border-ink p-6 hover:bg-white transition-colors">
                            <span className="text-4xl mb-4 block">🎚️</span>
                            <h4 className="font-bold text-ink uppercase mb-2">Automatización</h4>
                            <p className="font-mono text-xs text-ink/70 mb-4 leading-relaxed">
                                Tutoriales sobre el uso de Agentes de IA para escalar operaciones sin perder el alma.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- THE HIDDEN TRACK (CTA) --- */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-accent border-4 border-ink p-8 md:p-12 text-center rotate-1 hover:rotate-0 transition-transform shadow-brutal relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-ink text-white text-[10px] font-bold px-2 py-1 uppercase">Hidden Track</div>
                        <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tighter mb-4 text-ink">
                            Únete al Backstage
                        </h2>
                        <p className="font-mono text-sm md:text-base mb-8 max-w-xl mx-auto font-bold border-l-4 border-white pl-4 text-left md:text-center md:border-none md:pl-0">
                            La mayoría de las estrategias se vuelven obsoletas al publicarse.
                            Mis suscriptores reciben los "Raw Tapes": hallazgos crudos y scripts antes de que sean mainstream.
                        </p>
                        <form className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input type="email" placeholder="tu@email.com" className="bg-white border-2 border-ink px-4 py-3 font-mono text-sm w-full placeholder:text-ink/40" />
                            <button className="bg-ink text-white font-display text-xl uppercase px-8 py-3 hover:bg-primary border-2 border-transparent transition-colors whitespace-nowrap">
                                Suscribirse
                            </button>
                        </form>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
}
