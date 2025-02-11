import React from 'react'
import useToggle from './components/useToggle'

function App() {

  let[value,toggleValue]=useToggle(true);
  let[data,setData]=useToggle(true);


  return (
    <>

    <button onClick={toggleValue}>Toggle heading</button>
    <button onClick={()=>toggleValue(true)}>Show heading</button>
    <button onClick={()=>toggleValue(false)}>hide heading </button>

    {value ? <h1>use custom hook</h1> : null }
    

    <hr />
    
 {data ? 
 <h1>Second heading</h1> : null }

 <button onClick={setData}>ToggleData</button>
 <button  onClick={()=>setData(true)}>show ToggleData</button>
 <button onClick={()=>setData(false)}>hide ToggleData</button>

    </>
  )
}

export default App