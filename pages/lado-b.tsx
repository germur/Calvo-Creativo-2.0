import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default function LadoB() {
    const tracklistRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const scrollToTracklist = () => {
        tracklistRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const generateAndPlayDemo = async () => {
        if (isPlaying) {
            audioRef.current?.pause();
            setIsPlaying(false);
            return;
        }

        if (audioUrl) {
            audioRef.current?.play();
            setIsPlaying(true);
            return;
        }

        setIsLoading(true);

        try {
            // Nota: En un entorno real, esto debería hacerse a través de un API Route para proteger la key.
            // Para este demo cliente, usaremos la key expuesta si está disponible o simularemos.
            const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

            if (!apiKey) {
                alert("Por favor configura NEXT_PUBLIC_GEMINI_API_KEY en tu archivo .env.local para usar la demo de voz real.");
                // Fallback simulación para que el usuario vea la UI funcionar
                setTimeout(() => {
                    setIsLoading(false);
                    alert("Modo simulación: La API Key no está configurada. Imagina una voz de salsa increíble aquí.");
                }, 2000);
                return;
            }

            const genAI = new GoogleGenerativeAI(apiKey);
            // Usamos un modelo capaz de generar texto creativo primero
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const prompt = "Escribe un guion corto (máximo 150 caracteres) muy creativo y con jerga de salsa/música latina para vender servicios de diseño web y SEO. Actúa como un locutor de radio del Caribe. El tono debe ser 'Salsa Dura'.";

            const result = await model.generateContent(prompt);
            const text = result.response.text();

            console.log("Gemini guion:", text);

            // Paso 2: Usar Web Speech API para sintetizar el "sabor" (ya que la API de audio directa de Gemini requiere acceso beta específico)
            // O si el usuario tiene acceso a un endpoint TTS real, lo llamaríamos aquí.
            // Implementaremos Web Speech API con una voz en español como fallback robusto.

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'es-419'; // Español Latinoamericano
            utterance.rate = 1.1;
            utterance.pitch = 0.9;

            utterance.onstart = () => {
                setIsLoading(false);
                setIsPlaying(true);
            };

            utterance.onend = () => {
                setIsPlaying(false);
            };

            window.speechSynthesis.speak(utterance);

        } catch (error) {
            console.error("Error generating demo:", error);
            setIsLoading(false);
            alert("Hubo un error conectando con el estudio. Inténtalo de nuevo.");
        }
    };

    return (
        <>
            <SeoHead title="Lado B: Creativo | Calvo Creativo" />
            <Navigation />
            <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black font-sans">
                <div className="relative min-h-screen w-full overflow-hidden bg-[#120810] py-20 flex flex-col items-center">
                    {/* Background Blobs */}
                    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#f4258c]/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#8b5cf6]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

                    <div className="relative z-10 mx-auto max-w-7xl px-4 flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f4258c]/50 bg-[#f4258c]/10 backdrop-blur-md mb-8">
                            <span className="material-symbols-outlined text-[#f4258c] text-lg">graphic_eq</span>
                            <span className="text-[#f4258c] text-xs font-bold uppercase tracking-widest font-mono">Salsa Dura Web Design</span>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-headline font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f4258c] to-[#ff6b35] leading-[0.85] mb-10 tracking-tighter">
                            Lado B:<br />Estrategia<br />y Flow
                        </h1>

                        <p className="max-w-2xl text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12 italic">
                            Estrategia que pega fuerte. <span className="text-[#ccff00] font-bold">Sonido Bestial</span> para tu marca. Narrativas que hipnotizan.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 mb-24">
                            <button
                                onClick={scrollToTracklist}
                                className="h-14 px-10 rounded-full bg-[#f4258c] text-white font-bold text-lg shadow-[0_0_30px_rgba(244,37,140,0.5)] hover:scale-105 transition-all text-transform hover:shadow-[0_0_50px_rgba(244,37,140,0.8)]"
                            >
                                Explorar Viaje
                            </button>

                            <button
                                onClick={generateAndPlayDemo}
                                disabled={isLoading}
                                className={`h-14 px-10 rounded-full border-2 border-white/20 text-white font-bold text-lg hover:border-[#ccff00] hover:text-[#ccff00] transition-all flex items-center gap-3 ${isLoading ? 'opacity-80 cursor-wait' : ''}`}
                            >
                                {isLoading ? (
                                    <>
                                        <span className="flex gap-1 h-4 items-end">
                                            <span className="w-1 bg-[#ccff00] animate-[bounce_1s_infinite] h-2"></span>
                                            <span className="w-1 bg-[#ccff00] animate-[bounce_1s_infinite_0.2s] h-4"></span>
                                            <span className="w-1 bg-[#ccff00] animate-[bounce_1s_infinite_0.4s] h-3"></span>
                                        </span>
                                        <span>Afinando...</span>
                                    </>
                                ) : isPlaying ? (
                                    <>
                                        <span className="material-symbols-outlined animate-pulse">stop_circle</span>
                                        <span>Detener Demo</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined">play_circle</span>
                                        <span>Escuchar Demo</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Floating Blobs Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-32">
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
                                    <h3 className="text-2xl font-bold font-headline text-white mb-4 tracking-wide uppercase">{item.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* The Creative Tracklist Section */}
                        <div ref={tracklistRef} className="w-full max-w-4xl relative mt-20">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mixed-blend-overlay"></div>
                            <div className="border-[1px] border-white/10 bg-[#1a0b2e]/80 backdrop-blur-xl p-12 rounded-sm shadow-2xl relative overflow-hidden">
                                {/* Vinyl Spine Effect */}
                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-white/10 to-transparent"></div>

                                <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-white/10 pb-6 mb-10">
                                    <div className="text-left">
                                        <h2 className="text-4xl md:text-5xl font-headline font-black uppercase text-[#ccff00] tracking-tighter transform -rotate-1">
                                            The Creative<br />Tracklist
                                        </h2>
                                        <p className="text-white/50 font-mono text-xs mt-2 tracking-widest uppercase">Lado B / LP / 2025</p>
                                    </div>
                                    <div className="hidden md:block">
                                        <span className="material-symbols-outlined text-6xl text-white/5 rotate-12">album</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { track: '01', title: 'El Briefing (Intro)', time: '03:45', desc: 'Entendiendo el ritmo de tu negocio.' },
                                        { track: '02', title: 'Lluvia de Ideas (Jam Session)', time: '05:12', desc: 'Improvisación controlada sobre keywords.' },
                                        { track: '03', title: 'Diseño UX/UI (La Mezcla)', time: '04:20', desc: 'Afinando la experiencia visual.' },
                                        { track: '04', title: 'Copywriting (Las Letras)', time: '03:55', desc: 'Palabras que riman con conversión.' },
                                        { track: '05', title: 'Lanzamiento (El Concierto)', time: '06:00', desc: 'Tu marca en vivo para el mundo.' }
                                    ].map((track, i) => (
                                        <div key={i} className="group flex items-center justify-between py-3 border-b border-white/5 hover:bg-white/5 px-4 rounded transition-colors cursor-default">
                                            <div className="flex items-center gap-6">
                                                <span className="font-mono text-white/30 text-sm">{track.track}</span>
                                                <div className="text-left">
                                                    <h4 className="font-bold text-lg text-white group-hover:text-[#f4258c] transition-colors font-headline uppercase">{track.title}</h4>
                                                    <p className="text-xs text-white/40">{track.desc}</p>
                                                </div>
                                            </div>
                                            <span className="font-mono text-xs text-[#ccff00] opacity-0 group-hover:opacity-100 transition-opacity">{track.time}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 text-center">
                                    <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">Produced by Calvo Creativo Studios</p>
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
