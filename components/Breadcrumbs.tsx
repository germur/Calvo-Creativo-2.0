import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumbs = ({ theme = 'light' }: { theme?: 'light' | 'dark' | 'acid' }) => {
    const router = useRouter();
    const pathSegments = router.asPath.split('/').filter(segment => segment !== '');

    // Dictionary for pretty names
    const pathNames: { [key: string]: string } = {
        'consultoria': 'Lado A: Consultoría',
        'lab': 'Lado B: Lab',
        'liner-notes': 'Liner Notes',
        'servicios': 'Servicios',
        'el-artista': 'El Artista',
        'wins': 'Wins',
        'guias': 'Guías',
        'seo-fight-club': 'Fight Club',
        'vibe-coding': 'Vibe Coding',
        'opinion': 'Opinion',
        'automatizacion-seo-ia': 'Automatización',
        'auditoria-seo-tecnica': 'Auditoría',
        'estrategia-seo-internacional': 'Estrategia'
    };

    // Theme styles
    const styles = {
        light: {
            text: 'text-ink',
            separator: 'text-ink/30',
            active: 'font-bold text-primary',
            hover: 'hover:text-primary'
        },
        dark: {
            text: 'text-white',
            separator: 'text-white/30',
            active: 'font-bold text-acid-green',
            hover: 'hover:text-acid-green'
        },
        acid: {
            text: 'text-black',
            separator: 'text-black/30',
            active: 'font-bold text-white bg-black px-1',
            hover: 'hover:bg-black hover:text-white px-1'
        }
    };

    const currentStyle = styles[theme as keyof typeof styles] || styles.light;

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://calvocreativo.com"
            },
            ...pathSegments.map((segment, index) => {
                const href = '/' + pathSegments.slice(0, index + 1).join('/');
                const name = pathNames[segment] || segment.replace(/-/g, ' ');
                return {
                    "@type": "ListItem",
                    "position": index + 2,
                    "name": name,
                    "item": `https://calvocreativo.com${href}`
                };
            })
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <nav aria-label="breadcrumb" className="py-4 font-mono text-xs uppercase tracking-wider">
                <ol className="flex flex-wrap items-center gap-2">
                    <li>
                        <Link href="/" className={`${currentStyle.text} ${currentStyle.hover} transition-colors`}>
                            HOME
                        </Link>
                    </li>
                    {pathSegments.map((segment, index) => {
                        const href = '/' + pathSegments.slice(0, index + 1).join('/');
                        const name = pathNames[segment] || segment.replace(/-/g, ' ');
                        const isLast = index === pathSegments.length - 1;

                        return (
                            <li key={href} className="flex items-center gap-2">
                                <span className={currentStyle.separator}>/</span>
                                {isLast ? (
                                    <span className={`${currentStyle.text} ${currentStyle.active}`}>
                                        {name}
                                    </span>
                                ) : (
                                    <Link href={href} className={`${currentStyle.text} ${currentStyle.hover} transition-colors`}>
                                        {name}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumbs;
