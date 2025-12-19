import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
    const router = useRouter();
    const isActive = (path: string) => router.pathname === path;

    return (
        <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-border bg-background/90 backdrop-blur-md px-6 py-4 md:px-12">
            <div className="flex items-center gap-4 group cursor-pointer">
                <Link href="/" className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-black animate-spin-slow shadow-[0_0_15px_rgba(249,245,6,0.4)] group-hover:shadow-[0_0_25px_rgba(249,245,6,0.6)] transition-all">
                        <span className="material-symbols-outlined text-[28px]">album</span>
                    </div>
                    <h2 className="hidden text-lg font-bold tracking-tight text-white md:block uppercase font-headline">EL ESPECIALISTA</h2>
                </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                {[
                    { path: '/', label: 'Inicio / Home' },
                    { path: '/lado-a', label: 'Lado A (Técnico)' },
                    { path: '/lado-b', label: 'Lado B (Creativo)' },
                    { path: '/liner-notes', label: 'Liner Notes (Blog)' },
                    { path: '/el-artista', label: 'El Artista' },
                ].map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary border-b-2 border-primary' : 'text-gray-400'
                            }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <Link href="/booking" className="flex items-center justify-center gap-2 rounded bg-primary px-4 py-2 text-sm font-bold text-black transition-all hover:scale-105 hover:bg-white active:scale-95 shadow-lg">
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span className="hidden sm:inline">Booking (Contacto)</span>
            </Link>
        </header>
    );
};

export default Navigation;
