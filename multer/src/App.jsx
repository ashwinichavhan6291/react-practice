import React, { useState } from 'react'
import axios from 'axios';

function App() {
  let[file,setFile]=useState("");

  const upload=async()=>{
    try{
      const formData=new FormData();
      formData.append('file',file);
      axios.post('http://localhost:8000/upload', {formData}, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
      console.log(res);    }
    catch(err){
      console.log(err.response.data);
    }
    
  }
  return (
 <>

  <div className='mt-4 py-2 px-5'>
    <input type="file" className='border-2 border-black' onChange={(e)=>setFile(e.target.files[0])}/>
  <button type='submit' className=' bg-blue-500 px-2  rounded-md cursor-pointer' onClick={upload}>upload file</button>
  </div>
 
 </>
  )
}

export default App