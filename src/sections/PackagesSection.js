import React from 'react'
import Basic from '../assets/basic.png'
import Standard from '../assets/standard.png'
import Pro from '../assets/pro.png'


export default function PackagesSection() {
    // const triangle = {
    //     clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    //   };
    
    // const rounded = {
    //     clipPath: "circle(50% at 50% 50%)",
    //   };
    
  return (
    <section className='bg-white h-full flex flex-col justify-center py-6'>
        <h1 className='lg:text-4xl text-3xl text-center text-black pt-6 font-bold'>Find the perfect plan that’s right for you</h1>
      <div className='container mx-auto px-4 '>
        <div className='flex lg:flex-row flex-col lg:gap-0 gap-8  justify-around py-12'>
            <div className='hover:bg-white hover:border-2 hover:rounded-3xl hover:border-black lg:w-3/12 w-full text-black flex flex-col items-center p-16 text-center font-bold'>
                <div><img src={Basic} alt='skilImage' />  </div>
                <h1 className='pt-1 text-2xl font-bold'>Basic</h1>
                <h1 className='text-4xl font-extrabold'>£89 <span className='text-base'> /mo</span></h1>
                <div className='pt-2'>
                    <h1 className='text-2xl'>9 Contents /mo</h1>
                    {/* <h1>£20 for SEO Service</h1>
                    <h1 className='text-xs'>£10 for Social Media Posting</h1> */}
                </div>
                <div className='px-4 py-2 mt-4 bg-black text-white rounded-md'>
                    <h1 className='text-xs'>Buy Now</h1>
                </div>
            </div>
            <div className='hover:bg-white hover:border-2 hover:rounded-3xl hover:border-black lg:w-3/12 w-full text-black flex flex-col items-center p-16 text-center font-bold'>
                <div><img src={Standard} alt='skilImage' />  </div>
                <h1 className='pt-1 text-2xl font-bold'>Standard</h1>
                <h1 className='text-4xl font-extrabold'>£169 <span className='text-base'> /mo</span></h1>
                <div className='pt-2'>
                    <h1 className='text-2xl'>18 Contents <span className='text-base'> /mo</span></h1>
                    {/* <h1>£20 for SEO Service</h1>
                    <h1 className='text-xs'>£10 for Social Media Posting</h1> */}
                </div>
                <div className='px-4 py-2 mt-4 bg-black text-white rounded-md'>
                    <h1 className='text-xs'>Buy Now</h1>
                </div>
            </div>
            <div className='hover:bg-white hover:border-2 hover:rounded-3xl hover:border-black lg:w-3/12 w-full text-black flex flex-col items-center p-16 text-center font-bold'>
                <div ><img src={Pro} alt='skilImage' />  </div>
                <h1 className='pt-1 text-2xl font-bold'>Pro</h1>
                <h1 className='text-4xl font-extrabold'>£229 <span className='text-base'> /mo</span></h1>
                <div className='pt-2'>
                    <h1 className='text-2xl'>25 Contents <span className='text-base'>/mo</span></h1>
                    {/* <h1>£20 for SEO Service</h1>
                    <h1 className='text-xs'>£10 for Social Media Posting</h1> */}
                </div>
                <div className='px-4 py-2 mt-4 bg-black text-white rounded-md'>
                    <h1 className='text-xs'>Buy Now</h1>
                </div>
            </div>
        </div>
                <h1 className='text-2xl text-center text-black'>SEO (Search Engine Optimisation) Add-On Service Available!</h1>
      </div>

    </section>
  )
}
