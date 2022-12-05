import React from 'react'
import ProyectCard from '../ProyectCard/ProyectCard'
import "../Proyects/Proyects.scss"

const Proyects = () => {
    return (
        <section id='proyects' className='proyects-container'>

            <h2 className='proyects-tittle'>Proyectos</h2>
            
            <ProyectCard/>

        </section>
    )
}

export default Proyects