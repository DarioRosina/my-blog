import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const ThemeToggleButton = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    // useEffect si assicura che il codice venga eseguito solo sul client
    // Questo è necessario per evitare problemi di hydration mismatch con il tema
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // O un placeholder/spinner
    }

    // A volte `theme` può essere 'system', `resolvedTheme` darà 'light' o 'dark'
    const currentTheme = theme === 'system' ? resolvedTheme : theme;

    return (
        <button
            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle Dark Mode"
            type="button"
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" // Aggiungi stili a piacere
        >
            {currentTheme === 'dark' ? (
                // Icona per tema chiaro (es. Sole)
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="12" y1="2.25" x2="12" y2="4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="12" y1="19.5" x2="12" y2="21.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="2.25" y1="12" x2="4.5" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="19.5" y1="12" x2="21.75" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="5.106" y1="5.106" x2="6.774" y2="6.774" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="17.226" y1="17.226" x2="18.894" y2="18.894" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="17.226" y1="6.774" x2="18.894" y2="5.106" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="5.106" y1="18.894" x2="6.774" y2="17.226" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            ) : (
                // Icona per tema scuro (es. Luna)
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-3.51 1.713-6.636 4.362-8.467a.75.75 0 01.819.162z" clipRule="evenodd" />
                </svg>
            )}
        </button>
    );
};

export default ThemeToggleButton;