import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotRight() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  // const {logginHandler} = useAuthContext();


  const onForgotPass = async (e) => {
    e.preventDefault();
    console.log("forgot password is called")
    const data = {
      email: email,
    };
    try {
      // const response = await axios.post(
      //   `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,data);
      // console.log("Forgotpass",response);

      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/forgotpassword`,data);
     console.log(response.data);
      if(response.status === 202){
        console.log("mail sent successfully")
         navigate('/login');
     } else {
         console.log("somthing went wrong");
     }
      }catch(err){
     if(err.response.status === 500){
    console.log(err.response)
  
        }else{
        console.log(err);
  }
 }

  }



   return (
     <>
       <div className="md:w-1/2 w-full  flex justify-center md:py-10 bg-gray-800">

          <form
            onSubmit={onForgotPass}
            className=" md:w-[80%] w-full flex flex-col"
          >
            <div className="text-center  my-4 text-white">
              <h1 className="text-[30px] font-bold">Forgot Password</h1>
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-xl text-white my-4" htmlFor="password">
                Enter Your Mail
              </label>
              <input
                type="email"
                className="p-2 fs-4"
                id="password"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="text-center  mb-2">
              <button className="md:my-6 w-50   border bg-[#6b21a8] text-white rounded px-4 py-2   hover:bg-white hover:text-black hover:border-[#6b21a8] hover:font-bold transition-all duration-100">
                Submit
              </button>
            </div>
          </form>
          <div className='z-3 sideImage w-50'></div>
     
      </div> 
    </>
   )
}

export default ForgotRight;