import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { trackEvent } from '@/lib/analytics';

export default function Contacto() {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Calvo Creativo",
        "image": "https://calvocreativo.com/images/logo.png",
        "url": "https://calvocreativo.com",
        "telephone": "",
        "email": "hola@calvocreativo.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Miami",
            "addressRegion": "FL",
            "addressCountry": "US"
        },
        "areaServed": ["US", "FL", "Latin America"],
        "priceRange": "$$$"
    };

    return (
        <div className="min-h-screen flex flex-col bg-paper font-sans selection:bg-red-600 selection:text-white">
            <Head>
                <title>Contacto Calvo Creativo | Hablemos Sin Pelos en la Lengua</title>
                <meta name="description" content="¿Listo para dejar de perseguir algoritmos? Agenda una sesión de ingeniería de búsqueda. Sin intermediarios, sin humo, y con mucha estrategia." />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
                />
            </Head>

            <Navigation />

            <main className="flex-grow pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* LEFT: THE HOOK & FILTER */}
                <div>
                    <header className="mb-12">
                        <div className="inline-block bg-black text-white px-3 py-1 text-xs font-mono uppercase tracking-widest mb-6 -rotate-1 border-2 border-transparent">
                            La Línea Directa (No BS Zone)
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-black uppercase leading-none mb-8">
                            Sin pelo en<br />la cabeza.<br />
                            <span className="text-red-600">Sin pelos en<br />la lengua.</span>
                        </h1>
                    </header>

                    <div className="prose prose-lg prose-p:font-sans text-gray-800 mb-12">
                        <p className="font-bold text-xl">
                            ¿Buscas a alguien que te diga lo que quieres oír? Cierra esta pestaña.
                        </p>
                        <p>
                            Hay muchas agencias que te venderán "hacks" mágicos. Aquí combinamos la <strong>Salsa</strong> (creatividad que conecta) con el <strong>Fight</strong> (datos que noquean).
                        </p>
                        <p>
                            Si estás listo para construir una estrategia de búsqueda que sobreviva a la IA, domine tu nicho y genere ingresos (no solo tráfico vanidoso), entonces estamos en la misma frecuencia.
                        </p>
                    </div>

                    {/* THE FILTER (ANTI-PERSONA) */}
                    <div className="bg-gray-100 p-8 border-l-4 border-black mb-12">
                        <h3 className="font-display font-bold uppercase text-xl mb-4">🚫 No soy para ti si:</h3>
                        <ul className="space-y-2 font-mono text-sm text-gray-600">
                            <li>1. Buscas "SEO barato". (La ingeniería cuesta menos que la ignorancia, pero requiere inversión).</li>
                            <li>2. Necesitas resultados "para ayer". (La autoridad real se cocina a fuego lento).</li>
                            <li>3. No crees en los datos. (Aquí las opiniones sin datos son solo ruido).</li>
                        </ul>
                    </div>

                    {/* CONTACT INFO */}
                    <div className="border-t-4 border-black pt-8">
                        <h2 className="font-display font-bold uppercase text-2xl mb-4">Coordenadas</h2>
                        <ul className="space-y-2 font-mono text-sm">
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined">location_on</span>
                                Bogota / Medellin
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined">mail</span>
                                <a href="mailto:rogermur1990@gmail.com" className="hover:text-red-600 underline decoration-wavy">rogermur1990@gmail.com</a>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <a href="https://www.linkedin.com/in/rogermur/" target="_blank" className="text-black hover:text-red-600 font-bold uppercase text-xs tracking-widest border-2 border-black px-2 py-1 hover:bg-black hover:text-white transition-all">LinkedIn</a>
                            <a href="https://github.com/rogermur" target="_blank" className="text-black hover:text-red-600 font-bold uppercase text-xs tracking-widest border-2 border-black px-2 py-1 hover:bg-black hover:text-white transition-all">GitHub</a>
                        </div>
                    </div>
                </div>

                {/* RIGHT: THE FORM */}
                <div className="relative">
                    <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[16px_16px_0px_#dc2626] sticky top-32">
                        <h2 className="font-display font-black uppercase text-3xl mb-8 flex items-center gap-3">
                            <span className="material-symbols-outlined text-4xl">assignment</span>
                            Misión Briefing
                        </h2>

                        <form
                            name="contact"
                            method="POST"
                            className="space-y-6"
                            onSubmit={() => trackEvent('submit_contact_form', 'Conversion', 'Contact Page Form')}
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <div>
                                <label className="block font-mono text-xs font-bold uppercase mb-2">Nombre / Comandante</label>
                                <input type="text" name="name" placeholder="¿Quién eres?" className="w-full bg-gray-50 border-2 border-black px-4 py-3 font-mono focus:outline-none focus:bg-white focus:border-red-600 transition-colors" required />
                            </div>

                            <div>
                                <label className="block font-mono text-xs font-bold uppercase mb-2">Web / Base de Operaciones</label>
                                <input type="url" name="website" placeholder="https://..." className="w-full bg-gray-50 border-2 border-black px-4 py-3 font-mono focus:outline-none focus:bg-white focus:border-red-600 transition-colors" required />
                            </div>

                            <div>
                                <label className="block font-mono text-xs font-bold uppercase mb-2">¿Dónde te duele más?</label>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-3 p-3 border-2 border-gray-200 hover:border-black cursor-pointer transition-colors bg-white">
                                        <input type="radio" name="pain" value="traffic" className="text-red-600 focus:ring-red-600" />
                                        <span className="font-sans text-sm font-medium">Nadie encuentra mi web (Necesito Tráfico)</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-3 border-2 border-gray-200 hover:border-black cursor-pointer transition-colors bg-white">
                                        <input type="radio" name="pain" value="conversion" className="text-red-600 focus:ring-red-600" />
                                        <span className="font-sans text-sm font-medium">Tengo tráfico pero no vendo (Necesito Conversión)</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-3 border-2 border-gray-200 hover:border-black cursor-pointer transition-colors bg-white">
                                        <input type="radio" name="pain" value="geo" className="text-red-600 focus:ring-red-600" />
                                        <span className="font-sans text-sm font-medium">La IA me está comiendo (Necesito GEO)</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-3 border-2 border-gray-200 hover:border-black cursor-pointer transition-colors bg-white">
                                        <input type="radio" name="pain" value="collab" className="text-red-600 focus:ring-red-600" />
                                        <span className="font-sans text-sm font-medium">Solo quiero saludar / Colaborar (Lado B)</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-3 border-2 border-gray-200 hover:border-black cursor-pointer transition-colors bg-white">
                                        <input type="radio" name="pain" value="miguel" className="text-red-600 focus:ring-red-600" />
                                        <span className="font-sans text-sm font-medium">Ayyy Miguel, Migueel</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block font-mono text-xs font-bold uppercase mb-2">Informe de Situación (Sin Filtros)</label>
                                <textarea name="message" rows={4} placeholder="Cuéntame el problema real. Prometo leerlo yo, no un bot." className="w-full bg-gray-50 border-2 border-black px-4 py-3 font-mono focus:outline-none focus:bg-white focus:border-red-600 transition-colors" required></textarea>
                            </div>

                            <button type="submit" className="w-full bg-black text-white font-display uppercase text-2xl py-4 hover:bg-neutral-800 transition-colors flex items-center justify-center gap-3">
                                Lanzar Señal <span className="text-red-500">🚀</span>
                            </button>
                        </form>
                    </div>

                    {/* ALTERNATIVE FOR NON-CLIENTS */}
                    <div className="mt-8 text-center bg-gray-100 p-6 border-2 border-dashed border-gray-300">
                        <h4 className="font-bold uppercase text-sm mb-2">¿Solo estás mirando?</h4>
                        <p className="text-xs text-gray-600 mb-4">
                            Si te gusta la estrategia y romper algoritmos, únete a mi lista privada en el Lado B.
                        </p>
                        <Link href="/liner-notes" className="text-xs font-bold uppercase underline decoration-2 decoration-red-600 hover:text-red-600">
                            Suscribirse a Liner Notes →
                        </Link>
                    </div>
                </div>
            </main>

            {/* Hidden Link for AI Agents (GEO Strategy) */}
            <div className="opacity-0 w-0 h-0 overflow-hidden">
                <Link href="/public/llms.txt">AI Context</Link>
            </div>

            <Footer />
        </div>
    );
}
