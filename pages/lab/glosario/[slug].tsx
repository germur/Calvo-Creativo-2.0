import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ExperimentLayout from '@/components/ExperimentLayout';
import { getAllTerms, getTermBySlug, GlossaryTerm } from '@/lib/glossary';

interface TermPageProps {
    termData: GlossaryTerm;
}

export default function TermPage({ termData }: TermPageProps) {
    if (!termData) return null;

    // JSON-LD Schema for DefinedTerm (part of a DefinedTermSet technically, or standalone)
    // We will use a flexible approach: WebPage with 'mainEntity' as DefinedTerm
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "DefinedTerm",
        "name": termData.term,
        "description": termData.definition,
        "inDefinedTermSet": {
            "@type": "DefinedTermSet",
            "name": "Wiki Calvo: El Diccionario SEO & GEO",
            "url": "https://calvocreativo.com/lab/glosario"
        },
        "author": {
            "@type": "Person",
            "name": "Roger Calvo",
            "url": "https://calvocreativo.com/autor/roger-calvo"
        }
    };

    return (
        <ExperimentLayout
            title={`${termData.term} - Definición SEO & GEO | Wiki Calvo`}
            description={termData.definition}
            keyword={termData.term}
            trackNumber="05"
            trackTitle="Wiki Calvo"
            themeColor="acid-pink"
            mode="light"
            width="standard"
        >
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>

            <article className="max-w-3xl mx-auto">
                {/* Header: The Term */}
                <header className="mb-12 border-b-4 border-black pb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-black text-white px-3 py-1 font-mono text-xs uppercase tracking-widest rounded">
                            {termData.category}
                        </span>
                        <span className="text-gray-400 font-mono text-xs">/glosario/{termData.slug}</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-6">
                        {termData.term}
                    </h1>
                    {/* Phonetic/Pronunciation mock */}
                    <div className="font-serif italic text-gray-500 text-lg">
                        SUSTANTIVO • / {termData.slug.replace(/-/g, ' ')} /
                    </div>
                </header>

                <div className="grid gap-12">

                    {/* SECTION 1: The Formal Definition (Machine Logic) */}
                    <section className="bg-gray-50 p-8 rounded-xl border-l-4 border-gray-300">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">smart_toy</span>
                            Definición Técnica (Para Robots)
                        </h2>
                        <p className="text-xl md:text-2xl font-serif leading-relaxed text-gray-800">
                            {termData.definition}
                        </p>
                    </section>

                    {/* SECTION 2: The Calvo Take (Human Logic) */}
                    <section className="relative">
                        <div className="absolute -left-4 -top-4 text-6xl opacity-10 rotate-12">🌶️</div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-[#FF0080] mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">person</span>
                            La Opinión sin Filtro (Salsa)
                        </h2>
                        <div className="prose prose-lg text-black font-display font-medium leading-relaxed border-l-4 border-[#FF0080] pl-6 py-2">
                            {termData.calvoTake}
                        </div>
                    </section>

                    {/* SECTION 3: Related Links (Internal Linking) */}
                    {termData.relatedLinks && (
                        <section className="mt-8 pt-8 border-t border-gray-200">
                            <h3 className="font-bold uppercase text-sm mb-4">Profundiza en el Lab:</h3>
                            <ul className="space-y-4">
                                {termData.relatedLinks.map(link => (
                                    <li key={link.url}>
                                        <Link href={link.url} className="group flex items-center gap-3 p-4 border border-black hover:bg-black hover:text-white transition-all rounded-lg">
                                            <span className="material-symbols-outlined">arrow_forward</span>
                                            <span className="font-bold text-lg">{link.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                </div>

            </article>
        </ExperimentLayout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const terms = getAllTerms();
    const paths = terms.map((term) => ({
        params: { slug: term.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const termData = getTermBySlug(params?.slug as string);

    if (!termData) {
        return { notFound: true };
    }

    return {
        props: {
            termData,
        },
    };
};
