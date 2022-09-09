import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
    gastos,
    presupuesto,
    setPresupuesto,
    setIsValiPresupuesto,
    isValiPresupuesto,
    setGastos

}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValiPresupuesto ? (
          <ControlPresupuesto
            presupuesto={presupuesto}
            gastos={gastos}
            setGastos={setGastos}
            setPresupuesto={setPresupuesto}
            setIsValiPresupuesto={setIsValiPresupuesto}
          />)
        :
          (<NuevoPresupuesto
            presupuesto= {presupuesto}
            setPresupuesto= {setPresupuesto}
            setIsValiPresupuesto= {setIsValiPresupuesto}
          />
        )}
        
    </header>
  )
}

export default Header