import React from 'react'

function ButtonContainer({OnHandleClick}) {

    let Buttons=["2","4","1","+", "C","-","0", "%", "=","5","7","*"];
  return (
    
    <div className="content">
    {Buttons.map((btn)=>(
         <div className='btn'  onClick={()=>OnHandleClick(btn)}>
         {btn}
         </div>
         
    ))}
   

</div>

  )
}

export default ButtonContainer