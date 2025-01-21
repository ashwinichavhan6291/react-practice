
import React from "react";


const Child=React.memo((props)=>{
    console.log("child Componets");

    return(
        <>
        <button onClick={props.handleClick}>
{props.buttonName}
        </button>
        </>
    )
})
export default Child