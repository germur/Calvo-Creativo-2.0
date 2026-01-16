import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="es">
            <Head>
                {/* Google Analytics 4 */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-GF57274CF0"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-GF57274CF0');
                        `,
                    }}
                />
                {/* Google Adsense */}
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1504078455666002" crossOrigin="anonymous"></script>
            </Head>
            <body className="bg-paper text-ink font-body grain-overlay">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
