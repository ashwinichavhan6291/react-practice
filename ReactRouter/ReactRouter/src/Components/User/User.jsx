import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {id}=useParams("");
  return (
    <div className='bg-amber-300 p-5 text-center m-10 w-100 h-14 font-bold'>User : {id}</div>
  )
}

export default User