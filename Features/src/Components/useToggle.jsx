import { useEffect } from "react";
import { useState } from "react"

const useToggle =(defaultValue)=>{
    let[data,setData]=useState(defaultValue);

    function toggleValue(){

        if (typeof value === "boolean") {
            setData(value);
        } else {
            setData(value => !value);
        }
        
    }
    useEffect(()=>{
        console.log(data);
    },[data]);
    
    return [data,toggleValue];
}
export default useToggle;