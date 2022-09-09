import {useState, useEffect} from 'react'

const Filtro = ({filtrado, setFiltrado}) => {


return (

    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>Filtrar Gastos</label>
                <select 
                    value={filtrado}
                    onChange={e => setFiltrado(e.target.value)}
                >
                    <option value=''>Seleccione</option>
                    <option value='ahorro'>Ahorro</option>
                    <option value='comida'>Comida</option>
                    <option value='casa'>Casa</option>
                    <option value='ocio'>Ocio</option>
                    <option value='salud'>Salud</option>
                    <option value='suscripciones'>Suscripciones</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtro