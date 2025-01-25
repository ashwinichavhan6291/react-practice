import { useForm } from 'react-hook-form';
import './App.css'

function App() {
  
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm();

// async function SubmitOnClick(data){
//     await new Promise((resolve)=> setTimeout(resolve,2000));
//     console.log("submitting form",data);
//     alert('Your application is updated.');

//    }

function SubmitOnClick(data){
  console.log("submitting data",data);
  alert('Your application is updated.');
}
  return (
    <>
      <form className='form-container' onSubmit={ handleSubmit(SubmitOnClick)}
     >

<div>
  <label htmlFor="firstName">Firstname</label>
  <input {...register('firstName', { required: true ,minLength:{value:3,message:"min length atleast 3"}})}
placeholder='enter firstname'/>

{errors.firstName && 
         <p >{errors.firstName.message}</p>
         }
</div>

<div>
  <label htmlFor="lastName">Lastname</label>
  <input {...register('lastName')} placeholder='enter lastname'/>
</div>

<div>
  <label htmlFor="password">Password</label>
  <input {...register('password', {required:true, 
    minLength:{value:5 , message:"password length should be alteast 5"},
    pattern:{
      value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, // Uppercase, number, special char
                message:
                  'Password must include at least one uppercase letter, one number, and one special character',
    }
  })} placeholder='enter password'/>

  {errors.password&&
  <p>{errors.password.message}</p>
  }
</div>

<div>
  <label htmlFor="email">Email</label>
  <input {...register('email',{required:true,
    pattern:{
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email validation regex
                message: 'Please enter a valid email address',
              },
    })} 
  placeholder='enter Email Address'/>

  {errors.email && 
  <p>{errors.email.message}</p>
  }
</div>
<button type='submit' disabled={isSubmitting}>Submit</button>
      </form>
    </>
  )
}

export default App
