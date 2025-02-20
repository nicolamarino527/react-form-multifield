# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


__________________________________________

Milestone 1
Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.

Milestone 2
Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.

BONUS
Aggiungere la possibilità di cancellare ciascun articolo utilizzando un’icona;
passare da array di stringhe a array di oggetti post (ogni post ha id e title), cercando di gestirli per poi per id, invece di appoggiarsi all’index dell’elemento nell’array.

__________________________________________

Esercizio
Ampliare l’esercizio precedente aggiungendo, nel form, il campo autore, contenuto ed un campo per una categoria.
Quindi ogni post ha le seguenti proprietà: id, titolo, autore, contenuto, categoria.

BONUS:
Aggiungere un campo checkbox “Pubblicato” (che indica se l’articolo debba essere visibile o meno);
resettare i campi del form ad ogni invio;
gestire la possibililtà che non ci siano post (sia inizialmente che, perchè l’utente li ha cancellati uno ad uno).

