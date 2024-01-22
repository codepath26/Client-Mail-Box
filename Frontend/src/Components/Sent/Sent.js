import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { fetchMail } from '../../Store/EmailSlice';
import { useNavigate } from 'react-router-dom';

function Sent() {
  const emails = useSelector(state=>state.emails);
  const inboxMails = emails.emails;
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  useEffect(()=>{
    const userEmail = localStorage.getItem('userEmail');  
    dispatch(fetchMail(userEmail));
  },[dispatch]);
  const getDetails = (id)=>{
    console.log( "this is the id",id);
   navigate(`/maildetails/${id.id}`);
  }
  return (
  <>
    <div className="h-screen w-screen">
    <div className="border flex justify-between p-2">
          <h1 className="text-[#6b21a8] text-[30px] text-center  relative w-[100%]">Welcome To Your MailBox</h1>
          <button className="absolute right-10 top-5 bg-[#6b21a8] text-white px-4 py-1 border-none rounded" onClick={() => navigate("/main")}>
           Compose
          </button>
        </div>

        <div className="p-10">
          <ul >
            {inboxMails.map((email) => {
              return (
                <div
                  key={email.id}
                  onClick={() => getDetails(email)}
                  className="text-black border border-blue-600 rounded  cursor-pointer  mt-2 p-1 flex justify-between align-center"
                >
                  <div>
                    {email.readMail ? (
                      ""
                    ) : (
                      <span className="ms-1 me-5 relative">
                        <span className="absolute top-[8px] start-[1px] p-1 bg-red-700 border border-none rounded-full"></span>
                      </span>
                    )}
                    <span className="me-2">Sender : {email.sender}</span>
                    <span>Subject : {email.subject}</span>{" "}
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
</div>
  </>
  )
}


export default Sent;