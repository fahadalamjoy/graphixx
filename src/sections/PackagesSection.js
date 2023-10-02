import React from 'react'
import Basic from '../assets/basic.png'
import Standard from '../assets/standard.png'
import Pro from '../assets/pro.png'


export default function PackagesSection() {
    const triangle = {
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
      };
    
    const rounded = {
        clipPath: "circle(50% at 50% 50%)",
      };
    
  return (
    <section className='bg-white h-full flex flex-col justify-center py-12'>
        <h1 className='lg:text-4xl text-3xl text-center text-black pt-6 font-bold'>Find the perfect plan that’s right for you</h1>
      <div className='container mx-auto px-4 '>
        <div className='flex lg:flex-row flex-col lg:gap-0 gap-8  justify-around py-12'>
            <div className='bg-black lg:w-3/12 w-full text-white flex flex-col items-center p-16 text-center font-bold' style={rounded}>
                <div><img src={Basic} alt='skilImage' />  </div>
                <h1 className='pt-1'>Basic</h1>
                <h1 className='text-2xl'>£89/mo</h1>
                <div className='pt-4'>
                    <h1>9 Contents /mo</h1>
                    <h1>£20 for SEO Service</h1>
                    <h1 className='text-xs'>£10 for Social Media Posting</h1>
                </div>
            </div>
            <div className='bg-black lg:w-3/12 w-full text-white flex flex-col items-center p-16 text-center font-bold' style={triangle}>
                <div><img src={Standard} alt='skilImage' />  </div>
                <h1 className='pt-1'>Standard</h1>
                <h1 className='text-2xl'>£89/mo</h1>
                <div className='pt-4'>
                    <h1>9 Contents /mo</h1>
                    <h1>£20 for SEO Service</h1>
                    <h1 className='text-xs'>£10 for Social Media Posting</h1>
                </div>
            </div>
            <div className='bg-black lg:w-3/12 w-full text-white flex flex-col items-center p-16 text-center font-bold'>
                <div><img src={Pro} alt='skilImage' />  </div>
                <h1 className='pt-1'>Pro</h1>
                <h1 className='text-2xl'>£89/mo</h1>
                <div className='pt-4'>
                    <h1>9 Contents /mo</h1>
                    <h1>£20 for SEO Service</h1>
                    <h1 className='text-xs'>£10 for Social Media Posting</h1>
                </div>
            </div>
        </div>
      </div>

    </section>
  )
}
