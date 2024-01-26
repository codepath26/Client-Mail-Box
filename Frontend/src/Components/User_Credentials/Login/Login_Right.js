import React from "react";
import { useEffect, useState } from "react";
import './LoginRight.css';
import sendRequest from "./LoginHandler";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../../../Store/Auth";
// import { useAuthContext } from "../../../Context/AuthContext";



function LoginRight() {

const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg , setMsg] = useState('');
  const navigate = useNavigate();
  // const {  logginHandler  , onUserLogin} = useAuthContext();



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
  },[]);
  const onSubmitHandler = async(e) => {
    e.preventDefault();
    // console.log('submit handler is called')
    localStorage.setItem("userEmail", email);
    const user = {
      email: email,
      password: password,
    };
      try{
        // console.log("loging handler")
        const data = await sendRequest(user);
        //  logginHandler(data.idToken)
        // console.log( 'this is the data from the login',data);
         dispatch(authAction.login({token : data.idToken}));
        setMsg("Login...");
        setEmail('');
        setPassword('');
        navigate('/inbox');
      }catch(err){
        // console.log(err);
        setMsg(err.message);
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
            <h2>Login With Your Accoun</h2>
          </div>
          <div className="border border-gray-600 my-4 md:w-full w-[95%] flex ps-2 h-16">
            <i className="fa-solid fa-envelope my-auto text-xl"></i>
            <input type="text" className="w-[98%] border-none ps-2 h-full focus:outline-none" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="border  border-gray-600 my-4 md:w-full w-[95%] flex ps-2 h-16">
            <i className="fa-solid fa-unlock my-auto text-xl"></i>
            <input type="text" className="w-[98%] border-none ps-2 h-full focus:outline-none" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className="ps-2 text-red-500">{msg}</div>
          <div className="text-center mt-5">
            <button className=" my-4 md:my-6 w-50 border bg-[#6b21a8] text-white rounded px-4 py-2   hover:bg-white hover:text-black hover:border-[#6b21a8] hover:font-bold transition-all duration-100">
            Login
            </button>
          <div className="m-4">
            <Link className="md:my-6 w-50   border bg-[#6b21a8] text-white rounded px-4 py-2   hover:bg-white hover:text-black hover:border-[#6b21a8] hover:font-bold transition-all duration-100"  to='/resetpassword'>Forgot Password</Link>
            
          </div>
          </div>
        </form>
      </div>
    </>
  );
}



export default LoginRight;
