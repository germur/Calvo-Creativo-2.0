# Calvo Creativo en Astro

Migración desde Next.js, sin dependencia de Lovable. Conserva las URL, el contenido y la identidad visual. Base original: `831f0672c88f1efa9d6ad36494686b33830c2c65`.

## Trabajar con el sitio

Requiere Node 22.12 o superior; desarrollo y CI se verifican con Node 24.11.1.

```sh
npm ci
npm run dev
```

La vista local se abre en `http://localhost:4321`. Los cambios de este proyecto se hacen en sus archivos y se revisan antes de publicar, sin usar créditos de Lovable.

```sh
npm run check
npm test
npm run build
npm run verify
```

## Dónde editar

- Portada: `src/pages/index.astro`.
- Navegación y footer: `src/components/Navigation.astro`, `Footer.astro`.
- Documento común, fuentes y scripts: `src/layouts/Document.astro`.
- Artículos: `content/posts/*.md`; opinión: `content/opinion/*.md`.
- Páginas comerciales y demás contenido conservado: `src/views/`.
- Herramientas interactivas: `src/islands/`.
- Funciones de servidor: `src/pages/api/` y `src/server/`.
- Reglas antiguas: `public/_redirects` y `netlify/edge-functions/gone.ts`.

Astro controla el enrutamiento y genera HTML estático. Para reducir el riesgo de rehacer todo el diseño a la vez, parte de las plantillas JSX se conserva como vistas React que se ejecutan durante la compilación. No se hidratan en el navegador. `src/site/render.tsx` recoge sus metadatos por página e inserta los componentes Astro comunes y las islas explícitas. React se envía al visitante solo en keywords, ROI y avatar del CV.

Los helpers `Link` e `Image` son componentes propios: no importan Next.js. Las imágenes locales del componente `Image` usan el CDN de imágenes de Netlify con tamaños adaptativos; las originales siguen disponibles. Las imágenes Markdown conservan sus rutas originales.

## Publicación en Netlify

`netlify.toml` declara el comando de compilación y `dist` como directorio público. Se utiliza el adaptador oficial de Astro; el plugin antiguo de Next debe retirarse también de la interfaz de Netlify si fue instalado allí manualmente. No hace falta cambiar dominio ni DNS para esta migración.

Las vistas de ramas y PR llevan `noindex, nofollow` y robots bloqueado. La publicación de producción mantiene los noindex individuales existentes y genera el sitemap desde el HTML realmente construido. El formulario estático auxiliar de detección se conserva.

Antes de unir la rama de migración:

1. Revisar el despliegue de vista previa y sus estados HTTP: 301, 404, 410 y URL sin barra final. Next `permanent:true` se sustituye por 301 explícitos para las equivalencias históricas.
2. Activar/verificar Forms en la cuenta Netlify y comprobar una recepción real de contacto y newsletter. La newsletter recopila solicitudes; no incorpora envíos automáticos ni un proveedor de email marketing.
3. Confirmar las imágenes adaptativas y la imagen de `/api/og` en la vista alojada.
4. Revisar el informe de dependencias y sus avisos pendientes; no aplicar `npm audit fix --force` sin revisar los cambios de versiones mayores.
5. Conservar el despliegue anterior disponible para retorno si una comprobación real falla.

Las funciones Edge no se emulan en `astro dev` por una incompatibilidad del Deno local; las reglas 410 tienen pruebas unitarias y su conexión real al alojamiento debe verificarse en Netlify. Esto no desactiva las funciones Edge de producción.

## Resultados y límites

La [revisión de dependencias](migration/DEPENDENCIAS.md) documenta las correcciones, los overrides y los dos avisos raíz aún sin parche upstream. La auditoría pasó de 22 a 14 avisos (0 moderados); los avisos heredados se concentran en herramientas de construcción y desarrollo.

`migration/validation.json` recoge comprobaciones de canonical, meta, robots, JSON-LD, contenido inicial, anclas, rutas y formularios. No sustituye medir Core Web Vitals ni comprobar los formularios en Netlify.

La API de keywords mantiene el contrato `/api/keywords`, valida entradas, limita concurrencia por instancia, reutiliza resultados y distingue fallos del proveedor de una búsqueda sin resultados. No proporciona cuotas globales entre múltiples instancias; añadir un límite distribuido requeriría infraestructura adicional.

La imagen OG mantiene `/api/og` y sus parámetros title/date/tags, con una plantilla adaptada al generador independiente de Next.
