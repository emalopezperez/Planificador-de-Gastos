import React from 'react'
import Gasto from './Gasto'


const ListaDeGastos = ({gastos, setEditar, eliminar,Gastosfiltrado,filtrado}) => {

return (
    <div className='Listado-gastos contenedor'>   

        { filtrado ? (
                    <>
                        <h2>{Gastosfiltrado.length ? 'Gastos' : 'No Hay Gastos en esta categoría'}</h2>
                        {Gastosfiltrado.map( gasto => (
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}
                                setEditar={setEditar}
                                eliminar={eliminar}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>
                        {gastos.map( gasto => (
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}
                                setEditar={setEditar}
                                eliminar={eliminar}
                            />
                        ))}
                    </>
                )
            }
        </div>
)
}

export default ListaDeGastos