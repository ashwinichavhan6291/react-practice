
import React from "react";


const Child=React.memo((props)=>{
    

    return(
        <>
        <button onClick={props.handleClick}>
{props.buttonName}
        </button>
        </>
    )
})
export default Child