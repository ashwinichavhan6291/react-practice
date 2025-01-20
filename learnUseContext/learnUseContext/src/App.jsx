import React from 'react'
import "./App.css"
import ChildA from "./Components/ChildA";
import { createContext } from 'react';
import { useState } from 'react';
const themeContext=createContext();
function App() {

  const[theme,setTheme]=useState("light");
 
  return (
    <>
  <themeContext.Provider value={{theme,setTheme}}>
    <div className='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
    <ChildA></ChildA>
    </div>
  </themeContext.Provider>
</>

  )
}

export default App;
export {themeContext};