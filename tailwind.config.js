/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2E0F6E',      // Deep Indigo - Headings, Footer, "briella" text
                secondary: '#2563EB',    // Medical Blue - Links, "EYECARE" text
                accent: '#44B846',       // Fresh Green - Buttons, CTAs, eye symbol
                background: '#FFFFFF',   // White
                surface: '#F3F4F6',     // Light Gray
            },
            fontFamily: {
                sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
                display: ['var(--font-playfair)', 'Georgia', 'serif'],
            },
        },
    },
    plugins: [],
};

