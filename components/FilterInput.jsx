import React from 'react'

function FilterInput({label, name, type}) {
  return (
    <div className='grid'>
          <label htmlFor={name} className='mb-2 md:text-lg  tracking-wide'>{label}</label>
                  <input type={type} name={name} id={name} className='focus:outline-none  h-[32px] rounded-lg pl-2  tracking-wide' placeholder='Search...' />
              </div>
  )
}

export default FilterInput