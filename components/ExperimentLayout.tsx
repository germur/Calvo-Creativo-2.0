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
    mode?: 'dark' | 'light';
    width?: 'standard' | 'wide' | 'full';
}

const ExperimentLayout = ({
    children,
    title,
    description,
    keyword,
    trackNumber,
    trackTitle,
    themeColor,
    mode = 'dark',
    width = 'standard'
}: ExperimentLayoutProps) => {

    // Map themeColor to specific hex for styles if needed, or just use Tailwind classes dynamically
    const themeClasses = {
        'acid-green': 'text-acid-green border-acid-green decoration-acid-green selection:bg-acid-green',
        'acid-orange': 'text-acid-orange border-acid-orange decoration-acid-orange selection:bg-acid-orange',
        'acid-pink': 'text-acid-pink border-acid-pink decoration-acid-pink selection:bg-acid-pink',
        'acid-purple': 'text-acid-purple border-acid-purple decoration-acid-purple selection:bg-acid-purple',
    };

    const currentThemeClass = themeClasses[themeColor] || themeClasses['acid-green'];

    // Theme Colors Definition
    const bgColor = mode === 'dark' ? 'bg-[#120810]' : 'bg-paper';
    const textColor = mode === 'dark' ? 'text-white' : 'text-ink';
    const selectionText = mode === 'dark' ? 'selection:text-black' : 'selection:text-white';
    const headerBg = mode === 'dark' ? 'bg-[#120810]/80' : 'bg-paper/80';
    const borderColor = mode === 'dark' ? 'border-white/10' : 'border-ink/10';

    const maxWidthClass = width === 'wide' ? 'max-w-6xl' : width === 'full' ? 'max-w-7xl' : 'max-w-4xl';

    return (
        <div className={`min-h-screen ${bgColor} ${textColor} font-display ${selectionText} ${currentThemeClass}`}>
            <Head>
                <title>{title} | Calvo Creativo Lab</title>
                <meta name="description" content={description} />
                <link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&family=Shrikhand&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            {/* Sticky Header specific to Lado B (as requested) */}
            <header className={`sticky top-0 z-50 border-b ${borderColor} ${headerBg} backdrop-blur-md`}>
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/lab" className="flex items-center gap-2 group">
                        <span className="material-symbols-outlined text-2xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        <span className={`font-mono text-xs uppercase tracking-widest ${mode === 'dark' ? 'text-white/70 group-hover:text-white' : 'text-ink/70 group-hover:text-ink'}`}>Volver al Lab</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className={`font-mono text-xs uppercase px-2 py-1 border rounded ${currentThemeClass} border-opacity-50`}>
                            {trackNumber} // {trackTitle}
                        </span>
                    </div>
                </div>
            </header>

            <main className={`${maxWidthClass} mx-auto px-6 py-20 relative`}>

                <div className="mb-8">
                    <Breadcrumbs theme={mode === 'dark' ? "dark" : "light"} />
                </div>
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-96 h-96 ${themeColor === 'acid-green' ? 'bg-acid-green' : themeColor === 'acid-pink' ? 'bg-acid-pink' : themeColor === 'acid-purple' ? 'bg-acid-purple' : 'bg-acid-orange'} rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none -z-10`}></div>

                {/* Keyword Marker */}
                <div className={`mb-8 font-mono text-xs uppercase tracking-widest ${mode === 'dark' ? 'text-white/40' : 'text-ink/40'}`}>
                    Target Keyword: <span className={mode === 'dark' ? 'text-white' : 'text-ink'}>{keyword}</span>
                </div>

                {children}

                {/* The Bridge (Global CTA for Lado B Pages) */}
                <div className={`mt-32 p-8 border ${borderColor} rounded-2xl ${mode === 'dark' ? 'bg-[#181114]' : 'bg-white shadow-brutal'} relative overflow-hidden group`}>
                    <div className={`absolute top-0 left-0 w-1 h-full ${themeColor === 'acid-green' ? 'bg-acid-green' : themeColor === 'acid-pink' ? 'bg-acid-pink' : themeColor === 'acid-purple' ? 'bg-acid-purple' : 'bg-acid-orange'} group-hover:w-full transition-all duration-500 opacity-20`}></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2">¿Te gusta cómo pienso?</h3>
                            <p className={`${mode === 'dark' ? 'text-white/70' : 'text-ink/70'} text-sm`}>
                                Esto son experimentos. En el <strong>Lado A</strong> aplico esta ingeniería para escalar negocios reales.
                            </p>
                        </div>
                        <Link href="/consultoria" className={`px-8 py-4 ${mode === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-ink text-white hover:bg-black'} font-bold uppercase tracking-wide transition-colors whitespace-nowrap`}>
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
