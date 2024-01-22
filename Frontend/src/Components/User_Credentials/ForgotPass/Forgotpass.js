import React from 'react'
import ForgotLeft from './Forgot_Left';
import ForgotRight from './Forgot_Right';

function ForgotPass(props) {

    return (
      <>
        <div className="w-screen h-screen  md:overflow-hidden flex  md:flex-row  flex-col justify-between">
          <ForgotLeft />
          <ForgotRight />
        </div>
      </>
    );
  }
    
export default ForgotPass;
