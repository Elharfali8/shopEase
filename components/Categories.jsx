'use client'

import React, { useEffect } from 'react'
import { SectionTitle } from '.'
import { bracelet, womanClothes, maleClothes, responsive } from '@/images'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '@/features/categories/categoriesSlice'
import Image from 'next/image'
import Link from 'next/link'

const Categories = () => {
    const { isLoading, data, error } = useSelector((store) => store.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    const catIcon = (name) => {
        switch (name) {
            case 'electronics' :
                return <Image src={responsive} alt={name} width={70} height={70} />
            case 'jewelery' :
                return <Image src={bracelet} alt={name} width={70} height={70} />
            case "men's clothing" :
                return <Image src={maleClothes} alt={name} width={70} height={70} />
            case "women's clothing" :
                return <Image src={womanClothes} alt={name} width={70} height={70} />
            default:
                return null
        }
    }

  return (
      <section className='py-8 lg:py-10 bg-[#FFFFFF]'>
          <SectionTitle text='Shop by Category' />
          <div className='container main-container grid place-items-center'>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {data?.map((icon, index) => {
                  
                  return (
                      <Link key={index} href='/products' className='grid place-items-center p-4 bg-[#F4F7F9] rounded-lg transition-all ease-in-out duration-150 hover:scale-105 shadow-md hover:shadow-[#E0E0E0] text-[#757575] hover:text-[#333333]'>
                          <span>{catIcon(icon)}</span>
                          <h2 className='mt-2 capitalize tracking-wide poppins-medium text-lg lg:text-xl '>{icon}</h2>
                      </Link>
                  )
              })}
              </div>
          </div>
    </section>
  )
}

export default Categories