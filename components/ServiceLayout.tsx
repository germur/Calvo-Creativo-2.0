import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

interface ServiceLayoutProps {
    children: React.ReactNode;
    title: string;
    description: string;
    serviceName: string;
    geoDefinition: string;
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
    const router = useRouter();
    const siteUrl = "https://calvocreativo.com";
    const canonicalUrl = `${siteUrl}${router.asPath}`.split('?')[0];
    const ogImage = `${siteUrl}/api/og?title=${encodeURIComponent(title)}`;

    // Schema: Service + FAQPage + BreadcrumbList
    const generateSchema = () => {
        const breadcrumbSegments = router.asPath.split('/').filter(Boolean);
        const breadcrumbItems = [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
            ...breadcrumbSegments.map((seg, i) => ({
                "@type": "ListItem",
                "position": i + 2,
                "name": seg.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                "item": `${siteUrl}/${breadcrumbSegments.slice(0, i + 1).join('/')}`
            }))
        ];

        const schema: any[] = [
            {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": serviceName,
                "description": description,
                "url": canonicalUrl,
                "provider": {
                    "@type": "Person",
                    "name": "Roger Calvo",
                    "url": `${siteUrl}/el-artista`,
                    "sameAs": [
                        "https://www.linkedin.com/in/rogermur/",
                        "https://x.com/Rogermu47429637"
                    ]
                },
                "areaServed": "Worldwide",
                "serviceType": "Digital Marketing & SEO"
            },
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbItems
            }
        ];

        if (faqItems.length > 0) {
            schema.push({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqItems.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                    }
                }))
            });
        }

        return JSON.stringify(schema);
    };

    return (
        <div className="min-h-screen bg-[#F8F5F0] text-[#0A0A0A] font-sans selection:bg-[#E11D48] selection:text-white">
            <Head>
                {/* ✅ title ya incluye "| Calvo Creativo" — no se duplica */}
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonicalUrl} />

                {/* OG Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:site_name" content="Calvo Creativo" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Rogermu47429637" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={ogImage} />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

                {/* Schema: Service + BreadcrumbList + FAQPage */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: generateSchema() }}
                />
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

                {children}

                {/* FAQ Section */}
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
