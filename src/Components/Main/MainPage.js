import React from "react";

import { Badge, Button, Container } from "react-bootstrap";
import MyTextEditor from "./MyTextEditor";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../Store/Auth";


function MainPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const unreadMessage = useSelector(state =>state.emails.unReadEmails);
  // console.log(unreadMessage)
  const inboxHandler = ()=>{
    navigate('/inbox');
  }
  const logoutHandler = ()=>{
    navigate('/login');
    console.log("at the  logout handler")
    dispatch(authAction.logout());
  }
  const sentHandler = ()=>{
    navigate('/sent');
    console.log("at sendHandler")
   
  }
  return (
    <Container className="border border-danger mt-5">
      <nav className="w-100 border d-flex justify-content-between p-2 aling-items-center">
        <div className="d-inline-block">
        <span className="fw-bold">Welcome To The Mail Box</span>
        </div>
        <div className="d-inline-block float-right">
        <Button onClick={logoutHandler} size="sm" variant="danger" className="mx-1">logout</Button>
        <Button onClick={inboxHandler} size="sm" variant="primary" className="mx-1">inbox <Badge bg="secondary">{unreadMessage}</Badge></Button>
        <Button onClick={sentHandler} size="sm" variant="success" className="mx-1">sent</Button>
        </div>
      </nav>
      <div className="border border-danger mt-4 p-2">
        <MyTextEditor />
      </div>
    </Container>
  );
}

export default MainPage;
