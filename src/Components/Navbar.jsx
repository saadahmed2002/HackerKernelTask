import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigator = useNavigate()
    const logouthandler =() =>{
        localStorage.removeItem('userToken')
        navigator('/')
      }
  return (
    <div className='flex justify-between   bg-gray-600 w-full'>
        <div className="p-3">
            <h1 className='text-3xl'>HackerKernal</h1>
        </div>
        <div className="flex p-2 gap-3">
            <Link   to={'/homepage'}><p className='p-1 text-xl'>HomePage</p></Link>
            <button className='p-1 text-xl font-thin rounded-xl bg-red-500 hover:bg-red-400 hover:font-normal' onClick={logouthandler}>Logout</button>
          
        </div>
        
    </div>
  )
}
