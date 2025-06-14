/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            transitionDuration: {
                'DEFAULT': '150ms', // Puoi cambiare il default se necessario
                '300': '300ms', // Assicura che 300ms sia disponibile
                '500': '500ms', // Assicura che 500ms sia disponibile
            }
        },
    },
    plugins: [],
};

module.exports = config;