import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from "axios";
import { Navigate } from 'react-router-dom';

import Signup from './pages/Signup'
import Otp from './pages/Otp'
import ForgetPassword from './pages/ForgetPassword'
import Login from './pages/Login'
import User from './pages/User'
import { useState, useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/api/auth/me", {withCredentials : true})
    .then(()=>{setLoggedIn(true)})
    .catch((err)=>{
      err.response?.data?.message || "user unverify",
      setLoggedIn(false)
    })
    .finally(()=>{setLoading(false)})
  }, []);

  if(loading) return <h1>Loading...</h1>

  return loggedIn ? children : <Navigate to="/login" replace/>
}
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<h1>404 Page Not Found</h1>}/>
        <Route path='/' element={<Navigate to='/user' replace/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/otp' element={<Otp/>}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user' element={
          <ProtectedRoute>
            <User/>
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App