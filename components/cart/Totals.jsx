import { calcTotal } from '@/features/cart/cartSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
  } from '@clerk/nextjs'

function Totals() {
    const {orderTotal, total, isLoading, shipping, tax} = useSelector((store) => store.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(calcTotal())
    }, [orderTotal, total])

  return (
      <div className='lg:sticky lg:top-24  '>
          <div className='newsletter-bg rounded-lg px-4 py-6 lg:py-8'>
          <div className='grid gap-y-3 mb-4 lg:mb-6'>
          <div className='flex items-center justify-between pb-1 border-b-[2px] border-b-gray-200 '>
              <h3 className='text-[#555] poppins-medium lg:text-lg capitalize tracking-wide'>subtotal</h3>
                      <p className='text-black poppins-medium lg:text-lg capitalize tracking-wide'>{isLoading ? '...' : total.toFixed(2)}$</p>
          </div>
          <div className='flex items-center justify-between pb-1 border-b-[2px] border-b-gray-200 '>
              <h3 className='text-[#555] poppins-medium lg:text-lg capitalize tracking-wide'>shipping</h3>
                      <p className='text-black poppins-medium lg:text-lg capitalize tracking-wide'>{isLoading ? '...' : shipping}$</p>
          </div>
          <div className='flex items-center justify-between pb-1 border-b-[2px] border-b-gray-200 '>
              <h3 className='text-[#555] poppins-medium lg:text-lg capitalize tracking-wide'>tax</h3>
                      <p className='text-black poppins-medium lg:text-lg capitalize tracking-wide'>{isLoading ? '...' : tax}$</p>
          </div>
          </div>
          <div className='flex items-center justify-between px-2'>
              <h3 className='text-[#555] poppins-medium lg:text-lg capitalize tracking-wide'>order total</h3>
                  <p className='text-black poppins-medium lg:text-lg capitalize tracking-wide'>{isLoading ? '...' : orderTotal.toFixed(2)}$</p>
          </div>
      </div>
      <div className='grid place-items-center mt-4 lg:mt-6'>
      <button type="button" className='primary-btn w-full sm:text-lg lg:text-xl poppins-medium tracking-wide'>
                  <SignedOut>
                      <SignInButton />
                  </SignedOut>
                  <SignedIn>
                      Continue
                  </SignedIn>
      </button>
  </div>
      </div>
  )
}

export default Totals