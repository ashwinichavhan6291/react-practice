import React, { useContext } from 'react';
import {themeContext } from '../App'; 

function ChildC() {
  const {theme,setTheme} = useContext(themeContext); 

function handleClick(){
if(theme=="light")
    setTheme("dark");
else
setTheme("light")
}
  return (
    <div>
    <button onClick={handleClick}>
        change theme
    </button>
    </div>
  );
}

export default ChildC;
