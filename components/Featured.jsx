 import React from 'react'
import { Cards, SectionTitle } from '.'
import Link from 'next/link'

const Featured = () => {
  return (
      <section className='py-8 lg:py-10'>
          <SectionTitle text='featured products' />
          <div className='container main-container'>
              <Cards />
        <div className='grid place-items-center mt-6 lg:mt-8'>
        <Link href='/products' className='primary-btn text-lg lg:text-xl capitalize tracking-wide poppins-medium'>All products</Link>
              </div>
          </div>
    </section>
  )
}

export default Featured