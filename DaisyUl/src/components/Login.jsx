import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addUser } from "../slice/userslice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function Login() {
  const [newPassword, setNewPassword] = useState("");
  const [emailId, setEmailId] = useState(""); 
  const [passwordPage, setPasswordPage] = useState(false);
  const dispatch = useDispatch();


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, 
  } = useForm();


  const handleLogin = async (data) => {
    try {
      const response = await axios.post("http://localhost:7777/login", data, {
        withCredentials: true,
      });

      dispatch(addUser(response.data));

      setEmailId(data.emailId);
      setValue("emailId", data.emailId); 

      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 1000,
      });
    } catch (err) {
      toast.error(err.response?.data || err.message);
    }
  };

 
  const handlePassword = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:7777/profile/password",
        { password: newPassword, emailId }
      );

      toast.success(res.data);

      setNewPassword("");

    } catch (err) {
      toast.error(err.response?.data || err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)} className="formContainer">
        <h2 className="signupHeading">{passwordPage ? "Reset Password" : "Log In"}</h2>

        {!passwordPage ? (
          <>
           
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control inputField"
                {...register("emailId", { required: "Email is required" })}
                value={emailId} 
                onChange={(e) => {
                  setEmailId(e.target.value);
                  setValue("emailId", e.target.value);
                }}
                placeholder="Enter Email Address"
              />
              {errors.emailId && <p className="error">{errors.emailId.message}</p>}
            </div>

          
            <div className="row mb-3">
              <div className="col-sm-10 inputData">
                <input
                  type="text"
                  className="form-control inputField"
                  {...register("password", { required: "Password is required" })}
                  placeholder="Enter Password"
                />
                {errors.password && <p className="error">{errors.password.message}</p>}
              </div>
            </div>

            <input type="submit" className="btn-primary btn btnn" />
            <p>
              Forget password?{" "}
              <Link
                className=" btn-ghost text-pink-700"
                onClick={(e) => {
                  e.preventDefault();
                  setPasswordPage(true);
                }}
              >
                Click here
              </Link>
            </p>
          </>
        ) : (
          <>
           
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control inputField"
                value={emailId} 
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="Enter Email Address"
                readOnly 
              />
            </div>

            <div className="row mb-3">
              <div className="col-sm-10 inputData">
                <input
                  type="text"
                  className="form-control inputField"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter New Password"
                />
              </div>
            </div>

            <button className="btn-primary btn btnn" onClick={handlePassword}>
              Reset Password
            </button>

            <button
              className="btn-secondary btn"
              onClick={(e) => {
                e.preventDefault();
                setPasswordPage(false);
              }}
            >
              Back to Login
            </button>
          </>
        )}
      </form>

      <ToastContainer />
    </>
  );
}

export default Login;
