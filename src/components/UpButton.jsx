import React from 'react'
import { UilArrowUp } from '@iconscout/react-unicons'
import {Link} from 'react-scroll'
import '../assets/css/UpButton.css'

export default function UpButton() {
  return (
    <div className='up-btn-container'>
      <Link spy= {true} to= 'navbar' smooth= {true} >
        <button className='button up'> 
          <UilArrowUp size='3rem'/> 
        </button>
      </Link>
    </div>
  )
}
