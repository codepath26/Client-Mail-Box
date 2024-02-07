import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink} from "react-router-dom";
import { authAction } from "../../Store/Auth";
function NavigationBar() {
  const dispatch = useDispatch();
  const unreadMessage = useSelector((state) => state.emails.unReadEmails);

  // console.log(unreadMessage)

  const logoutHandler = () => {
    dispatch(authAction.logout());
  };
  return (
    <div className="sticky top-0 bg-white py-3 px-4 border-b shadow-md ">
      <nav className="sm:justify-between items-center  flex px-4 sm:flex-row flex-col ">
        <div className="sm:w-[50%]">
          <h1 className="font-bold text-xl"><NavLink to="/main">  Welcome To The Mail Box </NavLink></h1>
        </div>
        <div className="gap-5 flex flex-wrap sm:mt-0 mt-5 sm:justify-between">
          <NavLink to="/main" className={ `${({isActive})=>{console.log(isActive ); return isActive ? "bg-red-900" : ''}}  hover:border-b hover:border-red-500 transition-all duration-200 hover:scale-105 text-lg font-normal`} onClick={logoutHandler}>
            Compose
          </NavLink>
          <NavLink to="/login" className={`${({isActive})=>{console.log(isActive ); return isActive ? "bg-red-900" : ''}} hover:border-b hover:border-red-500 transition-all duration-200 hover:scale-105 text-lg font-normal`} onClick={logoutHandler}>
            logout
          </NavLink>
          <NavLink to="/inbox" className={`${({isActive})=>{console.log(isActive ); return isActive ? "bg-red-900" : ''}}hover:border-b hover:border-red-500 transition-all duration-200 hover:scale-105 text-lg font-normal`}>
            inbox <span bg="secondary">{unreadMessage}</span>
          </NavLink>
          <NavLink to="/sent" className={ ` hover:border-b hover:border-red-500 transition-all duration-200  hover:scale-105 text-lg font-normal ${({isActive})=>{console.log(isActive ); return isActive ? "bg-red-900" : ''}} `}>
            sent
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
