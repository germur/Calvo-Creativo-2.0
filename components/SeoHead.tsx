import Head from 'next/head';

interface SeoProps {
    title: string;
    description?: string;
}

const SeoHead = ({ title, description }: SeoProps) => {
    const siteTitle = "EL ESPECIALISTA | Digital Gatefold";
    const fullTitle = title === "Home" ? siteTitle : `${title} | EL ESPECIALISTA`;
    const metaDescription = description || "Portfolio y Blog de Estrategia SEO y Creatividad Digital.";

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default SeoHead;
