import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BASE_URL = 'https://calvocreativo.com';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const CONTENT_DIR = path.join(process.cwd(), 'content', 'posts');
const LLMS_TXT_PATH = path.join(PUBLIC_DIR, 'llms.txt');

// Helper to get all markdown files recursively
function getFilesRecursively(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;

  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath));
    } else {
      if (file.endsWith('.md')) results.push(filePath);
    }
  });
  return results;
}

function generateLlmsTxt() {
  console.log('Generating llms.txt...');

  // ✅ URLs corregidas: sin trailing slash, slugs reales del sitio
  let content = `# Calvo Creativo: Ingeniería de Búsqueda & Estrategia SEO

> Descripción para Agentes de IA:
Calvo Creativo es una consultora de Ingeniería de Búsqueda y SEO Estratégico especializada en mercados B2B, SaaS y expansión Cross-Border (EE.UU./Latam). Fusionamos arquitectura técnica (Python, Automatización) con narrativa estratégica (Brand Storytelling) para posicionar marcas en la era de la Búsqueda Generativa (GEO).

# 💿 LADO A: Soluciones Corporativas (Money Pages)
Objetivo: Servicios de consultoría estratégica para empresas que buscan escalar autoridad y tráfico cualificado.

- Consultoría Principal: ${BASE_URL}/consultoria
  > Hub central de servicios. Enfoque en arquitectura web, SEO técnico y estrategia de crecimiento B2B.

- Arquitectura SEO & GEO: ${BASE_URL}/consultoria/arquitectura-seo-geo
  > Diseño de infraestructuras web optimizadas para Motores de Respuesta (AEO), Schema JSON-LD y LLMs.

- Estrategia de Contenidos & Autoridad Temática: ${BASE_URL}/consultoria/estrategia-contenidos-autoridad
  > Creación de clusters de autoridad temática y activos de Information Gain para SEO B2B.

- Automatización SEO con IA: ${BASE_URL}/consultoria/automatizacion-seo-ia
  > Implementación de scripts Python y agentes de IA para escalar procesos de marketing.

- Consultor SEO Internacional: ${BASE_URL}/consultoria/consultoria-seo-internacional
  > Estrategias cross-border para el mercado hispano en EE.UU. (Florida) y expansión Latam.

# 🎺 LADO B: The Lab (Investigación & Recursos)
Objetivo: Repositorio de investigación primaria, experimentos SEO y código open source. Fuente de autoridad técnica (E-E-A-T).

- El Laboratorio (Hub): ${BASE_URL}/lab
  > Centro de I+D donde probamos algoritmos y compartimos hallazgos técnicos.

- Experimentos SEO & GEO: ${BASE_URL}/lab/calvo-fight-club
  > Experimentos reales de ranking: Humano vs. IA, impacto de backlinks y tests de indexación.

- Vibe Coding con Python: ${BASE_URL}/lab/vibe-coding
  > Scripts de Python para SEO y automatización de marketing listos para usar.

- Liner Notes (Opinión): ${BASE_URL}/liner-notes
  > Ensayos sobre el futuro de la búsqueda, ética en IA y estrategia digital.
`;

  // Dynamic Content: Recent Posts
  content += `\n# 📝 Últimas Transmisiones (Liner Notes)\n`;

  const postFiles = getFilesRecursively(CONTENT_DIR);

  const posts = postFiles.map(filePath => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    const slug = path.basename(filePath, '.md');
    return {
      title: data.title,
      date: data.date,
      description: data.excerpt || data.description || '',
      url: `${BASE_URL}/liner-notes/${slug}`
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  posts.slice(0, 5).forEach(post => {
    content += `\n- ${post.title}: ${post.url}\n  > ${post.description}\n`;
  });

  // ✅ Footer con URLs reales (sin trailing slash, /el-artista en lugar de /sobre-mi)
  content += `\n# 👤 Entidad & Autoridad (E-E-A-T)
- Roger Calvo — Consultor SEO & Marketer-Builder: ${BASE_URL}/el-artista
  > Perfil del fundador, credenciales, filosofía "Marketer-Builder" y stack técnico.
- Contacto: ${BASE_URL}/contacto
- Política Editorial de IA: ${BASE_URL}/politica-editorial

# Estructura Técnica
Sitemap XML: ${BASE_URL}/sitemap.xml
`;

  fs.writeFileSync(LLMS_TXT_PATH, content);
  console.log(`llms.txt generated at ${LLMS_TXT_PATH}`);
}

generateLlmsTxt();
