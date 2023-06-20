import React from "react";
import PopularList from "./PopularList";

// mid popular dishes
function Popular() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Popular Dishes</h2>
        <button className="flex items-center gap-4">
          <p className="text-amber-400">View all</p>
          <div>
            <img src="./Assets/Vector (12).png" alt="" />
          </div>
        </button>
      </div>

      {/* popular dish list  */}
      <PopularList />
    </>
  );
}

export default Popular;
