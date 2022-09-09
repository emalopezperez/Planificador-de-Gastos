import {useEffect, useState} from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({presupuesto, gastos, setPresupuesto, setGastos, setIsValiPresupuesto}) => {

    const [porcentaje,setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() =>{
        const totalGastado= gastos.reduce((total, gasto) => gasto.cantidadGasto + total, 0);
        const totalDisponible= presupuesto - totalGastado
            
        const calcularPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)

            setDisponible(totalDisponible)
            setGastado(totalGastado)
            setTimeout(() =>{
                setPorcentaje(calcularPorcentaje)
            },1000)

    }, [gastos])

    const reset = () =>{
        setGastos([])
        setPresupuesto(0)
        setIsValiPresupuesto(false)
    }

return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#DC2626' : '#778899',
                    textColor:porcentaje > 100 ? '#DC2626' : 'black',
                    textSize:'20px'
                })}
                value={porcentaje}
                text={`${porcentaje}%`}
            />
        </div>

        <div className='contenido-presupuesto'>
            <button className='reset-app' type='button' onClick={reset}>
                Resetear
            </button>
            <p>
                <span>Presupuesto: </span>
                ${presupuesto}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : '' }`}>
                <span>Disponible: </span>
                ${disponible}
            </p>
            <p>
                <span>Gastado: </span>
                ${gastado}
            </p>
        </div>
    </div>
)
}

export default ControlPresupuesto