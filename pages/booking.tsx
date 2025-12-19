import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function Booking() {
    return (
        <>
            <SeoHead title="Booking" description="Contacto y contrataciones." />
            <div className="flex min-h-screen flex-col bg-background text-white selection:bg-primary selection:text-black">
                <Navigation />
                <main className="flex-grow flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]">
                    <div className="bg-black/90 border border-border p-8 md:p-12 max-w-lg w-full text-center shadow-2xl relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black px-4 py-1 font-mono text-xs uppercase font-bold tracking-widest rotate-2">
                            Open for Business
                        </div>

                        <span className="material-symbols-outlined text-6xl text-primary mb-6">mail</span>
                        <h1 className="text-4xl font-headline uppercase mb-4">Inicia la Conversación</h1>
                        <p className="font-mono text-sm text-gray-400 mb-8">
                            ¿Tienes un proyecto, un problema de indexación o simplemente quieres hablar de música y código?
                        </p>

                        <a href="mailto:hola@elespecialista.com" className="block w-full bg-white hover:bg-primary text-black font-headline text-xl uppercase py-4 transition-colors">
                            Mandar Correo
                        </a>

                        <div className="mt-8 flex justify-center gap-6 text-gray-500">
                            <a href="#" className="hover:text-white transition-colors text-sm font-mono uppercase">LinkedIn</a>
                            <a href="#" className="hover:text-white transition-colors text-sm font-mono uppercase">GitHub</a>
                            <a href="#" className="hover:text-white transition-colors text-sm font-mono uppercase">Twitter</a>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
