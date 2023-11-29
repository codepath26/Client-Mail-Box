import LoginLeft from "./Login_Left";
import "./Signup.css";

import LoginRight from "./Login_Right";

function Login(props) {
  return (
    <>
      <div className="vw-100 vh-100 d-flex">
        <LoginLeft />
        <LoginRight />
      </div>
    </>
  );
}

export default Login;
