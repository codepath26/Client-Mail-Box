import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
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
  const handleSendClick = async()=>{
    const text = emailRef.current.value;
    console.log(text);
    const newText = text.replace(/<\/?p>/g, "");
    console.log(newText);
    try{
      const response = await axios.post(`${process.env.REACT_APP_FIREBASE_URL}email.json` ,{
        recipient : email,
        subject : subject,
        text: text,
        sender: userEmail ,
        blueTick: true,
      });
      setEmail('');
      setSubject('');
      emailRef.current.value= '';
      console.log(response)

    }catch(err){
      console.log(err)
    }

  }
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com"
          value={email} onChange={(e)=>{setEmail(e.target.value)}}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Subject</Form.Label>
          <Form.Control
          type="text"
          placeholder="subject"
          value={subject} onChange={(e)=>{setSubject(e.target.value)}}
          />
        </Form.Group>
        <ReactQuill
        // value={text}
        // onChange={handleText}
        modules={MyTextEditor.modules}
        ref={emailRef}

  
        
      />
      <Button variant="outline-info mt-2" onClick={handleSendClick}>
        Send
      </Button>

      </Form>
    </>
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
