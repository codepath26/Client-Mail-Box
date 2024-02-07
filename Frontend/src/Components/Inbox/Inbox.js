import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteMail, fetchInbox } from "../../Store/EmailSlice";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../Navigation/NavigationBar";

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
    const from = "inbox"
    // dispatch(setReadMail(email.id));
    navigate(`/maildetails/${from}/${email._id}`);
  };
  const removeMail = (id)=>{
    console.log("removeMailis Called with id" , id);
    dispatch(deleteMail(id));
  }
  return (
    <>
       <NavigationBar />
      <div className="">
        <div className=" p-2">
          <ul className="flex flex-col flex-wrap " >
            {inboxMails.map((email) => {
              console.log(email._id , "this is the email")
              return (
                <div
                  key={email._id}
                  onClick={() => getDetails(email)}
                  className="text-black border border-gray-200 hover:shadow-lg hover:border-gray-300 rounded  cursor-pointer   p-1 flex justify-between align-center flex-wrap"
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
                    removeMail(email._id)
                    }} className="bg-red-600 py-1 px-4   text-white rounded me-5">
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
