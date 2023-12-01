import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchInbox, setReadMail } from '../../Store/EmailSlice';
import { useNavigate } from 'react-router-dom';

function Inbox() {
  const emails = useSelector(state=>state.emails);
  const email = localStorage.getItem('userEmail');
  // console.log("find from the local storage" , email);
  const inboxMails = emails.inboxEmails;
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  useEffect(()=>{
    // console.log("at Inbox useeffect bro")
    // console.log(email)
    dispatch(fetchInbox(email));
  },[email ,dispatch]);
  const getDetails = (email)=>{
    // const reademailsId = localStorage.getItem('readEmails');
    // localStorage.setItem('readEmails' ,[...reademailsId,id]);
   dispatch(setReadMail(email.id));
    navigate(`/maildetails/${email.id}`);
  }
  return (
  <Container>
    <div className="vh-100">
      <div className="d-flex justify-content-between p-2">
        <span>Welcome To Your MailBox</span>
        <Button variant='primary' onClick={()=>navigate("/main")}>Back</Button>
      </div>
      <div className="border border-danger">
       <ul>
        {
          inboxMails.map((email)=>{
           return <div key={email.id} onClick={()=>getDetails(email)} className='text-primary  cursor-pointer border mt-2 p-1 '>
            {email.readMail ? "" : <span className='ms-1 me-2 position-relative '>
            <span class="position-absolute top-50 start-50 translate-middle p-1 bg-danger border border-light rounded-circle"></span></span>}
            <span>Sender : {email.sender || "no sender"}</span>
            <span>Subject : {email.subject}</span>
            </div>
          })
        }
       </ul>
      </div>
    </div>
  </Container>
  )
}

export default Inbox;