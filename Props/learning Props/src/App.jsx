import React, { useState } from 'react'
import Child from './Components/Child'
function App() {
let[name,setName]=useState("");
  
  return (
    <div>
      <Child title="card1" name={name} setName={setName} />
      <Child title="card2" name={name} setName={setName} />
       <p>{name}</p>

   
    </div>
  )
}

export default App