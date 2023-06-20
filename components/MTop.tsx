import React from "react";

//mid top part
function MTop() {
  return (
    <>
      <div className="flex flex-wrap md:justify-between items-center">
        <h1 className="flex-1  text-2xl xl:text-4xl font-bold">
          Hello, Patricia
        </h1>
        <div className="flex-1 rounded-xl bg-white p-2.5">
          <div className="flex ">
            <label htmlFor="search">
              <img
                className="object-contain px-0.375"
                src="./Assets/magnifier.png"
                alt=""
              />
            </label>

            <input
              className="rounded-r-md w-full opacity-50 text-xm outline-none"
              id="search"
              type="text"
              name="name"
              defaultValue="What do you want to eat today...."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MTop;
