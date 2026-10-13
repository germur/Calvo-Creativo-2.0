import Head from '@/src/site/Head';
import { PERSON_ID, ORG_ID, WEBSITE_ID } from '@/lib/person-schema';
import { useRouter } from '@/src/site/context';

interface SeoProps {
    title: string;
    description?: string;
    type?: 'website' | 'article' | 'service' | 'profile';
    image?: string;
    author?: string;
    publishDate?: string;
    modifiedDate?: string;
    provider?: string;
    areaServed?: string;
    offerCatalog?: string;
    noindex?: boolean;
}

const SeoHead = ({ title, description, type = 'website', image, author, publishDate, modifiedDate, provider, areaServed, offerCatalog, noindex = false }: SeoProps) => {
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
            "@id": `${canonicalUrl}#article`,
            "url": canonicalUrl,
            "inLanguage": "es",
            "headline": title,
            "description": metaDescription,
            "image": ogImage,
            "author": {
                "@type": "Person",
                "@id": PERSON_ID,
                "name": author || "Roger Murillo",
                // ✅ Corregido: /sobre-mi no existe → /el-artista
                "url": "https://calvocreativo.com/autor/roger-murillo",
                // ✅ Corregidos: LinkedIn y X reales
                "sameAs": [
                    "https://www.linkedin.com/in/rogermur/",
                    "https://x.com/Rogermu47429637"
                ]
            },
            "publisher": {
                "@type": "Organization",
                "@id": ORG_ID,
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
                "@id": ORG_ID,
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
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            "name": title,
            "url": canonicalUrl,
            "isPartOf": { "@id": WEBSITE_ID },
            "inLanguage": "es"
        };
    }

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            {noindex && <meta name="robots" content="noindex, follow" />}
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


            {/* Schema */}
            {type !== 'profile' && <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />}
        </Head>
    );
};

export default SeoHead;
