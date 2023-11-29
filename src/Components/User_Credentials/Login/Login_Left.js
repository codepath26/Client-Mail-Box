import React from 'react'
import { Link } from 'react-router-dom';

function LoginLeft() {
  return (
    <>
        <div className="w-50 p-4 border-end shadow" id="signup-image">
          <div className=" position-relative m-4">
            <img
              src={process.env.PUBLIC_URL + "/assets/Images/bg.png"}
              alt="singup"
              className="img-fluid"
            />
            <div className="position-absolute bottom-0 start-50 translate-middle-x fw-lighter d-block  ">
              <p>Don't Have an account?<Link to='/signup' className="fw-normal text-primary fs-5"> Create</Link></p>
            </div>
          </div>
          
        </div>
    </>
  )
}

export default LoginLeft;
