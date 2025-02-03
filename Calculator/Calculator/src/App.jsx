import React, { useState } from 'react'
import ButtonContainer from './Components/ButtonContainer'
import Display from './Components/Display'

import "./App.css"
function App() {

  let[calVal,setVal]=useState("");


  const OnHandleClick=(btnText)=>{
 
    if(btnText==="C") {
      return    setVal("");
    }
    else if (btnText==="="){
      let result=eval(calVal);
      setVal(result);
    }
   

  
  

    else{
      let newDisplayVal=calVal +btnText;
      setVal(newDisplayVal);
    }
 
  }
  return (
    <div className='Container'>
<Display className="calDisplay" displayValue={calVal}></Display>
<ButtonContainer className="btnContent" OnHandleClick={OnHandleClick}></ButtonContainer>
    </div>
  )
}

export default App