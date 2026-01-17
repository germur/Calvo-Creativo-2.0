import Link from 'next/link';


const Footer = () => {
    return (
        <footer className="bg-ink text-white pt-20 pb-10 px-8 mt-20 border-t-8 border-primary relative z-10 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* COL 1: IDENTITY */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="size-10 bg-accent border-2 border-white flex items-center justify-center">
                            <span className="material-symbols-outlined text-black font-black">bolt</span>
                        </div>
                        <h2 className="font-display text-2xl uppercase tracking-tighter">Calvo Creativo</h2>
                    </div>
                    <p className="font-mono text-xs text-gray-400 leading-relaxed uppercase">
                        Ingeniería de Búsqueda & Estrategia Digital.<br /><br />
                        Fusionamos la creatividad latina (Salsa) con el rigor técnico (Fight). No hacemos SEO para rellenar espacios, construimos activos digitales que sobreviven a los algoritmos.
                    </p>
                    <div className="flex gap-4 text-xl">
                        <Link href="https://www.linkedin.com/in/rogermur/" target="_blank" className="hover:text-primary transition-colors" aria-label="LinkedIn"><span className="material-symbols-outlined">work</span></Link>
                        <Link href="https://x.com/Rogermu47429637" target="_blank" className="hover:text-primary transition-colors" aria-label="Twitter"><span className="material-symbols-outlined">flutter_dash</span></Link>
                        <Link href="https://github.com/rogermur" target="_blank" className="hover:text-primary transition-colors" aria-label="GitHub"><span className="material-symbols-outlined">code</span></Link>
                    </div>
                </div>

                {/* COL 2: LADO A (BUILD) */}
                <div>
                    <h3 className="font-display text-xl uppercase text-primary mb-6">Construye (Lado A)</h3>
                    <ul className="space-y-3 font-mono text-xs uppercase tracking-wide text-gray-400">
                        <li><Link href="/consultoria" className="hover:text-white transition-colors">Consultoría Estratégica</Link></li>
                        <li><Link href="/consultoria/arquitectura-seo-geo" className="hover:text-white transition-colors">Arquitectura & GEO</Link></li>
                        <li><Link href="/consultoria/consultoria-seo-internacional" className="hover:text-white transition-colors">SEO Internacional (USA/Latam)</Link></li>
                        <li><Link href="/contacto" className="hover:text-white transition-colors">Casos de Éxito</Link></li>
                        <li><Link href="/contacto" className="hover:text-white transition-colors">Auditoría Técnica</Link></li>
                    </ul>
                </div>

                {/* COL 3: LADO B (BREAK) */}
                <div>
                    <h3 className="font-display text-xl uppercase text-acid-green mb-6">Rompe (Lado B)</h3>
                    <ul className="space-y-3 font-mono text-xs uppercase tracking-wide text-gray-400">
                        <li><Link href="/lab" className="hover:text-white transition-colors">El Laboratorio (Hub)</Link></li>
                        <li><Link href="/lab/seo-fight-club" className="hover:text-white transition-colors">SEO Fight Club</Link></li>
                        <li><Link href="/lab/vibe-coding" className="hover:text-white transition-colors">Vibe Coding (Scripts)</Link></li>
                        <li><Link href="/liner-notes" className="hover:text-white transition-colors">Liner Notes (Opinión)</Link></li>
                        <li><Link href="/newsletter" className="hover:text-white transition-colors">Newsletter: The Lab Report</Link></li>
                    </ul>
                </div>

                {/* COL 4: BASE (TRUST) */}
                <div>
                    <h3 className="font-display text-xl uppercase text-white mb-6">Base (Trust)</h3>
                    <ul className="space-y-3 font-mono text-xs text-gray-400">
                        <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">location_on</span>
                            Florida, USA / Latam
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">mail</span>
                            <a href="mailto:hola@calvocreativo.com" className="hover:text-white">hola@calvocreativo.com</a>
                        </li>
                        <li className="pt-4"><Link href="/politica-privacidad" className="hover:text-white underline decoration-dotted">Política de Privacidad</Link></li>
                        <li><Link href="/terminos" className="hover:text-white underline decoration-dotted">Términos de Servicio</Link></li>
                        <li><Link href="/politica-editorial" className="hover:text-white underline decoration-dotted text-primary">Política Editorial de IA</Link></li>
                    </ul>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase text-gray-600">
                <div>
                    © 2026 Calvo Creativo. Todos los derechos reservados.
                </div>
                <div className="flex items-center gap-2">
                    Hecho con Salsa & Python 🐍
                </div>
                <div>
                    <Link href="/public/llms.txt" className="flex items-center gap-1 hover:text-acid-green transition-colors">
                        <span className="material-symbols-outlined text-sm">smart_toy</span> Access for AI Agents: llms.txt
                    </Link>
                </div>
            </div>
            {/* Clarity Disclosure */}
            <div className="max-w-7xl mx-auto px-8 mt-4 text-[9px] text-gray-700 font-mono text-center leading-tight opacity-50">
                Mejoramos nuestros productos y publicidad usando Microsoft Clarity para ver cómo usas nuestro sitio web. Al usar nuestro sitio, aceptas que nosotros y Microsoft podemos recopilar y usar estos datos.
            </div>
        </footer>
    );
};

export default Footer;
