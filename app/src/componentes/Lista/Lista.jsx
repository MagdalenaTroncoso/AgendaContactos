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
            <div className='container-lista'>
                <ol>
                    {contactos.map((contacts, index) => (
                        <li key={index}>
                            <div>
                                <p>Nombre y apellido: </p>
                                {contacts.nombre}{" "}
                            </div>
                            
                            <div>
                                <p>Email: </p>
                                {contacts.email}
                            </div>

                            <div>
                                <p>DNI: </p>
                                {contacts.dni}
                            </div>

                            <div>
                                <p>Direccion:         </p>
                                {contacts.direccion}
                            </div>

                            <div className='cont-cel'>
                                <span>
                                    <p>Cel: </p>
                                    {contacts.celular}
                                </span>
                                <FontAwesomeIcon className="fa-trash" icon={faTrash} onClick={() => remove(contacts.nombre, contacts.email, contacts.dni, contacts.direccion, contacts.celular)}/>
                            </div> 
                        </li>
                    ))}
                </ol>
            </div>
            
        </>
    )
}

export { Lista }

