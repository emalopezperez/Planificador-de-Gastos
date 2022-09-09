import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filtro from './components/Filtro';
import iconoGastoNuevo from './img/nuevo-gasto.svg'
import Modal from './assets/Modal';
import ListaDeGastos from './components/ListaDeGastos';
import {generarId} from './assets/GenerarId'

function App() {
  
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0 );
  const [isValiPresupuesto,setIsValiPresupuesto] = useState(false);

  const [modal, setModal] = useState (false)
  const [animarModal, setAnimarModal] = useState (false)

  const [gastos, setGastos] = useState( localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [] ) 
  const [editar, setEditar] = useState ({})

  const [filtrado, setFiltrado] = useState('')
  const [Gastosfiltrado, setGastosFiltrado] = useState([])

  useEffect(() =>{
    if(Object.keys(editar).length > 0){
      setModal(true)

    setTimeout(() =>{
      setAnimarModal(true)
    },400)
  }
}, [editar])

  useEffect(()=>{

    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(()=>{
    const presupuestoLocalS =Number(localStorage.getItem('presupuesto')) ?? 0;

      if(presupuestoLocalS > 0){
        setIsValiPresupuesto(true)
      }
  }, [])

  useEffect (() =>{

    if(filtrado){
      const gastosFiltrados = gastos.filter(elemento => elemento.categoria === filtrado)
      setGastosFiltrado(gastosFiltrados)
    }
    
  },[filtrado])

  useEffect(()=>{
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])


  const handleNuevoGasto=() =>{
    setModal(true)
    setEditar({})

    setTimeout(() =>{
      setAnimarModal(true)
    },400)
  }

  const guardarGasto= gasto =>{

    if(gasto.id){
      const gastosActualizados = gastos.map(e => e.id === gasto.id ? gasto : e)
      setGastos(gastosActualizados)
      setEditar({})
    }else{
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }

    setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        },400)
}

  const eliminar = id =>{
    const eliminados = gastos.filter(e => e.id !== id)

    setGastos(eliminados)
}

  return (
    <div className={modal ? 'fijar' : "" }>
      <Header
        setGastos={setGastos}
        gastos={gastos}
        presupuesto= {presupuesto}
        setPresupuesto= {setPresupuesto}
        isValiPresupuesto= {isValiPresupuesto}
        setIsValiPresupuesto= {setIsValiPresupuesto}
      />

      {isValiPresupuesto && (
        <>
          <main>
            <Filtro
              filtrado={filtrado}
              setFiltrado={setFiltrado}
            />
              {
                <ListaDeGastos
                  gastos={gastos}
                  setEditar={setEditar}
                  eliminar={eliminar}
                  filtrado={filtrado}
                  Gastosfiltrado={Gastosfiltrado}
                />
              }
          </main>
          <div className='nuevo-gasto'>
            <img 
              src={iconoGastoNuevo}
              alt="icono Gasto Nuevo"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
      
      {modal && (
        <Modal
          setModal= {setModal}
          animarModal= {animarModal}
          setAnimarModal= {setAnimarModal}
          guardarGasto= {guardarGasto}
          editar={editar}
          setEditar={setEditar}
        />
    )}

    </div>
  )
}

export default App
