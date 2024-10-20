'use client'

import Image from "next/image"
import { useState } from "react"

function CardCart({id, image, title, category, price, quantity}) {
    const [quant, setQuant] = useState(quantity || null)

    const arr = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between   gap-4  bg-white px-1 py-2 rounded-lg mb-2 shadow-md transition-all ease-in-out duration-150 hover:shadow-lg">
          <div className="grid sm:place-items-center">
              <Image src={image} alt={title} width={250} height={150} className="w-[250px] h-[150px] object-contain rounded-lg" />
          </div>
          <div>
              <h3 className="text-lg lg:text-xl poppins-medium tracking-wide capitalize mb-2">{title?.slice(0, 25)}</h3>
              <p className="text">{category}</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 ">
          <div className="grid gap-y-1">
            <label>Amount</label>
            <select
                value={quant}
                onChange={(e) => setQuant(parseInt(e.target.value))}
                    className="select select-bordered w-full sm:max-w-xs">
                    {arr.map((num, index) => {
                        return <option value={num} key={index}>{num}</option>
                })}
            </select>
          </div>
          <div className="grid place-items-center">
              <p className="text-lg lg:text-xl poppins-medium">{price}$</p>
          </div>
          </div>
    </div>
  )
}

export default CardCart