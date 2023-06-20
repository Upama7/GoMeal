import React from "react";
import Logo from "./Logo";
import Down from "./Down";
import Navbar from "./Navbar";

//left div
function LeftDiv() {
  return (
    <>
      <div className="flex flex-col  basis-[18%] space-y-10 p-4 bg-white items-center">
        <Logo />
        <Navbar />
        <Down />
      </div>
    </>
  );
}

export default LeftDiv;
