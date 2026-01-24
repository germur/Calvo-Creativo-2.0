import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import CookieConsent from '@/components/CookieConsent';
import { Anton, Bangers, Outfit, JetBrains_Mono } from 'next/font/google';

const anton = Anton({ weight: "400", subsets: ['latin'], variable: '--font-anton' });
const bangers = Bangers({ weight: "400", subsets: ['latin'], variable: '--font-bangers' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${anton.variable} ${bangers.variable} ${outfit.variable} ${jetbrainsMono.variable} font-body`}>
            <Component {...pageProps} />
            <CookieConsent />

            {/* Google Analytics 4 - Deferred for performance */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-GF57274CF0"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-GF57274CF0');
                `}
            </Script>

            {/* Google AdSense - Lazy loaded */}
            <Script
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1504078455666002"
                strategy="lazyOnload"
                crossOrigin="anonymous"
            />

            {/* Microsoft Clarity - Deferred for performance */}
            <Script id="microsoft-clarity" strategy="afterInteractive">
                {`
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "v2v2171aj3");
                `}
            </Script>
        </main>
    );
}
