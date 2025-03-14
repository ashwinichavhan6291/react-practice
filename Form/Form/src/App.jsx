import './App.css';
import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 >Sign Up</h2>
        <br />
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input
            id="firstname"
            className={errors.firstname ? 'input-error' : ""}
            {...register('firstname', {
              required: "First Name is required",
              minLength: { value: 3, message: "Min length at least 3" },
              maxLength: { value: 6, message: "Max length at most 6" }
            })}
          />
          {errors.firstname && <p className="error-message">{errors.firstname.message}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="middlename">Middle Name:</label>
          <input
            id="middlename"
            {...register('middlename', { required: "Middle Name is required" })}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input
            id="lastname"
            {...register('lastname', {
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Last Name must contain only letters"
              }
            })}
          />
          {errors.lastname && <p className="error-message">{errors.lastname.message}</p>}
        </div>

        <div className="form-group">
          <input
            type="submit"
            disabled={isSubmitting}
            value={isSubmitting ? "Submitting..." : "Submit"}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
