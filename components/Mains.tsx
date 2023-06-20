import React from "react";
import LeftDiv from "./LeftDiv";
import MidDiv from "./MidDiv";
import RightDiv from "./RightDiv";

//it contains all div left mid and right
function Mains() {
  return (
    <>
      <div className="flex ">
        <LeftDiv />
        <MidDiv />
        <RightDiv />
      </div>
    </>
  );
}

export default Mains;
