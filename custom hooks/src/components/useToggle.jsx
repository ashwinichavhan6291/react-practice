import {  useEffect, useState } from "react";

const useToggle = (defaultValue) => {
  let [value, setValue] = useState(defaultValue);

  function toggleValue(val) {
    if (typeof value != "boolean") {
      setValue(!val);
    } else {
      setValue(val);
    }
  }
 useEffect(()=>{
    console.log(value);
 },[value])
  return [value, toggleValue];
};


export default useToggle;
