import React from 'react'
import "../Inicio/Inicio.scss"
import NavBar from '../NavBar/NavBar'
import Proyectos from '../Proyectos/Proyectos'
import SobreMi from "../SobreMi/SobreMi.js"

const Inicio = () => {
  return (
    <div>

      <NavBar/>

      <SobreMi/>

      <Proyectos/>
      

    </div>
  )
}

export default Inicio