import ServiceEdition from '@/src/components/ServiceEdition';
import Navigation from '@/src/site/Navigation';
import Footer from '@/src/site/Footer';
import SeoHead from '@/components/SeoHead';

export default function GeoIaService() {
    return (
        <>
            <SeoHead
                title="GEO Local: SEO para ChatGPT, Gemini y Google Maps | Calvo Creativo"
                type="service"
                description="SEO local y GEO para negocios: revisión de Google Business Profile, páginas de servicio, datos de negocio y visibilidad en buscadores y asistentes de IA."
                provider="Calvo Creativo"
                areaServed="Global, LATAM, USA"
                offerCatalog="Geomancia Digital Services"
            />
            <Navigation />

            <main>
                <ServiceEdition mode="local" />
            </main>
            <Footer />
        </>
    );
}
