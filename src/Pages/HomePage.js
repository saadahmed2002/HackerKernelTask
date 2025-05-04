import React, { useState } from 'react'
import SearchBar from '../Components/SearchBar'
import AddProductForm from '../Components/AddProductForm'
import ProductList from '../Components/ProductList'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigator = useNavigate()
  const [products, setProducts ] = useState([
    {
      name:"Laptop",
      price:200000
    },
    {
      name:"Mobile",
      price:18000
    },{
      name:"Iphone",
      price:59000
    }
  ])
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
  const handleLogout =() =>{
    localStorage.removeItem('userToken')
    navigator('/')
  }
  

  const listedProduct = products.filter(item => item.name?.toLowerCase().includes(findingProduct?.toLowerCase()))

  return (
    <div className="flex-col flex items-center">
      <title>HomePage</title>

    <div className='flex flex-col full rounded-2xl bg-black items-center mt-8 p-3 gap-3  '>
      <Navbar logouthandler={handleLogout}/>
      <SearchBar setFindingProduct={setFindingProduct}/>
      <AddProductForm addProducts={addProducts}/>
      <ProductList products={listedProduct} removeProduct={removeProduct}/>

    </div>
    </div>
  )
}
