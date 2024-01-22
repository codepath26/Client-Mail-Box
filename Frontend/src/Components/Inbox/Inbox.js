import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteMail, fetchInbox, setReadMail } from "../../Store/EmailSlice";
import { useNavigate } from "react-router-dom";

function Inbox() {
  const emails = useSelector((state) => state.emails);
  const email = localStorage.getItem("userEmail");
  // console.log("find from the local storage" , email);
  const inboxMails = emails.inboxEmails;
  console.log("inbocmain" , inboxMails)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
   let timer = setInterval(() => {
      dispatch(fetchInbox(email));
    }, 3000);
    return ()=>{
      clearTimeout(timer)
    }
  }, [email, dispatch]);
  const getDetails = (email) => {
    // const reademailsId = localStorage.getItem('readEmails');
    // localStorage.setItem('readEmails' ,[...reademailsId,id]);
    dispatch(setReadMail(email.id));
    navigate(`/maildetails/${email.id}`);
  };
  const removeMail = (id)=>{
    console.log("removeMailis Called with id" , id.id);
    dispatch(deleteMail(id));
  }
  return (
    <>
      <div className="h-screen">
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
                  <div>
                  <button onClick={(e)=>{
                    e.stopPropagation();
                    removeMail(email.id)
                    }} className="btn btn-sm btn-danger float-end me-5">
                    Remove
                  </button>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Inbox;
