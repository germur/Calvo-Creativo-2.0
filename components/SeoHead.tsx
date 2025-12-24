import Head from 'next/head';
import { useRouter } from 'next/router';

interface SeoProps {
    title: string;
    description?: string;
    type?: 'website' | 'article';
    image?: string;
    author?: string;
    publishDate?: string;
    modifiedDate?: string;
}

const SeoHead = ({ title, description, type = 'website', image, author, publishDate, modifiedDate }: SeoProps) => {
    const siteTitle = "EL ESPECIALISTA | Digital Gatefold";
    const fullTitle = title === "Home" ? siteTitle : `${title} | EL ESPECIALISTA`;
    const metaDescription = description || "Portfolio y Blog de Estrategia SEO y Creatividad Digital.";
    const siteUrl = "https://calvocreativo.com";
    const defaultImage = "https://calvocreativo.com/images/og-default.jpg";
    const ogImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

    // Construct Schema
    const schema = type === 'article' ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": metaDescription,
        "image": ogImage,
        "author": {
            "@type": "Person",
            "name": author || "Roger Calvo"
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
        "dateModified": modifiedDate || publishDate
    } : {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": siteTitle,
        "url": siteUrl
    };

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
