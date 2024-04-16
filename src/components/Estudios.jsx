import React from 'react'
import Img2 from '../assets/img/estudios.jpg'
import '../assets/css/Estudios.css'

export default function Estudios() {
  return (
    <div className='es-container' id='Estudios'>
      <img src= {Img2} className='photo2' alt="computer background" />
      <div className='es-left'> 
              <h2>Estudios</h2>
      </div>  
      <div className='es-right'>
        <p className='parrafo-estudios'> Mi primer acercamiento al mundo corporativo fue en un curso sobre gestión de proyectos; eso despertó mi curiosidad por la programación y el desarrollo web. A partir de allí,  realicé una serie de cursos online brindados por distintas organizaciones y profesionales que me permitieron iniciarme en HTML, Javascript, CSS, React, Node Js y Firebase.</p>
        <a href="https://www.linkedin.com/in/carolina-fern%C3%A1ndez-9053a5247/">
           <button className='button'>Mi Linkedin</button>
        </a>
      </div>
    </div>
  )
}
