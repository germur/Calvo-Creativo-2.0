import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { trackEvent } from '@/lib/analytics';

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
                <title>Calvo Creativo | SEO Técnico, Estrategia y Vibecoding · USA-Latam</title>
                <meta name="description" content="SEO técnico full-stack: arquitectura, estrategia de contenidos y automatización con código. Para empresas y marcas en USA y Latam que quieren la autoridad que Google y la IA premian." />
                <link rel="canonical" href="https://calvocreativo.com" />

                {/* Schema: Organization */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "@id": "https://calvocreativo.com/#organization",
                            "name": "Calvo Creativo",
                            "url": "https://calvocreativo.com",
                            "logo": "https://calvocreativo.com/favicon.svg",
                            "description": "Consultoría SEO estratégica y Generative Engine Optimization (GEO) para la era de la IA.",
                            "founder": {
                                "@type": "Person",
                                "name": "Roger Calvo",
                                "url": "https://calvocreativo.com/el-artista"
                            },
                            "sameAs": [
                                "https://www.linkedin.com/in/rogermur/",
                                "https://github.com/germur",
                                "https://x.com/Rogermu47429637"
                            ],
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "email": "roger@calvocreativo.com",
                                "contactType": "customer service",
                                "availableLanguage": ["Spanish", "English"]
                            },
                            "areaServed": ["US", "ES", "MX", "CO", "AR"],
                            "knowsAbout": ["SEO", "GEO", "Generative Engine Optimization", "Technical SEO", "Python Automation", "Content Strategy"]
                        })
                    }}
                />

                {/* Schema: WebSite with SearchAction */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "@id": "https://calvocreativo.com/#website",
                            "url": "https://calvocreativo.com",
                            "name": "Calvo Creativo",
                            "description": "Ingeniería de Búsqueda para la era de la IA",
                            "publisher": {
                                "@id": "https://calvocreativo.com/#organization"
                            },
                            "inLanguage": "es"
                        })
                    }}
                />

                {/* Schema: WebPage */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "@id": "https://calvocreativo.com/#webpage",
                            "url": "https://calvocreativo.com",
                            "name": "Calvo Creativo | Ingeniería de Búsqueda (SEO & GEO)",
                            "description": "Consultoría SEO estratégica para la era de la IA. Fusionamos creatividad latina (Salsa) con rigor técnico (Fight).",
                            "isPartOf": {
                                "@id": "https://calvocreativo.com/#website"
                            },
                            "about": {
                                "@id": "https://calvocreativo.com/#organization"
                            },
                            "primaryImageOfPage": {
                                "@type": "ImageObject",
                                "url": "https://calvocreativo.com/api/og?title=Calvo%20Creativo"
                            }
                        })
                    }}
                />
            </Head>

            <Navigation />

            {/* --- 1. HERO SECTION: LA PROPUESTA DE VALOR --- */}
            <header className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 overflow-hidden border-b-4 border-black">
                {/* Background Noise/Texture */}
                <div className="absolute inset-0 bg-[url('/textures/stardust.png')] opacity-40 pointer-events-none"></div>
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
                            <strong>SEO técnico full-stack para empresas y marcas en USA y Latam.</strong> Estrategia, estructura de contenidos y automatización con código. Mientras lees esto, tu competencia está capturando el tráfico de IA que tú ignoras. Construimos la autoridad que Google —y la IA— premian.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contacto"
                                onClick={() => trackEvent('click_schedule_audit', 'Conversion', 'Hero CTA')}
                                className="group relative px-8 py-4 bg-black text-white font-display text-xl uppercase tracking-wide overflow-hidden shadow-[8px_8px_0px_#dc2626] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                            >
                                <span className="relative z-10 group-hover:text-red-500 transition-colors">Solicitar Auditoría (Cupos Limitados) →</span>
                            </Link>
                            <Link
                                href="/consultoria"
                                onClick={() => trackEvent('click_view_services', 'Navigation', 'Hero Secondary')}
                                className="group relative px-8 py-4 bg-white text-black border-2 border-black font-display text-xl uppercase tracking-wide hover:bg-red-50 hover:text-red-900 transition-colors"
                            >
                                <span className="relative z-10">Ver Servicios</span>
                            </Link>
                        </div>
                        <p className="mt-4 text-sm text-gray-500 font-mono">✓ Sin compromiso • ✓ Respuesta en 24h • ✓ Auditoría personalizada</p>
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
                            Fusiono la agilidad técnica de la programación (Python, Automatización) con la psicología del mercado hispano y estadounidense <strong>para crear estrategias que no solo rankean, sino que venden.</strong>
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-2xl">💃</span>
                                <div>
                                    <strong className="text-orange-400 uppercase tracking-wider text-sm block mb-1">Salsa</strong>
                                    <p className="text-sm text-gray-400"><strong>Contenido con pulso.</strong> Marcas que hablan como gente, no como corporaciones. Historias que se comparten, no que se consumen.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-2xl">🥊</span>
                                <div>
                                    <strong className="text-red-500 uppercase tracking-wider text-sm block mb-1">Fight</strong>
                                    <p className="text-sm text-gray-400"><strong>Código que Google ama.</strong> Estructura técnica impecable, Schema que domina la SERP y decisiones basadas en datos, no en corazonadas.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-8 pt-8 border-t border-gray-800 font-mono text-xs text-gray-500 italic">
                            "No tengo oficinas lujosas ni 50 juniors. Tampoco te cobraré por ellas."
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
                                <strong>Para negocios reales.</strong> Si ya facturas pero estás harto de quemar margen en Google Ads y quieres tráfico que sea tuyo.
                            </p>
                            <ul className="mb-8 space-y-2 font-mono text-sm text-gray-600">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>Arquitectura GEO & SEO Técnico</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>Estrategia de Autoridad Temática</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>Expansión Internacional (Cross-Border)</li>
                            </ul>
                            <Link
                                href="/consultoria"
                                onClick={() => trackEvent('click_view_services', 'Navigation', 'Lado A Selection')}
                                className="inline-block w-full text-center bg-black text-white font-bold uppercase py-3 hover:bg-red-600 transition-colors"
                            >
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
                                <strong>Para los que rompen cosas.</strong> Si abres la consola del navegador antes de leer el contenido, este es tu sitio.
                            </p>
                            <ul className="mb-8 space-y-2 font-mono text-sm text-gray-400">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-acid-green rounded-full"></span>SEO Fight Club (Experimentos)</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-acid-green rounded-full"></span>Vibe Coding (Automations)</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-acid-green rounded-full"></span>Liner Notes (Ensayos)</li>
                            </ul>
                            <Link
                                href="/lab"
                                onClick={() => trackEvent('click_enter_lab', 'Navigation', 'Lado B Selection')}
                                className="inline-block w-full text-center bg-white text-black font-bold uppercase py-3 hover:bg-acid-green hover:border-acid-green transition-colors"
                            >
                                Entrar al Lab →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. WHY NOW (CONTEXT 2026) — Grid & Grain editorial style --- */}
            <section className="relative py-20 md:py-32 px-6 md:px-12 bg-paper text-ink overflow-hidden border-t border-b border-black/10">
                {/* Subtle paper texture */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('/textures/paper.png')]"></div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Editorial header — small mono label, big serif headline */}
                    <div className="max-w-3xl mb-16 md:mb-24">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50">// Track 04 — Context 2026</span>
                            <div className="h-px bg-black/20 flex-grow max-w-[80px]"></div>
                        </div>
                        <h2 className="font-editorial text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight text-ink mb-8">
                            Si tu SEO no está<br />
                            listo para la IA,<br />
                            <em className="italic font-normal">eres invisible.</em>
                        </h2>
                        <p className="font-editorial text-xl md:text-2xl text-black/70 leading-snug max-w-2xl">
                            El <strong className="font-semibold text-ink">60%</strong> de las búsquedas ya terminan sin clic.
                            ChatGPT responde directamente. ¿Estás en esa respuesta o te quedaste fuera?
                        </p>
                    </div>

                    {/* The stat-as-art — big textured number, like Grid & Grain p.14 */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-20 md:mb-32 border-y border-black/15 py-12 md:py-16">
                        <div className="md:col-span-7 relative">
                            <div
                                className="font-editorial font-bold text-[8rem] md:text-[14rem] lg:text-[18rem] leading-[0.85] text-ink select-none"
                                style={{
                                    backgroundImage: "url('/textures/cardboard-flat.png')",
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    filter: 'contrast(1.4) brightness(0.6)',
                                }}
                            >
                                ~60<span className="text-red-700">%</span>
                            </div>
                        </div>
                        <div className="md:col-span-5">
                            <p className="font-editorial text-lg md:text-xl text-ink leading-snug mb-4">
                                de búsquedas son <strong>zero-click</strong>. Google y los LLMs responden directamente sin enviarte tráfico.
                            </p>
                            <p className="font-mono text-xs uppercase tracking-wider text-black/50">
                                Source: SparkToro 2024 · SimilarWeb 2025
                            </p>
                        </div>
                    </div>

                    {/* The three shifts — minimal editorial cards with center dividers */}
                    <div>
                        <div className="flex items-baseline gap-4 mb-12">
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50">// Los tres cambios</span>
                            <div className="h-px bg-black/20 flex-grow"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-black/15 -mx-6 md:mx-0">
                            {[
                                {
                                    number: '01',
                                    label: 'Estructura',
                                    title: 'Domina el grafo de conocimiento.',
                                    before: 'Keywords sueltas',
                                    after: 'Entidades & conceptos',
                                    desc: 'Google ya no busca palabras, busca conceptos. Conectamos tu marca con las entidades que definen tu industria para que seas la referencia ineludible.',
                                },
                                {
                                    number: '02',
                                    label: 'Lectura',
                                    title: 'De búsqueda a respuesta.',
                                    before: '10 links azules',
                                    after: 'Una respuesta directa',
                                    desc: 'Si ChatGPT no puede leer tu contenido, no te recomendará. Diseñamos para GEO (Generative Engine Optimization).',
                                },
                                {
                                    number: '03',
                                    label: 'Autoridad',
                                    title: 'De cantidad a autoridad.',
                                    before: 'Volumen de posts',
                                    after: 'Information Gain',
                                    desc: 'Publicar mucho ya no sirve. Publicar con datos únicos y experiencia real (Information Gain) es la única defensa.',
                                },
                            ].map((shift) => (
                                <article key={shift.number} className="px-6 md:px-8 py-8 md:py-4 border-t md:border-t-0 border-black/15 first:border-t-0">
                                    <div className="flex items-baseline gap-3 mb-6">
                                        <span className="font-editorial italic text-3xl text-red-700 leading-none">{shift.number}</span>
                                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/40">— {shift.label}</span>
                                    </div>

                                    <h3 className="font-editorial font-semibold text-2xl md:text-3xl leading-[1.05] text-ink mb-6">
                                        {shift.title}
                                    </h3>

                                    {/* Before / After as a quote-style attribution */}
                                    <div className="mb-6 pb-6 border-b border-black/10">
                                        <div className="font-mono text-[10px] uppercase tracking-wider text-black/40 mb-1">El ideal · La realidad</div>
                                        <div className="font-editorial italic text-sm text-black/60">
                                            <span className="line-through">{shift.before}</span>
                                            {' → '}
                                            <span className="not-italic font-semibold text-red-700">{shift.after}</span>
                                        </div>
                                    </div>

                                    <p className="font-sans text-[15px] leading-relaxed text-black/75">
                                        {shift.desc}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Bottom — minimal editorial signature */}
                    <div className="mt-20 md:mt-28 pt-12 border-t border-black/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <p className="font-editorial italic text-xl md:text-2xl text-ink max-w-xl leading-snug">
                            &ldquo;El reto no es abandonar la estructura, sino asegurar que nuestras estructuras sirvan a las personas.&rdquo;
                        </p>
                        <div className="flex flex-col gap-3">
                            <Link
                                href="/consultoria/arquitectura-seo-geo"
                                className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ink border-b-2 border-ink pb-1 hover:text-red-700 hover:border-red-700 transition-colors whitespace-nowrap"
                            >
                                <span>Ver arquitectura GEO</span>
                                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                            <Link
                                href="/liner-notes/seo-a-geo"
                                className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ink/60 hover:text-red-700 transition-colors whitespace-nowrap"
                            >
                                <span>Artículo destacado: del SEO al GEO</span>
                                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">article</span>
                            </Link>
                            <Link
                                href="/lab/tools/roi-calculator"
                                className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ink/60 hover:text-red-700 transition-colors whitespace-nowrap"
                            >
                                <span>Prueba nuestra calculadora ROI</span>
                                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">calculate</span>
                            </Link>
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

            {/* --- 5.5. FEATURED IN --- */}
            <section className="py-12 bg-gray-50 border-b-4 border-black">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Estrategias validadas por / Featured In</p>
                    <div className="flex justify-center items-center gap-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                        <Link href="https://backlinkbuilding.io/qa/25-ways-seo-tools-changed-our-keyword-research-approach/" target="_blank" className="group flex flex-col items-center gap-2">
                            <div className="font-display text-2xl font-black uppercase tracking-tighter text-black group-hover:text-blue-600 transition-colors">
                                BacklinkBuilding<span className="text-gray-400">.io</span>
                            </div>
                            <span className="text-[10px] font-mono bg-black text-white px-2 py-0.5 rounded-sm group-hover:bg-blue-600 transition-colors">Expert Interview Feature</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- 6. SOCIAL PROOF & FOOTER --- */}
            <section className="py-20 bg-black text-white text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-display uppercase mb-12">
                        Construyamos tu activo digital.<br />
                        <span className="text-gray-500 text-xl md:text-2xl lowercase font-sans font-light">No alquiles tu audiencia. Sé dueño de tu tráfico.</span>
                    </h2>

                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5 mb-16">
                        {[
                            { name: 'Python', icon: 'code' },
                            { name: 'Claude AI', icon: 'smart_toy' },
                            { name: 'Screaming Frog', icon: 'bug_report' },
                            { name: 'Semrush', icon: 'query_stats' },
                            { name: 'Ahrefs', icon: 'leaderboard' },
                            { name: 'Google Search Console', icon: 'monitoring' },
                        ].map((tool) => (
                            <div key={tool.name} className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 bg-white/5 hover:bg-white/10 transition-colors">
                                <span className="material-symbols-outlined text-sm text-gray-400">{tool.icon}</span>
                                <span className="font-mono text-xs uppercase tracking-wide text-gray-300">{tool.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center">
                        <Link
                            href="/contacto"
                            onClick={() => trackEvent('click_schedule_audit', 'Conversion', 'Footer CTA')}
                            className="inline-block bg-white text-black font-display text-xl uppercase px-12 py-5 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            Agendar Auditoría Estratégica →
                        </Link>
                        <p className="mt-6 text-gray-400 font-mono text-sm tracking-wide">
                            Tu plan de ataque personalizado en 30 minutos. <span className="text-white border-b border-white pb-0.5">Sin costo.</span>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
