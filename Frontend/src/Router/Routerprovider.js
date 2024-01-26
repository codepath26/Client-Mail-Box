import React from 'react'
import { Navigate, Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../Components/User_Credentials/Login/Login'
import Signup from '../Components/User_Credentials/Signup/Signup'
import ForgotPass from '../Components/User_Credentials/ForgotPass/Forgotpass'
import MainPage from '../Components/Main/MainPage'
import Sent from '../Components/Sent/Sent'
import SingleMail from '../Components/MailDetails/SingleMail'
import Inbox from '../Components/Inbox/Inbox'


function Routerprovider() {
  return (
    <Router>
      <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/resetpassword' element={<ForgotPass/>}/>
      <Route path='/main' element={<MainPage/>}/>
      <Route path='/sent' element={<Sent/>}/>
      <Route path='/inbox' element={<Inbox/>}/>
      <Route path='/maildetails/:from/:id' element={<SingleMail/>}/>
       <Route path='*' element={<Navigate to='/signup'/>}/> 
      </Routes>
    </Router>
  )
}

export default Routerprovider;