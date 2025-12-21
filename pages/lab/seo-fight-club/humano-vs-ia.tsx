import React from 'react';
import ExperimentLayout from '@/components/ExperimentLayout';
import Link from 'next/link';

export default function SeoFightClub() {
    return (
        <ExperimentLayout
            title="SEO Fight Club: Humano vs IA | Experimentos"
            description="Round 1: Puse a competir un artículo escrito por ChatGPT contra uno optimizado por un humano. Los resultados reales."
            keyword="Contenido IA vs Humano SEO"
            trackNumber="Track 02"
            trackTitle="SEO Fight Club"
            themeColor="acid-green"
        >
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9]">
                Round 1: ChatGPT vs. Redactor Senior. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-green to-teal-400">¿Quién tiene la mejor pegada?</span>
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
                {/* Visual Hero: Fight Card */}
                <div className="bg-[#0f172a] border-4 border-white/10 p-8 rounded-xl mb-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                    <div className="flex-1">
                        <span className="text-blue-400 font-mono text-xs uppercase tracking-widest block mb-2">Rincón Azul</span>
                        <h3 className="text-3xl font-black uppercase m-0">ChatGPT-4o</h3>
                        <p className="text-sm opacity-50 m-0">Prompt Engineering Avanzado</p>
                    </div>
                    <div className="font-display text-4xl font-black text-acid-green italic">VS</div>
                    <div className="flex-1 md:text-right">
                        <span className="text-red-500 font-mono text-xs uppercase tracking-widest block mb-2">Rincón Rojo</span>
                        <h3 className="text-3xl font-black uppercase m-0">Humano</h3>
                        <p className="text-sm opacity-50 m-0">Salsa Mode & Storytelling</p>
                    </div>
                </div>

                <div className="my-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Las Reglas del Combate</h2>
                    <ul className="text-white/80 space-y-2">
                        <li>✅ Mismo tema ("Mejores CRMs para Real Estate").</li>
                        <li>✅ Misma longitud (~1500 palabras).</li>
                        <li>✅ Dominio nuevo (DR 0).</li>
                        <li>✅ Sin backlinks externos.</li>
                    </ul>
                </div>

                <div className="my-16">
                    <h2 className="text-3xl font-bold text-white mb-6">El K.O. (Resultados a 90 días)</h2>

                    {/* Mock Chart/Data Visualization */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-blue-400">speed</span>
                                Velocidad de Indexación
                            </h4>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1"><span>IA</span> <span>4 Horas</span></div>
                                    <div className="h-2 bg-gray-700 rounded-full"><div className="h-full bg-blue-500 w-[95%] rounded-full"></div></div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1"><span>Humano</span> <span>24 Horas</span></div>
                                    <div className="h-2 bg-gray-700 rounded-full"><div className="h-full bg-red-500 w-[40%] rounded-full"></div></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-green-400">timer</span>
                                Engagement (Dwell Time)
                            </h4>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1"><span>IA</span> <span>45 seg</span></div>
                                    <div className="h-2 bg-gray-700 rounded-full"><div className="h-full bg-blue-500 w-[30%] rounded-full"></div></div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1"><span>Humano</span> <span>3:20 min</span></div>
                                    <div className="h-2 bg-gray-700 rounded-full"><div className="h-full bg-red-500 w-[90%] rounded-full"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-acid-green/10 border-l-4 border-acid-green p-6">
                        <p className="font-bold text-acid-green mb-1">INSIGHT:</p>
                        <p className="text-white m-0">
                            La IA ganó en velocidad, pero el Humano retuvo al usuario <strong>3x más tiempo</strong> y terminó rankeando por keywords transaccionales ($$$).
                        </p>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4">Veredicto del Juez</h3>
                    <p>
                        La IA es el sparring perfecto, pero no gana el campeonato sola.
                        Necesitas el <strong>'Information Gain'</strong> que solo un humano con experiencia puede dar para convertir tráfico en ventas.
                    </p>
                </div>

                <div className="bg-white/5 md:p-8 p-6 rounded-xl text-center border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-4">¿Quieres una estrategia híbrida?</h3>
                    <p className="mb-6 text-white/70">
                        Combino la velocidad de la IA para cubrir terreno con la profundidad humana para cerrar ventas.
                    </p>
                    <Link href="/lado-a" className="inline-block px-6 py-3 bg-acid-green text-black font-bold uppercase hover:bg-white transition-colors">
                        Ver Estrategia Híbrida (Lado A)
                    </Link>
                </div>
            </div>
        </ExperimentLayout>
    );
}
