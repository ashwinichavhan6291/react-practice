import React, { useState } from 'react'
// import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContext from './Context/UserContext';



function App() {
  let[user,setUser]=useState(null);
  return (
    <>
    
    <UserContext.Provider value={{user,setUser}}>
      <Login/>
      <Profile/>

    </UserContext.Provider>
    </>
  )
}

export default App