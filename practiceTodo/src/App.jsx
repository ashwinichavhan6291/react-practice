import React, { useEffect, useState } from 'react'

function App() {

  const [val, setVal] = useState();
const [data, setData] = useState([]);
let[editIndex,setEditIndex]=useState(null);

const addOnClick= () => {

  if(editIndex!=null){
    const updatedData=[val];
    setData(updatedData)
    console.log("updatedData" , updatedData);
  }
 const item=[val];
 setData(item);
 setVal("");

};

const EditButton=(index)=>{
  setVal(data);
  setEditIndex(index)

}
const deleteItem=(index)=>{
  const deleteTodo=data.filter((_,id)=>id!==index);
  setData(deleteTodo);


}

  return (
    <>
    <div className='w-1/2 bg-gray-400 h-fit m-10 p-10 '>
      <div className='flex'>
      <div >
        <input type="text" className='bg-white mr-5 w-72 p-3'placeholder='enter the data ' value={val} onChange={(e)=>setVal(e.target.value)}/>
        </div>
        <div className='bg-blue-600 text-xl p-2 border-2 border-white rounded-lg ' onClick={addOnClick}>
          <button className='cursor-pointer'>Add</button>
          </div>

          
      </div>
      {data?.map((value,index)=>{
        
    return(
<div className=' list-none' key={index}>
            <li className='flex  mt-5 w-full bg-amber-200 p-3 list-none text-xl font-semibold'>{value}
            <div className='ml-56 space-x-4'>
              <button className='bg-red-400 rounded-lg p-2 cursor-pointer' onClick={()=>deleteItem(index)}>Delete</button>
              <button  className='bg-blue-400 rounded-lg p-2 cursor-pointer' onClick={EditButton}>Edit</button>
              </div>
            </li>
             
          </div>
    )
      
          })}
    
    </div>
    </>
   
  )
}

export default App