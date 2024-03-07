import {useState} from 'react' 
import './App.css'
import {Formulario} from './componentes/Formulario/Formulario' //Importo Formulario.jsx
import {Lista} from './componentes/Lista/Lista' //Importo Lista.jsx
import {Filtrar} from './componentes/Filtrar/Filtrar' //Importo Filtrar.jsx
import React from 'react';

function App() {

  //USESTATE: creo los UseState (estados) para trabajar los datos que ingreso en input

  const [mostrarAgenda, setMostrarAgenda] = useState(false);

  //Estado para almacenar nombres de contactos      
  const [contactos, setContactos]= useState ([]);                      


  //Estado para almacenar Apellido y Nombre que escribo en el input
  const [nombre, setNombre]= useState ('');

  //Estado para almacenar Email que escribo en el input
  const [email, setEmail]= useState ('');

  //Estado para almacenar DNI que escribo en el input
  const [dni, setDni]= useState ('');

  //Estado para almacenar Direccion que escribo en el input
  const [direccion, setDireccion]= useState ('');

  //Estado para almacenar celular que escribo en el input
  const [celular, setCelular]= useState ('');



  const [screen, setScreen] = useState("");



  //Funcion que va a manejar el cambio de dicho input--- input del nombre por ej
  const inputNombre = (event) => {
    setNombre (event.target.value)
  }

  const inputEmail = (event) => {
    setEmail (event.target.value)
  }

  const inputDni = (event) => {
    setDni (event.target.value)
  }

  const inputDireccion = (event) => {
    setDireccion (event.target.value)
  }

  const inputCelular = (event) => {
    setCelular (event.target.value)
  }

  const toggleAgenda = () => {
    setMostrarAgenda(!mostrarAgenda);
  };

    //FUNCION AGREGAR CONTACTO A LA LISTA
    const add = () => {
      //verificar que no esté vacío el input nombre, despues de eliminar los espacios en blanco con trim
      if (nombre.trim() && email.trim() && dni.trim() && direccion.trim() && celular.trim() !== '') { //trim elimina los espacios en blanco  // !== niego la cadena vacía, es decir està completa
        //si no està vacio, crea un objeto del contacto con un identificador y el nombre de dicho tarea/contacto
        const contactoGenerado = {
          //id: Date.now (),  //le asigno a cada contacto agregado un nº random, un id unico
          nombre: nombre,  //Asignamos el name del contacto actual que se está agregando por el input
          email: email,
          dni: dni,
          direccion: direccion,
          celular: celular,
        };
        //copia de los nombres actuales y agrego luego el nuevo nombre al final de la lista
        const contactosGenerados = [...contactos, contactoGenerado];
        setContactos (contactosGenerados)
  
        //Reestablecer el valor del input a una cadena vacia
        setNombre ('')
        setEmail ('')
        setDni ('')
        setDireccion ('')
        setCelular ('')
      } 
    };

  //FUNCION FILTRAR
  const buscar = () => {
    return contactos.filter((contacts) => {
      //filtro la lista de contactos
      return contacts.nombre.toLowerCase().includes(screen.toLowerCase()); 
      //Accedo al nombre de cada contacto, convirtiéndola a minúsculas y verificando si incluye el término de búsqueda 
    });
  };

  const handleInputChange = (e) => {
    setScreen(e.target.value);
  };
  //uso handleInputChange para manejar los cambios en el campo de búsqueda. El termino ingresado en el input de busqueda (screen) se almacena (setScreen) en a través de la función handleInputChange



  //FUNCION ELIMINAR

  const remove = (eliminado) => {
    const index = contactos.findIndex((contacts) => contacts.nombre === eliminado); //una variable que incluye la funcion de filtro antes declarada
    //el metodo findIndex() que especifica el indice, en este caso del contacto que buscamos

    if (index !== -1) {
      //aca verificamos que encontro el contacto (sin findIndex no encuentra un elemento arroja -1)
      const newList = [...contactos.slice(0, index), ...contactos.slice(index + 1)]; //creamos una lista nueva que filtra el contacto a eliminar
      //para eso primero separamos el array con todos los elementos antes del contacto a eliminar, y con todos los elementos despues del contactoa eliminar

      setContactos(newList); //actualizo el estado
    }
  };

  //--------------------------------------------------------------------------------------------------//

  return (
    <>
    <section className='container-app'>

      <h1>AGENDA DE CONTACTOS</h1>
      
      <div>
        <Formulario
            contactos={contactos}
            setContactos={setContactos}
            nombre={nombre}
            email={email}
            dni={dni}
            direccion={direccion}
            celular={celular}
            add={add}
            inputNombre={inputNombre}
            inputEmail={inputEmail}
            inputDni={inputDni}
            inputDireccion={inputDireccion}
            inputCelular={inputCelular}
        /> 

      </div>

      {/* Boton de Mostrar/ocultar agenda. Estoy renderizando aca adentro Lista.jsx y Filtrar.jsx */}
      
      <div className='desplegar-agenda'>
        <button onClick={toggleAgenda}> {mostrarAgenda ? 'OCULTAR AGENDA' : 'MOSTRAR AGENDA'} </button>
        {mostrarAgenda && (
          <>
          <div className='lista-busqueda'>
            <div className='busqueda'>
                <Filtrar
                  setContactos={setContactos}
                  contactos={contactos}
                  buscar={buscar}
                  screen={screen}
                  setScreen={setScreen}
                  handleInputChange={handleInputChange}
                />
            </div>

            <div className='lista-desplegada'>
              {/* Condicional--- Si hay contactos agendados: muestro agenda, sino: "no hay contactos agendados" */}
              {contactos.length > 0 ? (
                <Lista setContactos={setContactos} contactos={contactos} remove={remove} />
              ) : (
                <p className='no-contact'>Aun no hay contactos agendados.</p>
              )}
            </div>

          </div>

          </>
        )}
      </div> 
    </section>
    </>
  )
}

export default App










