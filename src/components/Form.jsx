import { useState } from 'react';
import titlesData from './List';

export default function Form() {

    // Aggiungiamo lo stato per i titoli
    const [articleTitles, setArticleTitles] = useState(titlesData);

    // Stato per l'input del nuovo titolo da inserire
    const [newArticle, setArticle] = useState('');

    // Funzione per il submit per aggiungere un nuovo titolo
    const handleSubmit = (e) => {

        // Evitiamo che la pagina ricarichi
        e.preventDefault();

        // Se il titolo non è vuoto, lo aggiungiamo
        if (newArticle.trim()) {
            const newTitles = [...articleTitles];
            newTitles.push(newArticle);

            // Aggiorniamo lo stato con il nuovo array
            setArticleTitles(newTitles);

            // Resettiamo l'input dopo l'aggiunta
            setArticle('');
        }
    }

    return (
        <div className="items">
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                            <form className="d-flex" role="search" onSubmit={handleSubmit}>
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Aggiungi titolo"
                                    aria-label="Search"
                                    value={newArticle}
                                    onChange={(e) => setArticle(e.target.value)}
                                />
                                <button className="btn btn-outline-primary" type="submit">
                                    Aggiungi
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="card" style={{ width: "18rem" }}>
                <ul className="list-group list-group-flush">
                    {articleTitles.map((title, index) => (
                        <li className="list-group-item" key={index}>
                            {title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}



