import Head from 'next/head';
// import Image from 'next/image'; // Vecchia importazione
import NextImageModule from 'next/image'; // Importa l'oggetto modulo
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import ThemeToggleButton from './ThemeToggleButton';

const Image = NextImageModule.default; // Accedi al componente effettivo dalla proprietà .default

const name = 'Dario Rosina';
export const siteTitle = 'Lista dei posts - <daros>';

export default function Layout({ children, home }) {
    if (!Image) {
        // Fallback o messaggio di errore se Image.default non fosse definito
        // Anche se dai log sappiamo che dovrebbe esserlo.
        console.error("Componente Image non caricato correttamente!");
        return <div>Errore nel caricamento del layout: Componente Immagine mancante.</div>;
    }
    return (
        <div className={`${styles.container} relative min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors rounded-lg pb-8`}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
                />
                <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle,
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className="absolute top-0 right-0 p-4 z-10"> 
                <ThemeToggleButton />
            </div>
            <header className={`${styles.header} pt-4`}>
                {home ? (
                <>
                    <Image
                    priority
                    src="/images/fotoProfilo.jpg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt="Foto Profilo Dario Rosina"
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
                ) : (
                <>
                    <Link href="/">
                    <Image
                        priority
                        src="/images/fotoProfilo.jpg"
                        className={utilStyles.borderCircle}
                        height={108}
                        width={108}
                        alt="Foto Profilo Dario Rosina"
                    />
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                    <Link href="/" className={utilStyles.colorInherit}>
                        {name}
                    </Link>
                    </h2>
                </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={`${styles.backToHome} pb-8`}>
                <Link href="/">← Back to home</Link>
                </div>
                )}
        </div>
    );
}