import React from 'react'

export default function SkillSection() {
  return (
    <section className=' bg-black h-screen flex flex-col justify-center text-white py-12 lg:text-left text-center'>
        <div className='container mx-auto px-4'>
            <div className='flex lg:flex-row flex-col justify-between lg:text-3xl text-xl '>
                <div className=''><h1 className='mb-4'>Branding and Identity Design</h1></div>
                <div className='py-12'><h1>Illustrations and Infographics</h1></div>
                <div className=''><h1>Logo Design</h1></div>
            </div>
            <div className='flex lg:flex-row flex-col justify-around lg:text-3xl text-xl py-6'>
                <div className='py-12'><h1>Social Media Graphics</h1></div>
                <div className='lg:py-6 py-2'><h1>Motion Graphics and Animation</h1></div>
            </div>
            <div className='flex lg:flex-row flex-col justify-between lg:text-3xl text-xl lg:py-12 py-0'>
                <div className='lg:py-12 py-4'><h1>Packaging Design</h1></div>
                <div className='lg:py-4 py-6'><h1>Typography and Layout Design</h1></div>

                <div className='lg:py-0 py-6'><h1>Video Production and Editing</h1></div>
            </div>
        </div>
    </section>
  )
}
