import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ForgetPassword = () => {
  const navigate = useNavigate(); /// to redirect page

  /// USE STATE
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const submitHandler = (e) =>{
    e.preventDefault();

    axios.post("http://localhost:3000/api/auth/forgot-password", {email, otp, newPassword}, {withCredentials : true})
    .then(()=>{navigate("/login")})
    .catch((err)=>{
      alert(err.response?.data?.message || 'Error in change-password :(')
    })
  }

  /// sent otp
  const sentOTP = () =>{
    axios.post("http://localhost:3000/api/auth/sentOTP", {email}, {withCredentials : true})
    .then(()=>{alert("a verification code sent to your email...")})
    .catch((err)=>{
      alert(err.response?.data?.message || "Error in sent OTP")
    })
  }
  return (
    <div className='w-screen h-screen bg-blue-400 flex justify-center items-center'>
        <form className='h-120 w-100 bg-amber-50 flex py-25 items-center flex-col border-2 rounded-[50px]' onSubmit={(e)=>{submitHandler(e)}}>
            
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between gap-3'>
                    <h2 className='font-bold'>Email:</h2>
                    <input className='border-3 rounded-md pl-3 bg-blue-400' type="email" required placeholder='enter your email' onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
              <div className='flex justify-between gap-3'>
                <h2 className='font-bold'>OTP:</h2>
                <input className='border-3 rounded-md pl-3 bg-blue-400' type="text" required placeholder='enter your OTP code' onChange={(e)=>{setOTP(e.target.value)}}/>
              </div>
              
              <div className='flex justify-between gap-3'>
                <h2 className='font-bold'>Password:</h2>
                <input className='border-3 rounded-md pl-3 bg-blue-400' type="text" required placeholder='enter your new-password' onChange={(e)=>{setNewPassword(e.target.value)}}/>
              </div>
            </div>

            <button className='bg-[#154162] mt-15 active:bg-blue-400 w-1/3 h-1/8 rounded-2xl border-3' onClick={sentOTP}>
              <h3 className='font-bold text-amber-50'>send OTP</h3>
            </button>
            <button className='bg-blue-400 mt-1 active:bg-blue-500 w-1/2 h-1/5 rounded-2xl border-3'>
              <h3 className='font-bold text-amber-50'>Change password</h3>
            </button>
            
        </form>
    </div>
  )
}

export default ForgetPassword