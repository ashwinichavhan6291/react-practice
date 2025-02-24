import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { addUser } from '../slice/userslice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";

function Login() {


    const {
            register,
            handleSubmit,
            formState : {errors}
        }=useForm();

    let[login,setLogin]=useState(false);

    const dispatch=useDispatch();

    const handleLogin=async(data)=>{
      try{
        console.log("data",data);
        const response=await axios.post("http://localhost:7777/login",
          data,
         { method: "POST",
        withCredentials:true}
        );
        console.log("response", response.data);
        
        dispatch(addUser(response.data));
        toast.success("login successfully",{
          position:"top-right",
          autoclose:1000,
        });
setLogin(true);
      }
      catch(err){
console.error(err.message);
toast.error("failed to login")
      }

        
    }
  return (
    <>
       <ToastContainer />
    {!login &&
    <form onSubmit={handleSubmit(handleLogin)} className='formContainer'>

    <h2 className='signupHeading'>LogIn</h2>
  
  
  <div className="row mb-3">
    
    <div className="col-sm-10 inputData">
    <input type="password" className="form-control inputField"  {...register("password")} 
      placeholder="Enter Password"
    />
    

    </div>
  </div>
  <div className="col-sm-10">
      <input type="email" className="form-control inputField"  {...register("emailId")} placeholder='Enter Email Address'/>

    
    </div>
  
  
  <input type="submit" className="btn-primary btn btnn"/>
  
</form>
       
}
    </>
  )
}

export default Login