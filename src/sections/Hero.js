import React from 'react'
import logo from '../assets/logo.png'
import hero from '../assets/hero-image.png'

export default function Hero() {
  return (
    <section className='container mx-auto px-4 lg:h-screen h-3/4 overflow-hidden'>
      <div className='mx-8 mt-4 w-32'>
        <img src={logo} alt='logo' />
      </div>
      <div className='flex flex-col md:flex-row justify-between py-6 lg:py-0 lg:text-left text-center' >
        <div className='flex flex-col  justify-center lg:ml-12 ml-4' >
          <h1 className='lg:text-5xl text-xl  font-extrabold'>WE DESIGN EXPERIENCE</h1>
          <h1 className='lg:text-4xl text-xl font-light'>Where Art Meets Simplicity</h1>
        </div>
        <div className='lg:pt-0 pt-6'>
            <img src={hero} alt='heroimage' />
        </div>
      </div>
    </section>
  )
}
