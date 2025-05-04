import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem('userToken')
  
    if(token != null || undefined) return children
  else  return <Navigate to={'/'}/>


}
export default PrivateRoute
