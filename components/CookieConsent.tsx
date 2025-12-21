import { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('calvo-cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('calvo-cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 flex justify-center pointer-events-none">
            <div className="bg-[#120810] border border-[#f4258c] p-6 max-w-2xl w-full shadow-[0_0_30px_rgba(244,37,140,0.2)] pointer-events-auto relative overflow-hidden group">
                {/* Acid decorative elements */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#f4258c]"></div>
                <div className="absolute -right-4 -top-4 w-12 h-12 bg-[#ccff00] rounded-full blur-xl opacity-20"></div>

                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between relative z-10">
                    <div className="space-y-2">
                        <h4 className="text-[#f4258c] font-black uppercase tracking-widest text-sm font-mono flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">cookie</span>
                            System Alert
                        </h4>
                        <p className="text-white/80 text-sm font-mono leading-relaxed max-w-md">
                            Usamos cookies para trackear cómo consumes este contenido y mejorar nuestros experimentos. Sin datos no hay "Science".
                        </p>
                        <div className="flex gap-4 text-[10px] uppercase tracking-widest text-white/40">
                            <Link href="/politica-privacidad" className="hover:text-white transition-colors border-b border-transparent hover:border-white">Privacidad</Link>
                            <Link href="/politica-editorial" className="hover:text-white transition-colors border-b border-transparent hover:border-white">Ética IA</Link>
                        </div>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto">
                        <button
                            onClick={acceptCookies}
                            className="flex-1 md:flex-none bg-[#f4258c] hover:bg-[#d91b76] text-white px-6 py-3 font-bold uppercase tracking-widest text-xs transition-all hover:translate-x-1 border border-transparent"
                        >
                            Aceptar_
                        </button>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="flex-1 md:flex-none px-6 py-3 text-white/60 hover:text-white font-mono text-xs uppercase tracking-widest border border-white/20 hover:border-white transition-colors"
                        >
                            Ignorar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
