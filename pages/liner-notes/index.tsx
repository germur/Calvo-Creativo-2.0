import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';
import { getSortedPostsData } from '@/lib/posts';

// Mock Data para el diseño visual si no hay posts reales aun
const MOCK_POSTS = [
    {
        id: 'retail-giant',
        date: '2025-01-10',
        title: 'Cómo llevamos a Retail Giant de 0 a 100k visitas.',
        subtitle: 'Un desglose técnico de la arquitectura de la info y la estrategia long-tail.',
        client: 'E-COMMERCE A',
        duration: '5:00 READ',
        track: '01',
        type: 'CASOS DE ÉXITO',
        metric: 'TRAFFIC: HOT',
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=300'
    },
    {
        id: 'knockout-tecnico',
        date: '2025-01-05',
        title: 'El Knockout Técnico: Recuperación de penalización.',
        subtitle: 'Análisis forense de una caída del 60% y cómo revertimos la situación en 90 días.',
        client: 'FIGHTER BRAND',
        duration: '7:12 READ',
        track: '02',
        type: 'GUÍAS TÉCNICAS',
        metric: 'TRAFFIC: STEADY',
        img: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=300'
    },
    {
        id: 'local-seo',
        date: '2024-12-28',
        title: 'SEO Local: Dominando el Octágono de Google Maps.',
        subtitle: 'Estrategias hiperlocales para franquicias de gimnasios y dojos.',
        client: 'GYM CHAIN',
        duration: '4:20 READ',
        track: '03',
        type: 'CASOS DE ÉXITO',
        metric: 'TRAFFIC: RISING',
        img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=300'
    }
];

export default function LinerNotes() {
    return (
        <>
            <SeoHead title="Liner Notes: El Blog | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-[#f2efe9] font-sans pt-12 pb-24 px-4 md:px-8">

                <div className="max-w-6xl mx-auto border-t-4 border-black pt-8">

                    {/* Header: Vinilo Back Cover Style */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                        <div>
                            <div className="bg-[#d32f2f] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 inline-block mb-4">Stereo LP • 33⅓ RPM</div>
                            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-4">
                                Notas de Producción<br />y Archivos
                            </h1>
                            <p className="font-mono text-gray-500 uppercase tracking-wider text-sm">
                                (La Contraportada: Categorías, Tags & Artículos de Fondo)
                            </p>
                        </div>

                        <div className="text-right font-mono text-xs text-gray-400 uppercase leading-relaxed border-l-2 border-gray-300 pl-4">
                            <p>Produced by: Vibecoding Studios</p>
                            <p>Executive Producer: The Algorithm</p>
                            <p>Recorded in: Santiago / NYC / Cloud</p>
                            <p className="text-[#d32f2f] font-bold">Vol. 2 - "Salsa Dura"</p>
                        </div>
                    </div>

                    {/* Side A: Main Articles */}
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="size-12 bg-black text-white rounded-full flex items-center justify-center font-black text-2xl">A</div>
                            <h2 className="text-3xl font-bold uppercase tracking-tight">Side A: Casos de Éxito <span className="text-[#d32f2f] font-normal">(Sesiones de Grabación)</span></h2>
                            <div className="h-1 bg-black flex-1"></div>
                        </div>

                        <div className="grid grid-cols-1 gap-0 border-t-2 border-gray-200">
                            {MOCK_POSTS.map((post) => (
                                <Link href={`/liner-notes/${post.id}`} key={post.id} className="group bg-white grid grid-cols-1 md:grid-cols-12 gap-6 p-6 border-b-2 border-gray-200 hover:bg-[#fffdf5] transition-colors relative overflow-hidden">

                                    {/* Image Vinyl Effect */}
                                    <div className="md:col-span-3 aspect-video md:aspect-square bg-gray-200 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-2 left-2 text-white font-mono text-[10px] uppercase">{post.track}</div>
                                    </div>

                                    <div className="md:col-span-7 flex flex-col justify-center">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[#d32f2f] font-bold text-xs uppercase tracking-widest">Track {post.track}</span>
                                            <span className="border border-gray-400 rounded-full px-2 py-0.5 text-[10px] uppercase font-bold text-gray-500">{post.type}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-4xl font-black leading-tight mb-2 group-hover:text-[#d32f2f] transition-colors">{post.title}</h3>
                                        <p className="font-mono text-gray-500 text-sm">{post.subtitle}</p>

                                        <div className="mt-6 flex gap-6 font-mono text-[10px] uppercase text-gray-400">
                                            <div>
                                                <span className="block text-gray-300">Client</span>
                                                <span className="text-black font-bold font-sans">{post.client}</span>
                                            </div>
                                            <div>
                                                <span className="block text-gray-300">Duration</span>
                                                <span className="text-black font-bold font-sans">{post.duration}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:col-span-2 flex flex-col justify-end items-end">
                                        <div className="text-[9px] font-bold text-[#d32f2f] uppercase tracking-widest mb-1">{post.metric}</div>
                                        {/* Audio Viz Bars */}
                                        <div className="flex items-end gap-1 h-8">
                                            {[30, 60, 45, 80, 50, 90, 40].map((h, i) => (
                                                <div key={i} className="w-1 bg-[#d32f2f]" style={{ height: `${h}%` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Side B: Deep Cuts */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="size-12 bg-white border-2 border-black text-black rounded-full flex items-center justify-center font-black text-2xl">B</div>
                            <h2 className="text-3xl font-bold uppercase tracking-tight">Side B: Deep Cuts <span className="text-[#d32f2f] font-normal">(Editoriales & Guías)</span></h2>
                            <div className="h-1 bg-gray-300 border-t border-dashed border-gray-400 flex-1"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { title: 'La Rima Interna del Link Building', track: '04', snippet: '¿Por qué construir enlaces es como escribir un verso de 16 barras?' },
                                { title: 'Core Web Vitals: El Ritmo Cardiaco', track: '05', snippet: 'Si tu sitio no carga rápido, has perdido la audiencia antes del coro.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 border border-gray-200 hover:border-[#d32f2f] transition-all group cursor-pointer relative">
                                    <div className="flex items-center gap-2 mb-4 text-[#d32f2f]">
                                        <span className="material-symbols-outlined text-sm">mic</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Track {item.track}</span>
                                    </div>
                                    <h3 className="text-xl font-black uppercase mb-3 leading-snug">{item.title}</h3>
                                    <p className="font-mono text-xs text-gray-500 leading-relaxed mb-8">{item.snippet}</p>
                                    <div className="absolute bottom-6 right-6">
                                        <span className="material-symbols-outlined text-[#d32f2f] group-hover:scale-125 transition-transform">play_circle_filled</span>
                                    </div>
                                </div>
                            ))}

                            {/* Newsletter Box */}
                            <div className="bg-[#fce4ec] border-2 border-dashed border-[#d32f2f] p-8">
                                <div className="flex items-center gap-2 text-[#d32f2f] mb-2">
                                    <span className="material-symbols-outlined text-sm">radio</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Bonus Track</span>
                                </div>
                                <h3 className="font-black text-xl mb-2">Subscribe to the Newsletter</h3>
                                <p className="font-mono text-xs text-gray-500 mb-4">Get the liner notes directly in your inbox. No spam, just pure rhythm.</p>
                                <div className="flex gap-2">
                                    <input type="email" placeholder="email@domain.com" className="bg-white border text-sm p-2 flex-1 font-mono outline-none" />
                                    <button className="bg-[#d32f2f] text-white font-bold text-xs uppercase px-4 hover:bg-black transition-colors">Join</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
