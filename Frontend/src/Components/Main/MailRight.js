import axios from "axios";
import React, { useRef, useState } from "react";


import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

function MyTextEditor() {
  const [email , setEmail] = useState('');
  const emailRef = useRef('');
  const [subject , setSubject] = useState('');
  const userEmail = localStorage.getItem('userEmail');
  console.log(userEmail)
  // const handleText = (text)=>{
  // const newText = text.replace(/<\/?p>/g, "");
  // setText(newText);
  // }
  console.log(process.env.BASE_URL)
  const handleSendClick = async(e)=>{
    e.preventDefault();
    const text = emailRef.current.value;
    console.log(text);
    const newText = text.replace(/<\/?p>/g, "");
    console.log(newText);
    try{
      // const response = await axios.post(`${process.env.REACT_APP_FIREBASE_URL}email.json` ,{
      //   recipient : email,
      //   subject : subject,
      //   readMail : false,
      //   text: newText,
      //   sender: userEmail ,
      //   blueTick: true,
      // });

      const data = {
          recipient : email,
          subject : subject,
          readMail : false,
          text: newText,
          sender: userEmail ,
          blueTick: true,
        }

      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/email` ,data);
      console.log("sent responose" , response)
      setEmail('');
      setSubject('');
      emailRef.current.value= '';
      console.log(response)

    }catch(err){
      console.log(err)
    }

  }
  return (
    <div className=" w-full md:w-1/2 pt-20 px-4 ">
        <h1 className="text-[20px] font-bold text-purple-700 text-center mt-2">Type Your Email</h1>
      <form className="pt-8 md:pt-3 ">
        <div className="mb-5 p-2 flex sm:flex-row flex-col">
          <label htmlFor="email" className="text-[20px]" >To :</label>
          <input type="email" className="focus:outline-none w-[90%] ps-2 " id="email" placeholder="  name@example.com"
          value={email} onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className="mb-5 p-2 border flex sm:flex-row flex-col" >
          <label htmlFor="subject" className="text-[20px]">Subject : </label>
          <input
          type="text"
          id="subject"
          placeholder="Type Your Subject"
          className="focus:outline-none ps-2 w-[80%]"
          value={subject} onChange={(e)=>{setSubject(e.target.value)}}
          />
        </div>
        <div className="h-[200px]">
        <ReactQuill className="h-full"
         theme="snow" // Other themes: 'bubble', 'core', 'snow'
         // value={text}
         // onChange={handleText}
         modules={MyTextEditor.modules}
         ref={emailRef}
         
         />
         </div>
         <div className="text-center">
      <button className="bg-purple-800 rounded my-12 px-4 py-1 text-white " onClick={handleSendClick}>
        Send
      </button>
         </div>

      </form>
    </div>
  );
};
MyTextEditor.modules = {
  toolbar : [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike"],
    [{ background: [] }],
    ["link"],
  ]
};
MyTextEditor.formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "background",
  "link",
];




export default MyTextEditor;