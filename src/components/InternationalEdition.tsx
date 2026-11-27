import Link from '@/src/site/Link';
import { Selector } from '@/src/components/ServiceEdition';

const pillar = '/consultoria/consultoria-seo-internacional';
const marketGuide = '/liner-notes/estrategia-seo-usa-latam';
const architectureGuide = '/liner-notes/seo-internacional-hreflang-arquitectura';

const routes = [
    {
        label: 'SEO en Latam', from: 'Tu oferta actual', to: 'Tu mercado en Latam',
        title: 'Captar más negocio en el país donde ya operas',
        context: 'Una empresa quiere mejorar contactos en un país que ya atiende. El diagnóstico empieza por servicios y consultas con intención de compra en ese mercado.',
        output: 'Mapa de páginas comerciales, consultas por necesidad y evidencia que falta en cada recorrido hacia el contacto.',
    },
    {
        label: 'Latam → EE. UU.', from: 'Latinoamérica', to: 'Estados Unidos',
        title: 'Llegar a compradores estadounidenses desde Latinoamérica',
        context: 'Una empresa puede atender clientes de EE. UU. El diagnóstico distingue entre público angloparlante e hispano y comprueba qué oferta, soporte y evidencia puede mostrar a cada uno.',
        output: 'Priorización por audiencia e idioma, una página piloto para la oferta y un plan para medir contactos cualificados.',
    },
    {
        label: 'EE. UU. → Latam', from: 'Estados Unidos', to: 'Latinoamérica',
        title: 'Elegir dónde y cómo entrar en Latinoamérica',
        context: 'Una empresa quiere expandirse hacia Latam. Comparamos mercados concretos, cómo busca el comprador, quién compite y dónde la oferta puede atenderse de verdad.',
        output: 'Comparativa por país y una propuesta de arquitectura con criterios para decidir cuándo abrir una versión local.',
    },
];

const diagnosis = [
    ['Demanda comercial', '¿Hay búsquedas que expresan una necesidad que el negocio puede atender?', 'Comparar consultas, competidores y tipos de páginas en resultados locales.'],
    ['Capacidad de venta', '¿Puedes atender, cobrar y dar soporte en ese mercado?', 'Validar alcance, condiciones, moneda si aplica, idioma de atención y prueba comercial.'],
    ['Arquitectura', '¿Cambian la oferta o la intención lo suficiente para requerir otra URL?', 'Reutilizar la página o crear una versión diferenciada. Usar hreflang solo entre equivalentes.'],
    ['Evidencia local', '¿Qué prueba puede verificar el comprador antes de contactar?', 'Identificar casos, demostraciones, referencias o información comercial pertinente al mercado.'],
    ['Medición', '¿Cómo sabrás si vale la pena ampliar la inversión?', 'Registrar consultas por país y página, contactos cualificados y resultados disponibles antes de escalar.'],
];

