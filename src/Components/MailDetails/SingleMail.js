import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleMail() {
  const {id} = useParams();
  const [emailData , setEmailData] = useState({  });

  useEffect(()=>{
    const getSingleMail = async(id)=>{
      try{
        const response = await axios.get(`${process.env.REACT_APP_FIREBASE_URL}email/${id}.json`)
        console.log(response.data , "this is useeffect check the read statement");
         setEmailData( response.data);
        }catch(err){
          console.log(err);
      }
      
    }
    getSingleMail(id);
    
  },[id])
  // console.log(emailData , "this is email details")
  return (
    <>
    {console.log(emailData.sender , "email data")}
    <h1>Full Details Of Email</h1>
    <span>Sender :{emailData.sender}</span>
    <div>Subject : {emailData.subject}</div>
    <div>Message: {emailData.text}</div>
    </>
  )
}

export default SingleMail