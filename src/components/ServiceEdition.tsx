import type { ReactNode } from 'react';
import Link from '@/src/site/Link';
import '@/styles/service-edition.css';

type Mode = 'automation' | 'content' | 'local';

const workflows = [
    {
        label: 'Informe semanal', title: 'De exportaciones a decisiones',
        stages: [['Leer', 'Exportaciones de Search Console'], ['Comparar', 'Cambios por consulta y página'], ['Entregar', 'Lista de cambios para investigar']],
        review: 'El equipo decide si una caída requiere investigar demanda, indexación o cambios del sitio.',
    },
    {
        label: 'Clasificar consultas', title: 'De búsquedas a grupos de intención',
        stages: [['Leer', 'Consultas de Search Console o un CSV'], ['Agrupar', 'Consultas con problemas similares'], ['Entregar', 'Grupos con ejemplos y casos ambiguos']],
        review: 'El equipo revisa las consultas dudosas y decide cuáles pertenecen a una misma página.',
    },
    {
        label: 'Auditar URLs', title: 'Del sitemap a una lista de incidencias',
        stages: [['Leer', 'Sitemap e inventario de rastreo'], ['Cruzar', 'Estado HTTP, canonical e indexabilidad'], ['Entregar', 'Incidencias ordenadas por tipo de página']],
        review: 'El equipo valida la intención de cada URL antes de cambiar una redirección o un canonical.',
    },
];

const briefs = [
    {
        label: 'Entender', search: '¿Por qué mi web tiene visitas, pero nadie pide una cotización?',
        format: 'Guía de diagnóstico', title: 'Dónde se pierde un cliente antes de contactar',
        outline: ['Comprueba la intención de las consultas', 'Revisa si el servicio y el siguiente paso son claros', 'Prueba el recorrido y mide el envío del formulario'],
        proof: 'Capturas anotadas del recorrido y un ejemplo de cómo comprobar el formulario.',
    },
    {
        label: 'Comparar', search: '¿Qué conviene para mi empresa, un consultor SEO o una agencia?',
        format: 'Comparativa', title: 'Consultor SEO o agencia según el trabajo que necesitas',
        outline: ['Compara quién ejecuta y quién toma decisiones', 'Aclara precios, alcance y dependencias', 'Incluye preguntas para evaluar propuestas'],
        proof: 'Una matriz de escenarios con los criterios que cambian la decisión.',
    },
    {
        label: 'Contratar', search: 'Busco ayuda SEO para vender en Estados Unidos desde Colombia',
        format: 'Página de servicio', title: 'Consultoría SEO para entrar en Estados Unidos',
        outline: ['Explica qué mercados y modelos de negocio atiende', 'Muestra entregables y un ejemplo verificable', 'Ofrece un camino directo para conversar'],
        proof: 'Alcance concreto, experiencia relevante y acceso a un caso documentado.',
    },
];

const surfaces = [
    {
        label: 'Mapas', title: 'Ubicar un negocio que pueda atenderte',
        inspect: 'Categoría del perfil, horario real, zona de cobertura y reseñas relevantes.',
        action: 'Revisar si el perfil refleja el servicio y permite llamar o llegar al negocio.',
    },
    {
        label: 'Google Search', title: 'Encontrar una página que responda la búsqueda',
        inspect: 'Página del servicio, cobertura declarada, evidencias locales y opciones de contacto.',
        action: 'Comprobar qué URL aparece y si ayuda a decidir antes de contactar.',
    },
    {
        label: 'Asistentes IA', title: 'Entender qué información respalda una respuesta',
        inspect: 'Datos consistentes, fuentes visibles y evidencia de que el negocio presta ese servicio.',
        action: 'Registrar respuestas y fuentes de una muestra de preguntas como medición separada.',
    },
];

