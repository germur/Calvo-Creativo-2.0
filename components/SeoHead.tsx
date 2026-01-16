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
    const siteTitle = "EL ESPECIALISTA | Digital Gatefold";
    const fullTitle = title === "Home" ? siteTitle : `${title} | EL ESPECIALISTA`;
    const metaDescription = description || "Portfolio y Blog de Estrategia SEO y Creatividad Digital.";
    const siteUrl = "https://calvocreativo.com";
    const defaultImage = "https://calvocreativo.com/images/og-default.jpg";

    // Dynamic OG Image Logic
    let finalOgImage = image;
    if (!finalOgImage && (type === 'article' || type === 'service')) {
        finalOgImage = `${siteUrl}/api/og?title=${encodeURIComponent(title)}${publishDate ? `&date=${publishDate}` : ''}`;
    } else if (finalOgImage && !finalOgImage.startsWith('http')) {
        finalOgImage = `${siteUrl}${finalOgImage}`;
    }
    const ogImage = finalOgImage || defaultImage;

    // Construct Schema
    const baseSchema = {
        "@context": "https://schema.org",
    };

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
                "url": "https://calvocreativo.com/sobre-mi",
                "sameAs": [
                    "https://www.linkedin.com/in/rogercalvo/",
                    "https://twitter.com/rogercalvo"
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
                "@id": `${siteUrl}${useRouter().asPath}`
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
            "name": siteTitle,
            "url": siteUrl,
            "potentialAction": {
                "@type": "SearchAction",
                "target": `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        };
    }

    const router = useRouter();
    const canonicalUrl = `${siteUrl}${router.asPath === '/' ? '' : router.asPath}`.split('?')[0];

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={canonicalUrl} />

            {/* OG Tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
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
