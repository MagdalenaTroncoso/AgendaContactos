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
            <div className='cont-input-busqueda'>
                <input type="text" value={screen} onChange={handleInputChange} placeholder="Buscar contacto" className="input-filter" />
                <FontAwesomeIcon className="fa-search" icon={faSearch} />
            </div>

            <div className='cont-busqueda'>
                <ul className="ul-filter">
                    {screen && buscar().map((contacts, index) => (
                        <li key={index}>
                            <p className="name">Nombre y apellido: {contacts.nombre}</p>
                            <p>Email: {contacts.email}</p>
                            <p>DNI: {contacts.dni}</p>
                            <p>Direccion: {contacts.direccion}</p>
                            <p>Cel: {contacts.celular}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        </>
    )
}

export { Filtrar }