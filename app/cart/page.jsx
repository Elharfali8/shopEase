'use client'

import { CardCart, EmptyCart, Totals } from '@/components/cart'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CartPage() {
    const { cart, isLoading, error } = useSelector((store) => store.cart)
    const dispatch = useDispatch()
    

  return (
      <main className={`mt-20 min-h-[calc(300vh-80px)] ${cart?.length < 1 && 'h-full w-full grid place-items-center'}`}>
          <div className={`container main-container py-14 lg:py-20 `}>
              {cart?.length > 0 ? (
                  <div className=''>
                      <div className='pb-2 lg:pb-3 border-b-[3px] border-b-gray-300 mb-4 lg:mb-8'>
                          <h1 className='text-2xl lg:text-3xl poppins-semibold text-[#333333]'>Shopping Cart</h1>
                      </div>
                      <div className='grid gap-4 grid-cols-1 lg:grid-cols-5'>
                          <div className='lg:col-span-3 p-2 grid gap-6 lg:gap-8'>
                              {cart?.map((item) => {
                                  return <CardCart key={item.id} {...item} />
                              })}
                          </div>
                          <div className='lg:col-span-2 p-2 '>
                              <Totals />
                              
                          </div>
                      </div>
                  </div>
              ) : (
                      <EmptyCart />
              )}
          </div>
    </main>
  )
}

export default CartPage