import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
    const router = useRouter();
    const isActive = (path: string) => router.pathname === path || router.pathname.startsWith(path + '/');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    // Close menu when route changes
    React.useEffect(() => {
        setIsMenuOpen(false);
    }, [router.pathname]);

    const navItems = [
        { name: 'Lado A (Servicios)', path: '/consultoria' },
        { name: 'Lado B (Lab)', path: '/lab' },
        { name: 'Liner Notes', path: '/liner-notes' },
        { name: 'El Artista', path: '/el-artista' }
    ];

    return (
        <nav className="sticky top-0 z-[100] w-full bg-paper border-b-4 border-ink px-6 py-4">
            <div className="flex flex-wrap items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group z-[102] relative">
                    <div className="bg-primary text-white p-1 border-2 border-ink group-hover:rotate-12 transition-transform shadow-brutal-sm">
                        <span className="material-symbols-outlined font-black">bolt</span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-display text-4xl leading-none uppercase tracking-tighter text-ink">Calvo</h1>
                        <div className="flex items-center gap-1">
                            <span className="bg-ink text-white text-[8px] font-mono px-1 font-bold">SEO FIGHTER</span>
                            <span className="bg-accent text-ink text-[8px] font-mono px-1 font-bold">V.2.5</span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8 mt-4 md:mt-0">
                    <div className="flex items-center gap-6 font-display text-lg uppercase">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`relative group ${isActive(item.path) ? 'text-primary' : 'text-ink'}`}
                            >
                                {item.name}
                                <span className={`absolute -bottom-1 left-0 h-1 bg-primary transition-all ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        ))}
                    </div>

                    <Link href="/contacto" className="bg-ink text-white px-6 py-2 font-display text-xl uppercase border-2 border-ink shadow-brutal-sm hover:bg-primary hover:translate-y-[-2px] transition-all flex items-center gap-2">
                        LET'S FIGHT <span className="material-symbols-outlined text-sm">front_hand</span>
                    </Link>
                </div>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden z-[102] relative p-2 border-2 border-ink bg-white shadow-brutal-sm active:translate-y-1 active:shadow-none transition-all"
                    aria-label="Menu"
                >
                    <span className="material-symbols-outlined text-3xl">
                        {isMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-paper z-[101] flex flex-col items-center justify-center transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                {/* Background Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 pointer-events-none"></div>

                <div className="flex flex-col gap-8 text-center relative z-10 w-full px-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`font-display text-4xl uppercase tracking-tight py-2 border-b-2 border-transparent hover:border-primary hover:text-primary transition-all ${isActive(item.path) ? 'text-primary border-primary' : 'text-ink'}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="h-px bg-ink w-24 mx-auto my-4 opacity-20"></div>
                    <Link href="/contacto" className="bg-black text-white px-8 py-4 font-display text-2xl uppercase border-4 border-black shadow-[8px_8px_0px_#dc2626] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all mx-auto inline-flex items-center gap-3">
                        Agendar <span className="material-symbols-outlined">calendar_month</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
