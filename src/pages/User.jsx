import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const User = () => {
  const navigate = useNavigate();
  /// USE STATE
  const [info, setInfo] = useState([
    {
      _id: "1",
      username: "Emtayes Anwar Avash",
      email: "emtayesanwaravash@gmail.com",
      createdAt: "2026-11-15 05:03:00"
    }
  ])

  useEffect(()=>{
    axios.get("http://localhost:3000/api/auth/users", {withCredentials: true})
    .then((res)=>{
      setInfo(res.data.users);
    })
    .catch((err)=>{
      alert(err.response?.data?.message || "Getting errors while fatching data from Users")
      navigate("/login")
    })
  },[])

  return (
    <div className='flex justify-center mt-5'>
        <div className='bg-white h-fit p-5 rounded-2xl shadow-xl'>

          {info.map((details)=>(
            <div key={details._id}>
              {/* <h3 className='font-bold'>ID no: {details._id}</h3> */}
              <h1><b>Name:</b> {details.username}</h1>
              <h2><b>Email:</b> {details.email}</h2>
              <h2><b>Created at:</b> {details.createdAt}</h2>
              <br></br>
            </div>
          ))}

        </div>
    </div>
  )
}

export default User