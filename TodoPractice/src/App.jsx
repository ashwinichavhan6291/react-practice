import React, { useState } from 'react'
import "./App.css";
function App() {

  let[val,setVal]=useState("");
  let[data,setData]=useState([]);
  let[editIndex,setEditIndex]=useState(null);

  const saveData=()=>{
   if(editIndex!==null){
    const updatedData=[...data];
updatedData[editIndex]=val;
    setData(updatedData);
    setEditIndex(null);

   }
  
   else{
  setData([...data,val]);
   }
  
    setVal("");
  }
  const deleteData=(index)=>{
    const filterData=data.filter((_,id)=> id!==index);
    setData(filterData);
  }
  const editData=(index)=>{
  
  setVal(data[index]);
  setEditIndex(index);
  }
  return (
    <div className='my-20 mx-20 w-2/3 bg-gray-200 p-5 '>
<h1 className='py-5  text-center text-2xl font-bold'>TodoList</h1>
      <div className='flex justify items-center  h-5 gap-2 '>
        <input type="text" 
      value={val}
        onChange={(e)=>setVal(e.target.value)}
        className='w-full h-10 text-black border-2 rounded'/>
        <button className='btn btn-ghost bg-blue-600 w-20 h-10 rounded cursor-pointer' onClick={saveData}>Add</button>
      </div>
      {data.map((item,index)=>     
      <div className='my-2 p-3 ' key={index}>
        <ul className='flex '>
          <li className='flex w-full'>
            <span className='w-full bg-white rounded p-2'>{item}</span>
            <div className='flex gap-2 mx-2' >
            <button className='btn btn-ghost bg-red-700 rounded ml-auto p-2 cursor-pointer' onClick={()=>deleteData(index)}>Delete</button>
            <button className='btn btn-ghost bg-gray-600 rounded ml-auto p-2 cursor-pointer text-white' onClick={()=>editData(index)}>Edit</button>
            </div>
            
          </li>
          
        </ul>
      </div>
       )}
    </div>
  )
}

export default App