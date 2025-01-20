import React from 'react'

import ChildA from "./Components/ChildA";
import { createContext } from 'react';
import { useState } from 'react';
const UserContext=createContext();
function App() {

 const[user,setUser]=useState({name:"ash"});
  return (
    <>
  <UserContext.Provider value={user}>
    <ChildA />
  </UserContext.Provider>
</>

  )
}

export default App;
export {UserContext};