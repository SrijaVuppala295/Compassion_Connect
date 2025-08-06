import React from "react";
import { useState } from "react";
import axios from "../axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const {login} = useAuth();
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
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
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
      }
      else{
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
          setLoading(false);
          login(data.user,data.token);
          navigate("/");
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
    <div className="min-h-screen sm:!min-w-screen bg-gradient-to-b from-yellow-300 to-yellow-50 flex items-center justify-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" container !mx-auto !my-10 border !p-3 sm:!p-10 !shadow-lg shadow-black">
        <form onSubmit={handleSubmit} className=" text-xl">
          <h2 className="text-2xl text-center underline">Sign-Up Form</h2>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">

          <div className="flex  gap-4  !items-center !my-5 text-xl">
            <label htmlFor="name" className=" ">Enter Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              className=" !block !max-w-full !p-1.5 bg-white text-black  border-2 focus:border-amber-400 "
            />
          </div>
          <div className="flex gap-4  items-center !my-5 text-xl">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="!block !max-w-full !p-1.5 bg-white text-black  border-2 focus:border-amber-400 "
            />
          </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">

          <div className="flex gap-4 !my-5 text-xl">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              className="!block !max-w-full !h-1/2 !p-1.5 sm:!p-2 bg-white text-black  border-2 focus:border-amber-400"
            />
          </div>
          <div className="flex gap-2 !my-5 text-xl">
            <label htmlFor="confirmPassword" className="block">
               Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder=" confirm password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="!block !max-w-full !h-1/2 !p-1.5 bg-white text-black  border-2 focus:border-amber-400 "
            />
          </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">

          <div className="flex gap-4 !my-5 text-xl items-center">
            <label htmlFor="role">Enter Your Role</label>
            <select
              name="role"
              id="role"
              onChange={handleChange}
              value={form.role}
              className="bg-white !p-1.5"
            >
              Role
              <option value="Doner">Doner</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Fundraiser">Fundraiser</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="flex gap-4 my-5 text-xl items-center">
            <label htmlFor="picture">Upload Picture:</label>

            <input
              type="file"
              name="picture"
              id="picture"
              accept="image/*"
              disabled={picLoad}
              onChange={handlePic}
              className="bg-white !max-w-1/2 !h-1/2 text-black !p-1.5 border-2 focus:border-amber-400 align-center"
            />
          </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="!block !mx-auto !p-3 !my-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer transition-all duration-150"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
