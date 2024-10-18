import Link from 'next/link'
import React from 'react'

function BreadCrumbs({ name }) {
  return (
    <div className="breadcrumbs text-sm">
  <ul className='text-lg lg:text-xl'>
    <li><Link href='/'>Home</Link></li>
    <li><Link href='/products'>Products</Link></li>
              {name && <li>{name?.slice(0, 20)}...</li>}
  </ul>
</div>
  )
}

export default BreadCrumbs