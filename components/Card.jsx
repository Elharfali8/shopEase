import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ id, title, price, image, category, rating }) => {
  const truncateTitle = (title, maxLength = 25) => {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
  };
  
    
  return (
    <Link href={`/products/${id}`} className='card  py-4 transition-all ease-in-out duration-150 hover:scale-105 rounded-lg shadow-md hover:shadow-xl grid place-items-center'>
      <div className='grid place-items-center'>
      <Image src={image} alt={title} className=' object-contain max-h-[200px]' width={200} height={200} />
      </div>
      <div className='flex items-center justify-between gap-x-1 mt-2 lg:mt-3 px-2'>
        <div className='px-2 '>
          <h3 className='text-black capitalize tracking-wide text-lg lg:text-xl'>{truncateTitle(title)}</h3>
          <p className='text-[#757575] capitalize lg:text-lg'>{category}</p>
        </div>
        <h3 className='text-lg lg:text-xl tracking-wide'>
          {price}$
        </h3>
      </div>
    </Link>
  )
}

export default Card