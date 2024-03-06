//LISTA.JSX: Ver lista de contactos y eliminar contactos

import './Lista.css';
//Importo libreria FontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//Importo icono de FontAwesome
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const Lista = (props) => {
    const { contactos, remove} = props;
    return(
        <>
            <div>
                <ul>
                    {contactos.map((contacts, index) => (
                        <li key={index}>
                            <div>
                                {contacts.nombre}{" "}
                                <FontAwesomeIcon className="fa-trash" icon={faTrash} onClick={() => remove(contacts.nombre, contacts.email, contacts.dni, contacts.direccion, contacts.celular)}/>
                            </div>
                            
                            <div>{contacts.email}</div>
                            <div>{contacts.dni}</div>
                            <div>{contacts.direccion}</div>
                            <div>{contacts.celular}</div> 
                        </li>
                    ))}
                </ul>
            </div>
            
        </>
    )
}

export { Lista }

