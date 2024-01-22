import React from 'react'

function MailRight({emailData}) {
  return (
    <>
    <div className='md:w-1/2 w-full'>
    <h1 className='bg-gray-200 text-center mt-5'>Full Details Of Email</h1>
    <div className='border m-1 p-2'><span className='font-bold'>Sender :</span><span>  </span> {emailData.sender}</div>
    <div className='border m-1 p-2'><span className='font-bold'>Subject  :</span><span>  </span> {emailData.subject}</div>
    <h3 className='font-bold m-1 p-2'>Message : </h3>
    <div className='min-h-[300px] border p-5 mt-5 ' >{emailData.text}</div>
    </div>
    
    </>
  )
}

export default MailRight