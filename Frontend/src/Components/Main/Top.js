import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { authAction } from "../../Store/Auth";
function Top() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const unreadMessage = useSelector(state =>state.emails.unReadEmails);
  
  // console.log(unreadMessage)
  
  const inboxHandler = ()=>{
    navigate('/inbox');
  }
  const logoutHandler = ()=>{
    navigate('/login');
    console.log("at the  logout handler")
    dispatch(authAction.logout());
  }
  const sentHandler = ()=>{
    console.log("at senthandler bro")
    navigate('/sent');
    console.log("at sendHandler")
   
  }
  return (
    <nav className="w-screen top-0 left-0 bg-gray-200 fixed flex md:justify-between md:flex-row flex-col items-center gap-1 p-2 aling-center">
    <div className="inline-block  w-[80%] text-center">
    <span className="text-xl font-bold">Welcome To The Mail Box</span>
    </div>
    <div className="md:w-[20%] w-full flex flex-row justify-center md:justify-around gap-3 md:gap-0 flex-wrap">
    <button className='border-none text-white rounded me-2  px-2 py-1 bg-purple-800' onClick={logoutHandler}>logout</button>
    <button className='border-none text-white rounded  me-2 px-2 py-1 bg-purple-800' onClick={inboxHandler} >inbox <span bg="secondary">{unreadMessage}</span></button>
    <button className='border-none text-white rounded me-2  px-2 py-1 bg-purple-800' onClick={sentHandler}>sent</button>
    </div>
  </nav>
  )
}

export default Top