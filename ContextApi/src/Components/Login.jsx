import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import UserContext from '../Context/userContext';

function Login() {
 
    let[username,setUsername]=useState("");
    let[Password,setPassword]=useState("");

    const {setUser}=useContext(UserContext);
    const handleOnClick=(e)=>{
e.preventDefault;
setUser({username,Password});
    }
  return (
    <div>
    
    <h1>LogIn</h1>

<input type="text" value={username} 
onChange={(e)=>setUsername(e.target.value)}
placeholder='Enter UserName' />
<input type="text" value={Password} 
onChange={(e)=>setPassword(e.target.value)}
placeholder='Enter Password' />
<button type="submit" onClick={handleOnClick}>Submit</button>
    </div>
  )
}

export default Login