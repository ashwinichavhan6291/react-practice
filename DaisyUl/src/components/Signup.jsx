import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../slice/userslice";


const Signup = () => {
  const [submitted, setIsSubmitted] = useState(false);
  const dispatch=useDispatch();

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = async (formData) => {
    try {
      console.log("Submitting Data:", formData); 

      const res = await axios.post(
        "http://localhost:7777/signup",
        formData, 
        { credentials: "include" }
      );
dispatch(addUser(res.data))
      console.log("Response:", res.data);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error:", err.response ? err.response.data : err.message);
    }
  };

  return (
    <>
      {!submitted && (
        <form className="formContainer" onSubmit={handleSubmit(handleOnSubmit)}>
          <h2 className="signupHeading">SignUp</h2>

          <div className="row mb-3">
            <div className="col-sm-10 inputData">
              <input
                type="text"
                className="form-control inputField"
                {...register("firstName", { required: "First Name is required", minLength: { value: 4, message: "It should be at least 4 characters" } })}
                placeholder="Enter First Name"
              />
              {errors.firstName && <p style={{ color: "white" }}>{errors.firstName.message}</p>}
            </div>

            <div className="col-sm-10 inputData">
              <input
                type="text"
                className="form-control inputField"
                {...register("lastName", { required: "Last Name is required", minLength: { value: 4, message: "It should be at least 4 characters" } })}
                placeholder="Enter Last Name"
              />
              {errors.lastName && <p style={{ color: "white" }}>{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-10 inputData">
              <input
                type="password"
                className="form-control inputField"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "It should be at least 8 characters" },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                    message: "Password must contain at least one uppercase letter, one number, and one special character",
                  },
                })}
                placeholder="Enter Password"
              />
              {errors.password && <p style={{ color: "white" }}>{errors.password.message}</p>}
            </div>
          </div>

          <div className="col-sm-10">
            <input
              type="email"
              className="form-control inputField"
              {...register("emailId", {
                required: "Email is required",
                pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Invalid email format" },
              })}
              placeholder="Enter Email Address"
            />
            {errors.email && <p style={{ color: "white" }}>{errors.email.message}</p>}
          </div>

          <input type="submit" className="btn-primary btn btnn" />
        </form>
      )}
    </>
  );
};

export default Signup;
