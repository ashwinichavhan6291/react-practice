import React from 'react'

function Header({setShowSignup,setShowLogin,showUser,setShowUser,showLogin,showSignup}) {
    
  return (
    <>
    
    <div className="navbar bg-neutral text-neutral-content">
  <button className="btn btn-ghost text-xl" onClick={()=>setShowUser(!showUser)}>Demo</button>
  <div className='listContainer'>
  <li onClick={()=>setShowLogin(!showLogin)}>Log In</li>
   <br />
   <li onClick={()=>setShowSignup(!showSignup)}>Sign up</li>
  </div>
   
  

    
</div>
    </>
  )
}

export default Header