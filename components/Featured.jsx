import React from 'react'
import { Cards, SectionTitle } from '.'

const Featured = () => {
  return (
      <section className='py-8 lg:py-10'>
          <SectionTitle text='featured products' />
          <div className='container main-container'>
              <Cards />
              
          </div>
    </section>
  )
}

export default Featured