import React from "react";
import RTop from "./RTop";
import RTextBanner from "./RTextBanner";
import RMidText from "./RMidText";
import ROrder from "./ROrder";
import RBottom from "./RBottom";

//right div
function RightDiv() {
  return (
    <>
      <div className="basis-[23%]  bg-white p-6 py-10 space-y-6">
        <RTop />
        <RTextBanner />
        <RMidText />
        <ROrder />
        <hr />
        <RBottom />
      </div>
    </>
  );
}

export default RightDiv;
