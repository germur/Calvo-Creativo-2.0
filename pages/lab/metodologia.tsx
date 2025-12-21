import ExperimentLayout from '@/components/ExperimentLayout';

export default function MethodologyPage() {
    return (
        <ExperimentLayout
            title="La Cinta Negra (Metodología) | The Lab"
            description="Transparencia radical sobre nuestro stack tecnológico, uso de IA y estándares de experimentación."
            keyword="Technical Standards"
            trackNumber="00"
            trackTitle="The Black Box"
            themeColor="acid-purple"
            mode="dark"
            width="wide"
        >
            <div className="grid lg:grid-cols-12 gap-12 font-mono">

                {/* Header Section */}
                <div className="lg:col-span-12 border-b border-white/20 pb-12 mb-8">
                    <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 text-white font-display">
                        The Black <span className="text-acid-purple">Box</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        En la era de la IA, la confianza es el único activo que importa.
                        Este documento es nuestra declaración de transparencia técnica y ética.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <span className="px-2 py-1 border border-acid-purple text-acid-purple text-xs uppercase">
                            STATUS: UNCLASSIFIED
                        </span>
                        <span className="px-2 py-1 border border-white/20 text-gray-400 text-xs uppercase">
                            REV: 2025.1
                        </span>
                    </div>
                </div>

                {/* Left Column: Stack & Tools */}
                <div className="lg:col-span-4 space-y-12">
                    <section>
                        <h2 className="text-acid-purple font-bold text-lg uppercase mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined">terminal</span>
                            Tech Stack
                        </h2>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Core</span>
                                <span className="text-white">Next.js + React</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Data/Scripting</span>
                                <span className="text-white">Python (Pandas/NumPy)</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>APIs</span>
                                <span className="text-white">OpenAI, Ahrefs, Semrush</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Deployment</span>
                                <span className="text-white">Vercel Edge Network</span>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-acid-purple font-bold text-lg uppercase mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined">science</span>
                            Data Sources
                        </h2>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            No inventamos datos. Todos los experimentos del Lab utilizan fuentes primarias verificables o APIs de terceros reconocidos. Los datasets crudos están disponibles bajo petición para revisión por pares.
                        </p>
                    </section>
                </div>

                {/* Right Column: AI Ethics & Process */}
                <div className="lg:col-span-8 grid gap-8">

                    {/* Visual Blueprint Card */}
                    <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="material-symbols-outlined text-9xl">fingerprint</span>
                        </div>
                        <h2 className="text-2xl font-bold text-white uppercase mb-4 font-display">
                            Política de Uso de IA
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 text-sm">
                            <div>
                                <h3 className="text-acid-purple font-bold uppercase mb-2">Lo que hace la IA</h3>
                                <ul className="list-disc pl-4 text-gray-400 space-y-1 marker:text-acid-purple">
                                    <li>Análisis de patrones en datasets masivos.</li>
                                    <li>Generación de código "boilerplate" (Vibe Coding).</li>
                                    <li>Asistencia en corrección gramatical y sintaxis.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-white font-bold uppercase mb-2">Lo que hace el Humano</h3>
                                <ul className="list-disc pl-4 text-gray-300 space-y-1 marker:text-white">
                                    <li>Estrategia y "Toma de Postura" (Opinion).</li>
                                    <li>Validación final de todo código y dato.</li>
                                    <li>Narrativa y conexión cultural (Salsa).</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Scientific Method */}
                    <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-xl">
                        <h2 className="text-2xl font-bold text-white uppercase mb-6 font-display">
                            Estándar de Experimentación
                        </h2>
                        <div className="space-y-6 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-acid-purple to-transparent opacity-50"></div>

                            {[
                                { title: '1. Hipótesis', desc: 'Planteamiento claro de lo que intentamos probar o romper.' },
                                { title: '2. Aislamiento', desc: 'Control de variables para evitar ruido en los datos (ej. actualizaciones de core).' },
                                { title: '3. Ejecución', desc: 'Despliegue del script o técnica en entorno controlado.' },
                                { title: '4. Análisis', desc: 'Interpretación de resultados sin sesgo de confirmación.' }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4 relative z-10">
                                    <div className="w-8 h-8 bg-black border border-acid-purple rounded-full flex items-center justify-center text-xs text-acid-purple font-bold shrink-0">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <div className="text-white font-bold uppercase text-sm">{step.title}</div>
                                        <div className="text-gray-400 text-xs">{step.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </ExperimentLayout>
    );
}
