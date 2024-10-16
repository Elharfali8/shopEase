import React from 'react'

function SelectInput({ data, name, label }) {
    
    

  return (
    <div className='grid'>
          <label htmlFor={name} className='mb-2 md:text-lg  tracking-wide'>{label}</label>
          <select name={name} id={name} className='focus:outline-none pl-2 bg-white tracking-wide h-[32px] rounded-lg'>
              {data?.map((cat, index) => {
                  return (
                      <option value={cat} key={index}>{cat}</option>
                  )
              })}
          </select>
      </div>
  )
}

export default SelectInput