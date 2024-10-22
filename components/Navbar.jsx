import { navLinks } from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import { FaBars, FaCartShopping } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
UserButton,
  useUser
} from '@clerk/nextjs'


import { useSelector } from 'react-redux';

const Navbar = ({ isOpen, handleNav }) => {
  const { isLoading, amount } = useSelector((store) => store.cart)
  const { user } = useUser()

  return (
      <nav className='navbar h-20 fixed top-0 left-0 right-0 shadow grid place-items-center z-[99]'>
          <div className="container main-container flex items-center justify-between">
              <Link href='/' className='text-xl md:text-2xl lg:text-3xl tracking-wide poppins-semibold'>
                ShopEase
              </Link>
              <ul className='hidden lg:flex items-center gap-x-2'>
                  {navLinks.map((link) => {
                      const { id, title, path } = link
                      return (
                          <li key={id} className=''>
                              <Link href={path} className='px-3 py-1 capitalize text-lg poppins-medium tracking-wide xl:text-xl '>
                                {title}
                              </Link>
                          </li>
                      )
                  })}
              </ul>
              <div className='grid lg:hidden place-items-center'>
                  {isOpen ? (
                      <button type='button' className='text-[#1A73E8] transition-all ease-in-out duration-150 hover:text-[#1665C0]' onClick={handleNav}>
                      <FaTimes size={27} />
                  </button>
                  ): (
                    <button type='button' className='text-[#1A73E8] transition-all ease-in-out duration-150 hover:text-[#1665C0]' onClick={handleNav}>
                    <FaBars size={27} />
                </button>
                  )}
        </div>
        <div className='hidden lg:flex items-center justify-between gap-x-4'>
          <button type='button' className='text-2xl text-[#1A73E8] transition-all ease-in-out duration-150 hover:text-[#1665C0] relative'>
            <FaCartShopping />
            <span className='text-sm lg:text-md absolute top-[-12px] bg-[#F44336] text-white h-5 w-5 rounded-full poppins-medium inline-block'>
              {isLoading ? '-' : amount}
            </span>
          </button>
          <div>
          <SignedOut >
              <div className='flex items-center gap-x-2'>
              <SignInButton className='text-white primary-btn' />
              <SignUpButton className='signUp-btn' />
              </div>
            </SignedOut>
            <SignedIn>
              <div className='flex items-center gap-x-2 p-1 newsletter-bg rounded-lg'>
              <UserButton />
              <h3 className='text-lg capitalize poppins-medium'>{user?.fullName}</h3>
              </div>
          </SignedIn> 
          </div>
        </div>
          </div>
    </nav>
  )
}

export default Navbar