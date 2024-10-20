import { navLinks } from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
  UserButton,
    useSignIn,
    useUser
  } from '@clerk/nextjs'
import { FaCartShopping } from 'react-icons/fa6'
import { useSelector } from 'react-redux'

const Sidebar = ({ isOpen, handleNav }) => {
  const { isLoading, amount } = useSelector((store) => store.cart)
    const { user } = useUser()

    return (
        <aside className={`
            fixed lg:hidden p-8 top-20 right-0 left-0 bg-[#f3f3f3] h-full
            ${isOpen ? 'z-[99] translate-x-0  transition-all ease-in-out duration-150' : 'z-0 translate-x-[-100%] transition-all ease-in-out duration-150'}
        `}>
            <ul className='grid gap-y-4'>
            {navLinks.map((link) => {
                      const { id, title, path } = link
                      return (
                          <li key={id}>
                              <Link href={path} className=' capitalize tracking-wide text-lg md:text-xl block py-1 pl-2 bg-white rounded-lg transition-all ease-in-out duration-150 hover:bg-[#1A73E8] hover:text-white hover:pl-3' onClick={handleNav}>
                                {title}
                              </Link>
                          </li>
                      )
                  })}
            </ul>
            <div className='mt-6 grid place-items-center'>
            <button type='button' className='text-2xl text-[#1A73E8] transition-all ease-in-out duration-150 hover:text-[#1665C0] relative'>
            <FaCartShopping />
            <span className='text-sm lg:text-md absolute top-[-12px] bg-[#F44336] text-white h-5 w-5 rounded-full poppins-medium inline-block'>
              {isLoading ? '-' : amount}
            </span>
          </button>
            </div>
            <div className='mt-6 grid place-items-center'>
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
        </aside>
  )
}

export default Sidebar