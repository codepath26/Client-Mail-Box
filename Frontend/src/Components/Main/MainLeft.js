import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MailLeft() {
  return (
    <>
      <div
        className="md:block md:w-1/2 hidden  md:border   md:border-gray-100 mt-10 w-full  shadow"
        id="signup-image"
      >
        <div className="h-full">
          <LazyLoadImage
            src={process.env.PUBLIC_URL + "/assets/Images/email.jpg"}
            alt="email-image"
            effect="black-and-white"
          />
        </div>
      </div>
    </>
  );
}

export default MailLeft;
