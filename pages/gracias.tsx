import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function Gracias() {
    return (
        <>
            <SeoHead title="Acceso Concedido | Calvo Creativo" />
            <Navigation />

            <main className="min-h-screen bg-[#000] flex flex-col items-center justify-center p-4 pt-20">

                {/* Ticket Component */}
                <div className="bg-[#f0f0f0] w-full max-w-md rounded-xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.2)] relative">

                    {/* Top Tear Part - Perforation effect visual */}
                    <div className="bg-[#ff0000] p-6 text-center relative">
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-[url('https://www.transparenttextures.com/patterns/dashed-line.png')] opacity-50"></div>

                        <h1 className="text-4xl font-black uppercase text-white tracking-widest italic animate-pulse">Access Granted</h1>
                        <div className="text-[10px] font-bold uppercase text-white/80 mt-1">Calvo Creativo VibeCoding System</div>
                    </div>

                    {/* Ticket Body */}
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <div className="text-[10px] font-bold uppercase text-gray-400 mb-1">Event</div>
                                <h2 className="text-2xl font-black uppercase leading-none">The SEO<br />Transformation</h2>
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] font-bold uppercase text-gray-400 mb-1">Date</div>
                                <div className="text-xl font-black uppercase">ASAP</div>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 mb-8 font-mono text-xs text-gray-600 leading-relaxed">
                            <p className="mb-2"><span className="font-bold text-black">Status:</span> Request Received.</p>
                            <p className="mb-2"><span className="font-bold text-black">Action:</span> Calvo is reviewing your track.</p>
                            <p>Expect a response within 24 beats. Stay tuned.</p>
                        </div>

                        {/* Barcode Mockup */}
                        <div className="flex flex-col items-center gap-2 opacity-80">
                            <div className="h-12 w-full bg-[repeating-linear-gradient(90deg,black,black_2px,transparent_2px,transparent_4px)]"></div>
                            <div className="font-mono text-[10px] tracking-[0.5em]">0928374651</div>
                        </div>
                    </div>

                    {/* Bottom: Admit One Button */}
                    <div className="bg-[#1a1a1a] p-4 text-center">
                        <Link href="/" className="inline-block bg-[#ffb74d] text-black px-8 py-3 rounded-full font-black uppercase text-sm hover:bg-white transition-colors">
                            Back to the Arena
                        </Link>
                    </div>

                </div>

                <div className="text-white/30 text-[10px] font-mono mt-8 uppercase tracking-widest">
                    Keep this ticket for your records
                </div>

            </main>
            <Footer />
        </>
    );
}
