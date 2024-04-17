import React from 'react';
import '../assets/css/Footer.css';
//íconos:
import { UilInstagram } from '@iconscout/react-unicons';
import { UilLinkedin } from '@iconscout/react-unicons';
import { UilGithub } from '@iconscout/react-unicons';
import { UilCopyright } from '@iconscout/react-unicons';

export default function Footer() {
  return (
      <div className='footer-wrapper'>
        <div className='footer-icons'>
           <p className='footer-p' id='email'> mcarolinafernandez1@gmail.com</p>
           <a href="https://www.instagram.com/caro.fernandez19/" className='icon'> <UilInstagram  size='2.5rem'/> </a>
           <a href="https://www.linkedin.com/in/carolina-fern%C3%A1ndez-9053a5247/" className='icon'> <UilLinkedin  size='2.5rem'/> </a>
           <a href="https://github.com/Caro-fernandez" className='icon'> <UilGithub  size='2.5rem'/> </a>    
        </div>
        <div className='copyright'>
           <p className='footer-p'>  <UilCopyright  size='1.6rem' className='icon'/>  2024 Carolina Fernández </p>
        </div>
       </div>
  )
}
