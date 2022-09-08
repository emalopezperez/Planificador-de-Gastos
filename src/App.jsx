import { useState } from 'react'
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

  const handleNuevoGasto=() =>{
    setModal(true)

    setTimeout(() =>{
      setAnimarModal(true)
    },400)
  }

  const guardarGasto= gasto =>{
    gasto.id = generarId();
    gasto.fecha = Date.now();

    setGastos([...gastos, gasto])

    setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        },400)
}
  return (
    <div className={modal && 'fijar'}>
      <Header
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
        />
    )}

    </div>
  )
}

export default App
