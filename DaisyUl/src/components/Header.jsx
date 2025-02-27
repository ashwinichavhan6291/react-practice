import React from 'react'
import { Link } from 'react-router-dom'

function Header({setShowSignup,setShowLogin,showLogin,showSignup}) {
    
  return (
    <>
    
    <div className="navbar bg-neutral text-neutral-content" style={{position: "fixed",zIndex:"1"}}>
  <button className="btn bg-slate-600 text-2xl hover:bg-green-500 font-bold ">
    <Link to="/profile">User</Link>
  </button>

  <div className='listContainer flex justify-between items-center  list-none ml-auto'>

  <Link to="/createpost" >
  <li className="text-gray-100 text-xl hover:text-red-300 ml-10" >create post</li></Link>

 <Link to="/post">
 <li className="text-gray-100 text-xl hover:text-red-300  ml-10" >Post</li>
 </Link> 
  <button className=" text-gray-100 text-xl hover:text-red-300 ml-10"onClick={()=>setShowLogin(!showLogin)}>Log In</button>
   
   <button className="text-gray-100 text-xl hover:text-red-300 ml-10 "onClick={()=>setShowSignup(!showSignup)}>Sign up</button>

   
  </div>
   
  

    
</div>
    </>
  )
}

export default Header