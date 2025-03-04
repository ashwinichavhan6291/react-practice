import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addUser } from "../slice/userslice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

function Login() {
  const [newPassword, setNewPassword] = useState("");
  const [emailId, setEmailId] = useState("");
  const [passwordPage, setPasswordPage] = useState(false);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const handleLogin = async (data) => {
    try {
      const response = await axios.post("http://localhost:7777/login", data, {
        withCredentials: true,
      });

      dispatch(addUser(response.data));
      setEmailId(data.emailId);
      setValue("emailId", data.emailId);

      toast.success("Login successful!", { position: "top-right", autoClose: 1000 });
    } catch (err) {
      toast.error(err.response?.data || err.message);
    }
  };

  const handlePassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:7777/profile/password", { password: newPassword, emailId });
      toast.success(res.data);
      setNewPassword("");
    } catch (err) {
      toast.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <motion.form
        onSubmit={handleSubmit(handleLogin)}
        className="formContainer bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-96 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="signupHeading text-white text-2xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {passwordPage ? "Reset Password" : "Log In"}
        </motion.h2>

        <AnimatePresence mode="wait">
          {!passwordPage ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <motion.input
                  type="email"
                  className="form-control inputField w-full px-4 py-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-200 focus:ring-2 focus:ring-indigo-300 outline-none"
                  {...register("emailId", { required: "Email is required" })}
                  value={emailId}
                  onChange={(e) => { setEmailId(e.target.value); setValue("emailId", e.target.value); }}
                  placeholder="Enter Email Address"
                  whileFocus={{ scale: 1.05 }}
                />
                {errors.emailId && <p className="error text-red-400 text-sm">{errors.emailId.message}</p>}
              </div>

              <div className="mb-6">
                <motion.input
                  type="password"
                  className="form-control inputField w-full px-4 py-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-200 focus:ring-2 focus:ring-indigo-300 outline-none"
                  {...register("password", { required: "Password is required" })}
                  placeholder="Enter Password"
                  whileFocus={{ scale: 1.05 }}
                />
                {errors.password && <p className="error text-red-400 text-sm">{errors.password.message}</p>}
              </div>

              <motion.button
                type="submit"
                className="btn-primary btn btnn w-full bg-indigo-500 text-white font-bold py-2 rounded-md hover:bg-indigo-600 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Log In
              </motion.button>

              <p className="text-gray-200 mt-4">
                Forgot password?{" "}
                <motion.button
                  className="btn-ghost text-pink-400 underline"
                  onClick={(e) => { e.preventDefault(); setPasswordPage(true); }}
                  whileHover={{ scale: 1.1 }}
                >
                  Click here
                </motion.button>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="reset-password"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control inputField w-full px-4 py-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-200 focus:ring-2 focus:ring-indigo-300 outline-none"
                  value={emailId}
                  readOnly
                />
              </div>

              <div className="mb-6">
                <motion.input
                  type="password"
                  className="form-control inputField w-full px-4 py-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-200 focus:ring-2 focus:ring-indigo-300 outline-none"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter New Password"
                  whileFocus={{ scale: 1.05 }}
                />
              </div>

              <motion.button
                className="btn-primary btn btnn w-full bg-green-500 text-white font-bold py-2 rounded-md hover:bg-green-600 transition-all"
                onClick={handlePassword}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reset Password
              </motion.button>

              <motion.button
                className="btn-secondary btn w-full mt-3 bg-gray-500 text-white font-bold py-2 rounded-md hover:bg-gray-600 transition-all"
                onClick={(e) => { e.preventDefault(); setPasswordPage(false); }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Login
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>

      <ToastContainer />
    </div>
  );
}

export default Login;
