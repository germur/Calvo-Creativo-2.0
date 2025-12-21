import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PoliticaPrivacidad() {
    return (
        <div className="min-h-screen flex flex-col bg-paper font-sans">
            <Head>
                <title>Política de Privacidad | Calvo Creativo</title>
                <meta name="description" content="Información legal sobre cómo gestionamos los datos, cookies y privacidad en Calvo Creativo." />
                <meta name="robots" content="noindex" />
            </Head>

            <Navigation />

            <main className="flex-grow pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto w-full">
                <header className="mb-12 border-b-4 border-black pb-8">
                    <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2 block">Legal Compliance</span>
                    <h1 className="text-4xl md:text-5xl font-display font-black uppercase mb-6">Política de Privacidad</h1>
                    <p className="text-gray-600 font-mono text-sm">Última actualización: Diciembre 2024</p>
                </header>

                <div className="prose prose-sm prose-gray max-w-none">
                    <p>
                        En Calvo Creativo, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política describe cómo recopilamos, usamos y protegemos su información.
                    </p>

                    <h3>1. Recopilación de Datos</h3>
                    <p>Recopilamos información que usted nos proporciona voluntariamente, como su nombre, correo electrónico y detalles del mensaje cuando se pone en contacto con nosotros o se suscribe a nuestro boletín. También usamos cookies técnicas para el funcionamiento del sitio.</p>

                    <h3>2. Uso de la Información</h3>
                    <p>Usamos sus datos para:</p>
                    <ul>
                        <li>Responder a sus consultas de servicios.</li>
                        <li>Enviar el boletín "Lab Report" (solo si se ha suscrito explícitamente).</li>
                        <li>Mejorar la funcionalidad del sitio web.</li>
                    </ul>

                    <h3>3. Cookies y Rastreo</h3>
                    <p>Utilizamos cookies esenciales para la navegación. No vendemos sus datos a terceros. Utilizamos Google Analytics de forma anonimizada para entender el tráfico general.</p>

                    <h3>4. Sus Derechos</h3>
                    <p>Usted tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier momento. Para ejercer estos derechos, contáctenos en roger@calvocreativo.com.</p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
