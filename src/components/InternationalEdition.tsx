import Link from '@/src/site/Link';
import { Selector } from '@/src/components/ServiceEdition';
import '@/styles/international-spread.css';

const pillar = '/consultoria/consultoria-seo-internacional';
const marketGuide = '/liner-notes/estrategia-seo-usa-latam';
const architectureGuide = '/liner-notes/seo-internacional-hreflang-arquitectura';
const searchPerformance = 'https://support.google.com/webmasters/answer/7576553?hl=es';
const trendsData = 'https://support.google.com/trends/answer/4365533?hl=es';
const regionalSites = 'https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites?hl=es-419';
const localizedPages = 'https://developers.google.com/search/docs/specialty/international/localized-versions?hl=es-419';
const spamPolicies = 'https://developers.google.com/search/docs/essentials/spam-policies?hl=es-419';
const leadEvents = 'https://support.google.com/analytics/answer/9267735?hl=es';

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
    {
        icon: 'travel_explore', title: 'Demanda comercial',
        question: '¿Hay búsquedas que expresan una necesidad que el negocio puede atender?',
        methods: [
            'Cruzo país, consulta y página en Search Console. Separo búsquedas de marca, problema, comparación y contratación. Reviso qué tipos de resultados aparecen para cada necesidad y si nuestra página responde a la misma intención.',
            'Para mercados donde el sitio todavía tiene poca visibilidad, documento una muestra de resultados con consulta, fecha, país, idioma y dispositivo. Uso Google Trends para comparar interés relativo en el tiempo. Los valores de 0 a 100 no representan búsquedas mensuales.',
        ],
        decision: 'Entrego un mapa consulta → intención → URL → evidencia requerida. Si existe demanda útil y una página adecuada, priorizo esa URL. Si domina una intención distinta, documento qué contenido conviene probar.',
        sources: [[searchPerformance, 'Rendimiento en Search Console'], [trendsData, 'Cómo se calculan los datos de Trends']],
    },
    {
        icon: 'storefront', title: 'Capacidad de venta',
        question: '¿Puedes atender, cobrar y dar soporte en ese mercado?',
        methods: [
            'Mapeo por país e idioma quién atiende, qué puede contratar el comprador, en qué moneda se cotiza, qué cubre el servicio y qué documentación recibe antes de decidir. Pruebo el recorrido desde la página hasta el formulario o la agenda.',
            'Para una empresa de Latam que atiende a EE. UU., verifico por separado la oferta para compradores angloparlantes y para hispanohablantes. Una página en español puede necesitar condiciones y ejemplos propios de EE. UU. aunque el equipo también venda en Colombia o México.',
        ],
        decision: 'Entrego una ficha de preparación comercial con responsables y dependencias. Si el equipo aún no puede cumplir lo que ofrece la página, propongo resolver esa brecha antes de ampliar la captación.',
        sources: [[regionalSites, 'Señales de mercado en Google Search Central']],
    },
    {
        icon: 'account_tree', title: 'Arquitectura',
        question: '¿Cambian la oferta o la intención lo suficiente para requerir otra URL?',
        methods: [
            'Mantengo una URL por idioma si el mismo contenido permite comprar en todos los mercados que cubre. Si cambian condiciones, intención o evidencia, evalúo subdirectorios por país e idioma. Los subdominios y los dominios locales entran en la decisión cuando existe una razón operativa para gestionarlos por separado.',
            'Cuando se publican versiones equivalentes, compruebo respuestas HTTP, indexabilidad, canonicals, enlaces de idioma y etiquetas hreflang recíprocas con autorreferencia. Por ejemplo, es-MX, es-US y en-US representan audiencias posibles. Google admite es para español genérico y no admite es-419 como valor hreflang.',
        ],
        decision: 'Entrego el inventario de URLs por mercado y sus relaciones. Cada versión destinada a indexarse tiene una canonical intencional. Si una URL cambia durante la migración, compruebo que su redirección apunte al destino equivalente.',
        sources: [[localizedPages, 'Requisitos de hreflang de Google'], ['/liner-notes/seo-internacional-hreflang-arquitectura', 'Guía de implementación y diagnóstico']],
    },
    {
        icon: 'fact_check', title: 'Evidencia local',
        question: '¿Qué prueba puede verificar el comprador antes de contactar?',
        methods: [
            'Para cada afirmación de la página, pido la prueba que la sostiene. Un caso necesita contexto, alcance, período, resultado y límites de atribución. Una demostración debe responder a la duda comercial concreta, como qué integración funciona o cómo se presta el servicio a distancia.',
            'Identifico medios, asociaciones y recursos donde esa evidencia puede aportar algo a una audiencia pertinente. Registro las menciones por mercado y reviso la página de origen y el contexto antes de valorar el enlace.',
        ],
        decision: 'Entrego un inventario de evidencias publicables y oportunidades editoriales. Priorizo fuentes que el comprador pueda consultar y descarto enlaces diseñados para manipular posiciones.',
        sources: [[spamPolicies, 'Políticas de Google sobre enlaces']],
    },
    {
        icon: 'query_stats', title: 'Medición',
        question: '¿Cómo sabrás si vale la pena ampliar la inversión?',
        methods: [
            'Fijo una línea base por país y URL. Search Console aporta consultas, impresiones y clics. En GA4, generate_lead corresponde al envío confirmado de una solicitud. Reservo qualify_lead para cuando el equipo verifica que ese contacto cumple los criterios acordados.',
            'El país observado en búsqueda o Analytics y el mercado comercial declarado por el contacto responden a preguntas distintas. Cruzo resultados agregados por página, país y período. Comparo ventanas equivalentes y anoto cambios de oferta, campañas y estacionalidad.',
        ],
        decision: 'Entrego una lectura que separa visibilidad, solicitudes y oportunidades aceptadas. Si suben los clics y no llegan solicitudes cualificadas, reviso intención, oferta y fricción antes de invertir en más páginas.',
        sources: [[searchPerformance, 'Métricas de búsqueda'], [leadEvents, 'Eventos recomendados de GA4']],
    },
];

