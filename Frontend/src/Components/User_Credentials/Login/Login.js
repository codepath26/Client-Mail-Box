import LoginLeft from "./Login_Left";
import "./Signup.css";

import LoginRight from "./Login_Right";

function Login(props) {
  return (
    <>
      <div className="w-screen h-screen  md:overflow-hidden flex  md:flex-row  flex-col justify-between">
        <LoginLeft />
        <LoginRight />
      </div>
    </>
  );
}
  

export default Login;

