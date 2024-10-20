import Link from "next/link"

function EmptyCart() {
  return (
    <div className='grid place-items-center'>
                          <h1 className='text-3xl md:text-4xl lg:text-5xl capitalize tracking-wide poppins-semibold mb-3 lg:mb-4'>your cart is empty</h1>
                          <div className='grid place-items-center'>
                              <Link href='/products' className='primary-btn capitalize poppins-medium  lg:text-xl'>
                                Back to products
                              </Link>
                          </div>
                      </div>
  )
}

export default EmptyCart