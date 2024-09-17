import { navLinks } from '@/utils/data'
import Link from 'next/link'
import React from 'react'

const Sidebar = ({isOpen, handleNav}) => {
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
                              <Link href={path} className=' capitalize tracking-wide text-lg md:text-xl block py-1 pl-2 bg-white rounded-lg transition-all ease-in-out duration-150 hover:bg-[#1A73E8] hover:text-white hover:pl-3'>
                                {title}
                              </Link>
                          </li>
                      )
                  })}
            </ul>
        </aside>
  )
}

export default Sidebar