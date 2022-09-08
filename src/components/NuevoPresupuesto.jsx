import {useState} from 'react'
import Mensajes from '../assets/Mensajes'

const Presupuesto = ({presupuesto, setPresupuesto, setIsValiPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')


    const validacionPresupuesto= (e)=>{
        e.preventDefault()

        if(!presupuesto || presupuesto < 0) {
            setMensaje('No es un presupuesto valido!')
        }else{
            setMensaje('')
            setIsValiPresupuesto(true)
        }
    }

return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={validacionPresupuesto} className="formulario">
            <div className='campo'>
                <label>
                    Escriba su Presupuesto
                </label>
                <input
                    className='nuevo-presupuesto'
                    type='number'
                    placeholder='Escriba su Presupuesto'
                    
                    onChange={e => setPresupuesto(Number(e.target.value))}
                />
            </div>

            <input
                type='submit'
                value='Enviar'
            />

            {mensaje && <Mensajes tipo="error">{mensaje}</Mensajes>}
        </form>
    </div>
    )
}

export default Presupuesto