import React, { useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default function LadoB() {
    const tracklistRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const scrollToTracklist = () => {
        tracklistRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const generateAndPlayDemo = async () => {
        if (isPlaying) {
            window.speechSynthesis.cancel();
            setIsPlaying(false);
            return;
        }
        setIsLoading(true);
        try {
            const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
            if (!apiKey) {
                alert("Por favor configura NEXT_PUBLIC_GEMINI_API_KEY en tu archivo .env.local para usar la demo de voz real.");
                // Fallback simple
                setTimeout(() => setIsLoading(false), 1000);
                return;
            }
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const prompt = "Escribe un guion corto (máximo 150 caracteres) muy creativo y con jerga de salsa/música latina para vender servicios de diseño web y SEO. Actúa como un locutor de radio del Caribe. El tono debe ser 'Salsa Dura'.";
            const result = await model.generateContent(prompt);
            const text = result.response.text();

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'es-419';
            utterance.rate = 1.1;
            utterance.pitch = 0.9;
            utterance.onstart = () => { setIsLoading(false); setIsPlaying(true); };
            utterance.onend = () => { setIsPlaying(false); };
            window.speechSynthesis.speak(utterance);
        } catch (error: any) {
            console.error("Error generating demo:", error);
            setIsLoading(false);
            alert(`Error técnico detalle: ${error.message || JSON.stringify(error)}.`);
        }
    };

    return (
        <>
            <SeoHead title="Lado B: Creativo | Calvo Creativo" />
            <Navigation />

            {/* Background Gradient */}
            <main className="min-h-screen bg-[#110515] text-white selection:bg-[#ff00ff] selection:text-white font-sans overflow-x-hidden">

                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-20">
                    {/* Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff00ff] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

                    <div className="relative z-10 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 border border-[#d500f9]/50 bg-[#d500f9]/10 rounded-full px-4 py-1 mb-8">
                            <span className="material-symbols-outlined text-[#d500f9] text-xs">graphic_eq</span>
                            <span className="text-[#d500f9] text-[10px] font-bold uppercase tracking-[0.2em]">Salsa Dura Web Design</span>
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black font-headline mb-6 leading-[0.85] tracking-tighter">
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#ff80ab] italic block mb-2">Lado B:</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-[#d500f9] to-[#7c4dff] drop-shadow-[0_0_15px_rgba(213,0,249,0.5)]">
                                Estrategia<br />y Flow
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
                            Estrategia que pega fuerte. <span className="text-[#ccff00] font-bold">Sonido Bestial</span> para tu marca.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={scrollToTracklist} className="bg-[#d500f9] hover:bg-[#aa00ff] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(213,0,249,0.4)] transition-all transform hover:scale-105">
                                Explora el Viaje 🚀
                            </button>
                            <button onClick={generateAndPlayDemo} className="border border-white/20 hover:border-[#ccff00] hover:text-[#ccff00] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all flex items-center gap-2">
                                {isLoading ? 'Afinando...' : isPlaying ? 'Detener Demo ⏹' : 'Escuchar Demo ▶'}
                            </button>
                        </div>
                    </div>

                    <div className="absolute bottom-10 animate-bounce">
                        <span className="material-symbols-outlined text-white/30 text-3xl">keyboard_arrow_down</span>
                    </div>
                </section>

                {/* Psychedelic Services */}
                <section className="py-24 relative z-10 max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black italic mb-4">
                            Servicios <span className="text-[#ccff00]">Psicodélicos</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto text-sm">
                            Sumérgete en una estrategia de contenidos líquida y storytelling que hipnotiza, deformando la realidad de las SERPs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Composición de Hits', subtitle: '(Content Strategy)', icon: 'auto_fix', color: 'bg-[#ff4081]', desc: 'Narrativas que envuelven a tu audiencia como un solo de piano en Sonido Bestial.' },
                            { title: 'Narrativa Visual', subtitle: 'Visual de Datos', icon: 'water_drop', color: 'bg-[#ccff00] text-black', desc: 'Adaptabilidad total. Tu contenido fluye como agua, llenando cada grieta de la SERP.' },
                            { title: 'Letras que Conectan', subtitle: '', icon: 'hub', color: 'bg-[#7c4dff]', desc: 'Conexiones orgánicas y vibrantes que potencian la autoridad de tu dominio.' }
                        ].map((item, i) => (
                            <div key={i} className="group relative bg-[#1a0b2e] border border-white/5 p-8 rounded-[2rem] hover:border-[#d500f9]/50 transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                                {/* Blob Shape Background */}
                                <div className={`absolute top-0 right-0 w-32 h-32 ${item.color} filter blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity rounded-full`}></div>

                                <div className={`size-14 ${item.color} rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10`}>
                                    <span className={`material-symbols-outlined text-2xl ${item.color.includes('text-black') ? 'text-black' : 'text-white'}`}>{item.icon}</span>
                                </div>

                                <h3 className="text-2xl font-black font-headline italic mb-1">{item.title}</h3>
                                {item.subtitle && <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">{item.subtitle}</p>}

                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Keyword Visualizer Section (Tracklist wrapper) */}
                <section ref={tracklistRef} className="py-24 bg-black/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <h2 className="text-4xl font-black italic mb-12">
                            El Visualizador de <span className="text-[#ff4081]">Keywords</span>
                            <span className="block text-xs font-mono text-gray-500 font-normal mt-2 uppercase tracking-widest">Datos estructurados bajo el efecto del prisma.</span>
                        </h2>

                        <div className="flex flex-wrap justify-center gap-4">
                            {['Cluster de Contenido', 'Keywords de Impacto', 'Long Tail Flow', 'Intención de Búsqueda', 'Topic Authority', 'Semantic Core'].map((tag, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#d500f9] hover:border-[#d500f9] hover:scale-110 transition-all cursor-crosshair shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
