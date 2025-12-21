import React from 'react';
import ExperimentLayout from '@/components/ExperimentLayout';
import Link from 'next/link';

export default function GeoTracker() {
    return (
        <ExperimentLayout
            title="Plantilla GEO Tracker Gratis | Auditoría AEO"
            description="Descarga gratis mi plantilla de Looker Studio para trackear tu visibilidad en ChatGPT, Perplexity y Motores Generativos."
            keyword="Plantilla Medición GEO"
            trackNumber="Track 03"
            trackTitle="The Freebie"
            themeColor="acid-purple"
        >
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9]">
                Tu competencia no sabe si aparece en ChatGPT. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-purple to-pink-500">Tú lo sabrás hoy.</span>
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
                <p className="lead text-xl text-white/80 font-light mb-12">
                    Ahrefs y Semrush son geniales, pero <strong>no te dicen qué opina Perplexity de tu marca</strong>.
                    La búsqueda ha cambiado, tus reportes también deberían.
                </p>

                <div className="my-16">
                    <h2 className="text-3xl font-bold text-white mb-6">¿Qué incluye el GEO Tracker 2026?</h2>

                    {/* Visual: Template Mockup */}
                    <div className="relative aspect-video bg-[#1e1e2e] border border-white/10 rounded-xl overflow-hidden shadow-2xl group mb-8">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-4 w-3/4 opacity-50 blur-[2px] group-hover:blur-0 transition-all duration-500">
                                <div className="h-32 bg-white/10 rounded"></div>
                                <div className="h-32 bg-white/10 rounded"></div>
                                <div className="h-64 bg-white/10 rounded col-span-2"></div>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:opacity-0 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-acid-purple animate-bounce">lock_open</span>
                        </div>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
                        <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-acid-purple">check_circle</span>
                            Tracker de menciones en GPT-4
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-acid-purple">check_circle</span>
                            Análisis de Sentimiento (Brand Vibe)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-acid-purple">check_circle</span>
                            Comparativa Share of Voice (SoV)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-acid-purple">check_circle</span>
                            Auditoría de Citaciones
                        </li>
                    </ul>
                </div>

                <div className="bg-acid-purple/10 border border-acid-purple/50 p-8 rounded-xl text-center mb-16">
                    <h3 className="text-2xl font-bold text-white mb-2">Descarga Directa</h3>
                    <p className="text-white/60 mb-6 text-sm">Sin trampas. Copia el Google Sheet a tu Drive.</p>

                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-acid-purple text-white font-bold uppercase tracking-wide hover:bg-white hover:text-acid-purple transition-all shadow-[0_0_20px_rgba(139,92,246,0.5)] rounded-full">
                        <span className="material-symbols-outlined">download</span>
                        Obtener Plantilla
                    </button>

                    <p className="text-xs text-white/30 mt-4 font-mono">v2.4 Updated Dec 2025</p>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4">Video: Cómo usarla en 2 mins</h3>
                    <div className="aspect-video bg-black/50 border border-white/10 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-6xl text-white/20">play_circle</span>
                    </div>
                </div>

                <hr className="border-white/10 my-12" />

                <div className="text-center">
                    <p className="text-xl font-bold text-white mb-2">¿Los datos salen en <span className="text-red-500">rojo</span>?</p>
                    <p className="text-white/70 mb-6">
                        No te preocupes. Sé cómo enseñarle a las máquinas a amar tu marca.
                    </p>
                </div>
            </div>
        </ExperimentLayout>
    );
}
