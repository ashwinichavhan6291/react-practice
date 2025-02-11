import React, { useState } from 'react'
import HomePage from './components/HomePage'
import Header from './components/Header'

import './App.css'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Login from './components/Login'
import UserCard from './components/UserCard'

function App() {

  let[showSignup,setShowSignup]=useState(false);
  let[showLogin,setShowLogin]=useState(false);
  let[showUser,setShowUser]=useState(false);


  
  return (
    <>
    <Header  setShowSignup={setShowSignup} setShowLogin={setShowLogin} setShowUser={setShowUser} showUser={showUser} showLogin={showLogin} showSignup={showSignup}></Header>
    <HomePage />
    {showSignup &&
    <Signup onClose={()=>showSignup(false)} />
  
}
{showLogin &&
  <Login onClose={()=>setShowLogin(false)}/>
}
{showUser &&
<UserCard  onClose={()=>setShowUser(false)}/>
}
    <Footer></Footer>
    </>
  )
}

export default App