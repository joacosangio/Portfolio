import React from 'react'
import Yo from "../../asssets/Yo.jpg"
import "../SobreMi/SobreMi.scss"

const SobreMi = () => {
  return (
    <section className='sobreMi-container'>

        <div className='sobreMi-card'>

            <img src={Yo} alt="Imagen"/>

            <p>Mi nombre en <strong>J</strong>oaquín <strong>S</strong>angiorgi. Soy un estudiante de programácion full stack y desarrollador Frontend. Estoy en constante aprendizaje y con muchas ganas de aprender. Me considero muy bueno trabajando en equipo</p>

        </div>

        

    </section>
  )
}

export default SobreMi