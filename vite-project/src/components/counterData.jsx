import React from 'react'
import { useState } from 'react'
import { decrement, increment } from '../features/CounterSlice';
import {useDispatch,useSelector} from 'react-redux';

function counterData() {
   
    const val=useSelector((state)=> state?.counter?.value?? 0);
    console.log(val);
    const dispatch=useDispatch();

   
  return (
    <div>
  
  <p >count : {val}</p>
 
 <button type='button' className='btn btn-dark' onClick={()=>dispatch(increment())}>Increment</button>

 <button type='button' className='btn btn-dark' onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default counterData