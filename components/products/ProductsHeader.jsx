'use client'

import React, { useEffect, useState } from 'react'
import { FilterInput, InputRange, SelectInput } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '@/features/categories/categoriesSlice'
import { BsGrid } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { fetchProducts } from '@/features/products/productsSlice'

function ProductsHeader({handleLayout, productsLayout}) {
    const { data, isLoading, error } = useSelector((store) => store.categories)
    const { data:products } = useSelector((store) => store.products)
    const dispatch = useDispatch()
    const [valuePrice, setValuePrice] = useState(100)
    const [price, setPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(1000)

    const numProducts = products?.length || 0
    
    const productsNum = (num) => {
        if (num) {
            return `${num} ${num > 1 ? 'products' : 'product'}`
        }
        return `there is no products`
    }

    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchProducts())
    }, [])

    const newCats = [...new Set(['all', ...data])];
    const sort = ['a-z', 'z-a', 'high', 'low']

    const handlePriceChange = (e) => {
        const value = e.target.value
        setValuePrice(value)
    }

  return (
      <div className='py-10 lg:py-16 px-4'>
          <div className="container mx-auto newsletter-bg py-4 lg:py-6 px-2 lg:px-4 rounded-lg grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* --------- */}
              <FilterInput label='Search for Product' type='text' name='search' /> 
              {/* ------------ */}
              <SelectInput data={newCats} label='Select Category' name='category' />
              {/* ------------ */}
              <SelectInput data={sort} label='Sort By' name='sort' />
              {/* ------------ */}
              <InputRange name='price' price={price} value={valuePrice} label='Selected Price' maxPrice={maxPrice} handlePriceChange={handlePriceChange} />
              {/* ------------ */}
              <div className='grid place-items-center'>
                  <button type='button' className='w-full h-[38px] text-lg lg:text-xl poppins-medium tracking-wide  primary-btn flex items-center justify-center'>
                      Submit
                  </button>
              </div>
              {/* ------------ */}
              <div className='grid place-items-center'>
                  <button type='button' className='w-full h-[38px] text-lg lg:text-xl poppins-medium tracking-wide  error-btn flex items-center justify-center'>
                      Reset
                  </button>
              </div>
          </div>
          <div className='py-6 lg:py-10 container main-container flex items-center justify-between'>
              <h3 className='lg:text-lg capitalize poppins-medium tracking-wide'>
                  {productsNum(numProducts)}
              </h3>
              <div className='flex items-center gap-x-2'>
                  <button type='button' className={`p-1 rounded ${productsLayout === 'grid' ? 'bg-[#1A73E8] text-white' : 'text-[#1A73E8] bg-white'} text-xl shadow-md`} onClick={() => handleLayout('grid')}>
                      <BsGrid />
                  </button>
                  <button type='button' className={`p-1 rounded ${productsLayout === 'list' ? 'bg-[#1A73E8] text-white' : 'text-[#1A73E8] bg-white'} text-xl shadow-md`} onClick={() => handleLayout('list')}>
                      <FaList />
                  </button>
              </div>
          </div>
          <div className="container main-container">
              <div className='h-[2px] w-full bg-gray-300' />
          </div>
    </div>
  )
}

export default ProductsHeader