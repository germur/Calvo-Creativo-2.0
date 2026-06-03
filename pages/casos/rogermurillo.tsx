import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

export default function CasoRogerMurillo() {
    return (
        <>
            <SeoHead
                title="Caso: de WordPress a Astro + pivote de negocio | Calvo Creativo"
                description="Cómo rehíce rogermurillo.co de una peluquería lenta en WordPress a una firma de consultoría premium en Astro: SEO técnico, vibecoding y herramientas con IA. Rendimiento 96/100."
            />
            <Navigation />

            <main className="min-h-screen bg-paper font-sans pt-20 text-[#0A0A0A]">

                {/* Hero */}
                <section className="px-6 py-16 border-b border-black/10">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/casos" className="text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-[#E11D48] transition-colors">
                            ← Casos de éxito
                        </Link>
                        <div className="inline-block bg-[#E11D48] text-white px-3 py-1 text-xs font-mono uppercase tracking-widest mt-6 mb-4">
                            SEO Técnico · Vibecoding · Estrategia
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-black leading-[0.95] tracking-tighter mb-6">
                            De una peluquería en WordPress a una firma de consultoría premium en Astro
                        </h1>
                        <p className="text-xl text-gray-600 font-light max-w-2xl border-l-4 border-[#E11D48] pl-6">
                            No fue solo cambiar de tecnología. Fue usar SEO técnico y vibecoding para apoyar un giro completo de modelo de negocio: de "corte de pelo" a consultoría de imagen ejecutiva a puerta cerrada.
                        </p>
                        <p className="text-sm text-gray-500 mt-6 font-mono">
                            Cliente: <a href="https://rogermurillo.co" target="_blank" rel="noopener noreferrer" className="text-[#E11D48] hover:underline">rogermurillo.co</a>
                        </p>
                    </div>
                </section>

                {/* El Reto */}
                <section className="px-6 py-16">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-[#E11D48] text-xs font-bold uppercase tracking-[0.2em]">01 · El Reto</span>
                        <h2 className="text-3xl md:text-4xl font-display font-black mt-3 mb-8">Una web que era una trampa, y que contaba la historia equivocada</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Roger Murillo lleva más de 20 años en imagen personal, pero su negocio estaba en plena transformación: dejaba de ser una peluquería tradicional para convertirse en una firma de consultoría de imagen ejecutiva de alto valor, "a puerta cerrada". Atención 1 a 1, agenda limitada, clientes que pagan por privacidad y experticia, no por un corte.
                        </p>

                        <h3 className="text-xl font-bold mt-10 mb-4">El dolor técnico</h3>
                        <ul className="space-y-3 text-gray-700 leading-relaxed">
                            <li>El sitio en <strong>WordPress estaba plagado de bugs y errores</strong> constantes. La raíz: casi todos los plugins eran versiones pirateadas (nulled), que rompían el sitio y abrían huecos de seguridad.</li>
                            <li>El desarrollador original se fue <strong>sin dejar documentación ni explicarle cómo funcionaba</strong> su propia web. Roger estaba atado a una caja negra que no podía operar.</li>
                            <li>Para legalizar y estabilizar todo, había que <strong>comprar las licencias reales de cada plugin</strong>: un costo recurrente elevado solo para que el sitio dejara de fallar. Un dolor de cabeza permanente y caro.</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-10 mb-4">El dolor estratégico</h3>
                        <ul className="space-y-3 text-gray-700 leading-relaxed">
                            <li>La arquitectura mezclaba todo: peluquería de bajo ticket conviviendo con la nueva consultoría premium. El <strong>90% del tráfico</strong> llegaba buscando servicios de salón (corte, peinado, reparación capilar), justo el cliente que el nuevo modelo no quería.</li>
                            <li>Google estaba confundido con señales híbridas, así que no posicionaba ni como peluquería ni como consultoría premium.</li>
                        </ul>
                    </div>
                </section>

                {/* La Solución */}
                <section className="px-6 py-16 bg-white border-y border-black/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-[#E11D48] text-xs font-bold uppercase tracking-[0.2em]">02 · La Solución</span>
                        <h2 className="text-3xl md:text-4xl font-display font-black mt-3 mb-8">Estrategia, SEO técnico y vibecoding trabajando juntos</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-2">1. Cirugía de contenido</h3>
                                <p className="text-gray-700 leading-relaxed">Eliminamos toda la sección de peluquería operativa (el 90% del tráfico, pero con retorno nulo para el modelo premium). En SEO suena contraintuitivo, pero ese tráfico traía leads que preguntaban por precios de corte, no por consultoría. Se redirigió con 301 estratégicos hacia las nuevas landings de asesoría.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">2. Arquitectura de silos por intención</h3>
                                <p className="text-gray-700 leading-relaxed">Separamos de forma estricta las dos intenciones que antes se mezclaban: "quiero aprender" (Academia, cursos, libro) y "quiero que me transformen" (consultoría high-ticket). Así Google, y el usuario, entienden de inmediato qué es cada cosa.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">3. Migración a Astro + React</h3>
                                <p className="text-gray-700 leading-relaxed">Saqué el sitio de WordPress y lo reconstruí a medida en Astro v5 y React. Esto eliminó la deuda técnica de raíz y disparó el rendimiento, además de acabar con la dependencia de plugins de terceros: cero bugs aleatorios, cero huecos de seguridad y cero licencias que pagar.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">4. Herramientas interactivas que la competencia no tiene</h3>
                                <p className="text-gray-700 leading-relaxed">Con vibecoding construí un test de colorimetría con IA (identifica tu estación de color) y una calculadora de visagismo (geometría facial). Ningún competidor del nicho las tiene: son imán de tráfico cualificado y, a la vez, demostración de autoridad técnica.</p>
                            </div>
                        </div>

                        <div className="mt-10 p-6 bg-paper border-l-4 border-[#E11D48]">
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Esto es lo que hago en <Link href="/consultoria/automatizacion-seo-ia" className="text-[#E11D48] hover:underline font-semibold">automatización SEO con IA</Link>: no solo recomendar la estrategia, sino construir las herramientas que la ejecutan. Y todo sobre una base de <Link href="/liner-notes/seo-tecnico-era-ia" className="text-[#E11D48] hover:underline font-semibold">SEO técnico sólido</Link>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* El Resultado */}
                <section className="px-6 py-16">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-[#E11D48] text-xs font-bold uppercase tracking-[0.2em]">03 · El Resultado</span>
                        <h2 className="text-3xl md:text-4xl font-display font-black mt-3 mb-8">Una plataforma premium, rápida y sin ataduras</h2>

                        <ul className="space-y-3 text-gray-700 leading-relaxed mb-12">
                            <li><strong>Cero bugs, cero plugins pirateados, cero licencias que pagar.</strong> Al reconstruir a medida desapareció toda la dependencia de plugins: Roger dejó de pagar por mantener viva una web rota.</li>
                            <li><strong>Una web que sí puede operar</strong>, con una base limpia, sin la caja negra del desarrollador anterior.</li>
                            <li>Una señal de marca <strong>limpia y enfocada</strong>: el sitio ahora habla solo de imagen ejecutiva y consultoría premium.</li>
                            <li><strong>Velocidad de élite</strong> acorde a la experiencia premium que vende.</li>
                        </ul>

                        {/* Por los números */}
                        <h3 className="text-2xl font-display font-black mb-2">Por los números</h3>
                        <p className="text-sm text-gray-500 mb-6">
                            El WordPress original ya no existe, así que el "antes" se mantiene cualitativo a propósito: medir un sitio que ya no está sería inventar. Los números del "después" son reales y verificables en <a href="https://pagespeed.web.dev/analysis?url=https://rogermurillo.co" target="_blank" rel="noopener noreferrer" className="text-[#E11D48] hover:underline">PageSpeed Insights</a>.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-white border border-black/10 p-6 text-center">
                                <div className="text-4xl font-display font-black text-[#E11D48]">96</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Rendimiento</div>
                            </div>
                            <div className="bg-white border border-black/10 p-6 text-center">
                                <div className="text-4xl font-display font-black text-[#E11D48]">100</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">SEO técnico</div>
                            </div>
                            <div className="bg-white border border-black/10 p-6 text-center">
                                <div className="text-4xl font-display font-black text-[#E11D48]">1.2s</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">LCP</div>
                            </div>
                            <div className="bg-white border border-black/10 p-6 text-center">
                                <div className="text-4xl font-display font-black text-[#E11D48]">0</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">CLS</div>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-black/20 text-left">
                                        <th className="py-3 pr-4 font-bold">Métrica</th>
                                        <th className="py-3 px-4 font-bold text-gray-500">Antes (WordPress)</th>
                                        <th className="py-3 pl-4 font-bold text-[#E11D48]">Después (Astro)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/10">
                                    <tr><td className="py-3 pr-4">Rendimiento (Lighthouse)</td><td className="py-3 px-4 text-gray-500">Notablemente lento</td><td className="py-3 pl-4 font-semibold">96 / 100</td></tr>
                                    <tr><td className="py-3 pr-4">Estabilidad</td><td className="py-3 px-4 text-gray-500">Bugs constantes</td><td className="py-3 pl-4 font-semibold">Sin errores</td></tr>
                                    <tr><td className="py-3 pr-4">Stack</td><td className="py-3 px-4 text-gray-500">WordPress</td><td className="py-3 pl-4 font-semibold">Astro v5 + React</td></tr>
                                    <tr><td className="py-3 pr-4">Plugins de terceros</td><td className="py-3 px-4 text-gray-500">Muchos (varios nulled)</td><td className="py-3 pl-4 font-semibold">0</td></tr>
                                    <tr><td className="py-3 pr-4">Costo recurrente de licencias</td><td className="py-3 px-4 text-gray-500">Elevado</td><td className="py-3 pl-4 font-semibold">$0</td></tr>
                                    <tr><td className="py-3 pr-4">Herramientas interactivas</td><td className="py-3 px-4 text-gray-500">0</td><td className="py-3 pl-4 font-semibold">2 (test color + visagismo)</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-6 py-20 bg-[#0A0A0A] text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-6">¿Heredaste una web que se volvió una trampa?</h2>
                        <p className="text-gray-400 mb-8 font-light max-w-xl mx-auto">
                            Si tu sitio está lleno de bugs, atado a plugins que no controlas o cuenta una historia que ya no eres, te saco de esa dependencia y alineo tu presencia digital con tu modelo real.
                        </p>
                        <Link href="/contacto" className="inline-block bg-[#E11D48] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                            Hablemos
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