const editions = {
    automation: {
        title: 'Automatización SEO', line: 'Deja de repetir lo mismo.',
        intro: 'Convierto reportes, auditorías y clasificación de consultas en flujos que tu equipo puede revisar y volver a ejecutar.',
        action: 'Hablemos de tu proceso',
        method: 'Qué procesos podemos automatizar',
        methodId: 'entregables-automatizacion',
        steps: [
            ['Elegir el proceso', 'Identificamos qué tarea se repite, cuánto trabajo ocupa y qué decisión depende de ella.'],
            ['Probar con tus fuentes', 'Acordamos permisos, reglas y criterios de calidad. Validamos el flujo con ejemplos y excepciones.'],
            ['Dejarlo en operación', 'Entregamos el flujo, sus salidas y la documentación de mantenimiento, con responsables y puntos de revisión.'],
        ],
        links: [
            ['/lab/automatizacion-seo-python', 'Automatización con Python'], ['/lab/glosario/vibe-coding', 'Vibe coding'],
            ['/lab/tools/keyword-research', 'Herramienta de keyword research'], ['/liner-notes/seo-tecnico-era-ia', 'SEO técnico para IA'],
            ['/consultoria/estrategia-contenidos-autoridad', 'Estrategia de contenidos'],
        ],
        evidence: {
            title: 'De Excel a un CRM de reclamaciones',
            copy: 'All Claims pasó de usar hojas de cálculo y carpetas compartidas a gestionar reclamaciones, seguimiento y agenda en un sistema propio. El caso documenta cómo cambió la operación.',
            href: '/casos/all-claims', image: '/images/case-crm-claims.webp', alt: 'Vista de gestión de reclamaciones del CRM de All Claims',
        },
    },
    content: {
        title: 'Estrategia de contenidos SEO y autoridad temática', line: 'Cada búsqueda pide algo distinto.',
        intro: 'Conecto investigación de intención, arquitectura editorial y evidencia propia para que cada página ayude a tu comprador a decidir.',
        action: 'Hablemos de tu contenido',
        method: 'Qué entregamos en una estrategia de contenidos SEO',
        methodId: 'entregables-contenido',
        steps: [
            ['Investigar qué necesita el comprador', 'Auditamos lo que ya publicaste y cruzamos las preguntas del usuario con la oferta y la evidencia que puedes aportar.'],
            ['Diseñar la arquitectura editorial', 'Definimos mapa temático, intención por URL, páginas que conviene consolidar y enlaces para continuar el recorrido.'],
            ['Preparar briefs y medir', 'Cada brief explica qué debe resolver la página, qué evidencia necesita y qué señales vamos a revisar después de publicarla.'],
        ],
        links: [
            ['/lab/glosario/topical-authority', 'Autoridad temática'], ['/lab/glosario/information-gain', 'Information Gain'],
            ['/consultoria/consultoria-seo-internacional', 'SEO internacional'], ['/consultoria/automatizacion-seo-ia', 'Automatización SEO'],
            ['/consultoria/arquitectura-seo-geo', 'Arquitectura SEO y GEO'],
        ],
        evidence: {
            title: 'Del síntoma a una experiencia que orienta',
            copy: 'Para Germán Montenegro, la investigación partió de cómo una persona describe el dolor antes de conocer el término clínico. Esa observación dio forma al contenido y a la exploración de un cuerpo interactivo.',
            href: '/casos/german-montenegro', image: '/images/case-german-body.webp', alt: 'Interfaz del cuerpo interactivo en el sitio de Germán Montenegro',
        },
    },
    local: {
        title: 'GEO y SEO local para negocios', line: 'Que te encuentren donde deciden.',
        intro: 'Reviso cómo aparece tu negocio en Google Maps, búsqueda orgánica y respuestas de IA. Cada canal exige señales y mediciones propias.',
        action: 'Revisemos tu presencia local',
        method: 'Qué incluye una consultoría GEO y SEO local',
        methodId: 'entregables-geo-local',
        steps: [
            ['Diagnóstico por canal', 'Revisamos perfil de empresa, servicios, horarios, cobertura y cómo aparece el negocio en búsquedas relevantes.'],
            ['Prioridades para la web y el perfil', 'Alineamos información pública, páginas de servicio, evidencia local y datos estructurados cuando corresponde.'],
            ['Línea base y seguimiento', 'Definimos qué medir en Search Console y Google Business Profile, cómo registrar contactos y cómo observar menciones en respuestas de IA.'],
        ],
        links: [['/lab/glosario/geo', 'Qué es GEO'], ['/consultoria/arquitectura-seo-geo', 'Arquitectura SEO técnica']],
        evidence: null,
    },
};

export function Selector({ mode, heading, labels, panels }: { mode: Mode | 'international'; heading: string; labels: string[]; panels: ReactNode[] }) {
    return (
        <fieldset className="edition-selector">
            <legend>{heading}</legend>
            <p className="edition-sample" id={`${mode}-sample`}>Ejemplo ilustrativo</p>
            <div className="edition-options" aria-describedby={`${mode}-sample`}>
                {labels.map((label, index) => (
                    <label className="edition-option" key={label}>
                        <input type="radio" name={`${mode}-example`} defaultChecked={index === 0} />
                        <span>{label}</span>
                    </label>
                ))}
            </div>
            <div className="edition-outputs">
                {panels.map((panel, index) => (
                    <div className="edition-output" key={labels[index]} tabIndex={0} role="region" aria-label={`Ejemplo: ${labels[index]}`}>
                        {panel}
                    </div>
                ))}
            </div>
        </fieldset>
    );
}

