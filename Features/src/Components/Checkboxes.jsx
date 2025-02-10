import React, { useState } from 'react'

function Checkboxes() {
    let[skills,setSkills]=useState([]);

    const handleCheckbox=(event)=>{
 
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }
        else{
            const remove=skills.filter((item)=> item!==event.target.value);
            setSkills(remove);
        }
       
    }

  return (
    <div>

<h1>Select Your Skills</h1>

<div>
<input type="checkbox"  onChange={handleCheckbox} id='php' value="php"/>
<label htmlFor="php">php</label>
<br />
<input type="checkbox" onChange={handleCheckbox} id='java' value="java"/>
<label htmlFor="java">java</label>
<br />
<input type="checkbox" onChange={handleCheckbox} id='python' value="python"/>
<label htmlFor="python">python</label>

</div>
{skills &&
<h3>{skills.toString()}</h3>}
    </div>
  )
}

export default Checkboxes