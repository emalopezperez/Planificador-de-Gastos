import { useState, useEffect } from 'react'
import Header from './components/Header'
import iconoGastoNuevo from './img/nuevo-gasto.svg'
import Modal from './assets/Modal';
import ListaDeGastos from './components/ListaDeGastos';
import {generarId} from './assets/GenerarId'

function App() {
  
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValiPresupuesto,setIsValiPresupuesto] = useState(false);

  const [modal, setModal] = useState (false)
  const [animarModal, setAnimarModal] = useState (false)

  const [gastos, setGastos] = useState([])
  const [editar, setEditar] = useState ({})

  useEffect(() =>{
    if(Object.keys(editar).length > 0){
      setModal(true)

    setTimeout(() =>{
      setAnimarModal(true)
    },400)
  }
}, [editar])

  const handleNuevoGasto=() =>{
    setModal(true)
    setEditar({})

    setTimeout(() =>{
      setAnimarModal(true)
    },400)
  }

  const guardarGasto= gasto =>{

    if(gasto.id){
      const gastosActualizados = gastos.map(e => e.id === gasto.id ? gasto : e)
      setGastos(gastosActualizados)
    }else{
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }

    setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        },400)
}

  const eliminar = id =>{
    const eliminados = gastos.filter(e => e.id !== id)

    setGastos(eliminados)
}

  return (
    <div className={modal ? 'fijar' : "" }>
      <Header
        gastos={gastos}
        presupuesto= {presupuesto}
        setPresupuesto= {setPresupuesto}
        isValiPresupuesto= {isValiPresupuesto}
        setIsValiPresupuesto= {setIsValiPresupuesto}
      />

      {isValiPresupuesto && (
        <>
          <main>
            {
              <ListaDeGastos
                gastos={gastos}
                setEditar={setEditar}
                eliminar={eliminar}
              />
            }
          </main>
          <div className='nuevo-gasto'>
            <img 
              src={iconoGastoNuevo}
              alt="icono Gasto Nuevo"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
      
      {modal && (
        <Modal
          setModal= {setModal}
          animarModal= {animarModal}
          setAnimarModal= {setAnimarModal}
          guardarGasto= {guardarGasto}
          editar={editar}
          setEditar={setEditar}
        />
    )}

    </div>
  )
}

export default App
