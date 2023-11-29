import "./Signup.css";
import SignupLeft from "./Signup_left";
import SignupRight from "./Signup_right";

// import { Link } from "react-router-dom";
function Signup(props) {
  return (
    <>
      <div className="vw-100 vh-100 d-flex">
        <SignupLeft/>
        <SignupRight/>
      </div>
    </>
  );
}

export default Signup;
