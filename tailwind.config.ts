import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                headline: ['Anton', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
                title: ['Shrikhand', 'cursive'],
                lexend: ['Lexend', 'sans-serif'],
            },
            colors: {
                primary: '#f9f506',
                danger: '#f20d0d',
                background: '#0a0a09',
                card: '#181811',
                border: '#3a3927',
                paper: '#f4ecd8',
                ink: '#2a1e1e',
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-soft': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
