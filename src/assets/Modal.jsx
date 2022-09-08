import { useState } from 'react'
import cerrarBtn from '../img/cerrar.svg'
import Mensajes from './Mensajes'

const Modal =({setModal, animarModal,setAnimarModal, guardarGasto}) => {
    const [mensaje, setMensaje] = useState('')

    const [nombreGasto, setNombreGasto]= useState('')
    const [cantidadGasto, setCantidadGasto]= useState('')
    const [categoria, setCategoria]= useState('')

    const ocultarModal= ()=>{
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        },400)
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        
        if([nombreGasto, cantidadGasto ,categoria].includes('')){

            setMensaje('Todos los cmapos son obligatorios')

            setTimeout(() =>{
                setMensaje('')
            },800)  
            return;
        }
        guardarGasto({nombreGasto , cantidadGasto ,categoria})
    }

return (
    <div className="modal">
        <div className="cerrar-modal">
            <img
                src={cerrarBtn}
                alt= "cerrar modal"
                className='cursor-pointer'
                onClick={ocultarModal}
            />
        </div>
        <form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? 'animar' : 'cerrar' } `}
        >
            <legend>
                Nuevo Gasto
            </legend>
            {mensaje&& <Mensajes tipo='error'>{mensaje}</Mensajes>}
            <div className='campo'>
                <label htmlFor='nombre'>Nombre del Gasto:</label>
                <input
                    id='nombre'
                    type='text'
                    placeholder='Escribe el nombre del Gasto'
                    value={nombreGasto}
                    onChange={e => setNombreGasto(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label htmlFor='cantidad'>Cantidad:</label>
                <input
                    id='cantidad'
                    type='number'
                    placeholder='Escribe la cantidad del Gasto'
                    value={cantidadGasto}
                    onChange={e => setCantidadGasto(Number(e.target.value))}
                />
            </div>

            <div className='campo'>
                <label htmlFor='categoria'>Categoria</label>

                <select id='categoria'
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
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

            <input
                type='submit'
                value='Anadir Gastos'
            />
        </form>
    </div>
  )
}

export default Modal