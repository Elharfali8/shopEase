import React from 'react'
import { SectionTitle } from '.'
import news from '@/images/news.png'
import Image from 'next/image'

const Newsletter = () => {
  return (
    <section className='py-8 lg:py-10 newsletter-bg'>
          <SectionTitle text='Stay Updated' />
          <div className="container main-container grid gap-1 place-items-center ">
              <div className='grid place-items-center'>
                  <p className='text-lg md:text-xl xl:text-2xl mb-2 poppins-medium tracking-wide'>Subscribe to our newsletter for the latest deals and offers!</p>
                  <form className='grid md:grid-cols-4 gap-y-2 w-full'>
                      <input type="email" placeholder="Enter your email"  className='h-[35px] lg:h-[40px] w-full md:col-span-3 pl-2 tracking-wide focus:outline-none md:text-lg md:rounded-tr-none md:rounded-br-none rounded-lg'/>
                      <button type="submit" className='h-[35px] lg:h-[40px] w-full md:col-span-1 bg-[#1A73E8] text-white tracking-wide poppins-medium text-lg lg:text-xl md:rounded-tl-none md:rounded-bl-none rounded-lg transition-all ease-in-out duration-150 hover:bg-[#1665C0]'>Subscribe</button>
                  </form>
              </div>
          </div>
    </section>
  )
}

export default Newsletter