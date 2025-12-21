import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import Link from 'next/link';

export default function AutomatizacionSeo() {
    return (
        <ServiceLayout
            title="Automatización SEO & Flujos de Trabajo con IA | Python y Agentes Autónomos"
            description="Escala tu estrategia SEO sin aumentar tu nómina. Implementamos scripts de Python, agentes de IA autónomos y flujos de trabajo de datos para automatizar auditorías, research y reporting."
            serviceName="Automatización SEO & IA"
            geoDefinition="La automatización SEO moderna va más allá de programar reportes. Consiste en desplegar sistemas autónomos (Agentic AI) y scripts personalizados (Python, APIs) que ejecutan tareas complejas a escala masiva. Desde la agrupación semántica de miles de keywords hasta la detección de anomalías en tiempo real, estos sistemas permiten a las empresas procesar datos y tomar decisiones estratégicas sin intervención humana constante."
            faqItems={[
                { question: "¿La automatización reemplazará a mi equipo de marketing?", answer: "No. La automatización elimina el trabajo repetitivo (el 'busywork') para que tu equipo pueda dedicarse a la estrategia y la creatividad. Es un multiplicador de fuerza, no un reemplazo." },
                { question: "¿Es seguro usar IA para generar contenido o código?", answer: "Sí, siempre que se utilice un enfoque 'Human-in-the-loop' (Humano en el bucle). Mis sistemas generan los borradores o los análisis, pero siempre hay una capa de supervisión estratégica experta antes de la publicación o implementación." },
                { question: "¿Necesito conocimientos técnicos para contratar este servicio?", answer: "No. Yo construyo la infraestructura técnica (el 'backend') y te entrego los resultados o dashboards (el 'frontend'). Tú obtienes la eficiencia sin tener que tocar una línea de código." }
            ]}
        >
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="z-10">
                        <div className="inline-block bg-[#E11D48] text-white px-3 py-1 text-xs font-mono uppercase tracking-widest mb-6">
                            Track 03 // Marketer-Builder
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-black text-[#0A0A0A] leading-[0.9] tracking-tighter mb-6">
                            Automatización SEO: <br />
                            <span className="text-[#E11D48]">Escala tu estrategia, no tu estrés.</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-light mb-8 max-w-lg border-l-4 border-[#E11D48] pl-6">
                            No soy solo un consultor, soy un Marketer-Builder.
                        </p>
                        <div className="flex gap-4">
                            <button className="h-14 px-8 rounded bg-[#0A0A0A] text-white font-bold uppercase tracking-wide hover:bg-[#E11D48] transition-colors shadow-xl">
                                Automatizar mi Estrategia
                            </button>
                        </div>
                    </div>

                    {/* Visual: Terminal / Vibe Code */}
                    <div className="relative h-[400px] bg-[#1E1E1E] rounded-xl border border-gray-800 shadow-2xl p-6 overflow-hidden font-mono text-xs">
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-2 text-gray-500">vibe-coder.py</span>
                        </div>
                        {/* Fake Code Animation */}
                        <div className="text-green-400 space-y-1">
                            <div className="typing-effect delay-100">&gt; import semantic_layer as sl</div>
                            <div className="typing-effect delay-300">&gt; import agentic_workflow as aw</div>
                            <div className="text-gray-500 typing-effect delay-500"># Initializing Audit Protocol...</div>
                            <div className="typing-effect delay-700">&gt; target = "client-site.com"</div>
                            <div className="typing-effect delay-1000">&gt; aw.deploy_agent(target, mode="aggressive")</div>
                            <div className="text-yellow-400 mt-2 typing-effect delay-1500">[INFO] Scanning 10,000 URLs...</div>
                            <div className="text-yellow-400 typing-effect delay-2000">[INFO] Identifying Cannibalization...</div>
                            <div className="text-blue-400 mt-2 typing-effect delay-2500">[SUCCESS] 45 Anomalies Detected.</div>
                            <div className="text-blue-400 typing-effect delay-3000">[SUCCESS] Report Generated in 45s.</div>
                            <div className="mt-4 animate-pulse">&gt; _</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem: Manual SEO */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">¿Tu equipo sigue copiando y pegando datos en Excel?</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        En 2026, la velocidad de implementación es un factor de ranking. Si tu equipo dedica 20 horas al mes a tareas manuales que un script podría hacer en 3 minutos, estás perdiendo ventaja competitiva.
                    </p>
                    <div className="bg-red-50 text-red-900 p-6 rounded-lg text-left max-w-2xl mx-auto border border-red-100">
                        <h4 className="font-bold mb-3 uppercase text-xs tracking-widest">Síntomas de operación obsoleta:</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2"><span className="text-red-500 material-symbols-outlined text-sm">warning</span> Auditorías técnicas que tardan semanas.</li>
                            <li className="flex items-center gap-2"><span className="text-red-500 material-symbols-outlined text-sm">warning</span> Incapacidad para detectar canibalización a escala.</li>
                            <li className="flex items-center gap-2"><span className="text-red-500 material-symbols-outlined text-sm">warning</span> Falta de datos en tiempo real sobre LLMs.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Solution: Marketer-Builder Strategy */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-display font-black mb-4">El Enfoque "Marketer-Builder"</h2>
                    <p className="text-gray-600">Mi valor diferencial es que no necesito esperar al departamento de TI. Combino estrategia y código (Vibe Coding).</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Agentic Workflows */}
                    <div className="bg-[#111] text-gray-300 p-8 border border-gray-800 rounded-xl hover:border-[#E11D48] transition-colors relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-white">smart_toy</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Agentes de IA</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            Implementamos agentes que no solo "leen" datos, sino que actúan sobre ellos. Monitoreo 24/7 y clustering semántico autónomo.
                        </p>
                    </div>

                    {/* Python for SEO */}
                    <div className="bg-[#111] text-gray-300 p-8 border border-gray-800 rounded-xl hover:border-[#E11D48] transition-colors relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-white">terminal</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Python Técnico</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            Scripts personalizados para problemas complejos. Análisis de Logs y Extracción de Entidades (NLP) para ingeniería inversa de competidores.
                        </p>
                    </div>

                    {/* Programmatic SEO */}
                    <div className="bg-[#111] text-gray-300 p-8 border border-gray-800 rounded-xl hover:border-[#E11D48] transition-colors relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-white">dataset</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">SEO Programático</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            Creación masiva de páginas de aterrizaje basadas en datos. Arquitectura de información a escala para capturar long-tails.
                        </p>
                    </div>
                </div>
            </section>

            {/* Data Readiness Process */}
            <section className="py-20 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-display font-black mb-6">Preparamos tus datos para la IA</h2>
                        <p className="text-gray-600 mb-8">Para que la automatización funcione, la base debe ser sólida. Audito y estructuro tu "Data Readiness".</p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="bg-[#E11D48] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold">Unificación de Fuentes</h4>
                                    <p className="text-sm text-gray-500">Conecto GSC, GA4 y CRM en un solo lago de datos.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="bg-[#E11D48] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold">Limpieza de Datos</h4>
                                    <p className="text-sm text-gray-500">Eliminamos el ruido para evitar alucinaciones en modelos de IA.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="bg-[#E11D48] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold">Dashboards Vivos</h4>
                                    <p className="text-sm text-gray-500">Reportes en Looker Studio que se actualizan solos.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {/* Placeholder for Data Viz Graphic */}
                        <div className="aspect-square bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                            <span className="material-symbols-outlined text-[10rem] text-[#E11D48]/10">query_stats</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bridge to Lado B Experiment */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto bg-black text-white p-12 rounded-[2rem] relative overflow-hidden text-center border border-[#E11D48]/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/20 to-transparent"></div>
                    <div className="relative z-10">
                        <span className="font-mono text-xs text-[#E11D48] uppercase tracking-widest mb-4 block">Del Laboratorio (Lado B)</span>
                        <h3 className="text-3xl font-bold mb-4">No es teoría, es ingeniería aplicada.</h3>
                        <p className="text-white/70 mb-8 max-w-lg mx-auto">
                            ¿Quieres ver cómo automaticé una auditoría de 10,000 URLs usando Python y la API de Claude?
                        </p>
                        <Link href="/lab/automatizacion-seo-python-script" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors">
                            Ver Código y Resultados
                            <span className="material-symbols-outlined">code</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 text-center px-6">
                <h2 className="text-3xl md:text-5xl font-display font-black mb-6">Deja de trabajar duro.</h2>
                <h3 className="text-2xl text-gray-400 font-light mb-8">Empieza a trabajar con Agentes.</h3>
                <Link href="/contacto" className="inline-flex items-center gap-2 px-10 py-5 bg-[#E11D48] text-white font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-xl rounded">
                    Lanzar Automatización
                    <span className="material-symbols-outlined">rocket_launch</span>
                </Link>
            </section>
        </ServiceLayout>
    );
}
