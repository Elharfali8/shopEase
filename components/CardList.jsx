import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardList = ({ id, title, price, image, category, rating }) => {
  
  
    
  return (
    <Link href={`/products/${id}`} className='card  py-4 transition-all ease-in-out duration-150 hover:scale-105 rounded-lg shadow-md hover:shadow-xl '>
          <div className='md:flex items-center justify-between px-2 lg:px-4' >
        <div className="flex flex-col items-start md:flex-row md:items-center gap-6  ">
        <div className='grid place-items-center'>
              <Image src={image} alt={name} className='max-w-[180px] h-[180px] object-contain border rounded-lg shadow-lg p-1' width={200} height={200} />
          </div>
          <div className=''>
              <div className='px-2 '>
              <h3 className='text-black capitalize tracking-wide text-lg lg:text-xl xl:text-2xl transition-all ease-in-out duration-150 poppins-semibold'>{title}</h3>
              <p className='text-[#757575] capitalize lg:text-lg'>{category}</p>
            </div>
            
        </div>
          </div>
        <h3 className='text-lg lg:text-xl tracking-wide pl-2 md:pl-0 poppins-semibold'>
              {price}$
            </h3>
          </div>
    </Link>
  )
}

export default CardList