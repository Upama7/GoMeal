import React from "react";
import RtopSideImage from "./RtopSideImage";

//right div top section
function RTop() {
  return (
    <>
      <div className="flex justify-between">
        <RtopSideImage />
        <div>
          <img src="./Assets/placeholder.png" alt="placeholder" />
        </div>
      </div>
    </>
  );
}

export default RTop;
