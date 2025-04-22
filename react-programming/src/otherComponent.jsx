
import React from 'react'
import { useState } from 'react'
import './App.css'

const HelloWorld = () => {
    const greeting = "Hola Mundo!";
    console.log(`Juan dice: ${greeting}`);

    const [name, setName] = useState('Invitado/a');

    let nameStyle = {
        color: 'crimson'
    }

    let paragraphStyle = {
        fontSize: '2rem',
    }

  return (
    <div className='Name'>
        <h1>Hola <span style={nameStyle}>{name}</span></h1>
        <p style={paragraphStyle}>Bienvenido a mi sitio</p>
        <button onClick={()=>setName("Juan")}>Cambiar Nombre</button>
    </div>
  )
}

export default HelloWorld