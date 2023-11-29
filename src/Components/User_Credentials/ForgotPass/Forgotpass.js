import React from 'react'
import { createPortal } from 'react-dom'
import ForgotpassModal from '../../Overlays/ForgotPassModal'

function ForgotPass(props) {

  const portalElement = document.getElementById('overlays');
  return (
    <>

     {
      createPortal(<ForgotpassModal onclose={props.onClose}/>,portalElement)
     } 
    </>
  )
}

export default ForgotPass;
