import React, { useContext, useState } from 'react'

import UserContext from '../Context/UserContext';

function Login() {

    let [username,setUsername]=useState("");
    let [password,setPassword]=useState("");

    let {setUser}=useContext(UserContext);
     const OnSubmit=()=>{
        setUser({username,password})
     }

  return (
    <div>

        <input type="text"  name='username' value={username} placeholder='Enter UserName' onChange={(e)=> setUsername(e.target.value)}/>
        <input type="text"  name='password' value={password} placeholder='Enter Password' onChange={(e)=> setPassword(e.target.value)}/>

        <button type='submit' onClick={OnSubmit}>Submit</button>
    </div>
  )
}

export default Login