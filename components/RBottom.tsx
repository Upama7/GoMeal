import React from "react";
import RCoupon from "./RCoupon";
import RTotal from "./RTotal";

function RBottom() {
  return (
    <>
      <div className="space-y-8">
        <RTotal />
        <RCoupon />
      </div>
    </>
  );
}

export default RBottom;
