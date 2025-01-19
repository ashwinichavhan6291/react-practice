
import { useState } from 'react';
import './App.css';


const App=()=>{

let val1=["fruit","chocolate"]

let [val,setVal]=useState(val1);

const handledOnChange=(event)=>{
let newVal=event.target.value;
 setVal(newVal);
}
return(
  <>
  <div className= "container">
  {/* <h1>{val}</h1> */}
  <input type="text" placeholder='enter something' onChange={handledOnChange}/>

  <ul>
  {val1.map((item) => (
    <li key={item} >{item} </li>
  ))}
</ul>



  </div>
  </>
)
}
export default App;