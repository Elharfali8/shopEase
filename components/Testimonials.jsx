import React from 'react'
import { SectionTitle } from '.'
import { testimonials } from '@/utils/data'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'

const Testimonials = () => {
  return (
      <section className='py-8 lg:py-10'>
          <SectionTitle text='What Our Customers Say' />
          <div className="container main-container grid place-items-center">
              <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                  {testimonials.map((test) => {
                      const { id, name, desc, rate, img } = test
                      return (
                          <div key={id} className='bg-[#FFFFFF] shadow-md  transition-all ease-in-out duration-150 hover:scale-105 hover:shadow-md hover:shadow-[#E0E0E0] rounded-lg p-3'>
                              <p className='lg:text-lg  mb-2 text-[#666]'>{desc}</p>
                              <div className='flex items-center justify-between'>
                                  <div className='flex items-center gap-1'>
                                      <div className='h-[80px] w-[80px] rounded-full overflow-hidden bg-slate-200'>
                                      <Image src={img} height={80} width={80} className=' object-cover h-full rounded-full' />
                                      </div>
                                      <div className='ml-2'>
                                          <h3 className='text-lg lg:text-xl capitalize poppins-medium'>{name}</h3>
                                          <p className='flex items-center gap-x-1 lg:text-lg text'>{rate} <span><FaStar color='orange' /></span></p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      )
                  })}
              </div>
          </div>
    </section>
  )
}

export default Testimonials