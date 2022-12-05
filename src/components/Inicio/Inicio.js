import React from 'react'
import "../Inicio/Inicio.scss"
import NavBar from '../NavBar/NavBar'
import Proyects from '../Proyects/Proyects'
import SobreMi from "../SobreMi/SobreMi.js"

const Inicio = () => {
  return (
    <div>

      <NavBar/>

      <SobreMi/>

      <Proyects/>
      

    </div>
  )
}

export default Inicio