import React from 'react'
import Navbar from './Navbar'
import '../app/styles/Heros.css'

const Heros = () => {
  return (
    
    <div id="home" className='hero-container'>
      <Navbar />
    

      <div className='hero-content'>
        <div className="hidden lg:block"></div>
        <div className="hero-text">
          <div className='hero-msin'>
            <p data-aos="fade-up-right">Hi, I am</p>
            <p data-aos="fade-up-right">Nizakat</p>
            <p data-aos="fade-up-right">Ali</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heros
