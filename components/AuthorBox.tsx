import Link from 'next/link';
import Image from 'next/image';

const AuthorBox = () => {
    return (
        <div className="bg-paper-light border-4 border-ink p-8 my-12 shadow-brutal relative overflow-hidden">
            {/* Semantic Label for AI */}
            <div className="absolute top-0 right-0 bg-ink text-white px-3 py-1 text-xs font-mono uppercase font-bold">
                About the Author
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">

                {/* Photo / Visual */}
                <div className="shrink-0 relative group">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-ink overflow-hidden border-2 border-ink shadow-[4px_4px_0px_#000]">
                        {/* Placeholder until real image is confirmed, reusing the concept from profile */}
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white font-display font-black text-2xl uppercase rotate-[-12deg] opacity-20">
                            RC
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                    <h3 className="font-display text-2xl md:text-3xl uppercase font-black text-ink mb-2">
                        Roger Calvo
                    </h3>
                    <p className="font-mono text-xs text-primary uppercase font-bold mb-4 tracking-wider">
                        SEO Strategist & Marketer-Builder
                    </p>
                    <p className="font-body text-ink/80 mb-6 max-w-2xl text-sm leading-relaxed">
                        Estratega SEO con <strong>7 años de experiencia</strong> especializada en Topical Authority y GEO (Generative Engine Optimization). Ingeniero de Búsqueda enfocado en desmantelar algoritmos para reconstruir narrativas que las máquinas entienden y los humanos valoran.
                    </p>

                    {/* SameAs Links for Knowledge Graph */}
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/rogermur/" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-primary transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <span className="material-symbols-outlined">work</span>
                        </a>
                        <a href="https://x.com/Rogermu47429637" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-primary transition-colors">
                            <span className="sr-only">X (Twitter)</span>
                            <span className="material-symbols-outlined">alternate_email</span>
                        </a>
                        <a href="https://github.com/rogermur" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-primary transition-colors">
                            <span className="sr-only">GitHub</span>
                            <span className="material-symbols-outlined">code</span>
                        </a>
                        <Link href="/autor/roger-calvo" className="text-ink hover:text-primary transition-colors font-mono text-xs uppercase font-bold underline decoration-2 items-center flex gap-1">
                            Ver Perfil Completo <span className="material-symbols-outlined text-[10px]">arrow_outward</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Structured Data for Person embedded here or relying on parent page Article schema relation */}
        </div>
    );
};

export default AuthorBox;
