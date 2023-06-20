import React from "react";
import ROrderList from "./ROrderList";

//right order menu
function ROrder() {
  return (
    <>
      <div className="space-y-8 pb-8">
        <h2 className="font-bold text-3xl ">Order Menu</h2>
        <ROrderList />
      </div>
    </>
  );
}

export default ROrder;
