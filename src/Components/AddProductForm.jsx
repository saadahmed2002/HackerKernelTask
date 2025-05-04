import React, { useState } from 'react'

export default function AddProductForm({addProducts}) {
  const [newProductTitle, setNewProductTitle] = useState("")
  const [newProductPrice, setNewProductPrice] = useState("")
  return (
    <div className='bg-red-400 w-full'>
      <h1 className='p-2  text-3xl'>Products List</h1>
      
      <div className=" p-2 flex justify-between">
        <input placeholder='Product name...' className='text-xl  rounded-lg p-2  m-2  w-full' type="text" value={newProductTitle} onChange={(e)=>setNewProductTitle(e.target.value.trim())} />
        <input placeholder='Product price...'   className='text-xl  rounded-lg    m-2 p-2 w-full'  type="number" value={newProductPrice} onChange={(e)=>setNewProductPrice(Number(e.target.value.trim()
        ))} />
        <button className='bg-green-500 p-1 m-1 rounded-xl w-32' onClick={()=>{addProducts({name: newProductTitle, price:newProductPrice})
       setNewProductPrice('')
       setNewProductTitle('')
       }}> Add </button>
      </div>
    </div>
  )
}
