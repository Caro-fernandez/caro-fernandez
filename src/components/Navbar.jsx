import React from 'react'
import '../assets/css/Navbar.css'
import '../assets/css/App.css'
import logo from '../assets/img/logo.png'
import {Link} from 'react-scroll'

export default function Navbar() {
  return (
    <div className='nav-wrapper' id='navbar'>
        <div className='nav-left'>
            <img src= {logo} alt="logo" className='logo'/>
            <div className='my-name'> Carolina Fernández</div>       
        </div>
        <div className='nav-right'>
            <div className='nav-list'>
                <ul>
                    <Link spy={true} smooth= {true} to= 'Estudios' activeClass='activeClass'>
                    <li className='nav-li'>Estudios</li> </Link>               
                    <Link spy= {true} to= 'Proyectos' smooth= {true} >
                    <li className='nav-li'>Proyectos</li> </Link>
                    <Link spy= {true} to= 'Contacto' smooth= {true} >
                    <li className='nav-li'>Contacto</li> </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}
