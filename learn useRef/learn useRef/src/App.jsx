
import React, { useRef, useState } from 'react'

function App() {

  let[time,setTime]=useState(0);

let timerRef=useRef(null);
  function StartTimer(){
    timerRef.current=setInterval(()=>{
     setTime((time)=>time+1);
    },1000)
  }

  function StopTimer(){
    clearInterval(timerRef.current);
    timerRef.current=null;
  }
  function ResetTimer(){
    StopTimer();
    setTime(0);
  }
  return (
  <div>
<h1>StopWatch {time} Seconds</h1>

<button onClick={StartTimer}>
  Start
</button>
<br /><br />

<button onClick={StopTimer}>
  Stop
</button>
<br /><br />

<button onClick={ResetTimer}>
  Reset
</button>
<br /><br />
  </div>
  )
}

export default App