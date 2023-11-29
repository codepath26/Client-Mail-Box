import React from "react";
import { useEffect, useState } from "react";
import "./signupRight.css";
import sendRequest from "./SingupHandler";
import { useNavigate } from "react-router-dom";
function SignupRight() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rePassword , setRePassword] = useState('');
  const [msg , setMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const animation = () => {
      const signUpForm = document.getElementById("signup-form");
      const signUpImage = document.getElementById("signup-image");
      if (signUpForm && signUpImage) {
        signUpForm.classList.add("fade-out");
        signUpImage.classList.add("fade-in");
      }
    };
    animation();
  });
  const onSubmitHandler = async(e) => {
    e.preventDefault();
    const user = {
      name : name,
      email: email,
      password: password,
      rePassword : rePassword,
    };
    if(user.password !== user.rePassword){
      setMsg("Please Check Password");
    }else{
      try{
        await sendRequest(user);
        setMsg("User Created Successfull");
        setName('');
        setEmail('');
        setPassword('');
        setRePassword('');
        navigate('/login');
      }catch(err){
        console.log(err);
        setMsg(err.message);
      } 
    }
    setTimeout(() => {
      setMsg('')
    }, 3000); 
  };

  return (
    <>
      <div
        className="w-50 h-100   d-flex justify-content-center align-items-center"
        id="signup-form"
      >
        <form
          onSubmit={onSubmitHandler}
          className="w-75 h-75  m-auto p-3 rounded position-relative"
        >
          <div className="mb-4">
            <h2 className="text-primary">Create Your New Account</h2>
          </div>
          <div className="d-flex input-field mb-4">
            <i className="fa-solid fa-user my-auto"></i>
            <input type="text" className="input" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="d-flex input-field mb-4">
            <i className="fa-solid fa-envelope my-auto"></i>
            <input type="text" className="input" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="d-flex input-field mb-4">
            <i className="fa-solid fa-unlock my-auto"></i>
            <input type="text" className="input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className="d-flex input-field mb-4">
            <i className="fa-solid fa-lock my-auto"></i>
            <input
              type="text"
              className="input"
              placeholder="Repeat your password"
              value={rePassword}
              onChange={(e)=>setRePassword(e.target.value)}
            />
          </div>
          <div className="ps-2 text-danger">{msg}</div>
          <div className="text-center mt-5">
            <button className="btn btn-primary mt-4 w-50 border fw-bold p-3">
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupRight;
