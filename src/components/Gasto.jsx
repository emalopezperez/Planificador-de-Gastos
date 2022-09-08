import React from 'react'
import { GeneradorFecha } from '../assets/GeneradorFecha'
import iconoAhorro from '../img/icono_ahorro.svg'
import iconoComida from '../img/icono_comida.svg'
import iconoOcio from '../img/icono_ocio.svg'
import iconoSalud from '../img/icono_salud.svg'
import iconoSuscripciones from '../img/icono_suscripciones.svg'
import iconoCasa from '../img/icono_casa.svg'

const diccionarioIconos = {
                    ahorro: iconoAhorro,
                    comida: iconoComida,
                    casa: iconoCasa,
                    ocio: iconoOcio,
                    salud: iconoSalud,
                    Suscripciones:iconoSuscripciones
                }

const Gasto = ({gasto}) => {

    const {categoria,cantidadGasto,nombreGasto, id ,fecha} = gasto
return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <img
                src={diccionarioIconos[categoria]}
                alt= "Icono gasto"
            />

            <div className='descripcion-gastos'>
                <p className='categoria'>
                    {categoria}
                </p>
                <p className='nombre-gasto'>
                    {nombreGasto}
                </p>
                <p className='fecha-gasto'>
                    Agregado el: {''}
                    <span>
                        {GeneradorFecha(fecha)}
                    </span>
                </p>
            </div>
        </div>
        <p className='cantidad-gasto'>
            ${cantidadGasto}
        </p>
    </div>
  )
}

export default Gasto