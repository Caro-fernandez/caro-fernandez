import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import '../assets/css/Contacto.css';

 const Contacto =() => {
   const form = useRef();

   const [enviado, setEnviado] = useState(false);

   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
      .sendForm('service_s5ip2os', 'template_xt7q8qd', form.current, {
        publicKey: 'U_dOtMJ2S7RXa3pUM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEnviado(true);
          
          form.current.reset();
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='form-wrapper' id='Contacto'>
       <div className='form-title'>
          <h2> ¡Estamos</h2>
          <p className='subtitle'>en contacto!</p>
          <span className='enviado'> {enviado && "¡Gracias por contactarme! En breve me comunicaré."}</span>
       </div>
       <div className='contact-form'>
         <form ref={form} onSubmit={sendEmail} id='formulario'>
            <input type="text" name='user_name' className='user' placeholder='Nombre' />
            <input type="email" name="user_email" className='user' placeholder='Email' />
            <textarea name="message" className='user' placeholder='Mensaje' />
            <input type="submit" value='Enviar' className='button' />
         </form>
        </div>
    </div>
  )
}

export default Contacto;