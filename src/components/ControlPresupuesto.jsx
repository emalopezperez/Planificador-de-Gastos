import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {
return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Graficaaaaa</p>
        </div>

        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span>
                ${presupuesto}
            </p>
            <p>
                <span>Disponible: </span>
                ${presupuesto}
            </p>
            <p>
                <span>Gastado: </span>
                ${presupuesto}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto