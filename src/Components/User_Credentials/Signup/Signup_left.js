import React from 'react'
import { Link } from 'react-router-dom'

function SignupLeft() {
  return (
    <>
        <div className="w-50 p-4 border-end shadow" id="signup-image">
          <div className=" position-relative m-4">
            <img
              src={process.env.PUBLIC_URL + "/assets/Images/bg02.png"}
              alt="singup"
              className="img-fluid"
            />
            <div className="position-absolute bottom-0 start-50 translate-middle-x fw-lighter d-block ">
              <p>Already Have an account?<Link to='/login' className="fw-bold "> Login</Link></p>
            </div>
          </div>
          
        </div>
    </>
  )
}

export default SignupLeft
