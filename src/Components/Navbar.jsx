import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({logouthandler}) {
  return (
    <div className='flex justify-between  rounded-t-xl bg-gray-600 w-full'>
        <div className="p-3">
            <h1>HackerKernal</h1>
        </div>
        <div className="flex p-2 gap-3">
            <Link   to={'/homepage'}><p className='p-1 text-xl'>HomePage</p></Link>
            <button className='p-1 text-xl font-thin rounded-xl bg-red-500 hover:bg-red-400' onClick={logouthandler}>Logout</button>
          
        </div>
        
    </div>
  )
}
