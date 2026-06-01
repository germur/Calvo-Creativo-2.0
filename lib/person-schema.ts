// lib/person-schema.ts
// Entidad canonica unica de Roger Murillo (marca: Calvo Creativo).
// Las 3 paginas de identidad (/el-artista, /cv, /autor/roger-calvo)
// comparten el MISMO @id para que Google y los LLMs las consoliden
// como una sola persona. Cambiar datos aqui los actualiza en todas.

const SITE = 'https://calvocreativo.com';

// @id canonico de la entidad persona (independiente de la URL de cada pagina)
export const PERSON_ID = `${SITE}/#roger`;
export const ORG_ID = `${SITE}/#org`;

interface PersonSchemaOpts {
    /** URL de la pagina concreta que renderiza el schema */
    pageUrl: string;
}

/**
 * Devuelve el JSON-LD de la entidad Person, listo para JSON.stringify.
 * Pasa la URL de la pagina actual; el @id se mantiene constante.
 */
export function getPersonSchema({ pageUrl }: PersonSchemaOpts) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': PERSON_ID,
        name: 'Roger Murillo',
        alternateName: 'Roger Calvo',
        jobTitle: 'SEO Strategist & Content Architect',
        url: pageUrl,
        image: `${SITE}/images/roger-calvo.jpg`,
        email: 'roger@calvocreativo.com',
        description:
            'Roger Murillo (Roger Calvo) es SEO Strategist y Content Architect con 7 anos de experiencia en mercados U.S. y LATAM. Especialista en Topical Authority, GEO (Generative Engine Optimization) y automatizacion con Python.',
        knowsAbout: [
            'SEO',
            'SEO Tecnico',
            'Generative Engine Optimization',
            'Topical Authority',
            'Python',
            'Content Strategy',
            'Information Gain',
            'Digital Marketing',
        ],
        knowsLanguage: ['Spanish', 'English'],
        sameAs: [
            'https://www.linkedin.com/in/rogermur/',
            'https://x.com/Rogermu47429637',
            'https://github.com/germur',
            'https://quimbara.org',
        ],
        worksFor: {
            '@type': 'Organization',
            '@id': ORG_ID,
            name: 'Calvo Creativo',
            url: SITE,
        },
    };
}

/** Helper: string JSON-LD listo para dangerouslySetInnerHTML */
export function personSchemaJson(pageUrl: string): string {
    return JSON.stringify(getPersonSchema({ pageUrl }));
}
