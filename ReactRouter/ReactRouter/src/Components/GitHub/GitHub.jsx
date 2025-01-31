import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {

    const data=useLoaderData("");
// let[data,setData]=useState([]);
//     useEffect(() => {
      
//         fetch("https://api.github.com/users/hiteshchoudhary").then(response=>response.json()).then(data=>{console.log(data);
//             setData(data)
//         })
       
//     }, [])
    
  return (
    <div className='text-center m-5 p-4 bg-gray-700 text-white text-3xl'>Github followers : {data.followers}
<img src={data.avatar_url} alt="Github Picture" width={300}/>
    </div>

   
  )
}

export default GitHub

export const githubLoader=()=>{

    const respone=fetch("https://api.github.com/users/hiteshchoudhary");
    return respone;

}