export default function InternationalEdition() {
    return (
        <div className="service-edition service-edition--international">
            <section className="edition-cover edition-international-cover" aria-labelledby="edition-title">
                <div className="edition-cover-copy">
                    <h1 id="edition-title">Consultor SEO internacional</h1>
                    <p className="edition-display">Encuentra tu próximo mercado.</p>
                    <p className="edition-intro">Soy Roger Murillo. Ayudo a empresas de Latinoamérica y Estados Unidos a elegir mercados, adaptar su web y captar demanda local.</p>
                    <Link href="/contacto" className="edition-cta">Hablemos de tu mercado <span aria-hidden="true">↗</span></Link>
                    <a className="edition-find-route" href="#rutas-expansion">Compara las rutas de expansión <span aria-hidden="true">↓</span></a>
                </div>
                <picture className="edition-international-picture">
                    <source media="(max-width: 46rem)" srcSet="/images/salsa-mercados-560.webp" />
                    <img src="/images/salsa-mercados.webp" width="900" height="900" {...{ fetchpriority: 'high' }} decoding="async" alt="El metal de una trompeta forma un puente entre un barrio andino y una avenida neoyorquina." />
                </picture>
            </section>

            <section className="edition-international-routes" id="rutas-expansion" aria-label="Rutas de expansión">
                <Selector mode="international" heading="Elige tu ruta de expansión" labels={routes.map(route => route.label)} panels={routes.map(route => (
                    <div className="edition-crossing">
                        <p className="edition-crossing-route"><span>{route.from}</span><span aria-hidden="true" className="edition-crossing-line" /><span className="sr-only">hacia</span><span>{route.to}</span></p>
                        <h2>{route.title}</h2>
                        <div className="edition-crossing-details">
                            <p>{route.context}</p>
                            <p className="edition-crossing-output"><strong>Qué saldría del diagnóstico</strong>{route.output}</p>
                        </div>
                    </div>
                ))} />
            </section>

            <section id="mercados-seo" className="edition-method" aria-labelledby="markets-title">
                <h2 id="markets-title">SEO para empresas en Latinoamérica y Estados Unidos</h2>
                <div className="edition-international-prose">
                    <h3>Cuándo contratar a un consultor SEO en Latam</h3>
                    <p>Si ya vendes en un país de Latinoamérica, el trabajo puede empezar por mejorar tus páginas comerciales, su visibilidad y los contactos. Un consultor SEO en Latam también puede trabajar con una empresa de Estados Unidos de forma remota. El alcance se define por el mercado que quieres captar y por quién puede implementar los cambios.</p>
                    <h3>Cuándo necesitas SEO internacional</h3>
                    <p>Cuando la web debe competir en más de un mercado, antes de traducir revisamos qué se vende en cada país, cómo se expresa la intención de compra y qué cambia en el recorrido. Una página en español para compradores hispanos de EE. UU. puede requerir otros ejemplos y condiciones que una página en español para Colombia o México.</p>
                    <p><Link href={marketGuide}>Cómo planificar una estrategia SEO entre USA y Latinoamérica</Link></p>
                </div>
            </section>

            <section id="diagnostico-internacional" className="edition-method edition-intl-checklist" aria-labelledby="diagnosis-title">
                <div>
                    <h2 id="diagnosis-title">Cinco decisiones antes de abrir otro mercado</h2>
                    <p>Usa una copia de esta revisión por país e idioma. Anota la evidencia y quién debe validar cada decisión.</p>
                </div>
                <ol>{diagnosis.map(([topic, question, evidence]) => (
                    <li key={topic}><h3>{topic}</h3><div><p><strong>{question}</strong></p><p>{evidence}</p></div></li>
                ))}</ol>
            </section>

            <section id="entregables-seo" className="edition-method" aria-labelledby="intl-deliverables-title">
                <h2 id="intl-deliverables-title">Qué incluye contratar a un consultor SEO internacional</h2>
                <div className="edition-international-prose">
                    <h3>Una hoja de ruta que tu equipo pueda ejecutar</h3>
                    <p>El diagnóstico aterriza en un mapa de oportunidad por mercado, arquitectura de URLs, contenidos prioritarios y un plan de medición. Si hay versiones equivalentes, especificamos sus canonicals, vínculos recíprocos y hreflang. Si hay una migración, definimos qué redirigir y cómo verificar el resultado. <Link href={architectureGuide}>Consulta la guía de arquitectura internacional y hreflang</Link>.</p>
                    <h3>Cómo construir evidencia y conseguir menciones relevantes</h3>
                    <p>Identificamos qué puede aportar tu marca a compradores y especialistas de cada mercado. Un caso con metodología verificable, una herramienta o una guía que resuelva una decisión concreta pueden servir como fuente editorial. Buscamos oportunidades de difusión en sitios pertinentes para esa audiencia y hacemos seguimiento de menciones y enlaces ganados.</p>
                    <h3>Cómo elegir entre consultor y agencia</h3>
                    <p>Conmigo trabajas directamente en el diagnóstico, la estrategia y las prioridades. Si necesitas varios equipos de producción a la vez, vale la pena <Link href="/vs/agencia-tradicional">comparar el alcance de cada modelo</Link>. Revisa también <Link href="/consultoria">cómo trabajo la consultoría SEO</Link> y usa la <Link href="/lab/tools/roi-calculator">calculadora de ROI SEO</Link> para evaluar tu inversión con tus propios datos.</p>
                </div>
            </section>

            <section className="edition-evidence" aria-labelledby="intl-evidence-title">
                <img src="/images/case-roger-after.webp" alt="Sitio de asesoría de imagen después de la migración a Astro" loading="lazy" decoding="async" />
                <div>
                    <p>Caso de arquitectura y migración</p>
                    <h2 id="intl-evidence-title">Decisiones técnicas que se pueden revisar</h2>
                    <p>Este proyecto documenta la reorganización de una web de servicios, la migración a Astro y la simplificación del recorrido hacia el contacto.</p>
                    <Link href="/casos/rogermurillo">Ver el caso completo <span aria-hidden="true">↗</span></Link>
                </div>
            </section>

            <section id="recursos-internacionales" className="edition-resources" aria-labelledby="intl-resources-title">
                <h2 id="intl-resources-title">Recursos para planificar tu expansión</h2>
                <ul>
                    <li><Link href={marketGuide}>Estrategia SEO USA–Latam</Link></li>
                    <li><Link href={architectureGuide}>Arquitectura y hreflang</Link></li>
                    <li><Link href="/liner-notes/seo-tecnico-era-ia">SEO técnico para IA</Link></li>
                    <li><Link href={`${pillar}#diagnostico-internacional`}>Revisión de cinco decisiones por mercado</Link></li>
                </ul>
            </section>
        </div>
    );
}
