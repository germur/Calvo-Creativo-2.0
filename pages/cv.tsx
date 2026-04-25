import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// MrXAvatar uses WebAudio + browser APIs — load client-side only
const MrXAvatar = dynamic(() => import('@/components/MrXAvatar'), { ssr: false });

// ─── CV Data ─────────────────────────────────────────────────────────────────
const CV = {
    name: 'Roger Murillo',
    alias: 'Roger Calvo',
    title: 'SEO Strategist & Content Architect',
    tagline: 'Search intent · Topical authority · Web architecture · AI-native workflows',
    location: 'Bogotá, Colombia · Miami, FL',
    email: 'roger@calvocreativo.com',
    linkedin: 'linkedin.com/in/rogermur',
    github: 'github.com/germur',
    website: 'calvocreativo.com',
    blog: 'quimbara.org',

    summary:
        'SEO Strategist with 7 years of experience across U.S. and LATAM markets. I build sustainable organic growth by combining storytelling, UX thinking, and technical depth — turning search intent into web architecture that compounds. Currently building AI-native SEO workflows with Claude Code to scale analysis and content systems.',

    metrics: [
        { value: '7 yrs', label: 'U.S. + LATAM SEO' },
        { value: '70%+', label: 'Occupancy lift in <3 months' },
        { value: '#1', label: 'Organic GBP, $0 ads spend' },
        { value: '4×', label: 'Brands scaled simultaneously' },
    ],

    experience: [
        {
            role: 'SEO Architect — Content Strategist',
            company: 'Paramount Property Restoration',
            period: '2024 — Present',
            location: 'Remote · U.S.',
            bullets: [
                'Architected SEO structure, topical clarity, and programmatic landing-page templates.',
                'Collaborated with developers on crawlability and Core Web Vitals improvements.',
                'Built editorial framework that turns service pages into ranking assets.',
            ],
            tags: ['Programmatic SEO', 'Topical Authority', 'Core Web Vitals'],
        },
        {
            role: 'SEO Strategy Consultant',
            company: 'Le Gramme · Craftd',
            period: 'Feb — Mar 2025',
            location: 'Project · Remote',
            bullets: [
                'Developed content strategy reflecting minimalist / urban brand philosophies.',
                'Authority-building blog clusters and UX-driven on-page optimizations.',
                'Keyword mapping + competitive positioning aligned with editorial voice.',
            ],
            tags: ['Brand SEO', 'Content Clusters', 'DTC'],
        },
        {
            role: 'SEO Strategist',
            company: 'Holding Group',
            period: 'Jul 2022 — Jul 2024',
            location: 'Miami, FL',
            summary: 'Led SEO strategy across a multi-brand portfolio of 4 companies:',
            subProjects: [
                {
                    brand: 'Flo Car Rental',
                    note: 'Built the GBP strategy that became the company\'s #1 traffic & lead source — zero paid spend.',
                },
                {
                    brand: 'Puff Cleaning & Repair',
                    note: 'Led full digital transformation: SEO + UX-driven design + dev.',
                },
                {
                    brand: 'Bull Financial Technology',
                    note: 'Liaison between fintech engineers and executives; aligned UX and architecture with business goals.',
                },
                {
                    brand: 'Sakura Advisor',
                    note: 'Owned site structure and the bridge between technical and business teams.',
                },
            ],
            tags: ['Multi-brand', 'Local SEO', 'GBP', 'UX-led'],
        },
        {
            role: 'External SEO & Web Consultant',
            company: 'Business Debt Adjusters',
            period: 'Oct 2021 — Apr 2024',
            location: 'Miami, FL',
            bullets: [
                'Designed SEO-friendly site architecture and a structure built to scale.',
                'Advised on authority building and topical-cluster workflows.',
            ],
            tags: ['Information Architecture', 'Authority'],
        },
        {
            role: 'Marketing Specialist',
            company: 'Edu1st Preschools',
            period: 'Jul 2020 — Jan 2021',
            location: 'Bogotá, Colombia',
            bullets: [
                'Built a hybrid SEO + paid strategy that hit 70%+ occupancy across 7 preschools in under 3 months.',
                'Launched a blog strategy integrated with paid campaigns to drive enrollment.',
            ],
            tags: ['Hybrid Acquisition', 'B2C', 'Local SEO'],
        },
    ],

    skills: {
        Strategy: ['Topical Authority', 'Search Intent', 'IA / Sitemaps', 'Programmatic SEO', 'Content Clusters'],
        Technical: ['Python', 'Next.js / Astro', 'HTML / CSS', 'Core Web Vitals', 'Schema JSON-LD', 'Claude Code'],
        Tools: ['Ahrefs', 'SEMrush', 'GSC', 'GA4', 'Screaming Frog'],
    },

    languages: [
        { name: 'Spanish', level: 'Native', dots: 5 },
        { name: 'English', level: 'Proficient', dots: 4 },
        { name: 'German', level: 'Basic', dots: 2 },
    ],
};

