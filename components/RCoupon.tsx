import React from "react";

function RCoupon() {
  return (
    <>
      <div className="border-[1px] rounded-lg p-2 border-amber-400 bg-gray-100">
        <div className="flex items-center justify-evenly">
          <img className="object-contain" src="./Assets/icon.png" alt="" />
          <p>Have a coupon code?</p>
          <img
            className="object-contain"
            src="./Assets/Vector (11).png"
            alt=""
          />
        </div>
      </div>
      <div className="bg-amber-400 rounded-lg text-white text-center p-4 hover:border-[1px] hover:border-amber-400 hover:bg-white hover:text-amber-400">
        <button>Checkout</button>
      </div>
    </>
  );
}

export default RCoupon;
