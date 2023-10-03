import React from 'react'
import MessageBox from '../assets/message-box.png'

export default function ContactSection() {
  return (
    <section className='bg-white h-screen flex flex-col justify-center py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex lg:flex-row flex-col   justify-around py-12'>
        <div className='lg:self-start self-center'>
          <img src={MessageBox} alt='skilImage' />
        </div>
        <div className='flex flex-col gap-14'>
          <div className='lg:text-left text-center lg:py-0 py-6'>
            <h1 className='text-4xl font-bold'>Lets talk!</h1>
            <h1 className='text-2xl foxt-thin'>We will contact you! </h1>
          </div>
          <div className='flex flex-col gap-8'>
            <div className='flex gap-4'>
              <div>
                <p className='text-base font-light'>Name</p>
                <input className='bg-white border-b-2 border-black focus:border-transparent outline-none' type="text" />
              </div>
              <div>
                <p className='text-base font-light'>Email</p>
                <input className='bg-white border-b-2 border-black focus:border-transparent outline-none' type="text" />
              </div>
            </div>
            <div>
                <p className='text-base font-light'>Project Description</p>
                <input  type="text" className='w-full bg-white border-b-2 border-black focus:border-transparent outline-none' />
              </div>
            <div>
              <button className='bg-black text-white py-2 px-2 rounded text-sm'>Send Message</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
