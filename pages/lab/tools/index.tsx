import Link from 'next/link';
import ExperimentLayout from '@/components/ExperimentLayout';

export default function ToolsHub() {
    return (
        <ExperimentLayout
            title="The Playground: Herramientas SEO & GEO"
            description="Herramientas interactivas, simuladores y calculadoras para Marketer-Builders."
            keyword="SEO Tools"
            trackNumber="04"
            trackTitle="The Playground"
            themeColor="acid-green"
            mode="dark"
            width="wide"
        >
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black uppercase mb-4 text-white">
                    The <span className="text-acid-green">Playground</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                    Menos teoría, más utilidad. Herramientas tácticas para ejecutar estrategias de SEO y GEO en tiempo real.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* TOOL 01: ROI Calculator */}
                <Link href="/lab/tools/roi-calculator" className="group relative block bg-[#1a1a1a] border border-white/10 hover:border-acid-green transition-all p-8 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)]">
                    <div className="absolute top-0 right-0 bg-acid-green text-black text-[10px] font-bold px-2 py-1 uppercase rounded-bl-lg">
                        v1.0 Live
                    </div>
                    <div className="mb-6 text-4xl">🧮</div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-acid-green transition-colors">
                        Calculadora ROI SEO
                    </h3>
                    <p className="text-sm text-gray-400 mb-6 line-clamp-3">
                        Proyecta el impacto financiero de una estrategia SEO. Estima ingresos adicionales basados en tráfico, conversión y LTV.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono text-acid-green">
                        <span>&gt; EJECUTAR_SCRIPT</span>
                        <span className="w-2 h-4 bg-acid-green animate-pulse"></span>
                    </div>
                </Link>

                {/* TOOL 02: SERP Simulator (Coming Soon) */}
                <div className="group relative block bg-[#1a1a1a] border border-white/5 opacity-60 cursor-not-allowed p-8 rounded-xl overflow-hidden grayscale">
                    <div className="absolute top-0 right-0 bg-white/20 text-white text-[10px] font-bold px-2 py-1 uppercase rounded-bl-lg">
                        In Dev
                    </div>
                    <div className="mb-6 text-4xl">👁️</div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                        Simulador SERP + AI
                    </h3>
                    <p className="text-sm text-gray-400 mb-6">
                        Visualiza cómo aparecen tus snippets en Google y en respuestas de IA (Perplexity/SearchGPT).
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                        <span>&gt; COMPILING...</span>
                    </div>
                </div>

                {/* TOOL 03: Schema Generator (Coming Soon) */}
                <div className="group relative block bg-[#1a1a1a] border border-white/5 opacity-60 cursor-not-allowed p-8 rounded-xl overflow-hidden grayscale">
                    <div className="absolute top-0 right-0 bg-white/20 text-white text-[10px] font-bold px-2 py-1 uppercase rounded-bl-lg">
                        In Dev
                    </div>
                    <div className="mb-6 text-4xl">🏗️</div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                        Schema Builder
                    </h3>
                    <p className="text-sm text-gray-400 mb-6">
                        Generador de JSON-LD para entidades. Define quién eres para que el Grafo de Conocimiento te entienda.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                        <span>&gt; QUEUED</span>
                    </div>
                </div>
            </div>

        </ExperimentLayout>
    );
}
