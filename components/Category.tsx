import React from "react";
import CategoryList from "./CategoryList";

//mid catogery section
function Category() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Category</h2>
        <button className="flex items-center gap-4">
          <p className="text-amber-400">View all</p>
          <div>
            <img src="./Assets/Vector (12).png" alt="" />
          </div>
        </button>
      </div>
      <CategoryList />
    </>
  );
}

export default Category;
