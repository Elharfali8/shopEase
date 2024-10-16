import React from 'react'
import { CardList } from '.'

function ListLayout({data}) {
  return (
    <div className='grid gap-6 grid-cols-1'>
          {data.map((item) => {
              return <CardList key={item.id} {...item} /> 
          })}
    </div>
  )
}

export default ListLayout