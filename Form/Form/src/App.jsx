
import './App.css'
import React from "react";
import { useForm } from "react-hook-form";
function App() {
  const { register, handleSubmit, reset, formState: { errors ,isSubmitting} } = useForm();

  

 async  function onSubmit(data){
    await new Promise((resolve)=> setTimeout(resolve,5000));
    
  }
return (
  <>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label htmlFor="">First Name:</label>
      <input className={errors.firstname?'input-error':""}{...register('firstname',{
        required:true,
         minLength:{value:3,message:"min length atleast 3"},
         maxLength:{value:6,
          message:"max length atleast 6"
         }
      })}/>
      {errors.firstname && 
         <p className='error-message'>{errors.firstname.message}</p>
         }
</div>
<br />
<div>
      <label htmlFor="">Middle Name:</label>
      <input type="text" {...register('middlename',{required:true,
       
        })} />
        
      </div>
<br />
      <div>
      <label htmlFor="">Last Name:</label>
      <input type="text" {...register('lastname',{
        pattern:{
          value:/^[A-Za-z]+$/i,
          message:"Last Name is not as per the rules"
        }
      })}/>
      {errors.lastname&& 
       <p className="error-message">{errors.lastname.message}</p>
       }
    </div>
    <br />

    <input type="submit" disabled={isSubmitting} value={isSubmitting ?"Submitting":"Submit"}/>
   
  </form>
  </>
  )
}
export default App;
  