import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';
import Breadcrumbs from '@/components/Breadcrumbs';

// Mock Data (Salsa/Fania Style)
const projects: Record<string, any> = {
    'branding-liquido': {
        title: 'BRANDING LÍQUIDO',
        client: 'AQUASOUND',
        role: 'Visual Composer',
        year: '2024',
        track_length: '3:45',
        bpm: '120',
        desc: 'Una identidad que no se está quieta. Como el agua, toma la forma del envase. "Be water, my friend", pero con más ritmo. Logotipos que se derriten, tipografías que gotean y una paleta de colores sacada de un arrecife radiactivo.',
        images: [
            'https://picsum.photos/800/600?random=1',
            'https://picsum.photos/600/800?random=2',
            'https://picsum.photos/800/800?random=3'
        ]
    },
    'copy-con-veneno': {
        title: 'COPY CON VENENO',
        client: 'SCORPION INC',
        role: 'Lyrical Assassin',
        year: '2023',
        track_length: '2:30',
        bpm: '98',
        desc: 'Palabras que pican. Textos cortos, directos a la yugular. Sin relleno, sin paja, puro veneno concentrado para matar el aburrimiento y resucitar las ventas. Escribimos como si nos cobraran por letra.',
        images: [
            'https://picsum.photos/600/800?random=4',
            'https://picsum.photos/800/600?random=5'
        ]
    },
    'ux-sensorial': {
        title: 'UX SENSORIAL',
        client: 'BRAINWAVE',
        role: 'Mind Hacker',
        year: '2024',
        track_length: '5:12',
        bpm: '140',
        desc: 'Diseño que se siente. Interfaces que responden al tacto, al sonido, a la mirada. Experiencias digitales que te ponen la piel de gallina. No es solo hacer clic, es sentir el ritmo de la navegación.',
        images: [
            'https://picsum.photos/800/800?random=6',
            'https://picsum.photos/800/600?random=7',
            'https://picsum.photos/600/800?random=8'
        ]
    }
};

export default function LadoBProject() {
    const router = useRouter();
    const { slug } = router.query;
    const project = projects[slug as string];

    if (!slug) return <div>Loading...</div>;
    // Handle 404 for unknown projects
    if (!project) {
        return (
            <div className="min-h-screen bg-paper flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-display text-9xl text-ink">404</h1>
                    <p className="font-mono text-xl text-ink/70 uppercase">Pista no encontrada</p>
                    <Link href="/lab" className="mt-8 inline-block bg-ink text-paper px-8 py-3 font-bold uppercase hover:bg-accent hover:text-ink transition-colors">Volver al Lado B</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-paper font-sans selection:bg-accent selection:text-ink overflow-x-hidden">
            <SeoHead title={`${project.title} | Lado B`} />
            <Navigation />

            <main className="pt-32 pb-24 px-4 relative">
                {/* Background Noise/Texture */}
                <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

                <div className="max-w-7xl mx-auto relative z-10 mb-8">
                    <Breadcrumbs theme="light" />
                </div>

                {/* Header: The "Poster" */}
                <header className="max-w-7xl mx-auto mb-24 relative z-10">
                    <div className="flex flex-col md:flex-row items-start justify-between relative">
                        {/* Sticker: Sabor */}
                        <div className="absolute -top-16 -left-4 md:-left-12 rotate-[-15deg] z-20">
                            <div className="bg-accent text-ink font-black uppercase text-xl md:text-3xl px-4 py-2 border-4 border-ink shadow-brutal rounded-full animate-pulse">
                                ¡Sabor!
                            </div>
                        </div>

                        <div className="w-full">
                            <h1 className="text-8xl md:text-[11rem] leading-[0.8] font-display uppercase text-ink tracking-tighter mix-blend-multiply break-words">
                                {project.title}
                            </h1>
                            <div className="h-4 w-full bg-ink mt-2 mb-2"></div>
                            <div className="h-1 w-2/3 bg-ink"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 items-start">
                        {/* Metadata Column (The "Liner Notes") */}
                        <div className="md:col-span-4 font-mono text-sm leading-relaxed border-l-4 border-ink pl-6 space-y-6">
                            <div>
                                <h3 className="uppercase font-bold text-ink/50 text-xs mb-1">Client / Label</h3>
                                <p className="text-xl font-bold bg-ink text-paper inline-block px-1 transform -rotate-1">{project.client}</p>
                            </div>
                            <div>
                                <h3 className="uppercase font-bold text-ink/50 text-xs mb-1">Role / Instrument</h3>
                                <p className="text-lg border-b-2 border-ink inline-block pb-0.5">{project.role}</p>
                            </div>
                            <div className="flex gap-8">
                                <div>
                                    <h3 className="uppercase font-bold text-ink/50 text-xs mb-1">Year</h3>
                                    <p className="text-lg font-bold">{project.year}</p>
                                </div>
                                <div>
                                    <h3 className="uppercase font-bold text-ink/50 text-xs mb-1">Length</h3>
                                    <p className="text-lg font-bold">{project.track_length}</p>
                                </div>
                                <div>
                                    <h3 className="uppercase font-bold text-ink/50 text-xs mb-1">BPM</h3>
                                    <p className="text-lg font-bold">{project.bpm}</p>
                                </div>
                            </div>
                        </div>

                        {/* Description Column (The "Lyrics") */}
                        <div className="md:col-span-8">
                            <p className="text-2xl md:text-4xl font-display uppercase leading-tight text-ink indent-0 md:indent-24">
                                {project.desc}
                            </p>
                        </div>
                    </div>
                </header>

                {/* Gallery: The "Rhythm" */}
                <section className="max-w-7xl mx-auto relative z-10 w-full">
                    <div className="columns-1 md:columns-2 gap-8 space-y-8">
                        {project.images.map((img: string, i: number) => (
                            <div key={i} className={`relative break-inside-avoid shadow-brutal border-4 border-ink bg-white p-2 group ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-transform duration-300`}>
                                <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto">
                                    <Image
                                        src={img}
                                        alt={`Gallery ${i}`}
                                        width={800}
                                        height={800}
                                        className="w-full h-auto object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
                                    />
                                    {/* Halftone Overlay Effect using CSS mix-blend if possible, simplifying for now with simple overlay */}
                                    <div className="absolute inset-0 bg-ink/10 mix-blend-multiply pointer-events-none group-hover:opacity-0 transition-opacity"></div>
                                </div>
                                <div className="mt-2 flex justify-between items-center font-mono text-[10px] uppercase tracking-widest border-t-2 border-ink pt-2">
                                    <span>Fig. {i + 1}</span>
                                    <span>Ref: {project.year}-00{i}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer Navigation */}
                <div className="max-w-7xl mx-auto mt-32 flex justify-between items-center border-t-8 border-ink pt-8">
                    <Link href="/lab" className="group flex items-center gap-4">
                        <span className="material-symbols-outlined text-4xl group-hover:-translate-x-2 transition-transform">arrow_back</span>
                        <div className="text-left">
                            <div className="font-mono text-xs uppercase text-ink/50">Back to</div>
                            <div className="font-display text-4xl uppercase leading-none group-hover:text-accent transition-colors">The Archive</div>
                        </div>
                    </Link>
                    <div className="hidden md:block">
                        <span className="font-display text-9xl text-ink/5 select-none">SIDE B</span>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
