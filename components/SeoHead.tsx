import Head from 'next/head';
import { useRouter } from 'next/router';

interface SeoProps {
    title: string;
    description?: string;
    type?: 'website' | 'article' | 'service';
    image?: string;
    author?: string;
    publishDate?: string;
    modifiedDate?: string;
    provider?: string;
    areaServed?: string;
    offerCatalog?: string;
}

const SeoHead = ({ title, description, type = 'website', image, author, publishDate, modifiedDate, provider, areaServed, offerCatalog }: SeoProps) => {
    // ✅ Single useRouter() call at the top — fixes React Hooks rule violation
    const router = useRouter();

    const siteUrl = "https://calvocreativo.com";
    const defaultImage = `${siteUrl}/api/og?title=${encodeURIComponent(title)}`;
    const metaDescription = description || "Consultoría SEO e ingeniería de búsqueda para la era de la IA. Arquitectura GEO, contenidos B2B y automatización. Mercado hispano en USA y Latam.";
    const canonicalUrl = `${siteUrl}${router.asPath === '/' ? '' : router.asPath}`.split('?')[0];

    // ✅ Use title as-is — pages already include "| Calvo Creativo" where needed
    const fullTitle = title;

    // Dynamic OG Image Logic
    let finalOgImage = image;
    if (!finalOgImage) {
        finalOgImage = `${siteUrl}/api/og?title=${encodeURIComponent(title)}${publishDate ? `&date=${publishDate}` : ''}`;
    } else if (!finalOgImage.startsWith('http')) {
        finalOgImage = `${siteUrl}${finalOgImage}`;
    }
    const ogImage = finalOgImage || defaultImage;

    // Schema
    const baseSchema = { "@context": "https://schema.org" };
    let schema: any = {};

    if (type === 'article') {
        schema = {
            ...baseSchema,
            "@type": "BlogPosting",
            "headline": title,
            "description": metaDescription,
            "image": ogImage,
            "author": {
                "@type": "Person",
                "name": author || "Roger Calvo",
                // ✅ Corregido: /sobre-mi no existe → /el-artista
                "url": "https://calvocreativo.com/el-artista",
                // ✅ Corregidos: LinkedIn y X reales
                "sameAs": [
                    "https://www.linkedin.com/in/rogermur/",
                    "https://x.com/Rogermu47429637"
                ]
            },
            "publisher": {
                "@type": "Organization",
                "name": "Calvo Creativo",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://calvocreativo.com/favicon.svg"
                }
            },
            "datePublished": publishDate,
            "dateModified": modifiedDate || publishDate,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": canonicalUrl
            }
        };
    } else if (type === 'service') {
        schema = {
            ...baseSchema,
            "@type": "Service",
            "name": title,
            "description": metaDescription,
            "provider": {
                "@type": "Organization",
                "name": provider || "Calvo Creativo",
                "url": siteUrl
            },
            "areaServed": {
                "@type": "Place",
                "name": areaServed || "Global"
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": offerCatalog || "Digital Services",
            },
            "serviceType": "Digital Marketing & SEO"
        };
    } else {
        schema = {
            ...baseSchema,
            "@type": "WebSite",
            "name": "Calvo Creativo",
            "url": siteUrl,
            "potentialAction": {
                "@type": "SearchAction",
                "target": `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        };
    }

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={canonicalUrl} />

            {/* OG Tags */}
            <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="Calvo Creativo" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@Rogermu47429637" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={ogImage} />

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </Head>
    );
};

export default SeoHead;
