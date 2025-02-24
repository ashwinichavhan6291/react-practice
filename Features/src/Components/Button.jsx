import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  
  function Button(){
    const notify = () => toast.success("Wow so easy!");

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
  export default Button;