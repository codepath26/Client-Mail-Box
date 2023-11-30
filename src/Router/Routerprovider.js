import React from 'react'
import { Navigate, Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../Components/User_Credentials/Login/Login'
import Signup from '../Components/User_Credentials/Signup/Signup'
import ForgotPass from '../Components/User_Credentials/ForgotPass/Forgotpass'
import Home from '../Components/Main/Home'


function Routerprovider() {
  return (
    <Router>
      <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/resetpassword' element={<ForgotPass/>}/>
      <Route path='/main' element={<Home/>}/>
      <Route path='*' element={<Navigate to='/signup'/>}/>
      </Routes>
    </Router>
  )
}

export default Routerprovider;