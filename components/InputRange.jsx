import React from 'react'

function InputRange({ name, label, price, maxPrice, handlePriceChange , value}) {
    
  return (
    <div className='grid'>
          <div className='flex items-center justify-between'>
              <label htmlFor={name} className='mb-2 md:text-lg  tracking-wide'>{label}</label>
              <label htmlFor={name} className='mb-2 md:text-lg  tracking-wide'>{value}</label>
          </div>
          <input type="range" min={0} max={maxPrice} value={value} step='50' className="range range-sm range-info"  onChange={handlePriceChange} />
      </div>
  )
}

export default InputRange