import "./Signup.css";
import SignupLeft from "./Signup_left";
import SignupRight from "./Signup_right";

// import { Link } from "react-router-dom";
function Signup(props) {
  return (
    <>
      <div className="w-screen h-screen  md:overflow-hidden flex  md:flex-row  flex-col justify-between">
        <SignupLeft/>
        <SignupRight/>
      </div>
    </>
  );
}

export default Signup;
