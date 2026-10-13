export const SITE = 'https://calvocreativo.com';
export const PERSON_ID = `${SITE}/#roger`;
export const ORG_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;
export const personEntity = {
  '@type': 'Person', '@id': PERSON_ID,
  name: 'Roger Murillo', url: `${SITE}/el-artista`,
  jobTitle: 'SEO Strategist & Content Architect',
  image: `${SITE}/images/roger-calvo.jpg`, email: 'roger@calvocreativo.com',
  description: 'Roger Murillo es el SEO detrás de Calvo Creativo. Estrategia SEO, arquitectura de contenidos, GEO y automatización con Python para mercados de EE. UU. y Latinoamérica.',
  knowsAbout: ['SEO', 'SEO técnico', 'Generative Engine Optimization', 'Topical Authority', 'Python', 'Content Strategy', 'Information Gain'],
  knowsLanguage: ['es', 'en'],
  sameAs: ['https://www.linkedin.com/in/rogermur/', 'https://x.com/Rogermu47429637', 'https://github.com/germur'],
  worksFor: { '@id': ORG_ID },
};
export const organizationEntity = {
  '@type': 'Organization', '@id': ORG_ID,
  name: 'Calvo Creativo', url: SITE,
  logo: { '@type': 'ImageObject', url: `${SITE}/favicon.svg` },
  founder: { '@id': PERSON_ID }, email: 'roger@calvocreativo.com',
};
export const siteGraph = {
  '@context': 'https://schema.org',
  '@graph': [personEntity, organizationEntity, {
    '@type': 'WebSite', '@id': WEBSITE_ID, name: 'Calvo Creativo',
    url: SITE, inLanguage: 'es', publisher: { '@id': ORG_ID },
  }],
};
export function getPersonSchema({ pageUrl }: { pageUrl: string }) {
  return {
    '@context': 'https://schema.org', '@type': 'ProfilePage',
    '@id': `${pageUrl}#webpage`, url: pageUrl,
    name: 'Roger Murillo — Calvo Creativo', inLanguage: 'es',
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': PERSON_ID, '@type': 'Person', name: 'Roger Murillo' },
  };
}
export function personSchemaJson(pageUrl: string): string {
  return JSON.stringify(getPersonSchema({ pageUrl })).replaceAll('<', '\u003c');
}
