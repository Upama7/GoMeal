import React from "react";

//down of leftdiv
function Down() {
  return (
    <>
      <div className="flex flex-col bg-amber-400 relative rounded-2xl w-11/12">
        <div className="p-8 flex flex-col gap-4">
          <p className="text-white font-bold ">
            Upgrade your <br /> Account to Get Free <br /> Voucher
          </p>

          <button className="bg-white text-black rounded-lg w-3/6 py-2.5">
            <p className="text-sm font-bold ">Upgrade</p>
          </button>
        </div>
        <img
          className="absolute top-6 right-4"
          src="./Assets/Vector (8).png"
          alt="dot"
        />
        <img
          className="absolute bottom-0 right-0"
          src="./Assets/Ellipse 5.png"
          alt="circle"
        />
      </div>
    </>
  );
}

export default Down;
