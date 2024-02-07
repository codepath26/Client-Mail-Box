import React from "react";
import MailRight from "./MailRight";
import MainLeft from "./MainLeft";
import NavigationBar from "../Navigation/NavigationBar";

function MainPage() {
  return (
    <>
      <NavigationBar />
      <div className="flex overflow-x-hidden">
        <MainLeft />
        <MailRight />
      </div>
    </>
  );
}

export default MainPage;
