import { useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
let passwordRef=useRef(null);
 let[password,setPassword]=useState("");
 let[length,setLength]=useState(8);
 let[number,setNumber]=useState(false);
 let[character,setCharacter]=useState(false);

 const passwordGenerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvw x y z";
  if(number) str+="0123456789";
  if(character) str+= "$%^*@!";

  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random() * str.length+1);
   
     pass+=str.charAt(char);
 
  }
 return pass;
 },[length,character,number])

useEffect(()=>{
  setPassword((passwordGenerator));
},[passwordGenerator])

const copyPassword=useCallback(()=>{
passwordRef.current?.focus();
passwordRef.current?.setSelectionRange(0,5);
let partialPassword=password.slice(0,5);
window.navigator.clipboard.writeText(partialPassword);


},[password])
  return (
    <>
      <div className="w-full max-w-md shadow-md rounded-lg px-4 mx-20 my-8 text-oranage-500 bg-gray-700">
        <h1 className="flex-shadow rounded-lg mb-4 text-white">
          Password generator
        </h1>
        <div className="flex-shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
           value={password}
           ref={passwordRef}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="password"
            readOnly
          />

          <button className="outline-none text-white bg-blue-700 shrink-0 px-3 py-0.5" onClick={copyPassword}>
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e)=>setLength(e.target.value)}
              className="cursor-pinter"
             
            />
            <label htmlFor=""> Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
             defaultChecked={number}
         
             id="numberInput"
             onChange={()=>setNumber((prev)=>!prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div>
            <input
              type="checkbox"
            defaultChecked={character}
              id="characterInput"
              onChange={()=>setCharacter((prev)=>!prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;