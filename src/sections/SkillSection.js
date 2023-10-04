import React from 'react'

export default function SkillSection() {
  return (
    <section className=' bg-black h-full flex flex-col justify-center text-white py-12 lg:text-left text-center'>
        <h1 className='lg:text-5xl text-3xl pb-12 text-center opacity-90'>Our Expertise</h1>
        <div className='container mx-auto px-4'>
            <div className='flex lg:flex-row flex-col justify-between lg:text-3xl text-lg opacity-70 '>
                <div className='lg:text-center text-left'><h1 className='lg:mb-4 mb-0'>Branding and Identity Design</h1></div>
                <div className='lg:text-center text-center lg:py-12 py-2'><h1>Illustrations and Infographics</h1></div>
                <div className='lg:text-center text-right lg:py-0 py-1'><h1>Logo Design</h1></div>
            </div>
            <div className='flex lg:flex-row flex-col justify-around lg:text-3xl text-lg opacity-70 lg:py-6 py-1'>
                <div className='lg:text-center text-right lg:py-12 py-1'><h1>Social Media Graphics</h1></div>
                <div className='lg:text-center text-center lg:py-6 py-1'><h1>Motion Graphics and Animation</h1></div>
            </div>
            <div className='flex lg:flex-row flex-col justify-between lg:text-3xl text-lg opacity-70 lg:py-12 py-0'>
                <div className='lg:text-center text-left lg:py-12 py-1'><h1>Packaging Design</h1></div>
                <div className='lg:text-center text-center lg:py-4 py-1'><h1>Typography and Layout Design</h1></div>

                <div className='lg:text-center text-right lg:py-0 py-1'><h1>Video Production and Editing</h1></div>
            </div>
        </div>
    </section>
  )
}