// ─── Schema ───────────────────────────────────────────────────────────────────
const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Roger Murillo',
    alternateName: 'Roger Calvo',
    jobTitle: 'SEO Strategist & Content Architect',
    url: 'https://calvocreativo.com/cv',
    sameAs: [
        'https://www.linkedin.com/in/rogermur/',
        'https://github.com/germur',
        'https://calvocreativo.com',
        'https://quimbara.org',
    ],
    email: 'roger@calvocreativo.com',
    knowsAbout: ['SEO', 'Python', 'Generative Engine Optimization', 'Content Strategy', 'Digital Marketing', 'Technical SEO'],
    description: CV.summary,
    knowsLanguage: ['Spanish', 'English', 'German'],
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function Tag({ label }: { label: string }) {
    return (
        <span className="inline-block border border-black/20 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 text-gray-500">
            {label}
        </span>
    );
}

function DotBar({ filled, total = 5 }: { filled: number; total?: number }) {
    return (
        <span className="flex gap-1 items-center">
            {Array.from({ length: total }).map((_, i) => (
                <span
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full border-2 border-black ${i < filled ? 'bg-black' : 'bg-transparent'}`}
                />
            ))}
        </span>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CVPage() {
    return (
        <div className="min-h-screen flex flex-col bg-paper font-sans text-ink">
            <Head>
                <title>Roger Murillo CV | SEO Strategist & Content Architect</title>
                <meta
                    name="description"
                    content="CV profesional de Roger Murillo (Roger Calvo) — SEO Strategist con 7 años en mercados U.S. y LATAM. Especialista en Topical Authority, GEO y automatización con Python."
                />
                <link rel="canonical" href="https://calvocreativo.com/cv" />
                {/* No index — CV is for direct sharing, not for broad indexing */}
                <meta name="robots" content="noindex, follow" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                />
                {/* Hide Mr. X bag & label on print — only the photo shows in PDFs */}
                <style>{`@media print { .mrx-bag, .mrx-label { display: none !important; } }`}</style>
            </Head>

            {/* Screen-only nav */}
            <div className="print:hidden">
                <Navigation />
            </div>

            <main className="flex-grow pt-24 pb-20 px-6 md:px-12 max-w-5xl mx-auto w-full">

                {/* ── Toolbar (screen only) ── */}
                <div className="print:hidden flex items-center justify-between mb-10 gap-4 flex-wrap">
                    <Link
                        href="/el-artista"
                        className="font-mono text-xs uppercase tracking-widest text-gray-500 hover:text-black flex items-center gap-1 transition-colors"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        El Artista
                    </Link>
                    <div className="flex gap-3">
                        <button
                            onClick={() => window.print()}
                            className="flex items-center gap-2 px-5 py-2 bg-black text-white font-mono text-xs uppercase tracking-widest hover:bg-red-600 transition-colors"
                        >
                            <span className="material-symbols-outlined text-sm">print</span>
                            Imprimir / PDF
                        </button>
                        <Link
                            href="/contacto"
                            className="flex items-center gap-2 px-5 py-2 border-2 border-black text-black font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                        >
                            <span className="material-symbols-outlined text-sm">mail</span>
                            Contratar
                        </Link>
                    </div>
                </div>

                {/* ── CV Paper ── */}
                <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] print:shadow-none print:border-0">

                    {/* Header */}
                    <header className="border-b-4 border-black p-8 md:p-12">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

                            {/* Avatar + Name block */}
                            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                                {/* Mr. X Avatar — Simpsons S10E13 reference */}
                                <div className="shrink-0">
                                    <MrXAvatar size={110} photoSrc="/images/roger-calvo.jpg" />
                                </div>

                                <div className="pt-1">
                                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">Curriculum Vitae</p>
                                    <h1 className="text-5xl md:text-7xl font-display font-black uppercase leading-none tracking-tighter mb-3">
                                        {CV.name}
                                    </h1>
                                    <p className="text-xl md:text-2xl font-display font-bold text-red-600 uppercase tracking-tight">
                                        {CV.title}
                                    </p>
                                    <p className="font-mono text-sm text-gray-500 mt-2">{CV.tagline}</p>
                                </div>
                            </div>

                            {/* Contact block */}
                            <address className="not-italic font-mono text-xs space-y-1.5 text-gray-600 shrink-0 md:pt-1">
                                <p className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm text-black">location_on</span>
                                    {CV.location}
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm text-black">mail</span>
                                    <a href={`mailto:${CV.email}`} className="hover:text-black transition-colors">{CV.email}</a>
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm text-black">work</span>
                                    <a href={`https://${CV.linkedin}`} target="_blank" rel="noopener" className="hover:text-black transition-colors">{CV.linkedin}</a>
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm text-black">code</span>
                                    <a href={`https://${CV.github}`} target="_blank" rel="noopener" className="hover:text-black transition-colors">{CV.github}</a>
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm text-black">language</span>
                                    <a href={`https://${CV.website}`} className="hover:text-black transition-colors">{CV.website}</a>
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm text-black">sports_mma</span>
                                    <a href={`https://${CV.blog}`} target="_blank" rel="noopener" className="hover:text-black transition-colors">{CV.blog} <span className="text-gray-400">(UFC blog)</span></a>
                                </p>
                            </address>
                        </div>
                    </header>

                    <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* ── LEFT COLUMN ── */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Summary */}
                            <section>
                                <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-4 pb-2 border-b-2 border-black">
                                    Summary
                                </h2>
                                <p className="text-base leading-relaxed text-gray-800">{CV.summary}</p>
                            </section>

                            {/* Metrics Bar */}
                            <section className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black border-2 border-black">
                                {CV.metrics.map((m) => (
                                    <div key={m.value} className="bg-white p-4 text-center">
                                        <div className="text-2xl font-display font-black text-red-600">{m.value}</div>
                                        <div className="text-[10px] font-mono text-gray-500 leading-tight mt-1">{m.label}</div>
                                    </div>
                                ))}
                            </section>

                            {/* Experience */}
                            <section>
                                <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-6 pb-2 border-b-2 border-black">
                                    Experience
                                </h2>

                                <div className="space-y-10">
                                    {CV.experience.map((job, idx) => (
                                        <div key={idx} className="relative pl-4 border-l-2 border-black">

                                            {/* Role & Meta */}
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                                                <div>
                                                    <h3 className="font-display font-bold text-lg uppercase leading-tight">{job.role}</h3>
                                                    <p className="font-mono text-sm text-red-600 font-bold">{job.company}</p>
                                                </div>
                                                <div className="text-right shrink-0">
                                                    <p className="font-mono text-xs text-gray-500">{job.period}</p>
                                                    <p className="font-mono text-xs text-gray-400">{job.location}</p>
                                                </div>
                                            </div>

                                            {/* Summary line */}
                                            {'summary' in job && job.summary && (
                                                <p className="text-sm text-gray-600 mb-3 italic">{job.summary}</p>
                                            )}

                                            {/* Sub-projects */}
                                            {'subProjects' in job && job.subProjects && (
                                                <ul className="space-y-2 mb-3">
                                                    {job.subProjects.map((sp) => (
                                                        <li key={sp.brand} className="text-sm">
                                                            <span className="font-bold font-mono text-[11px] uppercase tracking-wide bg-black text-white px-1.5 py-0.5 mr-2">{sp.brand}</span>
                                                            <span className="text-gray-700">{sp.note}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* Bullets */}
                                            {'bullets' in job && job.bullets && (
                                                <ul className="space-y-1 mb-3">
                                                    {job.bullets.map((b, bi) => (
                                                        <li key={bi} className="text-sm text-gray-700 flex gap-2">
                                                            <span className="text-red-600 font-bold shrink-0">→</span>
                                                            {b}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1.5 mt-2">
                                                {job.tags.map((t) => <Tag key={t} label={t} />)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* ── RIGHT COLUMN ── */}
                        <div className="space-y-10 lg:border-l-2 lg:border-black lg:pl-8">

                            {/* Skills */}
                            <section>
                                <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-4 pb-2 border-b-2 border-black">
                                    Skills
                                </h2>
                                <div className="space-y-5">
                                    {Object.entries(CV.skills).map(([category, items]) => (
                                        <div key={category}>
                                            <p className="font-mono text-xs font-bold uppercase tracking-widest mb-2 text-black">{category}</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {items.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="text-[11px] font-mono bg-gray-100 border border-gray-300 px-2 py-0.5 text-gray-700"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Languages */}
                            <section>
                                <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-4 pb-2 border-b-2 border-black">
                                    Languages
                                </h2>
                                <div className="space-y-3">
                                    {CV.languages.map((lang) => (
                                        <div key={lang.name} className="flex items-center justify-between">
                                            <div>
                                                <span className="font-mono text-sm font-bold">{lang.name}</span>
                                                <span className="font-mono text-xs text-gray-400 ml-2">{lang.level}</span>
                                            </div>
                                            <DotBar filled={lang.dots} />
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Philosophy */}
                            <section>
                                <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-4 pb-2 border-b-2 border-black">
                                    Philosophy
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-bold text-xs uppercase font-mono mb-1">Storytelling first</p>
                                        <p className="text-xs text-gray-600 leading-relaxed">Search intent is a story. I map the user&apos;s narrative arc, then let it shape the architecture.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-xs uppercase font-mono mb-1">UX is SEO</p>
                                        <p className="text-xs text-gray-600 leading-relaxed">Crawlers reward what humans love. Every cluster I build is designed for clarity before keywords.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-xs uppercase font-mono mb-1">AI-native systems</p>
                                        <p className="text-xs text-gray-600 leading-relaxed">Claude Code + automation flows so insight scales without bottlenecks.</p>
                                    </div>
                                </div>
                            </section>

                            {/* CTA block (screen only) */}
                            <div className="print:hidden border-2 border-black p-6 bg-black text-white">
                                <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mb-3">¿Trabajamos juntos?</p>
                                <Link
                                    href="/contacto"
                                    className="block w-full text-center bg-red-600 text-white font-bold uppercase py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors"
                                >
                                    Agendar llamada
                                </Link>
                                <Link
                                    href="/consultoria"
                                    className="block w-full text-center mt-2 border border-white/30 text-white/70 font-mono py-2 text-xs tracking-widest hover:border-white hover:text-white transition-colors"
                                >
                                    Ver servicios
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Footer strip */}
                    <div className="border-t-4 border-black p-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-gray-400">
                        <span>calvocreativo.com · {new Date().getFullYear()}</span>
                        <span className="print:hidden">Generado con Next.js & Tailwind</span>
                        <span className="hidden print:block">rogermur1990@gmail.com</span>
                    </div>
                </div>
            </main>

            {/* Screen-only footer */}
            <div className="print:hidden">
                <Footer />
            </div>
        </div>
    );
}
