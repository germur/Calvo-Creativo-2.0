# Trabajos y casos

La sección vive en `/casos`; sus cuatro historias están centralizadas en `src/cases.ts`. Portada y menú enlazan directamente la colección. Cada historia incluye problema, decisiones, resultado, límites de medición, autor, servicio relacionado y otros trabajos. Se conserva `/casos/rogermurillo`.

## Evidencia utilizada

- Roger Murillo: proyecto existente y confirmación del responsable de Calvo Creativo de que se han vendido programas. CSV de Netlify recibido y resumido; pendiente registro comercial con período. Un envío no equivale a una venta. Se retiraron las cifras de Lighthouse sin fecha y las afirmaciones absolutas de seguridad, exclusividad y ausencia de errores del relato anterior.
- Germán Montenegro: inventario de rutas y README del proyecto: 23 páginas, familias lesiones/deportes/servicios y HTML generado con Astro. No se atribuye crecimiento de tráfico ni citas; la incidencia de Search Console sigue abierta.
- All Claims: estructura documentada del CRM y revisión del flujo Intake - Contract. La beta simula el recorrido y no envía contratos reales. No se publican datos privados ni productividad estimada.
- Prendaautos: análisis de reportes realizado el 12 de octubre de 2026. Grupo de carros: 19 frente a 71 acciones de contacto; 1,36 frente a 2,84 por día; COP 17.518 frente a COP 7.715 por acción. Ventanas: 1–14 septiembre / 15 septiembre–9 octubre. Reducción aproximada 56%. No son personas únicas ni operaciones cerradas; no se aísla causalidad de la separación de campañas. Motos tuvo resultados distintos.

## Pendiente para ampliar

CSV de formularios sin publicar información personal; separar pruebas, spam y duplicados, explicitar definición y fechas. Confirmar ventas con el registro del negocio. Añadir capturas públicas de proyectos y gráficos basados en evidencia, sin inventar pantallas o exponer reclamaciones. El contenido se prepara en la vista previa, no en producción.

## Actualización: formularios de Roger Murillo
Exportación revisada: 37 solicitudes, 26 julio–12 octubre de 2026 (Bogotá). Resumen agregado en src/contact-results.json; el CSV original y los datos personales no se incorporan al repositorio. 37 correos distintos; una pareja de envíos comparte nombre y teléfono. Se conservan los envíos como solicitudes, sin afirmar personas únicas. 23 envíos seleccionan opciones de imagen; 14 incluyen peluquería y 5 seleccionan únicamente peluquería. No hay prueba de canal SEO, ventas o crecimiento. Las categorías admiten selección múltiple.

## Recorrido experimental de los casos

Rediseño inspirado en la jerarquía editorial del caso BetterUp de Graphite, adaptado a Calvo Creativo y a la evidencia disponible. Cada historia abre con contexto y resultado, incluye capítulos con progreso de lectura, un explorador propio, decisiones desplegables y una sección de fuente y alcance.

- Germán: tres recorridos búsqueda/familia/página, con enlaces al proyecto real y explicación de su navegación corporal interactiva. Las búsquedas son ejemplos ilustrativos, sin volúmenes ni posiciones atribuidos.
- Roger: gráficos de solicitudes por mes e intereses con períodos parciales y selección múltiple explícitos.
- All Claims: cuatro etapas de un recorrido explicado; no ejecuta operaciones ni envía contratos.
- Prendaautos: selector carros/motos, misma escala de costo y comparación de acciones por día. Muestra resultados favorables y desfavorables.

La primera versión incorporó capturas públicas de dos webs tomadas el 12 de octubre de 2026. La ampliación visual del 13 de octubre añade archivos históricos y pantallas de prueba del CRM, documentadas a continuación. No se publican datos personales de formularios.

Todo el contenido se entrega en HTML; sin JavaScript se leen todas las vistas. Los controles son botones nativos, y las decisiones usan details/summary. No se oculta contenido con animaciones de entrada. Teclado y móvil revisados en las cuatro historias; sin desbordamiento horizontal a 390 px. La barra de capítulos permite desplazamiento lateral en móvil sin bloquear la lectura. Respeta movimiento reducido.

## Ampliación visual y narrativa: 13 octubre de 2026

Confirmación directa del responsable del proyecto en esta conversación:

- All Claims pasó de Excel y carpetas de OneDrive a un CRM propio que utilizan la empresa y sus colaboradores. Incluye agenda y automatización de correos diarios. El código de Microsoft 365 documenta un piloto para un usuario, de lunes a viernes a las 8:00 a. m. Miami. Los contratos siguen en beta de revisión sin envío real en la versión comprobada.
- Roger Murillo partía de WordPress con plugins problemáticos, lentitud, errores y arquitectura insuficiente. La reconstrucción trabaja Astro, rendimiento, Core Web Vitals, SEO técnico y autoridad. El responsable confirma posicionamiento en búsquedas importantes; faltan informes fechados para publicar posiciones o puntuaciones concretas. No se literaliza su exageración sobre la cantidad de plugins ni se publica una acusación sobre licencias.
- Prendautos combina el rediseño web con cinco o seis meses de optimización de Google Ads, orientación a contactos y separación de carros/motos. El responsable confirma el mismo presupuesto asignado y feedback positivo continuado de la clienta. No se inventan testimonios textuales ni se equipara presupuesto asignado a gasto ejecutado idéntico en ventanas de diferente duración.

Fuentes de las galerías (`src/case-evidence.ts`):

- Roger antes: https://web.archive.org/web/20250125211143/https://rogermurillo.co/ (25 enero 2025). Después: https://rogermurillo.co/ (13 octubre 2026).
- Prendautos antes: https://web.archive.org/web/20250711192026/https://www.prestaya.com.co/ (11 julio 2025). prendautos.com redirigía a Prestaya en el archivo. El responsable confirmó que era la web anterior de la misma clienta; la propia captura usa la marca Prendautos y los teléfonos coinciden con la web actual. Después: https://prendautos.com/ (13 octubre 2026).
- Wayback reproduce recursos incompletos. Se conserva su barra de fecha y se advierte que la reproducción no prueba fallos ni velocidad de la web original.
- CRM: capturas existentes de la interfaz real de listados, analytics y revisión de contrato. Se inspeccionaron visualmente y se contrastaron con sus pruebas locales: `claims-navigation-smoke.cjs`, `analytics-smoke.cjs` y `pa-flow.cjs`. Usuarios QA, clientes ficticios, correos example.com y cantidades de fixtures; no representan operación real. No se reutilizó la captura de calendario con el correo de un empleado.

Siete imágenes WebP de 10–96 KB, sin recorte ni alteración del contenido. Los controles de galería se muestran solo con JavaScript; sin él permanecen todas las capturas. Cada imagen incluye alternativa, procedencia, alcance y enlace para ampliar. Las capturas sustituyen la imagen de evidencia repetida al final y aparecen al principio de la exploración del trabajo.
