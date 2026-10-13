# Revisión de dependencias — 12 de octubre de 2026

Auditoría npm: **22 → 14 avisos**, de 7 moderados y 15 altos a **0 moderados y 14 altos**. Los avisos incluyen paquetes que heredan el problema de una dependencia; quedan **dos vulnerabilidades raíz**.

## Correcciones aplicadas

- Sustituido `gray-matter` y su cadena antigua de YAML/argparse/sprintf-js por `yaml@2.9.1`. Comparación de los seis archivos Markdown: metadatos y contenido conservados exactamente. El lector solo admite frontmatter YAML, limita expansión de alias y rechaza formatos inválidos.
- `postcss-selector-parser@7.1.6` fijado mediante override compatible con las llamadas utilizadas por Tailwind 3, typography y postcss-nested. Corrige el aviso de complejidad cuadrática. La compilación y la vista previa verifican su uso.
- Todas las copias de `sharp` unificadas en `0.35.5`, incluida la dependencia de IPX usada para imágenes en desarrollo. Corrige los avisos heredados de libvips/libheif/librsvg. No cambia el CDN de imágenes de Netlify en producción.

## Avisos que siguen pendientes

| Componente | Problema y fuente | Uso en este proyecto | Decisión |
| --- | --- | --- | --- |
| braces 3.0.3 | Agotamiento de pila con patrones profundamente anidados; [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). No hay versión corregida publicada. | Selección de archivos de Tailwind y herramientas de construcción/desarrollo de Netlify. No se utiliza para procesar consultas del visitante. | Conservar temporalmente, con patrones controlados por el repositorio; pendiente del parche upstream. |
| node-forge 1.4.0 | Validación incorrecta de firmas RSA; [GHSA-86w9-cpqp-85rv](https://github.com/advisories/GHSA-86w9-cpqp-85rv). No hay versión corregida publicada. | Dependencia de listhen/IPX para el servidor de imágenes de desarrollo de Netlify. El sitio no implementa autenticación o validación de firmas con esta librería. | Conservar temporalmente para desarrollo local; pendiente del parche upstream. |

No se aplicó `npm audit fix --force`: propone bajar el adaptador Netlify a una versión mayor antigua o migrar Tailwind completo, y esas sugerencias no garantizan eliminar los dos componentes sin parche. La revisión no equivale a una auditoría de seguridad exhaustiva ni a declarar cero riesgo.

Reproducir: `npm ci`, `npm audit`, `npm run check`, `npm test`, `npm run build`, `npm run verify`. El lockfile conserva las versiones y los overrides explícitos para que CI y Netlify usen la misma instalación.
