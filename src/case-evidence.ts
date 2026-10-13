export const caseEvidence = {
  'rogermurillo': {
    title: 'La reconstrucción, a la vista.',
    intro: 'Compara la web archivada con la experiencia actual. El cambio también está en la base: rendimiento, arquitectura y SEO técnico.',
    note: 'Wayback conserva una versión parcial: algunos recursos no cargan. Los huecos de esta reproducción no demuestran cómo cargaba la web original ni sirven para medir su velocidad.',
    views: [
      {label:'Antes · WordPress',title:'Una instalación que había que reconstruir',image:'/images/case-roger-before.webp',width:1280,height:868,alt:'Web de Roger Murillo reproducida por Wayback Machine, enero de 2025, con recursos incompletos',caption:'Archivo histórico · 25 enero 2025 · Reproducción parcial',source:'https://web.archive.org/web/20250125211143/https://rogermurillo.co/',sourceLabel:'Consultar la captura de Wayback',text:'El punto de partida acumulaba plugins problemáticos, errores y lentitud, según el responsable del proyecto. Había que ordenar la oferta y recuperar el control de la web.'},
      {label:'Después · Astro',title:'Una marca profesional con una arquitectura propia',image:'/images/case-roger-after.webp',width:1280,height:868,alt:'Portada actual de Roger Murillo con la propuesta de consultoría de imagen y navegación de servicios, academia y herramientas',caption:'Web actual · 13 octubre 2026',source:'https://rogermurillo.co/',sourceLabel:'Explorar la web actual',text:'Servicios, academia, contenidos y herramientas tienen recorridos propios. La reconstrucción conecta el trabajo de rendimiento y SEO con una oferta que se entiende y se puede contratar.'},
    ],
  },
  'prendaautos': {
    title: 'De mostrar servicios a resolver una necesidad.',
    intro: 'La misma empresa, dos experiencias. Prestaya era la web anterior de esta clienta; hoy Prendautos explica la oferta y acerca la solicitud al primer contacto.',
    note: 'El antecedente Prestaya fue confirmado por el responsable del proyecto. Wayback puede omitir imágenes, fuentes o funciones: una reproducción histórica no es una medición de rendimiento.',
    views: [
      {label:'Antes · Prestaya',title:'Una oferta concentrada en un listado de servicios',image:'/images/case-prendautos-before.webp',width:1280,height:868,alt:'Web antigua de Prestaya con servicios de préstamos y llamadas a teléfono, archivada en julio de 2025',caption:'Archivo histórico · prestaya.com.co · 11 julio 2025',source:'https://web.archive.org/web/20250711192026/https://www.prestaya.com.co/',sourceLabel:'Consultar la captura de Wayback',text:'La portada enumeraba distintas opciones de dinero inmediato. El rediseño debía explicar mejor la garantía vehicular, el proceso y las razones para confiar.'},
      {label:'Después · Prendautos',title:'Oferta clara y un siguiente paso visible',image:'/images/case-prendautos-after.webp',width:1265,height:712,alt:'Portada renovada de Prendautos con propuesta de préstamos sobre vehículos y formulario de solicitud junto al mensaje principal',caption:'Web actual · prendautos.com · 13 octubre 2026',source:'https://prendautos.com/',sourceLabel:'Explorar la web actual',text:'La propuesta principal explica qué obtiene la persona y cómo funciona. El formulario recoge los datos del vehículo; los recorridos de carros y motos tienen páginas específicas.'},
    ],
  },
  'all-claims': {
    title: 'El CRM que construimos para trabajar.',
    intro: 'Pantallas reales del producto, con datos ficticios. Explora cómo el equipo consulta reclamaciones, detecta pendientes y revisa contratos.',
    note: 'Todas las cantidades, nombres, correos y valores mostrados pertenecen a pruebas. No representan clientes, ingresos ni volumen de operación. Contratos: revisión en beta, sin envío real para firma.',
    views: [
      {label:'Reclamaciones',title:'El expediente tiene un lugar propio',image:'/images/case-crm-claims.webp',width:1280,height:900,alt:'Interfaz real del CRM con listado de reclamaciones por estado y clientes ficticios de prueba',caption:'Interfaz real · Vista por estado · Datos de prueba',source:'',sourceLabel:'',text:'Los listados, filtros y detalles reúnen el contexto de cada reclamación. El equipo puede consultar el caso sin reconstruirlo entre hojas de cálculo y carpetas.'},
      {label:'Panel de operación',title:'Ver qué está pasando y qué necesita atención',image:'/images/case-crm-analytics.webp',width:1280,height:889,alt:'Panel real del CRM con indicadores y etapas de reclamaciones, utilizando cifras de prueba',caption:'Interfaz real · Panel de operación · Cifras ficticias',source:'',sourceLabel:'',text:'El panel conecta estados, etapas y seguimientos. Sus indicadores son entradas para revisar el trabajo; las cifras de esta captura solo muestran cómo funciona la interfaz.'},
      {label:'Contratos',title:'Del intake a la revisión del documento',image:'/images/case-crm-contract.webp',width:1280,height:900,alt:'Pantalla real de revisión de contrato de Florida en beta, con cliente y firmantes ficticios',caption:'Interfaz real · Intake y contratos en beta · Sin envío real',source:'',sourceLabel:'',text:'La información se completa por secciones. El equipo revisa el documento correspondiente y quiénes firmarían, y puede volver a corregir datos antes de continuar.'},
    ],
  },
  'german-montenegro': {
    title: 'La arquitectura también se puede recorrer.',
    intro: 'La web real conecta fisioterapia deportiva, zonas del cuerpo y páginas que responden a necesidades concretas.',
    note: '',
    views: [
      {label:'La web real',title:'Una experiencia construida alrededor del paciente',image:'/images/case-german-web.jpg',width:1272,height:920,alt:'Captura real de la web de Germán Montenegro, fisioterapeuta deportivo en Bogotá',caption:'Web pública · Captura de octubre de 2026',source:'https://germanmontenegro.fit/',sourceLabel:'Explorar la experiencia real',text:'El mapa de búsquedas organiza las entradas por lesión, deporte y tratamiento. El cuerpo interactivo ofrece otra forma de descubrir ese contenido.'},
    ],
  },
} as const;
