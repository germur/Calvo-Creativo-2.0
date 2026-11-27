import ExperimentLayout from '@/components/ExperimentLayout';
import { Island } from '@/src/site/Island';
export default function Page() { return (<ExperimentLayout
            title="Calculadora ROI SEO gratis: inversión y retorno | Calvo Creativo"
            description="Calcula el ROI SEO con tráfico orgánico, conversión, ingresos, margen e inversión. Estima el retorno incremental y el punto de equilibrio con tus propios datos."
            keyword="Calculadora ROI SEO"
            trackNumber="04-01"
            trackTitle="ROI Calculator"
            themeColor="acid-green"
            mode="dark"
            width="wide"
        >
            <header className="mb-10 font-body">
                <h1 className="text-4xl md:text-6xl font-display text-white mb-5">Calculadora de ROI SEO gratis</h1>
                <p className="text-lg text-gray-200 max-w-3xl">¿Cuánto necesita crecer tu tráfico orgánico para recuperar la inversión? Simula el retorno incremental de una estrategia SEO con datos de tu negocio. La herramienta es gratuita y no requiere registro.</p>
            </header>
            <Island name="RoiCalculator" />
            <section className="mt-16 space-y-6 font-body text-gray-200" aria-labelledby="formula-roi">
                <h2 id="formula-roi" className="text-3xl font-bold text-white">Cómo calcular el ROI de una estrategia SEO</h2>
                <p>El retorno de inversión mide cuánto beneficio adicional obtienes en relación con lo que inviertes. Esta calculadora usa el margen de contribución, no todos los ingresos como si fueran beneficios.</p>
                <div className="p-6 bg-[#1a1a1a] border border-white/15 rounded-xl">
                    <p><strong>Ingresos incrementales</strong> = sesiones adicionales × tasa de conversión a cliente × ingreso medio por cliente.</p>
                    <p className="mt-3"><strong>Contribución incremental</strong> = ingresos incrementales × margen de contribución.</p>
                    <p className="mt-3"><strong>ROI SEO (%)</strong> = (contribución incremental − inversión SEO) / inversión SEO × 100.</p>
                </div>
                <h3 className="text-xl font-bold text-white">Ejemplo de cálculo</h3>
                <p>Si añades 1.000 sesiones mensuales, conviertes el 2% en clientes y cada cliente aporta 250 USD de ingresos, generas 5.000 USD adicionales. Con un margen del 40%, la contribución es de 2.000 USD. Si inviertes 1.000 USD en SEO, el retorno neto es de 1.000 USD y el ROI estimado es del 100%.</p>
                <h3 className="text-xl font-bold text-white">Qué datos utilizar</h3>
                <p>Consulta las sesiones orgánicas en GA4, la tasa de cierre en tu CRM y el margen con tu equipo financiero. Search Console ayuda a entender clics y visibilidad, pero sus clics no equivalen a sesiones ni a clientes. Incluye costes de consultoría, contenido, desarrollo y herramientas en la inversión si corresponden al mismo periodo.</p>
                <h3 className="text-xl font-bold text-white">Límites del modelo</h3>
                <p>El cálculo mantiene constantes la conversión y el valor medio por cliente. No promete crecimiento, no atribuye automáticamente ventas a SEO y no modela la maduración de los resultados. Prueba escenarios conservadores, centrales y optimistas, y contrástalos con datos posteriores.</p>
                <p>Si estás evaluando nuevos mercados, utiliza supuestos separados para cada país. <a href="/consultoria/consultoria-seo-internacional" className="text-acid-green underline">Consulta cómo planificamos una estrategia SEO internacional</a> o <a href="/contacto" className="text-acid-green underline">hablemos de tu caso</a>.</p>
            </section>
        </ExperimentLayout>); }
