import React, {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPasswod] = useState('')
  const[ fetchingToken, setFetching] = useState(false)
  const navigator = useNavigate()


  useEffect(()=>{
   const currentUserToken = localStorage.getItem('userToken')
   const currentUser = localStorage.getItem('user')
   if(currentUserToken && currentUser  ){
     navigator('/homepage')  
   }
  })
  const handleLogin = async (e) =>{
    setFetching(true)
  
    
    try {
      
      
      e.preventDefault()
    const resp = await fetch("https://reqres.in/api/login",
      {method:'POST',
    
      headers:{
        "x-api-key": "reqres-free-v1",
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email: userEmail, 
        password: userPassword
      
      })

    })
    const token =await resp.json()
   if(resp.ok){
    localStorage.setItem("userToken", token)
    localStorage.setItem("user",{
      userEmail,
      userPassword
    })
setFetching(false)
    navigator('/homepage')
    
   }
  } catch (error) {
      console.error(error,"ERROR OCCURED!")
  }
  finally{
    setFetching(false)
  }

  }
  
  return (
    <div className='bg-gray-800 flex flex-col items-center justify-center min-h-screen '>
      <title>HK | Login</title>
    <div className=" p-7 rounded-xl w-1/3 bg-gray-600 border-white border-3 border">
    <div className="">
        <h1 className='text-3xl font-semibold text-center text-white '>Login</h1>
      </div>
      <div className="flex-col flex p-2">
        <form name='loginForm' className='flex  flex-col p-3' onSubmit={handleLogin}>
          <label htmlFor="email" className='text-xl text-gray-300 my-1'>Email</label>
          <input type="text" 
          className=' mb-4 p-2 rounded-md' 
          placeholder='Enter your email' 
          value={userEmail}
          onChange={(e)=>setUserEmail(e.target.value)}/>
          <label className='text-gray-300 text-xl my-1' htmlFor="password">Password</label>
          <input type="password" 
          className=' mb-4 p-2 rounded-md'
          placeholder='Enter your password'
          value={userPassword}
          required
          
          onChange={e=>setUserPasswod(e.target.value)}
          />
          <button type='submit' disabled={fetchingToken} className={` w-fit rounded-full px-6 text-xl p-2 ${fetchingToken ? "bg-red-400 cursor-not-allowed" : 'bg-red-600'} rounded-2xl hover:bg-red-500 text-white`}>{
            fetchingToken ?  <div className="flex">
            Loading
    
            <div className="animate-spin rounded-full mx-1 mt-1 h-4 w-4 border-b-2 border-white"></div>
          </div> : "Login"
            }</button>

        </form>
     

    </div>
      </div>
       
    </div>
  )
}
