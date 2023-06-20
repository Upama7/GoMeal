import React from "react";
import RecentList from "./RecentList";

// mid recent order
function Reccent() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Recent Order</h2>
        <div className="flex items-center gap-4">
          <p className="text-amber-400">View all</p>
          <div>
            <img src="./Assets/Vector (12).png" alt="" />
          </div>
        </div>
      </div>

      {/* recent order list  */}
      <RecentList />
    </>
  );
}

export default Reccent;
