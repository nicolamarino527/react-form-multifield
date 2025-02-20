import { useState } from 'react';
import titles from './List';

export default function Form() {
    return (
        <div className='items'>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label text-white">Titolo</label>
                    <input type="title" className="form-control" id="inputEmail4" placeholder="Inserisci il titolo del tuo articolo" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label text-white">Autore</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Inserisci il nome dell'autore" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label text-white">Category</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Descrivi la categoria di cui tratta il tuo articolo" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label text-white">Content</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Scrivi qui il contenuto" />
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
    )
}



