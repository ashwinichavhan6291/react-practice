import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";

function Todo() {

  // let val1=["ba","ss"];
let[val,setVal]=useState("");
let[data,setData]=useState([]);

const handleOnChange=(event)=>{
  setVal(event.target.value);
}
const getData=()=>{
const newData=[...data,val];
console.log(newData);
setData(newData);

}



const deleteData=(index)=>{
const dataFilter=data.filter((currELe,id)=>{
  return id!==index;
})
console.log("dataFilter--",dataFilter);
setData(dataFilter);
}

  return (
   <>

   <div className="row g-3 container">
  <div className="col-sm-7 AddItem">
    <input type="text" className="form-control  item" name={val} placeholder="Item" aria-label="item" onChange={handleOnChange}/>


    <IoMdAddCircleOutline onClick={getData}></IoMdAddCircleOutline>
    {/* <FaTrashAlt onClick={deleteData}></FaTrashAlt> */}
    
  </div >
  {data.map((item, index) => (
  <div key={index}>{item}
   <FaTrashAlt onClick={()=>deleteData(index)}></FaTrashAlt>
  </div>
))}

  
  
</div>
   
   </>
  )
}

export default Todo