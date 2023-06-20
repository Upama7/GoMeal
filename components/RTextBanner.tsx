import React from "react";

function RTextBanner() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">Your Balance</h2>

        {/* banner below your balance text */}
        <div className="relative flex gap-8 justify-center items-center  bg-amber-400 rounded-2xl  py-8 overflow-hidden">
          {/* left side of banner */}

          <div className=" z-20 rounded-2xl bg-white p-6">
            <p className="text-sm">Balance</p>
            <h1 className="text-3xl font-bold ">$12.000</h1>
          </div>

          {/* side two div */}

          <div className="flex gap-6">
            <div className="flex flex-col ">
              <div className="bg-white rounded-xl p-2.5 mb-6">
                <img className="" src="./Assets/Income.png" alt="" />
              </div>
              <p className="text-sm text-white">Top Up</p>
            </div>
            <div className="flex flex-col">
              <div className="bg-white rounded-xl p-2.5 mb-6">
                <img className="" src="./Assets/Profit.png" alt="" />
              </div>
              <p className="text-sm text-white">Transfer</p>
            </div>
          </div>

          {/* circle */}
          <img
            className="absolute left-0 "
            src="./Assets/ellipse (3).png"
            alt=""
          />
          <img
            className="absolute left-0 bottom-0"
            src="./Assets/ellipse (4).png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default RTextBanner;
