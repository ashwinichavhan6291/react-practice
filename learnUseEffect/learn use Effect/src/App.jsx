import React, { useEffect } from 'react'
import { useState } from 'react';
function App() {

  let[count,setCount]=useState(0);


  useEffect(() => {
    alert("hello")
   },[]);
   function handledOnClick(){
setCount(count+1);
   }
  
  return (
    <div >
      <p>i clicked {count} times</p>
      <button onClick={handledOnClick}>
        click me
      </button>
    </div>
  )
}

export default App