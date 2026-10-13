# Revisión de identidad, estructura y enlazado

## Correcciones

- Nombre personal: Roger Murillo. Marca: Calvo Creativo. Corregidos biografías, CV, artículos, metadatos, etiquetas accesibles y llms.txt.
- Autor: `/autor/roger-murillo`, canonical y enlaces internos directos. `/autor/roger-calvo` redirige 301 a la nueva URL; se conserva el archivo de fotografía antiguo para no romper recursos existentes.
- Persona, marca y sitio comparten identificadores estables en todas las páginas. Las tres páginas de identidad usan ProfilePage con mainEntity Roger Murillo. Artículos y servicios referencian esa misma persona.
- Eliminados breadcrumbs duplicados en las cuatro consultorías. Su JSON-LD utiliza los mismos destinos que la navegación visible.
- Contacto pasa de ProfessionalService con teléfono vacío y dirección local incompleta a ContactPage enlazada a la marca. No se declara una sede física no confirmada.
- Glosario: autoría en WebPage y definición en mainEntity DefinedTerm. Vibe Coding elimina una propiedad de código fuente que no correspondía a TechArticle.
- Portada, El Artista y newsletter cuentan con main. Todas las páginas tienen un H1; se corrigen saltos de nivel en 26 páginas conservando clases y estilos.
- Las 14 páginas indexables inicialmente inaccesibles desde la portada quedan conectadas desde hubs pertinentes: Lab, Casos, Consultoría y Liner Notes. Corregidos dos enlaces Markdown con barra final que provocaban 301.
- El Artista explica la relación persona/marca y enlaza directamente a casos y contacto. El botón inactivo de newsletter del Lab lleva a la página de suscripción. La fotografía genérica de Contratar se sustituye por el recurso personal existente.
- Eliminada una regla /blog duplicada y las entidades WebSite/Organization redundantes de la portada.

## Comprobación

`npm run verify` incluye `scripts/audit-seo.mjs`: H1/main únicos, títulos distintos, IDs HTML únicos, destinos y anclas internas existentes, enlaces directos, identidad de entidades, propiedades básicas de artículos, breadcrumbs y accesibilidad de páginas indexables desde la portada. `migration/seo-audit.json` conserva el resultado.

Estas comprobaciones no equivalen a una validación exhaustiva del vocabulario Schema.org ni garantizan resultados enriquecidos. La vista previa conserva noindex y bloqueo robots; la comprobación de Google tras publicar debe hacerse sobre producción.

Referencias: [ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page), [Article](https://developers.google.com/search/docs/appearance/structured-data/article) y [políticas de datos estructurados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

## Datos que requieren confirmación editorial

Las cifras de casos, años de experiencia, certificaciones y afirmaciones sobre terceros preexistentes necesitan respaldo del propietario. No se han añadido cifras, direcciones o valoraciones nuevas. Las páginas de ciudades e industrias conservan su noindex; habilitarlas requiere revisar su contenido específico.
