import React from 'react';

interface SpotifyWidgetProps {
    url: string;
    title?: string;
    subtitle?: string;
    theme?: 'salsa' | 'rap' | 'acid' | 'default';
}

const SpotifyWidget = ({
    url = "https://open.spotify.com/embed/playlist/1Oes14Ipbh8KQc2BlxNWEl?utm_source=generator&theme=0",
    title = "Now Playing",
    subtitle = "Lo que escucho mientras posiciono",
    theme = 'default'
}: SpotifyWidgetProps) => {

    // Theme configurations
    const themes = {
        salsa: {
            bg: 'bg-[#1DB954]', // Spotify Green
            border: 'border-ink', // Black
            text: 'text-ink',
            accent: 'bg-ink text-paper'
        },
        rap: {
            bg: 'bg-yellow-500', // Wu-Tang / Biggie Yellow
            border: 'border-black',
            text: 'text-black',
            accent: 'bg-black text-white'
        },
        acid: {
            bg: 'bg-[#ccff00]', // Calvo Lab Acid
            border: 'border-white/20',
            text: 'text-black',
            accent: 'bg-black text-[#ccff00]'
        },
        default: {
            bg: 'bg-[#1DB954]',
            border: 'border-black',
            text: 'text-black',
            accent: 'bg-black text-white'
        }
    };

    const currentTheme = themes[theme] || themes.default;

    return (
        <div className={`border-4 ${currentTheme.border} ${currentTheme.bg} p-2 shadow-brutal transform rotate-1 hover:rotate-0 transition-transform duration-300`}>
            <div className={`${currentTheme.accent} px-4 py-2 font-mono text-xs uppercase font-bold mb-2 flex justify-between items-center`}>
                <span>{title}</span>
                <span className="material-symbols-outlined text-sm animate-pulse">equalizer</span>
            </div>
            <div className="bg-black">
                <iframe
                    style={{ borderRadius: '0px' }}
                    src={url}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Spotify Playlist"
                ></iframe>
            </div>
            <div className={`mt-2 text-center font-display ${currentTheme.text} uppercase text-xl leading-none tracking-tighter mix-blend-multiply`}>
                "{subtitle}"
            </div>
        </div>
    );
};

export default SpotifyWidget;
