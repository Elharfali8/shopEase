import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
      <footer className="py-6 lg:py-8">
          {/* ----- */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 container main-container ">
            <div className="">
            <h4 className='text-2xl poppins-semibold tracking-wide mb-2 lg:mb-3'>Quick Links</h4>
            <ul className='grid gap-y-1'>
                <li className='text-lg lg:text-xl tracking-wide '><Link href="/">Home</Link></li>
                <li className='text-lg lg:text-xl tracking-wide '><Link href="/">Products</Link></li>
                <li className='text-lg lg:text-xl tracking-wide '><Link href="/">About Us</Link></li>
                <li className='text-lg lg:text-xl tracking-wide '><Link href="/">Contact</Link></li>
            </ul> 
            </div> 
            <div className="">
            <h4 className='text-2xl poppins-semibold tracking-wide mb-2 lg:mb-3'>Contact Us</h4>
                  <div className='grid gap-y-1'>
                  <p className='text-lg lg:text-xl tracking-wide '>Email: support@example.com</p>
            <p className='text-lg lg:text-xl tracking-wide '>Phone: +123 456 7890</p>
            <p className='text-lg lg:text-xl  tracking-wide '>Address: 123 Main Street, City, Country</p>
            </div>
              </div>
              <div className="flex items-center">
                <p className='text-lg lg:text-xl'>&copy; 2024 <span className='poppins-semibold tracking-wide text-[#aecffa]'>Harfali</span>. All rights reserved.</p>
            </div>
          </div>
          {/* ----- */}
  
</footer>

  )
}

export default Footer