import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function Profile() {
    return (
        <>
            <SeoHead title="El Artista" description="Perfil profesional: De periodista musical a especialista SEO." />
            <div className="flex min-h-screen flex-col bg-background text-white selection:bg-primary selection:text-black">
                <Navigation />
                <main className="flex-grow flex items-center justify-center p-6 md:p-12 relative">
                    <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
                        {/* Visual */}
                        <div className="relative aspect-square md:aspect-[3/4] border-2 border-primary p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="w-full h-full bg-gray-800 relative grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-white/10 font-headline text-9xl leading-none select-none">
                                    GM
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur text-white p-4 border-t border-primary">
                                    <div className="font-mono text-[10px] uppercase text-primary mb-1">Cédula Profesional</div>
                                    <div className="font-headline text-xl">El Especialista</div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-6">
                            <h1 className="text-5xl font-headline uppercase leading-none">
                                De Periodista<br />
                                <span className="text-primary italic">a Algoritmo</span>
                            </h1>
                            <div className="w-20 h-2 bg-primary"></div>
                            <div className="prose prose-invert prose-sm font-mono text-gray-400">
                                <p>
                                    Inicié reseñando discos de metal y terminé descifrando el algoritmo de Google.
                                    La transición no fue tan diferente: ambos requieren entender patrones, estructura y audiencia.
                                </p>
                                <p>
                                    Hoy aplico la meticulosidad del periodismo de investigación al SEO Técnico y la creatividad de la dirección de arte al Desarrollo Web.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="bg-white/5 p-4 border-l-2 border-primary">
                                    <h4 className="font-headline text-xl mb-1">10+ Años</h4>
                                    <span className="text-[10px] uppercase font-mono text-gray-500">Experiencia Digital</span>
                                </div>
                                <div className="bg-white/5 p-4 border-l-2 border-white">
                                    <h4 className="font-headline text-xl mb-1">Global</h4>
                                    <span className="text-[10px] uppercase font-mono text-gray-500">Clientes & Proyectos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
