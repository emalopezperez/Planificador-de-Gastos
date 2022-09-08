import React from 'react'

const Mensajes = ({children, tipo}) => {
  return (
    <div className={`alerta $ {tipo}`}>
        {
            children
        }
    </div>
  )
}

export default Mensajes