import React from "react";

//circle design in banner
function BannerCircle() {
  return (
    <>
      <picture className="slide">
        <img
          className="absolute  top-0 right-44 z-10  "
          src="./Assets/ellipse.png"
          alt="circle"
        />
        <img
          className="absolute  bottom-0 right-0 z-10 "
          src="./Assets/ellipse (1).png"
          alt="circle"
        />
        <img
          className="absolute  bottom-0 left-0 z-10"
          src="./Assets/ellipse (2).png"
          alt="circle"
        />
      </picture>
    </>
  );
}

export default BannerCircle;
