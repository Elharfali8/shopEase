'use client'

import { BreadCrumbs } from '@/components'
import { fetchSingleProduct } from '@/features/singleProduct/singleProductSlice'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SingleProductPage({params}) {
    const { data, isLoading, error } = useSelector((store) => store.singleProduct)
    const dispatch = useDispatch()
    const router = useRouter()
    const id = params.id

    useEffect(() => {
        dispatch(fetchSingleProduct({id}))
    }, [id])
    
    const { image, title, price, category, description } = data
    const arr = Array.from({ length: 20 }, (_, index) => index + 1);


  return (
      <main className='mt-20 min-h-[calc(100vh-80px)]'>
          <div className="container main-container py-14 lg:py-20">
              <BreadCrumbs name={title} />
              <div className='grid gap-6 lg:gap-8 lg:grid-cols-2 mt-8 lg:mt-10'>
                  <div className='grid place-items-center'>
                      {isLoading ? (
                      <div className="skeleton h-32 w-32"></div>
                      ): (
                        <Image src={image} alt={title} width={350} height={200} className=' object-contain w-[500px] h-[450px]' />
                      )}
                      
                  </div>
                  <div>
                      {isLoading ? (
                          <div className="flex w-52 flex-col gap-4">
                          <div className="skeleton h-4 w-28"></div>
                          <div className="skeleton h-4 w-full"></div>
                          <div className="skeleton h-4 w-full"></div>
                        </div>
                      ) : (
                              <div>
                                  <h1 className='text-2xl lg:text-4xl poppins-semibold tracking-wide mb-2 lg:mb-3'>{title}</h1>
                                  <h3 className='text text-xl lg:text-2xl tracking-wide poppins-medium mb-2 lg:mb-3'>
                                      {category}
                                  </h3>
                                  <h4 className=' text-gray-700 text-xl lg:text-2xl tracking-wide poppins-medium mb-4 lg:mb-5'>
                                      {price}$
                                  </h4>
                                  <p className='lg:text-lg tracking-wide mb-5 lg:mb-8'>
                                      {description}
                                  </p>
                                  <div className=''>
                                      <div className="grid gap-y-1">
                                          <label>Amount</label>
                                          <select select className="select select-bordered w-full sm:max-w-xs">
                                              {arr.map((num, index) => {
                                                  return <option value={num} key={index}>{num}</option>
                                            })}
                                      </select>
                                      </div>
                                        
                                      <button type='button' className='primary-btn flex items-center justify-center w-full sm:max-w-xs mt-3 lg:mt-4'>ADD TO CART</button>
                                  </div>
                              </div>
                      )}
                  </div>
              </div>
          </div>
    </main>
  )
}

export default SingleProductPage