import { useState } from 'react';
import { CiTrash } from "react-icons/ci";

function Todo(){
    let [val,setVal]=useState("");
    let [data,setData]=useState([]);
    
    const getVal=(event)=>{
    setVal(event.target.value);
    }
    
    const getData=()=>{
      // setData(val);
      let store=[...data,val];
      setData(store);
      setVal("");
      // console.log(val);
    }
    
    const deleteVal=(index)=>{
    console.log(index);
    console.log("Before delete:", data);  
    let dataFilter=data.filter((cumEle,id)=>{
      return id!==index;
    })
    console.log("After delete:", dataFilter); 
    setData(dataFilter);
    }
    
    
    return(
      
      <div className= "container">
        <input type="text" placeholder='enter something'  value={val} onChange={getVal} />
        <button onClick={getData}>Add</button>
       
       {data.map((curVal,index)=>{
        return(
          <>
          <div className="taskdata" key={index}>
            <ul>
              <li>
              {curVal}
              <CiTrash id="deleteicon"onClick={()=>deleteVal(index)}> </CiTrash>
              </li>
            </ul>
            
           </div>
       
          </>
        )
       })}
    
    
    </div>
)
}
export default Todo;