import DefaultImageImport from 'next/image'; // Importa il default come hai fatto finora

console.log('Import di default (DefaultImageImport):', DefaultImageImport);

// Tenta di determinare quale sia il componente corretto
// A volte, con problemi di interoperabilità tra moduli, il componente effettivo potrebbe essere in NextImageModule.default
const ActualImageComponent = DefaultImageImport?.default || DefaultImageImport || NextImageModule?.default;

// Logga quale componente stiamo per usare
console.log('Componente Immagine che verrà usato (ActualImageComponent):', ActualImageComponent);

const TestImagePage = () => {
    // Se ActualImageComponent non è ancora una funzione/componente valido, React darà errore qui.
    // Ma i log sopra dovrebbero darci un'idea del perché.
    if (!ActualImageComponent) {
        return <h1>Errore: il componente Immagine non è stato caricato correttamente dalla proprietà .default</h1>;
    }

    return (
        <div>
            <h1>Test Pagina Immagine</h1>
            <p>Se vedi l'immagine qui sotto, next/image funziona in un contesto minimale.</p>
            <ActualImageComponent
                src="/images/fotoProfilo.jpg" // Usa un'immagine che sai esistere
                alt="Test Image"
                width={200}
                height={200}
            />
        </div>
    );
};

export default TestImagePage;