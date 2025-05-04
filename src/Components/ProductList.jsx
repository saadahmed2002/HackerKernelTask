import React from 'react'

export default function ProductList({products, removeProduct}) {
   

  return (
    <div className='bg-blue-300 rounded-b-xl p-8 w-full'>
      <h1 className='p-2  text-3xl'>Products List</h1>
      
        {
        products.length > 0 ?  products.map((item, index) =>{
         
          return <div key={item.name} className=" text-black p-1 bg-gray-200 m-1 flex justify-between">

              <h1 className='p-1  text-black'>{item.name}</h1>
              <p>{item.price}</p>
              <button className='' onClick={()=>removeProduct(item.name)}>❌</button>

            </div>
          }) : <h1>No Product Found</h1>
        }

    </div>
  )
}
