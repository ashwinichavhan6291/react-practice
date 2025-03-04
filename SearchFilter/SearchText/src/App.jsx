import React, { useState } from 'react'
import "./App.css";
function App() {
let[text,setText]=useState("");
  const Country=["Angola", "Antigua","Bangladesh", "Barbados", "Belarus","Canada", "Central African Republic", "Chad", "Chile", "China","Denmark", "Djibouti", "Dominica", "Dominican","Eritrea", "Estonia", "Eswatini" ];

  const handleChange =(e)=>{
    setText(e.target.value);
  
  }
  return (
    <div className='container'>
  <input 
    type="text"  
    value={text} 
    onChange={handleChange} 
  />

  {Country.filter((item) => {
    if (text === "") {
      return item;
    } else if (item.toLowerCase().startsWith(text.toLowerCase())) {
      return item;
    }
  }).map((val) => {
     <p key={val}>{val}</p>;
  })}
</div>

  

   
  )
}

export default App