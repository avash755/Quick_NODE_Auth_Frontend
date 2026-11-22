import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate() // help to redirect the page

  /// USE STATE

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const submitHandler = (e) =>{
    e.preventDefault();

    axios.post("http://localhost:3000/api/auth/login", {username, email, password}, {withCredentials: true})
    .then(()=>{navigate("/user")})
    .catch((err)=>{
      alert(err.response?.data?.message || "login error")
    })
  }

  /// page change:
  const Signup = () =>{
    navigate("/signup")
  }
  const forgetPassword = () =>{
    navigate("/forget-password")
  }

  return (
    <div className='w-screen h-screen bg-blue-400 flex justify-center items-center'>
        <form className='h-120 w-100 bg-amber-50 flex py-25 items-center flex-col border-2 rounded-[50px]' onSubmit={(e)=>{submitHandler(e)}}>
            <div className='flex flex-col gap-3'>
              <div className='flex justify-between gap-3'>
                <h2 className='font-bold'>Username/Email:</h2>
                <input className='border-3 rounded-md pl-3 bg-blue-400' type="text" required placeholder='enter username/email' onChange={(e)=>{setUsername(e.target.value)}}/>
              </div>
              <div className='flex justify-between gap-3'>
                <h2 className='font-bold'>Password:</h2>
                <input className='border-3 rounded-md pl-3 bg-blue-400' type="text" required placeholder='enter your password' onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
            </div>

            <button className='bg-blue-400 mt-15 active:bg-blue-500 w-1/2 h-1/5 rounded-2xl border-3'>
              <h3 className='font-bold text-amber-50'>LogIn</h3>
            </button>
            <button type='button' className='bg-[#154162] mt-1 active:bg-blue-400 w-1/3 h-1/8 rounded-2xl border-3' onClick={Signup}>
              <h3 className='font-bold text-amber-50'>SignUp</h3>
            </button>
            <div className='font-bold absolute bottom-30'>
                <button type='button' onClick={forgetPassword}>Change-Password</button>
            </div>
        </form>
    </div>
  )
}

export default Login