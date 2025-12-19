import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Blog({ allPostsData }: { allPostsData: any[] }) {
    // Mock data for demo purposes if no files found, seamlessly mixed
    const demoPosts = [
        { id: 'mock-1', title: 'Cómo llevamos a Retail Giant de 0 a 100k visitas', category: 'Casos de Éxito', time: '5:00 READ', traffic: 'HOT', link: '#' },
        { id: 'mock-2', title: 'El Knockout Técnico: Recuperación de penalización', category: 'Guías Técnicas', time: '7:12 READ', traffic: 'STEADY', link: '#' },
        { id: 'mock-3', title: 'SEO Local: Dominando el Octágono de Maps', category: 'Casos de Éxito', time: '4:20 READ', traffic: 'RISING', link: '#' },
    ];

    const realPosts = allPostsData.map((post, idx) => ({
        id: post.id,
        title: post.title,
        category: 'Estrategia', // Default category for MD files
        time: '10:00 READ',
        traffic: 'HOT',
        link: `/liner-notes/${post.id}`
    }));

    const posts = [...realPosts, ...demoPosts].map((p, i) => ({ ...p, track: String(i + 1).padStart(2, '0') }));

    return (
        <>
            <SeoHead title="Liner Notes - Blog" description="Artículos sobre SEO, estrategia y tecnología." />
            <div className="flex min-h-screen flex-col bg-paper text-ink selection:bg-primary selection:text-black font-display">
                <Navigation />
                <main className="flex-grow py-16 px-6 md:px-12">
                    <div className="max-w-5xl mx-auto">
                        <div className="border-b-4 border-ink pb-8 mb-12">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                                <div className="flex flex-col gap-2">
                                    <span className="inline-block bg-primary text-black px-2 py-1 text-[10px] font-mono font-bold uppercase w-fit">Stereo LP • 33⅓ RPM</span>
                                    <h1 className="text-5xl md:text-7xl font-headline leading-[0.85] tracking-tighter uppercase text-ink">
                                        Notas de Producción<br />y Archivos
                                    </h1>
                                    <p className="text-lg font-mono text-ink/60 italic">(La Contraportada: Categorías, Tags & Artículos de Fondo)</p>
                                </div>
                                <div className="text-right font-mono text-xs text-ink/40 leading-relaxed border-r-2 border-primary pr-4">
                                    <p>PRODUCED BY: VIBECODING STUDIOS</p>
                                    <p>EXECUTIVE PRODUCER: THE ALGORITHM</p>
                                    <p className="text-primary font-bold mt-1 uppercase tracking-widest">Vol. 2 — "Salsa Dura"</p>
                                </div>
                            </div>
                        </div>

                        {/* Side A Section */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-ink text-white rounded-full flex items-center justify-center font-headline text-2xl">A</div>
                                <h2 className="text-3xl font-headline uppercase tracking-tight">Side A: Casos de Éxito</h2>
                                <div className="h-1 bg-ink flex-grow ml-4"></div>
                            </div>

                            <div className="flex flex-col border-2 border-ink bg-white/50">
                                {posts.map((post, idx) => (
                                    <Link href={post.link} key={idx} className="group flex flex-col md:flex-row border-b border-ink/10 last:border-0 hover:bg-primary/5 transition-colors p-6 gap-6 items-center">
                                        <div className="w-full md:w-40 aspect-square bg-gray-200 grayscale contrast-125 overflow-hidden border border-ink/20 relative">
                                            {/* Placeholder image generator */}
                                            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center font-headline text-gray-400 text-4xl opacity-50">{idx + 1}</div>
                                        </div>
                                        <div className="flex-grow flex flex-col justify-between h-full w-full">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-mono text-primary font-bold text-xs">TRACK {post.track}</span>
                                                <span className="text-[10px] border border-ink px-2 py-0.5 rounded-full uppercase font-bold">{post.category}</span>
                                            </div>
                                            <h3 className="text-2xl font-headline group-hover:text-primary transition-colors cursor-pointer mb-2 leading-tight">
                                                {post.title}
                                            </h3>
                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex gap-4 font-mono text-[10px] uppercase font-bold text-ink/50">
                                                    <span>Client: Internal</span>
                                                    <span>{post.time}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-[10px] font-mono font-bold uppercase ${post.traffic === 'HOT' ? 'text-primary' : 'text-ink/40'}`}>Traffic: {post.traffic}</span>
                                                    <div className="flex items-end gap-0.5 h-6">
                                                        {[...Array(5)].map((_, i) => (
                                                            <div key={i} className={`w-1 ${post.traffic === 'HOT' ? 'bg-primary' : 'bg-ink/30'}`} style={{ height: `${Math.random() * 100}%` }}></div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Side B Newsletter */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-ink text-white p-8 rounded-sm">
                                <h3 className="text-2xl font-headline uppercase text-primary mb-4 italic">Bonus Track: Newsletter</h3>
                                <p className="text-sm font-mono text-white/60 mb-6">Recibe las Liner Notes directamente en tu bandeja de entrada. Sin spam, solo ritmo puro.</p>
                                <div className="flex gap-2">
                                    <input className="flex-grow bg-transparent border-b border-white/30 font-mono text-sm px-2 focus:border-primary outline-none" placeholder="email@dominio.com" />
                                    <button className="bg-primary text-black font-headline px-4 py-2 uppercase text-sm hover:bg-white transition-colors">Join</button>
                                </div>
                            </div>
                            <div className="bg-primary/10 border-2 border-dashed border-primary p-8 flex flex-col justify-center">
                                <span className="material-symbols-outlined text-4xl text-primary mb-2">graphic_eq</span>
                                <h4 className="font-headline text-xl uppercase mb-1">Mezcla cultural</h4>
                                <p className="text-xs font-mono text-ink/60 italic">Mezclando estrategias SEO pesadas con ritmo cultural. Sin autotune.</p>
                            </div>
                        </div>

                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
