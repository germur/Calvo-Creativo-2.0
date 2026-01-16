import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Mock Client Logos for Social Proof
const clients = [
    { name: 'Python', color: 'bg-blue-600' },
    { name: 'Semrush', color: 'bg-orange-600' },
    { name: 'Ahrefs', color: 'bg-blue-500' },
    { name: 'OpenAI', color: 'bg-green-600' },
    { name: 'Screaming Frog', color: 'bg-purple-600' },
];

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-paper font-sans selection:bg-red-600 selection:text-white">
            <Head>
                <title>Calvo Creativo | Ingeniería de Búsqueda (SEO & GEO) y Estrategia Digital</title>
                <meta name="description" content="Consultoría SEO estratégica para la era de la IA. Fusionamos creatividad latina (Salsa) con rigor técnico (Fight) para posicionar marcas en EE.UU. y Latam." />
            </Head>

            <Navigation />

            {/* --- 1. HERO SECTION: LA PROPUESTA DE VALOR --- */}
            <header className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 overflow-hidden border-b-4 border-black">
                {/* Background Noise/Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-600/10 to-transparent pointer-events-none"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-block bg-black text-white px-3 py-1 text-xs font-mono uppercase tracking-widest mb-6 -rotate-1">
                            Ingeniería de Búsqueda // SEO & GEO
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tighter text-black mb-8">
                            INGENIERÍA DE<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">BÚSQUEDA</span><br />
                            PARA LA ERA<br />
                            <span className="relative inline-block">
                                DE LA IA.
                                <svg className="absolute -bottom-2 w-full h-4 text-red-600 opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-lg mb-10 border-l-4 border-black pl-6">
                            Dejemos de optimizar solo para 10 enlaces azules. Construyamos la autoridad que Google premia y que la Inteligencia Artificial cita.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/consultoria" className="group relative px-8 py-4 bg-black text-white font-display text-xl uppercase tracking-wide overflow-hidden shadow-[8px_8px_0px_#dc2626] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                <span className="relative z-10 group-hover:text-red-500 transition-colors">Busco Soluciones (Lado A)</span>
                            </Link>
                            <Link href="/lab" className="group relative px-8 py-4 bg-white text-black border-2 border-black font-display text-xl uppercase tracking-wide hover:bg-red-50 hover:text-red-900 transition-colors">
                                <span className="relative z-10">Busco Experimentos (Lado B)</span>
                            </Link>
                        </div>
                    </div>

                    {/* Visual: The Vinyl Record (Kept as Brand Identity) */}
                    <div className="relative hidden lg:flex items-center justify-center">
                        <div className="relative w-[500px] h-[500px] animate-[spin_20s_linear_infinite] hover:[animation-play-state:paused] transition-all duration-500">
                            <div className="absolute inset-0 rounded-full bg-black border-[10px] border-gray-900 shadow-2xl">
                                <div className="absolute inset-4 rounded-full border border-gray-800 opacity-50"></div>
                                <div className="absolute inset-8 rounded-full border border-gray-800 opacity-50"></div>
                                <div className="absolute inset-12 rounded-full border border-gray-800 opacity-50"></div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-600 rounded-full flex items-center justify-center border-4 border-white shadow-inner">
                                <div className="text-center text-black leading-none">
                                    <span className="block font-display font-black text-3xl uppercase">Calvo</span>
                                    <span className="block font-mono text-xs tracking-widest uppercase mt-1">Stereo Sound</span>
                                    <span className="block font-display font-black text-3xl uppercase mt-1">Creativo</span>
                                    <span className="block font-mono text-[10px] uppercase mt-2 opacity-70">33 ⅓ RPM</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-10 right-10 w-64 h-4 bg-gray-400 transform rotate-[25deg] origin-top-right shadow-2xl z-20 rounded-full border-2 border-white"></div>
                    </div>
                </div>
            </header>

            {/* --- 2. THE PHILOSOPHY: SALSA & FIGHT --- */}
            <section className="py-24 px-6 md:px-12 bg-black text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase mb-8 leading-none">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Salsa</span> & <br />
                            <span className="text-white">Fight</span>.
                        </h2>
                        <p className="text-xl text-gray-300 font-light leading-relaxed mb-6">
                            El SEO técnico sin narrativa es aburrido. La creatividad sin datos es inútil. Soy un <strong>Marketer-Builder</strong>.
                        </p>
                        <p className="text-lg text-white font-medium leading-relaxed mb-6">
                            Fusiono la agilidad técnica de la programación (Python, Automatización) con la psicología del mercado hispano y estadounidense.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-2xl">💃</span>
                                <div>
                                    <strong className="text-orange-400 uppercase tracking-wider text-sm block mb-1">Salsa</strong>
                                    <p className="text-sm text-gray-400">Estrategia de contenidos, identidad de marca y conexión cultural (Human-First).</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-2xl">🥊</span>
                                <div>
                                    <strong className="text-red-500 uppercase tracking-wider text-sm block mb-1">Fight</strong>
                                    <p className="text-sm text-gray-400">Arquitectura técnica, Schema Markup, GEO y datos duros (Machine-First).</p>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-8 pt-8 border-t border-gray-800 font-mono text-xs text-gray-500 italic">
                            "No soy una agencia con 50 juniors. Soy tu socio estratégico senior."
                        </div>
                    </div>
                    {/* Visual Graph: The Algorithm Dashboard */}
                    <div className="relative h-96 border-2 border-white/20 bg-black/80 p-6 rounded-xl backdrop-blur-md overflow-hidden group shadow-2xl">
                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

                        {/* Central HUD */}
                        <div className="relative z-10 w-full h-full flex flex-col justify-between font-mono text-xs text-white/60">
                            {/* Header HUD */}
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                                    <span>CALVO_CORE_V.3.5</span>
                                </div>
                                <div className="flex gap-4">
                                    <span>CPU: 12%</span>
                                    <span className="text-orange-400">LATENCY: 0ms</span>
                                </div>
                            </div>

                            {/* The Fusion Visual Content */}
                            <div className="flex-1 flex items-center justify-around relative px-4">

                                {/* Left: Salsa (Organic Input) */}
                                <div className="text-center space-y-2">
                                    <div className="text-[10px] tracking-widest text-orange-400">INPUT: CULTURE</div>
                                    <div className="flex gap-1 h-24 items-end justify-center">
                                        {[60, 80, 40, 90, 50].map((h, i) => (
                                            <div key={i} className="w-3 bg-gradient-to-t from-orange-600 to-red-500 rounded-sm animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }}></div>
                                        ))}
                                    </div>
                                    <div className="text-xs text-white/40">Human Signal</div>
                                </div>

                                {/* Center: The Connector */}
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full border-2 border-white/10 flex items-center justify-center bg-black/50 backdrop-blur shadow-[0_0_50px_rgba(220,38,38,0.2)]">
                                        <span className="material-symbols-outlined text-4xl text-white">psychology</span>
                                    </div>
                                    {/* Spinning Ring */}
                                    <div className="absolute inset-0 rounded-full border-t-2 border-red-500 animate-[spin_3s_linear_infinite]"></div>
                                    <div className="absolute -inset-2 rounded-full border-b-2 border-orange-500 animate-[spin_5s_linear_infinite_reverse] opacity-50"></div>
                                </div>

                                {/* Right: Fight (Tech Output) */}
                                <div className="text-center space-y-2">
                                    <div className="text-[10px] tracking-widest text-red-500">OUTPUT: RANKING</div>
                                    <div className="flex flex-col gap-1 items-end w-24">
                                        <div className="w-full h-1 bg-white/10 rounded overflow-hidden">
                                            <div className="h-full bg-white w-3/4 animate-[pulse_2s_infinite]"></div>
                                        </div>
                                        <div className="w-full h-1 bg-white/10 rounded overflow-hidden">
                                            <div className="h-full bg-white w-1/2"></div>
                                        </div>
                                        <div className="font-mono text-[9px] text-right text-green-400 mt-2 leading-tight">
                                            {`> SEARCH_INTENT: MATCH`} <br />
                                            {`> INDEXING: TRUE`} <br />
                                            {`> AUTHORITY: HIGH`}
                                        </div>
                                    </div>
                                    <div className="text-xs text-white/40">Machine Code</div>
                                </div>
                            </div>

                            {/* Connecting Lines (SVG Overlay) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-20">
                                <path d="M 80 150 Q 150 150 220 150" stroke="url(#gradient-line)" strokeWidth="2" fill="none" className="animate-pulse" />
                                <path d="M 450 150 Q 380 150 310 150" stroke="white" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                                <defs>
                                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#f97316" />
                                        <stop offset="100%" stopColor="#ef4444" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Footer HUD */}
                            <div className="flex justify-between items-center border-t border-white/10 pt-4 text-[10px] text-white/30">
                                <div>NON-LINEAR_PROCESS.EXE</div>
                                <div>STATUS: <span className="text-green-500 font-bold">OPTIMIZED</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. EL SELECTOR DE CAMINO (THE ROUTER) --- */}
            <section className="py-24 px-6 md:px-12 bg-white text-black border-b-4 border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-black">Elige tu Camino</h2>
                        <p className="font-mono text-sm tracking-widest text-gray-500 uppercase mt-2">¿Negocio o Investigación?</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* LADO A */}
                        <div className="group border-4 border-black p-8 hover:bg-gray-50 transition-all shadow-brutal hover:shadow-none hover:translate-x-2 hover:translate-y-2 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 font-mono text-xs font-bold uppercase">Lado A</div>
                            <div className="mb-6">
                                <span className="text-6xl">💿</span>
                            </div>
                            <h3 className="text-3xl font-display font-bold uppercase mb-4">Consultoría & Servicios</h3>
                            <p className="text-gray-700 font-medium mb-6">
                                Para empresas que necesitan crecer. Si tienes un negocio en Florida, Latam o España y necesitas dejar de depender de los anuncios pagados.
                            </p>
                            <ul className="mb-8 space-y-2 font-mono text-sm text-gray-600">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>Arquitectura GEO & SEO Técnico</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>Estrategia de Autoridad Temática</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>Expansión Internacional (Cross-Border)</li>
                            </ul>
                            <Link href="/consultoria" className="inline-block w-full text-center bg-black text-white font-bold uppercase py-3 hover:bg-red-600 transition-colors">
                                Ir a Servicios →
                            </Link>
                        </div>

                        {/* LADO B */}
                        <div className="group border-4 border-black p-8 bg-[#120810] text-white transition-all shadow-brutal hover:shadow-none hover:translate-x-2 hover:translate-y-2 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-acid-green text-black px-4 py-1 font-mono text-xs font-bold uppercase">Lado B</div>
                            <div className="mb-6">
                                <span className="text-6xl">🎺</span>
                            </div>
                            <h3 className="text-3xl font-display font-bold uppercase mb-4 text-acid-green">The Lab</h3>
                            <p className="text-gray-300 font-medium mb-6">
                                Para mentes curiosas y técnicos. Donde rompo los algoritmos para ver qué tienen dentro. Scripts de Python y experimentos.
                            </p>
                            <ul className="mb-8 space-y-2 font-mono text-sm text-gray-400">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-acid-green rounded-full"></span>SEO Fight Club (Experimentos)</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-acid-green rounded-full"></span>Vibe Coding (Automations)</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-acid-green rounded-full"></span>Liner Notes (Ensayos)</li>
                            </ul>
                            <Link href="/lab" className="inline-block w-full text-center bg-white text-black font-bold uppercase py-3 hover:bg-acid-green hover:border-acid-green transition-colors">
                                Entrar al Lab →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. WHY NOW (CONTEXT 2026) --- */}
            <section className="py-24 px-6 md:px-12 bg-gray-100 text-black">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-12 text-center">
                        El juego ha cambiado. <br />¿Tu estrategia también?
                    </h2>
                    <p className="text-center max-w-2xl mx-auto text-gray-600 mb-16">
                        Para 2026, se estima que el tráfico de búsqueda tradicional caerá un 25% a medida que los usuarios adopten respuestas directas de IA.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 border-2 border-black shadow-sm">
                            <h4 className="font-bold text-xl mb-4 uppercase text-red-600">De Keywords a Entidades</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Google ya no busca palabras, busca conceptos y relaciones. Si tu web no tiene un Grafo de Conocimiento claro, eres invisible.
                            </p>
                        </div>
                        <div className="bg-white p-8 border-2 border-black shadow-sm">
                            <h4 className="font-bold text-xl mb-4 uppercase text-red-600">De Búsqueda a Respuesta</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Si ChatGPT no puede leer tu contenido, no te recomendará. Diseñamos para GEO (Generative Engine Optimization).
                            </p>
                        </div>
                        <div className="bg-white p-8 border-2 border-black shadow-sm">
                            <h4 className="font-bold text-xl mb-4 uppercase text-red-600">De Cantidad a Autoridad</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Publicar mucho ya no sirve. Publicar con "Information Gain" (Datos únicos y experiencia real) es la única defensa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 5. FEATURED INSIGHT --- */}
            <section className="py-16 px-6 md:px-12 bg-[#E11D48] text-white">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 border-4 border-black bg-white text-black p-8 shadow-[8px_8px_0px_#000]">
                    <div className="flex-1">
                        <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-2">Último hallazgo del Laboratorio 🧪</h3>
                        <h4 className="font-display text-2xl font-bold uppercase mb-2">¿Puede un sitio web rankear en Perplexity sin backlinks?</h4>
                        <p className="text-gray-700 text-sm">
                            Descubrimos que el marcado de Schema estructurado correctamente tiene más peso en motores de respuesta que la autoridad de dominio tradicional en ciertos nichos.
                        </p>
                    </div>
                    <Link href="/lab" className="shrink-0 bg-black text-white px-6 py-3 font-bold uppercase hover:bg-gray-800 transition-colors whitespace-nowrap">
                        Leer experimento →
                    </Link>
                </div>
            </section>

            {/* --- 6. SOCIAL PROOF & FOOTER --- */}
            <section className="py-20 bg-black text-white text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-display uppercase mb-12">
                        Construyamos tu activo digital.<br />
                        <span className="text-gray-500 text-xl md:text-2xl lowercase font-sans font-light">No alquiles tu audiencia. Sé dueño de tu tráfico.</span>
                    </h2>

                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60 mb-16 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Python */}
                        <div title="Python" className="w-16 h-16 hover:scale-110 transition-transform">
                            <svg viewBox="0 0 128 128" className="w-full h-full fill-current">
                                <path fill="#3776AB" d="M63.05 13.91c-9.15.53-17.7 4.14-17.7 13.91v9.26h35.4v3.53H36.3v-4.63c0-10.84 9.27-19.64 20.9-20.73 9.47-.88 20.3 1.94 22.14 12.35l.23 2.1H69.4l-.23-1.92c-1.3-7.5-8.5-12.7-18.12-13.8zm33.3 26.86h-4.63v4.63H36.3v27.95h35.4v5.6c0 10.33 8.35 18.72 18.66 18.72 9.07 0 16.43-7.36 16.43-16.43v-8.8H73.35v-3.53h44.4v4.63c0 9.8-8.55 17.7-17.7 18.23-9.62 1.12-16.82-4.08-18.12-11.58l-.23-2.1H96.1l.23 1.92c1.84 10.4 12.67 13.23 22.14 12.35 11.63-1.1 20.9-9.9 20.9-20.73V53.2c0-9.07-7.36-16.43-16.43-16.43h-6.52v3.96z" />
                                <path fill="#FFD43B" d="M36.3 84.07h4.63v-4.63h55.43V51.48H60.94V45.9c0-10.33-8.35-18.72-18.66-18.72-9.07 0-16.43 7.36-16.43 16.43v8.8h33.4v3.53H14.85v-4.63c0-9.8 8.55-17.7 17.7-18.23 9.62-1.12 16.82 4.08 18.12 11.58l.23 2.1H35.84l-.23-1.92c-1.84-10.4-12.67-13.23-22.14-12.35C1.84 33.6-7.43 42.4-7.43 53.23v21.57c0 9.07 7.36 16.43 16.43 16.43h6.52v-7.16z" transform="rotate(180 64 64)" />
                            </svg>
                        </div>
                        {/* OpenAI / ChatGPT */}
                        <div title="OpenAI" className="w-14 h-14 hover:scale-110 transition-transform">
                            <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
                                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.0462 6.0462 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0847 5.7197-3.3016a.8381.8381 0 0 0 .3924-.6801v-6.7218l2.1617 1.2483v5.0455a4.454 4.454 0 0 1-5.5393 5.5352zm-7.6974-2.768a4.4444 4.4444 0 0 1-1.2584-3.3512l2.3601 1.3533a.8191.8191 0 0 0 .8095 0l5.8094-3.3441v2.518L7.331 20.0638a4.45 4.45 0 0 1-1.7685-3.4026zm-1.8016-8.9157a4.4444 4.4444 0 0 1 3.1098-4.4716v5.8202l-2.2045 1.2579-2.3458-1.3533a4.4636 4.4636 0 0 1 1.4405-1.2532zm9.3582-6.526a4.4593 4.4593 0 0 1 5.3811 1.3435l-2.1825 1.2533-5.7486-3.3157v-2.5276a4.445 4.445 0 0 1 2.55-.7535zm7.5501 2.9818a4.4664 4.4664 0 0 1 1.8349 3.3931l-2.3553-1.3533a.8306.8306 0 0 0-.8142 0L13.4867 7.218v-2.518l5.8953 3.4182a4.4373 4.4373 0 0 1-.2237-1.3934zm2.1873 7.828a4.464 4.464 0 0 1-2.5833 3.8647v-5.839l2.2045-1.2674 2.3458 1.3533a4.4795 4.4795 0 0 1-1.967 1.8884zm-6.38-1.4674-5.003-2.8809v-5.768l5.003 2.8903z" />
                            </svg>
                        </div>
                        {/* Screaming Frog */}
                        <div title="Screaming Frog" className="w-16 h-16 hover:scale-110 transition-transform flex items-center justify-center p-1">
                            <svg viewBox="0 0 576 512" className="w-full h-full fill-[#589e29]">
                                <path d="M425.8 198.5c-48.6-32.9-72-46.7-72-46.7s-11.7-18.1-13.7-20.9c2.9-10.8 1.4-22.3-4.3-32.1-7.9-13.6-24-19.8-39.2-16.1l-10.1-23.7c-5.1-11.9-18.9-17.6-30.8-12.5L256 46.5l-29.6-1.3c-13.3-.6-22.7 11.2-20.8 24.3l3.8 26.3c-15.6-2.5-31.4 4.5-38.5 18.2-5.1 9.9-5.9 21.2-2.3 32-1.9 2.7-16.5 24.5-16.5 24.5s-23.4 13.8-72 46.7c-17.7 11.9-24.8 33-19.1 53.4 5.9 20.8 24.3 35.8 45.9 36.3 33.1.8 62.6-17.7 73.1-43.2 2.6-6.4 13-33.1 13-33.1s10.4 15.6 15.6 20.8c-1.3 6.9-4 13.5-7.8 19.4-18.6 28.6-11 66.8 17.6 85.4 13 8.3 27.6 11.5 41.6 9.4 11.7 32.7 42.9 56.1 79.5 56.1s67.8-23.4 79.5-56.1c14.1 2.1 28.7-1 41.6-9.4 28.6-18.6 36.2-56.8 17.6-85.4-3.8-5.9-6.5-12.5-7.8-19.4 5.2-5.2 15.6-20.8 15.6-20.8s10.4 26.7 13 33.1c10.5 25.5 40 44 73.1 43.2 21.6-.5 40-15.5 45.9-36.3 5.7-20.4-1.4-41.5-19.1-53.4zM245.8 67.5c2.7-.2 5.1 1.7 5.4 4.3l1.2 8.3-9.5-.4 2.9-12.2z" />
                            </svg>
                        </div>
                        {/* Semrush (Orange Flame/Pulse) */}
                        <div title="Semrush" className="w-14 h-14 hover:scale-110 transition-transform">
                            <svg viewBox="0 0 24 24" className="w-full h-full fill-[#FF642D]">
                                <path d="M7.4 0l-7.4 12h7.4l-3.2 12 19.8-13.6h-9.8l5.8-10.4z" />
                            </svg>
                        </div>
                        {/* Ahrefs (Bar Chart) */}
                        <div title="Ahrefs" className="w-14 h-14 bg-[#0070F3] rounded-lg p-3 flex items-center justify-center hover:scale-110 transition-transform">
                            <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
                                <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8h2.8v6h-2.8z" />
                            </svg>
                        </div>
                        {/* Google Gemini */}
                        <div title="Google Gemini" className="w-14 h-14 hover:scale-110 transition-transform">
                            <svg viewBox="0 0 24 24" className="w-full h-full">
                                <defs>
                                    <linearGradient id="geminiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#4E86F8" />
                                        <stop offset="100%" stopColor="#D5564D" />
                                    </linearGradient>
                                </defs>
                                <path fill="url(#geminiGradient)" d="M11.66 2.05L10.36 6.36C9.65 8.71 7.81 10.55 5.46 11.26L1.15 12.56L5.46 13.86C7.81 14.57 9.65 16.41 10.36 18.76L11.66 23.07L12.96 18.76C13.67 16.41 15.51 14.57 17.86 13.86L22.17 12.56L17.86 11.26C15.51 8.91 13.67 7.07 12.96 4.72L11.66 2.05Z" />
                            </svg>
                        </div>
                    </div>

                    <Link href="/contacto" className="inline-block bg-white text-black font-display text-xl uppercase px-12 py-5 rounded-full hover:scale-105 transition-transform">
                        Agendar una Auditoría
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
