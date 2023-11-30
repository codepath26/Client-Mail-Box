import React from "react";

import { Button, Container } from "react-bootstrap";
import MyTextEditor from "./MyTextEditor";

function MainPage() {
  return (
    <Container className="border border-danger mt-5">
      <nav className="w-100 border d-flex justify-content-between p-2 aling-items-center">
        <div className="d-inline-block">
        <span className="fw-bold">Welcome To The Mail Box</span>
        </div>
        <div className="d-inline-block float-right">
        <Button size="sm" variant="danger" className="mx-1">logout</Button>
        <Button size="sm" variant="primary" className="mx-1">inbox</Button>
        <Button size="sm" variant="success" className="mx-1">sent</Button>
        </div>
      </nav>
      <div className="border border-danger mt-4 p-2">
        <MyTextEditor />
      </div>
    </Container>
  );
}

export default MainPage;
