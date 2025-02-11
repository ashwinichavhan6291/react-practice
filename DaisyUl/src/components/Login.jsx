import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function Login() {


    const {
            register,
            handleSubmit,
            formState : {errors}
        }=useForm();

    let[login,setLogin]=useState(false);
    const handleLogin=(data)=>{
        setLogin(true);
        console.log(data);
    }
  return (
    <>
    {!login &&
    <form onSubmit={handleSubmit(handleLogin)} className='formContainer'>
<div className='cancel-icon'>
      {/* <MdCancelPresentation  ></MdCancelPresentation>  */}
      </div>
    <h2 className='signupHeading'>SignUp</h2>
  
  
  <div className="row mb-3">
    
    <div className="col-sm-10 inputData">
    <input type="password " className="form-control inputField" id="inputEmail3" {...register("password")} 
      placeholder="Enter Password"
    />
    

    </div>
  </div>
  <div className="col-sm-10">
      <input type="email " className="form-control inputField" id="inputEmail3" {...register("email")} placeholder='Enter Email Address'/>

    
    </div>
  
  
  <input type="submit" className="btn-primary btn btnn"/>
  
</form>
       
}
    </>
  )
}

export default Login