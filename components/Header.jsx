'use client'

import React, { useState } from 'react'
import Navbar from './Navbar'
import { Sidebar } from '.'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleNav = () => {
        setIsOpen((prev) => !prev)
    }

  return (
      <>
          <Navbar isOpen={isOpen} handleNav={handleNav} />
          <Sidebar isOpen={isOpen} handleNav={handleNav} />
      </>
  )
}

export default Header