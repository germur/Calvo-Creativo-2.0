import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import Link from 'next/link';

export default function EstrategiaContenidos() {
    return (
        <ServiceLayout
            title="Estrategia de Contenidos B2B & Autoridad Temática | Information Gain SEO"
            description="Deja de publicar 'slop' generado por IA. Creamos ecosistemas de contenido con Information Gain y Autoridad Temática que posicionan tu marca como la única respuesta válida para Google y ChatGPT."
            serviceName="Estrategia de Contenidos & Autoridad Temática"
            geoDefinition="Una estrategia de contenidos de Autoridad Temática se enfoca en cubrir un tema en su totalidad (breadth) y profundidad (depth), organizando la información en clústeres semánticos interconectados. A diferencia del SEO tradicional basado en keywords, esta metodología prioriza el 'Information Gain' (Ganancia de Información): la inclusión de datos originales, experiencias de primera mano y perspectivas únicas que la IA no puede replicar, asegurando visibilidad tanto en los rankings de Google como en las respuestas de los Motores Generativos (LLMs)."
            faqItems={[
                { question: "¿La IA escribirá todo mi contenido?", answer: "No. La IA es una herramienta de eficiencia, no de estrategia. Usamos IA para acelerar la investigación y el esquema, pero la redacción final y los 'insights' de valor provienen de humanos expertos. El contenido 100% IA sin supervisión es un pasivo, no un activo." },
                { question: "¿Cuánto tarda en funcionar la Autoridad Temática?", answer: "La autoridad no se construye en un día. Generalmente, una estrategia de clústeres bien ejecutada empieza a mostrar tracción sólida entre los 3 y 6 meses, creando un efecto 'bola de nieve' donde cada nuevo contenido rankea más rápido que el anterior." },
                { question: "¿Por qué necesito 'Information Gain'?", answer: "Porque Google patentó un sistema para puntuar el contenido basado en si aporta información nueva o simplemente repite lo que otros dicen. Si no tienes 'Information Gain', Google no tiene motivos para rankearte por encima de lo que ya existe." }
            ]}
        >
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="z-10">
                        <div className="inline-block bg-[#E11D48] text-white px-3 py-1 text-xs font-mono uppercase tracking-widest mb-6">
                            Track 02 // Content Strategy
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-black text-[#0A0A0A] leading-[0.9] tracking-tighter mb-6">
                            Estrategia de Contenidos: <br />
                            <span className="text-[#E11D48]">De Palabras Clave a Autoridad Temática.</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-light mb-8 max-w-lg border-l-4 border-[#E11D48] pl-6">
                            Deja de publicar "slop". Construye autoridad real.
                        </p>
                        <div className="flex gap-4">
                            <button className="h-14 px-8 rounded bg-[#0A0A0A] text-white font-bold uppercase tracking-wide hover:bg-[#E11D48] transition-colors shadow-xl">
                                Agendar Sesión de Estrategia
                            </button>
                        </div>
                    </div>

                    {/* Visual: Information Gain Graph */}
                    <div className="relative h-[500px] bg-gray-100 rounded-2xl border border-gray-200 p-8 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                        {/* Visual Metaphor for Info Gain */}
                        <div className="flex items-end gap-2 h-64 w-full max-w-md">
                            <div className="w-1/4 bg-gray-300 h-1/3 rounded-t relative group">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-400">CopyCat 1</span>
                            </div>
                            <div className="w-1/4 bg-gray-300 h-1/3 rounded-t relative group">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-400">AI Slop</span>
                            </div>
                            <div className="w-1/4 bg-gray-300 h-1/3 rounded-t relative group">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-400">Generic</span>
                            </div>
                            <div className="w-1/4 bg-[#E11D48] h-full rounded-t relative group shadow-2xl">
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white font-bold text-xs text-center leading-tight w-full px-1">INFORMATION GAIN</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem: Slop */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">¿Tu contenido es "música" o simplemente "ruido"?</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        Internet se ha inundado de contenido commodity. Si le pides a ChatGPT que escriba un artículo y tu competencia hace lo mismo, ambos tienen cero valor para Google.
                        El algoritmo de Google (y su patente de <strong>Information Gain Score</strong>) ahora penaliza el contenido que no aporta nada nuevo.
                    </p>
                    <div className="bg-red-50 text-red-900 p-6 rounded-lg text-left max-w-2xl mx-auto border border-red-100">
                        <h4 className="font-bold mb-3 uppercase text-xs tracking-widest">Síntomas de estrategia obsoleta:</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2"><span className="text-red-500 material-symbols-outlined text-sm">close</span> Tráfico estancado a pesar de publicar frecuentemente.</li>
                            <li className="flex items-center gap-2"><span className="text-red-500 material-symbols-outlined text-sm">close</span> Tus artículos se ven bien, pero no convierten.</li>
                            <li className="flex items-center gap-2"><span className="text-red-500 material-symbols-outlined text-sm">close</span> La IA cita a tu competencia, no a ti.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Methodology: Salsa & Fight */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-display font-black mb-4">Information Gain + Arquitectura Semántica</h2>
                    <p className="text-gray-600">Mi enfoque combina la estructura rígida de los datos (The Fight) con la narrativa humana única (The Salsa).</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Information Gain */}
                    <div className="bg-[#F8F5F0] p-8 border border-gray-200 rounded-xl hover:border-[#E11D48] transition-colors">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#E11D48]">psychology</span>
                            Information Gain
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Para que Google y los usuarios te amen, tu contenido debe tener algo que la IA no puede alucinar: <strong>Experiencia Real.</strong>
                        </p>
                        <ul className="space-y-2 text-xs text-gray-500 font-mono">
                            <li>+ Datos Propietarios</li>
                            <li>+ Contrarian Takes</li>
                            <li>+ Human-in-the-loop</li>
                        </ul>
                    </div>

                    {/* Cluster Content */}
                    <div className="bg-[#F8F5F0] p-8 border border-gray-200 rounded-xl hover:border-[#E11D48] transition-colors">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#E11D48]">hub</span>
                            Topical Authority
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Dejamos de pensar en keywords sueltas y pensamos en Entidades. Construimos redes semánticas.
                        </p>
                        <ul className="space-y-2 text-xs text-gray-500 font-mono">
                            <li>+ Pillar Pages (Hubs)</li>
                            <li>+ Cluster Content (Spokes)</li>
                            <li>+ Interlinking Semántico</li>
                        </ul>
                    </div>

                    {/* GEO Optimization */}
                    <div className="bg-[#F8F5F0] p-8 border border-gray-200 rounded-xl hover:border-[#E11D48] transition-colors">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#E11D48]">robot_2</span>
                            Optimización GEO
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Estructuramos el contenido para que sea "leíble por máquinas". Usamos la pirámide invertida para ser citados.
                        </p>
                        <ul className="space-y-2 text-xs text-gray-500 font-mono">
                            <li>+ Listas y Tablas Comparativas</li>
                            <li>+ Definiciones Directas</li>
                            <li>+ Estructura para LLMs</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-20 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-display font-black mb-12 text-center">Ingeniería de Contenidos paso a paso</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { num: "01", title: "Gap Analysis", desc: "Analizamos qué tópicos cubren tus competidores y dónde están fallando." },
                            { num: "02", title: "Diseño Semántico", desc: "Definimos qué entidades debemos conectar en un grafo de conocimiento." },
                            { num: "03", title: "Producción Híbrida", desc: "IA para velocidad, Humanos para 'Salsa' y voz de marca." },
                            { num: "04", title: "Inyección E-E-A-T", desc: "Agregamos bios de autores reales y citas de expertos." }
                        ].map((step, idx) => (
                            <div key={idx} className="relative">
                                <span className="text-6xl font-black text-gray-200 absolute -top-4 -left-2 z-0">{step.num}</span>
                                <div className="relative z-10 pt-8">
                                    <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                    <p className="text-sm text-gray-600">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bridge to Lado B */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto bg-black text-white p-12 rounded-[2rem] relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ccff00] to-green-900 opacity-20"></div>
                    <div className="relative z-10">
                        <span className="font-mono text-xs text-[#ccff00] uppercase tracking-widest mb-4 block">Del Laboratorio (Lado B)</span>
                        <h3 className="text-3xl font-bold mb-4">La IA vs El Humano</h3>
                        <p className="text-white/70 mb-8 max-w-lg mx-auto">
                            Mira cómo un artículo humano con Information Gain superó a 10 artículos de IA en tráfico y retención.
                        </p>
                        <Link href="/lab/seo-fight-club/humano-vs-ia" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors">
                            Ver Experimento Fight Club
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 text-center px-6">
                <h2 className="text-3xl md:text-5xl font-display font-black mb-6">¿Listo para dejar de hacer ruido?</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Tu competencia sigue persiguiendo keywords de 2015. Vamos a construir la autoridad que te posicionará en 2026.
                </p>
                <Link href="/contacto" className="inline-flex items-center gap-2 px-10 py-5 bg-[#E11D48] text-white font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-xl rounded">
                    Agendar Sesión de Estrategia
                    <span className="material-symbols-outlined">front_hand</span>
                </Link>
            </section>
        </ServiceLayout>
    );
}
