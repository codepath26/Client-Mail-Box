import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { fetchMail } from '../../Store/EmailSlice';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../Navigation/NavigationBar';

function Sent() {
  const emails = useSelector(state=>state.emails);
  const inboxMails = emails.emails;
  // console.log("this is the send mail" , inboxMails)
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  useEffect(()=>{
    const userEmail = localStorage.getItem('userEmail');  
    dispatch(fetchMail(userEmail));
  },[dispatch]);
  const getDetails = (id)=>{
    const from = "sent"
    console.log( "this is the id",id);
   navigate(`/maildetails/${from}/${id}`);
  }
  return (
  <>
   <NavigationBar />
    <div className="p-10">

        <div className="rounded-tl-[20px]  rounded-br-[20px] rounded-bl-md  rounded-tr-md border border-indigo-400">
          <ul className='flex flex-col flex-wrap' >
            {inboxMails.map((email) => {
              // console.log("on sent field" , email._id)
              return (
                <div
                  key={email._id}
                  onClick={() => getDetails(email._id)}
                  className="text-black py-2 mx-2 border border-gray-200 hover:shadow-lg hover:border-gray-300   cursor-pointer"
                >
                  <div>
                    {email.blueTick ? (
                      ""
                    ) : (
                      <span className="ms-1 me-5 relative">
                        <span className="absolute top-[8px] start-[1px] p-1 bg-purple-700 border border-none rounded-full"></span>
                      </span>
                    )}
                    <span className="me-2">Receiver : {email.recipient}</span>
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