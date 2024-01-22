import React from 'react'
import { Link } from 'react-router-dom';

function LoginLeft() {
return (
    <>
        <div className="md:w-1/2 md:border   md:border-gray-100   p-4 w-full  shadow" id="signup-image"> 
        <div className='h-[80%] mb-3'>
            <img
              src={process.env.PUBLIC_URL + "/assets/Images/bg.png"}
              alt="singup"
              className="w-full h-full object-cover "
            />
            </div>
            <div className="py-2 text-center ">
              <p className='p-2 border hover:shadow-lg transition-all duration-100 hover:bg-gray- cursor-pointer text-[#6b21a8]'>Don't Have an account?<Link to='/signup' className="font-bold">Create</Link></p>
            </div>
        </div>
    </>
  )
}


export default LoginLeft;
