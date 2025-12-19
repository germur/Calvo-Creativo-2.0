import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function Creative() {
    const projects = [
        { title: 'Neon Brand', category: 'Branding', year: '2023', color: 'bg-pink-500' },
        { title: 'Cyber UI Kit', category: 'Interface', year: '2024', color: 'bg-cyan-500' },
        { title: 'Abstract Data', category: 'Art Direction', year: '2023', color: 'bg-yellow-500' },
    ];

    return (
        <>
            <SeoHead title="Lado B - Creativo" description="Portfolio creativo y diseño visual." />
            <div className="flex min-h-screen flex-col bg-background text-white selection:bg-primary selection:text-black">
                <Navigation />
                <main className="flex-grow p-6 md:p-12 max-w-7xl mx-auto w-full">
                    <div className="mb-16 border-b border-border pb-8 text-right flex flex-col items-end">
                        <div className="flex items-center flex-row-reverse gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full border border-pink-500/50 flex items-center justify-center text-pink-500 animate-pulse-soft">
                                <span className="material-symbols-outlined text-2xl">palette</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-headline uppercase">Lado B: La Creatividad</h1>
                        </div>
                        <p className="font-mono text-gray-400 max-w-2xl mr-16">
                            Rompiendo la cuadrícula. Experiencias visuales que conectan.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div key={idx} className="aspect-[4/5] relative group cursor-pointer overflow-hidden border border-white/10">
                                {/* Image Placeholder */}
                                <div className={`absolute inset-0 ${project.color} opacity-20 group-hover:opacity-40 transition-opacity mix-blend-screen`}></div>
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>

                                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                                    <span className="font-mono text-xs border border-white/20 w-fit px-2 py-1 backdrop-blur-md">{project.year}</span>
                                    <div>
                                        <span className="font-title text-transparent text-4xl stroke-white stroke-2 opacity-50 block mb-2">{idx + 1}</span>
                                        <h3 className="font-headline text-3xl uppercase leading-none mb-1 group-hover:translate-x-2 transition-transform">{project.title}</h3>
                                        <p className="font-mono text-xs text-white/50 bg-black/50 w-fit px-1">{project.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
