import React from 'react'
function ForgotLeft() {
return (
      <>
          <div className="md:w-1/2 md:border   md:border-gray-100   p-4 w-full  shadow" id="signup-image"> 
          <div className='h-full mb-3'>
              <img
                src={process.env.PUBLIC_URL + "/assets/Images/forgot.jpg"}
                alt="singup"
                className="w-full h-full object-cover"
              />
              </div>
          </div>
      </>
    )
  }
  

export default ForgotLeft;