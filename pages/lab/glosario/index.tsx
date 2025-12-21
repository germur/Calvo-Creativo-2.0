import Link from 'next/link';
import ExperimentLayout from '@/components/ExperimentLayout';
import { getAllTerms } from '@/lib/glossary';

export default function GlossaryIndex() {
    const terms = getAllTerms();

    // Group by first letter for that dictionary feel
    const groupedTerms = terms.reduce((acc, term) => {
        const letter = term.term[0].toUpperCase();
        if (!acc[letter]) acc[letter] = [];
        acc[letter].push(term);
        return acc;
    }, {} as Record<string, typeof terms>);

    const letters = Object.keys(groupedTerms).sort();

    return (
        <ExperimentLayout
            title="Wiki Calvo: El Diccionario del Caos | SEO & GEO"
            description="Definiciones semánticas para Humanos y Máquinas. El vocabulario oficial de Calvo Creativo."
            keyword="Semantic Glossary"
            trackNumber="05"
            trackTitle="Wiki Calvo"
            themeColor="acid-pink" // Using Pink for 'Brain/Flesh' metaphor or just distinction
            mode="light" // Light mode for "Paper/Dictionary" feel
            width="wide"
        >
            <div className="text-center mb-16 border-b-4 border-black pb-12">
                <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter">
                    Wiki <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#7928CA]">Calvo</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif italic">
                    "Para dominar una industria, primero debes definir sus términos."
                </p>
                <div className="mt-8 flex gap-4 justify-center text-xs font-mono uppercase tracking-widest text-[#FF0080]">
                    <span>[ DefinedTerm Schema ]</span>
                    <span>[ Semantic SEO ]</span>
                    <span>[ E-E-A-T ]</span>
                </div>
            </div>

            <div className="space-y-16">
                {letters.map(letter => (
                    <div key={letter} className="grid md:grid-cols-12 gap-8">
                        <div className="md:col-span-2">
                            <span className="sticky top-24 text-8xl font-black text-black/5 font-display select-none">
                                {letter}
                            </span>
                        </div>
                        <div className="md:col-span-10 grid gap-6">
                            {groupedTerms[letter].map(term => (
                                <Link key={term.slug} href={`/lab/glosario/${term.slug}`} className="group block">
                                    <article className="border-l-4 border-gray-200 pl-6 py-2 hover:border-[#FF0080] transition-colors bg-white hover:bg-gray-50 p-4 rounded-r-lg">
                                        <div className="flex items-baseline gap-3 mb-2">
                                            <h3 className="text-2xl font-bold font-display uppercase group-hover:text-[#FF0080] transition-colors">
                                                {term.term}
                                            </h3>
                                            <span className="text-[10px] font-mono uppercase text-gray-400 border border-gray-200 px-2 rounded">
                                                {term.category}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 font-serif leading-relaxed line-clamp-2">
                                            {term.definition}
                                        </p>
                                        <div className="mt-3 text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:translate-x-2 transition-transform inline-block">
                                            Leer Definición →
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA for Missing Terms */}
            <div className="mt-24 p-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl text-center">
                <p className="font-mono text-sm text-gray-500 mb-4">¿Falta algún término crítico?</p>
                <a href="https://twitter.com/rogerthedodger" target="_blank" className="font-bold text-[#FF0080] hover:underline">
                    Dímelo en Twitter (@rogerthedodger)
                </a>
            </div>

        </ExperimentLayout>
    );
}
