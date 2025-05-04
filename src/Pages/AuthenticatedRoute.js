import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem('userToken')
    const user = localStorage.getItem('user')

    if(token   && user ) return children
 
    
  else  return <Navigate to={'/'}/>


}
export default PrivateRoute
