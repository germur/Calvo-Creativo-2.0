import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

interface ExperimentLayoutProps {
    children: React.ReactNode;
    title: string;
    description: string;
    keyword: string;
    trackNumber: string;
    trackTitle: string;
    themeColor: 'acid-green' | 'acid-orange' | 'acid-pink' | 'acid-purple';
}

const ExperimentLayout = ({
    children,
    title,
    description,
    keyword,
    trackNumber,
    trackTitle,
    themeColor
}: ExperimentLayoutProps) => {

    // Map themeColor to specific hex for styles if needed, or just use Tailwind classes dynamically
    const themeClasses = {
        'acid-green': 'text-acid-green border-acid-green decoration-acid-green selection:bg-acid-green',
        'acid-orange': 'text-acid-orange border-acid-orange decoration-acid-orange selection:bg-acid-orange',
        'acid-pink': 'text-acid-pink border-acid-pink decoration-acid-pink selection:bg-acid-pink',
        'acid-purple': 'text-acid-purple border-acid-purple decoration-acid-purple selection:bg-acid-purple',
    };

    const currentThemeClass = themeClasses[themeColor] || themeClasses['acid-green'];

    return (
        <div className={`min-h-screen bg-[#120810] text-white font-display selection:text-black ${currentThemeClass}`}>
            <Head>
                <title>{title} | Calvo Creativo Lab</title>
                <meta name="description" content={description} />
                <link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&family=Shrikhand&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            {/* Sticky Header specific to Lado B (as requested) */}
            <header className="sticky top-0 z-50 border-b border-white/10 bg-[#120810]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/lab" className="flex items-center gap-2 group">
                        <span className="material-symbols-outlined text-2xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        <span className="font-mono text-xs uppercase tracking-widest text-white/70 group-hover:text-white">Volver al Lab</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className={`font-mono text-xs uppercase px-2 py-1 border rounded ${currentThemeClass} border-opacity-50`}>
                            {trackNumber} // {trackTitle}
                        </span>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-20 relative">
                <div className="mb-8">
                    <Breadcrumbs theme="dark" />
                </div>
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-96 h-96 ${themeColor === 'acid-green' ? 'bg-acid-green' : themeColor === 'acid-pink' ? 'bg-acid-pink' : themeColor === 'acid-purple' ? 'bg-acid-purple' : 'bg-acid-orange'} rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none -z-10`}></div>

                {/* Keyword Marker */}
                <div className="mb-8 font-mono text-xs text-white/40 uppercase tracking-widest">
                    Target Keyword: <span className="text-white">{keyword}</span>
                </div>

                {children}

                {/* The Bridge (Global CTA for Lado B Pages) */}
                <div className="mt-32 p-8 border border-white/10 rounded-2xl bg-[#181114] relative overflow-hidden group">
                    <div className={`absolute top-0 left-0 w-1 h-full ${themeColor === 'acid-green' ? 'bg-acid-green' : themeColor === 'acid-pink' ? 'bg-acid-pink' : themeColor === 'acid-purple' ? 'bg-acid-purple' : 'bg-acid-orange'} group-hover:w-full transition-all duration-500 opacity-20`}></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2">¿Te gusta cómo pienso?</h3>
                            <p className="text-white/70 text-sm">
                                Esto son experimentos. En el <strong>Lado A</strong> aplico esta ingeniería para escalar negocios reales.
                            </p>
                        </div>
                        <Link href="/consultoria" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors whitespace-nowrap">
                            Volver a la Cordura (Lado A)
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ExperimentLayout;
