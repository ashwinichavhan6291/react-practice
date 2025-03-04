import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';

function HomePage() {
 

  const handleLogout=async()=>{
    try{
      const res=await axios.post("http://localhost:7777/logout",
        {},
        {withCredentials:true}
      )
      toast.success(res.data);
     
    }
    catch(err){
      console.error(err.response ? err.response.data:err.message);
    }
  }
  return (
    <>
  <ToastContainer/>
<div className='flex h-screen'>
<div className="w-64">
    <div className='bg-gray-900 h-screen p-5 pt-8 relative transition-all duration-300'>
      
        <ul className="mt-20 text-white ml-7  ">
          <li className='mt-10'><Link to="/profileview">Profile</Link></li>
          <li className='mt-10 mb-10'><Link to="/profile">Edit Profile</Link></li>
          <li className='mt-10'><Link to="/post">Posts</Link></li>
          <li className='mt-10'><Link to="/createpost">create Post</Link></li>
           <li className='mt-10'><Link to="/usercard">UseCard</Link></li>
           <li className='mt-10'><Link to="/request">Requests</Link></li>
           <li className='mt-10'><Link to="/connection">Connections</Link></li>
           </ul>
<div className=" absolute bottom-5 left-5 flex items-center text-white cursor-pointer">
        <button className= ' btn btn-ghost ml-4 transition-all' onClick={handleLogout}>Logout</button>
        </div>
      </div>
        </div>
<div className="hero bg-slate-200  flex h-screen gap-10">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl font-bold text-black">lets create something amazing</h1>
      <p className="py-6 text-3xl ">
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis aliquid officia repellendus adipisci assumenda maiores ducimus placeat modi error aut.
      </p>
     
        <Link to="/signup" className=' btn btn-primary bg-blue-500 hover: bg-green-500 text-black'>Get Started</Link>
    
    </div>
  </div>

  <img src="https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="post" className=' w-1/3 ml-auto rounded-md' />
</div>
</div>
    </>
  )
}

export default HomePage