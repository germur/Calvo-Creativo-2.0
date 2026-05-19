import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="es">
            <Head>
                {/* Material Symbols - Only load the weights/sizes we actually use */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
                />
            </Head>
            <body className="bg-paper text-ink font-body grain-overlay">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
