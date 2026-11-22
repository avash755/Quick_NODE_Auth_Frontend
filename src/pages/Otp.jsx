import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Otp = () => {
  const navigate = useNavigate();
  
  /// USE State
  const [otp, setOtp] = useState("");

  /// handle Submit
  const submitHandler = (e) =>{
    e.preventDefault();

    axios.post("http://localhost:3000/api/auth/verify", {otp}, {withCredentials: true})
    .then(()=>navigate("/login"))
    .catch((err)=>{
      alert(err.response?.data?.message || err.message || "OTP verification failed");
    })
  }
  return (
    <div className='w-screen h-screen bg-blue-400 flex justify-center items-center'>
        <form className='h-120 w-100 bg-amber-50 flex py-25 items-center flex-col border-2 rounded-[50px]' onSubmit={(e)=>{submitHandler(e)}}>
            
            <div className='text-xl font-bold text-center'>
                <p>Use the verification code sent to <br></br> your email address.</p>
                <input className='border-3 rounded-md w-30 text-center mt-3 bg-blue-400' type="text" required placeholder='OTP CODE' onChange={(e)=>{setOtp(e.target.value)}}/>
            </div>

            <button className='bg-blue-400 mt-15 active:bg-blue-500 w-1/2 h-1/5 rounded-2xl border-3' type="submit">
              <h3 className='font-bold text-amber-50'>Submit</h3>
            </button>
            <button className='bg-[#154162] mt-1 active:bg-blue-400 w-1/3 h-1/8 rounded-2xl border-3'>
              <h3 className='font-bold text-amber-50'>send again</h3>
            </button>
        </form>
    </div>
  )
}

export default Otp
