import React, { useEffect } from 'react'
import axios from "axios";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuthContext } from '../../Context/AuthContext';
import './Forgotpass.css'
function ForgotPassModal() {
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // const {logginHandler} = useAuthContext();
  useEffect(()=>{
    const reset = document.getElementById('reset');
    reset.classList.add('reset');
  })

  const onForgotPass = async (e) => {
    e.preventDefault();
    let email = localStorage.getItem('email');
    console.log(email)
    console.log("forgot password is called")
    const data = {
      requestType: "PASSWORD_RESET",
      email: email,
    };
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,data);
      console.log("Forgotpass",response);
      // logginHandler(response.data.refreshToken);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="w-100 vh-100  d-flex justify-content-center align-items-center bg-dark bg-opacity-50 z-2">
        <div className="w-50 h-50 border  d-flex  jusity-content-between" id='reset'>
          <form
            onSubmit={onForgotPass}
            className=" w-50  bg-white z-3 p-1 position-relative d-flex flex-column"
          >
            <div className="text-center  my-2">
              <h1>Forgot Password</h1>
            </div>
            <div className="d-flex flex-column  mb-2">
              <label className="fs-3  mt-4" htmlFor="password">
                New Password
              </label>
              <input
                type="password"
                className="p-2 fs-4"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center  mb-2">
              <button className="btn btn-primary mt-4 w-50 border  p-3">
                Submit
              </button>
            </div>
          </form>
          <div className='z-3 sideImage w-50'></div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassModal;
