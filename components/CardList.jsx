import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardList = ({ id, title, price, image, category, rating }) => {
  const truncateTitle = (title, maxLength = 25) => {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
  };
  
    
  return (
    <Link href={`/products/${id}`} className='card  py-4 transition-all ease-in-out duration-150 hover:scale-105 rounded-lg shadow-md hover:shadow-xl '>
          <div className="flex items-center gap-6 px-2 lg:px-4">
          <div className='grid place-items-center'>
              <Image src={image} alt={name} className='max-w-[200px] h-[250px] object-contain' width={200} height={200} />
          </div>
          <div>
          <div className='px-2 '>
          <h3 className='text-black capitalize tracking-wide text-lg lg:text-xl'>{title}</h3>
          <p className='text-[#757575] capitalize lg:text-lg'>{category}</p>
        </div>
        <h3 className='text-lg lg:text-xl tracking-wide'>
          {price}$
        </h3>
          </div>
          </div>
    </Link>
  )
}

export default CardList