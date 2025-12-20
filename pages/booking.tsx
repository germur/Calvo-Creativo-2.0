import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function Booking() {
    return (
        <>
            <SeoHead title="Contrataciones | Calvo Creativo" />
            <Navigation />
            <main className="min-h-screen bg-[#120505] relative overflow-hidden flex items-center justify-center py-20 px-4">

                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay grayscale"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2b0e0e] via-transparent to-[#2b0e0e]"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
                </div>

                <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="hidden lg:block text-left">
                        <div className="mb-6">
                            <span className="material-symbols-outlined text-[#ffc107] text-6xl mb-4">queue_music</span>
                        </div>
                        <h1 className="text-7xl font-black font-headline text-white leading-none uppercase tracking-tighter mb-6">
                            Contrataciones<br />
                            <span className="text-[#ffc107]">Y Colaboraciones</span>
                        </h1>
                        <p className="text-2xl text-white/90 font-light mb-8">
                            Contrata a la orquesta. <br />
                            <span className="text-[#ff3d00] font-bold">Pongamos a bailar a Google.</span>
                        </p>
                        <div className="flex gap-4 text-white/70 text-sm font-mono uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#ff3d00]">check_circle</span> SEO Técnico
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#ff3d00]">check_circle</span> Content Marketing
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#ff3d00]">check_circle</span> Link Building
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card - "Petición de Canción" */}
                    <div className="bg-[#fcfbf7] text-[#3e2723] p-8 md:p-12 rounded shadow-2xl relative rotate-1 transform transition-transform hover:rotate-0 duration-500 max-w-lg mx-auto w-full border-4 border-dashed border-[#d7ccc8]">
                        {/* Paper texture overlay */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-50 pointer-events-none rounded"></div>

                        {/* Badge */}
                        <div className="absolute -top-4 -right-4 size-20 bg-[#f7f3e8] rounded-full shadow-lg border border-[#d7ccc8]"></div>

                        <div className="relative z-10 text-center mb-8 border-b-2 border-[#3e2723] pb-6">
                            <h2 className="text-3xl font-serif font-bold text-[#3e2723] mb-1">Petición de Canción</h2>
                            <p className="text-xs uppercase tracking-[0.3em] text-[#795548] font-bold">La Fiesta SEO Club • Est 1978</p>
                        </div>

                        <form className="relative z-10 flex flex-col gap-6">
                            <div>
                                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5d4037] mb-2">
                                    <span className="material-symbols-outlined text-sm">person</span>
                                    Tu Nombre (El Promotor)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ej. Héctor Lavoe"
                                    className="w-full bg-[#f5f5f5] border-b-2 border-[#d7ccc8] px-4 py-3 text-[#3e2723] outline-none focus:border-[#ff3d00] transition-colors font-serif text-lg placeholder:text-[#a1887f] placeholder:italic"
                                />
                            </div>

                            <div>
                                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5d4037] mb-2">
                                    <span className="material-symbols-outlined text-sm">mail</span>
                                    Tu Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="tu@email.com"
                                    className="w-full bg-[#f5f5f5] border-b-2 border-[#d7ccc8] px-4 py-3 text-[#3e2723] outline-none focus:border-[#ff3d00] transition-colors font-serif text-lg placeholder:text-[#a1887f] placeholder:italic"
                                />
                            </div>

                            <div>
                                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5d4037] mb-2">
                                    <span className="material-symbols-outlined text-sm">queue_music</span>
                                    ¿Qué Ritmo Necesitas? (Mensaje)
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Cuéntame sobre tu proyecto..."
                                    className="w-full bg-[#f5f5f5] border-b-2 border-[#d7ccc8] px-4 py-3 text-[#3e2723] outline-none focus:border-[#ff3d00] transition-colors font-serif text-lg placeholder:text-[#a1887f] placeholder:italic resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full bg-[#ff0d0d] text-white font-black uppercase text-xl py-4 rounded shadow-[0_5px_0_#b30000] hover:translate-y-[2px] hover:shadow-[0_3px_0_#b30000] active:translate-y-[5px] active:shadow-none transition-all flex items-center justify-center gap-2 mt-2">
                                <span className="material-symbols-outlined">play_circle</span>
                                ¡DALE MAMBO!
                            </button>

                            <p className="text-center text-[10px] text-[#8d6e63 italic mt-2 font-serif">
                                *Al presionar el botón, aceptas unirte a la rumba.
                            </p>
                        </form>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
