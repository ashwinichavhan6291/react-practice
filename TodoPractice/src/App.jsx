import React, { useEffect, useState } from 'react'
import "./App.css";
function App() {

  let[inputVal,setInputVal]=useState("");
  let[getVal,setgetVal]=useState([]);
  let[editIndex,setEditIndex]=useState(null);

  const saveData=()=>{
    if(editIndex!==null){
      const updatedData=[...getVal];
      updatedData[editIndex]=inputVal;
      setgetVal(updatedData);
      setEditIndex(null);
      localStorage.setItem("data",JSON.stringify(updatedData));
      return updatedData;
    
    }
    else{
     const newData= setgetVal([...getVal,inputVal]);
      localStorage.setItem("data",JSON.stringify(newData));
    }
   setInputVal("");
  }
  
  const editData=(index)=>{

    setInputVal(getVal[index]);
    setEditIndex(index);

  }
  const deleteData=(index)=>{
    const filterData=getVal.filter((_, id)=> id!==index);
    setgetVal(filterData);
    localStorage.setItem("data",JSON.stringify(filterData));
    return filterData;
  }
  useEffect(() => {
    try {
      const storedData = localStorage.getItem("data");
      if (storedData) {
        setgetVal(JSON.parse(storedData));
      } else {
        setgetVal([]); 
      }
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      setgetVal([]); 
    }
  }, []);

  useEffect(()=>{
    if(getVal.length >0){
      localStorage.setItem("data",JSON.stringify(getVal));
    }
  
  },[getVal]);
  return (
    <div className='my-20 mx-20 w-2/3 bg-gray-200 p-5 '>
<h1 className='py-5  text-center text-2xl font-bold'>TodoList</h1>
      <div className='flex justify items-center  h-5 gap-2 '>
        <input type="text" 
      value={inputVal}
      onChange={(e)=>setInputVal(e.target.value)}
        className='w-full h-10 text-black border-2 rounded'/>
        <button className='btn btn-ghost bg-blue-600 w-20 h-10 rounded cursor-pointer'  onClick={saveData}>Add</button>
      </div>
    {getVal.map((item,index)=>
    
      <div className='my-2 p-3 ' key={index}>
        <ul className='flex '>
          <li className='flex w-full'>
            <span className='w-full bg-white rounded p-2'>{item}</span>
            <div className='flex gap-2 mx-2' >
            <button className='btn btn-ghost bg-red-700 rounded ml-auto p-2 cursor-pointer' onClick={()=>deleteData(index)} >Delete</button>
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