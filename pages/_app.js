import '../styles/global.css'
// Rimuovi l'import del tuo ThemeProvider se lo avevi qui
// import { ThemeProvider as MyThemeProvider } from '../contexts/ThemeContext';
import { ThemeProvider } from 'next-themes'; // Importa da next-themes

// console.log('Log da _app.js: Questo dovrebbe apparire nella console del browser.'); // Puoi rimuovere questo log se non serve più

export default function App({ Component, pageProps }) {
    return(
        <ThemeProvider attribute="class"> {/* Avvolgi con ThemeProvider di next-themes */}
            <Component {...pageProps} />
        </ThemeProvider>
    );
}