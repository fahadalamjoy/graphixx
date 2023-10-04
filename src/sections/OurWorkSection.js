import React from 'react'
import P1 from '../assets/p1.png'
import P2 from '../assets/p2.png'
import P3 from '../assets/p3.png'
import P4 from '../assets/p4.png'
import P5 from '../assets/p5.png'
import P6 from '../assets/p6.png'
import P7 from '../assets/p7.png'
import P8 from '../assets/p8.png'
import P9 from '../assets/p9.png'

export default function OurWorkSection() {
  return (
    <section className=' bg-white h-full   '>
        <h1 className='lg:text-4xl text-xl font-bold text-center text-black pt-6'>Have a look at some of our work!</h1>
        <div className='container mx-auto px-4 flex flex-col gap-8 justify-center items-center py-12'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
                <div className='flex justify-center lg:pl-8 pl-0'><img src={P1} alt='skilImage' /></div>
                <div className='flex justify-center'><img src={P2} alt='skilImage' /></div>
                <div className='flex justify-center'><img src={P3} alt='skilImage' /></div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
                <div className='flex justify-center'><img src={P4} alt='skilImage' /></div>
                <div className='flex justify-center'><img src={P5} alt='skilImage' /></div>
                <div className='flex justify-center'><img src={P6} alt='skilImage' /></div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
                <div className='flex justify-center'><img src={P7} alt='skilImage' /></div>
                <div className='flex justify-center'><img src={P8} alt='skilImage' /></div>
                <div className='flex justify-center'><img src={P9} alt='skilImage' /></div>
            </div>
        </div>

    </section>
  )
}
