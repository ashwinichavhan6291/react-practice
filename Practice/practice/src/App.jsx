
import { useState } from 'react';
import './App.css';


const App=()=>{

// let val1=["fruit","chocolate"]

let [val,setVal]=useState(0);
let handledOnClick=(val)=>{
  setVal(val+1);
}


return(
  <>
  <div className= "container">
  <h1>{val}</h1>
<p>you clicked {val} times</p>

  {/* <button onClick={()=>{setVal(val+1)}}>clicked me</button> */}
<button onClick={()=>{handledOnClick(val)}}>clicked me</button>


  </div>
  </>
)
}
export default App;