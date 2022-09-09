import React from 'react'
import Gasto from './Gasto'


const ListaDeGastos = ({gastos, setEditar, eliminar}) => {

return (
    <div className='Listado-gastos contenedor'>   
        <h2>
            {
                gastos.length ? 'Gastos' : 'No hay Gastos aun'
            }
        </h2>
        {
            gastos.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto= {gasto}
                    setEditar= {setEditar}
                    eliminar={eliminar}
                />
            ))
        }
        
    </div>
)
}

export default ListaDeGastos