import React from "react";

function RTotal() {
  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between">
          <p className="opacity-50 text-sm">Service</p>
          <p className="text-xl">
            +<span className="text-amber-400 ">$</span>1.00
          </p>
        </div>
        <div className="flex justify-between">
          <p className=" text-xl">Total</p>
          <p className="font-bold text-2xl">
            <span className="text-amber-400">$</span>202.00
          </p>
        </div>
      </div>
    </>
  );
}

export default RTotal;
