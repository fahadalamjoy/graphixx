import React from 'react'
import Loaction from '../assets/location.png'
import MessageBox from '../assets/messagebox.png'
import whatsapp from '../assets/whatsapp.png'
import Twitter from '../assets/twitter.png'
import Facebook from '../assets/facebook.png'
import Insta from '../assets/insta.png'
import Linkedin from '../assets/linkedin.png'

export default function Footer() {
  return (
    <section className='bg-black h-full text-white py-12'>
        <div className='container mx-auto px-4 flex flex-col   '>
            <h1 className='lg:text-4xl text-2xl text-center py-4'>Or you can contact us</h1>
            <div className='flex flex-col items-start mx-auto lg:py-6 py-3'>
                <div className='flex mt-2 py-1 items-center align-middle'>
                    <img className='w-5' src={Loaction} alt='logo' />
                    <p className='pl-4 text-xl'>Birmingham, United Kingdom</p>
                </div>
                <div className='flex mt-2 py-1 items-center align-middle'>
                    <img className='w-6' src={MessageBox} alt='logo' />
                    <p className='pl-4 text-xl'>info@lightsglobalservices.com</p>
                </div>
                <div className='flex mt-2 py-1 items-center align-middle'>
                    <img className='w-5' src={whatsapp} alt='logo' />
                    <p className='pl-4 text-xl'>+448 0023 35778</p>
                </div>
            </div>
            <div className='py-2'>
                <h1 className='lg:text-2xl text-xl text-center'>Find Us On</h1>
                <div className='flex justify-center gap-4 py-4'>
                    <a href='https://x.com/graphix_ltd?s=21' target='_blank' rel='noreferrer'> <img src={Twitter} alt='logo' /></a>
                    <a href='http://facebook.com/graphixlgs' target='_blank' rel='noreferrer'> <img src={Facebook} alt='logo' /></a>
                    <a href='http://instagram.com/graphix.uk/' target='_blank' rel='noreferrer'> <img src={Insta} alt='logo' /></a>
                    <a href='https://www.linkedin.com/company/graphix-ltd/' target='_blank' rel='noreferrer'> <img src={Linkedin} alt='logo' /></a>
                </div>
            </div>
        </div>

    </section>
  )
}
