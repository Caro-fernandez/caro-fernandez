import React from 'react'
import Image from '../assets/img/foto1.png'
import {Link} from 'react-scroll'
import '../assets/css/Home.css'


export default function Home() {
  return (
   <div className='home' id='home'>
      <div className='home-left'>     
        <div className='home-name'>
           <h2>¡Hola! Les doy la bienvenida a mi página web. Soy </h2>
           <h1 className='orange'>Carolina Fernández</h1>
           <p>Profesora de inglés y estudiante de programación con ganas de especializarme en desarrollo Frontend. Generar nuevos aprendizajes nos abre la mente y nos ayuda a crecer, por eso disfruto tanto de formar parte de ese proceso. Amo enseñar así como aprender y, en este camino de descubrimiento, decidí emprender una nueva carrera.   </p>
        </div>
        <Link spy= {true} to= 'Contacto' smooth= {true} >
           <button className='button'>Contactame</button> 
        </Link>
      </div>

      <div className='home-right'>
        <div className='img-container'>
          <img src={Image} className='photo1' alt="me" />
        </div>
      </div>
   </div>
  )
}
