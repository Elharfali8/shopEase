import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='min-h-[calc(100vh-80px)] w-full hero px-4 lg:px-2 xl:px-0'>
       <div class="">
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl poppins-medium mb-1 lg:mb-2'>Discover the Best Products, Tailored for You</h1>
        <p className='text-lg md:text-xl xl:text-2xl mb-2 lg:mb-3 text'>Explore our collection of top-rated items. Free shipping on all orders!</p>
        <div class="flex items-center justify-center gap-4 flex-col sm:flex-row">
          <Link href="/products" class="primary-btn sm:text-lg xl:text-xl tracking-wide poppins-medium w-full sm:w-auto ">Shop Now</Link>
          <Link href="#signup" class="secondary-btn sm:text-lg xl:text-xl tracking-wide poppins-medium w-full sm:w-auto">Sign Up & Save 10%</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero