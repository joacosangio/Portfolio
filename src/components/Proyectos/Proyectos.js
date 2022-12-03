import React from 'react'
import ProyectoCard from '../ProyectoCard/ProyectoCard'
import "../Proyectos/Proyectos.scss"

const Proyectos = () => {
    return (
        <section className='proyectos-container'>

            <h2>Proyectos</h2>
            
            <ProyectoCard/>

        </section>
    )
}

export default Proyectos