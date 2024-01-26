import React from "react";
import { useEffect, useState } from "react";
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
        console.log(err , "this is the data i got");
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
        className="w-full md:w-1/2 flex justify-center"
        id="signup-form"
      >
        <form
          onSubmit={onSubmitHandler}
          className="w-full md:p-0 ps-4 md:w-[80%] h-full flex flex-col"
        >
          <div className="md:my-10 my-4   text-[#6b21a8] text-[30px] text-center py-4 font-bold">
            <h2>Create Your New Account</h2>
          </div>
          <div className="border border-gray-600  md:w-full w-[95%] my-4 flex ps-2 h-16">
            <i className="fa-solid fa-user my-auto text-xl"></i>
            <input type="text" className="w-[98%] border-none ps-2 h-full focus:outline-none" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="border border-gray-600  my-4  md:w-full w-[95%] flex ps-2 h-16">
            <i className="fa-solid fa-envelope my-auto text-xl"></i>
            <input type="text" className="w-[98%] border-none ps-2 h-full focus:outline-none" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="border border-gray-600  my-4 md:w-full w-[95%] flex ps-2 h-16">
            <i className="fa-solid fa-unlock my-auto text-xl"></i>
            <input type="text" className="w-[98%] border-none ps-2 h-full focus:outline-none" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className="border border-gray-600  my-4 md:w-full w-[95%] flex ps-2 h-16">
            <i className="fa-solid fa-lock my-auto text-xl"></i>
            <input
              type="text"
              className="w-[98%] border-none ps-2 h-full focus:outline-none"
              placeholder="Repeat your password"
              value={rePassword}
              onChange={(e)=>setRePassword(e.target.value)}
            />
          </div>
          <div className="ps-2 text-red-500">{msg}</div>
          <div className="text-center mt-5">
            <button className=" my-4 md:my-6 w-50 border bg-[#6b21a8] text-white rounded px-4 py-2   hover:bg-white hover:text-black hover:border-[#6b21a8] hover:font-bold transition-all duration-100">
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupRight;
