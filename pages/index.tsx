import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function Home() {
    return (
        <>
            <SeoHead title="Inicio | Calvo Creativo" />
            <Navigation />
            <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black overflow-x-hidden">
                <div className="mx-auto max-w-7xl px-4 py-8 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">

                        {/* Hero Card */}
                        <div className="group relative col-span-1 flex flex-col justify-end overflow-hidden rounded-xl border border-border bg-card p-6 md:col-span-3 lg:col-span-3 lg:row-span-2 min-h-[500px] transition-all duration-500">
                            <div className="absolute inset-0 z-0 bg-[url('https://picsum.photos/id/1012/1200/800')] bg-cover bg-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 ease-in-out"></div>
                            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                            <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
                                <div className="inline-flex w-fit items-center gap-2 rounded bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                                    <span className="material-symbols-outlined text-[16px]">play_circle</span>
                                    Track 01: Inicio
                                </div>
                                <h1 className="font-headline text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-[88px] text-white">
                                    El Especialista <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Indestructible</span>
                                </h1>
                                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mt-4">
                                    <p className="max-w-lg text-base font-normal leading-relaxed text-gray-200 md:text-lg">
                                        Arquitectura Digital & Flow de Barrio. Luchando desde Bogotá. Una mezcla explosiva de estrategia SEO pura y creatividad caribeña.
                                    </p>
                                    <Link href="/lado-a" className="group/btn flex items-center justify-between gap-4 overflow-hidden rounded bg-white px-6 py-4 text-black transition-all hover:bg-primary w-full md:w-auto">
                                        <span className="font-bold tracking-tight">ESCUCHAR AHORA</span>
                                        <span className="material-symbols-outlined transition-transform duration-300 group-hover/btn:translate-x-1">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Stats Card */}
                        <div className="relative col-span-1 flex flex-col gap-4 overflow-hidden rounded-xl border border-border bg-[#23220f] p-6 lg:row-span-2">
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                            <div className="relative z-10 flex items-center justify-between border-b border-border/30 pb-4">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider font-mono">Track 05</span>
                                    <h3 className="font-headline text-2xl uppercase text-primary leading-none">El Artista</h3>
                                </div>
                                <span className="material-symbols-outlined text-gray-500">person</span>
                            </div>

                            <div className="relative z-10 flex flex-1 flex-col justify-between gap-6 py-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">Record</span>
                                    <span className="font-headline text-4xl text-white">150+ <span className="text-lg text-primary">WINS</span></span>
                                    <span className="text-sm text-gray-400">Proyectos Exitosos</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">Reach</span>
                                    <span className="font-headline text-4xl text-white uppercase">Global</span>
                                    <span className="text-sm text-gray-400">Latam, USA, Europa</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">Style</span>
                                    <span className="font-headline text-3xl text-white uppercase">Orthodox</span>
                                    <span className="text-sm text-gray-400">White Hat SEO</span>
                                </div>
                            </div>

                            <div className="relative z-10 mt-auto border-t border-border/30 pt-4 text-center">
                                <p className="text-xs italic text-gray-500">"No se trata de cuán fuerte golpeas."</p>
                            </div>
                        </div>

                        {/* Side A Card */}
                        <Link href="/lado-a" className="group relative col-span-1 min-h-[240px] overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50">
                            <div className="absolute inset-0 bg-[url('https://picsum.photos/id/10/600/400')] bg-cover bg-center grayscale opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"></div>
                            <div className="relative z-10 flex h-full flex-col justify-between">
                                <div className="flex items-start justify-between">
                                    <span className="rounded bg-black/50 px-2 py-1 text-xs font-bold uppercase text-white font-mono">Lado A</span>
                                    <span className="material-symbols-outlined text-3xl text-gray-300">terminal</span>
                                </div>
                                <div>
                                    <h3 className="mb-1 font-headline text-2xl uppercase text-white group-hover:text-primary transition-colors">Técnico</h3>
                                    <p className="text-sm leading-snug text-gray-400">SEO Técnico, Estrategia & Código. Duro como la piedra.</p>
                                </div>
                            </div>
                        </Link>

                        {/* Side B Card */}
                        <Link href="/lado-b" className="group relative col-span-1 min-h-[240px] overflow-hidden rounded-xl border border-border bg-[#1a0b2e] p-6 transition-all hover:border-primary/50">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#f4258c]/40 to-black/80 opacity-60 group-hover:opacity-80 transition-all duration-700"></div>
                            <div className="relative z-10 flex h-full flex-col justify-between">
                                <div className="flex items-start justify-between">
                                    <span className="rounded bg-black/50 px-2 py-1 text-xs font-bold uppercase text-primary font-mono">Lado B</span>
                                    <span className="material-symbols-outlined text-3xl text-primary">palette</span>
                                </div>
                                <div>
                                    <h3 className="mb-1 font-headline text-2xl uppercase text-primary">Creativo</h3>
                                    <p className="text-sm leading-snug text-white/80">Contenido, Flow & Psicodelia. Sonido bestial.</p>
                                </div>
                            </div>
                        </Link>

                        {/* Liner Notes Card */}
                        <Link href="/liner-notes" className="group relative col-span-1 min-h-[240px] overflow-hidden rounded-xl border border-border bg-neutral-900 p-6 transition-all hover:border-primary/50">
                            <div className="relative z-10 flex h-full flex-col justify-between">
                                <div className="flex items-start justify-between">
                                    <span className="rounded bg-white/10 px-2 py-1 text-xs font-bold uppercase text-gray-300 font-mono">Liner Notes</span>
                                    <span className="material-symbols-outlined text-3xl text-gray-400 group-hover:text-primary transition-all">history_edu</span>
                                </div>
                                <div>
                                    <h3 className="mb-1 font-headline text-2xl uppercase text-white group-hover:text-primary transition-colors">Blog</h3>
                                    <p className="text-sm leading-snug text-gray-400">Reflexiones del estudio, actualizaciones y notas de campo.</p>
                                    <div className="mt-3 inline-flex items-center text-xs font-bold uppercase tracking-wider text-primary">
                                        Leer Notas <span className="material-symbols-outlined text-[14px] ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Booking Card */}
                        <Link href="/booking" className="group relative col-span-1 min-h-[240px] overflow-hidden rounded-xl border border-border bg-[#4a1010] p-6 transition-all hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-[url('https://picsum.photos/id/250/600/400')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
                            <div className="relative z-20 flex h-full flex-col justify-between">
                                <div className="flex items-start justify-between">
                                    <span className="rounded bg-black/50 px-2 py-1 text-xs font-bold uppercase text-primary font-mono">Booking</span>
                                    <span className="material-symbols-outlined text-3xl text-primary animate-pulse">phone_in_talk</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-headline text-2xl uppercase leading-none text-white">Contacto</h3>
                                    <p className="text-xs text-gray-300 leading-tight">¿Listo para romper la tarima? Agenda tu consulta.</p>
                                    <div className="mt-2 flex w-full items-center justify-center gap-2 rounded bg-primary px-3 py-2 text-xs font-bold text-black shadow-lg transition-colors group-hover:bg-white">
                                        AGENDAR
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
