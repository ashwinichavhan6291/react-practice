import React, { useCallback, useState } from 'react'
import Child from "./Components/Child";
function App() {
  let[count,setCount]=useState(0);

 let handleOnClick=useCallback(()=>{
  setCount(count+1);
 },[count]);
  return (
    <>
    <button onClick={handleOnClick}>
      increment
    </button>
    
    <div>
      count : {count}
    </div>

    <Child buttonName="Click Me1" handleClick={handleOnClick}/>
    </>
  )
}

export default App