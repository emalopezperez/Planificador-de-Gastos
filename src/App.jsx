import { useState } from 'react'
import Header from './components/Header'
import iconoGastoNuevo from './img/nuevo-gasto.svg'

function App() {
  
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValiPresupuesto,setIsValiPresupuesto] = useState(false);
  const [modal, setModal] = useState (false)

  const handleNuevoGasto=() =>{
    setModal(true)
  }

  return (
    <div className=''>
      <Header
        presupuesto= {presupuesto}
        setPresupuesto= {setPresupuesto}
        isValiPresupuesto= {isValiPresupuesto}
        setIsValiPresupuesto= {setIsValiPresupuesto}
      />

      {isValiPresupuesto && (
        <div className='nuevo-gasto'>
          <img 
            src={iconoGastoNuevo}
            alt="icono Gasto Nuevo"
            onClick={handleNuevoGasto}
          />
        </div>
      )}
      
      {modal && (
        <p>Modal</p>
    )}

    </div>
  )
}

export default App
