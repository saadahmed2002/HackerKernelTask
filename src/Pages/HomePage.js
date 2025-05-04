import React, { useState } from 'react'
import SearchBar from '../Components/SearchBar'
import AddProductForm from '../Components/AddProductForm'
import ProductList from '../Components/ProductList'

export default function HomePage() {
  const [products, setProducts ] = useState([])
  const [findingProduct, setFindingProduct] = useState("")
  const addProducts = (newProduct) =>{
    if(newProduct.name === "" || newProduct.price === 0){
      alert("Add proper product with price.")
        return 
    }
    const same = products.some(
      item  => item.name?.toLowerCase() === newProduct.name?.toLowerCase()
    )
    if(same) {alert( " Product is already exist!")
      return 
    }
    setProducts([...products, newProduct])
  }
  const removeProduct = (itemName ) =>{
    const newList = products.filter(item => item.name !== itemName)
    setProducts(newList)
  }

  

  const listedProduct = products.filter(item => item.name?.toLowerCase().includes(findingProduct?.toLowerCase()))

  return (
    <div className="flex-col flex items-center">
      <title>HK | HomePage</title>

    <div className='flex flex-col w-1/2 rounded-2xl bg-gray-800 items-center mt-8 p-1 gap-3  '>
    
      <SearchBar setFindingProduct={setFindingProduct}/>
      <AddProductForm addProducts={addProducts}/>
      <ProductList products={listedProduct} removeProduct={removeProduct}/>

    </div>
    </div>
  )
}
