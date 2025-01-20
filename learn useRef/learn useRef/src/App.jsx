import React, { useEffect, useRef, useState } from 'react'
import { use } from 'react';

function App() {

  let[count,setCount]=useState(0);
  
  let val=useRef(0);
  let btnRef=useRef();

  function handledOnClick(){
    val.current=val.current+1;
    console.log("val " , val.current);
    setCount(count+1);
  }
function changeColor(){
btnRef.current.style.backgroundColor="red";
}
  useEffect(()=>{
    console.log("running");
  })

  
  return (
    
    <>
<div>
  <button  
  ref={btnRef}
  onClick={handledOnClick}>
    increment
  </button>
  <p>count : {count}</p>
</div>
<br />

<button onClick={changeColor}>
  change color
</button>
    </>
  )
}

export default App