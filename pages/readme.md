# Per lanciare ambiente di sviluppo:

> npm run dev

[Apri Sito NextJS](http://localhost:3000/)

# Pages:

Ogni file nella cartella pages rappresenta una pagina dell'applicazione.
export default identifica il componente React principale della pagina dell'applicazione

### _app.js

importa il foglio di stile globale usato da tutte le pagine
App è il suo componente React principale
(viene eseguito per tutte le pagine dell'applicazione in Next.js)

### index.js

è l'home page
Home è il suo componente React principale

il componente _app.js potrebbe recuperare i dati necessari dal server e passarli al componente Home come props.