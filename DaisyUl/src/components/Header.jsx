import React from 'react'
import { Link } from 'react-router-dom'

function Header({setShowSignup,setShowLogin,showLogin,showSignup}) {
    
  return (
    <>
    
    <div className="navbar bg-neutral text-neutral-content" style={{position: "fixed"}}>
  <button className="btn btn-ghost text-xl">Demo</button>

  <div className='listContainer flex justify-between items-center ml-auto list-none '>

  <Link to="/createpost">
  <li className="btn btn-ghost text-xl " >create post</li></Link>

 <Link to="/post">
 <li className="btn btn-ghost text-xl" >Post</li>
 </Link> 
  <button className="btn btn-ghost text-xl px-2 "onClick={()=>setShowLogin(!showLogin)}>Log In</button>
   
   <button className="btn btn-ghost text-xl"onClick={()=>setShowSignup(!showSignup)}>Sign up</button>

   
  </div>
   
  

    
</div>
    </>
  )
}

export default Header