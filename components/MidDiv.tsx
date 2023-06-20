import React from "react";
import MTop from "./MTop";
import Mbanner from "./Mbanner";
import Category from "./Category";
import Popular from "./Popular";
import Reccent from "./Reccent";

//mid div
function MidDiv() {
  return (
    <div className="basis-[59%] bg-gray p-6 space-y-10 ">
      <MTop />
      <Mbanner />
      <Category />
      <Popular />
      <Reccent />
    </div>
  );
}

export default MidDiv;
