// pages/404.js
export default function Custom404() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#333'
        }}>
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
            `}</style>
            <h1 style={{ fontSize: '3em', color: '#e74c3c', marginBottom: '0.5em' }}>
                🚧 Oops! Pagina Smarrita 🚧
            </h1>
            <p style={{ fontSize: '1.3em', color: '#555', lineHeight: '1.6' }}>
                Sembra che tu abbia imboccato un vicolo cieco nel nostro labirinto digitale.
                <br />
                La pagina che stavi cercando potrebbe essere stata teletrasportata altrove o forse si è presa una vacanza.
            </p>
            <p style={{ marginTop: '30px', fontSize: '1.1em' }}>
                Niente panico! Puoi sempre ritrovare la strada maestra:
            </p>
            <h2 style={{ marginTop: '20px' }}>
                <a 
                    href="/" 
                    style={{ 
                        color: '#3498db', 
                        textDecoration: 'none', 
                        fontWeight: 'bold',
                        padding: '10px 20px',
                        border: '2px solid #3498db',
                        borderRadius: '5px',
                        transition: 'background-color 0.3s, color 0.3s'
                    }}
                    onMouseOver={(e) => { e.target.style.backgroundColor = '#3498db'; e.target.style.color = '#fff'; }}
                    onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#3498db'; }}
                >
                    🧭 Torna alla Home Page
                </a>
            </h2>
            <p style={{ marginTop: '40px', fontSize: '0.9em', color: '#777' }}>
                Codice di errore: 404 (Pagina non trovata)
            </p>
        </div>
    );
}