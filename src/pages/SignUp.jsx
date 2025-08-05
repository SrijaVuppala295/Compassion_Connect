import React from 'react'
import { useState } from 'react'

const SignUp = () => {
    
    const [form, setform] = useState({name:'',email:'',password:'',confirmPassword:'',role:'',picture:''})
    const [err,serErr] = useState('');
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState(false);

    const handleChange = (e)=>{
        e.preventDefault();
        setform({...form,[e.target.name]:e.target.value});
    }
    const handleSubmit =()=>{

    }
  return (
    <div className=' w-1/2 !mx-auto !my-10 border !p-10 '>
        <form onSubmit={handleSubmit} className='space-y-2 text-xl'>
            <h2 className='text-2xl text-center'>Sign-Up Form</h2>
            {err && <p className='text-red-500'>{err}</p>}

            <div className='flex gap-4 !my-5 text-xl'>
                <label htmlFor="name">Enter Name :</label>
                <input type="text" name="name" id="name" placeholder='Enter your full name' value={form.name} onChange={handleChange} className='bg-white text-black p-5 border-2 focus:border-amber-400 ' />
            </div>
            <div className='flex gap-4 !my-5 text-xl'>
                <label htmlFor="email">Enter Email</label>
                <input type="email" name="email" id="email" placeholder='Enter your email' value={form.email} onChange={handleChange} className='bg-white text-black p-5 border-2 focus:border-amber-400 ' />
            </div>
            <div className='flex gap-4 !my-5 text-xl'>
                <label htmlFor="password">Enter Password</label>
                <input type="password" name="password" id="password" placeholder='Enter your password' value={form.password} onChange={handleChange}  className='bg-white text-black p-5 border-2 focus:border-amber-400 '/>
            </div>
            <div className='flex gap-4 !my-5 text-xl'>
                <label htmlFor="confirmPassword">Enter Confirm Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Enter your confirm password' value={form.confirmPassword} onChange={handleChange} className='bg-white text-black p-5 border-2 focus:border-amber-400 ' />
            </div>
            <div className='flex gap-4 !my-5 text-xl'>
                <label htmlFor="role">Enter Your Role</label>
                <select name="role" id="role" onChange={handleChange} value={form.role} >Role
                <option value="Doner">Doner</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Fundraiser">Fundraiser</option>
                <option value="Admin">Admin</option>
                </select>
            </div>
            <div className="flex gap-4 my-5 text-xl">
          <label htmlFor="picture">Upload Picture:</label>
          <input
            type="file"
            name="picture"
            id="picture"
            accept="image/*"
            value={form.picture}
            onChange={handleChange}
            className="bg-white text-black p-2 border-2 focus:border-amber-400"
          />
        </div>
         <button
          type="submit"
          disabled={loading}
          className="!block !mx-auto !p-3 !my-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
        
        </form>
      
    </div>
  )
}

export default SignUp
