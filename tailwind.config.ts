import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Calvo Fighter (Global)
                // Calvo Fighter (Global)
                primary: "#E11D48", // Red Rose
                secondary: "#0F172A", // Slate 900
                accent: "#FACC15", // Yellow
                paper: "#F8F5F0", // Off-White
                ink: "#0A0A0A", // Almost Black

                // Calvo Aesthetics (Lado B / Acid)
                'acid-green': '#ccff00',
                'acid-orange': '#ff6b35',
                'acid-purple': '#8b5cf6',
                'acid-pink': '#f4258c', // User's requested primary for Lado B
                'dark-purple': '#2e1065',

                // Lado A (Legacy/Arqueólogo)
                gold: "#f4c025",
                "gold-dark": "#b38605",
                "stone-dark": "#181611",
                "stone-light": "#27241b",
                "stone-lighter": "#393528",
                parchment: "#bab29c",
                "background-dark": "#12100c",
            },
            fontFamily: {
                display: ['Anton', 'sans-serif'],
                body: ['Outfit', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                punch: ['Bangers', 'cursive'],
                // Fallbacks for legacy components if needed
                sans: ['Outfit', 'sans-serif'],
            },
            boxShadow: {
                'brutal': '8px 8px 0px 0px #0A0A0A',
                'brutal-sm': '4px 4px 0px 0px #0A0A0A',
                'brutal-hover': '12px 12px 0px 0px #0A0A0A',
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "blob": "blob 10s infinite",
                "float": "float 6s ease-in-out infinite",
                "float-delayed": "float 8s ease-in-out infinite 2s",
                "spin-reverse": "spin 15s linear infinite reverse",
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