function WorkflowDemo() {
    return <Selector mode="automation" heading="Prueba un flujo" labels={workflows.map(item => item.label)} panels={workflows.map(item => (
        <div className="edition-workflow">
            <div className="edition-record" aria-hidden="true"><i /></div>
            <h2>{item.title}</h2>
            <ol>{item.stages.map(([name, value]) => <li key={name}><strong>{name}</strong><span>{value}</span></li>)}</ol>
            <div className="edition-review"><b>Revisión humana</b><p>{item.review}</p></div>
        </div>
    ))} />;
}

function BriefDemo() {
    return <Selector mode="content" heading="De la búsqueda al brief" labels={briefs.map(item => item.label)} panels={briefs.map(item => (
        <div className="edition-brief">
            <p className="edition-query">«{item.search}»</p>
            <p className="edition-format">{item.format}</p>
            <h2>{item.title}</h2>
            <ol>{item.outline.map(point => <li key={point}>{point}</li>)}</ol>
            <p className="edition-brief-proof"><strong>Qué lo hace útil</strong> {item.proof}</p>
        </div>
    ))} />;
}

function LocalDemo() {
    return <Selector mode="local" heading="Una búsqueda, tres canales" labels={surfaces.map(item => item.label)} panels={surfaces.map((item, index) => (
        <div className="edition-local-example">
            <div className={`edition-atlas edition-atlas-${index + 1}`} aria-hidden="true">
                <i className="edition-atlas-block" /><i className="edition-atlas-point" />
            </div>
            <div className="edition-local-reading">
                <p className="edition-query">«Fisioterapia deportiva cerca de mí»</p>
                <h2>{item.title}</h2>
                <dl><div><dt>Qué revisamos</dt><dd>{item.inspect}</dd></div><div><dt>Qué hacemos con eso</dt><dd>{item.action}</dd></div></dl>
            </div>
        </div>
    ))} />;
}

function TimeEstimator() {
    return (
        <section className="edition-estimator" data-time-estimator hidden aria-labelledby="edition-estimator-title">
            <div>
                <h2 id="edition-estimator-title">¿Cuánto tiempo ocupa hoy?</h2>
                <p>Calcula el esfuerzo actual de una tarea repetitiva con tus propios datos.</p>
            </div>
            <div className="edition-estimator-inputs">
                <label>Ejecuciones a la semana<input id="edition-frequency" type="number" min="0" max="10000" step="1" defaultValue="10" /></label>
                <label>Minutos por ejecución<input id="edition-duration" type="number" min="0" max="10080" step="1" defaultValue="15" /></label>
            </div>
            <p className="edition-estimator-result"><output htmlFor="edition-frequency edition-duration" aria-live="polite" /> <span>horas semanales de trabajo actual</span></p>
        </section>
    );
}

export default function ServiceEdition({ mode }: { mode: Mode }) {
    const edition = editions[mode];

    return (
        <div className={`service-edition service-edition--${mode}`}>
            <section className="edition-cover" aria-labelledby="edition-title">
                <div className="edition-cover-copy">
                    <h1 id="edition-title">{edition.title}</h1>
                    <p className="edition-display">{edition.line}</p>
                    <p className="edition-intro">{edition.intro}</p>
                    <Link href="/contacto" className="edition-cta">{edition.action}<span aria-hidden="true">↗</span></Link>
                </div>
                {mode === 'automation' && <WorkflowDemo />}
                {mode === 'content' && <BriefDemo />}
                {mode === 'local' && <LocalDemo />}
            </section>

            {mode === 'automation' && <TimeEstimator />}

            <section className="edition-method" aria-labelledby={edition.methodId}>
                <h2 id={edition.methodId}>{edition.method}</h2>
                <ol>{edition.steps.map(([name, description]) => (
                    <li key={name}><h3>{name}</h3><p>{description}</p></li>
                ))}</ol>
            </section>

            {edition.evidence && (
                <section className="edition-evidence" aria-labelledby="edition-evidence-title">
                    <img src={edition.evidence.image} alt={edition.evidence.alt} loading="lazy" decoding="async" />
                    <div>
                        <p>Caso de estudio</p>
                        <h2 id="edition-evidence-title">{edition.evidence.title}</h2>
                        <p>{edition.evidence.copy}</p>
                        <Link href={edition.evidence.href}>Ver el caso completo <span aria-hidden="true">↗</span></Link>
                    </div>
                </section>
            )}

            <div className="edition-resources">
                <h2>Recursos relacionados</h2>
                <ul>{edition.links.map(([href, title]) => <li key={href}><Link href={href}>{title}</Link></li>)}</ul>
            </div>
        </div>
    );
}
