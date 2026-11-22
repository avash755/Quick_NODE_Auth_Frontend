import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate(); /// storing on a variable 

  /// Stop reloading the page. 
  const submitHandler = (e) =>{
    e.preventDefault();

    axios.post("http://localhost:3000/api/auth/signup", {username, email, password}, {withCredentials: true})
    .then(()=>{
      navigate("/otp");
    })
    .catch((err)=>{
      alert(err.message || "Signup Error");
    })
  }

  ////// USE STATES 
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  ////// Change the page button

  const Login = () =>{
    navigate("/login")
  }

  return (
    <div className='w-screen h-screen bg-blue-400 flex justify-center items-center'>
        <form className='h-120 w-100 bg-amber-50 flex py-25 items-center flex-col border-2 rounded-[50px]' onSubmit={(e)=>{submitHandler(e)}}>
            <div className='flex flex-col gap-3'>
              <div className='flex justify-between gap-3'>
                <h2 className='font-bold'>Username:</h2>
                <input className='border-3 rounded-md pl-3 bg-blue-400' type="text" required placeholder='enter your username' onChange={(e)=>{setUserName(e.target.value)}}/>
              </div>
              <div className='flex justify-between gap-3'>
                <h2 className='font-bold'>Email:</h2>
                <input className='border-3 rounded-md pl-3 bg-blue-400' type="email" required placeholder='enter your email' onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div className='flex justify-between gap-3'>
                <h2 className='font-bold'>Password:</h2>
                <input className='border-3 rounded-md pl-3 bg-blue-400' type="text" required placeholder='enter your password' onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
            </div>

            <button className='bg-blue-400 mt-15 active:bg-blue-500 w-1/2 h-1/5 rounded-2xl border-3' type='submit'>
              <h3 className='font-bold text-amber-50'>SignUp</h3>
            </button>
            <button className='bg-[#154162] mt-1 active:bg-blue-400 w-1/3 h-1/8 rounded-2xl border-3' type='button' onClick={Login}>
              <h3 className='font-bold text-amber-50'>LogIn</h3>
            </button>
        </form>
    </div>
  )
}

export default Signup
