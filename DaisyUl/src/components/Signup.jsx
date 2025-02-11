import React, {useState } from 'react'
import { useForm } from 'react-hook-form';
function Signup() {

    let[submitted,setIsSubmitted]=useState(false);


    const {
        register,
        handleSubmit,
        formState : {errors}
    }=useForm();

    const handleOnSubmit=(data)=>{
        setTimeout(()=>{
               setIsSubmitted(true);
               console.log(data);
           },3000)
           
      
       }
    

  return (
  
<>
{!submitted &&
<form   onSubmit={handleSubmit(handleOnSubmit)}className='formContainer'>
<div className='cancel-icon'>
      {/* <MdCancelPresentation  ></MdCancelPresentation>  */}
      </div>
    <h2 className='signupHeading'>SignUp</h2>
  <div className="row mb-3">
    
    <div className="col-sm-10 inputData">
      <input type="text" className="form-control inputField" id="inputEmail3"   {...register('userName',{required:true, 
        minLength: {value :4, message: "it should be atleast 4 character"}
      })}placeholder='Enter UserName'/>

      {errors.userName && 
      <p style={{color: "white"}}>{errors.userName.message}</p>
          }
    </div>
  </div>
  <div className="row mb-3">
    
    <div className="col-sm-10 inputData">
    <input type="password " className="form-control inputField" id="inputEmail3"  {...register('password',{required:true, 
    minLength: {value : 4 , message : 'it should be atleast 4 character'},

pattern: {
    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
    message:
      "Password must contain at least one uppercase letter, one number, and one special character",
  },
    })}

      placeholder="Enter Password"
    />
    
{errors.password && 
<p style={{color:"white"}}>{errors.password.message}</p>
}
    </div>
  </div>
  <div className="col-sm-10">
      <input type="email " className="form-control inputField" id="inputEmail3"  {...register('email')}placeholder='Enter Email Address'/>

    
    </div>
  
  
  <input type="submit" className="btn-primary btn btnn"/>
  
</form>
}
</>
  )
}

export default Signup