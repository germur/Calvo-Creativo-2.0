import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import InternationalEdition from '@/src/components/InternationalEdition';

export default function ConsultoriaInternacional() {
    return (
        <ServiceLayout
            editorial
            title="Consultor SEO Internacional | USA-Latam | Calvo Creativo"
            description="Consultor SEO internacional para empresas de Latinoamérica y Estados Unidos. Investigación por mercado, arquitectura multilingüe, estrategia de contenidos y medición."
            serviceName="Consultoría SEO Internacional"
            serviceType="Consultoría SEO internacional"
            areaServed={['Latinoamérica', 'Estados Unidos']}
            geoDefinition="La consultoría SEO internacional ayuda a que un sitio sea descubrible y relevante en distintos mercados e idiomas. Combina investigación de demanda local, arquitectura de URL, hreflang cuando existen versiones equivalentes, contenido adaptado y medición por país. El objetivo es conectar las búsquedas de cada mercado con una oferta comercial adecuada."
            faqItems={[
                { question: "¿Necesito una web diferente para cada país?", answer: "No necesariamente. Depende de tus recursos y objetivos. Los subdirectorios suelen simplificar la gestión en un mismo dominio; los dominios nacionales o subdominios pueden tener sentido por requisitos de negocio, marca o infraestructura. La decisión depende de las versiones existentes y del equipo que las mantendrá." },
                { question: "¿Puede la IA traducir mi contenido para SEO?", answer: "La IA puede ayudar a traducir y generar borradores. Conviene validar vocabulario, intención de búsqueda, exactitud y oferta con conocimiento del mercado. Traducir literalmente no garantiza posicionamiento ni ventas." },
                { question: "¿Cómo compito con empresas locales de EE.UU. si estoy fuera?", answer: "Empieza por distinguir búsquedas nacionales, locales y de contratación remota. La relevancia de la oferta, los contenidos, la evidencia y la arquitectura ayudan a competir; las búsquedas locales también pueden depender de proximidad y presencia real. No hay garantía de superar a competidores locales." },
                { question: "¿Puedo contratar un consultor SEO en Latam para una empresa de Estados Unidos?", answer: "Sí. El trabajo puede hacerse de forma remota, con objetivos, entregables y responsables acordados. Lo importante es definir si buscas captar clientes en Estados Unidos, en Latinoamérica o en ambos mercados, y el alcance de implementación." },
                { question: "¿Cuánto cuesta una consultoría SEO internacional?", answer: "El presupuesto depende del número de mercados e idiomas, el estado técnico del sitio, la producción de contenidos y el alcance de implementación. Primero revisamos la situación y definimos una propuesta de trabajo, sin prometer posiciones ni ventas." }
            ]}
        >
            <InternationalEdition />
        </ServiceLayout>
    );
}
