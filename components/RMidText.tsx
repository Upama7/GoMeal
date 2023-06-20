import React from "react";

function RMidText() {
  return (
    <>
      <div className="space-y-4">
        <h4 className="opacity-50 ">Your Address</h4>

        {/* location and button */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div>
              <img className="" src="./Assets/Vector (10).png" alt="" />
            </div>
            <h3 className="font-bold ">Elm Street, 23</h3>
          </div>
          <button className="rounded-lg border-[1px] border-amber-400 text-amber-400 px-6 py-1.5 text-sm hover:bg-amber-400 hover:text-white">
            Change
          </button>
        </div>

        {/* text */}
        <p className=" text-sm opacity-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>

        {/* below button */}
        <div className="space-x-4 ">
          <button className="rounded-lg border-[1px] border-black/50 px-6 py-1.5 text-sm hover:bg-amber-400 hover:border-none hover:text-white">
            Add Details
          </button>
          <button className="rounded-lg border-[1px] border-black/50 px-6 py-1.5 text-sm  hover:bg-amber-400 hover:border-none hover:text-white">
            Add Note
          </button>
        </div>
      </div>
    </>
  );
}

export default RMidText;
