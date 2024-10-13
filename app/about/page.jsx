import Image from 'next/image'
import React from 'react'
import aboutImage from '@/images/about.jpg'

function AboutPage() {
  return (
      <main className='mt-20 grid place-items-center min-h-[calc(100vh-80px)]'>
          <div className="container main-container grid md:grid-cols-2 gap-6">
              <div className='grid place-items-center'>
                  <Image src={aboutImage} className='w-full max-w-[600px] rounded-xl shadow-lg'  />
              </div>
              <div className='flex justify-center flex-col'>
                  <h1 className='text-2xl lg:text-5xl tracking-wide poppins-medium mb-3'>Empowering Your Shopping Experience</h1>
                  <p className='text-lg lg:text-xl text'>
                  Discover a modern, convenient, and personalized way to shop. Our platform is designed to bring you a seamless experience with a curated selection of products and a user-friendly interface, all tailored to meet your needs.
                  </p>
              </div>
          </div>
    </main>
  )
}

export default AboutPage