//FILTRAR.JSX: Permitirá a los usuarios filtrar la lista de contactos

import React from 'react';
import './Filtrar.css';
//Importo libreria FontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//Importo iconos de FontAwesome
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Filtrar = (props) => {
    const { setContactos, contactos, buscar, setScreen, screen, handleInputChange } = props;

    return(
        <>
        <section>
            <div>
                <input type="text" value={screen} onChange={handleInputChange} placeholder="Buscar contacto" className="input-filter" />
                <FontAwesomeIcon className="fa-search" icon={faSearch} />
            </div>
            <div>
                <ul className="ul-filter">
                    {screen && buscar().map((contacts, index) => (
                        <li key={index}>
                            <p className="name">{contacts.nombre}</p>
                            <p>{contacts.email}</p>
                            <p>{contacts.dni}</p>
                            <p>{contacts.direccion}</p>
                            <p>{contacts.celular}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        </>
    )
}

export { Filtrar }