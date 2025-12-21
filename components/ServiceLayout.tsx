import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

interface ServiceLayoutProps {
    children: React.ReactNode;
    title: string;
    description: string;
    serviceName: string;
    geoDefinition: string; // The text for the GEO definition block
    faqItems?: { question: string; answer: string }[];
}

const ServiceLayout = ({
    children,
    title,
    description,
    serviceName,
    geoDefinition,
    faqItems = []
}: ServiceLayoutProps) => {

    // Schema Generator
    const generateSchema = () => {
        const schema = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Service",
                    "name": serviceName,
                    "provider": {
                        "@type": "Person", // Or Organization
                        "name": "Roger Calvo",
                        "url": "https://calvocreativo.com" // Ideally dynamic or from config
                    },
                    "areaServed": "Worldwide",
                    "description": description
                },
                faqItems.length > 0 && {
                    "@type": "FAQPage",
                    "mainEntity": faqItems.map(item => ({
                        "@type": "Question",
                        "name": item.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": item.answer
                        }
                    }))
                }
            ].filter(Boolean)
        };
        return JSON.stringify(schema);
    };

    return (
        <div className="min-h-screen bg-[#F8F5F0] text-[#0A0A0A] font-sans selection:bg-[#E11D48] selection:text-white">
            <Head>
                <title>{title} | Calvo Creativo</title>
                <meta name="description" content={description} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: generateSchema() }}
                />
                <link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&family=Shrikhand&display=swap" rel="stylesheet" />
            </Head>

            <Navigation />

            {/* GEO Definition Block (Hidden/Subtle for Humans, Clear for AI) */}
            <div className="bg-white border-b border-gray-200 py-3 px-6 text-[10px] text-gray-400 font-mono tracking-wide leading-relaxed">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <span className="uppercase tracking-widest text-[#E11D48] font-bold shrink-0">GEO Definition //</span>
                    <p className="opacity-80">{geoDefinition}</p>
                </div>
            </div>

            <main className="pb-20">
                <div className="max-w-7xl mx-auto px-6 pt-6">
                    <Breadcrumbs theme="light" />
                </div>

                {/* Hero Wrapper could be here or part of children to allow flexibility */}
                {children}

                {/* FAQ Section (Auto-generated if items exist) */}
                {faqItems.length > 0 && (
                    <section className="bg-white border-t border-gray-200 py-20 mt-20">
                        <div className="max-w-4xl mx-auto px-6">
                            <h3 className="text-3xl font-display font-black mb-8 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#E11D48] text-4xl">quiz</span>
                                Preguntas Frecuentes
                            </h3>
                            <div className="grid gap-6">
                                {faqItems.map((item, idx) => (
                                    <div key={idx} className="bg-[#F8F5F0] p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="font-bold text-xl mb-3 text-[#0A0A0A]">{item.question}</h4>
                                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default ServiceLayout;
