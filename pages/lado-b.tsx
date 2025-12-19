import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function LadoB() {
    return (
        <>
            <SeoHead title="Lado B: Creativo | Calvo Creativo" />
            <Navigation />
            <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
                <div className="relative min-h-screen w-full overflow-hidden bg-[#120810] py-20">
                    {/* Background Blobs */}
                    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#f4258c]/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#8b5cf6]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

                    <div className="relative z-10 mx-auto max-w-7xl px-4 flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f4258c]/50 bg-[#f4258c]/10 backdrop-blur-md mb-8">
                            <span className="material-symbols-outlined text-[#f4258c] text-lg">graphic_eq</span>
                            <span className="text-[#f4258c] text-xs font-bold uppercase tracking-widest font-mono">Salsa Dura Web Design</span>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-title text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f4258c] to-[#ff6b35] leading-none mb-10 animate-float">
                            Lado B:<br />Estrategia<br />y Flow
                        </h1>

                        <p className="max-w-2xl text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12 italic">
                            Estrategia que pega fuerte. <span className="text-[#ccff00] font-bold">Sonido Bestial</span> para tu marca. Narrativas que hipnotizan.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 mb-24">
                            <button className="h-14 px-10 rounded-full bg-[#f4258c] text-white font-bold text-lg shadow-[0_0_30px_rgba(244,37,140,0.5)] hover:scale-105 transition-all">
                                Explorar Viaje
                            </button>
                            <button className="h-14 px-10 rounded-full border-2 border-white/20 text-white font-bold text-lg hover:border-[#ccff00] hover:text-[#ccff00] transition-all">
                                Escuchar Demo
                            </button>
                        </div>

                        {/* Floating Blobs Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                            {[
                                { title: 'Composición de Hits', icon: 'auto_fix', color: 'from-[#f4258c] to-[#ff6b35]', desc: 'Estrategias de contenido que rompen el patrón visual.' },
                                { title: 'Narrativa Visual', icon: 'water_drop', color: 'from-[#ccff00] to-[#0ea5e9]', desc: 'Adaptabilidad total. Tu marca fluye como agua en las SERPs.' },
                                { title: 'Letras que Conectan', icon: 'hub', color: 'from-[#8b5cf6] to-[#f4258c]', desc: 'Link building orgánico con alma y propósito.' },
                            ].map((item, idx) => (
                                <div key={idx} className="group relative p-10 min-h-[350px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:scale-105">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transition-all`}></div>
                                    <div className={`size-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-6 group-hover:rotate-12 transition-transform`}>
                                        <span className="material-symbols-outlined text-white text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold font-title text-white mb-4 tracking-wide">{item.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
