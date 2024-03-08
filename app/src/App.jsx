import {useState, useEffect} from 'react' 
import './App.css' 
import {Formulario} from './componentes/Formulario/Formulario' //Importo Formulario.jsx
import {Lista} from './componentes/Lista/Lista' //Importo Lista.jsx
import {Filtrar} from './componentes/Filtrar/Filtrar' //Importo Filtrar.jsx
import React from 'react';

function App() {

  //USESTATE: creo los UseState (estados) para trabajar los datos que ingreso en input

  const [mostrarAgenda, setMostrarAgenda] = useState(false);

  //Estado para almacenar contactos      
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



  //Funciones que va a manejar el cambio de los input
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

  // -----LOCAL STORAGE-----
  useEffect(() => {
    const storedContact = JSON.parse(localStorage.getItem("contactos")); //localStorage es un obj del navegador para alamacenar datos
    //JSON.parse convierte una cadena JSON a un obj xq los datos de almacenamiento local se almancenan como cadenas
    if (storedContact) { //si hay datos almacenados
      setContactos(storedContact);//se almancenan aca
    }
  }, []); //dependencia, se ejecuta una sola vez


  //FUNCION AGREGAR CONTACTO A LA LISTA
    const add = () => {
      //verificar que no estén vacíos los input, despues de eliminar los espacios en blanco con trim
      if (nombre.trim() && email.trim() && dni.trim() && direccion.trim() && celular.trim() !== '') { // niego la cadena vacía, es decir está completa
        //si no está vacio, asignamos los datos que se agregaron por el input
        const contactoGenerado = {
          nombre: nombre,
          email: email,
          dni: dni,
          direccion: direccion,
          celular: celular,
        };
        //copia de los contactos actuales y agrego luego el nuevo contacto al final de la lista
        const contactosGenerados = [...contactos, contactoGenerado];
        setContactos (contactosGenerados)

        localStorage.setItem("contactos", JSON.stringify(contactosGenerados)); //.setItem almacena un valor
      //JSON.stringify(contactosGenerados) convierte el array en cadena porque local storage almacena en cadena

  
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
    const index = contactos.findIndex((contacts) => contacts.nombre === eliminado); 
    //findIndex() especifica el indice, en este caso del contacto que buscamos

    if (index !== -1) {
      //verifico que encontró el contacto (sin findIndex no encuentra un elemento arroja -1)
      const newList = [...contactos.slice(0, index), ...contactos.slice(index + 1)]; //creo una lista nueva que filtra el contacto a eliminar
      //para eso primero separamos el array con todos los elementos antes del contacto a eliminar, y con todos los elementos despues del contactoa eliminar

      setContactos(newList); //actualizo el estado
    }
  };

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










