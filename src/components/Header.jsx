import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
    presupuesto,
    setPresupuesto,
    setIsValiPresupuesto,
    isValiPresupuesto

}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValiPresupuesto ? (
          <ControlPresupuesto
            presupuesto={presupuesto}
          />)
        :
          (<NuevoPresupuesto
            presupuesto= {presupuesto}
            setPresupuesto= {setPresupuesto}
            setIsValiPresupuesto= {setIsValiPresupuesto}
          />)
      }
        
    </header>
  )
}

export default Header