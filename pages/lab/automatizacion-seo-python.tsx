import React from 'react';
import ExperimentLayout from '@/components/ExperimentLayout';
import Link from 'next/link';

export default function VibeCoding() {
    return (
        <ExperimentLayout
            title="Vibe Coding & Automatización SEO"
            description="Cómo uso Python y LLMs para automatizar auditorías SEO sin ser programador."
            keyword="Automatización SEO Python"
            trackNumber="Track 01"
            trackTitle="The Vibe Coder"
            themeColor="acid-pink"
        >
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9]">
                De "No sé programar" a automatizar mi agencia: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-pink to-acid-orange">El Manifiesto del Vibe Coder.</span>
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
                <p className="lead text-xl text-white/80 font-light border-l-4 border-acid-pink pl-6 italic">
                    "La música tiene ritmo. El código tiene lógica. Yo mezclo los dos.
                    Antes, si querías una herramienta SEO personalizada, esperabas 6 meses a ingeniería.
                    Hoy, con una IA y buen prompteo, lo hago en una tarde mientras escucho a Héctor Lavoe."
                </p>

                <div className="my-16">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="text-acid-pink material-symbols-outlined text-4xl">science</span>
                        El Experimento
                    </h2>
                    <p>
                        <strong>El Problema:</strong> Las herramientas tradicionales (Screaming Frog, Ahrefs) son potentes pero cobran por créditos o son lentas para procesar 100,000 URLs si solo buscas un patrón específico.
                    </p>
                    <p>
                        <strong>La Solución (Vibe Coding):</strong> Le pedí a Claude 3.5 Sonnet que escribiera un script en Python para cruzar datos de Search Console con el sitemap en tiempo real.
                    </p>
                </div>

                {/* The Code Visual */}
                <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-white/10 shadow-2xl mb-12">
                    <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-4 font-mono text-xs text-white/50">audit_script.py</span>
                    </div>
                    <div className="p-6 overflow-x-auto">
                        <pre className="font-mono text-sm text-blue-300">
                            <code>{`import pandas as pd
from google.oauth2 import service_account
from googleapiclient.discovery import build

def vibe_check_urls(sitemap_url):
    print("🎧 Iniciando Vibe Check...")
    # ... logic to fetch sitemap
    
    # Cruzando datos con GSC
    df_merged = pd.merge(sitemap_df, gsc_df, on='url')
    
    # Detectando 'Low-Value Content'
    zombie_pages = df_merged[df_merged['clicks'] == 0]
    
    return zombie_pages

# Ejecutando con Salsa
if __name__ == "__main__":
    vibe_check_urls('https://calvocreativo.com/sitemap.xml')`}</code>
                        </pre>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-acid-pink/10 border border-acid-pink/30 p-6 rounded-lg text-center">
                        <div className="text-4xl font-bold text-white mb-1">95%</div>
                        <div className="text-xs font-mono uppercase text-acid-pink">Tiempo Ahorrado</div>
                    </div>
                    <div className="bg-acid-pink/10 border border-acid-pink/30 p-6 rounded-lg text-center">
                        <div className="text-4xl font-bold text-white mb-1">$0</div>
                        <div className="text-xs font-mono uppercase text-acid-pink">Coste Licencia</div>
                    </div>
                    <div className="bg-acid-pink/10 border border-acid-pink/30 p-6 rounded-lg text-center">
                        <div className="text-4xl font-bold text-white mb-1">100%</div>
                        <div className="text-xs font-mono uppercase text-acid-pink">Flow</div>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4">¿Por qué importa esto para tu empresa?</h3>
                    <p>
                        Porque en 2026, el marketing no va de pedir deseos a TI, va de construir soluciones.
                        Yo construyo los sistemas que tu competencia ni siquiera sabe que existen.
                    </p>
                </div>
            </div>
        </ExperimentLayout>
    );
}
