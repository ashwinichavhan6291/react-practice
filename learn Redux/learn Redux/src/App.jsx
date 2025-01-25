import React from 'react'
 import {useDispatch,useSelector} from 'react-redux';
import {increment,decrement,reset,incrementByAmount} from "./features/Counter/counterSlice";
import { useState } from 'react';
function App() {
let[amount,setAmount]=useState("");
  const count=useSelector((state)=>state.counter.value);

  const dispatch=useDispatch();

  function handleIncrementClick(){
dispatch(increment());
  }
  function handleResetClick(){
dispatch(reset())
  }
  function handleDecrementClick(){
  dispatch(decrement());
  }

  function handleIncrementAmount(){
    dispatch(incrementByAmount(amount))
  }
  return (
    <div className='container'>
      <button onClick={handleIncrementClick}>+</button>
      <p>count : {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleResetClick}>Reset</button>

      <input type="Number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <button onClick={handleIncrementAmount}> inc by amount</button>
    </div>
  )
}

export default App