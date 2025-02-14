
import React from 'react'
import { useState } from 'react'

function App() {
let[color,setColor]=useState("olive");
 
  return (
    <div className='w-full h-screen' style={{backgroundColor:color}}>
    
    <button className=' text-3xl mt-5 rounded-lg cursor-pointer ' style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>Green</button>
    <br />
    <button className=' text-3xl mt-5 rounded-lg cursor-pointer ' 
     style={{backgroundColor: "pink"}} onClick={()=>setColor("pink")}>Pink</button>
    <br />
    <button className=' text-3xl mt-5 text-white rounded-lg cursor-pointer '  style={{backgroundColor: "black"}} onClick={()=>setColor("red")}>Red</button>
  
    
  
    </div>
  )
}

export default App