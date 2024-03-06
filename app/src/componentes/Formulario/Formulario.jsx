//FORMULARIO.JSX: Permitirá agregar contactos

import {useState} from 'react';  //QUE ONDI ESTO QUE ESTA OPACO
import React from 'react';
import './Formulario.css';
//Importo libreria FontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//Importo icono de FontAwesome
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';

const Formulario = (props) => {

    const { nombre, email, dni, direccion, celular, inputNombre, inputEmail, inputDni, inputDireccion, inputCelular,add} = props;

    return(
        <>
        <section>
            <form action="" className='formulario'>
                <div className='form-ppal'>
                    <span>< FontAwesomeIcon className='add' icon={faUserPlus}/></span>
                    
                    <div>
                        <label htmlFor=""> Apellido y nombre </label>
                        <input type="text" value={nombre} onChange={inputNombre} placeholder='María Perez'/>
                    </div>

                </div>

                <div className='form-detalles'>
                    <div>
                        <label htmlFor=""> E-mail </label>
                        <input type="email" value={email} onChange={inputEmail} placeholder='maria@perez.com'/>
                    </div>

                    <label htmlFor=""> DNI </label>
                    <input type="number" value={dni} onChange={inputDni} placeholder='12345678'/>

                    <label htmlFor=""> Direccion </label>
                    <input type="text" value={direccion} onChange={inputDireccion} placeholder='Av. Callao 1234'/>

                    <label htmlFor=""> Celular </label>
                    <input type="number" value={celular} onChange={inputCelular} placeholder='011-12345678'/>
                </div>

                <span>
                    <button onClick={(e) => {e.preventDefault(); add();}}>Agregar contacto</button> 
                </span>


            </form>

        </section>

        </>
    )
}

export { Formulario }