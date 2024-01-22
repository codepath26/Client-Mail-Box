import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

  function LeftImage({uri}) {
    return (
      <>
        <div
          className="md:block md:w-1/2 hidden   md:border   md:border-gray-100 border-none w-full md:h-full   shadow"
          id="signup-image"
        >
          <div className="h-full">
            <LazyLoadImage
              src={process.env.PUBLIC_URL + `${uri}`}
              alt="email-image"
              effect="black-and-white"
            />
          </div>
        </div>
      </>
    );
  }
  
  
  
export default LeftImage;


