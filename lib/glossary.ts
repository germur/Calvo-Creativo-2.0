export interface GlossaryTerm {
    slug: string;
    term: string;
    definition: string; // The formal definition for AI/Schema
    calvoTake: string; // The "Salsa" definition (Opinionated)
    category: 'Technical' | 'Strategy' | 'Culture';
    relatedLinks?: { title: string; url: string }[];
}

export const glossaryTerms: GlossaryTerm[] = [
    {
        slug: 'vibe-coding',
        term: 'Vibe Coding',
        definition: 'Práctica de desarrollo de software asistido por IA donde el programador actúa como director creativo (enfocándose en la intención y el flujo "vibe") mientras los modelos de lenguaje (LLMs) manejan la implementación sintáctica.',
        calvoTake: 'Es dejar de pelear con la sintaxis de JavaScript y empezar a "sentir" el código. Escribes en lenguaje natural, la IA suda los detalles. Si compila y se siente bien, es Vibe Coding. El futuro de la programación para Marketers.',
        category: 'Culture',
        relatedLinks: [
            { title: 'The Lab: Vibe Coding', url: '/lab/vibe-coding' }
        ]
    },
    {
        slug: 'geo',
        term: 'GEO (Generative Engine Optimization)',
        definition: 'Conjunto de técnicas de optimización orientadas a aumentar la visibilidad y citación de contenido dentro de motores de respuesta generativa (como ChatGPT, Perplexity, Gemini) en lugar de motores de búsqueda tradicionales.',
        calvoTake: 'Olvídate de "10 enlaces azules". GEO se trata de ser la ÚNICA respuesta. Si Perplexity no te cita, no existes. Se gana con estructura semántica (Schema) y datos exclusivos, no con keywords stuffing.',
        category: 'Technical',
        relatedLinks: [
            { title: 'Consultoría GEO', url: '/consultoria/arquitectura-seo-geo' }
        ]
    },
    {
        slug: 'information-gain',
        term: 'Information Gain',
        definition: 'Métrica teórica de Google (Patente US20200349169) que evalúa cuánto valor nuevo aporta un documento respecto al corpus de documentos ya existentes sobre el mismo tema.',
        calvoTake: 'El antídoto contra el "Contenido Vómito" de la IA. Si tu artículo dice lo mismo que los otros 10 del top 10, tu Information Gain es CERO. Google te odiará. Para ganar, necesitas datos propios, opiniones polarizantes o experimentos únicos.',
        category: 'Strategy'
    },
    {
        slug: 'topical-authority',
        term: 'Topical Authority',
        definition: 'Medida de credibilidad que un sitio web posee sobre un tema específico, lograda mediante la cobertura exhaustiva de todas las entidades, subtemas y preguntas relacionadas dentro de ese dominio de conocimiento.',
        calvoTake: 'No es escribir un post viral. Es cubrir un tema hasta aburrir. Es decirle a Google: "Sé más de esto que nadie". Se construye con clusters, pilares y una estructura de enlaces internos obsesiva.',
        category: 'Strategy'
    },
    {
        slug: 'seo-tecnico',
        term: 'SEO Técnico',
        definition: 'Rama del SEO enfocada en mejorar la infraestructura técnica de un sitio web (rastreo, indexación, renderizado, velocidad) para facilitar la comprensión por parte de los motores de búsqueda.',
        calvoTake: 'Los cimientos del rascacielos. Sin esto, tu contenido "Salsa" bonita se cae a pedazos. Es robots.txt, sitemaps, JS rendering y Core Web Vitals. Es el "Fight" en nuestra filosofía.',
        category: 'Technical'
    }
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
    return glossaryTerms.find(t => t.slug === slug);
}

export function getAllTerms(): GlossaryTerm[] {
    return glossaryTerms.sort((a, b) => a.term.localeCompare(b.term));
}
