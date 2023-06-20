import React from "react";
import BannerCircle from "./BannerCircle";

//mid banner
function Mbanner() {
  return (
    <>
      <div className="relative flex bg-amber-400 text-white rounded-lg md:rounded-2xl justify-between px-8">
        <div className=" xl:py-12 xl:px-4 xl:space-y-4">
          <h1 className=" xl:text-2xl font-bold">
            Get Discount Voucher <br /> Up To 20%
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed
            do eiusmod tempor incididunt.
          </p>
        </div>
        <div className="z-20">
          <img src="./Assets/women.png" alt="" />
        </div>
        <BannerCircle />
      </div>
    </>
  );
}
export default Mbanner;
