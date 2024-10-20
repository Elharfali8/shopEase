import React from 'react'

function loading() {
  return (
      <div className='mt-20 min-h-[calc(100vh-80px)] grid place-items-center'>
          <span className="loading loading-spinner loading-lg"></span>
    </div>
  )
}

export default loading