import React from 'react'
export default function SearchBar({setFindingProduct}) {
 

  
  const setter = (e ) =>{
    setFindingProduct(e.target.value.trim())
  }
  return (
    <div className='p-2 bg-blue-300 w-full rounded-t-md flex justify-between'>

  <h1 className='p-2  text-3xl'>Search Products</h1>

<input type="text" placeholder='product...'  className='m-2 p-2 rounded-md focus:outline-none' onChange={setter}/>



    </div>
  )
}
