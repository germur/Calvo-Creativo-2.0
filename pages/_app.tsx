import '@/styles/globals.css';
import type { AppProps } from 'next/app';
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
        </main>
    );
}
