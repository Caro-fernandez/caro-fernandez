import React from 'react';
import '../assets/css/Proyectos.css';
/* Img: */
import Hello from '../assets/img/hello.png';
import MonsterMath from '../assets/img/monster-math.png';
import Compras from '../assets/img/compras.png';
import TareApp from '../assets/img/tare-app.png';
/* Slides & Styles: */
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Proyectos() {
  return (
    <div className='portfolio' id='Proyectos'>
       <h2>Proyectos</h2>
       <p className='subtitle'>Mi Portfolio</p>
       <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={1}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="proyecto-Swiper"
      >
        <SwiperSlide className='swiper-slide'>
            <img src={Hello} className='proyecto-img' alt="Hello, escuela de inglés"/>
           </SwiperSlide>
           <a href="https://caro-fernandez.github.io/hello-website/"></a>
        <SwiperSlide className='swiper-slide'>
             <img src={Compras} className='proyecto-img' alt="Tu lista de compras" />
           </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
             <img src={MonsterMath} className='proyecto-img' alt="Monster Math, tu calculadora" />
            </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
              <img src={TareApp} className='proyecto-img' alt="TareApp, tu app de tareas" />
            </SwiperSlide>
      </Swiper>
    </>
    </div>
  )
}
