'use client'

import { GridLayout, ListLayout } from '@/components'
import ProductsHeader from '@/components/products/ProductsHeader'
import { fetchProducts } from '@/features/products/productsSlice'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ProductsPage() {
  const { data, isLoading, error } = useSelector((store) => store.products)
  const dispatch = useDispatch()
  const [productsLayout, setProductsLayout] = useState('grid')

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
  
    const handleLayout = (layout) => {
      if (layout === 'grid' || layout === 'list') {
        setProductsLayout(layout);
      }
  };

  return (
      <main className='my-20 min-h-[calc(100vh-80px)]'>
              <ProductsHeader productsLayout={productsLayout} handleLayout={handleLayout} />
      <div className="container main-container ">
        {productsLayout === 'grid' ? (
          <GridLayout data={data} />
        ) : (
            <ListLayout data={data} />
        )}
          </div>
    </main>
  )
}

export default ProductsPage