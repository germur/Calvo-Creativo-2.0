import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import CookieConsent from '@/components/CookieConsent';
import { Anton, Bangers, Outfit, JetBrains_Mono, Newsreader } from 'next/font/google';

const anton = Anton({ weight: "400", subsets: ['latin'], variable: '--font-anton' });
const bangers = Bangers({ weight: "400", subsets: ['latin'], variable: '--font-bangers' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });
const newsreader = Newsreader({ weight: ["400", "600", "700"], style: ["normal", "italic"], subsets: ['latin'], variable: '--font-newsreader' });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${anton.variable} ${bangers.variable} ${outfit.variable} ${jetbrainsMono.variable} ${newsreader.variable} font-body`}>
            <Component {...pageProps} />
            <CookieConsent />

            {/* Google Analytics 4 - Lazy loaded for performance */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-985SWJBWRZ"
                strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-985SWJBWRZ');
                `}
            </Script>

            {/* Microsoft Clarity - Lazy loaded for performance */}
            <Script id="microsoft-clarity" strategy="lazyOnload">
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
