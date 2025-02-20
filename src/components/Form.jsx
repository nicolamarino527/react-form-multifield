import { useState } from 'react';
import titlesData from './List';

export default function Form() {
    //costante per la gestione dei dati dell'aray di oggetti
    const [titles, setTitles] = useState(titlesData);



    // inizzializziamo il contenuto di form data
    const initialFormData = {
        title: '',
        author: '',
        category: '',
        content: '',
    }
    // costante per la gestione de input del form
    const [formData, setFormData] = useState(initialFormData);

    // creiamo la funzione aggiornare al cambiamento dei dati tramite imput
    const handleImputChange = (e) => {
        // settiamo un target al nome e valore all input del form
        const { name, value } = e.target

        // aggiorniamo lo stato dei dati del 
        setFormData({
            ...formData,
            [name]: value,
        })

        // funzione per prevenire che la pagina ricarichi 
        const handleSubmit = (e) => {
            e.preventDefault();

        }


        return (
            <div >
                <h1 className='header  text-white '>Articoli pagina</h1>
                <div className='cards'>
                    {titles.map((title) => (
                        <div className="card d-block" style={{ width: '18rem', backgroundColor: '#f8f9fa', border: '1px solid #ccc' }}>
                            <div className="card-body p-3" key={title.id}>
                                <h5 className="card-title text-primary">"{title.title}"</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Autore: {title.author}</h6>
                                <p className="card-text text-dark">{title.category}</p>
                                <p className="card-text text-dark">{title.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* form */}
                <div className='form'>
                    <form className="row g-3 p-4">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label text-white">Titolo</label>
                            <input type="title" className="form-control" id="inputEmail4" placeholder="Inserisci il titolo del tuo articolo" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label text-white">Autore</label>
                            <input type="author" className="form-control" id="inputPassword4" placeholder="Inserisci il nome dell'autore" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label text-white">Categoria</label>
                            <input type="category" className="form-control" id="inputAddress" placeholder="Descrivi la categoria di cui tratta il tuo articolo" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label text-white">Contenuto</label>
                            <input type="content" className="form-control" id="inputAddress2" placeholder="Scrivi qui il contenuto" />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label  text-white" htmlFor="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

