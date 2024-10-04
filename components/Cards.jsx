'use client'

import { fetchFeatured } from '@/features/featured/featuredSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '.'

const Cards = () => {
    const { isLoading, error, data } = useSelector((store) => store.featured)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFeatured())
    }, [dispatch])

  return (
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {data?.map((item) => {
              return <Card key={item.id} {...item} />
          })}
    </div>
  )
}

export default Cards