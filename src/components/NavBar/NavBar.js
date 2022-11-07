import React from 'react'
import "./NavBar.scss"
import { Icon } from '@iconify/react';

const NavBar = () => {
  return (
    <header className='header-container'>
    
      <ul className='header-links-container'>

          
          <li href='#'><Icon className='header-icons' icon="ant-design:user-outlined" />Sobre mi</li>
          <li href='#'><Icon className='header-icons' icon="grommet-icons:projects" />Proyectos</li>
          <li href='#'><Icon className='header-icons' icon="fluent:contact-card-16-regular" />Contacto</li>
          
      </ul>
      
    </header>
  )
}

export default NavBar