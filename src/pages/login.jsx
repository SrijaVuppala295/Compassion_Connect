import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/AuthContext.jsx";
import { Navigate } from 'react-router-dom';

const Login = () => {
  const {login} = useAuth();
  const navigate = useNavigate();
  const [form,setForm] = useState({email:"",password:""});
  const [loading,setloading] = useState(false);
  const handleChange = (e)=>{
    e.preventDefault();
    setForm({...form,[e.target.name]:e.target.value})

  }
  const handleSubmit = async (e)=>{
    e.preventDefault();

    setloading(true);
    if(!form.email || !form.password){
      toast.error("Fill all the feilds");
      return;
    }
    try{
      const res = await fetch('http://localhost:3000/api/auth/login',{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            
            email: form.email,
            password: form.password
            
          })})

          const data = await res.json();
          if(res &&data.user && data.token){
            toast.success('Login Successful Redirecting...');
            setForm({email:"",password:""});
            login(data.user,data.token);
            setloading(false);
             setTimeout(() => {
            navigate("/");
          }, 1500);


          }
          else{
             toast.error("SignUp failed");
          console.log(data);
          setloading(false);

          }

    }
    catch(e){
      toast.error(`Error occured ${e}`);
      console.log(e);

    }

  }
    
  return (
    <div className='min-h-screen sm:!min-w-screen bg-gradient-to-b from-purple-700 to-yellow-200 flex justify-center items-center'>
       <Toaster position="top-center" reverseOrder={false} />
      <div className='!mx-auto border !p-10 !my-1/2 bg-white/30 backdrop-blur-lg border-white/20 rounded-xl shadow-lg '>
        
        <form onSubmit={handleSubmit} className='!p-2 flex flex-col gap-4'>
          <h2 className='text-center text-xl text-black underline'>Login</h2>
          <div className='flex gap-4 text-xl'>
            <label htmlFor="email" className='block !w-full'>Email: </label>
            <br />
            <input type="email" value={form.email} onChange={handleChange} name="email" id="email" placeholder='Enter email' className='block border bg-white !px-3'/>
          </div>
          <div className='flex gap-2 text-xl'>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={form.password}  onChange={handleChange} id="password" placeholder='Enter password' className='border bg-white !px-3' />
          </div>

          <button type="submit" className=' !w-full !mx-auto bg-blue-600 hover:bg-blue-400 rounded !p-2 text-xl font-bold text-black cursor-pointer hover:scale-105 transition-all duration-150'>
            {loading?"Loading....":"Login"}

          </button>
          <div className='flex justify-center items-center text-xl'>
            <p>Don't have an account <span className='font-bold text-slate-700 '><Link className='hover:!scale-105 hover:!underline' to="/signUp">SignUp</Link></span></p> 
          </div>


        </form>

      </div>
      
    </div>
  )
}

export default Login
