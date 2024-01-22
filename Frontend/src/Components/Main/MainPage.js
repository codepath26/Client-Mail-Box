import React from "react";
import MailRight from "./MailRight";
import MainLeft from "./MainLeft";
import Top from "./Top";

function MainPage() {
  return (
    <>
      <Top />
      <div className="w-screen h-screen flex overflow-hidden">
        <MainLeft />
        <MailRight />
        {/* <MyTextEditor /> */}
      </div>
    </>
  );
}

export default MainPage;
