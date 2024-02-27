import React from 'react'
import { useParams } from 'react-router-dom'   //use to take value in params

function User() {
    const {id} = useParams();

  return ( 
    <div className='bg-gray-600 text-white text-3xl p-4 text-center'>User: {id}</div>                   // automatically get 'id' as we have used router
  )
}

export default User