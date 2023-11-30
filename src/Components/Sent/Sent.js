import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMail } from '../../Store/EmailSlice';
import { useNavigate } from 'react-router-dom';

function Sent() {
  const emails = useSelector(state=>state.emails);
  const inboxMails = emails.emails;
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  useEffect(()=>{
    dispatch(fetchMail());
  },[dispatch]);
  const getDetails = (id)=>{
   navigate(`/maildetails/${id}`);
  }
  return (
  <Container>
    <div className="vh-100">
      <div className="d-flex justify-content-between p-2">
        <span>Welcome To Your MailBox</span>
        <Button variant='primary'>Back</Button>
      </div>
      <div className="border border-danger">
       <ul>
        {
          inboxMails.map((email)=>{
           return <div key={email.id} onClick={()=>getDetails(email.id)} className='text-primary  cursor-pointer border mt-2 p-1 '>
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

export default Sent;