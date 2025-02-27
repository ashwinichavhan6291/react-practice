import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
    <button className=" btn btn-active btn-primary "  style={{marginTop:"70px"}}>
  <Link to="/usercard">UserCard</Link>
</button>

<div className="hero bg-slate-500  flex h-screen gap-10">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl font-bold text-black">lets create something amazing</h1>
      <p className="py-6 text-3xl text-white">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero autem cumque at totam corrupti repudiandae mollitia ad hic rem odit nihil, nesciunt consectetur, quaerat a necessitatibus, excepturi dicta unde odio velit commodi quod accusantium! Totam voluptatem exercitationem ipsam repellat quasi. Neque voluptatem eum debitis aliquam ab consectetur deleniti sint quisquam.
      </p>
     
        <Link to="/signup" className=' btn btn-primary bg-blue-500 hover: bg-green-500 text-black'>Get Started</Link>
    
    </div>
  </div>

  <img src="https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="post" className=' w-1/3 ml-auto rounded-md' />
</div>
    </>
  )
}

export default HomePage