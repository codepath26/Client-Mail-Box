import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MailRight from './MailRight';
import TopBack from '../TopBack';
import LeftImage from '../LeftImage';

function SingleMail() {
  const {id , from} = useParams();
  console.log("from the params id is " , id );
  const [emailData , setEmailData] = useState({});
  console.log("this is the email data" , emailData)

  useEffect(()=>{
    const getSingleMail = async(id,from)=>{
      try{
        // const response = await axios.get(`${process.env.REACT_APP_FIREBASE_URL}email/${id}.json`)
        const response = await axios.get(`http://localhost:5000/user/${from}/details/${id}`);
        console.log(response.data , "this is useeffect check the read statement");
         setEmailData( response.data);
        }catch(err){
          console.log(err);
      }
      
    }
    getSingleMail(id , from);
    
  },[id ,from])
  // console.log(emailData , "this is email details")
  return (
    <>
    <div className='h-screen w-screeen md:overflow-hidden overflow-auto'>
      <TopBack name='Mail Details'/>
      <div className='flex h-full border border-red-900'>
      <LeftImage uri="/assets/Images/email.jpg"/>
      <MailRight emailData={emailData}/>
      </div>
    </div>
    
   </>
  )
}

export default SingleMail