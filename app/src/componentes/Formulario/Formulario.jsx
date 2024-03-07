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
        <section className='container-form'>
            <form action="" className='formulario'>
                <div className='form-ppal'>
                    <span>< FontAwesomeIcon className='icono-add' icon={faUserPlus}/></span>
                    
                    <div className='input-nombre'>
                        <label htmlFor=""> Apellido y nombre </label>
                        <input type="text" value={nombre} onChange={inputNombre} placeholder='María Perez'/>
                    </div>

                </div>

                <div className='form-detalles'>
                    <div className='input-email'>
                        <label htmlFor=""> E-mail </label>
                        <input type="email" value={email} onChange={inputEmail} placeholder='maria@perez.com'/>
                    </div>
                    
                    <div className='input-dni'>
                        <label htmlFor=""> DNI </label>
                        <input type="number" value={dni} onChange={inputDni} placeholder='12345678'/>
                    </div>
                    
                    <div className='input-direccion'>
                        <label htmlFor=""> Direccion </label>
                        <input type="text" value={direccion} onChange={inputDireccion} placeholder='Av. Callao 1234'/>
                    </div>

                    <div className='input-celular'>
                        <label htmlFor=""> Celular </label>
                        <input type="number" value={celular} onChange={inputCelular} placeholder='011-12345678'/>
                    </div>
                    
                </div>

                <span className='btn-add'>
                    <button className='btn' onClick={(e) => {e.preventDefault(); add();}}>GUARDAR CONTACTO</button> 
                </span>


            </form>

        </section>

        </>
    )
}

export { Formulario }