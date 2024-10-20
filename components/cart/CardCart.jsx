'use client'

import { removeItemFromCart } from "@/features/cart/cartSlice";
import Image from "next/image"
import { useState } from "react"
import { FaTrash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function CardCart({id, image, title, category, price, quantity}) {
    const [quant, setQuant] = useState(quantity || null)
    const dispatch = useDispatch()

    const arr = Array.from({ length: 20 }, (_, index) => index + 1);

    const handleRemoveItem = () => {
        dispatch(removeItemFromCart({ id, title, price, image, category, quantity: quant }));
      };

  return (
      <div className="">
          <div className="flex flex-col sm:flex-row sm:items-center md:justify-between   gap-y-4 gap-x-6  px-1 py-2 bg-white  rounded-lg  shadow-md transition-all ease-in-out duration-150 hover:shadow-lg relative">
          <div className="grid sm:place-items-center ">
              <Image src={image} alt={title} width={250} height={150} className="w-[250px] h-[150px] object-contain rounded-lg" />
          </div>
          <div className="">
              <h3 className="text-lg lg:text-xl poppins-medium tracking-wide capitalize mb-2">{title?.slice(0, 25)}</h3>
              <p className="text">{category}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 ">
          <div className="grid gap-y-1">
            <label>Amount</label>
            <select
                value={quant}
                      onChange={(e) => {
                          setQuant(parseInt(e.target.value))
                          toast.success('Product quantity upgraded')
                }}
                    className="select select-bordered w-full sm:max-w-xs">
                    {arr.map((num, index) => {
                        return <option value={num} key={index}>{num}</option>
                })}
                  </select>
                  <div className="grid place-items-center">
                  <p className="text-lg lg:text-xl poppins-medium mt-1">{price}$</p>
                  </div>
          </div>
          
          </div>
          
          </div>
          <div className="flex items-center justify-end w-full">
          <button type="button" className="flex w-full md:w-auto items-center gap-x-1 px-8 py-2 mt-1 justify-center text-white transition-all ease-in-out duration-150 hover:bg-red-600 bg-red-500 rounded-lg" onClick={handleRemoveItem}><FaTrash /></button>
          </div>
      </div>
  )
}

export default CardCart