import React from 'react'
import './Nav.css'
import logo from './logo.jpg'

export default function Nav({ className }) {

  

  return (
    <nav className={className}>
        <div>
          <img className='logo-img' src={logo} alt='img not found'/>
        </div>
        <div>HOME</div>
    </nav>
  )
}
