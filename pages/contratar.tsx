import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function Contratar() {
    return (
        <>
            <SeoHead title="Contrata a Calvo: Limited Availability | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-[#f2eadd] font-sans pt-20 text-[#1a1a1a]">

                {/* Top Banner "Limited Availability" */}
                <div className="bg-[#1a1a1a] text-[#ffb300] text-center text-[10px] uppercase font-black tracking-[0.2em] py-2 rotate-1 shadow-lg relative z-20 max-w-sm mx-auto transform -translate-y-4">
                    Limited Availability 2024
                </div>

                <section className="max-w-7xl mx-auto px-4 pb-20 pt-8">
                    <div className="text-center mb-12">
                        <h1 className="text-6xl md:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter text-[#1a1a1a] mb-2 drop-shadow-sm">
                            ¡Contrata a<br />
                            <span className="text-[#ff9100] drop-shadow-[4px_4px_0_#1a1a1a] stroke-black">Calvo</span><br />
                            <span className="text-[#ff9100] drop-shadow-[4px_4px_0_#1a1a1a]">Creativo!</span>
                        </h1>

                        <div className="inline-block border-2 border-black bg-white px-6 py-2 transform -rotate-1 shadow-[4px_4px_0_black] mt-8">
                            <span className="font-black uppercase text-[#6200ea] tracking-wider text-sm md:text-lg">Calvo Creativo: Tu SEO al Siguiente Nivel</span>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-start">

                        {/* Left Profile Card */}
                        <div className="lg:col-span-5 relative">
                            <div className="bg-white border-4 border-black p-8 transform -rotate-2 shadow-[8px_8px_0_black]">
                                <div className="size-48 mx-auto rounded-full border-4 border-black overflow-hidden mb-6 bg-[#bcaaa4]">
                                    <img src="https://images.unsplash.com/photo-1577382749553-6232938090bd?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale contrast-125" alt="Calvo Creativo" />
                                </div>
                                <div className="text-center">
                                    <h2 className="font-black font-serif text-4xl mb-1">Calvo Creativo</h2>
                                    <div className="text-[#6200ea] font-black uppercase text-xs mb-6">SEO Strategy & Vibecoding V2</div>

                                    <div className="h-px bg-gray-200 w-full mb-6"></div>

                                    <div className="flex flex-col gap-2 text-xs font-bold uppercase text-gray-600">
                                        <div className="flex items-center justify-center gap-2"><span className="material-symbols-outlined text-[#ff9100]">location_on</span> Live from NYC / Worldwide</div>
                                        <div className="flex items-center justify-center gap-2"><span className="material-symbols-outlined text-[#ff9100]">schedule</span> Mon - Fri: 9AM - 6PM EST</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2 mt-6 transform rotate-1 justify-center">
                                <div className="bg-[#6200ea] text-white px-4 py-2 font-black uppercase text-xs border-2 border-black shadow-[2px_2px_0_black]">Salsa Dura</div>
                                <div className="bg-[#ff9100] text-black px-4 py-2 font-black uppercase text-xs border-2 border-black shadow-[2px_2px_0_black]">High Voltage SEO</div>
                            </div>
                            <div className="mt-2 text-center">
                                <div className="inline-block bg-white px-4 py-1 border-2 border-black font-black uppercase text-xs shadow-[2px_2px_0_black]">MMA Logic</div>
                            </div>

                            {/* Lower Image Graphic */}
                            <div className="mt-8 border-4 border-black bg-black p-1 shadow-[8px_8px_0_black]">
                                <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800" className="w-full h-32 object-cover grayscale opacity-80" />
                                <div className="text-center text-white font-black font-serif text-3xl -mt-8 relative z-10 drop-shadow-lg">NYC</div>
                            </div>
                        </div>

                        {/* Right Booking Form */}
                        <div className="lg:col-span-7 relative">
                            <div className="absolute -top-6 -right-6 size-24 bg-[#00b0ff] rounded-full border-4 border-black flex items-center justify-center text-center transform rotate-12 shadow-[4px_4px_0_black] z-30 animate-pulse">
                                <span className="font-black text-white italic text-lg leading-none">OPEN<br />NOW</span>
                            </div>

                            <div className="bg-white border-4 border-black p-8 relative shadow-[12px_12px_0_black]">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="bg-black text-white size-8 flex items-center justify-center font-black text-sm">1</div>
                                    <div>
                                        <h3 className="font-black uppercase text-xl">Reserva con Calvo</h3>
                                        <p className="text-xs text-gray-500 font-bold">Fill out the form below to secure your spot.</p>
                                    </div>
                                </div>

                                <div className="border-b-2 border-dashed border-gray-300 mb-8 w-full"></div>

                                <form className="space-y-6">
                                    <div>
                                        <label className="text-[10px] font-black uppercase text-gray-600 mb-1 block">Nombre del Promotor (Name)</label>
                                        <div className="border-2 border-gray-400 p-3 bg-white flex items-center gap-2 focus-within:border-black focus-within:shadow-[4px_4px_0_black] transition-all">
                                            <input type="text" placeholder="Enter your full name" className="w-full outline-none font-bold text-black placeholder-gray-300 bg-transparent text-sm" />
                                            <span className="material-symbols-outlined text-gray-400">person</span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-black uppercase text-gray-600 mb-1 block">Correo Electrónico (Email)</label>
                                        <div className="border-2 border-gray-400 p-3 bg-white flex items-center gap-2 focus-within:border-black focus-within:shadow-[4px_4px_0_black] transition-all">
                                            <input type="email" placeholder="you@example.com" className="w-full outline-none font-bold text-black placeholder-gray-300 bg-transparent text-sm" />
                                            <span className="material-symbols-outlined text-gray-400">mail</span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-black uppercase text-gray-600 mb-1 block">La Propuesta (Message)</label>
                                        <div className="border-2 border-black p-3 bg-white focus-within:shadow-[4px_4px_0_black] transition-all">
                                            <textarea placeholder="Tell me about your project..." rows={4} className="w-full outline-none font-bold text-black placeholder-gray-300 bg-transparent text-sm resize-none"></textarea>
                                        </div>
                                    </div>

                                    <button className="w-full bg-[#ff9100] border-2 border-black py-4 font-black uppercase hover:bg-[#ffab40] transition-colors flex items-center justify-center gap-2 shadow-[4px_4px_0_black] hover:translate-y-0.5 hover:shadow-[2px_2px_0_black] active:translate-y-1 active:shadow-none">
                                        ¡Contratar a Calvo! <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </form>

                                <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center opacity-50">
                                    <div>
                                        <span className="block text-[8px] font-black uppercase text-gray-400">Ticket No.</span>
                                        <span className="font-mono font-bold">004285</span>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-400">barcode</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
            <Footer />
        </>
    );
}
