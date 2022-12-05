import React from 'react'
import { useState } from 'react';
import "./NavBar.scss"
import { Icon } from '@iconify/react';

const NavBar = () => {

  const [navBar, setNavBar] = useState(false)

  const cambiarFondo = () => {
    if(window.scrollY > 0) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
    
  }
  
  
  window.addEventListener("scroll",  cambiarFondo )
  


  return (
    <header className= {navBar ? "header-container-scroll" : "header-container"}>
    
      <ul className='header-links-container'>

          
          <li href='#'><Icon className='header-icons' icon="ant-design:user-outlined" /><a href='#about'>Sobre mi</a></li>
          <li href='#'><Icon className='header-icons' icon="grommet-icons:projects" /> <a href='#proyects'>Proyectos</a></li>
          <li href='#'><Icon className='header-icons' icon="fluent:contact-card-16-regular" /> <a href='#contact'>Contacto</a></li>
          
      </ul>
      
    </header>
  )
}

export default NavBar