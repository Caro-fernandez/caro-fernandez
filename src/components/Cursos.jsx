import React from 'react';
//Img:
import platziLogo from '../assets/img/platzi.png';
import codeaLogo from '../assets/img/codearock.png';
import codecampLogo from '../assets/img/freecodecamp.png';
import telefonicaLogo from '../assets/img/telefonica.jpg'
//Slider:
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/css/Cursos.css';
import { Pagination } from 'swiper/modules';

const Cursos =()=> {
  const cursitos = [
  { img: platziLogo,
    title: 'Platzi',
    name: 'Curso de Programación Básica',
    description:
             'Programa para estudiantes que se inician en Javascript,HTML y  algoritmos.',
  },
  { img: codeaLogo,
    title: 'CodeaRock',
    name:'HTML for Babies & Javascript desde Cero',
    description: 'Cursos asincrónicos en los que se cubren los contenidos básicos para empezar a programar páginas web estáticas e interactivas.', 
  },  
  { img: codeaLogo,
    title: 'CodeaRock',
    name:'Winterhack',
    description: 'Curso sincrónico intensivo en el que se trabajan nociones de: HTML, JS, React, Node.Js, Firebase y GitHub.', 
  }, 
  { img: codecampLogo,
    title: 'FreeCodeCamp',
    name:'React desde Cero',
    description: 'Curso asincrónico teórico-práctico en el que se cubren los conceptos básicos de React así como su implementación en diversos proyectos.', 
  },  
  { img: codecampLogo,
    title: 'FreeCodeCamp',
    name:'Javascript para Manipulación del DOM',
    description: 'Curso práctico para manipular el DOM de una página web mediante el uso de clases y selectores, el manejo de eventos y la creación y eliminación dinámica de elementos.'
  },
  { img: telefonicaLogo,
    title: 'Fundación Telefónica - Conecta Empleo',
    name: 'Gestión de Proyectos con Metodologías Ágiles y Enfoques Lean',
    description:'Curso teórico sobre metodologías ágiles en la implementación de proyectos colaborativos; Manifiesto Ágil; artefactos y roles en Scrum;  método Kanban.'
  }
  ]
  return (
    <div className='cursos-wrapper' id='Cursos'>
      <div className='cursos-titulo'>
        <h2 className='cursos-h2'>Mis Cursos</h2>
      </div> 
      <div className='cursos-background'>
        <div className='cursos-p'>
          <p className='cursos-p'>Éstos son algunos de los cursos online que he hecho hasta el momento:</p>    
        </div>
          <Swiper
             spaceBetween={20}
             slidesPerView={2}
             grabCursor={true}  
             className='curso-slider'
            >
           
            {cursitos.map((cursito, index)=>{
              return(
                <SwiperSlide key={index} className='curso-card'>
                  <div>
                    <img src={cursito.img} className='curso-img' alt='Logo'/>
                  </div>
                  <div className='description-container'>
                    <span className='title'>{cursito.title}</span>
                    <span className='name'>{cursito.name}</span>
                    <span className='description'>{cursito.description}</span>
                  </div>
                </SwiperSlide>
              )
            })}
         </Swiper>
       </div> 
    </div>
  )
}
export default Cursos;