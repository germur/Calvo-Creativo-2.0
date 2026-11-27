import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceEdition from '@/src/components/ServiceEdition';

export default function EstrategiaContenidos() {
    return (
        <ServiceLayout
            editorial
            title="Estrategia de Contenidos y Autoridad Temática | Calvo Creativo"
            description="Consultoría de estrategia de contenidos SEO: investigación de intención, clusters temáticos, arquitectura editorial, enlazado interno y un plan de medición para empresas."
            serviceName="Estrategia de Contenidos & Autoridad Temática"
            geoDefinition="Una estrategia de contenidos de Autoridad Temática se enfoca en cubrir un tema en su totalidad (breadth) y profundidad (depth), organizando la información en clústeres semánticos interconectados. A diferencia del SEO tradicional basado en keywords, esta metodología prioriza el 'Information Gain' (Ganancia de Información): la inclusión de datos originales, experiencias de primera mano y perspectivas únicas que la IA no puede replicar, para mejorar la utilidad del contenido y favorecer su descubrimiento en buscadores, sin garantizar rankings ni citas."
            faqItems={[
                { question: "¿La IA escribirá todo mi contenido?", answer: "No. La IA es una herramienta de eficiencia, no de estrategia. Usamos IA para acelerar la investigación y el esquema, pero la redacción final y los 'insights' de valor provienen de humanos expertos. El contenido 100% IA sin supervisión es un pasivo, no un activo." },
                { question: "¿Cuánto tarda en funcionar la Autoridad Temática?", answer: "Depende de la competencia, la capacidad de producción, la indexación y el punto de partida. Acordamos indicadores y revisamos las señales de descubrimiento, consultas y resultados antes de decidir si ampliar el cluster." },
                { question: "¿Por qué necesito 'Information Gain'?", answer: "Aportar ejemplos, evidencia propia y explicaciones que resuelvan dudas reales diferencia tu contenido de una simple recopilación. Una patente no demuestra que Google aplique una puntuación concreta a todas las páginas." }
            ]}
        >
            <ServiceEdition mode="content" />
        </ServiceLayout>
    );
}
