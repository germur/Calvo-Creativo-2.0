import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function Technical() {
    const stack = [
        { name: 'Technical SEO', level: '98%', icon: 'Manage_Search', desc: 'Crawling, Indexing, Core Web Vitals' },
        { name: 'React / Next.js', level: '90%', icon: 'Code', desc: 'Server Side Rendering, Static Generation' },
        { name: 'Python / Automation', level: '85%', icon: 'Terminal', desc: 'Scripting, Data Extraction, APIs' },
        { name: 'Data Visualization', level: '88%', icon: 'Bar_Chart', desc: 'Looker Studio, Highcharts, D3.js' },
    ];

    return (
        <>
            <SeoHead title="Lado A - Técnico" description="Habilidades técnicas en SEO, Desarrollo Web y Automatización." />
            <div className="flex min-h-screen flex-col bg-background text-white selection:bg-primary selection:text-black">
                <Navigation />
                <main className="flex-grow p-6 md:p-12 max-w-7xl mx-auto w-full">
                    <div className="mb-16 border-b border-border pb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center text-primary animate-spin-slow">
                                <span className="material-symbols-outlined text-2xl">settings</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-headline uppercase">Lado A: La Técnica</h1>
                        </div>
                        <p className="font-mono text-gray-400 max-w-2xl ml-16">
                            Donde la lógica se encuentra con la estructura. Optimización profunda y código limpio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {stack.map((item, idx) => (
                            <div key={idx} className="group p-8 border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-6xl">{item.icon}</span>
                                </div>
                                <h3 className="text-2xl font-headline uppercase mb-2 text-white group-hover:text-primary transition-colors">{item.name}</h3>
                                <p className="font-mono text-xs text-gray-500 mb-6 uppercase tracking-widest">{item.desc}</p>

                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary transition-all duration-1000 ease-out" style={{ width: item.level }}></div>
                                </div>
                                <div className="text-right mt-2 font-mono text-xs text-primary">{item.level} Mastery</div>
                            </div>
                        ))}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
