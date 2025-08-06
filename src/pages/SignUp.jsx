import React from "react";
import { useState } from "react";
import axios from "../axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const SignUp = () => {
  const { login } = useAuth();
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    picture: "",
  });
  const [err, serErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [picLoad, setPicLoad] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handlePic = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
    data.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUD_NAME
        }/image/upload`,
        { method: "POST", body: data }
      );
      const upload = await res.json();
      console.log(upload.url);
      setform({ ...form, picture: upload.url });
    } catch (e) {
      console.log("Upload failed", e);
    } finally {
      // Stop loader
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!form.name || !form.email || !form.password || !form.role) {
        toast.error("Fill all the feilds");
        return;
      } else if (form.password !== form.confirmPassword) {
        toast.error("Confirm Password does not match Password");
      } else {
        setLoading(true);

        const res = await fetch("http://localhost:3000/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
            role: form.role,
            picture: form.picture,
          }),
        });
        const data = await res.json();
        if (res && data) {
          toast.success("SignUp Successful");
          setform({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "",
            picture: "",
          });
          login(data.user, data.token);
          setLoading(false);
          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          toast.error("SignUp failed");
          console.log(data);
        }
      }
    } catch (e) {
      toast.error(`Error occured ${e}`);
      console.log(e);
    }
  };
  return (
    <div className="min-h-screen sm:!min-w-screen bg-gradient-to-b from-purple-800 to-yellow-200 flex justify-center items-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" container !mx-auto !my-10 border !p-3 sm:!p-20 !shadow-lg shadow-black">
        <form onSubmit={handleSubmit} className=" text-xl text-white">
          <h2 className="text-2xl text-center underline capitalize !my-3">Sign-Up Form</h2>
          
           
              <label htmlFor="name" className="!font-bold text-xl text-black  ">
                Enter Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className=" !w-full !my-3 !p-3 bg-white text-black rounded-b-lg  "
              />
            
            
              <label htmlFor="email" className="!font-bold text-xl text-black  ">Enter Email <span className="text-red-600">*</span></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className=" !w-full !my-3 !p-3 bg-white text-black rounded-b-lg "
              />
           
          

          
            
              <label htmlFor="password" className="!font-bold text-xl text-black  ">Enter Password <span className="text-red-600">*</span></label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className=" !w-full !my-3 !p-3 bg-white text-black rounded-b-lg"
              />
            
            
              <label htmlFor="confirmPassword" className="!font-bold text-xl text-black  ">
                Confirm Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder=" confirm password"
                value={form.confirmPassword}
                onChange={handleChange}
                className=" !w-full !my-3 !p-3 bg-white text-black rounded-b-lg"
              />
            
          
          
            
              <label htmlFor="role" className="!font-bold text-xl text-black  ">Enter Your Role <span className="text-red-600">*</span></label>
              <select
                name="role"
                id="role"
                onChange={handleChange}
                value={form.role}
                className=" !w-full !my-3 !p-3 bg-white text-black rounded-b-lg"
              >
                Role
                <option value="Doner">Doner</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Fundraiser">Fundraiser</option>
                <option value="Admin">Admin</option>
              </select>
            
            
              <label htmlFor="picture" className="!font-bold text-xl text-black  ">Upload Picture <span className="text-red-600">*</span></label>

              <input
                type="file"
                name="picture"
                id="picture"
                accept="image/*"
                disabled={picLoad}
                onChange={handlePic}
                className=" !w-full !my-3 !p-3 bg-white text-black rounded-b-lg"
              />
            
          
          <button
            type="submit"
            disabled={loading}
            className="!w-full font-bold !p-3 !my-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer transition-all duration-150"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          <div className="flex justify-center items-center text-xl text-black">
           <p> Already Registered ? <span className='font-bold text-slate-600 '><Link className='hover:!scale-105 hover:!underline' to="/login">Login</Link></span></p> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
