import React from 'react'
import "../ProyectCard/ProyectCard.scss"
import data from "../../data/proyectos.json"

const ProyectCard = () => {

    const proyect = data.map( proyect => {
        return(
            <div className='proyect-card-container'>
                <h1 className='proyect-tittle'>{proyect.tittle}</h1>
                <p className='proyect-text'>{proyect.description}</p>
                <button className='proyect-btn'><a href={proyect.url}>Visitar</a></button>
            </div>
        )
    })

    return (proyect)
}

export default ProyectCard