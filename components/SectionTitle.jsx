import React from 'react'

const SectionTitle = ({text}) => {
  return (
      <div className='grid place-items-center mb-6 lg:mb-10'>
          <h1 className='text-2xl  lg:text-3xl xl:text-4xl tracking-wide text-[#1A73E8] poppins-semibold capitalize'>{text}</h1>
    </div>
  )
}

export default SectionTitle 