export default function InternationalEdition() {
    return (
        <div className="service-edition service-edition--international">
            <section className="edition-cover edition-international-cover" aria-labelledby="edition-title">
                <div className="edition-cover-copy">
                    <h1 id="edition-title">Consultor SEO internacional</h1>
                    <p className="edition-display">Encuentra tu próximo mercado.</p>
                    <p className="edition-intro">Soy Roger Murillo, consultor SEO internacional en Calvo Creativo. Ayudo a empresas de Latinoamérica y Estados Unidos a validar mercados, adaptar su web y convertir demanda orgánica en oportunidades comerciales.</p>
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

            <section id="diagnostico-internacional" className="intl-checklist" aria-labelledby="diagnosis-title">
                <div className="intl-checklist-cover">
                    <h2 id="diagnosis-title">Cinco decisiones antes de abrir otro mercado</h2>
                    <p>Repite la revisión por país e idioma. Anota qué evidencia tienes y quién debe validar cada decisión.</p>
                    <img className="intl-spread-print" src="/images/internacional-diagnostico.webp" width="672" height="504" alt="Brújula de latón sobre un plano urbano impreso, con el trayecto marcado en tinta roja." loading="lazy" decoding="async" />
                </div>
                <ol className="intl-checklist-steps" role="list">{diagnosis.map(item => (
                    <li key={item.title}>
                        <span className="intl-ink-icon material-symbols-outlined" aria-hidden="true">{item.icon}</span>
                        <div>
                            <h3>{item.title}</h3>
                            <p><strong>{item.question}</strong></p>
                            <details className="intl-research-detail" open={item.icon === 'travel_explore'}>
                                <summary>{`Cómo investigo la ${item.title.toLowerCase()}`}</summary>
                                {item.methods.map(text => <p key={text}>{text}</p>)}
                                <p><strong>Qué entrego y qué decide. </strong>{item.decision}</p>
                                <ul aria-label="Fuentes de la metodología">{item.sources.map(([href, label]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
                            </details>
                        </div>
                    </li>
                ))}</ol>
            </section>

            <section id="investigacion-mercados" className="intl-market-study" aria-labelledby="intl-market-study-title">
                <div className="intl-market-study-intro">
                    <h2 id="intl-market-study-title">Qué cambia al localizar una oferta</h2>
                    <p>Comparé el plan Basic en las dos páginas públicas de precios de Shopify el 27 de noviembre de 2026. Revisé la moneda, el precio mensual equivalente con pago anual y la comisión de tarjeta anunciada.</p>
                </div>
                <div>
                    <table>
                        <caption className="sr-only">Comparación de la oferta pública de Shopify Basic para México y Estados Unidos</caption>
                        <thead><tr><th scope="col">Variable</th><th scope="col">México</th><th scope="col">Estados Unidos</th></tr></thead>
                        <tbody>
                            <tr><th scope="row">Idioma y moneda</th><td>Español · MXN</td><td>Inglés · USD</td></tr>
                            <tr><th scope="row">Basic con pago anual</th><td>299 MXN al mes</td><td>29 USD al mes</td></tr>
                            <tr><th scope="row">Comisión de tarjeta desde</th><td>3,5 % + 3 MXN</td><td>2,9 % + 0,30 USD</td></tr>
                        </tbody>
                    </table>
                    <p><strong>Decisión para una empresa que se expande. </strong>Si el precio, los costes de contratación o la disponibilidad cambian por país, la página regional necesita exponer esas diferencias antes de pedir una demo o un contacto. La traducción puede compartir la explicación del producto. Las condiciones comerciales requieren su propia validación.</p>
                    <p>La comparación describe la oferta publicada en esas dos páginas en esa fecha. Sirve para evaluar localización comercial. Las posiciones y la conversión requieren otros datos.</p>
                    <ul aria-label="Páginas de Shopify comparadas">
                        <li><Link href="https://www.shopify.com/mx/precios">Precios de Shopify México</Link></li>
                        <li><Link href="https://www.shopify.com/pricing">Precios de Shopify Estados Unidos</Link></li>
                    </ul>
                </div>
            </section>

            <section id="entregables-seo" className="intl-deliverables" aria-labelledby="intl-deliverables-title">
                <h2 id="intl-deliverables-title">Qué incluye contratar a un consultor SEO internacional</h2>
                <article className="intl-deliverable">
                    <img className="intl-spread-print" src="/images/internacional-arquitectura.webp" width="672" height="504" alt="Manos conectando fichas sobre papel cuadriculado para trazar la arquitectura de un sitio." loading="lazy" decoding="async" />
                    <div>
                        <h3>Una hoja de ruta que tu equipo pueda ejecutar</h3>
                        <p>El diagnóstico aterriza en un mapa de oportunidad por mercado, arquitectura de URLs, contenidos prioritarios y un plan de medición. Cada iniciativa incluye el problema observado, la URL afectada, la dependencia, el responsable y el criterio de aceptación.</p>
                        <p>Por ejemplo, antes de abrir una versión para México, marketing valida la propuesta, desarrollo comprueba el destino y los enlaces alternativos, y ventas confirma cómo recibirá y calificará las solicitudes. El piloto deja un registro para decidir si conviene extenderlo a otro país.</p>
                        <p><Link href={architectureGuide}>Consulta la guía de arquitectura internacional y hreflang</Link></p>
                    </div>
                </article>
                <article className="intl-deliverable">
                    <img className="intl-spread-print" src="/images/internacional-menciones.webp" width="672" height="504" alt="Micrófono y recortes de periódico en un collage sobre cómo una historia local llega a otros medios." loading="lazy" decoding="async" />
                    <div>
                        <h3>Cómo construir evidencia y conseguir menciones relevantes</h3>
                        <p>Partimos de preguntas que el comprador o un especialista del sector necesita resolver. Para cada una elegimos el formato de prueba que mejor responde, como una comparativa documentada, una herramienta o un caso con período y alcance. La página comercial enlaza a esa evidencia desde la afirmación que respalda.</p>
                        <p>En difusión, la entrega es un listado de fuentes por país con audiencia, tema, oportunidad y estado. Una mención solo cuenta como confirmada cuando existe una página publicada que podemos revisar.</p>
                    </div>
                </article>
                <article className="intl-deliverable">
                    <img className="intl-spread-print" src="/images/internacional-consultoria.webp" width="672" height="504" alt="Figuras reunidas alrededor de una mesa con cuadernos y documentos de trabajo." loading="lazy" decoding="async" />
                    <div>
                        <h3>Cómo elegir entre consultor y agencia</h3>
                        <p>Conmigo trabajas directamente en el diagnóstico, la estrategia y las prioridades. Una consultoría encaja cuando tu equipo puede ejecutar cambios con una hoja de ruta y necesita criterio para priorizarlos. Si varios mercados requieren redacción, desarrollo y operación simultáneos, revisa qué capacidad incluye cada propuesta y quién mantiene las versiones.</p>
                        <p>Antes de contratar, pide que te expliquen cómo eligen el primer mercado, quién valida los cambios y qué evidencia utilizarán para decidir si vale la pena escalar. Puedes <Link href="/vs/agencia-tradicional">comparar los modelos</Link>, revisar <Link href="/consultoria">cómo trabajo la consultoría SEO</Link> o evaluar tu inversión en la <Link href="/lab/tools/roi-calculator">calculadora de ROI SEO</Link>.</p>
                    </div>
                </article>
            </section>

            <section className="edition-evidence" aria-labelledby="intl-evidence-title">
                <img src="/images/case-roger-after.webp" alt="Sitio de asesoría de imagen después de la migración a Astro" loading="lazy" decoding="async" />
                <div>
                    <p>Caso de arquitectura y migración</p>
                    <h2 id="intl-evidence-title">Decisiones técnicas que se pueden revisar</h2>
                    <p>En la web de asesoría de imagen separamos servicios de programas de formación, migramos a Astro y conectamos la oferta con el formulario. Netlify registró 37 solicitudes del 26 de julio al 12 de octubre de 2026. Es un registro de envíos y su exportación no acredita el canal de adquisición.</p>
                    <Link href="/casos/rogermurillo">Ver el caso completo <span aria-hidden="true">↗</span></Link>
                </div>
            </section>

            <section className="edition-resources" aria-labelledby="intl-author-title">
                <h2 id="intl-author-title">Quién lleva tu consultoría SEO internacional</h2>
                <p>Roger Murillo dirige el diagnóstico en Calvo Creativo y trabaja contigo en la estrategia, la arquitectura y las prioridades de implementación para Latinoamérica y Estados Unidos.</p>
                <ul><li><Link href="/el-artista">Trayectoria de Roger Murillo</Link></li><li><Link href="/contacto">Cuéntame a qué mercado quieres llegar</Link></li></ul>
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
